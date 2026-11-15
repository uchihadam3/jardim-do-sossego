#!/usr/bin/env python3
"""analyze.py - 'analytical listening' helpers: octave-band balance, stereo
correlation, loudness, RMS-over-time, silence / jump detection.
usage: python3 analyze.py file.wav|file.mp3 ..."""
import subprocess
import sys

import numpy as np
from scipy.io import wavfile

from synthlib import FFMPEG, SR, db, lufs, rms_profile


def load(path):
    if path.endswith(".wav"):
        sr, x = wavfile.read(path)
        x = x.astype(np.float64)
    else:
        ch = int(subprocess.run(["ffprobe", "-v", "error", "-show_entries", "stream=channels",
                                 "-of", "csv=p=0", path], capture_output=True, text=True,
                                check=True).stdout.strip().split()[0])
        raw = subprocess.run([FFMPEG, "-v", "error", "-i", path, "-f", "f32le",
                              "-ar", str(SR), "-"], capture_output=True, check=True).stdout
        x = np.frombuffer(raw, np.float32).reshape(-1, ch).astype(np.float64)
        if ch == 1:
            x = x[:, 0]
    if x.ndim == 1:
        x = np.stack([x, x], axis=1)
    return x


def octave_bands(x):
    m = x.mean(axis=1)
    n = len(m)
    spec = np.abs(np.fft.rfft(m)) ** 2
    f = np.fft.rfftfreq(n, 1 / SR)
    out = []
    for fc in (31.5, 63, 125, 250, 500, 1000, 2000, 4000, 8000, 16000):
        sel = (f >= fc / 2 ** 0.5) & (f < fc * 2 ** 0.5)
        out.append(10 * np.log10(spec[sel].sum() + 1e-20))
    out = np.array(out)
    return out - out.max()


def report(path):
    x = load(path)
    prof = rms_profile(x, 1.0)
    med = np.median(prof)
    quiet = prof < med - 26
    run = best = 0
    for q in quiet:
        run = run + 1 if q else 0
        best = max(best, run)
    side = x[:, 0] - x[:, 1]
    mid = x[:, 0] + x[:, 1]
    print("%s\n   dur %.2f s  peak %.2f dBFS  LUFS %.1f  crest %.1f dB  corr L/R %.2f  side/mid %.1f dB"
          % (path, len(x) / SR, db(np.abs(x).max()), lufs(x),
             db(np.abs(x).max()) - db(np.sqrt(np.mean(x ** 2))),
             np.corrcoef(x[:, 0], x[:, 1])[0, 1],
             db(np.sqrt(np.mean(side ** 2)) / np.sqrt(np.mean(mid ** 2)))))
    print("   octave bands 31..16k (dB rel max): " + " ".join("%4d" % round(v) for v in octave_bands(x)))
    print("   1 s RMS: median %.1f  min %.1f  max %.1f  | longest stretch 26 dB under median: %d s | max 1 s rise %.1f dB"
          % (med, prof.min(), prof.max(), best, np.max(np.diff(prof))))
    print("   dc %.2e  finite %s" % (np.abs(x.mean(axis=0)).max(), np.all(np.isfinite(x))))


if __name__ == "__main__":
    for p in sys.argv[1:]:
        report(p)
