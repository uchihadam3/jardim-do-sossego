// Catalogue 4: house plants and foliage, orchids and pot flowers, and many more flowers for beds, window boxes and baskets.
// Same pattern as species2.js: local helpers, then add({...}) calls; LOVES4 (favourite seasons) at the end.
import * as THREE from 'three';
import { T, RX, RY, RZ, S, mul, frame, col, mixc, shade, jitterc, bez, polyAt, lerp, clamp, TAU } from './util.js';
import { Builder } from './builder.js';
import { G, leaf, leavesAlong, basalLeaves, fanLeaf, mkStem, head, habitStems, habitBush, habitSpike, habitCascade, habitTree } from './parts.js';

const V3 = THREE.Vector3, W = col(0xffffff), GOLD = 2.39996323, I4 = new THREE.Matrix4(), UP = new V3(0, 1, 0);
const YEL = { type: 'dome', r: 0.012, h: 0.007, cols: [col(0xd9900f), col(0xf5c628), col(0xf9dc55)] };
// level -> price and raw growth: continues the curve of the first catalogues and climbs to the long-term goals of levels 12..20
const PRICE = [0, 9, 12, 16, 20, 24, 30, 36, 43, 48, 54, 62, 95, 120, 150, 185, 225, 270, 320, 380, 450];
const GROW = [0, 55, 62, 70, 80, 90, 100, 112, 128, 142, 156, 180, 195, 202, 210, 218, 226, 234, 242, 250, 260];

// ---------- patterned leaf ----------
// Like Builder.petal (base at the origin, grows along +Y, underside +Z) but with a free outline (shape(u) -> width 0..1), a colour function
// col(u, q, out, i, j) for stripes / veins / variegation, optional holes, wavy margins and a differently coloured underside (back).
const _c = new THREE.Color();
function pleaf(b, M, o) {
  const nu = o.nu ?? 6, nv = o.nv ?? 4, L = o.L, hw0 = o.W / 2, a = o.a ?? 0.75, bb = o.b ?? 0.75, asym = o.asym ?? 0;
  const cup = o.cup ?? 0, curl = o.curl ?? 0.4, cp = o.curlPow ?? 1.3, c0 = o.curl0 ?? 0, fold = o.fold ?? 0.25, ruf = o.ruffle ?? 0, rf = o.rf ?? 3, ph = o.phase ?? 0, wave = o.wave ?? 0, wf = o.wf ?? 14;
  const sheet = (off, colFn, kc) => {
    const start = b.n; let cy = 0, cz = 0;
    for (let i = 0; i <= nu; i++) {
      const u = i / nu, ang = c0 + curl * Math.pow(u, cp);
      if (i > 0) { const am = c0 + curl * Math.pow((i - 0.5) / nu, cp); cy += Math.cos(am) * L / nu; cz += Math.sin(am) * L / nu; }
      const ny = -Math.sin(ang), nz = Math.cos(ang);
      const s = o.shape ? o.shape(u) : Math.pow(Math.sin(Math.PI * Math.pow(Math.min(u, 0.999), a)), bb), hw = hw0 * Math.max(s, (o.base ?? 0) * (1 - u));
      for (let j = 0; j <= nv; j++) {
        const q = (j / nv) * 2 - 1, aq = Math.abs(q), hq = hw * (q < 0 ? 1 + asym : 1 - asym);
        const po = -cup * kc * hw * q * q - fold * hw * aq + ruf * hw0 * Math.sin(q * Math.PI * rf + ph + u * 5) * u + wave * hw0 * aq * Math.sin(u * wf + ph + (q > 0 ? 1.7 : 0)) * Math.min(1, u * 4) + off;
        colFn(u, q, _c, i, j);
        b.vert(q * hq, cy + ny * po, cz + nz * po, _c, M);
      }
    }
    const w = nv + 1;
    for (let i = 0; i < nu; i++) for (let j = 0; j < nv; j++) {
      if (o.hole && o.hole(i, j)) continue;
      const A = start + i * w + j, B = A + 1, C = A + w, D = C + 1;
      b.idx.push(A, C, B, B, C, D);
    }
  };
  sheet(o.off ?? 0, o.col, 1);
  if (o.back) { const bc = o.back; sheet(o.backOff ?? 0.0012, typeof bc === 'function' ? bc : (u, q, c) => c.copy(bc).multiplyScalar(0.78 + 0.22 * Math.abs(q)), o.backCup ?? 1); }
}
// point / frame on the bent midrib of a leaf at fraction t
function ribAt(L, curl, cp, t, curl0 = 0) { let y = 0, z = 0; const n = 8; for (let i = 0; i < n; i++) { const a = curl0 + curl * Math.pow(((i + 0.5) / n) * t, cp); y += Math.cos(a) * L * t / n; z += Math.sin(a) * L * t / n; } return [y, z, curl0 + curl * Math.pow(t, cp)]; }
const tipM = (M, o, t = 1) => { const [y, z, a] = ribAt(o.L, o.curl ?? 0.4, o.curlPow ?? 1.3, t, o.curl0 ?? 0); return mul(M, T(0, y, z), RX(a)); };
// crisp veins laid over a pleaf drawn with the same M and options: a midrib strip plus side veins that follow the fold of the blade
function veins(b, M, o, c, n = 5, P = {}) {
  const w = (P.w ?? 0.035) * o.W, off = -(P.lift ?? 0.0009), fa = Math.atan(o.fold ?? 0.25), ang = P.ang ?? 1.0, vc = (u, q, out) => out.copy(c);
  const hw = (t) => (t >= 1 ? 0 : (o.shape ? o.shape(t) : Math.pow(Math.sin(Math.PI * Math.pow(t, o.a ?? 0.75)), o.b ?? 0.75)) * o.W / 2);
  pleaf(b, M, { L: o.L * 0.97, W: w * (P.mid ?? 1.6), shape: (u) => 1 - u * 0.8, nu: o.nu ?? 6, nv: 1, fold: 0, curl: o.curl, curlPow: o.curlPow, curl0: o.curl0, off, col: vc });
  for (let k = 0; k < n; k++) {
    const t = (P.t0 ?? 0.06) + ((k + 0.5) / n) * (P.span ?? 0.8), Mk = tipM(M, o, t);
    for (const sd of [-1, 1]) { const ks = 1 - (o.asym ?? 0) * sd; let len = hw(t) * ks / Math.sin(ang); for (let it = 0; it < 4; it++) len = hw(Math.min(1, t + len * Math.cos(ang) / o.L)) * ks / Math.sin(ang);
      pleaf(b, mul(Mk, RY(sd * fa), RZ(-sd * ang)), { L: len * (P.reach ?? 0.92), W: w, shape: (u) => 1 - u * 0.75, nu: 2, nv: 1, fold: 0, curl: 0, off, col: vc }); }
  }
}
// little spots sitting on a pleaf (polka dots, speckles)
function dots(b, M, o, r, n, c, size) {
  const fa = Math.atan(o.fold ?? 0.25), hw = (t) => (o.shape ? o.shape(t) : Math.pow(Math.sin(Math.PI * Math.pow(t, o.a ?? 0.75)), o.b ?? 0.75)) * o.W / 2;
  for (let k = 0; k < n; k++) { const t = lerp(0.1, 0.86, (k + r()) / n), sd = k % 2 ? 1 : -1, x = hw(t) * (1 - (o.asym ?? 0) * sd) * r.range(0.2, 0.78), s = size * r.range(0.7, 1.2);
    b.card(mul(tipM(M, o, t), RY(sd * fa), T(sd * x, -s * 0.5, -0.0012)), s, s, c, c, 0, 0, -1, 0); }
}
// outline tables
const tab = (pts) => (u) => { for (let i = 1; i < pts.length; i++) if (u <= pts[i][0]) { const [u0, w0] = pts[i - 1], [u1, w1] = pts[i]; return lerp(w0, w1, (u - u0) / (u1 - u0)); } return pts[pts.length - 1][1]; };
const FIDDLE = tab([[0, 0.12], [0.08, 0.5], [0.28, 0.46], [0.5, 0.8], [0.7, 1], [0.88, 0.8], [1, 0.22]]);
const ROUND = (u) => Math.sqrt(Math.max(0.0004, 1 - Math.pow(2 * u - 1, 2)));
const DROP = tab([[0, 0.25], [0.12, 0.72], [0.3, 0.98], [0.45, 1], [0.7, 0.8], [0.9, 0.4], [1, 0.03]]);
const HEART = tab([[0, 0.3], [0.06, 0.78], [0.18, 1], [0.35, 0.95], [0.6, 0.66], [0.85, 0.26], [1, 0.02]]);
const ARROW = tab([[0, 0.55], [0.1, 1], [0.3, 0.8], [0.6, 0.45], [0.85, 0.17], [1, 0.02]]);
const WING = tab([[0, 0.3], [0.08, 0.85], [0.2, 1], [0.45, 0.72], [0.75, 0.36], [1, 0.02]]);
const STRAP = tab([[0, 0.3], [0.15, 0.6], [0.5, 1], [0.8, 0.85], [0.95, 0.4], [1, 0.03]]);
const BLUNT = tab([[0, 0.35], [0.25, 0.8], [0.6, 1], [0.93, 0.95], [1, 0.55]]);
// colour functions
const veined = (c, vc, k = 0.7, lat = 0.25) => { const d = shade(c, 0.75); return (u, q, out, i) => { out.copy(d).lerp(c, Math.min(1, u * 1.6 + 0.2)); const a = Math.abs(q); if (a < 0.01) out.lerp(vc, k * (1 - u * 0.3)); else if (i % 2) out.lerp(vc, lat * (1 - a * 0.6)); }; };
const plainC = (c, tip, k = 0.3) => { const d = shade(c, 0.72), t = mixc(c, tip ?? G.light, k); return (u, q, out) => { if (u < 0.5) out.copy(d).lerp(c, u * 2); else out.copy(c).lerp(t, u * 2 - 1); out.multiplyScalar(0.9 + 0.1 * Math.abs(q)); }; };

// leaves on stalks rising from the crown; fn(M, k, i, az) draws the blade at the tip (M: +Y along the blade, upper face up)
function stalks(b, r, n, P, fn) {
  for (let i = 0; i < n; i++) {
    const az = i * GOLD + r.range(-0.25, 0.25), f = (i + 0.5) / n, k = r.range(0.75, 1.1), L = P.L * k, out = lerp(P.out[0], P.out[1], f), dx = Math.cos(az), dz = Math.sin(az), r0 = P.r0 ?? 0.008;
    const tip = new V3(dx * (r0 + L * out), L * Math.sqrt(Math.max(0.02, 1 - out * out * 0.75)), dz * (r0 + L * out));
    const pts = bez(new V3(dx * r0, 0, dz * r0), new V3(dx * (r0 + L * out * 0.2), L * 0.7, dz * (r0 + L * out * 0.2)), tip, 5);
    b.tube(null, pts, P.r ?? 0.004, (P.r ?? 0.004) * 0.7, P.c0 ?? P.c, P.c, 4);
    fn(mul(T(tip.x, tip.y, tip.z), RY(-az + Math.PI / 2), RX(lerp(P.tilt[0], P.tilt[1], f) + r.range(-0.12, 0.12))), k, i, az);
  }
}
// hanging strands: over the rim, a little arch, then down with a lazy sway
function trails(r, n, P) {
  const res = [];
  for (let i = 0; i < n; i++) {
    const az = i * GOLD + r.range(-0.25, 0.25), dx = Math.cos(az), dz = Math.sin(az), R = (P.R ?? 0.11) * r.range(0.75, 1.2), up = (P.up ?? 0.05) * r.range(0.5, 1.3), L = P.L * lerp(P.min ?? 0.45, 1, r()), ph = r() * 6, sw = P.sway ?? 0.02;
    const pts = bez(new V3(dx * 0.015, 0, dz * 0.015), new V3(dx * R * 0.55, up * 2, dz * R * 0.55), new V3(dx * R, 0, dz * R), 4), m = Math.max(3, Math.round((P.seg ?? 9) * L / P.L));
    for (let k = 1; k <= m; k++) { const t = k / m, w = Math.sin(t * 5 + ph) * sw * t, o = R + (P.flare ?? 0.03) * t; pts.push(new V3(dx * o - dz * w, -t * L, dz * o + dx * w)); }
    res.push({ pts, az, L, f: L / P.L });
  }
  return res;
}
// leaves alternating along a hanging strand, each on a tiny stalk, blade hanging outwards with the upper face to the viewer
function vineLeaves(b, r, tr, n, P, fn) {
  const m = Math.max(2, Math.round(n * tr.f));
  for (let k = 0; k < m; k++) {
    const t = lerp(P.t0 ?? 0.05, 1, (k + r() * 0.5) / m), { p } = polyAt(tr.pts, t), a2 = tr.az + (k % 2 ? 1 : -1) * r.range(0.3, 1.25), pl = (P.pet ?? 0.02) * r.range(0.7, 1.2);
    const q = new V3(p.x + Math.cos(a2) * pl * 0.85, p.y - pl * 0.35, p.z + Math.sin(a2) * pl * 0.85);
    if (P.petC) b.tube(null, [p, q], 0.0012, 0.001, P.petC, P.petC, 3);
    fn(mul(T(q.x, q.y, q.z), RY(-a2 + Math.PI / 2), RX(r.range(P.tilt?.[0] ?? 1.9, P.tilt?.[1] ?? 2.5))), t, k);
  }
}
// dome of small florets; colAt(f, rng) with f = 0 centre .. 1 rim
function umbel(b, M, r, o, open) {
  const n = Math.round(o.n * lerp(0.5, 1, open)), R = o.r * lerp(0.6, 1, open);
  for (let i = 0; i < n; i++) {
    const f = Math.sqrt((i + 0.5) / n), th = i * GOLD, x = Math.cos(th) * f * R, z = Math.sin(th) * f * R, y = (o.dome ?? 0.5) * R * (1 - f * f);
    const c0 = o.colAt(f, r), c = open < 0.3 ? mixc(o.bud ?? G.lime, c0, open * 2.5) : jitterc(c0, r, 0.04);
    const Mf = mul(M, frame(new V3(x, y, z), new V3(x, R * (o.flat ?? 1.2), z).normalize()), RY(r() * TAU)), s = o.fs * r.range(0.85, 1.15), np = o.np ?? 5, tl = o.tl ?? 1.3;
    for (let j = 0; j < np; j++) b.card(mul(Mf, RY((j / np) * TAU), RX(tl)), s * (o.pw ?? 0.8), s, o.eye ?? shade(c, 0.8), mixc(c, W, o.white ?? 0.2), 0, Math.cos(tl), -Math.sin(tl), 0.12);
  }
}
// deeply cut leaf (monstera / philodendron): midrib strip plus side lobes that follow its curve
function lobed(b, M, r, s, o) {
  const mo = { L: s, W: s * (o.mid ?? 0.2), c: o.cAt ? o.cAt(-1, 0) : o.c, a: 0.8, b: 0.6, fold: 0.3, curl: o.curl ?? 0.5, nu: 5, tipMix: 0.12 };
  leaf(b, M, r, mo);
  for (let k = 0; k < o.pairs; k++) {
    const t = 0.05 + (k / o.pairs) * (o.span ?? 0.84), ll = s * (o.len ?? 0.5) * o.outline(t), Mk = tipM(M, mo, t);
    for (const sd of [-1, 1]) leaf(b, mul(Mk, RZ(sd * lerp(o.ang?.[0] ?? 1.15, o.ang?.[1] ?? 0.65, t)), RX(0.12)), r, { L: ll, W: s * (o.wr ?? 0.115), c: o.cAt ? o.cAt(k, sd) : o.c, a: 0.5, b: 0.45, base: 0.9, fold: 0.1, curl: 0.25, nu: 3, vein: 0.15, tipMix: 0.1 });
  }
}
// ribbed column following a path (cacti); spine(pos, normal, t, k) is called on every ridge of every ring
function ribTube(b, pts, rFn, ribs, depth, cv, cr, spine) {
  const st = b.n, n = pts.length, seg = ribs * 2, up = new V3(0.13, 0.2, 0.97), A = new V3(), B = new V3(), C = new V3(), N = new V3(), P = new V3(), sp = [];
  for (let i = 0; i < n; i++) {
    const t = i / (n - 1); A.copy(pts[Math.min(n - 1, i + 1)]).sub(pts[Math.max(0, i - 1)]).normalize(); B.crossVectors(A, up).normalize(); C.crossVectors(B, A).normalize();
    const r0 = rFn(t);
    for (let j = 0; j <= seg; j++) {
      const th = (j / seg) * TAU, rr = r0 * (j % 2 ? 1 + depth : 1 - depth * 0.5), cs = Math.cos(th), sn = Math.sin(th);
      N.set(B.x * cs + C.x * sn, B.y * cs + C.y * sn, B.z * cs + C.z * sn); P.copy(pts[i]).addScaledVector(N, rr);
      b.vert(P.x, P.y, P.z, j % 2 ? cr : cv);
      if (spine && j % 2 && j < seg && i > 0 && i < n - 1) sp.push([P.clone(), N.clone(), t, j]);
    }
  }
  b.quadGrid(st, n - 1, seg, true);
  for (const a of sp) spine(...a);
}
// clipped ball / cone of tiny leaves with soft outward normals (topiary)
function leafShell(b, r, n, size, cols, at) {
  const p = new V3(), nr = new V3(), tx = new V3(), ty = new V3();
  for (let i = 0; i < n; i++) {
    at(r, p, nr); tx.set(r.range(-1, 1), r.range(-1, 1), r.range(-1, 1)); ty.crossVectors(nr, tx).normalize(); tx.crossVectors(ty, nr).normalize();
    const M = new THREE.Matrix4().makeBasis(tx, ty, nr.clone().addScaledVector(ty, r.range(-0.6, 0.6)).normalize()).setPosition(p.x, p.y, p.z), c = jitterc(r.pick(cols), r, 0.05), s = size * r.range(0.7, 1.3);
    const ln = nr.clone().applyMatrix3(new THREE.Matrix3().setFromMatrix4(M).invert()).normalize();
    b.card(M, s * 0.6, s * 1.1, shade(c, 0.72), c, ln.x, ln.y, ln.z, 0.25);
  }
}
const rays = (c0, c1, c2, o = {}) => ({ sepals: o.single ? null : { n: 8, L: 0.012, W: 0.006 }, layers: [
  { n: o.n ?? 17, L: o.L ?? 0.05, W: o.W ?? 0.013, a: o.a ?? 0.7, b: 0.4, tilt: o.tilt ?? 1.42, tiltC: 0.2, curl: o.curl ?? 0.2, cup: 0.5, notch: o.notch ?? 0, vein: o.vein ?? 0.12, cols: [c0, c1, c2], nu: o.nu ?? 4, nv: o.nv ?? 2 },
  { n: (o.n ?? 17) - 2, L: (o.L ?? 0.05) * 0.9, W: o.W ?? 0.013, a: o.a ?? 0.7, b: 0.4, tilt: (o.tilt ?? 1.42) - 0.12, tiltC: 0.15, curl: (o.curl ?? 0.2) * 0.8, cup: 0.5, notch: o.notch ?? 0, vein: o.vein ?? 0.12, cols: [c0, c1, c2], nu: o.nu ?? 4, nv: o.nv ?? 2 }].slice(0, o.single ? 1 : 2),
  center: { ...YEL, r: o.cr ?? 0.016, h: o.ch ?? 0.009, cols: o.cc ?? YEL.cols, seg: o.single ? 6 : 10 } });
const flat5 = (c0, c1, eye, o = {}) => ({ layers: [{ n: o.n ?? 5, L: o.L ?? 0.03, W: o.W ?? 0.03, a: 1.4, b: 0.42, tilt: 1.35, tiltC: 0.2, cup: 0.2, ruffle: o.ruffle ?? 0, cols: [eye ?? shade(c0, 0.8), c0, c1], nu: 3, nv: 2, notch: o.notch ?? 0 }],
  center: { type: 'dome', r: 0.004, h: 0.003, cols: [o.cc ?? col(0xf5c628), o.cc ?? col(0xf9dc55)], seg: 5 } });

// matrix at p with +Y looking along f and +Z as close to "up" as it can be (for flowers that have a top and a bottom)
const faceM = (p, f, up = UP) => { const y = f.clone().normalize(), z = up.clone().addScaledVector(y, -up.dot(y)).normalize(), x = new V3().crossVectors(y, z); return new THREE.Matrix4().makeBasis(x, y, z).setPosition(p); };
// build something with any habit and paste it into b through a matrix (crown on a trunk, a scaled copy...)
function shifted(b, M, fn) {
  const bb = new Builder(); fn(bb); const off = b.n, c = new THREE.Color();
  for (let i = 0; i < bb.n; i++) { const j = i * 3; b.vert(bb.pos[j], bb.pos[j + 1], bb.pos[j + 2], c.setRGB(bb.col[j], bb.col[j + 1], bb.col[j + 2]), M, bb.fix[i] ? bb.nrm[j] : undefined, bb.nrm[j + 1], bb.nrm[j + 2]); }
  for (const k of bb.idx) b.idx.push(k + off);
}
// upright stems like habitStems, but the top is drawn by fn(pts, az, i)
function stems(b, r, n, P, g, fn) {
  for (let i = 0; i < n; i++) {
    const az = i * GOLD + r.range(-0.4, 0.4), spread = n > 1 ? (P.spread ?? 0.06) * Math.sqrt((i + 0.5) / n) : 0, Hh = P.H * g * r.range(0.78, 1.08), pts = mkStem(r, Hh, (P.lean ?? 0.08) * Hh * r.range(0.4, 1.3) + spread, az, P.wob ?? 0.05, 7), M0 = T(Math.cos(az) * spread * 0.5, 0, Math.sin(az) * spread * 0.5);
    for (const p of pts) p.applyMatrix4(M0);
    const sr = (P.stemR ?? 0.004) * (0.6 + 0.4 * g); b.tube(null, pts, sr, sr * 0.65, P.stemC ?? G.stem, mixc(P.stemC ?? G.stem, G.light, 0.2), 5);
    if (P.leaf) leavesAlong(b, pts, r, { ...P.leaf, L: P.leaf.L * (0.5 + 0.5 * g), W: P.leaf.W * (0.5 + 0.5 * g), n: Math.max(1, Math.round(P.leaf.n * g)) });
    fn(pts, az, i);
  }
}
// flowers on little stalks over the dome of a bush: fn(tip, dir, i, az)
function domeFlowers(b, r, n, R, Hh, P, fn) {
  for (let i = 0; i < n; i++) {
    const az = i * GOLD * 1.3 + r(), f = (i + 0.5) / n, el = lerp(P.el0 ?? 0.15, P.el1 ?? 1.05, Math.sqrt(f)), len = lerp(Hh, Math.hypot(R, Hh * 0.6), el / 1.1) * (1 + (P.stalk ?? 0.08));
    const d = new V3(Math.cos(az) * Math.sin(el), Math.cos(el), Math.sin(az) * Math.sin(el)), tip = d.clone().multiplyScalar(len); tip.x = clamp(tip.x, -R * 1.1, R * 1.1); tip.z = clamp(tip.z, -R * 1.1, R * 1.1);
    if (P.stem !== false) b.tube(null, bez(new V3(0, 0, 0), new V3(tip.x * 0.3, tip.y * 0.8, tip.z * 0.3), tip, 4), 0.0025, 0.0015, P.stemC ?? G.stem, P.stemC ?? G.stem, 3);
    fn(tip, d.clone().lerp(UP, P.up ?? 0.45).normalize(), i, az);
  }
}
// feathery plume around the top part of a stem
function plume(b, r, pts, t0, P) {
  for (let i = 0; i < P.n; i++) {
    const f = (i + 0.5) / P.n, { p, d } = polyAt(pts, lerp(t0, 1, f)), rad = P.R * Math.pow(Math.sin(Math.PI * Math.pow(f, P.skew ?? 0.5)), 0.8) + 0.002, c = jitterc(mixc(P.cols[0], P.cols[1], f * 0.8 + r() * 0.2), r, 0.04);
    b.card(mul(frame(p, d), RY(i * GOLD), T(0, 0, rad * 0.3), RX(P.tilt ?? 0.7)), P.w, rad + P.len, shade(c, 0.75), mixc(c, W, P.white ?? 0.2), 0, 0.5, 0.86, 0.3);
  }
}
const trumpet = (c0, c1, throat, s = 1, lobes = 5, lite = false) => (b, M, r, open) => { const o = lerp(0.35, 1, open), k = s * r.range(0.9, 1.1);
  b.lathe(M, (lite ? [[0.004, 0], [0.011 * o, 0.032], [0.041 * o, 0.045]] : [[0.004, 0], [0.006, 0.02], [0.012 * o, 0.034], [0.03 * o, 0.043], [0.041 * o, 0.045]]).map(([x, y]) => [x * k, y * k]), null, null, lobes * 3, (t, c) => { if (t < 0.5) c.copy(throat).lerp(c0, t * 2); else c.copy(c0).lerp(c1, t * 2 - 1); }, 0.1, lobes); };
const bellF = (b, M, c0, c1, s) => b.lathe(mul(M, RX(Math.PI)), [[s * 0.15, 0], [s * 0.3, s * 0.4], [s * 0.34, s * 0.85], [s * 0.5, s * 1.05]], c0, c1, 6, null, 0.12, 5);
// orchid flower: +Y of M looks out of the face, +Z is up (dorsal sepal), the lip hangs towards -Z. P: sepal [L, W], petal [L, W], cols, sepalC, lip(Ml, k, open)
function orchid(b, M, r, P, open) {
  const k = (P.k ?? 1) * lerp(0.45, 1, open), tl = lerp(0.2, P.flat ?? 1.45, open), jc = (c) => jitterc(c, r, 0.025);
  const pet = (az, L, Wd, cols, o = {}) => b.petal(mul(M, RY(az), T(0, 0, 0.002 * k), RX(tl + (o.dt ?? 0))), { L: L * k, W: Wd * k, a: o.a ?? 1.1, b: o.b ?? 0.5, cup: o.cup ?? 0.2, curl: o.curl ?? 0.1, ruffle: o.ruffle ?? 0, rf: 3, phase: r() * 6, vein: P.vein ?? 0.1, nu: 4, nv: 3, cols: cols.map(jc) });
  const [sL, sW] = P.sepal, [pL, pW] = P.petal, sc = P.sepalC ?? P.cols, sa = P.sepalAz ?? 2.2, pa = P.petalAz ?? 1.2;
  pet(0, sL * (P.dorsal ?? 1), sW * (P.dorsalW ?? 1), P.dorsalC ?? sc, { dt: P.dorsalDt ?? 0 }); pet(sa, sL, sW, sc); pet(-sa, sL, sW, sc);
  for (const sd of [-1, 1]) pet(sd * pa, pL, pW, P.cols, { a: P.pa ?? 1.3, b: P.pb ?? 0.42, ruffle: P.ruffle ?? 0, dt: P.petalDt ?? 0, curl: P.petalCurl ?? 0.1 });
  if (P.lip) P.lip(mul(M, RY(Math.PI)), k, open);
  b.blob(mul(M, T(0, 0.004 * k, 0)), 0.0035 * k, 0.005 * k, P.colC ?? W, P.colC ?? W, 5, 3);
}
// little three-lobed lip of a moth orchid
const mothLip = (b, c, side) => (Ml, k) => { b.petal(mul(Ml, T(0, 0.002 * k, 0.002 * k), RX(0.85)), { L: 0.022 * k, W: 0.015 * k, a: 1.3, b: 0.5, cup: 0.9, curl: -0.9, cols: [col(0xf7d24a), c, shade(c, 0.85)], nu: 3, nv: 2 });
  for (const sd of [-1, 1]) b.petal(mul(Ml, RY(sd * 1.0), T(0, 0.002 * k, 0.001), RX(0.45)), { L: 0.012 * k, W: 0.01 * k, a: 1.2, b: 0.5, cup: 0.8, curl: -0.5, cols: [col(0xf7d24a), side, side], nu: 2, nv: 2 }); };
// frilly trumpet lip (cattleya and friends)
const tubeLip = (b, cT, c0, c1, s = 1) => (Ml, k, open) => { const kk = k * s, c = new THREE.Color();
  b.lathe(mul(Ml, T(0, 0.002 * kk, 0.004 * kk), RX(0.45)), [[0.004, 0], [0.008, 0.012], [0.013, 0.026], [0.02 * lerp(0.6, 1, open), 0.04], [0.032 * lerp(0.5, 1, open), 0.05]].map(([x, y]) => [x * kk, y * kk]), null, null, 12, (t, cc) => { if (t < 0.55) cc.copy(cT).lerp(c0, t / 0.55); else cc.copy(c0).lerp(c1, (t - 0.55) / 0.45); }, 0.22, 4); };
// leaves in two ranks, aerial roots and arching spikes: the body of the potted orchids
function orchidPlant(b, r, g, o, P) {
  for (let i = 0; i < P.leaf.n; i++) leaf(b, mul(RY((i % 2 ? 0 : Math.PI) + r.range(-0.35, 0.35) + i * 0.15), T(0, 0.004 * i, 0.01), RX(lerp(P.leaf.t0 ?? 0.9, P.leaf.t1 ?? 1.35, r()))), r, { L: P.leaf.L * g * r.range(0.75, 1.1), W: P.leaf.W * (0.5 + 0.5 * g), c: P.leaf.c ?? col(0x2f7a3e), a: 0.7, b: 0.45, base: 0.6, fold: 0.45, curl: P.leaf.curl ?? 0.5, nu: 5, nv: 2, tipMix: 0.1 });
  for (let i = 0; i < (P.roots ?? 4); i++) { const az = i * 1.7 + r(), L = 0.12 * g; b.tube(null, bez(new V3(0, 0.005, 0), new V3(Math.cos(az) * L, 0.03, Math.sin(az) * L), new V3(Math.cos(az) * L * 1.2, -0.05 * g, Math.sin(az) * L * 1.2), 5), 0.0035, 0.0025, col(0xa8b8a0), col(0x8aa888), 4); }
  if (o < 0) return;
  for (let s = 0; s < P.spikes; s++) { const az = s * 2.6 + r(), L = P.H * g * r.range(0.85, 1.05), dx = Math.cos(az), dz = Math.sin(az), bend = P.bend ?? 0.75, pts = bez(new V3(0, 0, 0), new V3(dx * L * 0.1, L * 0.95, dz * L * 0.1), new V3(dx * L * bend, L * lerp(1, 0.7, bend / 0.75), dz * L * bend), 10);
    b.tube(null, pts, 0.004, 0.0022, col(0x5a7a44), col(0x6a8a4a), 4);
    const side = new V3(-dz, 0, dx), nf = P.n;
    for (let k = 0; k < nf; k++) { const t = lerp(P.t0 ?? 0.5, 0.97, k / (nf - 1)), pp = polyAt(pts, t).p, sd = k % 2 ? 1 : -1, open = clamp(o * 1.5 - (k / nf) * 0.55, 0, 1);
      const f = side.clone().multiplyScalar(sd * 0.8).add(new V3(dx * 0.35, 0.15, dz * 0.35)).normalize(), q = pp.clone().addScaledVector(f, P.ped ?? 0.022);
      if (open < 0.08) { b.blob(T(q.x, q.y, q.z), 0.006, 0.008, col(0x9ab87a), P.bud ?? col(0xd8e0b0), 5, 3); continue; }
      b.tube(null, [pp, q], 0.0012, 0.001, col(0x7a9a5a), col(0x7a9a5a), 3);
      P.make(faceM(q, f), open); } }
}

export function species4(add, H) {
  const A = (d) => { const price = d.price ?? Math.round(PRICE[d.lvl] * (d.k ?? 1)); delete d.k; add({ spots: ['bed', 'pot'], grow: GROW[d.lvl], ...d, price, gift: d.gift ?? Math.round(price * 0.65) }); };

  // =====================================================================================================
  // 1. HOUSE PLANTS AND FOLIAGE
  // =====================================================================================================
  const HP = (d) => A({ spots: ['pot'], foliage: true, ...d });

  HP({ id: 'ficus_lira', name: 'Ficus-lira', lvl: 17, h: 1.25, info: 'Folhas em forma de violino: a estrela da sala.',
    build: (b, r, g) => { const Hh = 0.8 * g, pts = bez(new V3(0, 0, 0), new V3(r.range(-0.05, 0.05), Hh * 0.5, r.range(-0.05, 0.05)), new V3(0, Hh, 0), 8);
      b.tube(null, pts, (t) => (0.017 - 0.009 * t) * (0.5 + 0.5 * g), 0, col(0x6a5644), col(0x8a7a5a), 6);
      const n = Math.round(6 + 12 * g);
      for (let i = 0; i < n; i++) { const f = i / (n - 1), { p } = polyAt(pts, lerp(0.3, 1, f)), c = jitterc(mixc(col(0x1f5a2c), col(0x4a9a3c), f * f * 0.7), r, 0.03), k = (0.6 + 0.4 * g) * r.range(0.8, 1.1) * (1 - 0.4 * f * f * f);
        const M = mul(T(p.x, p.y, p.z), RY(i * GOLD), T(0, 0, 0.012), RX(lerp(1.3, 0.25, Math.pow(f, 1.5)) + r.range(-0.15, 0.15))), lo = { L: 0.3 * k, W: 0.2 * k, shape: FIDDLE, nu: 8, nv: 6, fold: 0.16, curl: 0.4, wave: 0.07, wf: 11, phase: r() * 6, col: plainC(c, col(0x6aaa4a), 0.25) };
        pleaf(b, M, lo); veins(b, M, lo, col(0xa8c86a), 5, { ang: 0.95, w: 0.022, lift: 0.0025 }); } } });

  HP({ id: 'seringueira', name: 'Seringueira', lvl: 9, h: 1.0, info: 'Ficus-elástica: folhas grossas, quase de borracha.',
    build: (b, r, g) => { const ns = g > 0.7 ? 3 : 2;
      for (let s = 0; s < ns; s++) { const az0 = s * 2.2 + r(), Hh = 0.78 * g * [1, 0.72, 0.5][s], pts = mkStem(r, Hh, 0.07 * s, az0, 0.03, 7), o0 = new V3(Math.cos(az0) * 0.03 * s, 0, Math.sin(az0) * 0.03 * s); for (const p of pts) p.add(o0);
        b.tube(null, pts, 0.011 * (0.5 + 0.5 * g), 0.005, col(0x5a4a3a), col(0x4a6a3a), 5);
        const n = Math.round((5 + 7 * g) * [1, 0.8, 0.6][s]);
        for (let i = 0; i < n; i++) { const f = i / (n - 1), { p } = polyAt(pts, lerp(0.25, 0.98, f)), c = jitterc(mixc(col(0x16361f), col(0x2c5a30), f * 0.6), r, 0.02), k = (0.55 + 0.45 * g) * r.range(0.85, 1.1) * (1 - 0.3 * f * f);
          pleaf(b, mul(T(p.x, p.y, p.z), RY(i * GOLD + s), T(0, 0, 0.01), RX(lerp(1.3, 0.5, f) + r.range(-0.15, 0.15))), { L: 0.2 * k, W: 0.105 * k, a: 0.85, b: 0.55, nu: 6, nv: 4, fold: 0.22, curl: 0.55, col: veined(c, col(0xc86a5a), 0.6, 0), back: col(0x6a2a34) }); }
        const tp = pts[7]; b.tube(null, [tp, new V3(tp.x, tp.y + 0.07 * g, tp.z)], 0.006, 0.001, col(0xc8384a), col(0xe8607a), 4); } } });

  HP({ id: 'pacova', name: 'Pacová', lvl: 7, h: 0.6, info: 'Verde lustroso da mata atlântica, com talos gordinhos.',
    build: (b, r, g) => { const n = Math.round(6 + 6 * g);
      for (let i = 0; i < n; i++) { const f = (i + 0.5) / n, k = g * r.range(0.8, 1.1) * lerp(1, 0.8, f), Lp = 0.16 * k;
        const M = mul(RY(i * GOLD + r.range(-0.2, 0.2)), T(0, 0, 0.012), RX(lerp(0.15, 0.85, f) + r.range(-0.1, 0.1)));
        b.tube(M, [new V3(0, 0, 0), new V3(0, Lp * 0.5, 0), new V3(0, Lp, 0)], (t) => 0.007 + 0.011 * Math.sin(Math.PI * Math.min(1, t * 1.15)) * k, 0, col(0x7ab85a), col(0x4a9a48), 6);
        pleaf(b, mul(M, T(0, Lp * 0.96, 0), RX(0.15)), { L: 0.32 * k, W: 0.115 * k, a: 0.8, b: 0.6, nu: 7, nv: 6, fold: 0.3, curl: 0.5, col: veined(jitterc(col(0x237a34), r, 0.03), col(0x8ad06a), 0.6, 0.12) }); } } });

  HP({ id: 'calateia', name: 'Calatéia', lvl: 8, h: 0.55, info: 'Folhas pintadas à mão, com o avesso cor de vinho.',
    build: (b, r, g) => stalks(b, r, Math.round(7 + 9 * g), { L: 0.3 * g, out: [0.12, 0.72], r: 0.003, c: col(0x7a5a6a), tilt: [0.45, 1.3] }, (M, k) => {
      const c0 = jitterc(col(0xa8d48a), r, 0.03), c1 = jitterc(col(0x1f5a30), r, 0.03);
      pleaf(b, M, { L: 0.2 * g * k, W: 0.105 * g * k, a: 0.85, b: 0.5, nu: 10, nv: 6, fold: 0.12, curl: 0.35, wave: 0.05, col: (u, q, out, i) => { const a = Math.abs(q); out.copy((i + (a > 0.5 ? 1 : 0)) % 2 ? c1 : c0); if (a > 0.95) out.copy(c1); if (a < 0.01) out.lerp(c0, 0.6); }, back: col(0x7a2a5a) }); }) });

  HP({ id: 'maranta', name: 'Maranta', lvl: 4, spots: ['pot', 'window', 'hang'], h: 0.26, info: 'Planta-rezadeira: à noite junta as folhas como mãos.',
    build: (b, r, g) => stalks(b, r, Math.round(8 + 10 * g), { L: 0.16 * g, out: [0.35, 1.05], r: 0.0025, c: col(0x8a6a5a), tilt: [0.9, 1.65] }, (M, k) => {
      const c0 = jitterc(col(0x6aa84a), r, 0.03), ce = shade(c0, 0.72), c1 = col(0x1a4226), red = col(0xe0405a), cl = col(0xc8e08a);
      const lo = { L: 0.125 * g * k, W: 0.075 * g * k, a: 0.9, b: 0.42, nu: 8, nv: 6, fold: 0.1, curl: 0.25, col: (u, q, out, i) => { const a = Math.abs(q); out.copy(c0); if (a < 0.01) out.lerp(cl, 0.5); else if (a < 0.5) { if (i % 2 && i < 8) out.copy(c1); } else if (a > 0.8) out.copy(ce); }, back: col(0x8a5a6a) };
      pleaf(b, M, lo); veins(b, M, lo, red, 6, { ang: 1.05, w: 0.03, lift: 0.0012 }); }) });

  HP({ id: 'peperomia_melancia', name: 'Peperômia-melancia', lvl: 6, spots: ['pot', 'window'], h: 0.24, thirst: 0.6, info: 'Cada folhinha é uma fatia de melancia.',
    build: (b, r, g) => stalks(b, r, Math.round(9 + 11 * g), { L: 0.15 * g, out: [0.1, 0.85], r: 0.003, c: col(0xb8324a), c0: col(0x8a2a3a), tilt: [0.9, 1.5] }, (M, k) => {
      const cd = jitterc(col(0x1f5a36), r, 0.03), cs = col(0xc8dcc8);
      pleaf(b, mul(M, T(0, -0.02 * g * k, 0)), { L: 0.085 * g * k, W: 0.07 * g * k, shape: DROP, nu: 6, nv: 8, fold: -0.1, cup: -0.25, curl: 0.5, col: (u, q, out, i, j) => { out.copy(j % 2 && u > 0.03 && u < 0.92 ? cs : cd); } }); }) });

  HP({ id: 'pilea', name: 'Pilea', lvl: 4, spots: ['pot', 'window'], h: 0.3, info: 'Planta-da-amizade: moedinhas verdes para repartir em mudas.',
    build: (b, r, g) => { const Hh = 0.12 * g; b.tube(null, [new V3(0, 0, 0), new V3(0.004, Hh * 0.5, 0), new V3(0, Hh, 0)], 0.007, 0.005, col(0x6a5a44), col(0x5a8a48), 5);
      const n = Math.round(10 + 16 * g);
      for (let i = 0; i < n; i++) { const f = i / (n - 1), az = i * GOLD, y = Hh * lerp(0.35, 1, f), el = lerp(1.75, 0.35, f) + r.range(-0.15, 0.15), L = 0.13 * g * r.range(0.75, 1.1) * lerp(1, 0.7, f), dx = Math.cos(az), dz = Math.sin(az);
        const tip = new V3(dx * Math.sin(el) * L, y + Math.cos(el) * L, dz * Math.sin(el) * L), pts = bez(new V3(0, y, 0), new V3(dx * Math.sin(el) * L * 0.5, y + Math.cos(el) * L * 0.5 + L * 0.2, dz * Math.sin(el) * L * 0.5), tip, 4);
        b.tube(null, pts, 0.0018, 0.0015, col(0x8ab868), col(0x9ac878), 3);
        const s = 0.075 * g * r.range(0.75, 1.1) * lerp(1, 0.6, f * f), c = jitterc(col(0x4fa84a), r, 0.03), cl = col(0xc8e89a);
        pleaf(b, mul(T(tip.x, tip.y, tip.z), RY(-az + Math.PI / 2), RX(lerp(1.75, 0.9, f) + r.range(-0.2, 0.2)), T(0, -s * 0.38, 0)), { L: s, W: s, shape: ROUND, nu: 8, nv: 4, fold: 0, cup: 0.25, curl: 0.15, col: (u, q, out) => { const d = Math.hypot((u - 0.38) * 2, q * ROUND(u)); out.copy(c).lerp(cl, clamp(1 - d * 3.2, 0, 0.9)); } }); } } });

  HP({ id: 'clorofito', name: 'Clorofito', lvl: 1, spots: ['hang', 'pot', 'window'], h: 0.3, info: 'Planta-aranha: solta filhotinhos pendurados em fios.',
    build: (b, r, g) => { const cg = col(0x3f9a44), cw = col(0xf4f6da);
      const tuft = (M, n, L, k) => { for (let i = 0; i < n; i++) { const c = jitterc(cg, r, 0.03); pleaf(b, mul(M, RY(i * GOLD + r.range(-0.2, 0.2)), T(0, 0, 0.004 * k), RX(lerp(0.15, 1.15, (i + 0.5) / n) + r.range(-0.1, 0.1))), { L: L * r.range(0.7, 1.1), W: 0.022 * k, a: 0.6, b: 0.4, base: 0.6, nu: 6, nv: 2, fold: 0.45, curl: 1.5, curlPow: 1.6, col: (u, q, out) => { out.copy(Math.abs(q) < 0.5 ? cw : c); } }); } };
      tuft(I4, Math.round(14 + 20 * g), 0.3 * g, 0.6 + 0.4 * g);
      if (g > 0.7) for (let i = 0; i < 5; i++) { const az = i * 1.3 + r(), L = 0.5 * g * r.range(0.6, 1), dx = Math.cos(az), dz = Math.sin(az), pts = bez(new V3(0, 0, 0), new V3(dx * 0.22, 0.22, dz * 0.22), new V3(dx * 0.26 * r.range(0.8, 1.2), -L, dz * 0.26), 8);
        b.tube(null, pts, 0.0015, 0.0012, col(0xc8c87a), col(0xd8d88a), 3); const p = pts[8];
        tuft(mul(T(p.x, p.y, p.z), RX(r.range(-0.4, 0.4))), 8, 0.09, 0.5); if (i % 2) { const q = pts[6]; tuft(T(q.x, q.y, q.z), 6, 0.06, 0.4); } } } });

  HP({ id: 'lambari', name: 'Lambari-roxo', lvl: 2, spots: ['hang', 'window', 'pot'], h: 0.25, info: 'Trapoeraba listrada de prata que cresce só de olhar.',
    build: (b, r, g) => { const cp = col(0x6a2a6a), cs = col(0xb8d0c0), cg = col(0x3a6a4a), lf = (M, k) => pleaf(b, M, { L: 0.055 * k, W: 0.028 * k, a: 0.75, b: 0.6, nu: 3, nv: 4, fold: 0.2, curl: 0.3, col: (u, q, out, i, j) => { out.copy(j === 2 ? cp : j % 2 ? cs : cg); if (u > 0.9) out.copy(cp); } });
      for (let i = 0; i < Math.round(6 + 6 * g); i++) lf(mul(RY(i * GOLD), T(0, 0.004, 0.02), RX(r.range(0.6, 1.4))), 0.8 + 0.3 * g);
      for (const tr of trails(r, Math.round(7 + 6 * g), { L: 0.6 * g, R: 0.11, up: 0.04 })) { b.tube(null, tr.pts, 0.0018, 0.0014, col(0x8a5a8a), col(0x7a4a7a), 3); vineLeaves(b, r, tr, 15, { pet: 0.004 }, (M) => lf(M, r.range(0.8, 1.15))); } } });

  HP({ id: 'dinheiro_em_penca', name: 'Dinheiro-em-penca', lvl: 1, spots: ['hang', 'pot', 'window'], h: 0.2, info: 'Dizem que, quanto mais cheia, mais fartura em casa.',
    build: (b, r, g) => { basalLeaves(b, r, { n: Math.round(30 + 40 * g), L: 0.03, W: 0.018, c: col(0x5aaa44), a: 0.9, b: 0.6, tilt: 0.9, r: 0.03, nu: 2, nv: 1, fold: 0.1 });
      habitCascade(b, r, { stems: 24, L: 0.42, up: 0.2, out: 0.5, drop: 1.5, upFall: 0.4, stemC: col(0x8a5a7a), stemR: 0.0012, leaf: { n: 26, L: 0.024, W: 0.018, c: col(0x5aaa44), tip: col(0x9a6a9a), tipMix: 0.25, a: 0.9, b: 0.6, nu: 2, nv: 1, fold: 0.1 } }, g, -1); } });

  HP({ id: 'filodendro_coracao', name: 'Filodendro-coração', lvl: 3, spots: ['hang', 'pot', 'window'], h: 0.3, info: 'Corações de verde fundo, um atrás do outro.',
    build: (b, r, g) => { const lf = (M, k, young) => { const c = jitterc(young ? col(0x7a8a3a) : col(0x1f6a34), r, 0.03); pleaf(b, M, { L: 0.09 * k, W: 0.072 * k, shape: HEART, nu: 5, nv: 4, fold: 0.22, curl: 0.35, col: veined(c, young ? col(0xc8a05a) : col(0x6ab858), 0.4, 0.08) }); };
      for (let i = 0; i < Math.round(6 + 5 * g); i++) lf(mul(RY(i * GOLD), T(0, 0.006, 0.025), RX(r.range(0.5, 1.3))), 0.8 + 0.3 * g, false);
      for (const tr of trails(r, Math.round(5 + 5 * g), { L: 0.72 * g, R: 0.11, up: 0.05 })) { b.tube(null, tr.pts, 0.0018, 0.0014, col(0x5a7a44), col(0x7a8a4a), 3); vineLeaves(b, r, tr, 11, { pet: 0.022, petC: col(0x6a8a4a) }, (M, t) => lf(M, r.range(0.8, 1.15) * (t > 0.9 ? 0.7 : 1), t > 0.9)); } } });

  HP({ id: 'monstera_adansonii', name: 'Monstera-adansonii', lvl: 14, spots: ['hang', 'pot'], h: 0.35, info: 'Queijo-suíço: mais furo do que folha.',
    build: (b, r, g) => { const lf = (M, k) => { const c = jitterc(col(0x2a8a3c), r, 0.03); pleaf(b, M, { L: 0.13 * k, W: 0.085 * k, shape: HEART, nu: 7, nv: 6, fold: 0.15, curl: 0.4, wave: 0.04, col: veined(c, col(0x8ad06a), 0.45, 0), hole: (i, j) => (i === 1 || i === 3 || i === 5) && (j === 1 || j === 4) }); };
      for (let i = 0; i < Math.round(4 + 4 * g); i++) lf(mul(RY(i * GOLD), T(0, 0.01, 0.03), RX(r.range(0.6, 1.3))), 0.8 + 0.3 * g);
      for (const tr of trails(r, Math.round(5 + 5 * g), { L: 0.75 * g, R: 0.11, up: 0.05 })) { b.tube(null, tr.pts, 0.0022, 0.0016, col(0x5a7a44), col(0x6a8a4a), 3); vineLeaves(b, r, tr, 9, { pet: 0.03, petC: col(0x6a9a4a) }, (M) => lf(M, r.range(0.75, 1.15))); } } });

  HP({ id: 'filodendro_xanadu', name: 'Filodendro-xanadu', lvl: 11, spots: ['pot', 'bed'], h: 0.6, info: 'Uma moita de folhas recortadas, sempre arrumadinha.',
    build: (b, r, g) => stalks(b, r, Math.round(8 + 10 * g), { L: 0.32 * g, out: [0.1, 0.8], r: 0.004, c: col(0x5a8a48), c0: col(0x8a5a4a), tilt: [0.5, 1.3] }, (M, k) =>
      lobed(b, M, r, 0.22 * g * k, { c: jitterc(col(0x2a7a34), r, 0.03), pairs: 7, len: 0.25, wr: 0.15, mid: 0.36, curl: 0.45, ang: [1.3, 0.7], outline: (t) => Math.sin(Math.PI * Math.pow(t + 0.08, 0.75)) * 0.8 + 0.3 })) });

  HP({ id: 'singonio', name: 'Singônio', lvl: 3, spots: ['pot', 'hang', 'window'], h: 0.36, info: 'Folhas em ponta de flecha, com o miolo cor de creme.',
    build: (b, r, g) => stalks(b, r, Math.round(8 + 10 * g), { L: 0.24 * g, out: [0.1, 0.9], r: 0.003, c: col(0x7ab068), tilt: [1.0, 1.9] }, (M, k) => {
      const c = jitterc(col(0x4a9a48), r, 0.03), cw = col(0xe6f0c0), s = 0.12 * g * k, cf = (u, q, out) => { out.copy(c).lerp(cw, clamp(0.8 - Math.abs(q) * 1.6 - u * 0.5, 0, 0.75)); };
      pleaf(b, M, { L: s, W: s * 0.62, shape: ARROW, nu: 6, nv: 4, fold: 0.25, curl: 0.4, col: cf });
      for (const sd of [-1, 1]) pleaf(b, mul(M, RZ(sd * 2.25)), { L: s * 0.42, W: s * 0.3, a: 0.7, b: 0.6, base: 0.8, nu: 3, nv: 2, fold: 0.2, curl: 0.2, col: cf }); }) });

  HP({ id: 'alocasia', name: 'Alocásia', lvl: 16, h: 0.6, info: 'Escudos escuros riscados de nervuras brancas.',
    build: (b, r, g) => stalks(b, r, Math.round(4 + 5 * g), { L: 0.42 * g, out: [0.08, 0.6], r: 0.005, c: col(0x7a9a6a), c0: col(0x5a6a4a), tilt: [1.9, 2.5] }, (M, k) => {
      const c = jitterc(col(0x163a2a), r, 0.02), cw = col(0xe8f0e0), s = 0.27 * g * k, cf = (u, q, out) => { out.copy(c); if (Math.abs(q) > 0.97) out.lerp(cw, 0.75); }, lo = { L: s, W: s * 0.5, shape: ARROW, nu: 10, nv: 8, fold: 0.12, curl: 0.2, wave: 0.05, wf: 30, col: cf, back: col(0x5a2a4a) };
      pleaf(b, M, lo); veins(b, M, lo, cw, 5, { ang: 1.1, w: 0.04, lift: 0.002, t0: 0.1, span: 0.7 });
      for (const sd of [-1, 1]) pleaf(b, mul(M, RZ(sd * 2.55)), { L: s * 0.36, W: s * 0.26, a: 0.7, b: 0.6, base: 0.9, nu: 4, nv: 4, fold: 0.1, curl: 0.15, col: cf, back: col(0x5a2a4a) }); }) });

  A({ id: 'begonia_maculata', name: 'Begônia-maculata', lvl: 14, spots: ['pot'], h: 0.7, info: 'Asas de anjo com bolinhas brancas e avesso vermelho.',
    build: (b, r, g, o) => { const ns = Math.round(2 + 2 * g);
      for (let s = 0; s < ns; s++) { const az0 = s * 2.4 + r(), Hh = 0.6 * g * r.range(0.7, 1.05), pts = mkStem(r, Hh, 0.12 * Hh * (s ? 1.5 : 0.4), az0, 0.04, 8);
        b.tube(null, pts, (t) => 0.006 * (1 - 0.4 * t) * (1 + 0.25 * Math.pow(Math.abs(Math.sin(t * 16)), 8)), 0, col(0x6a7a3a), col(0x8a9a4a), 5);
        const n = Math.round(3 + 5 * g);
        for (let i = 0; i < n; i++) { const f = (i + 0.5) / n, { p } = polyAt(pts, lerp(0.3, 1, f)), a2 = az0 + (i % 2 ? 1.4 : -1.4) + r.range(-0.4, 0.4), k = (0.55 + 0.45 * g) * r.range(0.8, 1.1), c = jitterc(col(0x2f5a34), r, 0.03);
          const M = mul(T(p.x, p.y, p.z), RY(-a2 + Math.PI / 2), RX(r.range(1.5, 2.1))), lo = { L: 0.19 * k, W: 0.085 * k, shape: WING, asym: (i % 2 ? 0.3 : -0.3), nu: 7, nv: 4, fold: 0.15, curl: 0.25, col: plainC(c, col(0x4a7a44), 0.3), back: col(0xa82a3a) };
          pleaf(b, M, lo); dots(b, M, lo, r, 16, col(0xf4f6f0), 0.011 * k); }
        if (o >= 0 && s < 2) { const { p } = polyAt(pts, 0.8), a2 = az0 + 2.6, L = 0.09, tip = new V3(p.x + Math.cos(a2) * L, p.y - L * 0.6, p.z + Math.sin(a2) * L);
          b.tube(null, bez(p, new V3(p.x + Math.cos(a2) * L, p.y + 0.02, p.z + Math.sin(a2) * L), tip, 4), 0.0015, 0.001, col(0xe89aa8), col(0xe89aa8), 3);
          for (let k = 0; k < 7; k++) head(b, mul(T(tip.x + r.range(-0.03, 0.03), tip.y + r.range(-0.03, 0.02), tip.z + r.range(-0.03, 0.03)), RX(r.range(1.5, 3)), RY(r() * 6)), r, { layers: [{ n: 4, L: 0.016, W: 0.014, a: 1.3, b: 0.5, tilt: 1.2, tiltC: 0.2, cup: 0.4, cols: [col(0xfbe0e6), W, W], nu: 2, nv: 2 }], center: { type: 'dome', r: 0.003, h: 0.003, cols: [col(0xf5c628), col(0xf9dc55)], seg: 5 } }, clamp(o + r.range(-0.2, 0.1), 0, 1), 1); } } } });

  HP({ id: 'begonia_rex', name: 'Begônia-rex', lvl: 12, spots: ['pot', 'window'], h: 0.3, info: 'Folhas de veludo com redemoinhos de prata.',
    build: (b, r, g) => stalks(b, r, Math.round(7 + 8 * g), { L: 0.16 * g, out: [0.2, 1.0], r: 0.004, c: col(0xb84a5a), c0: col(0x8a3a4a), tilt: [1.0, 1.6] }, (M, k, i) => {
      const cd = jitterc(col(0x3a1a34), r, 0.03), cs = jitterc(col(0x9ab0a8), r, 0.02), cm = col(0xa83a6a);
      pleaf(b, M, { L: 0.15 * g * k, W: 0.11 * g * k, shape: WING, asym: i % 2 ? 0.25 : -0.25, nu: 8, nv: 6, fold: 0.1, curl: 0.4, wave: 0.09, wf: 22, col: (u, q, out) => { const a = Math.max(Math.abs(q), Math.abs(u - 0.4) * 1.7); out.copy(a < 0.36 ? cd : a < 0.7 ? cs : cd); if (a >= 0.36 && a < 0.5) out.lerp(cm, 0.45); else if (a > 0.9) out.lerp(cm, 0.4); }, back: col(0x8a2a3a) }); }) });

  HP({ id: 'croton', name: 'Cróton', lvl: 9, spots: ['pot', 'bed'], h: 0.7, info: 'Um carnaval inteiro numa folha só.',
    build: (b, r, g) => { const pal = [col(0xf2c81e), col(0xf2801e), col(0xd8282e), col(0xe84a6a)];
      for (let s = 0; s < 4; s++) { const az0 = s * 2.0 + r(), Hh = 0.5 * g * r.range(0.6, 1.05), pts = mkStem(r, Hh, 0.25 * Hh * (s ? 1 : 0.2), az0, 0.04, 6); b.tube(null, pts, 0.007 * (0.5 + 0.5 * g), 0.004, col(0x6a5a44), col(0x7a8a4a), 5);
        const n = Math.round(5 + 8 * g);
        for (let i = 0; i < n; i++) { const f = i / (n - 1), { p } = polyAt(pts, lerp(0.3, 1, f)), old = 1 - f + r.range(-0.25, 0.25) > 0.55, base = old ? mixc(col(0x3a2a22), col(0x7a1e2a), r()) : col(0x2f6a30), vc = old ? r.pick([pal[2], pal[3], pal[1]]) : r.pick([pal[0], pal[0], pal[1]]), k = (0.55 + 0.45 * g) * r.range(0.8, 1.15);
          const M = mul(T(p.x, p.y, p.z), RY(i * GOLD + s), T(0, 0, 0.008), RX(lerp(1.5, 0.45, f) + r.range(-0.15, 0.15))), lo = { L: 0.2 * k, W: 0.08 * k, a: 0.9, b: 0.5, nu: 6, nv: 4, fold: 0.2, curl: 0.5, wave: 0.05, phase: r() * 6,
            col: (u, q, out, i2) => { const a = Math.abs(q); out.copy(base); if (a > 0.9) out.lerp(vc, 0.45); else if (a > 0.01 && r() < 0.3) out.lerp(old ? vc : pal[0], 0.7); } };
          pleaf(b, M, lo); veins(b, M, lo, vc, 5, { ang: 0.95, w: 0.07, mid: 2, lift: 0.0015 }); } } } });

  HP({ id: 'coleus', name: 'Cóleus', lvl: 3, spots: ['pot', 'bed', 'window'], h: 0.4, info: 'Coração-magoado: veludo em cores de fantasia.',
    build: (b, r, g) => { const [cc, cm, ce] = r.pick([[0xe8388a, 0x6a1430, 0x8ac83a], [0xf2d84a, 0xb82a3a, 0x4a9a3a], [0xf0507a, 0x3a1a2a, 0x5a2a3a], [0xfae6a0, 0x5aa83a, 0x3a8a34]]).map(col);
      for (let s = 0; s < Math.round(4 + 3 * g); s++) { const az0 = s * GOLD, Hh = 0.3 * g * r.range(0.7, 1.05), pts = mkStem(r, Hh, 0.5 * Hh * Math.sqrt(s / 6), az0, 0.04, 5); b.tube(null, pts, 0.004, 0.003, col(0x7a4a5a), col(0x8a6a5a), 4);
        const np = Math.round(2 + 3 * g);
        for (let i = 0; i < np; i++) { const f = (i + 1) / np, { p } = polyAt(pts, lerp(0.3, 1, f)), k = (0.5 + 0.5 * g) * r.range(0.85, 1.1) * lerp(1.1, 0.7, f);
          for (const sd of [0, Math.PI]) pleaf(b, mul(T(p.x, p.y, p.z), RY(az0 + i * Math.PI / 2 + sd), T(0, 0, 0.004), RX(lerp(1.35, 0.8, f) + r.range(-0.15, 0.15))), { L: 0.1 * k, W: 0.07 * k, a: 0.75, b: 0.6, nu: 6, nv: 6, fold: 0.15, curl: 0.5, wave: 0.12, wf: 26,
            col: (u, q, out) => { const a = Math.max(Math.abs(q), Math.abs(u - 0.45) * 1.9); out.copy(a < 0.4 ? cc : a < 0.75 ? cm : ce); } }); } } } });

  HP({ id: 'aglaonema', name: 'Aglaonema', lvl: 6, h: 0.45, info: 'Café-de-salão: enfeita até o cantinho mais sombreado.',
    build: (b, r, g) => { const [cd, cl, pet] = r.pick([[0x1f5a30, 0xc0d8c0, 0x9ab88a], [0x2a6a34, 0xf07a9a, 0xf4a0b4]]).map(col);
      stalks(b, r, Math.round(8 + 9 * g), { L: 0.2 * g, out: [0.1, 0.8], r: 0.005, c: pet, tilt: [0.5, 1.45] }, (M, k) => { const c = jitterc(cd, r, 0.03);
        pleaf(b, M, { L: 0.2 * g * k, W: 0.078 * g * k, a: 0.8, b: 0.6, nu: 8, nv: 6, fold: 0.25, curl: 0.5, col: (u, q, out, i) => { const a = Math.abs(q); out.copy(c); if (a < 0.01) out.lerp(cl, 0.9); else if (a < 0.4) out.lerp(cl, i % 2 ? 0.9 : 0.55); else if (a < 0.8) out.lerp(cl, i % 2 ? 0.5 : 0.05); } }); }); } });

  HP({ id: 'comigo_ninguem_pode', name: 'Comigo-ninguém-pode', lvl: 5, h: 0.8, info: 'Guarda a porta contra mau-olhado (e não é de morder).',
    build: (b, r, g) => { for (let s = 0; s < 3; s++) { const az0 = s * 2.1 + r(), Hh = 0.5 * g * [1, 0.7, 0.45][s], pts = mkStem(r, Hh, 0.1 * s, az0, 0.03, 6), o0 = new V3(Math.cos(az0) * 0.035 * s, 0, Math.sin(az0) * 0.035 * s); for (const p of pts) p.add(o0);
        b.tube(null, pts, (t) => 0.012 * (0.5 + 0.5 * g) * (1 + 0.12 * Math.pow(Math.abs(Math.sin(t * 20)), 6)), 0, col(0x4a7a3a), col(0x6a9a4a), 6);
        const n = Math.round((4 + 5 * g) * [1, 0.8, 0.7][s]);
        for (let i = 0; i < n; i++) { const f = i / (n - 1), { p } = polyAt(pts, lerp(0.45, 1, f)), k = (0.5 + 0.5 * g) * r.range(0.8, 1.1), tl = lerp(1.35, 0.3, f) + r.range(-0.1, 0.1), c = jitterc(col(0x2a7a34), r, 0.03), cw = jitterc(col(0xd4e294), r, 0.02);
          const M = mul(T(p.x, p.y, p.z), RY(i * GOLD + s), RX(tl * 0.7)); b.tube(M, [new V3(0, 0, 0), new V3(0, 0.1 * k, 0)], 0.005, 0.003, col(0x8ab86a), col(0x8ab86a), 4);
          pleaf(b, mul(M, T(0, 0.1 * k, 0), RX(tl * 0.5)), { L: 0.26 * k, W: 0.12 * k, a: 0.8, b: 0.55, nu: 8, nv: 6, fold: 0.22, curl: 0.6, col: (u, q, out) => { const a = Math.abs(q); out.copy(c); if (a < 0.6 && u > 0.08 && u < 0.9) { out.copy(cw); if (r() < 0.35) out.lerp(c, 0.8); else if (a < 0.01) out.lerp(c, 0.3); } } }); } } } });

  HP({ id: 'dracena', name: 'Dracena', lvl: 8, h: 1.0, info: 'Pau-d’água: três troncos em escadinha e um chafariz de folhas.',
    build: (b, r, g) => { const hs = [0.62, 0.4, 0.2], kr = 0.6 + 0.4 * g;
      for (let s = 0; s < 3; s++) { const az0 = s * 2.2 + 0.5, x = Math.cos(az0) * 0.04, z = Math.sin(az0) * 0.04, Hh = hs[s] * g;
        b.tube(null, [new V3(x, 0, z), new V3(x + r.range(-0.01, 0.01), Hh * 0.5, z), new V3(x, Hh, z)], (t) => 0.02 * kr, 0, col(0x7a6a52), col(0x9a8a6a), 7);
        b.blob(T(x, Hh, z), 0.02 * kr, 0.006, col(0xb8a880), col(0xc8b890), 7, 3);
        const n = Math.round(10 + 10 * g), top = new V3(x + Math.cos(az0) * 0.012, Hh - 0.02, z + Math.sin(az0) * 0.012);
        b.tube(null, [top, new V3(top.x, top.y + 0.07 * g, top.z)], 0.008, 0.006, col(0x5a8a44), col(0x6a9a4a), 5);
        for (let i = 0; i < n; i++) { const f = (i + 0.5) / n, c = jitterc(col(0x256a30), r, 0.03), cy = col(0xcfdc5a), cm = mixc(cy, c, 0.7);
          pleaf(b, mul(T(top.x, top.y + 0.02 + 0.05 * g * (1 - f), top.z), RY(i * GOLD), T(0, 0, 0.006), RX(lerp(0.2, 1.45, f) + r.range(-0.1, 0.1))), { L: 0.3 * (0.5 + 0.5 * g) * r.range(0.8, 1.1), W: 0.05 * kr, a: 0.7, b: 0.4, base: 0.5, nu: 7, nv: 4, fold: 0.35, curl: 1.3, curlPow: 1.6, col: (u, q, out) => { const a = Math.abs(q); out.copy(a < 0.01 ? cy : a < 0.6 ? cm : c); } }); } } } });

  HP({ id: 'iuca', name: 'Iúca', lvl: 11, spots: ['pot', 'bed'], h: 1.0, thirst: 0.4, info: 'Tronco de elefante e penachos de espadas.',
    build: (b, r, g) => { const Hh = 0.5 * g, bark = col(0x8a7a62), kr = 0.6 + 0.4 * g;
      b.tube(null, [new V3(0, 0, 0), new V3(0.01, Hh * 0.5, 0), new V3(0, Hh, 0)], (t) => 0.035 * kr * (1 + 0.7 * Math.pow(1 - t, 4)), 0, shade(bark, 0.8), bark, 8);
      const headAt = (p, k) => { const n = Math.round((18 + 26 * g) * k); for (let i = 0; i < n; i++) { const f = (i + 0.5) / n, c = jitterc(col(0x4a8058), r, 0.03);
          b.petal(mul(T(p.x, p.y, p.z), RY(i * GOLD), T(0, 0, 0.008), RX(lerp(0.1, 1.9, f) + r.range(-0.1, 0.1))), { L: 0.3 * (0.5 + 0.5 * g) * k * r.range(0.8, 1.1), W: 0.026, a: 0.6, b: 0.35, base: 0.7, fold: 0.5, curl: 0.15, nu: 3, nv: 2, vein: 0.2, cols: [shade(c, 0.7), c, mixc(c, col(0xb8c8a0), 0.3)] }); } };
      headAt(new V3(0, Hh + 0.03, 0), 1);
      if (g > 0.6) for (let s = 0; s < 2; s++) { const az = s * 3.3 + 1, y = Hh * (0.55 + s * 0.2), tip = new V3(Math.cos(az) * 0.12, y + 0.12, Math.sin(az) * 0.12); b.tube(null, bez(new V3(0, y - 0.03, 0), new V3(Math.cos(az) * 0.1, y, Math.sin(az) * 0.1), tip, 4), 0.02, 0.016, bark, bark, 6); headAt(tip, 0.7); } } });

  HP({ id: 'pata_de_elefante', name: 'Pata-de-elefante', lvl: 13, h: 0.85, thirst: 0.35, info: 'Guarda água na barriga e solta uma cabeleira cacheada.',
    build: (b, r, g) => { const k = 0.5 + 0.5 * g, Hh = 0.36 * g, bark = col(0x8a7460);
      b.lathe(null, [[0.05, -0.01], [0.105, 0.012], [0.115, 0.05], [0.09, 0.1], [0.05, 0.16], [0.032, 0.24], [0.026, 0.36]].map(([x, y]) => [x * k, y * g]), shade(bark, 0.75), bark, 12, null, 0.05, 5);
      const n = Math.round(30 + 50 * g);
      for (let i = 0; i < n; i++) { const f = (i + 0.5) / n, c = jitterc(col(0x3f8a44), r, 0.04);
        b.petal(mul(T(0, Hh, 0), RY(i * GOLD), T(0, 0, 0.012 * k), RX(lerp(0.05, 1.3, f) + r.range(-0.1, 0.1))), { L: 0.48 * g * r.range(0.7, 1.1), W: 0.009, a: 0.6, b: 0.3, base: 0.8, fold: 0.4, curl: lerp(2.2, 3.3, r()), curlPow: 1.5, twist: r.range(-1.5, 1.5), nu: 8, nv: 1, cols: [shade(c, 0.7), c, mixc(c, G.light, 0.3)] }); } } });

  HP({ id: 'rafis', name: 'Palmeira-ráfis', lvl: 13, h: 1.1, info: 'Leques de dedos largos em hastes de bambu.',
    build: (b, r, g) => { const nc = Math.round(3 + 3 * g), kk = 0.5 + 0.5 * g;
      for (let s = 0; s < nc; s++) { const az0 = s * GOLD, d = 0.03 + 0.02 * s, Hh = 0.75 * g * r.range(0.55, 1.05), pts = mkStem(r, Hh, 0.03, az0, 0.02, 6); for (const p of pts) { p.x += Math.cos(az0) * d; p.z += Math.sin(az0) * d; }
        b.tube(null, pts, 0.009, 0.006, col(0x5a4634), col(0x6a7a44), 5);
        const nl = Math.round(2 + 3 * g);
        for (let i = 0; i < nl; i++) { const f = (i + 0.5) / nl, { p } = polyAt(pts, lerp(0.45, 1, f)), az = az0 + i * 2.1 + r(), L = 0.2 * kk * r.range(0.8, 1.1), dx = Math.cos(az), dz = Math.sin(az), el = lerp(1.1, 0.35, f);
          const tip = new V3(p.x + dx * Math.sin(el) * L, p.y + Math.cos(el) * L, p.z + dz * Math.sin(el) * L); b.tube(null, [p, p.clone().lerp(tip, 0.5).add(new V3(0, L * 0.08, 0)), tip], 0.003, 0.002, col(0x4a7a3a), col(0x4a7a3a), 4);
          const M = mul(T(tip.x, tip.y, tip.z), RY(-az + Math.PI / 2), RX(el + 0.35)), nf = Math.round(5 + 3 * g);
          for (let j = 0; j < nf; j++) { const ff = j / (nf - 1) - 0.5, c = jitterc(col(0x1f6a30), r, 0.03), d2 = shade(c, 0.7); pleaf(b, mul(M, RZ(-ff * 2.5), RX(0.12)), { L: 0.2 * kk * (1 - Math.abs(ff) * 0.3) * r.range(0.9, 1.08), W: 0.036, shape: BLUNT, nu: 4, nv: 2, fold: 0.35, curl: 0.5, col: (u, q, out) => out.copy(Math.abs(q) < 0.01 ? d2 : c) }); } } } } });

  HP({ id: 'chamaedorea', name: 'Palmeira-camedórea', lvl: 9, h: 0.8, info: 'Uma palmeirinha de salão, delicada e paciente.',
    build: (b, r, g) => { for (let i = 0; i < 6; i++) b.tube(null, mkStem(r, 0.32 * g * r.range(0.6, 1), 0.06, i * 1.1, 0.03, 4), 0.005, 0.004, col(0x4a8a44), col(0x5a9a4a), 4);
      habitCascade(b, r, { stems: 13, L: 0.68, up: 1.2, out: 0.7, drop: 0.2, upFall: 0.3, stemC: col(0x5a9a48), stemR: 0.003, frond: { pairs: 10, L: 0.13, wr: 0.2, c: col(0x3a9040) } }, g, -1); } });

  HP({ id: 'bambu_da_sorte', name: 'Bambu-da-sorte', lvl: 2, spots: ['pot', 'window'], h: 0.5, info: 'Amarradinho com fita vermelha para chamar boa sorte.',
    build: (b, r, g) => { const n = Math.round(4 + 3 * g), cg = col(0x5aa84a);
      for (let s = 0; s < n; s++) { const az = s * GOLD, d = s ? 0.016 + 0.002 * s : 0, x = Math.cos(az) * d, z = Math.sin(az) * d, Hh = g * lerp(0.42, 0.18, s / n) * r.range(0.9, 1.1), spiral = s === 0 && g > 0.8, pts = [];
        for (let k = 0; k <= 14; k++) { const t = k / 14, a = t * 9, rad = spiral ? 0.022 * clamp((t - 0.45) * 4, 0, 1) : 0; pts.push(new V3(x + Math.cos(a) * rad, t * Hh * (spiral ? 1.15 : 1), z + Math.sin(a) * rad)); }
        b.tube(null, pts, (t) => 0.0075 * (1 + 0.22 * Math.pow(Math.abs(Math.cos(t * Math.PI * 4.5)), 10)), 0, shade(cg, 0.8), cg, 6);
        const top = pts[14]; b.blob(T(top.x, top.y, top.z), 0.0075, 0.004, col(0xd8d8a0), col(0xe8e8b0), 6, 3);
        for (let j = 0; j < 2; j++) { const { p } = polyAt(pts, 1 - j * 0.22), a2 = az + j * 2.5 + r(), sh = [p, new V3(p.x + Math.cos(a2) * 0.02, p.y + 0.03, p.z + Math.sin(a2) * 0.02), new V3(p.x + Math.cos(a2) * 0.025, p.y + 0.07 * g, p.z + Math.sin(a2) * 0.025)]; b.tube(null, sh, 0.003, 0.002, cg, cg, 4);
          for (let i = 0; i < 5; i++) { const q = polyAt(sh, 0.4 + i * 0.15).p; leaf(b, mul(T(q.x, q.y, q.z), RY(i * 2.2 + j + s), RX(lerp(1.2, 0.3, i / 4))), r, { L: 0.09 * (0.5 + 0.5 * g), W: 0.02, c: col(0x4a9a40), a: 0.7, b: 0.5, fold: 0.35, curl: 0.7, nu: 4, nv: 2 }); } } }
      b.lathe(T(0, 0.07 * g, 0), [[0.038, 0], [0.041, 0.008], [0.038, 0.016]], col(0xc8281e), col(0xe8402a), 10); } });

  HP({ id: 'lanca_de_sao_jorge', name: 'Lança-de-são-jorge', lvl: 7, h: 0.65, thirst: 0.3, info: 'Lanças roliças e rajadas, firmes como sentinelas.',
    build: (b, r, g) => { const n = Math.round(4 + 5 * g), cd = col(0x2f5a3a), cl = col(0x7a9a72);
      for (let i = 0; i < n; i++) { const az = i * GOLD, d = i ? 0.02 + 0.006 * i : 0, L = 0.62 * g * r.range(0.55, 1.05), R = 0.013 * (0.6 + 0.4 * g) * r.range(0.85, 1.1), ph = r() * 6, prof = [];
        for (let k = 0; k <= 12; k++) { const t = k / 12; prof.push([R * (0.75 + 0.25 * Math.sin(Math.min(1, t * 4) * 1.57)) * Math.pow(1 - Math.pow(t, 3), 0.8) + 0.0004, t * L]); }
        b.lathe(mul(T(Math.cos(az) * d, 0, Math.sin(az) * d), RY(-az + Math.PI / 2), RX(r.range(0.03, 0.2) * Math.min(1, i))), prof, null, null, 6, (t, c) => c.copy(cd).lerp(cl, 0.5 + 0.5 * Math.sin(t * 34 + ph + Math.sin(t * 9) * 2)), 0, 1); } } });

  HP({ id: 'babosa', name: 'Babosa', lvl: 2, spots: ['pot', 'window', 'bed'], h: 0.35, thirst: 0.35, info: 'Aloe vera: a farmacinha da vovó no parapeito.',
    build: (b, r, g) => { const n = Math.round(7 + 9 * g), cl = col(0xd8ecc8);
      for (let i = 0; i < n; i++) { const f = (i + 0.5) / n, c = jitterc(col(0x5a9a70), r, 0.03), cb = shade(c, 0.75), L = 0.3 * g * r.range(0.75, 1.1) * lerp(0.6, 1, Math.sqrt(f));
        pleaf(b, mul(RY(i * GOLD), T(0, 0, 0.012), RX(lerp(0.1, 1.05, f) + r.range(-0.08, 0.08))), { L, W: 0.052 * (0.6 + 0.4 * g), a: 0.5, b: 0.6, base: 0.85, nu: 7, nv: 4, fold: 0.1, cup: 0.5, curl: -0.45, curlPow: 2, backCup: -2.2, backOff: 0.0005,
          col: (u, q, out) => { out.copy(c).multiplyScalar(0.8 + 0.2 * u); if (Math.abs(q) > 0.95) out.lerp(cl, 0.7); else if (r() < 0.16) out.lerp(cl, 0.55); }, back: (u, q, out) => { out.copy(cb); if (Math.abs(q) > 0.95) out.lerp(cl, 0.7); } }); } } });

  A({ id: 'echeveria', name: 'Rosa-de-pedra', lvl: 5, spots: ['pot', 'window'], h: 0.16, thirst: 0.4, info: 'Echeveria: uma rosa que não murcha, em tons de lilás.',
    build: (b, r, g, o) => { const [c0, c1, tp] = r.pick([[0x8a8ab8, 0xc0a8d0, 0xe890b8], [0x7aa8a8, 0xa8d0c8, 0xd84a5a], [0x9a7a9a, 0xd0a8c0, 0xf0b0c8]]).map(col);
      const sp = { layers: [{ ...H.succulent(c0, c1, tp).layers[0], n: 38, W: [0.014, 0.048], a: 1.45, b: 0.6, tilt: [0.12, 1.12], tiltC: [0.12, 1.12] }] };
      head(b, T(0, 0.012 * g, 0), r, sp, 1, 1.75 * g);
      for (let i = 0; i < 4; i++) { const a = i * 1.7 + r(); head(b, mul(T(Math.cos(a) * 0.105 * g, 0.004, Math.sin(a) * 0.105 * g), RY(-a + Math.PI / 2), RX(0.35)), r, { layers: [{ ...sp.layers[0], n: 16 }] }, 1, 0.55 * g); }
      if (o > 0.2) { const pts = bez(new V3(0.02, 0.02, 0), new V3(0.06, 0.2, 0.02), new V3(0.16, 0.2, 0.05), 7); b.tube(null, pts, 0.003, 0.002, col(0xe8a0a0), col(0xf0b08a), 4);
        for (let k = 0; k < 7; k++) { const { p } = polyAt(pts, 0.5 + k * 0.075), s = 0.02 * lerp(0.5, 1, o); b.lathe(mul(T(p.x, p.y, p.z), RY(k * 2.4), RX(2.3)), [[s * 0.2, 0], [s * 0.42, s * 0.5], [s * 0.36, s], [s * 0.5, s * 1.2]], col(0xf07a6a), col(0xf7c84a), 5, null, 0.15, 5); } } } });

  HP({ id: 'planta_jade', name: 'Planta-jade', lvl: 7, spots: ['pot', 'window'], h: 0.45, thirst: 0.4, info: 'Árvore-da-amizade: folhas gordinhas de pedra preciosa.',
    build: (b, r, g) => { const bark = col(0x7a6a52), kk = 0.6 + 0.4 * g;
      const br = (p, d, L, R, depth) => { const q = p.clone().addScaledVector(d, L); b.tube(null, [p, p.clone().lerp(q, 0.5).add(new V3(r.range(-0.1, 0.1) * L, 0, r.range(-0.1, 0.1) * L)), q], R, R * 0.7, depth > 1 ? bark : col(0x6a8a50), depth > 0 ? bark : col(0x6a9a54), 5);
        if (depth <= 0) { for (let i = 0; i < 3; i++) for (const sd of [0, Math.PI]) leaf(b, mul(frame(p.clone().lerp(q, 0.45 + i * 0.27), d), RY(i * 1.57 + sd), T(0, 0, R * 0.6), RX(lerp(1.3, 0.6, i / 2))), r, { L: 0.05 * kk, W: 0.036 * kk, c: col(0x3f9a50), tip: col(0xc84a4a), tipMix: 0.35, a: 1.15, b: 0.6, cup: 0.8, fold: 0, curl: -0.3, nu: 3, nv: 2 }); return; }
        for (let i = 0; i < 3; i++) { const a = i * 2.1 + r() * 1.2, sp = depth > 1 ? 0.9 : 1.1; br(q, d.clone().add(new V3(Math.cos(a) * sp, r.range(0.0, 0.4), Math.sin(a) * sp)).normalize(), L * r.range(0.6, 0.8), R * 0.62, depth - 1); } };
      br(new V3(0, 0, 0), new V3(r.range(-0.1, 0.1), 1, r.range(-0.1, 0.1)).normalize(), 0.11 * g, 0.024 * (0.5 + 0.5 * g), Math.round(1 + 2 * g)); } });

  A({ id: 'cacto_bola', name: 'Cacto-bola', lvl: 8, spots: ['pot', 'window', 'bed'], h: 0.24, thirst: 0.3, info: 'Cadeira-de-sogra: uma almofada dourada de espinhos.',
    build: (b, r, g, o) => { const gold = col(0xf2d86a);
      const ball = (M, R, ribs) => { const pts = []; for (let k = 0; k <= 10; k++) pts.push(new V3(0, R * 1.65 * k / 10, 0).applyMatrix4(M));
        ribTube(b, pts, (t) => R * Math.pow(Math.sin(Math.PI * clamp(0.07 + t * 0.9, 0, 1)), 0.6) + 0.001, ribs, 0.13, col(0x2f6a3a), col(0x6aa04a), (p, nrm, t) => { if (t > 0.93) return; const Ms = frame(p, nrm); for (let j = 0; j < 3; j++) b.card(mul(Ms, RY(j * 2.1 + t * 9), RX(0.95)), 0.004, R * 0.2, gold, mixc(gold, W, 0.4), 0, 0.6, 0.8, 0); });
        const top = new V3(0, R * 1.6, 0).applyMatrix4(M); b.blob(T(top.x, top.y, top.z), R * 0.3, R * 0.07, col(0xe8dca0), col(0xfaf4d0), 8, 3);
        return top; };
      const top = ball(I4, 0.125 * g, 18);
      if (g > 0.7) { ball(mul(T(0.13 * g, 0, 0.04), RZ(-0.25)), 0.05 * g, 12); ball(mul(T(-0.09 * g, 0, -0.1 * g), RZ(0.2)), 0.04 * g, 12); }
      if (o > 0.3) for (let i = 0; i < 6; i++) { const a = i * 1.05 + r(); head(b, mul(T(top.x + Math.cos(a) * 0.035 * g, top.y - 0.004, top.z + Math.sin(a) * 0.035 * g), RY(-a + Math.PI / 2), RX(0.3)), r, { layers: [{ n: 10, L: 0.022, W: 0.008, a: 1.0, b: 0.7, tilt: 1.0, tiltC: 0.1, cup: 0.5, cols: [col(0xf2c81e), col(0xf7d84a), col(0xfbec8a)], nu: 2, nv: 2 }], center: { type: 'dome', r: 0.005, h: 0.004, cols: [col(0xf2a81a), col(0xf7c84a)], seg: 5 } }, o, 1); } } });

  A({ id: 'mandacaru', name: 'Mandacaru', lvl: 16, spots: ['pot', 'bed'], h: 1.1, thirst: 0.3, info: 'Quando floresce na seca, é sinal de que a chuva vem.',
    build: (b, r, g, o) => { const cv = col(0x2f6a4a), cr = col(0x5a9a78), kr = 0.55 + 0.45 * g, tips = [];
      const colm = (pts, R) => { ribTube(b, pts, (t) => R * (t > 0.9 ? Math.sqrt(Math.max(0.02, 1 - Math.pow((t - 0.9) / 0.1, 2))) : 0.85 + 0.15 * Math.min(1, t * 5)), 6, 0.3, cv, cr, (p, nrm, t) => { if (t > 0.95) return; const Ms = frame(p, nrm); for (let j = 0; j < 2; j++) b.card(mul(Ms, RY(j * 3.1 + t * 20), RX(1.0)), 0.003, R * 0.4, col(0xe8dcc0), W, 0, 0.6, 0.8, 0); }); tips.push(pts); };
      const Hh = 0.95 * g, main = []; for (let k = 0; k <= 12; k++) main.push(new V3(0, Hh * k / 12, 0)); colm(main, 0.05 * kr);
      const na = Math.round(1 + 3 * g);
      for (let i = 1; i < na; i++) { const az = 0.4 + i * 2.2, y0 = Hh * lerp(0.28, 0.5, r()), out = 0.15 * kr * r.range(0.9, 1.2), top = Hh * r.range(0.62, 0.92), dx = Math.cos(az), dz = Math.sin(az), pts = [];
        for (let k = 0; k <= 12; k++) { const t = k / 12, e = Math.min(1, t * 2.6), a = e * Math.PI / 2; pts.push(new V3(dx * out * Math.sin(a), y0 + out * 0.5 * (1 - Math.cos(a)) + Math.max(0, t - 0.385) / 0.615 * (top - y0 - out * 0.5), dz * out * Math.sin(a))); }
        colm(pts, 0.036 * kr); }
      if (o > 0.05) tips.forEach((pts, i) => { if (i > 2) return; const p = polyAt(pts, 0.9).p, a = i * 2 + r(); head(b, mul(T(p.x + Math.cos(a) * 0.035 * kr, p.y, p.z + Math.sin(a) * 0.035 * kr), RY(-a + Math.PI / 2), RX(0.9)), r, H.cactusFlower(col(0xfdfbf0), W), o, 1.9); }); } });

  A({ id: 'flor_de_maio', name: 'Flor-de-maio', lvl: 10, spots: ['hang', 'pot', 'window'], h: 0.3, thirst: 0.6, info: 'Cacto sem espinhos que se enfeita todo no outono.',
    build: (b, r, g, o) => { const [c0, c1] = r.pick([[0xe8286a, 0xf78ab0], [0xf0503a, 0xf9a07a], [0xf9c0d8, 0xfdf0f4], [0xd8208a, 0xf070b8]]).map(col), n = Math.round(9 + 9 * g);
      for (let i = 0; i < n; i++) { const az = i * GOLD + r.range(-0.2, 0.2), f = (i + 0.5) / n, ns = Math.round(2 + 3 * g); let M = mul(RY(-az + Math.PI / 2), T(0, 0, 0.015), RX(lerp(0.2, 1.0, f) + r.range(-0.1, 0.1)));
        for (let k = 0; k < ns; k++) { const L = 0.05 * (0.7 + 0.3 * g) * r.range(0.85, 1.1), c = jitterc(col(0x3a8a44), r, 0.03);
          b.petal(M, { L, W: 0.024, a: 0.9, b: 0.3, base: 0.35, fold: 0.12, curl: 0.1, ruffle: 0.1, rf: 3, nu: 3, nv: 2, vein: 0.35, cols: [shade(c, 0.75), c, mixc(c, col(0x8a4a5a), 0.25)] });
          M = mul(M, T(0, L * 0.94, 0), RX(r.range(0.25, 0.6)), RZ(r.range(-0.25, 0.25))); }
        if (o >= 0 && i % 3 !== 2) { const oo = clamp(o + r.range(-0.2, 0.1), 0, 1), k = lerp(0.35, 1, oo), Mf = mul(M, RX(0.3));
          b.tube(Mf, [new V3(0, 0, 0), new V3(0, 0.03 * k, 0)], 0.004, 0.005, c1, c0, 5);
          for (let t = 0; t < 2; t++) for (let j = 0; j < 6; j++) b.petal(mul(Mf, T(0, 0.012 * k + t * 0.02 * k, 0), RY(j * 1.047 + t * 0.5), RX(lerp(0.3, 1.0 + t * 0.2, oo))), { L: 0.03 * k, W: 0.011, a: 0.8, b: 0.7, curl: lerp(0, 1.6, oo), curlPow: 1.5, cup: 0.4, cols: [W, c1, c0], nu: 3, nv: 1 });
          b.tube(Mf, [new V3(0, 0.03 * k, 0), new V3(0, 0.065 * k, 0.004)], 0.0012, 0.001, W, col(0xf7e07a), 3); } } } });

  HP({ id: 'ripsalis', name: 'Ripsális', lvl: 8, spots: ['hang', 'pot'], h: 0.3, thirst: 0.6, info: 'Cacto-macarrão: uma cabeleira verde de espaguete.',
    build: (b, r, g) => { const c = col(0x6aaa5a);
      const seg = (p, d, L, depth) => { const q = p.clone().addScaledVector(d, L), mid = p.clone().lerp(q, 0.5).add(new V3(r.range(-0.1, 0.1) * L, 0, r.range(-0.1, 0.1) * L)); b.tube(null, [p, mid, q], 0.0022, 0.0018, jitterc(c, r, 0.04), c, 3); if (depth <= 0) return;
        const nb = r() < 0.35 ? 3 : 2; for (let i = 0; i < nb; i++) seg(q, d.clone().add(new V3(r.range(-0.5, 0.5), r.range(-0.6, 0.1) - 0.7, r.range(-0.5, 0.5))).normalize(), L * r.range(0.65, 0.95), depth - 1); };
      const n = Math.round(9 + 8 * g); for (let i = 0; i < n; i++) { const az = i * GOLD, el = lerp(0.5, 1.7, (i + 0.5) / n); seg(new V3(Math.cos(az) * 0.02, 0, Math.sin(az) * 0.02), new V3(Math.cos(az) * Math.sin(el), Math.cos(el), Math.sin(az) * Math.sin(el)), 0.13 * (0.5 + 0.5 * g), Math.round(1 + 2.4 * g)); } } });

  HP({ id: 'colar_de_perolas', name: 'Colar-de-pérolas', lvl: 12, spots: ['hang', 'pot'], h: 0.3, thirst: 0.4, info: 'Fios de ervilhinhas verdes escorrendo do vaso.',
    build: (b, r, g) => { const c = col(0x6aaa5a), pearl = (p, s) => b.blob(T(p.x, p.y, p.z), s, s * 1.05, shade(c, 0.75), mixc(c, col(0xc8e8a0), 0.4), 4, 3);
      for (let i = 0; i < Math.round(10 + 14 * g); i++) { const a = r() * TAU, d = Math.sqrt(r()) * 0.085; pearl(new V3(Math.cos(a) * d, 0.006 + r() * 0.012, Math.sin(a) * d), 0.0075); }
      for (const tr of trails(r, Math.round(6 + 5 * g), { L: 0.75 * g, R: 0.105, up: 0.02, sway: 0.015, seg: 8 })) { b.tube(null, tr.pts, 0.0009, 0.0008, c, c, 3);
        const m = Math.round(tr.L / 0.03) + 3; for (let k = 0; k < m; k++) { const { p } = polyAt(tr.pts, (k + 0.5) / m), a = k * 2.4; pearl(new V3(p.x + Math.cos(a) * 0.006, p.y, p.z + Math.sin(a) * 0.006), 0.0075 * r.range(0.8, 1.1)); } } } });

  HP({ id: 'rabo_de_burro', name: 'Rabo-de-burro', lvl: 11, spots: ['hang', 'pot'], h: 0.3, thirst: 0.4, info: 'Tranças gordinhas de suculenta azulada.',
    build: (b, r, g) => { for (const tr of trails(r, Math.round(5 + 4 * g), { L: 0.55 * g, R: 0.1, up: 0.03, sway: 0.012, seg: 7, min: 0.4 })) { const m = Math.round(tr.L / 0.0105) + 6;
        for (let k = 0; k < m; k++) { const t = k / (m - 1), { p, d } = polyAt(tr.pts, t), c = jitterc(col(0x8ab8a0), r, 0.03), s = (0.7 + 0.3 * Math.sin(Math.min(1, t * 6) * 1.57)) * (t > 0.92 ? lerp(1, 0.5, (t - 0.92) / 0.08) : 1);
          b.petal(mul(frame(p, d), RY(k * GOLD), T(0, 0, 0.005), RX(0.62)), { L: 0.03 * s, W: 0.021 * s, a: 1.0, b: 0.45, cup: 1.3, curl: -0.5, nu: 3, nv: 2, cols: [shade(c, 0.7), c, mixc(c, col(0xd8f0d0), 0.5)] }); } } } });

  HP({ id: 'avenca', name: 'Avenca', lvl: 6, spots: ['pot', 'hang', 'window'], h: 0.35, info: 'Rendinha verde em hastes pretas, tão fina quanto exigente.',
    build: (b, r, g) => { const n = Math.round(8 + 8 * g), blk = col(0x2a2018), tl = 1.15;
      for (let i = 0; i < n; i++) { const az = i * GOLD + r.range(-0.2, 0.2), f = (i + 0.5) / n, L = 0.34 * g * r.range(0.65, 1.05), out = lerp(0.35, 1.0, f), dx = Math.cos(az), dz = Math.sin(az);
        const pts = bez(new V3(0, 0, 0), new V3(dx * L * out * 0.35, L * 0.85, dz * L * out * 0.35), new V3(dx * L * out, L * (0.75 - out * 0.65), dz * L * out), 8); b.tube(null, pts, 0.0012, 0.0008, blk, blk, 3);
        for (let k = 2; k <= 8; k++) { const { p, d } = polyAt(pts, k / 8 - 0.02), side = new V3(-d.z, 0, d.x).normalize();
          for (const sd of k === 8 ? [0] : [-1, 1]) { const bl = 0.075 * g * Math.sin(Math.PI * (k - 1) / 8.5) + 0.012, q = p.clone().addScaledVector(side, sd * bl).addScaledVector(d, bl * (sd ? 0.5 : 1)).add(new V3(0, -bl * 0.25, 0)); b.tube(null, [p, q], 0.0008, 0.0006, blk, blk, 3);
            const nl = Math.max(2, Math.round(bl / 0.009)); for (let j = 1; j <= nl; j++) { const pp = p.clone().lerp(q, j / nl), c = jitterc(col(0x6ab84a), r, 0.05);
              b.card(mul(T(pp.x, pp.y, pp.z), RY(az + sd * 1.2 + (j % 2 ? 0.9 : -0.9) + r.range(-0.3, 0.3)), RX(tl)), 0.02, 0.019, shade(c, 0.75), mixc(c, G.light, 0.3), 0, Math.cos(tl), -Math.sin(tl), 0.1); } } } } } });

  HP({ id: 'asplenio', name: 'Asplênio', lvl: 8, spots: ['pot', 'hang'], h: 0.5, info: 'Ninho-de-passarinho: um funil de folhas onduladas.',
    build: (b, r, g) => { const n = Math.round(8 + 9 * g), cm = col(0x3a2a1a);
      for (let i = 0; i < n; i++) { const f = (i + 0.5) / n, c = jitterc(col(0x62b83e), r, 0.03);
        pleaf(b, mul(RY(i * GOLD), T(0, 0, 0.012), RX(lerp(0.15, 0.95, f) + r.range(-0.1, 0.1))), { L: 0.42 * g * r.range(0.7, 1.08) * lerp(0.7, 1, f), W: 0.09 * (0.5 + 0.5 * g), shape: STRAP, nu: 10, nv: 4, fold: 0.2, curl: 0.55, wave: 0.2, wf: 24, phase: r() * 6, col: (u, q, out) => { out.copy(c).multiplyScalar(0.85 + 0.15 * u); if (Math.abs(q) < 0.01) out.lerp(cm, 0.75 * (1 - u * 0.6)); } }); } } });

  HP({ id: 'chifre_de_veado', name: 'Chifre-de-veado', lvl: 15, spots: ['hang'], h: 0.45, info: 'Samambaia de galhadas, criada no alto como troféu.',
    build: (b, r, g) => { const cs = col(0x8a9a5a), cb = col(0x9a7a4a), kk = 0.5 + 0.5 * g;
      for (let i = 0; i < 4; i++) pleaf(b, mul(RY(i * 1.7 + r()), T(0, -0.02, 0.03), RX(r.range(0.1, 0.5))), { L: 0.16 * kk, W: 0.19 * kk, shape: ROUND, nu: 6, nv: 6, cup: -0.5, fold: 0, curl: 0.6, col: (u, q, out) => out.copy(cs).lerp(cb, clamp(u * 1.2 - 0.3 + Math.abs(q) * 0.3, 0, 1)) });
      const horn = (M, L, Wd, depth, c, root) => { const o = { L, W: Wd, shape: depth > 0 ? (u) => lerp(root ? 0.3 : 0.8, 1, u) : (u) => lerp(0.85, 0.06, u * u), nu: 4, nv: 2, fold: 0.25, curl: 0.4, curlPow: 1, col: (u, q, out) => out.copy(c).multiplyScalar(0.78 + 0.25 * u) }; pleaf(b, M, o);
        if (depth > 0) for (const sd of [-1, 1]) horn(mul(tipM(M, o, 0.97), T(sd * Wd * 0.22, 0, 0), RZ(-sd * r.range(0.22, 0.5))), L * r.range(0.55, 0.78), Wd * 0.6, depth - 1, c, false); };
      const n = Math.round(4 + 5 * g);
      for (let i = 0; i < n; i++) horn(mul(RY(i * GOLD), T(0, 0.01, 0.03), RX(lerp(0.3, 1.5, (i + 0.5) / n) + r.range(-0.1, 0.1))), 0.2 * g * r.range(0.8, 1.1), 0.055 * kk, g > 0.7 ? 2 : 1, jitterc(col(0x6a9a6a), r, 0.03), true); } });

  A({ id: 'tillandsia', name: 'Tilândsia', lvl: 12, spots: ['hang', 'pot'], h: 0.25, thirst: 0.3, info: 'Planta-do-ar: vive de brisa e de borrifadas.',
    build: (b, r, g, o) => { const n = Math.round(16 + 20 * g), bl = o > 0 ? o : 0;
      for (let i = 0; i < n; i++) { const f = (i + 0.5) / n, c = jitterc(mixc(col(0xe0607a), col(0x9ab8a8), clamp(f * 2.5 + 1 - bl * 1.4, 0, 1)), r, 0.03);
        b.petal(mul(T(0, 0.02, 0), RY(i * GOLD), T(0, 0, 0.006), RX(lerp(0.05, 1.5, f) + r.range(-0.1, 0.1))), { L: 0.22 * g * r.range(0.7, 1.1) * lerp(0.6, 1, f), W: 0.022, a: 0.45, b: 0.5, base: 0.9, fold: 0.6, curl: lerp(0.6, 2.6, f), curlPow: 1.8, twist: r.range(-0.8, 0.8), nu: 7, nv: 2, cols: [mixc(c, W, 0.25), c, mixc(c, col(0xd8e8e0), 0.4)] }); }
      if (o > 0.15) for (let i = 0; i < 3; i++) { const M = mul(T(0, 0.03, 0), RY(i * 2.1), RX(0.15)); b.petal(M, { L: 0.07 * o, W: 0.008, a: 0.9, b: 0.6, cup: 1.5, cols: [col(0x7a4ac8), col(0x8a5ad8), col(0xb89af0)], nu: 3, nv: 2 }); b.blob(mul(M, T(0, 0.072 * o, 0)), 0.0025, 0.004, col(0xf7d84a), col(0xf7d84a), 4, 3); } } });

  A({ id: 'hoya', name: 'Flor-de-cera', lvl: 13, spots: ['hang', 'pot'], h: 0.3, thirst: 0.6, info: 'Hoya: buquês de estrelinhas que parecem de porcelana.',
    build: (b, r, g, o) => { const lf = (M, k) => leaf(b, M, r, { L: 0.07 * k, W: 0.036 * k, c: col(0x2a6a38), a: 0.85, b: 0.6, cup: 0.5, fold: 0.1, curl: 0.25, nu: 4, nv: 2, tipMix: 0.12 });
      for (let i = 0; i < Math.round(6 + 5 * g); i++) lf(mul(RY(i * GOLD), T(0, 0.006, 0.025), RX(r.range(0.5, 1.3))), 0.8 + 0.3 * g);
      trails(r, Math.round(5 + 5 * g), { L: 0.65 * g, R: 0.11, up: 0.05 }).forEach((tr, i) => { b.tube(null, tr.pts, 0.002, 0.0015, col(0x6a6a44), col(0x7a8a4a), 3); vineLeaves(b, r, tr, 11, { pet: 0.01 }, (M) => lf(M, r.range(0.8, 1.15)));
        if (o >= 0 && i % 2 === 0) { const { p } = polyAt(tr.pts, r.range(0.45, 0.8)), q = new V3(p.x + Math.cos(tr.az) * 0.035, p.y - 0.03, p.z + Math.sin(tr.az) * 0.035); b.tube(null, [p, q], 0.0012, 0.001, col(0x8a6a5a), col(0x8a6a5a), 3);
          umbel(b, mul(T(q.x, q.y, q.z), RY(-tr.az + Math.PI / 2), RX(2.2)), r, { n: 20, r: 0.034, dome: 0.9, flat: 0.5, fs: 0.012, np: 5, pw: 0.7, eye: col(0xc8284a), white: 0.1, colAt: () => col(0xfbd0dc), bud: col(0xe8a0b0) }, clamp(o, 0, 1)); } }); } });

  A({ id: 'columeia', name: 'Columéia-peixinho', lvl: 8, spots: ['hang', 'pot'], h: 0.3, info: 'Peixinhos alaranjados nadando entre as folhas.',
    build: (b, r, g, o) => { trails(r, Math.round(6 + 5 * g), { L: 0.55 * g, R: 0.12, up: 0.09, sway: 0.03, flare: 0.06 }).forEach((tr) => { b.tube(null, tr.pts, 0.002, 0.0015, col(0x6a4a3a), col(0x5a7a44), 3);
        const m = Math.round(17 * tr.f);
        for (let k = 0; k < m; k++) { const t = lerp(0.05, 1, (k + 0.5) / m), { p, d } = polyAt(tr.pts, t), Mk = mul(frame(p, d), RY(k * 1.57));
          for (const sd of [0, Math.PI]) leaf(b, mul(Mk, RY(sd), T(0, 0, 0.002), RX(1.15)), r, { L: 0.034, W: 0.017, c: col(0x1f5a30), a: 0.9, b: 0.6, cup: 0.6, fold: 0, curl: 0.3, nu: 2, nv: 2, tipMix: 0.1 });
          if (o >= 0 && k % 3 === 1) { const oo = clamp(o + r.range(-0.2, 0.1), 0, 1), s = 0.022 * lerp(0.4, 1, oo), Mf = mul(Mk, RY(r() * 6), T(0, 0, 0.004), RX(1.9));
            b.blob(mul(Mf, T(0, s * 0.6, s * 0.12)), s * 0.36, s * 0.64, col(0xf2701a), col(0xf79a2a), 5, 4); b.blob(mul(Mf, T(0, s * 1.2, 0)), s * 0.13, s * 0.1, col(0xf7c84a), col(0xf7d86a), 4, 2); } } }); } });

  HP({ id: 'cheflera', name: 'Cheflera', lvl: 6, spots: ['pot', 'bed'], h: 0.8, info: 'Guarda-chuvinhas de folhas lustrosas.',
    build: (b, r, g) => { const kk = 0.5 + 0.5 * g;
      for (let s = 0; s < 3; s++) { const az0 = s * 2.1 + r(), Hh = 0.6 * g * [1, 0.75, 0.55][s], pts = mkStem(r, Hh, 0.12 * s, az0, 0.03, 6); b.tube(null, pts, 0.008 * kk, 0.004, col(0x6a5a44), col(0x5a8a44), 5);
        const n = Math.round((3 + 5 * g) * [1, 0.8, 0.6][s]);
        for (let i = 0; i < n; i++) { const f = (i + 0.5) / n, { p } = polyAt(pts, lerp(0.35, 1, f)), az = i * GOLD + s, L = 0.13 * kk * r.range(0.8, 1.1), el = lerp(1.2, 0.3, f), dx = Math.cos(az), dz = Math.sin(az), tip = new V3(p.x + dx * Math.sin(el) * L, p.y + Math.cos(el) * L, p.z + dz * Math.sin(el) * L);
          b.tube(null, [p, tip], 0.0025, 0.002, col(0x6a9a4a), col(0x6a9a4a), 3);
          const M = mul(T(tip.x, tip.y, tip.z), RY(-az + Math.PI / 2), RX(el * 0.8)), vr = r() < 0.3;
          for (let k = 0; k < 7; k++) leaf(b, mul(M, RY((k / 7) * TAU), RX(1.25 + r.range(-0.1, 0.1))), r, { L: 0.085 * kk * r.range(0.85, 1.1), W: 0.03, c: col(0x2a7a34), tip: col(0xd8e05a), tipMix: vr ? 0.5 : 0.1, a: 0.9, b: 0.55, fold: 0.3, curl: 0.5, nu: 4, nv: 2 }); } } } });

  HP({ id: 'arvore_da_felicidade', name: 'Árvore-da-felicidade', lvl: 17, h: 0.95, info: 'Traz alegria para a casa, ainda mais se for presente.',
    build: (b, r, g) => { const kk = 0.5 + 0.5 * g;
      for (let s = 0; s < 2; s++) { const az0 = s * 3 + r(), Hh = 0.62 * g * (s ? 0.75 : 1), pts = mkStem(r, Hh, 0.06, az0, 0.04, 7); for (const p of pts) { p.x += Math.cos(az0) * 0.025; p.z += Math.sin(az0) * 0.025; }
        b.tube(null, pts, (t) => 0.013 * kk * (1 - 0.5 * t), 0, col(0x6a5a48), col(0x8a7a5a), 6);
        const nb = Math.round(5 + 6 * g);
        for (let i = 0; i < nb; i++) { const f = (i + 0.5) / nb, { p } = polyAt(pts, lerp(0.4, 1, f)), az = i * GOLD + s, L = 0.2 * kk * r.range(0.75, 1.1), el = lerp(1.25, 0.2, f), dx = Math.cos(az), dz = Math.sin(az);
          const fr = bez(p, new V3(p.x + dx * Math.sin(el) * L * 0.6, p.y + Math.cos(el) * L * 0.6 + L * 0.15, p.z + dz * Math.sin(el) * L * 0.6), new V3(p.x + dx * Math.sin(el) * L, p.y + Math.cos(el) * L - L * 0.25, p.z + dz * Math.sin(el) * L), 6); b.tube(null, fr, 0.0018, 0.001, col(0x5a7a3a), col(0x5a8a40), 3);
          for (let k = 1; k <= 6; k++) { const { p: q, d } = polyAt(fr, k / 6.2), side = new V3(-d.z, 0, d.x).normalize(), w = 0.055 * kk * Math.sin(Math.PI * Math.pow(k / 6.5, 0.7)) + 0.012;
            for (const sd of k === 6 ? [0] : [-1, 1]) leaf(b, frame(q, side.clone().multiplyScalar(sd).add(d.clone().multiplyScalar(sd ? 0.6 : 1)).add(new V3(0, -0.2, 0)).normalize()), r, { L: w, W: w * 0.55, c: col(0x4a9a3c), a: 0.8, b: 0.5, ruffle: 0.5, rf: 4, nu: 3, nv: 3, fold: 0.1, curl: 0.3 }); } } } } });

  HP({ id: 'costela_variegata', name: 'Costela-de-adão variegata', lvl: 19, h: 0.8, info: 'Raríssima: cada folha nasce com um mapa branco diferente.',
    build: (b, r, g) => { const n = Math.round(4 + 5 * g), cg = col(0x2a6a38), cw = col(0xf4f2dc);
      for (let i = 0; i < n; i++) { const az = i * GOLD + r.range(-0.2, 0.2), L = 0.52 * g * r.range(0.65, 1.1), out = r.range(0.3, 0.75);
        const pts = bez(new V3(0, 0, 0), new V3(Math.cos(az) * L * out * 0.3, L * 0.8, Math.sin(az) * L * out * 0.3), new V3(Math.cos(az) * L * out, L * (1 - out * 0.3), Math.sin(az) * L * out), 6); b.tube(null, pts, 0.007, 0.004, col(0x3f7a3a), col(0xb8c890), 5);
        const p = pts[6], s = 0.3 * g * r.range(0.7, 1.1), mode = r(), half = r.sign(), split = Math.round(r.range(1, 5));
        lobed(b, mul(T(p.x, p.y, p.z), RY(-az + Math.PI / 2), RX(1.0 + r.range(-0.2, 0.3))), r, s, { pairs: 6, len: 0.5, wr: 0.15, mid: 0.3, span: 0.82, ang: [1.2, 0.6], outline: (t) => Math.sin(Math.PI * Math.pow(t + 0.12, 0.8)) + 0.2,
          cAt: (k, sd) => (k < 0 ? mode < 0.15 : mode < 0.25 ? sd === half : mode < 0.6 ? sd === half && k >= split : r() < 0.22) ? jitterc(cw, r, 0.02) : mixc(cg, cw, r() < 0.25 ? 0.4 : 0) }); } } });

  HP({ id: 'trevo_roxo', name: 'Trevo-roxo', lvl: 4, spots: ['pot', 'window', 'bed'], h: 0.24, foliage: false, info: 'Borboletinhas roxas que dobram as asas ao anoitecer.',
    build: (b, r, g, o) => { const cd = col(0x4a1a4a), cm = col(0xa83a8a);
      stalks(b, r, Math.round(14 + 16 * g), { L: 0.17 * g, out: [0.05, 0.95], r: 0.0015, c: col(0xb88aa8), tilt: [0, 0] }, (M) => { const s = 0.05 * (0.5 + 0.5 * g) * r.range(0.85, 1.1), c = jitterc(cd, r, 0.03);
        for (let k = 0; k < 3; k++) pleaf(b, mul(M, RX(-0.4), RY(k * TAU / 3 + 0.5), RX(1.35)), { L: s, W: s * 1.5, shape: (u) => u * 0.97 + 0.03, nu: 3, nv: 2, fold: 0.35, curl: 0.15, col: (u, q, out) => { out.copy(c); if (Math.abs(q) < 0.5 && u > 0.2 && u < 0.9) out.lerp(cm, 0.7); } }); });
      if (o >= 0) for (let i = 0; i < Math.round(4 + 5 * g); i++) { const az = i * GOLD + 1, pts = mkStem(r, 0.2 * g * r.range(0.8, 1.1), 0.07, az, 0.05, 4); b.tube(null, pts, 0.0012, 0.001, col(0xb88aa8), col(0xc8a0b8), 3);
        const p = pts[4]; for (let k = 0; k < 3; k++) head(b, mul(T(p.x, p.y, p.z), RY(k * 2.1), RX(0.6)), r, H.small5(col(0xf9e0f0), W, col(0xb8d870)), clamp(o + r.range(-0.2, 0.1), 0, 1), 0.85); } } });

  HP({ id: 'buxinho', name: 'Buxinho', lvl: 5, spots: ['pot', 'bed'], h: 0.42, info: 'Uma bola verde aparada com capricho de tesoura.',
    build: (b, r, g) => { const R = 0.19 * g, cy = R * 1.02 + 0.03 * g; b.tube(null, [new V3(0, 0, 0), new V3(0, cy * 0.5, 0)], 0.012, 0.01, col(0x5a4634), col(0x6a5644), 5);
      b.blob(T(0, cy, 0), R * 0.93, R * 0.93, col(0x1f4a24), col(0x2f6a30), 10, 7);
      leafShell(b, r, Math.round(650 * g * g), 0.028, [col(0x2f7a34), col(0x3f8a3a), col(0x4a9a40), col(0x256a2c)], (rr, p, nr) => { nr.set(rr.range(-1, 1), rr.range(-0.9, 1), rr.range(-1, 1)).normalize(); p.copy(nr).multiplyScalar(R * rr.range(0.93, 1.02)); p.y += cy; }); } });

  HP({ id: 'tuia', name: 'Tuia-limão', lvl: 7, spots: ['pot', 'bed'], h: 0.8, info: 'Pinheirinho cheiroso: esfregue a folha e sinta o limão.',
    build: (b, r, g) => { const Hh = 0.72 * g, R = 0.16 * g; b.tube(null, [new V3(0, 0, 0), new V3(0, Hh * 0.3, 0)], 0.012, 0.008, col(0x5a4634), col(0x6a5644), 5);
      b.lathe(T(0, 0.04 * g, 0), [[R * 0.5, 0], [R * 0.92, Hh * 0.12], [R * 0.7, Hh * 0.45], [R * 0.3, Hh * 0.8], [0.004, Hh * 0.97]], col(0x3a6a24), col(0x6a9a2a), 9);
      leafShell(b, r, Math.round(700 * g * g), 0.034, [col(0x8ac83a), col(0xa8d84a), col(0x6aaa30), col(0xc8e85a)], (rr, p, nr) => { const t = Math.pow(rr(), 0.75), a = rr() * TAU, rad = R * (t < 0.12 ? lerp(0.55, 1, t / 0.12) : lerp(1, 0.03, Math.pow((t - 0.12) / 0.88, 0.85))) * rr.range(0.95, 1.06); p.set(Math.cos(a) * rad, 0.04 * g + t * Hh, Math.sin(a) * rad); nr.set(Math.cos(a), 0.9, Math.sin(a)).normalize(); }); } });
  // =====================================================================================================
  // 2. ORCHIDS AND POT FLOWERS
  // =====================================================================================================
  const PF = (d) => A({ spots: ['pot'], ...d });
  const phal = (cols, lipC, sideC, vein) => (b, r, g, o) => orchidPlant(b, r, g, o, { leaf: { n: 6, L: 0.2, W: 0.07 }, spikes: 2, H: 0.55, n: 8, make: (M, open) => orchid(b, M, r, { k: 1.25, sepal: [0.034, 0.022], petal: [0.038, 0.046], cols, vein, lip: mothLip(b, lipC, sideC) }, open) });
  PF({ id: 'falenopsis_branca', name: 'Falenópsis branca', lvl: 14, spots: ['pot', 'hang'], h: 0.6, thirst: 0.6, info: 'Orquídea-borboleta: mariposas brancas pousadas num arco.', build: phal([col(0xf4f0e6), W, W], col(0xe8c02a), col(0xd8507a), 0.05) });
  PF({ id: 'falenopsis_rosa', name: 'Falenópsis rosa', lvl: 15, spots: ['pot', 'hang'], h: 0.6, thirst: 0.6, info: 'Pink riscado de veias, flor que dura meses.', build: phal([col(0xd84a9a), col(0xf08ac0), col(0xfbd0e6)], col(0xa81a5a), col(0xc82a7a), 0.3) });

  PF({ id: 'dendrobio', name: 'Dendróbio', lvl: 16, h: 0.6, thirst: 0.6, info: 'Olho-de-boneca: canas inteiras forradas de flores.',
    build: (b, r, g, o) => { const n = Math.round(3 + 3 * g), kk = 0.5 + 0.5 * g;
      for (let s = 0; s < n; s++) { const az = s * GOLD, Hh = 0.5 * g * r.range(0.6, 1.05), pts = mkStem(r, Hh, 0.3 * Hh * Math.sqrt(s / n), az, 0.03, 8);
        b.tube(null, pts, (t) => 0.0075 * (0.6 + 0.4 * g) * (0.7 + 0.5 * Math.sin(Math.PI * Math.min(1, t * 1.2 + 0.1))) * (1 + 0.12 * Math.pow(Math.abs(Math.sin(t * 22)), 6)), 0, col(0x8a9a4a), col(0xa8b85a), 6);
        const nl = Math.round(4 + 4 * g); for (let i = 0; i < nl; i++) { const { p } = polyAt(pts, lerp(0.35, 1, (i + 0.5) / nl)); leaf(b, mul(T(p.x, p.y, p.z), RY(az + (i % 2 ? 1.57 : -1.57) + r.range(-0.3, 0.3)), RX(r.range(0.8, 1.2))), r, { L: 0.09 * kk, W: 0.028, c: col(0x3f8a44), a: 0.8, b: 0.5, fold: 0.35, curl: 0.5, nu: 4, nv: 2 }); }
        if (o >= 0 && s < 4) for (let k = 0; k < 7; k++) { const { p } = polyAt(pts, lerp(0.45, 0.98, k / 6)), a2 = az + k * 2.2 + r(), f = new V3(Math.cos(a2), 0.2, Math.sin(a2)).normalize(), q = p.clone().addScaledVector(f, 0.02), open = clamp(o * 1.4 - r() * 0.3, 0, 1); if (open < 0.1) continue;
          orchid(b, faceM(q, f), r, { k: 1.0, sepal: [0.03, 0.013], petal: [0.03, 0.022], cols: [W, col(0xf4e0f4), col(0xc85ac8)], pa: 1.1, lip: (Ml, k2) => b.petal(mul(Ml, T(0, 0.002, 0.002), RX(0.9)), { L: 0.024 * k2, W: 0.024 * k2, a: 1.2, b: 0.45, cup: 1.0, curl: -0.6, cols: [col(0x5a0a3a), col(0xf7e8a0), col(0xc85ac8)], nu: 3, nv: 3 }) }, open); } } } });

  PF({ id: 'oncidium', name: 'Orquídea chuva-de-ouro', lvl: 17, spots: ['pot', 'hang'], h: 0.6, thirst: 0.6, info: 'Oncidium: um enxame de bailarinas amarelas.',
    build: (b, r, g, o) => { for (let i = 0; i < 4; i++) { const az = i * 1.6 + r(), x = Math.cos(az) * 0.03, z = Math.sin(az) * 0.03; b.blob(mul(T(x, 0.03 * g, z), RY(az), S(1, 1, 0.6)), 0.018 * g, 0.035 * g, col(0x6a9a4a), col(0x8ab85a), 6, 4);
        for (let j = 0; j < 2; j++) leaf(b, mul(T(x, 0.055 * g, z), RY(az + j * 2.6 + r()), RX(r.range(0.3, 0.8))), r, { L: 0.24 * g * r.range(0.8, 1.1), W: 0.022, c: col(0x3f8f44), a: 0.7, b: 0.4, fold: 0.5, curl: 0.9, nu: 5, nv: 2 }); }
      if (o < 0) return;
      for (let s = 0; s < 3; s++) { const az = s * 2.1 + r(), L = 0.55 * g * r.range(0.8, 1.05), dx = Math.cos(az), dz = Math.sin(az), pts = bez(new V3(0, 0.03, 0), new V3(dx * L * 0.15, L * 0.95, dz * L * 0.15), new V3(dx * L * 0.85, L * 0.6, dz * L * 0.85), 10); b.tube(null, pts, 0.002, 0.001, col(0x6a7a44), col(0x7a8a4a), 3);
        for (let k = 0; k < 7; k++) { const { p } = polyAt(pts, 0.4 + k * 0.09), a2 = az + (k % 2 ? 1.3 : -1.3), bl = 0.09 * g * (1 - k * 0.09), q = new V3(p.x + Math.cos(a2) * bl, p.y + bl * 0.25, p.z + Math.sin(a2) * bl); b.tube(null, [p, q], 0.001, 0.0008, col(0x6a7a44), col(0x6a7a44), 3);
          for (let j = 0; j < 5; j++) { const pp = p.clone().lerp(q, 0.25 + j * 0.19), a3 = a2 + (j % 2 ? 1 : -1) * 1.2, f = new V3(Math.cos(a3), -0.1, Math.sin(a3)).normalize(), M = faceM(pp.clone().addScaledVector(f, 0.008), f), kk = lerp(0.4, 1, clamp(o * 1.4 - r() * 0.4, 0, 1));
            b.petal(mul(M, RY(Math.PI), RX(1.2)), { L: 0.02 * kk, W: 0.022 * kk, a: 1.7, b: 0.45, tipNotch: 0.3, ruffle: 0.2, cols: [col(0xa85a1e), col(0xf7d21e), col(0xfbe24a)], nu: 3, nv: 2 });
            for (const az4 of [0, 1.4, -1.4]) b.card(mul(M, RY(az4), RX(1.3)), 0.005, 0.009 * kk, col(0x8a4a1e), col(0xf2c81e), 0, 0.27, -0.96, 0.1); } } } } });

  PF({ id: 'cymbidium', name: 'Cimbídio', lvl: 18, h: 0.75, info: 'Hastes eretas carregadas de flores de cera.',
    build: (b, r, g, o) => { basalLeaves(b, r, { n: Math.round(14 + 12 * g), L: 0.5 * g, W: 0.02, a: 0.7, b: 0.35, tilt: 0.45, curl: 1.3, fold: 0.5, c: col(0x3f8a44), nu: 6, nv: 2, r: 0.015 });
      for (let i = 0; i < 3; i++) b.blob(T(Math.cos(i * 2.1) * 0.03, 0.025 * g, Math.sin(i * 2.1) * 0.03), 0.022 * g, 0.035 * g, col(0x7a9a4a), col(0x9ab85a), 6, 4);
      if (o < 0) return; const [c0, c1, lipC] = r.pick([[0xc8d84a, 0xe6ee9a, 0xb8283a], [0xf2a0c0, 0xfbd8e6, 0xa81a4a], [0xfaf6e6, 0xffffff, 0xd8405a], [0xe8b83a, 0xf7dc8a, 0x8a2a1e]]).map(col);
      for (let s = 0; s < 3; s++) { const az = s * 2.1 + r(), Hh = 0.62 * g * r.range(0.85, 1.05), pts = mkStem(r, Hh, 0.22 * Hh, az, 0.03, 8); b.tube(null, pts, 0.004, 0.003, col(0x6a9a4a), col(0x7aa85a), 4);
        for (let k = 0; k < 9; k++) { const { p } = polyAt(pts, lerp(0.42, 0.98, k / 8)), a2 = az + (k % 2 ? 1.25 : -1.25) + r.range(-0.3, 0.3), f = new V3(Math.cos(a2), 0.15, Math.sin(a2)).normalize(), q = p.clone().addScaledVector(f, 0.03), open = clamp(o * 1.5 - (k / 9) * 0.5, 0, 1);
          if (open < 0.1) { b.blob(T(q.x, q.y, q.z), 0.007, 0.011, c0, c1, 5, 3); continue; } b.tube(null, [p, q], 0.0015, 0.0012, col(0x7a9a5a), col(0x7a9a5a), 3);
          orchid(b, faceM(q, f), r, { k: 1.25, flat: 1.25, sepal: [0.036, 0.014], petal: [0.032, 0.013], petalAz: 0.75, petalDt: -0.35, cols: [shade(c0, 0.9), c0, c1], pa: 1.0, pb: 0.6, lip: (Ml, k2) => b.petal(mul(Ml, T(0, 0.002, 0.003), RX(0.75)), { L: 0.026 * k2, W: 0.022 * k2, a: 1.2, b: 0.45, cup: 1.2, curl: 0.9, curlPow: 2, ruffle: 0.15, cols: [col(0xf7e8a0), col(0xfaf0d8), lipC], nu: 4, nv: 3 }) }, open); } } } });

  PF({ id: 'cattleya', name: 'Catleia', lvl: 19, spots: ['pot', 'hang'], h: 0.45, thirst: 0.6, info: 'A rainha das orquídeas brasileiras, com perfume de festa.',
    build: (b, r, g, o) => { const n = Math.round(3 + 3 * g), tops = [];
      for (let i = 0; i < n; i++) { const az = i * GOLD, d = 0.03 + 0.012 * i, Hb = 0.13 * g * r.range(0.8, 1.1), M = mul(T(Math.cos(az) * d, 0, Math.sin(az) * d), RY(-az + Math.PI / 2), RX(0.12 + 0.05 * i));
        b.tube(M, [new V3(0, 0, 0), new V3(0, Hb * 0.5, 0), new V3(0, Hb, 0)], (t) => 0.004 + 0.009 * g * Math.sin(Math.PI * Math.min(1, t * 0.9 + 0.08)), 0, col(0x7a9a4a), col(0x9ab85a), 6);
        leaf(b, mul(M, T(0, Hb, 0), RX(0.25 + r() * 0.3)), r, { L: 0.19 * g * r.range(0.85, 1.1), W: 0.055 * (0.5 + 0.5 * g), c: col(0x2f7a3e), a: 0.8, b: 0.5, fold: 0.4, curl: 0.35, nu: 5, nv: 2, tipMix: 0.1 });
        tops.push(new V3(0, Hb, 0).applyMatrix4(M)); }
      if (o < 0) return; const [c0, c1, lipC] = r.pick([[0xb87ad8, 0xd8b0ee, 0x8a1a8a], [0xf4f0f8, 0xffffff, 0xc82a8a], [0xe86aa8, 0xf7b0d0, 0xa81a5a]]).map(col);
      for (let s = 0; s < Math.min(3, n); s++) { const p = tops[s], az = s * 2.3 + r(), f = new V3(Math.cos(az), 0.25, Math.sin(az)).normalize(), q = new V3(p.x + f.x * 0.05, p.y + 0.08 * g, p.z + f.z * 0.05); b.tube(null, bez(p, new V3(p.x, p.y + 0.07 * g, p.z), q, 4), 0.003, 0.002, col(0x7a9a4a), col(0x8aa85a), 4);
        orchid(b, faceM(q, f), r, { k: 1.9, flat: 1.3, sepal: [0.05, 0.014], petal: [0.05, 0.042], cols: [shade(c0, 0.92), c0, c1], ruffle: 0.25, pa: 1.2, pb: 0.45, petalAz: 1.15, lip: tubeLip(b, col(0xf7d84a), lipC, mixc(lipC, c1, 0.4), 1) }, clamp(o + r.range(-0.15, 0.1), 0, 1)); } } });

  PF({ id: 'sapatinho', name: 'Orquídea-sapatinho', lvl: 19, h: 0.4, info: 'Um sapatinho de verniz que serviria numa fada.',
    build: (b, r, g, o) => { for (let i = 0; i < Math.round(5 + 3 * g); i++) { const c = jitterc(col(0x3f8a50), r, 0.03), cd = col(0x1f5a34);
        pleaf(b, mul(RY((i % 2 ? 0 : Math.PI) + r.range(-0.5, 0.5) + i * 0.3), T(0, 0.003 * i, 0.008), RX(r.range(0.95, 1.4))), { L: 0.17 * g * r.range(0.8, 1.1), W: 0.04 * (0.5 + 0.5 * g), a: 0.7, b: 0.45, base: 0.6, nu: 8, nv: 4, fold: 0.4, curl: 0.5, col: (u, q, out, i2, j) => out.copy((i2 + j) % 2 ? c : cd) }); }
      if (o < 0) return; const [cs, cp, cl] = r.pick([[0xf4f6e0, 0x8a4a3a, 0xb8a03a], [0xf0e0e8, 0x7a1e3a, 0x8a1e3a], [0xe8f0c0, 0x9ab84a, 0xd8c84a]]).map(col);
      for (let s = 0; s < 2; s++) { const az = s * 2.8 + r(), Hh = 0.3 * g * r.range(0.85, 1.05), pts = mkStem(r, Hh, 0.1 * Hh, az, 0.03, 6); b.tube(null, pts, 0.003, 0.0025, col(0x6a4a4a), col(0x7a5a4a), 4);
        const p = pts[6], f = new V3(Math.cos(az), 0.05, Math.sin(az)).normalize(), M = faceM(new V3(p.x, p.y + 0.01, p.z), f), oo = clamp(o + r.range(-0.1, 0.1), 0, 1), k = 1.5 * lerp(0.45, 1, oo);
        b.petal(mul(M, T(0, 0, 0.003), RX(lerp(0.3, 1.25, oo))), { L: 0.04 * k, W: 0.042 * k, a: 1.25, b: 0.45, cup: 0.5, curl: -0.3, vein: 0.5, cols: [cl, cs, W], nu: 4, nv: 4 });
        b.petal(mul(M, RY(Math.PI), T(0, -0.002, 0.003), RX(1.3)), { L: 0.028 * k, W: 0.02 * k, a: 1.1, b: 0.5, cup: 0.4, cols: [cl, cs, cs], nu: 3, nv: 2 });
        for (const sd of [-1, 1]) b.petal(mul(M, RY(sd * 1.75), T(0, 0, 0.003), RX(lerp(0.4, 1.4, oo))), { L: 0.045 * k, W: 0.012 * k, a: 1.0, b: 0.6, twist: sd * 0.6, ruffle: 0.2, curl: 0.3, cols: [cl, cp, shade(cp, 0.8)], nu: 4, nv: 2 });
        b.lathe(mul(M, T(0, 0.02 * k, -0.034 * k), RX(1.95)), [[0.002, 0], [0.011, 0.005], [0.015, 0.018], [0.013, 0.03], [0.009, 0.037]].map(([x, y]) => [x * k, y * k]), shade(cp, 0.85), mixc(cp, cl, 0.5), 8);
        b.blob(mul(M, T(0, 0.006 * k, -0.004 * k)), 0.005 * k, 0.004 * k, cl, cl, 5, 3); } } });

  PF({ id: 'vanda', name: 'Vanda', lvl: 20, spots: ['hang'], h: 0.6, thirst: 0.5, info: 'Vive solta no ar, com as raízes penduradas feito barbas.',
    build: (b, r, g, o) => { const Hs = 0.22 * g, n = Math.round(6 + 8 * g); b.tube(null, [new V3(0, 0, 0), new V3(0.004, Hs * 0.5, 0), new V3(0, Hs, 0)], 0.008, 0.006, col(0x6a8a4a), col(0x5a9a48), 5);
      for (let i = 0; i < n; i++) { const f = (i + 0.5) / n; leaf(b, mul(T(0, Hs * f, 0), RY((i % 2 ? 0 : Math.PI) + r.range(-0.12, 0.12)), T(0, 0, 0.006), RX(lerp(1.25, 0.6, f) + r.range(-0.1, 0.1))), r, { L: 0.24 * g * r.range(0.85, 1.05), W: 0.024, c: col(0x3f8a48), a: 0.6, b: 0.3, base: 0.8, fold: 0.7, curl: 0.9, curlPow: 1.6, nu: 6, nv: 2, tipMix: 0.1 }); }
      for (let i = 0; i < Math.round(5 + 6 * g); i++) { const az = r() * TAU, y0 = Hs * r.range(0, 0.5), L = 0.55 * g * r.range(0.45, 1), R = r.range(0.03, 0.09), ph = r() * 6, pts = [];
        for (let k = 0; k <= 8; k++) { const t = k / 8, w = Math.sin(t * 5 + ph) * 0.02 * t; pts.push(new V3(Math.cos(az) * (R * Math.min(1, t * 4) + w), y0 - t * L, Math.sin(az) * R * Math.min(1, t * 4) + w)); }
        b.tube(null, pts, 0.0035, 0.002, col(0xb8c4b0), col(0x8aa88a), 4); }
      if (o < 0) return; const [c0, c1] = r.pick([[0x5a4ad8, 0x9a8af4], [0x8a3ac8, 0xc88af0], [0xe8508a, 0xf7a0c0]]).map(col);
      for (let s = 0; s < 2; s++) { const az = s * Math.PI + r.range(-0.4, 0.4), L = 0.36 * g, dx = Math.cos(az), dz = Math.sin(az), y0 = Hs * 0.6, pts = bez(new V3(0, y0, 0), new V3(dx * L * 0.2, y0 + L * 0.9, dz * L * 0.2), new V3(dx * L * 0.7, y0 + L * 0.85, dz * L * 0.7), 8); b.tube(null, pts, 0.0035, 0.002, col(0x5a7a44), col(0x6a8a4a), 4);
        for (let k = 0; k < 7; k++) { const { p } = polyAt(pts, lerp(0.4, 1, k / 6)), a2 = az + (k % 2 ? 1.3 : -1.3), f = new V3(Math.cos(a2), 0.2, Math.sin(a2)).normalize(), q = p.clone().addScaledVector(f, 0.025), open = clamp(o * 1.5 - (k / 7) * 0.5, 0, 1);
          if (open < 0.1) { b.blob(T(q.x, q.y, q.z), 0.007, 0.009, c0, c1, 5, 3); continue; } b.tube(null, [p, q], 0.0012, 0.001, col(0x7a9a5a), col(0x7a9a5a), 3);
          orchid(b, faceM(q, f), r, { k: 1.35, sepal: [0.034, 0.03], petal: [0.032, 0.028], sepalAz: 2.1, petalAz: 1.05, vein: 0.35, cols: [mixc(c0, W, 0.5), c0, c1], pa: 1.5, pb: 0.4, lip: (Ml, k2) => b.petal(mul(Ml, T(0, 0.002, 0.002), RX(0.8)), { L: 0.016 * k2, W: 0.009 * k2, a: 1.1, b: 0.5, cup: 1, cols: [col(0xf7d84a), shade(c0, 0.6), shade(c0, 0.6)], nu: 3, nv: 2 }) }, open); } } } });

  PF({ id: 'ciclame', name: 'Ciclame', lvl: 7, spots: ['pot', 'window'], h: 0.28, info: 'Borboletas de pétalas viradas do avesso.',
    build: (b, r, g, o) => { stalks(b, r, Math.round(10 + 12 * g), { L: 0.11 * g, out: [0.25, 1.05], r: 0.002, c: col(0x9a5a5a), tilt: [1.1, 1.7] }, (M, k) => { const c = jitterc(col(0x1f5a34), r, 0.03), cs = col(0xa8c4b0);
        pleaf(b, M, { L: 0.075 * g * k, W: 0.07 * g * k, shape: HEART, nu: 6, nv: 6, fold: 0.1, curl: 0.3, col: (u, q, out) => { const a = Math.max(Math.abs(q), Math.abs(u - 0.4) * 1.8); out.copy(a < 0.35 ? c : a < 0.72 ? cs : c); } }); });
      if (o < 0) return; const [c0, c1] = r.pick([[0xe8388a, 0xf78ab8], [0xd81e3a, 0xf0506a], [0xfaf4f6, 0xffffff], [0xb83ab8, 0xe08ae0]]).map(col), eye = col(0x8a1048);
      for (let i = 0; i < Math.round(6 + 6 * g); i++) { const az = i * GOLD + 0.5, pts = mkStem(r, 0.2 * g * r.range(0.8, 1.1), 0.05 * Math.sqrt(i), az, 0.04, 5); b.tube(null, pts, 0.0018, 0.0014, col(0x9a5a5a), col(0xa86a6a), 3);
        const p = pts[5], oo = clamp(o + r.range(-0.25, 0.1), 0, 1), k = lerp(0.5, 1, oo), M = mul(T(p.x, p.y, p.z), RY(r() * 6), RX(0.35));
        for (let j = 0; j < 5; j++) b.petal(mul(M, RY(j * 1.257), T(0, -0.004, 0.004), RX(lerp(0.05, 0.3, oo))), { L: 0.042 * k, W: 0.022 * k, a: 1.25, b: 0.5, twist: lerp(1.2, 0.4, oo), cup: 0.3, curl: -0.25, cols: [eye, c0, c1], nu: 4, nv: 2 });
        b.blob(mul(M, T(0, -0.008, 0)), 0.006, 0.006, eye, shade(c0, 0.8), 5, 3); } } });

  PF({ id: 'gloxinia', name: 'Gloxínia', lvl: 8, spots: ['pot', 'window'], h: 0.26, info: 'Sinos de veludo debruados de branco.',
    build: (b, r, g, o) => { basalLeaves(b, r, { n: Math.round(7 + 5 * g), L: 0.16 * g, W: 0.11 * g, a: 0.9, b: 0.5, tilt: 1.3, curl: 0.4, fold: 0.15, c: col(0x2f6a3a), nu: 5, nv: 4, vein: 0.35, r: 0.012 });
      if (o < 0) return; const [c0, picotee] = r.pick([[0x5a2ab8, 1], [0xc81e4a, 1], [0x7a1e8a, 0], [0xe8408a, 1]]), cc = col(c0), ce = picotee ? W : mixc(cc, W, 0.3), cT = col(0xf4eef8);
      for (let i = 0; i < Math.round(4 + 4 * g); i++) { const az = i * GOLD, d = 0.012 + 0.012 * i, Hh = 0.09 * g * r.range(0.8, 1.2), p = new V3(Math.cos(az) * d * 1.6, Hh, Math.sin(az) * d * 1.6); b.tube(null, [new V3(Math.cos(az) * d * 0.4, 0, Math.sin(az) * d * 0.4), p], 0.003, 0.0025, col(0x7a6a5a), col(0x8a7a5a), 4);
        const oo = clamp(o + r.range(-0.25, 0.1), 0, 1), k = 1.35 * lerp(0.4, 1, oo), op = lerp(0.4, 1, oo);
        b.lathe(mul(T(p.x, p.y, p.z), RY(-az + Math.PI / 2), RX(0.2 + 0.05 * i)), [[0.006, 0], [0.011, 0.014], [0.015 * op, 0.03], [0.026 * op, 0.04], [0.036 * op, 0.044], [0.04 * op, 0.0445]].map(([x, y]) => [x * k, y * k]), null, null, 18, (t, c) => { if (t < 0.45) c.copy(cT).lerp(cc, t / 0.45); else if (t < 0.85) c.copy(cc); else c.copy(cc).lerp(ce, (t - 0.85) / 0.15); }, 0.1, 6); } } });

  PF({ id: 'primula', name: 'Prímula', lvl: 5, spots: ['pot', 'window', 'bed'], h: 0.18, info: 'Buquezinho de cores vivas com olho amarelo.',
    build: (b, r, g, o) => { basalLeaves(b, r, { n: Math.round(8 + 8 * g), L: 0.11 * g, W: 0.045, a: 1.25, b: 0.6, tilt: 1.25, curl: 0.4, fold: 0.2, ruffle: 0.25, rf: 5, c: col(0x4a9444), nu: 5, nv: 4, vein: 0.35, r: 0.01 });
      if (o < 0) return; const c = r.pick([[0xe8284a, 0xf46a7a], [0x5a3ad8, 0x8a7af0], [0xf7c81e, 0xfbe36a], [0xe8408a, 0xf78ab8], [0xfaf6f0, 0xffffff], [0xf2701a, 0xf7a23a]]).map(col);
      for (let i = 0; i < Math.round(8 + 8 * g); i++) { const az = i * GOLD, d = 0.012 * Math.sqrt(i), y = (0.075 - d * 0.5) * g, x = Math.cos(az) * d * 1.4, z = Math.sin(az) * d * 1.4; b.tube(null, [new V3(0, 0, 0), new V3(x, y, z)], 0.0012, 0.001, col(0x8ab868), col(0x8ab868), 3);
        head(b, mul(T(x, y, z), RY(-az + Math.PI / 2), RX(d * 12)), r, flat5(c[0], c[1], col(0xf7d21e), { L: 0.022, W: 0.024, notch: 0.25 }), clamp(o + r.range(-0.2, 0.1), 0, 1), 1.05); } } });

  PF({ id: 'cineraria', name: 'Cinerária', lvl: 10, spots: ['pot', 'window', 'bed'], h: 0.3, info: 'Uma almofada de margaridas com anel branco.',
    build: (b, r, g, o) => { const c = r.pick([[0x3a4ad8, 0x6a7af0], [0xc81e8a, 0xe85ab0], [0x7a2ab8, 0xa86ae0], [0xe84a7a, 0xf78aa8]]).map(col);
      habitBush(b, r, { R: 0.17, H: 0.1, branches: 9, heads: 0, fill: 12, leaf: { n: 5, L: 0.085, W: 0.08, c: col(0x3a7a44), a: 0.8, b: 0.4, ruffle: 0.2, rf: 5, nv: 4, tilt: 1.4 } }, g, -1);
      if (o >= 0) domeFlowers(b, r, Math.round(24 * g), 0.16 * g, 0.23 * g, { stalk: 0.05, up: 0.4, el1: 1.2 }, (p, d) => head(b, frame(p, d), r, rays(W, c[0], c[1], { n: 12, L: 0.027, W: 0.011, cr: 0.008, single: true, nu: 2, cc: [col(0x2a2a6a), col(0x4a4a9a), col(0x8a8ac8)] }), clamp(o + r.range(-0.15, 0.1), 0, 1), 1.1)); } });

  PF({ id: 'rosa_do_deserto', name: 'Rosa-do-deserto', lvl: 16, h: 0.5, thirst: 0.3, info: 'Tronco de garrafa e flores de trombeta.',
    build: (b, r, g, o) => { const k = 0.5 + 0.5 * g, bark = col(0x9a8a78), [c0, c1] = r.pick([[0xe8286a, 0xd81e4a], [0xf78ab0, 0xe8408a], [0xfaf0f4, 0xf06a9a], [0xc8182e, 0x8a0f22]]).map(col);
      b.lathe(null, [[0.04, -0.01], [0.085, 0.01], [0.09, 0.05], [0.07, 0.1], [0.045, 0.15], [0.03, 0.19]].map(([x, y]) => [x * k, y * g]), shade(bark, 0.8), bark, 10, null, 0.08, 4);
      const nb = Math.round(3 + 2 * g);
      for (let i = 0; i < nb; i++) { const az = i * GOLD + r(), el = i ? r.range(0.35, 0.75) : 0.1, L = 0.2 * g * r.range(0.75, 1.1), y0 = 0.16 * g, tip = new V3(Math.cos(az) * Math.sin(el) * L, y0 + Math.cos(el) * L, Math.sin(az) * Math.sin(el) * L), pts = bez(new V3(Math.cos(az) * 0.012, y0 - 0.02, Math.sin(az) * 0.012), new V3(tip.x * 0.8, y0 + (tip.y - y0) * 0.4, tip.z * 0.8), tip, 5);
        b.tube(null, pts, 0.016 * k, 0.008 * k, bark, mixc(bark, col(0x7a9a6a), 0.5), 6);
        for (let j = 0; j < Math.round(5 + 4 * g); j++) leaf(b, mul(T(tip.x, tip.y - 0.004 * j, tip.z), RY(j * GOLD), T(0, 0, 0.006), RX(lerp(0.5, 1.4, j / 8))), r, { L: 0.075 * k, W: 0.026 * k, c: col(0x2f7a3a), a: 1.2, b: 0.6, fold: 0.3, curl: 0.35, nu: 4, nv: 2, tipMix: 0.15 });
        if (o >= 0) for (let j = 0; j < 2; j++) { const a2 = az + j * 2.5 + r(), f = new V3(Math.cos(a2) * 0.7, 0.75, Math.sin(a2) * 0.7).normalize(), q = tip.clone().addScaledVector(f, 0.035), oo = clamp(o + r.range(-0.2, 0.1), 0, 1), M = frame(q, f);
          b.lathe(mul(M, T(0, -0.03, 0)), [[0.003, 0], [0.005, 0.02], [0.008, 0.03]], col(0xf4c0c8), col(0xf7e8c0), 6);
          head(b, M, r, { layers: [{ n: 5, L: 0.034, W: 0.03, a: 1.5, b: 0.45, tilt: 1.25, tiltC: 0.1, cup: 0.25, curl: 0.25, twist: 0.2, cols: [col(0xfbe8d0), c0, c1], nu: 4, nv: 3 }] }, oo, 1); } } } });

  PF({ id: 'gardenia', name: 'Gardênia', lvl: 13, spots: ['pot', 'bed'], h: 0.55, info: 'Jasmim-do-cabo: um perfume que enche a casa inteira.',
    build: (b, r, g, o) => habitBush(b, r, { R: 0.26, H: 0.42, branches: 11, heads: 7, fill: 44, wood: col(0x5a4a34), stemR: 0.006, leaf: { n: 11, L: 0.075, W: 0.04, c: col(0x1a5a2a), a: 0.85, b: 0.6, tilt: 1.1, fold: 0.3 },
      head: { sepals: { n: 6, L: 0.022, W: 0.006 }, layers: [{ n: 22, golden: true, L: [0.016, 0.04], W: [0.016, 0.036], a: 1.35, b: 0.5, tilt: [0.15, 1.45], tiltC: [0.02, 0.2], curl: [-0.5, 0.15], cup: [1.1, 0.25], twist: 0.25, r: [0.001, 0.006], y: [0.01, 0], cols: [col(0xf2ecc8), col(0xfbf8ea), W], nu: 3, nv: 3, closedScale: 0.55 }] }, headK: 1.2, headUp: 0.45 }, g, o) });

  PF({ id: 'lisianto', name: 'Lisianto', lvl: 13, spots: ['pot', 'bed'], h: 0.55, info: 'Parece rosa, mas é mais leve: seda em roxo e branco.',
    build: (b, r, g, o) => { const [c0, c1, c2] = r.pick([[0x5a2aa8, 0x7a4ac8, 0x9a7ae0], [0xf4f6ec, 0xffffff, 0xffffff], [0xfaf6fa, 0xffffff, 0x7a3ac0], [0xf2a0c0, 0xf9c4d8, 0xfde6ee]]).map(col);
      habitStems(b, r, { stems: [5, 6], H: 0.48, lean: 0.2, spread: 0.06, stemR: 0.003, stemC: col(0x7a9a80), leaf: { n: 8, L: 0.06, W: 0.03, c: col(0x6a9a80), tilt: 0.9, azStep: Math.PI / 2, a: 0.8, b: 0.6 }, headsPer: 2, pedicel: 0.07,
        head: { sepals: { n: 5, L: 0.022, W: 0.004 }, layers: [{ n: 5, L: 0.042, W: 0.04, a: 1.4, b: 0.45, tilt: 0.75, tiltC: 0.1, curl: 0.5, curlC: -0.4, curlPow: 2.5, cup: 0.9, twist: 0.3, ruffle: 0.12, cols: [col(0xe8ecd0), c1, c2], closedScale: 0.6, nu: 4, nv: 3 }, { n: 5, L: 0.036, W: 0.036, a: 1.4, b: 0.45, tilt: 0.45, tiltC: 0.05, curl: 0.3, curlC: -0.4, curlPow: 2.5, cup: 1.1, twist: 0.3, ruffle: 0.12, r: 0.001, cols: [col(0xe8ecd0), c0, c2], closedScale: 0.6, nu: 4, nv: 3 }],
          center: { stamens: { n: 3, len: 0.014, spread: 0.3, c: col(0xd8e0a0), tip: col(0xf7d84a), tipR: 0.0035 } } }, headK: 1.1 }, g, o); } });

  PF({ id: 'poinsetia', name: 'Bico-de-papagaio', lvl: 11, spots: ['pot', 'bed'], h: 0.5, info: 'Poinsétia: a estrela vermelha das festas de fim de ano.',
    build: (b, r, g, o) => { const red = col(r.pick([0xd81e2a, 0xd81e2a, 0xc8182e, 0xf78aa0, 0xf4eec8])), gr = col(0x1f6a30), bl = o < 0 ? 0 : clamp(o * 1.3, 0, 1), n = Math.round(4 + 3 * g), kk = 0.5 + 0.5 * g;
      for (let s = 0; s < n; s++) { const az0 = s * GOLD, Hh = 0.36 * g * r.range(0.75, 1.05), pts = mkStem(r, Hh, 0.45 * Hh * Math.sqrt(s / n), az0, 0.04, 6); b.tube(null, pts, 0.005 * kk, 0.003, col(0x5a4a34), col(0x6a8a4a), 5);
        const nl = Math.round(4 + 4 * g);
        for (let i = 0; i < nl; i++) { const { p } = polyAt(pts, lerp(0.3, 0.9, (i + 0.5) / nl)); leaf(b, mul(T(p.x, p.y, p.z), RY(i * GOLD + s), T(0, 0, 0.004), RX(r.range(1.0, 1.4))), r, { L: 0.1 * kk, W: 0.055 * kk, c: gr, a: 0.8, b: 0.55, fold: 0.25, curl: 0.4, nu: 4, nv: 3, vein: 0.35, tipMix: 0.1 }); }
        const tp = pts[6], Mt = mul(T(tp.x, tp.y, tp.z), RY(az0), RX(0.25 * Math.min(1, s)));
        for (let i = 0; i < 13; i++) { const f = i / 12, c = jitterc(mixc(gr, red, clamp(bl * 1.6 - (1 - f) * 0.5, 0, 1)), r, 0.03); leaf(b, mul(Mt, RY(i * GOLD), T(0, 0.004 * f, 0.004), RX(lerp(1.5, 0.95, f) + r.range(-0.08, 0.08))), r, { L: lerp(0.1, 0.045, f) * kk * lerp(0.6, 1, bl), W: lerp(0.048, 0.024, f) * kk, c, tip: c, a: 0.8, b: 0.6, fold: 0.3, curl: 0.3, nu: 4, nv: 3, vein: 0.3 }); }
        if (o >= 0) for (let i = 0; i < 5; i++) b.blob(mul(Mt, T(Math.cos(i * 1.26) * 0.006, 0.008, Math.sin(i * 1.26) * 0.006)), 0.004, 0.004, col(0x8ab83a), col(0xf7d84a), 4, 3); } } });

  PF({ id: 'clivia', name: 'Clívia', lvl: 15, spots: ['pot', 'bed'], h: 0.5, info: 'Um leque verde-escuro coroado de laranja.',
    build: (b, r, g, o) => { const n = Math.round(10 + 8 * g); for (let i = 0; i < n; i++) leaf(b, mul(RY((i % 2 ? 0 : Math.PI) + r.range(-0.3, 0.3)), T(0, 0, 0.01), RX(lerp(0.25, 1.15, (i >> 1) / (n / 2)) + r.range(-0.08, 0.08))), r, { L: 0.36 * g * r.range(0.8, 1.05), W: 0.045, c: col(0x24703a), a: 0.6, b: 0.3, base: 0.8, fold: 0.35, curl: 1.0, curlPow: 1.8, nu: 6, nv: 2, tipMix: 0.08 });
      if (o < 0) return; const Hh = 0.34 * g, st = [new V3(0, 0, 0), new V3(0.01, Hh * 0.5, 0.01), new V3(0, Hh, 0)]; b.tube(null, st, 0.007, 0.006, col(0x4a8a44), col(0x5a9a50), 5);
      const mk = trumpet(col(0xf2701a), col(0xf7903a), col(0xf7dc6a), 1.15, 6);
      for (let i = 0; i < 12; i++) { const az = i * GOLD, el = lerp(0.2, 1.25, (i + 0.5) / 12), d = new V3(Math.cos(az) * Math.sin(el), Math.cos(el), Math.sin(az) * Math.sin(el)), q = new V3(0, Hh, 0).addScaledVector(d, 0.03); b.tube(null, [st[2], q], 0.0018, 0.0015, col(0x6aa058), col(0x6aa058), 3); mk(b, frame(q, d), r, clamp(o + r.range(-0.2, 0.1), 0, 1)); } } });

  PF({ id: 'bonsai_bordo', name: 'Bonsai de bordo', lvl: 18, h: 0.5, foliage: true, thirst: 0.6, info: 'Um outono inteiro em miniatura, vermelho como brasa.',
    build: (b, r, g) => habitTree(b, r, { H: 0.17, R: 0.21, trunkR: 0.026, limbs: 5, bark: col(0x6a5a4a), leaves: 300, leafSize: 0.05, leafCols: [col(0xc8281e), col(0xe8501e), col(0xa81e1e), col(0xf2801e)] }, g, -1) });
  PF({ id: 'bonsai_cerejeira', name: 'Bonsai de cerejeira', lvl: 20, h: 0.5, thirst: 0.6, info: 'Anos de paciência por uma semana de flor: vale cada dia.',
    build: (b, r, g, o) => habitTree(b, r, { H: 0.16, R: 0.21, trunkR: 0.028, limbs: 5, bark: col(0x4a3a34), foliage: 0.2, leaves: 240, leafSize: 0.045, leafCols: [col(0x4a8a3a), col(0x6aa84a)], blossom: { n: 420, size: 0.034, cols: [col(0xf9bcd2), col(0xfcd8e6), col(0xf6a4c2), W], buds: [col(0xe888ae)] } }, g, o) });

  // =====================================================================================================
  // 3. FLOWERS FOR BEDS, WINDOW BOXES AND BASKETS
  // =====================================================================================================
  const roseLeaf = { n: 13, L: 0.075, W: 0.046, c: col(0x2c6634), a: 0.85, b: 0.7, fold: 0.3, tilt: 1.1 };
  const roseH = (c, nu = 4, nv = 3) => { const sp = H.rose(col(c[0]), col(c[1]), col(c[2])); return { ...sp, layers: [{ ...sp.layers[0], nu, nv }] }; }; // same rose, lighter petals
  const roseBush = (c, P = {}) => (b, r, g, o) => habitBush(b, r, { R: 0.3, H: 0.55, branches: 12, heads: 9, stalk: 0.1, splay: 0.85, wood: col(0x4a5a34), stemR: 0.007, fill: 46, leaf: roseLeaf, head: roseH(c), headK: 1.25, headUp: 0.5, ...P }, g, o);
  A({ id: 'mini_rosa', name: 'Minirrosa', lvl: 4, spots: ['pot', 'window', 'bed'], h: 0.28, info: 'Um roseiral inteiro que cabe no parapeito.',
    build: (b, r, g, o) => { const c = r.pick([[0xc8182e, 0xe03a48, 0xf06a6a], [0xe86a96, 0xf59ab8, 0xfcd0de], [0xf0b21a, 0xf8d24a, 0xfdeea0], [0xf2e6c8, 0xfaf4e6, 0xffffff], [0xf08a5a, 0xf8b48a, 0xfde0c8]]);
      habitBush(b, r, { R: 0.15, H: 0.2, branches: 10, heads: 12, stalk: 0.1, wood: col(0x4a5a34), stemR: 0.004, fill: 26, leaf: { ...roseLeaf, n: 9, L: 0.036, W: 0.022, nu: 3 }, head: roseH(c, 3, 2), headK: 0.62, headUp: 0.5 }, g, o); } });
  A({ id: 'rosa_cha', name: 'Rosa-chá', lvl: 11, h: 0.85, info: 'Creme de bordas coradas, em haste longa para o vaso da sala.', build: roseBush([0xf7d86a, 0xfbe8a8, 0xf7a0b0], { R: 0.26, H: 0.66, heads: 6, splay: 0.7, stalk: 0.16, headK: 1.5 }) });
  A({ id: 'rosa_lilas', name: 'Rosa lilás', lvl: 13, h: 0.75, info: 'Um lilás de sonho, com perfume de limão.', build: roseBush([0x8a6ac0, 0xb49ade, 0xe0d0f4]) });
  A({ id: 'rosa_negra', name: 'Rosa negra', lvl: 17, h: 0.75, info: 'Veludo bordô tão escuro que parece noite.', build: roseBush([0x24050c, 0x4a0816, 0x7a1224]) });
  A({ id: 'roseira_tronco', name: 'Roseira-de-tronco', lvl: 15, h: 1.15, info: 'Uma copa redonda de rosas equilibrada num tronquinho.',
    build: (b, r, g, o) => { const Hh = 0.62 * g, c = r.pick([[0xe86a96, 0xf59ab8, 0xfcd0de], [0x9a0f22, 0xc8182e, 0xe03a48], [0xf2e6c8, 0xfaf4e6, 0xffffff]]);
      b.tube(null, [new V3(0, 0, 0), new V3(0.012, Hh * 0.5, 0), new V3(0, Hh, 0)], 0.013 * (0.5 + 0.5 * g), 0.01, col(0x5a4a34), col(0x5a6a3a), 6);
      b.tube(null, [new V3(0.03, 0, 0.01), new V3(0.03, Hh * 1.02, 0.01)], 0.005, 0.005, col(0xb8946a), col(0xc8a47a), 4);
      shifted(b, T(0, Hh - 0.06 * g, 0), (bb) => habitBush(bb, r, { R: 0.27, H: 0.3, branches: 13, heads: 12, stalk: 0.08, splay: 1.35, wood: col(0x4a5a34), stemR: 0.006, fill: 56, leaf: roseLeaf, head: roseH(c, 4, 2), headK: 1.1, headUp: 0.3 }, g, o)); } });
  const austin = (c0, c1) => ({ sepals: { n: 5, L: 0.03, W: 0.011 }, layers: [
    { n: 9, L: 0.052, W: 0.062, a: 1.4, b: 0.45, tilt: 1.05, tiltC: 0.2, curl: -0.35, curlC: -0.6, cup: 0.9, r: 0.008, cols: [shade(c1, 0.92), c1, mixc(c1, W, 0.4)], closedScale: 0.6, vein: 0.06 },
    { n: 34, golden: true, nu: 4, nv: 3, L: [0.014, 0.046], W: [0.016, 0.046], a: 1.4, b: 0.45, tilt: [0.05, 0.85], tiltC: [0.02, 0.2], curl: [-0.3, -0.5], curlC: -0.7, cup: [1.2, 0.8], ruffle: 0.18, rf: 3, r: [0.001, 0.009], y: [0.022, 0.004], cols: [shade(c0, 0.85), c0, mixc(c0, c1, 0.5)], cols2: [c0, mixc(c0, c1, 0.6), c1], closedScale: 0.55 }] });
  A({ id: 'rosa_inglesa', name: 'Rosa-inglesa', lvl: 18, h: 0.8, info: 'Cheia como uma peônia, perfumada como um pomar.',
    build: (b, r, g, o) => { const c = r.pick([[0xf09a6a, 0xfbd0b0], [0xf07a9e, 0xfbc8d8], [0xf2c05a, 0xfbe8b8]]).map(col); habitBush(b, r, { R: 0.3, H: 0.58, branches: 12, heads: 6, stalk: 0.1, splay: 0.85, wood: col(0x4a5a34), stemR: 0.007, fill: 46, leaf: roseLeaf, head: austin(c[0], c[1]), headK: 1.4, headUp: 0.5 }, g, o); } });

  const tulip = (id, name, lvl, info, mk) => A({ id, name, lvl, spots: ['bed', 'pot', 'window'], h: 0.45, info, build: (b, r, g, o) => habitStems(b, r, { stems: [5, 6], H: 0.4, lean: 0.12, spread: 0.1, stemR: 0.0045, stemC: col(0x7aa860), basal: { n: 9, L: 0.26, W: 0.055, a: 0.75, b: 0.6, tilt: 0.3, curl: 0.55, fold: 0.5, c: col(0x5f9a6a), r: 0.02 }, head: mk(r) }, g, o) });
  tulip('tulipa_papagaio', 'Tulipa-papagaio', 12, 'Pétalas crespas e rajadas como penas de arara.', (r) => { const [c0, c1, c2] = r.pick([[0x6aa83a, 0xe8281e, 0xf7c81e], [0x8ab84a, 0xf06a9a, 0xfaf0f0], [0x6a9a3a, 0x7a2ab0, 0xf0e0f8], [0x8ab83a, 0xf2701a, 0xf7d84a]]).map(col);
    return { layers: [0, 1].map((i) => ({ n: 3, L: 0.075, W: 0.066, a: 1.1, b: 0.55, tilt: 0.62 - i * 0.12, tiltC: 0.28, curl: -0.3, curlC: -0.75, cup: 0.8, ruffle: 0.3, rf: 4, twist: 0.5, r: 0.006 - i * 0.002, cols: [c0, c1, c2], cj: 0.09, closedScale: 0.7, vein: 0.3, nu: 6, nv: 6, notch: 0.12 })) }; });
  tulip('tulipa_negra', 'Tulipa negra', 16, 'Rainha-da-noite: um roxo tão fundo que parece preto.', () => H.tulip(col(0x3a2a3a), col(0x2a0a2e), col(0x4a1a4a)));
  A({ id: 'hortensia_branca', name: 'Hortênsia branca', lvl: 11, h: 0.7, info: 'Bolas de neve que nascem verdinhas.',
    build: (b, r, g, o) => habitBush(b, r, { R: 0.36, H: 0.5, branches: 9, heads: 8, splay: 0.95, stalk: 0.05, leaf: { n: 8, L: 0.13, W: 0.09, c: col(0x3a8040), a: 0.8, b: 0.6, fold: 0.25, curl: 0.6, tilt: 1.15, nu: 4, nv: 3 }, head: { ball: { n: 46, r: 0.095, fs: 0.034, cols: [0xfaf8f0, 0xffffff, 0xe8f0d0, 0xf4f8e8].map(col), squash: 0.75, cover: 0.35 } }, headUp: 0.6 }, g, o) });

  A({ id: 'alyssum', name: 'Flor-de-mel', lvl: 1, spots: ['bed', 'window', 'hang', 'pot'], h: 0.14, info: 'Álisso: um tapete miúdo com cheiro de mel.',
    build: (b, r, g, o) => { const c = r.pick([[0xfaf8f4, 0xffffff], [0xfaf8f4, 0xffffff], [0xb88ae0, 0xe0c8f4], [0xe88ab8, 0xfbd0e4]]).map(col);
      habitCascade(b, r, { stems: 18, L: 0.2, up: 0.35, out: 0.9, drop: 0.6, stemC: col(0x6a9a5a), stemR: 0.0015, leaf: { n: 8, L: 0.016, W: 0.005, c: col(0x5a9a54), fold: 0, nu: 2, nv: 1 },
        flower: { per: 3, make: (bb, M, rr, oo) => umbel(bb, M, rr, { n: 8, r: 0.014, dome: 0.7, fs: 0.008, np: 4, eye: col(0xe8e0a0), white: 0.3, colAt: () => rr.pick(c) }, oo) } }, g, o); } });
  A({ id: 'coreopsis', name: 'Coreópsis', lvl: 1, spots: ['bed', 'pot', 'window'], h: 0.4, info: 'Solzinhos de pétala denteada que não param de abrir.',
    build: (b, r, g, o) => habitStems(b, r, { stems: [9, 11], H: 0.36, lean: 0.35, spread: 0.08, stemR: 0.002, wob: 0.08, basal: { n: 14, L: 0.09, W: 0.014, c: col(0x4a9444), tilt: 0.9 }, leaf: { n: 4, L: 0.05, W: 0.008, c: col(0x4a9444), tilt: 0.9, fold: 0 },
      head: (rr) => { const red = rr() < 0.4; return { sepals: { n: 8, L: 0.008, W: 0.004 }, layers: [{ n: 8, L: 0.03, W: 0.02, a: 1.5, b: 0.45, tilt: 1.42, tiltC: 0.2, cup: 0.3, notch: 0.3, cols: [red ? col(0x8a1e14) : col(0xf2b21a), col(0xf7cf1e), col(0xfbe04a)], nu: 4, nv: 3 }], center: { ...YEL, r: 0.008, h: 0.006, cols: red ? [col(0x5a1a0c), col(0x8a3a14), col(0xd8901e)] : YEL.cols, seg: 7 } }; }, headK: 1.0, headTilt: 0.2 }, g, o) });
  A({ id: 'cravina', name: 'Cravina', lvl: 1, spots: ['bed', 'pot', 'window'], h: 0.22, info: 'Florzinhas franjadas com um anel de carmim.',
    build: (b, r, g, o) => { const pal = [[0xf06a9a, 0xfcd0e0, 0x8a0f3a], [0xfaf4f6, 0xffffff, 0xb81a4a], [0xd81e4a, 0xf0506a, 0x5a0a1e], [0xe84a8a, 0xffffff, 0x8a0f3a]];
      habitBush(b, r, { R: 0.15, H: 0.16, branches: 10, heads: 14, stalk: 0.2, headUp: 0.55, fill: 30, stemC: col(0x8aa890), leaf: { n: 8, L: 0.05, W: 0.007, c: col(0x7a9a88), tilt: 0.8, fold: 0, nu: 2, nv: 1 }, head: (rr) => { const p = rr.pick(pal); return flat5(col(p[0]), col(p[1]), col(p[2]), { L: 0.022, W: 0.024, notch: 0.3, ruffle: 0.15 }); }, headK: 1.05 }, g, o); } });
  A({ id: 'vinca', name: 'Vinca', lvl: 1, spots: ['bed', 'pot', 'window'], h: 0.3, info: 'Boa-noite: cata-ventos que não temem o sol do meio-dia.',
    build: (b, r, g, o) => { const p = r.pick([[0xf06aa8, 0xf7a0c8, 0xb81a5a], [0xfaf6f8, 0xffffff, 0xd8204a], [0xd82a8a, 0xf06ab0, 0x8a0f4a], [0xc8a0f0, 0xe0c8f8, 0x7a3ab8]]);
      habitBush(b, r, { R: 0.17, H: 0.24, branches: 10, heads: 13, headUp: 0.45, fill: 22, leaf: { n: 8, L: 0.055, W: 0.024, c: col(0x1f6a34), tip: col(0x8ac070), tipMix: 0.15, a: 0.9, b: 0.6, vein: 0.5, tilt: 1.1 }, head: { layers: [{ n: 5, L: 0.026, W: 0.026, a: 1.7, b: 0.45, tilt: 1.42, tiltC: 0.2, cup: 0.1, twist: 0.15, cols: [col(p[2]), col(p[0]), col(p[1])], nu: 3, nv: 2 }], center: { type: 'dome', r: 0.003, h: 0.002, cols: [col(0xf7e07a), col(0xf7e07a)], seg: 5 } }, headK: 1.1 }, g, o); } });
  A({ id: 'muscari', name: 'Muscari', lvl: 2, spots: ['bed', 'pot', 'window'], h: 0.2, info: 'Jacinto-uva: cachinhos azuis de contas.',
    build: (b, r, g, o) => { basalLeaves(b, r, { n: Math.round(10 + 8 * g), L: 0.2 * g, W: 0.008, a: 0.7, b: 0.4, tilt: 0.6, curl: 1.2, fold: 0.5, c: col(0x4a9a50), nu: 4, nv: 1 });
      stems(b, r, Math.round(4 + 4 * g), { H: 0.17, lean: 0.12, spread: 0.05, stemR: 0.0025, stemC: col(0x6aa058) }, g, (pts) => { if (o < 0) return; const n = Math.round(14 + 8 * g);
        for (let k = 0; k < n; k++) { const f = k / (n - 1), { p, d } = polyAt(pts, lerp(0.58, 1, f)), bl = clamp(o * 1.5 - f * 0.5, 0, 1), s = 0.0065 * (1 - f * 0.45) * lerp(0.5, 1, bl), c = mixc(col(0x8ab87a), mixc(col(0x3a4ad0), col(0x8a9af4), f), clamp(bl * 1.5, 0, 1));
          b.blob(mul(frame(p, d), RY(k * GOLD), T(0, 0, 0.006 * (1 - f * 0.6)), RX(1.9 - f)), s, s * 1.3, shade(c, 0.8), c, 4, 3); } }); } });
  A({ id: 'crocus', name: 'Crócus', lvl: 2, spots: ['bed', 'pot', 'window'], h: 0.14, info: 'Fura o frio para avisar que a primavera vem aí.',
    build: (b, r, g, o) => { const cw = col(0xf0f6e8); for (let i = 0; i < Math.round(12 + 10 * g); i++) { const c = jitterc(col(0x3f8a4a), r, 0.03); pleaf(b, mul(RY(i * GOLD), T(0, 0, 0.01 + 0.02 * r()), RX(r.range(0.1, 0.7))), { L: 0.15 * g * r.range(0.7, 1.1), W: 0.006, a: 0.6, b: 0.3, base: 0.7, nu: 4, nv: 2, fold: 0.3, curl: 0.8, col: (u, q, out) => out.copy(Math.abs(q) < 0.5 ? cw : c) }); }
      if (o < 0) return; const pal = [[0x7a4ac8, 0xa88ae8], [0xf7c81e, 0xfbe36a], [0xf4f0fa, 0xffffff], [0xc8a8f0, 0xe8d8fa]];
      for (let i = 0; i < Math.round(4 + 5 * g); i++) { const az = i * GOLD, d = 0.02 + 0.028 * Math.sqrt(i), Hh = 0.06 * g * r.range(0.8, 1.2), x = Math.cos(az) * d, z = Math.sin(az) * d, p = r.pick(pal).map(col); b.tube(null, [new V3(x, 0, z), new V3(x, Hh, z)], 0.003, 0.0035, col(0xe8e8d8), mixc(p[0], W, 0.5), 4);
        head(b, mul(T(x, Hh, z), RY(az), RX(r.range(0, 0.2))), r, { layers: [0, 1].map((j) => ({ n: 3, L: 0.045, W: 0.024, a: 1.15, b: 0.6, tilt: 0.5 - j * 0.1, tiltC: 0.12, curl: -0.25, curlC: -0.5, cup: 0.9, r: 0.003, cols: [mixc(p[0], W, 0.6), p[0], p[1]], closedScale: 0.75, vein: 0.3 })), center: { stamens: { n: 3, len: 0.022, spread: 0.25, c: col(0xf7a01e), tip: col(0xf2701a), tipR: 0.003 } } }, clamp(o + r.range(-0.2, 0.1), 0, 1), 1); } } });
  A({ id: 'verbena', name: 'Verbena', lvl: 3, spots: ['bed', 'window', 'hang', 'pot'], h: 0.2, info: 'Buquezinhos de olho branco que forram o chão.',
    build: (b, r, g, o) => { const c = r.pick([[0x7a2ab8, 0xa86ae0], [0xd81e3a, 0xf0506a], [0xe8408a, 0xf78ab8], [0xfaf6f8, 0xffffff], [0x4a3ad8, 0x8a7af0]]).map(col);
      habitCascade(b, r, { stems: 12, L: 0.32, up: 0.4, out: 0.85, drop: 0.7, stemC: col(0x5a8a4a), leaf: { n: 9, L: 0.032, W: 0.016, c: col(0x3f8a40), ruffle: 0.3, rf: 4, nu: 3, nv: 2 },
        flower: { per: 2, make: (bb, M, rr, oo) => umbel(bb, M, rr, { n: 13, r: 0.024, dome: 0.45, fs: 0.012, np: 5, pw: 0.85, eye: W, white: 0.1, colAt: (f) => (f < 0.3 ? c[1] : c[0]) }, oo) } }, g, o); } });
  A({ id: 'torenia', name: 'Torênia', lvl: 2, spots: ['pot', 'window', 'hang', 'bed'], h: 0.22, info: 'Amor-perfeito-de-verão, de garganta amarela.',
    build: (b, r, g, o) => { const [c0, c1] = r.pick([[0x4a2ab0, 0xc8b8f0], [0xb81e7a, 0xf7c0dc], [0x2a3ab8, 0xb8c8f8]]).map(col);
      habitBush(b, r, { R: 0.15, H: 0.18, branches: 10, heads: 14, headUp: 0.3, stalk: 0.12, fill: 22, leaf: { n: 7, L: 0.04, W: 0.022, c: col(0x4a9a44), ruffle: 0.2, rf: 4, nv: 2, tilt: 1.1 },
        head: { layers: [{ n: 2, L: 0.02, W: 0.022, a: 1.4, b: 0.45, tilt: 1.2, tiltC: 0.3, cup: 0.3, azList: [-0.5, 0.5], azStep: 0, jit: 0, cols: [c1, c1, mixc(c1, W, 0.3)], nu: 3, nv: 2 }, { n: 3, L: 0.022, W: 0.022, a: 1.4, b: 0.45, tilt: 1.35, tiltC: 0.3, cup: 0.2, azList: [-1.9, 1.9, Math.PI], jit: 0, cols: [col(0xf7d84a), c0, c0], nu: 3, nv: 2 }], center: { type: 'dome', r: 0.004, h: 0.003, cols: [c1, c1], seg: 5 } }, headK: 1.1 }, g, o); } });
  A({ id: 'papoula_california', name: 'Papoula-da-califórnia', lvl: 2, spots: ['bed', 'pot', 'window'], h: 0.3, info: 'Taças de cetim laranja que fecham quando o sol se esconde.',
    build: (b, r, g, o) => { const pal = [[0xf2701a, 0xf79a1e, 0xfbb83a], [0xf2701a, 0xf79a1e, 0xfbb83a], [0xf7c81e, 0xfbe04a, 0xfdf0a0], [0xf0e8c8, 0xfaf4e0, 0xffffff]];
      habitStems(b, r, { stems: [8, 10], H: 0.26, lean: 0.45, spread: 0.07, stemR: 0.002, stemC: col(0x8aa898), wob: 0.08, basal: { n: 22, L: 0.11, W: 0.012, c: col(0x7aa090), tilt: 0.8, curl: 0.5, ruffle: 0.5, rf: 5, nu: 4, nv: 2 }, leaf: { n: 4, L: 0.05, W: 0.008, c: col(0x7aa090), tilt: 0.8, fold: 0 },
        head: (rr) => { const p = rr.pick(pal).map(col); return { layers: [{ n: 4, L: 0.04, W: 0.046, a: 1.5, b: 0.42, tilt: 0.95, tiltC: 0.1, curl: -0.2, curlC: -0.6, cup: 0.7, twist: 0.2, cols: [p[0], p[1], p[2]], closedScale: 0.55, vein: 0.1 }], center: { stamens: { n: 9, len: 0.012, spread: 0.5, c: col(0xf7a01e), tip: col(0xf2801a), tipR: 0.0025 } } }; }, headK: 1.05, headTilt: 0.2 }, g, o); } });
  A({ id: 'lantana', name: 'Lantana', lvl: 4, spots: ['bed', 'pot', 'window'], h: 0.4, info: 'Cambará: cada cachinho muda de cor de dentro para fora.',
    build: (b, r, g, o) => { const [ci, cm, co] = r.pick([[0xf7d21e, 0xf2801e, 0xe8286a], [0xf7e04a, 0xf7a01e, 0xd81e1e], [0xfdf0a0, 0xf9c0d8, 0xb86ae0], [0xfaf4d0, 0xf7e04a, 0xf7c81e]]).map(col);
      habitBush(b, r, { R: 0.22, H: 0.3, branches: 11, heads: 0, fill: 30, wood: col(0x5a4a34), leaf: { n: 8, L: 0.05, W: 0.03, c: col(0x2f7a38), ruffle: 0.25, rf: 5, nv: 3, tilt: 1.1, vein: 0.3 } }, g, -1);
      if (o >= 0) domeFlowers(b, r, Math.round(16 * g), 0.22 * g, 0.3 * g, { stalk: 0.1 }, (p, d) => umbel(b, frame(p, d), r, { n: 16, r: 0.024, dome: 0.5, fs: 0.011, np: 4, pw: 0.9, colAt: (f) => (f < 0.4 ? ci : f < 0.72 ? cm : co), white: 0.1 }, clamp(o + r.range(-0.15, 0.1), 0, 1))); } });
  A({ id: 'campanula', name: 'Campânula', lvl: 3, spots: ['window', 'hang', 'pot', 'bed'], h: 0.18, info: 'Sininhos-estrela que escorrem pelo beiral.',
    build: (b, r, g, o) => { const c0 = col(0x6a5ad8), c1 = col(0xa89af4);
      habitCascade(b, r, { stems: 14, L: 0.26, up: 0.4, out: 0.85, drop: 0.9, stemC: col(0x5a8a4a), stemR: 0.0015, leaf: { n: 9, L: 0.02, W: 0.02, c: col(0x4a9a48), a: 1.0, b: 0.4, nu: 2, nv: 2 },
        flower: { per: 3, make: (bb, M, rr, oo) => { const k = lerp(0.4, 1, oo) * rr.range(0.85, 1.1); bb.lathe(M, [[0.003, 0], [0.009, 0.014], [0.022 * lerp(0.5, 1, oo), 0.024]].map(([x, y]) => [x * k, y * k]), null, null, 15, (t, c) => c.copy(W).lerp(t < 0.6 ? c0 : c1, clamp(t * 2.2, 0, 1)), 0.35, 5); } } }, g, o); } });
  A({ id: 'celosia_plumosa', name: 'Celósia-plumosa', lvl: 3, spots: ['bed', 'pot', 'window'], h: 0.4, info: 'Labaredas de pluma em vermelho, laranja e ouro.',
    build: (b, r, g, o) => { const [c0, c1] = r.pick([[0xc8182e, 0xf0506a], [0xf2701a, 0xf7a83a], [0xf2b81a, 0xfbe04a], [0xd81e7a, 0xf06ab0]]).map(col);
      stems(b, r, Math.round(3 + 3 * g), { H: 0.34, lean: 0.15, spread: 0.06, stemR: 0.005, stemC: mixc(col(0x5a9a48), c0, 0.3), leaf: { n: 7, L: 0.09, W: 0.03, c: mixc(col(0x4a9a44), c0, 0.12), tilt: 1.0, t0: 0.1, t1: 0.6 } }, g, (pts, az, i) => { if (o < 0) return; const k = lerp(0.35, 1, o) * (i ? 0.8 : 1);
        plume(b, r, pts, 0.52, { n: Math.round(70 * k), R: 0.028 * k, skew: 0.35, len: 0.014, w: 0.012, tilt: 0.45, cols: [c0, c1], white: 0.1 }); }); } });
  A({ id: 'centaurea', name: 'Centáurea', lvl: 3, h: 0.5, info: 'Escovinha: o azul mais azul do canteiro.',
    build: (b, r, g, o) => { const pal = [[0x2a4ae0, 0x5a7af4, 0x4a2a9a], [0x2a4ae0, 0x5a7af4, 0x4a2a9a], [0xe86aa8, 0xf7a8cc, 0x9a2a6a], [0xf4f0fa, 0xffffff, 0x8a6ac0]];
      habitStems(b, r, { stems: [8, 10], H: 0.46, lean: 0.25, spread: 0.07, stemR: 0.002, stemC: col(0x8aa890), wob: 0.07, leaf: { n: 7, L: 0.07, W: 0.006, c: col(0x7a9a88), tilt: 0.7, fold: 0 },
        head: (rr) => { const p = rr.pick(pal).map(col); return { sepals: { n: 8, L: 0.012, W: 0.008, tilt: 0.4 }, layers: [{ n: 9, L: 0.03, W: 0.018, a: 1.9, b: 0.5, tilt: 1.25, tiltC: 0.3, cup: 0.9, notch: 0.35, ruffle: 0.2, cols: [shade(p[0], 0.8), p[0], p[1]], nu: 3, nv: 3 }, { n: 7, L: 0.018, W: 0.01, a: 1.6, b: 0.5, tilt: 0.75, tiltC: 0.15, cup: 0.8, cols: [p[0], p[0], p[1]], nu: 2, nv: 2 }, { n: 9, L: 0.012, W: 0.003, a: 0.9, b: 0.8, tilt: 0.25, tiltC: 0.05, cols: [p[2], p[2], mixc(p[2], W, 0.3)], nu: 2, nv: 1 }] }; }, headK: 1.05 }, g, o); } });
  A({ id: 'girassol_anao', name: 'Girassol-anão', lvl: 4, spots: ['pot', 'bed', 'window'], h: 0.5, fixedRot: true, info: 'Um solzinho de vaso, do tamanho de um abraço.',
    build: (b, r, g, o) => habitStems(b, r, { stems: [2, 3], H: 0.42, lean: 0.06, spread: 0.1, stemR: 0.009, stemC: col(0x6a9a40), faceZ: true, wob: 0.03, leaf: { n: 6, L: 0.13, W: 0.1, a: 0.7, b: 0.75, tilt: 1.15, curl: 0.7, c: col(0x4a8a36), fold: 0.25, nu: 4, nv: 3, t0: 0.15, t1: 0.88 }, head: H.sunflower, headTilt: 1.0, headK: 0.6 }, g, o) });
  A({ id: 'dimorfoteca', name: 'Dimorfoteca', lvl: 3, spots: ['bed', 'pot', 'window'], h: 0.3, info: 'Margarida-do-cabo de miolo azul-noite.',
    build: (b, r, g, o) => { const pal = [[0xb8a8e0, 0xffffff, 0xffffff], [0x7a2ab0, 0xa85ad8, 0xc88aee], [0xe8408a, 0xf78ab8, 0xfcc0dc], [0xf2a01a, 0xf7c84a, 0xfbe07a]];
      habitBush(b, r, { R: 0.18, H: 0.22, branches: 10, heads: 11, stalk: 0.22, headUp: 0.55, fill: 22, leaf: { n: 8, L: 0.055, W: 0.016, c: col(0x4a8a48), tilt: 1.0 }, head: (rr) => { const p = rr.pick(pal).map(col); return rays(p[0], p[1], p[2], { n: 16, L: 0.036, W: 0.01, cr: 0.01, single: true, nu: 3, cc: [col(0x1e2a6a), col(0x3a3a8a), col(0xd8a82a)] }); } }, g, o); } });
  A({ id: 'nemesia', name: 'Nemésia', lvl: 4, spots: ['window', 'pot', 'bed', 'hang'], h: 0.24, info: 'Carinhas bicolores, miúdas e perfumadas.',
    build: (b, r, g, o) => { const pal = [[0xf7d21e, 0xe8286a], [0xffffff, 0x7a3ac0], [0xf7a01e, 0xd81e3a], [0xf9c0d8, 0xe8408a], [0xfdf0a0, 0xf2701a]];
      habitBush(b, r, { R: 0.16, H: 0.18, branches: 11, heads: 30, stalk: 0.12, headUp: 0.45, fill: 20, leaf: { n: 8, L: 0.035, W: 0.01, c: col(0x4a9444), tilt: 1.0, nu: 2, nv: 1 },
        head: (rr) => { const p = rr.pick(pal).map(col); return { layers: [{ n: 4, L: 0.011, W: 0.009, a: 1.3, b: 0.5, tilt: 1.2, tiltC: 0.3, azList: [-0.9, -0.3, 0.3, 0.9], azStep: 0, jit: 0, cols: [p[1], p[1], mixc(p[1], W, 0.2)], nu: 2, nv: 1 }, { n: 1, L: 0.016, W: 0.022, a: 1.5, b: 0.45, tilt: 1.4, tiltC: 0.3, azList: [Math.PI], jit: 0, notch: 0.25, cols: [col(0xf7d21e), p[0], p[0]], nu: 2, nv: 2 }] }; }, headK: 1.6 }, g, o); } });
  A({ id: 'sempre_viva', name: 'Sempre-viva', lvl: 5, h: 0.5, info: 'Pétalas de palha lustrosa: secas, continuam flores.',
    build: (b, r, g, o) => { const pal = [[0xf2b21a, 0xfbe04a], [0xf2701a, 0xf7a83a], [0xe8408a, 0xf78ab8], [0xc8182e, 0xf0506a], [0xfaf6e8, 0xffffff]];
      habitStems(b, r, { stems: [6, 8], H: 0.44, lean: 0.22, spread: 0.07, stemR: 0.003, leaf: { n: 8, L: 0.08, W: 0.014, c: col(0x5a9a50), tilt: 0.9 },
        head: (rr) => { const p = rr.pick(pal).map(col); return { sepals: { n: 8, L: 0.01, W: 0.006 }, layers: [{ n: 15, L: 0.026, W: 0.009, a: 0.8, b: 0.7, tilt: 1.3, tiltC: 0.15, curl: -0.3, cup: 0.6, cols: [p[0], p[0], p[1]], nu: 3, nv: 2 }, { n: 13, L: 0.022, W: 0.008, a: 0.8, b: 0.7, tilt: 0.95, tiltC: 0.1, curl: -0.35, cup: 0.6, y: 0.002, cols: [p[0], p[0], p[1]], nu: 3, nv: 2 }, { n: 10, L: 0.016, W: 0.007, a: 0.8, b: 0.7, tilt: 0.55, tiltC: 0.05, curl: -0.4, cup: 0.6, y: 0.004, cols: [shade(p[0], 0.9), p[0], p[1]], nu: 2, nv: 2 }], center: { ...YEL, r: 0.008, h: 0.006, y: 0.004, seg: 7 } }; }, headK: 1.15 }, g, o); } });
  A({ id: 'flox', name: 'Flox', lvl: 5, h: 0.55, info: 'Buquês redondos e perfumados no alto das hastes.',
    build: (b, r, g, o) => { const [c0, c1, eye] = r.pick([[0xf06aa8, 0xf7a0c8, 0xb81a5a], [0xb88ae8, 0xd8b8f4, 0xffffff], [0xfaf6f8, 0xffffff, 0xe8408a], [0xe8384a, 0xf47a7a, 0x8a0f2a]]).map(col);
      stems(b, r, Math.round(4 + 3 * g), { H: 0.48, lean: 0.14, spread: 0.07, stemR: 0.0035, leaf: { n: 10, L: 0.07, W: 0.018, c: col(0x3f8a44), tilt: 0.9, azStep: Math.PI / 2 } }, g, (pts) => { if (o >= 0) umbel(b, frame(pts[7], UP), r, { n: 24, r: 0.05, dome: 0.75, fs: 0.022, np: 5, pw: 0.9, eye, white: 0.15, colAt: (f) => (f < 0.5 ? c1 : c0) }, clamp(o + r.range(-0.1, 0.1), 0, 1)); }); } });
  A({ id: 'rudbequia', name: 'Rudbéquia', lvl: 5, h: 0.6, info: 'Margarida-amarela de olho preto, firme até o outono.',
    build: (b, r, g, o) => habitStems(b, r, { stems: [6, 8], H: 0.55, lean: 0.2, spread: 0.08, stemR: 0.0035, basal: { n: 10, L: 0.13, W: 0.04, c: col(0x4a8a40), tilt: 1.0 }, leaf: { n: 5, L: 0.08, W: 0.025, c: col(0x4a8a40), tilt: 1.0 },
      head: rays(col(0xd8780c), col(0xf2b21a), col(0xf9d03a), { n: 14, L: 0.05, W: 0.014, tilt: 1.5, cr: 0.015, ch: 0.014, cc: [col(0x1e140c), col(0x3a2414), col(0x5a3a1c)] }), headTilt: 0.2, headK: 1.15 }, g, o) });
  A({ id: 'gazania', name: 'Gazânia', lvl: 4, spots: ['bed', 'pot', 'window'], h: 0.24, thirst: 0.7, info: 'Sóis listrados que só abrem com céu limpo.',
    build: (b, r, g, o) => { const pal = [[0x2a1408, 0xf2701a, 0xf7a83a], [0x3a1a0c, 0xf7c81e, 0xfbe36a], [0x6a1420, 0xf06a8a, 0xfde0e8], [0x2a1408, 0xc8281e, 0xf2801e]];
      habitStems(b, r, { stems: [6, 8], H: 0.2, lean: 0.45, spread: 0.08, stemR: 0.003, basal: { n: 22, L: 0.13, W: 0.014, c: col(0x5a8a68), tip: col(0xb8c8b8), tilt: 1.0, curl: 0.4, fold: 0.3, nu: 4, nv: 2 },
        head: (rr) => { const p = rr.pick(pal).map(col); return rays(p[0], p[1], p[2], { n: 15, L: 0.044, W: 0.014, vein: 0.5, cr: 0.012, cc: [col(0xd89a0f), col(0xf5c628), col(0xf9dc55)] }); }, headTilt: 0.25, headK: 1.15 }, g, o); } });
  A({ id: 'pentas', name: 'Pentas', lvl: 5, spots: ['bed', 'pot', 'window'], h: 0.4, info: 'Estrela-do-egito: buquês de estrelinhas para as borboletas.',
    build: (b, r, g, o) => { const c = r.pick([[0xd81e3a, 0xf0506a], [0xf06aa8, 0xf9b0d0], [0xfaf6f8, 0xffffff], [0xb86ae0, 0xd8a8f0]]).map(col);
      habitBush(b, r, { R: 0.2, H: 0.3, branches: 10, heads: 0, fill: 26, leaf: { n: 8, L: 0.07, W: 0.03, c: col(0x2f7a38), tilt: 1.1, vein: 0.4 } }, g, -1);
      if (o >= 0) domeFlowers(b, r, Math.round(10 * g), 0.2 * g, 0.3 * g, { stalk: 0.12, up: 0.6 }, (p, d) => umbel(b, frame(p, d), r, { n: 20, r: 0.034, dome: 0.6, fs: 0.015, np: 5, pw: 0.5, eye: mixc(c[1], W, 0.6), colAt: () => r.pick(c) }, clamp(o + r.range(-0.15, 0.1), 0, 1))); } });
  A({ id: 'crista_de_galo', name: 'Crista-de-galo', lvl: 6, h: 0.4, info: 'Veludo franzido, vermelho como crista de galo.',
    build: (b, r, g, o) => { const [c0, c1] = r.pick([[0xa80f2a, 0xe0284a], [0xc81e7a, 0xf05aa8], [0xe8a01a, 0xf7d04a], [0xe8501e, 0xf7903a]]).map(col);
      stems(b, r, Math.round(2 + 2 * g), { H: 0.3, lean: 0.1, spread: 0.07, stemR: 0.007, stemC: mixc(col(0x5a9a48), c0, 0.4), leaf: { n: 7, L: 0.1, W: 0.035, c: mixc(col(0x4a9a44), c0, 0.1), tilt: 1.0, t0: 0.15, t1: 0.75 } }, g, (pts, az, i) => { if (o < 0) return; const k = lerp(0.3, 1, o) * (i ? 0.75 : 1), p = pts[7], cf = (u, q, out) => out.copy(c0).lerp(c1, u * u).multiplyScalar(0.7 + 0.3 * u);
        const Mc = mul(T(p.x, p.y - 0.015, p.z), RY(az)), Wd = 0.17 * k, Lc = 0.075 * k, ph = i * 1.7, sh = (u) => 0.16 + 0.84 * Math.pow(u, 0.5);
        for (const off of [-0.005, 0.005]) pleaf(b, Mc, { L: Lc, W: Wd, shape: sh, nu: 5, nv: 20, fold: 0, curl: 0, ruffle: 0.24, rf: 5, phase: ph, off: off * k, col: cf });
        for (let j = 0; j <= 20; j++) { const q = (j / 20) * 2 - 1; b.blob(mul(Mc, T(q * Wd / 2, Lc, 0.24 * Wd / 2 * Math.sin(q * Math.PI * 5 + ph + 5))), 0.0085 * k, 0.007 * k, c0, c1, 4, 2); } }); } });
  A({ id: 'plumbago', name: 'Bela-emília', lvl: 6, h: 0.55, info: 'Plumbago: chuviscos de azul-céu o verão inteiro.',
    build: (b, r, g, o) => habitBush(b, r, { R: 0.28, H: 0.4, branches: 13, heads: 16, stalk: 0.05, splay: 0.95, fill: 40, wood: col(0x5a5a3a), leaf: { n: 10, L: 0.05, W: 0.02, c: col(0x4a9a48), tilt: 1.0 }, head: { ball: { n: 13, r: 0.036, fs: 0.024, np: 5, cols: [col(0x8ab4f0), col(0xa8c8f8), col(0x9ac0f4)], squash: 0.6, cover: 0.15 } }, headUp: 0.4 }, g, o) });
  A({ id: 'russelia', name: 'Russélia', lvl: 6, spots: ['hang', 'pot', 'window'], h: 0.3, info: 'Flor-de-coral: fios verdes pingando foguinhos vermelhos.',
    build: (b, r, g, o) => habitCascade(b, r, { stems: 26, L: 0.52, up: 0.55, out: 0.62, drop: 1.6, upFall: 0.4, stemC: col(0x4a9a48), stemR: 0.0016, leaf: { n: 5, L: 0.012, W: 0.004, c: col(0x4a9a48), nu: 2, nv: 1, fold: 0 },
      flower: { per: 5, make: (bb, M, rr, oo) => { const p = new V3().setFromMatrixPosition(M), k = lerp(0.4, 1, oo); bb.lathe(mul(T(p.x, p.y - 0.004, p.z), RX(Math.PI - rr.range(0.2, 0.7)), RY(rr() * 6)), [[0.0012, 0], [0.002, 0.016 * k], [0.0045 * k, 0.022 * k]], col(0xd8201e), col(0xf2503a), 5); } } }, g, o) });
  A({ id: 'gaillardia', name: 'Gailárdia', lvl: 6, h: 0.42, info: 'Roda de fogo: vermelho por dentro, ouro nas pontas.',
    build: (b, r, g, o) => habitStems(b, r, { stems: [7, 9], H: 0.38, lean: 0.3, spread: 0.08, stemR: 0.003, basal: { n: 14, L: 0.11, W: 0.022, c: col(0x5a9050), tilt: 1.0 }, leaf: { n: 4, L: 0.06, W: 0.014, c: col(0x5a9050), tilt: 0.9 },
      head: { sepals: { n: 8, L: 0.012, W: 0.006 }, layers: [{ n: 14, L: 0.04, W: 0.017, a: 1.6, b: 0.5, tilt: 1.42, tiltC: 0.2, cup: 0.4, notch: 0.3, cols: [col(0x8a1414), col(0xd8281e), col(0xf7c81e)], nu: 4, nv: 3 }], center: { type: 'dome', r: 0.016, h: 0.012, cols: [col(0x5a1414), col(0x8a1e1e), col(0xd8a01e)], seg: 9 } }, headTilt: 0.2, headK: 1.15 }, g, o) });
  A({ id: 'nigela', name: 'Nigela', lvl: 8, h: 0.45, info: 'Dama-entre-verdes: estrela azul numa gola de renda.',
    build: (b, r, g, o) => { const pal = [[0x4a6ae0, 0x8aa8f4], [0x4a6ae0, 0x8aa8f4], [0xf4f0fa, 0xffffff], [0xe88ab8, 0xfbd0e4]];
      habitStems(b, r, { stems: [7, 9], H: 0.4, lean: 0.25, spread: 0.07, stemR: 0.002, wob: 0.07, leaf: { n: 12, L: 0.05, W: 0.003, c: col(0x5aa050), tilt: 0.9, fold: 0, nu: 2, nv: 1 },
        head: (rr) => { const p = rr.pick(pal).map(col); return { layers: [{ n: 12, L: 0.04, W: 0.0025, a: 0.8, b: 0.9, tilt: 1.35, tiltC: 0.6, curl: -0.5, cols: [col(0x5aa050), col(0x6ab058), col(0x8ac870)], nu: 3, nv: 1 }, { n: 6, L: 0.028, W: 0.018, a: 1.0, b: 0.7, tilt: 1.3, tiltC: 0.2, cup: 0.3, y: 0.002, cols: [mixc(p[0], W, 0.4), p[0], p[1]], nu: 3, nv: 2 }, { n: 6, L: 0.02, W: 0.013, a: 1.0, b: 0.7, tilt: 0.95, tiltC: 0.1, cup: 0.4, y: 0.003, cols: [p[0], p[0], p[1]], nu: 3, nv: 2 }],
          center: { type: 'dome', r: 0.006, h: 0.009, y: 0.006, cols: [col(0x5a8a3a), col(0x7aa84a), col(0x4a3a8a)], seg: 6, stamens: { n: 8, len: 0.012, spread: 0.7, c: col(0x3a3a8a), tip: col(0x2a2a6a), tipR: 0.002 } } }; }, headK: 1.1 }, g, o); } });
  A({ id: 'equinacea', name: 'Equinácea', lvl: 7, h: 0.65, info: 'Pétalas caídas em volta de um ouriço cor de cobre.',
    build: (b, r, g, o) => { const p = r.pick([[0xc84a9a, 0xe07ab8, 0xf0a8d0], [0xc84a9a, 0xe07ab8, 0xf0a8d0], [0xf4f0e6, 0xffffff, 0xffffff], [0xf2801e, 0xf7a83a, 0xfbc85a]]).map(col);
      habitStems(b, r, { stems: [5, 7], H: 0.6, lean: 0.16, spread: 0.07, stemR: 0.004, stemC: col(0x5a7a48), basal: { n: 10, L: 0.14, W: 0.04, c: col(0x3f7a40), tilt: 1.0 }, leaf: { n: 4, L: 0.08, W: 0.024, c: col(0x3f7a40), tilt: 1.0 },
        head: rays(p[0], p[1], p[2], { n: 15, L: 0.052, W: 0.012, tilt: 1.95, curl: 0.3, cr: 0.019, ch: 0.02, cc: [col(0x5a2a14), col(0xb8501e), col(0xe8902a)] }), headK: 1.15 }, g, o); } });
  A({ id: 'hosta', name: 'Hosta', lvl: 7, h: 0.45, info: 'Rainha da sombra: folhas pregueadas com debrum creme.',
    build: (b, r, g, o) => { const [cc, ce] = r.pick([[0x2f7a40, 0xf0ecc0], [0x4a8a78, 0x4a8a78], [0xb8d05a, 0x2f7a40]]).map(col);
      stalks(b, r, Math.round(9 + 9 * g), { L: 0.16 * g, out: [0.2, 1.0], r: 0.004, c: col(0x7ab068), tilt: [0.8, 1.6] }, (M, k) => { const c = jitterc(cc, r, 0.03), cd = shade(c, 0.78);
        pleaf(b, M, { L: 0.17 * g * k, W: 0.115 * g * k, shape: HEART, nu: 7, nv: 8, fold: 0.15, curl: 0.55, wave: 0.05, col: (u, q, out, i, j) => { out.copy(j % 2 ? c : cd); if (Math.abs(q) > 0.74 || u > 0.93) out.copy(ce); } }); });
      if (o >= 0) stems(b, r, 3, { H: 0.42, lean: 0.2, spread: 0.03, stemR: 0.0025, stemC: col(0x7a9a6a) }, g, (pts, az) => { for (let k = 0; k < 8; k++) { const { p } = polyAt(pts, 0.6 + k * 0.055), bl = clamp(o * 1.5 - k * 0.07, 0, 1), s = 0.03 * lerp(0.4, 1, bl), c = mixc(col(0xb8a8e0), col(0xe0d8f8), k / 8); bellF(b, mul(T(p.x + Math.cos(az) * 0.008, p.y, p.z + Math.sin(az) * 0.008), RY(-az + Math.PI / 2), RX(-0.9)), shade(c, 0.85), c, s); } }); } });
  A({ id: 'capim_do_texas', name: 'Capim-do-texas', lvl: 9, h: 0.8, thirst: 0.6, info: 'Folhas cor de vinho e rabinhos felpudos ao vento.',
    build: (b, r, g, o) => { const n = Math.round(30 + 40 * g); for (let i = 0; i < n; i++) { const c = jitterc(col(0x6a2a3a), r, 0.05); b.petal(mul(RY(i * GOLD), T(0, 0, 0.01 + 0.03 * r()), RX(lerp(0.1, 0.8, r()))), { L: 0.5 * g * r.range(0.6, 1.1), W: 0.008, a: 0.6, b: 0.3, base: 0.7, fold: 0.5, curl: lerp(0.8, 1.9, r()), curlPow: 1.8, nu: 5, nv: 1, cols: [col(0x5a6a3a), c, mixc(c, col(0xa85a6a), 0.4)] }); }
      if (o < 0) return;
      for (let i = 0; i < Math.round(7 + 6 * g); i++) { const az = i * GOLD, L = 0.72 * g * r.range(0.75, 1.05), out = r.range(0.25, 0.6), dx = Math.cos(az), dz = Math.sin(az), pts = bez(new V3(0, 0, 0), new V3(dx * L * out * 0.2, L * 0.8, dz * L * out * 0.2), new V3(dx * L * out, L * (1 - out * 0.4), dz * L * out), 10); b.tube(null, pts, 0.0018, 0.0012, col(0x7a4a4a), col(0x9a6a6a), 3);
        const k = lerp(0.3, 1, o); plume(b, r, pts, 1 - 0.3 * k, { n: Math.round(46 * k), R: 0.012, skew: 0.6, len: 0.016, w: 0.007, tilt: 0.75, cols: [col(0xc88aa0), col(0xf0d0d8)], white: 0.3 }); } } });
  A({ id: 'lavanda_francesa', name: 'Lavanda-francesa', lvl: 9, h: 0.4, info: 'Cada espiga usa um lacinho de orelhas de coelho.',
    build: (b, r, g, o) => { basalLeaves(b, r, { n: Math.round(40 * g), L: 0.12 * g, W: 0.01, c: col(0x8aa58c), tip: col(0xb8c9b0), tilt: 0.6, curl: 0.3, fold: 0.2, a: 0.8, b: 0.9, nu: 3, nv: 1 });
      stems(b, r, Math.round(8 + 10 * g), { H: 0.34, lean: 0.35, spread: 0.08, stemR: 0.002, stemC: col(0x8fae82) }, g, (pts) => { if (o < 0) return; const k = lerp(0.35, 1, o), M = frame(pts[7], polyAt(pts, 1).d);
        b.blob(mul(M, T(0, -0.016 * k, 0)), 0.008 * k, 0.02 * k, col(0x4a2a7a), col(0x6a3a9a), 6, 4);
        for (let j = 0; j < 8; j++) b.card(mul(M, T(0, -0.03 * k + j * 0.0035 * k, 0), RY(j * GOLD), T(0, 0, 0.006 * k), RX(0.9)), 0.006, 0.008 * k, col(0x5a3a9a), col(0x9a7ae0), 0, 0.5, 0.86, 0.2);
        if (o > 0.3) for (let j = 0; j < 4; j++) b.petal(mul(M, RY(j * 1.57 + 0.4), RX(0.3)), { L: 0.03 * k, W: 0.011 * k, a: 1.1, b: 0.6, curl: 0.4, ruffle: 0.2, cols: [col(0x8a5ad0), col(0xb88ae8), col(0xd8b8f4)], nu: 3, nv: 2 }); }); } });
  A({ id: 'camarao_amarelo', name: 'Camarão-amarelo', lvl: 10, h: 0.6, info: 'Espigas douradas de onde espiam florzinhas brancas.',
    build: (b, r, g, o) => { habitBush(b, r, { R: 0.24, H: 0.42, branches: 10, heads: 0, splay: 0.75, fill: 30, wood: col(0x5a5a3a), leaf: { n: 9, L: 0.09, W: 0.032, c: col(0x1f6a34), tilt: 1.1, vein: 0.4, a: 0.8, b: 0.6 } }, g, -1);
      if (o >= 0) domeFlowers(b, r, Math.round(9 * g), 0.22 * g, 0.42 * g, { stalk: 0.04, up: 0.8, el1: 0.85 }, (p, d) => { const oo = clamp(o + r.range(-0.2, 0.1), 0, 1), k = lerp(0.35, 1, oo), M = frame(p, d), n = Math.round(12 * k);
        for (let j = 0; j < n; j++) { const f = j / 12; b.petal(mul(M, T(0, j * 0.0075, 0), RY((j % 4) * 1.5708), T(0, 0, 0.003), RX(0.55)), { L: 0.026 * (1 - f * 0.4), W: 0.02 * (1 - f * 0.4), a: 1.0, b: 0.5, cup: 0.9, cols: [col(0xe8a81a), col(0xf7c81e), col(0xfbe04a)], nu: 2, nv: 2 }); }
        if (oo > 0.5) for (let j = 0; j < 3; j++) b.petal(mul(M, T(0, 0.02 + j * 0.022, 0), RY(j * 2.1 + r()), T(0, 0, 0.008), RX(1.0)), { L: 0.03, W: 0.007, a: 1.0, b: 0.7, curl: 0.5, cols: [W, W, W], nu: 3, nv: 1 }); }); } });
  A({ id: 'calibrachoa', name: 'Calibrachoa', lvl: 7, spots: ['hang', 'window', 'pot'], h: 0.22, info: 'Mini-petúnia: um milhão de sininhos em cascata.',
    build: (b, r, g, o) => { const p = r.pick([[0xf7c81e, 0xf2701a, 0xa83a0c], [0xe8286a, 0xf78ab0, 0x8a0f3a], [0x7a2ab8, 0xb87ae8, 0xf7d84a], [0xf2501e, 0xf7a03a, 0xf7e04a]]).map(col), mk = trumpet(p[0], p[1], p[2], 0.62, 5, true);
      habitCascade(b, r, { stems: 14, L: 0.4, up: 0.4, out: 0.75, drop: 1.2, stemR: 0.002, leaf: { n: 10, L: 0.024, W: 0.009, c: col(0x4a9440), a: 0.9, b: 0.65, nu: 2, nv: 1 }, flower: { per: 5, make: mk } }, g, o); } });
  A({ id: 'ixora', name: 'Ixora', lvl: 10, h: 0.55, info: 'Buquês redondos de fogo em cerca viva lustrosa.',
    build: (b, r, g, o) => { const c = r.pick([[0xe8281e, 0xf2501e, 0xd81e1e], [0xf2701a, 0xf7901e, 0xf2501e], [0xf7c81e, 0xfbdc4a, 0xf2a81a], [0xf06a9a, 0xf9a0c0, 0xe8408a]]).map(col);
      habitBush(b, r, { R: 0.28, H: 0.42, branches: 12, heads: 9, stalk: 0.06, fill: 50, wood: col(0x5a4a34), stemR: 0.006, leaf: { n: 11, L: 0.06, W: 0.03, c: col(0x1f6030), a: 0.85, b: 0.65, tilt: 1.1 }, head: { ball: { n: 30, r: 0.05, fs: 0.022, np: 4, cols: c, squash: 0.65, cover: 0.25 } }, headUp: 0.55 }, g, o); } });
  A({ id: 'escabiosa', name: 'Escabiosa', lvl: 9, h: 0.55, info: 'Flor-de-alfineteiro, de babados lilases.',
    build: (b, r, g, o) => { const p = r.pick([[0x8a8ae0, 0xb8b8f4], [0x8a8ae0, 0xb8b8f4], [0x5a1430, 0x8a2a4a], [0xf0a0c8, 0xfbd8e8]]).map(col);
      habitStems(b, r, { stems: [7, 9], H: 0.5, lean: 0.25, spread: 0.07, stemR: 0.002, wob: 0.07, basal: { n: 12, L: 0.1, W: 0.022, c: col(0x5a9058), tilt: 1.0, ruffle: 0.3, rf: 4, nv: 3 }, leaf: { n: 3, L: 0.05, W: 0.008, c: col(0x5a9058), tilt: 0.9 },
        head: { sepals: { n: 8, L: 0.01, W: 0.005 }, layers: [{ n: 12, L: 0.022, W: 0.018, a: 1.6, b: 0.45, tilt: 1.42, tiltC: 0.2, cup: 0.3, notch: 0.25, ruffle: 0.25, cols: [shade(p[0], 0.85), p[0], p[1]], nu: 3, nv: 3 }, { n: 12, L: 0.013, W: 0.011, a: 1.5, b: 0.45, tilt: 1.1, tiltC: 0.15, cup: 0.4, y: 0.002, ruffle: 0.2, cols: [p[0], p[0], p[1]], nu: 2, nv: 2 }],
          center: { type: 'dome', r: 0.013, h: 0.008, y: 0.002, cols: [shade(p[0], 0.8), p[0], p[1]], seg: 9, stamens: { n: 7, len: 0.012, spread: 0.9, c: p[1], tip: W, tipR: 0.0025 } } }, headK: 1.15, headTilt: 0.15 }, g, o); } });
  A({ id: 'angelica', name: 'Angélica', lvl: 10, h: 0.85, info: 'Nardo: ao cair da noite perfuma o jardim inteiro.',
    build: (b, r, g, o) => habitSpike(b, r, { stems: [3, 4], H: 0.8, lean: 0.08, stemR: 0.005, florets: 18, from: 0.55, type: 'flower', fs: 0.028, off: 0.01, whorl: 2.0, taper: 0.4, cols: [col(0xfaf8ee), W], bud: col(0xd8c8b0), basal: { n: 16, L: 0.4, W: 0.016, a: 0.7, b: 0.35, tilt: 0.45, curl: 1.2, fold: 0.5, c: col(0x4a9a50), nu: 5, nv: 2 }, leaf: { n: 5, L: 0.1, W: 0.012, c: col(0x4a9a50) } }, g, o) });
  A({ id: 'dalia_pompom', name: 'Dália-pompom', lvl: 12, h: 0.6, info: 'Bolinhas perfeitas, pétala por pétala em favo.',
    build: (b, r, g, o) => { const p = r.pick([[0xc8283e, 0xe85a5a], [0xe85a9a, 0xf7a8c8], [0xf2a01a, 0xfbd04a], [0x7a1e6a, 0xb85aa8], [0xfaf4e6, 0xffffff]]).map(col);
      habitBush(b, r, { R: 0.24, H: 0.48, branches: 8, heads: 7, stalk: 0.16, splay: 0.8, leaf: { n: 8, L: 0.09, W: 0.045, c: col(0x35763a), tilt: 1.1 },
        head: { sepals: { n: 8, L: 0.014, W: 0.008 }, layers: [{ n: 64, golden: true, L: [0.012, 0.026], W: [0.01, 0.018], a: 1.0, b: 0.8, tilt: [0.05, 2.55], tiltC: [0.02, 0.5], curl: [-0.4, -0.2], curlC: -0.5, cup: [1.8, 1.5], r: [0.001, 0.008], y: [0.03, 0.014], cols: [shade(p[0], 0.8), p[0], p[1]], nu: 2, nv: 2, closedScale: 0.5 }] }, headK: 1.25, headUp: 0.4 }, g, o); } });
  A({ id: 'lirio_do_vale', name: 'Lírio-do-vale', lvl: 9, spots: ['bed', 'pot', 'window'], h: 0.2, info: 'Sininhos brancos de perfume inesquecível.',
    build: (b, r, g, o) => { const n = Math.round(4 + 4 * g);
      for (let i = 0; i < n; i++) { const az = i * GOLD, d = 0.02 + 0.03 * Math.sqrt(i), x = Math.cos(az) * d, z = Math.sin(az) * d;
        for (let j = 0; j < 2; j++) leaf(b, mul(T(x, 0, z), RY(az + j * Math.PI + 0.5), T(0, 0, 0.004), RX(r.range(0.2, 0.45))), r, { L: 0.17 * g * r.range(0.85, 1.1), W: 0.06 * (0.5 + 0.5 * g), c: col(0x3a8a44), a: 0.9, b: 0.6, cup: 0.6, fold: 0.3, curl: 0.5, nu: 5, nv: 3, vein: 0.3 });
        if (o < 0) continue; const L = 0.19 * g * r.range(0.85, 1.05), dx = Math.cos(az), dz = Math.sin(az), pts = bez(new V3(x, 0, z), new V3(x + dx * 0.01, L * 0.95, z + dz * 0.01), new V3(x + dx * L * 0.45, L * 0.9, z + dz * L * 0.45), 8); b.tube(null, pts, 0.0016, 0.001, col(0x6aa058), col(0x8ab868), 3);
        for (let k = 0; k < 7; k++) { const { p } = polyAt(pts, 0.5 + k * 0.075), bl = clamp(o * 1.5 - k * 0.08, 0, 1), s = 0.016 * lerp(0.4, 1, bl) * (1 - k * 0.05), q = new V3(p.x - dz * 0.002, p.y - 0.008, p.z + dx * 0.002); b.tube(null, [p, q], 0.0006, 0.0006, col(0x8ab868), col(0x8ab868), 3); bellF(b, T(q.x, q.y, q.z), col(0xf0f4e0), W, s); } } } });
  A({ id: 'heuchera', name: 'Heuchera', lvl: 10, spots: ['bed', 'pot', 'window'], h: 0.4, info: 'Folhagem de caramelo, vinho ou limão, com varinhas de sininhos.',
    build: (b, r, g, o) => { const [c0, c1] = r.pick([[0x5a1e3a, 0x8a3a5a], [0xc8783a, 0xe8a85a], [0x9ac83a, 0xc8e06a], [0x6a4a6a, 0xb8a8b8]]).map(col);
      stalks(b, r, Math.round(12 + 12 * g), { L: 0.12 * g, out: [0.2, 1.05], r: 0.002, c: col(0x8a5a5a), tilt: [0.9, 1.6] }, (M, k) => { const c = jitterc(c0, r, 0.04), cl = jitterc(c1, r, 0.03);
        pleaf(b, mul(M, T(0, -0.012 * g, 0)), { L: 0.085 * g * k, W: 0.09 * g * k, shape: (u) => ROUND(u) * (0.86 + 0.14 * Math.abs(Math.sin(u * 9.5))), nu: 8, nv: 6, fold: 0.1, curl: 0.3, wave: 0.12, wf: 20, phase: r() * 6, col: (u, q, out, i) => { out.copy(c).lerp(cl, clamp(Math.abs(q) * 0.9 + (i % 2) * 0.25, 0, 1)); } }); });
      if (o >= 0) habitSpike(b, r, { stems: [4, 5], H: 0.4, lean: 0.25, stemR: 0.0015, stemC: col(0x9a5a5a), florets: 16, from: 0.55, type: 'card', fs: 0.007, off: 0.006, whorl: 2.0, taper: 0.3, cols: [col(0xf7b0b8), col(0xfbe0dc)], bud: col(0xc88a8a) }, g, o); } });
  A({ id: 'hemerocale', name: 'Hemerocale', lvl: 9, h: 0.6, info: 'Lírio-de-um-dia: cada flor dura um dia, mas nunca falta flor.',
    build: (b, r, g, o) => { const p = r.pick([[0xf2801e, 0xf7a83a, 0xf7e04a], [0xf7c81e, 0xfbe36a, 0xd8e06a], [0xb8281e, 0xe0503a, 0xf7d84a], [0xf2a08a, 0xfbd0c0, 0xf7e04a]]).map(col);
      habitStems(b, r, { stems: [3, 4], H: 0.55, lean: 0.2, spread: 0.07, stemR: 0.004, basal: { n: 26, L: 0.42, W: 0.018, a: 0.7, b: 0.35, tilt: 0.5, curl: 1.3, fold: 0.5, c: col(0x4a9a48), nu: 6, nv: 2 }, head: H.lily(p[0], p[1], p[2]), headsPer: 2, pedicel: 0.05, headTilt: 0.8, headK: 0.95 }, g, o); } });
  A({ id: 'geranio_pendente', name: 'Gerânio-pendente', lvl: 10, spots: ['hang', 'window'], h: 0.3, info: 'Gerânio-hera: cascatas floridas das sacadas.',
    build: (b, r, g, o) => { const c = r.pick([[0xe8286a, 0xf46a9a], [0xd81e2a, 0xf0504a], [0xf9b0d0, 0xfde0ec], [0xb86ae0, 0xd8a8f0]]).map(col);
      habitCascade(b, r, { stems: 12, L: 0.5, up: 0.35, out: 0.65, drop: 1.4, stemC: col(0x6a9a4a), leaf: { n: 9, L: 0.045, W: 0.05, c: col(0x2f8a3c), a: 1.0, b: 0.3, fold: 0.1, curl: 0.2, nu: 3, nv: 3 },
        flower: { per: 2, make: (bb, M, rr, oo) => umbel(bb, M, rr, { n: 9, r: 0.03, dome: 0.5, fs: 0.02, np: 5, pw: 0.85, eye: mixc(c[0], col(0x5a0a2a), 0.4), colAt: () => rr.pick(c) }, oo) } }, g, o); } });
  A({ id: 'astilbe', name: 'Astilbe', lvl: 12, h: 0.6, info: 'Plumas de algodão-doce para os cantos de sombra.',
    build: (b, r, g, o) => { const [c0, c1] = r.pick([[0xe85a9a, 0xf7a8c8], [0xc8182e, 0xf0506a], [0xfaf4f0, 0xffffff], [0xb88ae0, 0xe0c8f4]]).map(col);
      stalks(b, r, Math.round(8 + 8 * g), { L: 0.2 * g, out: [0.3, 1.0], r: 0.002, c: col(0x7a5a4a), tilt: [0.9, 1.5] }, (M) => fanLeaf(b, M, r, { n: 5, L: 0.07 * (0.5 + 0.5 * g), W: 0.03, c: col(0x2f7a3a), spread: 2.4, ruffle: 0.4, rf: 5, nu: 3, nv: 3, a: 0.8, b: 0.6 }));
      stems(b, r, Math.round(3 + 3 * g), { H: 0.55, lean: 0.14, spread: 0.06, stemR: 0.003, stemC: col(0x8a5a4a) }, g, (pts) => { if (o < 0) return; const k = lerp(0.35, 1, o);
        for (let j = 0; j < 12; j++) { const f = j / 11, { p } = polyAt(pts, lerp(0.5, 0.96, f)), a = j * GOLD, bl = 0.07 * k * (1 - f * 0.75), q = new V3(p.x + Math.cos(a) * bl, p.y + bl * 0.9, p.z + Math.sin(a) * bl); plume(b, r, [p, q], 0, { n: Math.round(9 * k * (1 - f * 0.5)) + 2, R: 0.008, skew: 0.5, len: 0.01, w: 0.009, tilt: 0.7, cols: [c0, c1] }); }
        plume(b, r, pts, 0.9, { n: 10, R: 0.008, len: 0.01, w: 0.009, cols: [c0, c1] }); }); } });
  A({ id: 'amaranto', name: 'Amaranto', lvl: 11, spots: ['bed'], h: 1.0, info: 'Rabo-de-raposa: cordões carmim que quase tocam o chão.',
    build: (b, r, g, o) => { const cr = col(0xa80f3a), cl = col(0xe0406a);
      stems(b, r, g > 0.7 ? 3 : 2, { H: 0.85, lean: 0.1, spread: 0.1, stemR: 0.009, stemC: col(0x9a3a4a), wob: 0.03, leaf: { n: 9, L: 0.16, W: 0.085, c: col(0x4a8a40), tip: col(0x9a4a4a), tipMix: 0.3, a: 0.8, b: 0.6, tilt: 1.15, curl: 0.6, nu: 4, nv: 3, t0: 0.15, t1: 0.9 } }, g, (pts, az) => { if (o < 0) return; const k = lerp(0.25, 1, o);
        for (let j = 0; j < 6; j++) { const { p } = polyAt(pts, 1 - j * 0.07), a = az + j * GOLD, L = 0.42 * k * r.range(0.6, 1) * (1 - j * 0.08), R = 0.05 + 0.02 * j, dx = Math.cos(a), dz = Math.sin(a), tp = [];
          for (let i = 0; i <= 12; i++) { const t = i / 12, x = R * (1 - Math.pow(1 - t, 3)) + Math.sin(t * 6 + j) * 0.012 * t; tp.push(new V3(p.x + dx * x, p.y + 0.1 * t - L * 1.2 * Math.pow(t, 1.5), p.z + dz * x)); }
          const ph = r() * 6; b.tube(null, tp, (t) => (0.004 + 0.011 * Math.sin(Math.PI * Math.min(1, t * 1.6 + 0.05)) * (1 - t * 0.5)) * (1 + 0.22 * Math.sin(t * 46 + ph)) * (0.6 + 0.4 * k), 0, cr, cl, 6); } }); } });
  A({ id: 'fresia', name: 'Frésia', lvl: 12, spots: ['bed', 'pot', 'window'], h: 0.4, info: 'Funis perfumados enfileirados como num pente.',
    build: (b, r, g, o) => { basalLeaves(b, r, { n: Math.round(8 + 6 * g), L: 0.28 * g, W: 0.014, a: 0.7, b: 0.35, tilt: 0.25, curl: 0.4, fold: 0.5, c: col(0x4a9a50), nu: 4, nv: 2, r: 0.015 });
      if (o < 0) return; const p = r.pick([[0xf7c81e, 0xfbe36a], [0xd81e3a, 0xf0506a], [0x7a3ac0, 0xb88ae8], [0xfaf6ee, 0xffffff], [0xf06aa8, 0xf9b0d0]]).map(col);
      for (let s = 0; s < Math.round(3 + 2 * g); s++) { const az = s * GOLD + r(), L = 0.34 * g * r.range(0.8, 1.05), dx = Math.cos(az), dz = Math.sin(az), pts = bez(new V3(0, 0, 0), new V3(dx * L * 0.12, L * 1.0, dz * L * 0.12), new V3(dx * L * 0.55, L * 0.9, dz * L * 0.55), 10); b.tube(null, pts, 0.002, 0.0012, col(0x5a9a50), col(0x7ab068), 3);
        for (let k = 0; k < 6; k++) { const pp = polyAt(pts, 0.56 + k * 0.085).p, open = clamp(o * 1.6 - k * 0.16, 0, 1), sc = 1.2 - k * 0.13;
          if (open < 0.12) { b.blob(T(pp.x, pp.y + 0.008 * sc, pp.z), 0.004 * sc, 0.009 * sc, col(0x9ab87a), p[0], 4, 3); continue; }
          trumpet(p[0], p[1], mixc(p[0], col(0xf7e07a), 0.5), 0.85 * sc, 6)(b, mul(T(pp.x, pp.y, pp.z), RY(-az + Math.PI / 2), RX(-0.25 + k * 0.08)), r, open); } } } });
  A({ id: 'moreia', name: 'Moreia', lvl: 10, spots: ['bed'], h: 0.65, info: 'Leques de espadas e borboletas brancas de três asas.',
    build: (b, r, g, o) => { basalLeaves(b, r, { n: Math.round(18 + 16 * g), L: 0.55 * g, W: 0.014, a: 0.7, b: 0.3, tilt: 0.28, curl: 0.5, fold: 0.5, c: col(0x3f8a50), nu: 5, nv: 2, r: 0.03 });
      habitStems(b, r, { stems: [4, 5], H: 0.58, lean: 0.18, spread: 0.08, stemR: 0.003, stemC: col(0x4a8a50),
        head: { layers: [{ n: 3, L: 0.04, W: 0.03, a: 1.3, b: 0.5, tilt: 1.35, tiltC: 0.2, cup: 0.2, cols: [col(0xf7c81e), W, W], nu: 4, nv: 3 }, { n: 3, L: 0.032, W: 0.02, a: 1.2, b: 0.5, tilt: 1.25, tiltC: 0.15, cup: 0.2, cols: [col(0xe8d8a0), W, W], nu: 3, nv: 2 }, { n: 3, L: 0.018, W: 0.008, a: 1.0, b: 0.6, tilt: 0.6, tiltC: 0.1, az: 1.05, y: 0.002, cols: [col(0x9a8ae0), col(0x8a7ad8), col(0xc8b8f4)], nu: 2, nv: 2 }] }, headsPer: 2, pedicel: 0.05, headK: 1.15 }, g, o); } });
  A({ id: 'salvia_azul', name: 'Sálvia-azul', lvl: 11, h: 0.55, info: 'Espigas anil que zumbem de abelhas.',
    build: (b, r, g, o) => { basalLeaves(b, r, { n: Math.round(16 * g), L: 0.09 * g, W: 0.03, c: col(0x5a9060), tilt: 1.0 });
      habitSpike(b, r, { stems: [10, 12], H: 0.5, lean: 0.28, stemR: 0.0025, stemC: col(0x5a5a9a), florets: 26, from: 0.5, type: 'card', fs: 0.012, off: 0.004, whorl: 1.5, taper: 0.45, cols: [col(0x3a3ac0), col(0x6a6af0)], bud: col(0x7a7aa8), leaf: { n: 6, L: 0.05, W: 0.016, c: col(0x5a9060) } }, g, o); } });
  A({ id: 'heleboro', name: 'Heléboro', lvl: 14, h: 0.4, info: 'Rosa-de-natal: floresce de cabeça baixa no frio.',
    build: (b, r, g, o) => { const p = r.pick([[0x8a3a5a, 0xc87a98, 0xe8b8c8], [0xe8f0d0, 0xf8faf0, 0xffffff], [0x3a1428, 0x5a2440, 0x7a3a5a], [0xd8a8b8, 0xf0d0d8, 0xc8d8a0]]).map(col);
      stalks(b, r, Math.round(6 + 6 * g), { L: 0.2 * g, out: [0.3, 1.0], r: 0.003, c: col(0x6a7a4a), tilt: [1.0, 1.6] }, (M) => fanLeaf(b, M, r, { n: 7, L: 0.1 * (0.5 + 0.5 * g), W: 0.028, c: col(0x1f5a30), spread: 2.9, sideShrink: 0.35, a: 0.9, b: 0.5, fold: 0.3, curl: 0.4, nu: 4, nv: 2 }));
      habitStems(b, r, { stems: [4, 5], H: 0.3, lean: 0.3, spread: 0.07, stemR: 0.004, stemC: col(0x7a8a5a), leaf: { n: 2, L: 0.05, W: 0.02, c: col(0x3a7a40), tilt: 0.9 }, headsPer: 2, pedicel: 0.05,
        head: { layers: [{ n: 5, L: 0.036, W: 0.036, a: 1.3, b: 0.5, tilt: 1.15, tiltC: 0.15, cup: 0.6, cols: [p[2], p[1], p[0]], cj: 0.05, nu: 4, nv: 3, vein: 0.25 }], center: { type: 'dome', r: 0.007, h: 0.006, cols: [col(0x8ab84a), col(0xb8d06a)], seg: 6, stamens: { n: 8, len: 0.014, spread: 0.8, c: col(0xf0f0c8), tip: col(0xf7e08a), tipR: 0.003 } } }, headTilt: 1.5, headK: 1.2 }, g, o); } });
  A({ id: 'aquilegia', name: 'Aquilégia', lvl: 14, h: 0.55, info: 'Columbina: cinco pombinhas de espora bebendo juntas.',
    build: (b, r, g, o) => { const pal = [[0x4a5ad8, 0xf4f4ff], [0xd8284a, 0xf7d84a], [0xe86aa8, 0xfaf0f6], [0x6a2a9a, 0xb88ae8]];
      habitSpike(b, r, { stems: [0, 0], H: 0.1, florets: 0, cols: [W, W], basalFan: { count: Math.round(8 + 6 * g), stalk: 0.17, n: 5, L: 0.045, W: 0.04, c: col(0x5a9a70), spread: 3.2, a: 1.2, b: 0.4, ruffle: 0.3, rf: 3, nu: 3, nv: 3 } }, g, -1);
      const [cs, cp] = r.pick(pal).map(col);
      stems(b, r, Math.round(4 + 3 * g), { H: 0.5, lean: 0.2, spread: 0.06, stemR: 0.002, stemC: col(0x7a8a6a), wob: 0.06 }, g, (pts, az) => { if (o < 0) return;
        for (let h = 0; h < 2; h++) { const { p } = polyAt(pts, 1 - h * 0.16), a = az + h * 2.4 + r(), q = new V3(p.x + Math.cos(a) * 0.04, p.y + 0.02, p.z + Math.sin(a) * 0.04); b.tube(null, bez(p, new V3(p.x + Math.cos(a) * 0.02, p.y + 0.035, p.z + Math.sin(a) * 0.02), q, 4), 0.001, 0.0008, col(0x7a8a6a), col(0x7a8a6a), 3);
          const oo = clamp(o + r.range(-0.2, 0.1), 0, 1), k = 1.45 * lerp(0.45, 1, oo), M = frame(q, new V3(Math.cos(a) * 0.8, -0.6, Math.sin(a) * 0.8).normalize());
          for (let j = 0; j < 5; j++) { const Mj = mul(M, RY(j * 1.257)); b.petal(mul(Mj, T(0, 0, 0.003), RX(lerp(0.3, 1.25, oo))), { L: 0.03 * k, W: 0.014 * k, a: 0.9, b: 0.7, cup: 0.3, cols: [cs, cs, mixc(cs, W, 0.25)], nu: 3, nv: 2 });
            b.petal(mul(Mj, RY(0.63), T(0, 0.002, 0.004), RX(0.3)), { L: 0.016 * k, W: 0.012 * k, a: 1.3, b: 0.5, cup: 0.9, cols: [cp, cp, mixc(cp, W, 0.3)], nu: 2, nv: 2 });
            b.tube(mul(Mj, RY(0.63)), [new V3(0, 0, 0.004), new V3(0, -0.016 * k, 0.007 * k), new V3(0, -0.03 * k, 0.004 * k)], 0.0022 * k, 0.0008, cp, cs, 4); }
          b.blob(mul(M, T(0, 0.012 * k, 0)), 0.003, 0.008 * k, col(0xf7e07a), col(0xf7d84a), 4, 3); } }); } });
  A({ id: 'capim_dos_pampas', name: 'Capim-dos-pampas', lvl: 14, spots: ['bed'], h: 1.7, thirst: 0.6, info: 'Penachos de seda mais altos que a jardineira.',
    build: (b, r, g, o) => { const n = Math.round(50 + 60 * g); for (let i = 0; i < n; i++) { const c = jitterc(col(0x6a9a5a), r, 0.05); b.petal(mul(RY(i * GOLD), T(0, 0, 0.02 + 0.05 * r()), RX(lerp(0.05, 0.7, r()))), { L: 0.95 * g * r.range(0.6, 1.1), W: 0.012, a: 0.6, b: 0.3, base: 0.7, fold: 0.5, curl: lerp(1.0, 2.3, r()), curlPow: 2, nu: 6, nv: 1, cols: [col(0x8a9a5a), c, mixc(c, col(0xc8c890), 0.4)] }); }
      if (o < 0) return; const k = lerp(0.3, 1, o);
      stems(b, r, Math.round(4 + 4 * g), { H: 1.55, lean: 0.1, spread: 0.08, stemR: 0.005, stemC: col(0xb8b07a), wob: 0.02 }, g, (pts) => plume(b, r, pts, 1 - 0.3 * k, { n: Math.round(120 * k), R: 0.05 * k, skew: 0.45, len: 0.05, w: 0.016, tilt: 0.3, cols: [col(0xe8dcc0), col(0xfaf4e6)], white: 0.3 })); } });
  A({ id: 'coracao_sangrento', name: 'Coração-sangrento', lvl: 15, h: 0.55, info: 'Coraçõezinhos cor-de-rosa pendurados num varal.',
    build: (b, r, g, o) => { const [c0, c1] = r.pick([[0xe8386a, 0xf78aa8], [0xe8386a, 0xf78aa8], [0xfaf4f4, 0xffffff]]).map(col);
      stalks(b, r, Math.round(7 + 7 * g), { L: 0.24 * g, out: [0.3, 1.0], r: 0.002, c: col(0x9a6a5a), tilt: [0.9, 1.5] }, (M) => fanLeaf(b, M, r, { n: 5, L: 0.075 * (0.5 + 0.5 * g), W: 0.04, c: col(0x4a9a54), spread: 2.5, ruffle: 0.45, rf: 4, nu: 3, nv: 3, a: 0.85, b: 0.5 }));
      if (o < 0) return;
      for (let s = 0; s < Math.round(3 + 2 * g); s++) { const az = s * GOLD + 0.7, L = 0.5 * g * r.range(0.8, 1.05), dx = Math.cos(az), dz = Math.sin(az), pts = bez(new V3(0, 0, 0), new V3(dx * L * 0.25, L * 0.95, dz * L * 0.25), new V3(dx * L * 0.9, L * 0.55, dz * L * 0.9), 10); b.tube(null, pts, 0.0022, 0.001, col(0x9a5a5a), col(0xb86a6a), 3);
        for (let k = 0; k < 8; k++) { const pp = polyAt(pts, 0.42 + k * 0.075).p, bl = clamp(o * 1.6 - k * 0.1, 0, 1), sc = (1 - k * 0.07) * lerp(0.4, 1, bl), M = mul(T(pp.x, pp.y - 0.012, pp.z), RY(-az), RX(Math.PI), S(sc, sc, sc * 0.5));
          b.tube(null, [pp, new V3(pp.x, pp.y - 0.012, pp.z)], 0.0006, 0.0006, col(0xb86a6a), col(0xb86a6a), 3);
          b.lathe(M, [[0.001, 0], [0.012, 0.003], [0.017, 0.012], [0.014, 0.023], [0.004, 0.036]], c0, c1, 7);
          for (const sd of [-1, 1]) b.petal(mul(M, T(sd * 0.003, 0.033, 0), RZ(-sd * 1.9)), { L: 0.012, W: 0.008, a: 1.0, b: 0.6, curl: -0.6, cols: [c1, c1, mixc(c1, W, 0.4)], nu: 2, nv: 1 });
          b.blob(mul(M, T(0, 0.042, 0)), 0.004, 0.008, W, col(0xfbe8ec), 4, 2); } } } });
  A({ id: 'lirio_stargazer', name: 'Lírio-estrela', lvl: 15, h: 0.85, info: 'Stargazer: rosa sardento que olha para o céu.',
    build: (b, r, g, o) => habitStems(b, r, { stems: [3, 4], H: 0.75, lean: 0.12, spread: 0.07, stemR: 0.006, leaf: { n: 22, L: 0.11, W: 0.02, tilt: 0.95, c: col(0x2f7a3c), t0: 0.08, t1: 0.82, taper: 0.5 },
      head: { layers: [0, 1].map((j) => ({ n: 3, L: 0.1 - j * 0.005, W: 0.042 - j * 0.006, a: 0.9, b: 0.7, tilt: 0.95, tiltC: 0.12, curl: 1.3, curlC: -0.2, curlPow: 2.2, cup: 0.6, ruffle: 0.12, cols: [col(0x8a0f3a), col(0xe0286a), col(0xfdf0f4)], vein: 0.45, cj: 0.03, closedScale: 0.75, nu: 6, nv: 4 })), center: { stamens: { n: 6, len: 0.07, spread: 0.45, c: col(0xcfe0a0), tip: col(0x8a3a14), tipR: 0.005 } } }, headsPer: 3, pedicel: 0.07, headTilt: 0.5, headK: 1.1 }, g, o) });
  A({ id: 'orquidea_bambu', name: 'Orquídea-bambu', lvl: 17, h: 1.0, info: 'Orquídea de jardim: varas de bambu com catleias na ponta.',
    build: (b, r, g, o) => stems(b, r, Math.round(4 + 4 * g), { H: 0.9, lean: 0.1, spread: 0.08, stemR: 0.004, stemC: col(0x5a9a48), wob: 0.03 }, g, (pts, az) => { const nl = Math.round(12 * g);
      for (let i = 0; i < nl; i++) { const { p } = polyAt(pts, 0.12 + i * 0.065); leaf(b, mul(T(p.x, p.y, p.z), RY(az + (i % 2 ? 1.57 : -1.57) + r.range(-0.2, 0.2)), RX(r.range(0.7, 1.0))), r, { L: 0.17 * (0.5 + 0.5 * g), W: 0.014, c: col(0x4a9a48), a: 0.6, b: 0.35, fold: 0.5, curl: 0.9, nu: 4, nv: 1 }); }
      if (o < 0) return; const p = pts[7];
      for (let h = 0; h < 2; h++) { const a = az + h * 2.6 + r(), f = new V3(Math.cos(a), 0.2, Math.sin(a)).normalize(), q = new V3(p.x + f.x * 0.03, p.y + 0.02 - h * 0.05, p.z + f.z * 0.03), open = clamp(o * 1.3 - h * 0.35, 0, 1); if (open < 0.1) { b.blob(T(q.x, q.y, q.z), 0.006, 0.012, col(0x9ab87a), col(0xe8b0d8), 5, 3); continue; }
        orchid(b, faceM(q, f), r, { k: 1.25, flat: 1.3, sepal: [0.04, 0.012], petal: [0.04, 0.024], cols: [col(0xf4e0f4), col(0xf0c8ec), col(0xe0a0e0)], pa: 1.1, pb: 0.5, lip: tubeLip(b, col(0xf7d84a), col(0xb82a9a), col(0x8a1a8a), 0.75) }, open); } }) });
  A({ id: 'dalia_gigante', name: 'Dália-gigante', lvl: 18, spots: ['bed'], h: 1.0, info: 'Prato-de-jantar: flores do tamanho de um rosto.',
    build: (b, r, g, o) => { const p = r.pick([[0xf2c8a0, 0xfbe8d8], [0xe85a9a, 0xfbd0e0], [0xc8283e, 0xf58a5a], [0xf7d86a, 0xfdf0c0]]).map(col);
      habitBush(b, r, { R: 0.3, H: 0.8, branches: 9, heads: 4, stalk: 0.14, splay: 0.6, fill: 30, stemR: 0.009, leaf: { n: 9, L: 0.12, W: 0.06, c: col(0x35763a), tilt: 1.1 }, head: H.dahlia(p[0], p[1]), headK: 2.5, headUp: 0.3 }, g, o); } });
  A({ id: 'bastao_do_imperador', name: 'Bastão-do-imperador', lvl: 19, spots: ['bed'], h: 1.5, info: 'Uma tocha de cera rosa no meio da folhagem.',
    build: (b, r, g, o) => { for (let i = 0; i < Math.round(3 + 3 * g); i++) { const az = i * GOLD + r() * 0.3, L = 1.35 * g * r.range(0.75, 1.05), out = r.range(0.12, 0.35), dx = Math.cos(az), dz = Math.sin(az), pts = bez(new V3(dx * 0.03, 0, dz * 0.03), new V3(dx * L * out * 0.2, L * 0.6, dz * L * out * 0.2), new V3(dx * L * out, L, dz * L * out), 9); b.tube(null, pts, 0.011, 0.005, col(0x4a8a44), col(0x5a9a4a), 5);
        for (let k = 0; k < 8; k++) { const { p } = polyAt(pts, 0.36 + k * 0.085); leaf(b, mul(T(p.x, p.y, p.z), RY(-az + Math.PI / 2 + (k % 2 ? 1.5 : -1.5) + r.range(-0.2, 0.2)), RX(r.range(0.9, 1.2))), r, { L: 0.34 * g * (1 - k * 0.03), W: 0.085 * g, c: col(0x2f7a3c), a: 0.8, b: 0.5, fold: 0.3, curl: 0.7, nu: 5, nv: 3, vein: 0.3 }); } }
      if (o < 0) return; const [c0, c1] = r.pick([[0xe8285a, 0xf78aa8], [0xe8285a, 0xf78aa8], [0xc8182e, 0xf0606a]]).map(col);
      for (let s = 0; s < 3; s++) { const az = s * 2.1 + 1, Hh = 0.8 * g * r.range(0.8, 1.05), pts = mkStem(r, Hh, 0.1, az, 0.02, 6); for (const p of pts) { p.x += Math.cos(az) * 0.2 * g; p.z += Math.sin(az) * 0.2 * g; } b.tube(null, pts, 0.01, 0.009, col(0x6a8a4a), col(0x8a6a5a), 6);
        head(b, frame(pts[6], UP), r, { layers: [{ n: 12, L: 0.085, W: 0.05, a: 1.0, b: 0.6, tilt: 1.85, tiltC: 0.4, curl: 0.5, cup: 0.7, r: 0.012, cols: [shade(c0, 0.85), c0, c1], closedScale: 0.6, vein: 0.15 },
          { n: 42, golden: true, L: [0.02, 0.06], W: [0.016, 0.036], a: 1.0, b: 0.7, tilt: [0.1, 1.25], tiltC: [0.05, 0.3], curl: [-0.3, 0.2], cup: [1.3, 0.8], r: [0.002, 0.012], y: [0.075, 0.008], cols: [shade(c0, 0.8), c0, c1], cols2: [c0, mixc(c0, c1, 0.4), c1], nu: 3, nv: 2, closedScale: 0.6 }] }, clamp(o + r.range(-0.1, 0.1), 0, 1), 1.25); } } });
  A({ id: 'proteia', name: 'Proteia-rei', lvl: 20, h: 0.8, thirst: 0.5, info: 'Uma coroa de pontas rosadas em volta de um miolo de pelúcia.',
    build: (b, r, g, o) => { habitBush(b, r, { R: 0.26, H: 0.55, branches: 8, heads: 0, splay: 0.7, fill: 26, wood: col(0x6a4a3a), stemR: 0.008, leaf: { n: 10, L: 0.085, W: 0.045, c: col(0x4a7a58), tip: col(0xa85a5a), tipMix: 0.2, a: 1.1, b: 0.6, tilt: 0.9, fold: 0.2 } }, g, -1);
      if (o >= 0) domeFlowers(b, r, Math.round(1 + 2 * g), 0.2 * g, 0.55 * g, { stalk: 0.1, up: 0.75, el1: 0.6, stemC: col(0x8a5a4a) }, (p, d) => { const oo = clamp(o + r.range(-0.1, 0.1), 0, 1);
        head(b, frame(p, d), r, { layers: [{ n: 40, golden: true, L: [0.075, 0.03], W: [0.02, 0.016], a: 0.75, b: 0.8, tilt: [0.5, 1.15], tiltC: [0.08, 0.3], curl: [-0.25, -0.1], cup: 1.0, r: [0.03, 0.038], y: [0.01, -0.02], cols: [col(0xf4d8d8), col(0xf08aa0), col(0xd84a6a)], cols2: [col(0xd8c8a8), col(0xe8a0a0), col(0xc85a6a)], nu: 4, nv: 2, closedScale: 0.7 }],
          center: { type: 'dome', r: 0.034, h: 0.03, y: 0.004, cols: [col(0xf4e8e0), col(0xfaf4f0), col(0xe8b8c0)], seg: 12 } }, oo, 1.5); }); } });

}

// seasons (0 spring, 1 summer, 2 autumn, 3 winter) in which each plant of this catalogue grows faster
export const LOVES4 = {
  // house plants and foliage
  ficus_lira: [1], seringueira: [3], pacova: [1, 2], calateia: [0, 1], maranta: [0], peperomia_melancia: [0, 2], pilea: [3], clorofito: [0, 1], lambari: [1], dinheiro_em_penca: [0, 3], filodendro_coracao: [1, 2],
  monstera_adansonii: [2, 3], filodendro_xanadu: [1], singonio: [1, 2], alocasia: [1], begonia_maculata: [0, 2], begonia_rex: [2, 3], croton: [1], coleus: [1, 2], aglaonema: [2, 3], comigo_ninguem_pode: [3], dracena: [2],
  iuca: [1, 3], pata_de_elefante: [3], rafis: [2], chamaedorea: [0, 3], bambu_da_sorte: [3], lanca_de_sao_jorge: [3], babosa: [1, 3], echeveria: [3, 0], planta_jade: [3], cacto_bola: [1], mandacaru: [1], flor_de_maio: [2],
  ripsalis: [2, 3], colar_de_perolas: [3], rabo_de_burro: [3, 0], avenca: [2, 3], asplenio: [2], chifre_de_veado: [2, 3], tillandsia: [0, 2], hoya: [0, 1], columeia: [0, 2], cheflera: [3], arvore_da_felicidade: [0, 2],
  costela_variegata: [3], trevo_roxo: [2, 3], buxinho: [3, 0], tuia: [3],
  // orchids and pot flowers
  falenopsis_branca: [3], falenopsis_rosa: [3, 0], dendrobio: [3, 0], oncidium: [2], cymbidium: [3], cattleya: [2, 0], sapatinho: [2, 3], vanda: [1, 2], ciclame: [3], gloxinia: [1], primula: [3, 0], cineraria: [3, 0],
  rosa_do_deserto: [1], gardenia: [0, 1], lisianto: [1], poinsetia: [3], clivia: [3, 0], bonsai_bordo: [2], bonsai_cerejeira: [0],
  // beds, window boxes and baskets
  mini_rosa: [0, 1], rosa_cha: [0, 1], rosa_lilas: [0, 2], rosa_negra: [2], roseira_tronco: [0, 1], rosa_inglesa: [0, 2], tulipa_papagaio: [0], tulipa_negra: [0], hortensia_branca: [1], alyssum: [0, 3], coreopsis: [1, 2],
  cravina: [0, 3], vinca: [1], muscari: [0], crocus: [3, 0], verbena: [1, 2], torenia: [1], papoula_california: [0], lantana: [1, 2], campanula: [0], celosia_plumosa: [1, 2], centaurea: [0], girassol_anao: [1],
  dimorfoteca: [3, 0], nemesia: [3, 0], sempre_viva: [2], flox: [1], rudbequia: [1, 2], gazania: [1], pentas: [1], crista_de_galo: [1, 2], plumbago: [1], russelia: [1, 2], gaillardia: [1, 2], nigela: [0], equinacea: [1, 2],
  hosta: [0], capim_do_texas: [2], lavanda_francesa: [3, 0], camarao_amarelo: [1, 2], calibrachoa: [0, 1], ixora: [1], escabiosa: [0, 2], angelica: [1, 2], dalia_pompom: [2], lirio_do_vale: [0], heuchera: [2, 3],
  hemerocale: [1], geranio_pendente: [0, 3], astilbe: [1], amaranto: [2], fresia: [3, 0], moreia: [0, 3], salvia_azul: [2], heleboro: [3], aquilegia: [0], capim_dos_pampas: [2], coracao_sangrento: [0], lirio_stargazer: [1],
  orquidea_bambu: [1, 2], dalia_gigante: [2], bastao_do_imperador: [1], proteia: [3, 2],
};
