#!/usr/bin/env python3
"""
verify.py - checks every deliverable in dist/audio: existence, duration and
bitrate (ffprobe), decoded peak level, loudness, DC offset, NaN, silent holes,
level jumps, loop-seam continuity of the ambience loops and total size.
Exit code 0 only if everything passes.
"""
import json
import os
import subprocess
import sys

import numpy as np

from analyze import load, octave_bands
from synthlib import DIST, SR, TMP, db, lufs, rms_profile

SPEC = {  # name: (min dur, max dur, kbps, kind)
    "music1": (120, 160, 112, "music"), "music2": (120, 160, 112, "music"),
    "music3": (120, 160, 112, "music"), "music4": (120, 160, 112, "music"),
    "amb_day": (45, 60, 80, "amb"), "amb_night": (45, 60, 80, "amb"),
    "amb_rain": (45, 60, 80, "amb"),
    "sfx_water": (1.4, 1.8, 96, "sfx"), "sfx_plant": (0.4, 0.65, 96, "sfx"),
    "sfx_pop": (0.2, 0.36, 96, "sfx"), "sfx_bloom": (1.1, 1.45, 96, "sfx"),
    "sfx_coin": (0.4, 0.65, 96, "sfx"), "sfx_buy": (0.5, 0.75, 96, "sfx"),
    "sfx_click": (0.06, 0.16, 96, "sfx"), "sfx_levelup": (1.8, 2.3, 96, "sfx"),
    "sfx_expand": (2.3, 2.75, 96, "sfx"), "sfx_step": (0.1, 0.2, 96, "sfx"),
    "sfx_error": (0.2, 0.36, 96, "sfx"),
}


def probe(path):
    out = subprocess.run(["ffprobe", "-v", "error", "-show_entries",
                          "format=duration,bit_rate:stream=channels,sample_rate,codec_name",
                          "-of", "json", path], capture_output=True, text=True, check=True).stdout
    j = json.loads(out)
    st = j["streams"][0]
    return (float(j["format"]["duration"]), int(j["format"]["bit_rate"]) / 1000.0,
            st["channels"], int(st["sample_rate"]), st["codec_name"])


def main():
    ok_all = True
    total = 0
    print("%-12s %8s %6s %3s %7s %7s %8s %6s  %s" % (
        "file", "dur(s)", "kbps", "ch", "peak", "LUFS", "size kB", "DC", "notes"))
    for name, (dmin, dmax, kbps, kind) in SPEC.items():
        path = os.path.join(DIST, name + ".mp3")
        if not os.path.exists(path):
            print("%-12s MISSING" % name)
            ok_all = False
            continue
        size = os.path.getsize(path)
        total += size
        dur, br, ch, sr, codec = probe(path)
        x = load(path)                       # decoded mp3, float, stereo
        pk = db(np.max(np.abs(x)))
        dc = float(np.abs(x.mean(axis=0)).max())
        notes, ok = [], True
        ok &= codec == "mp3" and sr == SR
        ok &= dmin <= dur <= dmax
        ok &= abs(br - kbps) < 0.12 * kbps or kind == "sfx"
        ok &= bool(np.all(np.isfinite(x))) and dc < 2e-3
        if kind == "music":
            l = lufs(x)
            prof = rms_profile(x, 1.0)
            quiet = prof < -55
            run = best = 0
            for q in quiet:
                run = run + 1 if q else 0
                best = max(best, run)
            jump = float(np.max(np.diff(prof)))
            ok &= pk <= -1.0 and -18.3 <= l <= -15.9 and best <= 4 and jump < 12
            notes.append("silent<=%ds jump+%.1fdB start %.0fdB end %.0fdB" % (
                best, jump, prof[0], prof[-1]))
        elif kind == "amb":
            l = lufs(x)
            # loop seam: is the step from the last to the first sample ordinary?
            d = np.abs(np.diff(x, axis=0)).max(axis=1)
            seam = float(np.abs(x[0] - x[-1]).max())
            # level continuity around the seam (0.4 s either side) vs. its neighbourhood
            k = int(0.4 * SR)
            r_end = db(np.sqrt(np.mean(x[-k:] ** 2)))
            r_start = db(np.sqrt(np.mean(x[:k] ** 2)))
            r_ref = db(np.sqrt(np.mean(np.concatenate([x[-5 * k:], x[:5 * k]]) ** 2)))
            ok &= pk <= -6.0 and -29.0 <= l <= -27.0
            ok &= seam <= 2 * np.percentile(d, 99.9) and abs(r_end - r_start) < 4 and min(r_end, r_start) > r_ref - 6
            notes.append("seam step %.4f (p99.9 step %.4f) | rms 0.4s end %.1f / start %.1f dB | decoded %d smp"
                         % (seam, np.percentile(d, 99.9), r_end, r_start, len(x)))
            wav = os.path.join(TMP, name + ".wav")
            if os.path.exists(wav):      # decoded mp3 must be sample-aligned with the source loop
                w = load(wav)
                same = len(w) == len(x)
                c0 = np.corrcoef(w[:8192, 0], x[:8192, 0])[0, 1] if same else 0
                c1 = np.corrcoef(w[-8192:, 0], x[-8192:, 0])[0, 1] if same else 0
                ok &= same and c0 > 0.9 and c1 > 0.9
                notes.append("aligned with source: len %s, corr head %.3f tail %.3f" % (same, c0, c1))
        else:
            l = lufs(x)
            ok &= -7.0 <= pk <= -5.0
            edge = max(np.abs(x[:8]).max(), np.abs(x[-8:]).max())
            ok &= edge < 0.01
            notes.append("edges %.4f" % edge)
        ok_all &= bool(ok)
        print("%-12s %8.2f %6.0f %3d %7.2f %7.1f %8.1f %6.0e  %s %s" % (
            name, dur, br, ch, pk, l, size / 1024, dc, "OK " if ok else "FAIL", "; ".join(notes)))
    extra = sorted(set(os.listdir(DIST)) - {n + ".mp3" for n in SPEC})
    print("total size: %.2f MB (limit ~11 MB)%s" % (total / 1e6, "  extra files: %s" % extra if extra else ""))
    ok_all &= total < 11e6 and not extra
    print("ALL OK" if ok_all else "SOMETHING FAILED")
    return 0 if ok_all else 1


if __name__ == "__main__":
    sys.exit(main())
