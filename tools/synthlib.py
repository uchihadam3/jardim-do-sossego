"""
synthlib.py - shared synthesis toolkit for the "Jardim do Sossego" soundtrack.

Everything here is generated from scratch with numpy/scipy: instruments
(felt piano, Karplus-Strong nylon guitar, music box / celesta, electric piano,
pads / strings, soft bass), a synthetic stereo reverb, a small mixer, loudness
measurement (ITU-R BS.1770 K-weighting with gating), mastering and MP3 export.
"""
import os
import re
import subprocess

import numpy as np
import scipy.signal as sg
from scipy.io import wavfile
from scipy.ndimage import minimum_filter1d, uniform_filter1d

SR = 44100
HERE = os.path.dirname(os.path.abspath(__file__))
TMP = os.path.join(HERE, "_tmp")
DIST = os.path.normpath(os.path.join(HERE, "..", "dist", "audio"))
FFMPEG = "/usr/bin/ffmpeg"

# --------------------------------------------------------------------------
# pitch helpers
# --------------------------------------------------------------------------
_PC = {"C": 0, "D": 2, "E": 4, "F": 5, "G": 7, "A": 9, "B": 11}
_NOTE_RE = re.compile(r"^([A-Ga-g])([#b]?)(-?\d)$")


def n2m(name):
    """'C#4' -> midi number (C4 = 60)."""
    m = _NOTE_RE.match(name)
    if not m:
        raise ValueError("bad note name: %r" % name)
    pc = _PC[m.group(1).upper()] + {"#": 1, "b": -1, "": 0}[m.group(2)]
    return 12 * (int(m.group(3)) + 1) + pc


def hz(m):
    return 440.0 * 2.0 ** ((m - 69) / 12.0)


def db(x):
    return 20 * np.log10(max(float(x), 1e-12))


def undb(d):
    return 10.0 ** (d / 20.0)


# --------------------------------------------------------------------------
# chords
# --------------------------------------------------------------------------
_QUAL = {
    "": [0, 4, 7], "maj7": [0, 4, 7, 11], "maj9": [0, 4, 7, 11, 14],
    "add9": [0, 4, 7, 14], "6": [0, 4, 7, 9],
    "m": [0, 3, 7], "m7": [0, 3, 7, 10], "m9": [0, 3, 7, 10, 14],
    "m6": [0, 3, 7, 9],
    "7": [0, 4, 7, 10], "9": [0, 4, 7, 10, 14],
    "sus4": [0, 5, 7], "sus2": [0, 2, 7], "7sus4": [0, 5, 7, 10],
}
_CH_RE = re.compile(r"^([A-G][#b]?)([a-z0-9]*)(?:/([A-G][#b]?))?$")


def _pc(name):
    return (_PC[name[0]] + {"#": 1, "b": -1}.get(name[1:], 0)) % 12


class Chord:
    def __init__(self, name):
        m = _CH_RE.match(name)
        if not m or m.group(2) not in _QUAL:
            raise ValueError("bad chord: %r" % name)
        self.name = name
        self.root = _pc(m.group(1))
        self.iv = _QUAL[m.group(2)]
        self.bass = _pc(m.group(3)) if m.group(3) else self.root
        self.pcs = [(self.root + i) % 12 for i in self.iv]

    def ordered_pcs(self):
        """pitch classes ordered by importance: 3rd/sus, colours, 5th, root."""
        iv = self.iv
        order = [iv[1]] + list(iv[3:]) + [iv[2], iv[0]]
        return [(self.root + i) % 12 for i in order]

    def upper(self, lo, k=3):
        """k chord tones placed inside the fixed window [lo, lo+12)."""
        out = sorted(set(lo + (pc - lo) % 12 for pc in self.ordered_pcs()[:k]))
        # never leave a semitone cluster inside the voicing: lift the lower
        # note an octave (it becomes a major 7th above instead)
        for _ in range(3):
            for a, b in zip(out, out[1:]):
                if b - a == 1:
                    out[out.index(a)] = a + 12
                    out.sort()
                    break
        return out

    def bass_note(self, lo):
        return lo + (self.bass - lo) % 12

    def root_note(self, lo):
        return lo + (self.root - lo) % 12

    def nearest_tone_below(self, m, min_gap=3, max_gap=9):
        """chord tone below midi note m, at least min_gap semitones away."""
        for gap in (3, 4, 8, 9, 5, 7, 6):          # thirds / sixths first
            if min_gap <= gap <= max_gap and (m - gap) % 12 in self.pcs:
                return m - gap
        return None


# --------------------------------------------------------------------------
# score helpers
# --------------------------------------------------------------------------
def parse_mel(s, beats_per_bar):
    """
    "A4:1 C5:1 | F5:1.5 E5:.5" -> list of (beat, midi, dur).  Bars are
    separated by '|' and each must sum to beats_per_bar. 'r' is a rest.
    A trailing '~' on a token ties it into the next identical pitch.
    """
    notes = []
    bars = [b.strip() for b in s.strip().split("|") if b.strip()]
    for bi, bar in enumerate(bars):
        pos = 0.0
        for tok in bar.split():
            nm, d = tok.split(":")
            d = float(d)
            if nm != "r":
                notes.append([bi * beats_per_bar + pos, n2m(nm), d])
            pos += d
        if abs(pos - beats_per_bar) > 1e-6:
            raise ValueError("bar %d sums to %g beats: %r" % (bi, pos, bar))
    return [tuple(n) for n in notes], len(bars)


class Tempo:
    """Beat -> seconds map with support for rubato / ritardando."""

    def __init__(self, bpm, total_beats, res=8):
        self.res = res
        self.d = np.full(int(round(total_beats * res)) + res * 16,
                         60.0 / bpm / res)
        self.cum = None

    def stretch(self, b0, b1, f0, f1=None):
        f1 = f0 if f1 is None else f1
        i0, i1 = int(round(b0 * self.res)), int(round(b1 * self.res))
        self.d[i0:i1] *= np.linspace(f0, f1, i1 - i0)
        self.cum = None

    def t(self, beat):
        if self.cum is None:
            self.cum = np.concatenate([[0.0], np.cumsum(self.d)])
        return float(np.interp(beat * self.res, np.arange(len(self.cum)),
                               self.cum))


def jit(rng, ms=10.0):
    """humanised timing offset in seconds (roughly +-ms, hard limit 1.5*ms)."""
    return float(np.clip(rng.normal(0, ms * 0.55), -1.5 * ms, 1.5 * ms)) / 1000.0


# --------------------------------------------------------------------------
# small dsp helpers
# --------------------------------------------------------------------------
def fade(y, n_in, n_out):
    y = y.copy()
    n_in, n_out = int(n_in), int(n_out)
    if n_in > 0:
        w = 0.5 - 0.5 * np.cos(np.pi * np.arange(n_in) / n_in)
        y[:n_in] = (y[:n_in].T * w).T
    if n_out > 0:
        w = 0.5 + 0.5 * np.cos(np.pi * np.arange(n_out) / n_out)
        y[-n_out:] = (y[-n_out:].T * w).T
    return y


def butter(y, fc, kind="low", order=2, sr=SR, zero_phase=False):
    sos = sg.butter(order, np.asarray(fc) / (sr / 2), btype=kind, output="sos")
    if zero_phase:
        return sg.sosfiltfilt(sos, y, axis=0)
    return sg.sosfilt(sos, y, axis=0)


def biquad_peak(f0, gain_db, q, sr=SR):
    a_ = 10 ** (gain_db / 40)
    w0 = 2 * np.pi * f0 / sr
    al = np.sin(w0) / (2 * q)
    b = np.array([1 + al * a_, -2 * np.cos(w0), 1 - al * a_])
    a = np.array([1 + al / a_, -2 * np.cos(w0), 1 - al / a_])
    return b / a[0], a / a[0]


def biquad_shelf(f0, gain_db, high=True, s=0.7, sr=SR):
    a_ = 10 ** (gain_db / 40)
    w0 = 2 * np.pi * f0 / sr
    cs, sn = np.cos(w0), np.sin(w0)
    al = sn / 2 * np.sqrt((a_ + 1 / a_) * (1 / s - 1) + 2)
    k = 2 * np.sqrt(a_) * al
    if high:
        b = [a_ * ((a_ + 1) + (a_ - 1) * cs + k),
             -2 * a_ * ((a_ - 1) + (a_ + 1) * cs),
             a_ * ((a_ + 1) + (a_ - 1) * cs - k)]
        a = [(a_ + 1) - (a_ - 1) * cs + k,
             2 * ((a_ - 1) - (a_ + 1) * cs),
             (a_ + 1) - (a_ - 1) * cs - k]
    else:
        b = [a_ * ((a_ + 1) - (a_ - 1) * cs + k),
             2 * a_ * ((a_ - 1) - (a_ + 1) * cs),
             a_ * ((a_ + 1) - (a_ - 1) * cs - k)]
        a = [(a_ + 1) + (a_ - 1) * cs + k,
             -2 * ((a_ - 1) + (a_ + 1) * cs),
             (a_ + 1) + (a_ - 1) * cs - k]
    b, a = np.array(b), np.array(a)
    return b / a[0], a / a[0]


def shaped_noise(n, rng, f_lo=None, f_hi=None, order=2, tilt=0.0, sr=SR):
    """
    Periodic (loopable) noise of n samples, shaped in the frequency domain
    with a smooth band-pass and an optional spectral tilt in dB/octave.
    """
    spec = np.fft.rfft(rng.standard_normal(n))
    f = np.fft.rfftfreq(n, 1.0 / sr)
    f[0] = f[1]
    g = np.ones_like(f)
    if f_lo:
        g *= 1.0 / np.sqrt(1.0 + (f_lo / f) ** (2 * order))
    if f_hi:
        g *= 1.0 / np.sqrt(1.0 + (f / f_hi) ** (2 * order))
    if tilt:
        g *= (f / 1000.0) ** (tilt / 6.0206)
    spec *= g
    spec[0] = 0
    y = np.fft.irfft(spec, n)
    return y / (np.std(y) + 1e-12)


def slow_lfo(n, rng, f_lo, f_hi, sr=SR):
    """smooth periodic random control signal, zero mean / unit std."""
    return shaped_noise(n, rng, f_lo, f_hi, order=3, sr=sr)


# --------------------------------------------------------------------------
# instruments (all return mono float arrays unless noted)
# --------------------------------------------------------------------------
def piano_note(m, dur, vel, rng, sr=SR, tone=1.0):
    """
    Felt piano: additive synthesis with slightly inharmonic partials, each
    with its own two-stage exponential decay (higher partials die faster),
    two slightly detuned strings, soft 8-10 ms attack, velocity -> brightness
    and a tiny felt 'thump'.
    """
    f0 = hz(m)
    rel = 0.16
    n = int((dur + rel * 5) * sr)
    t = np.arange(n) / sr
    b_inh = min(0.00028 * (f0 / 261.63) ** 1.25, 0.004)
    nmax = int(min(20, max(2, 9000 // f0)))
    k = np.arange(1, nmax + 1)
    fk = k * f0 * np.sqrt(1 + b_inh * k * k)
    fc = (1150 + 2900 * vel ** 1.2) * tone
    amp = k ** -1.0 / (1 + (fk / fc) ** 2)
    amp[6:8] *= 0.6  # hammer strike position node
    tau1 = float(np.clip(2.9 * (261.63 / f0) ** 0.55, 0.45, 6.5))
    det = 2 ** (rng.uniform(0.18, 0.42) / 1200.0)
    y = np.zeros(n)
    for i in range(nmax):
        tk = tau1 / k[i] ** 0.62
        env = 0.62 * np.exp(-t / (0.42 * tk)) + 0.38 * np.exp(-t / (1.7 * tk))
        ph = rng.uniform(-0.4, 0.4)
        w = 2 * np.pi * fk[i] * t
        y += amp[i] * env * (0.62 * np.sin(w * det + ph)
                             + 0.38 * np.sin(w / det + ph + rng.uniform(-0.5, 0.5)))
    y /= np.sqrt(np.sum(amp ** 2))
    # felt thump (very quiet, low)
    nth = int(0.12 * sr)
    th = rng.standard_normal(nth)
    th = butter(th, 260, "low", 2, sr) * np.exp(-np.arange(nth) / (0.022 * sr))
    y[:nth] += 0.3 * vel * th
    # soft hammer-felt contact noise (gives the attack a little air)
    tk_ = rng.standard_normal(nth)
    tk_ = butter(tk_, [900, 4200], "band", 1, sr) * np.exp(-np.arange(nth) / (0.012 * sr))
    y[:nth] += 0.035 * (0.4 + vel) * tone * tk_
    # soft attack
    na = int((0.011 - 0.004 * vel) * sr)
    y[:na] *= 0.5 - 0.5 * np.cos(np.pi * np.arange(na) / na)
    # damper release
    nd = int(dur * sr)
    y[nd:] *= np.exp(-(np.arange(n - nd) / sr) / rel)
    y = fade(y, 0, int(0.03 * sr))
    return y * (vel ** 1.35) * 0.5


def guitar_note(m, dur, vel, rng, sr=SR, bright=1.0, pick=0.21):
    """
    Nylon guitar: Karplus-Strong string (delay line + 3-tap low-pass + allpass
    fractional tuning in the feedback loop) excited by one period of an
    ideal-pluck waveform (pick-position comb sin(k*pi*p)) plus a little noise.
    The loop is evaluated with scipy's lfilter as a sparse IIR.
    """
    f0 = hz(m)
    period = sr / f0
    s = float(np.clip(0.21 * (196.0 / f0) ** 1.0 / bright, 0.015, 0.5))
    nd = int(np.floor(period - 1.3))
    d = period - 1 - nd                      # allpass delay in [0.3, 1.3)
    c = (1 - d) / (1 + d)
    tau = 1.7 * (196.0 / f0) ** 0.3
    g = np.exp(-1.0 / (f0 * tau))
    loop = g * np.convolve([s / 2, 1 - s, s / 2], [c, 1.0])
    a = np.zeros(nd + 5)
    a[0], a[1] = 1.0, c
    a[nd:nd + 4] -= loop
    b = np.array([1.0, c])
    n = int((dur + 0.3) * sr)
    pn = int(round(period))
    kmax = int(min(0.42 * sr / f0, 40))
    k = np.arange(1, kmax + 1)
    fc = (1900 + 4600 * vel) * bright
    amp = np.sin(k * np.pi * pick) / k ** 1.0 / (1 + (k * f0 / fc) ** 2)
    u = np.arange(pn) / period
    e = (amp[:, None] * np.sin(2 * np.pi * k[:, None] * u[None, :])).sum(0)
    nz = rng.standard_normal(pn + 64)
    nz = butter(nz, min(fc, 0.4 * sr), "low", 2, sr)[64:]
    e += 0.10 * np.std(e) * nz / (np.std(nz) + 1e-9)
    e -= e.mean()
    x = np.zeros(n)
    x[:pn] = e
    y = sg.lfilter(b, a, x)
    y /= np.max(np.abs(y[: int(0.06 * sr)])) + 1e-9
    na = int(0.002 * sr)
    y[:na] *= 0.5 - 0.5 * np.cos(np.pi * np.arange(na) / na)
    i0 = int(dur * sr)
    y[i0:] *= np.exp(-(np.arange(n - i0) / sr) / 0.07)
    y = fade(y, 0, int(0.02 * sr))
    return y * vel ** 1.2 * 0.5


def guitar_body(st):
    """body resonances + gentle top roll-off, applied on the guitar bus."""
    for f0, gdb, q in ((105, 3.5, 2.0), (212, 2.5, 2.5), (410, 1.2, 2.0)):
        b, a = biquad_peak(f0, gdb, q)
        st = sg.lfilter(b, a, st, axis=0)
    st = butter(st, 7000, "low", 2)
    return butter(st, 70, "high", 2)


def bell_note(m, dur, vel, rng, kind="musicbox", sr=SR):
    """Music box / celesta: a few sine partials at (in)harmonic ratios with
    fast, partial-dependent decays and a 3 ms soft attack."""
    f0 = hz(m)
    if kind == "musicbox":
        ratios = [1.0, 2.0, 3.01, 5.42, 8.93]
        amps = [1.0, 0.28, 0.16, 0.30 * vel, 0.10 * vel]
        dec = [1.0, 0.55, 0.34, 0.13, 0.06]
        base = 1.25 * (880.0 / f0) ** 0.45
    else:  # celesta
        ratios = [1.0, 2.0, 3.0, 4.03, 6.2]
        amps = [1.0, 0.45, 0.14, 0.22 * vel, 0.06 * vel]
        dec = [1.0, 0.6, 0.35, 0.14, 0.06]
        base = 1.6 * (880.0 / f0) ** 0.5
    base = float(np.clip(base, 0.35, 3.0))
    tail = min(dur + 0.4, base * 5)
    n = int(tail * sr)
    t = np.arange(n) / sr
    y = np.zeros(n)
    for r, a_, dk in zip(ratios, amps, dec):
        if f0 * r > 0.42 * sr:
            continue
        y += a_ * np.exp(-t / (base * dk)) * np.sin(
            2 * np.pi * f0 * r * t + rng.uniform(0, 0.3))
    na = int(0.003 * sr)
    y[:na] *= 0.5 - 0.5 * np.cos(np.pi * np.arange(na) / na)
    i0 = min(int(dur * sr), n - 1)
    y[i0:] *= np.exp(-(np.arange(n - i0) / sr) / 0.25)
    y = fade(y, 0, int(0.03 * sr))
    return y * vel ** 1.2 * 0.4


def epiano_note(m, dur, vel, rng, sr=SR):
    """Warm electric-piano-like tone: 2-operator FM with a decaying index
    (soft 'bark' on the attack), two detuned layers.  Returns stereo (n,2)."""
    f0 = hz(m)
    n = int((dur + 0.6) * sr)
    t = np.arange(n) / sr
    tau = float(np.clip(2.6 * (220.0 / f0) ** 0.4, 0.8, 4.5))
    idx = (0.35 + 1.1 * vel) * (0.75 * np.exp(-t / 0.30) + 0.25 * np.exp(-t / 2.2)) \
        * min(1.0, (330.0 / f0) ** 0.5)
    env = np.exp(-t / tau)
    out = np.zeros((n, 2))
    for ch, cents in enumerate((-2.2, 2.2)):
        f = f0 * 2 ** (cents / 1200.0)
        ph = rng.uniform(0, 0.2)
        w = 2 * np.pi * f * t + ph
        out[:, ch] = env * (np.sin(w + idx * np.sin(w))
                            + 0.08 * vel * np.exp(-t / 0.10) * np.sin(7.0 * w))
    out = 0.7 * out + 0.3 * out[:, ::-1]
    na = int(0.007 * sr)
    out[:na] *= (0.5 - 0.5 * np.cos(np.pi * np.arange(na) / na))[:, None]
    i0 = int(dur * sr)
    out[i0:] *= np.exp(-(np.arange(n - i0) / sr) / 0.16)[:, None]
    out = fade(out, 0, int(0.03 * sr))
    return out * vel ** 1.2 * 0.4


_PAD = {
    #        detune cents                    pans                         fc0   p    mod  fmax  vib
    "warm": ([-7.0, -2.5, 3.0, 7.5], [-0.8, 0.35, -0.35, 0.8], 900, 1.2, 0.30, 4000, 0.0),
    "strings": ([-11, -6, -2, 2.5, 6.5, 10.5], [-0.9, 0.5, -0.2, 0.2, -0.5, 0.9], 1900, 1.0, 0.25, 6500, 4.0),
    "air": ([-5.0, 5.0], [-0.7, 0.7], 900, 1.6, 0.25, 2400, 0.0),
}


def pad_note(m, dur, rng, kind="warm", att=1.2, rel=1.8, bright=1.0, sr=SR):
    """
    Pad / strings: several detuned band-limited saw-like layers (additive),
    'filtered' by a slow-moving low-pass applied as time-varying harmonic
    weights.  Rendered at half sample rate and upsampled.  Returns (n,2).
    """
    dets, pans, fc0, p, mod, fmax, vib = _PAD[kind]
    sr2 = sr // 2
    f0 = hz(m)
    n = int((dur + rel) * sr2)
    t = np.arange(n) / sr2
    nh = int(max(1, min(fmax // f0, 30)))
    rate = rng.uniform(0.05, 0.11)
    cutoff = fc0 * bright * (f0 / 261.63) ** 0.35 * (
        1 + mod * np.sin(2 * np.pi * rate * t + rng.uniform(0, 2 * np.pi)))
    weights = [k ** -p / np.sqrt(1 + (k * f0 / cutoff) ** 4)
               for k in range(1, nh + 1)]
    out = np.zeros((n, 2))
    for dc, pan in zip(dets, pans):
        fj = f0 * 2 ** (dc / 1200.0)
        base = 2 * np.pi * fj * t
        if vib:
            vr = rng.uniform(4.6, 5.6)
            depth = (2 ** (vib / 1200.0) - 1) * fj / vr
            ramp = np.clip(t / 0.8, 0, 1)
            base = base + depth * ramp * np.sin(2 * np.pi * vr * t + rng.uniform(0, 6.28))
        sig = np.zeros(n)
        for k in range(1, nh + 1):
            sig += weights[k - 1] * np.sin(k * base + rng.uniform(0, 2 * np.pi))
        gl, gr = np.cos((pan + 1) * np.pi / 4), np.sin((pan + 1) * np.pi / 4)
        out[:, 0] += gl * sig
        out[:, 1] += gr * sig
    out /= np.sqrt(len(dets))
    na, nr = int(att * sr2), int(rel * sr2)
    na = min(na, n - nr)
    env = np.ones(n)
    env[:na] = 0.5 - 0.5 * np.cos(np.pi * np.arange(na) / na)
    env[n - nr:] *= 0.5 + 0.5 * np.cos(np.pi * np.arange(nr) / nr)
    out *= env[:, None]
    return sg.resample_poly(out, 2, 1, axis=0) * 0.25


def bass_note(m, dur, vel, rng, sr=SR):
    """Soft sub / upright-like bass: sine + a little 2nd and 3rd harmonic."""
    f0 = hz(m)
    n = int((dur + 0.25) * sr)
    t = np.arange(n) / sr
    w = 2 * np.pi * f0 * t
    h2 = 0.22 * np.exp(-t / 0.9)
    h3 = 0.07 * np.exp(-t / 0.4)
    y = np.sin(w) + h2 * np.sin(2 * w + 0.3) + h3 * np.sin(3 * w + 0.5)
    y *= 0.35 + 0.65 * np.exp(-t / 1.1)
    na = int(0.022 * sr)
    y[:na] *= 0.5 - 0.5 * np.cos(np.pi * np.arange(na) / na)
    i0 = int(dur * sr)
    y[i0:] *= np.exp(-(np.arange(n - i0) / sr) / 0.09)
    y = fade(y, 0, int(0.03 * sr))
    return y * vel * 0.5


# --------------------------------------------------------------------------
# reverb
# --------------------------------------------------------------------------
def make_ir(seed, length=3.4, t60=(3.3, 2.8, 2.0, 1.0), predelay=0.018,
            edges=(350, 2000, 6000), sr=SR):
    """
    Synthetic stereo impulse response: exponentially decaying noise with a
    frequency dependent decay time (darker tail), decorrelated L/R, a short
    diffusion build-up and a few sparse early reflections.  Returns (n,2),
    each channel normalised to unit energy.
    """
    rng = np.random.default_rng(seed)
    n = int(length * sr)
    t = np.arange(n) / sr
    ir = np.zeros((n, 2))
    for ch in range(2):
        nz = rng.standard_normal(n)
        bands = []
        lo = butter(nz, edges[0], "low", 2, sr)
        bands.append(lo)
        for e0, e1 in zip(edges[:-1], edges[1:]):
            bands.append(butter(nz, [e0, e1], "band", 2, sr))
        bands.append(butter(nz, edges[-1], "high", 2, sr) * 0.8)
        tail = np.zeros(n)
        for bnd, tt in zip(bands, t60):
            tail += bnd * np.exp(-6.908 * t / tt)
        build = 1 - np.exp(-t / 0.035)
        tail *= build
        tail /= np.sqrt(np.sum(tail ** 2))
        er = np.zeros(n)
        for _ in range(7):
            pos = int(rng.uniform(0.004, 0.075) * sr)
            er[pos] += rng.uniform(0.25, 0.6) * rng.choice([-1, 1]) * (1 - pos / (0.11 * sr))
        er = butter(er, 4500, "low", 1, sr)
        er /= np.sqrt(np.sum(er ** 2)) + 1e-12
        h = tail + 0.28 * er
        pd = int(predelay * sr)
        h = np.concatenate([np.zeros(pd), h])[:n]
        h = butter(h, 120, "high", 1, sr)
        h = fade(h, 0, int(0.3 * sr))
        ir[:, ch] = h / np.sqrt(np.sum(h ** 2))
    return ir


def reverb(send, ir, cross=0.25):
    """send: (n,2).  returns wet (n+len(ir)-1, 2)."""
    s_l = send[:, 0] + cross * send[:, 1]
    s_r = send[:, 1] + cross * send[:, 0]
    w_l = sg.fftconvolve(s_l, ir[:, 0])
    w_r = sg.fftconvolve(s_r, ir[:, 1])
    return np.stack([w_l, w_r], axis=1) / np.sqrt(1 + cross ** 2)


# --------------------------------------------------------------------------
# loudness (ITU-R BS.1770-4)
# --------------------------------------------------------------------------
def _k_filters(sr):
    f0, g, q = 1681.974450955533, 3.999843853973347, 0.7071752369554196
    k = np.tan(np.pi * f0 / sr)
    vh = 10 ** (g / 20)
    vb = vh ** 0.4996667741545416
    a0 = 1 + k / q + k * k
    b1 = np.array([(vh + vb * k / q + k * k) / a0, 2 * (k * k - vh) / a0,
                   (vh - vb * k / q + k * k) / a0])
    a1 = np.array([1.0, 2 * (k * k - 1) / a0, (1 - k / q + k * k) / a0])
    f0, q = 38.13547087602444, 0.5003270373238773
    k = np.tan(np.pi * f0 / sr)
    a0 = 1 + k / q + k * k
    b2 = np.array([1.0, -2.0, 1.0])
    a2 = np.array([1.0, 2 * (k * k - 1) / a0, (1 - k / q + k * k) / a0])
    return (b1, a1), (b2, a2)


def lufs(x, sr=SR):
    """integrated loudness in LUFS for mono (n,) or stereo (n,2)."""
    if x.ndim == 1:
        x = x[:, None]
    (b1, a1), (b2, a2) = _k_filters(sr)
    y = sg.lfilter(b2, a2, sg.lfilter(b1, a1, x, axis=0), axis=0)
    blk, hop = int(0.4 * sr), int(0.1 * sr)
    if len(y) < blk:
        return -0.691 + 10 * np.log10(np.sum(np.mean(y ** 2, axis=0)) + 1e-20)
    cs = np.concatenate([np.zeros((1, y.shape[1])), np.cumsum(y ** 2, axis=0)])
    starts = np.arange(0, len(y) - blk + 1, hop)
    z = ((cs[starts + blk] - cs[starts]) / blk).sum(axis=1)
    l = -0.691 + 10 * np.log10(z + 1e-20)
    keep = l > -70
    if not keep.any():
        return -120.0
    rel = -0.691 + 10 * np.log10(np.mean(z[keep])) - 10
    keep &= l > rel
    return -0.691 + 10 * np.log10(np.mean(z[keep]))


# --------------------------------------------------------------------------
# mixer
# --------------------------------------------------------------------------
class Stem:
    """A stereo instrument bus.  target = dry loudness in LUFS inside the mix,
    send = reverb send amplitude (relative to the dry level)."""

    def __init__(self, n, name, target, send, pan=0.0):
        self.buf = np.zeros((n, 2))
        self.name, self.target, self.send, self.pan = name, target, send, pan

    def add(self, y, t0, pan=0.0, gain=1.0):
        pan = float(np.clip(self.pan + pan, -1, 1))
        i0 = int(round(t0 * SR))
        if i0 < 0:
            y = y[-i0:]
            i0 = 0
        n = min(len(y), len(self.buf) - i0 - 32)
        if n <= 0:
            return
        if y.ndim == 2:
            # stereo source: balance
            gl = min(1.0, 1 - pan) * gain
            gr = min(1.0, 1 + pan) * gain
            self.buf[i0:i0 + n, 0] += gl * y[:n, 0]
            self.buf[i0:i0 + n, 1] += gr * y[:n, 1]
            return
        gl = np.cos((pan + 1) * np.pi / 4) * gain * np.sqrt(2)
        gr = np.sin((pan + 1) * np.pi / 4) * gain * np.sqrt(2)
        dly = int(abs(pan) * 13)            # tiny inter-aural delay (<0.3 ms)
        dl, dr = (dly, 0) if pan > 0 else (0, dly)
        self.buf[i0 + dl:i0 + dl + n, 0] += gl * y[:n]
        self.buf[i0 + dr:i0 + dr + n, 1] += gr * y[:n]


def mixdown(stems, ir, wet_ratio=0.45, verbose=True):
    """Balance stems to their loudness targets, sum, and add the shared
    reverb so that rms(wet)/rms(dry) == wet_ratio (0.45 ~ 31 % wet)."""
    n = len(stems[0].buf)
    dry = np.zeros((n, 2))
    send = np.zeros((n, 2))
    for st in stems:
        if not np.any(st.buf):
            continue
        l = lufs(st.buf)
        g = undb(st.target - l)
        dry += g * st.buf
        send += g * st.send * st.buf
        if verbose:
            print("    stem %-10s raw %6.1f LUFS -> %5.1f  (gain %+5.1f dB, send %.2f)"
                  % (st.name, l, st.target, db(g), st.send))
    wet = reverb(send, ir)
    rd = np.sqrt(np.mean(dry ** 2))
    rw = np.sqrt(np.mean(wet[:n] ** 2))
    wet *= wet_ratio * rd / rw
    out = np.zeros((len(wet), 2))
    out[:n] += dry
    out += wet
    if verbose:
        print("    reverb: wet/dry rms %.2f -> wet share %.0f%%"
              % (wet_ratio, 100 * wet_ratio / (1 + wet_ratio)))
    return out


# --------------------------------------------------------------------------
# mastering / export
# --------------------------------------------------------------------------
def limiter(x, ceiling_db=-1.5, look_ms=6.0, sr=SR):
    """transparent look-ahead peak limiter (moving-min gain, smoothed)."""
    thr = undb(ceiling_db)
    pk = np.max(np.abs(x), axis=1) if x.ndim == 2 else np.abs(x)
    g = np.minimum(1.0, thr / np.maximum(pk, 1e-9))
    w = int(look_ms * 1e-3 * sr) | 1
    g = minimum_filter1d(g, w, mode="nearest")
    g = uniform_filter1d(g, w, mode="nearest")
    # slower release so the gain recovers smoothly
    rel = int(0.08 * sr) | 1
    g = np.minimum(g, uniform_filter1d(minimum_filter1d(g, rel, mode="nearest"),
                                       rel, mode="nearest"))
    return x * (g[:, None] if x.ndim == 2 else g), float(g.min())


def master(x, target_lufs, ceiling_db=-1.5, shelf_db=-2.5, hp=28.0, lp=None,
           presence_db=2.0, verbose=True):
    """high-pass, a little presence (wide shelf from ~3 kHz) so the soft
    instruments stay clear on small speakers, gentle roll-off above 9 kHz,
    loudness normalisation and a look-ahead limiter."""
    x = butter(x, hp, "high", 2)
    if presence_db:
        b, a = biquad_shelf(3000, presence_db, high=True, s=0.5)
        x = sg.lfilter(b, a, x, axis=0)
    b, a = biquad_shelf(9000, shelf_db, high=True)
    x = sg.lfilter(b, a, x, axis=0)
    if lp:
        x = butter(x, lp, "low", 2)
    gmin = 1.0
    for _ in range(3):
        x = x * undb(target_lufs - lufs(x))
        x, gm = limiter(x, ceiling_db)
        gmin = min(gmin, gm)
    if verbose:
        print("    master: %.2f LUFS, peak %.2f dBFS, max limiter GR %.1f dB"
              % (lufs(x), db(np.max(np.abs(x))), -db(gmin)))
    return x


def stats(x, label=""):
    pk = db(np.max(np.abs(x)))
    dc = np.mean(x, axis=0)
    ok = np.all(np.isfinite(x))
    print("    %s peak %.2f dBFS  rms %.1f dB  dc %s  finite %s  dur %.2fs"
          % (label, pk, db(np.sqrt(np.mean(x ** 2))),
             np.array2string(np.atleast_1d(dc), precision=6), ok, len(x) / SR))
    return pk, dc, ok


def rms_profile(x, win=1.0):
    m = x if x.ndim == 1 else x.mean(axis=1)
    k = int(win * SR)
    nb = len(m) // k
    r = np.sqrt(np.mean(m[:nb * k].reshape(nb, k) ** 2, axis=1))
    return 20 * np.log10(r + 1e-9)


def write_wav(path, x):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    wavfile.write(path, SR, x.astype(np.float32))


def encode_mp3(wav, mp3, kbps, mono=False):
    os.makedirs(os.path.dirname(mp3), exist_ok=True)
    cmd = [FFMPEG, "-y", "-v", "error", "-i", wav, "-map_metadata", "-1",
           "-c:a", "libmp3lame", "-b:a", "%dk" % kbps, "-ar", str(SR)]
    if mono:
        cmd += ["-ac", "1"]
    cmd += [mp3]
    subprocess.run(cmd, check=True)


# LAME attenuates the signal by a fixed factor of 0.95 (-0.45 dB) at these
# bitrates, so the export pre-compensates to land exactly on the targets.
LAME_SCALE_DB = 0.45


def export(x, name, kbps, mono=False, keep_wav=True):
    """float array -> tools/_tmp/name.wav -> dist/audio/name.mp3"""
    wav = os.path.join(TMP, name + ".wav")
    x = x * undb(LAME_SCALE_DB)
    assert np.all(np.isfinite(x)) and np.max(np.abs(x)) < 0.999, name
    write_wav(wav, x)
    mp3 = os.path.join(DIST, name + ".mp3")
    encode_mp3(wav, mp3, kbps, mono=mono)
    if not keep_wav:
        os.remove(wav)
    return mp3
