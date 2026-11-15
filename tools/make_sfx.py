#!/usr/bin/env python3
"""
make_sfx.py - synthesises the short, soft sound effects of the game.
Every effect is faded in/out, free of hard transients and peak-normalised
to -6 dBFS.
"""
import numpy as np
import scipy.signal as sg

from synthlib import (SR, bell_note, butter, db, export, fade, guitar_body,
                      guitar_note, lufs, make_ir, n2m, pad_note, reverb,
                      shaped_noise, slow_lfo, stats, undb)

SFX_KBPS = 96
PEAK_DB = -6.0


class Canvas:
    def __init__(self, dur):
        self.n = int(dur * SR)
        self.dry = np.zeros((self.n, 2))
        self.send = np.zeros((self.n, 2))

    def add(self, y, t0, pan=0.0, gain=1.0, send=0.0):
        i0 = int(t0 * SR)
        m = min(len(y), self.n - i0)
        if m <= 0:
            return
        if y.ndim == 1:
            gl = np.cos((pan + 1) * np.pi / 4) * np.sqrt(2)
            gr = np.sin((pan + 1) * np.pi / 4) * np.sqrt(2)
            y = np.stack([gl * y, gr * y], axis=1)
        self.dry[i0:i0 + m] += gain * y[:m]
        self.send[i0:i0 + m] += gain * send * y[:m]

    def render(self, ir=None, wet=0.5, fade_out=0.15, fade_in=0.002, lp=None, hp=None):
        x = self.dry.copy()
        if ir is not None and np.any(self.send):
            w = reverb(self.send, ir)[: self.n]
            rd = np.sqrt(np.mean(self.dry ** 2)) + 1e-12
            rw = np.sqrt(np.mean(w ** 2)) + 1e-12
            x += w * (wet * rd / rw)
        if lp:
            x = butter(x, lp, "low", 2)
        if hp:
            x = butter(x, hp, "high", 2)
        return fade(x, int(fade_in * SR), int(fade_out * SR))


def out(name, x, mono=False):
    x = x - np.mean(x, axis=0)
    if mono and x.ndim == 2:
        x = x.mean(axis=1)
    x = fade(x, 48, 96)                      # guarantee zero-valued edges
    x = x * undb(PEAK_DB - db(np.max(np.abs(x))))
    d = np.abs(np.diff(x, axis=0)).max()
    stats(x, name)
    print("    start %.5f end %.5f  max sample step %.3f" %
          (np.abs(x[0]).max(), np.abs(x[-1]).max(), d))
    mp3 = export(x, name, SFX_KBPS, mono=mono)
    # MP3 coding can overshoot on noisy material: measure the decoded peak
    # and re-encode once so the delivered file really peaks at -6 dBFS.
    from analyze import load
    err = PEAK_DB - db(np.max(np.abs(load(mp3))))
    if abs(err) > 0.15:
        mp3 = export(x * undb(err), name, SFX_KBPS, mono=mono)
        print("    re-encoded with %+.2f dB -> decoded peak %.2f dBFS"
              % (err, db(np.max(np.abs(load(mp3))))))
    print("    wrote", mp3)


def env_ad(n, attack, tau):
    t = np.arange(n) / SR
    e = np.exp(-t / tau)
    na = int(attack * SR)
    e[:na] *= 0.5 - 0.5 * np.cos(np.pi * np.arange(na) / na)
    return e


def sweep(f_a, f_b, n, curve=1.0):
    u = (np.arange(n) / n) ** curve
    f = f_a * (f_b / f_a) ** u
    return 2 * np.pi * np.cumsum(f) / SR


IR_S = make_ir(91, length=1.3, t60=(0.9, 1.1, 0.9, 0.5), predelay=0.012)
IR_L = make_ir(92, length=2.4, t60=(2.0, 2.2, 1.6, 0.8), predelay=0.02)


def harp(m, dur, vel, rng):
    return guitar_note(m, dur, vel, rng, bright=1.4, pick=0.33)


# --------------------------------------------------------------------------
def sfx_water(rng):
    """watering can sprinkle: hissy spray with trickling modulation + bubbles"""
    c = Canvas(1.6)
    n = c.n
    rough = np.clip(0.62 + 0.38 * slow_lfo(n, rng, 5, 28), 0.12, None)
    for ch in range(2):
        spray = shaped_noise(n, rng, 1400, 6500, 2, tilt=-2.0) * rough
        body = shaped_noise(n, rng, 500, 1600, 2) * np.clip(0.6 + 0.4 * slow_lfo(n, rng, 3, 14), 0.1, None)
        c.dry[:, ch] += 0.30 * spray + 0.13 * body
    for _ in range(110):                              # tiny bubbling droplets
        f = rng.uniform(700, 3000)
        m = int(rng.uniform(0.014, 0.05) * SR)
        y = np.sin(sweep(f, f * rng.uniform(1.25, 1.9), m)) * env_ad(m, 0.003, m / SR * 0.3)
        c.add(y, rng.uniform(0.03, 1.32), rng.uniform(-0.6, 0.6), rng.uniform(0.1, 0.5) * 0.55)
    env = np.ones(n)
    na, nr = int(0.20 * SR), int(0.55 * SR)
    env[:na] = (0.5 - 0.5 * np.cos(np.pi * np.arange(na) / na)) ** 1.3
    env[-nr:] = (0.5 + 0.5 * np.cos(np.pi * np.arange(nr) / nr)) ** 1.5
    c.dry *= env[:, None]
    out("sfx_water", c.render(lp=7500, hp=250, fade_out=0.05))


def sfx_plant(rng):
    """soft soil 'pof' + tiny sparkle"""
    c = Canvas(0.5)
    m = int(0.3 * SR)
    thump = np.sin(sweep(165, 85, m, 0.5)) * env_ad(m, 0.007, 0.050)
    soil = butter(rng.standard_normal(m), [140, 850], "band", 2) * env_ad(m, 0.010, 0.040)
    c.add(thump, 0.0, 0, 1.0)
    c.add(soil, 0.0, 0, 0.6)
    for t0, note, v in ((0.13, "A6", 0.34), (0.19, "E7", 0.30), (0.25, "C#7", 0.22)):
        c.add(bell_note(n2m(note), 0.22, v, rng, "celesta"), t0, 0.0, 1.5, send=0.6)
    out("sfx_plant", c.render(IR_S, wet=0.25, fade_out=0.12), mono=True)


def sfx_pop(rng):
    """soft, cute pop for a growth stage"""
    n = int(0.25 * SR)
    ph = sweep(360, 1040, int(0.075 * SR), 0.8)
    ph = np.concatenate([ph, ph[-1] + 2 * np.pi * 1040 * np.arange(1, n - len(ph) + 1) / SR])
    y = (np.sin(ph) + 0.14 * np.sin(2 * ph)) * env_ad(n, 0.005, 0.042)
    y = butter(y, 4500, "low", 2)
    out("sfx_pop", fade(y, 0, int(0.06 * SR)), mono=True)


def sfx_bloom(rng):
    """gentle ascending chime arpeggio (Dmaj9)"""
    c = Canvas(1.3)
    for i, note in enumerate(("D6", "F#6", "A6", "C#7", "E7")):
        c.add(bell_note(n2m(note), 0.9, 0.40 + 0.05 * i, rng, "celesta"),
              0.01 + 0.088 * i, pan=-0.4 + 0.2 * i, gain=1.0, send=0.7)
        c.add(bell_note(n2m(note) - 12, 0.9, 0.25, rng, "musicbox"),
              0.01 + 0.088 * i + 0.01, pan=0.3 - 0.15 * i, gain=0.5, send=0.7)
    out("sfx_bloom", c.render(IR_L, wet=0.55, fade_out=0.45))


def sfx_coin(rng):
    """soft two-note chime (a fourth up)"""
    c = Canvas(0.52)
    c.add(bell_note(n2m("B5"), 0.4, 0.5, rng, "musicbox"), 0.005, -0.1, 1.0, send=0.5)
    c.add(bell_note(n2m("E6"), 0.4, 0.56, rng, "musicbox"), 0.095, 0.1, 1.0, send=0.5)
    c.add(bell_note(n2m("E7"), 0.3, 0.25, rng, "celesta"), 0.098, 0.0, 0.3, send=0.5)
    out("sfx_coin", c.render(IR_S, wet=0.3, fade_out=0.18), mono=True)


def sfx_buy(rng):
    """pleasant purchase: soft thud, then a quick plucked major triad + bell"""
    c = Canvas(0.62)
    m = int(0.2 * SR)
    c.add(np.sin(sweep(190, 110, m, 0.5)) * env_ad(m, 0.006, 0.04), 0.0, 0, 0.55)
    plk = np.zeros((c.n, 2))
    for i, (note, v) in enumerate((("G4", 0.6), ("B4", 0.62), ("D5", 0.66), ("G5", 0.7))):
        y = harp(n2m(note), 0.45, v, rng)
        i0 = int((0.035 + 0.058 * i) * SR)
        mm = min(len(y), c.n - i0)
        plk[i0:i0 + mm] += y[:mm, None]
    plk = guitar_body(plk)
    c.dry += plk
    c.send += 0.5 * plk
    c.add(bell_note(n2m("D6"), 0.35, 0.42, rng, "celesta"), 0.215, 0.0, 0.55, send=0.6)
    c.add(bell_note(n2m("G6"), 0.35, 0.36, rng, "celesta"), 0.225, 0.0, 0.45, send=0.6)
    out("sfx_buy", c.render(IR_S, wet=0.3, fade_out=0.2), mono=True)


def sfx_click(rng):
    """very soft UI tick"""
    n = int(0.08 * SR)
    t = np.arange(n) / SR
    y = np.sin(2 * np.pi * 1250 * t) * env_ad(n, 0.0025, 0.011)
    y += 0.35 * np.sin(2 * np.pi * 2500 * t + 0.4) * env_ad(n, 0.002, 0.006)
    y += 0.15 * butter(rng.standard_normal(n), [1500, 5000], "band", 1) * env_ad(n, 0.002, 0.005)
    out("sfx_click", fade(y, 0, int(0.03 * SR)), mono=True)


def sfx_levelup(rng):
    """warm little fanfare: harp arpeggio up, bell chord, a twinkle"""
    c = Canvas(2.15)
    plk = np.zeros((c.n, 2))
    arp = ("D4", "A4", "D5", "F#5", "A5", "D6")
    for i, note in enumerate(arp):
        y = harp(n2m(note), 1.6, 0.55 + 0.04 * i, rng)
        i0 = int((0.01 + 0.078 * i) * SR)
        mm = min(len(y), c.n - i0)
        pan = -0.5 + i * 0.2
        plk[i0:i0 + mm, 0] += y[:mm] * np.cos((pan + 1) * np.pi / 4) * 1.4
        plk[i0:i0 + mm, 1] += y[:mm] * np.sin((pan + 1) * np.pi / 4) * 1.4
    plk = guitar_body(plk)
    c.dry += plk
    c.send += 0.6 * plk
    for j, (note, v) in enumerate((("F#6", 0.5), ("A6", 0.5), ("D7", 0.55))):       # bell chord
        c.add(bell_note(n2m(note), 1.3, v, rng, "celesta"), 0.52 + 0.035 * j,
              pan=-0.3 + 0.3 * j, gain=0.75, send=0.7)
    c.add(bell_note(n2m("D6"), 1.3, 0.5, rng, "musicbox"), 0.52, 0.0, 0.6, send=0.7)
    for j, note in enumerate(("A6", "B6", "F#7")):                                    # twinkle
        c.add(bell_note(n2m(note), 0.8, 0.35, rng, "celesta"), 0.86 + 0.11 * j,
              pan=0.5 - 0.5 * j, gain=0.45, send=0.8)
    for note in ("D3", "A3", "F#4", "E4"):                                            # warm bed
        c.add(pad_note(n2m(note), 0.9, rng, "warm", att=0.35, rel=0.9), 0.05, gain=0.42, send=0.5)
    out("sfx_levelup", c.render(IR_L, wet=0.5, fade_out=0.7))


def sfx_expand(rng):
    """'new area unlocked': shimmering swell that opens into a chord"""
    c = Canvas(2.6)
    for note in ("D3", "A3", "E4", "F#4", "A4", "D5"):                                # swelling strings
        c.add(pad_note(n2m(note), 1.25, rng, "strings", att=1.15, rel=1.2, bright=1.2),
              0.0, gain=0.45, send=0.5)
    scale = [n2m(x) for x in ("D6", "E6", "F#6", "A6", "B6", "D7", "E7", "F#7")]
    for k in range(22):                                                              # shimmer
        u = (k + rng.random()) / 22.0
        t0 = 0.08 + 1.25 * u ** 0.8
        c.add(bell_note(int(rng.choice(scale)), 0.6, 0.22 + 0.25 * u, rng, "celesta"),
              t0, pan=rng.uniform(-0.8, 0.8), gain=0.35 + 0.35 * u, send=0.9)
    plk = np.zeros((c.n, 2))
    gl = ("D4", "F#4", "A4", "B4", "D5", "E5", "F#5", "A5", "D6")
    for i, note in enumerate(gl):                                                    # harp glissando
        y = harp(n2m(note), 1.2, 0.5 + 0.03 * i, rng)
        i0 = int((0.98 + 0.036 * i) * SR)
        mm = min(len(y), c.n - i0)
        plk[i0:i0 + mm] += y[:mm, None] * 0.9
    plk = guitar_body(plk)
    c.dry += plk
    c.send += 0.6 * plk
    for j, (note, v) in enumerate((("D6", 0.55), ("A6", 0.5), ("F#7", 0.5), ("E7", 0.4))):   # bloom
        c.add(bell_note(n2m(note), 1.3, v, rng, "celesta"), 1.32 + 0.03 * j,
              pan=-0.45 + 0.3 * j, gain=0.8, send=0.8)
    out("sfx_expand", c.render(IR_L, wet=0.6, fade_out=0.9, fade_in=0.01))


def sfx_step(rng):
    """extremely soft footstep on grass"""
    n = int(0.12 * SR)
    t = np.arange(n) / SR
    na = int(0.014 * SR)
    env = np.exp(-t / 0.026)
    env[:na] *= 0.5 - 0.5 * np.cos(np.pi * np.arange(na) / na)
    crunch = butter(rng.standard_normal(n + 400), [380, 3200], "band", 2)[400:]
    crunch *= np.clip(0.7 + 0.5 * butter(rng.standard_normal(n + 400), 90, "low", 1)[400:] * 12, 0.2, 1.6)
    y = crunch * env + 0.45 * np.sin(sweep(130, 95, n)) * env_ad(n, 0.012, 0.03)
    y = butter(y, 3800, "low", 2)
    out("sfx_step", fade(y, 0, int(0.04 * SR)), mono=True)


def sfx_error(rng):
    """gentle low 'nope' double thud"""
    n = int(0.25 * SR)
    y = np.zeros(n)
    for t0, f, g in ((0.0, 233.1, 1.0), (0.105, 174.6, 0.9)):
        m = int(0.13 * SR)
        ph = sweep(f * 1.04, f * 0.94, m)
        th = (np.sin(ph) + 0.32 * np.sin(2 * ph + 0.3) + 0.12 * np.sin(3 * ph)) * env_ad(m, 0.008, 0.034)
        i0 = int(t0 * SR)
        y[i0:i0 + m] += g * th[: n - i0]
    y = butter(y, 1100, "low", 2)
    out("sfx_error", fade(y, 0, int(0.03 * SR)), mono=True)


ALL = [sfx_water, sfx_plant, sfx_pop, sfx_bloom, sfx_coin, sfx_buy, sfx_click,
       sfx_levelup, sfx_expand, sfx_step, sfx_error]

if __name__ == "__main__":
    import sys
    want = sys.argv[1:]
    for i, fn in enumerate(ALL):
        if want and fn.__name__ not in want and fn.__name__[4:] not in want:
            continue
        fn(np.random.default_rng(900 + i))
