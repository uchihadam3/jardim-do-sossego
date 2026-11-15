#!/usr/bin/env python3
"""
make_ambience.py - synthesises the three seamless ambience loops
(amb_day, amb_night, amb_rain).  Everything is built circularly (periodic
noise, wrapped events, wrapped reverb) so the last sample flows into the
first one without any crossfade artefact.
"""
import numpy as np
import scipy.signal as sg

from synthlib import (SR, butter, db, export, lufs, make_ir, shaped_noise,
                      slow_lfo, stats, undb, rms_profile)

AMB_KBPS = 80
AMB_LUFS = -28.0


# --------------------------------------------------------------------------
def add_circ(buf, y, t0, pan=0.0, gain=1.0):
    """add mono y into stereo loop buffer at time t0, wrapping around."""
    n = len(buf)
    idx = (int(t0 * SR) + np.arange(len(y))) % n
    gl = np.cos((pan + 1) * np.pi / 4) * gain
    gr = np.sin((pan + 1) * np.pi / 4) * gain
    dly = int(abs(pan) * 18)
    il, ir_ = (idx + dly) % n if pan > 0 else idx, idx if pan > 0 else (idx + dly) % n
    np.add.at(buf[:, 0], il, gl * y)
    np.add.at(buf[:, 1], ir_, gr * y)


def circ_reverb(send, ir):
    n = len(send)
    out = np.zeros((n, 2))
    for ch in range(2):
        w = sg.fftconvolve(send[:, ch], ir[:, ch])
        out[:, ch] = w[:n]
        rest = w[n:]
        out[: len(rest), ch] += rest
    return out


def circ_filter(x, f_lo=None, f_hi=None, order=2):
    """zero-phase periodic band-limit (keeps the loop seamless)."""
    n = len(x)
    f = np.fft.rfftfreq(n, 1 / SR)
    f[0] = f[1]
    g = np.ones_like(f)
    if f_lo:
        g /= np.sqrt(1 + (f_lo / f) ** (2 * order))
    if f_hi:
        g /= np.sqrt(1 + (f / f_hi) ** (2 * order))
    g[0] = 0
    return np.fft.irfft(np.fft.rfft(x, axis=0) * g[:, None], n, axis=0)


def stereo_noise(n, rng, f_lo, f_hi, order=2, tilt=0.0, width=0.75):
    c = shaped_noise(n, rng, f_lo, f_hi, order, tilt)
    l = shaped_noise(n, rng, f_lo, f_hi, order, tilt)
    r = shaped_noise(n, rng, f_lo, f_hi, order, tilt)
    k = np.sqrt(1 - width ** 2)
    return np.stack([k * c + width * l, k * c + width * r], axis=1)


def breeze(n, rng, rustle=1.0):
    """soft wind: three noise bands with slow, partly shared gust envelopes."""
    z1 = np.clip(slow_lfo(n, rng, 0.02, 0.16), -2.2, 2.2)
    z2 = np.clip(slow_lfo(n, rng, 0.05, 0.35), -2.2, 2.2)
    z3 = np.clip(slow_lfo(n, rng, 0.1, 0.6), -2.2, 2.2)
    t = np.arange(n) / n
    seam = 0.72 + 0.28 * np.sin(np.pi * t) ** 2          # calmest at the loop point
    e_low = np.exp(0.30 * z1)
    e_mid = np.exp(0.45 * z1 + 0.2 * z2)
    e_hi = np.exp(0.6 * z1 + 0.3 * z2 + 0.2 * z3)
    flutter = np.clip(1 + 0.45 * slow_lfo(n, rng, 2.5, 13), 0.15, None)
    low = stereo_noise(n, rng, 110, 480, 2)
    mid = stereo_noise(n, rng, 380, 1500, 2)
    hi = stereo_noise(n, rng, 1800, 5500, 2, width=0.9)
    pan = 0.18 * slow_lfo(n, rng, 0.02, 0.1)
    y = (1.0 * low * e_low[:, None] + 0.50 * mid * e_mid[:, None]
         + 0.055 * rustle * hi * (e_hi * flutter)[:, None])
    y[:, 0] *= 1 - pan
    y[:, 1] *= 1 + pan
    return y * seam[:, None]


def to_level(x, target):
    return x * undb(target - lufs(x))


def finish(name, x, target=AMB_LUFS, f_lo=55, f_hi=12500):
    x = circ_filter(x, f_lo, f_hi)
    g0 = target - lufs(np.concatenate([x, x[: SR]]))
    print('    final gain %+.1f dB' % g0)
    x = x * undb(g0)
    pk = db(np.max(np.abs(x)))
    if pk > -4.0:
        x *= undb(-4.0 - pk)
    stats(x, name)
    prof = rms_profile(x, 1.0)
    d = np.abs(np.diff(x, axis=0))
    print("    LUFS %.1f | 1 s RMS min %.1f max %.1f | seam step %.5f vs typical step %.5f (max %.5f)"
          % (lufs(x), prof.min(), prof.max(), np.max(np.abs(x[0] - x[-1])),
             np.median(d), d.max()))
    print("    wrote", export(x, name, AMB_KBPS))
    return x


# --------------------------------------------------------------------------
# bird voices
# --------------------------------------------------------------------------
def chirp(f_a, f_b, dur, rng, bend=0.0, shape=0.7, harm2=0.08, vib=0.0, vib_rate=28.0):
    n = int(dur * SR)
    u = np.arange(n) / n
    f = f_a + (f_b - f_a) * u + bend * np.sin(np.pi * u)
    if vib:
        f = f * (1 + vib * np.sin(2 * np.pi * vib_rate * u * dur + rng.uniform(0, 6.28)))
    ph = 2 * np.pi * np.cumsum(f) / SR
    env = np.sin(np.pi * u) ** shape
    return env * (np.sin(ph) + harm2 * np.sin(2 * ph))


def seq(parts):
    """parts: list of (offset_seconds, array) -> one array"""
    n = max(int(o * SR) + len(a) for o, a in parts)
    y = np.zeros(n)
    for o, a in parts:
        i = int(o * SR)
        y[i:i + len(a)] += a
    return y


def call_sparrow(rng):          # "tsip tsip tsip"
    k = rng.integers(3, 6)
    base = rng.uniform(4600, 5400)
    return seq([(i * rng.uniform(0.115, 0.135),
                 (0.7 + 0.3 * rng.random()) * chirp(base, base * 0.66, 0.065, rng, shape=0.6))
                for i in range(k)])


def call_trill(rng):            # fast rising-note trill that sinks slightly
    k = rng.integers(9, 15)
    f0 = rng.uniform(2700, 3300)
    parts = []
    for i in range(k):
        arch = np.sin(np.pi * (i + 0.5) / k) ** 0.6
        f = f0 * (1 - 0.012 * i)
        parts.append((i * 0.068, arch * chirp(f, f * 1.28, 0.042, rng, shape=0.8)))
    return seq(parts)


def call_whistle(rng):          # slow two-note whistle, high then lower
    f = rng.uniform(3700, 4100)
    a = chirp(f * 1.01, f, 0.34, rng, shape=0.45, vib=0.004, vib_rate=7)
    b = chirp(f * 0.845, f * 0.835, 0.42, rng, shape=0.45, vib=0.004, vib_rate=7)
    return seq([(0, a), (0.44, 0.85 * b)])


def call_warble(rng):           # flute-like, melodious phrase
    k = rng.integers(4, 7)
    parts, t = [], 0.0
    f = rng.uniform(2100, 2700)
    for i in range(k):
        d = rng.uniform(0.09, 0.19)
        f2 = f * rng.choice([0.8, 0.89, 1.12, 1.26, 1.33])
        f2 = float(np.clip(f2, 1700, 3600))
        parts.append((t, rng.uniform(0.6, 1.0) * chirp(f, f2, d, rng, bend=rng.uniform(-200, 300),
                                                         shape=0.55, harm2=0.15)))
        t += d + rng.uniform(0.02, 0.09)
        f = f2
    return seq(parts)


def call_tweet(rng):            # up-down "tweet", twice
    f = rng.uniform(3000, 3500)
    one = lambda: chirp(f, f * 1.04, 0.13, rng, bend=1300, shape=0.6)
    return seq([(0, one()), (0.24, 0.8 * one())])


# --------------------------------------------------------------------------
def amb_day():
    print("amb_day")
    rng = np.random.default_rng(71)
    L = 56.0
    n = int(L * SR)
    wind = to_level(breeze(n, rng, rustle=1.0), -30.5)
    dry = np.zeros((n, 2))
    send = np.zeros((n, 2))
    # (voice, pan, distance 0..1, call times)
    birds = [
        (call_sparrow, -0.55, 0.45, [3.4, 16.8, 32.6, 46.9]),
        (call_trill, 0.50, 0.75, [9.2, 28.4, 41.3]),
        (call_whistle, 0.18, 0.80, [13.3, 36.9]),
        (call_warble, -0.25, 0.55, [21.6, 50.6]),
        (call_tweet, 0.80, 0.60, [6.3, 24.9, 44.2]),
        (call_sparrow, 0.35, 0.90, [19.4, 38.9]),
        (call_warble, -0.80, 0.85, [30.2, 11.0]),
    ]
    for voice, pan, dist, times in birds:
        for t0 in times:
            y = voice(rng)
            y = butter(y, 9000 - 5500 * dist, "low", 1)       # air absorption
            g = (1 - 0.6 * dist) * rng.uniform(0.8, 1.0)
            t0 += rng.uniform(-0.6, 0.6)
            p = pan + rng.uniform(-0.06, 0.06)
            add_circ(dry, y, t0, p, g * (1 - 0.5 * dist))
            add_circ(send, y, t0, p * 0.6, g * (0.35 + 0.65 * dist))
    ir = make_ir(5, length=1.9, t60=(1.3, 1.6, 1.3, 0.7), predelay=0.035)
    bird_mix = dry + 0.9 * circ_reverb(send, ir)
    bird_mix *= undb(-17.5 - db(np.max(np.abs(bird_mix))))   # loudest call peaks ~ -17 dBFS
    print("    wind peak %.1f dBFS, birds peak %.1f dBFS" % (db(np.abs(wind).max()), db(np.abs(bird_mix).max())))
    return finish("amb_day", wind + bird_mix)


# --------------------------------------------------------------------------
def cricket(n, rng, fc, chirp_rate, pulses, pulse_rate, pulse_ms=13.0, jitter=0.03):
    """pulse-train (amplitude modulated) sine: returns mono loop of length n."""
    L = n / SR
    if chirp_rate:
        k = int(round(chirp_rate * L))
        period = n / k
        imp = np.zeros(n)
        for i in range(k):
            t0 = i * period + rng.uniform(-jitter, jitter) * period
            lvl = rng.uniform(0.8, 1.0)
            for p in range(pulses):
                pos = int(t0 + p * SR / pulse_rate) % n
                imp[pos] += lvl * (0.55 + 0.45 * (p + 1) / pulses)
    else:  # continuous trill
        k = int(round(pulse_rate * L))
        imp = np.zeros(n)
        imp[(np.arange(k) * (n / k)).astype(int)] = 1.0
    w = np.hanning(int(pulse_ms * 1e-3 * SR))
    env = np.fft.irfft(np.fft.rfft(imp) * np.fft.rfft(w, n), n)
    fq = round(fc * L) / L
    t = np.arange(n) / SR
    return env * (np.sin(2 * np.pi * fq * t) + 0.06 * np.sin(4 * np.pi * fq * t))


def activity(n, rng, bias=0.5):
    z = slow_lfo(n, rng, 0.012, 0.07)
    return np.clip(bias + 0.9 * z, 0, 1) ** 1.5


def owl(rng):
    """distant 'hoo, hoo-hoo ... hoooo'"""
    def hoo(f, dur):
        m = int(dur * SR)
        u = np.arange(m) / m
        fr = f * (1 + 0.025 * np.sin(np.pi * u) - 0.04 * u)
        ph = 2 * np.pi * np.cumsum(fr) / SR
        a = min(0.07 / dur, 0.4)
        env = np.clip(u / a, 0, 1) ** 1.5 * np.clip((1 - u) / (1.8 * a), 0, 1) ** 1.2
        br = butter(rng.standard_normal(m), [250, 700], "band", 1) * 0.02
        return env * (np.sin(ph) + 0.16 * np.sin(2 * ph) + 0.05 * np.sin(3 * ph) + br)
    f = 345.0
    return seq([(0.0, hoo(f, 0.36)), (0.62, 0.8 * hoo(f * 0.99, 0.2)),
                (0.88, hoo(f, 0.33)), (1.75, 0.95 * hoo(f * 0.97, 0.62))])


def amb_night():
    print("amb_night")
    rng = np.random.default_rng(72)
    L = 54.0
    n = int(L * SR)
    wind = to_level(breeze(n, rng, rustle=0.35), -37.0)
    dry = np.zeros((n, 2))
    send = np.zeros((n, 2))
    t = np.arange(n) / n
    seam = 0.8 + 0.2 * np.sin(np.pi * t) ** 2
    # (fc, chirps/s, pulses, pulse rate, pan, gain, reverb, activity bias)
    voices = [
        (4350, 2.10, 3, 28, -0.50, 1.00, 0.25, 1.2),
        (4720, 1.60, 4, 30, 0.60, 0.80, 0.30, 0.55),
        (3900, 2.60, 2, 24, 0.15, 0.50, 0.55, 0.9),
        (5100, 1.90, 3, 31, -0.85, 0.40, 0.60, 0.45),
        (4050, 2.35, 3, 26, 0.88, 0.35, 0.60, 0.5),
        (3150, 0, 0, 43, -0.65, 0.16, 0.5, 1.0),      # tree-cricket trill bed
        (3330, 0, 0, 47, 0.70, 0.13, 0.5, 0.8),
    ]
    for fc, rate, pulses, prate, pan, gain, rv, bias in voices:
        y = cricket(n, rng, fc, rate, pulses, prate)
        y *= (0.35 + 0.65 * activity(n, rng, bias)) if bias >= 0.9 else activity(n, rng, bias)
        y *= seam
        add_circ(dry, y, 0.0, pan, gain)
        add_circ(send, y, 0.0, pan * 0.5, gain * rv)
    ir = make_ir(6, length=1.7, t60=(1.1, 1.4, 1.2, 0.7), predelay=0.03)
    cr = to_level(dry + circ_reverb(send, ir), -29.0)
    # one far-away owl
    od, os_ = np.zeros((n, 2)), np.zeros((n, 2))
    o = butter(owl(rng), 1400, "low", 2)
    add_circ(od, o, 27.5, -0.3, 0.5)
    add_circ(os_, o, 27.5, -0.15, 1.0)
    ir2 = make_ir(7, length=2.6, t60=(2.2, 2.0, 1.2, 0.6), predelay=0.06)
    ow = od + circ_reverb(os_, ir2)
    ow *= undb(-27.0 - db(np.max(np.abs(ow))))          # peak around -27 dBFS before final gain
    return finish("amb_night", wind + cr + ow)


# --------------------------------------------------------------------------
def amb_rain():
    print("amb_rain")
    rng = np.random.default_rng(73)
    L = 50.0
    n = int(L * SR)
    t = np.arange(n) / n
    swell = np.exp(0.14 * slow_lfo(n, rng, 0.03, 0.25))
    # steady hiss of fine rain + soft low wash
    hiss = stereo_noise(n, rng, 600, 5500, 1, tilt=-3.0, width=0.85) * swell[:, None]
    wash = stereo_noise(n, rng, 120, 600, 2, width=0.6) * np.exp(0.2 * slow_lfo(n, rng, 0.03, 0.2))[:, None]
    bed = to_level(hiss + 0.22 * wash, -30.5)
    # thousands of tiny drop ticks: sparse impulse trains * short noise-burst kernels
    ticks = np.zeros((n, 2))
    for fc, ms, dens in ((1800, 9, 28), (2800, 6, 40), (4200, 4, 45), (6000, 3, 35)):
        m = int(ms * 1e-3 * SR * 4)
        ker = butter(rng.standard_normal(m + 200), [fc * 0.7, fc * 1.4], "band", 2)[200:]
        ker *= np.exp(-np.arange(m) / (ms * 1e-3 * SR)) * np.clip(np.arange(m) / 12.0, 0, 1)
        ker /= np.sqrt(np.sum(ker ** 2))
        k = int(dens * L)
        pos = rng.integers(0, n, k)
        amp = np.minimum(rng.lognormal(0, 0.6, k), 2.6)
        pan = rng.uniform(-1, 1, k)
        for ch, g in ((0, np.cos((pan + 1) * np.pi / 4)), (1, np.sin((pan + 1) * np.pi / 4))):
            imp = np.zeros(n)
            np.add.at(imp, pos, amp * g)
            w = sg.fftconvolve(imp, ker)
            ticks[:, ch] += w[:n]
            ticks[: len(w) - n, ch] += w[n:]
    ticks *= swell[:, None]
    ticks = to_level(ticks, -34.5)
    # drops landing on leaves: soft pitched 'pat' sounds
    pats = np.zeros((n, 2))
    send = np.zeros((n, 2))
    for _ in range(int(3.2 * L)):
        f = rng.uniform(450, 1500)
        d = rng.uniform(0.03, 0.07)
        m = int(d * SR)
        u = np.arange(m) / SR
        fr = f * (1 - 0.18 * u / d)
        y = np.sin(2 * np.pi * np.cumsum(fr) / SR) * np.exp(-u / (d * 0.22))
        y += 0.5 * butter(rng.standard_normal(m), [f, f * 3], "band", 1) * np.exp(-u / (d * 0.12))
        y *= np.clip(np.arange(m) / 40.0, 0, 1)
        g = min(rng.lognormal(0, 0.45), 2.0)
        t0, pan = rng.uniform(0, L), rng.uniform(-0.9, 0.9)
        add_circ(pats, y, t0, pan, g)
        add_circ(send, y, t0, pan * 0.5, g * 0.5)
    for _ in range(int(0.35 * L)):                      # a few rounder drips
        f = rng.uniform(600, 1000)
        m = int(0.09 * SR)
        u = np.arange(m) / SR
        fr = f * (1 + 0.5 * (u / 0.09) ** 2)
        y = np.sin(2 * np.pi * np.cumsum(fr) / SR) * np.exp(-u / 0.022) * np.clip(np.arange(m) / 90.0, 0, 1)
        t0, pan = rng.uniform(1.0, L - 1.0), rng.uniform(-0.7, 0.7)
        add_circ(pats, y, t0, pan, 0.9)
        add_circ(send, y, t0, pan * 0.5, 0.8)
    ir = make_ir(8, length=1.2, t60=(0.7, 0.9, 0.8, 0.5), predelay=0.02)
    pats = to_level(pats + 0.6 * circ_reverb(send, ir), -38.0)
    seam = 0.9 + 0.1 * np.sin(np.pi * t) ** 2
    return finish("amb_rain", (bed + ticks + pats) * seam[:, None], f_hi=8500)


if __name__ == "__main__":
    import sys
    which = sys.argv[1:] or ["day", "night", "rain"]
    for w in which:
        {"day": amb_day, "night": amb_night, "rain": amb_rain}[w]()
