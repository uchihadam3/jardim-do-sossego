import * as THREE from 'three';
import { T, RX, RY, RZ, S, mul, frame, col, mixc, shade, jitterc, bez, polyAt, lerp, clamp, TAU } from './util.js';

const V3 = THREE.Vector3;
export const G = {
  leaf: col(0x4c8a3a), dark: col(0x2c6634), light: col(0x9ccc5e), stem: col(0x5a8f3c), gray: col(0x7f9c7c),
  blue: col(0x6fa08c), wood: col(0x6e4a33), woodDark: col(0x4f3424), lime: col(0x79b548), deep: col(0x24552e),
};
const GOLD = 2.39996323, W_ = col(0xffffff);
const pv = (x, f) => (Array.isArray(x) ? lerp(x[0], x[1], f) : x);

// ---------- leaves ----------
const LEAF = { a: 0.75, b: 0.75, cup: 0, fold: 0.35, curl: 0.5, curlPow: 1.3, nu: 4, nv: 2, vein: 0.3 };
export function leaf(b, M, rng, o) {
  const c = jitterc(o.c ?? G.leaf, rng, 0.05);
  b.petal(M, { ...LEAF, ...o, cols: [shade(c, 0.7), c, mixc(c, o.tip ?? G.light, o.tipMix ?? 0.3)] });
}
export function leavesAlong(b, pts, rng, o) {
  const n = o.n;
  for (let i = 0; i < n; i++) {
    const t = lerp(o.t0 ?? 0.15, o.t1 ?? 0.85, (i + rng() * 0.6) / n);
    const { p } = polyAt(pts, t);
    const az = (o.az0 ?? 0) + i * (o.azStep ?? GOLD) + rng.range(-0.3, 0.3);
    const k = (1 - (o.taper ?? 0.3) * t) * (0.85 + rng() * 0.3);
    const M = mul(T(p.x, p.y, p.z), RY(az), RX((o.tilt ?? 1.0) + rng.range(-0.2, 0.2)));
    leaf(b, M, rng, { ...o, L: o.L * k, W: o.W * k });
  }
}
export function basalLeaves(b, rng, o) {
  for (let i = 0; i < o.n; i++) {
    const az = i * GOLD + rng.range(-0.25, 0.25), k = 0.75 + rng() * 0.4;
    const M = mul(RY(az), T(0, 0, o.r ?? 0.005), RX((o.tilt ?? 0.9) + rng.range(-0.2, 0.2)));
    leaf(b, M, rng, { ...o, L: o.L * k, W: o.W * k });
  }
}
// leaflets fanned from a point (palmate / compound)
export function fanLeaf(b, M, rng, o) {
  const n = o.n;
  for (let i = 0; i < n; i++) {
    const f = n > 1 ? i / (n - 1) - 0.5 : 0;
    const k = 1 - Math.abs(f) * (o.sideShrink ?? 0.5);
    leaf(b, mul(M, RZ(-f * (o.spread ?? 2.2))), rng, { ...o, L: o.L * k, W: o.W * k });
  }
}

export function mkStem(rng, H, lean, az, wob = 0.06, n = 6) {
  const dx = Math.cos(az), dz = Math.sin(az);
  return bez(new V3(0, 0, 0), new V3(dx * lean * 0.2 + rng.range(-wob, wob) * H, H * 0.55, dz * lean * 0.2 + rng.range(-wob, wob) * H), new V3(dx * lean, H, dz * lean), n);
}
export function tipFrame(pts, extraTilt = 0, az = 0) {
  const { p, d } = polyAt(pts, 1);
  const M = frame(p, d);
  return extraTilt ? mul(T(p.x, p.y, p.z), RY(-az + Math.PI / 2), RX(extraTilt)) : M;
}

// ---------- flower head ----------
// spec.layers[]: n, golden, L, W, a, b, tilt (open), tiltC (closed), curl, curlC, cup, r, y, ruffle, cols, cols2 ... values may be [inner, outer]
export function head(b, M, rng, sp, open, k = 1) {
  open = clamp(open, 0, 1);
  if (sp.sepals) {
    const s = sp.sepals;
    for (let i = 0; i < s.n; i++) {
      const Mp = mul(M, RY((i / s.n) * TAU + 0.3), T(0, 0, (s.r ?? 0.002) * k), RX(lerp(0.25, s.tilt ?? 1.3, open)));
      b.petal(Mp, { L: s.L * k, W: s.W * k, a: 0.8, b: 0.8, cup: 0.5, curl: 0.3, nu: 3, nv: 2, cols: [shade(s.c ?? G.leaf, 0.8), s.c ?? G.leaf, s.c ?? G.leaf] });
    }
  }
  let az0 = rng() * TAU;
  for (const ly of sp.layers) {
    if (ly.azList) az0 = az0;
    const n = ly.n;
    for (let i = 0; i < n; i++) {
      const f = n > 1 ? i / (n - 1) : 1;
      const az = az0 + (ly.azList ? ly.azList[i] : ly.golden ? i * GOLD : (i / n) * TAU) + rng.range(-1, 1) * (ly.jit ?? 0.06) + (ly.az ?? 0);
      const tilt = lerp(pv(ly.tiltC ?? 0.1, f), pv(ly.tilt, f), open) + rng.range(-1, 1) * (ly.tj ?? 0.05);
      const curl = lerp(pv(ly.curlC ?? -0.2, f), pv(ly.curl ?? 0, f), open);
      const sc = lerp(ly.closedScale ?? 0.6, 1, open) * k * (1 + rng.range(-0.07, 0.07));
      const Mp = mul(M, RY(az), T(0, pv(ly.y ?? 0, f) * k, pv(ly.r ?? 0.002, f) * k), RX(tilt));
      let cols = ly.cols;
      if (ly.cols2) cols = cols.map((c, j) => mixc(c, ly.cols2[j], f));
      if (ly.pick) cols = ly.pick;
      const jc = ly.cj ?? 0.035;
      b.petal(Mp, {
        L: pv(ly.L, f) * sc, W: pv(ly.W, f) * sc, a: ly.a ?? 1.2, b: ly.b ?? 0.55, cup: lerp(pv(ly.cupC ?? ly.cup ?? 0.4, f) , pv(ly.cup ?? 0.4, f), open),
        curl, curlPow: ly.curlPow ?? 1.6, ruffle: ly.ruffle ?? 0, rf: ly.rf ?? 2, phase: rng() * 6, twist: ly.twist ? rng.range(-ly.twist, ly.twist) : 0,
        nu: ly.nu ?? 5, nv: ly.nv ?? 4, vein: ly.vein ?? 0.12, tipNotch: ly.notch ?? 0, base: ly.base ?? 0,
        cols: [jitterc(cols[0], rng, jc), jitterc(cols[1], rng, jc), jitterc(cols[2], rng, jc)],
      });
    }
    az0 += ly.azStep ?? Math.PI / Math.max(1, n);
  }
  const c = sp.center;
  if (!c) return;
  if (c.type === 'dome') {
    b.blob(mul(M, T(0, (c.y ?? 0) * k, 0)), c.r * k, c.h * k, c.cols[0], c.cols[1], c.seg ?? 10, 5, c.cols[2]);
  }
  if (c.stamens && open > 0.35) {
    const s = c.stamens;
    for (let i = 0; i < s.n; i++) {
      const az = (i / s.n) * TAU + rng() * 0.3, sp2 = (s.spread ?? 0.4) * (0.6 + rng() * 0.6);
      const L = s.len * k * (0.8 + rng() * 0.3);
      const pts = bez(new V3(0, 0, 0), new V3(Math.cos(az) * sp2 * L * 0.3, L * 0.6, Math.sin(az) * sp2 * L * 0.3), new V3(Math.cos(az) * sp2 * L, L * (1 - sp2 * 0.3), Math.sin(az) * sp2 * L), 3);
      b.tube(M, pts, 0.0012 * k * (s.thick ?? 1), 0.001 * k * (s.thick ?? 1), s.c, s.c, 3);
      const p = pts[3];
      b.blob(mul(M, T(p.x, p.y, p.z)), (s.tipR ?? 0.004) * k, (s.tipR ?? 0.004) * k * 1.4, s.tip, s.tip, 4, 3);
    }
  }
  if (c.type === 'trumpet') {
    const o = lerp(0.55, 1, open);
    const prof = [[c.r0 * 0.6, 0], [c.r0, c.L * 0.3], [lerp(c.r0, c.r1, 0.5) * o, c.L * 0.75], [c.r1 * o, c.L], [c.r1 * o * 1.12, c.L * 1.03]].map(([r, y]) => [r * k, y * k]);
    b.lathe(M, prof, c.cols[0], c.cols[1], c.seg ?? 12, null, c.ruffle ?? 0.1, c.rf ?? 6);
  }
  if (c.type === 'column' && open > 0.3) {
    const pts = bez(new V3(0, 0, 0), new V3(0, c.L * 0.5 * k, 0.004), new V3(0, c.L * k, 0.012 * k), 4);
    b.tube(M, pts, 0.004 * k, 0.003 * k, c.cols[0], c.cols[1], 4);
    for (let i = 0; i < 10; i++) {
      const t = 0.55 + rng() * 0.4, p = polyAt(pts, t).p, az = rng() * TAU;
      b.blob(mul(M, T(p.x + Math.cos(az) * 0.008 * k, p.y, p.z + Math.sin(az) * 0.008 * k)), 0.0035 * k, 0.0035 * k, c.dots, c.dots, 4, 3);
    }
    const p = pts[4];
    b.blob(mul(M, T(p.x, p.y, p.z)), 0.006 * k, 0.005 * k, c.cols[1], c.cols[1], 5, 3);
  }
  if (c.type === 'spadix') {
    b.blob(mul(M, T(0, c.L * 0.5 * k, 0)), c.r * k, c.L * 0.5 * k, c.cols[0], c.cols[1], 6, 5);
  }
}

// ball of little 4-petal florets (hydrangea / geranium umbel)
export function floretBall(b, M, rng, o, open) {
  const n = Math.round(o.n * lerp(0.5, 1, open)), r = o.r * lerp(0.55, 1, open);
  for (let i = 0; i < n; i++) {
    const y = 1 - ((i + 0.5) / n) * (1 + (o.cover ?? 0.6)), rr = Math.sqrt(Math.max(0, 1 - y * y)), th = i * GOLD;
    const nx = Math.cos(th) * rr, nz = Math.sin(th) * rr;
    const c = open < 0.3 ? mixc(o.bud ?? G.lime, rng.pick(o.cols), open * 2) : jitterc(rng.pick(o.cols), rng, 0.05);
    const c1 = mixc(c, col(0xffffff), 0.25);
    const Mf = mul(M, frame(new V3(nx * r, y * r * (o.squash ?? 0.8), nz * r), new V3(nx, y, nz)), RY(rng() * TAU));
    const s = o.fs * (0.8 + rng() * 0.4), np = o.np ?? 4, tl = 1.25;
    for (let j = 0; j < np; j++) b.card(mul(Mf, RY((j / np) * TAU), RX(tl)), s * 0.9, s, c, c1, 0, Math.cos(tl), -Math.sin(tl), 0.15);
  }
}

// ---------- habits ----------
export function sprout(b, rng, c = G.lime) {
  const pts = mkStem(rng, 0.06, 0.01, rng() * TAU, 0.05, 3);
  b.tube(null, pts, 0.004, 0.003, mixc(c, col(0xffffff), 0.3), c, 4);
  const p = pts[3];
  for (let i = 0; i < 2; i++) leaf(b, mul(T(p.x, p.y, p.z), RY(i * Math.PI + 0.4), RX(1.0)), rng, { L: 0.05, W: 0.03, c, a: 0.9, b: 0.6, fold: 0.2, curl: 0.4 });
  leaf(b, mul(T(p.x, p.y, p.z), RY(1.9), RX(0.3)), rng, { L: 0.028, W: 0.014, c, a: 0.9, b: 0.7 });
}

// several upright stems with a head each
export function habitStems(b, rng, P, g, open) {
  const n = Math.round(rng.range(P.stems[0], P.stems[1]));
  if (P.basal) basalLeaves(b, rng, { ...P.basal, L: P.basal.L * g, W: P.basal.W * g, n: Math.round(P.basal.n * (0.5 + g * 0.5)) });
  for (let i = 0; i < n; i++) {
    const az = P.faceZ ? Math.PI / 2 + rng.range(-0.5, 0.5) : i * GOLD + rng.range(-0.4, 0.4);
    const spread = n > 1 ? (P.spread ?? 0.06) * Math.sqrt((i + 0.5) / n) : 0;
    const H = P.H * g * rng.range(0.78, 1.08), lean = (P.lean ?? 0.08) * H * rng.range(0.4, 1.3) + spread;
    const pts = mkStem(rng, H, lean, az, P.wob ?? 0.05, 7);
    const M0 = T(Math.cos(az) * spread * 0.5, 0, Math.sin(az) * spread * 0.5);
    for (const p of pts) p.applyMatrix4(M0);
    const sr = (P.stemR ?? 0.004) * (0.6 + 0.4 * g);
    b.tube(null, pts, sr, sr * 0.65, P.stemC ?? G.stem, mixc(P.stemC ?? G.stem, G.light, 0.2), 5);
    if (P.leaf) leavesAlong(b, pts, rng, { ...P.leaf, L: P.leaf.L * (0.5 + 0.5 * g), W: P.leaf.W * (0.5 + 0.5 * g), n: Math.max(1, Math.round(P.leaf.n * g)) });
    if (open >= 0 && P.head) {
      const o = clamp(open + rng.range(-0.12, 0.12) * (open > 0.9 ? 0 : 1), 0, 1);
      const nh = P.headsPer ?? 1;
      for (let h = 0; h < nh; h++) {
        let pp = pts, hz = az;
        if (nh > 1) { // short pedicels near the top
          const { p } = polyAt(pts, 0.86 + 0.14 * (h / nh));
          hz = az + h * 2.1 + rng();
          const L = P.pedicel ?? 0.08;
          pp = bez(p, new V3(p.x + Math.cos(hz) * L * 0.3, p.y + L * 0.7, p.z + Math.sin(hz) * L * 0.3), new V3(p.x + Math.cos(hz) * L, p.y + L, p.z + Math.sin(hz) * L), 3);
          b.tube(null, pp, sr * 0.5, sr * 0.4, G.stem, G.stem, 4);
        }
        const sp = typeof P.head === 'function' ? P.head(rng) : P.head;
        const tilt = (P.headTilt ?? 0) * (0.7 + 0.3 * o) + rng.range(-0.1, 0.1);
        head(b, tipFrame(pp, tilt, hz), rng, sp, o, P.headK ?? 1);
      }
    }
  }
}

// rounded shrub: woody branches, dense leaves, heads on the dome
export function habitBush(b, rng, P, g, open) {
  const R = P.R * g, H = P.H * g, nb = Math.max(3, Math.round(P.branches * (0.5 + 0.5 * g)));
  const tips = [];
  for (let i = 0; i < nb; i++) {
    const az = i * GOLD + rng.range(-0.3, 0.3), f = (i + 0.5) / nb;
    const el = lerp(0.15, 1.0, Math.sqrt(f)) * (P.splay ?? 1); // angle from vertical
    const len = lerp(H, Math.hypot(R, H * 0.6), f) * rng.range(0.85, 1.05);
    const tip = new V3(Math.cos(az) * Math.sin(el) * len, Math.cos(el) * len, Math.sin(az) * Math.sin(el) * len);
    tip.x = clamp(tip.x, -R, R); tip.z = clamp(tip.z, -R, R);
    const pts = bez(new V3(0, 0, 0), new V3(tip.x * 0.35, tip.y * 0.75, tip.z * 0.35), tip, 6);
    b.tube(null, pts, (P.stemR ?? 0.006) * (0.5 + 0.5 * g), 0.002, P.wood ?? G.wood, P.stemC ?? G.stem, 4);
    leavesAlong(b, pts, rng, { ...P.leaf, n: Math.round(P.leaf.n * (0.6 + 0.4 * g)), t0: 0.25, t1: 1.0, taper: 0.1 });
    if (P.leafTip) fanLeaf(b, mul(T(tip.x, tip.y, tip.z), RY(az), RX(0.7)), rng, P.leafTip);
    tips.push({ pts, az });
  }
  for (let i = 0; i < Math.round((P.fill ?? 24) * g); i++) {
    const az = rng() * TAU, el = Math.acos(rng()) * (P.splay ?? 1), k = rng.range(0.5, 0.92);
    const d = new V3(Math.cos(az) * Math.sin(el), Math.cos(el), Math.sin(az) * Math.sin(el));
    const p = new V3(d.x * R * k, d.y * H * k * 1.05, d.z * R * k);
    leaf(b, frame(p, d.clone().add(new V3(0, 0.5, 0)).normalize()), rng, { ...P.leaf, L: P.leaf.L * rng.range(0.9, 1.3), W: P.leaf.W * rng.range(0.9, 1.3) });
  }
  if (open >= 0 && P.head) {
    const nh = Math.max(1, Math.round(P.heads * (0.6 + 0.4 * g)));
    for (let i = 0; i < nh; i++) {
      const t = tips[i % tips.length], extra = i >= tips.length;
      let pts = t.pts, az = t.az;
      if (extra || P.stalk) { // extra flowering stalks from inside the bush
        az = i * GOLD * 1.3 + rng(); const f = rng.range(0.2, 0.95), el = f * 0.95 * (P.splay ?? 1);
        const len = lerp(H, Math.hypot(R, H * 0.6), f) * (1.0 + (P.stalk ?? 0.06));
        const tip = new V3(Math.cos(az) * Math.sin(el) * len, Math.cos(el) * len, Math.sin(az) * Math.sin(el) * len);
        pts = bez(new V3(0, 0, 0), new V3(tip.x * 0.3, tip.y * 0.8, tip.z * 0.3), tip, 5);
        b.tube(null, pts, 0.003, 0.002, P.stemC ?? G.stem, P.stemC ?? G.stem, 4);
      }
      const o = clamp(open + (open > 0.9 ? 0 : rng.range(-0.1, 0.1)), 0, 1);
      const sp = typeof P.head === 'function' ? P.head(rng) : P.head;
      const { p, d } = polyAt(pts, 1);
      const dir = d.clone().lerp(new V3(0, 1, 0), P.headUp ?? 0.45).normalize();
      if (sp.ball) floretBall(b, frame(p, dir), rng, sp.ball, o);
      else head(b, frame(p, dir), rng, sp, o, P.headK ?? 1);
    }
  }
}

// flower spikes (lavender, delphinium, foxglove, lupin)
export function habitSpike(b, rng, P, g, open) {
  if (P.basal) basalLeaves(b, rng, { ...P.basal, L: P.basal.L * g, W: P.basal.W * g });
  if (P.basalFan) for (let i = 0; i < P.basalFan.count; i++) {
    const az = i * GOLD, L = P.basalFan.stalk * g * rng.range(0.7, 1.1);
    const pts = bez(new V3(0, 0, 0), new V3(Math.cos(az) * L * 0.3, L * 0.7, Math.sin(az) * L * 0.3), new V3(Math.cos(az) * L * 0.8, L * 0.8, Math.sin(az) * L * 0.8), 4);
    b.tube(null, pts, 0.003, 0.002, G.stem, G.stem, 4);
    const p = pts[4];
    fanLeaf(b, mul(T(p.x, p.y, p.z), RY(-az + Math.PI / 2), RX(1.2)), rng, { ...P.basalFan, L: P.basalFan.L * g, W: P.basalFan.W * g });
  }
  const n = Math.round(rng.range(P.stems[0], P.stems[1]) * (0.5 + 0.5 * g));
  for (let i = 0; i < n; i++) {
    const az = i * GOLD + rng(), H = P.H * g * rng.range(0.75, 1.1);
    const pts = mkStem(rng, H, (P.lean ?? 0.18) * H * Math.sqrt((i + 0.3) / n), az, 0.03, 8);
    b.tube(null, pts, P.stemR ?? 0.004, 0.002, P.stemC ?? G.stem, P.stemC ?? G.stem, 4);
    if (P.leaf) leavesAlong(b, pts, rng, { ...P.leaf, n: Math.round(P.leaf.n * g), t0: 0.05, t1: P.from ?? 0.5 });
    if (open < 0) continue;
    const nf = Math.round(P.florets * (0.6 + 0.4 * g)), from = P.from ?? 0.55;
    for (let k = 0; k < nf; k++) {
      const f = k / (nf - 1), t = lerp(from, 1, f);
      const { p, d } = polyAt(pts, t);
      const fa = k * (P.whorl ?? GOLD) + rng() * 0.3;
      const blooming = clamp(open * 1.6 - f * 0.6, 0, 1); // opens from the bottom up
      const size = (1 - f * (P.taper ?? 0.5)) * lerp(0.45, 1, blooming);
      const c = mixc(P.cols[0], P.cols[1], f * 0.8 + rng() * 0.2), cb = mixc(P.bud ?? G.lime, c, clamp(blooming * 1.5, 0, 1));
      const Mf = mul(frame(p, d), RY(fa), T(0, 0, P.off ?? 0.006));
      if (P.type === 'card') {
        for (let j = 0; j < 2; j++) b.card(mul(Mf, RY(j * 0.9 - 0.45), RX(lerp(0.5, 1.0, blooming))), P.fs * size, P.fs * 1.5 * size, shade(cb, 0.75), mixc(cb, col(0xffffff), 0.2), 0, 0.5, 0.86, 0.3);
      } else if (P.type === 'bell') {
        const s = P.fs * size, Mb = mul(Mf, RX(2.0));
        b.lathe(Mb, [[s * 0.18, 0], [s * 0.3, s * 0.35], [s * 0.36, s * 0.8], [s * 0.5, s]], shade(cb, 0.85), mixc(cb, col(0xffffff), 0.25), 6, null, 0.1, 5);
      } else {
        head(b, mul(Mf, RX(1.25)), rng, { layers: [{ n: 5, L: P.fs, W: P.fs * 0.85, a: 1.2, b: 0.5, tilt: 1.15, tiltC: 0.15, cup: 0.5, curl: 0.2, nu: 2, nv: 2, cols: [shade(cb, 0.8), cb, mixc(cb, col(0xffffff), 0.15)] }], center: P.eye ? { type: 'dome', r: P.fs * 0.22, h: P.fs * 0.15, cols: [P.eye, P.eye] , seg: 5 } : null }, blooming, size);
      }
    }
  }
}

// arching / trailing stems for baskets, window boxes and ferns
export function habitCascade(b, rng, P, g, open) {
  const n = Math.round(P.stems * (0.5 + 0.5 * g));
  for (let i = 0; i < n; i++) {
    const az = i * GOLD + rng.range(-0.2, 0.2), f = (i + 0.5) / n;
    const L = P.L * g * rng.range(0.7, 1.1), up = P.up * (1 - f * (P.upFall ?? 0.6)), out = P.out * rng.range(0.7, 1.1), drop = P.drop * f * rng.range(0.6, 1.2);
    const dx = Math.cos(az), dz = Math.sin(az);
    const pts = bez(new V3(dx * 0.02, 0, dz * 0.02), new V3(dx * out * L * 0.6, up * L, dz * out * L * 0.6), new V3(dx * out * L, (up * 0.4 - drop) * L, dz * out * L), 9);
    b.tube(null, pts, P.stemR ?? 0.003, 0.0015, P.stemC ?? G.stem, P.stemC ?? G.stem, 4);
    if (P.frond) { // paired leaflets (fern)
      const m = P.frond.pairs;
      for (let k = 1; k <= m; k++) {
        const t = k / (m + 1), { p, d } = polyAt(pts, t);
        const w = Math.sin(Math.PI * Math.pow(t, 0.7)) * P.frond.L * g + 0.01;
        const side = new V3(-d.z, 0, d.x).normalize();
        for (const s of [-1, 1]) {
          const dir = side.clone().multiplyScalar(s).add(d.clone().multiplyScalar(0.45)).add(new V3(0, -0.25, 0)).normalize();
          leaf(b, frame(p, dir), rng, { L: w, W: w * P.frond.wr, c: P.frond.c, a: 0.7, b: 0.8, nu: 2, nv: 1, fold: 0.2, curl: 0.3, vein: 0.2 });
        }
      }
    } else {
      const m = Math.round(P.leaf.n * (0.5 + 0.5 * g));
      for (let k = 0; k < m; k++) {
        const t = lerp(0.12, 1, (k + rng() * 0.5) / m), { p, d } = polyAt(pts, t);
        const dir = new V3(rng.range(-1, 1), rng.range(0.1, 1), rng.range(-1, 1)).add(d.clone().multiplyScalar(0.5)).normalize();
        leaf(b, frame(p, dir), rng, { ...P.leaf, L: P.leaf.L * rng.range(0.7, 1.15), W: P.leaf.W * rng.range(0.7, 1.15) });
      }
    }
    if (open >= 0 && P.flower) {
      const nf = P.flower.per;
      for (let k = 0; k < nf; k++) {
        const t = lerp(0.35, 1, (k + rng()) / nf), { p, d } = polyAt(pts, t);
        const dir = new V3(dx * 0.7, 0.55, dz * 0.7).add(new V3(rng.range(-0.4, 0.4), rng.range(-0.1, 0.4), rng.range(-0.4, 0.4))).normalize();
        const q = p.clone().add(dir.clone().multiplyScalar(0.025));
        P.flower.make(b, frame(q, dir), rng, clamp(open + rng.range(-0.15, 0.1), 0, 1));
      }
    }
  }
}

// tree: trunk, limbs, leaf/blossom clouds with soft spherical normals
export function habitTree(b, rng, P, g, open) {
  const H = P.H * g, R = P.R * g, cy = H + R * 0.55;
  const bark = P.bark ?? G.wood, bark2 = shade(bark, 0.75);
  const lean = rng.range(-0.08, 0.08) * H;
  const trunk = bez(new V3(0, 0, 0), new V3(lean, H * 0.5, rng.range(-0.05, 0.05) * H), new V3(lean * 0.5, H, 0), 6);
  const tr = P.trunkR * (0.35 + 0.65 * g);
  b.tube(null, trunk, (t) => tr * (1.25 - 0.55 * t + 0.5 * Math.pow(1 - t, 6)), 0, bark2, bark, 8);
  const top = trunk[6];
  const nb = Math.max(3, Math.round(P.limbs * (0.5 + 0.5 * g)));
  const ends = [];
  for (let i = 0; i < nb; i++) {
    const az = i * GOLD + rng.range(-0.3, 0.3), el = lerp(0.25, 1.25, (i + 0.5) / nb), len = R * rng.range(0.75, 1.05);
    const start = polyAt(trunk, rng.range(0.7, 1.0)).p;
    const tip = new V3(start.x + Math.cos(az) * Math.sin(el) * len, top.y + Math.cos(el) * len * 0.9 + R * 0.15, start.z + Math.sin(az) * Math.sin(el) * len);
    const pts = bez(start, new V3(lerp(start.x, tip.x, 0.4), lerp(start.y, tip.y, 0.75), lerp(start.z, tip.z, 0.4)), tip, 5);
    b.tube(null, pts, tr * 0.42, tr * 0.1, bark, bark, 5);
    ends.push(tip, polyAt(pts, 0.6).p);
    for (let j = 0; j < 2; j++) {
      const s = polyAt(pts, rng.range(0.35, 0.8)).p, a2 = az + rng.range(-1.2, 1.2), l2 = len * rng.range(0.35, 0.6);
      const t2 = new V3(s.x + Math.cos(a2) * l2, s.y + l2 * rng.range(0.2, 0.8), s.z + Math.sin(a2) * l2);
      b.tube(null, [s, s.clone().lerp(t2, 0.5).add(new V3(0, l2 * 0.1, 0)), t2], tr * 0.16, tr * 0.05, bark, bark, 4);
      ends.push(t2);
    }
  }
  const centre = new V3(lean * 0.5, cy, 0), nrm = new V3(), q = new V3(), dir = new V3(), tx = new V3(), ty = new V3();
  const bloom = open < 0 ? 0 : open;
  const fol = lerp(1, P.foliage ?? 1, bloom);
  const leafCols = P.leafCols ?? [G.leaf, G.dark, G.lime];
  // leafy masses: a soft core blob per branch end, dressed with leaf / blossom cards
  const masses = ends.map((e) => ({ c: e.clone().add(new V3(0, R * 0.08, 0)), r: R * rng.range(0.27, 0.4) }));
  masses.push({ c: new V3(top.x, top.y + R * 0.75, top.z), r: R * 0.45 });
  const coreC = P.blossom && bloom > 0.5 && fol < 0.6 ? shade(P.blossom.cols[0], 0.9) : shade(leafCols[0], 0.6);
  for (const m of masses) b.blob(mul(T(m.c.x, m.c.y, m.c.z), RY(rng() * 3)), m.r * 0.66, m.r * 0.52, shade(coreC, 0.62), shade(coreC, 1.05), 7, 5);
  const cloud = (count, size, cols, sizeJ, push) => {
    for (let i = 0; i < count; i++) {
      const m = masses[Math.floor(rng() * masses.length)];
      dir.set(rng.range(-1, 1), rng.range(-0.75, 1), rng.range(-1, 1)).normalize();
      q.copy(dir).multiplyScalar(m.r * rng.range(0.66, 1.04) + push); q.y *= 0.8; q.add(m.c);
      nrm.copy(q).sub(centre).normalize().lerp(dir, 0.45); nrm.y += 0.3; nrm.normalize();
      tx.set(rng.range(-1, 1), rng.range(-1, 1), rng.range(-1, 1)); ty.crossVectors(dir, tx).normalize(); tx.crossVectors(ty, dir).normalize();
      q.addScaledVector(ty, -size * 0.4);
      const M = new THREE.Matrix4().makeBasis(tx, ty, dir.clone().addScaledVector(ty, rng.range(-0.5, 0.5)).normalize()).setPosition(q);
      const c = jitterc(rng.pick(cols), rng, 0.05), s = size * (1 - sizeJ + rng() * sizeJ * 2);
      const ln = nrm.clone().applyMatrix3(new THREE.Matrix3().setFromMatrix4(M).invert()).normalize();
      b.card(M, s * 0.52, s * 1.12, shade(c, 0.74), c, ln.x, ln.y, ln.z, 0.25);
    }
  };
  cloud(Math.round((P.leaves ?? 800) * 1.35 * g * fol), (P.leafSize ?? 0.19) * (0.6 + 0.4 * g), leafCols, 0.3, 0);
  if (bloom > 0 && P.blossom) cloud(Math.round(P.blossom.n * 1.3 * g * lerp(0.3, 1, bloom)), P.blossom.size * lerp(0.55, 1, bloom), bloom < 0.3 ? P.blossom.buds ?? P.blossom.cols : P.blossom.cols, 0.3, 0.02);
  if (bloom > 0.6 && P.fruit) for (let i = 0; i < P.fruit.n; i++) {
    const m = masses[Math.floor(rng() * masses.length)];
    dir.set(rng.range(-1, 1), rng.range(-0.9, 0.2), rng.range(-1, 1)).normalize();
    const p = dir.clone().multiplyScalar(m.r * 0.92).add(m.c);
    if (p.clone().sub(centre).dot(dir) < 0) { i--; if (rng() < 0.2) i++; continue; }
    b.blob(T(p.x, p.y, p.z), P.fruit.r, P.fruit.r * (P.fruit.tall ?? 1.1), shade(P.fruit.c, 0.8), P.fruit.c, 7, 5, mixc(P.fruit.c, col(0xffffff), 0.2));
  }
}

// vine over an arch: ctx.path = polyline of the support
export function archPath(w = 1.5, h = 2.15) {
  const pts = [], r = w / 2, legH = h - r;
  for (let i = 0; i <= 6; i++) pts.push(new V3(-r, (legH * i) / 6, 0));
  for (let i = 1; i <= 12; i++) { const a = Math.PI - (i / 12) * Math.PI; pts.push(new V3(Math.cos(a) * r, legH + Math.sin(a) * r, 0)); }
  for (let i = 1; i <= 6; i++) pts.push(new V3(r, legH * (1 - i / 6), 0));
  return pts;
}
export function habitClimber(b, rng, P, g, open) {
  const path = archPath();
  const reach = clamp(g * 0.56, 0.05, 0.56); // each side climbs past the top
  const sample = (side, t) => polyAt(path, side < 0 ? t : 1 - t);
  for (const side of [-1, 1]) {
    for (let s = 0; s < (P.strands ?? 3); s++) {
      const pts = [], ph = rng() * TAU, n = Math.round(40 * reach) + 3;
      const rs = reach * rng.range(0.8, 1.0);
      for (let i = 0; i <= n; i++) {
        const t = (i / n) * rs, { p } = sample(side, t), a = ph + t * 38;
        pts.push(new V3(p.x + Math.cos(a) * 0.07, p.y + Math.sin(a * 0.7) * 0.03, p.z + Math.sin(a) * 0.09));
      }
      b.tube(null, pts, 0.008, 0.003, P.wood ?? G.wood, G.stem, 4);
      const nl = Math.round(P.leaf.n * rs * 2);
      for (let i = 0; i < nl; i++) {
        const { p } = polyAt(pts, rng());
        const dir = new V3(rng.range(-1, 1), rng.range(-0.2, 1), rng.range(-1, 1)).normalize();
        const q = p.clone().add(dir.clone().multiplyScalar(0.03));
        leaf(b, frame(q, dir), rng, { ...P.leaf, L: P.leaf.L * rng.range(0.7, 1.2), W: P.leaf.W * rng.range(0.7, 1.2) });
      }
      if (open >= 0 && P.flower) {
        const nf = Math.round(P.flower.n * rs * 2 / (P.strands ?? 3));
        for (let i = 0; i < nf; i++) {
          const t = rng.range(P.flower.t0 ?? 0.1, 1), { p } = polyAt(pts, t);
          P.flower.make(b, p, rng, clamp(open + rng.range(-0.15, 0.1), 0, 1));
        }
      }
    }
  }
}
