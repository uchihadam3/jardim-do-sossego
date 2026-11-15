import { furn, tone, mixHex, WOOD, METAL, ROOM_H, T, RX, RY, RZ, S, mul, TAU, THREE } from './furncore.js';
// Furniture, part 2: TV and sound, lights, rugs, pictures and wall things, ornaments, pots and plant holders, show-pieces.
// Every piece follows the conventions of furncore.js (metres, FRONT = +z, k.c1 / k.c2 = the two colours the player picks).

const PI = Math.PI, HP = Math.PI / 2;
const SOIL = 0x4a3628, CREAM = 0xf3ead8, PAPER = 0xfbf3e2, GOLD = 0xe2bd5c, INK = 0x2a2a30;
const rnd = (seed) => { let a = seed >>> 0; return () => { a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; };
const css = (n) => '#' + (n >>> 0).toString(16).padStart(6, '0');
const lum = (c) => { const k = new THREE.Color(c); return 0.3 * k.r + 0.59 * k.g + 0.11 * k.b; };

// ---------- modelling helpers ----------
// a separately moving part (clock hands, fan blades, a spinning record, fish): modelled with its own little kit and returned as a Group to animate in k.tick
function part(k, fn, x = 0, y = 0, z = 0) {
  const g = new THREE.Group(), kk = new k.constructor(g, k.c1, k.c2, k.def); fn(kk); kk.finish();
  k.g.userData.glow.push(...g.userData.glow); k.g.userData.ticks.push(...g.userData.ticks); g.position.set(x, y, z); k.g.add(g); return g;
}
// several geometries as ONE glowing mesh (fairy lights, crystals, candle flames): list of [geometry, matrix]
function mergeGeo(list) {
  const gs = list.map(([g, M]) => { g = g.index ? g.toNonIndexed() : g; if (M) g.applyMatrix4(M); return g; }); let n = 0; for (const g of gs) n += g.attributes.position.count;
  const p = new Float32Array(n * 3), nm = new Float32Array(n * 3); let o = 0; for (const g of gs) { p.set(g.attributes.position.array, o); nm.set(g.attributes.normal.array, o); o += g.attributes.position.count * 3; }
  const out = new THREE.BufferGeometry(); out.setAttribute('position', new THREE.BufferAttribute(p, 3)); out.setAttribute('normal', new THREE.BufferAttribute(nm, 3)); return out;
}
const LG = (pts, seg = 18) => new THREE.LatheGeometry(pts.map(([r, y]) => new THREE.Vector2(r, y)), seg);
const ring = (k, R, r, x, y, z, c) => k.torus(R, r, x, y, z, c, RX(HP));            // horizontal ring
const ringS = (k, R, r, x, y, z, c, rot) => k.addS(new THREE.TorusGeometry(R, r, 6, 20), mul(T(x, y, z), rot || RX(HP)), c);
// a straight rod between two points
function rod(k, a, b, r, c, seg = 6, shiny = false) {
  const A = new THREE.Vector3(...a), B = new THREE.Vector3(...b), d = B.clone().sub(A), L = d.length(), q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.normalize());
  const M = new THREE.Matrix4().compose(A.add(B).multiplyScalar(0.5), q, new THREE.Vector3(1, 1, 1)), g = new THREE.CylinderGeometry(r, r, L, seg); return shiny ? k.addS(g, M, c) : k.add(g, M, c);
}
// flat shape (x,y outline) extruded: lies on the floor (y up) with thickness t. pts = [[x, z], ...]
function slab(k, pts, t, y, c, M) {
  const sh = new THREE.Shape(); pts.forEach(([x, z], i) => (i ? sh.lineTo(x, -z) : sh.moveTo(x, -z)));
  const g = new THREE.ExtrudeGeometry(sh, { depth: t, bevelEnabled: false, curveSegments: 6 }); return k.add(g, mul(M || T(0, 0, 0), T(0, y, 0), RX(-HP)), c);
}
// upright flat shape in the XY plane, thickness t along z (centred on z)
function plate(k, pts, t, x, y, z, c, rot, shiny) {
  const sh = new THREE.Shape(); pts.forEach(([px, py], i) => (i ? sh.lineTo(px, py) : sh.moveTo(px, py)));
  const g = new THREE.ExtrudeGeometry(sh, { depth: t, bevelEnabled: false }), M = mul(T(x, y, z), rot || T(0, 0, 0), T(0, 0, -t / 2)); return shiny ? k.addS(g, M, c) : k.add(g, M, c);
}

// flower pot / vase (the container only: the game adds soil and plant). r = widest radius, h = height. Returns { y: soil height, r: opening radius }.
const POTS = {
  barro: [[0.001, 0], [0.64, 0], [0.67, 0.03], [0.88, 0.8], [1, 0.82], [1, 1], [0.87, 1], [0.86, 0.92]],
  liso: [[0.001, 0], [0.62, 0], [0.66, 0.025], [1, 0.985], [1, 1], [0.9, 1], [0.89, 0.92]],
  cilindro: [[0.001, 0], [0.95, 0], [1, 0.03], [1, 0.985], [0.98, 1], [0.89, 1], [0.88, 0.92]],
  bojudo: [[0.001, 0], [0.5, 0], [0.56, 0.03], [0.86, 0.22], [1, 0.48], [0.95, 0.72], [0.8, 0.9], [0.86, 0.97], [0.86, 1], [0.74, 1], [0.72, 0.92]],
  tigela: [[0.001, 0], [0.42, 0], [0.46, 0.05], [0.72, 0.3], [0.94, 0.7], [1, 0.96], [1, 1], [0.9, 1], [0.88, 0.92]],
  urna: [[0.001, 0], [0.56, 0], [0.56, 0.05], [0.34, 0.1], [0.26, 0.2], [0.42, 0.28], [0.8, 0.45], [0.96, 0.66], [0.92, 0.86], [1.04, 0.95], [1.04, 1], [0.9, 1], [0.86, 0.92]],
  sino: [[0.001, 0], [0.5, 0], [0.55, 0.04], [0.62, 0.4], [0.8, 0.8], [1, 0.97], [1, 1], [0.9, 1], [0.86, 0.92]],
};
function pot(k, x, y, z, r, h, c, style = 'barro', seg = 18, shiny = false) {
  const P = POTS[style], pts = P.map(([a, b]) => [a * r, b * h]), ro = P[P.length - 1][0] * r;
  if (shiny) k.addS(LG(pts, seg), T(x, y, z), c); else k.add(LG(pts, seg), T(x, y, z), c);
  k.cyl(ro, ro, 0.006, x, y + h * 0.92 - 0.002, z, SOIL, seg);
  return { y: y + h * 0.92, r: ro };
}
// saucer under a pot
const saucer = (k, x, y, z, r, c) => k.lathe([[0.001, 0], [r * 0.85, 0], [r, 0.018], [r * 0.97, 0.022], [r * 0.8, 0.008], [0.001, 0.008]], x, y, z, c, 16);
// woven basket look: rings stacked along a profile. prof(t) -> radius for t in 0..1
function basket(k, x, y, z, h, prof, c, n = 8, seg = 16, o = {}) {
  for (let i = 0; i < n; i++) { const t0 = i / n, t1 = (i + 1) / n, ra = prof(t0), rb = prof(t1), g = LG([[ra, t0 * h], [((ra + rb) / 2) * 1.035, ((t0 + t1) / 2) * h], [rb, t1 * h]], seg), col = i % 2 ? tone(c, 0.88) : c;
    if (o.open) k.add2(g, T(x, y, z), col); else k.add(g, T(x, y, z), col); }
  if (!o.open) k.cyl(prof(0), prof(0), 0.01, x, y + 0.005, z, tone(c, 0.8), seg);
}
// cheap bent rod: n = segments along, seg = around. o: { n, seg, shiny, closed }
function tb(k, pts, r, c, o = {}) {
  const cv = new THREE.CatmullRomCurve3(pts.map((p) => new THREE.Vector3(...p)), !!o.closed, 'catmullrom', 0.35), g = new THREE.TubeGeometry(cv, o.n ?? pts.length * 3, r, o.seg ?? 5, !!o.closed);
  return o.shiny ? k.addS(g, null, c) : k.add(g, null, c);
}

// ---------- painting helpers (2D canvas) ----------
function grad(g, x0, y0, x1, y1, stops) { const gr = g.createLinearGradient(x0, y0, x1, y1); stops.forEach(([t, c]) => gr.addColorStop(t, c)); return gr; }
function rgrad(g, x, y, r0, r1, stops) { const gr = g.createRadialGradient(x, y, r0, x, y, r1); stops.forEach(([t, c]) => gr.addColorStop(t, c)); return gr; }
function circ(g, x, y, r, c) { g.fillStyle = c; g.beginPath(); g.arc(x, y, Math.max(0.1, r), 0, TAU); g.fill(); }
function ell(g, x, y, rx, ry, c, rot = 0) { g.fillStyle = c; g.beginPath(); g.ellipse(x, y, Math.max(0.1, rx), Math.max(0.1, ry), rot, 0, TAU); g.fill(); }
function poly(g, pts, c) { g.fillStyle = c; g.beginPath(); pts.forEach(([x, y], i) => (i ? g.lineTo(x, y) : g.moveTo(x, y))); g.closePath(); g.fill(); }
function line(g, pts, c, w) { g.strokeStyle = c; g.lineWidth = w; g.lineCap = 'round'; g.lineJoin = 'round'; g.beginPath(); pts.forEach(([x, y], i) => (i ? g.lineTo(x, y) : g.moveTo(x, y))); g.stroke(); }
function curve(g, x0, y0, cx, cy, x1, y1, c, w) { g.strokeStyle = c; g.lineWidth = w; g.lineCap = 'round'; g.beginPath(); g.moveTo(x0, y0); g.quadraticCurveTo(cx, cy, x1, y1); g.stroke(); }
function flower(g, x, y, r, n, pc, cc, rot = 0) { g.fillStyle = pc; for (let i = 0; i < n; i++) { const a = rot + (i / n) * TAU; g.beginPath(); g.ellipse(x + Math.cos(a) * r * 0.58, y + Math.sin(a) * r * 0.58, r * 0.46, r * 0.25, a, 0, TAU); g.fill(); } circ(g, x, y, r * 0.3, cc); }
function leaf(g, x, y, len, wid, a, c, vein) { g.save(); g.translate(x, y); g.rotate(a); g.fillStyle = c; g.beginPath(); g.moveTo(0, 0); g.quadraticCurveTo(len * 0.5, -wid, len, 0); g.quadraticCurveTo(len * 0.5, wid, 0, 0); g.fill(); if (vein) { g.strokeStyle = vein; g.lineWidth = Math.max(1, wid * 0.12); g.beginPath(); g.moveTo(0, 0); g.lineTo(len * 0.92, 0); g.stroke(); } g.restore(); }
function hills(g, W, H, y, amp, c, seed, freq = 1) { const r = rnd(seed), p1 = r() * 6, p2 = r() * 6; g.fillStyle = c; g.beginPath(); g.moveTo(0, H); for (let x = 0; x <= W; x += 3) g.lineTo(x, y + Math.sin((x / W) * 5 * freq + p1) * amp + Math.sin((x / W) * 11 * freq + p2) * amp * 0.4); g.lineTo(W, H); g.fill(); }
function cloud(g, x, y, s, c = '#ffffff') { for (const [dx, dy, r] of [[0, 0, 1], [-1.1, 0.25, 0.7], [1.1, 0.3, 0.75], [0.45, -0.45, 0.7], [-0.5, -0.3, 0.6]]) circ(g, x + dx * s, y + dy * s, r * s, c); }
function grain(g, W, H, seed, n = 500, a = 0.05) { const r = rnd(seed); for (let i = 0; i < n; i++) { g.fillStyle = r() < 0.5 ? `rgba(255,255,255,${a})` : `rgba(60,40,20,${a})`; g.fillRect(r() * W, r() * H, 2 + r() * 6, 1 + r() * 2); } }
function scan(g, W, H, a = 0.1) { g.fillStyle = `rgba(0,0,0,${a})`; for (let y = 0; y < H; y += 3) g.fillRect(0, y, W, 1); }
function vignette(g, W, H, a = 0.35) { g.fillStyle = rgrad(g, W / 2, H / 2, Math.min(W, H) * 0.3, Math.max(W, H) * 0.75, [[0, 'rgba(0,0,0,0)'], [1, `rgba(0,0,0,${a})`]]); g.fillRect(0, 0, W, H); }
function stars(g, W, H, seed, n, hmax = 1) { const r = rnd(seed); for (let i = 0; i < n; i++) circ(g, r() * W, r() * H * hmax, 0.5 + r() * 1.3, `rgba(255,250,225,${0.5 + r() * 0.5})`); }

// k.art caches its textures by key for the whole game. Every piece of this file is registered through this wrapper, which
// gives the keys their own namespace, so a painting here can never collide with a key used in another furniture file.
const furnCore = furn;
{ // (block: 'furn' below is the wrapped one)
const furn = (def, build) => furnCore(def, (k, d) => { const art = k.art.bind(k); k.art = (key, ...r) => art('f2:' + key, ...r); return build(k, d); });

// =====================================================================================================================
// TV E SOM
// =====================================================================================================================
const SCREEN = {
  // gardening programme: three big flowers on a sunny lawn
  jardim(g, W, H) {
    g.fillStyle = grad(g, 0, 0, 0, H, [[0, '#6fbdec'], [0.65, '#d8f0f4']]); g.fillRect(0, 0, W, H);
    circ(g, W * 0.84, H * 0.2, H * 0.1, '#fff3b0'); cloud(g, W * 0.24, H * 0.2, H * 0.07);
    hills(g, W, H, H * 0.6, H * 0.05, '#8fc46a', 3); hills(g, W, H, H * 0.76, H * 0.04, '#6aa84a', 5);
    for (const [x, y, r, c] of [[0.27, 0.52, 0.15, '#f06a8a'], [0.54, 0.4, 0.19, '#f6c22e'], [0.78, 0.56, 0.13, '#f7f2ea']]) { curve(g, x * W, y * H, x * W + 8, H * 0.8, x * W, H, '#3d7a32', H * 0.03); leaf(g, x * W, H * 0.82, H * 0.16, H * 0.05, -0.7, '#4d8e3c'); leaf(g, x * W, H * 0.9, H * 0.15, H * 0.05, PI + 0.7, '#4d8e3c'); flower(g, x * W, y * H, r * H, 11, c, '#7a4a20'); }
  },
  // old soap opera in sepia: a little farmhouse
  sepia(g, W, H) {
    g.fillStyle = grad(g, 0, 0, 0, H, [[0, '#d9c9a4'], [1, '#f1e6c8']]); g.fillRect(0, 0, W, H); circ(g, W * 0.2, H * 0.25, H * 0.09, '#fbf3dc');
    hills(g, W, H, H * 0.6, H * 0.06, '#b5a078', 8); hills(g, W, H, H * 0.75, H * 0.03, '#94805c', 9);
    g.fillStyle = '#7a6444'; g.fillRect(W * 0.5, H * 0.45, W * 0.26, H * 0.28); poly(g, [[W * 0.46, H * 0.46], [W * 0.63, H * 0.28], [W * 0.8, H * 0.46]], '#5c4830'); g.fillStyle = '#f1e6c8'; g.fillRect(W * 0.55, H * 0.53, W * 0.06, H * 0.08); g.fillStyle = '#4a3a26'; g.fillRect(W * 0.66, H * 0.55, W * 0.06, H * 0.18);
    circ(g, W * 0.28, H * 0.5, H * 0.14, '#6e5c3c'); g.fillStyle = '#5c4830'; g.fillRect(W * 0.27, H * 0.55, W * 0.02, H * 0.2); vignette(g, W, H, 0.45);
  },
  // nature documentary: a butterfly on a daisy
  borboleta(g, W, H) {
    g.fillStyle = grad(g, 0, 0, W, H, [[0, '#bfe6a8'], [1, '#5fa35c']]); g.fillRect(0, 0, W, H); const r = rnd(4); for (let i = 0; i < 16; i++) circ(g, r() * W, r() * H, H * (0.05 + r() * 0.1), `rgba(255,255,220,${0.08 + r() * 0.1})`);
    curve(g, W * 0.38, H * 0.56, W * 0.4, H * 0.8, W * 0.34, H, '#3d7a32', H * 0.035); flower(g, W * 0.38, H * 0.56, H * 0.26, 14, '#fffdf4', '#f2b92a');
    g.save(); g.translate(W * 0.66, H * 0.36); g.rotate(-0.35);
    for (const s of [-1, 1]) { ell(g, s * H * 0.12, -H * 0.05, H * 0.13, H * 0.1, '#f08a2c', s * 0.5); ell(g, s * H * 0.09, H * 0.08, H * 0.085, H * 0.07, '#f4a84a', -s * 0.4); circ(g, s * H * 0.14, -H * 0.06, H * 0.03, '#fff3d0'); }
    ell(g, 0, 0, H * 0.018, H * 0.11, '#3a2a20'); g.restore();
  },
  // film: sunset over a mountain lake
  filme(g, W, H) {
    g.fillStyle = grad(g, 0, 0, 0, H * 0.62, [[0, '#3a3f7a'], [0.45, '#c9588a'], [0.8, '#ff9d5c'], [1, '#ffd98a']]); g.fillRect(0, 0, W, H * 0.62);
    circ(g, W * 0.5, H * 0.56, H * 0.13, '#fff1b8'); hills(g, W, H * 0.62, H * 0.42, H * 0.1, '#5b3f7c', 12, 1.6); hills(g, W, H * 0.62, H * 0.5, H * 0.06, '#3c2b5e', 14, 2.2);
    g.fillStyle = grad(g, 0, H * 0.62, 0, H, [[0, '#ffb877'], [0.3, '#b9588a'], [1, '#2b2a5c']]); g.fillRect(0, H * 0.62, W, H * 0.38);
    for (let i = 0; i < 9; i++) { g.fillStyle = `rgba(255,236,170,${0.7 - i * 0.07})`; g.fillRect(W * 0.5 - H * (0.11 - i * 0.008), H * (0.64 + i * 0.038), H * (0.22 - i * 0.016), H * 0.012); }
    poly(g, [[0, H], [0, H * 0.8], [W * 0.2, H * 0.9], [W * 0.3, H]], '#1c1a38'); for (const x of [0.05, 0.11, 0.17]) poly(g, [[x * W - H * 0.04, H * 0.86], [x * W, H * 0.6], [x * W + H * 0.04, H * 0.86]], '#1c1a38');
  },
  // video game: a cute platformer
  game(g, W, H) {
    g.fillStyle = grad(g, 0, 0, 0, H, [[0, '#59b7f0'], [1, '#bfe9fb']]); g.fillRect(0, 0, W, H); cloud(g, W * 0.2, H * 0.2, H * 0.06); cloud(g, W * 0.7, H * 0.14, H * 0.05); hills(g, W, H, H * 0.7, H * 0.08, '#8fd47a', 21);
    const b = H * 0.1; for (let x = 0; x < W; x += b) { g.fillStyle = '#b5713c'; g.fillRect(x, H - b, b - 1, b); g.fillStyle = '#5cbf4a'; g.fillRect(x, H - b * 1.3, b - 1, b * 0.35); }
    for (const [x, y, n] of [[0.18, 0.55, 3], [0.55, 0.42, 4]]) for (let i = 0; i < n; i++) { g.fillStyle = '#e8a23c'; g.fillRect(x * W + i * b, y * H, b - 1, b - 1); g.fillStyle = '#f7cf6a'; g.fillRect(x * W + i * b + 2, y * H + 2, b - 5, b * 0.3); }
    for (const [x, y] of [[0.24, 0.42], [0.62, 0.29], [0.7, 0.29], [0.86, 0.6]]) { circ(g, x * W, y * H, b * 0.32, '#ffd83a'); circ(g, x * W, y * H, b * 0.16, '#fff3a8'); }
    g.fillStyle = '#e8506a'; g.fillRect(W * 0.4, H - b * 2.5, b * 0.8, b * 0.7); circ(g, W * 0.4 + b * 0.4, H - b * 2.75, b * 0.42, '#ffd9b8'); g.fillStyle = '#3a6fd0'; g.fillRect(W * 0.4, H - b * 1.85, b * 0.8, b * 0.55); g.fillStyle = '#e8506a'; g.fillRect(W * 0.4 - 2, H - b * 3.2, b * 0.9, b * 0.28);
    for (let i = 0; i < 3; i++) { g.fillStyle = '#ff5a6e'; circ(g, W * 0.05 + i * b * 0.7, H * 0.08, b * 0.22, '#ff5a6e'); }
  },
  // cinema: full moon over a sleeping village
  noite(g, W, H) {
    g.fillStyle = grad(g, 0, 0, 0, H, [[0, '#101a44'], [0.7, '#3a4a8c'], [1, '#6a70a8']]); g.fillRect(0, 0, W, H); stars(g, W, H, 31, 70, 0.7);
    g.fillStyle = rgrad(g, W * 0.72, H * 0.28, H * 0.05, H * 0.4, [[0, 'rgba(255,250,210,0.5)'], [1, 'rgba(255,250,210,0)']]); g.fillRect(0, 0, W, H); circ(g, W * 0.72, H * 0.28, H * 0.13, '#fff8d8'); circ(g, W * 0.7, H * 0.25, H * 0.025, '#ece2b8'); circ(g, W * 0.75, H * 0.32, H * 0.018, '#ece2b8');
    hills(g, W, H, H * 0.72, H * 0.06, '#1c2a55', 33); hills(g, W, H, H * 0.84, H * 0.04, '#121b3c', 35);
    for (const [x, w, h] of [[0.16, 0.1, 0.14], [0.34, 0.08, 0.1], [0.5, 0.12, 0.16]]) { g.fillStyle = '#0c1230'; g.fillRect(x * W, H * (0.8 - h), w * W, h * H); poly(g, [[x * W - 3, H * (0.8 - h)], [(x + w / 2) * W, H * (0.72 - h)], [(x + w) * W + 3, H * (0.8 - h)]], '#0c1230'); g.fillStyle = '#ffd77a'; g.fillRect((x + w * 0.3) * W, H * (0.8 - h * 0.7), w * W * 0.3, h * H * 0.3); }
  },
  // computer desktop with a window showing a plant photo
  desktop(g, W, H) {
    g.fillStyle = grad(g, 0, 0, W, H, [[0, '#7fc8b8'], [1, '#3f7fa8']]); g.fillRect(0, 0, W, H); g.fillStyle = 'rgba(20,30,50,0.55)'; g.fillRect(0, H * 0.92, W, H * 0.08);
    for (let i = 0; i < 5; i++) { g.fillStyle = ['#ffd24a', '#ff7a6a', '#9ad86a', '#fff', '#c79af0'][i]; g.fillRect(W * (0.03 + i * 0.055), H * 0.935, W * 0.035, H * 0.05); }
    for (let i = 0; i < 4; i++) { g.fillStyle = 'rgba(255,255,255,0.85)'; g.fillRect(W * 0.04, H * (0.08 + i * 0.17), W * 0.07, H * 0.1); }
    g.fillStyle = '#f6f2ea'; g.fillRect(W * 0.3, H * 0.12, W * 0.62, H * 0.7); g.fillStyle = '#d9d2c4'; g.fillRect(W * 0.3, H * 0.12, W * 0.62, H * 0.07); circ(g, W * 0.89, H * 0.155, H * 0.02, '#ff6a5c'); circ(g, W * 0.85, H * 0.155, H * 0.02, '#ffc94a');
    g.fillStyle = '#cfe8d0'; g.fillRect(W * 0.33, H * 0.23, W * 0.3, H * 0.54); poly(g, [[W * 0.42, H * 0.77], [W * 0.44, H * 0.6], [W * 0.52, H * 0.6], [W * 0.54, H * 0.77]], '#c9703c'); for (const a of [-2.4, -1.9, -1.55, -1.2, -0.75]) leaf(g, W * 0.48, H * 0.6, H * 0.3, H * 0.07, a, '#3f8a3c', '#2c6a2c');
    for (let i = 0; i < 6; i++) { g.fillStyle = i ? '#b9b2a4' : '#5a5448'; g.fillRect(W * 0.66, H * (0.25 + i * 0.085), W * (i ? 0.22 - (i % 3) * 0.04 : 0.16), H * 0.035); }
  },
};
const scrGlow = { glow: 0.75, day: 1 };

// old tube television; origin at its base, s = size factor
function tubeTV(k, x, y, z, C, P, key, draw, s = 1) {
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) k.cyl(0.02 * s, 0.016 * s, 0.03 * s, x + sx * 0.2 * s, y + 0.015 * s, z + sz * 0.13 * s, tone(P, 0.6), 8);
  k.rbox(0.5 * s, 0.4 * s, 0.34 * s, x, y + 0.23 * s, z, C, 0.045 * s);
  k.rbox(0.36 * s, 0.3 * s, 0.14 * s, x, y + 0.23 * s, z - 0.2 * s, tone(C, 0.78), 0.05 * s);                      // the tube's bump at the back
  k.rbox(0.455 * s, 0.355 * s, 0.03 * s, x, y + 0.23 * s, z + 0.162 * s, P, 0.012);                               // front panel
  k.rbox(0.325 * s, 0.275 * s, 0.03 * s, x - 0.055 * s, y + 0.235 * s, z + 0.167 * s, tone(P, 0.45), 0.035 * s); // bezel
  k.art(key, 0.285 * s, 0.232 * s, x - 0.055 * s, y + 0.235 * s, z + 0.1835 * s, draw, scrGlow);
  for (let i = 0; i < 2; i++) { k.cylS(0.024 * s, 0.024 * s, 0.022 * s, x + 0.165 * s, y + (0.345 - i * 0.075) * s, z + 0.185 * s, METAL.cromo, 12, RX(HP)); k.box(0.006 * s, 0.03 * s, 0.004, x + 0.165 * s, y + (0.352 - i * 0.075) * s, z + 0.197 * s, INK); }
  for (let i = 0; i < 6; i++) k.box(0.075 * s, 0.007 * s, 0.006, x + 0.165 * s, y + (0.08 + i * 0.018) * s, z + 0.178 * s, tone(P, 0.45));
  k.sphS(0.03 * s, x + 0.05 * s, y + 0.43 * s, z - 0.03 * s, tone(P, 0.5), 1, 0.6, 1, 10);                          // antenna
  for (const sx of [-1, 1]) { rod(k, [x + 0.05 * s, y + 0.44 * s, z - 0.03 * s], [x + (0.05 + sx * 0.17) * s, y + 0.7 * s, z - 0.05 * s], 0.004 * s, METAL.cromo, 5, true); k.sphS(0.008 * s, x + (0.05 + sx * 0.17) * s, y + 0.7 * s, z - 0.05 * s, METAL.cromo, 1, 1, 1, 6); }
}
// thin flat panel TV (screen w x h centred at x,y; front face at z)
function flatTV(k, x, y, z, w, h, C, key, draw, bz = 0.014) {
  k.rbox(w + bz * 2, h + bz * 2, 0.03, x, y, z - 0.015, C, 0.008); k.box(w * 0.6, h * 0.6, 0.025, x, y, z - 0.04, tone(C, 0.8));
  k.art(key, w, h, x, y, z + 0.0015, draw, scrGlow); k.box(0.012, 0.004, 0.004, x + w / 2 - 0.04, y - h / 2 - bz / 2, z + 0.001, 0xff5544);
}
// loudspeaker box with cloth front and drivers: origin at base centre
function speaker(k, x, y, z, w, h, d, C, F, n = 2) {
  k.box(w, h, d, x, y + h / 2, z, C); k.box(w * 0.86, h * 0.92, 0.008, x, y + h / 2, z + d / 2 + 0.002, F);
  for (let i = 0; i < n; i++) { const r = w * (i === n - 1 && n > 1 ? 0.2 : 0.33), cy = y + h * (n === 1 ? 0.5 : 0.16 + (0.74 * (i + 0.5)) / n) + (i === n - 1 && n > 1 ? h * 0.06 : 0);
    k.cyl(r, r, 0.01, x, cy, z + d / 2 + 0.008, tone(F, 0.5), 16, RX(HP)); k.cyl(r * 0.82, r * 0.82, 0.004, x, cy, z + d / 2 + 0.013, 0x35353a, 16, RX(HP)); k.sph(r * 0.34, x, cy, z + d / 2 + 0.012, 0x55555c, 1, 1, 0.5, 10); }
}

furn({ id: 'tv_tubo', name: 'TV de tubo', cat: 'TV e som', kind: 'top', price: 120, lvl: 1, w: 0.52, d: 0.5, h: 0.72, cols: [0xb5673f, 0xe9dcc0], colN: ['Caixa', 'Painel'], info: 'Velhinha, de antena, mas ainda pega a novela.' }, (k) => {
  tubeTV(k, 0, 0, 0.03, k.c1, k.c2, 'scr_jardim_t', (g, W, H) => { SCREEN.jardim(g, W, H); scan(g, W, H); vignette(g, W, H, 0.3); });
});

furn({ id: 'tv_tubo_rack', name: 'TV de tubo no rack', cat: 'TV e som', price: 380, lvl: 3, w: 0.8, d: 0.5, h: 1.32, cols: [0x7c5438, WOOD.mel], colN: ['TV', 'Rack'], info: 'Com paninho de crochê e as fitas da família.' }, (k) => {
  const W = k.c2;
  k.legs(0.76, 0.46, 0.12, tone(W, 0.8), { r: 0.022, taper: 0.6 });
  k.rbox(0.8, 0.04, 0.5, 0, 0.14, 0, W, 0.012); k.rbox(0.8, 0.04, 0.5, 0, 0.58, 0, tone(W, 1.06), 0.012);
  for (const s of [-1, 1]) k.box(0.03, 0.42, 0.46, s * 0.37, 0.36, 0, tone(W, 0.92)); k.box(0.74, 0.42, 0.02, 0, 0.36, -0.22, tone(W, 0.82));
  k.box(0.74, 0.02, 0.44, 0, 0.36, 0, tone(W, 0.96));                                                                // middle shelf
  k.rbox(0.36, 0.07, 0.28, -0.14, 0.415, 0.02, 0x3a3a40, 0.01); k.box(0.16, 0.012, 0.004, -0.14, 0.425, 0.162, 0x15151a); k.box(0.02, 0.008, 0.004, -0.27, 0.4, 0.162, 0x7ad06a); // video player
  [[0xc2554a, 0.03], [0xe8c468, 0.025], [0x5a86a8, 0.03], [0x7fa06a, 0.025]].forEach(([c, t], i) => k.box(0.19, t, 0.11, 0.2, 0.385 + i * 0.03, 0.03 + (i % 2) * 0.012, c, RY(i * 0.08 - 0.1))); // tapes
  k.rbox(0.2, 0.15, 0.3, -0.2, 0.235, 0.0, 0xd9c8a0, 0.02); k.rbox(0.26, 0.14, 0.3, 0.14, 0.23, 0, 0xb98a5a, 0.02);  // boxes below
  k.box(0.5, 0.004, 0.42, 0, 0.602, 0.02, 0xfaf6ec); for (let i = 0; i < 5; i++) plate(k, [[-0.05, 0], [0.05, 0], [0, -0.07]], 0.003, -0.2 + i * 0.1, 0.6, 0.232, 0xfaf6ec);                  // crochet cloth
  tubeTV(k, 0, 0.604, 0.03, k.c1, 0xe6dcc6, 'scr_sepia', (g, W2, H) => { SCREEN.sepia(g, W2, H); scan(g, W2, H); });
});

furn({ id: 'tv_plana_pequena', name: 'TV de tela plana 32"', cat: 'TV e som', kind: 'top', price: 650, lvl: 5, w: 0.76, d: 0.22, h: 0.52, cols: [0x2a2a30, METAL.cromo], colN: ['Moldura', 'Pé'], info: 'Fininha, cabe em qualquer cantinho.' }, (k) => {
  flatTV(k, 0, 0.29, 0.01, 0.71, 0.4, k.c1, 'scr_borboleta', SCREEN.borboleta);
  k.boxS(0.07, 0.07, 0.025, 0, 0.055, -0.02, k.c2); k.addS(LG([[0.001, 0], [0.17, 0], [0.17, 0.008], [0.03, 0.022], [0.001, 0.022]], 20), mul(T(0, 0, 0), S(1, 1, 0.55)), k.c2);
});

furn({ id: 'tv_parede_50', name: 'TV de parede 50"', cat: 'TV e som', kind: 'wall', price: 1800, lvl: 9, w: 1.16, d: 0.12, h: 0.8, cols: [0x25252b, 0x8a8f96], colN: ['Moldura', 'Caixa de som'], info: 'Cinema em casa para as noites de chuva.' }, (k) => {
  k.box(0.3, 0.3, 0.03, 0, 1.5, 0.015, 0x4a4a50);
  flatTV(k, 0, 1.5, 0.062, 1.11, 0.625, k.c1, 'scr_filme', SCREEN.filme, 0.012);
  k.rbox(0.9, 0.075, 0.08, 0, 1.08, 0.045, tone(k.c2, 0.6), 0.03); k.rbox(0.8, 0.05, 0.02, 0, 1.08, 0.08, k.c2, 0.008);       // sound bar
  k.box(0.006, 0.006, 0.004, 0.36, 1.08, 0.091, 0x7ad0ff); k.box(0.035, 0.1, 0.012, 0, 1.15, 0.006, CREAM);
});

furn({ id: 'tv_gigante_rack', name: 'TV gigante com rack e som', cat: 'TV e som', price: 9500, lvl: 16, w: 2.2, d: 0.5, h: 1.58, cols: [WOOD.nogueira, 0x3a3a42], colN: ['Rack', 'Caixas de som'], info: 'Telão de 75", som de cinema e luz de fundo.' }, (k) => {
  const W = k.c1, F = k.c2;
  // rack
  k.rbox(1.62, 0.36, 0.46, 0, 0.3, 0, W, 0.015); k.rbox(1.66, 0.03, 0.48, 0, 0.495, 0, tone(W, 1.1), 0.01); k.box(1.5, 0.06, 0.4, 0, 0.09, 0, tone(W, 0.6));
  for (const s of [-1, 1]) { k.rbox(0.46, 0.3, 0.02, s * 0.56, 0.3, 0.232, tone(W, 1.07), 0.008); k.box(0.46, 0.006, 0.022, s * 0.56, 0.3, 0.232, tone(W, 0.7)); for (const dy of [-0.075, 0.075]) k.cylS(0.01, 0.01, 0.16, s * 0.56, 0.3 + dy, 0.24, METAL.latao, 6, RZ(HP)); }
  k.box(0.6, 0.3, 0.4, 0, 0.3, 0.035, 0x1f1f24); k.box(0.6, 0.012, 0.4, 0, 0.3, 0.03, tone(W, 0.9));                 // open niche + shelf
  k.box(0.3, 0.07, 0.24, -0.12, 0.345, 0.09, 0xf2f2f4); k.box(0.012, 0.004, 0.004, -0.02, 0.33, 0.212, 0x6ad0ff); k.box(0.34, 0.09, 0.26, 0.08, 0.205, 0.08, 0x2c2c32); k.cylS(0.02, 0.02, 0.01, 0.19, 0.205, 0.212, METAL.cromo, 10, RX(HP));
  k.rbox(0.13, 0.04, 0.09, 0.2, 0.33, 0.14, 0x2c2c32, 0.015);                                                        // controller
  // TV on its foot
  k.boxS(0.5, 0.012, 0.24, 0, 0.516, 0, 0x2a2a30); k.boxS(0.08, 0.1, 0.03, 0, 0.56, -0.03, 0x2a2a30);
  k.glow(new THREE.BoxGeometry(1.76, 1.02, 0.01), 0xb8a0ff, 0.9, { at: [0, 1.09, -0.045], day: 0.35 });               // back light
  flatTV(k, 0, 1.09, 0.0, 1.66, 0.935, 0x1c1c22, 'scr_game', SCREEN.game, 0.012);
  k.rbox(1.0, 0.06, 0.09, 0, 0.545, 0.15, tone(F, 0.8), 0.025); k.box(0.9, 0.04, 0.006, 0, 0.545, 0.196, F);          // sound bar
  // tower speakers
  for (const s of [-1, 1]) { speaker(k, s * 0.97, 0.03, 0.02, 0.24, 1.12, 0.3, tone(W, 0.7), F, 3); k.box(0.26, 0.03, 0.32, s * 0.97, 0.015, 0.02, 0x2a2a30); }
  // little decorations on the rack
  k.lathe([[0.001, 0], [0.03, 0], [0.045, 0.05], [0.03, 0.1], [0.018, 0.13], [0.022, 0.14]], 0.7, 0.51, 0.1, 0xe8d8c0, 12); k.box(0.12, 0.025, 0.17, -0.68, 0.523, 0.08, 0xc2554a, RY(0.2)); k.box(0.11, 0.02, 0.16, -0.68, 0.546, 0.08, 0xe8c468, RY(-0.1));
});

furn({ id: 'projetor_telao', name: 'Projetor com telão', cat: 'TV e som', kind: 'wall', price: 6800, lvl: 14, w: 2.34, d: 0.42, h: 2.06, cols: [0xf4f1ea, WOOD.carvalho], colN: ['Projetor', 'Prateleira'], info: 'Sessão de cinema com pipoca na sala.' }, (k) => {
  k.rbox(2.3, 0.09, 0.09, 0, 2.55, 0.05, tone(k.c1, 0.92), 0.03); for (const s of [-1, 1]) k.cylS(0.05, 0.05, 0.02, s * 1.15, 2.55, 0.05, METAL.cromo, 12, RZ(HP));
  k.box(2.16, 1.36, 0.006, 0, 1.84, 0.04, 0x1c1c20); k.art('scr_noite', 2.06, 1.16, 0, 1.88, 0.0445, SCREEN.noite, { glow: 0.6, day: 0.8, res: 320 });
  k.cylS(0.012, 0.012, 2.18, 0, 1.15, 0.04, 0x55555c, 8, RZ(HP)); rod(k, [0.9, 1.15, 0.045], [0.9, 1.05, 0.045], 0.002, 0xddd6c8, 4); ring(k, 0.015, 0.003, 0.9, 1.035, 0.045, METAL.latao);
  // floating shelf with an ultra-short-throw projector
  k.rbox(0.9, 0.035, 0.36, 0, 0.72, 0.19, k.c2, 0.01); for (const s of [-1, 1]) plate(k, [[0, 0], [0.26, 0], [0, -0.16]], 0.02, s * 0.36, 0.705, 0.02, tone(k.c2, 0.8), RY(-HP));
  k.rbox(0.46, 0.1, 0.3, 0, 0.79, 0.19, k.c1, 0.03); k.box(0.2, 0.012, 0.1, 0, 0.842, 0.14, 0x1c1c20); k.glow(new THREE.BoxGeometry(0.16, 0.006, 0.07), 0xdfeaff, 2.2, { at: [0, 0.848, 0.14], day: 0.8 });
  k.box(0.38, 0.05, 0.005, 0, 0.785, 0.342, tone(k.c1, 0.75)); k.box(0.01, 0.005, 0.004, 0.17, 0.82, 0.342, 0x6ad06a);
  k.lathe2([[0.045, 0], [0.07, 0.11]], -0.34, 0.74, 0.22, 0xe8483c, 12); for (let i = 0; i < 7; i++) k.sph(0.022, -0.34 + Math.cos(i * 2.4) * 0.035, 0.855 + (i % 2) * 0.012, 0.22 + Math.sin(i * 2.4) * 0.035, 0xfff4d0, 1, 1, 1, 6); // popcorn
});

furn({ id: 'radio_antigo', name: 'Rádio antigo', cat: 'TV e som', kind: 'top', price: 90, lvl: 1, w: 0.38, d: 0.22, h: 0.3, cols: [WOOD.nogueira, 0xe6d3a8], colN: ['Caixa', 'Tela do alto-falante'], info: 'Toca modinhas enquanto você rega as plantas.' }, (k) => {
  const W = k.c1;
  for (const s of [-1, 1]) k.cyl(0.014, 0.012, 0.015, s * 0.14, 0.0075, 0, tone(W, 0.6), 8);
  k.rbox(0.36, 0.24, 0.16, 0, 0.135, 0, W, 0.05); k.rbox(0.33, 0.21, 0.02, 0, 0.135, 0.075, tone(W, 1.12), 0.04);
  k.cyl(0.078, 0.078, 0.012, -0.075, 0.14, 0.082, k.c2, 18, RX(HP)); ringS(k, 0.08, 0.007, -0.075, 0.14, 0.088, METAL.latao, T(0, 0, 0));
  for (let i = -2; i <= 2; i++) k.box(0.006, Math.sqrt(0.078 ** 2 - (i * 0.027) ** 2) * 2 - 0.01, 0.006, -0.075 + i * 0.027, 0.14, 0.089, tone(W, 0.75));
  k.art('radio_dial', 0.11, 0.055, 0.095, 0.185, 0.0862, (g, W2, H) => { g.fillStyle = '#f6e7b0'; g.fillRect(0, 0, W2, H); g.strokeStyle = '#5a4020'; g.lineWidth = 2; for (let i = 1; i < 12; i++) { g.beginPath(); g.moveTo((i / 12) * W2, H * 0.55); g.lineTo((i / 12) * W2, H * (i % 3 ? 0.75 : 0.9)); g.stroke(); } g.fillStyle = '#d0402c'; g.fillRect(W2 * 0.62, H * 0.1, 4, H * 0.8); }, { glow: 0.7, day: 0.4 });
  k.boxS(0.125, 0.07, 0.006, 0.095, 0.185, 0.083, METAL.latao);
  for (const dx of [0.06, 0.13]) { k.cyl(0.02, 0.022, 0.02, dx, 0.095, 0.092, 0xf0e6cc, 12, RX(HP)); k.box(0.005, 0.02, 0.004, dx, 0.1, 0.103, 0x5a4020); }
  k.tubeS([[-0.1, 0.25, 0], [-0.08, 0.285, 0], [0.08, 0.285, 0], [0.1, 0.25, 0]], 0.007, METAL.latao, 5);
});

// a vinyl record as a spinning part
function record(k, x, y, z, r, label) {
  const d = part(k, (p) => { p.cyl(r, r, 0.004, 0, 0, 0, 0x1a1a1e, 24); p.cyl(r * 0.78, r * 0.78, 0.0046, 0, 0, 0, 0x2a2a30, 24); p.cyl(r * 0.62, r * 0.62, 0.0052, 0, 0, 0, 0x1a1a1e, 24); p.cyl(r * 0.36, r * 0.36, 0.0058, 0, 0, 0, label, 16); p.cyl(r * 0.07, r * 0.07, 0.0062, r * 0.2, 0, 0, tone(label, 1.5), 8); p.box(r * 0.5, 0.0052, r * 0.03, r * 0.68, 0.0003, 0, 0x3a3a42); }, x, y, z);
  k.tick((dt) => { d.rotation.y -= dt * 3.5; }); return d;
}

furn({ id: 'toca_discos', name: 'Toca-discos', cat: 'TV e som', kind: 'top', price: 320, lvl: 4, w: 0.48, d: 0.4, h: 0.42, cols: [WOOD.carvalho, 0xe8684a], colN: ['Base', 'Selo do disco'], info: 'O chiado do vinil deixa a casa mais quentinha.' }, (k) => {
  const W = k.c1;
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) k.cyl(0.02, 0.02, 0.015, sx * 0.19, 0.0075, sz * 0.14, 0x2a2a30, 10);
  k.rbox(0.46, 0.065, 0.36, 0, 0.0475, 0, W, 0.012); k.box(0.44, 0.004, 0.34, 0, 0.082, 0, 0x2e2e34);
  k.cylS(0.152, 0.152, 0.014, -0.05, 0.091, 0.0, METAL.cromo, 24); k.cyl(0.146, 0.146, 0.003, -0.05, 0.0995, 0, 0x3a3a40, 24); record(k, -0.05, 0.103, 0, 0.143, k.c2); k.cylS(0.004, 0.004, 0.02, -0.05, 0.11, 0, METAL.cromo, 6);
  k.cylS(0.022, 0.026, 0.03, 0.17, 0.1, -0.1, METAL.cromo, 12); rod(k, [0.17, 0.118, -0.1], [0.07, 0.112, 0.07], 0.005, METAL.cromo, 6, true); k.box(0.022, 0.012, 0.036, 0.066, 0.108, 0.078, 0x2a2a30, RY(-0.53)); k.cylS(0.012, 0.012, 0.03, 0.19, 0.118, -0.13, 0x55555c, 8, mul(RY(-0.53), RX(HP)));
  for (const dz of [0.06, 0.11]) k.cylS(0.014, 0.014, 0.012, 0.185, 0.09, dz, METAL.cromo, 10); k.box(0.02, 0.008, 0.012, 0.185, 0.088, 0.145, 0xd0402c);
  k.glass(new THREE.BoxGeometry(0.46, 0.006, 0.36), mul(T(0, 0.088, -0.18), RX(-1.12), T(0, 0, 0.18)), 0xd8ecf2, 0.3);
  for (const s of [-1, 1]) k.glass(new THREE.BoxGeometry(0.006, 0.05, 0.36), mul(T(s * 0.227, 0.088, -0.18), RX(-1.12), T(0, -0.025, 0.18)), 0xd8ecf2, 0.3);
});

furn({ id: 'gramofone', name: 'Gramofone', cat: 'TV e som', kind: 'top', price: 1400, lvl: 10, w: 0.5, d: 0.5, h: 0.8, cols: [METAL.latao, WOOD.mogno], colN: ['Corneta', 'Caixa'], info: 'A corneta dourada enche a sala de valsa.' }, (k) => {
  const W = k.c2, B = k.c1;
  k.rbox(0.4, 0.03, 0.4, 0, 0.015, 0, tone(W, 0.8), 0.01); k.rbox(0.36, 0.13, 0.36, 0, 0.09, 0, W, 0.012); k.rbox(0.4, 0.025, 0.4, 0, 0.165, 0, tone(W, 0.86), 0.01);
  for (const s of [-1, 1]) k.box(0.2, 0.07, 0.004, 0, 0.09, s * 0.181, tone(W, 1.15)); for (const s of [-1, 1]) k.box(0.004, 0.07, 0.2, s * 0.181, 0.09, 0, tone(W, 1.15));
  rod(k, [0.18, 0.1, 0.05], [0.215, 0.1, 0.05], 0.006, B, 6, true); rod(k, [0.215, 0.1, 0.05], [0.215, 0.15, 0.05], 0.006, B, 6, true); k.cyl(0.012, 0.012, 0.03, 0.23, 0.15, 0.05, 0x2a2a2a, 8, RZ(HP));     // crank
  k.cylS(0.14, 0.14, 0.012, 0, 0.184, 0.02, B, 24); k.cyl(0.135, 0.135, 0.004, 0, 0.192, 0.02, 0x7a2a2a, 24); record(k, 0, 0.197, 0.02, 0.13, 0xd9b04a);
  k.tubeS([[0.06, 0.215, 0.06], [0.1, 0.24, -0.02], [0.08, 0.3, -0.13], [0.0, 0.4, -0.17]], 0.012, B, 6); k.cylS(0.03, 0.03, 0.014, 0.06, 0.208, 0.06, B, 12); k.cylS(0.012, 0.012, 0.2, -0.13, 0.27, -0.15, B, 8); k.boxS(0.14, 0.012, 0.02, -0.065, 0.37, -0.15, B, RZ(0.25));
  k.addS(LG([[0.012, 0], [0.022, 0.1], [0.05, 0.22], [0.105, 0.32], [0.2, 0.39], [0.196, 0.396], [0.098, 0.326], [0.044, 0.226], [0.014, 0.1]], 10), mul(T(0, 0.39, -0.165), RX(0.72)), B);
  k.add2(LG([[0.014, 0.1], [0.044, 0.226], [0.098, 0.326], [0.19, 0.39]], 10), mul(T(0, 0.39, -0.165), RX(0.72)), tone(B, 0.75));
});

furn({ id: 'caixa_som', name: 'Caixa de som', cat: 'TV e som', price: 450, lvl: 5, w: 0.32, d: 0.34, h: 1.02, cols: [WOOD.nogueira, 0x4a4a52], colN: ['Madeira', 'Tela'], info: 'Graves que fazem as samambaias dançarem.' }, (k) => {
  k.rbox(0.3, 0.03, 0.32, 0, 0.015, 0, 0x2a2a30, 0.01); speaker(k, 0, 0.03, 0, 0.27, 0.97, 0.28, k.c1, k.c2, 3); k.rbox(0.29, 0.02, 0.3, 0, 1.01, 0, tone(k.c1, 1.12), 0.008);
});

furn({ id: 'aparelho_som', name: 'Aparelho de som', cat: 'TV e som', kind: 'top', price: 780, lvl: 6, w: 0.92, d: 0.3, h: 0.36, cols: [0x3a3a42, 0x8a8f96], colN: ['Aparelho', 'Tela das caixas'], info: 'Rádio, CD e fita: tudo num só.' }, (k) => {
  const C = k.c1;
  for (const s of [-1, 1]) speaker(k, s * 0.34, 0, 0, 0.22, 0.34, 0.24, tone(C, 0.9), k.c2, 2);
  k.rbox(0.4, 0.1, 0.27, 0, 0.055, 0, C, 0.01); k.rbox(0.4, 0.09, 0.27, 0, 0.155, 0, tone(C, 1.12), 0.01); k.rbox(0.4, 0.1, 0.27, 0, 0.255, 0, C, 0.01);
  k.art('som_display', 0.2, 0.05, -0.07, 0.262, 0.1365, (g, W, H) => { g.fillStyle = '#0c1a24'; g.fillRect(0, 0, W, H); for (let i = 0; i < 16; i++) { const h = (0.25 + 0.7 * Math.abs(Math.sin(i * 1.9 + 0.6))) * H; g.fillStyle = i % 4 === 3 ? '#ffb84a' : '#5ae0d0'; g.fillRect(4 + i * (W - 8) / 16, H - h - 3, (W - 8) / 16 - 3, h); } }, { glow: 1, day: 1 });
  k.cylS(0.034, 0.034, 0.02, 0.12, 0.255, 0.14, METAL.cromo, 16, RX(HP)); k.box(0.006, 0.02, 0.004, 0.12, 0.27, 0.151, INK);
  k.box(0.3, 0.012, 0.006, -0.02, 0.165, 0.136, 0x18181c); for (let i = 0; i < 4; i++) k.cylS(0.009, 0.009, 0.008, 0.08 + i * 0.03, 0.135, 0.137, METAL.cromo, 8, RX(HP));
  k.box(0.2, 0.06, 0.006, -0.07, 0.055, 0.136, 0x18181c); for (const dx of [-0.11, -0.03]) k.cyl(0.018, 0.018, 0.004, dx, 0.055, 0.14, 0xe8e2d4, 10, RX(HP)); for (let i = 0; i < 3; i++) k.box(0.022, 0.014, 0.008, 0.08 + i * 0.035, 0.035, 0.137, tone(C, 1.5));
});

furn({ id: 'videogame', name: 'Videogame', cat: 'TV e som', kind: 'top', price: 900, lvl: 7, w: 0.56, d: 0.34, h: 0.12, cols: [0xf2f2f4, 0x4a90d9], colN: ['Console', 'Detalhes'], info: 'Dois controles para jogar com as visitas.' }, (k) => {
  const C = k.c1, A = k.c2;
  k.rbox(0.28, 0.06, 0.22, -0.12, 0.034, -0.04, C, 0.02); k.box(0.24, 0.006, 0.18, -0.12, 0.034, -0.04, tone(C, 0.55)); k.box(0.12, 0.004, 0.004, -0.14, 0.046, 0.071, 0x18181c);
  k.glow(new THREE.TorusGeometry(0.014, 0.004, 6, 16), A, 2, { M: T(-0.03, 0.04, 0.071), day: 1 });
  const pad = (x, z, a, c) => { const M = mul(T(x, 0, z), RY(a)), P = (g, m, col, sh) => (sh ? k.addS(g, mul(M, m), col) : k.add(g, mul(M, m), col));
    P(new THREE.CapsuleGeometry(0.03, 0.08, 4, 10), mul(T(0, 0.03, 0), RZ(HP), S(1, 1, 0.8)), c); for (const s of [-1, 1]) P(new THREE.SphereGeometry(0.028, 10, 8), mul(T(s * 0.055, 0.024, 0.03), S(1, 0.8, 1.3)), c);
    for (const s of [-1, 1]) { P(new THREE.CylinderGeometry(0.009, 0.011, 0.014, 8), T(s * 0.028, 0.058, 0.012), 0x2a2a30); P(new THREE.SphereGeometry(0.011, 8, 6), mul(T(s * 0.028, 0.066, 0.012), S(1, 0.5, 1)), 0x3a3a42); }
    [[0, -1, 0xe8504a], [1, 0, 0x5ac06a], [-1, 0, 0x4a90d9], [0, 1, 0xf2c23a]].forEach(([dx, dz, col]) => P(new THREE.CylinderGeometry(0.006, 0.006, 0.006, 6), T(0.055 + dx * 0.012, 0.053, -0.012 + dz * 0.012), col));
    P(new THREE.BoxGeometry(0.03, 0.006, 0.01), T(-0.055, 0.053, -0.012), 0x2a2a30); P(new THREE.BoxGeometry(0.01, 0.006, 0.03), T(-0.055, 0.053, -0.012), 0x2a2a30); };
  pad(0.16, 0.06, 0.35, tone(A, 1.0)); pad(0.13, -0.09, -0.25, tone(C, 0.95));
  [[0x3aa06a, 0], [0xe8684a, 1], [0x5a70c8, 2]].forEach(([c, i]) => { k.box(0.135, 0.014, 0.19, -0.13 + i * 0.006, 0.071 + i * 0.015, -0.04, tone(c, 0.9), RY(i * 0.12 - 0.1)); });
});

furn({ id: 'telefone_antigo', name: 'Telefone antigo', cat: 'TV e som', kind: 'top', price: 150, lvl: 2, w: 0.26, d: 0.22, h: 0.17, cols: [0xb8322c, METAL.latao], colN: ['Aparelho', 'Disco'], info: 'De disco, para fofocar com a vizinha.' }, (k) => {
  const C = k.c1;
  k.add(new THREE.CylinderGeometry(0.085, 0.14, 0.085, 4), mul(T(0, 0.045, 0), RY(PI / 4)), C); k.rbox(0.2, 0.012, 0.2, 0, 0.006, 0, tone(C, 0.7), 0.005);
  k.cylS(0.055, 0.055, 0.012, 0, 0.068, 0.068, k.c2, 18, RX(0.95)); k.cyl(0.022, 0.022, 0.014, 0, 0.07, 0.07, tone(C, 0.8), 12, RX(0.95));
  for (let i = 0; i < 9; i++) { const a = -0.6 + i * 0.6; k.add(new THREE.CylinderGeometry(0.008, 0.008, 0.004, 6), mul(T(0, 0.068, 0.068), RX(0.95), T(Math.cos(a) * 0.039, 0.007, Math.sin(a) * 0.039)), 0x1c1c20); }
  for (const s of [-1, 1]) { k.box(0.03, 0.04, 0.05, s * 0.06, 0.1, -0.02, tone(C, 0.9)); k.box(0.012, 0.025, 0.012, s * 0.06, 0.125, 0.0, tone(C, 0.9)); k.box(0.012, 0.025, 0.012, s * 0.06, 0.125, -0.04, tone(C, 0.9)); }
  k.tube([[-0.1, 0.135, -0.02], [-0.06, 0.15, -0.02], [0, 0.155, -0.02], [0.06, 0.15, -0.02], [0.1, 0.135, -0.02]], 0.014, C, 6);
  for (const s of [-1, 1]) { k.cyl(0.03, 0.022, 0.035, s * 0.105, 0.125, -0.02, C, 12); k.cyl(0.026, 0.026, 0.004, s * 0.105, 0.106, -0.02, 0x1c1c20, 12); }
  const cord = []; for (let i = 0; i <= 18; i++) { const t = i / 18; cord.push([-0.105 - 0.012 * Math.sin(t * PI) + Math.cos(i * 1.6) * 0.008, 0.1 - t * 0.085 + Math.sin(t * PI) * 0.01, -0.02 - t * 0.07 + Math.sin(i * 1.6) * 0.008]); }
  k.tube(cord, 0.003, 0x1c1c20, 4);
});

furn({ id: 'computador_mesinha', name: 'Computador na mesinha', cat: 'TV e som', price: 2400, lvl: 10, w: 1.1, d: 0.6, h: 1.24, cols: [0xe9e6df, WOOD.pinho], colN: ['Computador', 'Mesa'], info: 'Para pesquisar mudas raras e ver receitas.' }, (k) => {
  const W = k.c2, C = k.c1;
  k.rbox(1.1, 0.035, 0.58, 0, 0.74, 0, tone(W, 1.05), 0.01);
  for (const sz of [-1, 1]) k.box(0.045, 0.72, 0.045, -0.51, 0.36, sz * 0.25, tone(W, 0.9)); k.box(0.03, 0.06, 0.48, -0.51, 0.66, 0, tone(W, 0.9)); k.box(0.66, 0.3, 0.02, -0.2, 0.55, -0.26, tone(W, 0.86));
  k.box(0.36, 0.7, 0.54, 0.35, 0.37, 0, W); k.box(0.38, 0.04, 0.55, 0.35, 0.02, 0, tone(W, 0.7));
  for (let i = 0; i < 3; i++) { k.rbox(0.32, 0.19, 0.02, 0.35, 0.16 + i * 0.215, 0.275, tone(W, 1.1), 0.006); k.cylS(0.012, 0.012, 0.1, 0.35, 0.16 + i * 0.215, 0.292, METAL.latao, 8, RZ(HP)); }
  // tower under the desk
  k.rbox(0.18, 0.4, 0.4, -0.3, 0.215, -0.02, tone(C, 0.9), 0.012); k.box(0.14, 0.03, 0.004, -0.3, 0.36, 0.182, 0x2a2a30); k.glow(new THREE.CylinderGeometry(0.012, 0.012, 0.004, 10), 0x6ad0ff, 2, { M: mul(T(-0.3, 0.3, 0.182), RX(HP)), day: 1 }); for (let i = 0; i < 5; i++) k.box(0.12, 0.006, 0.004, -0.3, 0.1 + i * 0.02, 0.182, tone(C, 0.6));
  // monitor, keyboard, mouse
  k.addS(LG([[0.001, 0], [0.12, 0], [0.12, 0.008], [0.03, 0.02], [0.001, 0.02]], 18), mul(T(-0.12, 0.7575, -0.1), S(1, 1, 0.7)), tone(C, 0.8)); k.boxS(0.05, 0.14, 0.02, -0.12, 0.83, -0.12, tone(C, 0.8));
  flatTV(k, -0.12, 1.04, -0.09, 0.56, 0.34, C, 'scr_desktop', SCREEN.desktop, 0.016);
  k.rbox(0.4, 0.018, 0.13, -0.14, 0.767, 0.14, C, 0.006, RX(0.06)); k.art('teclado', 0.38, 0.11, -0.14, 0.7785, 0.14, (g, W2, H) => { g.fillStyle = '#d9d5cc'; g.fillRect(0, 0, W2, H); for (let r = 0; r < 5; r++) for (let c = 0; c < 15; c++) { if (r === 4 && c > 3 && c < 10) continue; g.fillStyle = '#fbfaf6'; g.fillRect(4 + c * (W2 - 8) / 15 + (r % 2) * 3, 4 + r * (H - 8) / 5, (W2 - 8) / 15 - 3, (H - 8) / 5 - 3); } g.fillStyle = '#fbfaf6'; g.fillRect(4 + 4 * (W2 - 8) / 15, 4 + 4 * (H - 8) / 5, 6 * (W2 - 8) / 15 - 3, (H - 8) / 5 - 3); }, { rot: mul(RX(0.06), RX(-HP)) });
  k.rbox(0.24, 0.004, 0.2, 0.3, 0.76, 0.14, 0x5a7a9a, 0.002); k.sph(0.032, 0.3, 0.768, 0.14, C, 0.75, 0.45, 1.2, 10);
  k.lathe([[0.001, 0], [0.036, 0], [0.04, 0.09], [0.034, 0.09], [0.032, 0.02], [0.001, 0.02]], 0.42, 0.7575, -0.12, 0xe8684a, 12); k.torus(0.024, 0.006, 0.465, 0.8, -0.12, 0xe8684a, null);
  k.box(0.2, 0.03, 0.26, -0.41, 0.773, -0.1, 0x5a86a8, RY(0.15)); k.box(0.18, 0.025, 0.24, -0.41, 0.8, -0.1, 0xe8c468, RY(-0.1));
});

// =====================================================================================================================
// LUZES
// =====================================================================================================================
const WARM = 0xfff0c8, HALO = 0xffd9a0;
const bulb = (k, x, y, z, r = 0.05, e = 3, o = {}) => k.glow(new THREE.SphereGeometry(r, 12, 8), o.color ?? WARM, e, { at: [x, y, z], ...o });
// lamp shade from radius rb at height yb to radius rt at yt, with its warm halo
function shade(k, x, yb, rb, yt, rt, z, c, seg = 24, halo = 1.3) {
  k.add2(LG([[rb, 0], [rt, yt - yb]], seg), T(x, yb, z), c);
  for (const [r, y] of [[rb, yb], [rt, yt]]) k.add(new THREE.TorusGeometry(r, 0.005, 5, seg), mul(T(x, y, z), RX(HP)), tone(c, 0.8));
  if (halo) k.glow(new THREE.CylinderGeometry(rt * 0.97, rb * 0.97, yt - yb, seg, 1, true), HALO, halo, { at: [x, (yb + yt) / 2, z], double: true, opacity: 0.55 });
}
// the plate against the ceiling
const rose = (k, r, c, x = 0, z = 0, h = 0.035) => k.addS(LG([[0.001, -h], [r * 0.3, -h], [r * 0.75, -h * 0.7], [r, -h * 0.2], [r, 0]], 16), T(x, ROOM_H, z), c);
function chain(k, x, y0, y1, z, c, s = 1) { const n = Math.max(1, Math.round((y1 - y0) / (0.028 * s))), st = (y1 - y0) / n; for (let i = 0; i < n; i++) k.addS(new THREE.TorusGeometry(0.011 * s, 0.003 * s, 4, 8), mul(T(x, y0 + (i + 0.5) * st, z), RY(i % 2 ? HP : 0), S(1, 1.45, 1)), c); }
// a candle flame that flickers
function flame(k, x, y, z, s = 1, day = 0.5) {
  const g = new THREE.SphereGeometry(0.012 * s, 8, 6); g.applyMatrix4(mul(T(0, 0.02 * s, 0), S(0.8, 1.9, 0.8)));
  const m = k.glow(g, 0xffd070, 3, { at: [x, y, z], day, emissive: 0xffa030 }), ph = x * 37 + z * 91 + y * 13;
  k.tick((dt, t) => { m.scale.set(1 + 0.12 * Math.sin(t * 11 + ph), 1 + 0.22 * Math.sin(t * 17 + ph * 1.7) * Math.sin(t * 5.3 + ph), 1); m.rotation.z = 0.14 * Math.sin(t * 7 + ph); });
  return m;
}
function candle(k, x, y, z, r, h, c, day = 0.5) { k.cyl(r, r, h, x, y + h / 2, z, c, 10); k.cyl(r * 0.8, r * 1.02, 0.006, x, y + h + 0.002, z, tone(c, 1.2), 10); k.cyl(0.0015, 0.0015, 0.012, x, y + h + 0.006, z, 0x2a2420, 4); return flame(k, x, y + h + 0.008, z, r / 0.014 * 0.9, day); }

furn({ id: 'luminaria_teto_simples', name: 'Luminária de teto simples', cat: 'Luzes', kind: 'ceil', price: 40, lvl: 1, w: 0.32, d: 0.32, h: 0.5, cols: [0xf4e9d0, 0x3c3c40], colN: ['Cúpula', 'Fio e soquete'], info: 'Uma lâmpada, uma cupulinha e pronto.' }, (k) => {
  const Y = ROOM_H; rose(k, 0.06, k.c2); k.cyl(0.004, 0.004, 0.3, 0, Y - 0.18, 0, k.c2, 5); k.cyl(0.02, 0.026, 0.06, 0, Y - 0.35, 0, k.c2, 10);
  k.lathe2([[0.15, 0], [0.12, 0.06], [0.03, 0.105]], 0, Y - 0.45, 0, k.c1, 20); k.add(new THREE.TorusGeometry(0.15, 0.005, 5, 20), mul(T(0, Y - 0.45, 0), RX(HP)), tone(k.c1, 0.8));
  bulb(k, 0, Y - 0.43, 0, 0.05, 3); k.glow(LG([[0.146, 0], [0.117, 0.06], [0.03, 0.103]], 20), HALO, 0.8, { at: [0, Y - 0.45, 0], double: true, opacity: 0.5 });
});

furn({ id: 'abajur_simples', name: 'Abajur simples', cat: 'Luzes', kind: 'top', price: 60, lvl: 1, w: 0.28, d: 0.28, h: 0.4, cols: [0xf6e6c4, 0x8fb0a0], colN: ['Cúpula', 'Base'], info: 'Pequenino, de cerâmica, para a mesinha de cabeceira.' }, (k) => {
  k.latheS([[0.001, 0], [0.06, 0], [0.065, 0.012], [0.042, 0.03], [0.072, 0.09], [0.06, 0.15], [0.022, 0.19], [0.014, 0.2]], 0, 0, 0, k.c2, 18); k.cylS(0.008, 0.008, 0.08, 0, 0.24, 0, METAL.latao, 6);
  shade(k, 0, 0.22, 0.13, 0.39, 0.08, 0, k.c1, 20); bulb(k, 0, 0.3, 0, 0.035, 3);
});

furn({ id: 'luminaria_cogumelo', name: 'Luminária cogumelo', cat: 'Luzes', kind: 'top', price: 180, lvl: 3, w: 0.22, d: 0.22, h: 0.23, cols: [0xd8483c, 0xfff6e4], colN: ['Chapéu', 'Pintinhas'], info: 'Um cogumelinho que acende no escuro.' }, (k) => {
  k.glow(LG([[0.001, 0], [0.055, 0], [0.06, 0.02], [0.036, 0.075], [0.032, 0.13]], 16), 0xfff1d8, 1.3, { day: 0.2 });
  k.lathe([[0.105, 0.105], [0.108, 0.125], [0.092, 0.17], [0.055, 0.205], [0.001, 0.222]], 0, 0, 0, k.c1, 20); k.lathe2([[0.03, 0.128], [0.105, 0.105]], 0, 0, 0, tone(k.c2, 0.92), 20);
  [[0.4, 0.06, 0.016], [1.6, 0.075, 0.014], [2.9, 0.055, 0.018], [4.2, 0.08, 0.013], [5.3, 0.05, 0.015], [0, 0.0, 0.016]].forEach(([a, r, s]) => { const y = 0.222 - (r / 0.108) ** 2 * 0.1; k.sph(s, Math.cos(a) * r, y - 0.002, Math.sin(a) * r, k.c2, 1, 0.45, 1, 8); });
});

furn({ id: 'luminaria_sal', name: 'Luminária de sal', cat: 'Luzes', kind: 'top', price: 130, lvl: 2, w: 0.2, d: 0.2, h: 0.27, cols: [0xff9a62, WOOD.nogueira], colN: ['Pedra', 'Base'], info: 'Uma pedra rosada que brilha suave.' }, (k) => {
  k.cyl(0.085, 0.095, 0.035, 0, 0.0175, 0, k.c2, 18); k.cyl(0.075, 0.085, 0.01, 0, 0.04, 0, tone(k.c2, 0.8), 18);
  const g = new THREE.IcosahedronGeometry(0.085, 0); g.applyMatrix4(mul(T(0, 0.15, 0), RY(0.4), RZ(0.12), S(0.9, 1.4, 0.82))); k.glow(g, k.c1, 0.75, { day: 0.3, emissive: tone(k.c1, 0.85) });
  const g2 = new THREE.IcosahedronGeometry(0.05, 0); g2.applyMatrix4(mul(T(0.03, 0.09, 0.02), RY(1.4), S(1.2, 1, 1))); k.glow(g2, tone(k.c1, 1.2), 0.7, { day: 0.3 });
});

furn({ id: 'lampiao', name: 'Lampião', cat: 'Luzes', kind: 'top', price: 95, lvl: 2, w: 0.2, d: 0.16, h: 0.4, cols: [0xb8382e, METAL.latao], colN: ['Corpo', 'Metal'], info: 'Lembra as noites na roça da vó.' }, (k) => {
  const C = k.c1, M = k.c2;
  k.latheS([[0.001, 0], [0.07, 0], [0.075, 0.012], [0.072, 0.05], [0.045, 0.075], [0.03, 0.08], [0.001, 0.08]], 0, 0, 0, C, 16); k.cylS(0.032, 0.036, 0.022, 0, 0.09, 0, M, 12); k.cylS(0.008, 0.008, 0.02, 0.05, 0.09, 0, M, 8, RZ(HP));
  k.glass(LG([[0.036, 0], [0.056, 0.055], [0.05, 0.11], [0.03, 0.15]], 14), T(0, 0.1, 0), 0xe8f4f4, 0.3); flame(k, 0, 0.105, 0, 1.3, 0.5);
  k.latheS([[0.034, 0.25], [0.05, 0.255], [0.045, 0.27], [0.022, 0.29], [0.02, 0.305], [0.03, 0.31], [0.001, 0.318]], 0, 0, 0, C, 14);
  for (const s of [-1, 1]) k.tubeS([[s * 0.074, 0.05, 0], [s * 0.082, 0.14, 0], [s * 0.07, 0.24, 0], [s * 0.046, 0.262, 0]], 0.004, M, 5);
  k.tubeS([[-0.08, 0.2, 0], [-0.075, 0.32, 0], [0, 0.39, 0], [0.075, 0.32, 0], [0.08, 0.2, 0]], 0.003, M, 5);
});

furn({ id: 'castical_velas', name: 'Castiçal de três velas', cat: 'Luzes', kind: 'top', price: 220, lvl: 3, w: 0.34, d: 0.14, h: 0.44, cols: [METAL.latao, 0xf6ecd8], colN: ['Castiçal', 'Velas'], info: 'Jantar à luz de velas, com as chamas dançando.' }, (k) => {
  const M = k.c1;
  k.latheS([[0.001, 0], [0.065, 0], [0.068, 0.01], [0.03, 0.03], [0.014, 0.06], [0.022, 0.1], [0.012, 0.14], [0.018, 0.2], [0.01, 0.24], [0.012, 0.29]], 0, 0, 0, M, 16);
  for (const s of [-1, 1]) { k.tubeS([[0, 0.17, 0], [s * 0.05, 0.14, 0], [s * 0.11, 0.16, 0], [s * 0.125, 0.23, 0]], 0.006, M, 6); k.sphS(0.012, s * 0.06, 0.142, 0, M, 1, 1, 1, 8); }
  for (const [x, y] of [[-0.125, 0.23], [0, 0.29], [0.125, 0.23]]) { k.latheS([[0.001, 0], [0.012, 0], [0.034, 0.016], [0.036, 0.022], [0.016, 0.022], [0.016, 0.012], [0.001, 0.012]], x, y, 0, M, 12); candle(k, x, y + 0.012, 0, 0.013, 0.1 - (x ? 0.015 : 0), k.c2); }
});

furn({ id: 'luminaria_leitura', name: 'Luminária de leitura', cat: 'Luzes', kind: 'top', price: 300, lvl: 4, w: 0.44, d: 0.18, h: 0.47, cols: [0xe8b53a, METAL.cromo], colN: ['Cabeça e base', 'Braço'], info: 'Articulada, para ler catálogo de sementes até tarde.' }, (k) => {
  const C = k.c1, M = k.c2;
  k.latheS([[0.001, 0], [0.08, 0], [0.082, 0.012], [0.07, 0.022], [0.02, 0.03], [0.001, 0.03]], -0.1, 0, 0, C, 18);
  for (const dz of [-0.012, 0.012]) { rod(k, [-0.1, 0.03, dz], [-0.17, 0.27, dz], 0.005, M, 6, true); rod(k, [-0.17, 0.27, dz], [0.05, 0.44, dz], 0.005, M, 6, true); }
  for (const [x, y] of [[-0.1, 0.035], [-0.17, 0.27], [0.05, 0.44]]) k.cylS(0.014, 0.014, 0.04, x, y, 0, tone(M, 0.7), 10, RX(HP));
  const HM = mul(T(0.1, 0.36, 0), RZ(0.75)); k.addS(LG([[0.075, 0], [0.07, 0.03], [0.035, 0.09], [0.03, 0.12], [0.001, 0.125]], 16), HM, C); k.add2(LG([[0.073, 0.001], [0.068, 0.03], [0.034, 0.088]], 16), HM, 0xfaf6ea);
  k.glow(new THREE.SphereGeometry(0.03, 10, 8), WARM, 3, { M: mul(HM, T(0, 0.03, 0)) }); k.glow(new THREE.CircleGeometry(0.07, 16), HALO, 1.2, { M: mul(HM, T(0, 0.004, 0), RX(HP)), double: true, opacity: 0.5 });
});

furn({ id: 'abajur_chao', name: 'Abajur de chão tripé', cat: 'Luzes', price: 260, lvl: 3, w: 0.5, d: 0.5, h: 1.58, cols: [0xf4e4c0, WOOD.carvalho], colN: ['Cúpula', 'Pés'], info: 'Três pezinhos de madeira e uma luz morna para ler.' }, (k) => {
  for (let i = 0; i < 3; i++) { const a = (i / 3) * TAU + PI / 6; rod(k, [Math.cos(a) * 0.22, 0.008, Math.sin(a) * 0.22], [Math.cos(a) * 0.025, 1.12, Math.sin(a) * 0.025], 0.016, k.c2, 8); }
  k.cylS(0.05, 0.05, 0.04, 0, 1.1, 0, METAL.latao, 14); ringS(k, 0.12, 0.005, 0, 0.55, 0, METAL.latao); k.cylS(0.01, 0.01, 0.16, 0, 1.2, 0, METAL.latao, 6);
  shade(k, 0, 1.2, 0.24, 1.57, 0.21, 0, k.c1, 24); bulb(k, 0, 1.36, 0, 0.06, 3);
});

furn({ id: 'luminaria_papel', name: 'Luminária de papel japonesa', cat: 'Luzes', price: 420, lvl: 5, w: 0.42, d: 0.42, h: 1.25, cols: [0xfff3d8, 0x3a322c], colN: ['Papel', 'Pezinhos'], info: 'Papel de arroz que espalha uma luz de lua.' }, (k) => {
  for (let i = 0; i < 3; i++) { const a = (i / 3) * TAU + PI / 2; rod(k, [Math.cos(a) * 0.15, 0.004, Math.sin(a) * 0.15], [Math.cos(a) * 0.05, 0.2, Math.sin(a) * 0.05], 0.006, k.c2, 6); } ring(k, 0.055, 0.006, 0, 0.19, 0, k.c2);
  const R = (t) => 0.07 + 0.135 * Math.pow(Math.sin(PI * (0.08 + t * 0.84)), 0.75), pts = []; for (let i = 0; i <= 14; i++) pts.push([R(i / 14), 0.18 + (i / 14) * 1.04]);
  k.glow(LG(pts, 20), k.c1, 0.85, { day: 0.12, double: true });
  for (let i = 0; i <= 14; i++) k.add(new THREE.TorusGeometry(R(i / 14) + 0.001, 0.0035, 4, 20), mul(T(0, 0.18 + (i / 14) * 1.04, 0), RX(HP)), tone(k.c1, 0.82));
  k.cyl(0.06, 0.075, 0.02, 0, 1.23, 0, k.c2, 14); k.cyl(0.075, 0.06, 0.015, 0, 0.18, 0, k.c2, 14);
});

furn({ id: 'luminaria_arco', name: 'Luminária de arco', cat: 'Luzes', price: 980, lvl: 8, w: 1.6, d: 0.42, h: 2.0, cols: [METAL.latao, 0xeee8e0], colN: ['Arco e cúpula', 'Base de mármore'], info: 'O arco elegante leva a luz até o sofá.' }, (k) => {
  const M = k.c1;
  k.cyl(0.17, 0.17, 0.08, -0.62, 0.04, 0, k.c2, 24); k.cyl(0.172, 0.172, 0.006, -0.62, 0.03, 0, tone(k.c2, 0.85), 24); k.cylS(0.03, 0.035, 0.05, -0.62, 0.105, 0, M, 12);
  { const pts = [[-0.62, 0.08, 0], [-0.62, 0.55, 0]]; for (let i = 0; i <= 10; i++) { const a = PI - (i / 10) * (PI - 0.66); pts.push([-0.02 + 0.6 * Math.cos(a), 1.05 + 0.92 * Math.sin(a), 0]); } tb(k, pts, 0.014, M, { n: 40, seg: 8, shiny: true }); }
  k.latheS([[0.21, 0], [0.2, 0.05], [0.14, 0.13], [0.05, 0.175], [0.025, 0.2], [0.001, 0.2]], 0.455, 1.41, 0, M, 22); k.lathe2([[0.205, 0.002], [0.195, 0.05], [0.136, 0.128], [0.05, 0.17]], 0.455, 1.41, 0, 0xfaf4e4, 22);
  bulb(k, 0.455, 1.45, 0, 0.055, 3); k.glow(new THREE.CircleGeometry(0.2, 20), HALO, 1, { M: mul(T(0.455, 1.415, 0), RX(HP)), double: true, opacity: 0.4 });
});

furn({ id: 'arandela', name: 'Arandela', cat: 'Luzes', kind: 'wall', price: 180, lvl: 2, w: 0.2, d: 0.25, h: 0.3, cols: [0xf6ecd4, METAL.latao], colN: ['Tulipa de vidro', 'Metal'], info: 'Uma luzinha na parede do corredor.' }, (k) => {
  const M = k.c2;
  k.cylS(0.06, 0.06, 0.012, 0, 1.76, 0.006, M, 18, RX(HP)); k.cylS(0.035, 0.045, 0.012, 0, 1.76, 0.016, M, 14, RX(HP));
  k.tubeS([[0, 1.76, 0.02], [0, 1.72, 0.09], [0, 1.74, 0.145], [0, 1.8, 0.15]], 0.008, M, 6); k.latheS([[0.001, 0], [0.02, 0], [0.04, 0.02], [0.04, 0.028], [0.001, 0.028]], 0, 1.795, 0.15, M, 12);
  k.lathe2([[0.03, 0], [0.07, 0.045], [0.088, 0.11], [0.08, 0.16], [0.09, 0.175]], 0, 1.82, 0.15, k.c1, 16); bulb(k, 0, 1.89, 0.15, 0.035, 3);
  k.glow(LG([[0.029, 0], [0.068, 0.045], [0.085, 0.11], [0.078, 0.158]], 16), HALO, 0.9, { at: [0, 1.82, 0.15], double: true, opacity: 0.5 });
});

furn({ id: 'cordao_luzinhas', name: 'Cordão de luzinhas', cat: 'Luzes', kind: 'wall', price: 150, lvl: 2, w: 2.0, d: 0.06, h: 0.26, cols: [0xffe2a0, 0xffb39a], colN: ['Luzinhas 1', 'Luzinhas 2'], info: 'Acende a parede como noite de festa junina.' }, (k) => {
  const Y = 2.32, yy = (x) => Y - 0.15 * Math.sin((PI * (Math.abs(x) % 0.975)) / 0.975) - 0.004, pts = []; for (let i = 0; i <= 20; i++) { const x = -0.975 + i * 0.0975; pts.push([x, yy(x), 0.016]); }
  k.tube(pts, 0.004, 0x3a4a34, 4); for (const x of [-0.975, 0, 0.975]) k.sphS(0.012, x, Y, 0.012, METAL.latao, 1, 1, 1, 8);
  const A = [], B = []; for (let i = 0; i < 16; i++) { const x = -0.92 + i * (1.84 / 15), y = yy(x); k.cyl(0.008, 0.01, 0.018, x, y - 0.012, 0.02, 0x3a4a34, 6); (i % 2 ? B : A).push([new THREE.SphereGeometry(0.02, 8, 6), mul(T(x, y - 0.042, 0.022), S(0.85, 1.25, 0.85))]); }
  k.glow(mergeGeo(A), k.c1, 2.2, { day: 0.5 }); k.glow(mergeGeo(B), k.c2, 2.2, { day: 0.5 });
});

furn({ id: 'pendente_vime', name: 'Pendente de vime', cat: 'Luzes', kind: 'ceil', price: 340, lvl: 4, w: 0.64, d: 0.64, h: 0.9, cols: [0xc9a468, 0x3c3c40], colN: ['Vime', 'Fio'], info: 'Trançado à mão, espalha sombras bonitas.' }, (k) => {
  const Y = ROOM_H; rose(k, 0.06, k.c2); k.cyl(0.004, 0.004, 0.44, 0, Y - 0.24, 0, k.c2, 5); k.cyl(0.022, 0.028, 0.06, 0, Y - 0.47, 0, k.c2, 10);
  basket(k, 0, Y - 0.9, 0, 0.42, (t) => 0.07 + 0.24 * Math.sqrt(Math.max(0, 1 - t * t * t)), k.c1, 10, 20, { open: true });
  for (let i = 0; i < 10; i++) { const a = (i / 10) * TAU, P = (t) => { const r = 0.073 + 0.245 * Math.sqrt(Math.max(0, 1 - t * t * t)); return [Math.cos(a) * r, Y - 0.9 + t * 0.42, Math.sin(a) * r]; }; k.tube([P(0), P(0.35), P(0.65), P(0.85), P(1)], 0.005, tone(k.c1, 0.8), 4); }
  k.add(new THREE.TorusGeometry(0.312, 0.009, 5, 24), mul(T(0, Y - 0.9, 0), RX(HP)), tone(k.c1, 0.85)); bulb(k, 0, Y - 0.56, 0, 0.055, 3);
  k.glow(new THREE.SphereGeometry(0.2, 12, 8), HALO, 0.5, { at: [0, Y - 0.66, 0], opacity: 0.25 });
});

furn({ id: 'pendente_industrial_triplo', name: 'Pendente industrial triplo', cat: 'Luzes', kind: 'ceil', price: 820, lvl: 7, w: 1.1, d: 0.34, h: 0.95, cols: [METAL.cobre, 0x2c2c30], colN: ['Cúpulas', 'Barra e fios'], info: 'Três cúpulas de metal sobre a mesa.' }, (k) => {
  const Y = ROOM_H; k.boxS(0.9, 0.03, 0.07, 0, Y - 0.015, 0, k.c2);
  [[-0.36, 0.5], [0, 0.72], [0.36, 0.42]].forEach(([x, L]) => { const y = Y - L; k.cyl(0.004, 0.004, L - 0.1, x, Y - 0.03 - (L - 0.1) / 2, 0, k.c2, 5); k.cylS(0.024, 0.03, 0.07, x, y + 0.035, 0, k.c2, 10);
    k.latheS([[0.165, 0], [0.16, 0.04], [0.08, 0.12], [0.04, 0.15], [0.03, 0.2], [0.001, 0.2]], x, y - 0.2, 0, k.c1, 20); k.lathe2([[0.162, 0.002], [0.157, 0.04], [0.078, 0.118], [0.04, 0.148]], x, y - 0.2, 0, 0xf6efdc, 20);
    bulb(k, x, y - 0.15, 0, 0.045, 3); k.glow(new THREE.CircleGeometry(0.155, 18), HALO, 1, { M: mul(T(x, y - 0.195, 0), RX(HP)), double: true, opacity: 0.4 }); });
});

furn({ id: 'ventilador_teto', name: 'Ventilador de teto com luz', cat: 'Luzes', kind: 'ceil', price: 1900, lvl: 10, w: 1.34, d: 1.34, h: 0.52, cols: [WOOD.carvalho, METAL.latao], colN: ['Pás', 'Metal'], info: 'Refresca a sala e ainda ilumina.' }, (k) => {
  const Y = ROOM_H, M = k.c2; rose(k, 0.085, M, 0, 0, 0.05); k.cylS(0.014, 0.014, 0.22, 0, Y - 0.15, 0, M, 8);
  k.latheS([[0.001, -0.43], [0.07, -0.43], [0.125, -0.4], [0.135, -0.34], [0.11, -0.29], [0.04, -0.26], [0.02, -0.24], [0.001, -0.24]], 0, Y, 0, M, 22);
  const fan = part(k, (p) => { for (let i = 0; i < 5; i++) { const R = RY((i / 5) * TAU); p.addS(new THREE.BoxGeometry(0.16, 0.008, 0.04), mul(R, T(0.19, 0, 0)), M); p.add(new THREE.BoxGeometry(0.42, 0.01, 0.14), mul(R, T(0.4, 0, 0), RX(0.2)), k.c1); p.add(new THREE.CylinderGeometry(0.07, 0.07, 0.01, 14), mul(R, T(0.6, 0, 0), RX(0.2)), k.c1); p.add(new THREE.BoxGeometry(0.4, 0.004, 0.03), mul(R, T(0.4, 0.006, 0), RX(0.2)), tone(k.c1, 0.82)); } }, 0, Y - 0.345, 0);
  k.tick((dt) => { fan.rotation.y += dt * 4.5; });
  ringS(k, 0.1, 0.012, 0, Y - 0.435, 0, M); k.glow(LG([[0.001, -0.075], [0.05, -0.07], [0.09, -0.045], [0.1, 0]], 18), 0xfff2d2, 1.7, { at: [0, Y - 0.44, 0] });
  for (const s of [-1, 1]) { k.cyl(0.0015, 0.0015, 0.09, s * 0.12, Y - 0.445, 0.02, M, 4); k.sphS(0.008, s * 0.12, Y - 0.495, 0.02, M, 1, 1.3, 1, 6); }
});

furn({ id: 'lanterna_marroquina', name: 'Lanterna marroquina', cat: 'Luzes', kind: 'ceil', price: 1500, lvl: 9, w: 0.34, d: 0.34, h: 1.0, cols: [METAL.latao, 0xff8a4a], colN: ['Metal', 'Vidro colorido'], info: 'Vidro colorido que pinta a parede de luz.' }, (k) => {
  const Y = ROOM_H, M = k.c1, r = 0.12, y0 = Y - 0.84, h = 0.26; rose(k, 0.05, M); chain(k, 0, Y - 0.42, Y - 0.03, 0, M);
  k.addS(LG([[r + 0.02, 0], [r + 0.005, 0.02], [0.075, 0.09], [0.04, 0.13], [0.05, 0.15], [0.02, 0.17], [0.001, 0.175]], 6), T(0, y0 + h, 0), M); ringS(k, 0.016, 0.004, 0, Y - 0.435, 0, M, T(0, 0, 0));
  k.addS(LG([[0.001, -0.14], [0.012, -0.13], [0.02, -0.1], [0.012, -0.085], [0.06, -0.05], [r + 0.005, -0.012], [r + 0.02, 0]], 6), T(0, y0, 0), M); k.sphS(0.014, 0, y0 - 0.15, 0, M, 1, 1.3, 1, 8);
  k.glow(new THREE.CylinderGeometry(r, r, h, 6, 1, true), k.c2, 1.5, { at: [0, y0 + h / 2, 0], double: true, opacity: 0.8, day: 0.1 }); bulb(k, 0, y0 + h / 2, 0, 0.03, 3);
  for (let i = 0; i < 6; i++) { const a0 = (i / 6) * TAU, P = (a, y, o = 0.002) => [Math.sin(a) * (r + o), y, Math.cos(a) * (r + o)], a1 = a0 + TAU / 6, am = a0 + TAU / 12, rm = r * Math.cos(PI / 6);
    rod(k, P(a0, y0), P(a0, y0 + h), 0.006, M, 5, true);
    const mid = (t) => [Math.sin(am) * (rm + 0.003), y0 + h * t, Math.cos(am) * (rm + 0.003)], e0 = (t) => { const p0 = P(a0, y0 + h * t, 0.001), p1 = P(a1, y0 + h * t, 0.001); return [[p0[0] * 0.92 + p1[0] * 0.08, p0[1], p0[2] * 0.92 + p1[2] * 0.08], [p1[0] * 0.92 + p0[0] * 0.08, p1[1], p1[2] * 0.92 + p0[2] * 0.08]]; };
    const [l5, r5] = e0(0.5); rod(k, mid(0.06), l5, 0.003, M, 4, true); rod(k, mid(0.06), r5, 0.003, M, 4, true); rod(k, mid(0.94), l5, 0.003, M, 4, true); rod(k, mid(0.94), r5, 0.003, M, 4, true); k.sphS(0.008, ...mid(0.5), M, 1, 1, 1, 6); }
});

furn({ id: 'lustre_velas_ferro', name: 'Lustre de velas de ferro', cat: 'Luzes', kind: 'ceil', price: 2600, lvl: 11, w: 0.9, d: 0.9, h: 0.82, cols: [0x34343a, 0xf6ecd8], colN: ['Ferro', 'Velas'], info: 'Ferro batido e seis velas, como numa fazenda antiga.' }, (k) => {
  const Y = ROOM_H, M = k.c1, R = 0.38, yr = Y - 0.66; rose(k, 0.07, M); chain(k, 0, Y - 0.3, Y - 0.03, 0, M, 1.3); ringS(k, 0.03, 0.006, 0, Y - 0.32, 0, M, T(0, 0, 0));
  k.addS(new THREE.TorusGeometry(R, 0.014, 6, 32), mul(T(0, yr, 0), RX(HP)), M); k.addS(new THREE.TorusGeometry(R, 0.006, 4, 32), mul(T(0, yr - 0.05, 0), RX(HP)), M);
  for (let i = 0; i < 3; i++) { const a = (i / 3) * TAU + 0.52; rod(k, [0, Y - 0.34, 0], [Math.cos(a) * R, yr, Math.sin(a) * R], 0.005, M, 5, true); rod(k, [Math.cos(a) * R, yr, Math.sin(a) * R], [-Math.cos(a) * 0.0, yr - 0.02, 0], 0.006, M, 5, true); }
  k.latheS([[0.001, -0.12], [0.012, -0.11], [0.03, -0.07], [0.012, -0.04], [0.035, -0.01], [0.03, 0.02], [0.001, 0.03]], 0, yr - 0.02, 0, M, 10);
  for (let i = 0; i < 6; i++) { const a = (i / 6) * TAU, x = Math.cos(a) * R, z = Math.sin(a) * R; k.latheS([[0.001, 0], [0.014, 0], [0.04, 0.02], [0.042, 0.028], [0.022, 0.028], [0.022, 0.014], [0.001, 0.014]], x, yr + 0.012, z, M, 10); candle(k, x, yr + 0.026, z, 0.019, 0.11 + (i % 2) * 0.02, k.c2);
    const a2 = a + TAU / 12; k.addS(new THREE.TorusGeometry(0.035, 0.004, 4, 12, PI * 1.5), mul(T(Math.cos(a2) * R, yr - 0.025, Math.sin(a2) * R), RY(-a2 + HP), RZ(-HP * 0.5)), M); }
});

furn({ id: 'abajur_vitral', name: 'Abajur de vitral', cat: 'Luzes', kind: 'top', price: 3200, lvl: 12, w: 0.44, d: 0.44, h: 0.56, cols: [0x4aa6a0, 0x5a4630], colN: ['Vitral', 'Base de bronze'], info: 'Cada pedacinho de vidro foi soldado à mão.' }, (k) => {
  const B = k.c2, n = 12, prof = [[0.21, 0.275], [0.2, 0.31], [0.185, 0.37], [0.125, 0.45], [0.045, 0.5]];
  k.latheS([[0.001, 0], [0.1, 0], [0.105, 0.012], [0.06, 0.03], [0.024, 0.06], [0.034, 0.12], [0.03, 0.16], [0.016, 0.22], [0.014, 0.36]], 0, 0, 0, B, 18); for (let i = 0; i < 8; i++) k.sphS(0.012, Math.cos(i * 0.785) * 0.082, 0.02, Math.sin(i * 0.785) * 0.082, tone(B, 1.2), 1, 1, 1, 6);
  const P = (b, i) => { const a = (i / n) * TAU; return new THREE.Vector3(Math.cos(a) * prof[b][0], prof[b][1], Math.sin(a) * prof[b][0]); }, groups = new Map();
  const cols = [[tone(k.c1, 0.8), 0xe8a23c], [k.c1, 0x6ab04a, k.c1, 0xd8483c], [0xf2c868, tone(k.c1, 1.25)], [0xe8a23c, 0xd8483c]];
  for (let b = 0; b < 4; b++) for (let i = 0; i < n; i++) { const c = cols[b][(i + (b === 1 ? 0 : b)) % cols[b].length], p = [P(b, i), P(b, i + 1), P(b + 1, i + 1), P(b + 1, i)], g = new THREE.BufferGeometry().setFromPoints([p[0], p[2], p[1], p[0], p[3], p[2]]); g.computeVertexNormals(); (groups.get(c) || groups.set(c, []).get(c)).push([g]);
    rod(k, p[0].toArray(), p[3].toArray(), 0.0035, tone(B, 0.6), 4); }
  for (const [c, list] of groups) k.glow(mergeGeo(list), c, 1.15, { day: 0.22, double: true });
  for (let b = 0; b < 5; b++) k.add(new THREE.TorusGeometry(prof[b][0], 0.004, 4, n), mul(T(0, prof[b][1], 0), RX(HP)), tone(B, 0.6));
  k.latheS([[0.05, 0.495], [0.04, 0.515], [0.012, 0.525], [0.016, 0.545], [0.001, 0.556]], 0, 0, 0, B, 12); bulb(k, 0, 0.38, 0, 0.04, 2.5);
});

furn({ id: 'pendente_globos', name: 'Pendente de globos de vidro', cat: 'Luzes', kind: 'ceil', price: 4200, lvl: 13, w: 0.8, d: 0.8, h: 1.13, cols: [0xffe9c0, METAL.latao], colN: ['Vidro', 'Metal'], info: 'Bolhas de vidro flutuando com luz de âmbar.' }, (k) => {
  const Y = ROOM_H, M = k.c2; rose(k, 0.16, M, 0, 0, 0.04);
  [[0, 0, 1.12, 0.13], [0.24, 0.1, 0.8, 0.1], [-0.22, 0.14, 0.95, 0.11], [-0.12, -0.24, 0.66, 0.09], [0.2, -0.2, 1.0, 0.1], [-0.28, -0.06, 0.48, 0.08], [0.06, 0.27, 0.56, 0.085]].forEach(([x, z, L, r]) => { const y = Y - L + r;
    rod(k, [x * 0.35, Y - 0.03, z * 0.35], [x, y + r + 0.03, z], 0.0035, tone(M, 0.6), 4); k.cylS(0.018, 0.024, 0.045, x, y + r + 0.012, z, M, 10);
    k.glass(new THREE.SphereGeometry(r, 16, 12), T(x, y, z), k.c1, 0.3); k.cylS(0.008, 0.008, r * 0.7, x, y + r * 0.6, z, M, 5); bulb(k, x, y + r * 0.1, z, r * 0.3, 3.2); });
});

furn({ id: 'lustre_cristal', name: 'Lustre de cristal', cat: 'Luzes', kind: 'ceil', price: 12000, lvl: 17, w: 1.0, d: 1.0, h: 1.2, cols: [METAL.ouro, 0xeaf6ff], colN: ['Metal', 'Cristais'], info: 'Doze luzes e uma chuva de cristais: um luxo.' }, (k) => {
  const Y = ROOM_H, M = k.c1, cr = [], fl = [], oct = (x, y, z, r, sy = 1.5) => cr.push([new THREE.OctahedronGeometry(r, 0), mul(T(x, y, z), S(1, sy, 1))]);
  rose(k, 0.1, M, 0, 0, 0.05); chain(k, 0, Y - 0.3, Y - 0.04, 0, M, 1.7);
  k.latheS([[0.001, -1.04], [0.03, -1.02], [0.05, -0.97], [0.025, -0.92], [0.06, -0.85], [0.1, -0.79], [0.045, -0.73], [0.03, -0.63], [0.07, -0.55], [0.035, -0.49], [0.022, -0.38], [0.045, -0.34], [0.07, -0.32], [0.02, -0.3], [0.001, -0.3]], 0, Y, 0, M, 16);
  const tier = (n, y, R, off, drop) => { for (let i = 0; i < n; i++) { const a = (i / n) * TAU + off, c = Math.cos(a), s = Math.sin(a), P = (r, yy) => [c * r, Y + yy, s * r];
    tb(k, [P(0.05, y), P(R * 0.45, y - drop), P(R * 0.82, y - drop * 0.6), P(R, y + 0.05)], 0.008, M, { n: 10, seg: 5, shiny: true }); k.latheS([[0.001, 0], [0.045, 0.02], [0.048, 0.03], [0.001, 0.03]], c * R, Y + y + 0.05, s * R, M, 8); k.cyl(0.012, 0.012, 0.07, c * R, Y + y + 0.115, s * R, 0xfbf6ea, 8);
    fl.push([new THREE.SphereGeometry(0.02, 6, 4), mul(T(c * R, Y + y + 0.175, s * R), S(0.8, 1.6, 0.8))]); oct(c * R, Y + y + 0.01, s * R, 0.02, 2);
    const a2 = ((i + 1) / n) * TAU + off; for (let j = 1; j < 5; j++) { const t = j / 5, sag = Math.sin(t * PI) * 0.07; oct((c * (1 - t) + Math.cos(a2) * t) * R, Y + y + 0.04 - sag, (s * (1 - t) + Math.sin(a2) * t) * R, 0.012, 1.3); }
    for (let j = 1; j < 5; j++) { const t = j / 5, rr = 0.07 + (R - 0.07) * t, yy = -0.32 + (y + 0.05 + 0.32) * t - Math.sin(t * PI) * 0.05; oct(c * rr, Y + yy, s * rr, 0.011, 1.3); } } };
  tier(8, -0.8, 0.44, 0, 0.1); tier(4, -0.56, 0.26, PI / 8, 0.06);
  for (let i = 0; i < 8; i++) { const a = (i / 8) * TAU + PI / 8; oct(Math.cos(a) * 0.09, Y - 0.86, Math.sin(a) * 0.09, 0.016, 2.2); oct(Math.cos(a) * 0.05, Y - 1.0, Math.sin(a) * 0.05, 0.012, 2); }
  oct(0, Y - 1.11, 0, 0.045, 1.6); k.glass(mergeGeo(cr), null, k.c2, 0.62); k.glow(mergeGeo(fl), WARM, 3.4, {});
  k.glow(new THREE.SphereGeometry(0.3, 12, 8), HALO, 0.35, { at: [0, Y - 0.7, 0], opacity: 0.12 });
});

// =====================================================================================================================
// TAPETES
// =====================================================================================================================
function clothTex(g, W, H, seed = 7, a = 0.05) { g.fillStyle = `rgba(0,0,0,${a})`; for (let y = 0; y < H; y += 3) g.fillRect(0, y, W, 1); g.fillStyle = `rgba(255,255,255,${a})`; for (let x = 0; x < W; x += 3) g.fillRect(x, 0, 1, H); grain(g, W, H, seed, 300, a); }
// rectangular rug: a thin body with a painted top. paint(g, W, H, A, B): A, B = the two colours as css
function rugArt(k, w, d, t, paint, o = {}) {
  k.box(w, t, d, 0, t / 2, 0, o.edge ?? tone(k.c1, 0.8));
  return k.art(`${k.def.id}:${k.c1}:${k.c2}`, w, d, 0, t + 0.0012, 0, (g, W, H) => { paint(g, W, H, css(k.c1), css(k.c2)); clothTex(g, W, H); }, { rot: RX(-HP), res: o.res ?? 256 });
}
// rug of any outline: pts = [[x, z], ...] in metres; paint(g, W, H, X, Z, A, B) decorates the top (X, Z convert metres to pixels)
function shapeRug(k, w, d, pts, t, edge, paint, res = 384) {
  if (t > 0.004) slab(k, pts.map(([x, z]) => [x * 0.992, z * 0.992]), t, 0, edge);
  const m = k.art(`${k.def.id}:${k.c1}:${k.c2}`, w, d, 0, t + 0.0012, 0, (g, W, H) => { const X = (x) => (x / w + 0.5) * W, Z = (z) => (z / d + 0.5) * H; g.clearRect(0, 0, W, H); g.save(); g.beginPath(); pts.forEach(([x, z], i) => (i ? g.lineTo(X(x), Z(z)) : g.moveTo(X(x), Z(z)))); g.closePath(); g.clip(); paint(g, W, H, X, Z, css(k.c1), css(k.c2)); clothTex(g, W, H); g.restore(); }, { rot: RX(-HP), res });
  m.material.alphaTest = 0.5; return m;
}
// fringe on the two ends (z = ±d/2, or x = ±w/2 with alongX); the rug body is w x d, the fringe sticks out by len
function fringe(k, w, d, c, alongX = false, len = 0.05) {
  const L = alongX ? d : w, n = Math.round(L / 0.032);
  for (let i = 0; i < n; i++) { const p = -L / 2 + (i + 0.5) * (L / n), j = (((i * 7) % 5) - 2) * 0.06; for (const s of [-1, 1]) if (alongX) k.box(len, 0.004, 0.008, s * (w / 2 + len / 2 - 0.006), 0.003, p, c, RY(j)); else k.box(0.008, 0.004, len, p, 0.003, s * (d / 2 + len / 2 - 0.006), c, RY(j)); }
}
const polar = (n, f) => { const p = []; for (let i = 0; i < n; i++) { const a = (i / n) * TAU, r = f(a); p.push([Math.cos(a) * r, Math.sin(a) * r]); } return p; };

furn({ id: 'tapete_simples', name: 'Tapete simples', cat: 'Tapetes', kind: 'rug', price: 50, lvl: 1, w: 1.2, d: 0.8, h: 0.015, cols: [0xd9c3a0, 0xb5673f], colN: ['Fundo', 'Barra'], info: 'Um tapetinho honesto para começar a casa.' }, (k) => {
  rugArt(k, 1.2, 0.8, 0.014, (g, W, H, A, B) => { g.fillStyle = B; g.fillRect(0, 0, W, H); g.fillStyle = A; g.fillRect(W * 0.06, W * 0.06, W * 0.88, H - W * 0.12); g.strokeStyle = B; g.lineWidth = 2; g.strokeRect(W * 0.09, W * 0.09, W * 0.82, H - W * 0.18); });
});

furn({ id: 'capacho', name: 'Capacho', cat: 'Tapetes', kind: 'rug', price: 30, lvl: 1, w: 0.7, d: 0.45, h: 0.022, cols: [0xb08a52, 0x3f6a3c], colN: ['Fibra', 'Desenho'], info: 'Limpe os pés: tem terra de jardim neles!' }, (k) => {
  k.box(0.7, 0.008, 0.45, 0, 0.004, 0, 0x2c2c30);
  k.box(0.67, 0.012, 0.42, 0, 0.014, 0, tone(k.c1, 0.8)); k.art(`capacho:${k.c1}:${k.c2}`, 0.67, 0.42, 0, 0.0212, 0, (g, W, H) => { const A = css(k.c1), B = css(k.c2); g.fillStyle = A; g.fillRect(0, 0, W, H); const r = rnd(3); for (let i = 0; i < 1400; i++) { g.fillStyle = r() < 0.5 ? 'rgba(60,40,10,0.16)' : 'rgba(255,240,200,0.14)'; g.fillRect(r() * W, r() * H, 1.5, 3 + r() * 3); }
    g.strokeStyle = B; g.lineWidth = H * 0.035; g.strokeRect(H * 0.08, H * 0.08, W - H * 0.16, H - H * 0.16);
    for (const [x, s] of [[0.5, 1], [0.24, 0.6], [0.76, 0.6]]) { curve(g, x * W, H * 0.52, x * W + H * 0.05, H * 0.7, x * W, H * 0.84, B, H * 0.03 * s); leaf(g, x * W, H * 0.72, H * 0.14 * s, H * 0.05 * s, -0.5, B); leaf(g, x * W, H * 0.76, H * 0.14 * s, H * 0.05 * s, PI + 0.5, B); flower(g, x * W, H * (0.52 - 0.14 * s), H * 0.17 * s, 7, B, A); } }, { rot: RX(-HP) });
});

furn({ id: 'tapete_redondo_trancado', name: 'Tapete redondo trançado', cat: 'Tapetes', kind: 'rug', price: 140, lvl: 2, w: 1.4, d: 1.4, h: 0.024, cols: [0xd8b98a, 0x7fa08a], colN: ['Trança clara', 'Trança de cor'], info: 'Trançado de retalhos, voltinha por voltinha.' }, (k) => {
  const pal = [k.c1, tone(k.c1, 0.86), k.c2, tone(k.c1, 1.12), tone(k.c2, 0.8), k.c1, tone(k.c2, 1.15), tone(k.c1, 0.86), k.c2, k.c1];
  k.cyl(0.67, 0.67, 0.008, 0, 0.004, 0, tone(k.c1, 0.7), 36);
  for (let i = 0; i < 10; i++) { const R = 0.665 - i * 0.07; k.add(new THREE.TorusGeometry(R, 0.038, 5, Math.max(10, Math.round(R * 52))), mul(T(0, 0.011, 0), S(1, 0.32, 1), RX(HP)), pal[i]); }
  k.sph(0.04, 0, 0.011, 0, k.c2, 1, 0.32, 1, 8);
});

furn({ id: 'tapete_listrado', name: 'Tapete listrado', cat: 'Tapetes', kind: 'rug', price: 180, lvl: 3, w: 1.7, d: 1.1, h: 0.015, cols: [0xe8dcc4, 0x4a7a9a], colN: ['Fundo', 'Listras'], info: 'Listras de praia para alegrar a sala.' }, (k) => {
  rugArt(k, 1.6, 1.1, 0.014, (g, W, H, A, B) => { g.fillStyle = A; g.fillRect(0, 0, W, H); const pat = [0.05, 0.02, 0.012, 0.02, 0.05]; let x = W * 0.045; for (let n = 0; n < 6; n++) { pat.forEach((p, i) => { if (i % 2 === 0) { g.fillStyle = i === 2 ? '#e0a23c' : B; g.fillRect(x, 0, p * W, H); } x += p * W; }); x += W * 0.012; } });
  fringe(k, 1.6, 1.1, CREAM, true);
});

furn({ id: 'tapete_sisal', name: 'Tapete de sisal', cat: 'Tapetes', kind: 'rug', price: 240, lvl: 3, w: 1.8, d: 1.2, h: 0.016, cols: [0xcfb07a, 0x6a5a48], colN: ['Sisal', 'Barra de tecido'], info: 'Fibra natural, combina com tudo e com todas as plantas.' }, (k) => {
  rugArt(k, 1.8, 1.2, 0.015, (g, W, H, A, B) => { g.fillStyle = A; g.fillRect(0, 0, W, H); const s = W / 64; for (let y = 0; y < H / s; y++) for (let x = 0; x < W / s; x++) { g.fillStyle = (x + y) % 2 ? 'rgba(90,60,20,0.2)' : 'rgba(255,245,210,0.2)'; if ((x + y) % 2) g.fillRect(x * s, y * s + s * 0.2, s, s * 0.6); else g.fillRect(x * s + s * 0.2, y * s, s * 0.6, s); }
    g.strokeStyle = B; g.lineWidth = W * 0.07; g.strokeRect(0, 0, W, H); g.strokeStyle = 'rgba(255,255,255,0.35)'; g.lineWidth = 1; g.setLineDash([4, 4]); g.strokeRect(W * 0.027, W * 0.027, W - W * 0.054, H - W * 0.054); g.setLineDash([]); }, { res: 384 });
});

furn({ id: 'tapete_nuvem', name: 'Tapete nuvem', cat: 'Tapetes', kind: 'rug', price: 300, lvl: 4, w: 1.3, d: 0.86, h: 0.02, cols: [0xfbf7f0, 0xf4a9b8], colN: ['Nuvem', 'Bochechas e borda'], info: 'Uma nuvenzinha dorminhoca para o quarto.' }, (k) => {
  const pts = polar(72, (a) => { const c = Math.cos(a), s = Math.sin(a), e = 1 / Math.sqrt((c / 0.6) ** 2 + (s / 0.38) ** 2); return e * (0.9 + 0.1 * Math.cos(a * 7 + 0.4)) * (s > 0 ? 1 - 0.1 * s : 1); });
  shapeRug(k, 1.3, 0.86, pts, 0.018, tone(k.c2, 0.95), (g, W, H, X, Z, A, B) => { g.fillStyle = B; g.fillRect(0, 0, W, H); g.fillStyle = A; g.beginPath(); pts.forEach(([x, z], i) => (i ? g.lineTo(X(x * 0.93), Z(z * 0.9)) : g.moveTo(X(x * 0.93), Z(z * 0.9)))); g.fill();
    g.strokeStyle = '#6a5a5a'; g.lineWidth = W * 0.012; g.lineCap = 'round'; for (const s of [-1, 1]) { g.beginPath(); g.arc(X(s * 0.17), Z(0.0), W * 0.045, 0.15 * PI, 0.85 * PI); g.stroke(); ell(g, X(s * 0.3), Z(0.09), W * 0.045, W * 0.03, B); } g.beginPath(); g.arc(X(0), Z(0.07), W * 0.03, 0.1 * PI, 0.9 * PI); g.stroke(); });
});

furn({ id: 'tapete_flor', name: 'Tapete flor', cat: 'Tapetes', kind: 'rug', price: 380, lvl: 4, w: 1.34, d: 1.34, h: 0.02, cols: [0xf2a0b0, 0xf6d36a], colN: ['Pétalas', 'Miolo'], info: 'Uma margarida gigante no meio da sala.' }, (k) => {
  const f = (a) => 0.66 * (0.52 + 0.48 * Math.pow(Math.abs(Math.cos(a * 3.5)), 0.55)), pts = polar(140, f);
  shapeRug(k, 1.34, 1.34, pts, 0.018, tone(k.c1, 0.8), (g, W, H, X, Z, A, B) => { g.fillStyle = A; g.fillRect(0, 0, W, H);
    for (let i = 0; i < 7; i++) { const a = (i / 7) * TAU; g.save(); g.translate(W / 2, H / 2); g.rotate(a); ell(g, W * 0.3, 0, W * 0.14, W * 0.07, css(tone(k.c1, 1.25))); g.strokeStyle = css(tone(k.c1, 0.82)); g.lineWidth = W * 0.008; g.beginPath(); g.moveTo(W * 0.14, 0); g.lineTo(W * 0.42, 0); g.stroke(); g.rotate(TAU / 14); g.strokeStyle = css(tone(k.c1, 0.8)); g.lineWidth = W * 0.012; g.beginPath(); g.moveTo(W * 0.1, 0); g.lineTo(W * 0.3, 0); g.stroke(); g.restore(); }
    circ(g, W / 2, H / 2, W * 0.15, css(tone(k.c2, 0.85))); circ(g, W / 2, H / 2, W * 0.13, B); const r = rnd(9); for (let i = 0; i < 40; i++) { const a = r() * TAU, d = Math.sqrt(r()) * W * 0.11; circ(g, W / 2 + Math.cos(a) * d, H / 2 + Math.sin(a) * d, W * 0.008, css(tone(k.c2, 0.75))); } });
});

furn({ id: 'tapete_folha', name: 'Tapete folha', cat: 'Tapetes', kind: 'rug', price: 460, lvl: 5, w: 1.5, d: 1.0, h: 0.02, cols: [0x5f9a5a, 0x3a6e42], colN: ['Folha', 'Nervuras'], info: 'Uma folhona verde para pisar descalça.' }, (k) => {
  // monstera leaf: heart outline with deep splits, tip towards +x
  const pts = polar(180, (a) => { const c = Math.cos(a), s = Math.sin(a), base = 0.46 + 0.26 * c + 0.06 * Math.cos(2 * a); const heart = Math.abs(a - PI) < 0.5 ? 1 - 0.32 * (1 - Math.abs(a - PI) / 0.5) : 1; const ph = (Math.abs(s) > 0.2 && c > -0.75) ? Math.pow(Math.abs(Math.sin(a * 5.5)), 0.5) : 1; return base * heart * (0.72 + 0.28 * ph) * (1 + 0.0 * s); }).map(([x, z]) => [x, z]); { let x0 = 9, x1 = -9, z1 = 0; for (const [x, z] of pts) { x0 = Math.min(x0, x); x1 = Math.max(x1, x); z1 = Math.max(z1, Math.abs(z)); } for (const p of pts) { p[0] = ((p[0] - (x0 + x1) / 2) / (x1 - x0)) * 1.46; p[1] = (p[1] / z1) * 0.48; } }
  shapeRug(k, 1.5, 1.0, pts, 0.018, tone(k.c1, 0.75), (g, W, H, X, Z, A, B) => { g.fillStyle = grad(g, 0, 0, W, 0, [[0, css(tone(k.c1, 0.9))], [1, css(tone(k.c1, 1.15))]]); g.fillRect(0, 0, W, H);
    line(g, [[X(-0.62), Z(0)], [X(0.68), Z(0)]], B, W * 0.014); for (let i = 0; i < 6; i++) { const x0 = -0.5 + i * 0.17; for (const s of [-1, 1]) curve(g, X(x0), Z(0), X(x0 + 0.1), Z(s * 0.2), X(x0 + 0.3 - i * 0.02), Z(s * (0.44 - i * 0.045)), B, W * 0.008); } }, 512);
});

furn({ id: 'tapete_croche', name: 'Tapete de crochê', cat: 'Tapetes', kind: 'rug', price: 350, lvl: 5, w: 1.3, d: 1.3, h: 0.012, cols: [0xfaf4e6, 0xe8c8a0], colN: ['Linha', 'Miolo'], info: 'Feito ponto a ponto nas tardes de domingo.' }, (k) => {
  const pts = polar(96, (a) => 0.62 + 0.028 * Math.abs(Math.cos(a * 12)));
  shapeRug(k, 1.3, 1.3, pts, 0.004, k.c1, (g, W, H, X, Z, A, B) => { const cx = W / 2, cy = H / 2; g.fillStyle = A; g.fillRect(0, 0, W, H);
    const hole = (x, y, r) => { g.save(); g.globalCompositeOperation = 'destination-out'; circ(g, x, y, r, '#000'); g.restore(); };
    for (const [R, n, hr] of [[0.47, 48, 0.011], [0.43, 24, 0.02], [0.375, 36, 0.013], [0.31, 16, 0.026], [0.25, 24, 0.014], [0.2, 12, 0.02]]) for (let i = 0; i < n; i++) { const a = (i / n) * TAU + (R * 10 % 1); hole(cx + Math.cos(a) * R * W, cy + Math.sin(a) * R * W, hr * W); }
    g.strokeStyle = css(tone(k.c1, 0.86)); g.lineWidth = W * 0.006; for (const R of [0.49, 0.4, 0.345, 0.28, 0.225, 0.16]) { g.beginPath(); g.arc(cx, cy, R * W, 0, TAU); g.stroke(); }
    circ(g, cx, cy, W * 0.15, B); flower(g, cx, cy, W * 0.14, 8, A, B); for (let i = 0; i < 8; i++) hole(cx + Math.cos(i * 0.785 + 0.39) * W * 0.125, cy + Math.sin(i * 0.785 + 0.39) * W * 0.125, W * 0.012); }, 512);
});

furn({ id: 'tapete_patchwork', name: 'Tapete de retalhos', cat: 'Tapetes', kind: 'rug', price: 420, lvl: 5, w: 1.5, d: 1.5, h: 0.016, cols: [0xd9705a, 0x5a8fa8], colN: ['Retalhos quentes', 'Retalhos frios'], info: 'Cada retalho guarda uma história da família.' }, (k) => {
  rugArt(k, 1.5, 1.5, 0.015, (g, W, H) => { const pal = [k.c1, k.c2, tone(k.c1, 1.3), tone(k.c2, 1.3), 0xe8c468, 0x8fae6a, 0xf1e4cc, tone(k.c1, 0.75), tone(k.c2, 0.75)].map(css), r = rnd(11), n = 5, s = W / n;
    for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) { const c = pal[(x * 3 + y * 5 + ((x * y) % 3)) % pal.length], c2 = pal[(x * 2 + y * 7 + 4) % pal.length], t = (x + y * 2) % 5; g.save(); g.beginPath(); g.rect(x * s, y * s, s, s); g.clip(); g.fillStyle = c; g.fillRect(x * s, y * s, s, s); g.fillStyle = c2; g.strokeStyle = c2;
      if (t === 0) for (let i = 0; i < 16; i++) circ(g, x * s + ((i % 4) + 0.5) * s / 4, y * s + (Math.floor(i / 4) + 0.5) * s / 4, s * 0.05, c2);
      else if (t === 1) for (let i = 0; i < 5; i++) g.fillRect(x * s + i * s / 5, y * s, s / 10, s);
      else if (t === 2) flower(g, x * s + s / 2, y * s + s / 2, s * 0.32, 6, c2, '#f6e6a0');
      else if (t === 3) for (let i = 0; i < 9; i++) if (i % 2 === 0) g.fillRect(x * s + (i % 3) * s / 3, y * s + Math.floor(i / 3) * s / 3, s / 3, s / 3);
      else for (let i = -1; i < 6; i++) { g.lineWidth = s * 0.06; g.beginPath(); g.moveTo(x * s + i * s / 4, y * s); g.lineTo(x * s + i * s / 4 + s / 2, y * s + s); g.stroke(); }
      g.restore(); }
    g.strokeStyle = 'rgba(255,250,235,0.9)'; g.lineWidth = 1.5; g.setLineDash([5, 4]); for (let i = 0; i <= n; i++) { const p = Math.min(W - 3, Math.max(3, i * s)); g.beginPath(); g.moveTo(p + 3, 0); g.lineTo(p + 3, H); g.moveTo(p - 3, 0); g.lineTo(p - 3, H); g.moveTo(0, p + 3); g.lineTo(W, p + 3); g.moveTo(0, p - 3); g.lineTo(W, p - 3); g.stroke(); } g.setLineDash([]); }, { res: 512, edge: tone(k.c2, 0.7) });
});

furn({ id: 'passadeira', name: 'Passadeira', cat: 'Tapetes', kind: 'rug', price: 520, lvl: 6, w: 0.7, d: 2.5, h: 0.015, cols: [0x9a3a34, 0xe8d8b0], colN: ['Fundo', 'Desenhos'], info: 'Comprida, para o corredor não ficar pelado.' }, (k) => {
  rugArt(k, 0.7, 2.4, 0.014, (g, W, H, A, B) => { g.fillStyle = A; g.fillRect(0, 0, W, H); g.fillStyle = B; g.fillRect(W * 0.06, 0, W * 0.035, H); g.fillRect(W * 0.905, 0, W * 0.035, H); g.fillStyle = css(tone(k.c1, 0.65)); g.fillRect(W * 0.12, 0, W * 0.02, H); g.fillRect(W * 0.86, 0, W * 0.02, H);
    const n = 6, s = H / n; for (let i = 0; i < n; i++) { const cy = (i + 0.5) * s, cx = W / 2; poly(g, [[cx, cy - s * 0.42], [cx + W * 0.3, cy], [cx, cy + s * 0.42], [cx - W * 0.3, cy]], B); poly(g, [[cx, cy - s * 0.32], [cx + W * 0.22, cy], [cx, cy + s * 0.32], [cx - W * 0.22, cy]], css(tone(k.c1, 0.7))); poly(g, [[cx, cy - s * 0.2], [cx + W * 0.14, cy], [cx, cy + s * 0.2], [cx - W * 0.14, cy]], '#d9a94a'); flower(g, cx, cy, W * 0.08, 8, B, A);
      for (const sx of [-1, 1]) { poly(g, [[cx + sx * W * 0.34, cy + s * 0.5 - W * 0.08], [cx + sx * W * 0.26, cy + s * 0.5], [cx + sx * W * 0.34, cy + s * 0.5 + W * 0.08]], B); } } }, { res: 512 });
  fringe(k, 0.7, 2.4, CREAM, false);
});

furn({ id: 'pelego', name: 'Pelego felpudo', cat: 'Tapetes', kind: 'rug', price: 600, lvl: 6, w: 1.2, d: 0.8, h: 0.065, cols: [0xf6f0e2, 0xd9cdb8], colN: ['Pelo', 'Sombra do pelo'], info: 'Macio de afundar os dedos dos pés.' }, (k) => {
  const inside = (x, z) => (x / 0.46) ** 2 + (z / 0.3) ** 2 < 1 || [[-0.42, -0.25], [-0.42, 0.25], [0.42, -0.25], [0.42, 0.25]].some(([a, b]) => (x - a) ** 2 + (z - b) ** 2 < 0.13 ** 2) || ((x + 0.5) / 0.1) ** 2 + (z / 0.12) ** 2 < 1;
  const pts = polar(64, (a) => { let r = 0.2; while (r < 0.75 && inside(Math.cos(a) * (r + 0.01), Math.sin(a) * (r + 0.01))) r += 0.01; return r; });
  slab(k, pts.map(([x, z]) => [x * 0.93, z * 0.9]), 0.012, 0, k.c2); const r = rnd(5);
  for (let gx = -7; gx <= 7; gx++) for (let gz = -5; gz <= 5; gz++) { const x = gx * 0.078 + (r() - 0.5) * 0.05 + (gz % 2) * 0.035, z = gz * 0.07 + (r() - 0.5) * 0.04; if (!inside(x * 1.08, z * 1.1)) continue; const s = 0.06 + r() * 0.03;
    k.add(new THREE.SphereGeometry(s, 6, 4), mul(T(x * 0.9, s * 0.32 + 0.004, z * 0.88), RY(r() * 3), S(1.1, 0.32, 0.9)), r() < 0.3 ? k.c2 : tone(k.c1, 0.95 + r() * 0.1)); }
});

furn({ id: 'tapete_geometrico', name: 'Tapete geométrico moderno', cat: 'Tapetes', kind: 'rug', price: 900, lvl: 8, w: 2.0, d: 1.4, h: 0.016, cols: [0xe9e2d4, 0x2f5d62], colN: ['Fundo', 'Formas'], info: 'Arcos e meias-luas de galeria de arte.' }, (k) => {
  rugArt(k, 2.0, 1.4, 0.015, (g, W, H, A, B) => { g.fillStyle = A; g.fillRect(0, 0, W, H); const mu = '#e0a23c', te = '#d9765a', u = H;
    g.fillStyle = B; g.beginPath(); g.arc(W * 0.26, H, u * 0.62, PI, TAU); g.fill(); g.fillStyle = A; g.beginPath(); g.arc(W * 0.26, H, u * 0.44, PI, TAU); g.fill(); g.fillStyle = te; g.beginPath(); g.arc(W * 0.26, H, u * 0.28, PI, TAU); g.fill();
    g.fillStyle = mu; g.beginPath(); g.arc(W * 0.7, 0, u * 0.42, 0, PI); g.fill(); circ(g, W * 0.86, H * 0.68, u * 0.17, B); circ(g, W * 0.58, H * 0.7, u * 0.07, te);
    g.strokeStyle = B; g.lineWidth = u * 0.012; for (let i = 0; i < 4; i++) { g.beginPath(); g.arc(W * 0.7, 0, u * (0.48 + i * 0.045), 0.05, PI - 0.05); g.stroke(); } poly(g, [[W * 0.03, H * 0.06], [W * 0.2, H * 0.06], [W * 0.03, H * 0.36]], te);
    g.strokeStyle = css(tone(k.c1, 0.8)); g.lineWidth = u * 0.02; g.strokeRect(u * 0.03, u * 0.03, W - u * 0.06, H - u * 0.06); }, { res: 512 });
});

// classic oriental carpet: A = field, B = border
function persa(g, W, H, A, B, k) {
  const cr = '#f0e2c0', gd = '#d9a94a', dk = css(tone(k.c1, 0.6)), u = H / 44;
  g.fillStyle = B; g.fillRect(0, 0, W, H); g.fillStyle = cr; g.fillRect(u * 1.2, u * 1.2, W - u * 2.4, H - u * 2.4); g.fillStyle = B; g.fillRect(u * 1.7, u * 1.7, W - u * 3.4, H - u * 3.4);
  const bm = u * 4.1, nx = Math.round((W - u * 8) / (u * 3.4)), ny = Math.round((H - u * 8) / (u * 3.4));
  for (let i = 0; i < nx; i++) { const x = u * 4 + (i + 0.5) * ((W - u * 8) / nx); for (const y of [bm, H - bm]) { if (i % 2) flower(g, x, y, u * 1.4, 6, cr, gd); else { poly(g, [[x, y - u * 1.5], [x + u * 1.1, y], [x, y + u * 1.5], [x - u * 1.1, y]], gd); circ(g, x, y, u * 0.45, A); } } }
  for (let i = 0; i < ny; i++) { const y = u * 4 + (i + 0.5) * ((H - u * 8) / ny); for (const x of [bm, W - bm]) { if (i % 2) flower(g, x, y, u * 1.4, 6, cr, gd); else { poly(g, [[x, y - u * 1.1], [x + u * 1.5, y], [x, y + u * 1.1], [x - u * 1.5, y]], gd); circ(g, x, y, u * 0.45, A); } } }
  for (const [x, y] of [[bm, bm], [W - bm, bm], [bm, H - bm], [W - bm, H - bm]]) flower(g, x, y, u * 1.7, 8, A, cr);
  g.fillStyle = gd; g.fillRect(u * 6.4, u * 6.4, W - u * 12.8, H - u * 12.8); g.fillStyle = cr; g.fillRect(u * 6.9, u * 6.9, W - u * 13.8, H - u * 13.8); g.fillStyle = A; g.fillRect(u * 7.5, u * 7.5, W - u * 15, H - u * 15);
  g.save(); g.beginPath(); g.rect(u * 7.5, u * 7.5, W - u * 15, H - u * 15); g.clip();
  for (let y = 0; y < 14; y++) for (let x = 0; x < 24; x++) { const px = u * 9 + x * u * 3.2 + (y % 2) * u * 1.6, py = u * 9 + y * u * 2.6; poly(g, [[px, py - u * 0.6], [px + u * 0.45, py], [px, py + u * 0.6], [px - u * 0.45, py]], dk); }
  for (const [x, y] of [[u * 7.5, u * 7.5], [W - u * 7.5, u * 7.5], [u * 7.5, H - u * 7.5], [W - u * 7.5, H - u * 7.5]]) { circ(g, x, y, u * 8, cr); circ(g, x, y, u * 7.4, B); circ(g, x, y, u * 5, gd); circ(g, x, y, u * 4.4, A); flower(g, x + Math.sign(W / 2 - x) * u * 2, y + Math.sign(H / 2 - y) * u * 2, u * 1.6, 6, cr, gd); }
  const cx = W / 2, cy = H / 2, loz = (rx, ry, c) => { g.fillStyle = c; g.beginPath(); g.moveTo(cx - rx, cy); g.quadraticCurveTo(cx - rx * 0.45, cy - ry * 0.55, cx, cy - ry); g.quadraticCurveTo(cx + rx * 0.45, cy - ry * 0.55, cx + rx, cy); g.quadraticCurveTo(cx + rx * 0.45, cy + ry * 0.55, cx, cy + ry); g.quadraticCurveTo(cx - rx * 0.45, cy + ry * 0.55, cx - rx, cy); g.fill(); };
  loz(u * 17, u * 11.5, cr); loz(u * 16.2, u * 10.8, B); loz(u * 13, u * 8.4, gd); loz(u * 12.3, u * 7.8, cr); loz(u * 9.6, u * 6, A); loz(u * 6, u * 3.8, B);
  flower(g, cx, cy, u * 3, 10, cr, gd); for (let i = 0; i < 8; i++) { const a = (i / 8) * TAU; flower(g, cx + Math.cos(a) * u * 10.6, cy + Math.sin(a) * u * 6.6, u * 1.1, 6, A, gd); }
  for (const s of [-1, 1]) { poly(g, [[cx + s * u * 17, cy], [cx + s * u * 20, cy - u * 1.6], [cx + s * u * 23, cy], [cx + s * u * 20, cy + u * 1.6]], gd); circ(g, cx + s * u * 20, cy, u * 0.8, B); }
  g.restore();
}
furn({ id: 'tapete_persa', name: 'Tapete persa', cat: 'Tapetes', kind: 'rug', price: 2800, lvl: 11, w: 2.1, d: 1.4, h: 0.02, cols: [0x9a2f2c, 0x27324e], colN: ['Campo', 'Barra'], info: 'Arabescos e medalhão: herança de uma tia viajada.' }, (k) => {
  rugArt(k, 2.0, 1.4, 0.018, (g, W, H, A, B) => persa(g, W, H, A, B, k), { res: 640, edge: tone(k.c2, 0.8) }); fringe(k, 2.0, 1.4, 0xefe4c8, true);
});

furn({ id: 'tapete_luxo', name: 'Tapete de luxo floral', cat: 'Tapetes', kind: 'rug', price: 9000, lvl: 16, w: 2.4, d: 3.3, h: 0.03, cols: [0xf3ead6, 0x2f5a5c], colN: ['Campo', 'Barra'], info: 'Guirlandas de rosas tecidas à mão: digno de palacete.' }, (k) => {
  k.rbox(2.4, 0.026, 3.2, 0, 0.013, 0, tone(k.c2, 0.75), 0.012);
  k.art(`luxo:${k.c1}:${k.c2}`, 2.36, 3.16, 0, 0.0272, 0, (g, W, H) => { const A = css(k.c1), B = css(k.c2), gd = '#d7b05a', u = W / 60, cx = W / 2, cy = H / 2, r = rnd(17);
    g.fillStyle = B; g.fillRect(0, 0, W, H); g.strokeStyle = gd; g.lineWidth = u * 0.4; g.strokeRect(u, u, W - u * 2, H - u * 2);
    const rose = (x, y, s, c) => { circ(g, x, y, s, c); circ(g, x - s * 0.15, y - s * 0.1, s * 0.62, 'rgba(255,255,255,0.28)'); g.strokeStyle = 'rgba(120,30,50,0.45)'; g.lineWidth = s * 0.14; g.beginPath(); g.arc(x, y, s * 0.5, 0.5, 4.5); g.stroke(); g.beginPath(); g.arc(x + s * 0.1, y, s * 0.22, 2, 6.5); g.stroke(); };
    const spray = (x, y, s, a) => { g.save(); g.translate(x, y); g.rotate(a); for (const [lx, la] of [[-1.7, PI + 0.5], [-1.5, PI - 0.6], [1.7, -0.5], [1.5, 0.6], [0, -HP], [0, HP]]) leaf(g, lx * s * 0.5, 0, s * 1.5, s * 0.5, la, '#6a9a5a', '#4a7a44'); rose(-s * 1.0, 0, s * 0.75, '#e8909c'); rose(s * 1.0, s * 0.1, s * 0.7, '#f1c9a0'); rose(0, -s * 0.1, s, '#d9607a'); g.restore(); };
    // border: garland of roses and gold scrolls
    const bw = u * 6; for (let i = 0; i < 9; i++) { const y = bw + (i + 0.5) * ((H - bw * 2) / 9); for (const x of [bw * 0.55, W - bw * 0.55]) spray(x, y, u * 1.1, HP); if (i < 8) for (const x of [bw * 0.55, W - bw * 0.55]) { const yy = bw + (i + 1) * ((H - bw * 2) / 9); g.strokeStyle = gd; g.lineWidth = u * 0.35; g.beginPath(); g.arc(x, yy, u * 1.1, 0, TAU); g.stroke(); circ(g, x, yy, u * 0.45, gd); } }
    for (let i = 0; i < 6; i++) { const x = bw + (i + 0.5) * ((W - bw * 2) / 6); for (const y of [bw * 0.55, H - bw * 0.55]) spray(x, y, u * 1.1, 0); }
    for (const [x, y] of [[bw * 0.6, bw * 0.6], [W - bw * 0.6, bw * 0.6], [bw * 0.6, H - bw * 0.6], [W - bw * 0.6, H - bw * 0.6]]) { circ(g, x, y, u * 2.3, gd); circ(g, x, y, u * 1.9, B); flower(g, x, y, u * 1.6, 8, '#f1c9a0', gd); }
    g.fillStyle = gd; g.fillRect(bw, bw, W - bw * 2, H - bw * 2); g.fillStyle = A; g.fillRect(bw + u * 0.6, bw + u * 0.6, W - bw * 2 - u * 1.2, H - bw * 2 - u * 1.2);
    g.strokeStyle = css(tone(k.c1, 0.86)); g.lineWidth = u * 0.3; g.strokeRect(bw + u * 2, bw + u * 2, W - bw * 2 - u * 4, H - bw * 2 - u * 4);
    // damask ground
    for (let y = 0; y < 16; y++) for (let x = 0; x < 9; x++) { const px = bw + u * 5 + x * u * 5 + (y % 2) * u * 2.5, py = bw + u * 4 + y * u * 4.2; if (px > W - bw - u * 3) continue; flower(g, px, py, u * 0.9, 4, css(tone(k.c1, 0.9)), css(tone(k.c1, 0.84))); }
    // corner bouquets and scrolls
    for (const [sx, sy] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) { const x = cx + sx * (W / 2 - bw - u * 7), y = cy + sy * (H / 2 - bw - u * 7); g.strokeStyle = gd; g.lineWidth = u * 0.5; g.lineCap = 'round'; g.beginPath(); g.arc(x - sx * u * 2, y - sy * u * 2, u * 6, sx > 0 ? (sy > 0 ? 0 : -HP) + 0.1 : (sy > 0 ? HP : PI) + 0.1, (sx > 0 ? (sy > 0 ? 0 : -HP) : (sy > 0 ? HP : PI)) + HP - 0.1); g.stroke(); spray(x, y, u * 1.7, Math.atan2(sy, sx) + HP); }
    // central wreath
    g.strokeStyle = '#5c8a50'; g.lineWidth = u * 0.8; g.beginPath(); g.ellipse(cx, cy, u * 13, u * 17, 0, 0, TAU); g.stroke();
    for (let i = 0; i < 28; i++) { const a = (i / 28) * TAU, x = cx + Math.cos(a) * u * 13, y = cy + Math.sin(a) * u * 17; leaf(g, x, y, u * 3, u * 1, a + HP + 0.6, '#6a9a5a', '#4a7a44'); leaf(g, x, y, u * 3, u * 1, a + HP - 0.6 + PI, '#7aaa64', '#4a7a44'); }
    for (let i = 0; i < 14; i++) { const a = (i / 14) * TAU + 0.2, x = cx + Math.cos(a) * u * 13, y = cy + Math.sin(a) * u * 17; rose(x, y, u * (1.5 + (i % 3) * 0.35), ['#d9607a', '#e8909c', '#f1c9a0', '#f6e2c0'][i % 4]); if (i % 2) for (let j = 0; j < 3; j++) circ(g, x + (r() - 0.5) * u * 4, y + (r() - 0.5) * u * 4, u * 0.45, '#8fb4d9'); }
    g.fillStyle = css(tone(k.c1, 1.2)); g.beginPath(); g.ellipse(cx, cy, u * 9.5, u * 13.5, 0, 0, TAU); g.fill(); g.strokeStyle = gd; g.lineWidth = u * 0.35; g.beginPath(); g.ellipse(cx, cy, u * 9.5, u * 13.5, 0, 0, TAU); g.stroke();
    spray(cx, cy - u * 5, u * 2.1, 0.2); spray(cx, cy + u * 5, u * 2.1, PI + 0.2); spray(cx - u * 3.4, cy, u * 1.7, HP + 0.3); spray(cx + u * 3.4, cy, u * 1.7, -HP + 0.3); rose(cx, cy, u * 2.6, '#c94a68'); for (let i = 0; i < 10; i++) { const a = i * 0.63; circ(g, cx + Math.cos(a) * u * 7.4, cy + Math.sin(a) * u * 10.6, u * 0.5, '#8fb4d9'); }
    clothTex(g, W, H, 3, 0.035); }, { rot: RX(-HP), res: 1024 });
  fringe(k, 2.4, 3.2, 0xe9dcbc, false, 0.055);
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) { k.sph(0.022, sx * 1.17, 0.022, sz * 1.575, GOLD, 1, 0.8, 1, 8); k.cone(0.02, 0.06, sx * 1.17, 0.022, sz * (1.575 + 0.04), GOLD, 8, RX(sz * HP)); }
});

// =====================================================================================================================
// QUADROS E PAREDE: the paintings
// =====================================================================================================================
function rosa(g, x, y, s, c) { circ(g, x, y, s, c); circ(g, x - s * 0.15, y - s * 0.12, s * 0.62, 'rgba(255,255,255,0.28)'); g.strokeStyle = 'rgba(110,25,45,0.45)'; g.lineWidth = Math.max(1, s * 0.14); g.beginPath(); g.arc(x, y, s * 0.5, 0.5, 4.5); g.stroke(); g.beginPath(); g.arc(x + s * 0.1, y, s * 0.22, 2, 6.5); g.stroke(); }
function sunflower(g, x, y, r) { flower(g, x, y, r, 16, '#f2b21a', '#f2b21a'); flower(g, x, y, r * 0.86, 13, '#f8cf3a', '#f8cf3a', 0.2); circ(g, x, y, r * 0.42, '#6a4020'); circ(g, x, y, r * 0.3, '#4a2c16'); const rr = rnd(Math.round(x * 7 + y)); for (let i = 0; i < 9; i++) circ(g, x + (rr() - 0.5) * r * 0.5, y + (rr() - 0.5) * r * 0.5, r * 0.035, '#8a5a2a'); }
function tree(g, x, y, s, c = '#4f8a44', trunk = '#6a4a2c') { g.fillStyle = trunk; g.fillRect(x - s * 0.08, y - s * 0.5, s * 0.16, s * 0.5); circ(g, x, y - s * 0.8, s * 0.42, c); circ(g, x - s * 0.28, y - s * 0.62, s * 0.3, c); circ(g, x + s * 0.28, y - s * 0.62, s * 0.3, c); circ(g, x - s * 0.12, y - s * 0.92, s * 0.2, 'rgba(255,255,255,0.12)'); }
function pine(g, x, y, s, c = '#2f5d48') { for (let i = 0; i < 3; i++) poly(g, [[x - s * (0.34 - i * 0.07), y - s * i * 0.28], [x, y - s * (0.5 + i * 0.28)], [x + s * (0.34 - i * 0.07), y - s * i * 0.28]], c); }
function bird(g, x, y, s, c = '#3a3a44') { g.strokeStyle = c; g.lineWidth = Math.max(1, s * 0.18); g.lineCap = 'round'; g.beginPath(); g.moveTo(x - s, y - s * 0.3); g.quadraticCurveTo(x - s * 0.4, y - s * 0.7, x, y); g.quadraticCurveTo(x + s * 0.4, y - s * 0.7, x + s, y - s * 0.3); g.stroke(); }
function dabs(g, W, H, seed, n, pick, len = 0.03) { const r = rnd(seed); for (let i = 0; i < n; i++) { const x = r() * W, y = r() * H, c = pick(x / W, y / H, r); if (!c) continue; g.save(); g.translate(x, y); g.rotate((r() - 0.5) * 0.9 + (c.a || 0)); g.globalAlpha = 0.55 + r() * 0.4; ell(g, 0, 0, W * len * (0.6 + r()), W * len * 0.28, c.c || c); g.restore(); } g.globalAlpha = 1; }

const PAINT = {
  tulipas(g, W, H) {
    g.fillStyle = grad(g, 0, 0, 0, H, [[0, '#fbe9d2'], [1, '#f4cdac']]); g.fillRect(0, 0, W, H); g.fillStyle = '#c98f62'; g.fillRect(0, H * 0.82, W, H * 0.18); g.fillStyle = 'rgba(120,70,30,0.25)'; g.beginPath(); g.ellipse(W * 0.56, H * 0.84, W * 0.2, H * 0.02, 0, 0, TAU); g.fill();
    const heads = [[0.26, 0.3, '#e8506a', -0.3], [0.5, 0.16, '#f6c22e', 0], [0.74, 0.3, '#f08ab0', 0.3], [0.38, 0.4, '#fff6ee', -0.15], [0.63, 0.42, '#e8684a', 0.15]];
    for (const [x, y] of heads) curve(g, W * 0.5, H * 0.7, W * (0.5 + (x - 0.5) * 0.4), H * 0.52, W * x, H * y, '#4d8e3c', W * 0.02);
    for (const a of [-2.5, -0.65, -2.0, -1.1]) leaf(g, W * 0.5, H * 0.68, W * 0.3, W * 0.06, a, '#5a9a48', '#3d7a32');
    for (const [x, y, c, a] of heads) { g.save(); g.translate(W * x, H * y); g.rotate(a); ell(g, 0, -W * 0.04, W * 0.065, W * 0.085, c); ell(g, -W * 0.035, -W * 0.05, W * 0.03, W * 0.085, c, -0.18); ell(g, W * 0.035, -W * 0.05, W * 0.03, W * 0.085, c, 0.18); ell(g, -W * 0.015, -W * 0.05, W * 0.015, W * 0.06, 'rgba(255,255,255,0.3)'); g.restore(); }
    g.fillStyle = '#5a8fc0'; g.beginPath(); g.moveTo(W * 0.4, H * 0.62); g.quadraticCurveTo(W * 0.3, H * 0.76, W * 0.4, H * 0.86); g.lineTo(W * 0.6, H * 0.86); g.quadraticCurveTo(W * 0.7, H * 0.76, W * 0.6, H * 0.62); g.fill(); g.fillStyle = '#f4f7fa'; g.fillRect(W * 0.385, H * 0.6, W * 0.23, H * 0.035); for (let i = 0; i < 4; i++) circ(g, W * (0.4 + i * 0.066), H * 0.75, W * 0.018, '#f4f7fa'); ell(g, W * 0.4, H * 0.72, W * 0.012, H * 0.05, 'rgba(255,255,255,0.4)');
  },
  girassois(g, W, H) {
    g.fillStyle = grad(g, 0, 0, 0, H, [[0, '#6fb0b4'], [1, '#4f8f9c']]); g.fillRect(0, 0, W, H); dabs(g, W, H * 0.74, 4, 260, () => 'rgba(255,255,255,0.07)', 0.05); g.fillStyle = '#d9a44a'; g.fillRect(0, H * 0.76, W, H * 0.24); g.fillStyle = '#c4903a'; g.fillRect(0, H * 0.76, W, H * 0.015);
    const fl = [[0.24, 0.34, 0.15], [0.52, 0.2, 0.18], [0.78, 0.36, 0.15], [0.38, 0.5, 0.13], [0.66, 0.52, 0.14], [0.16, 0.56, 0.1]];
    for (const [x, y] of fl) curve(g, W * 0.5, H * 0.74, W * (0.5 + (x - 0.5) * 0.5), H * 0.6, W * x, H * y, '#3f7a34', W * 0.022);
    for (const a of [-2.7, -0.45, -2.2, -0.95]) leaf(g, W * 0.5, H * 0.7, W * 0.3, W * 0.09, a, '#4d8e3c', '#2f6a2c');
    for (const [x, y, r] of fl) sunflower(g, W * x, H * y, W * r);
    g.fillStyle = '#e8c468'; g.beginPath(); g.moveTo(W * 0.36, H * 0.66); g.quadraticCurveTo(W * 0.28, H * 0.82, W * 0.4, H * 0.9); g.lineTo(W * 0.6, H * 0.9); g.quadraticCurveTo(W * 0.72, H * 0.82, W * 0.64, H * 0.66); g.fill(); g.fillStyle = '#b5803a'; g.fillRect(W * 0.34, H * 0.76, W * 0.32, H * 0.012); ell(g, W * 0.4, H * 0.78, W * 0.015, H * 0.06, 'rgba(255,255,255,0.35)');
  },
  lavanda(g, W, H) {
    g.fillStyle = grad(g, 0, 0, 0, H * 0.46, [[0, '#8ab8e0'], [0.6, '#f6d9c0'], [1, '#fbe6b8']]); g.fillRect(0, 0, W, H * 0.46); circ(g, W * 0.76, H * 0.3, H * 0.07, '#fff4c8'); cloud(g, W * 0.25, H * 0.14, H * 0.045, 'rgba(255,255,255,0.8)');
    hills(g, W, H * 0.5, H * 0.36, H * 0.03, '#9aa6cc', 6, 1.4); hills(g, W, H * 0.5, H * 0.41, H * 0.02, '#7f9a84', 8, 2);
    g.fillStyle = '#6a8a4a'; g.fillRect(0, H * 0.44, W, H * 0.56); const vx = W * 0.62, vy = H * 0.44;
    for (let i = -14; i <= 14; i++) { const x0 = vx + i * W * 0.16, x1 = vx + (i + 0.62) * W * 0.16; g.fillStyle = grad(g, 0, vy, 0, H, [[0, '#a48ad8'], [1, '#6a48b0']]); g.beginPath(); g.moveTo(vx + i * W * 0.012, vy); g.lineTo(vx + (i + 0.62) * W * 0.012, vy); g.lineTo(x1 + (x1 - vx) * 1.2, H); g.lineTo(x0 + (x0 - vx) * 1.2, H); g.fill(); }
    dabs(g, W, H, 9, 900, (x, y, r) => (y > 0.47 ? ['#c4a8f0', '#8a62c8', '#b08ae0', '#5a3a98'][Math.floor(r() * 4)] : null), 0.012);
    g.fillStyle = '#f3e6cc'; g.fillRect(W * 0.2, H * 0.36, W * 0.1, H * 0.075); poly(g, [[W * 0.19, H * 0.365], [W * 0.25, H * 0.31], [W * 0.31, H * 0.365]], '#c2624a'); g.fillStyle = '#6a4a3a'; g.fillRect(W * 0.24, H * 0.39, W * 0.02, H * 0.045);
    for (const x of [0.34, 0.37, 0.14]) { ell(g, W * x, H * 0.37, W * 0.014, H * 0.075, '#3f6a4a'); } tree(g, W * 0.88, H * 0.45, H * 0.16, '#5a8a4a');
  },
  marinha(g, W, H) {
    g.fillStyle = grad(g, 0, 0, 0, H * 0.5, [[0, '#7fbfe8'], [1, '#e2f2f6']]); g.fillRect(0, 0, W, H * 0.5); cloud(g, W * 0.7, H * 0.15, H * 0.06); cloud(g, W * 0.3, H * 0.24, H * 0.04, 'rgba(255,255,255,0.85)');
    g.fillStyle = grad(g, 0, H * 0.5, 0, H, [[0, '#2f7ab0'], [0.6, '#3fa0b8'], [1, '#7fd0c8']]); g.fillRect(0, H * 0.5, W, H * 0.5);
    const r = rnd(12); for (let i = 0; i < 46; i++) { const y = H * (0.53 + r() * 0.36), x = r() * W, l = W * (0.02 + (y / H - 0.5) * 0.12); g.strokeStyle = `rgba(255,255,255,${0.35 + r() * 0.4})`; g.lineWidth = 1 + (y / H - 0.5) * 3; g.beginPath(); g.moveTo(x, y); g.quadraticCurveTo(x + l / 2, y - l * 0.18, x + l, y); g.stroke(); }
    poly(g, [[0, H * 0.5], [0, H * 0.36], [W * 0.1, H * 0.34], [W * 0.2, H * 0.4], [W * 0.27, H * 0.5]], '#7a8a6a'); poly(g, [[0, H * 0.5], [0, H * 0.42], [W * 0.14, H * 0.43], [W * 0.27, H * 0.5]], '#5f6e56');
    g.fillStyle = '#fbf7ee'; poly(g, [[W * 0.085, H * 0.34], [W * 0.095, H * 0.17], [W * 0.125, H * 0.17], [W * 0.135, H * 0.34]], '#fbf7ee'); g.fillStyle = '#d8483c'; g.fillRect(W * 0.091, H * 0.22, W * 0.038, H * 0.035); g.fillRect(W * 0.088, H * 0.29, W * 0.044, H * 0.03); g.fillRect(W * 0.09, H * 0.13, W * 0.04, H * 0.04); poly(g, [[W * 0.085, H * 0.13], [W * 0.11, H * 0.09], [W * 0.135, H * 0.13]], '#3a3a44'); circ(g, W * 0.11, H * 0.15, H * 0.012, '#fff2a8');
    const bx = W * 0.6, by = H * 0.62; poly(g, [[bx - W * 0.09, by], [bx + W * 0.1, by], [bx + W * 0.075, by + H * 0.05], [bx - W * 0.065, by + H * 0.05]], '#c2483c'); g.fillStyle = '#7a4a2a'; g.fillRect(bx - 2, by - H * 0.36, 4, H * 0.36); poly(g, [[bx + 4, by - H * 0.35], [bx + W * 0.1, by - H * 0.03], [bx + 4, by - H * 0.03]], '#fffdf6'); poly(g, [[bx - 4, by - H * 0.3], [bx - W * 0.075, by - H * 0.03], [bx - 4, by - H * 0.03]], '#f3ecd8'); poly(g, [[bx, by - H * 0.36], [bx + W * 0.03, by - H * 0.345], [bx, by - H * 0.33]], '#e8a23c');
    g.fillStyle = 'rgba(255,255,255,0.25)'; g.fillRect(bx - W * 0.06, by + H * 0.055, W * 0.13, H * 0.012); g.fillRect(bx - W * 0.04, by + H * 0.08, W * 0.09, H * 0.01);
    for (const [x, y, s] of [[0.36, 0.2, 0.014], [0.44, 0.27, 0.01], [0.84, 0.3, 0.012]]) bird(g, W * x, H * y, W * s);
    g.fillStyle = '#eed9a8'; g.beginPath(); g.moveTo(0, H); g.lineTo(0, H * 0.9); g.quadraticCurveTo(W * 0.4, H * 0.86, W, H * 0.97); g.lineTo(W, H); g.fill();
  },
  montanhas(g, W, H) {
    g.fillStyle = grad(g, 0, 0, 0, H * 0.6, [[0, '#6aa8dc'], [1, '#e6f0f4']]); g.fillRect(0, 0, W, H); cloud(g, W * 0.75, H * 0.1, W * 0.07, 'rgba(255,255,255,0.9)');
    const peak = (pts, c, snow) => { poly(g, pts, c); if (snow) for (const [x, y, s] of snow) poly(g, [[x - s, y + s * 1.25], [x - s * 0.45, y + s * 0.9], [x - s * 0.1, y + s * 1.35], [x + s * 0.35, y + s * 0.85], [x + s * 0.8, y + s * 1.2], [x, y]], '#ffffff'); };
    peak([[0, H * 0.56], [W * 0.18, H * 0.26], [W * 0.36, H * 0.44], [W * 0.62, H * 0.14], [W * 0.9, H * 0.42], [W, H * 0.36], [W, H * 0.6], [0, H * 0.6]], '#8a9cc0', [[W * 0.18, H * 0.26, W * 0.07], [W * 0.62, H * 0.14, W * 0.1]]);
    peak([[0, H * 0.6], [0, H * 0.46], [W * 0.26, H * 0.36], [W * 0.5, H * 0.52], [W * 0.78, H * 0.38], [W, H * 0.5], [W, H * 0.6]], '#6a80a8', [[W * 0.26, H * 0.36, W * 0.05], [W * 0.78, H * 0.38, W * 0.05]]);
    for (let i = 0; i < 26; i++) pine(g, W * (i / 25) + ((i * 37) % 11 - 5), H * (0.6 + ((i * 13) % 5) * 0.004), W * (0.09 + ((i * 7) % 4) * 0.012), i % 3 ? '#2f5d48' : '#3d6e54');
    g.fillStyle = grad(g, 0, H * 0.6, 0, H * 0.84, [[0, '#7fa8cc'], [1, '#bcd8e6']]); g.fillRect(0, H * 0.6, W, H * 0.24); g.save(); g.globalAlpha = 0.3; g.translate(0, H * 1.2); g.scale(1, -1); poly(g, [[0, H * 0.6], [0, H * 0.46], [W * 0.26, H * 0.36], [W * 0.5, H * 0.52], [W * 0.78, H * 0.38], [W, H * 0.5], [W, H * 0.6]], '#4a608a'); g.restore();
    for (let i = 0; i < 12; i++) { g.fillStyle = 'rgba(255,255,255,0.3)'; g.fillRect(W * ((i * 0.23) % 1), H * (0.64 + (i % 6) * 0.03), W * 0.12, 1.5); }
    g.fillStyle = '#6a9a4a'; g.beginPath(); g.moveTo(0, H); g.lineTo(0, H * 0.84); g.quadraticCurveTo(W * 0.5, H * 0.78, W, H * 0.86); g.lineTo(W, H); g.fill(); hills(g, W, H, H * 0.93, H * 0.012, '#5a8a40', 3, 2);
    const r = rnd(8); for (let i = 0; i < 60; i++) circ(g, r() * W, H * (0.86 + r() * 0.13), W * 0.008, ['#fff', '#f6c22e', '#f08ab0', '#e8504a'][i % 4]); pine(g, W * 0.1, H * 0.92, W * 0.3, '#24503c'); pine(g, W * 0.9, H * 0.95, W * 0.24, '#24503c');
  },
  frutas(g, W, H) {
    g.fillStyle = rgrad(g, W * 0.4, H * 0.3, H * 0.1, H * 1.1, [[0, '#6a4a34'], [1, '#2a1c14']]); g.fillRect(0, 0, W, H); g.fillStyle = '#7a5230'; g.fillRect(0, H * 0.7, W, H * 0.3); g.fillStyle = '#5c3c22'; g.fillRect(0, H * 0.7, W, H * 0.02);
    g.fillStyle = '#f1e9da'; g.beginPath(); g.moveTo(W * 0.3, H * 0.7); g.lineTo(W, H * 0.7); g.lineTo(W, H); g.lineTo(W * 0.5, H); g.quadraticCurveTo(W * 0.36, H * 0.86, W * 0.3, H * 0.7); g.fill(); for (let i = 0; i < 4; i++) curve(g, W * (0.5 + i * 0.13), H * 0.72, W * (0.52 + i * 0.13), H * 0.86, W * (0.6 + i * 0.12), H, 'rgba(120,100,80,0.25)', 2);
    // jug
    g.fillStyle = '#e8dcc0'; g.beginPath(); g.moveTo(W * 0.1, H * 0.32); g.quadraticCurveTo(W * 0.02, H * 0.56, W * 0.1, H * 0.74); g.lineTo(W * 0.26, H * 0.74); g.quadraticCurveTo(W * 0.34, H * 0.56, W * 0.26, H * 0.32); g.lineTo(W * 0.24, H * 0.22); g.lineTo(W * 0.12, H * 0.22); g.fill(); g.strokeStyle = '#e8dcc0'; g.lineWidth = W * 0.022; g.beginPath(); g.arc(W * 0.29, H * 0.42, H * 0.1, -1.2, 1.3); g.stroke(); g.fillStyle = '#5a80a8'; g.fillRect(W * 0.075, H * 0.5, W * 0.21, H * 0.03); ell(g, W * 0.12, H * 0.5, W * 0.015, H * 0.14, 'rgba(255,255,255,0.3)');
    // bowl and fruit
    const ap = (x, y, s, c) => { circ(g, x, y, s, c); circ(g, x - s * 0.3, y - s * 0.3, s * 0.35, 'rgba(255,255,255,0.3)'); g.strokeStyle = '#4a3020'; g.lineWidth = 2; g.beginPath(); g.moveTo(x, y - s * 0.8); g.lineTo(x + s * 0.15, y - s * 1.25); g.stroke(); };
    ap(W * 0.5, H * 0.5, H * 0.1, '#d8483c'); ap(W * 0.63, H * 0.47, H * 0.1, '#f0a03c'); ell(g, W * 0.76, H * 0.5, H * 0.075, H * 0.1, '#c9c84a'); circ(g, W * 0.76, H * 0.41, H * 0.05, '#c9c84a'); ap(W * 0.57, H * 0.4, H * 0.085, '#e8c03a');
    g.strokeStyle = '#f0d04a'; g.lineWidth = H * 0.06; g.lineCap = 'round'; g.beginPath(); g.moveTo(W * 0.4, H * 0.5); g.quadraticCurveTo(W * 0.5, H * 0.3, W * 0.7, H * 0.32); g.stroke();
    g.fillStyle = '#4a78b0'; g.beginPath(); g.moveTo(W * 0.36, H * 0.54); g.quadraticCurveTo(W * 0.4, H * 0.74, W * 0.52, H * 0.74); g.lineTo(W * 0.72, H * 0.74); g.quadraticCurveTo(W * 0.84, H * 0.74, W * 0.88, H * 0.54); g.fill(); g.fillStyle = '#6a98cc'; g.fillRect(W * 0.36, H * 0.54, W * 0.52, H * 0.025); g.fillStyle = '#3a6090'; g.fillRect(W * 0.52, H * 0.74, W * 0.2, H * 0.03);
    for (let i = 0; i < 16; i++) { const gx = W * (0.34 + (i % 4) * 0.035 + Math.floor(i / 4) * 0.012), gy = H * (0.6 + Math.floor(i / 4) * 0.05 + (i % 2) * 0.01); circ(g, gx, gy, H * 0.03, i % 3 ? '#6a3a8a' : '#8a56a8'); circ(g, gx - H * 0.008, gy - H * 0.008, H * 0.008, 'rgba(255,255,255,0.4)'); }
    for (const x of [0.9, 0.94]) { circ(g, W * x, H * 0.82, H * 0.03, '#b8283c'); curve(g, W * x, H * 0.8, W * 0.93, H * 0.72, W * 0.95, H * 0.7, '#4a3020', 1.5); } vignette(g, W, H, 0.4);
  },
  gato(g, W, H) {
    g.fillStyle = '#3f8a8a'; g.fillRect(0, 0, W, H); for (let y = 0; y < 8; y++) for (let x = 0; x < 7; x++) flower(g, (x + 0.5 + (y % 2) * 0.5) * W / 6 - W * 0.08, (y + 0.5) * H / 7, W * 0.03, 5, 'rgba(255,255,255,0.1)', 'rgba(255,255,255,0.12)');
    const o = '#e8964a', d = '#c4702c', cx = W / 2, cy = H * 0.46, s = W * 0.3;
    ell(g, cx, H * 1.02, W * 0.4, H * 0.3, o); ell(g, cx, H * 0.98, W * 0.2, H * 0.2, '#fbf3e4');
    for (const sx of [-1, 1]) { poly(g, [[cx + sx * s * 0.95, cy - s * 0.25], [cx + sx * s * 0.82, cy - s * 1.25], [cx + sx * s * 0.2, cy - s * 0.8]], o); poly(g, [[cx + sx * s * 0.82, cy - s * 0.45], [cx + sx * s * 0.76, cy - s * 1.02], [cx + sx * s * 0.42, cy - s * 0.78]], '#f4b8b0'); }
    ell(g, cx, cy, s * 1.08, s * 0.92, o); for (const sx of [-1, 1]) ell(g, cx + sx * s * 0.9, cy + s * 0.25, s * 0.3, s * 0.4, o);
    for (const dx of [-0.25, 0, 0.25]) line(g, [[cx + dx * s, cy - s * 0.86], [cx + dx * s * 0.8, cy - s * 0.5]], d, s * 0.09); for (const sx of [-1, 1]) for (const dy of [0, 0.2]) line(g, [[cx + sx * s * 1.02, cy + s * (0.05 + dy)], [cx + sx * s * 0.7, cy + s * (0.12 + dy)]], d, s * 0.07);
    ell(g, cx, cy + s * 0.42, s * 0.5, s * 0.38, '#fbf3e4');
    for (const sx of [-1, 1]) { ell(g, cx + sx * s * 0.45, cy - s * 0.05, s * 0.24, s * 0.26, '#fbfbf0'); ell(g, cx + sx * s * 0.45, cy - s * 0.05, s * 0.2, s * 0.23, '#7ab84a'); ell(g, cx + sx * s * 0.45, cy - s * 0.05, s * 0.07, s * 0.2, '#1c1c20'); circ(g, cx + sx * s * 0.45 - s * 0.07, cy - s * 0.13, s * 0.055, '#fff'); }
    poly(g, [[cx - s * 0.1, cy + s * 0.25], [cx + s * 0.1, cy + s * 0.25], [cx, cy + s * 0.37]], '#e8788a'); g.strokeStyle = '#5a3a2a'; g.lineWidth = s * 0.035; g.lineCap = 'round'; g.beginPath(); g.moveTo(cx, cy + s * 0.37); g.quadraticCurveTo(cx - s * 0.02, cy + s * 0.52, cx - s * 0.2, cy + s * 0.5); g.moveTo(cx, cy + s * 0.37); g.quadraticCurveTo(cx + s * 0.02, cy + s * 0.52, cx + s * 0.2, cy + s * 0.5); g.stroke();
    for (const sx of [-1, 1]) for (const a of [-0.2, 0, 0.2]) line(g, [[cx + sx * s * 0.35, cy + s * 0.42], [cx + sx * s * 1.25, cy + s * (0.4 + a)]], 'rgba(255,255,255,0.85)', 1.5);
    for (const sx of [-1, 1]) poly(g, [[cx, cy + s * 1.06], [cx + sx * s * 0.5, cy + s * 0.88], [cx + sx * s * 0.5, cy + s * 1.28]], '#d8483c'); circ(g, cx, cy + s * 1.07, s * 0.12, '#b8322c');
  },
  // botanical print on paper: 0 fern, 1 monstera, 2 flowering sprig
  botanica(g, W, H, kind = 0) {
    g.fillStyle = '#f8f1de'; g.fillRect(0, 0, W, H); grain(g, W, H, 5 + kind, 200, 0.03); g.strokeStyle = 'rgba(120,100,70,0.5)'; g.lineWidth = 1; g.strokeRect(W * 0.06, W * 0.06, W * 0.88, H - W * 0.12);
    const st = '#5a7a3c';
    if (kind === 0) { curve(g, W * 0.5, H * 0.9, W * 0.42, H * 0.5, W * 0.54, H * 0.12, st, W * 0.02); for (let i = 0; i < 13; i++) { const t = i / 13, x = W * (0.5 - 0.07 * Math.sin(t * PI) + 0.04 * t), y = H * (0.84 - t * 0.7), l = W * 0.36 * (1 - t * 0.8) * (0.5 + 0.5 * Math.sin(Math.min(1, t * 4) * HP)); leaf(g, x, y, l, l * 0.2, -0.45 - t * 0.2, '#4f8a44', '#3a6e36'); leaf(g, x, y, l, l * 0.2, PI + 0.45 + t * 0.2, '#5a9a4c', '#3a6e36'); } }
    else if (kind === 1) { curve(g, W * 0.46, H * 0.92, W * 0.44, H * 0.7, W * 0.5, H * 0.56, st, W * 0.025); g.save(); g.translate(W * 0.5, H * 0.42); g.fillStyle = '#3f8a48'; g.beginPath(); g.moveTo(0, H * 0.16); g.bezierCurveTo(-W * 0.5, H * 0.12, -W * 0.44, -H * 0.3, 0, -H * 0.3); g.bezierCurveTo(W * 0.44, -H * 0.3, W * 0.5, H * 0.12, 0, H * 0.16); g.fill();
      g.strokeStyle = '#f8f1de'; g.lineCap = 'round'; for (const sx of [-1, 1]) for (let i = 0; i < 4; i++) { g.lineWidth = W * 0.035; g.beginPath(); g.moveTo(sx * W * 0.5, -H * 0.2 + i * H * 0.1); g.lineTo(sx * W * 0.15, -H * 0.14 + i * H * 0.085); g.stroke(); circ(g, sx * W * 0.1, -H * 0.2 + i * H * 0.09, W * 0.018, '#f8f1de'); }
      g.strokeStyle = '#2c6a34'; g.lineWidth = W * 0.012; g.beginPath(); g.moveTo(0, H * 0.16); g.lineTo(0, -H * 0.28); g.stroke(); g.restore(); }
    else { curve(g, W * 0.5, H * 0.92, W * 0.58, H * 0.5, W * 0.46, H * 0.14, st, W * 0.016); for (let i = 0; i < 7; i++) { const t = i / 7, x = W * (0.5 + 0.07 * Math.sin(t * PI) - 0.04 * t), y = H * (0.86 - t * 0.6); leaf(g, x, y, W * 0.2, W * 0.07, i % 2 ? -0.5 : PI + 0.5, '#7aa468', '#4f7a44'); }
      for (const [x, y, s] of [[0.46, 0.14, 0.06], [0.36, 0.22, 0.05], [0.58, 0.24, 0.05], [0.3, 0.34, 0.04], [0.64, 0.36, 0.045], [0.48, 0.28, 0.05]]) { curve(g, W * 0.5, H * (y + 0.14), W * x, H * (y + 0.06), W * x, H * y, st, W * 0.01); flower(g, W * x, H * y, W * s, 5, '#e88aa4', '#f6d36a'); } }
    g.fillStyle = 'rgba(90,70,50,0.55)'; g.fillRect(W * 0.34, H * 0.955 - W * 0.06, W * 0.32, 1.5);
  },
  abstrato(g, W, H) {
    g.fillStyle = '#f3ead8'; g.fillRect(0, 0, W, H); const P = ['#d9765a', '#e0a23c', '#2f6d72', '#27324e', '#f1b8a8', '#8fae6a'];
    g.fillStyle = P[2]; g.fillRect(W * 0.08, H * 0.1, W * 0.42, H * 0.5); circ(g, W * 0.66, H * 0.34, W * 0.24, P[0]); g.fillStyle = P[1]; g.beginPath(); g.arc(W * 0.36, H * 0.72, W * 0.26, PI, TAU); g.fill(); g.fillStyle = P[3]; g.fillRect(W * 0.56, H * 0.56, W * 0.3, H * 0.34); circ(g, W * 0.28, H * 0.3, W * 0.12, P[4]); g.fillStyle = P[5]; g.beginPath(); g.arc(W * 0.71, H * 0.73, W * 0.11, 0, PI); g.fill();
    g.strokeStyle = '#1c1c22'; g.lineWidth = W * 0.008; g.beginPath(); g.moveTo(W * 0.05, H * 0.88); g.lineTo(W * 0.5, H * 0.4); g.lineTo(W * 0.95, H * 0.12); g.stroke(); g.beginPath(); g.arc(W * 0.66, H * 0.34, W * 0.3, 0.4, 2.6); g.stroke(); for (let i = 0; i < 5; i++) circ(g, W * (0.14 + i * 0.05), H * 0.86, W * 0.012, '#1c1c22'); for (let i = 0; i < 4; i++) { g.beginPath(); g.moveTo(W * 0.6 + i * W * 0.06, H * 0.6); g.lineTo(W * 0.6 + i * W * 0.06, H * 0.86); g.strokeStyle = '#f3ead8'; g.lineWidth = W * 0.006; g.stroke(); } grain(g, W, H, 3, 400, 0.04);
  },
  por_do_sol(g, W, H) {
    g.fillStyle = grad(g, 0, 0, 0, H * 0.6, [[0, '#4a3a80'], [0.35, '#c4508a'], [0.7, '#ff8a4a'], [1, '#ffd070']]); g.fillRect(0, 0, W, H * 0.6); g.fillStyle = rgrad(g, W * 0.5, H * 0.6, 0, H * 0.5, [[0, 'rgba(255,240,170,0.8)'], [1, 'rgba(255,240,170,0)']]); g.fillRect(0, 0, W, H * 0.6); circ(g, W * 0.5, H * 0.58, H * 0.17, '#fff0b0');
    for (const [x, y, w] of [[0.2, 0.2, 0.2], [0.72, 0.14, 0.16], [0.6, 0.3, 0.12], [0.3, 0.36, 0.1]]) ell(g, W * x, H * y, W * w, H * 0.02, 'rgba(255,190,150,0.5)');
    g.fillStyle = grad(g, 0, H * 0.6, 0, H, [[0, '#ff9a5a'], [0.4, '#a8487a'], [1, '#3a2a60']]); g.fillRect(0, H * 0.6, W, H * 0.4); for (let i = 0; i < 10; i++) { g.fillStyle = `rgba(255,236,170,${0.75 - i * 0.06})`; g.fillRect(W * 0.5 - H * (0.16 - i * 0.008) + ((i * 13) % 7 - 3), H * (0.615 + i * 0.036), H * (0.32 - i * 0.016), H * 0.013); }
    const palm = (x, y, s, f) => { curve(g, x, H, x + f * s * 0.2, y + s * 0.6, x + f * s * 0.1, y, '#1c1430', s * 0.07); for (const a of [-2.9, -2.4, -1.9, -1.2, -0.7, -0.2]) { g.save(); g.translate(x + f * s * 0.1, y); g.rotate(a); g.fillStyle = '#1c1430'; g.beginPath(); g.moveTo(0, 0); g.quadraticCurveTo(s * 0.35, -s * 0.22, s * 0.7, s * 0.1); g.quadraticCurveTo(s * 0.35, -s * 0.06, 0, 0); g.fill(); g.restore(); } };
    palm(W * 0.12, H * 0.3, H * 0.5, 1); palm(W * 0.24, H * 0.46, H * 0.36, -1); palm(W * 0.9, H * 0.36, H * 0.44, -1); poly(g, [[0, H], [0, H * 0.88], [W * 0.34, H * 0.94], [W * 0.4, H]], '#1c1430'); poly(g, [[W, H], [W, H * 0.9], [W * 0.78, H * 0.96], [W * 0.74, H]], '#1c1430');
    for (const [x, y] of [[0.4, 0.22], [0.45, 0.26], [0.62, 0.2]]) bird(g, W * x, H * y, W * 0.012, '#2a1c40');
  },
  casinha(g, W, H) {
    g.fillStyle = grad(g, 0, 0, 0, H * 0.6, [[0, '#7cc4ee'], [1, '#dff2f6']]); g.fillRect(0, 0, W, H); circ(g, W * 0.85, H * 0.16, H * 0.07, '#fff3b0'); cloud(g, W * 0.2, H * 0.16, H * 0.055); cloud(g, W * 0.6, H * 0.1, H * 0.035);
    hills(g, W, H, H * 0.52, H * 0.05, '#a8d08a', 2, 1.2); hills(g, W, H, H * 0.62, H * 0.03, '#86bc6a', 7, 1.5); g.fillStyle = '#6aa84a'; g.fillRect(0, H * 0.74, W, H * 0.26);
    g.fillStyle = '#e8d2a0'; g.beginPath(); g.moveTo(W * 0.5, H * 0.74); g.quadraticCurveTo(W * 0.56, H * 0.86, W * 0.36, H); g.lineTo(W * 0.62, H); g.quadraticCurveTo(W * 0.68, H * 0.86, W * 0.56, H * 0.74); g.fill();
    tree(g, W * 0.16, H * 0.76, H * 0.36, '#4f9a44'); for (const [x, y] of [[0.1, 0.45], [0.2, 0.5], [0.15, 0.56]]) circ(g, W * x, H * y, H * 0.016, '#e8483c');
    g.fillStyle = '#fbf1dc'; g.fillRect(W * 0.36, H * 0.46, W * 0.36, H * 0.29); poly(g, [[W * 0.31, H * 0.47], [W * 0.54, H * 0.26], [W * 0.77, H * 0.47]], '#c2483c'); poly(g, [[W * 0.31, H * 0.47], [W * 0.54, H * 0.26], [W * 0.56, H * 0.28], [W * 0.35, H * 0.47]], '#d8604a'); g.fillStyle = '#a84a3c'; g.fillRect(W * 0.64, H * 0.27, W * 0.05, H * 0.12);
    for (const [x, y, s] of [[0.68, 0.22, 0.022], [0.71, 0.16, 0.03], [0.76, 0.1, 0.038]]) circ(g, W * x, H * y, H * s, 'rgba(255,255,255,0.8)');
    g.fillStyle = '#4a7ab0'; g.fillRect(W * 0.5, H * 0.58, W * 0.08, H * 0.17); circ(g, W * 0.565, H * 0.67, H * 0.008, '#f6d36a'); for (const x of [0.4, 0.62]) { g.fillStyle = '#bfe0f0'; g.fillRect(W * x, H * 0.54, W * 0.07, H * 0.085); g.strokeStyle = '#fff'; g.lineWidth = 1.5; g.strokeRect(W * x, H * 0.54, W * 0.07, H * 0.085); g.fillStyle = '#7a5230'; g.fillRect(W * (x - 0.008), H * 0.625, W * 0.086, H * 0.022); for (let i = 0; i < 4; i++) circ(g, W * (x + 0.008 + i * 0.018), H * 0.62, H * 0.012, ['#e8506a', '#f6c22e', '#f08ab0', '#fff'][i]); }
    g.fillStyle = '#fbf7ee'; for (let i = 0; i < 12; i++) { if (i > 4 && i < 7) continue; g.fillRect(W * (0.26 + i * 0.045), H * 0.71, W * 0.016, H * 0.07); } g.fillRect(W * 0.26, H * 0.73, W * 0.22, H * 0.012); g.fillRect(W * 0.58, H * 0.73, W * 0.2, H * 0.012);
    const r = rnd(4); for (let i = 0; i < 50; i++) { const x = r() * W, y = H * (0.8 + r() * 0.19); if (Math.abs(x / W - 0.5) < 0.14) continue; circ(g, x, y, H * 0.012, ['#fff', '#f6c22e', '#f08ab0', '#e8504a', '#c79af0'][i % 5]); }
  },
  panorama(g, W, H) {
    g.fillStyle = grad(g, 0, 0, 0, H * 0.55, [[0, '#6aaee0'], [0.7, '#cfe8f2'], [1, '#f6ecd0']]); g.fillRect(0, 0, W, H); for (const [x, y, s] of [[0.14, 0.16, 0.06], [0.42, 0.1, 0.045], [0.7, 0.2, 0.07], [0.9, 0.09, 0.04]]) { cloud(g, W * x + 3, H * y + 3, H * s, 'rgba(180,200,220,0.5)'); cloud(g, W * x, H * y, H * s); }
    hills(g, W, H, H * 0.4, H * 0.07, '#a8b8d8', 21, 2.4); hills(g, W, H, H * 0.46, H * 0.05, '#8fa8b8', 23, 3.2); hills(g, W, H, H * 0.53, H * 0.035, '#9cc48a', 25, 2); hills(g, W, H, H * 0.6, H * 0.03, '#84b46c', 27, 2.6);
    // far village
    for (const [x, w, h] of [[0.6, 0.012, 0.03], [0.62, 0.014, 0.024], [0.585, 0.012, 0.022]]) { g.fillStyle = '#f6ead0'; g.fillRect(W * x, H * (0.56 - h), W * w, H * h); poly(g, [[W * x - 1, H * (0.56 - h)], [W * (x + w / 2), H * (0.545 - h)], [W * (x + w) + 1, H * (0.56 - h)]], '#c2624a'); } g.fillStyle = '#f6ead0'; g.fillRect(W * 0.637, H * 0.49, W * 0.007, H * 0.07); poly(g, [[W * 0.635, H * 0.49], [W * 0.6405, H * 0.465], [W * 0.646, H * 0.49]], '#7a5a4a');
    // fields
    poly(g, [[W * 0.05, H * 0.66], [W * 0.3, H * 0.6], [W * 0.42, H * 0.64], [W * 0.2, H * 0.72]], '#e8d05a'); poly(g, [[W * 0.66, H * 0.62], [W * 0.92, H * 0.6], [W, H * 0.66], [W * 0.74, H * 0.7]], '#a890d8'); poly(g, [[W * 0.4, H * 0.6], [W * 0.56, H * 0.585], [W * 0.62, H * 0.62], [W * 0.46, H * 0.65]], '#c4dc8a');
    g.fillStyle = '#76aa5c'; g.beginPath(); g.moveTo(0, H); g.lineTo(0, H * 0.7); g.quadraticCurveTo(W * 0.3, H * 0.66, W * 0.6, H * 0.72); g.quadraticCurveTo(W * 0.85, H * 0.76, W, H * 0.7); g.lineTo(W, H); g.fill();
    // river
    g.fillStyle = '#9fd0e8'; g.beginPath(); g.moveTo(W * 0.52, H * 0.6); g.bezierCurveTo(W * 0.62, H * 0.68, W * 0.36, H * 0.74, W * 0.46, H * 0.84); g.bezierCurveTo(W * 0.52, H * 0.92, W * 0.4, H * 0.96, W * 0.36, H); g.lineTo(W * 0.62, H); g.bezierCurveTo(W * 0.66, H * 0.94, W * 0.66, H * 0.88, W * 0.56, H * 0.82); g.bezierCurveTo(W * 0.48, H * 0.75, W * 0.66, H * 0.68, W * 0.535, H * 0.6); g.fill(); for (let i = 0; i < 6; i++) { g.fillStyle = 'rgba(255,255,255,0.5)'; g.fillRect(W * (0.44 + (i % 3) * 0.03), H * (0.86 + i * 0.022), W * 0.04, 1.5); }
    for (const [x, y, s, c] of [[0.08, 0.72, 0.2, '#4f8a44'], [0.2, 0.7, 0.13, '#5a9a4c'], [0.3, 0.76, 0.24, '#3f7a3c'], [0.72, 0.74, 0.22, '#4f8a44'], [0.84, 0.72, 0.15, '#5a9a4c'], [0.94, 0.8, 0.3, '#3f7a3c'], [0.66, 0.68, 0.09, '#5a9a4c'], [0.44, 0.66, 0.07, '#4f8a44']]) tree(g, W * x, H * y, H * s, c);
    for (const x of [0.76, 0.79, 0.24]) ell(g, W * x, H * 0.63, W * 0.006, H * 0.06, '#3a6a4a');
    const r = rnd(31); for (let i = 0; i < 260; i++) { const x = r() * W, y = H * (0.82 + r() * 0.18); if (x > W * 0.34 && x < W * 0.68) continue; curve(g, x, y, x + 2, y - H * 0.02, x + (r() - 0.5) * 6, y - H * 0.04, '#5a9444', 1); if (i % 2) circ(g, x, y - H * 0.04, H * (0.008 + r() * 0.008), ['#e8483c', '#e8483c', '#f6c22e', '#fff', '#f08ab0'][i % 5]); }
    g.fillStyle = 'rgba(255,240,200,0.12)'; g.fillRect(0, 0, W, H);
  },
  rosas(g, W, H) {
    g.fillStyle = rgrad(g, W * 0.5, H * 0.4, H * 0.1, H * 0.9, [[0, '#7a7a56'], [1, '#2e2a1e']]); g.fillRect(0, 0, W, H);
    for (const a of [-2.6, -2.2, -0.9, -0.5, -1.57, -3.0, -0.14]) leaf(g, W * 0.5, H * 0.5, W * 0.46, W * 0.11, a, '#5a7a4a', '#3d5a34');
    g.fillStyle = '#d8c8a0'; g.beginPath(); g.moveTo(W * 0.38, H * 0.66); g.quadraticCurveTo(W * 0.3, H * 0.84, W * 0.42, H * 0.96); g.lineTo(W * 0.58, H * 0.96); g.quadraticCurveTo(W * 0.7, H * 0.84, W * 0.62, H * 0.66); g.fill(); ell(g, W * 0.42, H * 0.8, W * 0.02, H * 0.08, 'rgba(255,255,255,0.3)');
    for (const [x, y, s, c] of [[0.5, 0.3, 0.13, '#e8909c'], [0.32, 0.4, 0.11, '#f1d9c0'], [0.68, 0.4, 0.115, '#c9506a'], [0.42, 0.52, 0.12, '#d9607a'], [0.6, 0.54, 0.11, '#f6e2c8'], [0.5, 0.42, 0.1, '#f1b8b0'], [0.28, 0.56, 0.07, '#e8909c'], [0.74, 0.56, 0.07, '#f1d9c0'], [0.38, 0.24, 0.06, '#f6e2c8'], [0.64, 0.24, 0.065, '#e8909c']]) rosa(g, W * x, H * y, W * s, c);
    g.fillStyle = 'rgba(200,150,80,0.14)'; g.fillRect(0, 0, W, H); vignette(g, W, H, 0.45);
  },
  borboletas(g, W, H) {
    g.fillStyle = '#f6eeda'; g.fillRect(0, 0, W, H); grain(g, W, H, 2, 200, 0.03);
    const bf = (x, y, s, a, b) => { for (const sx of [-1, 1]) { ell(g, x + sx * s * 0.52, y - s * 0.22, s * 0.52, s * 0.4, a, sx * 0.5); ell(g, x + sx * s * 0.4, y + s * 0.32, s * 0.36, s * 0.3, b, -sx * 0.5); circ(g, x + sx * s * 0.62, y - s * 0.26, s * 0.13, 'rgba(255,255,255,0.75)'); circ(g, x + sx * s * 0.42, y + s * 0.36, s * 0.09, 'rgba(20,20,30,0.5)'); g.strokeStyle = 'rgba(30,20,20,0.6)'; g.lineWidth = 1.2; g.beginPath(); g.ellipse(x + sx * s * 0.52, y - s * 0.22, s * 0.52, s * 0.4, sx * 0.5, 0, TAU); g.stroke(); curve(g, x, y - s * 0.4, x + sx * s * 0.16, y - s * 0.8, x + sx * s * 0.3, y - s * 0.78, '#2a1c1c', 1); }
      ell(g, x, y, s * 0.07, s * 0.42, '#2a1c1c'); circ(g, x, y - s * 0.02, s * 0.03, '#d9d0b8'); g.fillStyle = 'rgba(90,70,50,0.5)'; g.fillRect(x - s * 0.4, y + s * 0.86, s * 0.8, 1.2); };
    const cols = [['#f08a2c', '#f4b04a'], ['#4a90d9', '#7fc0f0'], ['#f6d84a', '#f6e68a'], ['#c0508a', '#e890b8'], ['#5ab08a', '#a8e0b0'], ['#8a62c8', '#c4a8f0']], cw = W / 3, ch = H / 2;
    cols.forEach(([a, b], i) => bf(cw * ((i % 3) + 0.5), ch * (Math.floor(i / 3) + 0.46), Math.min(cw, ch) * 0.3, a, b));
  },
  mapa(g, W, H) {
    g.fillStyle = grad(g, 0, 0, W, H, [[0, '#ecd9a8'], [0.5, '#e4cc94'], [1, '#d8bc80']]); g.fillRect(0, 0, W, H); const r = rnd(41); for (let i = 0; i < 14; i++) circ(g, r() * W, r() * H, H * (0.04 + r() * 0.1), 'rgba(150,110,50,0.06)');
    g.strokeStyle = 'rgba(110,80,40,0.22)'; g.lineWidth = 1; for (let i = 1; i < 12; i++) { g.beginPath(); g.moveTo((i / 12) * W, 0); g.lineTo((i / 12) * W, H); g.stroke(); } for (let i = 1; i < 6; i++) { g.beginPath(); g.moveTo(0, (i / 6) * H); g.lineTo(W, (i / 6) * H); g.stroke(); }
    const land = (pts) => { g.fillStyle = '#b89a5a'; g.strokeStyle = '#6a4a2a'; g.lineWidth = 1.6; g.lineJoin = 'round'; g.beginPath(); pts.forEach(([x, y], i) => (i ? g.lineTo(x * W, y * H) : g.moveTo(x * W, y * H))); g.closePath(); g.fill(); g.stroke(); };
    land([[0.06, 0.2], [0.12, 0.14], [0.22, 0.13], [0.3, 0.17], [0.27, 0.26], [0.3, 0.3], [0.25, 0.38], [0.2, 0.42], [0.21, 0.48], [0.17, 0.46], [0.13, 0.38], [0.1, 0.3]]);
    land([[0.22, 0.52], [0.28, 0.5], [0.33, 0.56], [0.32, 0.66], [0.28, 0.76], [0.25, 0.86], [0.23, 0.78], [0.22, 0.66]]);
    land([[0.45, 0.2], [0.5, 0.15], [0.56, 0.17], [0.55, 0.24], [0.5, 0.28], [0.46, 0.27]]);
    land([[0.45, 0.34], [0.52, 0.31], [0.58, 0.34], [0.61, 0.44], [0.58, 0.56], [0.55, 0.7], [0.51, 0.72], [0.49, 0.58], [0.44, 0.46]]);
    land([[0.58, 0.18], [0.68, 0.12], [0.82, 0.13], [0.92, 0.2], [0.9, 0.3], [0.84, 0.36], [0.8, 0.46], [0.76, 0.4], [0.7, 0.44], [0.66, 0.36], [0.6, 0.32]]);
    land([[0.8, 0.62], [0.88, 0.6], [0.92, 0.66], [0.89, 0.74], [0.82, 0.73]]); land([[0.33, 0.1], [0.38, 0.08], [0.4, 0.13], [0.36, 0.16]]);
    for (const [x, y] of [[0.2, 0.25], [0.52, 0.42], [0.74, 0.24], [0.27, 0.62]]) for (let i = 0; i < 3; i++) poly(g, [[(x + i * 0.02) * W - 5, y * H + 4], [(x + i * 0.02) * W, y * H - 5], [(x + i * 0.02) * W + 5, y * H + 4]], '#8a6a3a');
    const cx = W * 0.12, cy = H * 0.76, s = H * 0.11; for (let i = 0; i < 8; i++) { const a = (i / 8) * TAU, l = i % 2 ? s * 0.55 : s; poly(g, [[cx, cy], [cx + Math.cos(a - 0.2) * l * 0.3, cy + Math.sin(a - 0.2) * l * 0.3], [cx + Math.cos(a) * l, cy + Math.sin(a) * l]], '#6a4a2a'); poly(g, [[cx, cy], [cx + Math.cos(a + 0.2) * l * 0.3, cy + Math.sin(a + 0.2) * l * 0.3], [cx + Math.cos(a) * l, cy + Math.sin(a) * l]], '#c2483c'); } g.strokeStyle = '#6a4a2a'; g.lineWidth = 1.5; g.beginPath(); g.arc(cx, cy, s * 0.62, 0, TAU); g.stroke();
    const sx = W * 0.39, sy = H * 0.42; poly(g, [[sx - 9, sy], [sx + 10, sy], [sx + 6, sy + 6], [sx - 6, sy + 6]], '#6a4a2a'); poly(g, [[sx, sy - 14], [sx + 8, sy - 2], [sx, sy - 2]], '#f6ecd0'); poly(g, [[sx - 1, sy - 11], [sx - 7, sy - 2], [sx - 1, sy - 2]], '#f6ecd0');
    for (const [x, y] of [[0.36, 0.3], [0.68, 0.6], [0.4, 0.8], [0.94, 0.45], [0.05, 0.56]]) { g.strokeStyle = 'rgba(90,70,40,0.5)'; g.lineWidth = 1.2; g.beginPath(); g.moveTo(x * W - 8, y * H); g.quadraticCurveTo(x * W - 4, y * H - 4, x * W, y * H); g.quadraticCurveTo(x * W + 4, y * H + 4, x * W + 8, y * H); g.stroke(); }
    g.strokeStyle = '#6a4a2a'; g.lineWidth = 3; g.strokeRect(4, 4, W - 8, H - 8); g.lineWidth = 1; g.strokeRect(10, 10, W - 20, H - 20); vignette(g, W, H, 0.25);
  },
  // impressionist pond with a little bridge and water lilies
  monet(g, W, H) {
    g.fillStyle = '#5a8a6a'; g.fillRect(0, 0, W, H);
    dabs(g, W, H, 51, 2600, (x, y, r) => { if (y < 0.42) return { c: ['#3f7a4a', '#5a9a54', '#8ab85a', '#2f6a44', '#c4d470', '#6aa870'][Math.floor(r() * 6)], a: HP }; return { c: ['#5a9ab0', '#7fb8c8', '#4a8a8a', '#8ac0a8', '#a8c8e0', '#6a88b8', '#3f7a70'][Math.floor(r() * 7)], a: 0 }; }, 0.028);
    dabs(g, W, H, 53, 300, (x, y, r) => (y < 0.4 && r() < 0.5 ? { c: ['#f0d870', '#e8a8c0', '#fff'][Math.floor(r() * 3)], a: HP } : null), 0.012);
    g.strokeStyle = '#3f7a78'; g.lineCap = 'round'; g.lineWidth = H * 0.03; g.beginPath(); g.moveTo(-W * 0.02, H * 0.46); g.quadraticCurveTo(W * 0.5, H * 0.22, W * 1.02, H * 0.46); g.stroke(); g.strokeStyle = '#7fb8a8'; g.lineWidth = H * 0.012; g.beginPath(); g.moveTo(-W * 0.02, H * 0.36); g.quadraticCurveTo(W * 0.5, H * 0.12, W * 1.02, H * 0.36); g.stroke();
    for (let i = 0; i <= 12; i++) { const t = i / 12, x = W * t, yb = H * (0.46 - 0.48 * t * (1 - t)), yt = H * (0.36 - 0.48 * t * (1 - t)); line(g, [[x, yb], [x, yt]], '#5a9a90', H * 0.008); }
    g.save(); g.globalAlpha = 0.25; g.strokeStyle = '#2f5a58'; g.lineWidth = H * 0.03; g.beginPath(); g.moveTo(0, H * 0.52); g.quadraticCurveTo(W * 0.5, H * 0.7, W, H * 0.52); g.stroke(); g.restore();
    const r = rnd(57); for (let i = 0; i < 34; i++) { const y = H * (0.56 + r() * 0.42), x = r() * W, s = W * (0.02 + (y / H - 0.5) * 0.07); ell(g, x, y, s, s * 0.36, ['#7fb86a', '#9acc7a', '#6aa860'][i % 3], 0); ell(g, x - s * 0.2, y - s * 0.08, s * 0.5, s * 0.14, 'rgba(255,255,255,0.18)'); if (i % 2) { circ(g, x + s * 0.2, y - s * 0.12, s * 0.26, i % 4 === 1 ? '#f4a8c4' : '#fff6f0'); circ(g, x + s * 0.2, y - s * 0.14, s * 0.1, '#f6d870'); } }
    for (let i = 0; i < 20; i++) { const x = r() * W; line(g, [[x, 0], [x + (r() - 0.5) * W * 0.05, H * (0.12 + r() * 0.2)]], 'rgba(160,200,110,0.55)', 2); }
    dabs(g, W, H, 59, 220, (x, y, r2) => (y > 0.5 ? 'rgba(255,255,255,0.25)' : null), 0.02);
  },
  // a simple friendly portrait: o = { skin, hair, shirt, bg, style: 0 short, 1 long, 2 bun }
  retrato(g, W, H, o) {
    g.fillStyle = o.bg; g.fillRect(0, 0, W, H); const cx = W / 2, cy = H * 0.44, s = Math.min(W, H) * 0.24;
    if (o.style === 1) { g.fillStyle = o.hair; g.beginPath(); g.ellipse(cx, cy + s * 0.5, s * 1.25, s * 1.7, 0, 0, TAU); g.fill(); }
    ell(g, cx, H * 1.05, s * 1.9, s * 1.5, o.shirt); g.fillStyle = o.skin; g.fillRect(cx - s * 0.3, cy + s * 0.6, s * 0.6, s * 0.7); circ(g, cx, cy, s, o.skin);
    g.fillStyle = o.hair; g.beginPath(); g.arc(cx, cy - s * 0.12, s * 1.06, PI * 1.02, TAU - 0.06); g.quadraticCurveTo(cx + s * 0.2, cy - s * 0.4, cx - s * 0.5, cy - s * 0.5); g.quadraticCurveTo(cx - s * 0.9, cy - s * 0.4, cx - s * 1.06, cy - s * 0.1); g.fill(); if (o.style === 2) circ(g, cx, cy - s * 1.2, s * 0.42, o.hair);
    for (const sx of [-1, 1]) { circ(g, cx + sx * s * 0.36, cy + s * 0.08, s * 0.08, '#3a2a24'); circ(g, cx + sx * s * 0.56, cy + s * 0.36, s * 0.16, 'rgba(240,120,120,0.35)'); } g.strokeStyle = '#8a3a34'; g.lineWidth = s * 0.07; g.lineCap = 'round'; g.beginPath(); g.arc(cx, cy + s * 0.3, s * 0.3, 0.2 * PI, 0.8 * PI); g.stroke();
  },
  folha(g, W, H) { g.fillStyle = '#f1e6d0'; g.fillRect(0, 0, W, H); for (const a of [-2.3, -1.57, -0.85]) leaf(g, W * 0.5, H * 0.88, H * 0.7, H * 0.16, a, '#5a9a54', '#3a6e3a'); },
  lua(g, W, H) { g.fillStyle = '#27324e'; g.fillRect(0, 0, W, H); stars(g, W, H, 77, 24); circ(g, W * 0.5, H * 0.45, W * 0.26, '#fbf1c8'); circ(g, W * 0.6, H * 0.4, W * 0.22, '#27324e'); },
  passaro(g, W, H) { g.fillStyle = '#f6d9c8'; g.fillRect(0, 0, W, H); curve(g, 0, H * 0.72, W * 0.5, H * 0.66, W, H * 0.76, '#7a5a3c', H * 0.035); ell(g, W * 0.5, H * 0.5, W * 0.2, H * 0.16, '#5a9ad0'); circ(g, W * 0.64, H * 0.38, W * 0.11, '#5a9ad0'); poly(g, [[W * 0.74, H * 0.36], [W * 0.84, H * 0.4], [W * 0.74, H * 0.43]], '#f0a03c'); circ(g, W * 0.67, H * 0.36, W * 0.02, '#1c1c20'); poly(g, [[W * 0.32, H * 0.48], [W * 0.14, H * 0.4], [W * 0.18, H * 0.58]], '#3f7ab0'); ell(g, W * 0.47, H * 0.52, W * 0.12, H * 0.08, '#3f7ab0', 0.3); ell(g, W * 0.56, H * 0.57, W * 0.1, H * 0.07, '#f6c8a0'); leaf(g, W * 0.2, H * 0.72, W * 0.16, W * 0.05, -0.8, '#6aa85a'); leaf(g, W * 0.82, H * 0.74, W * 0.16, W * 0.05, -2.3, '#6aa85a'); },
  mirror(g, W, H) { g.fillStyle = grad(g, 0, 0, W, H, [[0, '#eef6f8'], [0.45, '#cfe2ea'], [0.55, '#dcebf0'], [1, '#b8d0dc']]); g.fillRect(0, 0, W, H); g.fillStyle = 'rgba(255,255,255,0.55)'; poly(g, [[W * 0.1, H * 0.34], [W * 0.5, H * 0.04], [W * 0.62, H * 0.04], [W * 0.1, H * 0.46]], 'rgba(255,255,255,0.5)'); poly(g, [[W * 0.1, H * 0.52], [W * 0.74, H * 0.04], [W * 0.78, H * 0.04], [W * 0.1, H * 0.56]], 'rgba(255,255,255,0.4)'); },
};

// ---------- frames, mirrors, clocks ----------
// framed picture on the wall: outer size w x h centred at (o.x, y). o: { x, f frame width, m mat width, dp depth, c frame colour, mat, ornate, res }
function picture(k, key, w, h, y, draw, o = {}) {
  const x = o.x ?? 0, f = o.f ?? 0.045, m = o.m ?? 0.05, dp = o.dp ?? 0.035, C = o.c ?? k.c1, MT = o.mat ?? k.c2, B = o.ornate ? k.boxS.bind(k) : k.box.bind(k);
  for (const s of [-1, 1]) { B(f, h, dp, x + (s * (w - f)) / 2, y, dp / 2, C); B(w - f * 2, f, dp, x, y + (s * (h - f)) / 2, dp / 2, C); }
  for (const s of [-1, 1]) { k.box(0.008, h - f * 2, dp * 0.7, x + s * (w / 2 - f - 0.004), y, dp * 0.35, tone(C, 0.76)); k.box(w - f * 2 - 0.016, 0.008, dp * 0.7, x, y + s * (h / 2 - f - 0.004), dp * 0.35, tone(C, 0.76)); }
  if (o.ornate) { const L = tone(C, 1.18);
    for (const sx of [-1, 1]) for (const sy of [-1, 1]) { k.sphS(f * 0.66, x + (sx * (w - f)) / 2, y + (sy * (h - f)) / 2, dp, L, 1, 1, 0.45, 10); k.sphS(f * 0.3, x + sx * ((w - f) / 2 - f * 0.9), y + (sy * (h - f)) / 2, dp, L, 1.4, 0.8, 0.5, 8); k.sphS(f * 0.3, x + (sx * (w - f)) / 2, y + sy * ((h - f) / 2 - f * 0.9), dp, L, 0.8, 1.4, 0.5, 8); }
    for (const s of [-1, 1]) { k.sphS(f * 0.5, x, y + (s * (h - f)) / 2, dp, L, 2.4, 0.9, 0.45, 10); k.sphS(f * 0.5, x + (s * (w - f)) / 2, y, dp, L, 0.9, 2.4, 0.45, 10); k.cylS(0.007, 0.007, h - 0.01, x + s * (w / 2 - 0.007), y, dp, L, 5); k.cylS(0.007, 0.007, w - 0.01, x, y + s * (h / 2 - 0.007), dp, L, 5, RZ(HP)); } }
  k.box(w - f * 2, h - f * 2, 0.01, x, y, 0.006, MT);
  return k.art(key, w - f * 2 - m * 2, h - f * 2 - m * 2, x, y, 0.0125, draw, { res: o.res ?? 256 });
}
// painted cut-out: like k.art, but only what is inside mask (a canvas path) is kept
function artCut(k, key, w, h, x, y, z, mask, draw, o = {}) {
  const m = k.art(key, w, h, x, y, z, (g, W, H) => { g.clearRect(0, 0, W, H); g.save(); g.beginPath(); mask(g, W, H); g.clip(); draw(g, W, H); g.restore(); }, o); m.material.alphaTest = 0.5; return m;
}
const mRound = (g, W, H) => g.ellipse(W / 2, H / 2, W / 2 - 1, H / 2 - 1, 0, 0, TAU);
const mArch = (g, W, H) => { g.moveTo(0, H); g.lineTo(0, W / 2); g.arc(W / 2, W / 2, W / 2, PI, TAU); g.lineTo(W, H); g.closePath(); };
// arched frame flat against the wall (z from 0 to dp): bottom at y0, total height h
function archFrame(k, w, h, y0, f, dp, c, shiny, x = 0, z = 0) {
  const sh = new THREE.Shape(), r = w / 2, yc = y0 + h - r; sh.moveTo(-r, y0); sh.lineTo(r, y0); sh.lineTo(r, yc); sh.absarc(0, yc, r, 0, PI, false); sh.lineTo(-r, y0);
  const ho = new THREE.Path(), ri = r - f; ho.moveTo(-ri, y0 + f); ho.lineTo(-ri, yc); ho.absarc(0, yc, ri, PI, 0, true); ho.lineTo(ri, y0 + f); ho.lineTo(-ri, y0 + f); sh.holes.push(ho);
  const g = new THREE.ExtrudeGeometry(sh, { depth: dp, bevelEnabled: false, curveSegments: 14 }); return shiny ? k.addS(g, T(x, 0, z), c) : k.add(g, T(x, 0, z), c);
}
// clock: painted face (radius R, facing +z) and three hands that really turn
function clockFace(k, key, x, y, z, R, paper = '#fbf4e2', ink = '#2a2a30') {
  return artCut(k, key, R * 2, R * 2, x, y, z, mRound, (g, W, H) => { g.fillStyle = paper; g.fillRect(0, 0, W, H); g.strokeStyle = ink; g.lineWidth = W * 0.012; g.beginPath(); g.arc(W / 2, H / 2, W * 0.46, 0, TAU); g.stroke(); g.lineWidth = W * 0.006; g.beginPath(); g.arc(W / 2, H / 2, W * 0.3, 0, TAU); g.stroke();
    for (let i = 0; i < 60; i++) { const a = (i / 60) * TAU, big = i % 5 === 0, q = i % 15 === 0; g.lineWidth = W * (q ? 0.034 : big ? 0.02 : 0.006); g.beginPath(); g.moveTo(W / 2 + Math.sin(a) * W * (q ? 0.33 : big ? 0.36 : 0.41), H / 2 - Math.cos(a) * W * (q ? 0.33 : big ? 0.36 : 0.41)); g.lineTo(W / 2 + Math.sin(a) * W * 0.44, H / 2 - Math.cos(a) * W * 0.44); g.stroke(); } }, { res: 128 });
}
function clockHands(k, x, y, z, R, c = INK, sec = true) {
  const hand = (w, l, col, dz) => part(k, (p) => p.box(w, l, 0.002, 0, l * 0.38, 0, col), x, y, z + dz);
  const hh = hand(R * 0.08, R * 0.62, c, 0.002), mh = hand(R * 0.055, R * 0.95, c, 0.004), sh = sec ? hand(R * 0.022, R * 1.0, 0xd8483c, 0.006) : null; k.cylS(R * 0.07, R * 0.07, 0.008, x, y, z + 0.006, METAL.latao, 10, RX(HP));
  k.tick((dt, t) => { const s = 36600 + t; if (sh) sh.rotation.z = (-(Math.floor(s) % 60) / 60) * TAU; mh.rotation.z = (-(s % 3600) / 3600) * TAU; hh.rotation.z = (-(s % 43200) / 43200) * TAU; });
}
const mirrorArt = (k, key, w, h, x, y, z, mask) => artCut(k, key, w, h, x, y, z, mask || ((g, W, H) => g.rect(0, 0, W, H)), PAINT.mirror, { res: 128 });

// ---------- pictures ----------
furn({ id: 'quadro_simples', name: 'Quadrinho de tulipas', cat: 'Quadros e parede', kind: 'wall', price: 45, lvl: 1, w: 0.4, d: 0.04, h: 0.5, cols: [WOOD.pinho, 0xfaf4e6], colN: ['Moldura', 'Passe-partout'], info: 'Um vasinho de tulipas para alegrar a parede.' }, (k) => {
  picture(k, 'p_tulipas', 0.4, 0.5, 1.55, PAINT.tulipas, { f: 0.03, m: 0.035 });
});

furn({ id: 'relogio_parede', name: 'Relógio de parede', cat: 'Quadros e parede', kind: 'wall', price: 80, lvl: 1, w: 0.36, d: 0.06, h: 0.36, cols: [0x4a8f8a, 0xfbf4e2], colN: ['Aro', 'Mostrador'], info: 'Tique-taque: os ponteiros andam de verdade.' }, (k) => {
  const y = 1.95, R = 0.18; k.cylS(R, R, 0.035, 0, y, 0.0175, k.c1, 28, RX(HP)); k.addS(new THREE.TorusGeometry(R - 0.012, 0.012, 6, 28), T(0, y, 0.036), tone(k.c1, 1.15));
  clockFace(k, 'clock:' + k.c2, 0, y, 0.0362, R - 0.02, css(k.c2)); clockHands(k, 0, y, 0.037, R - 0.035);
});

furn({ id: 'quadro_casinha', name: 'Quadro da casinha no campo', cat: 'Quadros e parede', kind: 'wall', price: 150, lvl: 2, w: 0.62, d: 0.04, h: 0.52, cols: [0xf4efe6, 0xfaf4e6], colN: ['Moldura', 'Passe-partout'], info: 'Uma casinha com fumaça na chaminé.' }, (k) => {
  picture(k, 'p_casinha', 0.62, 0.52, 1.55, PAINT.casinha, { f: 0.035, m: 0.04 });
});

furn({ id: 'quadro_girassois', name: 'Quadro de girassóis', cat: 'Quadros e parede', kind: 'wall', price: 180, lvl: 2, w: 0.7, d: 0.045, h: 0.9, cols: [WOOD.mel, 0xf6efe0], colN: ['Moldura', 'Passe-partout'], info: 'Pintado num domingo de sol.' }, (k) => {
  picture(k, 'p_girassois', 0.7, 0.9, 1.55, PAINT.girassois, { f: 0.05, m: 0.05, dp: 0.04, res: 320 });
});

furn({ id: 'porta_retratos_parede', name: 'Retratos da família', cat: 'Quadros e parede', kind: 'wall', price: 220, lvl: 2, w: 1.1, d: 0.035, h: 0.72, cols: [WOOD.nogueira, 0xfaf4e6], colN: ['Molduras', 'Passe-partout'], info: 'A vó, o tio, o gato: todo mundo na parede.' }, (k) => {
  const P = (key, o) => (g, W, H) => PAINT.retrato(g, W, H, o);
  picture(k, 'ret1', 0.34, 0.42, 1.68, P('ret1', { skin: '#f0c8a0', hair: '#b8b4b0', shirt: '#7a9ac0', bg: '#e8dcc4', style: 2 }), { x: -0.36, f: 0.03, m: 0.03, dp: 0.03 });
  picture(k, 'ret2', 0.3, 0.3, 1.78, P('ret2', { skin: '#c8946a', hair: '#2a2220', shirt: '#d8785a', bg: '#cfe0d4', style: 0 }), { x: 0.02, f: 0.028, m: 0.025, dp: 0.03, c: tone(k.c1, 1.3) });
  picture(k, 'ret3', 0.34, 0.44, 1.62, P('ret3', { skin: '#f4d0b0', hair: '#8a4a2a', shirt: '#8fae6a', bg: '#f1d9c8', style: 1 }), { x: 0.38, f: 0.03, m: 0.03, dp: 0.03 });
  picture(k, 'ret4', 0.26, 0.22, 1.32, PAINT.gato, { x: -0.12, f: 0.025, m: 0.0, dp: 0.03, c: tone(k.c1, 0.8) });
  picture(k, 'ret5', 0.24, 0.26, 1.42, P('ret5', { skin: '#e8b890', hair: '#e8c468', shirt: '#f0a0b0', bg: '#d4dcec', style: 1 }), { x: 0.14, f: 0.025, m: 0.02, dp: 0.03, c: tone(k.c1, 1.3) });
  picture(k, 'ret6', 0.2, 0.2, 1.36, PAINT.passaro, { x: -0.42, f: 0.022, m: 0.0, dp: 0.03, c: tone(k.c1, 1.3) });
});

furn({ id: 'quadro_gato', name: 'Retrato do gato', cat: 'Quadros e parede', kind: 'wall', price: 280, lvl: 3, w: 0.5, d: 0.045, h: 0.6, cols: [WOOD.ebano, 0xe6c05a], colN: ['Moldura', 'Filete'], info: 'Sua majestade, o bichano, de gravata.' }, (k) => {
  picture(k, 'p_gato', 0.5, 0.6, 1.55, PAINT.gato, { f: 0.045, m: 0.012, dp: 0.04, res: 320 });
});

furn({ id: 'quadro_lavanda', name: 'Quadro campo de lavanda', cat: 'Quadros e parede', kind: 'wall', price: 320, lvl: 4, w: 1.0, d: 0.045, h: 0.7, cols: [0xf4efe6, 0xf3ead8], colN: ['Moldura', 'Passe-partout'], info: 'Quase dá para sentir o perfume.' }, (k) => {
  picture(k, 'p_lavanda', 1.0, 0.7, 1.55, PAINT.lavanda, { f: 0.04, m: 0.045, dp: 0.04, res: 384 });
});

furn({ id: 'quadro_marinha', name: 'Marinha com veleiro', cat: 'Quadros e parede', kind: 'wall', price: 450, lvl: 5, w: 1.1, d: 0.045, h: 0.76, cols: [0xfbf8f0, 0x5a86a8], colN: ['Moldura', 'Passe-partout'], info: 'Um veleiro, um farol e cheiro de maresia.' }, (k) => {
  picture(k, 'p_marinha', 1.1, 0.76, 1.55, PAINT.marinha, { f: 0.045, m: 0.03, dp: 0.04, res: 384 });
});

furn({ id: 'quadro_por_do_sol', name: 'Pôr do sol na praia', cat: 'Quadros e parede', kind: 'wall', price: 520, lvl: 5, w: 1.2, d: 0.04, h: 0.6, cols: [0x2a2a30, 0xfaf4e6], colN: ['Moldura', 'Fundo'], info: 'Coqueiros e um céu cor de manga.' }, (k) => {
  picture(k, 'p_pordosol', 1.2, 0.6, 1.6, PAINT.por_do_sol, { f: 0.022, m: 0, dp: 0.035, res: 384 });
});

furn({ id: 'quadro_montanhas', name: 'Quadro das montanhas', cat: 'Quadros e parede', kind: 'wall', price: 600, lvl: 6, w: 0.9, d: 0.05, h: 1.2, cols: [WOOD.carvalho, 0xf6f0e2], colN: ['Moldura', 'Passe-partout'], info: 'Picos nevados e um lago de espelho.' }, (k) => {
  picture(k, 'p_montanhas', 0.9, 1.2, 1.55, PAINT.montanhas, { f: 0.055, m: 0.05, dp: 0.045, res: 384 });
});

furn({ id: 'quadro_borboletas', name: 'Quadro de borboletas', cat: 'Quadros e parede', kind: 'wall', price: 680, lvl: 6, w: 0.84, d: 0.07, h: 0.64, cols: [WOOD.nogueira, 0xf6eeda], colN: ['Moldura', 'Fundo'], info: 'Seis borboletas de papel, nenhuma de verdade.' }, (k) => {
  picture(k, 'p_borboletas', 0.84, 0.64, 1.55, PAINT.borboletas, { f: 0.04, m: 0.0, dp: 0.065, res: 384 });
  k.glass(new THREE.BoxGeometry(0.76, 0.56, 0.004), T(0, 1.55, 0.058), 0xe8f4f8, 0.16);
});

furn({ id: 'quadro_natureza_morta', name: 'Natureza-morta com frutas', cat: 'Quadros e parede', kind: 'wall', price: 750, lvl: 7, w: 0.88, d: 0.06, h: 0.72, cols: [METAL.ouro, 0x3a2a20], colN: ['Moldura', 'Fundo'], info: 'Frutas tão bonitas que dá vontade de morder.' }, (k) => {
  picture(k, 'p_frutas', 0.86, 0.7, 1.55, PAINT.frutas, { f: 0.06, m: 0, dp: 0.045, res: 384, ornate: true });
});

furn({ id: 'mapa_mundi', name: 'Mapa-múndi antigo', cat: 'Quadros e parede', kind: 'wall', price: 850, lvl: 7, w: 1.42, d: 0.05, h: 0.95, cols: [WOOD.nogueira, METAL.latao], colN: ['Varetas', 'Ponteiras'], info: 'Para sonhar com jardins de outros continentes.' }, (k) => {
  const y = 1.5; k.box(1.26, 0.8, 0.004, 0, y, 0.012, 0xd8bc80); k.art('p_mapa', 1.24, 0.78, 0, y, 0.0145, PAINT.mapa, { res: 512 });
  for (const s of [-1, 1]) { k.cyl(0.018, 0.018, 1.34, 0, y + s * 0.41, 0.02, k.c1, 10, RZ(HP)); for (const sx of [-1, 1]) k.sphS(0.026, sx * 0.68, y + s * 0.41, 0.02, k.c2, 1, 1, 1, 10); }
  rod(k, [-0.5, y + 0.42, 0.02], [0, y + 0.5, 0.012], 0.004, 0x8a6a4a, 4); rod(k, [0.5, y + 0.42, 0.02], [0, y + 0.5, 0.012], 0.004, 0x8a6a4a, 4); k.sphS(0.012, 0, y + 0.5, 0.012, k.c2, 1, 1, 1, 8);
});

furn({ id: 'quadros_botanica_trio', name: 'Trio de gravuras botânicas', cat: 'Quadros e parede', kind: 'wall', price: 900, lvl: 8, w: 1.46, d: 0.04, h: 0.6, cols: [0x2f3a30, 0xfaf6ea], colN: ['Molduras', 'Passe-partout'], info: 'Samambaia, costela-de-adão e um raminho em flor.' }, (k) => {
  [0, 1, 2].forEach((i) => picture(k, 'p_bot' + i, 0.44, 0.6, 1.55, (g, W, H) => PAINT.botanica(g, W, H, i), { x: (i - 1) * 0.51, f: 0.025, m: 0.04, dp: 0.035, res: 320 }));
});

furn({ id: 'galeria_seis', name: 'Galeria de seis quadrinhos', cat: 'Quadros e parede', kind: 'wall', price: 1100, lvl: 8, w: 1.5, d: 0.04, h: 1.0, cols: [WOOD.mel, 0xfaf4e6], colN: ['Molduras', 'Passe-partout'], info: 'Uma parede inteira de miudezas queridas.' }, (k) => {
  const C = [k.c1, tone(k.c1, 0.6), 0xf4efe6];
  [['g_tul', PAINT.tulipas, -0.54, 1.8, 0.36, 0.44], ['g_lua', PAINT.lua, -0.1, 1.84, 0.36, 0.36], ['g_cas', PAINT.casinha, 0.44, 1.8, 0.54, 0.44], ['g_pas', PAINT.passaro, -0.5, 1.3, 0.44, 0.4], ['g_fol', PAINT.folha, -0.02, 1.33, 0.36, 0.48], ['g_gat', PAINT.gato, 0.47, 1.28, 0.42, 0.44]].forEach(([key, p, x, y, w, h], i) => picture(k, key, w, h, y, p, { x, f: 0.028, m: i % 2 ? 0.03 : 0.045, dp: 0.035, c: C[i % 3] }));
});

furn({ id: 'quadro_abstrato', name: 'Quadro abstrato colorido', cat: 'Quadros e parede', kind: 'wall', price: 1200, lvl: 9, w: 1.0, d: 0.05, h: 1.0, cols: [WOOD.pinho, 0x2a2a30], colN: ['Moldura', 'Fundo'], info: 'Ninguém sabe o que é, mas todo mundo gosta.' }, (k) => {
  picture(k, 'p_abstrato', 1.0, 1.0, 1.55, PAINT.abstrato, { f: 0.018, m: 0.012, dp: 0.05, res: 384 });
});

furn({ id: 'quadro_oval_antigo', name: 'Quadro oval antigo', cat: 'Quadros e parede', kind: 'wall', price: 1600, lvl: 10, w: 0.64, d: 0.09, h: 0.85, cols: [METAL.ouro, 0x3a2a20], colN: ['Moldura', 'Fundo'], info: 'Rosas de outro século numa moldura dourada.' }, (k) => {
  const y = 1.55, C = k.c1, M = (g) => mul(T(0, y, 0.036), S(1, 1.3, 1), g || T(0, 0, 0));
  k.addS(new THREE.TorusGeometry(0.27, 0.036, 8, 36), M(), C); k.addS(new THREE.TorusGeometry(0.236, 0.012, 5, 36), mul(T(0, y, 0.058), S(1, 1.3, 1)), tone(C, 1.2)); k.addS(new THREE.TorusGeometry(0.305, 0.01, 5, 36), mul(T(0, y, 0.03), S(1, 1.28, 1)), tone(C, 1.2));
  k.add(new THREE.CylinderGeometry(0.25, 0.25, 0.008, 32), mul(T(0, y, 0.008), S(1, 1.3, 1), RX(HP)), k.c2); artCut(k, 'p_rosas', 0.48, 0.624, 0, y, 0.0135, mRound, PAINT.rosas, { res: 320 });
  for (let i = 0; i < 16; i++) { const a = (i / 16) * TAU; k.sphS(0.014, Math.cos(a) * 0.272, y + Math.sin(a) * 0.272 * 1.3, 0.072, tone(C, 1.25), 1, 1, 0.7, 6); }
  k.sphS(0.04, 0, y + 0.4, 0.045, C, 1, 0.9, 0.5, 10); for (const s of [-1, 1]) { k.sphS(0.05, s * 0.07, y + 0.405, 0.043, C, 1.2, 0.6, 0.45, 10); k.sphS(0.03, s * 0.13, y + 0.385, 0.04, tone(C, 1.2), 1.3, 0.6, 0.45, 8); } k.sphS(0.03, 0, y - 0.385, 0.045, C, 1.6, 0.7, 0.5, 10);
});

furn({ id: 'painel_horizontal', name: 'Grande painel do vale florido', cat: 'Quadros e parede', kind: 'wall', price: 4800, lvl: 14, w: 1.84, d: 0.08, h: 0.92, cols: [METAL.ouro, 0x3a2a20], colN: ['Moldura', 'Fundo'], info: 'O vale inteiro, do rio às montanhas, sobre o sofá.' }, (k) => {
  picture(k, 'p_panorama', 1.8, 0.9, 1.65, PAINT.panorama, { f: 0.07, m: 0, dp: 0.05, res: 640, ornate: true });
});

furn({ id: 'quadro_monet', name: 'O lago das ninfeias', cat: 'Quadros e parede', kind: 'wall', price: 12000, lvl: 18, w: 1.54, d: 0.2, h: 1.33, cols: [METAL.ouro, 0x3a2a20], colN: ['Moldura', 'Fundo'], info: 'Obra-prima impressionista, com luz própria de museu.' }, (k) => {
  const y = 1.55, C = k.c1; picture(k, 'p_monet', 1.5, 1.16, y, PAINT.monet, { f: 0.1, m: 0, dp: 0.06, res: 640, ornate: true });
  for (const s of [-1, 1]) { k.boxS(0.03, 1.0, 0.012, s * 0.675, y, 0.066, tone(C, 1.2)); k.boxS(1.34, 0.03, 0.012, 0, y + s * 0.505, 0.066, tone(C, 1.2)); }
  for (let i = 0; i < 9; i++) for (const s of [-1, 1]) k.sphS(0.022, -0.6 + i * 0.15, y + s * 0.545, 0.062, tone(C, 1.25), 1.5, 0.8, 0.5, 6);
  k.sphS(0.07, 0, y + 0.6, 0.05, C, 1.6, 0.8, 0.5, 12); for (const s of [-1, 1]) k.sphS(0.05, s * 0.14, y + 0.59, 0.05, tone(C, 1.2), 1.5, 0.6, 0.5, 10);
  // museum picture light
  for (const s of [-1, 1]) tb(k, [[s * 0.25, y + 0.6, 0.03], [s * 0.25, y + 0.69, 0.07], [s * 0.25, y + 0.7, 0.15]], 0.008, C, { shiny: true, n: 8 });
  k.cylS(0.03, 0.03, 0.8, 0, y + 0.7, 0.16, C, 12, RZ(HP)); k.glow(new THREE.BoxGeometry(0.74, 0.012, 0.03), WARM, 2.6, { at: [0, y + 0.672, 0.16] }); k.box(0.1, 0.012, 0.03, 0, y + 0.02, 0.066, 0xf6ecd0);
});

// ---------- mirrors, clocks, windows ----------
furn({ id: 'espelho_corpo', name: 'Espelho de corpo inteiro', cat: 'Quadros e parede', kind: 'wall', price: 700, lvl: 6, w: 0.64, d: 0.05, h: 1.72, cols: [WOOD.carvalho, 0xdcebf0], colN: ['Moldura', 'Espelho'], info: 'Para conferir o chapéu antes de ir ao jardim.' }, (k) => {
  archFrame(k, 0.64, 1.72, 0.14, 0.045, 0.045, k.c1); archFrame(k, 0.56, 1.64, 0.18, 0.012, 0.05, tone(k.c1, 1.2));
  k.box(0.56, 1.3, 0.012, 0, 0.84, 0.006, tone(k.c2, 0.8)); mirrorArt(k, 'mirror_arch', 0.555, 1.635, 0, 0.9975, 0.02, mArch);
});

furn({ id: 'espelho_sol', name: 'Espelho sol', cat: 'Quadros e parede', kind: 'wall', price: 1300, lvl: 9, w: 0.9, d: 0.06, h: 0.9, cols: [METAL.ouro, 0xdcebf0], colN: ['Raios', 'Espelho'], info: 'Um sol dourado que ilumina a sala o dia todo.' }, (k) => {
  const y = 1.6, C = k.c1, R = 0.19;
  for (let i = 0; i < 32; i++) { const a = (i / 32) * TAU, L = i % 2 ? 0.14 : 0.24 - (i % 4 ? 0 : -0.0); k.addS(new THREE.ConeGeometry(i % 2 ? 0.012 : 0.02, L, 4), mul(T(0, y, 0.014), RZ(-a), T(0, R + 0.015 + L / 2, 0), S(1, 1, 0.5)), i % 2 ? tone(C, 1.2) : C); if (i % 2) k.sphS(0.012, Math.sin(a) * (R + 0.165), y + Math.cos(a) * (R + 0.165), 0.014, tone(C, 1.2), 1, 1, 0.6, 6); }
  k.addS(new THREE.TorusGeometry(R + 0.012, 0.022, 8, 32), T(0, y, 0.022), C); k.addS(new THREE.TorusGeometry(R + 0.04, 0.008, 5, 32), T(0, y, 0.016), tone(C, 1.2)); k.cyl(R + 0.01, R + 0.01, 0.014, 0, y, 0.007, tone(k.c2, 0.8), 28, RX(HP));
  mirrorArt(k, 'mirror_round', R * 2, R * 2, 0, y, 0.0225, mRound);
});

furn({ id: 'relogio_cuco', name: 'Relógio cuco', cat: 'Quadros e parede', kind: 'wall', price: 1500, lvl: 10, w: 0.4, d: 0.2, h: 1.15, cols: [WOOD.nogueira, 0x4a6a3a], colN: ['Madeira', 'Folhas entalhadas'], info: 'De tempos em tempos o passarinho vem dar oi.' }, (k) => {
  const W = k.c1, L = k.c2, y = 1.72;
  k.box(0.26, 0.3, 0.13, 0, y, 0.065, W); k.box(0.22, 0.26, 0.008, 0, y, 0.134, tone(W, 1.15));
  plate(k, [[-0.13, 0.15], [0.13, 0.15], [0, 0.29]], 0.13, 0, y, 0.065, W); plate(k, [[-0.1, 0.16], [0.1, 0.16], [0, 0.265]], 0.008, 0, y, 0.136, tone(W, 1.15));
  for (const s of [-1, 1]) k.box(0.25, 0.022, 0.19, s * 0.085, y + 0.235, 0.095, tone(W, 0.65), RZ(-s * 0.82)); k.box(0.03, 0.03, 0.2, 0, y + 0.325, 0.1, tone(W, 0.65));
  for (const [x, yy, a, s] of [[-0.14, 0.02, 0.5, 1], [0.14, 0.02, -0.5, 1], [-0.13, -0.11, 1.0, 0.85], [0.13, -0.11, -1.0, 0.85], [-0.07, -0.16, 1.4, 0.7], [0.07, -0.16, -1.4, 0.7], [0, 0.345, 0, 0.9]]) k.add(new THREE.SphereGeometry(0.05 * s, 8, 6), mul(T(x, y + yy, 0.14), RZ(a), S(0.55, 1.2, 0.3)), s < 0.9 ? tone(L, 1.15) : L);
  clockFace(k, 'cuco_face', 0, y - 0.03, 0.1395, 0.075, '#f6e8c8', '#3a2418'); ringS(k, 0.078, 0.007, 0, y - 0.03, 0.14, METAL.latao, T(0, 0, 0)); clockHands(k, 0, y - 0.03, 0.1405, 0.062, 0x3a2418, false);
  k.box(0.07, 0.07, 0.006, 0, y + 0.115, 0.138, tone(W, 0.6)); k.box(0.012, 0.075, 0.012, -0.041, y + 0.115, 0.142, tone(W, 1.2));
  const birdie = part(k, (p) => { p.sph(0.022, 0, 0, 0, 0xf2c84a, 1, 1, 1.2, 8); p.sph(0.016, 0, 0.016, 0.02, 0xf2c84a, 1, 1, 1, 8); p.cone(0.007, 0.02, 0, 0.014, 0.042, 0xe8743c, 6, RX(HP)); p.sph(0.004, 0.008, 0.021, 0.032, INK, 1, 1, 1, 5); p.sph(0.004, -0.008, 0.021, 0.032, INK, 1, 1, 1, 5); p.box(0.04, 0.006, 0.07, 0, -0.024, -0.02, tone(W, 0.8)); }, 0, y + 0.11, 0.1);
  const pend = part(k, (p) => { p.box(0.008, 0.34, 0.004, 0, -0.17, 0, tone(W, 0.7)); p.add(new THREE.SphereGeometry(0.04, 10, 8), mul(T(0, -0.34, 0), S(0.8, 1.25, 0.25)), L); p.addS(new THREE.SphereGeometry(0.012, 8, 6), T(0, -0.34, 0.012), METAL.latao); }, 0, y - 0.15, 0.06);
  k.tick((dt, t) => { pend.rotation.z = 0.22 * Math.sin(t * 3.4); const c = t % 14, o = c < 0.4 ? c / 0.4 : c < 2.2 ? 1 : c < 2.6 ? 1 - (c - 2.2) / 0.4 : 0; birdie.position.z = 0.1 + o * 0.085; birdie.rotation.x = o * 0.25 * Math.sin(t * 12); });
  for (const [x, len] of [[-0.07, 0.42], [0.07, 0.5]]) { k.cyl(0.002, 0.002, len, x, y - 0.15 - len / 2, 0.1, METAL.latao, 4); k.latheS([[0.001, 0], [0.014, 0.01], [0.022, 0.04], [0.018, 0.08], [0.008, 0.1], [0.001, 0.105]], x, y - 0.15 - len - 0.1, 0.1, tone(W, 0.55), 8); }
});

furn({ id: 'vitral_colorido', name: 'Janela de vitral', cat: 'Quadros e parede', kind: 'wall', price: 5600, lvl: 15, w: 0.96, d: 0.08, h: 1.5, cols: [WOOD.mogno, 0x7fc8e8], colN: ['Caixilho', 'Céu do vitral'], info: 'Um jardim de vidro que acende a sala de cores.' }, (k) => {
  const y0 = 0.95, w = 0.96, h = 1.5; archFrame(k, w, h, y0, 0.06, 0.07, k.c1); archFrame(k, w - 0.1, h - 0.1, y0 + 0.05, 0.014, 0.078, tone(k.c1, 1.25)); k.box(1.0 - 0.04, 0.04, 0.08, 0, y0 + 0.0, 0.04, tone(k.c1, 0.85));
  k.box(0.84, 1.0, 0.01, 0, y0 + 0.56, 0.005, 0x2a2a30);
  artCut(k, 'vitral:' + k.c2, w - 0.11, h - 0.11, 0, y0 + h / 2, 0.03, mArch, (g, W, H) => { const sky = css(k.c2), lead = '#22201e';
    g.fillStyle = grad(g, 0, 0, 0, H, [[0, css(tone(k.c2, 0.75))], [0.6, sky], [1, css(tone(k.c2, 1.4))]]); g.fillRect(0, 0, W, H);
    g.lineJoin = 'round'; const seg = (f) => { f(); g.strokeStyle = lead; g.lineWidth = W * 0.014; g.stroke(); };
    // sun and rays
    for (let i = 0; i < 9; i++) { const a = PI + (i / 9) * PI, a2 = PI + ((i + 1) / 9) * PI; g.fillStyle = i % 2 ? '#ffd24a' : '#ffb03a'; seg(() => { g.beginPath(); g.moveTo(W / 2, W * 0.5); g.lineTo(W / 2 + Math.cos(a) * W, W * 0.5 + Math.sin(a) * W); g.lineTo(W / 2 + Math.cos(a2) * W, W * 0.5 + Math.sin(a2) * W); g.closePath(); g.fill(); }); }
    g.fillStyle = '#fff0a0'; seg(() => { g.beginPath(); g.arc(W / 2, W * 0.5, W * 0.2, 0, TAU); g.fill(); });
    // hills
    g.fillStyle = '#6ab86a'; seg(() => { g.beginPath(); g.moveTo(0, H * 0.62); g.quadraticCurveTo(W * 0.3, H * 0.48, W * 0.62, H * 0.6); g.lineTo(W * 0.62, H); g.lineTo(0, H); g.closePath(); g.fill(); }); g.fillStyle = '#3f9a5a'; seg(() => { g.beginPath(); g.moveTo(W * 0.3, H * 0.66); g.quadraticCurveTo(W * 0.7, H * 0.5, W, H * 0.6); g.lineTo(W, H); g.lineTo(W * 0.3, H); g.closePath(); g.fill(); });
    g.fillStyle = '#2f7a4a'; seg(() => { g.beginPath(); g.rect(0, H * 0.84, W, H * 0.16); g.fill(); });
    // tulips
    for (const [x, y, c, s] of [[0.2, 0.66, '#e8405a', 1], [0.5, 0.58, '#f6c22e', 1.15], [0.8, 0.66, '#c060c8', 1], [0.35, 0.78, '#ff8a5a', 0.8], [0.66, 0.78, '#f080a8', 0.8]]) { g.strokeStyle = lead; g.lineWidth = W * 0.03; g.beginPath(); g.moveTo(W * x, H * y); g.lineTo(W * x, H * 0.95); g.stroke(); g.strokeStyle = '#2f8a3a'; g.lineWidth = W * 0.014; g.stroke();
      for (const sx of [-1, 1]) { g.fillStyle = '#4aa84a'; seg(() => { g.beginPath(); g.moveTo(W * x, H * 0.93); g.quadraticCurveTo(W * (x + sx * 0.12 * s), H * (y + 0.12), W * (x + sx * 0.1 * s), H * (y + 0.06)); g.quadraticCurveTo(W * (x + sx * 0.02), H * (y + 0.16), W * x, H * 0.93); g.fill(); }); }
      g.fillStyle = c; seg(() => { g.beginPath(); g.moveTo(W * (x - 0.07 * s), H * (y - 0.07 * s)); g.quadraticCurveTo(W * (x - 0.09 * s), H * (y + 0.02), W * x, H * (y + 0.03)); g.quadraticCurveTo(W * (x + 0.09 * s), H * (y + 0.02), W * (x + 0.07 * s), H * (y - 0.07 * s)); g.lineTo(W * (x + 0.03 * s), H * (y - 0.035 * s)); g.lineTo(W * x, H * (y - 0.085 * s)); g.lineTo(W * (x - 0.03 * s), H * (y - 0.035 * s)); g.closePath(); g.fill(); }); }
    // lead grid
    g.strokeStyle = lead; g.lineWidth = W * 0.012; for (const yy of [0.3, 0.52]) { g.beginPath(); g.moveTo(0, H * yy); g.lineTo(W, H * yy); g.stroke(); } for (const xx of [0.5]) { g.beginPath(); g.moveTo(W * xx, 0); g.lineTo(W * xx, H * 0.3); g.stroke(); } g.lineWidth = W * 0.03; g.strokeRect(0, 0, W, H); }, { glow: 0.85, day: 0.6, res: 512 });
  
});

// ---------- shelves and other wall things ----------
furn({ id: 'prateleira_simples', name: 'Prateleira simples', cat: 'Quadros e parede', kind: 'wall', price: 70, lvl: 1, w: 0.8, d: 0.22, h: 0.2, surf: 1.415, cols: [WOOD.pinho, 0x3c3c40], colN: ['Tábua', 'Mãos-francesas'], info: 'Uma tábua e duas mãos-francesas: cabe um vasinho.' }, (k) => {
  k.rbox(0.8, 0.03, 0.22, 0, 1.4, 0.11, k.c1, 0.006);
  for (const s of [-1, 1]) { k.box(0.02, 0.18, 0.012, s * 0.28, 1.3, 0.006, k.c2); k.box(0.02, 0.012, 0.18, s * 0.28, 1.379, 0.09, k.c2); tb(k, [[s * 0.28, 1.225, 0.012], [s * 0.28, 1.3, 0.07], [s * 0.28, 1.37, 0.17]], 0.006, k.c2, { n: 8 }); }
});

furn({ id: 'prateleira_dupla', name: 'Prateleira dupla de corda', cat: 'Quadros e parede', kind: 'wall', price: 240, lvl: 3, w: 0.9, d: 0.22, h: 0.83, surf: 1.663, cols: [WOOD.mel, 0xd9c8a0], colN: ['Tábuas', 'Cordas'], info: 'Duas tábuas penduradas em corda de sisal.' }, (k) => {
  for (const y of [1.25, 1.65]) k.rbox(0.9, 0.026, 0.2, 0, y, 0.12, k.c1, 0.006);
  for (const s of [-1, 1]) { k.cylS(0.012, 0.012, 0.05, s * 0.38, 2.02, 0.025, METAL.latao, 8, RX(HP)); k.sphS(0.016, s * 0.38, 2.02, 0.05, METAL.latao, 1, 1, 1, 8);
    for (const z of [0.045, 0.195]) { rod(k, [s * 0.38, 2.02, 0.04], [s * 0.38, 1.66, z], 0.006, k.c2, 5); rod(k, [s * 0.38, 1.66, z], [s * 0.38, 1.21, z], 0.006, k.c2, 5); k.sph(0.013, s * 0.38, 1.225, z, tone(k.c2, 0.85), 1, 1, 1, 6); k.sph(0.013, s * 0.38, 1.625, z, tone(k.c2, 0.85), 1, 1, 1, 6); } }
});

furn({ id: 'macrame_parede', name: 'Tapeçaria de macramê', cat: 'Quadros e parede', kind: 'wall', price: 260, lvl: 3, w: 0.76, d: 0.05, h: 1.12, cols: [0xf3ead6, WOOD.mel], colN: ['Fios', 'Vareta e contas'], info: 'Nós e franjas feitos com paciência de artesã.' }, (k) => {
  const C = k.c1, yT = 1.95;
  k.cyl(0.014, 0.014, 0.74, 0, yT, 0.02, k.c2, 8, RZ(HP)); rod(k, [-0.33, yT, 0.02], [0, yT + 0.13, 0.01], 0.003, C, 4); rod(k, [0.33, yT, 0.02], [0, yT + 0.13, 0.01], 0.003, C, 4); k.sphS(0.01, 0, yT + 0.13, 0.01, METAL.latao, 1, 1, 1, 6);
  const n = 25; for (let i = 0; i < n; i++) { const x = -0.3 + i * (0.6 / (n - 1)), a = Math.abs(x) / 0.3, len = 0.98 - a * 0.5 - (i % 2) * 0.03; k.box(0.016, len, 0.008, x, yT - len / 2, 0.02 + (i % 2) * 0.004, i % 2 ? tone(C, 0.93) : C); k.sph(0.012, x, yT, 0.03, C, 1, 1.3, 1, 5); }
  for (const [y0, dy] of [[yT - 0.1, 0.22], [yT - 0.24, 0.22], [yT - 0.5, 0.3]]) for (const s of [-1, 1]) { rod(k, [s * 0.3, y0, 0.03], [0, y0 - dy, 0.03], 0.011, tone(C, 1.1), 5); for (let j = 0; j <= 6; j++) k.sph(0.014, s * 0.3 * (1 - j / 6), y0 - dy * (j / 6), 0.034, tone(C, 0.9), 1, 1, 1, 5); }
  for (const [x, y] of [[-0.15, yT - 0.62], [0.15, yT - 0.62], [0, yT - 0.86], [-0.075, yT - 0.74], [0.075, yT - 0.74]]) k.sph(0.018, x, y, 0.03, k.c2, 1, 1.2, 1, 8);
});

furn({ id: 'guirlanda_flores_secas', name: 'Guirlanda de flores secas', cat: 'Quadros e parede', kind: 'wall', price: 190, lvl: 2, w: 0.56, d: 0.1, h: 0.66, cols: [0xd98a8a, 0x8a6a4a], colN: ['Flores e laço', 'Galhos'], info: 'Lavanda, sempre-vivas e um laço de fita.' }, (k) => {
  const y = 1.7, R = 0.2, r = rnd(23);
  k.add(new THREE.TorusGeometry(R, 0.022, 5, 24), T(0, y, 0.025), k.c2); k.add(new THREE.TorusGeometry(R + 0.012, 0.012, 4, 24), mul(T(0, y, 0.03), RZ(0.3)), tone(k.c2, 0.8));
  for (let i = 0; i < 40; i++) { const a = (i / 40) * TAU + r() * 0.1, rr = R + (r() - 0.5) * 0.05, x = Math.cos(a) * rr, yy = y + Math.sin(a) * rr, t = i % 5;
    if (t < 2) k.add(new THREE.SphereGeometry(0.05, 6, 4), mul(T(x, yy, 0.045), RZ(a + (t ? 0.9 : -0.9)), S(1.1, 0.4, 0.25)), [0x8fa67a, 0x7a946a][t]);
    else if (t === 2) { k.sph(0.03 + r() * 0.012, x, yy, 0.055, i % 2 ? k.c1 : tone(k.c1, 1.3), 1, 1, 0.6, 7); k.sph(0.011, x, yy, 0.072, 0xf2d58a, 1, 1, 1, 5); }
    else if (t === 3) for (let j = 0; j < 3; j++) k.sph(0.014, x + Math.cos(a + 1.57) * (j - 1) * 0.024, yy + Math.sin(a + 1.57) * (j - 1) * 0.024, 0.058, [0xa890c8, 0xf3ead6][i % 2], 1, 1, 1, 5);
    else k.sph(0.022, x, yy, 0.058, 0xf1e2c4, 1, 1, 0.7, 6); }
  for (const s of [-1, 1]) { k.rbox(0.11, 0.07, 0.02, s * 0.06, y - R - 0.01, 0.07, k.c1, 0.009, RZ(s * 0.35)); k.box(0.04, 0.16, 0.006, s * 0.04, y - R - 0.1, 0.066, tone(k.c1, 0.9), RZ(s * 0.25)); } k.sph(0.022, 0, y - R - 0.01, 0.078, tone(k.c1, 0.85), 1, 1, 0.8, 8);
});

furn({ id: 'cabideiro_chapeus', name: 'Cabideiro com chapéus', cat: 'Quadros e parede', kind: 'wall', price: 300, lvl: 3, w: 1.0, d: 0.3, h: 0.6, cols: [WOOD.carvalho, 0xe2c88a], colN: ['Madeira', 'Chapéu de palha'], info: 'O chapéu de palha sempre à mão para o sol do jardim.' }, (k) => {
  const y = 1.72, W = k.c1;
  k.rbox(1.0, 0.1, 0.025, 0, y, 0.0125, W, 0.01); const px = [-0.32, -0.11, 0.11, 0.33]; for (const x of px) { k.cyl(0.012, 0.014, 0.07, x, y + 0.012, 0.055, tone(W, 0.85), 8, RX(HP - 0.25)); k.sph(0.02, x, y + 0.022, 0.092, tone(W, 0.85), 1, 1, 1, 8); }
  // straw hat hanging by its brim
  const HM = mul(T(-0.32, y - 0.11, 0.1), RX(HP - 0.12)); k.add(LG([[0.001, -0.004], [0.09, -0.004], [0.175, -0.006], [0.175, 0], [0.092, 0.01], [0.09, 0.06], [0.07, 0.095], [0.001, 0.1]], 20), HM, k.c2); k.add(new THREE.CylinderGeometry(0.094, 0.094, 0.03, 20), mul(HM, T(0, 0.025, 0)), 0xc2554a);
  // scarf
  k.rbox(0.07, 0.4, 0.03, -0.13, y - 0.2, 0.07, 0x6a9ab8, 0.012, RZ(0.04)); k.rbox(0.07, 0.3, 0.03, -0.085, y - 0.16, 0.085, 0x7fb0cc, 0.012, RZ(-0.05)); k.rbox(0.1, 0.05, 0.05, -0.11, y + 0.005, 0.07, 0x6a9ab8, 0.02); for (let i = 0; i < 4; i++) k.box(0.008, 0.035, 0.004, -0.155 + i * 0.018, y - 0.415, 0.07, 0xf3ead6);
  // canvas bag
  k.rbox(0.26, 0.28, 0.07, 0.11, y - 0.36, 0.06, 0xe9dcc0, 0.02); for (const s of [-1, 1]) rod(k, [0.11 + s * 0.08, y - 0.23, 0.06], [0.11, y + 0.02, 0.085], 0.006, 0xc9b490, 5); k.sph(0.035, 0.11, y - 0.36, 0.096, 0x6aa85a, 1.2, 1, 0.12, 8); k.sph(0.016, 0.11, y - 0.36, 0.098, 0xf2c84a, 1, 1, 0.3, 6);
  // felt hat
  const H2 = mul(T(0.33, y - 0.1, 0.1), RX(HP - 0.1)); k.add(LG([[0.001, -0.004], [0.15, -0.004], [0.15, 0.004], [0.082, 0.01], [0.08, 0.05], [0.06, 0.088], [0.001, 0.09]], 18), H2, 0x6a4a3a); k.add(new THREE.CylinderGeometry(0.084, 0.084, 0.022, 18), mul(H2, T(0, 0.022, 0)), 0x2a2a30);
});

function wallPlate(k, x, y, R, key, draw, c) {
  k.addS(LG([[0.001, 0], [R * 0.55, 0], [R * 0.62, 0.005], [R, 0.018], [R, 0.024], [R * 0.6, 0.011], [0.001, 0.011]], 22), mul(T(x, y, 0.004), RX(HP)), c);
  artCut(k, key, R * 1.96, R * 1.96, x, y, 0.029, mRound, draw, { res: 128 });
}
furn({ id: 'pratos_decorativos', name: 'Pratos decorativos', cat: 'Quadros e parede', kind: 'wall', price: 340, lvl: 4, w: 0.9, d: 0.04, h: 0.74, cols: [0xfbf8f0, 0x3f6aa8], colN: ['Louça', 'Pintura'], info: 'A louça boa da bisavó virou enfeite.' }, (k) => {
  const A = css(k.c1), B = css(k.c2), L = css(tone(k.c2, 1.5)), key = (n) => `prato${n}:${k.c1}:${k.c2}`, base = (g, W) => { g.fillStyle = A; g.fillRect(0, 0, W, W); g.strokeStyle = B; g.lineWidth = W * 0.02; g.beginPath(); g.arc(W / 2, W / 2, W * 0.47, 0, TAU); g.stroke(); };
  wallPlate(k, 0, 1.6, 0.2, key(1), (g, W) => { base(g, W); for (let i = 0; i < 12; i++) { const a = (i / 12) * TAU; leaf(g, W / 2 + Math.cos(a) * W * 0.38, W / 2 + Math.sin(a) * W * 0.38, W * 0.12, W * 0.04, a + 1.9, B); } g.strokeStyle = B; g.lineWidth = W * 0.01; g.beginPath(); g.arc(W / 2, W / 2, W * 0.27, 0, TAU); g.stroke(); flower(g, W / 2, W / 2, W * 0.2, 8, B, A); flower(g, W / 2, W / 2, W * 0.09, 6, L, B); }, k.c1);
  wallPlate(k, -0.3, 1.82, 0.13, key(2), (g, W) => { base(g, W); for (let i = 0; i < 16; i++) { const a = (i / 16) * TAU; circ(g, W / 2 + Math.cos(a) * W * 0.38, W / 2 + Math.sin(a) * W * 0.38, W * 0.035, B); } circ(g, W / 2, W / 2, W * 0.26, B); circ(g, W / 2, W / 2, W * 0.22, A); bird(g, W / 2, W / 2 + W * 0.03, W * 0.13, B); }, k.c1);
  wallPlate(k, 0.31, 1.84, 0.145, key(3), (g, W) => { base(g, W); for (let i = 0; i < 8; i++) { const a = (i / 8) * TAU; g.save(); g.translate(W / 2, W / 2); g.rotate(a); poly(g, [[W * 0.14, 0], [W * 0.3, -W * 0.07], [W * 0.42, 0], [W * 0.3, W * 0.07]], i % 2 ? B : L); g.restore(); } circ(g, W / 2, W / 2, W * 0.12, B); circ(g, W / 2, W / 2, W * 0.06, A); }, k.c1);
  wallPlate(k, -0.29, 1.4, 0.15, key(4), (g, W) => { base(g, W); g.fillStyle = B; g.fillRect(0, W * 0.6, W, W * 0.4); g.fillStyle = A; for (let i = 0; i < 6; i++) g.fillRect(0, W * (0.64 + i * 0.06), W, W * 0.012); poly(g, [[W * 0.3, W * 0.6], [W * 0.5, W * 0.32], [W * 0.7, W * 0.6]], B); g.fillStyle = B; g.fillRect(W * 0.36, W * 0.44, W * 0.28, W * 0.18); g.fillStyle = A; g.fillRect(W * 0.46, W * 0.5, W * 0.08, W * 0.12); tree(g, W * 0.22, W * 0.62, W * 0.2, B, B); tree(g, W * 0.8, W * 0.62, W * 0.16, B, B); }, k.c1);
  wallPlate(k, 0.3, 1.38, 0.12, key(5), (g, W) => { base(g, W); for (let y = 0; y < 5; y++) for (let x = 0; x < 5; x++) if ((x + y) % 2) flower(g, W * (0.18 + x * 0.16), W * (0.18 + y * 0.16), W * 0.07, 5, B, L); }, k.c1);
});

furn({ id: 'prateleira_livros', name: 'Prateleira com livros', cat: 'Quadros e parede', kind: 'wall', price: 380, lvl: 4, w: 1.0, d: 0.24, h: 0.48, cols: [WOOD.nogueira, METAL.latao], colN: ['Tábua', 'Suportes'], info: 'Romances, almanaques e o guia de plantas.' }, (k) => {
  const y = 1.4; k.rbox(1.0, 0.03, 0.22, 0, y, 0.12, k.c1, 0.006);
  for (const s of [-1, 1]) { k.boxS(0.016, 0.16, 0.01, s * 0.36, y - 0.09, 0.005, k.c2); k.boxS(0.016, 0.01, 0.19, s * 0.36, y - 0.02, 0.1, k.c2); k.addS(new THREE.TorusGeometry(0.06, 0.006, 5, 12, HP), mul(T(s * 0.36, y - 0.085, 0.07), RY(-HP), RZ(-HP)), k.c2); }
  let x = -0.44; const cols = [0xc2554a, 0x3f6a8a, 0xe8c468, 0x5a8a5a, 0x8a5a8a, 0xd9765a, 0x2f4a6a, 0xe9dcc0, 0x7a4a34];
  cols.forEach((c, i) => { const w = 0.028 + ((i * 7) % 4) * 0.008, h = 0.2 + ((i * 5) % 4) * 0.022, d = 0.14 + ((i * 3) % 3) * 0.01; k.box(w, h, d, x + w / 2, y + 0.015 + h / 2, 0.11, c); k.box(w + 0.001, 0.012, d + 0.001, x + w / 2, y + 0.015 + h * 0.8, 0.11, tone(c, 1.35)); k.box(w - 0.006, h - 0.006, 0.004, x + w / 2, y + 0.015 + h / 2, 0.11 - d / 2 - 0.001, 0xf6efdc); x += w + 0.002; });
  k.box(0.03, 0.22, 0.15, x + 0.045, y + 0.12, 0.11, 0xb8483c, RZ(-0.32));
  k.boxS(0.012, 0.13, 0.1, 0.12, y + 0.08, 0.11, k.c2); k.boxS(0.08, 0.008, 0.1, 0.155, y + 0.019, 0.11, k.c2);
  k.lathe([[0.001, 0], [0.035, 0], [0.05, 0.03], [0.045, 0.07], [0.022, 0.1], [0.026, 0.115]], 0.28, y + 0.015, 0.12, 0x8fb0a0, 12); for (const [dx, h] of [[-0.01, 0.1], [0.012, 0.13], [0, 0.07]]) { k.cyl(0.002, 0.002, h, 0.28 + dx, y + 0.13 + h / 2, 0.12, 0x9a8a5a, 4); k.sph(0.012, 0.28 + dx, y + 0.13 + h, 0.12, 0xe8d8a0, 1, 1.4, 1, 6); }
  k.box(0.11, 0.13, 0.012, 0.41, y + 0.085, 0.1, tone(k.c1, 0.7), RX(-0.18)); k.art('prat_foto', 0.085, 0.105, 0.41, y + 0.086, 0.1075, PAINT.passaro, { rot: RX(-0.18), res: 64 });
});

// =====================================================================================================================
// ENFEITES
// =====================================================================================================================
// a cut flower head: n petals around a centre; R = orientation matrix (default looks up)
function bloom(k, x, y, z, s, pc, cc, R, n = 6) {
  const M = mul(T(x, y, z), R || T(0, 0, 0));
  for (let i = 0; i < n; i++) k.add(new THREE.SphereGeometry(s * 0.5, 6, 4), mul(M, RY((i / n) * TAU), T(s * 0.55, 0, 0), RZ(0.35), S(1, 0.25, 0.6)), pc);
  k.add(new THREE.SphereGeometry(s * 0.3, 7, 5), mul(M, S(1, 0.6, 1)), cc);
}
const leaf3 = (k, x, y, z, s, c, R) => k.add(new THREE.SphereGeometry(s, 6, 4), mul(T(x, y, z), R || T(0, 0, 0), S(0.32, 1, 0.1)), c);
const texCache = new Map();
function canvasTex(key, W, H, draw) { let t = texCache.get(key); if (!t) { const c = document.createElement('canvas'); c.width = W; c.height = H; draw(c.getContext('2d'), W, H); t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; texCache.set(key, t); } return t; }
// teddy-like round ear / button eye helpers are inline; a little fish:
function fish(k, s, c, c2) { return part(k, (p) => { p.sph(0.03 * s, 0, 0, 0, c, 1.6, 1, 0.6, 8); p.add(new THREE.ConeGeometry(0.022 * s, 0.035 * s, 4), mul(T(-0.058 * s, 0, 0), RZ(-HP), S(1, 1, 0.3)), c2); p.add(new THREE.ConeGeometry(0.012 * s, 0.022 * s, 4), mul(T(0, 0.03 * s, 0), S(1.6, 1, 0.3)), c2); for (const sz of [-1, 1]) p.sph(0.005 * s, 0.028 * s, 0.006 * s, sz * 0.014 * s, INK, 1, 1, 1, 5); }); }

furn({ id: 'vela_perfumada', name: 'Vela perfumada', cat: 'Enfeites', kind: 'top', price: 30, lvl: 1, w: 0.1, d: 0.1, h: 0.13, cols: [0xf1e2c4, 0x9a6a4a], colN: ['Cera', 'Rótulo'], info: 'Cheirinho de lavanda e chama que dança.' }, (k) => {
  k.glass(LG([[0.001, 0], [0.042, 0], [0.045, 0.006], [0.045, 0.09], [0.042, 0.092]], 16), null, 0xe8f0ee, 0.3); k.cyl(0.04, 0.04, 0.062, 0, 0.035, 0, k.c1, 16); k.cyl(0.0455, 0.0455, 0.03, 0, 0.04, 0, k.c2, 16); k.cyl(0.0458, 0.0458, 0.012, 0, 0.04, 0, tone(k.c2, 1.5), 16);
  k.cyl(0.0015, 0.0015, 0.014, 0, 0.072, 0, 0x2a2420, 4); flame(k, 0, 0.076, 0, 1, 0.5);
});

furn({ id: 'pilha_livros', name: 'Pilha de livros', cat: 'Enfeites', kind: 'top', price: 25, lvl: 1, w: 0.28, d: 0.22, h: 0.15, cols: [0xc2554a, 0x3f6a8a], colN: ['Capas quentes', 'Capas frias'], info: 'Para ler entre uma rega e outra.' }, (k) => {
  let y = 0; [[0.26, 0.04, 0.19, k.c2, 0.06], [0.24, 0.032, 0.18, 0xe8c468, -0.12], [0.22, 0.036, 0.16, k.c1, 0.18], [0.19, 0.024, 0.14, 0x6a9a6a, -0.05]].forEach(([w, h, d, c, a]) => { k.box(w - 0.012, h - 0.008, d - 0.008, 0.004, y + h / 2, 0, 0xf8f1de, RY(a)); k.box(w, 0.004, d, 0, y + 0.002, 0, c, RY(a)); k.box(w, 0.004, d, 0, y + h - 0.002, 0, c, RY(a)); k.add(new THREE.BoxGeometry(0.006, h, d), mul(T(0, y + h / 2, 0), RY(a), T(-w / 2 + 0.003, 0, 0)), c); k.add(new THREE.BoxGeometry(0.008, h + 0.001, 0.02), mul(T(0, y + h / 2, 0), RY(a), T(-w / 2 + 0.003, 0, d * 0.25)), GOLD); y += h; });
  for (const s of [-1, 1]) k.addS(new THREE.TorusGeometry(0.022, 0.003, 4, 12), mul(T(s * 0.027 + 0.01, y + 0.004, 0.01), RX(HP)), INK); k.boxS(0.012, 0.003, 0.003, 0.01, y + 0.004, 0.01, INK); k.box(0.012, 0.06, 0.002, -0.02, 0.11, 0.072, 0xd8483c, RY(0.18));
});

furn({ id: 'porta_retratos', name: 'Porta-retratos', cat: 'Enfeites', kind: 'top', price: 35, lvl: 1, w: 0.2, d: 0.14, h: 0.25, cols: [WOOD.mel, 0xfaf4e6], colN: ['Moldura', 'Passe-partout'], info: 'Aquele sorriso que você gosta de ver todo dia.' }, (k) => {
  const R = RX(-0.2), M = (x, y, z) => mul(T(0, 0.004, 0.04), R, T(x, y, z)), f = 0.022, w = 0.19, h = 0.24;
  for (const s of [-1, 1]) { k.add(new THREE.BoxGeometry(f, h, 0.018), M((s * (w - f)) / 2, h / 2, 0), k.c1); k.add(new THREE.BoxGeometry(w - f * 2, f, 0.018), M(0, h / 2 + (s * (h - f)) / 2, 0), k.c1); }
  k.add(new THREE.BoxGeometry(w - f * 2, h - f * 2, 0.006), M(0, h / 2, -0.004), k.c2); k.art('pr_mesa', w - f * 2 - 0.03, h - f * 2 - 0.03, 0, 0, 0, (g, W, H) => PAINT.retrato(g, W, H, { skin: '#f0c8a0', hair: '#6a3a22', shirt: '#7fa08a', bg: '#f1dcc0', style: 1 }), { rot: M(0, h / 2, 0.0), res: 128 });
  k.add(new THREE.BoxGeometry(0.05, 0.2, 0.006), mul(T(0, 0.1, -0.015), RX(0.28)), tone(k.c1, 0.8));
});

function cutFlowers(k, y0, pal, n = 5, h = 0.3, spread = 0.085) {
  for (let i = 0; i < n; i++) { const a = (i / n) * TAU + 0.5, r = i === 0 ? 0 : spread * (0.6 + (i % 2) * 0.4), hh = h * (i === 0 ? 1 : 0.78 + ((i * 3) % 4) * 0.06), x = Math.cos(a) * r, z = Math.sin(a) * r;
    tb(k, [[x * 0.15, y0, z * 0.15], [x * 0.5, y0 + hh * 0.55, z * 0.5], [x, y0 + hh, z]], 0.004, 0x4d8e3c, { n: 6, seg: 4 }); const R = mul(RY(-a), RZ(-(i === 0 ? 0 : 0.5)));
    if (i % 3 === 2) { k.sph(0.022, x, y0 + hh, z, pal[i % pal.length], 0.9, 1.3, 0.9, 7); k.sph(0.014, x, y0 + hh + 0.02, z, tone(pal[i % pal.length], 1.2), 1, 1, 1, 6); } else bloom(k, x, y0 + hh, z, 0.05, pal[i % pal.length], 0xf2c84a, R, 7);
    leaf3(k, x * 0.4 + Math.cos(a + 1.5) * 0.02, y0 + hh * 0.5, z * 0.4 + Math.sin(a + 1.5) * 0.02, 0.05, 0x5a9a48, mul(RY(-a + 1.2), RZ(0.7))); }
}
furn({ id: 'vaso_flores', name: 'Vaso de vidro com flores', cat: 'Enfeites', kind: 'top', price: 60, lvl: 1, w: 0.26, d: 0.26, h: 0.44, cols: [0xf08aa6, 0xcfeaf2], colN: ['Flores', 'Vidro'], info: 'Flores colhidas hoje cedo, ainda com orvalho.' }, (k) => {
  k.glass(LG([[0.001, 0], [0.045, 0], [0.065, 0.03], [0.07, 0.09], [0.045, 0.15], [0.038, 0.18], [0.05, 0.2]], 16), null, k.c2, 0.32); k.glass(LG([[0.001, 0.006], [0.042, 0.006], [0.06, 0.03], [0.064, 0.09], [0.05, 0.12], [0.001, 0.12]], 14), null, 0x9ad0e0, 0.3);
  cutFlowers(k, 0.02, [k.c1, 0xfbf7f0, tone(k.c1, 1.3), 0xf6c84a, tone(k.c1, 0.8)], 6, 0.4);
});

furn({ id: 'fruteira', name: 'Fruteira', cat: 'Enfeites', kind: 'top', price: 90, lvl: 2, w: 0.32, d: 0.32, h: 0.21, cols: [0xf3ead8, 0x4a78b0], colN: ['Louça', 'Filete'], info: 'Fruta fresca do pomar, à mão para quem passar.' }, (k) => {
  k.latheS([[0.001, 0], [0.06, 0], [0.065, 0.012], [0.03, 0.03], [0.035, 0.05], [0.12, 0.085], [0.155, 0.125], [0.158, 0.13], [0.15, 0.13], [0.11, 0.095], [0.001, 0.07]], 0, 0, 0, k.c1, 22); k.addS(new THREE.TorusGeometry(0.156, 0.005, 4, 22), mul(T(0, 0.13, 0), RX(HP)), k.c2);
  const ap = (x, y, z, s, c) => { k.sph(s, x, y, z, c, 1, 0.9, 1, 10); k.cyl(0.003, 0.003, 0.02, x, y + s * 0.9, z, 0x5a3a22, 4); };
  ap(-0.06, 0.125, 0.03, 0.042, 0xd8483c); ap(0.05, 0.125, 0.055, 0.04, 0xf0962c); ap(0.065, 0.125, -0.04, 0.042, 0xc9c84a); ap(-0.03, 0.125, -0.065, 0.04, 0xe8504a); ap(0.0, 0.165, 0.0, 0.04, 0xf2b03a);
  for (let i = 0; i < 3; i++) tb(k, [[-0.11, 0.15, -0.03 + i * 0.022], [-0.08, 0.185 + i * 0.003, -0.04 + i * 0.03], [0.0, 0.2, -0.05 + i * 0.04], [0.06, 0.185, -0.05 + i * 0.045]], 0.016, 0xf2d04a, { n: 8, seg: 6 });
  for (let i = 0; i < 9; i++) k.sph(0.016, 0.09 + (i % 3) * 0.022 - 0.01, 0.14 - Math.floor(i / 3) * 0.02, 0.0 + ((i * 2) % 3) * 0.02, i % 2 ? 0x6a3a8a : 0x8a56a8, 1, 1, 1, 6);
});

furn({ id: 'cachepo_decorativo', name: 'Cachepô decorativo', cat: 'Enfeites', kind: 'top', price: 75, lvl: 2, w: 0.26, d: 0.26, h: 0.2, cols: [0xf3ead8, 0x4a78b0], colN: ['Louça', 'Pintura'], info: 'Tão bonito que fica bem até vazio.' }, (k) => {
  for (let i = 0; i < 3; i++) k.sphS(0.022, Math.cos(i * 2.094) * 0.07, 0.016, Math.sin(i * 2.094) * 0.07, k.c1, 1, 0.8, 1, 8);
  k.latheS([[0.001, 0.02], [0.07, 0.02], [0.1, 0.05], [0.115, 0.1], [0.105, 0.16], [0.112, 0.185], [0.118, 0.195], [0.106, 0.195], [0.096, 0.16], [0.104, 0.1], [0.09, 0.06], [0.001, 0.04]], 0, 0, 0, k.c1, 24);
  k.addS(new THREE.TorusGeometry(0.1165, 0.004, 4, 24), mul(T(0, 0.1, 0), RX(HP)), k.c2); k.addS(new THREE.TorusGeometry(0.108, 0.004, 4, 24), mul(T(0, 0.155, 0), RX(HP)), k.c2);
  for (let i = 0; i < 12; i++) { const a = (i / 12) * TAU; k.sphS(0.011, Math.cos(a) * 0.113, 0.128 + (i % 2) * 0.0, Math.sin(a) * 0.113, i % 2 ? k.c2 : tone(k.c2, 1.4), 1, 1, 1, 6); k.sphS(0.012, Math.cos(a) * 0.117, 0.195, Math.sin(a) * 0.117, k.c1, 1, 0.7, 1, 6); }
});

furn({ id: 'cesta_novelos', name: 'Cesta de novelos de lã', cat: 'Enfeites', kind: 'top', price: 85, lvl: 2, w: 0.32, d: 0.32, h: 0.3, cols: [0xc9a468, 0xd9607a], colN: ['Cesta', 'Lã principal'], info: 'O próximo cachecol já está escolhido.' }, (k) => {
  basket(k, 0, 0, 0, 0.14, (t) => 0.11 + 0.04 * t, k.c1, 6, 18); k.add(new THREE.TorusGeometry(0.152, 0.01, 5, 18), mul(T(0, 0.14, 0), RX(HP)), tone(k.c1, 0.8)); k.cyl(0.14, 0.12, 0.004, 0, 0.1, 0, tone(k.c1, 0.6), 16);
  [[-0.06, 0.15, 0.03, 0.062, k.c2], [0.06, 0.145, 0.04, 0.058, 0x6a9ab8], [0.01, 0.15, -0.065, 0.06, 0xf1e2c4], [0.0, 0.215, 0.01, 0.055, 0xe8c468], [-0.075, 0.135, -0.05, 0.045, tone(k.c2, 1.35)]].forEach(([x, y, z, r, c], i) => { k.sph(r, x, y, z, c, 1, 1, 1, 10); for (let j = 0; j < 3; j++) k.add(new THREE.TorusGeometry(r * 1.01, r * 0.07, 4, 14), mul(T(x, y, z), RY(i * 1.3 + j * 1.05), RX(0.5 + j * 0.6)), tone(c, 0.85)); });
  rod(k, [0.02, 0.2, 0.0], [0.13, 0.29, -0.09], 0.004, 0xd9c8a0, 5); rod(k, [-0.02, 0.2, 0.02], [0.1, 0.29, 0.1], 0.004, 0xd9c8a0, 5); k.sph(0.008, 0.13, 0.29, -0.09, 0xd9c8a0, 1, 1, 1, 6); k.sph(0.008, 0.1, 0.29, 0.1, 0xd9c8a0, 1, 1, 1, 6);
});

furn({ id: 'estatueta_passaro', name: 'Estatueta de passarinho', cat: 'Enfeites', kind: 'top', price: 110, lvl: 2, w: 0.12, d: 0.24, h: 0.17, cols: [0x5a9ad0, 0xf6d9b8], colN: ['Penas', 'Peito'], info: 'Um sabiá de louça que nunca foge.' }, (k) => {
  k.cyl(0.05, 0.055, 0.03, 0, 0.015, 0, WOOD.nogueira, 12); k.cyl(0.044, 0.044, 0.003, 0, 0.031, 0, tone(WOOD.nogueira, 1.3), 12);
  for (const s of [-1, 1]) k.cylS(0.003, 0.003, 0.03, s * 0.014, 0.045, 0, 0xe8a23c, 5);
  k.sphS(0.045, 0, 0.095, -0.005, k.c1, 0.85, 0.85, 1.2, 12); k.sphS(0.034, 0, 0.088, 0.012, k.c2, 0.85, 0.85, 1.05, 10); k.sphS(0.03, 0, 0.135, 0.035, k.c1, 1, 1, 1, 10);
  k.addS(new THREE.ConeGeometry(0.009, 0.026, 6), mul(T(0, 0.133, 0.072), RX(HP)), 0xe8a23c); for (const s of [-1, 1]) { k.sphS(0.005, s * 0.017, 0.142, 0.056, INK, 1, 1, 1, 6); k.sphS(0.03, s * 0.034, 0.098, -0.012, tone(k.c1, 0.8), 0.25, 0.7, 1.15, 8); }
  k.addS(new THREE.BoxGeometry(0.03, 0.008, 0.07), mul(T(0, 0.105, -0.08), RX(0.5)), tone(k.c1, 0.8));
});

furn({ id: 'estatueta_gato', name: 'Estatueta de gato', cat: 'Enfeites', kind: 'top', price: 130, lvl: 3, w: 0.18, d: 0.2, h: 0.27, cols: [0xfbf7f0, 0xd8483c], colN: ['Louça', 'Coleira'], info: 'Gatinho de louça que dá sorte à casa.' }, (k) => {
  const C = k.c1;
  k.latheS([[0.001, 0], [0.06, 0], [0.072, 0.02], [0.07, 0.07], [0.052, 0.13], [0.04, 0.16], [0.001, 0.17]], 0, 0, 0, C, 16); k.sphS(0.055, 0, 0.195, 0.01, C, 1.1, 0.95, 1, 14);
  for (const s of [-1, 1]) { k.addS(new THREE.ConeGeometry(0.022, 0.04, 4), mul(T(s * 0.036, 0.25, 0.005), RZ(-s * 0.25), RY(PI / 4)), C); k.addS(new THREE.ConeGeometry(0.012, 0.024, 4), mul(T(s * 0.036, 0.247, 0.012), RZ(-s * 0.25), RY(PI / 4)), 0xf4b8b0); k.sphS(0.022, s * 0.03, 0.02, 0.06, C, 1, 0.8, 1.3, 8);
    k.addS(new THREE.TorusGeometry(0.012, 0.003, 4, 8, PI), mul(T(s * 0.024, 0.2, 0.062), RZ(PI)), INK); for (const a of [-0.2, 0.2]) k.boxS(0.04, 0.002, 0.002, s * 0.05, 0.18, 0.058, 0x8a8a8a, RZ(s * a)); }
  k.sphS(0.007, 0, 0.186, 0.066, 0xe8788a, 1.2, 0.8, 1, 6); k.addS(new THREE.TorusGeometry(0.043, 0.007, 5, 16), mul(T(0, 0.152, 0.004), RX(HP)), k.c2); k.sphS(0.012, 0, 0.14, 0.048, GOLD, 1, 1, 1, 8);
  tb(k, [[0.03, 0.02, -0.06], [0.075, 0.03, -0.03], [0.07, 0.07, 0.01], [0.05, 0.09, 0.03]], 0.012, C, { shiny: true, n: 10, seg: 6 }); k.sphS(0.022, -0.02, 0.085, 0.052, tone(k.c2, 1.0), 1, 1, 0.3, 8);
});

furn({ id: 'relogio_mesa', name: 'Relógio de mesa', cat: 'Enfeites', kind: 'top', price: 160, lvl: 3, w: 0.24, d: 0.1, h: 0.25, cols: [WOOD.mogno, 0xfbf4e2], colN: ['Caixa', 'Mostrador'], info: 'Dá as horas baixinho em cima da cômoda.' }, (k) => {
  const W = k.c1; k.rbox(0.24, 0.025, 0.1, 0, 0.0225, 0, tone(W, 0.8), 0.008); for (const s of [-1, 1]) k.sphS(0.012, s * 0.095, 0.008, 0.03, METAL.latao, 1, 0.8, 1, 8);
  k.box(0.2, 0.1, 0.08, 0, 0.085, 0, W); k.cyl(0.1, 0.1, 0.08, 0, 0.135, 0, W, 24, RX(HP)); k.addS(new THREE.TorusGeometry(0.078, 0.007, 5, 24), T(0, 0.135, 0.041), METAL.latao);
  clockFace(k, 'mesa:' + k.c2, 0, 0.135, 0.0412, 0.074, css(k.c2)); clockHands(k, 0, 0.135, 0.042, 0.06, INK, false); k.sphS(0.012, 0, 0.243, 0, METAL.latao, 1, 1.2, 1, 8); for (const s of [-1, 1]) k.box(0.012, 0.06, 0.004, s * 0.085, 0.07, 0.041, tone(W, 1.3));
});

furn({ id: 'ampulheta', name: 'Ampulheta', cat: 'Enfeites', kind: 'top', price: 200, lvl: 4, w: 0.13, d: 0.13, h: 0.24, cols: [WOOD.nogueira, 0xe8c88a], colN: ['Madeira', 'Areia'], info: 'O tempo escorre devagar por aqui.' }, (k) => {
  for (const y of [0.01, 0.23]) { k.cyl(0.06, 0.06, 0.02, 0, y, 0, k.c1, 16); k.cyl(0.052, 0.052, 0.006, 0, y + (y < 0.1 ? 0.012 : -0.012), 0, tone(k.c1, 1.25), 16); }
  for (let i = 0; i < 3; i++) { const a = i * 2.094 + 0.5; k.lathe([[0.006, 0], [0.009, 0.03], [0.005, 0.1], [0.009, 0.17], [0.006, 0.2]], Math.cos(a) * 0.048, 0.02, Math.sin(a) * 0.048, tone(k.c1, 0.85), 6); }
  k.glass(LG([[0.001, 0], [0.03, 0.004], [0.038, 0.03], [0.03, 0.07], [0.005, 0.1], [0.03, 0.13], [0.038, 0.17], [0.03, 0.196], [0.001, 0.2]], 14), T(0, 0.02, 0), 0xe8f4f4, 0.3);
  k.lathe([[0.001, 0.024], [0.029, 0.026], [0.034, 0.045], [0.02, 0.06], [0.001, 0.075]], 0, 0, 0, k.c2, 12); k.lathe([[0.004, 0.122], [0.026, 0.148], [0.03, 0.16], [0.001, 0.158]], 0, 0, 0, k.c2, 12); k.cyl(0.0015, 0.0015, 0.05, 0, 0.098, 0, k.c2, 4);
});

furn({ id: 'bule_xicaras', name: 'Bule e xícaras na bandeja', cat: 'Enfeites', kind: 'top', price: 240, lvl: 4, w: 0.46, d: 0.3, h: 0.19, cols: [0xfbf7f0, 0xd98a9a], colN: ['Porcelana', 'Florzinhas'], info: 'O chá das cinco, com a louça de florzinha.' }, (k) => {
  const C = k.c1, F = k.c2;
  k.rbox(0.44, 0.012, 0.28, 0, 0.008, 0, WOOD.mel, 0.006); for (const s of [-1, 1]) { k.box(0.44, 0.02, 0.01, 0, 0.02, s * 0.14, tone(WOOD.mel, 0.85)); k.box(0.01, 0.02, 0.28, s * 0.22, 0.02, 0, tone(WOOD.mel, 0.85)); k.tube([[s * 0.225, 0.025, -0.04], [s * 0.228, 0.05, -0.02], [s * 0.228, 0.05, 0.02], [s * 0.225, 0.025, 0.04]], 0.005, METAL.latao, 5); }
  // teapot
  k.latheS([[0.001, 0], [0.04, 0], [0.045, 0.008], [0.066, 0.04], [0.068, 0.07], [0.052, 0.1], [0.036, 0.11], [0.001, 0.11]], -0.09, 0.014, -0.02, C, 18); k.latheS([[0.038, 0], [0.036, 0.008], [0.016, 0.02], [0.01, 0.026], [0.014, 0.04], [0.001, 0.045]], -0.09, 0.124, -0.02, C, 14);
  tb(k, [[-0.035, 0.06, -0.02], [0.0, 0.07, -0.02], [0.018, 0.105, -0.02], [0.03, 0.12, -0.02]], 0.011, C, { shiny: true, n: 8, seg: 6 }); k.addS(new THREE.TorusGeometry(0.034, 0.007, 5, 12, PI), mul(T(-0.152, 0.075, -0.02), RZ(HP)), C);
  for (let i = 0; i < 6; i++) { const a = (i / 6) * TAU; k.sphS(0.009, -0.09 + Math.cos(a) * 0.066, 0.07 + (i % 2) * 0.012, -0.02 + Math.sin(a) * 0.066, i % 2 ? F : tone(F, 1.3), 1, 1, 0.6, 6); }
  // cups
  for (const [x, z] of [[0.08, 0.06], [0.14, -0.06]]) { k.latheS([[0.001, 0], [0.04, 0], [0.058, 0.008], [0.058, 0.011], [0.03, 0.006], [0.001, 0.006]], x, 0.014, z, C, 16); k.latheS([[0.001, 0.006], [0.02, 0.006], [0.024, 0.012], [0.038, 0.045], [0.04, 0.055], [0.036, 0.055], [0.034, 0.045], [0.001, 0.04]], x, 0.014, z, C, 16); k.cyl(0.034, 0.034, 0.002, x, 0.062, z, 0xb5733c, 14);
    k.addS(new THREE.TorusGeometry(0.016, 0.004, 4, 10, PI), mul(T(x + 0.038, 0.048, z), RZ(-HP)), C); k.addS(new THREE.TorusGeometry(0.039, 0.003, 4, 16), mul(T(x, 0.066, z), RX(HP)), F); }
  k.latheS([[0.001, 0], [0.022, 0], [0.032, 0.02], [0.03, 0.04], [0.02, 0.046], [0.006, 0.05], [0.008, 0.06], [0.001, 0.064]], 0.02, 0.014, -0.07, C, 12);
  k.boxS(0.07, 0.003, 0.012, 0.11, 0.028, 0.105, METAL.cromo, RY(0.4));
});

furn({ id: 'globo_terrestre', name: 'Globo terrestre', cat: 'Enfeites', kind: 'top', price: 380, lvl: 5, w: 0.3, d: 0.3, h: 0.42, cols: [0x5aa0c8, WOOD.nogueira], colN: ['Oceanos', 'Base'], info: 'Gira devagarinho, para viajar sem sair de casa.' }, (k) => {
  k.lathe([[0.001, 0], [0.09, 0], [0.095, 0.012], [0.05, 0.03], [0.02, 0.045], [0.016, 0.09]], 0, 0, 0, k.c2, 18); const R = 0.115, cy = 0.25, tilt = 0.4;
  k.addS(new THREE.TorusGeometry(R + 0.014, 0.005, 5, 28, PI * 1.08), mul(T(0, cy, 0), RZ(-tilt), RZ(-HP - 0.12)), METAL.latao); k.cylS(0.008, 0.008, 0.06, 0, 0.1, 0, METAL.latao, 8);
  const tex = canvasTex('globo:' + k.c1, 256, 128, (g, W, H) => { g.fillStyle = css(k.c1); g.fillRect(0, 0, W, H); const land = (pts, c) => poly(g, pts.map(([x, y]) => [x * W, y * H]), c);
    for (const dx of [0, 1]) { const o = (p) => p.map(([x, y]) => [x - dx + 0.02, y]); land(o([[0.06, 0.22], [0.12, 0.14], [0.24, 0.13], [0.3, 0.2], [0.26, 0.32], [0.22, 0.42], [0.18, 0.48], [0.12, 0.36]]), '#7fb06a'); land(o([[0.22, 0.52], [0.3, 0.5], [0.33, 0.62], [0.28, 0.8], [0.25, 0.88], [0.22, 0.7]]), '#8fbc6a'); land(o([[0.45, 0.2], [0.56, 0.16], [0.56, 0.26], [0.48, 0.3]]), '#a8c47a'); land(o([[0.45, 0.36], [0.56, 0.32], [0.62, 0.46], [0.57, 0.7], [0.51, 0.74], [0.47, 0.5]]), '#d8c078'); land(o([[0.58, 0.18], [0.7, 0.12], [0.9, 0.14], [0.96, 0.24], [0.86, 0.38], [0.8, 0.48], [0.72, 0.42], [0.62, 0.34]]), '#8fbc6a'); land(o([[0.8, 0.64], [0.9, 0.62], [0.93, 0.72], [0.84, 0.76]]), '#d8b070'); }
    g.fillStyle = '#f6f8f8'; g.fillRect(0, 0, W, H * 0.06); g.fillRect(0, H * 0.93, W, H * 0.07); g.strokeStyle = 'rgba(255,255,255,0.25)'; g.lineWidth = 1; for (let i = 1; i < 8; i++) { g.beginPath(); g.moveTo((i / 8) * W, 0); g.lineTo((i / 8) * W, H); g.stroke(); } for (let i = 1; i < 4; i++) { g.beginPath(); g.moveTo(0, (i / 4) * H); g.lineTo(W, (i / 4) * H); g.stroke(); } });
  const holder = new THREE.Group(); holder.position.set(0, cy, 0); holder.rotation.z = -tilt; const ball = new THREE.Mesh(new THREE.SphereGeometry(R, 24, 16), new THREE.MeshStandardMaterial({ map: tex, roughness: 0.55 })); holder.add(ball); k.mesh(holder); k.tick((dt) => { ball.rotation.y += dt * 0.25; });
  for (const s of [-1, 1]) k.addS(new THREE.SphereGeometry(0.009, 6, 5), mul(T(0, cy, 0), RZ(-tilt), T(0, s * (R + 0.012), 0)), METAL.latao);
});

furn({ id: 'aquario_redondo', name: 'Aquário redondo', cat: 'Enfeites', kind: 'top', price: 450, lvl: 6, w: 0.32, d: 0.32, h: 0.31, cols: [0xf0843c, 0x5ab0c8], colN: ['Peixinho', 'Pedrinhas'], info: 'O peixinho dourado dá voltas e mais voltas.' }, (k) => {
  k.cyl(0.08, 0.09, 0.015, 0, 0.0075, 0, WOOD.nogueira, 18);
  k.glass(LG([[0.06, 0.015], [0.11, 0.04], [0.15, 0.1], [0.156, 0.16], [0.14, 0.22], [0.1, 0.27], [0.095, 0.29], [0.105, 0.305]], 22), null, 0xdff2f6, 0.24);
  k.glass(LG([[0.001, 0.02], [0.058, 0.02], [0.105, 0.043], [0.144, 0.1], [0.15, 0.16], [0.136, 0.215], [0.001, 0.215]], 20), null, 0x7fc8e0, 0.3);
  const r = rnd(6); for (let i = 0; i < 26; i++) { const a = r() * TAU, d = Math.sqrt(r()) * 0.085; k.sph(0.014 + r() * 0.008, Math.cos(a) * d, 0.03 + r() * 0.008, Math.sin(a) * d, [k.c2, tone(k.c2, 1.35), 0xf3ead8, tone(k.c2, 0.75)][i % 4], 1, 0.7, 1, 5); }
  for (const [x, z, h, a] of [[-0.05, -0.03, 0.12, 0.2], [-0.03, -0.05, 0.15, -0.15], [-0.06, -0.01, 0.09, 0.4]]) tb(k, [[x, 0.035, z], [x + a * 0.05, 0.035 + h * 0.5, z + 0.01], [x - a * 0.03, 0.035 + h, z]], 0.007, 0x4a9a4a, { n: 6, seg: 4 }); k.sph(0.025, 0.05, 0.05, 0.03, 0xb8a890, 1.2, 0.9, 1, 7);
  const f1 = fish(k, 1, k.c1, tone(k.c1, 1.3)), f2 = fish(k, 0.7, 0xf6f0e6, k.c1); f1.position.set(0.075, 0.13, 0); f2.position.set(-0.03, 0.09, 0.05);
  k.tick((dt, t) => { const a = t * 0.9, b = -t * 0.7 + 2; f1.position.set(Math.cos(a) * 0.075, 0.13 + Math.sin(t * 1.3) * 0.02, Math.sin(a) * 0.075); f1.rotation.y = -a - HP + Math.sin(t * 8) * 0.15; f2.position.set(Math.cos(b) * 0.06, 0.09 + Math.sin(t * 1.1 + 1) * 0.015, Math.sin(b) * 0.06); f2.rotation.y = -b + HP + Math.sin(t * 9) * 0.15; });
});

furn({ id: 'caixinha_musica', name: 'Caixinha de música', cat: 'Enfeites', kind: 'top', price: 700, lvl: 8, w: 0.26, d: 0.22, h: 0.24, cols: [WOOD.mogno, 0xf4a9c0], colN: ['Caixa', 'Bailarina'], info: 'Abre a tampa e a bailarina rodopia.' }, (k) => {
  const W = k.c1;
  k.rbox(0.2, 0.08, 0.15, 0, 0.045, 0.015, W, 0.01); k.box(0.18, 0.004, 0.13, 0, 0.086, 0.015, 0x7a2a3a); for (const sx of [-1, 1]) for (const sz of [-1, 1]) k.sphS(0.009, sx * 0.085, 0.006, 0.015 + sz * 0.06, METAL.latao, 1, 0.8, 1, 6);
  const LM = mul(T(0, 0.085, -0.06), RX(-1.75)); k.add(new THREE.BoxGeometry(0.2, 0.02, 0.15), mul(LM, T(0, 0.01, 0.075)), W); k.art('cx_espelho', 0.17, 0.12, 0, 0, 0, PAINT.mirror, { rot: mul(LM, T(0, -0.0006, 0.075), RX(HP)), res: 64 });
  k.boxS(0.03, 0.03, 0.004, 0, 0.05, 0.092, METAL.latao); rod(k, [0.1, 0.045, 0.02], [0.118, 0.045, 0.02], 0.003, METAL.latao, 5, true); k.addS(new THREE.TorusGeometry(0.012, 0.003, 4, 10), mul(T(0.12, 0.045, 0.02), RY(HP)), METAL.latao);
  k.cylS(0.03, 0.03, 0.006, 0, 0.09, 0.02, GOLD, 14);
  const b = part(k, (p) => { const P = k.c2, SK = 0xf6d2b8; p.cyl(0.004, 0.004, 0.05, 0, 0.025, 0, SK, 5); p.add(new THREE.CylinderGeometry(0.004, 0.004, 0.04, 5), mul(T(0.012, 0.05, 0), RZ(-1.0)), SK); p.lathe2([[0.04, 0], [0.03, 0.006], [0.008, 0.014]], 0, 0.05, 0, P, 12); p.lathe2([[0.034, 0.004], [0.008, 0.016]], 0, 0.05, 0, tone(P, 1.3), 12);
    p.cyl(0.008, 0.007, 0.03, 0, 0.078, 0, P, 8); p.sph(0.011, 0, 0.106, 0, SK, 1, 1, 1, 8); p.sph(0.008, 0, 0.116, -0.004, 0x6a3a22, 1, 1, 1, 6); for (const s of [-1, 1]) p.add(new THREE.CylinderGeometry(0.003, 0.003, 0.045, 5), mul(T(s * 0.012, 0.108, 0), RZ(-s * 0.45)), SK); }, 0, 0.093, 0.02);
  k.tick((dt) => { b.rotation.y += dt * 1.6; });
});

// ---------- floor ornaments ----------
furn({ id: 'almofadao_chao', name: 'Almofadões de chão', cat: 'Enfeites', price: 140, lvl: 2, w: 0.74, d: 0.74, h: 0.34, cols: [0xd9a05a, 0x7fa08a], colN: ['Almofadão', 'Almofada de cima'], info: 'Para sentar no chão e tomar um chá com as plantas.' }, (k) => {
  k.rbox(0.72, 0.18, 0.72, 0, 0.09, 0, k.c1, 0.085); k.sph(0.03, 0, 0.175, 0, tone(k.c1, 0.75), 1, 0.4, 1, 8); for (const sx of [-1, 1]) for (const sz of [-1, 1]) { k.sph(0.022, sx * 0.33, 0.09, sz * 0.33, tone(k.c1, 0.75), 1, 1, 1, 6); }
  for (let i = 0; i < 4; i++) k.box(0.36, 0.004, 0.008, Math.cos(i * HP + PI / 4) * 0.14, 0.181, Math.sin(i * HP + PI / 4) * 0.14, tone(k.c1, 0.85), RY(-(i * HP + PI / 4)));
  k.rbox(0.5, 0.15, 0.5, 0.04, 0.255, -0.03, k.c2, 0.07, RY(0.5)); k.sph(0.024, 0.04, 0.328, -0.03, tone(k.c2, 0.75), 1, 0.4, 1, 8);
});

furn({ id: 'caminha_gato', name: 'Caminha do gato', cat: 'Enfeites', price: 160, lvl: 3, w: 0.74, d: 0.62, h: 0.2, cols: [0xb8a08a, 0xf3e6d0], colN: ['Borda', 'Almofada'], info: 'Redondinha e fofa: o lugar preferido do bichano.' }, (k) => {
  k.add(new THREE.TorusGeometry(0.22, 0.09, 8, 24), mul(T(0, 0.09, 0), S(1.18, 1, 1), RX(HP)), k.c1); k.cyl(0.24, 0.24, 0.04, 0, 0.02, 0, tone(k.c1, 0.8), 20); k.add(new THREE.SphereGeometry(0.2, 14, 8), mul(T(0, 0.07, 0), S(1.2, 0.3, 1)), k.c2);
  k.sph(0.035, 0.12, 0.13, 0.06, 0xd9607a, 1, 1, 1, 8); for (let j = 0; j < 2; j++) k.add(new THREE.TorusGeometry(0.0355, 0.003, 4, 12), mul(T(0.12, 0.13, 0.06), RY(j * 1.2), RX(0.5 + j)), 0xb84a62);
  k.sph(0.025, -0.1, 0.13, 0.02, 0x9a9aa2, 1.5, 0.9, 0.9, 8); k.add(new THREE.ConeGeometry(0.012, 0.03, 6), mul(T(-0.145, 0.128, 0.02), RZ(HP)), 0x9a9aa2); for (const s of [-1, 1]) k.sph(0.01, -0.085, 0.15, 0.02 + s * 0.014, 0xf4b8b0, 1, 1, 0.4, 6); tb(k, [[-0.065, 0.13, 0.02], [-0.03, 0.135, 0.04], [0.0, 0.125, 0.02]], 0.003, 0xf4b8b0, { n: 6, seg: 4 });
});

furn({ id: 'cesto_mantas', name: 'Cesto de vime com mantas', cat: 'Enfeites', price: 180, lvl: 3, w: 0.64, d: 0.58, h: 0.66, cols: [0xc9a468, 0xd98a7a], colN: ['Cesto', 'Manta principal'], info: 'Mantas enroladinhas para as noites frias.' }, (k) => {
  basket(k, 0, 0, 0, 0.42, (t) => 0.2 + 0.06 * Math.sin(t * HP), k.c1, 10, 20); k.add(new THREE.TorusGeometry(0.262, 0.014, 5, 20), mul(T(0, 0.42, 0), RX(HP)), tone(k.c1, 0.8)); k.cyl(0.25, 0.22, 0.01, 0, 0.33, 0, tone(k.c1, 0.6), 18);
  for (const s of [-1, 1]) tb(k, [[s * 0.25, 0.4, -0.06], [s * 0.3, 0.47, -0.04], [s * 0.3, 0.47, 0.04], [s * 0.25, 0.4, 0.06]], 0.011, tone(k.c1, 0.8), { n: 8, seg: 5 });
  [[-0.08, 0.02, k.c2, 0.1, 0.52, 0.12], [0.09, 0.07, 0xe9dcc0, 0.085, 0.46, -0.1], [0.06, -0.1, 0x7fa0b8, 0.08, 0.5, 0.05]].forEach(([x, z, c, r, h, a]) => { const M = mul(T(x, 0.14, z), RZ(a), RX(a * 0.6)); k.add(new THREE.CylinderGeometry(r, r, h, 12), mul(M, T(0, h / 2, 0)), c); for (let i = 0; i < 3; i++) k.add(new THREE.TorusGeometry(r * (0.3 + i * 0.28), 0.007, 4, 12), mul(M, T(0, h + 0.001, 0), RX(HP)), tone(c, 0.8)); k.add(new THREE.CylinderGeometry(r + 0.002, r + 0.002, 0.03, 12), mul(M, T(0, h * 0.75, 0)), tone(c, 1.25)); });
  k.rbox(0.3, 0.3, 0.035, -0.02, 0.33, 0.255, tone(k.c2, 1.15), 0.015, RX(0.12)); k.rbox(0.3, 0.05, 0.1, -0.02, 0.44, 0.22, tone(k.c2, 1.15), 0.02); for (let i = 0; i < 9; i++) k.box(0.01, 0.045, 0.004, -0.15 + i * 0.033, 0.165, 0.268, 0xf3ead6);
});

furn({ id: 'arranhador_gato', name: 'Arranhador de gato', cat: 'Enfeites', price: 420, lvl: 5, w: 0.68, d: 0.5, h: 1.25, cols: [0xd9cbb4, 0xc9a468], colN: ['Pelúcia', 'Sisal'], info: 'Poste de sisal, casinha e mirante lá no alto.' }, (k) => {
  const P = k.c1, R = k.c2;
  k.rbox(0.62, 0.05, 0.5, 0, 0.025, 0, P, 0.02);
  k.rbox(0.3, 0.3, 0.32, -0.14, 0.2, -0.06, tone(P, 0.92), 0.04); k.cyl(0.095, 0.095, 0.012, -0.14, 0.2, 0.097, 0x3a322c, 18, RX(HP)); for (const s of [-1, 1]) k.add(new THREE.ConeGeometry(0.04, 0.06, 4), mul(T(-0.14 + s * 0.09, 0.375, -0.06), RY(PI / 4)), tone(P, 0.92));
  const post = (x, z, y0, h) => { for (let i = 0; i < Math.round(h / 0.03); i++) k.cyl(0.046, 0.046, 0.031, x, y0 + i * 0.03 + 0.015, z, i % 2 ? R : tone(R, 0.88), 10); };
  post(0.17, 0.05, 0.05, 0.66); post(-0.14, -0.06, 0.38, 0.72);
  k.rbox(0.3, 0.04, 0.3, 0.17, 0.73, 0.05, P, 0.018);
  k.add(new THREE.TorusGeometry(0.15, 0.045, 6, 18), mul(T(-0.14, 1.19, -0.06), RX(HP)), P); k.cyl(0.16, 0.14, 0.05, -0.14, 1.125, -0.06, tone(P, 0.9), 16); k.add(new THREE.SphereGeometry(0.13, 10, 6), mul(T(-0.14, 1.16, -0.06), S(1, 0.25, 1)), tone(P, 1.15));
  const toy = part(k, (p) => { p.cyl(0.002, 0.002, 0.22, 0, -0.11, 0, 0xf3ead6, 4); p.sph(0.03, 0, -0.24, 0, 0xd9607a, 1, 1, 1, 8); for (let i = 0; i < 6; i++) p.sph(0.012, Math.cos(i) * 0.024, -0.24 + Math.sin(i * 2.1) * 0.02, Math.sin(i) * 0.024, 0xf4a9b8, 1, 1, 1, 5); }, 0.3, 0.71, 0.18);
  k.tick((dt, t) => { toy.rotation.z = 0.18 * Math.sin(t * 2.2); toy.rotation.x = 0.1 * Math.sin(t * 1.7 + 1); });
});

furn({ id: 'bau_brinquedos', name: 'Baú de brinquedos', cat: 'Enfeites', price: 480, lvl: 5, w: 0.84, d: 0.56, h: 0.86, cols: [0x6a9ab8, WOOD.mel], colN: ['Baú', 'Cintas'], info: 'Ursinho, bola e bloquinhos: os tesouros da infância.' }, (k) => {
  const C = k.c1, B = k.c2, zc = 0.03;
  k.rbox(0.8, 0.4, 0.44, 0, 0.21, zc, C, 0.02); k.box(0.74, 0.02, 0.38, 0, 0.4, zc, tone(C, 0.5)); for (const x of [-0.26, 0.26]) { k.box(0.06, 0.41, 0.45, x, 0.21, zc, B); } k.boxS(0.07, 0.08, 0.012, 0, 0.34, zc + 0.224, METAL.latao);
  const LM = mul(T(0, 0.41, zc - 0.22), RX(-1.45)); k.add(new THREE.BoxGeometry(0.8, 0.05, 0.44), mul(LM, T(0, 0.025, 0.22)), C); for (const x of [-0.26, 0.26]) k.add(new THREE.BoxGeometry(0.06, 0.056, 0.45), mul(LM, T(x, 0.025, 0.22)), B);
  // teddy bear
  const tx = -0.16, T0 = 0x9a6a42; k.sph(0.1, tx, 0.44, zc, T0, 1, 1, 0.9, 10); k.sph(0.085, tx, 0.57, zc + 0.01, T0, 1, 0.95, 0.95, 12); for (const s of [-1, 1]) { k.sph(0.032, tx + s * 0.065, 0.64, zc, T0, 1, 1, 0.6, 8); k.sph(0.018, tx + s * 0.065, 0.64, zc + 0.012, 0xd9b08a, 1, 1, 0.5, 6); k.sph(0.01, tx + s * 0.03, 0.59, zc + 0.086, INK, 1, 1, 1, 6); k.sph(0.035, tx + s * 0.105, 0.47, zc + 0.06, T0, 0.9, 0.9, 1.5, 8); }
  k.sph(0.035, tx, 0.555, zc + 0.075, 0xd9b08a, 1, 0.8, 0.8, 8); k.sph(0.012, tx, 0.565, zc + 0.103, INK, 1.2, 0.8, 1, 6); k.rbox(0.07, 0.03, 0.02, tx, 0.495, zc + 0.085, 0xd8483c, 0.008);
  // ball, blocks, rocket
  k.sph(0.1, 0.12, 0.47, zc - 0.03, 0xf2c84a, 1, 1, 1, 14); k.add(new THREE.TorusGeometry(0.1, 0.012, 4, 18), mul(T(0.12, 0.47, zc - 0.03), RX(0.5)), 0xd8483c); k.add(new THREE.TorusGeometry(0.086, 0.012, 4, 18), mul(T(0.12, 0.52, zc - 0.054), RX(0.5 + HP)), 0x4a90d9);
  [[0.29, 0.44, 0.1, 0xd8483c, 0.3], [0.02, 0.43, 0.13, 0x5ab06a, -0.2], [0.3, 0.45, -0.08, 0x4a90d9, 0.6]].forEach(([x, y, z, c, a]) => k.rbox(0.09, 0.09, 0.09, x, y, zc + z, c, 0.01, mul(RY(a), RZ(a * 0.5))));
});

furn({ id: 'jarro_ceramica', name: 'Jarro grande de cerâmica', cat: 'Enfeites', price: 520, lvl: 6, w: 0.5, d: 0.42, h: 0.82, cols: [0xc8703c, 0xf1e2c4], colN: ['Cerâmica', 'Faixas'], info: 'Ânfora de barro vidrado, feita em torno de oleiro.' }, (k) => {
  const P = [[0.001, 0], [0.1, 0], [0.11, 0.02], [0.17, 0.16], [0.205, 0.32], [0.19, 0.48], [0.13, 0.6], [0.085, 0.68], [0.08, 0.74], [0.105, 0.8], [0.11, 0.815], [0.09, 0.815], [0.066, 0.75], [0.001, 0.74]];
  k.latheS(P, 0, 0, 0, k.c1, 24); const band = (y0, y1, c) => { const pts = []; for (let i = 0; i <= 4; i++) { const y = y0 + ((y1 - y0) * i) / 4; let j = 0; while (P[j + 1][1] < y) j++; const t = (y - P[j][1]) / (P[j + 1][1] - P[j][1]); pts.push([P[j][0] + (P[j + 1][0] - P[j][0]) * t + 0.002, y]); } k.latheS(pts, 0, 0, 0, c, 24); };
  band(0.27, 0.3, k.c2); band(0.44, 0.47, k.c2); band(0.33, 0.41, tone(k.c1, 0.7)); band(0.7, 0.73, k.c2);
  for (let i = 0; i < 10; i++) { const a = (i / 10) * TAU; k.addS(new THREE.OctahedronGeometry(0.024, 0), mul(T(Math.cos(a) * 0.203, 0.37, Math.sin(a) * 0.203), RY(-a), S(0.3, 1.3, 0.8)), k.c2); }
  for (const s of [-1, 1]) k.addS(new THREE.TorusGeometry(0.075, 0.016, 6, 14, PI), mul(T(s * 0.105, 0.62, 0), RZ(s > 0 ? -HP + 0.35 : HP - 0.35)), k.c1);
});

furn({ id: 'cavalete_pintura', name: 'Cavalete de pintura', cat: 'Enfeites', price: 560, lvl: 6, w: 0.74, d: 0.66, h: 1.75, cols: [WOOD.pinho, 0xfbf7f0], colN: ['Madeira', 'Tela'], info: 'Um quadro pela metade esperando inspiração.' }, (k) => {
  const W = k.c1;
  for (const s of [-1, 1]) rod(k, [s * 0.33, 0.012, 0.22], [s * 0.05, 1.72, -0.02], 0.018, W, 6); rod(k, [0, 0.012, -0.3], [0, 1.6, -0.03], 0.018, tone(W, 0.9), 6); k.box(0.5, 0.035, 0.03, 0, 0.42, 0.17, tone(W, 0.9), RX(-0.14)); k.box(0.16, 0.03, 0.03, 0, 1.45, 0.02, tone(W, 0.9));
  k.box(0.62, 0.03, 0.1, 0, 0.66, 0.17, W, RX(-0.14)); k.box(0.62, 0.03, 0.015, 0, 0.675, 0.215, tone(W, 0.85));
  const CM = mul(T(0, 0.675, 0.16), RX(-0.14)); k.add(new THREE.BoxGeometry(0.56, 0.72, 0.025), mul(CM, T(0, 0.36, 0)), k.c2);
  k.art('cavalete', 0.56, 0.72, 0, 0, 0, (g, Wd, H) => { g.fillStyle = '#fbf8f0'; g.fillRect(0, 0, Wd, H); g.save(); g.beginPath(); g.moveTo(0, 0); g.lineTo(Wd, 0); g.lineTo(Wd, H * 0.5); g.quadraticCurveTo(Wd * 0.8, H * 0.62, Wd * 0.66, H * 0.8); g.quadraticCurveTo(Wd * 0.4, H * 0.84, Wd * 0.3, H); g.lineTo(0, H); g.clip(); PAINT.girassois(g, Wd, H); g.restore(); g.strokeStyle = 'rgba(90,80,70,0.5)'; g.lineWidth = 1.2; g.beginPath(); g.moveTo(Wd * 0.3, H * 0.9); g.lineTo(Wd, H * 0.9); g.moveTo(Wd * 0.62, H * 0.66); g.quadraticCurveTo(Wd * 0.74, H * 0.84, Wd * 0.62, H * 0.9); g.stroke(); g.beginPath(); g.arc(Wd * 0.84, H * 0.6, Wd * 0.07, 0, TAU); g.stroke(); }, { rot: mul(CM, T(0, 0.36, 0.0135)), res: 256 });
  // palette and brushes
  const PM = mul(T(0.14, 0.685, 0.19), RX(-0.14), RY(0.3)); k.add(new THREE.CylinderGeometry(0.09, 0.09, 0.008, 14), mul(PM, S(1.3, 1, 0.9)), WOOD.mel); [0xd8483c, 0xf2c84a, 0x4a90d9, 0x5ab06a, 0xfbf7f0, 0xc060c8].forEach((c, i) => k.add(new THREE.SphereGeometry(0.014, 6, 4), mul(PM, T(Math.cos(i * 0.7 + 0.3) * 0.075, 0.006, Math.sin(i * 0.7 + 0.3) * 0.05 - 0.01), S(1, 0.4, 1)), c));
  for (const [x, a, c] of [[-0.18, 0.5, 0xd8483c], [-0.12, 0.75, 0x4a90d9]]) { k.add(new THREE.CylinderGeometry(0.005, 0.004, 0.2, 5), mul(T(x, 0.695, 0.2), RY(a), RZ(HP)), 0xe8c88a); k.add(new THREE.CylinderGeometry(0.007, 0.004, 0.03, 5), mul(T(x, 0.695, 0.2), RY(a), RZ(HP), T(0, -0.11, 0)), c); }
});

furn({ id: 'manequim_costura', name: 'Manequim de costura', cat: 'Enfeites', price: 650, lvl: 7, w: 0.5, d: 0.5, h: 1.6, cols: [0xe9dcc0, WOOD.nogueira], colN: ['Tecido', 'Pé de madeira'], info: 'Veste o vestido novo antes de você.' }, (k) => {
  const W = k.c2; for (let i = 0; i < 3; i++) { const a = (i / 3) * TAU + PI / 2; tb(k, [[Math.cos(a) * 0.22, 0.012, Math.sin(a) * 0.22], [Math.cos(a) * 0.1, 0.1, Math.sin(a) * 0.1], [0, 0.3, 0]], 0.016, W, { n: 8, seg: 6 }); k.sph(0.022, Math.cos(a) * 0.22, 0.02, Math.sin(a) * 0.22, tone(W, 0.8), 1, 0.8, 1, 8); }
  k.lathe([[0.02, 0.28], [0.03, 0.32], [0.018, 0.36], [0.016, 0.8], [0.03, 0.84], [0.016, 0.88], [0.016, 0.95]], 0, 0, 0, W, 10);
  k.add(LG([[0.001, 0], [0.15, 0], [0.165, 0.03], [0.17, 0.1], [0.135, 0.24], [0.128, 0.3], [0.16, 0.42], [0.172, 0.5], [0.15, 0.56], [0.07, 0.6], [0.05, 0.62], [0.048, 0.66], [0.001, 0.66]], 20), mul(T(0, 0.9, 0), S(1, 1, 0.72)), k.c1);
  for (const s of [-1, 1]) k.add(new THREE.SphereGeometry(0.05, 10, 6), mul(T(s * 0.15, 1.42, 0), S(0.7, 1, 0.9)), tone(k.c1, 0.92)); k.lathe([[0.05, 1.56], [0.052, 1.57], [0.02, 1.585], [0.024, 1.6], [0.001, 1.605]], 0, 0, 0, W, 12);
  for (let i = 0; i < 4; i++) k.box(0.004, 0.62, 0.004, Math.sin(i * HP) * 0.0, 1.21, 0, tone(k.c1, 0.8)); k.add(new THREE.TorusGeometry(0.129, 0.004, 4, 20), mul(T(0, 1.185, 0), S(1, 1, 0.72), RX(HP)), tone(k.c1, 0.75));
  tb(k, [[-0.06, 1.5, 0.05], [-0.09, 1.52, 0.0], [-0.04, 1.54, -0.05], [0.04, 1.54, -0.05], [0.09, 1.52, 0.0], [0.07, 1.47, 0.07], [0.06, 1.3, 0.115], [0.065, 1.15, 0.1]], 0.006, 0xf2c84a, { n: 20, seg: 4 }); k.sph(0.03, -0.12, 1.3, 0.085, 0xd8483c, 1, 0.7, 0.7, 8); for (let i = 0; i < 4; i++) k.sphS(0.005, -0.13 + i * 0.008, 1.325, 0.085 + (i % 2) * 0.012, METAL.cromo, 1, 1, 1, 5);
});

furn({ id: 'violao_suporte', name: 'Violão no suporte', cat: 'Enfeites', price: 800, lvl: 7, w: 0.46, d: 0.42, h: 1.19, cols: [0xd9a05a, 0x2c2c30], colN: ['Tampo', 'Suporte'], info: 'Para uma modinha de viola no fim da tarde.' }, (k) => {
  const S2 = k.c2; for (let i = 0; i < 3; i++) { const a = (i / 3) * TAU + PI / 2; rod(k, [Math.cos(a) * 0.19, 0.01, Math.sin(a) * 0.19 - 0.02], [0, 0.26, -0.02], 0.009, S2, 6, true); } k.cylS(0.011, 0.011, 0.55, 0, 0.52, -0.02, S2, 8); for (const s of [-1, 1]) { tb(k, [[0, 0.3, -0.02], [s * 0.1, 0.24, 0.06], [s * 0.11, 0.25, 0.14]], 0.008, S2, { shiny: true, n: 8 }); k.sphS(0.013, s * 0.11, 0.255, 0.14, S2, 1, 1, 1, 6); tb(k, [[0, 0.79, -0.02], [s * 0.04, 0.8, 0.02], [s * 0.045, 0.82, 0.06]], 0.007, S2, { shiny: true, n: 6 }); }
  const GM = mul(T(0, 0.27, 0.1), RX(-0.12)), body = []; for (let i = 0; i <= 40; i++) { const t = (i / 40) * TAU, y = 0.24 - Math.cos(t) * 0.24, w = 0.155 + 0.035 * Math.cos(t) - 0.045 * Math.exp(-((y - 0.3) ** 2) / 0.006) + 0.0; body.push([Math.sin(t) * w * (0.75 + 0.25 * Math.abs(Math.sin(t)) ** 0.5), y]); }
  const sh = new THREE.Shape(); body.forEach(([x, y], i) => (i ? sh.lineTo(x, y) : sh.moveTo(x, y))); k.addS(new THREE.ExtrudeGeometry(sh, { depth: 0.09, bevelEnabled: false }), mul(GM, T(0, 0, -0.09)), tone(k.c1, 0.55)); k.add(new THREE.ExtrudeGeometry(sh, { depth: 0.004, bevelEnabled: false }), mul(GM, S(0.985, 0.99, 1), T(0, 0.002, 0)), k.c1);
  const G = (g, m, c, sh2) => (sh2 ? k.addS(g, mul(GM, m), c) : k.add(g, mul(GM, m), c));
  G(new THREE.CylinderGeometry(0.044, 0.044, 0.003, 18), mul(T(0, 0.31, 0.005), RX(HP)), 0x1c1410); G(new THREE.TorusGeometry(0.05, 0.005, 4, 18), T(0, 0.31, 0.005), 0x5a3a22); G(new THREE.BoxGeometry(0.11, 0.022, 0.01), T(0, 0.13, 0.008), 0x3a2418);
  G(new THREE.BoxGeometry(0.05, 0.36, 0.022), T(0, 0.62, -0.003), 0x5a3a22); G(new THREE.BoxGeometry(0.044, 0.36, 0.006), T(0, 0.62, 0.01), 0x2a1c14); for (let i = 0; i < 8; i++) G(new THREE.BoxGeometry(0.044, 0.003, 0.002), T(0, 0.46 + i * 0.042 * (1 - i * 0.03), 0.014), METAL.cromo, true);
  G(new THREE.BoxGeometry(0.065, 0.13, 0.018), mul(T(0, 0.86, -0.012), RX(-0.12)), 0x5a3a22); for (const s of [-1, 1]) for (let i = 0; i < 3; i++) { G(new THREE.CylinderGeometry(0.004, 0.004, 0.02, 5), mul(T(s * 0.04, 0.82 + i * 0.035, -0.016), RZ(HP)), METAL.cromo, true); G(new THREE.SphereGeometry(0.009, 6, 4), mul(T(s * 0.052, 0.82 + i * 0.035, -0.016), S(0.6, 1, 1)), 0xf3ead8); }
  for (let i = 0; i < 6; i++) G(new THREE.BoxGeometry(0.0012, 0.72, 0.0012), T(-0.017 + i * 0.0068, 0.49, 0.016), 0xd8d4c8);
});

furn({ id: 'cavalo_balanco', name: 'Cavalinho de balanço', cat: 'Enfeites', price: 900, lvl: 8, w: 1.14, d: 0.4, h: 0.99, cols: [0xe9dcc0, 0x8a5a3a], colN: ['Cavalo', 'Crina e balanço'], info: 'Upa, upa, cavalinho! Ainda range igual antigamente.' }, (k) => {
  const C = k.c1, M = k.c2, h = part(k, (p) => {
    for (const s of [-1, 1]) { p.add(new THREE.TorusGeometry(0.9, 0.022, 5, 20, 1.2), mul(T(0, 0.92, s * 0.15), RZ(-HP - 0.6)), M); for (const x of [-0.3, 0.3]) p.box(0.04, 0.03, 0.34, x, 0.075, 0, M); }
    for (const [x, a] of [[-0.24, -0.25], [0.24, 0.25]]) for (const s of [-1, 1]) p.add(new THREE.CylinderGeometry(0.035, 0.028, 0.42, 8), mul(T(x + a * 0.2, 0.3, s * 0.135), RZ(-a)), C);
    p.add(new THREE.SphereGeometry(0.17, 14, 10), mul(T(0, 0.56, 0), S(1.75, 1, 0.85)), C); p.add(new THREE.CylinderGeometry(0.085, 0.12, 0.3, 10), mul(T(0.3, 0.74, 0), RZ(-0.6)), C); p.add(new THREE.SphereGeometry(0.1, 12, 8), mul(T(0.42, 0.84, 0), RZ(-0.5), S(1.5, 0.95, 0.85)), C); p.add(new THREE.SphereGeometry(0.06, 10, 6), mul(T(0.53, 0.79, 0), S(1.1, 0.9, 0.9)), tone(C, 0.9));
    for (const s of [-1, 1]) { p.add(new THREE.ConeGeometry(0.025, 0.07, 5), mul(T(0.36, 0.95, s * 0.045), RZ(0.2)), C); p.sph(0.012, 0.46, 0.87, s * 0.07, INK, 1, 1, 0.6, 6); p.sph(0.008, 0.575, 0.79, s * 0.025, 0x5a4034, 1, 1, 1, 5); }
    for (let i = 0; i < 6; i++) p.sph(0.04, 0.33 - i * 0.035, 0.93 - i * 0.055, 0, M, 1, 1, 0.6, 7); p.sph(0.035, 0.42, 0.93, 0, M, 1.3, 0.8, 0.8, 7);
    tb(p, [[-0.3, 0.6, 0], [-0.4, 0.62, 0], [-0.46, 0.5, 0], [-0.44, 0.36, 0]], 0.03, M, { n: 8, seg: 6 });
    p.add(new THREE.SphereGeometry(0.12, 10, 6), mul(T(-0.02, 0.69, 0), S(1.2, 0.35, 1.1)), 0xc2483c); p.add(new THREE.TorusGeometry(0.15, 0.012, 4, 14), mul(T(-0.02, 0.56, 0), S(1, 1.02, 0.86), RY(HP)), 0xc2483c);
    tb(p, [[0.5, 0.8, 0.07], [0.4, 0.72, 0.1], [0.2, 0.7, 0.09]], 0.006, 0xc2483c, { n: 6, seg: 4 }); tb(p, [[0.5, 0.8, -0.07], [0.4, 0.72, -0.1], [0.2, 0.7, -0.09]], 0.006, 0xc2483c, { n: 6, seg: 4 }); p.cyl(0.012, 0.012, 0.3, 0.34, 0.86, 0, M, 6, RX(HP));
  });
  h.position.set(-0.04, 0.004, 0); k.tick((dt, t) => { h.rotation.z = 0.045 * Math.sin(t * 1.6); });
});

furn({ id: 'biombo', name: 'Biombo pintado', cat: 'Enfeites', price: 1100, lvl: 9, w: 1.5, d: 0.36, h: 1.72, cols: [WOOD.ebano, 0xf6ecd4], colN: ['Madeira', 'Painéis'], info: 'Três folhas com bambus, garças e cerejeira.' }, (k) => {
  const W = k.c1, pw = 0.52, ph = 1.68, ang = [0.42, -0.42, 0.42], xs = [-0.475, 0, 0.475], paper = css(k.c2);
  const draws = [(g, Wd, H) => { for (const [x, c] of [[0.3, '#5a9a54'], [0.55, '#4a8a4a'], [0.78, '#6aa860']]) { for (let i = 0; i < 9; i++) { g.fillStyle = c; g.fillRect(Wd * x - Wd * 0.03, H * (0.14 + i * 0.1), Wd * 0.06, H * 0.094); } for (let i = 0; i < 6; i++) leaf(g, Wd * x, H * (0.18 + i * 0.13), Wd * 0.3, Wd * 0.05, (i % 2 ? -0.5 : PI + 0.5) - 0.3, '#3f7a3c'); } },
    (g, Wd, H) => { circ(g, Wd * 0.6, H * 0.22, Wd * 0.2, '#d8483c'); for (const [x, y, s] of [[0.3, 0.42, 1], [0.66, 0.56, 0.8]]) { g.save(); g.translate(Wd * x, H * y); g.scale(s, s); ell(g, 0, 0, Wd * 0.14, Wd * 0.06, '#fbfbf6', -0.3); poly(g, [[-Wd * 0.05, -Wd * 0.02], [-Wd * 0.3, -Wd * 0.2], [-Wd * 0.2, -Wd * 0.02]], '#fbfbf6'); poly(g, [[Wd * 0.02, 0], [Wd * 0.16, -Wd * 0.26], [Wd * 0.1, Wd * 0.02]], '#eeeee6'); line(g, [[Wd * 0.1, -Wd * 0.04], [Wd * 0.26, -Wd * 0.12]], '#fbfbf6', Wd * 0.03); circ(g, Wd * 0.27, -Wd * 0.125, Wd * 0.022, '#d8483c'); line(g, [[-Wd * 0.1, Wd * 0.03], [-Wd * 0.28, Wd * 0.12]], '#2a2a30', Wd * 0.012); g.restore(); } hills(g, Wd, H, H * 0.82, H * 0.02, '#8fb4c8', 5, 2); hills(g, Wd, H, H * 0.88, H * 0.015, '#6a94b0', 6, 3); },
    (g, Wd, H) => { curve(g, Wd, H * 0.9, Wd * 0.5, H * 0.6, Wd * 0.2, H * 0.2, '#5a3a2a', Wd * 0.04); curve(g, Wd * 0.56, H * 0.62, Wd * 0.7, H * 0.4, Wd * 0.86, H * 0.3, '#5a3a2a', Wd * 0.025); curve(g, Wd * 0.4, H * 0.45, Wd * 0.2, H * 0.5, Wd * 0.1, H * 0.6, '#5a3a2a', Wd * 0.02); const r = rnd(8); for (let i = 0; i < 26; i++) { const t = r(), x = Wd * (1 - t * 0.8) + (r() - 0.5) * Wd * 0.3, y = H * (0.9 - t * 0.7) + (r() - 0.5) * H * 0.14; flower(g, x, y, Wd * (0.04 + r() * 0.03), 5, i % 3 ? '#f4a8c0' : '#fbd8e2', '#e8c060'); } }];
  xs.forEach((x, i) => { const M = mul(T(x, 0, 0), RY(ang[i])), P = (g, m, c) => k.add(g, mul(M, m), c);
    for (const s of [-1, 1]) P(new THREE.BoxGeometry(0.035, ph, 0.03), T(s * (pw / 2 - 0.0175), ph / 2 + 0.03, 0), W); for (const y of [0.12, ph / 2 + 0.03, ph + 0.015]) P(new THREE.BoxGeometry(pw, 0.035, 0.03), T(0, y, 0), W); for (const s of [-1, 1]) P(new THREE.BoxGeometry(0.035, 0.04, 0.03), T(s * (pw / 2 - 0.0175), 0.02, 0), tone(W, 0.8));
    k.add2(new THREE.PlaneGeometry(pw - 0.06, ph - 0.1), mul(M, T(0, ph / 2 + 0.065, 0)), k.c2);
    k.art(`biombo${i}:${k.c2}`, pw - 0.07, ph - 0.12, 0, 0, 0, (g, Wd, H) => { g.fillStyle = paper; g.fillRect(0, 0, Wd, H); draws[i](g, Wd, H); grain(g, Wd, H, 3 + i, 200, 0.03); }, { rot: mul(M, T(0, ph / 2 + 0.065, 0.002)), res: 256 }); });
});

furn({ id: 'casa_bonecas', name: 'Casa de bonecas', cat: 'Enfeites', price: 2200, lvl: 11, w: 0.92, d: 0.44, h: 1.12, cols: [0xf6dcd8, 0xc2554a], colN: ['Paredes', 'Telhado'], info: 'Dois andares, sótão e luzinha acesa no quarto.' }, (k) => {
  const C = k.c1, R = k.c2, W = 0.8, D = 0.36, t = 0.016;
  k.box(0.88, 0.04, 0.42, 0, 0.02, 0, WOOD.mel); for (const y of [0.04, 0.38, 0.72]) k.box(W, t, D, 0, y + t / 2, 0, tone(C, 0.85)); for (const s of [-1, 1]) k.box(t, 0.7, D, s * (W / 2 - t / 2), 0.39, 0, C); k.box(t, 0.68, D, 0.06, 0.39, 0, C); k.box(W, 0.7, t, 0, 0.39, -D / 2 + t / 2, C);
  [[-0.185, 0.215, 0.43, 0xd8e8d0], [0.23, 0.215, 0.32, 0xf6e4b8], [-0.185, 0.555, 0.43, 0xd4dcec], [0.23, 0.555, 0.32, 0xf4d0d8]].forEach(([x, y, w, c]) => k.box(w, 0.31, 0.004, x, y, -D / 2 + t + 0.003, c));
  // roof with attic
  plate(k, [[-0.42, 0], [0.42, 0], [0, 0.34]], t, 0, 0.736, -D / 2 + t / 2, C); for (const s of [-1, 1]) k.box(0.58, 0.02, D + 0.06, s * 0.225, 0.915, 0, R, RZ(-s * 0.68)); k.box(0.07, 0.14, 0.07, 0.22, 1.02, -0.05, tone(C, 0.8)); k.box(0.09, 0.02, 0.09, 0.22, 1.095, -0.05, R);
  k.cyl(0.05, 0.05, 0.006, 0, 0.88, -D / 2 + t + 0.003, 0xbfe0f0, 14, RX(HP)); k.box(0.1, 0.008, 0.006, 0, 0.88, -D / 2 + t + 0.006, 0xfbf7f0); k.box(0.008, 0.1, 0.006, 0, 0.88, -D / 2 + t + 0.006, 0xfbf7f0);
  // windows on the side walls and little furniture
  for (const y of [0.24, 0.58]) for (const s of [-1, 1]) { k.box(0.006, 0.12, 0.1, s * (W / 2 + 0.001), y, 0, 0xbfe0f0); k.box(0.008, 0.012, 0.12, s * (W / 2 + 0.002), y - 0.066, 0, 0xfbf7f0); }
  k.rbox(0.2, 0.05, 0.12, -0.24, 0.085, -0.08, 0xd98a7a, 0.015); k.rbox(0.2, 0.1, 0.03, -0.24, 0.13, -0.135, 0xd98a7a, 0.012); k.cyl(0.05, 0.05, 0.008, -0.12, 0.12, 0.06, WOOD.nogueira, 10); k.cyl(0.008, 0.012, 0.06, -0.12, 0.086, 0.06, WOOD.nogueira, 6); k.box(0.14, 0.004, 0.1, -0.2, 0.06, 0.07, 0x8fb0a0);
  k.box(0.14, 0.09, 0.1, 0.2, 0.1, -0.1, 0xfbf7f0); k.box(0.12, 0.006, 0.09, 0.2, 0.148, -0.1, 0x9a9aa2); k.box(0.06, 0.16, 0.08, 0.33, 0.135, -0.1, 0xd4e4ec); k.box(0.1, 0.06, 0.08, 0.2, 0.086, 0.06, WOOD.pinho); for (const s of [-1, 1]) k.box(0.03, 0.05, 0.03, 0.2 + s * 0.085, 0.08, 0.06, WOOD.mel);
  k.rbox(0.13, 0.04, 0.22, -0.3, 0.42, -0.04, 0xfbf7f0, 0.012); k.rbox(0.13, 0.03, 0.16, -0.3, 0.44, -0.01, 0x8fb4d9, 0.012); k.box(0.14, 0.1, 0.016, -0.3, 0.45, -0.16, WOOD.mel); k.rbox(0.1, 0.03, 0.06, -0.3, 0.455, -0.12, 0xfbf7f0, 0.012);
  k.box(0.07, 0.08, 0.06, -0.16, 0.44, -0.13, WOOD.mel); k.lathe2([[0.03, 0], [0.018, 0.035]], -0.16, 0.5, -0.13, 0xf6e4b8, 8); k.glow(new THREE.SphereGeometry(0.014, 8, 6), WARM, 3, { at: [-0.16, 0.508, -0.13], day: 0.5 }); k.box(0.2, 0.004, 0.14, -0.14, 0.4, 0.07, 0xd9607a);
  k.rbox(0.1, 0.07, 0.16, 0.3, 0.45, -0.08, 0xfbf7f0, 0.025); k.box(0.012, 0.2, 0.012, 0.16, 0.5, -0.14, WOOD.mel); k.sph(0.035, 0.16, 0.6, -0.14, 0x6aa85a, 1, 1.1, 1, 7); k.box(0.1, 0.12, 0.012, 0.3, 0.6, -0.158, 0xbfe0f0);
  k.box(0.06, 0.16, 0.006, 0.06, 0.13, D / 2 - 0.004, 0x5a86a8); k.sphS(0.006, 0.08, 0.13, D / 2 + 0.002, GOLD, 1, 1, 1, 5);
});

furn({ id: 'escultura_moderna', name: 'Escultura moderna', cat: 'Enfeites', price: 3800, lvl: 13, w: 0.56, d: 0.56, h: 1.42, cols: [0xb5803a, 0xf1ede4], colN: ['Bronze', 'Pedestal'], info: 'Um nó de bronze polido: arte de galeria na sua sala.' }, (k) => {
  k.rbox(0.44, 0.9, 0.44, 0, 0.45, 0, k.c2, 0.012); k.box(0.48, 0.04, 0.48, 0, 0.02, 0, tone(k.c2, 0.85)); k.box(0.47, 0.03, 0.47, 0, 0.915, 0, tone(k.c2, 0.92)); k.boxS(0.12, 0.05, 0.004, 0, 0.78, 0.222, METAL.latao);
  k.cylS(0.07, 0.09, 0.03, 0, 0.945, 0, tone(k.c1, 0.6), 16); k.addS(new THREE.TorusKnotGeometry(0.15, 0.052, 72, 8, 2, 3), mul(T(0, 1.25, 0), RX(HP), RZ(0.3), S(1, 1, 1.25)), k.c1); k.cylS(0.02, 0.03, 0.1, 0, 1.0, 0, tone(k.c1, 0.6), 8);
});

furn({ id: 'vaso_porcelana', name: 'Vaso de porcelana pintada', cat: 'Enfeites', price: 6500, lvl: 15, w: 0.56, d: 0.56, h: 1.3, cols: [0xfbfaf6, 0x2f5aa8], colN: ['Porcelana', 'Pintura'], info: 'Azul e branco, com tampa e peanha: peça de colecionador.' }, (k) => {
  const C = k.c1, B = k.c2, y0 = 0.22;
  k.lathe([[0.001, 0], [0.2, 0], [0.21, 0.02], [0.16, 0.05], [0.15, 0.15], [0.19, 0.2], [0.2, 0.22], [0.001, 0.22]], 0, 0, 0, WOOD.ebano, 8); for (let i = 0; i < 4; i++) k.sph(0.035, Math.cos(i * HP + PI / 4) * 0.19, 0.03, Math.sin(i * HP + PI / 4) * 0.19, WOOD.ebano, 1, 0.9, 1, 8);
  const P = [[0.001, 0], [0.12, 0], [0.125, 0.02], [0.15, 0.1], [0.22, 0.3], [0.26, 0.48], [0.25, 0.62], [0.19, 0.74], [0.12, 0.8], [0.1, 0.84], [0.11, 0.9], [0.125, 0.92], [0.001, 0.92]];
  k.latheS(P, 0, y0, 0, C, 24); const at = (y) => { let j = 0; while (P[j + 1][1] < y) j++; const t = (y - P[j][1]) / (P[j + 1][1] - P[j][1]); return P[j][0] + (P[j + 1][0] - P[j][0]) * t; }, band = (a, b, c) => { const pts = []; for (let i = 0; i <= 5; i++) { const y = a + ((b - a) * i) / 5; pts.push([at(y) + 0.002, y]); } k.latheS(pts, 0, y0, 0, c, 24); };
  band(0.022, 0.07, B); band(0.2, 0.215, B); band(0.7, 0.715, B); band(0.8, 0.9, B); band(0.86, 0.875, C);
  // painted flowers and leaves around the belly
  for (let i = 0; i < 6; i++) { const a = (i / 6) * TAU, y = 0.46 + (i % 2) * 0.1, r = at(y) + 0.001, x = Math.cos(a) * r, z = Math.sin(a) * r, M = mul(T(x, y0 + y, z), RY(-a + HP), RX(-0.12 + (i % 2) * 0.3));
    for (let j = 0; j < 6; j++) k.addS(new THREE.SphereGeometry(0.032, 6, 4), mul(M, RZ((j / 6) * TAU), T(0.036, 0, 0), S(1, 0.55, 0.12)), B); k.addS(new THREE.SphereGeometry(0.018, 6, 4), mul(M, S(1, 1, 0.3)), tone(B, 1.5));
    for (const s of [-1, 1]) { const a2 = a + s * 0.3, y2 = y - 0.11, r2 = at(y2) + 0.001; k.addS(new THREE.SphereGeometry(0.04, 6, 4), mul(T(Math.cos(a2) * r2, y0 + y2, Math.sin(a2) * r2), RY(-a2 + HP), RZ(s * 0.9), S(1, 0.35, 0.1)), tone(B, 1.25)); } }
  for (let i = 0; i < 18; i++) { const a = (i / 18) * TAU; for (const yy of [0.25, 0.67]) k.addS(new THREE.OctahedronGeometry(0.013, 0), mul(T(Math.cos(a) * (at(yy) + 0.001), y0 + yy, Math.sin(a) * (at(yy) + 0.001)), RY(-a), S(0.4, 1, 1)), B); }
  k.latheS([[0.13, 0], [0.135, 0.015], [0.1, 0.05], [0.05, 0.09], [0.02, 0.1], [0.03, 0.125], [0.035, 0.14], [0.001, 0.155]], 0, y0 + 0.92, 0, C, 20); k.latheS([[0.132, 0.002], [0.137, 0.016], [0.118, 0.034]], 0, y0 + 0.92, 0, B, 20); k.sphS(0.03, 0, y0 + 1.055, 0, B, 1, 0.9, 1, 10);
});

// =====================================================================================================================
// VASOS E PLANTAS (containers only: the game puts soil and the growing plant at each point of def.plants)
// =====================================================================================================================
// soil height of a pot of plant-scale s (and height h) standing on a surface at y
const py = (y, s = 1, h) => +(y + 0.92 * (h ?? 0.25 * s)).toFixed(3);
// a pot placed by its soil point p = [x, ySoil, z, scale] exactly as listed in def.plants
function potAt(k, p, c, style = 'barro', o = {}) {
  const [x, ys, z, s] = p, h = o.h ?? 0.25 * s, P = POTS[style], r = o.r ?? (0.122 * s) / P[P.length - 1][0], y0 = ys - h * 0.92;
  pot(k, x, y0, z, r, h, c, style, o.seg ?? 16, o.shiny); if (o.saucer) saucer(k, x, y0 - 0.012, z, r * 0.82, o.saucer === true ? tone(c, 0.85) : o.saucer); return { y0, r, h };
}
const soilBox = (k, w, d, x, y, z) => k.box(w, 0.02, d, x, y - 0.01, z, SOIL);
function wateringCan(k, x, y, z, s, c, ry = 0) {
  const M = mul(T(x, y, z), RY(ry), S(s, s, s)), A = (g, m) => k.addS(g, mul(M, m), c);
  A(LG([[0.001, 0], [0.085, 0], [0.09, 0.01], [0.08, 0.17], [0.07, 0.175], [0.066, 0.165], [0.001, 0.165]], 14), T(0, 0, 0)); A(new THREE.CylinderGeometry(0.012, 0.02, 0.24, 6), mul(T(0.15, 0.12, 0), RZ(-0.8))); A(new THREE.CylinderGeometry(0.034, 0.014, 0.03, 8), mul(T(0.245, 0.212, 0), RZ(-0.8)));
  A(new THREE.TorusGeometry(0.065, 0.008, 4, 10, PI), mul(T(-0.08, 0.095, 0), RZ(HP))); A(new THREE.TorusGeometry(0.06, 0.007, 4, 10, PI), T(0, 0.17, 0));
}
function trowel(k, x, y, z, M0, c = 0x6a9a6a) { const M = mul(T(x, y, z), M0 || T(0, 0, 0)); k.add(new THREE.CylinderGeometry(0.014, 0.012, 0.1, 6), mul(M, T(0, 0.05, 0)), c); k.addS(new THREE.CylinderGeometry(0.005, 0.005, 0.05, 5), mul(M, T(0, -0.02, 0)), METAL.cromo); k.addS(new THREE.SphereGeometry(0.04, 8, 5), mul(M, T(0, -0.1, 0), S(0.85, 1.7, 0.12)), METAL.cromo); }

furn({ id: 'vaso_barro', name: 'Vaso de barro', cat: 'Vasos e plantas', price: 20, lvl: 1, w: 0.34, d: 0.34, h: 0.29, cols: [0xc66f48, 0xb05c3a], colN: ['Vaso', 'Pratinho'], plants: [[0, 0.263, 0, 1, 'pot']], info: 'O clássico: barro cru, um pratinho e uma muda.' }, (k, d) => {
  saucer(k, 0, 0, 0, 0.15, k.c2); potAt(k, d.plants[0], k.c1, 'barro', { h: 0.27, r: 0.158, seg: 20 }); k.add(new THREE.TorusGeometry(0.151, 0.004, 4, 20), mul(T(0, 0.228, 0), RX(HP)), tone(k.c1, 0.85));
});

furn({ id: 'vasinho_mesa', name: 'Vasinho de mesa', cat: 'Vasos e plantas', kind: 'top', price: 30, lvl: 1, w: 0.16, d: 0.16, h: 0.125, cols: [0x8fb0a0, 0xf3ead8], colN: ['Vasinho', 'Pratinho'], plants: [[0, 0.112, 0, 0.6, 'pot']], info: 'Cabe uma suculenta e muito carinho.' }, (k, d) => {
  saucer(k, 0, 0, 0, 0.075, k.c2); potAt(k, d.plants[0], k.c1, 'liso', { h: 0.11, seg: 16, shiny: true }); for (let i = 0; i < 8; i++) k.sphS(0.008, Math.cos(i * 0.785) * 0.072, 0.07, Math.sin(i * 0.785) * 0.072, k.c2, 1, 1, 0.5, 5);
});

furn({ id: 'vaso_ceramica_esmaltada', name: 'Vaso de cerâmica esmaltada', cat: 'Vasos e plantas', price: 90, lvl: 2, w: 0.4, d: 0.4, h: 0.35, cols: [0x3f7a8a, 0xe9dcc0], colN: ['Esmalte', 'Escorrido'], plants: [[0, 0.314, 0, 1, 'pot']], info: 'Esmalte brilhante escorrendo pela borda.' }, (k, d) => {
  saucer(k, 0, 0, 0, 0.13, tone(k.c1, 0.8)); const { y0, r, h } = potAt(k, d.plants[0], k.c1, 'bojudo', { h: 0.32, r: 0.185, seg: 22, shiny: true });
  k.latheS([[r * 0.955, h * 0.72], [r * 0.805, h * 0.9], [r * 0.87, h * 0.975], [r * 0.87, h * 1.004], [r * 0.73, h * 1.004]], 0, y0, 0, k.c2, 22);
  for (let i = 0; i < 11; i++) { const a = (i / 11) * TAU, l = 0.03 + ((i * 7) % 5) * 0.012; k.sphS(0.018, Math.cos(a) * r * 0.955, y0 + h * 0.7 - l * 0.3, Math.sin(a) * r * 0.955, k.c2, 1, 1 + l * 30, 0.5, 6); }
});

furn({ id: 'cachepo_palha', name: 'Cachepô de palha', cat: 'Vasos e plantas', price: 120, lvl: 2, w: 0.48, d: 0.45, h: 0.36, cols: [0xd2b27a, 0xf3ead8], colN: ['Palha', 'Pompons'], plants: [[0, 0.3, 0, 1.1, 'pot']], info: 'Cesto trançado com pompons para a planta se sentir de férias.' }, (k, d) => {
  const prof = (t) => 0.13 + 0.07 * Math.sin(PI * (0.12 + t * 0.7)); basket(k, 0, 0, 0, 0.33, prof, k.c1, 9, 20); k.add(new THREE.TorusGeometry(prof(1) + 0.004, 0.013, 5, 20), mul(T(0, 0.33, 0), RX(HP)), tone(k.c1, 0.82));
  k.add2(LG([[prof(1), 0.33], [prof(1) - 0.012, 0.29]], 20), null, tone(k.c1, 0.75)); k.cyl(prof(1) - 0.012, prof(1) - 0.012, 0.006, 0, 0.297, 0, SOIL, 20);
  for (const s of [-1, 1]) tb(k, [[s * (prof(1) - 0.01), 0.32, -0.05], [s * (prof(1) + 0.045), 0.35, -0.03], [s * (prof(1) + 0.045), 0.35, 0.03], [s * (prof(1) - 0.01), 0.32, 0.05]], 0.009, tone(k.c1, 0.82), { n: 8 });
  for (let i = 0; i < 12; i++) { const a = (i / 12) * TAU + 0.26; k.sph(0.02, Math.cos(a) * (prof(0.62) + 0.012), 0.2, Math.sin(a) * (prof(0.62) + 0.012), i % 2 ? k.c2 : 0xd98a7a, 1, 1, 1, 6); }
});

furn({ id: 'vaso_cimento', name: 'Vaso de cimento facetado', cat: 'Vasos e plantas', price: 150, lvl: 3, w: 0.42, d: 0.42, h: 0.39, cols: [0xb9b5ac, 0x3c3c40], colN: ['Cimento', 'Base'], plants: [[0, 0.361, 0, 1.2, 'pot']], info: 'Moderno, pesadão e cheio de quinas.' }, (k, d) => {
  k.cyl(0.12, 0.13, 0.03, 0, 0.015, 0, k.c2, 8); potAt(k, d.plants[0], k.c1, 'liso', { h: 0.36, r: 0.2, seg: 8 }); k.add(new THREE.CylinderGeometry(0.203, 0.172, 0.08, 8, 1, true), T(0, 0.33, 0), tone(k.c1, 0.9));
});

furn({ id: 'trio_vasinhos', name: 'Trio de vasinhos', cat: 'Vasos e plantas', kind: 'top', price: 110, lvl: 2, w: 0.5, d: 0.18, h: 0.14, cols: [0xf3ead8, WOOD.mel], colN: ['Vasinhos', 'Bandeja'], plants: [[-0.155, 0.127, 0, 0.6, 'pot'], [0, 0.127, 0, 0.6, 'pot'], [0.155, 0.127, 0, 0.6, 'pot']], info: 'Três irmãozinhos numa bandeja de madeira.' }, (k, d) => {
  k.rbox(0.5, 0.018, 0.17, 0, 0.009, 0, k.c2, 0.007); for (const s of [-1, 1]) k.box(0.012, 0.012, 0.17, s * 0.244, 0.022, 0, tone(k.c2, 0.85));
  d.plants.forEach((p, i) => { potAt(k, p, [k.c1, tone(k.c1, 0.9), k.c1][i], ['cilindro', 'liso', 'tigela'][i], { h: 0.118, seg: 14, shiny: true }); const c = [0xd98a7a, 0x8fb0a0, 0xe8c468][i]; k.addS(new THREE.TorusGeometry(i === 1 ? 0.058 : 0.07, 0.004, 4, 14), mul(T(p[0], i === 1 ? 0.07 : 0.09, 0), RX(HP)), c); });
});

furn({ id: 'vaso_moderno_pes', name: 'Vaso moderno com pés', cat: 'Vasos e plantas', price: 260, lvl: 4, w: 0.42, d: 0.42, h: 0.72, cols: [0xfbf8f2, WOOD.carvalho], colN: ['Vaso', 'Pés de madeira'], plants: [[0, 0.694, 0, 1.1, 'pot']], info: 'Branquinho, alto, com pés palito de madeira.' }, (k, d) => {
  const { y0, r } = potAt(k, d.plants[0], k.c1, 'liso', { h: 0.32, r: 0.17, seg: 24, shiny: true });
  for (let i = 0; i < 4; i++) { const a = (i / 4) * TAU + PI / 4, c = Math.cos(a), s = Math.sin(a); rod(k, [c * 0.19, 0.012, s * 0.19], [c * 0.135, y0 + 0.2, s * 0.135], 0.014, k.c2, 8); }
  k.box(0.26, 0.022, 0.03, 0, y0 - 0.011, 0, k.c2, RY(PI / 4)); k.box(0.26, 0.022, 0.03, 0, y0 - 0.011, 0, k.c2, RY(-PI / 4)); k.add(new THREE.TorusGeometry(0.128, 0.008, 4, 20), mul(T(0, y0 + 0.1, 0), RX(HP)), tone(k.c2, 0.85));
});

furn({ id: 'vaso_macrame', name: 'Vaso suspenso de macramê', cat: 'Vasos e plantas', kind: 'ceil', price: 190, lvl: 3, w: 0.34, d: 0.34, h: 1.18, cols: [0xf3ead6, 0xc66f48], colN: ['Macramê', 'Vaso'], plants: [[0, ROOM_H - 0.8, 0, 0.9, 'hang']], info: 'Pendurado em nós de barbante, deixa a planta cair em cascata.' }, (k, d) => {
  const Y = ROOM_H, C = k.c1, p = d.plants[0]; rose(k, 0.04, METAL.latao); k.addS(new THREE.TorusGeometry(0.02, 0.004, 4, 10), T(0, Y - 0.055, 0), METAL.latao); k.cyl(0.009, 0.009, 0.06, 0, Y - 0.1, 0, C, 6);
  const { y0, r, h } = potAt(k, p, k.c2, 'tigela', { h: 0.17, seg: 18 });
  for (let i = 0; i < 4; i++) { const a = (i / 4) * TAU + PI / 4, c = Math.cos(a), s = Math.sin(a), a2 = a + PI / 4, c2 = Math.cos(a2), s2 = Math.sin(a2);
    rod(k, [0, Y - 0.12, 0], [c * (r + 0.01), y0 + h + 0.02, s * (r + 0.01)], 0.004, C, 4); k.sph(0.009, c * (r + 0.01) * 0.5, (Y - 0.12 + y0 + h + 0.02) / 2, s * (r + 0.01) * 0.5, C, 1, 1.4, 1, 5); k.sph(0.011, c * (r + 0.01), y0 + h + 0.02, s * (r + 0.01), C, 1, 1, 1, 5);
    for (const [cc, ss] of [[c2, s2], [Math.cos(a - PI / 4), Math.sin(a - PI / 4)]]) rod(k, [c * (r + 0.01), y0 + h + 0.02, s * (r + 0.01)], [cc * (r * 0.9), y0 + h * 0.45, ss * (r * 0.9)], 0.0035, C, 4);
    k.sph(0.011, c2 * r * 0.9, y0 + h * 0.45, s2 * r * 0.9, C, 1, 1, 1, 5); rod(k, [c2 * r * 0.9, y0 + h * 0.45, s2 * r * 0.9], [0, y0 - 0.03, 0], 0.0035, C, 4); }
  k.sph(0.018, 0, y0 - 0.035, 0, C, 1, 1.2, 1, 7); for (let i = 0; i < 8; i++) rod(k, [0, y0 - 0.04, 0], [Math.cos(i * 0.785) * 0.03, y0 - 0.2 - (i % 2) * 0.02, Math.sin(i * 0.785) * 0.03], 0.003, C, 3);
});

furn({ id: 'vaso_suspenso_ceramica', name: 'Vaso suspenso de cerâmica', cat: 'Vasos e plantas', kind: 'ceil', price: 240, lvl: 4, w: 0.36, d: 0.36, h: 0.9, cols: [0xf3ead8, 0x5a8a9a], colN: ['Cerâmica', 'Faixa'], plants: [[0, ROOM_H - 0.735, 0, 1, 'hang']], info: 'Uma cuia de cerâmica pendurada por três correntinhas.' }, (k, d) => {
  const Y = ROOM_H; rose(k, 0.045, METAL.latao); const { y0, r, h } = potAt(k, d.plants[0], k.c1, 'tigela', { h: 0.18, r: 0.165, seg: 22, shiny: true });
  k.latheS([[r * 0.73, h * 0.3], [r * 0.945, h * 0.7], [r * 1.004, h * 0.9]], 0, y0, 0, k.c2, 22); k.sphS(0.02, 0, y0 - 0.005, 0, k.c1, 1, 0.8, 1, 8);
  for (let i = 0; i < 3; i++) { const a = (i / 3) * TAU + 0.5; rod(k, [0, Y - 0.03, 0], [Math.cos(a) * (r - 0.01), y0 + h - 0.005, Math.sin(a) * (r - 0.01)], 0.003, METAL.latao, 4, true); k.sphS(0.01, Math.cos(a) * (r - 0.01), y0 + h, Math.sin(a) * (r - 0.01), METAL.latao, 1, 1, 1, 6); }
});

furn({ id: 'gaiola_planta', name: 'Gaiola decorativa com planta', cat: 'Vasos e plantas', kind: 'ceil', price: 620, lvl: 6, w: 0.4, d: 0.4, h: 1.0, cols: [0xfbf8f0, 0xc66f48], colN: ['Gaiola', 'Vasinho'], plants: [[0, ROOM_H - 0.815, 0, 0.8, 'hang']], info: 'Nenhum passarinho preso: só uma planta em liberdade.' }, (k, d) => {
  const Y = ROOM_H, C = k.c1, yb = Y - 0.97, R = 0.18; rose(k, 0.045, C); chain(k, 0, Y - 0.34, Y - 0.03, 0, C, 1.2); k.addS(new THREE.TorusGeometry(0.022, 0.004, 4, 10), T(0, Y - 0.36, 0), C);
  k.addS(LG([[0.001, 0], [R, 0], [R + 0.008, 0.012], [R, 0.03], [0.001, 0.03]], 20), T(0, yb, 0), C); for (const y of [yb + 0.03, yb + 0.2, yb + 0.36]) k.addS(new THREE.TorusGeometry(R - 0.004, 0.005, 4, 20), mul(T(0, y, 0), RX(HP)), C);
  for (let i = 0; i < 12; i++) { const a = (i / 12) * TAU, c = Math.cos(a), s = Math.sin(a); tb(k, [[c * (R - 0.004), yb + 0.03, s * (R - 0.004)], [c * (R - 0.004), yb + 0.36, s * (R - 0.004)], [c * R * 0.8, yb + 0.48, s * R * 0.8], [c * R * 0.4, yb + 0.57, s * R * 0.4], [0, yb + 0.6, 0]], 0.0035, C, { n: 10, seg: 4, shiny: true }); }
  k.sphS(0.022, 0, yb + 0.6, 0, C, 1, 1, 1, 8); for (let i = 0; i < 12; i++) k.sphS(0.008, Math.cos(i * 0.5236) * (R + 0.004), yb + 0.2, Math.sin(i * 0.5236) * (R + 0.004), tone(C, 0.85), 1, 1, 1, 5);
  potAt(k, d.plants[0], k.c2, 'barro', { h: 0.13, seg: 14 });
});

furn({ id: 'terrario_vidro', name: 'Terrário de vidro', cat: 'Vasos e plantas', kind: 'top', price: 360, lvl: 5, w: 0.28, d: 0.28, h: 0.38, cols: [WOOD.nogueira, 0xd9d2c0], colN: ['Base', 'Pedrinhas'], plants: [[0, 0.075, 0, 0.6, 'pot']], info: 'Um jardinzinho inteiro debaixo da redoma.' }, (k) => {
  k.lathe([[0.001, 0], [0.13, 0], [0.135, 0.012], [0.13, 0.035], [0.115, 0.04], [0.001, 0.04]], 0, 0, 0, k.c1, 22); k.cyl(0.108, 0.108, 0.02, 0, 0.05, 0, 0x5a4634, 18); k.add(new THREE.SphereGeometry(0.1, 14, 6, 0, TAU, 0, HP), mul(T(0, 0.058, 0), S(1, 0.18, 1)), SOIL);
  const r = rnd(4); for (let i = 0; i < 16; i++) { const a = r() * TAU, d2 = 0.06 + r() * 0.04; k.sph(0.011 + r() * 0.007, Math.cos(a) * d2, 0.066, Math.sin(a) * d2, i % 3 ? k.c2 : tone(k.c2, 0.75), 1, 0.7, 1, 5); } for (const [x, z, s] of [[0.06, 0.03, 0.02], [-0.05, -0.05, 0.024]]) k.add(new THREE.SphereGeometry(s, 7, 4, 0, TAU, 0, HP), T(x, 0.065, z), 0x6a9a4a);
  k.glass(LG([[0.112, 0.04], [0.114, 0.2], [0.1, 0.28], [0.06, 0.335], [0.001, 0.35]], 22), null, 0xdff2f4, 0.22); k.sphS(0.016, 0, 0.362, 0, k.c1, 1, 1, 1, 8);
});

furn({ id: 'fonte_mesa_plantas', name: 'Fonte de mesa com plantas', cat: 'Vasos e plantas', kind: 'top', price: 850, lvl: 8, w: 0.5, d: 0.36, h: 0.2, cols: [0xa8a49a, 0x7fc8e0], colN: ['Pedra', 'Água'], plants: [[-0.15, 0.117, 0.03, 0.6, 'pot'], [0.155, 0.097, -0.02, 0.6, 'pot']], info: 'Aguinha correndo entre dois cantinhos verdes.' }, (k, d) => {
  const C = k.c1; k.lathe([[0.001, 0], [0.13, 0], [0.15, 0.02], [0.16, 0.06], [0.15, 0.065], [0.135, 0.03], [0.001, 0.025]], 0, 0, 0, C, 12); const w0 = k.glow(new THREE.CylinderGeometry(0.138, 0.138, 0.004, 12), k.c2, 0.5, { at: [0, 0.052, 0], day: 0.6, opacity: 0.8 });
  for (const [x, z, s, y] of [[0.02, -0.04, 0.07, 0.04], [-0.03, 0.02, 0.05, 0.035], [0.05, 0.04, 0.04, 0.03]]) k.add(new THREE.DodecahedronGeometry(s, 0), mul(T(x, y + s * (s > 0.06 ? 1.0 : 0.5), z), RY(x * 40), S(1, s > 0.06 ? 1.5 : 0.9, 1)), tone(C, 0.85 + s * 2));
  k.lathe([[0.001, 0.16], [0.03, 0.16], [0.06, 0.18], [0.065, 0.2], [0.055, 0.2], [0.03, 0.185], [0.001, 0.18]], 0.02, 0, -0.04, C, 10); const w1 = k.glow(new THREE.CylinderGeometry(0.052, 0.052, 0.004, 10), k.c2, 0.5, { at: [0.02, 0.194, -0.04], day: 0.6, opacity: 0.8 });
  const fall = k.glow(new THREE.CylinderGeometry(0.006, 0.009, 0.15, 6), k.c2, 0.6, { at: [0.07, 0.125, -0.01], day: 0.6, opacity: 0.7 }); k.tick((dt, t) => { fall.scale.x = fall.scale.z = 1 + 0.25 * Math.sin(t * 9); w0.rotation.y = t * 0.3; w1.scale.setScalar(1 + 0.02 * Math.sin(t * 5)); });
  potAt(k, d.plants[0], tone(C, 1.1), 'tigela', { h: 0.11, seg: 10 }); potAt(k, d.plants[1], tone(C, 0.9), 'liso', { h: 0.105, seg: 8 }); k.add(new THREE.DodecahedronGeometry(0.035, 0), T(0.19, 0.034, 0.09), tone(C, 0.8)); k.add(new THREE.DodecahedronGeometry(0.03, 0), T(-0.2, 0.03, -0.07), tone(C, 0.95));
});

// ---------- on the wall ----------
furn({ id: 'suporte_parede_3', name: 'Suporte de parede com 3 vasos', cat: 'Vasos e plantas', kind: 'wall', price: 320, lvl: 4, w: 0.96, d: 0.25, h: 0.21, cols: [WOOD.mel, 0xc66f48], colN: ['Tábua', 'Vasos'], plants: [[-0.31, 1.52, 0.13, 0.7, 'pot'], [0, 1.52, 0.13, 0.7, 'pot'], [0.31, 1.52, 0.13, 0.7, 'pot']], info: 'Três argolas de ferro abraçando três vasinhos.' }, (k, d) => {
  k.rbox(0.96, 0.13, 0.022, 0, 1.5, 0.011, k.c1, 0.008); for (const s of [-1, 1]) k.cylS(0.012, 0.012, 0.006, s * 0.44, 1.5, 0.024, 0x3c3c40, 8, RX(HP));
  for (const p of d.plants) { const { r, y0, h } = potAt(k, p, k.c2, 'barro', { seg: 14 }); k.addS(new THREE.TorusGeometry(r * 0.93, 0.006, 4, 18), mul(T(p[0], y0 + h * 0.72, p[2]), RX(HP)), 0x3c3c40); k.boxS(0.02, 0.012, p[2] - r * 0.9, p[0], y0 + h * 0.72, (p[2] - r * 0.9) / 2 + 0.02, 0x3c3c40); k.boxS(0.03, 0.07, 0.008, p[0], y0 + h * 0.72, 0.026, 0x3c3c40); }
});

furn({ id: 'prateleira_plantas', name: 'Prateleira de plantas', cat: 'Vasos e plantas', kind: 'wall', price: 420, lvl: 5, w: 1.3, d: 0.26, h: 0.42, cols: [WOOD.carvalho, 0xf3ead8], colN: ['Madeira', 'Vasos'], plants: [[-0.46, py(1.315, 0.8), 0.14, 0.8, 'pot'], [-0.14, py(1.315, 0.7, 0.14), 0.14, 0.7, 'pot'], [0.16, py(1.315, 0.8, 0.22), 0.14, 0.8, 'pot'], [0.47, py(1.315, 0.7), 0.14, 0.7, 'hang']], info: 'Quatro lugares ao sol, com gradinha para ninguém cair.' }, (k, d) => {
  const W = k.c1; k.rbox(1.3, 0.03, 0.24, 0, 1.3, 0.13, W, 0.006); k.box(1.3, 0.1, 0.018, 0, 1.25, 0.009, tone(W, 0.9)); for (const s of [-1, 1]) plate(k, [[0, 0], [0.2, 0], [0.2, -0.02], [0.03, -0.17], [0, -0.17]], 0.022, s * 0.5, 1.285, 0.018, tone(W, 0.85), RY(-HP));
  rod(k, [-0.63, 1.37, 0.24], [0.63, 1.37, 0.24], 0.006, METAL.latao, 5, true); for (let i = 0; i < 7; i++) rod(k, [-0.63 + i * 0.21, 1.315, 0.24], [-0.63 + i * 0.21, 1.37, 0.24], 0.005, METAL.latao, 5, true);
  potAt(k, d.plants[0], k.c2, 'cilindro', { shiny: true, seg: 18 }); potAt(k, d.plants[1], 0xc66f48, 'tigela', { h: 0.14 }); potAt(k, d.plants[2], tone(k.c2, 0.85), 'sino', { h: 0.22, shiny: true }); potAt(k, d.plants[3], 0x8fb0a0, 'bojudo', { shiny: true });
});

furn({ id: 'jardim_vertical', name: 'Jardim vertical de treliça', cat: 'Vasos e plantas', kind: 'wall', price: 1400, lvl: 9, w: 1.1, d: 0.26, h: 1.56, cols: [WOOD.pinho, 0xc66f48], colN: ['Treliça', 'Vasos'], plants: [[-0.27, 2.0, 0.14, 0.7, 'hang'], [0.27, 2.0, 0.14, 0.7, 'hang'], [-0.27, 1.5, 0.14, 0.7, 'pot'], [0.27, 1.5, 0.14, 0.7, 'pot'], [-0.27, 1.0, 0.14, 0.7, 'pot'], [0.27, 1.0, 0.14, 0.7, 'pot']], info: 'Seis vasos presos numa treliça: uma parede que floresce.' }, (k, d) => {
  const W = k.c1, y0 = 0.72, H = 1.5, w = 1.04;
  for (const s of [-1, 1]) { k.box(0.05, H + 0.06, 0.035, s * (w / 2), y0 + H / 2, 0.0175, W); k.box(w + 0.05, 0.05, 0.035, 0, y0 + H / 2 + s * (H / 2), 0.0175, W); }
  const n = 9; for (let i = -n; i <= n; i++) for (const s of [-1, 1]) { const x0 = i * 0.2, xa = Math.max(-w / 2, Math.min(w / 2, x0 - (s * H) / 2)), xb = Math.max(-w / 2, Math.min(w / 2, x0 + (s * H) / 2)); if (Math.abs(xb - xa) < 0.05) continue; const ya = y0 + H / 2 + (s * (xa - x0)), yb = y0 + H / 2 + (s * (xb - x0)); k.add(new THREE.BoxGeometry(Math.hypot(xb - xa, yb - ya), 0.03, 0.01), mul(T((xa + xb) / 2, (ya + yb) / 2, s > 0 ? 0.008 : 0.018), RZ(Math.atan2(yb - ya, xb - xa))), tone(W, s > 0 ? 1.08 : 0.94)); }
  for (const p of d.plants) { const { r, y0: yb, h } = potAt(k, p, k.c2, 'barro', { seg: 14 }); k.addS(new THREE.TorusGeometry(r * 0.93, 0.006, 4, 16), mul(T(p[0], yb + h * 0.72, p[2]), RX(HP)), 0x3c3c40); k.boxS(0.016, 0.012, p[2] - r * 0.9 - 0.02, p[0], yb + h * 0.72, (p[2] - r * 0.9 + 0.02) / 2, 0x3c3c40); k.boxS(0.012, 0.08, 0.012, p[0], yb + h * 0.72 + 0.03, 0.03, 0x3c3c40); }
});

furn({ id: 'parede_verde_luxo', name: 'Parede verde viva', cat: 'Vasos e plantas', kind: 'wall', price: 22000, lvl: 19, w: 2.4, d: 0.34, h: 2.3, cols: [WOOD.nogueira, 0x6a7466], colN: ['Moldura', 'Bolsos de feltro'],
  plants: [[-0.8, 1.96, 0.17, 0.9, 'hang'], [0, 1.96, 0.17, 0.9, 'hang'], [0.8, 1.96, 0.17, 0.9, 'hang'], [-0.9, 1.38, 0.17, 0.9, 'hang'], [-0.3, 1.38, 0.17, 0.9, 'pot'], [0.3, 1.38, 0.17, 0.9, 'pot'], [0.9, 1.38, 0.17, 0.9, 'hang'], [-0.75, 0.42, 0.17, 1.1, 'pot'], [0, 0.42, 0.17, 1.2, 'pot'], [0.75, 0.42, 0.17, 1.1, 'pot']], info: 'Dez plantas, musgo, rega embutida e luz: uma floresta na parede.' }, (k, d) => {
  const W = k.c1, F = k.c2, r = rnd(19);
  // frame and mossy back panel
  for (const s of [-1, 1]) k.box(0.08, 2.24, 0.1, s * 1.16, 1.14, 0.05, W); k.box(2.4, 0.08, 0.12, 0, 2.26, 0.06, W); k.box(2.24, 2.2, 0.02, 0, 1.14, 0.01, 0x2f3a2c);
  const greens = [0x4f8a44, 0x6aa454, 0x3f7a3c, 0x86b860, 0x5a9a54, 0x9ac46a]; for (let i = 0; i < 70; i++) { const x = (r() - 0.5) * 1.86, y = 0.5 + r() * 1.66, s = 0.07 + r() * 0.07; k.add(new THREE.SphereGeometry(s, 6, 4), mul(T(x, y, 0.05), S(1.3, 1, 0.3)), greens[i % 6]); }
  // trough at the bottom
  k.rbox(2.3, 0.4, 0.32, 0, 0.21, 0.17, W, 0.015); k.box(2.24, 0.03, 0.26, 0, 0.405, 0.17, tone(W, 0.7)); soilBox(k, 2.2, 0.24, 0, 0.42, 0.17); for (let i = 0; i < 5; i++) k.box(0.012, 0.36, 0.006, -0.92 + i * 0.46, 0.21, 0.332, tone(W, 0.75)); k.box(2.32, 0.04, 0.33, 0, 0.02, 0.17, tone(W, 0.6));
  // felt pockets
  for (const p of d.plants.slice(0, 7)) { const [x, y, z] = p; k.add2(LG([[0.05, -0.22], [0.13, -0.1], [0.155, 0.012]], 12), mul(T(x, y, z - 0.02), S(1.22, 1, 0.9)), F); k.add(new THREE.CylinderGeometry(0.15, 0.15, 0.006, 12), mul(T(x, y - 0.004, z - 0.02), S(1.22, 1, 0.9)), SOIL); k.add(new THREE.TorusGeometry(0.155, 0.01, 4, 12), mul(T(x, y + 0.012, z - 0.02), S(1.22, 1, 0.9), RX(HP)), tone(F, 1.3)); k.box(0.3, 0.2, 0.02, x, y - 0.08, 0.04, tone(F, 0.8)); }
  // irrigation pipe and lights
  rod(k, [-1.1, 2.17, 0.07], [1.1, 2.17, 0.07], 0.012, METAL.cobre, 6, true); rod(k, [1.1, 2.17, 0.07], [1.1, 0.44, 0.07], 0.012, METAL.cobre, 6, true); for (const p of d.plants.slice(0, 3)) { rod(k, [p[0], 2.17, 0.07], [p[0], 2.1, 0.13], 0.006, METAL.cobre, 4, true); k.sphS(0.012, p[0], 2.1, 0.13, METAL.latao, 1, 1, 1, 6); }
  k.cylS(0.03, 0.03, 0.03, 1.1, 1.2, 0.09, METAL.latao, 10, RX(HP)); k.boxS(0.07, 0.012, 0.012, 1.1, 1.2, 0.11, 0xd8483c);
  k.box(2.1, 0.03, 0.08, 0, 2.2, 0.16, tone(W, 0.8)); k.glow(new THREE.BoxGeometry(2.0, 0.012, 0.05), 0xfff4d8, 2.4, { at: [0, 2.181, 0.165], day: 0.3 });
});

// ---------- on the floor ----------
furn({ id: 'jardineira_janela', name: 'Jardineira baixa', cat: 'Vasos e plantas', price: 280, lvl: 3, w: 0.96, d: 0.28, h: 0.26, cols: [0x7fa08a, 0xf3ead8], colN: ['Caixa', 'Friso'], plants: [[-0.3, 0.235, 0, 0.8, 'pot'], [0, 0.235, 0, 0.8, 'pot'], [0.3, 0.235, 0, 0.8, 'pot']], info: 'Comprida e baixinha, para pôr debaixo da janela.' }, (k) => {
  const C = k.c1; for (const sx of [-1, 1]) for (const sz of [-1, 1]) k.box(0.05, 0.04, 0.05, sx * 0.42, 0.02, sz * 0.09, tone(C, 0.7));
  for (const s of [-1, 1]) { k.box(0.94, 0.2, 0.02, 0, 0.14, s * 0.115, C); k.box(0.02, 0.2, 0.25, s * 0.47, 0.14, 0, C); k.box(0.96, 0.02, 0.03, 0, 0.25, s * 0.115, k.c2); k.box(0.03, 0.02, 0.26, s * 0.465, 0.25, 0, k.c2); } k.box(0.92, 0.02, 0.22, 0, 0.05, 0, tone(C, 0.8)); soilBox(k, 0.92, 0.21, 0, 0.235, 0);
  for (let i = 0; i < 5; i++) { plate(k, [[-0.05, 0], [0, 0.06], [0.05, 0], [0, -0.06]], 0.006, -0.36 + i * 0.18, 0.14, 0.126, k.c2); k.sph(0.014, -0.36 + i * 0.18, 0.14, 0.131, tone(C, 0.8), 1, 1, 0.5, 6); }
});

furn({ id: 'escada_plantas', name: 'Escadinha de plantas', cat: 'Vasos e plantas', price: 480, lvl: 5, w: 0.74, d: 0.7, h: 1.2, cols: [0x8fb4c8, 0xc66f48], colN: ['Escada', 'Vasos'], plants: [[0, py(0.335, 0.9), 0.2, 0.9, 'pot'], [0, py(0.635, 0.8), 0.07, 0.8, 'pot'], [0, py(0.935, 0.8), -0.06, 0.8, 'hang'], [-0.2, py(0.335, 0.6), 0.22, 0.6, 'pot']], info: 'Escada de pintor aposentada, agora cheia de vasos.' }, (k, d) => {
  const C = k.c1; for (const s of [-1, 1]) { rod(k, [s * 0.34, 0.012, 0.32], [s * 0.26, 1.18, -0.14], 0.022, C, 6); rod(k, [s * 0.34, 0.012, -0.32], [s * 0.26, 1.18, -0.16], 0.02, tone(C, 0.85), 6); rod(k, [s * 0.32, 0.4, 0.19], [s * 0.32, 0.4, -0.28], 0.006, 0x8a7a5a, 4); }
  [[0.32, 0.2, 0.66], [0.62, 0.07, 0.62], [0.92, -0.06, 0.57]].forEach(([y, z, w]) => { k.box(w, 0.03, 0.2, 0, y, z, tone(C, 1.1)); k.box(w, 0.05, 0.02, 0, y - 0.03, z + 0.09, tone(C, 0.9)); }); k.box(0.56, 0.035, 0.12, 0, 1.19, -0.15, tone(C, 1.1)); k.box(0.5, 0.03, 0.02, 0, 0.5, -0.24, tone(C, 0.85));
  potAt(k, d.plants[0], k.c2, 'barro', { saucer: true }); potAt(k, d.plants[1], 0xf3ead8, 'bojudo', { shiny: true }); potAt(k, d.plants[2], k.c2, 'sino'); potAt(k, d.plants[3], tone(k.c2, 1.2), 'liso');
  for (const s of [-1, 1]) for (const z of [0.32, -0.32]) k.cyl(0.026, 0.026, 0.012, s * 0.34, 0.006, z, 0x3c3c40, 8);
});

furn({ id: 'jardineira_alta', name: 'Jardineira alta de madeira', cat: 'Vasos e plantas', price: 540, lvl: 6, w: 1.04, d: 0.4, h: 0.82, cols: [WOOD.carvalho, 0x3c3c40], colN: ['Ripas', 'Cintas'], plants: [[-0.32, 0.79, 0, 0.9, 'pot'], [0, 0.79, 0, 1, 'pot'], [0.32, 0.79, 0, 0.9, 'pot']], info: 'Na altura certa para cuidar sem dor nas costas.' }, (k) => {
  const W = k.c1; for (const sx of [-1, 1]) for (const sz of [-1, 1]) k.box(0.05, 0.8, 0.05, sx * 0.49, 0.4, sz * 0.17, tone(W, 0.8));
  for (let i = 0; i < 4; i++) for (const s of [-1, 1]) { k.box(0.94, 0.082, 0.02, 0, 0.5 + i * 0.088, s * 0.18, i % 2 ? W : tone(W, 1.08)); k.box(0.02, 0.082, 0.34, s * 0.48, 0.5 + i * 0.088, 0, i % 2 ? tone(W, 1.08) : W); }
  k.box(0.94, 0.02, 0.34, 0, 0.46, 0, tone(W, 0.7)); soilBox(k, 0.94, 0.34, 0, 0.79, 0); k.box(0.94, 0.02, 0.32, 0, 0.16, 0, tone(W, 0.9)); for (const s of [-1, 1]) k.box(0.98, 0.03, 0.02, 0, 0.16, s * 0.17, tone(W, 0.8));
  for (const s of [-1, 1]) for (const y of [0.52, 0.76]) k.boxS(0.99, 0.014, 0.006, 0, y, s * 0.192, k.c2);
  wateringCan(k, 0.26, 0.17, 0.02, 0.9, 0x6a9ab8, 0.6); k.rbox(0.24, 0.16, 0.2, -0.24, 0.25, 0, 0xd9c8a0, 0.04); k.box(0.16, 0.06, 0.004, -0.24, 0.26, 0.102, 0x6aa85a);
});

furn({ id: 'vaso_grande_arvore', name: 'Vasão para árvore de interior', cat: 'Vasos e plantas', price: 680, lvl: 7, w: 0.64, d: 0.64, h: 0.6, cols: [0x2f5d62, WOOD.mel], colN: ['Vaso', 'Carrinho'], plants: [[0, 0.564, 0, 1.3, 'pot']], info: 'Para um limoeiro ou uma figueira morar dentro de casa.' }, (k, d) => {
  for (let i = 0; i < 4; i++) { const a = i * HP + PI / 4; k.cylS(0.024, 0.024, 0.02, Math.cos(a) * 0.2, 0.024, Math.sin(a) * 0.2, 0x2a2a30, 10, RZ(HP)); k.box(0.03, 0.03, 0.03, Math.cos(a) * 0.2, 0.05, Math.sin(a) * 0.2, 0x55555c); } k.cyl(0.26, 0.26, 0.03, 0, 0.075, 0, k.c2, 24); k.add(new THREE.TorusGeometry(0.26, 0.012, 4, 24), mul(T(0, 0.075, 0), RX(HP)), tone(k.c2, 0.8));
  const { y0, r, h } = potAt(k, d.plants[0], k.c1, 'sino', { h: 0.51, r: 0.31, seg: 26, shiny: true });
  for (const [t, c] of [[0.42, 0.63], [0.5, 0.69], [0.86, 1.02]]) k.addS(new THREE.TorusGeometry(r * c, 0.008, 4, 26), mul(T(0, y0 + h * t, 0), RX(HP)), tone(k.c1, 1.4));
  for (let i = 0; i < 12; i++) { const a = (i / 12) * TAU; k.addS(new THREE.OctahedronGeometry(0.03, 0), mul(T(Math.cos(a) * r * 0.86, y0 + h * 0.68, Math.sin(a) * r * 0.86), RY(-a), S(0.3, 1.3, 0.8)), tone(k.c1, 1.4)); }
});

furn({ id: 'suporte_ferro_3_andares', name: 'Suporte de ferro de três andares', cat: 'Vasos e plantas', price: 760, lvl: 7, w: 0.9, d: 0.5, h: 1.06, cols: [0x34343a, 0xc66f48], colN: ['Ferro', 'Vasos'], plants: [[-0.25, py(0.275, 0.9), 0.12, 0.9, 'pot'], [0.25, py(0.275, 0.9), 0.12, 0.9, 'pot'], [-0.2, py(0.575, 0.8), 0.0, 0.8, 'pot'], [0.2, py(0.575, 0.8), 0.0, 0.8, 'hang'], [0, py(0.875, 0.8), -0.12, 0.8, 'hang']], info: 'Arabescos de ferro batido em degraus, como nas varandas antigas.' }, (k, d) => {
  const M = k.c1; [[0.26, 0.12, 0.82], [0.56, 0.0, 0.7], [0.86, -0.12, 0.44]].forEach(([y, z, w]) => { for (const s of [-1, 1]) rod(k, [-w / 2, y, z + s * 0.1], [w / 2, y, z + s * 0.1], 0.008, M, 5, true); for (let i = 0; i <= 8; i++) rod(k, [-w / 2 + (i * w) / 8, y, z - 0.1], [-w / 2 + (i * w) / 8, y, z + 0.1], 0.005, M, 4, true); for (const s of [-1, 1]) k.addS(new THREE.TorusGeometry(0.04, 0.005, 4, 12, PI * 1.5), mul(T(s * (w / 2 + 0.02), y - 0.04, z), RY(HP), RZ(s > 0 ? PI : HP)), M); });
  for (const s of [-1, 1]) { tb(k, [[s * 0.4, 0.012, 0.22], [s * 0.41, 0.2, 0.2], [s * 0.38, 0.5, 0.06], [s * 0.3, 0.86, -0.1], [s * 0.2, 1.04, -0.2]], 0.01, M, { shiny: true, n: 14, seg: 5 }); rod(k, [s * 0.3, 0.012, -0.23], [s * 0.26, 0.86, -0.22], 0.01, M, 5, true); rod(k, [s * 0.36, 0.56, -0.1], [s * 0.28, 0.56, -0.22], 0.007, M, 4, true); rod(k, [s * 0.41, 0.26, 0.02], [s * 0.29, 0.26, -0.225], 0.007, M, 4, true);
    k.addS(new THREE.TorusGeometry(0.05, 0.006, 4, 12), mul(T(s * 0.2, 1.0, -0.21), RY(HP * 0)), M); k.sphS(0.02, s * 0.4, 0.012, 0.22, M, 1, 0.6, 1, 6); k.sphS(0.02, s * 0.3, 0.012, -0.23, M, 1, 0.6, 1, 6); }
  rod(k, [-0.2, 1.04, -0.2], [0.2, 1.04, -0.2], 0.008, M, 5, true); k.addS(new THREE.TorusGeometry(0.07, 0.006, 4, 14), T(0, 1.0, -0.2), M);
  d.plants.forEach((p, i) => potAt(k, p, i === 3 ? 0xf3ead8 : i === 2 ? tone(k.c2, 1.2) : k.c2, ['barro', 'barro', 'tigela', 'bojudo', 'sino'][i], { shiny: i === 3, h: i === 2 ? 0.2 : undefined }));
});

furn({ id: 'carrinho_plantas', name: 'Carrinho de plantas', cat: 'Vasos e plantas', price: 980, lvl: 8, w: 0.86, d: 0.46, h: 0.92, cols: [0x7fa08a, WOOD.mel], colN: ['Metal', 'Madeira'], plants: [[-0.18, py(0.675, 0.8), 0, 0.8, 'pot'], [0.16, py(0.675, 0.9), 0, 0.9, 'hang'], [-0.2, py(0.215, 0.7), 0, 0.7, 'pot'], [0.14, py(0.215, 0.7), 0, 0.7, 'pot']], info: 'De rodinhas, para levar as plantas atrás do sol.' }, (k, d) => {
  const M = k.c1, W = k.c2; for (const sx of [-1, 1]) for (const sz of [-1, 1]) { k.cylS(0.012, 0.012, 0.78, sx * 0.33, 0.47, sz * 0.19, M, 6); k.cyl(0.04, 0.04, 0.025, sx * 0.33, 0.04, sz * 0.19, 0x2a2a30, 12, RX(HP)); k.cylS(0.012, 0.012, 0.03, sx * 0.33, 0.04, sz * 0.19, METAL.cromo, 6, RX(HP)); }
  for (const y of [0.2, 0.66]) { k.box(0.7, 0.02, 0.4, 0, y, 0, W); for (const s of [-1, 1]) { k.boxS(0.7, 0.05, 0.008, 0, y + 0.03, s * 0.2, M); k.boxS(0.008, 0.05, 0.4, s * 0.35, y + 0.03, 0, M); } }
  tb(k, [[0.33, 0.86, -0.19], [0.4, 0.9, -0.19], [0.42, 0.9, -0.1], [0.42, 0.9, 0.1], [0.4, 0.9, 0.19], [0.33, 0.86, 0.19]], 0.012, M, { shiny: true, n: 14, seg: 6 }); k.cyl(0.016, 0.016, 0.2, 0.42, 0.9, 0, W, 8, RX(HP));
  potAt(k, d.plants[0], 0xc66f48, 'barro', { saucer: true }); potAt(k, d.plants[1], 0xf3ead8, 'cilindro', { shiny: true }); potAt(k, d.plants[2], 0xe8c468, 'liso', { shiny: true }); potAt(k, d.plants[3], 0xc66f48, 'tigela', { h: 0.15 });
  trowel(k, 0.3, 0.225, 0.1, mul(RY(0.5), RX(HP))); k.rbox(0.14, 0.035, 0.1, -0.3, 0.69, 0.13, 0xd98a7a, 0.014, RY(0.3));
});

furn({ id: 'carrinho_de_mao_floreira', name: 'Carrinho de mão floreira', cat: 'Vasos e plantas', price: 1300, lvl: 9, w: 1.3, d: 0.6, h: 0.6, cols: [0xb8483c, WOOD.carvalho], colN: ['Caçamba', 'Cabos'], plants: [[-0.3, 0.5, 0, 1, 'pot'], [0.0, 0.5, 0.06, 0.9, 'pot'], [0.26, 0.48, -0.05, 0.9, 'hang']], info: 'O velho carrinho da obra ganhou flores e aposentadoria.' }, (k) => {
  const C = k.c1, W = k.c2;
  const sh = new THREE.Shape(); [[-0.38, 0.5], [0.42, 0.5], [0.3, 0.24], [-0.26, 0.24]].forEach(([x, y], i) => (i ? sh.lineTo(x, y) : sh.moveTo(x, y))); k.addS(new THREE.ExtrudeGeometry(sh, { depth: 0.46, bevelEnabled: false }), T(-0.05, 0, -0.23), C); k.box(0.76, 0.02, 0.42, -0.03, 0.495, 0, SOIL);
  for (const s of [-1, 1]) { k.boxS(0.84, 0.03, 0.02, -0.03, 0.51, s * 0.24, tone(C, 0.8)); rod(k, [0.3, 0.3, s * 0.2], [0.63, 0.42, s * 0.24], 0.016, W, 6); k.cyl(0.02, 0.02, 0.1, 0.6, 0.41, s * 0.238, 0x2a2a30, 8, RZ(-1.22)); rod(k, [0.24, 0.26, s * 0.2], [0.3, 0.012, s * 0.2], 0.012, 0x3c3c40, 5, true); rod(k, [-0.2, 0.26, s * 0.07], [-0.47, 0.15, s * 0.05], 0.012, 0x3c3c40, 5, true); }
  rod(k, [0.3, 0.02, -0.2], [0.3, 0.02, 0.2], 0.01, 0x3c3c40, 5, true); k.add(new THREE.TorusGeometry(0.12, 0.035, 6, 18), T(-0.47, 0.155, 0), 0x2a2a30); k.cylS(0.085, 0.085, 0.03, -0.47, 0.155, 0, tone(C, 0.9), 12, RX(HP)); k.cylS(0.012, 0.012, 0.12, -0.47, 0.155, 0, METAL.cromo, 6, RX(HP));
  trowel(k, 0.1, 0.52, -0.19, mul(RZ(0.4), RX(0.2)), 0xe8c468);
});

furn({ id: 'vaso_pedestal', name: 'Urna no pedestal', cat: 'Vasos e plantas', price: 1900, lvl: 10, w: 0.58, d: 0.56, h: 1.12, cols: [0xeee9df, 0xd9c8a0], colN: ['Pedra', 'Guirlanda'], plants: [[0, 1.085, 0, 1.1, 'hang']], info: 'Uma urna clássica, digna de jardim de palácio.' }, (k, d) => {
  const C = k.c1; k.box(0.5, 0.06, 0.5, 0, 0.03, 0, tone(C, 0.9)); k.box(0.44, 0.04, 0.44, 0, 0.08, 0, C); k.box(0.36, 0.44, 0.36, 0, 0.32, 0, C); k.box(0.44, 0.04, 0.44, 0, 0.56, 0, C); k.box(0.48, 0.03, 0.48, 0, 0.595, 0, tone(C, 0.92));
  for (let i = 0; i < 4; i++) { const M = RY(i * HP); k.add(new THREE.BoxGeometry(0.26, 0.32, 0.008), mul(M, T(0, 0.32, 0.182)), tone(C, 0.92)); k.add(new THREE.TorusGeometry(0.08, 0.012, 4, 12, PI), mul(M, T(0, 0.36, 0.188), RZ(PI)), k.c2); for (const s of [-1, 1]) k.add(new THREE.SphereGeometry(0.018, 6, 4), mul(M, T(s * 0.08, 0.365, 0.19)), k.c2); }
  const { y0, r, h } = potAt(k, d.plants[0], C, 'urna', { h: 0.5, r: 0.22, seg: 24 }); for (let i = 0; i < 16; i++) { const a = (i / 16) * TAU; k.sph(0.022, Math.cos(a) * r * 0.82, y0 + h * 0.47, Math.sin(a) * r * 0.82, tone(C, 0.9), 0.7, 2.2, 0.7, 5); }
  for (const s of [-1, 1]) k.add(new THREE.TorusGeometry(0.06, 0.014, 5, 12, PI), mul(T(s * r * 0.97, y0 + h * 0.76, 0), RZ(s > 0 ? -HP : HP)), C); k.add(new THREE.TorusGeometry(r * 0.97, 0.01, 4, 24), mul(T(0, y0 + h * 0.86, 0), RX(HP)), k.c2);
});

furn({ id: 'bancada_jardinagem', name: 'Bancada de jardinagem', cat: 'Vasos e plantas', price: 1800, lvl: 10, w: 1.24, d: 0.58, h: 1.56, cols: [0x8fb0a0, WOOD.pinho], colN: ['Pintura', 'Tampo'], plants: [[-0.4, py(1.335, 0.7), -0.17, 0.7, 'pot'], [0.38, py(1.335, 0.7, 0.14), -0.17, 0.7, 'hang'], [-0.34, py(0.895, 0.9), 0.04, 0.9, 'pot']], info: 'Com pá, regador e terra: o cantinho de envasar as mudas.' }, (k, d) => {
  const C = k.c1, W = k.c2;
  for (const sx of [-1, 1]) { k.box(0.05, 0.86, 0.05, sx * 0.57, 0.43, 0.24, C); k.box(0.05, 1.54, 0.05, sx * 0.57, 0.77, -0.24, C); k.box(0.03, 0.08, 0.44, sx * 0.57, 0.8, 0, C); k.box(0.03, 0.05, 0.44, sx * 0.57, 0.2, 0, C); k.box(0.03, 0.4, 0.2, sx * 0.575, 1.14, -0.16, C); }
  for (let i = 0; i < 4; i++) k.box(1.2, 0.03, 0.136, 0, 0.875, -0.205 + i * 0.138, i % 2 ? W : tone(W, 0.93)); k.box(1.14, 0.08, 0.03, 0, 0.8, 0.24, C); for (let i = 0; i < 5; i++) k.box(1.14, 0.022, 0.08, 0, 0.2, -0.2 + i * 0.1, tone(C, 0.9));
  k.box(1.14, 0.62, 0.016, 0, 1.2, -0.262, tone(C, 1.12)); k.box(1.2, 0.026, 0.2, 0, 1.32, -0.16, W); k.box(1.2, 0.04, 0.03, 0, 1.52, -0.25, C);
  // tools on hooks
  [[-0.3, 0xd8483c], [-0.18, 0xe8c468]].forEach(([x, c], i) => { k.cylS(0.005, 0.005, 0.03, x, 1.2, -0.24, METAL.cromo, 5, RX(HP)); if (i) { k.cyl(0.013, 0.012, 0.1, x, 1.14, -0.235, c, 6); for (const dx of [-0.02, 0, 0.02]) k.cylS(0.004, 0.004, 0.09, x + dx, 1.03, -0.235, METAL.cromo, 4); k.boxS(0.05, 0.01, 0.008, x, 1.08, -0.235, METAL.cromo); } else trowel(k, x, 1.09, -0.235, null, c); });
  k.addS(new THREE.TorusGeometry(0.07, 0.012, 5, 14), mul(T(0.12, 1.1, -0.24), S(1, 1, 0.6)), 0x6a8a4a); k.cylS(0.005, 0.005, 0.03, 0.12, 1.18, -0.24, METAL.cromo, 5, RX(HP));
  // on the worktop
  wateringCan(k, 0.3, 0.89, 0.05, 1.1, 0xb9bcc0, -0.5); k.box(0.3, 0.05, 0.2, 0.02, 0.915, -0.08, 0x3c3c40); for (let i = 0; i < 6; i++) { k.box(0.085, 0.006, 0.085, -0.075 + (i % 3) * 0.095, 0.942, -0.127 + Math.floor(i / 3) * 0.095, SOIL); if (i % 2) k.sph(0.012, -0.075 + (i % 3) * 0.095, 0.95, -0.127 + Math.floor(i / 3) * 0.095, 0x7ab85a, 1, 1.4, 1, 5); }
  trowel(k, -0.02, 0.9, 0.17, mul(RY(1.2), RX(HP)), 0xd8483c); k.sph(0.07, 0.05, 0.895, 0.14, SOIL, 1.2, 0.35, 1, 7);
  // below: bag of soil, stacked pots, crate
  k.rbox(0.34, 0.4, 0.2, -0.3, 0.42, -0.04, 0xd9c8a0, 0.05, RX(-0.12)); k.box(0.22, 0.14, 0.004, -0.3, 0.44, 0.066, 0x6aa85a, RX(-0.12)); for (let i = 0; i < 4; i++) pot(k, 0.1, 0.215 + i * 0.06, 0.02, 0.11, 0.17, tone(0xc66f48, 1 - i * 0.04), 'barro', 14);
  k.box(0.32, 0.2, 0.3, 0.38, 0.315, 0, tone(W, 0.85)); for (const y of [0.26, 0.36]) k.box(0.33, 0.012, 0.31, 0.38, y, 0, tone(W, 0.65));
  potAt(k, d.plants[0], 0xc66f48, 'barro', { saucer: true }); potAt(k, d.plants[1], 0xf3ead8, 'tigela', { h: 0.14, shiny: true }); potAt(k, d.plants[2], 0xc66f48, 'barro');
});

furn({ id: 'estante_plantas_grande', name: 'Estante grande de plantas', cat: 'Vasos e plantas', price: 2600, lvl: 12, w: 1.64, d: 0.44, h: 1.9, cols: [WOOD.mel, 0x3c3c40], colN: ['Prateleiras', 'Estrutura de ferro'],
  plants: [[-0.5, py(0.215, 1.1), 0, 1.1, 'pot'], [0.45, py(0.215, 1), 0, 1, 'pot'], [-0.55, py(0.715, 0.8), 0, 0.8, 'pot'], [0.05, py(0.715, 0.9), 0, 0.9, 'pot'], [0.56, py(0.715, 0.8), 0, 0.8, 'hang'], [-0.3, py(1.215, 0.8), 0, 0.8, 'hang'], [0.4, py(1.215, 0.9), 0, 0.9, 'pot'], [0, py(1.715, 0.8), 0, 0.8, 'hang']], info: 'Oito lugares em quatro andares: uma selva arrumadinha.' }, (k, d) => {
  const W = k.c1, M = k.c2;
  for (const sx of [-1, 1]) { for (const sz of [-1, 1]) k.boxS(0.03, 1.86, 0.03, sx * 0.79, 0.93, sz * 0.19, M); for (const y of [0.2, 0.7, 1.2, 1.7]) k.boxS(0.02, 0.02, 0.36, sx * 0.79, y - 0.02, 0, M); rod(k, [sx * 0.79, 0.22, -0.19], [sx * 0.79, 0.68, 0.19], 0.006, M, 4, true); rod(k, [sx * 0.79, 1.22, 0.19], [sx * 0.79, 1.68, -0.19], 0.006, M, 4, true); k.boxS(0.02, 0.02, 0.4, sx * 0.79, 1.86, 0, M); }
  [0.2, 0.7, 1.2, 1.7].forEach((y, i) => { k.box(1.6, 0.03, 0.4, 0, y, 0, i % 2 ? tone(W, 1.06) : W); k.box(1.56, 0.03, 0.02, 0, y - 0.03, -0.19, tone(W, 0.8)); });
  rod(k, [-0.79, 0.72, -0.2], [0.79, 1.18, -0.2], 0.006, M, 4, true); rod(k, [0.79, 0.72, -0.2], [-0.79, 1.18, -0.2], 0.006, M, 4, true);
  const st = ['sino', 'barro', 'bojudo', 'cilindro', 'tigela', 'liso', 'barro', 'bojudo'], cs = [0x2f5d62, 0xc66f48, 0xf3ead8, 0xe8c468, 0xc66f48, 0x8fb0a0, 0xc66f48, 0xf3ead8];
  d.plants.forEach((p, i) => potAt(k, p, cs[i], st[i], { shiny: ![1, 4, 6].includes(i), saucer: [1, 6].includes(i), seg: 13 }));
  wateringCan(k, -0.05, 0.215, 0.02, 1.0, METAL.cobre, 0.4); for (let i = 0; i < 3; i++) k.box(0.2 - i * 0.02, 0.03, 0.14, 0.0, 1.23 + i * 0.03, 0.0, [0x5a8a5a, 0xe9dcc0, 0xb8483c][i], RY(i * 0.2)); k.addS(new THREE.CylinderGeometry(0.04, 0.03, 0.14, 10), T(-0.62, 1.285, 0.05), 0x6a9ab8); k.addS(new THREE.CylinderGeometry(0.006, 0.006, 0.05, 5), mul(T(-0.62, 1.37, 0.05), RZ(0.3)), METAL.latao);
  k.lathe2([[0.05, 0], [0.085, 0.09]], 0.52, 1.715, 0.02, 0xd2b27a, 12); k.cyl(0.05, 0.05, 0.006, 0.52, 1.718, 0.02, 0xb8986a, 12); trowel(k, 0.52, 1.83, 0.02, RZ(0.25), 0xd8483c); k.rbox(0.18, 0.04, 0.12, -0.5, 1.735, 0.03, 0xe8c468, 0.012, RY(0.2));
});

furn({ id: 'bicicleta_floreira', name: 'Bicicleta floreira', cat: 'Vasos e plantas', price: 2200, lvl: 11, w: 1.82, d: 0.62, h: 1.08, cols: [0x7fc0c0, 0xd2b27a], colN: ['Bicicleta', 'Cestos'], plants: [[0.62, 0.99, 0, 1, 'hang'], [-0.6, 0.86, 0, 0.9, 'pot'], [0.02, 0.37, 0.19, 0.8, 'pot']], info: 'A bicicleta antiga virou canteiro: cestinha, caixote e charme.' }, (k, d) => {
  const C = k.c1, B = k.c2, R = 0.33, wheel = (x) => { k.add(new THREE.TorusGeometry(R, 0.022, 6, 28), T(x, R + 0.022, 0), 0x3a3a40); k.addS(new THREE.TorusGeometry(R - 0.024, 0.008, 4, 28), T(x, R + 0.022, 0), METAL.cromo); for (let i = 0; i < 10; i++) { const a = (i / 10) * PI; rod(k, [x + Math.cos(a) * (R - 0.03), R + 0.022 + Math.sin(a) * (R - 0.03), 0], [x - Math.cos(a) * (R - 0.03), R + 0.022 - Math.sin(a) * (R - 0.03), 0], 0.0025, METAL.cromo, 3, true); } k.cylS(0.025, 0.025, 0.07, x, R + 0.022, 0, METAL.cromo, 8, RX(HP)); k.addS(new THREE.TorusGeometry(R + 0.03, 0.02, 4, 16, PI * 0.9), mul(T(x, R + 0.022, 0), RZ(x > 0 ? 0.3 : 0.5), S(1, 1, 1.8)), C); };
  wheel(-0.52); wheel(0.52); const y = R + 0.022, F = (a, b, r = 0.016) => rod(k, a, b, r, C, 6, true);
  F([-0.52, y, 0], [-0.2, 0.86, 0]); F([-0.2, 0.86, 0], [-0.08, y - 0.03, 0]); F([-0.52, y, 0], [-0.08, y - 0.03, 0], 0.012); F([-0.08, y - 0.03, 0], [0.36, 0.8, 0]); F([-0.2, 0.86, 0], [0.38, 0.86, 0]); F([0.34, 0.98, 0], [0.52, y, 0]); F([-0.2, 0.86, 0], [-0.23, 0.94, 0], 0.012);
  k.add(new THREE.SphereGeometry(0.1, 10, 6), mul(T(-0.25, 0.96, 0), S(1.3, 0.3, 0.75)), 0x7a4a2a); for (const s of [-1, 1]) k.sphS(0.014, -0.34, 0.93, s * 0.04, METAL.cromo, 1, 2, 1, 5);
  tb(k, [[0.34, 0.98, 0], [0.33, 1.04, 0], [0.28, 1.05, 0.12], [0.2, 1.03, 0.24]], 0.011, METAL.cromo, { shiny: true, n: 10 }); tb(k, [[0.33, 1.04, 0], [0.28, 1.05, -0.12], [0.2, 1.03, -0.24]], 0.011, METAL.cromo, { shiny: true, n: 8 }); for (const s of [-1, 1]) k.cyl(0.016, 0.016, 0.09, 0.19, 1.028, s * 0.25, 0x7a4a2a, 8, mul(RY(s * 0.5), RZ(HP)));
  k.cylS(0.09, 0.09, 0.008, -0.08, y - 0.03, 0.04, METAL.cromo, 16, RX(HP)); rod(k, [-0.08, y - 0.03, 0.05], [0.02, y - 0.17, 0.09], 0.008, 0x3a3a40, 5); k.box(0.09, 0.016, 0.05, 0.03, y - 0.175, 0.12, 0x3a3a40); rod(k, [-0.08, y - 0.03, -0.05], [-0.18, y + 0.1, -0.09], 0.008, 0x3a3a40, 5); k.box(0.09, 0.016, 0.05, -0.19, y + 0.105, -0.12, 0x3a3a40);
  rod(k, [-0.02, 0.24, 0.05], [0.1, 0.012, 0.24], 0.008, 0x3a3a40, 5, true);
  // front basket, rear crate, hanging bucket
  const p0 = d.plants[0]; basket(k, p0[0], p0[1] - 0.22, 0, 0.24, (t) => 0.13 + 0.05 * t, B, 7, 16); k.add2(LG([[0.18, 0.24], [0.165, 0.21]], 16), T(p0[0], p0[1] - 0.22, 0), tone(B, 0.7)); k.cyl(0.165, 0.165, 0.006, p0[0], p0[1] - 0.003, 0, SOIL, 16); k.add(new THREE.TorusGeometry(0.182, 0.01, 4, 16), mul(T(p0[0], p0[1] + 0.02, 0), RX(HP)), tone(B, 0.8)); rod(k, [0.36, 0.9, 0], [0.47, 0.9, 0], 0.008, METAL.cromo, 5, true);
  const p1 = d.plants[1]; for (const s of [-1, 1]) { for (const yy of [-0.17, -0.09, -0.01]) { k.box(0.4, 0.065, 0.014, p1[0], p1[1] + yy, s * 0.15, yy === -0.09 ? tone(WOOD.pinho, 0.9) : WOOD.pinho); k.box(0.014, 0.065, 0.3, p1[0] + s * 0.2, p1[1] + yy, 0, yy === -0.09 ? WOOD.pinho : tone(WOOD.pinho, 0.9)); } } soilBox(k, 0.38, 0.28, p1[0], p1[1], 0); k.box(0.36, 0.016, 0.26, p1[0], p1[1] - 0.2, 0, tone(WOOD.pinho, 0.8)); k.boxS(0.34, 0.012, 0.12, -0.55, y + 0.345, 0, METAL.cromo); for (const s of [-1, 1]) rod(k, [-0.52, y, s * 0.045], [-0.66, y + 0.34, s * 0.05], 0.006, METAL.cromo, 4, true);
  const p2 = d.plants[2]; potAt(k, p2, 0xb9bcc0, 'liso', { h: 0.2, shiny: true, seg: 14 }); k.addS(new THREE.TorusGeometry(0.1, 0.004, 4, 14, PI), mul(T(p2[0], p2[1] + 0.012, p2[2]), RY(HP)), 0x8a8f96);
});

furn({ id: 'banheira_jardineira', name: 'Banheira antiga floreira', cat: 'Vasos e plantas', price: 3200, lvl: 13, w: 1.6, d: 0.76, h: 0.88, cols: [0xfbf8f2, METAL.ouro], colN: ['Banheira', 'Pés e torneira'], plants: [[-0.5, 0.56, 0, 1, 'hang'], [-0.18, 0.56, 0.1, 1, 'pot'], [0.16, 0.56, -0.08, 1.1, 'pot'], [0.48, 0.56, 0.06, 0.9, 'hang'], [-0.15, 0.56, -0.17, 0.8, 'pot']], info: 'Banheira de pezinhos transbordando de flores em vez de espuma.' }, (k) => {
  const C = k.c1, G = k.c2, M = mul(T(0, 0.16, 0), S(2.15, 1, 1));
  k.addS(LG([[0.001, 0], [0.22, 0], [0.27, 0.05], [0.325, 0.24], [0.345, 0.4], [0.365, 0.44], [0.35, 0.455], [0.33, 0.44], [0.32, 0.4]], 26), M, C); k.add(new THREE.CylinderGeometry(0.322, 0.322, 0.012, 26), mul(T(0, 0.556, 0), S(2.15, 1, 1)), SOIL); k.addS(new THREE.TorusGeometry(0.356, 0.018, 6, 28), mul(T(0, 0.605, 0), S(2.15, 1, 1), RX(HP)), C);
  k.addS(LG([[0.18, 0.06], [0.23, 0.07], [0.275, 0.2], [0.28, 0.21]], 26), mul(T(0, 0.158, 0), S(2.15, 1, 1)), tone(C, 0.86));
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) { const x = sx * 0.46, z = sz * 0.2; tb(k, [[x, 0.3, z], [x + sx * 0.07, 0.2, z + sz * 0.05], [x + sx * 0.05, 0.08, z + sz * 0.04], [x + sx * 0.09, 0.03, z + sz * 0.07]], 0.028, G, { shiny: true, n: 10, seg: 6 }); k.sphS(0.042, x + sx * 0.1, 0.035, z + sz * 0.075, G, 1.2, 0.8, 1.2, 8); k.sphS(0.04, x, 0.3, z, G, 1, 1, 1, 8); }
  // taps and shower pipe
  for (const s of [-1, 1]) { k.cylS(0.012, 0.012, 0.16, 0.74, 0.68, s * 0.08, G, 6); k.sphS(0.02, 0.74, 0.76, s * 0.08, G, 1, 1, 1, 8); for (let i = 0; i < 4; i++) k.cylS(0.005, 0.005, 0.05, 0.74, 0.775, s * 0.08, G, 4, mul(RY(i * HP), RZ(HP))); k.sphS(0.01, 0.74, 0.79, s * 0.08, 0xfbf8f2, 1, 1, 1, 6); }
  tb(k, [[0.74, 0.7, 0], [0.74, 0.8, 0], [0.68, 0.86, 0], [0.62, 0.8, 0]], 0.013, G, { shiny: true, n: 10, seg: 6 }); k.cylS(0.02, 0.014, 0.03, 0.62, 0.79, 0, G, 8); k.boxS(0.03, 0.03, 0.2, 0.74, 0.7, 0, G);
  // a towel over the rim and a rubber duck
  k.rbox(0.26, 0.26, 0.02, -0.3, 0.5, 0.345, 0xf4a9b8, 0.01, RX(0.12)); k.rbox(0.26, 0.04, 0.08, -0.3, 0.625, 0.33, 0xf4a9b8, 0.015); k.box(0.26, 0.03, 0.022, -0.3, 0.42, 0.357, 0xfbf7f0, RX(0.12));
  k.sph(0.04, 0.6, 0.6, -0.22, 0xf6d23a, 1.2, 0.9, 1, 8); k.sph(0.028, 0.63, 0.65, -0.22, 0xf6d23a, 1, 1, 1, 8); k.cone(0.012, 0.03, 0.665, 0.648, -0.22, 0xf0862c, 5, RZ(-HP));
});

furn({ id: 'estufa_interior', name: 'Estufa de interior', cat: 'Vasos e plantas', price: 7500, lvl: 15, w: 1.2, d: 0.62, h: 2.18, cols: [0x2f4a40, METAL.latao], colN: ['Estrutura', 'Puxadores'],
  plants: [[-0.3, py(0.375, 0.9), 0, 0.9, 'pot'], [0.3, py(0.375, 0.9), 0, 0.9, 'pot'], [-0.3, py(0.885, 0.8), 0, 0.8, 'pot'], [0.3, py(0.885, 0.8), 0, 0.8, 'hang'], [-0.3, py(1.365, 0.7), 0, 0.7, 'hang'], [0.3, py(1.365, 0.7), 0, 0.7, 'pot']], info: 'Uma vitrine de vidro com luz de cultivo para as plantas mais mimadas.' }, (k, d) => {
  const C = k.c1, w = 1.16, dp = 0.52, H = 1.72, y0 = 0.32;
  // base cabinet
  k.rbox(1.2, 0.3, 0.56, 0, 0.17, 0, C, 0.012); k.box(1.16, 0.02, 0.52, 0, 0.01, 0, tone(C, 0.6)); for (const s of [-1, 1]) { k.box(0.54, 0.22, 0.01, s * 0.285, 0.17, 0.281, tone(C, 1.25)); k.sphS(0.016, s * 0.06, 0.2, 0.292, k.c2, 1, 1, 1, 8); }
  // frame
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) k.box(0.03, H - y0, 0.03, sx * (w / 2 - 0.015), (H + y0) / 2, sz * (dp / 2 - 0.015), C); for (const y of [y0 + 0.015, H]) for (const s of [-1, 1]) { k.box(w, 0.03, 0.03, 0, y, s * (dp / 2 - 0.015), C); k.box(0.03, 0.03, dp, s * (w / 2 - 0.015), y, 0, C); }
  k.box(0.03, H - y0, 0.03, 0, (H + y0) / 2, dp / 2 - 0.015, C); for (const y of [0.86, 1.34]) { for (const s of [-1, 1]) k.box(w, 0.016, 0.016, 0, y, s * (dp / 2 - 0.015), C); }
  // pitched glass roof with ridge and finials
  const rh = 0.34; for (const s of [-1, 1]) { plate(k, [[-w / 2, 0], [w / 2, 0], [w / 2, 0.03], [0, rh + 0.03], [-w / 2, 0.03]], 0.02, 0, H, s * (dp / 2 - 0.01), C); }
  for (const s of [-1, 1]) { const RM = mul(T(s * w / 4, H + rh / 2 + 0.03, 0), RZ(-s * Math.atan2(rh, w / 2))), L = Math.hypot(w / 2, rh) + 0.04; k.glass(new THREE.BoxGeometry(L, 0.006, dp + 0.02), RM, 0xdff2f0, 0.18); for (const z of [-dp / 2 - 0.01, 0, dp / 2 + 0.01]) k.add(new THREE.BoxGeometry(L, 0.025, 0.025), mul(RM, T(0, 0, z)), C); k.add(new THREE.BoxGeometry(0.025, 0.025, dp + 0.04), mul(RM, T(-s * (L / 2 - 0.012), 0, 0)), C); }
  k.box(0.04, 0.04, dp + 0.08, 0, H + rh + 0.04, 0, C); for (const s of [-1, 1]) { k.sphS(0.022, 0, H + rh + 0.09, s * (dp / 2 + 0.02), k.c2, 1, 1.5, 1, 8); }
  for (let i = 0; i < 5; i++) k.addS(new THREE.TorusGeometry(0.03, 0.005, 4, 10, PI), T(-0.16 + i * 0.08, H + rh + 0.06, 0), k.c2);
  // glass
  k.glass(new THREE.BoxGeometry(w - 0.04, H - y0 - 0.03, 0.006), T(0, (H + y0) / 2, dp / 2 - 0.012), 0xdff2f0, 0.16); k.glass(new THREE.BoxGeometry(w - 0.04, H - y0 - 0.03, 0.006), T(0, (H + y0) / 2, -dp / 2 + 0.012), 0xdff2f0, 0.16); for (const s of [-1, 1]) k.glass(new THREE.BoxGeometry(0.006, H - y0 - 0.03, dp - 0.04), T(s * (w / 2 - 0.012), (H + y0) / 2, 0), 0xdff2f0, 0.16);
  for (const s of [-1, 1]) k.boxS(0.012, 0.12, 0.016, s * 0.04, 1.02, dp / 2 + 0.006, k.c2);
  // wire shelves, soil floor tray and grow light
  for (const y of [0.88, 1.36]) { for (let i = 0; i < 9; i++) rod(k, [-w / 2 + 0.03, y, -0.2 + i * 0.05], [w / 2 - 0.03, y, -0.2 + i * 0.05], 0.004, METAL.cromo, 3, true); } k.box(w - 0.06, 0.03, dp - 0.06, 0, 0.36, 0, 0x3c3c40);
  k.box(0.9, 0.025, 0.06, 0, H - 0.04, 0, 0x2a2a30); k.glow(new THREE.BoxGeometry(0.86, 0.008, 0.04), 0xffe6f4, 2.4, { at: [0, H - 0.056, 0], day: 0.5 });
  const st = ['barro', 'bojudo', 'liso', 'tigela', 'cilindro', 'barro'], cs = [0xc66f48, 0xf3ead8, 0x8fb0a0, 0xc66f48, 0xf3ead8, 0xc66f48]; d.plants.forEach((p, i) => potAt(k, p, cs[i], st[i], { shiny: i % 2 === 1 || i === 2, seg: 14 }));
  k.cylS(0.03, 0.03, 0.09, 0, 0.42, 0.12, 0x6a9ab8, 8); k.cylS(0.012, 0.014, 0.05, 0, 0.49, 0.12, 0x3c3c40, 6); k.addS(new THREE.CylinderGeometry(0.04, 0.04, 0.006, 12), mul(T(0.5, 1.5, -0.22), RX(HP)), k.c2);
});

furn({ id: 'jardim_inverno_central', name: 'Jardim de inverno central', cat: 'Vasos e plantas', price: 16000, lvl: 18, w: 1.9, d: 1.9, h: 0.8, cols: [0xe6dfd0, 0x3f8a9a], colN: ['Pedra', 'Azulejos'],
  plants: [[0, 0.78, 0, 1.3, 'pot'], [0.62, 0.42, 0, 1.1, 'pot'], [0.31, 0.42, 0.537, 1, 'hang'], [-0.31, 0.42, 0.537, 1.1, 'pot'], [-0.62, 0.42, 0, 1, 'pot'], [-0.31, 0.42, -0.537, 1.1, 'pot'], [0.31, 0.42, -0.537, 1, 'pot']], info: 'Um canteiro redondo de pedra e azulejo para ser o coração da casa.' }, (k) => {
  const C = k.c1, A = k.c2, R = 0.92;
  k.lathe([[0.001, 0], [R, 0], [R + 0.02, 0.02], [R + 0.02, 0.06], [R - 0.01, 0.08], [R - 0.02, 0.34], [R + 0.01, 0.37], [R + 0.01, 0.44], [R - 0.07, 0.44], [R - 0.08, 0.41], [0.001, 0.41]], 0, 0, 0, C, 36); k.cyl(R - 0.08, R - 0.08, 0.012, 0, 0.414, 0, SOIL, 36);
  // tile band
  for (let i = 0; i < 36; i++) { const a = (i / 36) * TAU, M = mul(RY(-a), T(R - 0.012, 0.21, 0)); k.addS(new THREE.BoxGeometry(0.012, 0.15, 0.145), M, i % 2 ? A : tone(A, 1.5)); k.addS(new THREE.OctahedronGeometry(0.04, 0), mul(M, T(0.007, 0, 0), S(0.15, 1, 1)), i % 2 ? 0xfbf8f0 : 0xe8c468); }
  for (const y of [0.125, 0.295]) k.add(new THREE.TorusGeometry(R - 0.008, 0.012, 4, 36), mul(T(0, y, 0), RX(HP)), tone(C, 0.88));
  // raised centre
  k.lathe([[0.26, 0.41], [0.3, 0.44], [0.29, 0.5], [0.31, 0.74], [0.34, 0.77], [0.34, 0.8], [0.27, 0.8], [0.265, 0.77], [0.001, 0.77]], 0, 0, 0, C, 24); k.cyl(0.265, 0.265, 0.012, 0, 0.774, 0, SOIL, 24);
  for (let i = 0; i < 12; i++) { const a = (i / 12) * TAU; k.addS(new THREE.BoxGeometry(0.01, 0.14, 0.13), mul(RY(-a), T(0.302, 0.62, 0)), i % 2 ? tone(A, 1.5) : A); }
  // pebble ring, stepping stones and little lanterns
  const r = rnd(14); for (let i = 0; i < 44; i++) { const a = (i / 44) * TAU + r() * 0.1, d = 0.36 + r() * 0.05; k.add(new THREE.IcosahedronGeometry(0.024 + r() * 0.014, 0), mul(T(Math.cos(a) * d, 0.42, Math.sin(a) * d), S(1, 0.6, 1)), [0xf3efe6, 0xcfc8ba, 0xa8a49a][i % 3]); }
  for (let i = 0; i < 3; i++) { const a = (i / 3) * TAU + 0.52, x = Math.cos(a) * 0.74, z = Math.sin(a) * 0.74; k.cyl(0.012, 0.012, 0.22, x, 0.53, z, 0x3c3c40, 6); k.cyl(0.045, 0.05, 0.008, x, 0.64, z, 0x3c3c40, 8); k.glow(new THREE.CylinderGeometry(0.034, 0.034, 0.07, 8), 0xffe2a0, 2.2, { at: [x, 0.68, z], day: 0.15 }); k.cone(0.06, 0.05, x, 0.74, z, 0x3c3c40, 8); }
  // a bird bath statue on the rim
  k.lathe([[0.001, 0.44], [0.045, 0.44], [0.028, 0.48], [0.024, 0.62], [0.035, 0.66], [0.075, 0.7], [0.08, 0.72], [0.068, 0.72], [0.03, 0.69], [0.001, 0.69]], 0, 0, 0.87, C, 12); k.glow(new THREE.CylinderGeometry(0.066, 0.066, 0.004, 12), 0x8fd0e8, 0.5, { at: [0, 0.708, 0.87], day: 0.6, opacity: 0.8 }); k.sph(0.026, 0.05, 0.742, 0.86, 0x5a9ad0, 1, 0.9, 1.3, 8); k.sph(0.018, 0.05, 0.77, 0.885, 0x5a9ad0, 1, 1, 1, 7); k.cone(0.006, 0.02, 0.05, 0.768, 0.908, 0xe8a23c, 5, RX(HP));
});

// =====================================================================================================================
// ESPECIAIS
// =====================================================================================================================
// a crackling fire: flames that flicker (always lit) over a bed of embers
function fire(k, x, y, z, w, s = 1) {
  const fl = []; for (let i = 0; i < 5; i++) { const hh = 0.26 * s * (0.7 + ((i * 3) % 4) * 0.15), g = new THREE.ConeGeometry(0.05 * s * (1 + (i % 2) * 0.3), hh, 6); g.translate(0, hh / 2, 0); fl.push(k.glow(g, i % 2 ? 0xffc040 : 0xff7a20, 2.6, { at: [x + ((i - 2) * w) / 5, y, z + (i % 2) * 0.03 * s], day: 1, emissive: i % 2 ? 0xffb030 : 0xff5a10 })); }
  k.glow(new THREE.BoxGeometry(w, 0.03 * s, 0.14 * s), 0xff5a20, 1.6, { at: [x, y - 0.01, z], day: 1 });
  k.tick((dt, t) => fl.forEach((m, i) => { m.scale.set(1 + 0.2 * Math.sin(t * 9 + i * 2), 0.8 + 0.3 * Math.abs(Math.sin(t * (5 + i) + i * 1.3)) + 0.1 * Math.sin(t * 23 + i), 1); m.rotation.z = 0.1 * Math.sin(t * 7 + i); }));
}
function logs(k, x, y, z, w) { [[-0.24, 0, 0.3], [0.24, 0, -0.3], [0, 0.075, 0.08]].forEach(([dx, dy, a]) => { const M = mul(T(x + dx * w, y + 0.045 + dy, z), RY(a), RZ(HP)); k.add(new THREE.CylinderGeometry(0.045, 0.045, w * 0.62, 8), M, 0x5a3a24); for (const s of [-1, 1]) k.add(new THREE.CylinderGeometry(0.036, 0.036, 0.004, 8), mul(M, T(0, s * w * 0.311, 0)), 0xd9b88a); }); }
function bricks(k, key, w, h, x, y, z, c, rot) { return k.art(`${key}:${c}`, w, h, x, y, z, (g, W, H) => { const bw = (0.21 / w) * W, bh = (0.07 / h) * H, r = rnd(7); g.fillStyle = '#d9cfc0'; g.fillRect(0, 0, W, H); for (let j = 0; j * bh < H; j++) for (let i = -1; i * bw < W; i++) { g.fillStyle = css(tone(c, 0.8 + r() * 0.4)); g.fillRect(i * bw + ((j % 2) * bw) / 2 + 1, j * bh + 1, bw - 2, bh - 2); } }, { rot, res: 256 }); }
function marble(k, key, w, h, x, y, z, c, rot) { return k.art(`${key}:${c}`, w, h, x, y, z, (g, W, H) => { g.fillStyle = css(c); g.fillRect(0, 0, W, H); const r = rnd(key.length * 7 + 3); for (let i = 0; i < 9; i++) { let px = r() * W, py = 0; g.strokeStyle = `rgba(120,120,135,${0.12 + r() * 0.2})`; g.lineWidth = 0.6 + r() * 1.8; g.beginPath(); g.moveTo(px, py); while (py < H) { px += (r() - 0.5) * W * 0.16; py += H * 0.07; g.lineTo(px, py); } g.stroke(); } }, { rot, res: 256 }); }
// piano keyboard lying flat: w wide, d deep, top at y, front edge at z + d / 2
function keyboard(k, x, y, z, w, d) {
  k.art('teclas' + Math.round(w * 100), w, d, x, y + 0.0012, z, (g, W, H) => { g.fillStyle = '#fbf8ee'; g.fillRect(0, 0, W, H); const n = Math.round(w / 0.0235); g.strokeStyle = '#8a8478'; g.lineWidth = 1; for (let i = 1; i < n; i++) { g.beginPath(); g.moveTo((i / n) * W, 0); g.lineTo((i / n) * W, H); g.stroke(); } }, { rot: RX(-HP), res: 512 });
  k.box(w, 0.02, d, x, y - 0.01, z, 0xf3efe2); const n = Math.round(w / 0.0235); for (let i = 1; i < n; i++) { const o = i % 7; if (o === 3 || o === 0) continue; k.box(0.013, 0.012, d * 0.62, x - w / 2 + (i / n) * w, y + 0.006, z - d * 0.19, 0x1c1c20); }
}

furn({ id: 'lareira_tijolos', name: 'Lareira de tijolos', cat: 'Especiais', price: 3500, lvl: 10, w: 1.5, d: 0.56, h: 1.3, surf: 1.14, cols: [0xb5583c, WOOD.nogueira], colN: ['Tijolos', 'Viga da cornija'], info: 'Fogo estalando, lenha e uma viga para pôr os enfeites.' }, (k) => {
  const C = k.c1, zf = 0.2;
  k.box(1.5, 0.06, 0.56, 0, 0.03, 0, 0x8a8478); for (const s of [-1, 1]) { k.box(0.34, 1.02, 0.4, s * 0.53, 0.57, -0.07, tone(C, 0.9)); k.box(0.006, 0.62, 0.36, s * 0.358, 0.37, -0.06, 0x2a211c); } k.box(0.72, 0.4, 0.4, 0, 0.88, -0.07, tone(C, 0.9)); k.box(0.72, 0.64, 0.04, 0, 0.38, -0.25, 0x1f1a18); k.box(0.72, 0.01, 0.38, 0, 0.065, -0.06, 0x2a211c); k.box(0.72, 0.01, 0.38, 0, 0.675, -0.06, 0x1f1a18); for (const s of [-1, 1]) { bricks(k, 'lar_p', 0.34, 1.02, s * 0.53, 0.57, 0.131, C); bricks(k, 'lar_s', 0.4, 1.02, s * 0.701, 0.57, -0.07, C, RY(s * HP)); } bricks(k, 'lar_t', 0.72, 0.4, 0, 0.88, 0.131, C);
  for (let i = 0; i < 9; i++) { const a = PI - (i / 8) * PI; k.box(0.1, 0.07, 0.03, Math.cos(a) * 0.37, 0.4 + Math.sin(a) * 0.32, 0.14, tone(C, i % 2 ? 0.75 : 1.1), RZ(a - HP)); }
  k.rbox(1.5, 0.08, 0.5, 0, 1.1, -0.03, k.c2, 0.015); for (const s of [-1, 1]) k.box(0.1, 0.12, 0.3, s * 0.6, 1.0, 0.0, tone(k.c2, 0.8)); k.box(1.0, 0.16, 0.3, 0, 1.22, -0.12, tone(C, 0.9)); bricks(k, 'lar_c', 1.0, 0.16, 0, 1.22, 0.031, C);
  for (const s of [-1, 1]) { rod(k, [s * 0.24, 0.07, -0.14], [s * 0.24, 0.07, 0.14], 0.01, 0x2a2a30, 5, true); k.boxS(0.02, 0.1, 0.02, s * 0.24, 0.1, 0.14, 0x2a2a30); } for (let i = 0; i < 5; i++) rod(k, [-0.26, 0.1, -0.12 + i * 0.055], [0.26, 0.1, -0.12 + i * 0.055], 0.007, 0x2a2a30, 4, true);
  logs(k, 0, 0.1, -0.04, 0.5); fire(k, 0, 0.2, -0.04, 0.42, 1.25);
  k.cylS(0.012, 0.012, 0.5, 0.62, 0.31, 0.2, 0x2a2a30, 6); k.boxS(0.07, 0.09, 0.01, 0.62, 0.09, 0.2, 0x2a2a30); k.sphS(0.018, 0.62, 0.57, 0.2, METAL.latao, 1, 1, 1, 6); basket(k, -0.62, 0.06, 0.18, 0.16, (t) => 0.07 + 0.015 * t, 0xc9a468, 4, 10); for (let i = 0; i < 3; i++) k.cyl(0.022, 0.022, 0.2, -0.64 + i * 0.03, 0.2, 0.18, 0x7a5a3a, 6, RZ(0.15 * (i - 1)));
});

furn({ id: 'lareira_marmore', name: 'Lareira de mármore', cat: 'Especiais', price: 14000, lvl: 17, w: 1.8, d: 0.56, h: 1.34, surf: 1.33, cols: [0xf3f0ea, METAL.ouro], colN: ['Mármore', 'Dourados'], info: 'Colunas, cornija entalhada e dourados: a lareira de um solar.' }, (k) => {
  const C = k.c1, G = k.c2;
  k.box(1.8, 0.05, 0.56, 0, 0.025, 0, 0x3a3a40); for (const s of [-1, 1]) { k.box(0.38, 1.1, 0.34, s * 0.59, 0.6, -0.1, C); k.box(0.006, 0.72, 0.3, s * 0.398, 0.41, -0.09, 0x222226); } k.box(0.8, 0.38, 0.34, 0, 0.96, -0.1, C); k.box(0.8, 0.74, 0.04, 0, 0.42, -0.25, 0x18181c); k.box(0.8, 0.01, 0.32, 0, 0.055, -0.09, 0x222226); k.box(0.8, 0.01, 0.32, 0, 0.768, -0.09, 0x18181c);
  for (const s of [-1, 1]) { marble(k, 'mm_p', 0.38, 1.1, s * 0.59, 0.6, 0.071, C); k.box(0.26, 0.1, 0.2, s * 0.6, 0.1, 0.12, C); k.latheS([[0.085, 0.15], [0.09, 0.17], [0.07, 0.2], [0.066, 0.9], [0.085, 0.93], [0.09, 0.96]], s * 0.6, 0, 0.13, C, 14); for (let i = 0; i < 8; i++) k.box(0.012, 0.68, 0.012, s * 0.6 + Math.cos(i * 0.785) * 0.068, 0.55, 0.13 + Math.sin(i * 0.785) * 0.068, tone(C, 0.88)); k.boxS(0.2, 0.05, 0.2, s * 0.6, 0.985, 0.13, G); k.sphS(0.03, s * 0.6, 0.94, 0.215, G, 1.6, 0.8, 0.5, 8); }
  marble(k, 'mm_t', 0.8, 0.38, 0, 0.96, 0.071, C); k.boxS(0.84, 0.03, 0.02, 0, 0.775, 0.08, G); for (const s of [-1, 1]) k.boxS(0.03, 0.72, 0.02, s * 0.405, 0.41, 0.08, G);
  // carved frieze: garland and medallion
  k.sphS(0.07, 0, 0.96, 0.085, G, 1, 1, 0.3, 12); k.sphS(0.04, 0, 0.96, 0.1, C, 1, 1, 0.4, 8); for (const s of [-1, 1]) { k.addS(new THREE.TorusGeometry(0.12, 0.014, 4, 12, PI), mul(T(s * 0.21, 1.0, 0.08), RZ(PI)), G); for (let i = 0; i < 3; i++) k.sphS(0.022, s * (0.12 + i * 0.09), 0.9 - (i === 1 ? 0.03 : 0), 0.085, G, 1, 1, 0.5, 6); }
  k.box(1.7, 0.06, 0.46, 0, 1.04, -0.04, C); k.box(1.8, 0.05, 0.54, 0, 1.305, -0.01, C); k.box(1.74, 0.2, 0.5, 0, 1.18, -0.03, tone(C, 0.96)); marble(k, 'mm_c', 1.74, 0.2, 0, 1.18, 0.221, C); for (let i = 0; i < 17; i++) k.boxS(0.05, 0.05, 0.02, -0.8 + i * 0.1, 1.25, 0.23, i % 2 ? G : tone(C, 0.9)); k.boxS(1.76, 0.014, 0.02, 0, 1.09, 0.225, G);
  // hearth, fender, fire
  k.box(1.5, 0.03, 0.2, 0, 0.065, 0.17, 0x55555c); for (const s of [-1, 1]) { k.sphS(0.03, s * 0.5, 0.2, 0.25, G, 1, 1, 1, 8); k.cylS(0.012, 0.012, 0.12, s * 0.5, 0.13, 0.25, G, 6); } rod(k, [-0.5, 0.16, 0.25], [0.5, 0.16, 0.25], 0.008, G, 5, true); rod(k, [-0.5, 0.1, 0.25], [0.5, 0.1, 0.25], 0.008, G, 5, true); for (let i = 0; i < 9; i++) rod(k, [-0.4 + i * 0.1, 0.1, 0.25], [-0.4 + i * 0.1, 0.16, 0.25], 0.005, G, 4, true);
  for (let i = 0; i < 5; i++) rod(k, [-0.28, 0.12, -0.18 + i * 0.05], [0.28, 0.12, -0.18 + i * 0.05], 0.007, 0x2a2a30, 4, true); logs(k, 0, 0.12, -0.08, 0.54); fire(k, 0, 0.22, -0.08, 0.46, 1.4);
});

furn({ id: 'piano_armario', name: 'Piano de armário', cat: 'Especiais', price: 6500, lvl: 12, w: 1.5, d: 0.66, h: 1.26, cols: [WOOD.mogno, METAL.latao], colN: ['Madeira', 'Metais'], info: 'Meio desafinado, mas toca valsa que é uma beleza.' }, (k) => {
  const W = k.c1, G = k.c2;
  k.rbox(1.46, 1.2, 0.34, 0, 0.62, -0.15, W, 0.012); k.box(1.5, 0.04, 0.4, 0, 1.24, -0.13, tone(W, 0.85)); k.box(1.5, 0.08, 0.38, 0, 0.04, -0.13, tone(W, 0.75)); k.box(1.36, 0.42, 0.012, 0, 0.98, 0.022, tone(W, 1.15)); k.box(1.36, 0.4, 0.012, 0, 0.36, 0.022, tone(W, 1.12));
  k.box(1.46, 0.07, 0.3, 0, 0.665, 0.17, W); for (const s of [-1, 1]) { k.box(0.06, 0.12, 0.3, s * 0.7, 0.72, 0.17, tone(W, 0.9)); k.lathe([[0.03, 0], [0.035, 0.05], [0.022, 0.1], [0.03, 0.3], [0.022, 0.5], [0.04, 0.6], [0.04, 0.63]], s * 0.68, 0, 0.28, tone(W, 0.9), 10); }
  keyboard(k, 0, 0.72, 0.2, 1.3, 0.14); k.box(1.34, 0.05, 0.02, 0, 0.745, 0.115, tone(W, 0.8)); k.box(1.34, 0.012, 0.02, 0, 0.705, 0.275, 0x8a2a2a);
  k.box(0.56, 0.3, 0.012, 0, 0.94, 0.06, tone(W, 0.9), RX(-0.2)); k.box(0.6, 0.02, 0.05, 0, 0.8, 0.105, tone(W, 0.8)); k.art('partitura', 0.4, 0.26, 0, 0.95, 0.073, (g, Wd, H) => { g.fillStyle = '#fbf6e6'; g.fillRect(0, 0, Wd, H); g.fillStyle = '#d8d0b8'; g.fillRect(Wd / 2 - 1, 0, 2, H); g.strokeStyle = '#3a3a40'; g.lineWidth = 1; for (let s = 0; s < 4; s++) for (let l = 0; l < 5; l++) { g.beginPath(); g.moveTo(Wd * 0.05, H * (0.12 + s * 0.22) + l * 4); g.lineTo(Wd * 0.95, H * (0.12 + s * 0.22) + l * 4); g.stroke(); } const r = rnd(5); for (let i = 0; i < 44; i++) { const x = Wd * (0.08 + r() * 0.84), y = H * (0.12 + Math.floor(r() * 4) * 0.22) + r() * 16; ell(g, x, y, 3.2, 2.4, '#1c1c20', -0.4); g.fillRect(x + 2.4, y - 12, 1.2, 12); } }, { rot: RX(-0.2), res: 256 });
  for (const s of [-1, 1]) { k.tubeS([[s * 0.48, 1.0, 0.03], [s * 0.48, 0.98, 0.1], [s * 0.48, 1.02, 0.13]], 0.007, G, 5); k.latheS([[0.001, 0], [0.025, 0.006], [0.028, 0.014], [0.001, 0.014]], s * 0.48, 1.02, 0.13, G, 10); candle(k, s * 0.48, 1.034, 0.13, 0.011, 0.07, 0xf6ecd8); }
  for (const x of [-0.1, 0, 0.1]) { k.boxS(0.035, 0.012, 0.09, x, 0.09, 0.08, G); } k.box(0.4, 0.14, 0.03, 0, 0.11, 0.03, tone(W, 0.8)); k.boxS(0.03, 0.03, 0.006, 0, 0.61, 0.325, G);
});

furn({ id: 'piano_cauda', name: 'Piano de cauda', cat: 'Especiais', price: 30000, lvl: 20, w: 1.56, d: 2.28, h: 1.78, cols: [0x1c1c22, 0x8a2a3a], colN: ['Laca', 'Veludo do banco'], info: 'A joia da casa: três pernas, cauda aberta e som de concerto.' }, (k) => {
  const C = k.c1, zk = 0.42, out = [[-0.74, zk], [0.74, zk], [0.74, zk - 0.5]]; for (let i = 1; i <= 10; i++) { const t = i / 10; out.push([0.74 - 0.52 * t * t - 0.18 * Math.sin(t * PI) * 0.6, zk - 0.5 - t * 0.9]); } for (let i = 1; i <= 8; i++) { const a = (i / 8) * PI; out.push([-0.26 - 0.24 + Math.cos(a) * 0.24 + 0.24 - 0.0, zk - 1.4 - Math.sin(a) * 0.14]); } out.push([-0.74, zk - 1.3]);
  const sh = new THREE.Shape(); out.forEach(([x, z], i) => (i ? sh.lineTo(x, -z) : sh.moveTo(x, -z))); const ho = new THREE.Path(); out.map(([x, z]) => [x * 0.94, zk - 0.03 + (z - zk + 0.03) * 0.96 - 0.03]).forEach(([x, z], i) => (i ? ho.lineTo(x, -z) : ho.moveTo(x, -z))); const rim = new THREE.Shape(sh.getPoints()); rim.holes.push(ho);
  k.addS(new THREE.ExtrudeGeometry(rim, { depth: 0.3, bevelEnabled: false }), mul(T(0, 0.62, 0), RX(-HP)), C); k.addS(new THREE.ExtrudeGeometry(sh, { depth: 0.03, bevelEnabled: false }), mul(T(0, 0.6, 0), RX(-HP)), tone(C, 0.9));
  // iron plate, strings, dampers
  slab(k, out.map(([x, z]) => [x * 0.93, zk - 0.2 + (z - zk + 0.2) * 0.95]), 0.012, 0.8, GOLD); for (let i = 0; i < 26; i++) { const x = -0.66 + i * 0.052, L = 1.25 - Math.max(0, x + 0.1) * 0.95; k.box(0.003, 0.003, L, x, 0.822, zk - 0.26 - L / 2, 0xd8d4c8); } k.box(1.36, 0.03, 0.05, 0, 0.83, zk - 0.3, tone(C, 1.6)); for (let i = 0; i < 3; i++) k.cylS(0.05, 0.05, 0.006, -0.4 + i * 0.3, 0.816, zk - 0.75 + i * 0.1, 0x6a5a2a, 12);
  // keyboard block
  k.boxS(1.48, 0.1, 0.3, 0, 0.65, zk + 0.1, C); keyboard(k, 0, 0.72, zk + 0.14, 1.3, 0.14); for (const s of [-1, 1]) k.boxS(0.08, 0.1, 0.3, s * 0.7, 0.745, zk + 0.1, C); k.boxS(1.48, 0.2, 0.04, 0, 0.82, zk + 0.0, C); k.boxS(1.32, 0.012, 0.03, 0, 0.705, zk + 0.215, 0x8a2a2a);
  k.boxS(0.7, 0.24, 0.012, 0, 1.04, zk - 0.08, C, RX(-0.25)); k.boxS(0.74, 0.02, 0.06, 0, 0.925, zk - 0.03, C); k.art('partitura2', 0.5, 0.2, 0, 1.045, zk - 0.068, (g, Wd, H) => { g.fillStyle = '#fbf6e6'; g.fillRect(0, 0, Wd, H); g.strokeStyle = '#3a3a40'; g.lineWidth = 1; for (let s = 0; s < 3; s++) for (let l = 0; l < 5; l++) { g.beginPath(); g.moveTo(Wd * 0.04, H * (0.14 + s * 0.3) + l * 4); g.lineTo(Wd * 0.96, H * (0.14 + s * 0.3) + l * 4); g.stroke(); } const r = rnd(9); for (let i = 0; i < 50; i++) { const x = Wd * (0.06 + r() * 0.88), y = H * (0.14 + Math.floor(r() * 3) * 0.3) + r() * 16; ell(g, x, y, 3.2, 2.4, '#1c1c20', -0.4); g.fillRect(x + 2.4, y - 12, 1.2, 12); } }, { rot: RX(-0.25), res: 256 });
  // lid propped open (hinged on the left side)
  const LM = mul(T(-0.74, 0.925, 0), RZ(0.62), T(0.74, 0, 0)); k.addS(new THREE.ExtrudeGeometry(new THREE.Shape(out.slice(2).concat([[-0.74, zk - 0.5]]).map(([x, z]) => new THREE.Vector2(x, -z))), { depth: 0.025, bevelEnabled: false }), mul(LM, RX(-HP)), C); rod(k, [0.5, 0.93, zk - 0.7], [0.36, 1.5, zk - 0.72], 0.01, C, 6, true);
  k.addS(new THREE.BoxGeometry(1.48, 0.025, 0.5), mul(T(0, 0.9375, zk - 0.25), T(0, 0, 0)), tone(C, 1.0));
  // legs, pedal lyre, bench
  for (const [x, z] of [[-0.64, zk - 0.05], [0.64, zk - 0.05], [-0.26, zk - 1.3]]) { k.latheS([[0.03, 0.04], [0.045, 0.1], [0.04, 0.2], [0.06, 0.5], [0.075, 0.6]], x, 0, z, C, 10); k.cylS(0.03, 0.03, 0.03, x, 0.032, z, METAL.latao, 8, RZ(HP)); }
  for (const s of [-1, 1]) k.boxS(0.03, 0.42, 0.03, s * 0.09, 0.4, zk - 0.05, C); k.boxS(0.26, 0.06, 0.1, 0, 0.19, zk - 0.03, C); for (const x of [-0.08, 0, 0.08]) k.boxS(0.03, 0.012, 0.1, x, 0.17, zk + 0.06, METAL.latao);
  const zb = zk + 0.52; k.rbox(0.8, 0.08, 0.34, 0, 0.47, zb, k.c2, 0.03); k.boxS(0.84, 0.05, 0.38, 0, 0.42, zb, C); for (const sx of [-1, 1]) for (const sz of [-1, 1]) k.latheS([[0.018, 0], [0.022, 0.1], [0.03, 0.36], [0.034, 0.4]], sx * 0.37, 0, zb + sz * 0.14, C, 8); for (let i = 0; i < 8; i++) k.sph(0.012, -0.28 + (i % 4) * 0.187, 0.512, zb - 0.07 + Math.floor(i / 4) * 0.14, tone(k.c2, 0.7), 1, 0.4, 1, 6);
});

furn({ id: 'aquario_grande', name: 'Aquário grande', cat: 'Especiais', price: 8500, lvl: 14, w: 1.4, d: 0.56, h: 1.47, cols: [WOOD.nogueira, 0x5ab0c8], colN: ['Móvel', 'Cascalho'], info: 'Um pedacinho de rio com peixes coloridos nadando.' }, (k) => {
  const W = k.c1, y0 = 0.78, th = 0.6;
  k.rbox(1.4, 0.74, 0.5, 0, 0.39, 0, W, 0.012); k.box(1.36, 0.04, 0.46, 0, 0.02, 0, tone(W, 0.6)); for (const s of [-1, 1]) { k.box(0.6, 0.56, 0.012, s * 0.33, 0.4, 0.252, tone(W, 1.15)); k.cylS(0.01, 0.01, 0.12, s * 0.06, 0.42, 0.266, METAL.latao, 6); } k.box(1.4, 0.03, 0.5, 0, 0.765, 0, tone(W, 0.8));
  k.glass(new THREE.BoxGeometry(1.34, th, 0.44), T(0, y0 + th / 2, 0), 0xdff4f6, 0.16); k.glass(new THREE.BoxGeometry(1.31, th - 0.07, 0.41), T(0, y0 + (th - 0.07) / 2 + 0.01, 0), 0x6ac0e0, 0.26);
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) k.box(0.02, th, 0.02, sx * 0.67, y0 + th / 2, sz * 0.22, 0x2a2a30); k.box(1.38, 0.09, 0.48, 0, y0 + th + 0.045, 0, 0x2a2a30); k.glow(new THREE.BoxGeometry(1.2, 0.01, 0.3), 0xdff6ff, 1.8, { at: [0, y0 + th - 0.004, 0], day: 1 });
  const r = rnd(12); k.box(1.3, 0.05, 0.4, 0, y0 + 0.03, 0, tone(k.c2, 0.8)); for (let i = 0; i < 46; i++) k.sph(0.022 + r() * 0.016, (r() - 0.5) * 1.24, y0 + 0.058, (r() - 0.5) * 0.36, [k.c2, tone(k.c2, 1.4), 0xf3ead8, tone(k.c2, 0.7)][i % 4], 1, 0.6, 1, 5);
  k.add(new THREE.DodecahedronGeometry(0.11, 0), mul(T(-0.36, y0 + 0.12, -0.06), S(1.3, 0.9, 1)), 0x8a8478); k.add(new THREE.DodecahedronGeometry(0.07, 0), T(-0.2, y0 + 0.09, 0.04), 0xa39c8e); k.add(new THREE.TorusGeometry(0.09, 0.035, 6, 12, PI), T(0.4, y0 + 0.05, -0.04), 0xb8684a);
  const weeds = []; for (const [x, z, h, c] of [[-0.56, 0.05, 0.36, 0x3f9a4a], [-0.5, -0.08, 0.28, 0x5ab05a], [0.1, -0.1, 0.4, 0x3f9a4a], [0.16, -0.04, 0.3, 0x6ac06a], [0.58, 0.06, 0.34, 0x5ab05a], [0.52, -0.1, 0.24, 0x3f9a4a]]) { const w = part(k, (p) => { for (let j = 0; j < 3; j++) p.add(new THREE.SphereGeometry(h / 2, 6, 5), mul(T((j - 1) * 0.03, h / 2, 0), RZ((j - 1) * 0.18), S(0.09, 1, 0.03)), j === 1 ? c : tone(c, 0.85)); }, x, y0 + 0.05, z); weeds.push(w); }
  const fs = [[1, 0xf0843c, 0xf6c06a], [0.8, 0x4a90d9, 0xf2e04a], [1.1, 0xe8504a, 0xfbf7f0], [0.7, 0xf2c84a, 0xf0843c], [0.9, 0x8a62c8, 0xf4a9c0], [0.65, 0x5ad0b0, 0xfbf7f0], [0.75, 0xf0843c, 0xfbf7f0]].map(([s, a, b], i) => { const f = fish(k, s, a, b); f.position.set(-0.4 + i * 0.13, y0 + 0.2 + (i % 3) * 0.1, (i % 2 ? 0.08 : -0.06)); return f; });
  const bub = []; for (let i = 0; i < 6; i++) bub.push(k.glow(new THREE.SphereGeometry(0.008 + (i % 3) * 0.003, 6, 4), 0xeaffff, 0.8, { at: [0.3, y0 + 0.1, 0.02], day: 1, opacity: 0.7 }));
  k.tick((dt, t) => { fs.forEach((f, i) => { const sp = 0.25 + (i % 4) * 0.07, ph = i * 1.9, x = Math.sin(t * sp + ph) * (0.5 - (i % 3) * 0.06), dir = Math.cos(t * sp + ph) >= 0 ? 0 : PI; f.position.x = x; f.position.y = y0 + 0.2 + (i % 3) * 0.11 + Math.sin(t * 0.7 + i) * 0.03; f.rotation.y = dir + Math.sin(t * 7 + i) * 0.14; });
    weeds.forEach((w, i) => { w.rotation.z = 0.1 * Math.sin(t * 1.2 + i * 1.7); }); bub.forEach((b, i) => { const u = (t * 0.25 + i / 6) % 1; b.position.set(0.3 + Math.sin(u * 14 + i) * 0.015, y0 + 0.08 + u * (th - 0.2), 0.02 + (i % 2) * 0.03); }); });
});

furn({ id: 'relogio_pendulo', name: 'Relógio de pêndulo', cat: 'Especiais', price: 5200, lvl: 12, w: 0.56, d: 0.34, h: 2.1, cols: [WOOD.mogno, METAL.latao], colN: ['Madeira', 'Pêndulo e metais'], info: 'Alto, solene, com o pêndulo indo e vindo sem pressa.' }, (k) => {
  const W = k.c1, G = k.c2;
  k.box(0.56, 0.08, 0.34, 0, 0.04, 0, tone(W, 0.75)); k.rbox(0.5, 0.42, 0.3, 0, 0.29, 0, W, 0.01); k.box(0.38, 0.28, 0.008, 0, 0.3, 0.152, tone(W, 1.15)); k.box(0.54, 0.04, 0.33, 0, 0.52, 0, tone(W, 0.8));
  for (const s of [-1, 1]) k.box(0.05, 0.94, 0.26, s * 0.185, 1.01, 0, W); k.box(0.42, 0.94, 0.02, 0, 1.01, -0.12, tone(W, 0.8)); for (const s of [-1, 1]) k.box(0.03, 0.9, 0.02, s * 0.15, 1.01, 0.125, tone(W, 1.12)); for (const y of [0.57, 1.45]) k.box(0.33, 0.03, 0.02, 0, y, 0.125, tone(W, 1.12)); k.glass(new THREE.BoxGeometry(0.27, 0.86, 0.006), T(0, 1.01, 0.125), 0xe6f4f4, 0.14);
  k.box(0.54, 0.04, 0.33, 0, 1.5, 0, tone(W, 0.8)); k.rbox(0.5, 0.46, 0.3, 0, 1.75, 0, W, 0.01); k.cyl(0.25, 0.25, 0.3, 0, 1.94, 0, W, 24, mul(RX(HP), S(1, 1, 0.5))); k.box(0.56, 0.03, 0.34, 0, 1.99, 0, tone(W, 0.8));
  k.cylS(0.185, 0.185, 0.01, 0, 1.76, 0.152, G, 24, RX(HP)); clockFace(k, 'pend_face', 0, 1.76, 0.1575, 0.17, '#fbf4e2', '#2a1c14'); clockHands(k, 0, 1.76, 0.1585, 0.14, 0x2a1c14, false); for (const s of [-1, 1]) { k.lathe([[0.02, 0], [0.026, 0.02], [0.014, 0.05], [0.02, 0.08], [0.001, 0.11]], s * 0.23, 1.99, 0.1, tone(W, 0.9), 8); k.lathe([[0.016, 0], [0.02, 0.1], [0.016, 0.38], [0.022, 0.4]], s * 0.22, 1.54, 0.13, tone(W, 0.85), 8); } k.sphS(0.03, 0, 2.065, 0, G, 1, 1.2, 1, 8);
  const pend = part(k, (p) => { p.cylS(0.005, 0.005, 0.66, 0, -0.33, 0, G, 5); p.addS(new THREE.CylinderGeometry(0.07, 0.07, 0.012, 20), mul(T(0, -0.68, 0), RX(HP)), G); p.addS(new THREE.CylinderGeometry(0.05, 0.05, 0.016, 16), mul(T(0, -0.68, 0), RX(HP)), tone(G, 1.25)); }, 0, 1.46, 0.02);
  k.tick((dt, t) => { pend.rotation.z = 0.11 * Math.sin(t * 2.6); }); for (const [x, yy] of [[-0.09, 0.95], [0.09, 0.8]]) { k.cyl(0.002, 0.002, 1.46 - yy, x, (1.46 + yy) / 2, -0.04, G, 4); k.cylS(0.026, 0.026, 0.15, x, yy - 0.075, -0.04, G, 10); }
});

furn({ id: 'harpa', name: 'Harpa dourada', cat: 'Especiais', price: 11000, lvl: 16, w: 1.0, d: 0.5, h: 1.8, cols: [METAL.ouro, WOOD.mel], colN: ['Dourado', 'Caixa de som'], info: 'Cordas que parecem chuva fina quando alguém dedilha.' }, (k) => {
  const G = k.c1, W = k.c2;
  k.addS(LG([[0.001, 0], [0.2, 0], [0.21, 0.02], [0.17, 0.05], [0.16, 0.08], [0.001, 0.08]], 8), mul(T(0.05, 0, 0), S(1.9, 1, 1.1)), G); for (const [x, z] of [[-0.28, 0.18], [-0.28, -0.18], [0.38, 0.18], [0.38, -0.18]]) k.sphS(0.035, x, 0.03, z, G, 1.2, 0.8, 1.2, 8);
  // column with capital
  k.latheS([[0.045, 0.08], [0.05, 0.12], [0.03, 0.18], [0.028, 1.4], [0.045, 1.46], [0.06, 1.5], [0.07, 1.6], [0.05, 1.66], [0.03, 1.72], [0.001, 1.76]], -0.36, 0, 0, G, 12); for (let i = 0; i < 8; i++) k.box(0.008, 1.2, 0.008, -0.36 + Math.cos(i * 0.785) * 0.03, 0.8, Math.sin(i * 0.785) * 0.03, tone(G, 0.8)); for (let i = 0; i < 6; i++) k.sphS(0.022, -0.36 + Math.cos(i * 1.047) * 0.06, 1.56, Math.sin(i * 1.047) * 0.06, tone(G, 1.2), 1, 1.4, 1, 6); k.sphS(0.028, -0.36, 1.77, 0, tone(G, 1.2), 1, 1, 1, 8);
  // curved neck and sound box
  tb(k, [[-0.36, 1.5, 0], [-0.2, 1.62, 0], [0.0, 1.5, 0], [0.2, 1.36, 0], [0.36, 1.42, 0], [0.42, 1.56, 0]], 0.03, G, { shiny: true, n: 22, seg: 8 }); k.sphS(0.04, 0.42, 1.57, 0, tone(G, 1.2), 1, 1, 1, 8);
  const SM = mul(T(0.085, 0.76, 0), RZ(-0.482)); k.add(new THREE.CylinderGeometry(0.05, 0.13, 1.44, 10, 1, false, 0, PI), mul(SM, RY(0), S(1, 1, 0.9)), W); k.add(new THREE.BoxGeometry(0.012, 1.44, 0.2), mul(SM, T(-0.006, 0, 0), S(1, 1, 1)), tone(W, 1.15)); for (let i = 0; i < 4; i++) k.add(new THREE.CylinderGeometry(0.014, 0.014, 0.008, 8), mul(SM, T(-0.012, -0.4 + i * 0.26, 0.05), RZ(HP)), 0x2a1c14);
  // strings
  const NK = [[-0.36, 1.5], [-0.2, 1.62], [0, 1.5], [0.2, 1.36], [0.36, 1.42]], ny = (x) => { let j = 0; while (j < 3 && NK[j + 1][0] < x) j++; const t = (x - NK[j][0]) / (NK[j + 1][0] - NK[j][0]); return NK[j][1] + (NK[j + 1][1] - NK[j][1]) * t; };
  for (let i = 0; i < 24; i++) { const x = -0.27 + i * 0.0265, ys = 0.13 + ((x + 0.25) / 0.67) * 1.28; if (ys > ny(x) - 0.08) continue; rod(k, [x - 0.012, ys, 0], [x, ny(x) - 0.02, 0], 0.0018, i % 7 === 0 ? 0xd8483c : i % 7 === 3 ? 0x3a4a8a : 0xf3ead8, 3); }
});

furn({ id: 'fonte_pedra', name: 'Fonte interna de pedra', cat: 'Especiais', price: 9000, lvl: 15, w: 1.3, d: 1.3, h: 1.5, cols: [0xcfc8b8, 0x7fc8e0], colN: ['Pedra', 'Água'], info: 'Três bacias e o barulhinho de água para acalmar a casa.' }, (k) => {
  const C = k.c1, A = k.c2, ws = [];
  k.lathe([[0.001, 0], [0.62, 0], [0.64, 0.03], [0.64, 0.08], [0.6, 0.1], [0.6, 0.3], [0.64, 0.33], [0.64, 0.38], [0.55, 0.38], [0.54, 0.34], [0.52, 0.16], [0.001, 0.14]], 0, 0, 0, C, 28); for (let i = 0; i < 14; i++) k.sph(0.05, Math.cos(i * 0.449) * 0.605, 0.2, Math.sin(i * 0.449) * 0.605, tone(C, 0.9), 0.5, 1.4, 1.2, 6);
  k.lathe([[0.14, 0.14], [0.16, 0.2], [0.09, 0.3], [0.07, 0.62], [0.1, 0.7], [0.3, 0.78], [0.36, 0.84], [0.36, 0.87], [0.31, 0.87], [0.28, 0.82], [0.08, 0.76], [0.001, 0.76]], 0, 0, 0, C, 22);
  k.lathe([[0.06, 0.76], [0.08, 0.84], [0.05, 0.92], [0.045, 1.1], [0.07, 1.16], [0.17, 1.2], [0.21, 1.25], [0.21, 1.27], [0.17, 1.27], [0.15, 1.24], [0.05, 1.2], [0.001, 1.2]], 0, 0, 0, C, 18); k.lathe([[0.04, 1.2], [0.05, 1.28], [0.03, 1.34], [0.06, 1.4], [0.04, 1.46], [0.001, 1.5]], 0, 0, 0, C, 12);
  for (const [r, y] of [[0.54, 0.335], [0.305, 0.855], [0.168, 1.258]]) ws.push(k.glow(new THREE.CylinderGeometry(r, r, 0.006, 24), A, 0.45, { at: [0, y, 0], day: 0.6, opacity: 0.82 }));
  const falls = []; for (let i = 0; i < 6; i++) { const a = (i / 6) * TAU; falls.push(k.glow(new THREE.CylinderGeometry(0.008, 0.012, 0.38, 5), A, 0.6, { at: [Math.cos(a) * 0.2, 1.07, Math.sin(a) * 0.2], day: 0.6, opacity: 0.7 })); falls.push(k.glow(new THREE.CylinderGeometry(0.01, 0.016, 0.5, 5), A, 0.6, { at: [Math.cos(a + 0.5) * 0.355, 0.6, Math.sin(a + 0.5) * 0.355], day: 0.6, opacity: 0.7 })); }
  const rip = part(k, (p) => { for (const r of [0.2, 0.34, 0.46]) p.add(new THREE.TorusGeometry(r, 0.004, 3, 24), RX(HP), 0xeaffff); }, 0, 0.34, 0);
  k.tick((dt, t) => { falls.forEach((f, i) => { f.scale.x = f.scale.z = 1 + 0.3 * Math.sin(t * 8 + i * 1.7); }); const u = (t * 0.4) % 1; rip.scale.set(0.85 + u * 0.25, 1, 0.85 + u * 0.25); ws.forEach((w, i) => { w.rotation.y = t * 0.2 * (i % 2 ? 1 : -1); }); });
});

furn({ id: 'maquina_costura', name: 'Máquina de costura antiga', cat: 'Especiais', price: 1800, lvl: 8, w: 1.0, d: 0.5, h: 1.13, cols: [WOOD.nogueira, 0x1f1f24], colN: ['Tampo', 'Ferro e máquina'], info: 'De pedal, com arabescos dourados: costurou o enxoval da família.' }, (k) => {
  const W = k.c1, M = k.c2;
  k.rbox(1.0, 0.04, 0.48, 0, 0.76, 0, W, 0.012); k.box(0.3, 0.1, 0.4, -0.3, 0.69, 0, tone(W, 0.9)); k.box(0.3, 0.1, 0.4, 0.3, 0.69, 0, tone(W, 0.9)); for (const s of [-1, 1]) k.sphS(0.014, s * 0.3, 0.69, 0.205, METAL.latao, 1, 1, 1, 6);
  for (const s of [-1, 1]) { const x = s * 0.42; tb(k, [[x, 0.74, -0.18], [x, 0.4, -0.08], [x, 0.3, -0.2], [x, 0.02, -0.22]], 0.014, M, { shiny: true, n: 12 }); tb(k, [[x, 0.74, 0.18], [x, 0.4, 0.08], [x, 0.3, 0.2], [x, 0.02, 0.22]], 0.014, M, { shiny: true, n: 12 }); k.addS(new THREE.TorusGeometry(0.08, 0.01, 4, 14), mul(T(x, 0.52, 0), RY(HP)), M); rod(k, [x, 0.03, -0.22], [x, 0.03, 0.22], 0.012, M, 5, true); rod(k, [x, 0.4, -0.08], [x, 0.4, 0.08], 0.01, M, 5, true); }
  rod(k, [-0.42, 0.3, 0], [0.42, 0.3, 0], 0.01, M, 5, true); k.boxS(0.4, 0.014, 0.26, -0.05, 0.1, 0, M, RX(0.1)); for (let i = 0; i < 4; i++) k.boxS(0.36, 0.004, 0.012, -0.05, 0.108, -0.09 + i * 0.06, tone(M, 2), RX(0.1)); rod(k, [-0.42, 0.09, 0], [0.42, 0.09, 0], 0.008, M, 5, true);
  const wh = part(k, (p) => { p.addS(new THREE.TorusGeometry(0.17, 0.014, 5, 22), RY(HP), M); for (let i = 0; i < 4; i++) p.addS(new THREE.CylinderGeometry(0.006, 0.006, 0.34, 4), mul(RX((i / 4) * PI), T(0, 0, 0)), M); p.addS(new THREE.CylinderGeometry(0.03, 0.03, 0.03, 8), RZ(HP), M); }, 0.34, 0.36, -0.02); k.tick((dt) => { wh.rotation.x += dt * 1.2; }); rod(k, [0.34, 0.5, -0.02], [0.34, 0.9, -0.02], 0.003, 0xb8946a, 3);
  // the machine
  k.boxS(0.46, 0.04, 0.18, 0.02, 0.8, 0, M); k.boxS(0.1, 0.22, 0.12, 0.2, 0.93, 0, M); tb(k, [[0.2, 1.0, 0], [0.1, 1.04, 0], [-0.08, 1.03, 0], [-0.17, 0.98, 0]], 0.042, M, { shiny: true, n: 10, seg: 8 }); k.boxS(0.07, 0.14, 0.08, -0.17, 0.93, 0, M); k.cylS(0.004, 0.004, 0.07, -0.17, 0.84, 0.01, METAL.cromo, 4); k.boxS(0.04, 0.008, 0.03, -0.17, 0.823, 0.01, METAL.cromo);
  k.addS(new THREE.TorusGeometry(0.06, 0.012, 5, 16), mul(T(0.27, 0.95, 0), RY(HP)), M); k.cylS(0.02, 0.02, 0.04, 0.26, 0.95, 0, METAL.cromo, 8, RZ(HP)); k.cyl(0.016, 0.016, 0.05, 0.08, 1.1, 0, 0xd8483c, 8); k.cylS(0.003, 0.003, 0.06, 0.08, 1.08, 0, METAL.cromo, 4);
  for (const [x, y, s] of [[0.05, 1.045, 0.016], [-0.03, 1.04, 0.012], [0.2, 0.9, 0.014], [0.2, 0.96, 0.01]]) k.sphS(s, x, y, 0.06 - (x > 0.15 ? 0 : 0.016), GOLD, 1.6, 1, 0.3, 6); k.boxS(0.3, 0.006, 0.004, 0.02, 0.8, 0.091, GOLD);
  k.box(0.3, 0.004, 0.24, -0.28, 0.783, 0.02, 0xf4a9b8, RY(0.15)); for (let i = 0; i < 5; i++) k.sph(0.008, -0.38 + i * 0.05, 0.787, 0.02 + (i % 2) * 0.06, 0xfbf7f0, 1, 0.3, 1, 5);
});

furn({ id: 'roca_fiar', name: 'Roca de fiar', cat: 'Especiais', price: 1500, lvl: 7, w: 1.2, d: 0.5, h: 1.2, cols: [WOOD.carvalho, 0xf3ead6], colN: ['Madeira', 'Lã'], info: 'A roda gira devagar, como nos contos de fada.' }, (k) => {
  const W = k.c1, T2 = tone(W, 0.85);
  k.box(0.7, 0.045, 0.2, 0.02, 0.42, 0, W, RZ(0.26)); for (const [x, z, a] of [[-0.3, 0.14, -0.2], [-0.3, -0.14, -0.2], [0.36, 0, 0.3]]) k.add(new THREE.CylinderGeometry(0.018, 0.024, x > 0 ? 0.54 : 0.36, 8), mul(T(x - a * 0.1, x > 0 ? 0.28 : 0.19, z), RZ(a), RX(z * 1.2)), T2);
  for (const s of [-1, 1]) k.lathe([[0.02, 0], [0.026, 0.1], [0.016, 0.3], [0.024, 0.4], [0.016, 0.5], [0.022, 0.52]], -0.22, 0.36, s * 0.07, T2, 8);
  const wh = part(k, (p) => { p.add(new THREE.TorusGeometry(0.34, 0.022, 6, 28), null, W); p.add(new THREE.TorusGeometry(0.31, 0.01, 4, 28), null, T2); for (let i = 0; i < 8; i++) p.add(LG([[0.008, 0.03], [0.014, 0.1], [0.008, 0.2], [0.012, 0.32]], 6), RZ((i / 8) * TAU), T2); p.add(new THREE.CylinderGeometry(0.04, 0.04, 0.1, 10), RX(HP), W); }, -0.22, 0.78, 0);
  k.tick((dt) => { wh.rotation.z -= dt * 1.1; });
  // flyer and bobbin on the mother-of-all, treadle, distaff with wool
  k.box(0.26, 0.04, 0.08, 0.3, 0.55, 0, W); for (const s of [-1, 1]) k.lathe([[0.012, 0], [0.018, 0.08], [0.01, 0.2], [0.016, 0.24]], 0.3 + s * 0.1, 0.56, 0, T2, 6); k.cyl(0.02, 0.02, 0.14, 0.3, 0.76, 0, k.c2, 8, RZ(HP)); k.add(new THREE.TorusGeometry(0.045, 0.006, 4, 12, PI), mul(T(0.3, 0.76, 0), RY(HP), RZ(-HP)), T2); rod(k, [0.3, 0.76, 0], [-0.22, 1.12, 0], 0.002, k.c2, 3); rod(k, [0.3, 0.74, 0], [-0.22, 0.44, 0], 0.002, k.c2, 3);
  k.box(0.3, 0.02, 0.14, 0.05, 0.07, 0.0, T2, RZ(0.12)); rod(k, [-0.08, 0.06, 0], [-0.2, 0.62, 0.04], 0.006, T2, 4); rod(k, [-0.3, 0.03, -0.14], [-0.3, 0.03, 0.14], 0.012, T2, 5);
  k.cyl(0.012, 0.016, 0.7, 0.44, 0.8, -0.1, T2, 6, RZ(-0.08)); k.sph(0.09, 0.47, 1.1, -0.1, k.c2, 0.9, 1.3, 0.9, 8); k.sph(0.06, 0.45, 1.0, -0.08, tone(k.c2, 0.92), 1, 1, 1, 7); k.add(new THREE.TorusGeometry(0.06, 0.006, 4, 10), mul(T(0.465, 1.06, -0.1), RX(HP)), 0xd98a7a);
  basket(k, 0.3, 0, 0.16, 0.12, (t) => 0.07 + 0.02 * t, 0xc9a468, 4, 10); for (const [dx, dz, c] of [[0, 0, k.c2], [0.04, 0.03, 0xd9a8a0], [-0.04, 0.02, 0xa8c0d0]]) k.sph(0.045, 0.3 + dx, 0.13, 0.16 + dz, c, 1, 1, 1, 7);
});

furn({ id: 'telescopio', name: 'Telescópio no tripé', cat: 'Especiais', price: 2900, lvl: 9, w: 0.9, d: 0.9, h: 1.58, cols: [METAL.latao, WOOD.nogueira], colN: ['Tubo', 'Tripé'], info: 'Para contar estrelas nas noites de céu limpo.' }, (k) => {
  const G = k.c1, W = k.c2;
  for (let i = 0; i < 3; i++) { const a = (i / 3) * TAU + PI / 2, c = Math.cos(a), s = Math.sin(a); rod(k, [c * 0.4, 0.03, s * 0.4], [c * 0.04, 1.02, s * 0.04], 0.022, W, 8); k.cylS(0.026, 0.012, 0.06, c * 0.4, 0.03, s * 0.4, G, 8); rod(k, [c * 0.22, 0.52, s * 0.22], [0, 0.46, 0], 0.006, G, 4, true); } k.cylS(0.06, 0.07, 0.06, 0, 1.03, 0, G, 12); k.cylS(0.03, 0.03, 0.12, 0, 0.47, 0, G, 8);
  k.cylS(0.02, 0.02, 0.14, 0, 1.12, 0, G, 8); for (const s of [-1, 1]) k.boxS(0.012, 0.14, 0.05, s * 0.07, 1.21, 0, G); k.cylS(0.012, 0.012, 0.18, 0, 1.24, 0, G, 6, RZ(HP)); for (const s of [-1, 1]) k.sph(0.02, s * 0.095, 1.24, 0, W, 1, 1, 1, 6);
  const TM = mul(T(0, 1.26, 0), RY(0.6), RX(-0.62)), A = (g, m, c) => k.addS(g, mul(TM, m), c);
  A(new THREE.CylinderGeometry(0.05, 0.062, 0.62, 16), mul(T(0, 0, 0.12), RX(HP)), G); A(new THREE.CylinderGeometry(0.04, 0.04, 0.3, 14), mul(T(0, 0, -0.3), RX(HP)), tone(G, 0.85)); A(new THREE.CylinderGeometry(0.028, 0.028, 0.12, 10), mul(T(0, 0, -0.5), RX(HP)), 0x2a2a30); A(new THREE.CylinderGeometry(0.068, 0.068, 0.04, 16), mul(T(0, 0, 0.44), RX(HP)), tone(G, 1.2)); for (const z of [-0.17, 0.0, 0.2]) A(new THREE.TorusGeometry(0.056 + (z > 0.1 ? 0.004 : z < -0.1 ? -0.004 : 0), 0.006, 4, 16), T(0, 0, z), tone(G, 1.2));
  A(new THREE.CylinderGeometry(0.016, 0.018, 0.24, 8), mul(T(0, 0.085, 0.0), RX(HP)), tone(G, 0.85)); for (const z of [-0.08, 0.08]) A(new THREE.BoxGeometry(0.01, 0.04, 0.012), T(0, 0.065, z), G);
  k.glass(new THREE.CircleGeometry(0.06, 14), mul(TM, T(0, 0, 0.462)), 0xbfe6f4, 0.5);
});

furn({ id: 'tear', name: 'Tear de pedal', cat: 'Especiais', price: 2400, lvl: 9, w: 1.3, d: 1.1, h: 1.5, cols: [WOOD.pinho, 0xd9705a], colN: ['Madeira', 'Tecido'], info: 'Fio a fio vai nascendo uma manta listrada.' }, (k) => {
  const W = k.c1, D = tone(W, 0.85);
  for (const sx of [-1, 1]) { const x = sx * 0.6; k.box(0.06, 1.46, 0.06, x, 0.73, -0.3, W); k.box(0.06, 0.8, 0.06, x, 0.4, 0.44, W); k.box(0.05, 0.06, 1.0, x, 0.76, 0, D); k.box(0.05, 0.06, 1.0, x, 0.12, 0, D); k.box(0.05, 0.05, 0.36, x, 1.43, -0.14, D); k.box(0.04, 0.5, 0.04, x, 1.18, 0.02, D); }
  k.box(1.26, 0.06, 0.06, 0, 1.46, -0.3, W); k.box(1.14, 0.05, 0.05, 0, 0.12, -0.3, D); k.cyl(0.05, 0.05, 1.2, 0, 0.82, -0.44, D, 10, RZ(HP)); k.cyl(0.055, 0.055, 1.14, 0, 0.74, 0.42, k.c2, 10, RZ(HP)); k.cyl(0.03, 0.03, 1.2, 0, 0.82, 0.48, D, 8, RZ(HP));
  // warp threads, heddle frames, reed and the woven cloth
  for (let i = 0; i < 36; i++) { const x = -0.5 + i * (1.0 / 35); rod(k, [x, 0.86, -0.42], [x, 0.85 + (i % 2 ? 0.05 : -0.03), -0.06], 0.0016, 0xf3ead6, 3); rod(k, [x, 0.85 + (i % 2 ? 0.05 : -0.03), -0.06], [x, 0.835, 0.2], 0.0016, 0xf3ead6, 3); }
  for (const [z, y] of [[-0.1, 0.92], [-0.02, 0.86]]) { for (const dy of [-0.16, 0.16]) k.box(1.1, 0.03, 0.016, 0, y + dy, z, D); for (const s of [-1, 1]) rod(k, [s * 0.4, y + 0.16, z], [s * 0.4, 1.42, -0.12], 0.003, 0xb8946a, 3); } k.cyl(0.02, 0.02, 1.16, 0, 1.43, -0.12, D, 6, RZ(HP));
  k.box(1.12, 0.04, 0.03, 0, 0.93, 0.16, W); k.box(1.12, 0.04, 0.03, 0, 0.77, 0.16, W); for (let i = 0; i < 28; i++) k.box(0.003, 0.14, 0.012, -0.5 + i * 0.037, 0.85, 0.16, 0xd8d4c8); for (const s of [-1, 1]) k.box(0.03, 0.56, 0.03, s * 0.57, 1.16, 0.12, D, RX(0.08));
  k.art(`tear:${k.c2}`, 1.0, 0.22, 0, 0.836, 0.31, (g, Wd, H) => { const pal = [css(k.c2), '#f3ead6', css(tone(k.c2, 0.7)), '#e8c468', '#f3ead6', '#5a8fa8']; for (let i = 0; i < 12; i++) { g.fillStyle = pal[i % 6]; g.fillRect(0, (i / 12) * H, Wd, H / 12 + 1); } clothTex(g, Wd, H, 3, 0.08); }, { rot: RX(-HP) }); k.box(1.0, 0.006, 0.22, 0, 0.832, 0.31, tone(k.c2, 0.8));
  k.rbox(0.2, 0.025, 0.05, 0.2, 0.85, 0.24, 0x8a5a3a, 0.01, RY(0.3)); k.cyl(0.012, 0.012, 0.1, 0.2, 0.862, 0.24, 0xf3ead6, 6, mul(RY(0.3), RZ(HP)));
  for (let i = 0; i < 4; i++) { k.box(0.07, 0.02, 0.6, -0.24 + i * 0.16, 0.06, 0.02, D, RX(-0.08)); rod(k, [-0.24 + i * 0.16, 0.1, -0.2], [-0.24 + i * 0.16, 0.7, -0.06], 0.002, 0xb8946a, 3); }
  k.box(0.9, 0.04, 0.24, 0, 0.5, 0.4, W);
});

furn({ id: 'bar_adega_canto', name: 'Bar com adega', cat: 'Especiais', price: 6000, lvl: 13, w: 1.2, d: 0.56, h: 1.96, cols: [WOOD.nogueira, 0x2f3a3a], colN: ['Madeira', 'Tampo de pedra'], info: 'Vinhos deitados, taças penduradas e um balcãozinho.' }, (k) => {
  const W = k.c1, bottle = (x, y, z, c, M0) => { const M = mul(T(x, y, z), M0 || T(0, 0, 0)); k.addS(LG([[0.001, 0], [0.036, 0], [0.038, 0.01], [0.038, 0.17], [0.014, 0.23], [0.013, 0.3], [0.016, 0.31], [0.001, 0.31]], 8), M, c); k.addS(new THREE.CylinderGeometry(0.0385, 0.0385, 0.07, 8), mul(M, T(0, 0.09, 0)), 0xf3ead6); };
  k.rbox(1.2, 0.9, 0.48, 0, 0.47, 0, W, 0.012); k.box(1.16, 0.04, 0.44, 0, 0.02, 0, tone(W, 0.6)); k.rbox(1.2, 0.04, 0.5, 0, 0.94, 0, k.c2, 0.008);
  // wine rack (X lattice) on the left, door on the right
  k.box(0.56, 0.74, 0.3, -0.28, 0.48, 0.09, 0x241a14); for (const s of [-1, 1]) { k.box(0.02, 0.9, 0.3, -0.28, 0.48, 0.09, tone(W, 1.12), RZ(s * 0.648)); for (const t of [-1, 1]) k.box(0.02, 0.45, 0.3, -0.28 + s * 0.14, 0.48 + t * 0.185, 0.09, tone(W, 1.05), RZ(-s * t * 0.648)); } k.box(0.6, 0.03, 0.02, -0.28, 0.865, 0.245, W); k.box(0.6, 0.03, 0.02, -0.28, 0.095, 0.245, W); for (const s of [-1, 1]) k.box(0.03, 0.8, 0.02, -0.28 + s * 0.29, 0.48, 0.245, W);
  for (const [x, y, c] of [[-0.47, 0.4, 0x2f4a34], [-0.28, 0.2, 0x4a1c24], [-0.09, 0.4, 0x2f4a34], [-0.28, 0.6, 0x5a3a1c], [-0.38, 0.72, 0x2f4a34], [-0.18, 0.74, 0x4a1c24], [-0.4, 0.26, 0x4a1c24]]) k.addS(new THREE.CylinderGeometry(0.036, 0.036, 0.02, 8), mul(T(x, y, 0.235), RX(HP)), c);
  k.box(0.5, 0.74, 0.012, 0.31, 0.48, 0.245, tone(W, 1.12)); k.box(0.38, 0.6, 0.008, 0.31, 0.48, 0.252, tone(W, 0.9)); k.cylS(0.01, 0.01, 0.14, 0.11, 0.5, 0.265, METAL.latao, 6);
  // upper hutch
  for (const s of [-1, 1]) k.box(0.04, 0.98, 0.3, s * 0.58, 1.45, -0.09, W); k.box(1.2, 0.98, 0.02, 0, 1.45, -0.235, tone(W, 0.8)); for (const y of [1.32, 1.62]) k.box(1.12, 0.025, 0.28, 0, y, -0.09, tone(W, 1.06)); k.rbox(1.2, 0.05, 0.36, 0, 1.935, -0.07, tone(W, 0.85), 0.01);
  [[-0.42, 0x2f4a34], [-0.3, 0x4a1c24], [-0.18, 0xd9b04a], [0.24, 0x5a3a1c], [0.38, 0x2f4a34]].forEach(([x, c]) => bottle(x, 1.333, -0.1, c)); [[-0.44, 0xc9d8dc], [-0.28, 0xb8643c], [0.42, 0x3f6a8a]].forEach(([x, c]) => bottle(x, 1.633, -0.1, c)); k.addS(LG([[0.001, 0], [0.05, 0], [0.06, 0.02], [0.06, 0.12], [0.05, 0.14], [0.001, 0.14]], 12), T(0.05, 1.333, -0.08), METAL.cromo); k.addS(LG([[0.03, 0.14], [0.02, 0.2], [0.001, 0.21]], 10), T(0.05, 1.333, -0.08), METAL.cromo);
  // hanging glasses
  const gl = []; for (let i = 0; i < 5; i++) { const x = -0.1 + i * 0.13; gl.push([LG([[0.03, 0], [0.004, 0.012], [0.004, 0.09], [0.03, 0.11], [0.036, 0.17], [0.032, 0.2]], 10), mul(T(x, 1.9, -0.06), RX(PI))]); k.boxS(0.008, 0.012, 0.22, x - 0.022, 1.9, -0.06, METAL.latao); k.boxS(0.008, 0.012, 0.22, x + 0.022, 1.9, -0.06, METAL.latao); } k.glass(mergeGeo(gl), null, 0xe6f6f8, 0.4);
  // on the counter: ice bucket, shaker, two glasses, lemon
  k.addS(LG([[0.001, 0], [0.06, 0], [0.08, 0.14], [0.085, 0.15], [0.07, 0.15], [0.055, 0.02], [0.001, 0.02]], 14), T(0.36, 0.96, 0.04), METAL.cromo); bottle(0.37, 0.98, 0.04, 0x2f4a34, RZ(0.2)); const g2 = [[LG([[0.001, 0], [0.03, 0], [0.034, 0.1], [0.03, 0.1], [0.028, 0.01], [0.001, 0.01]], 10), T(-0.1, 0.96, 0.1)], [LG([[0.001, 0], [0.03, 0], [0.034, 0.1], [0.03, 0.1], [0.028, 0.01], [0.001, 0.01]], 10), T(0.02, 0.96, 0.14)]]; k.glass(mergeGeo(g2), null, 0xe6f6f8, 0.4);
  k.sph(0.028, -0.3, 0.985, 0.12, 0xf2d84a, 1.2, 1, 1, 8); k.sph(0.028, -0.24, 0.985, 0.08, 0xf2d84a, 1.2, 1, 1, 8); k.box(0.2, 0.012, 0.14, -0.27, 0.966, 0.1, 0xc9a468);
});

furn({ id: 'jukebox', name: 'Jukebox', cat: 'Especiais', price: 7800, lvl: 14, w: 0.86, d: 0.66, h: 1.52, cols: [WOOD.mogno, 0xe8c468], colN: ['Madeira', 'Grade dourada'], info: 'Põe uma ficha e a sala vira baile, com luzes que mudam de cor.' }, (k) => {
  const W = k.c1, G = k.c2, R = 0.4;
  k.box(0.86, 0.08, 0.6, 0, 0.04, 0, tone(W, 0.7)); k.box(0.8, 1.02, 0.54, 0, 0.59, -0.01, W); k.cyl(R, R, 0.54, 0, 1.1, -0.01, W, 28, RX(HP));
  // glowing arch tubes (colour slowly cycles)
  const tubes = []; [[0.37, 0xff4a6a], [0.31, 0xffd84a], [0.25, 0x4ad0ff]].forEach(([r, c], i) => { const sh = new THREE.Shape(); sh.absarc(0, 0, r + 0.024, 0, PI, false); sh.absarc(0, 0, r - 0.024, PI, 0, true); const g = new THREE.ExtrudeGeometry(sh, { depth: 0.03, bevelEnabled: false, curveSegments: 16 }); g.translate(0, 1.1, 0.262); const legs = [g]; for (const s of [-1, 1]) { const b = new THREE.BoxGeometry(0.048, 0.5 - i * 0.0, 0.03); b.translate(s * r, 0.85, 0.277); legs.push(b); } tubes.push(k.glow(mergeGeo(legs.map((x) => [x])), c, 1.5, { day: 1 })); });
  k.tick((dt, t) => tubes.forEach((m, i) => { m.material.emissive.setHSL((t * 0.06 + i * 0.33) % 1, 0.9, 0.5); m.material.color.setHSL((t * 0.06 + i * 0.33) % 1, 0.7, 0.6); }));
  for (const s of [-1, 1]) { k.boxS(0.012, 0.52, 0.035, s * 0.4, 0.85, 0.277, METAL.cromo); k.boxS(0.012, 0.5, 0.035, s * 0.34, 0.85, 0.277, METAL.cromo); k.boxS(0.012, 0.5, 0.035, s * 0.28, 0.85, 0.277, METAL.cromo); }
  // record window, selector buttons, speaker grille
  k.art('juke_disco', 0.4, 0.3, 0, 1.12, 0.268, (g, Wd, H) => { g.fillStyle = '#2a1a20'; g.fillRect(0, 0, Wd, H); g.fillStyle = rgrad(g, Wd / 2, H * 0.6, 4, Wd * 0.5, [[0, '#6a3a4a'], [1, '#1a1014']]); g.fillRect(0, 0, Wd, H); ell(g, Wd / 2, H * 0.62, Wd * 0.36, H * 0.26, '#111114'); ell(g, Wd / 2, H * 0.62, Wd * 0.3, H * 0.215, '#22222a'); ell(g, Wd / 2, H * 0.62, Wd * 0.12, H * 0.09, '#e8504a'); ell(g, Wd / 2, H * 0.62, Wd * 0.02, H * 0.016, '#fbf7f0'); line(g, [[Wd * 0.86, H * 0.2], [Wd * 0.64, H * 0.5]], '#c9ced2', 4); for (let i = 0; i < 9; i++) { g.fillStyle = '#111114'; g.fillRect(Wd * (0.08 + i * 0.012), H * 0.1, 3, H * 0.5); } }, { glow: 0.5, day: 1 });
  for (const s of [-1, 1]) k.boxS(0.02, 0.32, 0.02, s * 0.21, 1.12, 0.268, METAL.cromo); k.boxS(0.44, 0.02, 0.02, 0, 0.965, 0.268, METAL.cromo);
  k.boxS(0.5, 0.09, 0.05, 0, 0.9, 0.285, METAL.cromo, RX(-0.4)); for (let i = 0; i < 10; i++) k.glow(new THREE.BoxGeometry(0.03, 0.012, 0.02), i % 2 ? 0xfff0c8 : 0xffb0a0, 1.6, { M: mul(T(-0.2 + i * 0.045, 0.915, 0.305), RX(-0.4)), day: 1 });
  k.box(0.46, 0.46, 0.012, 0, 0.6, 0.262, 0x7a2a2a); for (let i = -3; i <= 3; i++) for (const s of [-1, 1]) k.boxS(0.012, 0.6, 0.012, i * 0.075, 0.6, 0.272, G, RZ(s * 0.6)); const fr = new THREE.Shape(); fr.moveTo(-0.26, 0.34); fr.lineTo(0.26, 0.34); fr.lineTo(0.26, 0.86); fr.lineTo(-0.26, 0.86); const hh = new THREE.Path(); hh.moveTo(-0.22, 0.38); hh.lineTo(-0.22, 0.82); hh.lineTo(0.22, 0.82); hh.lineTo(0.22, 0.38); fr.holes.push(hh); k.addS(new THREE.ExtrudeGeometry(fr, { depth: 0.03, bevelEnabled: false }), T(0, 0, 0.262), W);
  k.boxS(0.03, 0.06, 0.012, 0.33, 0.93, 0.262, METAL.cromo); k.box(0.012, 0.03, 0.014, 0.33, 0.935, 0.264, INK); k.sphS(0.05, 0, 0.6, 0.28, G, 1, 1, 0.4, 10);
  for (const s of [-1, 1]) { const b = k.glow(new THREE.CylinderGeometry(0.02, 0.02, 0.44, 8), 0xffe08a, 1.4, { at: [s * 0.345, 0.6, 0.275], day: 1, opacity: 0.85 }); }
});

furn({ id: 'cavalinho_carrossel', name: 'Cavalinho de carrossel', cat: 'Especiais', price: 12500, lvl: 16, w: 1.3, d: 0.7, h: 2.3, cols: [0xfbf7f0, 0xc2483c], colN: ['Cavalo', 'Sela e enfeites'], info: 'Sobe e desce no seu mastro dourado, como no parque da praça.' }, (k) => {
  const C = k.c1, A = k.c2, G = GOLD;
  k.lathe([[0.001, 0], [0.33, 0], [0.34, 0.03], [0.3, 0.07], [0.3, 0.1], [0.001, 0.1]], 0, 0, 0, A, 24); k.addS(new THREE.TorusGeometry(0.32, 0.014, 4, 24), mul(T(0, 0.04, 0), RX(HP)), G); for (let i = 0; i < 12; i++) k.sphS(0.022, Math.cos(i * 0.5236) * 0.3, 0.085, Math.sin(i * 0.5236) * 0.3, i % 2 ? G : 0xfbf7f0, 1, 1, 1, 6);
  // twisted pole
  k.cylS(0.022, 0.022, 2.18, 0, 1.19, 0, G, 8); for (let i = 0; i < 26; i++) k.sphS(0.012, Math.cos(i * 0.9) * 0.022, 0.14 + i * 0.082, Math.sin(i * 0.9) * 0.022, tone(G, 1.2), 1, 1.6, 1, 4); k.sphS(0.05, 0, 2.25, 0, G, 1, 1, 1, 10); k.latheS([[0.05, 0.1], [0.06, 0.13], [0.03, 0.18]], 0, 0, 0, G, 10);
  const h = part(k, (p) => {
    p.add(new THREE.SphereGeometry(0.19, 14, 10), mul(T(-0.02, 0, 0), S(1.8, 1, 0.85)), C); p.add(new THREE.CylinderGeometry(0.09, 0.14, 0.36, 10), mul(T(0.33, 0.2, 0), RZ(-0.55)), C); p.add(new THREE.SphereGeometry(0.11, 12, 8), mul(T(0.46, 0.36, 0), RZ(-0.75), S(1.6, 0.95, 0.85)), C); p.add(new THREE.SphereGeometry(0.065, 10, 6), mul(T(0.57, 0.27, 0), S(1.1, 0.95, 0.95)), tone(C, 0.9));
    for (const s of [-1, 1]) { p.add(new THREE.ConeGeometry(0.028, 0.08, 5), mul(T(0.4, 0.49, s * 0.05), RZ(0.3)), C); p.sph(0.014, 0.5, 0.39, s * 0.076, INK, 1, 1, 0.6, 6); p.sph(0.009, 0.62, 0.27, s * 0.03, 0x5a4034, 1, 1, 1, 5);
      // legs: front pair raised (galloping), back pair stretched
      tb(p, [[0.24, -0.1, s * 0.1], [0.4, -0.2, s * 0.1], [0.34, -0.4, s * 0.1]], 0.04, C, { n: 8, seg: 6 }); p.add(new THREE.CylinderGeometry(0.045, 0.05, 0.05, 8), mul(T(0.33, -0.43, s * 0.1), RZ(0.3)), G);
      tb(p, [[-0.26, -0.08, s * 0.1], [-0.4, -0.26, s * 0.1], [-0.56, -0.38, s * 0.1]], 0.04, C, { n: 8, seg: 6 }); p.add(new THREE.CylinderGeometry(0.045, 0.05, 0.05, 8), mul(T(-0.59, -0.4, s * 0.1), RZ(-0.9)), G);
      p.add(new THREE.SphereGeometry(0.1, 8, 6), mul(T(-0.02, 0.02, s * 0.165), S(1.5, 1.2, 0.12)), A); p.add(new THREE.SphereGeometry(0.03, 6, 4), mul(T(-0.02, -0.02, s * 0.178), S(1, 1, 0.3)), G); tb(p, [[0.58, 0.28, s * 0.06], [0.44, 0.2, s * 0.12], [0.16, 0.18, s * 0.1]], 0.007, A, { n: 6, seg: 4 }); }
    for (let i = 0; i < 7; i++) p.sph(0.045, 0.36 - i * 0.04, 0.46 - i * 0.065, 0, G, 1, 1, 0.55, 7); p.sph(0.04, 0.47, 0.47, 0, G, 1.3, 0.8, 0.8, 7); tb(p, [[-0.34, 0.06, 0], [-0.46, 0.1, 0], [-0.54, -0.04, 0], [-0.5, -0.2, 0]], 0.035, G, { n: 8, seg: 6 });
    p.add(new THREE.SphereGeometry(0.14, 10, 6), mul(T(-0.04, 0.17, 0), S(1.2, 0.35, 1.1)), A); p.add(new THREE.SphereGeometry(0.05, 8, 5), mul(T(-0.2, 0.2, 0), S(0.6, 1, 1.6)), A); p.add(new THREE.TorusGeometry(0.175, 0.014, 4, 16), mul(T(0.14, 0, 0), S(1, 1.05, 0.9), RY(HP)), G); p.add(new THREE.TorusGeometry(0.12, 0.012, 4, 14), mul(T(0.28, 0.16, 0), RZ(-0.55), RX(HP)), A);
    for (let i = 0; i < 5; i++) for (const s of [-1, 1]) p.addS(new THREE.OctahedronGeometry(0.018, 0), mul(T(-0.1 + i * 0.045, 0.1, s * 0.172), S(1, 1, 0.3)), i % 2 ? 0x4a90d9 : G);
  }, 0, 1.0, 0);
  k.tick((dt, t) => { h.position.y = 1.0 + 0.1 * Math.sin(t * 1.3); h.rotation.z = 0.05 * Math.sin(t * 1.3 + 1.2); });
});

furn({ id: 'arvore_natal', name: 'Árvore de Natal enfeitada', cat: 'Especiais', price: 2000, lvl: 6, w: 1.2, d: 1.2, h: 2.1, cols: [0x2f6a44, 0xd8483c], colN: ['Árvore', 'Bolas e laços'], info: 'Luzinhas piscando, estrela no topo e presentes embaixo.' }, (k) => {
  const C = k.c1, A = k.c2, r = rnd(25);
  k.addS(LG([[0.001, 0], [0.16, 0], [0.2, 0.2], [0.21, 0.22], [0.18, 0.22], [0.001, 0.2]], 14), null, A); k.addS(new THREE.TorusGeometry(0.2, 0.012, 4, 14), mul(T(0, 0.19, 0), RX(HP)), GOLD); k.cyl(0.05, 0.06, 0.26, 0, 0.33, 0, 0x6a4a2c, 8);
  const tiers = [[0.56, 0.42, 0.62], [0.47, 0.76, 0.56], [0.38, 1.08, 0.5], [0.28, 1.36, 0.44], [0.18, 1.62, 0.36]]; tiers.forEach(([rr, y, hh], i) => { k.cone(rr, hh, 0, y + hh / 2, 0, i % 2 ? tone(C, 1.12) : C, 12); k.add(new THREE.CylinderGeometry(rr * 0.98, rr * 0.8, 0.02, 12), T(0, y + 0.01, 0), tone(C, 0.75)); });
  // star, baubles, garland and twinkling lights
  const st = new THREE.Shape(); for (let i = 0; i < 10; i++) { const a = (i / 10) * TAU + HP, rr = i % 2 ? 0.045 : 0.11; i ? st.lineTo(Math.cos(a) * rr, Math.sin(a) * rr) : st.moveTo(Math.cos(a) * rr, Math.sin(a) * rr); } const sg = new THREE.ExtrudeGeometry(st, { depth: 0.03, bevelEnabled: false }); sg.translate(0, 2.0, -0.015); k.glow(sg, 0xffe27a, 2.4, { day: 1, emissive: 0xffc83a });
  const L = [[], [], [], []], lc = [0xffe08a, 0xff6a6a, 0x6ad0ff, 0x8aff9a]; tiers.forEach(([rr, y, hh], ti) => { const n = 9 - ti; for (let i = 0; i < n; i++) { const a = (i / n) * TAU + ti * 0.7, t = 0.12 + ((i * 5) % 3) * 0.14, rad = rr * (1 - t) + 0.012, x = Math.cos(a) * rad, z = Math.sin(a) * rad, yy = y + hh * t;
    if (i % 2) k.sphS(0.038, x, yy - 0.02, z, [A, GOLD, tone(A, 1.3), 0xf3ead8][(i + ti) % 4], 1, 1, 1, 7); else L[(i + ti) % 4].push([new THREE.OctahedronGeometry(0.024, 0), T(x, yy, z)]); const a2 = a + 0.35, rad2 = rr * (1 - t * 0.6) + 0.012; L[(i + ti + 2) % 4].push([new THREE.OctahedronGeometry(0.02, 0), T(Math.cos(a2) * rad2, y + hh * t * 0.6, Math.sin(a2) * rad2)]); } });
  const lm = L.map((list, i) => k.glow(mergeGeo(list), lc[i], 2.6, { day: 1 })); k.tick((dt, t) => lm.forEach((m, i) => { const s = 0.75 + 0.25 * Math.sin(t * 3 + i * 1.6); m.material.color.setHex(lc[i]).multiplyScalar(s); m.material.emissive.setHex(lc[i]).multiplyScalar(0.35 + 0.65 * (0.5 + 0.5 * Math.sin(t * 3 + i * 1.6))); }));
  const gp = []; for (let i = 0; i <= 60; i++) { const t = i / 60, a = t * TAU * 4.5, y = 0.5 + t * 1.36, rr = 0.56 * (1 - t * 0.74) * 0.86 + 0.02; gp.push([Math.cos(a) * rr, y - 0.03 * Math.sin(t * 60), Math.sin(a) * rr]); } tb(k, gp, 0.012, GOLD, { n: 90, seg: 4, shiny: true });
  for (let i = 0; i < 4; i++) k.rbox(0.07, 0.05, 0.02, Math.cos(i * 1.7 + 0.4) * (0.4 - i * 0.07), 0.62 + i * 0.3, Math.sin(i * 1.7 + 0.4) * (0.4 - i * 0.07), A, 0.008, RY(-(i * 1.7 + 0.4) + HP));
  // presents
  [[0.38, 0.2, 0.22, 0.18, 0x4a90d9, GOLD, 0.3], [-0.36, 0.26, 0.26, 0.24, 0xf3ead8, A, -0.4], [0.1, 0.44, 0.2, 0.14, 0x5ab06a, 0xfbf7f0, 0.8], [-0.3, -0.3, 0.2, 0.2, A, GOLD, 0.2], [0.34, -0.26, 0.24, 0.16, 0xc060c8, 0xf3ead8, -0.6]].forEach(([x, z, s, hh, c, rb, a]) => { const M = mul(T(x, hh / 2 + 0.004, z), RY(a)); k.add(new THREE.BoxGeometry(s, hh, s), M, c); k.add(new THREE.BoxGeometry(s + 0.004, hh + 0.004, 0.03), M, rb); k.add(new THREE.BoxGeometry(0.03, hh + 0.004, s + 0.004), M, rb); for (const sg2 of [-1, 1]) k.add(new THREE.TorusGeometry(0.025, 0.008, 4, 8), mul(M, T(sg2 * 0.025, hh / 2 + 0.02, 0), RY(HP * 0), RZ(sg2 * 0.5)), rb); });
});

furn({ id: 'estatua_marmore', name: 'Estátua de mármore', cat: 'Especiais', price: 18000, lvl: 18, w: 0.7, d: 0.7, h: 2.0, cols: [0xf3f0ea, 0xd9d2c4], colN: ['Mármore', 'Pedestal'], info: 'A jardineira e seu cântaro, esculpidos em mármore branco.' }, (k) => {
  const C = k.c1, P = k.c2, y0 = 0.62;
  k.box(0.7, 0.08, 0.7, 0, 0.04, 0, tone(P, 0.9)); k.box(0.6, 0.05, 0.6, 0, 0.105, 0, P); k.box(0.5, 0.4, 0.5, 0, 0.33, 0, P); marble(k, 'est_p', 0.5, 0.4, 0, 0.33, 0.251, P); k.box(0.6, 0.05, 0.6, 0, 0.555, 0, P); k.box(0.64, 0.04, 0.64, 0, 0.6, 0, tone(P, 0.94)); k.boxS(0.22, 0.1, 0.006, 0, 0.33, 0.254, METAL.latao);
  for (let i = 0; i < 4; i++) k.add(new THREE.TorusGeometry(0.09, 0.012, 4, 12, PI), mul(RY(i * HP + HP), T(0, 0.4, 0.256), RZ(PI)), tone(P, 0.85));
  // gown with folds
  k.latheS([[0.001, 0], [0.24, 0], [0.25, 0.03], [0.2, 0.2], [0.16, 0.48], [0.14, 0.66], [0.15, 0.74], [0.13, 0.8], [0.001, 0.8]], 0, y0, 0, C, 20); for (let i = 0; i < 14; i++) { const a = (i / 14) * TAU; tb(k, [[Math.cos(a) * 0.245, y0 + 0.02, Math.sin(a) * 0.245], [Math.cos(a + 0.12) * 0.19, y0 + 0.3, Math.sin(a + 0.12) * 0.19], [Math.cos(a + 0.2) * 0.145, y0 + 0.68, Math.sin(a + 0.2) * 0.145]], 0.018, tone(C, 0.93), { shiny: true, n: 8, seg: 4 }); }
  k.addS(new THREE.TorusGeometry(0.143, 0.016, 5, 18), mul(T(0, y0 + 0.74, 0), RX(HP)), tone(C, 0.9));
  // torso, shoulders, neck, head with bun
  k.addS(new THREE.SphereGeometry(0.15, 14, 10), mul(T(0, y0 + 0.92, 0), S(1, 1.25, 0.72)), C); k.addS(new THREE.SphereGeometry(0.11, 12, 8), mul(T(0, y0 + 1.06, 0), S(1.5, 0.6, 0.75)), C); k.addS(new THREE.CylinderGeometry(0.04, 0.05, 0.1, 10), T(0, y0 + 1.14, 0), C);
  k.addS(new THREE.SphereGeometry(0.095, 14, 10), mul(T(0, y0 + 1.25, 0.01), S(0.95, 1.1, 1)), C); k.addS(new THREE.SphereGeometry(0.1, 12, 8, 0, TAU, 0, PI * 0.6), mul(T(0, y0 + 1.262, -0.012), S(1, 1.05, 1.05), RX(-0.35)), tone(C, 0.92)); k.sphS(0.055, 0, y0 + 1.33, -0.085, tone(C, 0.92), 1, 1, 1, 8); k.sphS(0.014, 0, y0 + 1.235, 0.104, C, 1, 1.3, 1, 6);
  for (let i = 0; i < 9; i++) { const a = PI * 0.15 + (i / 8) * PI * 0.7; k.sphS(0.018, Math.cos(a) * 0.097, y0 + 1.3 + Math.sin(a) * 0.03, 0.03 + Math.sin(a) * 0.03, tone(C, 0.88), 1, 1, 1, 5); }
  // arms: one holds a water jar on the hip, the other a bunch of flowers
  tb(k, [[-0.16, y0 + 1.06, 0], [-0.24, y0 + 0.9, 0.04], [-0.2, y0 + 0.76, 0.14]], 0.036, C, { shiny: true, n: 8, seg: 6 }); k.addS(LG([[0.001, 0], [0.05, 0], [0.085, 0.08], [0.08, 0.16], [0.04, 0.22], [0.045, 0.26], [0.06, 0.27], [0.001, 0.27]], 12), mul(T(-0.2, y0 + 0.6, 0.17), RZ(0.25), RX(0.2)), tone(C, 0.96)); k.addS(new THREE.TorusGeometry(0.04, 0.01, 4, 10, PI), mul(T(-0.27, y0 + 0.77, 0.2), RZ(HP + 0.25)), tone(C, 0.96));
  tb(k, [[0.16, y0 + 1.06, 0], [0.24, y0 + 0.94, 0.06], [0.16, y0 + 0.98, 0.18]], 0.034, C, { shiny: true, n: 8, seg: 6 }); k.sphS(0.035, 0.15, y0 + 0.99, 0.19, C, 1, 1, 1, 7);
  for (const [dx, dy, dz] of [[0, 0.1, 0], [0.05, 0.07, 0.02], [-0.05, 0.08, 0.01], [0.02, 0.05, 0.05], [-0.02, 0.13, -0.02]]) { rod(k, [0.15, y0 + 0.99, 0.19], [0.15 + dx, y0 + 0.99 + dy, 0.2 + dz], 0.005, tone(C, 0.9), 4, true); for (let j = 0; j < 5; j++) k.addS(new THREE.SphereGeometry(0.016, 5, 4), mul(T(0.15 + dx, y0 + 1.0 + dy, 0.2 + dz), RY(j * 1.257), T(0.018, 0, 0), S(1, 0.5, 0.7)), C); k.sphS(0.01, 0.15 + dx, y0 + 1.004 + dy, 0.2 + dz, tone(C, 0.88), 1, 1, 1, 5); }
});

furn({ id: 'catavento', name: 'Catavento de mesa', cat: 'Especiais', kind: 'top', price: 60, lvl: 1, w: 0.3, d: 0.18, h: 0.46, cols: [0xe8504a, 0xf2c84a], colN: ['Pás', 'Pás alternadas'], info: 'Gira sem parar, como se sempre ventasse na sala.' }, (k) => {
  k.cyl(0.05, 0.06, 0.04, 0, 0.02, 0, WOOD.mel, 14); k.cyl(0.042, 0.042, 0.006, 0, 0.042, 0, tone(WOOD.mel, 1.25), 14); k.cyl(0.006, 0.006, 0.3, 0, 0.19, 0, 0xf3ead8, 6); k.cylS(0.004, 0.004, 0.05, 0, 0.32, 0.02, METAL.cromo, 5, RX(HP));
  const w = part(k, (p) => { for (let i = 0; i < 4; i++) { const R = RZ(i * HP), c = i % 2 ? k.c2 : k.c1; const g0 = new THREE.BufferGeometry().setFromPoints([[0, 0, 0], [0.12, 0, 0], [0.12, 0.12, 0]].map((v) => new THREE.Vector3(...v))); g0.computeVertexNormals(); p.add2(g0, R, tone(c, 0.85));
    const g = new THREE.BufferGeometry().setFromPoints([[0, 0, 0.004], [0.12, 0.12, 0.004], [0.02, 0.07, 0.03]].map((v) => new THREE.Vector3(...v))); g.computeVertexNormals(); p.add2(g, R, c); } p.sphS(0.012, 0, 0, 0.03, GOLD, 1, 1, 1, 8); }, 0, 0.32, 0.04);
  k.tick((dt) => { w.rotation.z -= dt * 3; });
});

furn({ id: 'sino_dos_ventos', name: 'Sino dos ventos', cat: 'Especiais', kind: 'ceil', price: 120, lvl: 2, w: 0.26, d: 0.26, h: 0.78, cols: [METAL.latao, WOOD.mel], colN: ['Tubos', 'Madeira'], info: 'Balança de leve e deixa a casa mais calma.' }, (k) => {
  const Y = ROOM_H; rose(k, 0.03, k.c1); k.cyl(0.002, 0.002, 0.2, 0, Y - 0.13, 0, 0xf3ead8, 4);
  const g = part(k, (p) => { p.cyl(0.085, 0.085, 0.014, 0, -0.007, 0, k.c2, 16); p.add(new THREE.TorusGeometry(0.085, 0.006, 4, 16), mul(T(0, -0.007, 0), RX(HP)), tone(k.c2, 0.8));
    for (let i = 0; i < 5; i++) { const a = (i / 5) * TAU, L = 0.24 + i * 0.035, x = Math.cos(a) * 0.065, z = Math.sin(a) * 0.065; p.cyl(0.0012, 0.0012, 0.06, x, -0.04, z, 0xf3ead8, 3); p.cylS(0.009, 0.009, L, x, -0.07 - L / 2, z, k.c1, 8); }
    p.cyl(0.0012, 0.0012, 0.5, 0, -0.25, 0, 0xf3ead8, 3); p.cyl(0.03, 0.03, 0.01, 0, -0.2, 0, k.c2, 12); plate(p, [[0, 0.06], [0.035, 0], [0, -0.06], [-0.035, 0]], 0.004, 0, -0.5, 0, k.c2); }, 0, Y - 0.23, 0);
  k.tick((dt, t) => { g.rotation.z = 0.05 * Math.sin(t * 1.1); g.rotation.x = 0.04 * Math.sin(t * 0.8 + 1); g.rotation.y = 0.3 * Math.sin(t * 0.35); });
});

} // end of the namespaced block
