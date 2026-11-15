#!/usr/bin/env python3
"""
make_music.py - composes and renders the four original music tracks of
"Jardim do Sossego" (music1..4.mp3).  All notes are written out below;
all sound is synthesised by synthlib.py.

usage: python3 make_music.py [1 2 3 4]
"""
import sys
import time

import numpy as np

from synthlib import (SR, Chord, Stem, Tempo, bass_note, bell_note, butter, db,
                      epiano_note, export, guitar_body, guitar_note, jit,
                      lufs, make_ir, master, mixdown, n2m, pad_note,
                      parse_mel, piano_note, rms_profile, stats)

MUSIC_KBPS = 112
TAIL = 9.0  # extra render room after the nominal loop length (s)


# --------------------------------------------------------------------------
# arranging helpers
# --------------------------------------------------------------------------
def chord_segments(bars, bpb, beat0=0.0):
    """["F", "Gm7 C7"] -> [(beat, length, Chord), ...]"""
    segs = []
    for i, bar in enumerate(bars):
        names = bar.split()
        ln = bpb / len(names)
        for j, nm in enumerate(names):
            segs.append((beat0 + i * bpb + j * ln, ln, Chord(nm)))
    return segs


def merge_segments(segs):
    out = []
    for b, ln, ch in segs:
        if out and out[-1][2].name == ch.name and abs(out[-1][0] + out[-1][1] - b) < 1e-6:
            out[-1] = (out[-1][0], out[-1][1] + ln, out[-1][2])
        else:
            out.append((b, ln, ch))
    return out


def play_line(stem, tp, notes, beat0, synth, rng, vel=0.65, phrase=16.0,
              bpb=4, pan=0.0, ring=0.45, jitter=10.0, accent=0.05,
              harmony=None, harm_min=1.5, transpose=0):
    """Play a parsed melody.  harmony: optional list of chord segments used to
    add a soft chord tone under long notes."""
    for i, (b, m, d) in enumerate(notes):
        m += transpose
        t0 = tp.t(beat0 + b) + jit(rng, jitter)
        t1 = tp.t(beat0 + b + d)
        nxt = notes[i + 1][0] if i + 1 < len(notes) else b + d + 2
        extra = ring + (0.5 if nxt - (b + d) > 0.01 else 0.0)
        dur = max(0.12, t1 - t0 + extra)
        ph = (b % phrase) / phrase
        v = vel * (0.90 + 0.18 * np.sin(np.pi * ph))
        v += accent if abs(b % bpb) < 1e-6 else 0.0
        v += rng.normal(0, 0.03)
        v -= 0.035 * max(0, m - 79) / 5.0          # keep the top register soft
        if d <= 0.5:
            v -= 0.05                               # passing notes lighter
        v = float(np.clip(v, 0.2, 0.95))
        stem.add(synth(m, dur, v), t0, pan=pan + (m - 74) * 0.012)
        if harmony is not None and d >= harm_min:
            ch = [c for (cb, cl, c) in harmony if cb <= beat0 + b + 1e-6 < cb + cl]
            if ch:
                hm = ch[0].nearest_tone_below(m)
                if hm:
                    stem.add(synth(hm, dur, max(0.2, v - 0.2)),
                             t0 + 0.012 + abs(jit(rng, 6)), pan=pan + (hm - 74) * 0.012)


def play_pad(stem, tp, segs, rng, kind="warm", lo_root=41, lo_up=53, k=3,
             gain=1.0, att=1.1, rel=1.7, overlap=0.25, bright=1.0, root=True):
    for b, ln, ch in merge_segments(segs):
        t0 = tp.t(b) - 0.12
        dur = tp.t(b + ln) - tp.t(b) + overlap
        notes = ch.upper(lo_up, k)
        if root:
            notes = [ch.bass_note(lo_root)] + notes
        for i, m in enumerate(notes):
            g = gain * (0.6 if i == 0 and root else 1.0)
            stem.add(pad_note(m, dur, rng, kind, att=att, rel=rel, bright=bright),
                     max(0.0, t0), gain=g)


def play_bass(stem, tp, segs, rng, lo=38, vel=0.7, pattern="root5", bpb=4):
    for b, ln, ch in segs:
        r = ch.bass_note(lo)
        t0 = tp.t(b) + jit(rng, 8)
        if pattern == "root5" and ln >= 4:
            d1 = tp.t(b + 2.4) - tp.t(b)
            stem.add(bass_note(r, d1, vel + rng.normal(0, 0.03), rng), t0)
            fifth = r + 7 if (ch.root == ch.bass and 7 in ch.iv) else r
            if fifth > lo + 13:
                fifth -= 12
            t2 = tp.t(b + 2.5) + jit(rng, 8)
            stem.add(bass_note(fifth, tp.t(b + ln - 0.15) - tp.t(b + 2.5),
                               vel * 0.72 + rng.normal(0, 0.03), rng), t2)
        else:
            d1 = tp.t(b + ln - 0.2) - tp.t(b)
            stem.add(bass_note(r, d1, vel + rng.normal(0, 0.03), rng), t0)


def finish(name, stems, ir, loop_len, target_lufs, wet_ratio=0.45):
    """mix -> fold the reverb tail onto the start (seamless loop) -> master."""
    for st in stems:                      # keep pads out of the sub range
        if st.name in ("pad", "strings", "air"):
            st.buf = butter(st.buf, 85, "high", 2)
    mix = mixdown(stems, ir, wet_ratio=wet_ratio)
    n = int(round(loop_len * SR))
    out = mix[:n].copy()
    rest = mix[n:]
    rest = rest[: n]
    out[: len(rest)] += rest
    print("    tail folded onto start: %.1f s, tail peak %.1f dB rel. track peak"
          % (len(rest) / SR, db(np.max(np.abs(rest)) / np.max(np.abs(out)))))
    out = master(out, target_lufs)
    stats(out, name)
    prof = rms_profile(out, 1.0)
    print("    RMS per 4 s (dB): " + " ".join(
        "%d" % round(v) for v in rms_profile(out, 4.0)))
    quiet = prof < (np.median(prof) - 26)
    run = best = 0
    for q in quiet:
        run = run + 1 if q else 0
        best = max(best, run)
    jump = np.max(np.diff(prof))
    print("    longest near-silent stretch: %d s ; biggest 1 s jump: +%.1f dB ; "
          "loop seam |x[0]-x[-1]| = %.5f" % (best, jump, np.max(np.abs(out[0] - out[-1]))))
    mp3 = export(out, name, MUSIC_KBPS)
    print("    wrote", mp3)
    return out


# --------------------------------------------------------------------------
# 1. "Manha no jardim"  -  F major, 72 bpm, 4/4
# --------------------------------------------------------------------------
def track1():
    print("music1  Manha no jardim  (F major, 72 bpm)")
    rng = np.random.default_rng(101)
    bpb, bpm = 4, 72
    S = [  # (name, chords per bar, melody)
        ("intro", ["Fadd9", "Bbmaj7", "Fadd9/A", "C7sus4"],
         "r:4 | r:4 | r:4 | r:3 C5:1"),
        ("A", ["Fadd9", "Dm7", "Bbmaj7", "C", "F/A", "Dm7", "Gm7", "Csus4 C"],
         "A4:1 C5:1 F5:1.5 E5:.5 | D5:1.5 C5:.5 A4:2 | Bb4:1 D5:1 G5:1.5 F5:.5 | E5:1.5 D5:.5 C5:2 |"
         "A4:1 C5:1 F5:1.5 G5:.5 | A5:1.5 G5:.5 F5:1 D5:1 | D5:1 Bb4:1 D5:1 F5:1 | F5:1 G5:1 E5:2"),
        ("A2", ["Fadd9", "Dm7", "Bbmaj7", "C", "Am7", "Dm7", "Gm7 C7", "F"],
         "A4:1 C5:1 F5:1.5 E5:.5 | D5:1.5 C5:.5 A4:1 C5:1 | D5:1 F5:1 A5:1.5 G5:.5 | G5:1.5 E5:.5 C5:2 |"
         "C5:1 E5:1 G5:1.5 A5:.5 | F5:1.5 E5:.5 D5:1 F5:1 | D5:1 Bb4:1 C5:1 E5:1 | F5:3 r:1"),
        ("B", ["Bbmaj7", "Am7", "Gm7", "C", "Bbmaj7", "Am7 Dm7", "Gm7", "Bbm6 C7"],
         "D5:.5 F5:.5 A5:2 G5:.5 F5:.5 | C5:.5 E5:.5 G5:2 F5:.5 E5:.5 | Bb4:.5 D5:.5 F5:2 E5:.5 D5:.5 | C5:1 D5:1 E5:2 |"
         "D5:.5 F5:.5 A5:2 Bb5:.5 A5:.5 | G5:1.5 E5:.5 F5:1 D5:1 | Bb4:1 D5:1 G5:2 | F5:1.5 Db5:.5 C5:2"),
        ("A3", ["Fadd9", "Dm7", "Bbmaj7", "C", "F/A", "Dm7", "Gm7 C7", "F"],
         "A4:1 C5:1 F5:1.5 E5:.5 | D5:1.5 C5:.5 A4:2 | Bb4:1 D5:1 G5:1.5 F5:.5 | E5:1.5 D5:.5 C5:1 E5:1 |"
         "A4:1 C5:1 F5:1.5 G5:.5 | A5:1.5 G5:.5 F5:1 D5:1 | D5:1 Bb4:1 C5:1 E5:1 | F5:4"),
        ("outro", ["Bbmaj7", "C7sus4", "Fadd9", "Fadd9"],
         "r:1 D5:1 F5:1 A5:1 | G5:2 F5:2 | r:1 A4:1 C5:1 G5:1 | F5:4"),
    ]
    nbars = sum(len(s[1]) for s in S)
    tp = Tempo(bpm, nbars * bpb)
    # gentle rubato: breathe at phrase ends, ritardando at the very end
    b = 0
    for nm, ch, _ in S:
        b += len(ch) * bpb
        if nm != "outro":
            tp.stretch(b - 2, b, 1.0, 1.07)
    tp.stretch(nbars * bpb - 6, nbars * bpb, 1.0, 1.4)
    end_t = tp.t(nbars * bpb)
    loop_len = end_t + 3.0
    n = int((loop_len + TAIL) * SR)

    piano = Stem(n, "piano", -20.0, 0.50, pan=0.06)
    guitar = Stem(n, "guitar", -24.0, 0.36, pan=-0.30)
    pad = Stem(n, "pad", -28.5, 0.45)
    bass = Stem(n, "bass", -27.0, 0.06)
    cel = Stem(n, "celesta", -31.0, 0.65, pan=0.35)

    P1 = ["b", 0, 1, 2, 1, 0, 2, 1]
    P2 = ["b", 1, 2, 1, "b5", 1, 2, 0]
    HALF = ["b", 0, 2, 1]
    cfg = {  # section -> (guitar pattern, guitar vel, pad gain, bass?, piano vel)
        "intro": (P1, 0.62, 0.80, False, 0.50),
        "A": (P1, 0.56, 0.90, False, 0.62),
        "A2": (P1, 0.60, 1.00, True, 0.67),
        "B": (P2, 0.62, 1.20, True, 0.72),
        "A3": (P1, 0.60, 1.05, True, 0.70),
        "outro": (P1, 0.50, 0.85, True, 0.55),
    }
    beat0 = 0
    for nm, chords, mel in S:
        pat, gvel, pgain, has_bass, pvel = cfg[nm]
        segs = chord_segments(chords, bpb, beat0)
        last_bar = beat0 + (len(chords) - 1) * bpb
        # ---- guitar arpeggios -------------------------------------------
        for sb, ln, ch in segs:
            ups = ch.upper(55, 3)
            bs = ch.bass_note(41)
            if nm == "outro" and sb >= last_bar:      # final rolled chord
                roll = [bs, bs + 7 if ch.root == ch.bass else bs + 12] + ups + [ups[0] + 12]
                for i, m in enumerate(roll):
                    guitar.add(guitar_note(m, 7.0, 0.5 + 0.03 * i, rng),
                               tp.t(sb) + 0.075 * i + jit(rng, 6), pan=(i - 2) * 0.04)
                continue
            seq = pat if ln >= 4 else HALF
            for i, step in enumerate(seq):
                bt = sb + i * 0.5
                if step == "b":
                    m, v, ring = bs, gvel + 0.10, 3.2 if ln >= 4 else 1.8
                elif step == "b5":
                    m = bs + 7 if (ch.root == ch.bass and 7 in ch.iv) else bs + 12
                    v, ring = gvel + 0.02, 1.8
                else:
                    m, v, ring = ups[step], gvel - 0.06 + (0.05 if i % 2 == 0 else 0), 1.9
                v = float(np.clip(v + rng.normal(0, 0.035), 0.25, 0.9))
                dur = tp.t(bt + ring) - tp.t(bt)
                guitar.add(guitar_note(m, dur, v, rng), tp.t(bt) + jit(rng, 11),
                           pan=(m - 57) * 0.012)
        # ---- pad / bass ----------------------------------------------------
        play_pad(pad, tp, segs, rng, "warm", gain=pgain,
                 rel=3.5 if nm == "outro" else 1.7)
        if has_bass:
            play_bass(bass, tp, segs, rng, lo=38, vel=0.7)
        # ---- piano melody --------------------------------------------------
        notes, nb = parse_mel(mel, bpb)
        assert nb == len(chords), nm
        play_line(piano, tp, notes, beat0, lambda m, d, v: piano_note(m, d, v, rng),
                  rng, vel=pvel, phrase=16, bpb=bpb, ring=0.55,
                  harmony=segs if nm in ("A3", "outro") else None, harm_min=1.5)
        if nm == "A3":   # sparkle: celesta doubles the long notes an octave up
            hi = [(b_, m, d) for (b_, m, d) in notes if d >= 1.5]
            play_line(cel, tp, hi, beat0, lambda m, d, v: bell_note(m, d + 1.5, v, rng, "celesta"),
                      rng, vel=0.45, bpb=bpb, transpose=12, jitter=14)
        if nm == "B":    # soft celesta answers on the held notes
            hi = [(b_ + 1.0, m, 1.0) for (b_, m, d) in notes if d >= 2 and b_ % 4 == 1.0]
            play_line(cel, tp, hi, beat0, lambda m, d, v: bell_note(m, d + 1.5, v, rng, "celesta"),
                      rng, vel=0.38, bpb=bpb, transpose=12, jitter=14)
        beat0 += len(chords) * bpb
    guitar.buf = guitar_body(guitar.buf)
    ir = make_ir(11, length=3.4, t60=(3.2, 2.7, 2.0, 1.0))
    return finish("music1", [piano, guitar, pad, bass, cel], ir, loop_len, -17.0, 0.42)


# --------------------------------------------------------------------------
# 2. "Tarde preguicosa"  -  D major, 64 bpm, 4/4 lullaby
# --------------------------------------------------------------------------
def track2():
    print("music2  Tarde preguicosa  (D major, 64 bpm)")
    rng = np.random.default_rng(202)
    bpb, bpm = 4, 64
    A_tail = "F#5:1.5 A5:.5 C#6:2 | B5:1.5 A5:.5 G5:1 F#5:1 | G5:1 E5:1 F#5:.5 E5:.5 C#5:1 | D5:3 r:1"
    S = [
        ("intro", ["Dmaj7", "A7sus4"], "r:4 | r:4"),
        ("A", ["Dmaj7", "Bm7", "Gadd9", "A7sus4", "D/F#", "Gmaj7", "Em7", "Asus4 A"],
         "F#5:1.5 A5:.5 F#5:2 | D5:1.5 F#5:.5 D5:2 | B4:1 D5:1 G5:1 F#5:1 | E5:3 r:1 |"
         "F#5:1.5 A5:.5 D6:2 | B5:1.5 A5:.5 F#5:2 | G5:1 F#5:1 E5:1 D5:1 | D5:2 C#5:2"),
        ("A2", ["Dmaj7", "Bm7", "Gadd9", "A7sus4", "F#m7", "Gadd9", "Em7 A7", "Dadd9"],
         "F#5:1.5 A5:.5 F#5:2 | D5:1.5 F#5:.5 D5:1 B4:1 | B4:1 D5:1 G5:1 F#5:1 | E5:3 r:1 |" + A_tail),
        ("B", ["Gmaj7", "F#m7", "Em7", "Dmaj7", "Gmaj7", "Gm6", "F#m7 Bm7", "Em7 A7"],
         "r:1 B5:1 D6:1 B5:1 | A5:2 F#5:2 | r:1 G5:1 B5:1 G5:1 | F#5:3 r:1 |"
         "r:1 B5:1 D6:1 E6:1 | D6:2 Bb5:2 | A5:2 F#5:1 D5:1 | E5:2 C#5:1 E5:1"),
        ("A3", ["Dmaj7", "Bm7", "Gadd9", "A7sus4", "F#m7", "Gadd9", "Em7 A7", "Dadd9"],
         "F#5:1.5 A5:.5 F#5:2 | D5:1.5 F#5:.5 D5:2 | B4:1 D5:1 G5:1 F#5:1 | E5:2 r:1 A5:1 |" + A_tail),
        ("outro", ["Gmaj7", "A7sus4", "Dadd9", "Dadd9"],
         "r:1 B5:1 D6:1 B5:1 | A5:2 E5:2 | r:1 F#5:1 A5:1 E6:1 | D6:4"),
    ]
    nbars = sum(len(s[1]) for s in S)
    tp = Tempo(bpm, nbars * bpb)
    b = 0
    for nm, ch, _ in S:
        b += len(ch) * bpb
        if nm not in ("outro", "intro"):
            tp.stretch(b - 2, b, 1.0, 1.08)
    tp.stretch(nbars * bpb - 6, nbars * bpb, 1.0, 1.35)
    end_t = tp.t(nbars * bpb)
    loop_len = end_t + 4.0
    n = int((loop_len + TAIL) * SR)

    box = Stem(n, "musicbox", -21.0, 0.55, pan=0.12)
    ep = Stem(n, "epiano", -22.5, 0.40, pan=-0.10)
    pad = Stem(n, "pad", -31.0, 0.5)
    bass = Stem(n, "bass", -29.0, 0.05)

    cfg = {  # section -> (ep vel, echo style, pad gain, box vel, bass)
        "intro": (0.50, "arp", 0.7, 0.0, False),
        "A": (0.46, "one", 0.8, 0.60, False),
        "A2": (0.50, "two", 1.0, 0.64, True),
        "B": (0.52, "arp", 1.15, 0.66, True),
        "A3": (0.50, "two", 1.0, 0.64, True),
        "outro": (0.44, "one", 0.8, 0.55, True),
    }
    beat0 = 0
    for nm, chords, mel in S:
        evel, echo, pgain, bvel, has_bass = cfg[nm]
        segs = chord_segments(chords, bpb, beat0)
        last_bar = beat0 + (len(chords) - 1) * bpb
        for sb, ln, ch in segs:
            ups = ch.upper(57, 3)
            root = ch.bass_note(45)
            final = nm == "outro" and sb >= last_bar
            hold = tp.t(sb + ln - 0.15) - tp.t(sb) + (3.0 if final else 0.0)
            t0 = tp.t(sb) + jit(rng, 8)
            # rolled chord on the downbeat
            for i, m in enumerate([root] + ups):
                v = evel + (0.06 if i == 0 else 0.0) + rng.normal(0, 0.025)
                ep.add(epiano_note(m, hold, float(np.clip(v, 0.2, 0.8)), rng),
                       t0 + i * (0.028 if not final else 0.07) + abs(jit(rng, 5)),
                       pan=(m - 57) * 0.02)
            if ln < 4 or final:
                continue
            if echo == "one":       # one soft answering note
                steps = [(2.5, ups[1])]
            elif echo == "two":     # rocking pair
                steps = [(2.0, ups[0]), (3.0, ups[2])]
            else:                   # slow broken chord
                steps = [(2.0, ups[0]), (2.5, ups[1]), (3.0, ups[2])]
            for off, m in steps:
                d = tp.t(sb + 4.3) - tp.t(sb + off)
                ep.add(epiano_note(m, d, float(np.clip(evel - 0.14 + rng.normal(0, 0.03), 0.2, 0.7)), rng),
                       tp.t(sb + off) + jit(rng, 12), pan=(m - 57) * 0.02)
        play_pad(pad, tp, segs, rng, "warm", lo_root=45, lo_up=57, gain=pgain,
                 att=1.4, rel=3.5 if nm == "outro" else 2.0)
        if has_bass:
            play_bass(bass, tp, segs, rng, lo=35, vel=0.6, pattern="root")
        notes, nb = parse_mel(mel, bpb)
        assert nb == len(chords), nm
        if notes:
            play_line(box, tp, notes, beat0,
                      lambda m, d, v: bell_note(m, d + 2.5, v, rng, "musicbox"),
                      rng, vel=bvel, phrase=16, bpb=bpb, jitter=12)
        if nm == "A3":      # delicate octave doubling, like a second comb
            play_line(box, tp, notes, beat0,
                      lambda m, d, v: bell_note(m, d + 2.0, v, rng, "musicbox"),
                      rng, vel=0.30, phrase=16, bpb=bpb, jitter=12, transpose=12, pan=0.2)
        if nm == "B":       # celesta-like lower third on the long notes
            lows = [(b_, m, d) for (b_, m, d) in notes if d >= 2]
            play_line(box, tp, lows, beat0,
                      lambda m, d, v: bell_note(m, d + 2.0, v, rng, "celesta"),
                      rng, vel=0.34, bpb=bpb, jitter=12, transpose=-12, pan=-0.25)
        beat0 += len(chords) * bpb
    # slow, shallow stereo tremolo on the electric piano
    t = np.arange(n) / SR
    trem = 0.10 * np.sin(2 * np.pi * 0.9 * t)
    ep.buf[:, 0] *= 1 + trem
    ep.buf[:, 1] *= 1 - trem
    ir = make_ir(22, length=3.6, t60=(3.4, 2.9, 2.1, 1.0))
    return finish("music2", [box, ep, pad, bass], ir, loop_len, -17.5, 0.47)


# --------------------------------------------------------------------------
# 3. "Por do sol"  -  A major, 84 bpm, 3/4 waltz
# --------------------------------------------------------------------------
def track3():
    print("music3  Por do sol  (A major, 84 bpm, 3/4)")
    rng = np.random.default_rng(303)
    bpb, bpm = 3, 84
    A_ch = ["A", "Amaj7", "F#m7", "F#m7", "Dadd9", "Dmaj7", "E7sus4", "E",
            "A", "A/C#", "D", "D", "Bm7", "E7", "A", "A"]
    S = [  # (name, chords, [(instrument, 4-bar phrase), ...])
        ("intro", ["Aadd9", "Aadd9", "Dmaj7", "E7sus4"], [("-", "r:3 | r:3 | r:3 | r:3")]),
        ("A", A_ch, [
            ("g", "C#5:1 E5:1 A5:1 | G#5:2 E5:1 | A4:1 C#5:1 F#5:1 | E5:2 C#5:1"),
            ("p", "D5:1 F#5:1 A5:1 | B5:2 A5:1 | A5:2 B5:1 | G#5:3"),
            ("g", "C#5:1 E5:1 A5:1 | C#6:2 B5:1 | A5:2 F#5:1 | F#5:1 E5:1 D5:1"),
            ("p", "B4:1 D5:1 F#5:1 | G#5:2 B5:1 | A5:3 | r:3")]),
        ("A2", A_ch[:15] + ["A7"], [
            ("g", "C#5:1 E5:1 A5:1 | G#5:1.5 A5:.5 E5:1 | A4:1 C#5:1 F#5:1 | E5:2 C#5:1"),
            ("p", "D5:1 F#5:1 A5:1 | B5:2 C#6:1 | A5:2 B5:1 | G#5:2 E5:1"),
            ("g", "C#5:1 E5:1 A5:1 | C#6:2 B5:1 | A5:2 F#5:1 | F#5:1 E5:1 D5:1"),
            ("p", "B4:1 D5:1 F#5:1 | G#5:2 B5:1 | A5:3 | G5:2 E5:1")]),
        ("B", ["D", "D", "C#m7", "F#m7", "Bm7", "E7", "Aadd9", "A7",
               "D", "Dm6", "C#m7", "F#m7", "Bm7", "Bm7/E", "E7sus4", "E7"], [
            ("p", "F#5:3 | F#5:1 A5:1 D6:1 | B5:3 | A5:1 F#5:1 C#5:1"),
            ("g", "D5:3 | D5:1 E5:1 G#5:1 | A5:2 G#5:1 | G5:3"),
            ("p", "F#5:3 | F5:1 A5:1 D6:1 | E6:2 B5:1 | C#6:2 A5:1"),
            ("g", "B5:1 A5:1 F#5:1 | D5:2 F#5:1 | E5:3 | G#4:1 B4:1 D5:1")]),
        ("A3", A_ch[:15] + ["Aadd9"], [
            ("g", "C#5:1 E5:1 A5:1 | G#5:2 E5:1 | A4:1 C#5:1 F#5:1 | E5:2 C#5:1"),
            ("p", "D5:1 F#5:1 A5:1 | B5:2 A5:1 | A5:2 B5:1 | G#5:3"),
            ("gp", "C#5:1 E5:1 A5:1 | C#6:2 B5:1 | A5:2 F#5:1 | F#5:1 E5:1 D5:1"),
            ("p", "B4:1 D5:1 F#5:1 | G#5:2 B5:1 | A5:3 | A5:3")]),
    ]
    nbars = sum(len(s[1]) for s in S)
    tp = Tempo(bpm, nbars * bpb)
    b = 0
    for nm, ch, _ in S:
        b += len(ch) * bpb
        tp.stretch(b - 3, b, 1.0, 1.08)
        if nm != "intro":
            tp.stretch(b - len(ch) * bpb + 21, b - len(ch) * bpb + 24, 1.0, 1.05)
    tp.stretch(nbars * bpb - 9, nbars * bpb, 1.0, 1.45)
    end_t = tp.t(nbars * bpb)
    loop_len = end_t + 4.0
    n = int((loop_len + TAIL) * SR)

    gacc = Stem(n, "gtr-acc", -24.5, 0.34, pan=-0.38)
    glead = Stem(n, "gtr-lead", -21.5, 0.45, pan=0.30)
    piano = Stem(n, "piano", -20.5, 0.50, pan=-0.02)
    strs = Stem(n, "strings", -27.5, 0.50)
    bass = Stem(n, "bass", -27.5, 0.06)

    W1 = ["b", 0, 1, 2, 1, 0]
    W2 = ["b", 1, 2, 0, 2, 1]
    cfg = {  # section -> (gtr vel, strings gain, bass, lead vel)
        "intro": (0.60, 0.65, False, 0.0),
        "A": (0.54, 0.85, False, 0.64),
        "A2": (0.57, 1.00, True, 0.68),
        "B": (0.52, 1.30, True, 0.72),
        "A3": (0.56, 1.05, True, 0.68),
    }
    beat0 = 0
    for nm, chords, phrases in S:
        gvel, sgain, has_bass, lvel = cfg[nm]
        segs = chord_segments(chords, bpb, beat0)
        nseg = len(segs)
        for si, (sb, ln, ch) in enumerate(segs):
            ups = ch.upper(57, 3)
            bs = ch.bass_note(40)
            if bs < 45 and ch.bass != ch.root:
                bs += 12 if bs + 12 <= 49 else 0
            if nm == "A3" and si == nseg - 1:        # final rolled chord
                roll = [bs, bs + 7] + ups + [ups[0] + 12]
                for i, m in enumerate(roll):
                    gacc.add(guitar_note(m, 5.0, 0.5 + 0.03 * i, rng),
                             tp.t(sb) + 0.085 * i + jit(rng, 6), pan=(i - 2) * 0.04)
                continue
            seq = W1 if si % 2 == 0 else W2
            for i, step in enumerate(seq):
                bt = sb + i * 0.5
                if step == "b":
                    m, v, ring = bs, gvel + 0.12, 2.8
                else:
                    m, v, ring = ups[step], gvel - 0.07 + (0.04 if i % 2 == 0 else 0), 1.6
                v = float(np.clip(v + rng.normal(0, 0.035), 0.25, 0.9))
                gacc.add(guitar_note(m, tp.t(bt + ring) - tp.t(bt), v, rng),
                         tp.t(bt) + jit(rng, 11), pan=(m - 57) * 0.012)
        play_pad(strs, tp, segs, rng, "strings", lo_root=45, lo_up=57, gain=sgain,
                 att=1.3, rel=3.5 if nm == "A3" else 1.8, overlap=0.3)
        if has_bass:
            play_bass(bass, tp, segs, rng, lo=38, vel=0.65, pattern="root", bpb=3)
        pb = beat0
        for who, mel in phrases:
            notes, nb = parse_mel(mel, bpb)
            assert nb == 4, (nm, mel)
            if "g" in who:
                play_line(glead, tp, notes, pb,
                          lambda m, d, v: guitar_note(m, d, v, rng, bright=1.25, pick=0.26),
                          rng, vel=lvel + 0.06, phrase=12, bpb=bpb, ring=0.9, jitter=11)
            if "p" in who:
                both = who == "gp"
                play_line(piano, tp, notes, pb, lambda m, d, v: piano_note(m, d, v, rng),
                          rng, vel=lvel - (0.14 if both else 0.0), phrase=12, bpb=bpb,
                          ring=0.6, jitter=11, transpose=-12 if both else 0,
                          harmony=segs if (nm in ("B", "A3") and not both) else None,
                          harm_min=2.0)
            pb += 12
        beat0 += len(chords) * bpb
    assert abs(beat0 - nbars * bpb) < 1e-6
    gacc.buf = guitar_body(gacc.buf)
    glead.buf = guitar_body(glead.buf)
    ir = make_ir(33, length=3.5, t60=(3.3, 2.8, 2.0, 1.0))
    return finish("music3", [gacc, glead, piano, strs, bass], ir, loop_len, -17.0, 0.43)


# --------------------------------------------------------------------------
# 4. "Noite de vaga-lumes"  -  E-flat major, 54 bpm, 4/4, very calm
# --------------------------------------------------------------------------
def track4():
    print("music4  Noite de vaga-lumes  (E-flat major, 54 bpm)")
    rng = np.random.default_rng(404)
    bpb, bpm = 4, 54
    S = [
        ("c1", ["Ebmaj9", "Cm9", "Abmaj7", "Bbsus4", "Ebmaj7/G", "Abmaj7", "Fm9", "Bb7sus4"],
         "r:2 Bb5:2 | r:1 G5:1 D6:2 | r:2 C6:1 Eb6:1 | F6:3 r:1 |"
         "r:2 G5:1 Bb5:1 | Eb6:2 r:1 C6:1 | Ab5:1 G5:3 | r:1 Ab5:1 F5:2"),
        ("c2", ["Ebmaj9", "Gm7", "Abmaj7", "Abm6", "Ebmaj7/G", "Cm7", "Fm9", "Bb7sus4"],
         "r:1 G5:1 Bb5:1 D6:1 | F6:1.5 D6:.5 Bb5:2 | r:1 C6:1 Eb6:1 G6:1 | Eb6:2 B5:2 |"
         "Bb5:3 G5:1 | r:1 G5:1 C6:1 Eb6:1 | Eb6:1 C6:1 G5:2 | r:1 F5:1 Ab5:1 Bb5:1"),
        ("c3", ["Abmaj9", "Gm7", "Fm9", "Ebmaj7/G", "Abmaj7", "Abm6", "Eb/Bb", "Bb7sus4"],
         "C6:2 Bb5:1 G5:1 | Bb5:2 F5:1 D5:1 | r:1 Ab5:1 C6:1 G5:1 | Bb5:3 r:1 |"
         "r:1 C6:1 Eb6:1 G6:1 | F6:1.5 Eb6:.5 B5:2 | Bb5:2 G5:1 Eb5:1 | F5:3 r:1"),
        ("c4", ["Ebmaj9", "Cm9", "Abmaj7", "Bbsus4", "Ebmaj7/G", "Abmaj7", "Abm6", "Ebadd9"],
         "r:2 Bb5:2 | r:1 G5:1 D6:2 | r:2 C6:1 Eb6:1 | F6:3 r:1 |"
         "r:2 G5:1 Bb5:1 | Eb6:2 r:1 C6:1 | Ab5:1 B5:1 Eb6:2 | r:1 G5:1 F6:2"),
    ]
    nbars = sum(len(s[1]) for s in S)
    tp = Tempo(bpm, nbars * bpb)
    for i in range(1, 5):
        tp.stretch(i * 32 - 3, i * 32, 1.0, 1.10)
    tp.stretch(nbars * bpb - 8, nbars * bpb, 1.0, 1.25)
    end_t = tp.t(nbars * bpb)
    loop_len = end_t + 0.6
    n = int((loop_len + TAIL) * SR)

    pad = Stem(n, "pad", -22.5, 0.50)
    air = Stem(n, "air", -29.0, 0.60)
    piano = Stem(n, "piano", -23.0, 0.62, pan=0.05)
    low = Stem(n, "piano-low", -28.5, 0.55, pan=-0.2)
    fly = Stem(n, "fireflies", -32.0, 0.85)
    bass = Stem(n, "bass", -29.5, 0.06)

    cfg = {  # section -> (pad gain, piano vel, fireflies per bar, bass)
        "c1": (0.85, 0.52, 0.0, False),
        "c2": (1.00, 0.58, 1.0, True),
        "c3": (1.10, 0.60, 1.5, True),
        "c4": (0.90, 0.52, 0.8, True),
    }
    beat0 = 0
    for nm, chords, mel in S:
        pgain, pvel, nfly, has_bass = cfg[nm]
        segs = chord_segments(chords, bpb, beat0)
        play_pad(pad, tp, segs, rng, "warm", lo_root=39, lo_up=51, k=4, gain=pgain,
                 att=1.8, rel=3.0, overlap=0.6, bright=0.95)
        # high airy layer: two chord tones an octave above the pad
        for sb, ln, ch in merge_segments(segs):
            ups = [63 + ((ch.root + iv) - 63) % 12 for iv in ch.iv[1:3]]   # 3rd (or sus) + 5th
            dur = tp.t(sb + ln) - tp.t(sb) + 0.6
            for m in ups:
                air.add(pad_note(m, dur, rng, "air", att=2.2, rel=3.2),
                        max(0.0, tp.t(sb) - 0.1), gain=pgain)
        if has_bass:
            play_bass(bass, tp, segs, rng, lo=34, vel=0.55, pattern="root")
        notes, nb = parse_mel(mel, bpb)
        assert nb == len(chords), nm
        play_line(piano, tp, notes, beat0,
                  lambda m, d, v: piano_note(m, d + 2.0, v, rng, tone=0.9),
                  rng, vel=pvel, phrase=16, bpb=bpb, ring=1.2, jitter=14, accent=0.0)
        # low, slow piano answers: root+fifth (or tenth) once per two bars
        if nm in ("c2", "c3", "c4"):
            for si, (sb, ln, ch) in enumerate(segs):
                if si % 2 == 1:
                    continue
                r = ch.bass_note(46)
                third = ch.upper(58, 1)[0]
                for j, m in enumerate((r, r + 7 if 7 in ch.iv and ch.bass == ch.root else third, third + (12 if third < 64 else 0))):
                    if j == 2 and nm != "c3":
                        continue
                    low.add(piano_note(m, 5.0, 0.42 - 0.04 * j + rng.normal(0, 0.02), rng, tone=0.85),
                            tp.t(sb + 0.02 + 0.5 * j) + jit(rng, 14), pan=(m - 60) * 0.01)
        # fireflies: tiny, far-away celesta glints taken from the chord
        for sb, ln, ch in segs:
            k = rng.poisson(nfly) if nfly else 0
            for _ in range(min(k, 3)):
                m = int(rng.choice(ch.upper(87, 3)))        # Eb6..D7
                bt = sb + rng.choice([0.5, 1.5, 2.5, 3.5, 1.0, 3.0]) + rng.uniform(-0.08, 0.08)
                fly.add(bell_note(m, 2.5, float(rng.uniform(0.25, 0.5)), rng, "celesta"),
                        tp.t(bt), pan=float(rng.uniform(-0.85, 0.85)))
        beat0 += len(chords) * bpb
    ir = make_ir(44, length=4.2, t60=(4.2, 3.6, 2.3, 1.1))
    return finish("music4", [pad, air, piano, low, fly, bass], ir, loop_len, -18.0, 0.52)


TRACKS = {"1": track1, "2": track2, "3": track3, "4": track4}

if __name__ == "__main__":
    which = sys.argv[1:] or ["1", "2", "3", "4"]
    for w in which:
        t0 = time.time()
        TRACKS[w]()
        print("    (%.0f s render)\n" % (time.time() - t0))
