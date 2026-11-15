// Catalogue 3: more vegetables, herbs, berries, fruit trees, trees, climbers and water plants.
// Same contract as species2.js: add({ id, name, lvl, price, grow, gift, spots, h, info, build(b, rng, g, o) }).
import * as THREE from 'three';
import { T, RX, RY, RZ, S, mul, frame, col, mixc, shade, jitterc, bez, polyAt, lerp, clamp, TAU } from './util.js';
import { G, leaf, leavesAlong, fanLeaf, mkStem, head, floretBall, habitStems, habitBush, habitSpike, habitCascade, habitTree, habitClimber } from './parts.js';

const V3 = THREE.Vector3, W = col(0xffffff), GOLD = 2.39996323, UP = new V3(0, 1, 0);
const v3 = (x, y, z) => new V3(x, y, z);
const at = (p) => T(p.x, p.y, p.z);
const OUT = (az) => RY(-az + Math.PI / 2); // turns +Z towards the horizontal direction az
const ball = (b, M, rad, tall, c, nu = 7, nv = 5) => b.blob(M, rad, rad * tall, shade(c, 0.76), c, nu, nv, mixc(c, W, 0.22));
const ripen = (r, o, green, c) => (o < 1 ? mixc(green, c, clamp(o * 1.2 - r() * 0.3, 0, 1)) : jitterc(c, r, 0.04));
const flat = (c0, c1, eye, o = {}) => ({ layers: [{ n: o.n ?? 5, L: o.L ?? 0.03, W: o.W ?? 0.03, a: o.a ?? 1.4, b: o.b ?? 0.42, tilt: o.tilt ?? 1.35, tiltC: 0.2, cup: o.cup ?? 0.2, curl: o.curl ?? 0, ruffle: o.ruffle ?? 0, cols: [eye ?? shade(c0, 0.8), c0, c1], nu: 3, nv: 2, notch: o.notch ?? 0 }],
  center: o.noEye ? null : { type: 'dome', r: o.cr ?? 0.004, h: o.ch ?? 0.003, cols: o.cc ?? [col(0xf5c628), col(0xf9dc55)], seg: 5 } });

// leaves (or anything else) on arching stalks that rise from the crown
const stalks = (b, r, n, P, fn) => {
  for (let i = 0; i < n; i++) {
    const az = (P.az0 ?? 0) + i * GOLD + r.range(-0.25, 0.25), L = P.L * r.range(0.7, 1.1), out = r.range(P.out[0], P.out[1]), cx = Math.cos(az), cz = Math.sin(az), x0 = P.x ?? 0, z0 = P.z ?? 0;
    const pts = bez(v3(x0, P.y ?? 0, z0), v3(x0 + cx * L * out * 0.25, L * 0.75, z0 + cz * L * out * 0.25), v3(x0 + cx * L * out, L * (1 - out * (P.sag ?? 0.3)), z0 + cz * L * out), 5);
    b.tube(null, pts, P.r0 ?? 0.003, P.r1 ?? 0.002, P.c, P.c1 ?? P.c, P.seg ?? 4);
    fn(pts[5], az, i, pts);
  }
};
// blade with side lobes (rocket, turnip, artichoke)
const lobedLeaf = (b, M, r, P) => {
  const curl = P.curl ?? 0.4;
  leaf(b, M, r, { L: P.L, W: P.W, c: P.c, tip: P.tip, a: P.a ?? 1.3, b: 0.6, fold: 0.2, curl, ruffle: P.ruffle ?? 0, rf: 3, nu: 5, nv: 2, vein: P.vein ?? 0.3 });
  for (let k = 0; k < P.pairs; k++) {
    const f = P.pairs > 1 ? k / (P.pairs - 1) : 0.5, t = lerp(P.t0 ?? 0.2, P.t1 ?? 0.7, f), s = lerp(P.s0 ?? 0.6, P.s1 ?? 1, f);
    const Mk = mul(M, T(0, P.L * t * 0.97, (P.L * curl * Math.pow(t, 2.3)) / 2.3), RX(curl * Math.pow(t, 1.3)));
    for (const sd of [-1, 1]) leaf(b, mul(Mk, RZ(sd * (P.ang ?? 1.0)), RX(0.1)), r, { L: P.lobeL * s, W: P.lobeW * s, c: P.c, tip: P.tip, a: 0.8, b: 0.6, base: 0.5, fold: 0.1, curl: 0.2, nu: 3, nv: 2, vein: 0.15 });
  }
};
// compound leaf: rachis along +Y of M drooping towards +Z, leaflets in pairs
const pinnate = (b, M, r, P) => {
  const L = P.L, dr = P.droop ?? 0.4, pts = bez(v3(0, 0, 0), v3(0, L * 0.55, L * dr * 0.1), v3(0, L * (1 - dr * 0.35), L * dr * 0.7), 6), n = P.pairs;
  b.tube(M, pts, P.sr ?? 0.0015, (P.sr ?? 0.0015) * 0.6, P.sc ?? P.c, P.sc ?? P.c, 3);
  const lo = { a: 0.8, b: 0.6, nu: 3, nv: 2, fold: 0.2, curl: 0.3, ...P.lo, c: P.c };
  for (let k = 0; k < n; k++) {
    const t = lerp(P.t0 ?? 0.25, P.t1 ?? 0.92, n > 1 ? k / (n - 1) : 1), { p, d } = polyAt(pts, t), s = P.shape ? P.shape(t) : 1;
    for (const sd of [-1, 1]) leaf(b, mul(M, frame(p, d), RZ(sd * (P.ang ?? 1.1)), RX(P.lt ?? 0.2)), r, { ...lo, L: P.ll * s, W: P.lw * s });
  }
  if (P.end !== false) { const { p, d } = polyAt(pts, 1); leaf(b, mul(M, frame(p, d)), r, { ...lo, L: P.ll * (P.endK ?? 1.1), W: P.lw * (P.endK ?? 1.1) }); }
};
// bean / pepper / tuber: a fat tube with pointed ends, grows along +Y of M
const pod = (b, M, L, rad, c0, c1, bend = 0.15, bumps = 0, seg = 5, waist = 0) => {
  const pts = bez(v3(0, 0, 0), v3(0, L * 0.5, L * bend), v3(0, L, 0), 7);
  b.tube(M, pts, (t) => rad * Math.pow(Math.sin(Math.PI * clamp(t, 0.04, 0.96)), 0.6) * (1 + bumps * Math.sin(t * 19)) * (1 - waist * Math.exp(-Math.pow((t - 0.5) / 0.12, 2))), 0, c0, c1, seg);
};
// ribbed surface of revolution (star fruit, cocoa pod, chayote, garlic): soft = round lobes, otherwise sharp ridges
const ribLathe = (b, M, prof, c0, c1, ribs = 5, depth = 0.3, seg = 20, c2 = null, soft = false) => {
  const st = b.n, c = new THREE.Color(), n = prof.length;
  for (let i = 0; i < n; i++) {
    const t = i / (n - 1);
    if (c2) { if (t < 0.5) c.copy(c0).lerp(c1, t * 2); else c.copy(c1).lerp(c2, t * 2 - 1); } else c.copy(c0).lerp(c1, t);
    for (let j = 0; j <= seg; j++) { const th = (j / seg) * TAU, s = Math.abs(Math.sin((th * ribs) / 2)), k = soft ? 1 - s : s, rr = prof[i][0] * (1 - depth * k);
      b.vert(Math.cos(th) * rr, prof[i][1], Math.sin(th) * rr, c, M); }
  }
  b.quadGrid(st, n - 1, seg, false);
};
// pumpkin / melon: ellipsoid with ribs in two alternating colours
const gourd = (b, M, rx, ry, rz, cA, cB, ribs = 10, depth = 0.08, nv = 8) => {
  const st = b.n, nu = ribs * 2;
  for (let i = 0; i <= nv; i++) { const ph = (i / nv) * Math.PI, y = -Math.cos(ph), s = Math.pow(Math.sin(ph), 0.75);
    for (let j = 0; j <= nu; j++) { const th = (j / nu) * TAU, k = j % 2 ? 1 - depth : 1; b.vert(Math.cos(th) * s * rx * k, y * ry, Math.sin(th) * s * rz * k, j % 2 ? cB : cA, M); } }
  b.quadGrid(st, nv, nu, false);
};
const scatter = (r, n, R, H, y0, fn) => { for (let i = 0; i < n; i++) { const az = r() * TAU, el = r.range(0.5, 1.25), k = r.range(0.55, 0.95); fn(v3(Math.cos(az) * Math.sin(el) * R * k, Math.cos(el) * H * k + y0, Math.sin(az) * Math.sin(el) * R * k), az, i); } };
// trailing vine on the ground: P.leaf(M) draws one leaf
const groundVine = (b, r, g, P) => {
  const n = Math.round((P.n ?? 4) + 3 * g), sc = P.stem ?? col(0x6aa050);
  for (let i = 0; i < n; i++) {
    const az = i * 2.4 + r() * 0.4, L = (P.L ?? 0.42) * g * r.range(0.7, 1.1), pts = [];
    for (let k = 0; k <= 8; k++) { const t = k / 8, a = az + Math.sin(t * 4 + i) * 0.4; pts.push(v3(Math.cos(a) * L * t, 0.015 + Math.sin(t * 6) * 0.012, Math.sin(a) * L * t)); }
    b.tube(null, pts, 0.006, 0.003, sc, sc, 4);
    for (let k = 2; k <= 8; k += P.step ?? 2) { const p = pts[k], hh = (P.ph ?? 0.05) * g * r.range(0.6, 1.2);
      b.tube(at(p), [v3(0, 0, 0), v3(0, hh, 0)], 0.002, 0.002, sc, sc, 3); P.leaf(mul(T(p.x, p.y + hh, p.z), RY(r() * 6), RX(1.25))); }
  }
};
// three canes tied at the top with a vine winding up each one
const teepee = (b, r, g, P) => {
  const Ht = P.H ?? 0.85, sc = P.stem ?? col(0x6aa850);
  for (let i = 0; i < 3; i++) {
    const a = (i / 3) * TAU + 0.5, c = Math.cos(a) * 0.16, s = Math.sin(a) * 0.16;
    b.tube(null, [v3(c, 0, s), v3(c * 0.47, Ht * 0.5, s * 0.47), v3(-c * 0.06, Ht, -s * 0.06)], 0.006, 0.005, col(0xa8845a), col(0xb8946a), 4);
    const n = Math.round(22 * g), pts = [];
    for (let k = 0; k <= n; k++) { const t = (k / n) * g * 0.97, ang = a + t * 7; pts.push(v3(c * (1 - t * 1.06) + Math.cos(ang) * 0.025, t * Ht, s * (1 - t * 1.06) + Math.sin(ang) * 0.025)); }
    b.tube(null, pts, 0.003, 0.002, sc, sc, 3);
    for (let k = 2; k < n; k++) { const p = pts[k], d = v3(r.range(-1, 1), r.range(0, 0.6), r.range(-1, 1)).normalize(); P.leaf(p, d, k); if (P.item && k % (P.every ?? 3) === 0) P.item(p, d, k); }
  }
  b.blob(T(0, Ht * 0.93, 0), 0.012, 0.012, col(0xd8c8a0), col(0xe8dcc0), 5, 3);
};
// flat trellis (two posts, slats and strings) with vines: P.leaf(p, side, k), P.item(p, side, k)
const espalier = (b, r, g, P) => {
  const w = 0.2, h = P.h ?? 0.7, wood = col(0xa8845a), wood2 = col(0xc0a070), tw = col(0xd8d0b8);
  for (const sx of [-1, 1]) b.tube(null, [v3(sx * w, 0, 0), v3(sx * w, h, 0)], 0.008, 0.007, wood, wood2, 5);
  for (let i = 1; i <= 3; i++) b.tube(null, [v3(-w - 0.02, (h * i) / 3 - 0.012, 0), v3(w + 0.02, (h * i) / 3 - 0.012, 0)], 0.004, 0.004, wood2, wood2, 4);
  for (let i = -1; i <= 1; i++) b.tube(null, [v3(i * w * 0.5, 0, 0), v3(i * w * 0.5, h, 0)], 0.0012, 0.0012, tw, tw, 3);
  for (let s = 0; s < 3; s++) {
    const x0 = (s - 1) * w * 0.55, n = Math.round(20 * g), pts = [], top = h * Math.min(1, g * 1.02) * r.range(0.9, 1);
    for (let k = 0; k <= n; k++) { const t = k / n; pts.push(v3(x0 + Math.sin(t * 7 + s * 2) * 0.05, t * top, Math.sin(t * 13 + s) * 0.012)); }
    b.tube(null, pts, 0.004, 0.002, P.stem, P.stem, 4);
    for (let k = 2; k <= n; k++) { const p = pts[k], sd = (k + s) % 2 ? 1 : -1; P.leaf(p, sd, k); if (P.item && k % (P.every ?? 4) === 1) P.item(p, sd, k); }
  }
};
// arching berry canes
const canes = (b, r, g, P) => {
  const n = Math.round(P.n * (0.5 + 0.5 * g));
  for (let i = 0; i < n; i++) {
    const az = i * GOLD + r.range(-0.2, 0.2), L = P.L * g * r.range(0.75, 1.1), cx = Math.cos(az), cz = Math.sin(az), ok = P.out * r.range(0.6, 1.1);
    const pts = bez(v3(cx * 0.02, 0, cz * 0.02), v3(cx * L * ok * 0.25, L * P.up, cz * L * ok * 0.25), v3(cx * L * ok, L * (P.up - P.drop), cz * L * ok), 8);
    b.tube(null, pts, 0.005, 0.0025, P.cane, P.cane2 ?? P.cane, 4);
    const nl = Math.round(P.leaves * (0.5 + 0.5 * g));
    for (let k = 0; k < nl; k++) { const t = 0.2 + (0.8 * (k + 0.5)) / nl, p = polyAt(pts, t).p, a2 = az + (k % 2 ? 1.5 : -1.5) + r.range(-0.4, 0.4);
      P.leaf(mul(at(p), OUT(a2), RX(r.range(0.8, 1.2))), k); if (P.fruit && t > 0.4 && k % 2 === 0) P.fruit(p, a2, t); }
  }
};

// card with a given world-space normal (M must be a rigid transform)
const ncard = (b, M, w, h, c0, c1, n, bend = 0.25) => { const ln = n.clone().applyMatrix3(new THREE.Matrix3().setFromMatrix4(M).transpose()); b.card(M, w, h, c0, c1, ln.x, ln.y, ln.z, bend); };
// Same recipe as parts.habitTree, with hooks: P.el [from, to] limb angles from the vertical, P.trunkFn radius profile, P.squash / P.massK crown shape,
// P.leafAsp long leaves, P.fruit.make(b, p, rng) custom fruit. Returns the skeleton so builds can hang things on it.
function xtree(b, rng, P, g, open) {
  const H = P.H * g, R = P.R * g, cy = H + R * 0.55, bark = P.bark ?? G.wood, bark2 = shade(bark, 0.75);
  const lean = rng.range(-0.08, 0.08) * H;
  const trunk = bez(v3(0, 0, 0), v3(lean, H * 0.5, rng.range(-0.05, 0.05) * H), v3(lean * 0.5, H, 0), 6), tr = P.trunkR * (0.35 + 0.65 * g);
  const tf = P.trunkFn ?? ((t) => 1.25 - 0.55 * t + 0.5 * Math.pow(1 - t, 6));
  b.tube(null, trunk, (t) => tr * tf(t), 0, bark2, P.bark1 ?? bark, 8);
  const top = trunk[6], nb = Math.max(3, Math.round(P.limbs * (0.5 + 0.5 * g))), ends = [], limbs = [], [e0, e1] = P.el ?? [0.25, 1.25], rise = P.rise ?? 0.9;
  for (let i = 0; i < nb; i++) {
    const az = i * GOLD + rng.range(-0.3, 0.3), el = lerp(e0, e1, (i + 0.5) / nb), len = R * rng.range(0.75, 1.05);
    const start = polyAt(trunk, rng.range(P.from ?? 0.7, 1.0)).p;
    const tip = v3(start.x + Math.cos(az) * Math.sin(el) * len, top.y + Math.cos(el) * len * rise + R * 0.15, start.z + Math.sin(az) * Math.sin(el) * len);
    const pts = bez(start, v3(lerp(start.x, tip.x, 0.4), lerp(start.y, tip.y, 0.75), lerp(start.z, tip.z, 0.4)), tip, 5);
    b.tube(null, pts, tr * 0.42, tr * 0.1, bark, bark, 5);
    ends.push(tip, polyAt(pts, 0.6).p); limbs.push(pts);
    for (let j = 0; j < 2; j++) {
      const s = polyAt(pts, rng.range(0.35, 0.8)).p, a2 = az + rng.range(-1.2, 1.2), l2 = len * rng.range(0.35, 0.6);
      const t2 = v3(s.x + Math.cos(a2) * l2, s.y + l2 * rng.range(0.2, 0.8) * (P.twigUp ?? 1), s.z + Math.sin(a2) * l2);
      b.tube(null, [s, s.clone().lerp(t2, 0.5).add(v3(0, l2 * 0.1, 0)), t2], tr * 0.16, tr * 0.05, bark, bark, 4);
      ends.push(t2);
    }
  }
  const centre = v3(lean * 0.5, cy, 0), nrm = new V3(), q = new V3(), dir = new V3(), tx = new V3(), ty = new V3();
  const bloom = open < 0 ? 0 : open, fol = lerp(1, P.foliage ?? 1, bloom), leafCols = P.leafCols ?? [G.leaf, G.dark, G.lime], mk = P.massK ?? 1, sq = P.squash ?? 0.8, asp = Math.sqrt(P.leafAsp ?? 1);
  const masses = ends.map((e) => ({ c: e.clone().add(v3(0, R * 0.08, 0)), r: R * rng.range(0.27, 0.4) * mk }));
  masses.push({ c: v3(top.x, top.y + R * 0.75 * (rise / 0.9), top.z), r: R * 0.45 * mk });
  const coreC = P.blossom && bloom > 0.5 && fol < 0.6 ? shade(P.blossom.cols[0], 0.9) : shade(leafCols[0], 0.6);
  for (const m of masses) b.blob(mul(T(m.c.x, m.c.y, m.c.z), RY(rng() * 3)), m.r * 0.66, m.r * 0.52 * (sq / 0.8), shade(coreC, 0.62), shade(coreC, 1.05), 7, 5);
  const cloud = (count, size, cols, sizeJ, push, a = asp) => {
    for (let i = 0; i < count; i++) {
      const m = masses[Math.floor(rng() * masses.length)];
      dir.set(rng.range(-1, 1), rng.range(-0.75, 1), rng.range(-1, 1)).normalize();
      q.copy(dir).multiplyScalar(m.r * rng.range(0.66, 1.04) + push); q.y *= sq; q.add(m.c);
      nrm.copy(q).sub(centre).normalize().lerp(dir, 0.45); nrm.y += 0.3; nrm.normalize();
      tx.set(rng.range(-1, 1), rng.range(-1, 1), rng.range(-1, 1)); ty.crossVectors(dir, tx).normalize(); tx.crossVectors(ty, dir).normalize();
      q.addScaledVector(ty, -size * 0.4);
      const M = new THREE.Matrix4().makeBasis(tx, ty, dir.clone().addScaledVector(ty, rng.range(-0.5, 0.5)).normalize()).setPosition(q);
      const c = jitterc(rng.pick(cols), rng, 0.05), s = size * (1 - sizeJ + rng() * sizeJ * 2);
      const ln = nrm.clone().applyMatrix3(new THREE.Matrix3().setFromMatrix4(M).invert()).normalize();
      b.card(M, (s * 0.52) / a, s * 1.12 * a, shade(c, 0.74), c, ln.x, ln.y, ln.z, 0.25);
    }
  };
  cloud(Math.round((P.leaves ?? 800) * 1.35 * g * fol), (P.leafSize ?? 0.19) * (0.6 + 0.4 * g), leafCols, 0.3, 0);
  if (bloom > 0 && P.blossom) cloud(Math.round(P.blossom.n * 1.3 * g * lerp(0.3, 1, bloom)), P.blossom.size * lerp(0.55, 1, bloom), bloom < 0.3 ? P.blossom.buds ?? P.blossom.cols : P.blossom.cols, 0.3, 0.02, 1);
  if (P.fruit && bloom > (P.fruit.min ?? 0.6)) for (let i = 0, guard = 0; i < P.fruit.n && guard < 600; guard++) {
    const m = masses[Math.floor(rng() * masses.length)];
    dir.set(rng.range(-1, 1), rng.range(-0.9, 0.1), rng.range(-1, 1)).normalize();
    const p = dir.clone().multiplyScalar(m.r * (P.fruit.out ?? 1.0)).add(m.c);
    if (p.clone().sub(centre).dot(dir) < 0) continue;
    i++;
    if (P.fruit.make) P.fruit.make(b, p, rng, i);
    else b.blob(T(p.x, p.y, p.z), P.fruit.r, P.fruit.r * (P.fruit.tall ?? 1.1), shade(P.fruit.c, 0.8), P.fruit.c, 7, 5, mixc(P.fruit.c, W, 0.2));
  }
  return { trunk, top, masses, centre, limbs, R, H, tr, tf, cloud };
}
// n things on the outside of the crown: fn(p, outward)
const dress = (r, t, n, fn) => { for (let i = 0; i < n; i++) { const m = t.masses[Math.floor(r() * t.masses.length)], d = v3(r.range(-1, 1), r.range(-0.6, 1), r.range(-1, 1)).normalize(), p = v3(m.c.x + d.x * m.r, m.c.y + d.y * m.r * 0.8, m.c.z + d.z * m.r); if (p.clone().sub(t.centre).dot(d) >= 0) fn(p, d); } };
// fruit hanging from p on a short stalk; prof is listed from the stalk end downwards
const hangM = (p, r, sway = 0.25) => mul(at(p), RX(Math.PI), RY(r() * 6), RX(r.range(-sway, sway)));
const scaleP = (prof, k) => prof.map(([rr, y]) => [rr * k, y * k]);
const PEAR = [[0.1, 0], [0.3, 0.1], [0.5, 0.3], [0.85, 0.55], [1, 0.75], [0.78, 0.93], [0.2, 1]];
// feather palm frond along +Y of M, arching towards +Z
const frond = (b, M, r, L, P) => {
  const pts = bez(v3(0, 0, 0), v3(0, L * 0.6, L * 0.06), v3(0, L * (1 - P.droop * 0.45), L * P.droop * 0.75), 8);
  b.tube(M, pts, 0.016 * P.k, 0.004 * P.k, P.rc ?? col(0x8a9a48), P.c, 4);
  for (let i = 0; i < P.pairs; i++) { const t = 0.14 + (0.86 * (i + 0.5)) / P.pairs, { p, d } = polyAt(pts, t), ll = P.ll * Math.pow(Math.sin(Math.PI * (0.12 + 0.82 * t)), 0.6), F = mul(M, frame(p, d));
    for (const sd of [-1, 1]) b.petal(mul(F, RZ(sd * (1.25 - t * 0.5)), RX((P.hang ?? 0.5) + (P.plume ? r.range(-0.6, 0.5) : 0))), { L: ll * r.range(0.9, 1.1), W: P.lw, a: 0.6, b: 0.5, base: 0.5, curl: P.lcurl ?? 0.8, curlPow: 1.6, nu: 3, nv: 1, cols: [shade(P.c, 0.75), P.c, mixc(P.c, G.light, 0.3)] }); }
};

export function species3(add, H) {
  const HERB = ['veg', 'pot', 'window'];
  const Vg = (d) => add({ spots: ['veg'], veg: true, gift: Math.round(d.price * 0.72), ...d });
  const sm5 = (c0, c1, eye, k = 1) => flat(c0, c1, eye, { L: 0.016 * k, W: 0.014 * k });

  // ================= horta: folhas =================
  Vg({ id: 'rucula', name: 'Rúcula', lvl: 1, price: 8, grow: 45, h: 0.2, foliage: true, info: 'Folhinha picante que brota num piscar de olhos.',
    build: (b, r, g) => { const n = Math.round(10 + 8 * g);
      for (let i = 0; i < n; i++) lobedLeaf(b, mul(RY(i * GOLD + r.range(-0.2, 0.2)), T(0, 0.005, 0.006), RX(lerp(0.3, 1.15, i / n) + r.range(-0.1, 0.1))), r, { L: 0.19 * g * r.range(0.75, 1.1), W: 0.04 * g, pairs: 3, lobeL: 0.04 * g, lobeW: 0.022 * g, c: col(0x3f8f3c), t0: 0.25, t1: 0.62, ang: 1.15 }); } });
  Vg({ id: 'espinafre', name: 'Espinafre', lvl: 2, price: 10, grow: 55, h: 0.2, foliage: true, info: 'Verde-escuro, macio e cheio de força.',
    build: (b, r, g) => stalks(b, r, Math.round(9 + 8 * g), { L: 0.09 * g, out: [0.3, 0.9], c: col(0x7ab868), r0: 0.003, r1: 0.002 }, (p, az) => leaf(b, mul(at(p), OUT(az), RX(r.range(0.7, 1.15))), r,
      { L: 0.13 * g, W: 0.085 * g, a: 0.62, b: 0.55, c: col(0x2a7a38), tip: col(0x4a9a48), cup: -0.3, fold: 0.15, curl: 0.5, ruffle: 0.12, rf: 3, nu: 5, nv: 4, vein: 0.35 })) });
  Vg({ id: 'agriao', name: 'Agrião', lvl: 2, price: 10, grow: 55, spots: HERB, h: 0.1, foliage: true, info: 'Gosta de pé molhado e tempera a salada.',
    build: (b, r, g) => habitCascade(b, r, { stems: 20, L: 0.2, up: 0.5, out: 0.95, drop: 0.35, stemC: col(0x7ab868), stemR: 0.002, leaf: { n: 15, L: 0.028, W: 0.028, nu: 2, nv: 2, c: col(0x2f8a3a), a: 1.0, b: 0.4, fold: 0.05, curl: 0.2 } }, g, -1) });
  Vg({ id: 'almeirao', name: 'Almeirão', lvl: 3, price: 14, grow: 65, h: 0.3, foliage: true, info: 'Amarguinho bom, de folha comprida.',
    build: (b, r, g) => { const n = Math.round(9 + 8 * g);
      for (let i = 0; i < n; i++) leaf(b, mul(RY(i * GOLD), T(0, 0.005, 0.008), RX(lerp(0.15, 0.9, i / n) + r.range(-0.08, 0.08))), r, { L: 0.27 * g * r.range(0.75, 1.1), W: 0.05 * g, a: 1.15, b: 0.55, base: 0.25, c: col(0x3f8a3a), tip: col(0x5aa048), fold: 0.3, curl: 0.5, ruffle: 0.18, rf: 5, nu: 6, nv: 3, vein: -0.5 }); } });
  Vg({ id: 'acelga', name: 'Acelga-arco-íris', lvl: 4, price: 18, grow: 80, h: 0.4, foliage: true, info: 'Talos de todas as cores, como lápis de cor.',
    build: (b, r, g) => { const pal = [0xd8203a, 0xf7c81e, 0xf05a9a, 0xf2801e, 0xf4f0e0], n = Math.round(7 + 5 * g);
      for (let i = 0; i < n; i++) { const c = col(pal[i % 5]), L = 0.13 * g * r.range(0.8, 1.1), M = mul(RY(i * GOLD), T(0, 0, 0.01), RX(lerp(0.12, 0.75, i / n) + r.range(-0.08, 0.08)));
        b.tube(M, [v3(0, 0, 0), v3(0, L, 0)], 0.009, 0.005, mixc(c, W, 0.25), c, 5);
        const Ml = mul(M, T(0, L, 0), RX(0.15));
        leaf(b, Ml, r, { L: 0.24 * g, W: 0.13 * g, a: 0.8, b: 0.55, c: col(0x2a6a34), tip: col(0x3f8a40), ruffle: 0.3, rf: 4, cup: 0.3, fold: 0.2, curl: 0.6, nu: 6, nv: 4, vein: 0.2 });
        for (const dz of [-0.003, 0.003]) b.petal(mul(Ml, T(0, 0, dz)), { L: 0.24 * g, W: 0.018, a: 0.4, b: 1.6, curl: 0.6, curlPow: 1.3, cols: [c, c, mixc(c, W, 0.3)], nu: 6, nv: 1 }); } } });
  Vg({ id: 'mostarda', name: 'Mostarda', lvl: 4, price: 18, grow: 80, h: 0.5, info: 'Folhas ardidas e flores amarelinhas.',
    build: (b, r, g, o) => { const n = Math.round(7 + 5 * g);
      for (let i = 0; i < n; i++) leaf(b, mul(RY(i * GOLD), T(0, 0.01, 0.01), RX(lerp(0.25, 1.05, i / n) + r.range(-0.1, 0.1))), r, { L: 0.27 * g * r.range(0.8, 1.1), W: 0.16 * g, a: 1.15, b: 0.5, c: col(0x62b044), tip: col(0x9ad060), ruffle: 0.45, rf: 4, fold: 0.15, curl: 0.5, nu: 6, nv: 5, vein: -0.35 });
      if (o > 0.25) habitSpike(b, r, { stems: [3, 4], H: 0.48, lean: 0.25, stemR: 0.003, stemC: col(0x8ab860), florets: 14, from: 0.6, type: 'flower', fs: 0.013, off: 0.012, taper: 0.3, cols: [col(0xf7d81e), col(0xfbe85a)], bud: col(0xa8c85a), leaf: { n: 3, L: 0.05, W: 0.02, c: col(0x62b044) } }, g, o); } });
  Vg({ id: 'chicoria', name: 'Chicória-crespa', lvl: 5, price: 21, grow: 90, h: 0.15, foliage: true, info: 'Um pompom de folhas frisadas, coração amarelinho.',
    build: (b, r, g) => head(b, T(0, 0.012, 0), r, { layers: [{ n: 56, golden: true, L: [0.05, 0.17], W: [0.016, 0.046], a: 1.1, b: 0.5, tilt: [0.15, 1.3], tiltC: [0.15, 1.3], curl: [-0.3, 0.4], curlC: [-0.3, 0.4], cup: 0.3, ruffle: 1.5, rf: 7,
      r: [0.001, 0.01], y: [0.025, 0], cols: [col(0xf6f2c0), col(0xd8e880), col(0xa8d058)], cols2: [col(0xe0ecb0), col(0x6ab040), col(0x4a9a38)], nu: 5, nv: 4, closedScale: 1, vein: 0.05 }] }, 1, g) });
  Vg({ id: 'alho_poro', name: 'Alho-poró', lvl: 6, price: 26, grow: 100, h: 0.5, foliage: true, info: 'Talo branco e um leque de folhas azuladas.',
    build: (b, r, g) => { for (let i = 0; i < 3; i++) { const az = i * 2.1 + 0.5, d = i ? 0.09 : 0.02, x = Math.cos(az) * d, z = Math.sin(az) * d, a0 = r() * 3, Hs = 0.17 * g * r.range(0.85, 1.1);
        b.tube(T(x, 0, z), [v3(0, -0.01, 0), v3(0, Hs * 0.5, 0), v3(0, Hs, 0)], 0.015, 0.012, col(0xfaf8ee), col(0xb0d890), 7);
        for (let k = 0; k < 7; k++) leaf(b, mul(T(x, Hs * (0.75 + k * 0.05), z), RY(a0 + k * Math.PI + r.range(-0.15, 0.15)), T(0, 0, 0.008), RX(r.range(0.25, 0.6))), r,
          { L: 0.34 * g * r.range(0.7, 1.05), W: 0.04, a: 0.55, b: 0.4, base: 0.7, c: col(0x4a8a6a), tip: col(0x6aa888), tipMix: 0.2, fold: 0.6, curl: r.range(0.7, 1.5), curlPow: 2.2, nu: 6, nv: 2 }); } } });
  Vg({ id: 'salsao', name: 'Salsão', lvl: 7, price: 30, grow: 110, h: 0.4, foliage: true, info: 'Talos crocantes que estalam na mordida.',
    build: (b, r, g) => { const n = Math.round(7 + 5 * g);
      for (let i = 0; i < n; i++) { const az = i * GOLD, f = Math.sqrt((i + 0.5) / n), L = 0.3 * g * r.range(0.8, 1.05), x = Math.cos(az), z = Math.sin(az), d0 = f * 0.022, d1 = d0 + f * 0.09;
        const pts = bez(v3(x * d0, 0, z * d0), v3(x * lerp(d0, d1, 0.3), L * 0.6, z * lerp(d0, d1, 0.3)), v3(x * d1, L, z * d1), 5);
        b.tube(null, pts, 0.01, 0.004, col(0xe0f0c0), col(0x8ac060), 5);
        for (let k = 0; k < 3; k++) fanLeaf(b, mul(at(k ? polyAt(pts, 1 - k * 0.14).p : pts[5]), OUT(az + (k === 1 ? 1.4 : k === 2 ? -1.4 : 0)), RX(k ? 1.1 : 0.6)), r, { n: 3, L: 0.055 * g, W: 0.045 * g, c: col(0x4aa040), spread: 2.2, ruffle: 0.5, rf: 4, nv: 3, a: 1.2, b: 0.45 }); } } });
  Vg({ id: 'couve_de_bruxelas', name: 'Couve-de-bruxelas', lvl: 10, price: 48, grow: 145, h: 0.6, info: 'Dezenas de repolhinhos subindo pelo talo.',
    build: (b, r, g, o) => { const Hs = 0.42 * g; b.tube(null, [v3(0, 0, 0), v3(0.005, Hs * 0.5, 0), v3(0, Hs, 0)], 0.016, 0.012, col(0x9ac088), col(0xa8d090), 6);
      const lf = (M, s) => leaf(b, M, r, { L: 0.17 * g * s, W: 0.13 * g * s, a: 0.9, b: 0.45, base: 0.15, c: col(0x4a8a68), tip: col(0x8ab898), cup: 0.5, ruffle: 0.15, rf: 3, curl: 0.5, nu: 5, nv: 4, vein: -0.3 });
      const nt = Math.round(8 + 4 * g); for (let i = 0; i < nt; i++) lf(mul(T(0, Hs * (0.9 + i * 0.008), 0), RY(i * GOLD), T(0, 0, 0.01), RX(lerp(0.2, 1.1, i / nt) + r.range(-0.1, 0.1))), r.range(0.8, 1.1));
      const ns = o >= 0 ? 5 : 9; for (let i = 0; i < ns; i++) { const M = mul(T(0, Hs * lerp(0.2, 0.85, i / ns), 0), OUT(i * GOLD + 1), RX(1.2)); b.tube(M, [v3(0, 0, 0), v3(0, 0.09 * g, 0)], 0.004, 0.003, col(0xa8d090), col(0xa8d090), 3); lf(mul(M, T(0, 0.09 * g, 0), RX(0.2)), 0.6); }
      if (o >= 0) { const k = lerp(0.35, 1, o), n = Math.round(30 * g); for (let i = 0; i < n; i++) { const y = Hs * lerp(0.08, 0.86, i / n), az = i * GOLD; ball(b, T(Math.cos(az) * 0.022, y, Math.sin(az) * 0.022), 0.017 * k * g, 1.05, jitterc(col(0x7ab858), r, 0.04), 6, 4); } } } });

  // ================= horta: bulbos, raízes e tubérculos =================
  Vg({ id: 'alho', name: 'Alho', lvl: 1, price: 9, grow: 50, h: 0.3, info: 'Um dente plantado, uma cabeça colhida.',
    build: (b, r, g, o) => { for (let i = 0; i < 3; i++) { const az = i * 2.1 + r(), d = i ? 0.085 : 0, x = Math.cos(az) * d, z = Math.sin(az) * d, a0 = r() * 3;
        for (let k = 0; k < 6; k++) leaf(b, mul(T(x, 0.02, z), RY(a0 + k * Math.PI + r.range(-0.35, 0.35)), RX(r.range(0.12, 0.5))), r, { L: 0.3 * g * r.range(0.6, 1.05), W: 0.02, a: 0.6, b: 0.45, base: 0.6, c: col(0x5a9a78), tip: col(0xa8c8a0), fold: 0.5, curl: r.range(0.5, 1.4), curlPow: 2.2, nu: 5, nv: 2 });
        b.tube(T(x, 0, z), [v3(0, 0, 0), v3(0, 0.06 * g, 0)], 0.007, 0.006, col(0xf0ead8), col(0xa8c890), 5);
        if (o > 0) { const k = g * lerp(0.5, 1, o); ribLathe(b, T(x, -0.012, z), [[0.005, 0], [0.024 * k, 0.008], [0.031 * k, 0.022], [0.021 * k, 0.038], [0.008, 0.05]], col(0xf4efe2), col(0xfaf6ec), 6, 0.16, 24, col(0xd8b0cc), true); } } } });
  Vg({ id: 'cebola', name: 'Cebola', lvl: 2, price: 11, grow: 60, h: 0.32, info: 'Faz chorar na cozinha e sorrir na horta.',
    build: (b, r, g, o) => { for (let i = 0; i < 3; i++) { const az = i * 2.1 + r(), d = i ? 0.09 : 0, x = Math.cos(az) * d, z = Math.sin(az) * d;
        for (let k = 0; k < 6; k++) b.tube(T(x, 0.02, z), mkStem(r, 0.3 * g * r.range(0.6, 1.1), r.range(0.02, 0.11), k * 1.05 + r(), 0.06, 5), 0.0055, 0.0015, col(0x6aa888), col(0x4a9a70), 5);
        if (o > 0) { const k = g * lerp(0.5, 1, o), red = i === 1;
          b.lathe(T(x, 0.006, z), [[0.004, -0.03], [0.022, -0.02], [0.036, 0], [0.034, 0.016], [0.02, 0.032], [0.008, 0.042], [0.006, 0.058]].map(([rr, y]) => [rr * k, y * k]), red ? col(0x7a2a5a) : col(0xb87828), red ? col(0xb05a90) : col(0xe8b860), 10); } } } });
  Vg({ id: 'nabo', name: 'Nabo', lvl: 3, price: 15, grow: 70, h: 0.28, info: 'Branquinho com chapéu roxo, espiando da terra.',
    build: (b, r, g, o) => { for (let i = 0; i < 2; i++) { const x = i ? 0.1 : -0.05, z = i ? 0.05 : -0.03;
        for (let k = 0; k < 6; k++) lobedLeaf(b, mul(T(x, 0.03, z), RY(k * 1.1 + r()), RX(r.range(0.3, 0.85))), r, { L: 0.2 * g * r.range(0.8, 1.1), W: 0.06 * g, pairs: 2, lobeL: 0.035 * g, lobeW: 0.022 * g, c: col(0x4a9a48), ruffle: 0.2 });
        if (o > 0) { const k = g * lerp(0.5, 1, o); b.blob(T(x, 0.02, z), 0.042 * k, 0.036 * k, col(0xfaf6ee), col(0xecd0e4), 9, 6, col(0xa02a84)); } } } });
  Vg({ id: 'batata', name: 'Batata', lvl: 4, price: 19, grow: 85, h: 0.36, info: 'Florzinhas em cima, tesouro embaixo.',
    build: (b, r, g, o) => { habitBush(b, r, { R: 0.2, H: 0.32, branches: 9, heads: 7, stalk: 0.2, headUp: 0.6, fill: 26, splay: 0.8, stemC: col(0x5a8a48), leaf: { n: 8, L: 0.06, W: 0.036, c: col(0x35803a), a: 0.8, b: 0.6, ruffle: 0.15, rf: 3, nv: 3, tilt: 1.05 }, leafTip: { n: 3, L: 0.065, W: 0.04, c: col(0x35803a), spread: 1.8 },
        head: flat(W, col(0xf0e0fa), col(0xe8d0f4), { L: 0.02, W: 0.018, cr: 0.005, ch: 0.008, cc: [col(0xf2b81e), col(0xf9d84a)] }) }, g, o);
      if (o > 0.4) { const k = g * lerp(0.4, 1, o); for (let i = 0; i < 5; i++) { const az = i * 1.3 + r(), d = r.range(0.07, 0.15);
        b.blob(mul(T(Math.cos(az) * d, 0.008, Math.sin(az) * d), RY(r() * 6), RZ(Math.PI / 2 + r.range(-0.2, 0.2))), 0.024 * k * r.range(0.8, 1.2), 0.036 * k, col(0xb8905a), col(0xe0c088), 7, 5, col(0xd8b478)); } } } });
  Vg({ id: 'batata_doce', name: 'Batata-doce', lvl: 6, price: 27, grow: 105, h: 0.14, info: 'Rama de corações e raiz cor-de-rosa.',
    build: (b, r, g, o) => { groundVine(b, r, g, { n: 4, L: 0.36, stem: col(0x8a5a7a), ph: 0.035, step: 1, leaf: (M) => leaf(b, M, r, { L: 0.085 * g, W: 0.08 * g, a: 0.55, b: 0.6, c: col(0x3f8a44), tip: col(0x6a5a80), tipMix: 0.25, fold: 0.15, curl: 0.3, nu: 4, nv: 3 }) });
      if (o > 0) { const k = g * lerp(0.4, 1, o); for (let i = 0; i < 3; i++) { const az = i * 2.1 + r(); pod(b, mul(T(Math.cos(az) * 0.03, 0.014, Math.sin(az) * 0.03), RY(-az), RZ(-Math.PI / 2 + 0.12)), 0.15 * k, 0.03 * k, col(0xb04a70), col(0xd0708a), 0.05, 0, 7); } } } });
  Vg({ id: 'mandioca', name: 'Mandioca', lvl: 8, price: 36, grow: 125, h: 1.1, info: 'Aipim, macaxeira: cada canto chama de um jeito.',
    build: (b, r, g, o) => { for (let s = 0; s < 3; s++) { const az0 = s * 2.1 + r(), pts = mkStem(r, 1.0 * g * r.range(0.8, 1.05), 0.12 * g, az0, 0.04, 8); for (const p of pts) { p.x += Math.cos(az0) * 0.03; p.z += Math.sin(az0) * 0.03; }
        b.tube(null, pts, 0.011, 0.006, col(0x8a7a62), col(0xa89a80), 5);
        const n = Math.round(11 * g); for (let i = 0; i < n; i++) { const t = 0.5 + (0.5 * (i + 0.5)) / n, p = polyAt(pts, t).p, az = i * GOLD + s, L = 0.16 * g * r.range(0.8, 1.1), cx = Math.cos(az), cz = Math.sin(az);
          const pp = bez(p, v3(p.x + cx * L * 0.6, p.y + L * 0.5, p.z + cz * L * 0.6), v3(p.x + cx * L, p.y + L * 0.35, p.z + cz * L), 3); b.tube(null, pp, 0.0028, 0.002, col(0xc83a3a), col(0xd85a4a), 3);
          fanLeaf(b, mul(at(pp[3]), OUT(az), RX(1.35)), r, { n: 7, L: 0.13 * g, W: 0.03 * g, c: col(0x3f8f40), spread: 3.3, a: 1.0, b: 0.7, sideShrink: 0.5, curl: 0.5, fold: 0.3, nu: 4, nv: 2 }); } }
      if (o > 0) { const k = g * lerp(0.4, 1, o); for (let i = 0; i < 5; i++) { const az = i * 1.26 + r(); pod(b, mul(T(Math.cos(az) * 0.02, 0.01, Math.sin(az) * 0.02), RY(-az), RZ(-Math.PI / 2 + 0.1)), 0.22 * k * r.range(0.8, 1.1), 0.028 * k, col(0x5a4030), col(0x8a6a4a), 0.04, 0.04, 6); } } } });
  Vg({ id: 'inhame', name: 'Inhame', lvl: 9, price: 42, grow: 135, h: 0.6, info: 'Folhas de orelha-de-elefante guardando a raiz.',
    build: (b, r, g, o) => { stalks(b, r, Math.round(4 + 4 * g), { L: 0.5 * g, out: [0.2, 0.55], sag: 0.2, c: col(0x7a9a6a), c1: col(0x8a7a8a), r0: 0.009, r1: 0.005, seg: 5 }, (p, az) => leaf(b, mul(at(p), OUT(az), RX(r.range(1.9, 2.4)), T(0, -0.05 * g, 0)), r,
        { L: 0.3 * g, W: 0.22 * g, a: 0.5, b: 0.55, c: col(0x3a8a48), tip: col(0x5aa858), cup: 0.25, fold: 0.15, curl: -0.25, ruffle: 0.08, rf: 2, nu: 6, nv: 4, vein: -0.3 }));
      if (o > 0) { const k = g * lerp(0.4, 1, o); for (let i = 0; i < 3; i++) { const az = i * 2.2 + 1; b.blob(T(i ? Math.cos(az) * 0.07 : 0.01, 0.012, i ? Math.sin(az) * 0.07 : 0.01), (i ? 0.03 : 0.05) * k, (i ? 0.028 : 0.042) * k, col(0x4a3828), col(0x7a5a40), 8, 6, col(0x9a7a58)); } } } });
  Vg({ id: 'gengibre', name: 'Gengibre', lvl: 11, price: 56, grow: 155, spots: ['veg', 'pot'], h: 0.6, info: 'Raiz ardida que aquece o chá.',
    build: (b, r, g, o) => { const ns = Math.round(3 + 3 * g);
      for (let s = 0; s < ns; s++) { const az0 = s * GOLD, d = 0.02 + 0.05 * Math.sqrt(s / 6), pts = mkStem(r, 0.55 * g * r.range(0.7, 1.05), 0.1 * g * r.range(0.3, 1), az0, 0.03, 8), pl = r() * 3; for (const p of pts) { p.x += Math.cos(az0) * d; p.z += Math.sin(az0) * d; }
        b.tube(null, pts, 0.006, 0.003, col(0x7aa860), col(0x6aa850), 4);
        const n = Math.round(10 * g); for (let i = 0; i < n; i++) { const t = 0.25 + (0.75 * i) / n, p = polyAt(pts, t).p; leaf(b, mul(at(p), RY(pl + i * Math.PI + r.range(-0.15, 0.15)), RX(r.range(0.75, 1.1))), r, { L: 0.15 * g * (1 - t * 0.3), W: 0.024 * g, a: 0.7, b: 0.6, c: col(0x3f9044), fold: 0.3, curl: 0.5, nu: 4, nv: 2 }); } }
      if (o > 0) { const k = g * lerp(0.4, 1, o); let a = r() * 6, x = -0.07, z = 0.05; for (let i = 0; i < 7; i++) { b.blob(mul(T(x, 0.012, z), RY(-a), RZ(1.35)), 0.02 * k * r.range(0.8, 1.2), 0.03 * k, col(0xc8a468), col(0xe8cc90), 6, 4);
        if (i % 3 === 1) b.blob(T(x, 0.03 * k, z), 0.007, 0.012, col(0xe8a0a0), col(0xf0c0b8), 5, 3); a += r.range(-0.9, 0.9); x += Math.cos(a) * 0.036 * k; z += Math.sin(a) * 0.036 * k; } } } });
  Vg({ id: 'amendoim', name: 'Amendoim', lvl: 5, price: 23, grow: 95, h: 0.22, info: 'A flor se curva e enterra o próprio fruto.',
    build: (b, r, g, o) => { stalks(b, r, Math.round(10 + 6 * g), { L: 0.2 * g, out: [0.5, 1.1], sag: 0.5, c: col(0x7aa850), r0: 0.003, r1: 0.002 }, (p, az, i, pts) => {
        for (const t of [0.5, 0.75, 1]) fanLeaf(b, mul(at(polyAt(pts, t).p), OUT(az + (t < 0.7 ? 1.3 : t < 1 ? -1.3 : 0)), RX(1.0)), r, { n: 4, L: 0.04 * g, W: 0.024 * g, c: col(0x4a9a40), spread: 2.2, a: 0.9, b: 0.5, sideShrink: 0, nu: 3, nv: 2 });
        if (o >= 0 && i % 3 === 0) head(b, mul(at(polyAt(pts, 0.3).p), OUT(az), RX(0.6), T(0, 0.02, 0)), r, flat(col(0xf7b81e), col(0xfbdc4a), col(0xe8501e), { L: 0.014, W: 0.016, n: 3, noEye: true }), clamp(o * 2, 0, 1), 1); });
      if (o > 0.4) { const k = g * lerp(0.5, 1, o); for (let i = 0; i < 6; i++) { const az = i * 1.05 + r(), d = r.range(0.05, 0.12); pod(b, mul(T(Math.cos(az) * d, 0.008, Math.sin(az) * d), RY(r() * 6), RZ(Math.PI / 2)), 0.052 * k, 0.012 * k, col(0xc8a468), col(0xe0c088), 0.05, 0, 6, 0.35); } } } });

  // ================= horta: frutos e vagens =================
  const bean3 = (b, r, M, s, c, nu = 4, nv = 3) => fanLeaf(b, M, r, { n: 3, L: 0.065 * s, W: 0.048 * s, c, spread: 2.3, a: 0.7, b: 0.6, sideShrink: 0.15, curl: 0.4, nu, nv });
  Vg({ id: 'feijao', name: 'Feijão', lvl: 3, price: 16, grow: 70, h: 0.3, info: 'O par perfeito do arroz nasce aqui.',
    build: (b, r, g, o) => stalks(b, r, Math.round(8 + 6 * g), { L: 0.26 * g, out: [0.25, 0.8], c: col(0x6aa850), r0: 0.003, r1: 0.002 }, (p, az, i, pts) => { const q = polyAt(pts, 0.55).p;
      bean3(b, r, mul(at(p), OUT(az), RX(1.05)), g, col(0x3f9040)); bean3(b, r, mul(at(q), OUT(az + 1.6), RX(1.1)), g * 0.8, col(0x3f9040));
      if (o >= 0 && i % 2 === 0) { if (o < 0.5) head(b, mul(at(q), OUT(az - 1.2), RX(0.9), T(0, 0.02, 0)), r, sm5(col(0xd8b0f0), W), o * 2, 1);
        else { const t = polyAt(pts, 0.85).p; for (let k = 0; k < 2; k++) { const dry = r() < 0.45; pod(b, mul(T(t.x, t.y - 0.005, t.z), RY(r() * 6), RX(Math.PI - r.range(0.15, 0.6))), 0.08 * g * r.range(0.8, 1.1), 0.006, dry ? col(0xd8c070) : col(0x5aa844), dry ? col(0xe8cc98) : col(0x8ac860), 0.12, 0.12); } } } }) });
  Vg({ id: 'vagem', name: 'Vagem', lvl: 4, price: 19, grow: 85, h: 0.85, fixedRot: true, info: 'Sobe na taquara e pendura vagens compridas.',
    build: (b, r, g, o) => teepee(b, r, g, { leaf: (p, d) => bean3(b, r, frame(p, d), 0.78, col(0x4a9a44), 3, 2),
      item: (p, d) => { if (o < 0) return; if (o < 0.5) head(b, frame(p.clone().addScaledVector(d, 0.03), d), r, sm5(W, col(0xf0e0ff)), o * 2, 1.1);
        else for (let k = 0; k < 2; k++) pod(b, mul(T(p.x + d.x * 0.02, p.y - 0.005, p.z + d.z * 0.02), RY(r() * 6), RX(Math.PI - r.range(0.05, 0.3))), 0.13 * r.range(0.8, 1.1), 0.0048, col(0x5aa844), col(0x7ac058), 0.1, 0.06); } }) });
  Vg({ id: 'fava', name: 'Fava', lvl: 7, price: 30, grow: 110, h: 0.65, info: 'Flor branca de pinta preta, vagem gordinha.',
    build: (b, r, g, o) => { for (let s = 0; s < 3; s++) { const az0 = s * 2.1 + 0.4, pts = mkStem(r, 0.62 * g * r.range(0.85, 1.05), 0.05, az0, 0.02, 8); for (const p of pts) { p.x += Math.cos(az0) * 0.06; p.z += Math.sin(az0) * 0.06; }
        b.tube(null, pts, 0.008, 0.005, col(0x7aa878), col(0x9ac098), 4);
        const n = Math.round(8 * g); for (let i = 0; i < n; i++) { const t = 0.15 + (0.83 * i) / n, p = polyAt(pts, t).p, az = az0 + i * Math.PI + r.range(-0.4, 0.4);
          pinnate(b, mul(at(p), OUT(az), RX(1.0)), r, { L: 0.11 * g, pairs: 2, ll: 0.06 * g, lw: 0.034 * g, c: col(0x6a9a78), droop: 0.3, t0: 0.45, t1: 0.95, end: false, ang: 0.9, lo: { a: 0.9, b: 0.5 } });
          if (o >= 0 && i > 1 && i < n - 1) { const d = v3(Math.cos(az + 0.9) * 0.5, 1, Math.sin(az + 0.9) * 0.5).normalize();
            if (o < 0.5) head(b, frame(p.clone().addScaledVector(d, 0.014), v3(d.x, 0.25, d.z).normalize()), r, flat(W, W, col(0x1a1420), { n: 3, L: 0.02, W: 0.018, noEye: true }), o * 2, 1);
            else pod(b, frame(p, d), 0.11 * g * lerp(0.6, 1, o), 0.012, col(0x4a9a3c), col(0x6ab850), 0.08, 0.1, 6); } } } } });
  Vg({ id: 'pepino', name: 'Pepino', lvl: 5, price: 22, grow: 90, h: 0.7, fixedRot: true, info: 'Sobe na treliça e refresca o verão.',
    build: (b, r, g, o) => espalier(b, r, g, { stem: col(0x6aa850), every: 4,
      leaf: (p, sd) => leaf(b, mul(at(p), RY((sd > 0 ? 0 : Math.PI) + r.range(-0.9, 0.9)), T(0, 0, 0.02), RX(r.range(0.9, 1.3))), r, { L: 0.09 * g, W: 0.1 * g, a: 0.75, b: 0.35, c: col(0x3f8f40), tip: col(0x7ab860), tipMix: 0.2, ruffle: 0.22, rf: 5, nu: 4, nv: 4 }),
      item: (p, sd) => { if (o < 0) return; if (o < 0.5) head(b, mul(T(p.x, p.y, p.z + sd * 0.03), RX(sd * 1.2)), r, flat(col(0xf2b81a), col(0xf9d84a), null, { L: 0.022, W: 0.02 }), o * 2, 1);
        else { const k = lerp(0.5, 1, o); b.tube(null, [p, v3(p.x, p.y - 0.02, p.z + sd * 0.025)], 0.0015, 0.0015, col(0x6aa850), col(0x6aa850), 3); b.blob(mul(T(p.x, p.y - 0.02 - 0.05 * k, p.z + sd * 0.028), RZ(r.range(-0.12, 0.12))), 0.014 * k, 0.052 * k, col(0x4a9a44), col(0x2f7a34), 7, 6, col(0x2a6a30)); } } }) });
  Vg({ id: 'tomate_cereja', name: 'Tomate-cereja', lvl: 6, price: 28, grow: 100, spots: ['veg', 'pot'], h: 0.95, info: 'Pencas de bolinhas doces, do verde ao rubi.',
    build: (b, r, g, o) => { b.tube(null, [v3(0.02, 0, -0.01), v3(0.02, 0.5, -0.01), v3(0.02, 1.0, -0.01)], 0.007, 0.006, col(0xa8845a), col(0xc0a070), 5);
      const Hs = 0.92 * g, n = 14, pts = []; for (let k = 0; k <= n; k++) { const t = k / n; pts.push(v3(Math.cos(t * 9) * 0.02, t * Hs, Math.sin(t * 9) * 0.02 + 0.01)); }
      b.tube(null, pts, 0.007, 0.004, col(0x5a9a48), col(0x7ab860), 5);
      const nl = Math.round(12 * g); for (let i = 0; i < nl; i++) { const t = 0.12 + (0.86 * i) / nl; pinnate(b, mul(at(polyAt(pts, t).p), OUT(i * GOLD), RX(1.0 + r.range(-0.15, 0.2))), r, { L: 0.2 * g * (1 - t * 0.35), pairs: 3, ll: 0.06 * g, lw: 0.032 * g, c: col(0x3a8a3c), droop: 0.7, t0: 0.35, sc: col(0x5a9a48), lo: { ruffle: 0.3, rf: 4, nv: 3 } }); }
      if (o < 0) return; const nt = Math.round(5 * g), grn = col(0x8ab84a), org = col(0xf2901e), red = col(0xe0241e);
      for (let i = 0; i < nt; i++) { const t = 0.22 + (0.62 * i) / nt, p = polyAt(pts, t).p, az = i * 2.0 + 0.7, L = 0.17 * g, cx = Math.cos(az), cz = Math.sin(az);
        const tr = bez(p, v3(p.x + cx * L * 0.6, p.y + 0.02, p.z + cz * L * 0.6), v3(p.x + cx * L * 0.8, p.y - L * 0.7, p.z + cz * L * 0.8), 8); b.tube(null, tr, 0.002, 0.0015, col(0x6aa850), col(0x6aa850), 3);
        for (let k = 1; k <= 8; k++) { const q = tr[k], sd = k % 2 ? 1 : -1, rp = clamp(o * 1.7 - (k / 8) * 0.9 - t * 0.2, 0, 1), c = rp < 0.5 ? mixc(grn, org, rp * 2) : mixc(org, red, rp * 2 - 1);
          ball(b, T(q.x - cz * sd * 0.016, q.y - 0.006, q.z + cx * sd * 0.016), 0.017 * g * lerp(0.45, 1, o) * (1 - k * 0.03), 0.95, c, 6, 4); } } } });
  Vg({ id: 'quiabo', name: 'Quiabo', lvl: 6, price: 26, grow: 100, h: 0.9, info: 'Flor de hibisco amarelo e dedinhos apontando para o céu.',
    build: (b, r, g, o) => { for (let s = 0; s < 2; s++) { const x = s ? 0.09 : -0.07, pts = mkStem(r, 0.85 * g * r.range(0.9, 1.05), 0.04, s * 3 + 1, 0.02, 8); for (const p of pts) p.x += x;
        b.tube(null, pts, 0.01, 0.006, col(0x6a9a48), col(0x8ab860), 5);
        const n = Math.round(9 * g); for (let i = 0; i < n; i++) { const t = 0.2 + (0.78 * i) / n, p = polyAt(pts, t).p, az = i * GOLD + s, L = 0.13 * g * (1 - t * 0.4), cx = Math.cos(az), cz = Math.sin(az);
          const pp = bez(p, v3(p.x + cx * L * 0.5, p.y + L * 0.55, p.z + cz * L * 0.5), v3(p.x + cx * L, p.y + L * 0.6, p.z + cz * L), 3); b.tube(null, pp, 0.003, 0.002, col(0x8a6a5a), col(0x7aa850), 3);
          fanLeaf(b, mul(at(pp[3]), OUT(az), RX(1.2)), r, { n: 5, L: 0.12 * g * (1 - t * 0.35), W: 0.04 * g, c: col(0x3f8a3c), spread: 2.3, a: 0.85, b: 0.6, sideShrink: 0.45, ruffle: 0.15, rf: 4, nu: 4, nv: 3 });
          if (o >= 0 && t > 0.45) { const d = v3(Math.cos(az + 0.6) * 0.35, 1, Math.sin(az + 0.6) * 0.35).normalize();
            if (t > 0.86) head(b, mul(frame(p.clone().addScaledVector(d, 0.02), d), RX(0.5)), r, flat(col(0xfbf2a8), col(0xfffbd8), col(0x6a1428), { L: 0.04, W: 0.04, cr: 0.006, ch: 0.012, cc: [col(0xf2e08a), col(0xfaf0b0)] }), clamp(o * 1.2, 0, 1), 1);
            else if (o > 0.1) { const k = lerp(0.3, 1, o) * g, rad = [0.5, 1, 0.6, 0.05]; b.tube(frame(p, d), [v3(0, 0, 0), v3(0, 0.015 * k, 0), v3(0, 0.055 * k, 0), v3(0, 0.105 * k, 0)], (u) => 0.011 * k * rad[Math.round(u * 3)], 0, col(0x5a9a3c), col(0x8ac058), 5); } } } } } });
  Vg({ id: 'jilo', name: 'Jiló', lvl: 7, price: 30, grow: 110, spots: ['veg', 'pot'], h: 0.5, info: 'Amargo para uns, paixão para outros.',
    build: (b, r, g, o) => { habitBush(b, r, { R: 0.2, H: 0.44, branches: 9, heads: 5, splay: 0.65, fill: 24, stemC: col(0x5a8a50), leaf: { n: 8, L: 0.1, W: 0.07, c: col(0x3f8a48), a: 0.8, b: 0.55, ruffle: 0.2, rf: 3, nv: 3, vein: -0.3 }, head: flat(W, W, col(0xf0f0e0), { L: 0.02, W: 0.014, a: 0.9, cr: 0.005, ch: 0.007 }) }, g, o >= 0 && o < 0.6 ? o : -1);
      if (o >= 0.1) scatter(r, Math.round(7 * g), 0.2 * g, 0.34 * g, 0.05, (p, az, i) => { const k = lerp(0.35, 1, o), c = o > 0.9 && i % 4 === 3 ? col(0xe8601e) : jitterc(col(0x7ab84a), r, 0.04), M = mul(at(p), RZ(r.range(-0.3, 0.3)));
        ball(b, M, 0.022 * k, 1.35, c); b.tube(M, [v3(0, 0.028 * k, 0), v3(0.004, 0.05 * k, 0)], 0.003, 0.002, col(0x4a8a40), col(0x4a8a40), 3);
        for (let j = 0; j < 5; j++) b.petal(mul(M, T(0, 0.03 * k, 0), RY(j * 1.257), RX(2.2)), { L: 0.016 * k, W: 0.009 * k, cols: [col(0x3f8a3a), col(0x4a9a44), col(0x5aa850)], nu: 2, nv: 1 }); }); } });
  Vg({ id: 'pimenta_biquinho', name: 'Pimenta-biquinho', lvl: 7, price: 31, grow: 110, spots: HERB, h: 0.38, info: 'Gotinhas vermelhas de bico, doces e sem ardor.',
    build: (b, r, g, o) => { habitBush(b, r, { R: 0.17, H: 0.32, branches: 10, heads: 0, splay: 0.75, fill: 24, leaf: { n: 9, L: 0.05, W: 0.026, c: col(0x2f8038), a: 0.8, b: 0.6 } }, g, -1);
      if (o >= 0) scatter(r, Math.round(18 * g), 0.17 * g, 0.3 * g, 0.07, (p, az, i) => { const k = lerp(0.4, 1, o), c = ripen(r, o, col(0x6ab040), i % 5 === 4 ? col(0xf7c81e) : col(0xe0201e)), M = mul(at(p), RX(Math.PI), RY(r() * 6), RX(r.range(-0.3, 0.3)));
        b.tube(M, [v3(0, -0.012, 0), v3(0, 0, 0)], 0.0015, 0.0015, col(0x4a8a40), col(0x4a8a40), 3);
        b.lathe(M, [[0.004, 0], [0.012, 0.005], [0.0135, 0.013], [0.008, 0.021], [0.003, 0.027], [0.0006, 0.037]].map(([rr, y]) => [rr * k, y * k]), shade(c, 0.85), mixc(c, W, 0.15), 7); }); } });
  Vg({ id: 'dedo_de_moca', name: 'Pimenta dedo-de-moça', lvl: 8, price: 36, grow: 125, spots: ['veg', 'pot'], h: 0.46, info: 'Comprida, vermelha e de respeito.',
    build: (b, r, g, o) => { habitBush(b, r, { R: 0.19, H: 0.4, branches: 10, heads: 0, splay: 0.7, fill: 24, leaf: { n: 9, L: 0.06, W: 0.026, c: col(0x2f8038), a: 0.8, b: 0.6 } }, g, -1);
      if (o >= 0) scatter(r, Math.round(11 * g), 0.19 * g, 0.34 * g, 0.12, (p) => { const k = lerp(0.4, 1, o), c = ripen(r, o, col(0x4a9a3a), col(0xd81a1a)), L = 0.085 * k * r.range(0.8, 1.1), M = mul(at(p), RX(Math.PI), RY(r() * 6), RX(r.range(-0.2, 0.2)));
        b.tube(M, [v3(0, -0.014, 0), v3(0, 0.004, 0)], 0.002, 0.003, col(0x4a8a40), col(0x4a8a40), 4);
        b.tube(M, bez(v3(0, 0, 0), v3(0, L * 0.5, 0), v3(0, L, 0.022 * k), 5), (t) => 0.0075 * k * (t < 0.15 ? 0.6 + t * 2.7 : Math.pow(1 - (t - 0.15) / 0.85, 0.7) + 0.04), 0, shade(c, 0.85), c, 6); }); } });
  Vg({ id: 'chuchu', name: 'Chuchu', lvl: 8, price: 36, grow: 125, h: 0.6, info: 'Dá que nem chuchu na cerca: é só esperar.',
    build: (b, r, g, o) => { const w = 0.17, d = 0.13, Ht = 0.5, wood = col(0xa8845a), wood2 = col(0xc0a070), stem = col(0x6aa850);
      for (const sx of [-1, 1]) for (const sz of [-1, 1]) b.tube(null, [v3(sx * w, 0, sz * d), v3(sx * w, Ht, sz * d)], 0.008, 0.007, wood, wood2, 5);
      for (const sz of [-1, 1]) b.tube(null, [v3(-w - 0.03, Ht, sz * d), v3(w + 0.03, Ht, sz * d)], 0.006, 0.006, wood2, wood2, 4);
      for (let i = -2; i <= 2; i++) b.tube(null, [v3(i * w * 0.5, Ht + 0.008, -d - 0.03), v3(i * w * 0.5, Ht + 0.008, d + 0.03)], 0.004, 0.004, wood2, wood, 4);
      const lf = (M, s = 1) => leaf(b, M, r, { L: 0.09 * s, W: 0.1 * s, a: 0.7, b: 0.4, c: col(0x4a9a40), tip: col(0x8ac060), ruffle: 0.25, rf: 5, fold: 0.1, curl: 0.3, nu: 4, nv: 4 });
      [[-1, 1], [1, -1]].forEach(([sx, sz], s) => { const n = 12, pts = [], top = Math.min(1, g * 1.25); for (let k = 0; k <= n; k++) { const t = (k / n) * top, a = t * 9 + s; pts.push(v3(sx * w + Math.cos(a) * 0.018, t * Ht, sz * d + Math.sin(a) * 0.018)); }
        b.tube(null, pts, 0.004, 0.003, stem, stem, 4); for (let k = 2; k <= n; k += 2) lf(mul(at(pts[k]), RY(r() * 6), T(0, 0, 0.02), RX(1.1)), 0.8); });
      const cover = clamp((g - 0.5) * 2.2, 0, 1), nl = Math.round(34 * cover);
      for (let i = 0; i < nl; i++) lf(mul(T(r.range(-w - 0.06, w + 0.06), Ht + 0.02 + r() * 0.03, r.range(-d - 0.06, d + 0.06)), RY(r() * 6), RX(r.range(1.2, 1.6))));
      if (o >= 0 && cover > 0) for (let i = 0; i < 5; i++) { const x = r.range(-w * 0.8, w * 0.8), z = r.range(-d * 0.8, d * 0.8), k = lerp(0.3, 1, o), L = r.range(0.03, 0.07);
        b.tube(null, [v3(x, Ht, z), v3(x, Ht - L, z)], 0.0018, 0.0018, stem, stem, 3);
        ribLathe(b, mul(T(x, Ht - L, z), RX(Math.PI), RY(r() * 6)), [[0.006, 0], [0.018, 0.012], [0.03, 0.04], [0.04, 0.07], [0.036, 0.092], [0.012, 0.102]].map(([rr, y]) => [rr * k, y * k]), col(0x8ac058), col(0xb8e080), 5, 0.14, 20, null, true); } } });
  const vineLeaf = (b, r, g, c) => (M) => leaf(b, M, r, { L: 0.13 * g, W: 0.14 * g, a: 0.85, b: 0.35, c, ruffle: 0.2, rf: 5, nu: 4, nv: 4 });
  const vineFruit = (r, g, o, n, rad, fn) => { if (o >= 0) for (let i = 0; i < n; i++) { const az = i * 2.6 + 0.9, d = (0.12 + i * 0.1) * g, k = lerp(0.3, 1, o); fn(mul(T(Math.cos(az) * d, rad * k * 0.8, Math.sin(az) * d), RY(r() * 6)), k); } };
  Vg({ id: 'cabotia', name: 'Abóbora-cabotiá', lvl: 9, price: 42, grow: 135, h: 0.2, info: 'Casca verde-escura, miolo dourado e doce.',
    build: (b, r, g, o) => { groundVine(b, r, g, { leaf: vineLeaf(b, r, g, col(0x3f8a40)) });
      vineFruit(r, g, o, 2, 0.07, (M, k) => { gourd(b, M, 0.1 * k, 0.062 * k, 0.1 * k, col(0x2a5a30), col(0x7aa068), 10, 0.1); b.tube(mul(M, T(0, 0.055 * k, 0)), [v3(0, 0, 0), v3(0.008, 0.03, 0)], 0.009, 0.007, col(0x8a8a5a), col(0x9a9a6a), 5); }); } });
  Vg({ id: 'moranga', name: 'Moranga', lvl: 11, price: 56, grow: 155, h: 0.22, info: 'Gomos fundos e casca salmão: pede um camarão dentro.',
    build: (b, r, g, o) => { groundVine(b, r, g, { leaf: vineLeaf(b, r, g, col(0x3a8a44)) });
      vineFruit(r, g, o, 2, 0.07, (M, k) => { const c = mixc(col(0x8aa850), col(0xe8946a), clamp(o * 1.4 - 0.2, 0, 1)); gourd(b, M, 0.115 * k, 0.062 * k, 0.115 * k, c, shade(c, 0.72), 9, 0.2); b.tube(mul(M, T(0, 0.05 * k, 0)), [v3(0, 0, 0), v3(0.008, 0.035, 0)], 0.01, 0.007, col(0x8a8a5a), col(0x9a9a6a), 5); }); } });
  Vg({ id: 'melao', name: 'Melão', lvl: 10, price: 48, grow: 145, h: 0.2, info: 'Amarelo-ouro, perfumado de longe.',
    build: (b, r, g, o) => { groundVine(b, r, g, { leaf: vineLeaf(b, r, g, col(0x4a9448)) });
      vineFruit(r, g, o, 2, 0.085, (M, k) => { const c = mixc(col(0x8ab850), col(0xf7d02a), clamp(o * 1.4 - 0.2, 0, 1)); gourd(b, M, 0.082 * k, 0.082 * k, 0.11 * k, c, shade(c, 0.9), 10, 0.035); }); } });
  Vg({ id: 'physalis', name: 'Physalis', lvl: 12, price: 70, grow: 165, spots: ['veg', 'pot'], h: 0.46, info: 'Uma fruta dourada embrulhada em lanterninha de papel.',
    build: (b, r, g, o) => { habitBush(b, r, { R: 0.2, H: 0.42, branches: 9, heads: 0, splay: 0.75, fill: 22, stemC: col(0x7a9a58), leaf: { n: 7, L: 0.085, W: 0.065, c: col(0x4a9448), tip: col(0x7ab868), a: 0.65, b: 0.55, tilt: 1.1 } }, g, -1);
      if (o >= 0) scatter(r, Math.round(11 * g), 0.2 * g, 0.36 * g, 0.06, (p, az, i) => { const k = lerp(0.35, 1, o), husk = o < 0.6 ? col(0x8ac058) : jitterc(col(0xd8bc78), r, 0.04), M = mul(at(p), RX(Math.PI), RY(r() * 6), RX(r.range(-0.25, 0.25)));
        b.tube(M, [v3(0, -0.015, 0), v3(0, 0, 0)], 0.0015, 0.0015, col(0x7a9a58), col(0x7a9a58), 3);
        if (o > 0.9 && i % 3 === 0) { for (let j = 0; j < 5; j++) b.petal(mul(M, RY(j * 1.257), T(0, 0, 0.004), RX(0.55)), { L: 0.045 * k, W: 0.026 * k, a: 0.8, b: 0.7, cup: 0.8, curl: -0.5, cols: [husk, mixc(husk, W, 0.2), husk], nu: 4, nv: 2, vein: 0.3 }); ball(b, mul(M, T(0, 0.022 * k, 0)), 0.013 * k, 1, col(0xf2901e), 7, 5); }
        else ribLathe(b, M, [[0.003, 0], [0.016 * k, 0.008 * k], [0.021 * k, 0.022 * k], [0.014 * k, 0.038 * k], [0.002, 0.05 * k]], shade(husk, 0.85), mixc(husk, W, 0.2), 5, 0.18, 20); }); } });
  Vg({ id: 'abacaxi', name: 'Abacaxi', lvl: 16, price: 150, grow: 205, spots: ['veg', 'pot'], h: 0.5, thirst: 0.6, info: 'O rei de coroa: demora, mas vale cada dia.',
    build: (b, r, g, o) => { const n = Math.round(16 + 16 * g);
      for (let i = 0; i < n; i++) b.petal(mul(RY(i * GOLD), T(0, 0.01 + i * 0.002 * g, 0.01), RX(lerp(1.25, 0.25, i / n) + r.range(-0.08, 0.08))), { L: 0.4 * g * r.range(0.7, 1.05), W: 0.036 * g, a: 0.5, b: 0.4, base: 0.8, fold: 0.45, curl: r.range(0.4, 0.9), curlPow: 2, nu: 6, nv: 2, vein: 0.2, cols: [col(0x6a8a60), jitterc(col(0x5a8a68), r, 0.04), col(0x9a8a6a)] });
      if (o < 0) return; const k = lerp(0.3, 1, o) * g, y0 = 0.16 * g, c = mixc(col(0x6a9a48), col(0xe8a82a), clamp(o * 1.3 - 0.2, 0, 1)), rad = (t) => 0.058 * k * Math.pow(Math.sin(Math.PI * (0.1 + 0.82 * t)), 0.55);
      b.tube(null, [v3(0, 0, 0), v3(0, y0, 0)], 0.014, 0.012, col(0x7a9a60), col(0x8aa868), 6);
      const prof = []; for (let i = 0; i <= 8; i++) prof.push([rad(i / 8), y0 + (i / 8) * 0.15 * k]); b.lathe(null, prof, shade(c, 0.7), shade(c, 0.85), 12);
      for (let i = 0; i < 64; i++) { const t = 0.04 + (0.9 * (i + 0.5)) / 64, az = i * GOLD; b.blob(T(Math.cos(az) * rad(t), y0 + t * 0.15 * k, Math.sin(az) * rad(t)), 0.011 * k, 0.011 * k, c, mixc(c, W, 0.25), 5, 3); }
      for (let i = 0; i < 16; i++) b.petal(mul(T(0, y0 + 0.15 * k, 0), RY(i * GOLD), RX(lerp(0.15, 1.0, i / 16))), { L: 0.085 * k * r.range(0.7, 1.1), W: 0.016 * k, a: 0.5, b: 0.5, base: 0.7, fold: 0.4, curl: 0.5, nu: 3, nv: 2, cols: [col(0x5a8a58), col(0x6a9a68), col(0x8aaa78)] }); } });
  Vg({ id: 'alcachofra', name: 'Alcachofra', lvl: 15, price: 120, grow: 195, h: 0.65, info: 'Um botão de escamas que esconde um coração.',
    build: (b, r, g, o) => { const n = Math.round(6 + 5 * g);
      for (let i = 0; i < n; i++) lobedLeaf(b, mul(RY(i * GOLD), T(0, 0.01, 0.015), RX(lerp(0.35, 1.1, i / n) + r.range(-0.1, 0.1))), r, { L: 0.42 * g * r.range(0.75, 1.05), W: 0.05 * g, pairs: 5, lobeL: 0.1 * g, lobeW: 0.035 * g, c: col(0x7a9a88), tip: col(0xa8c0b0), t0: 0.2, t1: 0.85, s0: 0.7, s1: 1, ang: 0.95, curl: 0.9, a: 0.9 });
      if (o >= 0) for (let i = 0; i < 3; i++) { const az = i * 2.1 + 0.5, pts = mkStem(r, 0.52 * g * (i ? 0.78 : 1), i ? 0.1 : 0.02, az, 0.02, 6); b.tube(null, pts, 0.01, 0.008, col(0x8aa890), col(0x9ab8a0), 5);
        leavesAlong(b, pts, r, { n: 3, L: 0.1, W: 0.03, c: col(0x7a9a88), t0: 0.3, t1: 0.8 });
        const k = lerp(0.4, 1, o) * (i ? 0.75 : 1) * g, M = frame(pts[6], UP);
        b.blob(mul(M, T(0, 0.03 * k, 0)), 0.04 * k, 0.04 * k, col(0x5a8a58), col(0x7aa870), 8, 5);
        head(b, M, r, { layers: [{ n: 34, golden: true, L: [0.03, 0.05], W: [0.03, 0.04], a: 0.9, b: 0.7, tilt: [0.15, 0.95], tiltC: [0.15, 0.95], curl: [-0.9, -0.7], curlC: [-0.9, -0.7], cup: 1.0, r: [0.006, 0.03], y: [0.06, 0.0], cols: [col(0x5a8a58), col(0x7aa870), col(0x7a5a8a)], nu: 3, nv: 2, closedScale: 1 }] }, 1, k);
        if (i === 0 && o > 0.9) for (let j = 0; j < 40; j++) b.petal(mul(M, T(0, 0.065 * k, 0), RY(j * GOLD), RX(r.range(0.05, 0.7))), { L: 0.04 * k, W: 0.003, cols: [col(0x7a4ab8), col(0x9a6ad8), col(0xb890f0)], nu: 2, nv: 1 }); } } });
  Vg({ id: 'aspargo', name: 'Aspargo', lvl: 13, price: 84, grow: 175, h: 0.85, info: 'Brotos finos na primavera, nuvem verde no verão.',
    build: (b, r, g, o) => { for (let s = 0; s < 3; s++) { const az = s * 2.1 + r(), pts = mkStem(r, 0.8 * g * r.range(0.8, 1.05), 0.12 * g, az, 0.03, 9); for (const p of pts) { p.x += Math.cos(az) * 0.05; p.z += Math.sin(az) * 0.05; }
        b.tube(null, pts, 0.005, 0.0015, col(0x5a9a50), col(0x7ab868), 4);
        const nb = Math.round(12 * g); for (let i = 0; i < nb; i++) { const t = 0.3 + (0.7 * i) / nb, p = polyAt(pts, t).p, a2 = i * GOLD, L = 0.2 * g * (1.15 - t), tip = p.clone().addScaledVector(v3(Math.cos(a2), 0.35, Math.sin(a2)).normalize(), L);
          b.tube(null, [p, p.clone().lerp(tip, 0.5).add(v3(0, L * 0.08, 0)), tip], 0.0015, 0.0008, col(0x6aa858), col(0x7ab868), 3);
          for (let q = 0; q < 14; q++) b.petal(frame(p.clone().lerp(tip, 0.2 + (0.8 * q) / 13), v3(r.range(-1, 1), r.range(-0.2, 1), r.range(-1, 1)).normalize()), { L: 0.042 * g * r.range(0.7, 1.2), W: 0.003, a: 1, b: 0.5, nu: 2, nv: 1, cols: [col(0x5a9a50), col(0x7ab868), col(0x9ad080)] }); } }
      if (o >= 0) { const k = lerp(0.35, 1, o), rad = [1, 0.95, 1, 0.85, 0.2]; for (let i = 0; i < 7; i++) { const az = i * GOLD, d = 0.05 + 0.11 * Math.sqrt((i + 0.5) / 7), x = Math.cos(az) * d, z = Math.sin(az) * d, Hs = 0.2 * k * g * r.range(0.5, 1.1);
        b.tube(T(x, 0, z), [0, 0.4, 0.75, 0.92, 1].map((t) => v3(0, t * Hs, 0)), (t) => 0.0085 * rad[Math.round(t * 4)], 0, col(0xa8cc78), col(0x6a9a58), 6);
        b.blob(T(x, Hs * 0.9, z), 0.0085, 0.022, col(0x6a8a50), col(0x7a5a8a), 5, 4);
        for (let j = 0; j < 4; j++) b.petal(mul(T(x, Hs * (0.25 + j * 0.15), z), RY(j * 2.4), T(0, 0, 0.008), RX(0.15)), { L: 0.016, W: 0.008, cols: [col(0x8ab868), col(0x7a6a8a), col(0x7a5a8a)], nu: 2, nv: 1 }); } } } });

  // ================= horta: frutinhas =================
  const berry = (b, p, rad, c, nu = 5, nv = 4) => b.blob(at(p), rad, rad * 1.1, shade(c, 0.7), c, nu, nv, mixc(c, W, 0.25));
  Vg({ id: 'amora_preta', name: 'Amora-preta', lvl: 11, price: 56, grow: 155, h: 0.6, info: 'Mancha os dedos e adoça a tarde.',
    build: (b, r, g, o) => canes(b, r, g, { n: 7, L: 0.64, up: 0.85, drop: 0.3, out: 0.7, cane: col(0x7a4a4a), cane2: col(0x6a9a50), leaves: 8,
      leaf: (M) => fanLeaf(b, M, r, { n: 3, L: 0.055 * g, W: 0.04 * g, c: col(0x35803a), spread: 2.2, a: 0.8, b: 0.55, sideShrink: 0.15, ruffle: 0.2, rf: 4, nu: 3, nv: 2 }),
      fruit: o < 0 ? null : (p, a2) => { if (o < 0.5) { head(b, mul(at(p), OUT(a2), RX(1.0), T(0, 0.03, 0)), r, sm5(W, col(0xfce8f0), null, 1.3), o * 2, 1); return; }
        for (let j = 0; j < 3; j++) { const q = v3(p.x + Math.cos(a2 + j) * 0.03, p.y - 0.012 - j * 0.014, p.z + Math.sin(a2 + j) * 0.03), rp = clamp(o * 1.6 - j * 0.35 - r() * 0.3, 0, 1); berry(b, q, 0.013 * g, rp > 0.55 ? mixc(col(0x8a1430), col(0x1e1024), rp * 2 - 1) : mixc(col(0xb8d070), col(0xd8283a), rp * 2)); } } }) });
  Vg({ id: 'framboesa', name: 'Framboesa', lvl: 12, price: 70, grow: 165, h: 0.7, info: 'Dedaizinhos cor-de-rosa que derretem na boca.',
    build: (b, r, g, o) => canes(b, r, g, { n: 6, L: 0.78, up: 1.0, drop: 0.12, out: 0.42, cane: col(0x9a6a50), cane2: col(0x7aa858), leaves: 8,
      leaf: (M) => pinnate(b, M, r, { L: 0.09 * g, pairs: 2, ll: 0.045 * g, lw: 0.03 * g, c: col(0x5aa048), droop: 0.5, t0: 0.4, t1: 0.85, endK: 1.3, sr: 0.001, lo: { ruffle: 0.2, rf: 4, nv: 2, tip: col(0xb8d8a0), tipMix: 0.35 } }),
      fruit: o < 0 ? null : (p, a2) => { if (o < 0.5) { head(b, mul(at(p), OUT(a2), RX(1.0), T(0, 0.03, 0)), r, sm5(W, W, null, 1.1), o * 2, 1); return; }
        for (let j = 0; j < 3; j++) { const q = v3(p.x + Math.cos(a2 + j * 1.3) * 0.028, p.y - 0.02 - j * 0.012, p.z + Math.sin(a2 + j * 1.3) * 0.028), rp = clamp(o * 1.6 - j * 0.3 - r() * 0.3, 0, 1);
          b.tube(null, [p, q.clone().add(v3(0, 0.012, 0))], 0.001, 0.001, col(0x7aa858), col(0x7aa858), 3); berry(b, q, 0.012 * g, mixc(col(0xd8e0a0), col(0xd8244a), rp)); } } }) });
  Vg({ id: 'groselha', name: 'Groselha', lvl: 13, price: 84, grow: 175, spots: ['veg', 'pot'], h: 0.5, info: 'Colares de contas vermelhas e brilhantes.',
    build: (b, r, g, o) => { habitBush(b, r, { R: 0.2, H: 0.42, branches: 10, heads: 0, splay: 0.8, fill: 14, wood: col(0x6a5040), stemC: col(0x7a6a4a), stemR: 0.006, leaf: { n: 5, L: 0.05, W: 0.055, c: col(0x4a9a44), a: 0.75, b: 0.4, ruffle: 0.3, rf: 3, nv: 3 }, leafTip: { n: 3, L: 0.055, W: 0.04, c: col(0x4a9a44), spread: 2.0, sideShrink: 0.3 } }, g, -1);
      if (o >= 0) scatter(r, Math.round(12 * g), 0.2 * g, 0.36 * g, 0.08, (p) => { const k = lerp(0.4, 1, o), L = 0.075 * g, bend = r.range(-0.012, 0.012);
        b.tube(null, [p, v3(p.x + bend, p.y - L * 0.5, p.z), v3(p.x + bend * 2, p.y - L, p.z)], 0.0012, 0.0008, col(0x7aa850), col(0x7aa850), 3);
        for (let j = 0; j < 7; j++) { const t = (j + 1) / 7.5, sd = j % 2 ? 1 : -1, rp = clamp(o * 1.5 - t * 0.5, 0, 1); b.blob(T(p.x + bend * 2 * t + sd * 0.007, p.y - L * t, p.z + (j % 3 - 1) * 0.006), 0.0085 * k * (1 - t * 0.25), 0.0085 * k * (1 - t * 0.25), mixc(col(0x9ac060), col(0xb8101e), rp), mixc(col(0xc8e088), col(0xf0403a), rp), 5, 3); } }); } });
  Vg({ id: 'mirtilo', name: 'Mirtilo', lvl: 14, price: 100, grow: 185, spots: ['veg', 'pot'], h: 0.48, info: 'Azul empoeirado, como geada de manhã.',
    build: (b, r, g, o) => { habitBush(b, r, { R: 0.2, H: 0.4, branches: 12, heads: 14, stalk: 0.04, wood: col(0x7a5a48), stemC: col(0x9a6a50), stemR: 0.005, fill: 12, splay: 0.8, leaf: { n: 14, L: 0.042, W: 0.022, nu: 3, c: col(0x3f8a50), tip: col(0xb8503a), tipMix: 0.25, a: 0.85, b: 0.6 },
        head: { ball: { n: 6, r: 0.014, fs: 0.012, cols: [W, col(0xfce8ee)], squash: 0.8, cover: 0.2 } } }, g, o >= 0 && o < 0.6 ? o : -1);
      if (o >= 0.1) scatter(r, Math.round(13 * g), 0.2 * g, 0.36 * g, 0.06, (p) => { const k = lerp(0.4, 1, o); for (let j = 0; j < 4; j++) { const rp = clamp(o * 1.5 - j * 0.2 - r() * 0.2, 0, 1), c = rp < 0.5 ? mixc(col(0x9ac870), col(0xc878a0), rp * 2) : mixc(col(0xc878a0), col(0x34407e), rp * 2 - 1);
        b.blob(T(p.x + Math.cos(j * 1.7) * 0.014, p.y - j * 0.006, p.z + Math.sin(j * 1.7) * 0.014), 0.0105 * k, 0.0098 * k, shade(c, 0.75), c, 6, 4, rp > 0.8 ? col(0x8a9cd8) : mixc(c, W, 0.2)); } }); } });

  // ================= horta: ervas e temperos =================
  Vg({ id: 'coentro', name: 'Coentro', lvl: 1, price: 8, grow: 50, spots: HERB, h: 0.3, info: 'Folhinhas rendadas e um cheiro que divide opiniões.',
    build: (b, r, g, o) => { stalks(b, r, Math.round(9 + 9 * g), { L: 0.16 * g, out: [0.2, 0.65], c: col(0x7ab85a), r0: 0.002, r1: 0.0015, seg: 3 }, (p, az) => fanLeaf(b, mul(at(p), OUT(az), RX(0.9)), r, { n: 5, L: 0.036, W: 0.03, c: col(0x58a848), spread: 2.9, ruffle: 0.5, rf: 5, nv: 3, a: 1.25, b: 0.45, sideShrink: 0.3 }));
      if (o > 0.3) for (let i = 0; i < 4; i++) { const pts = mkStem(r, 0.3 * g * r.range(0.8, 1.05), 0.07, i * 1.7 + r(), 0.04, 6); b.tube(null, pts, 0.002, 0.0015, col(0x7ab85a), col(0x8ac86a), 3);
        leavesAlong(b, pts, r, { n: 4, L: 0.035, W: 0.004, c: col(0x6ab050), tilt: 0.9, fold: 0 });
        floretBall(b, frame(pts[6], UP), r, { n: 18, r: 0.032, fs: 0.012, np: 5, cols: [W, col(0xfbeef4)], squash: 0.3, cover: 0 }, o); } } });
  Vg({ id: 'oregano', name: 'Orégano', lvl: 2, price: 11, grow: 55, spots: HERB, h: 0.26, info: 'O cheiro da pizza saindo do forno.',
    build: (b, r, g, o) => habitBush(b, r, { R: 0.17, H: 0.2, branches: 16, heads: 7, stalk: 0.18, headUp: 0.7, fill: 6, stemC: col(0x8a5a5a), stemR: 0.003, leaf: { n: 15, L: 0.028, W: 0.023, nu: 3, c: col(0x5a9a4a), a: 0.85, b: 0.55, tilt: 1.0 },
      head: { ball: { n: 12, r: 0.02, fs: 0.01, cols: [col(0xe0a0d0), col(0xf0c8e4), col(0xc878b8)], squash: 0.6, cover: 0.1 } } }, g, o) });
  Vg({ id: 'tomilho', name: 'Tomilho', lvl: 3, price: 14, grow: 65, spots: HERB, h: 0.12, thirst: 0.6, info: 'Almofadinha perfumada de folhas miúdas.',
    build: (b, r, g, o) => { const R = 0.15 * g, Hh = 0.085 * g, gs = [col(0x5a9a50), col(0x6aaa58), col(0x4a8a48), col(0x7aa868)], fl = [col(0xd89ae0), col(0xf0c8f4), col(0xc080d0)];
      b.blob(T(0, 0, 0), R * 0.82, Hh * 0.82, col(0x2a5230), col(0x3f7a3c), 9, 5);
      const dome = (n, k, w, h, cs) => { for (let i = 0; i < n; i++) { const az = r() * TAU, el = Math.acos(r()), d = v3(Math.cos(az) * Math.sin(el), Math.cos(el), Math.sin(az) * Math.sin(el)), kk = k * r.range(0.86, 1.06), c = jitterc(r.pick(cs), r, 0.04);
        b.card(mul(frame(v3(d.x * R * kk, d.y * Hh * kk, d.z * R * kk), v3(d.x + r.range(-0.5, 0.5), d.y + 0.6, d.z + r.range(-0.5, 0.5)).normalize()), RY(r() * 6)), w, h, shade(c, 0.7), c, 0, 1, 0, 0.2); } };
      dome(Math.round(520 * g), 1, 0.013, 0.022, gs);
      for (let i = 0; i < Math.round(16 * g); i++) { const az = i * GOLD, L = R * r.range(1.0, 1.25); b.tube(null, [v3(0, 0, 0), v3(Math.cos(az) * L * 0.5, Hh * 0.5, Math.sin(az) * L * 0.5), v3(Math.cos(az) * L, 0.012, Math.sin(az) * L)], 0.0018, 0.001, col(0x7a6a54), col(0x6a8a50), 3); }
      if (o > 0.2) dome(Math.round(110 * o * g), 1.1, 0.012, 0.014, fl); } });
  Vg({ id: 'camomila', name: 'Camomila', lvl: 3, price: 16, grow: 70, spots: HERB, h: 0.3, info: 'Margaridinhas para o chá de boa noite.',
    build: (b, r, g, o) => habitBush(b, r, { R: 0.16, H: 0.24, branches: 12, heads: 18, stalk: 0.22, headUp: 0.7, fill: 8, stemR: 0.002, leaf: { n: 16, L: 0.04, W: 0.007, c: col(0x6aa850), fold: 0, tilt: 0.9, nu: 2, nv: 1 },
      head: { layers: [{ n: 13, L: 0.017, W: 0.007, a: 0.8, b: 0.5, tilt: 1.8, tiltC: 0.3, curl: 0.2, cup: 0.3, cols: [W, W, W], nu: 2, nv: 1 }], center: { type: 'dome', r: 0.008, h: 0.009, y: 0.002, cols: [col(0xd9a00f), col(0xf5c628), col(0xf9dc55)], seg: 7 } } }, g, o) });
  Vg({ id: 'erva_cidreira', name: 'Erva-cidreira', lvl: 4, price: 17, grow: 75, spots: HERB, h: 0.3, info: 'Cheirinho de limão que acalma o coração.',
    build: (b, r, g, o) => { habitBush(b, r, { R: 0.17, H: 0.26, branches: 12, heads: 0, fill: 10, stemC: col(0x7aa850), leaf: { n: 10, L: 0.05, W: 0.042, c: col(0x6ab840), tip: col(0xc0e078), tipMix: 0.35, a: 0.7, b: 0.5, ruffle: 0.3, rf: 6, nv: 3, cup: -0.3, tilt: 1.05 } }, g, -1);
      if (o > 0.2) habitSpike(b, r, { stems: [5, 6], H: 0.3, lean: 0.4, florets: 8, from: 0.75, type: 'card', fs: 0.007, cols: [W, col(0xfff8e0)], stemC: col(0x7aa850) }, g, o); } });
  Vg({ id: 'manjerona', name: 'Manjerona', lvl: 5, price: 21, grow: 85, spots: HERB, h: 0.26, info: 'Prima delicada do orégano, de folha aveludada.',
    build: (b, r, g, o) => habitBush(b, r, { R: 0.15, H: 0.22, branches: 16, heads: 9, stalk: 0.14, headUp: 0.7, fill: 6, stemC: col(0x8a7a6a), stemR: 0.003, leaf: { n: 15, L: 0.03, W: 0.02, nu: 3, c: col(0x8aaa80), tip: col(0xb8c8a8), a: 0.85, b: 0.6, tilt: 1.0 },
      head: { ball: { n: 9, r: 0.013, fs: 0.009, cols: [W, col(0xf0f4e0), col(0xd8e4c0)], squash: 0.8, cover: 0.3 } } }, g, o) });
  Vg({ id: 'capim_limao', name: 'Capim-limão', lvl: 6, price: 25, grow: 95, spots: ['veg', 'pot'], h: 0.55, foliage: true, info: 'Uma fonte verde que perfuma o chá.',
    build: (b, r, g) => { const n = Math.round(30 + 40 * g); for (let i = 0; i < n; i++) { const az = r() * TAU, d = r() * 0.035;
        b.petal(mul(T(Math.cos(az) * d, 0, Math.sin(az) * d), OUT(az + r.range(-0.5, 0.5)), RX(r.range(0.05, 0.55))), { L: 0.55 * g * r.range(0.55, 1.1), W: 0.012, a: 0.6, b: 0.35, base: 0.5, curl: r.range(0.9, 2.3), curlPow: 2.4, nu: 7, nv: 1, cols: [col(0xa8c890), jitterc(col(0x6aaa48), r, 0.05), col(0xa8cc60)] }); } } });
  Vg({ id: 'erva_doce', name: 'Erva-doce', lvl: 8, price: 34, grow: 120, h: 0.75, info: 'Funcho: plumas de renda e guarda-chuvinhas amarelos.',
    build: (b, r, g, o) => { ribLathe(b, S(1.25, 1, 0.85), [[0.012, -0.01], [0.045, 0.012], [0.05, 0.04], [0.035, 0.075], [0.02, 0.1]].map(([rr, y]) => [rr * g, y * g]), col(0xf6f6e6), col(0xd8ecb0), 4, 0.1, 16, null, true);
      const ns = Math.round(4 + 3 * g); for (let i = 0; i < ns; i++) { const az = (i % 2 ? Math.PI : 0) + r.range(-0.7, 0.7), pts = mkStem(r, 0.55 * g * r.range(0.6, 1.05), r.range(0.03, 0.16), az, 0.03, 7); for (const p of pts) p.y += 0.06 * g;
        b.tube(null, pts, 0.006, 0.002, col(0xb8dc98), col(0x7ab860), 4);
        for (let j = 0; j < 7; j++) { const p = polyAt(pts, 0.4 + (0.6 * j) / 6).p, a2 = az + j * 2.4; for (let q = 0; q < 12; q++) b.petal(frame(p, v3(Math.cos(a2) + r.range(-1, 1), r.range(-0.1, 1.2), Math.sin(a2) + r.range(-1, 1)).normalize()),
          { L: 0.055 * g * r.range(0.5, 1.1), W: 0.0022, a: 1, b: 0.5, curl: r.range(-0.4, 0.8), nu: 2, nv: 1, cols: [col(0x6aaa58), col(0x7aba60), col(0x9ad078)] }); } }
      if (o > 0.3) for (let i = 0; i < 3; i++) { const pts = mkStem(r, 0.7 * g * r.range(0.85, 1.05), 0.06, i * 2.1 + 1, 0.02, 6), tip = pts[6]; b.tube(null, pts, 0.004, 0.003, col(0x8ac070), col(0x8ac070), 4);
        for (let j = 0; j < 8; j++) { const a = j * 0.785; b.tube(at(tip), [v3(0, -0.035, 0), v3(Math.cos(a) * 0.02, -0.012, Math.sin(a) * 0.02), v3(Math.cos(a) * 0.04, 0.002, Math.sin(a) * 0.04)], 0.001, 0.001, col(0x8ac070), col(0x8ac070), 3); }
        floretBall(b, at(tip), r, { n: 22, r: 0.05, fs: 0.012, np: 5, cols: [col(0xe8b000), col(0xf2c41a)], squash: 0.25, cover: 0, bud: col(0xb8cc5a) }, o); } } });
  Vg({ id: 'estragao', name: 'Estragão', lvl: 9, price: 40, grow: 130, spots: HERB, h: 0.42, foliage: true, info: 'Folha fina de sabor anisado, coisa de chef.',
    build: (b, r, g) => habitSpike(b, r, { stems: [20, 22], H: 0.4, lean: 0.45, stemC: col(0x6a9a54), stemR: 0.002, florets: 0, from: 1, leaf: { n: 20, L: 0.06, W: 0.009, c: col(0x3f8a44), tip: col(0x7ab860), fold: 0.2, tilt: 0.8, taper: 0.3, nu: 3, nv: 1 } }, g, -1) });
  Vg({ id: 'louro', name: 'Louro', lvl: 10, price: 50, grow: 145, spots: ['veg', 'pot', 'bed'], h: 0.6, foliage: true, thirst: 0.7, info: 'Uma arvorezinha de folhas para o feijão.',
    build: (b, r, g) => { habitTree(b, r, { H: 0.26, R: 0.2, trunkR: 0.016, limbs: 6, bark: col(0x5a4a3a), leaves: 360, leafSize: 0.065, leafCols: [col(0x2f7a3a), col(0x3f8a44), col(0x2a6a34)] }, g, -1);
      for (let i = 0; i < Math.round(110 * g); i++) { const d = v3(r.range(-1, 1), r.range(-0.5, 1), r.range(-1, 1)).normalize(), p = v3(d.x * 0.22 * g, (0.26 + 0.11 + d.y * 0.2) * g, d.z * 0.22 * g);
        leaf(b, frame(p, d.clone().add(v3(0, 0.4, 0)).normalize()), r, { L: 0.06, W: 0.022, c: col(0x2f7038), tip: col(0x5a9a50), a: 0.8, b: 0.6, fold: 0.3, curl: 0.3, nu: 3, nv: 2 }); } } });
  // ================= árvores =================
  const Tr = (id, name, lvl, price, info, build, extra = {}) => add({ id, name, lvl, price, gift: Math.round(price * 0.58), grow: 240, spots: ['tree'], h: 3.2, tree: true, thirst: 0.5, info, ...extra, build });
  const std = (P) => (b, r, g, o) => { xtree(b, r, P, g, o); };
  const calyx = (b, M, k, n = 4, c = col(0x5a8a3a)) => { for (let j = 0; j < n; j++) b.petal(mul(M, RY((j / n) * TAU), RX(1.9)), { L: 0.03 * k, W: 0.022 * k, a: 0.8, b: 0.7, cols: [shade(c, 0.8), c, mixc(c, G.light, 0.3)], nu: 2, nv: 1 }); };

  // ---- fruit trees ----
  Tr('aceroleira', 'Aceroleira', 6, 88, 'Cerejinhas ácidas, campeãs de vitamina C.', std({ H: 0.7, R: 0.95, trunkR: 0.06, limbs: 8, bark: col(0x7a6a56), leaves: 2700, leafSize: 0.1, leafCols: [col(0x3a8a3c), col(0x4a9a44), col(0x2f7a34)],
    blossom: { n: 320, size: 0.05, cols: [col(0xf7a0c8), col(0xfcd0e0)] }, fruit: { n: 60, make: (b, p, r, i) => { const c = i % 6 === 0 ? col(0xf2901e) : jitterc(col(0xdc1e1e), r, 0.04); ball(b, at(p), 0.024, 0.9, c, 6, 4); } } }), { h: 2.6 });
  Tr('amoreira', 'Amoreira', 7, 98, 'Amoras que tingem a calçada e a boca.', std({ H: 0.95, R: 1.1, trunkR: 0.075, limbs: 8, bark: col(0x6a5a48), leaves: 2600, leafSize: 0.17, leafCols: [col(0x3f9040), col(0x5aa848), col(0x358038)],
    fruit: { n: 54, make: (b, p, r, i) => { const c = i % 4 === 0 ? col(0xc8283a) : i % 4 === 1 ? col(0x6a1a3a) : col(0x24122a); b.blob(hangM(p, r, 0.4), 0.015, 0.032, shade(c, 0.8), c, 6, 5, mixc(c, W, 0.2)); } } }));
  Tr('goiabeira', 'Goiabeira', 8, 110, 'Tronco liso de trepar e goiaba no pé.', std({ H: 0.95, R: 1.05, trunkR: 0.075, limbs: 8, bark: col(0xb09472), bark1: col(0xc8b090), leaves: 2700, leafSize: 0.15, leafCols: [col(0x3f8a40), col(0x4a9a48), col(0x35783a)],
    blossom: { n: 240, size: 0.075, cols: [W, col(0xfff8e8)] }, fruit: { n: 26, make: (b, p, r, i) => { const c = i % 3 === 0 ? col(0x8ab850) : col(0xd0d458); b.blob(hangM(p, r, 0.3), 0.046, 0.052, shade(c, 0.85), c, 7, 5, col(0x7aa848)); } } }));
  Tr('pessegueiro', 'Pessegueiro', 8, 114, 'Flor cor-de-rosa primeiro, pêssego de veludo depois.', std({ H: 0.95, R: 1.05, trunkR: 0.07, limbs: 8, bark: col(0x5a4038), foliage: 0.4, leaves: 2000, leafSize: 0.14, leafAsp: 1.7, leafCols: [col(0x4a9a44), col(0x5aa850), col(0x3f8a3c)],
    blossom: { n: 2500, size: 0.1, cols: [col(0xf58ab0), col(0xf9a8c4), col(0xe86a9a), col(0xfcd0e0)], buds: [col(0xd8508a)] },
    fruit: { n: 20, make: (b, p) => b.blob(at(p), 0.05, 0.048, col(0xf7c060), col(0xf08a4a), 7, 5, col(0xd8483a)) } }), { petal: 0xf9a8c4 });
  Tr('pereira', 'Pereira', 9, 120, 'Peras que pendem como gotas douradas.', std({ H: 1.15, R: 1.0, trunkR: 0.075, limbs: 8, bark: col(0x5f4a3a), el: [0.2, 1.05], foliage: 0.85, leaves: 2700, leafSize: 0.14, leafCols: [col(0x3a8a3c), col(0x4a9a44), col(0x2f7a34)],
    blossom: { n: 420, size: 0.08, cols: [W, col(0xfdf6f0)] }, fruit: { n: 24, make: (b, p, r) => b.lathe(hangM(p, r), scaleP(PEAR, 1).map(([rr, y]) => [rr * 0.046, y * 0.125]), col(0xa8c048), col(0xe8d44a), 8) } }));
  Tr('figueira', 'Figueira', 10, 134, 'Folhas largas de sombra boa e figos de mel.', (b, r, g, o) => { const t = xtree(b, r, { H: 0.8, R: 1.3, trunkR: 0.09, limbs: 8, bark: col(0x8a8478), el: [0.45, 1.35], leaves: 1700, leafSize: 0.24, leafCols: [col(0x3a8a3c), col(0x4a9a44), col(0x2f7a34)],
      fruit: { n: 24, make: (bb, p, rr, i) => { const c = i % 3 === 0 ? col(0x7a9a48) : col(0x5a2a5a); bb.lathe(hangM(p, rr, 0.35), [[0.006, 0], [0.012, 0.012], [0.03, 0.04], [0.036, 0.06], [0.026, 0.078], [0.004, 0.084]], mixc(c, col(0x7a9a48), 0.5), c, 7); } } }, g, o);
      dress(r, t, Math.round(110 * g), (p, d) => fanLeaf(b, mul(frame(p, v3(d.x, d.y * 0.4 + 0.2, d.z).normalize()), RY(r() * 6), RX(0.9)), r, { n: 5, L: 0.2 * g, W: 0.075 * g, c: col(0x3f8f40), spread: 2.5, a: 1.1, b: 0.6, sideShrink: 0.4, fold: 0.15, curl: 0.4, nu: 3, nv: 2, vein: -0.25 })); });
  Tr('ameixeira', 'Ameixeira', 10, 132, 'Nuvem branca na primavera, ameixas roxas no verão.', std({ H: 1.0, R: 1.05, trunkR: 0.07, limbs: 8, bark: col(0x4a3a36), foliage: 0.6, leaves: 2300, leafSize: 0.13, leafCols: [col(0x3f8a40), col(0x4a9a48), col(0x6a5a50)],
    blossom: { n: 1500, size: 0.09, cols: [W, col(0xfdf2f6), col(0xfbe4ee)], buds: [col(0xf0c8d8)] }, fruit: { n: 30, make: (b, p) => b.blob(at(p), 0.036, 0.04, col(0x4a1e5a), col(0x6a2a7a), 7, 5, col(0x9a7ab8)) } }), { petal: 0xfdf2f6 });
  Tr('romazeira', 'Romãzeira', 11, 148, 'Flores de fogo e frutos de coroa, cheios de rubis.', std({ H: 0.75, R: 0.92, trunkR: 0.06, limbs: 9, bark: col(0x8a7460), leaves: 2600, leafSize: 0.1, leafAsp: 1.6, leafCols: [col(0x3f8a3c), col(0x5aa048), col(0x7ab050)],
    blossom: { n: 230, size: 0.085, cols: [col(0xf2501e), col(0xe8381e), col(0xf7701e)] },
    fruit: { n: 19, make: (b, p, r) => { const M = hangM(p, r, 0.3); b.blob(mul(M, T(0, 0.062, 0)), 0.06, 0.057, col(0xd83a2e), col(0xc8242e), 8, 6, col(0xe8804a)); b.lathe(mul(M, T(0, 0.112, 0)), [[0.014, 0], [0.016, 0.014], [0.026, 0.026]], col(0xc8242e), col(0xa81e28), 6, null, 0.25, 6); } } }), { h: 2.6 });
  const kaki = (b, p) => { b.blob(at(p), 0.068, 0.056, col(0xe8601a), col(0xf5841e), 8, 5, col(0xf7a03a)); calyx(b, T(p.x, p.y + 0.046, p.z), 1.1); };
  Tr('caquizeiro', 'Caquizeiro', 12, 168, 'No outono as folhas caem e ficam só os caquis, como lanternas.', (b, r, g, o) => { xtree(b, r, { H: 1.0, R: 1.1, trunkR: 0.075, limbs: 8, bark: col(0x4a4038), foliage: 0.3, leaves: 2400, leafSize: 0.17,
      leafCols: o > 0.5 ? [col(0xe8b02a), col(0xd8581e), col(0xc8382a), col(0xb8a83a)] : [col(0x3f8a40), col(0x4a9a48), col(0x6aa84a)], fruit: { n: 34, make: kaki } }, g, o); });
  Tr('abacateiro', 'Abacateiro', 14, 205, 'Árvore grande, generosa: um abacate dá para a família.', std({ H: 1.35, R: 1.4, trunkR: 0.11, limbs: 9, bark: col(0x5a4a3c), leaves: 3100, leafSize: 0.19, leafAsp: 1.3, leafCols: [col(0x256a30), col(0x2f7a38), col(0x3a8a40), col(0x2a7034), col(0x2f7a38), col(0x8a6a3a)],
    blossom: { n: 220, size: 0.06, cols: [col(0xe8e8a0), col(0xd8e088)] }, fruit: { n: 20, make: (b, p, r) => { const M = hangM(p, r, 0.2); b.tube(M, [v3(0, -0.05, 0), v3(0, 0.005, 0)], 0.003, 0.003, col(0x6a8a48), col(0x6a8a48), 3); b.lathe(M, PEAR.map(([rr, y]) => [rr * 0.064, y * 0.17]), col(0x5a8a3c), col(0x35602c), 8); } } }));
  Tr('caramboleira', 'Caramboleira', 14, 200, 'Cada fatia é uma estrela.', std({ H: 0.95, R: 1.1, trunkR: 0.075, limbs: 9, bark: col(0x6a5644), leaves: 2900, leafSize: 0.12, leafCols: [col(0x3f8a40), col(0x5aa04a), col(0x4a9444)],
    blossom: { n: 260, size: 0.045, cols: [col(0xe8a0d0), col(0xc878b8)] },
    fruit: { n: 26, make: (b, p, r, i) => { const c = i % 4 === 0 ? col(0xb8cc4a) : col(0xf7cc22); ribLathe(b, hangM(p, r, 0.25), [[0.006, 0], [0.03, 0.018], [0.042, 0.06], [0.038, 0.1], [0.008, 0.128]], shade(c, 0.9), mixc(c, col(0xf7e06a), 0.5), 5, 0.5, 20); } } }));
  Tr('cajueiro', 'Cajueiro', 15, 230, 'O caju é o cabo; a castanha é que é o fruto.', std({ H: 0.7, R: 1.5, trunkR: 0.1, limbs: 9, bark: col(0x6a5a4a), el: [0.5, 1.4], rise: 0.7, leaves: 3000, leafSize: 0.19, leafCols: [col(0x3a8a40), col(0x4a9a48), col(0x2f7a38), col(0x3f8f44), col(0x358040), col(0x9a6a4a)],
    blossom: { n: 220, size: 0.05, cols: [col(0xf7c8d0), col(0xe89aa8)] },
    fruit: { n: 22, make: (b, p, r, i) => { const M = hangM(p, r, 0.3), red = i % 2; b.lathe(M, [[0.012, 0], [0.03, 0.015], [0.038, 0.05], [0.044, 0.085], [0.036, 0.105], [0.012, 0.112]], red ? col(0xf08a2a) : col(0xf7cc2a), red ? col(0xe0362a) : col(0xf7a82a), 8);
      b.blob(mul(M, T(0.006, 0.128, 0), RZ(0.6)), 0.014, 0.024, col(0x6a6a4a), col(0x8a8a62), 6, 4); } } }));
  Tr('oliveira', 'Oliveira', 16, 260, 'Folhas de prata e um tronco que parece ter mil anos.', std({ H: 0.75, R: 1.1, trunkR: 0.14, limbs: 9, bark: col(0x6a6258), bark1: col(0x8a8274), trunkFn: (t) => 1.35 - 0.6 * t + 0.14 * Math.sin(t * 13) + 0.5 * Math.pow(1 - t, 6), leaves: 3300, leafSize: 0.11, leafAsp: 1.8,
    leafCols: [col(0x7a9a80), col(0x9ab098), col(0x6a8a70), col(0xb8c8b4)], blossom: { n: 180, size: 0.04, cols: [col(0xf4f0d0)] },
    fruit: { n: 46, make: (b, p, r, i) => { const c = i % 3 ? col(0x2a1a2e) : col(0x7a8a3a); b.blob(at(p), 0.017, 0.024, shade(c, 0.8), c, 6, 4, mixc(c, W, 0.25)); } } }), { thirst: 0.35, h: 2.8 });
  const trunkPods = (b, r, t, n, fn) => { for (let i = 0; i < n; i++) { if (i % 3 < 2) { const u = r.range(0.25, 0.95), { p } = polyAt(t.trunk, u), az = r() * TAU, d = t.tr * t.tf(u) * 0.95; fn(v3(p.x + Math.cos(az) * d, p.y, p.z + Math.sin(az) * d), az); }
    else { const { p } = polyAt(t.limbs[i % t.limbs.length], r.range(0.15, 0.5)); fn(v3(p.x, p.y - t.tr * 0.3, p.z), r() * TAU); } } };
  Tr('cacaueiro', 'Cacaueiro', 17, 290, 'Os frutos nascem direto no tronco: daqui sai o chocolate.', (b, r, g, o) => { const t = xtree(b, r, { H: 0.9, R: 1.05, trunkR: 0.08, limbs: 7, bark: col(0x4a3a30), el: [0.4, 1.3], from: 0.75, leaves: 2000, leafSize: 0.22, leafAsp: 1.6, leafCols: [col(0x256a30), col(0x2f7a38), col(0x3a8a40), col(0x2a7034), col(0x358040), col(0x256a30), col(0xa8583a)] }, g, o);
      if (o >= 0) { const k = lerp(0.3, 1, o) * g, pal = [0xf2b82a, 0xe8781e, 0x9a2a2a, 0xc8a02a]; trunkPods(b, r, t, Math.round(12 * g), (p, az) => { const c = o < 0.5 ? col(0x6a9a3a) : col(r.pick(pal)), M = mul(at(p), OUT(az), RX(Math.PI - 0.35));
        b.tube(M, [v3(0, -0.02, 0), v3(0, 0.01, 0)], 0.004, 0.004, col(0x4a3a30), col(0x4a3a30), 3);
        ribLathe(b, M, scaleP([[0.008, 0], [0.032, 0.02], [0.052, 0.07], [0.054, 0.12], [0.036, 0.18], [0.006, 0.225]], k), shade(c, 0.85), c, 10, 0.14, 20, mixc(c, col(0xf7e06a), 0.3), true); }); } }, { h: 2.8 });
  Tr('jaqueira', 'Jaqueira', 16, 250, 'A maior fruta do mundo pendurada no tronco.', (b, r, g, o) => { const t = xtree(b, r, { H: 1.25, R: 1.3, trunkR: 0.12, limbs: 8, bark: col(0x5a4c40), from: 0.8, leaves: 3000, leafSize: 0.16, leafCols: [col(0x1f6a30), col(0x2a7a38), col(0x358040)] }, g, o);
      if (o >= 0) { const k = lerp(0.3, 1, o) * g; trunkPods(b, r, t, Math.round(7 * g), (p, az) => { const c = jitterc(o < 0.6 ? col(0x6a9a3a) : col(0x94a83c), r, 0.03), M = mul(at(p), T(Math.cos(az) * 0.09 * k, 0, Math.sin(az) * 0.09 * k), RX(Math.PI), RY(r() * 6)), L = 0.3 * k * r.range(0.8, 1.1);
        b.tube(M, [v3(0, -0.04, 0), v3(0, 0.01, 0)], 0.006, 0.006, col(0x5a4c40), col(0x6a8a40), 4); b.blob(mul(M, T(0, L * 0.5, 0)), 0.1 * k, L * 0.5, shade(c, 0.8), c, 9, 7, mixc(c, col(0xd8c84a), 0.4));
        for (let j = 0; j < 46; j++) { const y = 1 - ((j + 0.5) / 46) * 2, rr = Math.sqrt(1 - y * y), th = j * GOLD; b.blob(mul(M, T(Math.cos(th) * rr * 0.1 * k, L * 0.5 + y * L * 0.5, Math.sin(th) * rr * 0.1 * k)), 0.014 * k, 0.014 * k, shade(c, 0.9), mixc(c, col(0xc8c85a), 0.3), 4, 3); } }); } });

  // ---- flowering and ornamental trees ----
  Tr('ipe_roxo', 'Ipê-roxo', 12, 165, 'O primeiro ipê a florir, ainda no frio.', std({ H: 1.5, R: 1.3, trunkR: 0.09, limbs: 8, bark: col(0x6a5a4a), foliage: 0.06, leaves: 900, leafCols: [col(0x4a8a3a), col(0x5a9a44)],
    blossom: { n: 3300, size: 0.125, cols: [col(0xb85ac8), col(0xc878d8), col(0xa04ab8), col(0xd8a0e8)], buds: [col(0x8a3a9a)] } }), { petal: 0xc878d8 });
  Tr('quaresmeira', 'Quaresmeira', 13, 180, 'Roxo de quaresma espalhado na copa.', std({ H: 1.1, R: 1.1, trunkR: 0.075, limbs: 8, bark: col(0x6a5648), foliage: 0.6, leaves: 2400, leafSize: 0.14, leafAsp: 1.4, leafCols: [col(0x2f7a3a), col(0x3f8a44), col(0x256a30)],
    blossom: { n: 1500, size: 0.13, cols: [col(0x7a2ab8), col(0x8a3ac8), col(0x9a52d8), col(0x6a1aa0)], buds: [col(0x5a1a8a)] } }), { petal: 0x8a3ac8 });
  Tr('manaca_da_serra', 'Manacá-da-serra', 15, 228, 'Abre branco, fica rosa e termina lilás: três cores na mesma árvore.', std({ H: 1.05, R: 1.0, trunkR: 0.065, limbs: 8, bark: col(0x7a6a58), el: [0.2, 1.1], foliage: 0.55, leaves: 2300, leafSize: 0.13, leafAsp: 1.5, leafCols: [col(0x2a6a34), col(0x357a3c), col(0x256030)],
    blossom: { n: 1900, size: 0.12, cols: [W, col(0xfbe8f4), col(0xf7a0d0), col(0xe070b8), col(0xb85ad0), col(0x9a48c0)], buds: [W, col(0xf0d8e8)] } }), { petal: 0xf7a0d0 });
  Tr('chuva_de_ouro', 'Chuva-de-ouro', 16, 255, 'Cachos dourados que escorrem da copa.', (b, r, g, o) => { const t = xtree(b, r, { H: 1.2, R: 1.25, trunkR: 0.08, limbs: 8, bark: col(0x7a7062), foliage: 0.7, leaves: 2300, leafSize: 0.15, leafCols: [col(0x4a9a44), col(0x5aa850), col(0x3f8a3c)], blossom: { n: 420, size: 0.1, cols: [col(0xf7cf1e), col(0xfbdc3a)], buds: [col(0xb8c04a)] } }, g, o);
      if (o < 0) return; const n = Math.round(120 * g * lerp(0.35, 1, o)), ys = [col(0xf7c400), col(0xf9d01e), col(0xeeb000), col(0xfbd832)];
      for (let i = 0; i < n; i++) { const m = t.masses[i % t.masses.length], az = Math.atan2(m.c.z, m.c.x) + r.range(-1.4, 1.4), d = m.r * r.range(0.4, 1.05), px = m.c.x + Math.cos(az) * d, pz = m.c.z + Math.sin(az) * d, py = m.c.y - m.r * r.range(0.0, 0.4), L = 0.62 * g * lerp(0.4, 1, o) * r.range(0.6, 1.15);
        for (let j = 0; j < 15; j++) { const u = j / 15, rad = 0.075 * (1 - u * 0.8), a = j * 2.4, c = jitterc(o < 0.3 ? col(0xb8c04a) : r.pick(ys), r, 0.04);
          ncard(b, mul(T(px + Math.cos(a) * rad, py - u * L, pz + Math.sin(a) * rad), RY(-a + Math.PI / 2), RX(1.9)), 0.11, 0.13, shade(c, 0.88), c, v3(Math.cos(a), 0.7, Math.sin(a)).normalize(), 0.3); } } }, { petal: 0xf7cf1e });
  Tr('ipe_branco', 'Ipê-branco', 17, 295, 'O mais raro: floresce por poucos dias, como neve.', std({ H: 1.45, R: 1.25, trunkR: 0.085, limbs: 8, bark: col(0x7a6e62), foliage: 0.05, leaves: 900, leafCols: [col(0x4a8a3a), col(0x5a9a44)],
    blossom: { n: 3400, size: 0.125, cols: [W, col(0xfdf6f8), col(0xfbeef4), col(0xfff8ea)], buds: [col(0xf0d8e0), col(0xe8e0c8)] } }), { petal: 0xffffff });
  Tr('bordo_japones', 'Bordo-japonês', 18, 335, 'Folhas de estrela, vermelhas como brasa.', (b, r, g) => { const reds = [col(0xb8202a), col(0xd8302a), col(0x8a1424), col(0xe8502a)];
      const t = xtree(b, r, { H: 0.6, R: 1.3, trunkR: 0.08, limbs: 10, bark: col(0x5a4a44), el: [0.45, 1.4], rise: 0.6, squash: 0.55, twigUp: 0.4, leaves: 2300, leafSize: 0.11, leafCols: reds }, g, -1);
      dress(r, t, Math.round(260 * g), (p, d) => fanLeaf(b, mul(frame(p, v3(d.x, d.y * 0.3 + 0.1, d.z).normalize()), RY(r() * 6), RX(1.1)), r, { n: 5, L: 0.1 * g, W: 0.026 * g, c: r.pick(reds), tip: col(0xf2702a), tipMix: 0.25, spread: 2.6, a: 0.9, b: 0.8, sideShrink: 0.45, fold: 0.2, nu: 2, nv: 1 })); }, { h: 2.2 });
  Tr('salgueiro_chorao', 'Salgueiro-chorão', 18, 330, 'Cortina verde que quase toca o chão.', (b, r, g) => { const cs = [col(0x7ab04a), col(0x9acc5a), col(0x6aa044)];
      const t = xtree(b, r, { H: 1.3, R: 1.2, trunkR: 0.11, limbs: 8, bark: col(0x5a4a3c), el: [0.3, 1.25], leaves: 2000, leafSize: 0.15, leafAsp: 1.6, leafCols: cs }, g, -1), n = Math.round(130 * g);
      for (let i = 0; i < n; i++) { const m = t.masses[i % t.masses.length], az = Math.atan2(m.c.z, m.c.x) + r.range(-1.3, 1.3), d = m.r * r.range(0.3, 1.0), x = m.c.x + Math.cos(az) * d, z = m.c.z + Math.sin(az) * d, y0 = m.c.y + m.r * 0.25, L = Math.min(y0 - 0.2 * g, r.range(1.0, 2.0) * g), sw = r.range(-0.1, 0.1), ow = 0.22 * g;
        const pts = [0, 0.2, 0.45, 0.72, 1].map((u) => v3(x + Math.cos(az) * ow * Math.sin(u * 1.7) + sw * u * u, y0 + 0.12 * g * Math.sin(u * 3.14) * (1 - u) - L * u, z + Math.sin(az) * ow * Math.sin(u * 1.7)));
        b.tube(null, pts, 0.004, 0.0015, col(0x8a9a4a), col(0x9ab04a), 3);
        for (let k = 0; k < 15; k++) { const { p } = polyAt(pts, (k + r()) / 15), c = jitterc(r.pick(cs), r, 0.04); ncard(b, mul(at(p), RY(r() * 6), RX(Math.PI - r.range(0.2, 0.7))), 0.035, 0.14, shade(c, 0.75), c, v3(p.x, 0.5, p.z).normalize()); } } });
  Tr('paineira', 'Paineira', 19, 385, 'Tronco barrigudo de espinhos e copa cor-de-rosa.', (b, r, g, o) => { const tf = (t) => 0.6 + 0.4 * (1 - t) + 0.55 * Math.exp(-Math.pow((t - 0.32) / 0.22, 2));
      const t = xtree(b, r, { H: 1.55, R: 1.35, trunkR: 0.13, limbs: 8, bark: col(0x66784e), bark1: col(0x8a8c6a), trunkFn: tf, foliage: 0.2, leaves: 1500, leafSize: 0.16, leafCols: [col(0x4a9a44), col(0x5aa850), col(0x3f8a3c)],
        blossom: { n: 2700, size: 0.14, cols: [col(0xf06aa0), col(0xf58ab8), col(0xfbc0d8), col(0xe85090)], buds: [col(0xd0407a)] } }, g, o);
      for (let i = 0; i < Math.round(60 * g); i++) { const u = r.range(0.04, 0.92), { p } = polyAt(t.trunk, u), az = r() * TAU, d = t.tr * tf(u) * 0.96, dir = v3(Math.cos(az), 0.15, Math.sin(az)).normalize();
        b.lathe(frame(v3(p.x + Math.cos(az) * d, p.y, p.z + Math.sin(az) * d), dir), [[0.022 * g, 0], [0.006 * g, 0.03 * g], [0.0005, 0.05 * g]], col(0x8a8468), col(0xd0c8a8), 4); } }, { petal: 0xf58ab8 });
  Tr('pau_brasil', 'Pau-brasil', 19, 380, 'A árvore que deu nome ao país, de cerne cor de brasa.', (b, r, g, o) => { const t = xtree(b, r, { H: 1.35, R: 1.25, trunkR: 0.09, limbs: 9, bark: col(0x5a3a30), bark1: col(0x8a4a34), foliage: 0.8, leaves: 3000, leafSize: 0.11, leafCols: [col(0x1f6a30), col(0x2a7a38), col(0x3a8a40)],
        blossom: { n: 950, size: 0.085, cols: [col(0xf7cf1e), col(0xfbdc3a), col(0xf7cf1e), col(0xd8382a)], buds: [col(0xc8b83a)] } }, g, o);
      for (let i = 0; i < Math.round(26 * g); i++) { const u = r.range(0.1, 0.9), { p } = polyAt(t.trunk, u), az = r() * TAU, d = t.tr * t.tf(u) * 0.95; b.lathe(frame(v3(p.x + Math.cos(az) * d, p.y, p.z + Math.sin(az) * d), v3(Math.cos(az), 0.3, Math.sin(az)).normalize()), [[0.01 * g, 0], [0.0005, 0.03 * g]], col(0x5a3a30), col(0xa86a4a), 4); } }, { petal: 0xf7cf1e });

  Tr('sibipiruna', 'Sibipiruna', 17, 292, 'Copa de renda e velas amarelas apontando para cima.', (b, r, g, o) => { const t = xtree(b, r, { H: 1.4, R: 1.4, trunkR: 0.095, limbs: 9, bark: col(0x7a7268), bark1: col(0x9a9284), el: [0.4, 1.3], rise: 0.75, foliage: 0.85, leaves: 3300, leafSize: 0.1, leafCols: [col(0x3a8a40), col(0x4a9a48), col(0x2f7a38)] }, g, o);
      if (o < 0) return; const ys = [col(0xf7c400), col(0xf9d01e), col(0xeeb000)];
      dress(r, t, Math.round(150 * g * lerp(0.4, 1, o)), (p, d) => { if (d.y < 0.25) return; const L = 0.3 * g * lerp(0.4, 1, o) * r.range(0.7, 1.1);
        for (let j = 0; j < 12; j++) { const u = j / 12, a = j * 2.4, rad = 0.06 * g * (1 - u * 0.85), c = jitterc(o < 0.3 || u > 0.8 ? col(0xb8b83a) : r.pick(ys), r, 0.04);
          ncard(b, mul(T(p.x + Math.cos(a) * rad, p.y + u * L, p.z + Math.sin(a) * rad), RY(-a + Math.PI / 2), RX(1.0)), 0.085 * g, 0.1 * g, shade(c, 0.88), c, v3(Math.cos(a), 0.8, Math.sin(a)).normalize(), 0.3); } }); }, { petal: 0xf7c400 });
  Tr('ginkgo', 'Ginkgo', 19, 372, 'Fóssil vivo: leques verdes que viram ouro e chovem no outono.', (b, r, g, o) => { const gold = o > 0.5, cs = gold ? [col(0xf7cf1e), col(0xf2b80f), col(0xfbdc3a), col(0xe8c83a)] : [col(0x6aaa48), col(0x7ab850), col(0x5a9a40)];
      const t = xtree(b, r, { H: 1.35, R: 1.05, trunkR: 0.085, limbs: 9, bark: col(0x6a6258), el: [0.15, 0.95], rise: 1.15, leaves: 2300, leafSize: 0.12, leafCols: cs }, g, -1);
      dress(r, t, Math.round(330 * g), (p, d) => leaf(b, mul(frame(p, v3(d.x, d.y * 0.3 - 0.5, d.z).normalize()), RY(r() * 6), RX(0.3)), r, { L: 0.1 * g, W: 0.12 * g, a: 2.0, b: 0.4, c: r.pick(cs), tip: gold ? col(0xfde86a) : col(0x9acc60), tipNotch: 0.25, fold: 0.1, curl: 0.2, nu: 3, nv: 3, vein: 0.15 })); }, { petal: 0xf7cf1e });

  // ---- palms, banana, papaya ----
  Tr('bananeira', 'Bananeira', 9, 122, 'Folhas de vela de barco e um cacho que amarela aos poucos.', (b, r, g, o) => {
    const plant = (x, z, k, fruit) => { const Hs = 1.55 * k, ln = r.range(-0.08, 0.08), pts = bez(v3(x, 0, z), v3(x + ln * 0.5, Hs * 0.5, z), v3(x + ln, Hs, z + ln * 0.3), 6), top = pts[6], n = Math.round(4 + 5 * k);
      b.tube(null, pts, (t) => 0.1 * k * (1.15 - 0.5 * t), 0, col(0x7a7a4a), col(0x9ab85a), 8);
      for (let i = 0; i < n; i++) { const f = i / (n - 1), M = mul(at(top), OUT(i * GOLD + r.range(-0.2, 0.2)), RX(lerp(1.3, 0.2, f) + r.range(-0.1, 0.1)));
        b.tube(M, [v3(0, -0.06 * k, 0), v3(0, 0.2 * k, 0)], 0.022 * k, 0.012 * k, col(0x9ab85a), col(0xa8cc68), 5);
        leaf(b, mul(M, T(0, 0.14 * k, 0)), r, { L: 1.25 * k * lerp(1, 0.75, f) * r.range(0.9, 1.05), W: 0.42 * k, a: 0.85, b: 0.32, base: 0.12, c: col(0x4a9a44), tip: col(0x7ab850), tipMix: 0.2, fold: 0.22, curl: lerp(1.5, 0.5, f), curlPow: 1.8, ruffle: 0.06, rf: 5, nu: 9, nv: 4, vein: -0.35 }); }
      if (!fruit || o < 0) return; const az = 1.0, cx = Math.cos(az), cz = Math.sin(az), kk = lerp(0.4, 1, o), yel = clamp(o * 1.5 - 0.4, 0, 1);
      const st = bez(v3(top.x, top.y - 0.05, top.z), v3(top.x + cx * 0.3 * k, top.y + 0.05, top.z + cz * 0.3 * k), v3(top.x + cx * 0.42 * k, top.y - 0.75 * k, top.z + cz * 0.42 * k), 10);
      b.tube(null, st, 0.022 * k, 0.012 * k, col(0x7a9a48), col(0x6a8a40), 5);
      for (let h = 0; h < 6; h++) { const { p } = polyAt(st, 0.42 + h * 0.075), nb = h > 3 ? 7 : 8, c = mixc(col(0x6aa83a), col(0xf7d42a), clamp(yel + (3 - h) * 0.12, 0, 1)), L = 0.15 * k * kk;
        for (let j = 0; j < nb; j++) { const a = (j / nb) * TAU + h * 0.4, ca = Math.cos(a), sa = Math.sin(a);
          b.tube(at(p), bez(v3(ca * 0.02, 0, sa * 0.02), v3(ca * L * 0.75, -L * 0.1, sa * L * 0.75), v3(ca * L * 0.8, L * 0.55, sa * L * 0.8), 4), (t) => 0.015 * k * kk * (0.5 + 0.9 * Math.sin(Math.PI * (0.1 + 0.8 * t))), 0, shade(c, 0.85), c, 5); } }
      b.blob(T(st[10].x, st[10].y - 0.07 * k, st[10].z), 0.045 * k * kk, 0.085 * k * kk, col(0x5a1a3a), col(0x8a2a4a), 7, 5); };
    plant(0, 0, g, true); if (g > 0.5) { plant(0.42 * g, 0.2 * g, g * 0.5, false); plant(-0.28 * g, -0.32 * g, g * 0.32, false); } }, { h: 2.9 });
  Tr('mamoeiro', 'Mamoeiro', 11, 146, 'Tronco fininho, guarda-sol de folhas e mamões agarrados.', (b, r, g, o) => { const Hs = 1.95 * g, tr = 0.06 * (0.4 + 0.6 * g), n = 16, pts = [];
    for (let i = 0; i <= n; i++) { const t = i / n; pts.push(v3(0.06 * g * Math.sin(t * 2.5), Hs * t, 0)); }
    b.tube(null, pts, (t) => tr * (1.4 - 0.65 * t) * (1 + 0.05 * Math.cos(t * n * Math.PI)), 0, col(0x8a8a6a), col(0x9aaa78), 8);
    const top = pts[n], nl = Math.round(7 + 7 * g);
    for (let i = 0; i < nl; i++) { const f = i / (nl - 1), az = i * GOLD, L = 0.55 * g * lerp(1, 0.6, f) * r.range(0.9, 1.1), tilt = lerp(1.75, 0.35, f), cx = Math.cos(az), cz = Math.sin(az);
      const st = v3(top.x, top.y - (1 - f) * 0.22 * g, top.z), end = v3(st.x + cx * Math.sin(tilt) * L, st.y + Math.cos(tilt) * L + 0.06 * g, st.z + cz * Math.sin(tilt) * L);
      b.tube(null, bez(st, st.clone().lerp(end, 0.5).add(v3(0, 0.12 * L, 0)), end, 4), 0.011 * g, 0.006 * g, col(0xa8c070), col(0x8ab058), 4);
      fanLeaf(b, mul(at(end), OUT(az), RX(1.35 + (1 - f) * 0.4)), r, { n: 7, L: 0.3 * g * lerp(1, 0.6, f), W: 0.1 * g * lerp(1, 0.6, f), c: col(0x3f8f3c), spread: 4.4, a: 0.9, b: 0.55, sideShrink: 0.3, ruffle: 0.35, rf: 3, fold: 0.2, curl: 0.4, nu: 4, nv: 3, vein: -0.3 }); }
    if (o >= 0) { const k = lerp(0.3, 1, o) * g, nf = Math.round(10 * g); for (let i = 0; i < nf; i++) { const az = i * GOLD + 1, d = tr * 0.8 + 0.05 * k, c = mixc(col(0x4a8a3a), col(0xf2a02a), clamp(o * 1.5 - 0.6 + (i / nf) * 0.7 - (i % 3) * 0.2, 0, 1));
      b.blob(mul(T(top.x + Math.cos(az) * d, top.y - (0.2 + 0.035 * i) * g, top.z + Math.sin(az) * d), RZ(Math.cos(az) * -0.2), RX(Math.sin(az) * 0.2)), 0.058 * k, 0.1 * k, shade(c, 0.8), c, 7, 6, mixc(c, col(0x4a8a3a), 0.4)); } } }, { h: 2.9 });
  Tr('coqueiro', 'Coqueiro', 13, 185, 'Sombra de praia e água de coco no quintal.', (b, r, g, o) => { const Hs = 2.7 * g, n = 22, pts = [], tr = 0.085 * (0.4 + 0.6 * g);
    for (let i = 0; i <= n; i++) { const t = i / n; pts.push(v3(0.5 * g * t * t, Hs * t, 0.08 * g * Math.sin(t * 3))); }
    b.tube(null, pts, (t) => tr * (1 + 0.9 * Math.pow(1 - t, 8) - 0.25 * t) * (1 + 0.05 * Math.cos(t * n * Math.PI)), 0, col(0x8a7a66), col(0xa89a84), 8);
    const top = pts[n], nf = Math.round(8 + 10 * g); b.blob(at(top), tr * 1.5, tr * 1.7, col(0x7a6a48), col(0x8a9a50), 7, 5);
    for (let i = 0; i < nf; i++) { const f = i / (nf - 1); frond(b, mul(at(top), OUT(i * GOLD), RX(lerp(2.0, 0.2, f) + r.range(-0.1, 0.1))), r, 1.35 * g * lerp(0.8, 1, Math.sin(f * Math.PI)), { pairs: 20, ll: 0.3 * g, lw: 0.04 * g, droop: lerp(1.0, 0.45, f), c: jitterc(col(0x4a9a40), r, 0.04), k: g }); }
    if (o >= 0) { const k = lerp(0.35, 1, o) * g; for (let i = 0; i < 8; i++) { const az = i * 0.785 + r() * 0.3, d = (0.11 + (i % 2) * 0.05) * g; ball(b, T(top.x + Math.cos(az) * d, top.y - (0.12 + (i % 2) * 0.09) * g, top.z + Math.sin(az) * d), 0.085 * k, 1.12, i % 3 ? col(0x7aa840) : col(0xc8a84a), 8, 6); } } }, { h: 3.9 });
  Tr('palmeira_imperial', 'Palmeira-imperial', 20, 450, 'Coluna de palácio: a mais alta e nobre do jardim.', (b, r, g, o) => { const Hs = 3.3 * g, tr = 0.11 * (0.4 + 0.6 * g), n = 20, pts = [], cs = 0.55 * g;
    for (let i = 0; i <= n; i++) pts.push(v3(0, (Hs * i) / n, 0));
    b.tube(null, pts, (t) => tr * (1.0 + 0.22 * Math.exp(-Math.pow((t - 0.45) / 0.25, 2)) - 0.3 * t + 0.7 * Math.pow(1 - t, 12)) * (1 + 0.025 * Math.cos(t * n * Math.PI)), 0, col(0x9a9488), col(0xc8c2b4), 9);
    b.tube(null, [0, 0.2, 0.45, 0.75, 1].map((u) => v3(0, Hs + cs * u, 0)), (t) => tr * (0.72 + 0.22 * Math.sin(Math.PI * Math.min(1, t * 1.4)) - 0.4 * t), 0, col(0x5a9a40), col(0x7ab850), 8);
    const top = v3(0, Hs + cs, 0), nf = Math.round(7 + 9 * g);
    b.tube(null, [top, v3(0.01, top.y + 0.5 * g, 0)], 0.012 * g, 0.003, col(0x7ab850), col(0x9acc68), 4);
    for (let i = 0; i < nf; i++) { const f = i / (nf - 1); frond(b, mul(at(top), OUT(i * GOLD), RX(lerp(1.95, 0.2, f) + r.range(-0.1, 0.1))), r, 1.45 * g * lerp(0.8, 1, Math.sin(f * Math.PI)), { pairs: 24, ll: 0.28 * g, lw: 0.03 * g, droop: lerp(0.95, 0.4, f), plume: true, hang: 0.4, c: jitterc(col(0x3f8f3c), r, 0.04), k: g }); }
    if (o > 0.3) for (let s = 0; s < 3; s++) { const az = s * 2.1 + 0.4, k = lerp(0.4, 1, o) * g; for (let j = 0; j < 12; j++) { const a = az + r.range(-0.5, 0.5), L = 0.4 * k * r.range(0.6, 1.1), e = v3(Math.cos(a) * L * 0.8, Hs - L * 0.75, Math.sin(a) * L * 0.8);
      b.tube(null, bez(v3(Math.cos(az) * tr * 0.6, Hs, Math.sin(az) * tr * 0.6), v3(Math.cos(a) * L * 0.6, Hs + 0.03, Math.sin(a) * L * 0.6), e, 4), 0.003, 0.0015, col(0xe8e0b0), col(0xd8d49a), 3);
      if (o > 0.8) for (let q = 0; q < 3; q++) b.blob(T(e.x + r.range(-0.03, 0.03), e.y + q * 0.04, e.z + r.range(-0.03, 0.03)), 0.011, 0.012, col(0x5a2a5a), col(0x7a4a7a), 4, 3); } } }, { h: 4.6 });

  // ---- conifers ----
  Tr('pinheiro', 'Pinheiro', 14, 198, 'Cheiro de resina e pinhas para o Natal.', (b, r, g, o) => { const Hs = 3.0 * g, tr = 0.085 * (0.4 + 0.6 * g), dk = col(0x1f5238), md = col(0x2f7048), lt = col(0x5a9a60), Rb = 1.0 * g, y0 = Hs * 0.17;
    b.tube(null, [v3(0, 0, 0), v3(0.01, Hs * 0.5, 0), v3(0, Hs * 0.9, 0)], (t) => tr * (1.3 - 1.1 * t), 0, col(0x5a4034), col(0x7a5a44), 7);
    const nT = Math.round(5 + 4 * g), hT = ((Hs - y0) / nT) * 1.9;
    for (let k = 0; k < nT; k++) { const f = k / (nT - 1), yb = lerp(y0, Hs - hT * 0.95, f), R1 = Rb * (1 - f * 0.8);
      ribLathe(b, mul(T(0, yb, 0), RY(k * 0.7)), [[R1, -hT * 0.14], [R1 * 0.74, hT * 0.16], [R1 * 0.4, hT * 0.6], [R1 * 0.1, hT]], md, dk, 9, 0.3, 18, shade(dk, 0.8));
      const nc = Math.round(70 * (1 - f * 0.55) * g); for (let j = 0; j < nc; j++) { const az = r() * TAU, u = Math.pow(r(), 1.5), cx = Math.cos(az), cz = Math.sin(az), rr = R1 * (1 - u * 0.8) * r.range(0.8, 1.02), c = jitterc(u < 0.2 ? lt : r.pick([dk, md, md]), r, 0.04);
        ncard(b, frame(v3(cx * rr, yb + u * hT * 0.85 - hT * 0.1, cz * rr), v3(cx + r.range(-0.4, 0.4), r.range(-0.75, -0.3), cz + r.range(-0.4, 0.4)).normalize()), 0.055 * g, 0.2 * g * (1 - u * 0.35), shade(c, 0.7), c, v3(cx * 0.6, 0.8, cz * 0.6).normalize(), 0.3); }
      if (o > 0.5 && k > 1 && k < nT - 2) for (let j = 0; j < 2; j++) { const az = k * 2.1 + j * 2.6; b.blob(mul(T(Math.cos(az) * R1 * 0.82, yb - 0.02 * g, Math.sin(az) * R1 * 0.82), RZ(r.range(-0.2, 0.2))), 0.034 * g, 0.068 * g, col(0x6a4a30), col(0x9a7a50), 6, 5); } }
    for (let j = 0; j < 8; j++) ncard(b, mul(T(0, Hs * 0.94, 0), RY(j * 0.785), RX(0.45)), 0.05 * g, 0.2 * g, dk, lt, v3(Math.sin(j * 0.785), 0.6, Math.cos(j * 0.785)).normalize()); }, { h: 4.0, thirst: 0.4 });
  Tr('cipreste', 'Cipreste', 15, 220, 'Chama verde-escura apontando para o céu.', (b, r, g, o) => { const Hs = 3.3 * g, Rm = 0.36 * g, y0 = 0.2 * g, cs = [col(0x1f4a2c), col(0x2a5a34), col(0x35683c), col(0x1a4026)];
    b.tube(null, [v3(0, 0, 0), v3(0, y0 * 1.5, 0)], 0.06 * g, 0.045 * g, col(0x5a4a3c), col(0x6a5a48), 6);
    const rad = (t) => Rm * Math.pow(Math.sin(Math.PI * Math.pow(t, 0.55)), 0.8) + 0.003, prof = []; for (let i = 0; i <= 10; i++) prof.push([rad(i / 10) * 0.84, y0 + (i / 10) * (Hs - y0)]);
    b.lathe(null, prof, col(0x12301c), col(0x1f4a2a), 10);
    for (let i = 0; i < Math.round(1500 * g); i++) { const t = Math.pow(r(), 0.85), az = r() * TAU, rr = rad(t) * r.range(0.82, 1.02), cx = Math.cos(az), cz = Math.sin(az), c = jitterc(r.pick(cs), r, 0.04);
      ncard(b, frame(v3(cx * rr, y0 + t * (Hs - y0) - 0.05 * g, cz * rr), v3(cx * 0.4 + r.range(-0.25, 0.25), 1, cz * 0.4 + r.range(-0.25, 0.25)).normalize()), 0.07 * g, 0.2 * g, shade(c, 0.7), c, v3(cx, 0.35, cz).normalize(), 0.3); }
    if (o > 0.5) for (let i = 0; i < 12; i++) { const t = r.range(0.15, 0.8), az = r() * TAU; b.blob(T(Math.cos(az) * rad(t) * 1.02, y0 + t * (Hs - y0), Math.sin(az) * rad(t) * 1.02), 0.022 * g, 0.022 * g, col(0x6a5a40), col(0x9a8a68), 5, 4); } }, { h: 4.2, thirst: 0.35 });
  Tr('araucaria', 'Araucária', 20, 430, 'O pinheiro-do-paraná: candelabro que guarda o pinhão.', (b, r, g, o) => { const Hs = 3.1 * g, tr = 0.11 * (0.4 + 0.6 * g), dk = col(0x1f5a34), md = col(0x2f7040), lt = col(0x4a8a48), brk = col(0x4a3c34);
    b.tube(null, [0, 0.25, 0.5, 0.75, 1].map((u) => v3(0.02 * Math.sin(u * 5), Hs * u, 0)), (t) => tr * (1.25 - 0.8 * t + 0.4 * Math.pow(1 - t, 8)), 0, shade(brk, 0.8), col(0x6a5648), 8);
    const young = g < 0.6, nT = young ? 5 : 4, tips = [];
    for (let k = 0; k < nT; k++) { const f = k / (nT - 1), y = Hs * lerp(young ? 0.3 : 0.64, 0.97, f), Rb = (young ? 0.9 : 1.4) * g * lerp(1, 0.38, f), nb = Math.round(lerp(9, 5, f));
      for (let i = 0; i < nb; i++) { const az = (i / nb) * TAU + k * 0.5 + r.range(-0.12, 0.12), cx = Math.cos(az), cz = Math.sin(az), L = Rb * r.range(0.9, 1.05);
        const pts = bez(v3(0, y, 0), v3(cx * L * 0.65, y - 0.1 * L, cz * L * 0.65), v3(cx * L, y + L * (young ? 0.1 : 0.36), cz * L), 7), tip = pts[7]; b.tube(null, pts, tr * 0.3 * lerp(1, 0.6, f), tr * 0.1, brk, col(0x3a4a34), 5);
        const nc = Math.round(30 * lerp(1, 0.7, f)); for (let j = 0; j < nc; j++) { const { p, d } = polyAt(pts, 0.42 + (0.58 * (j + r())) / nc), u = v3(r.range(-1, 1), r.range(-1, 1), r.range(-1, 1)).normalize(), dir = u.clone().addScaledVector(d, 0.7).normalize(), c = jitterc(r.pick([dk, md, md, lt]), r, 0.04);
          ncard(b, frame(p.clone().addScaledVector(dir, 0.02), dir), 0.075 * g, 0.19 * g, shade(c, 0.65), c, dir, 0.3); }
        b.blob(at(tip), 0.11 * g, 0.1 * g, shade(dk, 0.6), dk, 6, 4);
        for (let j = 0; j < 18; j++) { const dir = v3(r.range(-1, 1), r.range(-0.4, 1), r.range(-1, 1)).normalize(), c = jitterc(r.pick([md, lt, md]), r, 0.04); ncard(b, frame(tip.clone().addScaledVector(dir, 0.07 * g), dir), 0.075 * g, 0.17 * g, shade(c, 0.65), c, dir, 0.3); }
        if (k >= nT - 2 && i % 2 === 0) tips.push(tip); } }
    b.blob(T(0, Hs, 0), 0.13 * g, 0.12 * g, shade(dk, 0.6), dk, 6, 4);
    for (let j = 0; j < 20; j++) { const dir = v3(r.range(-1, 1), r.range(0, 1), r.range(-1, 1)).normalize(); ncard(b, frame(v3(0, Hs, 0).addScaledVector(dir, 0.08 * g), dir), 0.075 * g, 0.18 * g, dk, md, dir, 0.3); }
    if (o > 0.5) for (const p of tips) b.blob(T(p.x, p.y + 0.1 * g, p.z), 0.07 * g, 0.075 * g, col(0x5a6a34), col(0x8a7a44), 7, 5, col(0x7a8a48)); }, { h: 4.2, thirst: 0.4 });
  // ================= trepadeiras (arco) =================
  const Cl = (id, name, lvl, price, info, P, extra = {}) => add({ id, name, lvl, price, gift: Math.round(price * 0.6), grow: 220, spots: ['arch'], h: 2.3, climber: true, fixedRot: true, info, ...extra, build: (b, r, g, o) => habitClimber(b, r, typeof P === 'function' ? P(r) : P, g, o) });
  const outDir = (r) => v3(r.range(-0.6, 0.6), r.range(0.0, 1), r() > 0.5 ? 1 : -1).normalize();
  const anyDir = (r) => v3(r.range(-1, 1), r.range(-0.1, 1), r.range(-1, 1)).normalize();
  Cl('ervilha_de_cheiro', 'Ervilha-de-cheiro', 4, 52, 'Borboletinhas de papel de seda, perfumadas.', { strands: 3, wood: col(0x6a9a50), leaf: { n: 90, L: 0.05, W: 0.028, c: col(0x6aaa58), a: 0.8, b: 0.6, nu: 3 }, flower: { n: 110, make: (b, p, r, o) => { const d = outDir(r), c = r.pick([[0xf07ab0, 0xfbc4dc], [0xb87ae0, 0xe0c8f8], [0xfaf4f8, 0xffffff], [0xd83a7a, 0xf48ab0], [0x7a6ae0, 0xb8b0f8]]), k = lerp(0.45, 1, o), M = frame(p.clone().addScaledVector(d, 0.06), d);
      b.petal(mul(M, RX(-0.25)), { L: 0.052 * k, W: 0.066 * k, a: 1.5, b: 0.4, cup: 0.25, ruffle: 0.2, rf: 2, tipNotch: 0.15, cols: [col(0xfaf4f0), col(c[0]), col(c[1])], nu: 4, nv: 4 });
      for (const sd of [-1, 1]) b.petal(mul(M, T(0, 0, 0.004), RZ(sd * 0.35), RX(0.75)), { L: 0.034 * k, W: 0.028 * k, a: 1.3, b: 0.5, cup: 0.9 * sd, cols: [W, col(c[1]), col(c[1])], nu: 3, nv: 2 }); } } });
  Cl('alamanda', 'Alamanda', 8, 92, 'Trombetas de ouro o ano inteiro.', { leaf: { n: 70, L: 0.07, W: 0.026, c: col(0x2f7a38), a: 0.8, b: 0.6 }, flower: { n: 60, make: (b, p, r, o) => { const d = outDir(r), k = lerp(0.4, 1, o);
      b.lathe(frame(p.clone().addScaledVector(d, 0.05), d), [[0.004, 0], [0.007, 0.022], [0.016 * k, 0.04], [0.036 * k, 0.052], [0.052 * k, 0.054]], null, null, 15, (t, c) => c.copy(col(0xd8901a)).lerp(col(0xf9d62a), clamp(t * 1.5, 0, 1)), 0.22, 5); } } });
  Cl('videira', 'Videira', 10, 108, 'Parreira de sombra fresca e cachos de uva.', (r0) => { const cs = r0() < 0.6 ? [col(0x4a1e5a), col(0x6a2a7a), col(0x9a7ab8)] : [col(0x8aa83a), col(0xb8cc5a), col(0xe0e8a0)];
      return { strands: 3, wood: col(0x5a4636), leaf: { n: 56, L: 0.1, W: 0.115, c: col(0x4a9a40), tip: col(0x8ac058), a: 0.75, b: 0.35, ruffle: 0.3, rf: 5, nu: 4, nv: 3 }, flower: { n: 14, t0: 0.3, make: (b, p, r, o) => { const k = lerp(0.3, 1, o), L = 0.16 * k * r.range(0.8, 1.15), x = p.x + r.range(-0.05, 0.05), z = p.z + r.range(-0.07, 0.07), y = p.y - 0.04;
        const c0 = o < 0.5 ? col(0x7a9a3a) : cs[0], c1 = o < 0.5 ? col(0x9ab84a) : cs[1], c2 = o < 0.5 ? col(0xc8d880) : cs[2];
        b.tube(null, [p, v3(x, y, z)], 0.002, 0.002, col(0x6a8a40), col(0x6a8a40), 3); b.blob(T(x, y - L * 0.5, z), 0.03 * k, L * 0.5, shade(c0, 0.7), shade(c0, 0.8), 6, 4);
        for (let i = 0; i < 13; i++) { const t = (i + 0.5) / 13, rad = 0.042 * k * (1 - t * 0.75), a = i * GOLD; b.blob(T(x + Math.cos(a) * rad, y - 0.01 - t * L, z + Math.sin(a) * rad), 0.0155 * k, 0.0165 * k, c0, c1, 5, 3, c2); } } } }; });
  Cl('lagrima_de_cristo', 'Lágrima-de-cristo', 12, 128, 'Coraçõezinhos brancos com uma gota vermelha.', { leaf: { n: 64, L: 0.075, W: 0.045, c: col(0x256a32), a: 0.75, b: 0.6 }, flower: { n: 110, make: (b, p, r, o) => { const d = anyDir(r), q = p.clone().addScaledVector(d, r.range(0.04, 0.12)), k = lerp(0.45, 1, o) * 1.45, M = mul(at(q), RX(Math.PI), RY(r() * 6), RX(r.range(-0.5, 0.5)));
      b.lathe(M, [[0.003, 0], [0.012 * k, 0.008 * k], [0.014 * k, 0.02 * k], [0.005 * k, 0.034 * k]], col(0xf4f4ec), W, 5, null, 0.15, 5);
      if (o > 0.3) for (let j = 0; j < 4; j++) b.petal(mul(M, T(0, 0.032 * k, 0), RY(j * 1.57), RX(1.0)), { L: 0.012 * k, W: 0.008 * k, cols: [col(0xb81424), col(0xe0202e), col(0xf04a4a)], nu: 2, nv: 1 }); } } });
  Cl('cipo_de_sao_joao', 'Cipó-de-são-joão', 13, 135, 'Fogueira de flores laranja no meio do inverno.', { leaf: { n: 56, L: 0.065, W: 0.036, c: col(0x2f7a38), a: 0.75, b: 0.6 }, flower: { n: 60, make: (b, p, r, o) => { const k = lerp(0.4, 1, o), x = p.x + r.range(-0.06, 0.06), z = p.z + r.range(-0.1, 0.1);
      for (let j = 0; j < 7; j++) { const a = j * 0.9 + r(), sp = r.range(0.2, 0.75), L = 0.07 * k * r.range(0.8, 1.1), c = jitterc(col(0xf2701a), r, 0.04), e = v3(Math.cos(a) * sp * L, -L, Math.sin(a) * sp * L);
        b.tube(T(x, p.y - 0.02, z), [v3(0, 0, 0), e.clone().multiplyScalar(0.5), e], (t) => 0.003 + 0.006 * k * t, 0, shade(c, 0.85), mixc(c, col(0xf9b83a), 0.5), 4); } } } });
  Cl('tumbergia_azul', 'Tumbérgia-azul', 14, 150, 'Sinos de céu com garganta amarelo-clara.', { leaf: { n: 60, L: 0.085, W: 0.06, c: col(0x358040), a: 0.6, b: 0.55 }, flower: { n: 50, make: (b, p, r, o) => { const d = outDir(r).add(v3(0, -0.5, 0)).normalize(), M = frame(p.clone().addScaledVector(d, 0.06), d), k = lerp(0.4, 1, o);
      b.lathe(M, [[0.005, -0.03], [0.009, -0.01], [0.014 * k, 0.004]], col(0xe8e4c0), col(0xfaf4c8), 6);
      head(b, M, r, { layers: [{ n: 5, L: 0.04, W: 0.042, a: 1.5, b: 0.4, tilt: 1.3, tiltC: 0.2, cup: 0.15, ruffle: 0.12, cols: [col(0xfaf4c8), col(0x7a8ae8), col(0xa8b4f6)], nu: 3, nv: 3 }], center: { type: 'dome', r: 0.005, h: 0.002, cols: [col(0xf2e08a), col(0xfaf0b0)], seg: 5 } }, o, 1.15); } } });
  Cl('kiwi', 'Kiwi', 15, 170, 'Folhona redonda e frutos peludinhos em penca.', { strands: 3, wood: col(0x6a4a3a), leaf: { n: 48, L: 0.11, W: 0.115, c: col(0x3f8a40), tip: col(0x6aa850), a: 0.75, b: 0.32, fold: 0.15, nu: 4, nv: 3 }, flower: { n: 24, t0: 0.25, make: (b, p, r, o) => { if (o < 0.5) { const d = outDir(r); head(b, frame(p.clone().addScaledVector(d, 0.06), d), r, flat(col(0xfaf4dc), W, null, { L: 0.022, W: 0.022, cr: 0.007, ch: 0.005 }), o * 2, 1.2); return; }
      for (let j = 0; j < 2; j++) { const x = p.x + r.range(-0.06, 0.06), z = p.z + r.range(-0.09, 0.09), L = r.range(0.04, 0.08); b.tube(null, [p, v3(x, p.y - L, z)], 0.002, 0.002, col(0x6a4a3a), col(0x6a4a3a), 3);
        b.blob(mul(T(x, p.y - L - 0.04, z), RZ(r.range(-0.2, 0.2))), 0.03, 0.042, col(0x6a4e2e), col(0x8a6a3e), 7, 5, col(0x9a8050)); } } } });
  Cl('dama_da_noite', 'Dama-da-noite', 16, 195, 'De dia passa despercebida; de noite perfuma a rua toda.', { leaf: { n: 70, L: 0.075, W: 0.026, c: col(0x3a8a44), a: 0.8, b: 0.6 }, flower: { n: 50, make: (b, p, r, o) => { const d0 = anyDir(r), k = lerp(0.4, 1, o), base = p.clone().addScaledVector(d0, 0.04);
      for (let j = 0; j < 5; j++) { const d = d0.clone().add(v3(r.range(-0.7, 0.7), r.range(-0.3, 0.7), r.range(-0.7, 0.7))).normalize(), M = frame(base, d), L = 0.065 * k * r.range(0.8, 1.1);
        b.tube(M, [v3(0, 0, 0), v3(0, L, 0)], 0.002, 0.003, col(0xb8cc8a), col(0xe8f0c0), 3);
        if (o > 0.3) for (let q = 0; q < 5; q++) b.petal(mul(M, T(0, L, 0), RY(q * 1.257), RX(1.25)), { L: 0.017 * k, W: 0.008 * k, cols: [col(0xe8f0c0), col(0xfafce8), W], nu: 2, nv: 1 }); } } } });
  Cl('sapatinho_de_judia', 'Sapatinho-de-judia', 18, 260, 'Colares de flores vinho e ouro, a festa dos beija-flores.', { leaf: { n: 60, L: 0.09, W: 0.036, c: col(0x2a6a34), a: 0.7, b: 0.6 }, flower: { n: 30, t0: 0.5, make: (b, p, r, o) => { const L = 0.55 * lerp(0.35, 1, o) * r.range(0.7, 1.1), x = p.x + r.range(-0.05, 0.05), z = p.z + r.range(-0.1, 0.1), n = 9, sw = r.range(-0.05, 0.05);
      b.tube(null, [v3(x, p.y, z), v3(x + sw * 0.5, p.y - L * 0.5, z), v3(x + sw, p.y - L, z)], 0.0018, 0.0012, col(0x7a4a4a), col(0x8a5a4a), 3);
      for (let i = 0; i < n; i++) { const t = (i + 0.6) / n, a = i * 2.4 + r(), k = lerp(0.5, 1, o) * (1 - t * 0.3) * 1.5, M = mul(T(x + sw * t * t, p.y - t * L, z), RY(a), RX(1.9));
        b.petal(M, { L: 0.05 * k, W: 0.03 * k, a: 1.0, b: 0.6, cup: 1.1, curl: 0.9, cols: [col(0x6a1420), col(0x8a1c28), col(0xa82a30)], nu: 4, nv: 2 });
        if (o > 0.25) b.petal(mul(M, T(0, 0.012 * k, 0.01 * k), RX(0.5)), { L: 0.04 * k, W: 0.022 * k, a: 1.2, b: 0.5, cup: -0.6, curl: -0.9, cols: [col(0xf2b01a), col(0xf9d43a), col(0xfbe46a)], nu: 4, nv: 2 }); } } } });
  Cl('trepadeira_jade', 'Trepadeira-jade', 20, 340, 'Garras verde-água que parecem de outro planeta.', { leaf: { n: 60, L: 0.09, W: 0.04, c: col(0x2f7a40), a: 0.7, b: 0.6 }, flower: { n: 26, t0: 0.5, make: (b, p, r, o) => { const L = 0.6 * lerp(0.35, 1, o) * r.range(0.7, 1.1), x = p.x + r.range(-0.05, 0.05), z = p.z + r.range(-0.1, 0.1), n = 16;
      b.tube(null, [v3(x, p.y, z), v3(x, p.y - L, z)], 0.002, 0.0012, col(0x6a5a8a), col(0x7a6a9a), 3);
      for (let i = 0; i < n; i++) { const t = (i + 0.6) / n, a = i * GOLD, k = lerp(0.5, 1, o) * (1 - t * 0.45) * 1.35, c = jitterc(col(0x3ac8b0), r, 0.04);
        b.petal(mul(T(x, p.y - t * L, z), RY(a), RX(2.05)), { L: 0.07 * k, W: 0.02 * k, a: 0.8, b: 0.6, cup: 1.2, curl: -2.2, curlPow: 1.4, cols: [col(0x2a9a98), c, col(0x9af0dc)], nu: 5, nv: 2 }); } } } });

  // ================= plantas aquáticas (lago) =================
  const Aq = (d) => add({ spots: ['pond'], thirst: 0, gift: Math.round(d.price * 0.72), ...d });
  const lilyPads = (b, r, g, n, padR, c0 = col(0x3f8a48)) => { for (let i = 0; i < n; i++) { const az = i * 2.4 + r(), d = (0.12 + 0.3 * Math.sqrt((i + 0.5) / n)) * (0.6 + 0.4 * g), s = padR * g * r.range(0.7, 1.15), c = jitterc(c0, r, 0.05), c1 = mixc(c, G.light, 0.3);
      const M = mul(T(Math.cos(az) * d, 0.012 + i * 0.0015, Math.sin(az) * d), RY(r() * TAU)), seg = 14, st = b.n;
      b.vert(0, 0, 0, shade(c, 0.8), M); for (let j = 0; j <= seg; j++) { const a = 0.18 + (j / seg) * (TAU - 0.36), rr = s * (1 + 0.04 * Math.sin(a * 7)); b.vert(Math.cos(a) * rr, 0.003 * Math.sin(a * 5), Math.sin(a) * rr, j % 2 ? c : c1, M); }
      for (let j = 0; j < seg; j++) b.idx.push(st, st + j + 2, st + j + 1); } };
  Aq({ id: 'alface_dagua', name: "Alface-d'água", lvl: 3, price: 18, grow: 75, h: 0.12, foliage: true, info: 'Rosetas de veludo que navegam ao sabor do vento.',
    build: (b, r, g) => { const n = Math.round(2 + 3 * g); for (let i = 0; i < n; i++) { const az = i * 2.4 + r(), d = i ? (0.17 + 0.035 * i) * g : 0, k = g * (i ? r.range(0.75, 1.1) : 1.45);
        head(b, mul(T(Math.cos(az) * d, 0.008, Math.sin(az) * d), RY(r() * 6)), r, { layers: [{ n: 15, golden: true, L: [0.035, 0.1], W: [0.03, 0.085], a: 1.9, b: 0.35, tilt: [0.25, 1.25], tiltC: [0.25, 1.25], curl: [-0.4, -0.1], curlC: [-0.4, -0.1], cup: [0.9, 0.5], ruffle: 0.12, rf: 5,
          r: [0.001, 0.008], y: [0.012, 0], cols: [col(0xd8ecb0), col(0x9acc70), col(0x7ab860)], cols2: [col(0xc8e0a0), col(0x86bc64), col(0x6aa852)], nu: 4, nv: 4, closedScale: 1, vein: 0.45 }] }, 1, k); } } });
  Aq({ id: 'aguape', name: 'Aguapé', lvl: 4, price: 24, grow: 90, h: 0.3, info: 'Boia em almofadinhas de ar e se enfeita de lilás.',
    build: (b, r, g, o) => { const n = Math.round(2 + 2 * g); for (let i = 0; i < n; i++) { const az0 = i * 2.4 + r(), d = i ? 0.2 * g : 0, x = Math.cos(az0) * d, z = Math.sin(az0) * d, k = g * (i ? 0.8 : 1), nl = Math.round(5 + 4 * g);
        for (let j = 0; j < nl; j++) { const az = j * GOLD + i, tl = r.range(0.45, 1.0), M = mul(T(x, 0.005, z), OUT(az), RX(tl));
          b.blob(mul(M, T(0, 0.035 * k, 0)), 0.014 * k, 0.04 * k, col(0x8ac060), col(0xb0d880), 6, 5);
          leaf(b, mul(M, T(0, 0.07 * k, 0), RX(0.5)), r, { L: 0.075 * k, W: 0.08 * k, a: 0.8, b: 0.38, c: col(0x3f9a44), tip: col(0x6ab858), cup: 0.5, fold: 0.1, curl: 0.3, nu: 4, nv: 4, vein: 0.2 }); }
        if (o >= 0 && i < 2) { const Hs = 0.24 * k * lerp(0.6, 1, o), pts = bez(v3(x, 0, z), v3(x + 0.01, Hs * 0.6, z), v3(x + 0.02 * (i ? -1 : 1), Hs, z + 0.01), 6); b.tube(null, pts, 0.005, 0.003, col(0x7ab060), col(0x8ac070), 4);
          for (let f = 0; f < 9; f++) { const { p } = polyAt(pts, 0.5 + f * 0.058), a = f * GOLD, dir = v3(Math.cos(a), 0.35, Math.sin(a)).normalize(), M = frame(p.clone().addScaledVector(dir, 0.012), dir), op = clamp(o * 1.6 - f * 0.07, 0, 1);
            head(b, M, r, { layers: [{ n: 6, L: 0.026, W: 0.02, a: 1.3, b: 0.5, tilt: 1.2, tiltC: 0.2, cup: 0.3, cols: [col(0xa890e8), col(0xb8a4f0), col(0xd8ccfa)], nu: 3, nv: 2 }], center: { type: 'dome', r: 0.004, h: 0.003, cols: [col(0xf7d24a), col(0x5a4ac8)], seg: 5 } }, op, 1.1); } } } } });
  Aq({ id: 'taboa', name: 'Taboa', lvl: 5, price: 30, grow: 100, h: 1.0, info: 'Espigas de veludo marrom na beira d’água.',
    build: (b, r, g, o) => { const n = Math.round(10 + 10 * g); for (let i = 0; i < n; i++) { const az = r() * TAU, d = r() * 0.09; b.petal(mul(T(Math.cos(az) * d, -0.05, Math.sin(az) * d), RY(r() * 6), RX(r.range(0.02, 0.22))), { L: 0.95 * g * r.range(0.6, 1.05), W: 0.026, a: 0.6, b: 0.4, base: 0.6, fold: 0.4, curl: r.range(0.1, 0.6), curlPow: 2.5, twist: r.range(-0.5, 0.5), nu: 6, nv: 2, cols: [col(0x4a8a44), jitterc(col(0x5a9a50), r, 0.04), col(0x9ac068)] }); }
      if (o >= 0) for (let i = 0; i < Math.round(3 + 2 * g); i++) { const az = i * GOLD, d = 0.03 + i * 0.015, Hs = 0.9 * g * r.range(0.8, 1.05), pts = mkStem(r, Hs, 0.05, az, 0.02, 6), k = lerp(0.5, 1, o); for (const p of pts) { p.x += Math.cos(az) * d; p.z += Math.sin(az) * d; }
        b.tube(null, pts, 0.006, 0.0035, col(0x6a9a4a), col(0x8aa85a), 5); const { p, d: dd } = polyAt(pts, 0.82), c = o < 0.5 ? col(0x7a8a3a) : col(0x5a3a22);
        b.blob(frame(p, dd), 0.018 * k, 0.085 * g, shade(c, 0.85), c, 8, 6, mixc(c, col(0x9a6a40), 0.5)); } } });
  Aq({ id: 'lirio_dagua_amarelo', name: "Lírio-d'água amarelo", lvl: 7, price: 42, grow: 125, h: 0.2, info: 'Taças douradas erguidas acima das folhas.',
    build: (b, r, g, o) => { lilyPads(b, r, g, Math.round(4 + 4 * g), 0.15, col(0x4a9448));
      if (o >= 0) for (let i = 0; i < Math.round(2 + 2 * g); i++) { const az = i * 2.2 + 0.7, d = i ? 0.17 : 0, x = Math.cos(az) * d, z = Math.sin(az) * d, y = 0.09 * g * (i ? 0.7 : 1);
        b.tube(null, [v3(x, -0.1, z), v3(x, y * 0.5, z + 0.008), v3(x, y, z)], 0.006, 0.005, col(0x5a8a4a), col(0x7a9a4a), 4);
        head(b, mul(T(x, y, z), RY(r() * 3)), r, { layers: [{ n: 5, L: 0.045, W: 0.05, a: 1.2, b: 0.5, tilt: 0.75, tiltC: 0.15, curl: -0.6, curlC: -0.8, cup: 1.0, cols: [col(0xb8c84a), col(0xf7d21e), col(0xfbe24a)], nu: 4, nv: 3, closedScale: 0.7 }, { n: 8, L: 0.03, W: 0.026, a: 1.2, b: 0.5, tilt: 0.55, tiltC: 0.1, curl: -0.5, cup: 0.9, cols: [col(0xf2b81a), col(0xf7d21e), col(0xfbe24a)], nu: 3, nv: 2 }],
          center: { type: 'dome', r: 0.016, h: 0.012, y: 0.008, cols: [col(0xd8a01a), col(0xf2c02a), col(0xe8902a)], seg: 8, stamens: { n: 14, len: 0.016, spread: 0.8, c: col(0xf2b81a), tip: col(0xe8902a), tipR: 0.003 } } }, clamp(o - i * 0.1, 0, 1), 1.5 * (0.75 + 0.25 * g)); } } });
  Aq({ id: 'papiro', name: 'Papiro', lvl: 8, price: 46, grow: 135, h: 1.2, foliage: true, info: 'Pompons de fios verdes: o papel dos faraós.',
    build: (b, r, g) => { const n = Math.round(4 + 5 * g); for (let i = 0; i < n; i++) { const az = i * GOLD, Hs = 1.1 * g * r.range(0.6, 1.05), pts = mkStem(r, Hs, 0.3 * g * Math.sqrt((i + 0.3) / n), az, 0.03, 7), tip = pts[7], c = jitterc(col(0x5aa048), r, 0.04), k = g * r.range(0.8, 1.1); for (const p of pts) p.y -= 0.05;
        b.tube(null, pts, 0.008, 0.005, col(0x4a8a40), col(0x6aa850), 3);
        for (let j = 0; j < 6; j++) b.petal(mul(at(tip), RY(j * 1.05), RX(1.2)), { L: 0.05 * k, W: 0.012 * k, cols: [col(0x8a8a4a), col(0x7a9a4a), col(0x8ab058)], nu: 2, nv: 1 });
        for (let j = 0; j < 46; j++) { const a = j * GOLD, el = r.range(0.15, 1.5); b.petal(mul(at(tip), OUT(a), RX(el)), { L: 0.2 * k * r.range(0.7, 1.1), W: 0.0035, a: 1, b: 0.4, curl: r.range(0.5, 1.6), curlPow: 2, nu: 4, nv: 1, cols: [shade(c, 0.8), c, col(0xa8d070)] }); } } } });
  Aq({ id: 'iris_dagua', name: "Íris-d'água", lvl: 9, price: 52, grow: 145, h: 0.75, info: 'Bandeiras amarelas plantadas no brejo.',
    build: (b, r, g, o) => { const c0 = col(0xf7cf1e), c1 = col(0xfbe45a);
      habitStems(b, r, { stems: [4, 5], H: 0.7, lean: 0.1, spread: 0.08, stemR: 0.005, stemC: col(0x5a9a58), basal: { n: 16, L: 0.62, W: 0.034, a: 0.7, b: 0.4, tilt: 0.16, curl: 0.3, fold: 0.5, c: col(0x4a9a60) },
        head: { layers: [{ n: 3, L: 0.045, W: 0.026, a: 1.2, b: 0.5, tilt: 0.3, tiltC: 0.1, curl: -0.5, cup: 0.9, cols: [c1, c0, c1] }, { n: 3, L: 0.075, W: 0.055, a: 1.3, b: 0.5, tilt: 1.15, tiltC: 0.2, curl: 1.2, curlPow: 2, cup: 0.3, ruffle: 0.12, cols: [col(0x9a5a14), c0, c1], vein: 0.3 }] }, headK: 1.2 }, g, o); } });
  Aq({ id: 'ninfeia_azul', name: 'Ninfeia-azul', lvl: 14, price: 120, grow: 185, h: 0.25, info: 'O lótus azul dos egípcios: abre de manhã, fecha à tarde.',
    build: (b, r, g, o) => { lilyPads(b, r, g, Math.round(4 + 4 * g), 0.17, col(0x3f8a50));
      if (o >= 0) for (let i = 0; i < Math.round(1 + 2 * g); i++) { const az = i * 2.2 + 0.7, d = i ? 0.2 : 0, x = Math.cos(az) * d, z = Math.sin(az) * d, y = 0.1 * g * (i ? 0.7 : 1);
        b.tube(null, [v3(x, -0.1, z), v3(x, y * 0.5, z + 0.008), v3(x, y, z)], 0.005, 0.004, col(0x5a8a4a), col(0x6a8a5a), 4);
        head(b, mul(T(x, y, z), RY(r() * 3)), r, { layers: [{ n: 22, golden: true, L: [0.035, 0.085], W: [0.01, 0.022], a: 0.8, b: 0.8, tilt: [0.2, 1.2], tiltC: [0.05, 0.3], curl: [-0.3, -0.15], cup: [1.2, 0.8], r: [0.006, 0.012], y: [0.01, 0],
          cols: [col(0xf4f0ff), col(0x7a8af0), col(0x5a6ae0)], cols2: [W, col(0x9aa8f6), col(0x6a7ae8)], nu: 4, nv: 2, closedScale: 0.6 }],
          center: { type: 'dome', r: 0.013, h: 0.008, y: 0.008, cols: [col(0xe8a818), col(0xf7cf3a), col(0xf9dc55)], stamens: { n: 16, len: 0.024, spread: 0.6, c: col(0xf2c230), tip: col(0x7a6ae0), tipR: 0.003 } } }, clamp(o - i * 0.1, 0, 1), 1.3 * (0.75 + 0.25 * g)); } } });
}

// seasons each plant loves (0 spring, 1 summer, 2 autumn, 3 winter)
export const LOVES3 = {
  rucula: [2, 3], coentro: [3, 0], alho: [2, 3], espinafre: [3, 0], agriao: [3], cebola: [3, 0], oregano: [0, 1], almeirao: [2, 3], nabo: [2, 3], tomilho: [0, 1], feijao: [0], camomila: [0], acelga: [2, 3], vagem: [0, 1],
  batata: [3], erva_cidreira: [0, 1], mostarda: [3], pepino: [1], chicoria: [2, 3], manjerona: [0], amendoim: [1], quiabo: [1], alho_poro: [3], batata_doce: [2], capim_limao: [1], tomate_cereja: [1], jilo: [1], salsao: [3],
  fava: [3, 0], pimenta_biquinho: [2], dedo_de_moca: [1], chuchu: [1, 2], mandioca: [3], erva_doce: [0], inhame: [3], estragao: [0], cabotia: [2], melao: [1], couve_de_bruxelas: [3], louro: [3], gengibre: [3], amora_preta: [1],
  physalis: [2], framboesa: [0], aspargo: [0], groselha: [3], mirtilo: [3], alcachofra: [0], abacaxi: [1],
  aceroleira: [0], amoreira: [0], goiabeira: [2], pessegueiro: [0], pereira: [2], bananeira: [1], figueira: [1], ameixeira: [0], mamoeiro: [1], romazeira: [2], ipe_roxo: [3], caquizeiro: [2], quaresmeira: [2], coqueiro: [1],
  pinheiro: [3], caramboleira: [2], abacateiro: [2, 3], cipreste: [3], manaca_da_serra: [0, 1], cajueiro: [0], jaqueira: [1], chuva_de_ouro: [1], oliveira: [3], cacaueiro: [2], ipe_branco: [3], salgueiro_chorao: [0], bordo_japones: [2],
  paineira: [2], pau_brasil: [0], araucaria: [3], palmeira_imperial: [1],
  ervilha_de_cheiro: [3, 0], alamanda: [1], videira: [1], lagrima_de_cristo: [0], cipo_de_sao_joao: [3], tumbergia_azul: [2], kiwi: [2], dama_da_noite: [1], sapatinho_de_judia: [0], trepadeira_jade: [0],
  moranga: [2], sibipiruna: [0], ginkgo: [2],
  alface_dagua: [1], aguape: [1], taboa: [2], lirio_dagua_amarelo: [0, 1], papiro: [1], iris_dagua: [0], ninfeia_azul: [1, 2],
};
