// Furniture, part 1: beds, sofas and armchairs, tables, chairs, wardrobes and shelves, kitchen, bathroom.
// Every piece is modelled with the Kit from furncore.js (see the conventions there): metres, front towards +z, built from k.c1 / k.c2.
import { furn, tone, mixHex, WOOD, METAL, ROOM_H, T, RX, RY, RZ, S, mul, TAU, THREE } from './furncore.js';

const PI = Math.PI, HP = Math.PI / 2;
const LINEN = 0xf7f2e8, CREAM = 0xeee3cf, CERAM = 0xf8f6f1, STEEL = 0xc3c8cc, DARK = 0x2e2c30, WATER = 0xa9d8e6, STRAW = 0xd9c48f, MARBLE = 0xf1eee8;
const BOOKC = [0xb5533c, 0x3f6d8e, 0xd9a441, 0x5d8a5a, 0x8a5a7a, 0xe8dcc0, 0x2f4858, 0xc97b63, 0x7a9e9f, 0x9c3f4f, 0x4f6f52, 0xe3b7a0];
const rng = (s) => () => { s = (s + 0x6d2b79f5) | 0; let t = Math.imul(s ^ (s >>> 15), 1 | s); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
const lathG = (pts, seg = 18, p0, p1) => new THREE.LatheGeometry(pts.map(([r, y]) => new THREE.Vector2(r, y)), seg, p0 ?? 0, p1 ?? TAU);
const M4 = (x, y, z, rot) => (rot ? mul(T(x, y, z), rot) : T(x, y, z));

// ---------- shared little parts ----------
// cheap soft box (108 triangles, smooth-shaded chamfer): mattresses, duvets, seat cushions, modern carcasses
function sgeo(w, h, d, r) {
  r = Math.max(0.002, Math.min(r, w / 2 - 0.001, h / 2 - 0.001, d / 2 - 0.001));
  const g = new THREE.BoxGeometry(1, 1, 1, 3, 3, 3), p = g.attributes.position, n = g.attributes.normal, v = new THREE.Vector3(), q = new THREE.Vector3(), bx = w / 2 - r, by = h / 2 - r, bz = d / 2 - r;
  for (let i = 0; i < p.count; i++) { v.fromBufferAttribute(p, i); q.set(v.x - Math.sign(v.x) / 6, v.y - Math.sign(v.y) / 6, v.z - Math.sign(v.z) / 6).normalize(); p.setXYZ(i, bx * Math.sign(v.x) + q.x * r, by * Math.sign(v.y) + q.y * r, bz * Math.sign(v.z) + q.z * r); n.setXYZ(i, q.x, q.y, q.z); }
  return g;
}
const sbox = (k, w, h, d, x, y, z, c, r = 0.04, rot) => k.add(sgeo(w, h, d, r), M4(x, y, z, rot), c);
const sboxS = (k, w, h, d, x, y, z, c, r = 0.04, rot) => k.addS(sgeo(w, h, d, r), M4(x, y, z, rot), c);
// puffy cushion (120 triangles): a sphere squared off in plan. Lies flat (w x d, h thick) unless rot stands it up
function puffG(w, h, d, e = 0.5, ws = 12, hs = 6) { const g = new THREE.SphereGeometry(1, ws, hs), p = g.attributes.position, f = (v) => Math.sign(v) * Math.abs(v) ** e;
  for (let i = 0; i < p.count; i++) { const x = p.getX(i), y = p.getY(i), z = p.getZ(i), r = Math.hypot(x, z) || 1, rr = Math.hypot(x, z) ** 0.55; p.setXYZ(i, f(x / r) * rr * w / 2, Math.sign(y) * Math.abs(y) ** 0.8 * h / 2, f(z / r) * rr * d / 2); }
  g.computeVertexNormals(); return g; }
const puff = (k, x, y, z, w, d, h, c, rot, e) => k.add(puffG(w, h, d, e), M4(x, y, z, rot), c);
const pillow = (k, x, y, z, w, d, c, rot, h = 0.16) => puff(k, x, y, z, w, d, h, c, rot);
// a standing cushion leaning back by `lean`, turned by `yaw`
const cushion = (k, x, y, z, s, c, yaw = 0, lean = 0.5, h = 0.13) => puff(k, x, y, z, s, s, h, c, mul(RY(yaw), RX(HP - lean)));
// cheap torus (ring in the xy plane before M)
const ring = (k, R, r, M, c, shiny, arc = TAU, tub = 14, rad = 4) => (shiny ? k.addS(new THREE.TorusGeometry(R, r, rad, tub, arc), M, c) : k.add(new THREE.TorusGeometry(R, r, rad, tub, arc), M, c));
const gem = (k, r, x, y, z, c) => k.addS(new THREE.OctahedronGeometry(r, 0), T(x, y, z), c);
// round slab with a soft edge (round mattresses, pufes, table tops); y = bottom
const disc = (k, r, h, x, y, z, c, rd = 0.03, seg = 24, shiny) => { rd = Math.min(rd, h / 2); const g = lathG([[0.001, 0], [r - rd, 0], [r, rd], [r, h - rd], [r - rd, h], [0.001, h]], seg); return shiny ? k.addS(g, T(x, y, z), c) : k.add(g, T(x, y, z), c); };
// half ellipse standing on y, facing +z: arched crests of headboards, mirrors, chair backs
const crest = (k, x, y, z, r, sy, t, c, seg = 16) => k.add(new THREE.CylinderGeometry(r, r, t, seg, 1, false, HP, PI), mul(T(x, y, z), S(1, sy, 1), RX(HP)), c);
// any cloth: fn(u, v) -> [x, y, z]
function cloth(k, fn, nu, nv, c) {
  const pos = [], idx = [];
  for (let j = 0; j <= nv; j++) for (let i = 0; i <= nu; i++) pos.push(...fn(i / nu, j / nv));
  for (let j = 0; j < nv; j++) for (let i = 0; i < nu; i++) { const a = j * (nu + 1) + i, b = a + 1, d = a + nu + 1, e = d + 1; idx.push(a, d, b, b, d, e); }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setIndex(idx); g.computeVertexNormals(); k.add2(g, null, c);
}
// pleated cloth hanging from y. Plain: centred on x (or on z with o.side). o.tie = { v, g, e }: starts at the anchor x and spreads towards o.dir, gathered to g of its width at height fraction v
function curtain(k, x, y, z, w, h, c, o = {}) {
  const n = o.n ?? Math.max(3, Math.round(w / 0.07)), amp = o.amp ?? 0.02, tie = o.tie, dir = o.dir ?? 1;
  cloth(k, (u, v) => { let g = 1; if (tie) { const t = v < tie.v ? v / tie.v : (v - tie.v) / (1 - tie.v); g = v < tie.v ? 1 - (1 - tie.g) * t * t * (3 - 2 * t) : tie.g + (tie.e ?? 0.25) * t; }
    const s = tie ? dir * u * w * g : (u - 0.5) * w, r = Math.sin(u * n * PI) * amp * (0.35 + 0.65 * g), yy = y - v * h;
    return o.side ? [x + r, yy, z + s] : [x + s, yy, z + r]; }, n * 2, tie ? 8 : (o.nv ?? 1), c);
}
// tufting buttons on a panel facing +z (M moves / tilts the whole panel)
function tuft(k, cx, cy, z, w, h, nx, ny, c, M, r = 0.013) {
  for (let j = 0; j < ny; j++) { const m = nx - (j % 2); for (let i = 0; i < m; i++) { const x = cx + (i - (m - 1) / 2) * (w / Math.max(1, nx - 1)), y = cy + (ny > 1 ? j / (ny - 1) - 0.5 : 0) * h;
    k.add(new THREE.CircleGeometry(r, 6), M ? mul(M, T(x, y, z)) : T(x, y, z), c); } }
}
function handle(k, x, y, z, hc, style = 'knob', len = 0.12) {
  if (style === 'bar') { k.boxS(len, 0.012, 0.012, x, y, z + 0.024, hc); for (const s of [-1, 1]) k.boxS(0.012, 0.012, 0.024, x + s * (len / 2 - 0.012), y, z + 0.012, hc); }
  else if (style === 'vbar') { k.boxS(0.012, len, 0.012, x, y, z + 0.024, hc); for (const s of [-1, 1]) k.boxS(0.012, 0.012, 0.024, x, y + s * (len / 2 - 0.012), z + 0.012, hc); }
  else if (style === 'cup') { k.addS(new THREE.SphereGeometry(0.03, 8, 4, 0, TAU, 0, HP), mul(T(x, y - 0.006, z), S(1.3, 0.8, 0.75), RX(0)), hc); }
  else k.cylS(0.015, 0.009, 0.024, x, y, z + 0.012, hc, 8, RX(HP));
}
// a drawer front on the plane z (front face of the carcass)
function drawer(k, x, y, z, w, h, c, hc = METAL.latao, style = 'knob') {
  k.box(w, h, 0.018, x, y, z + 0.009, c);
  if (w > 0.62 && style !== 'bar') { handle(k, x - w * 0.27, y, z + 0.018, hc, style); handle(k, x + w * 0.27, y, z + 0.018, hc, style); } else handle(k, x, y, z + 0.018, hc, style, Math.min(0.18, w * 0.4));
}
// framed (shaker) door on the plane z. o: { fw, pc (panel colour), glass, mirror, mid, hs (handle side -1/1), hy, hc, hstyle }
function door(k, x, y, z, w, h, c, o = {}) {
  const fw = o.fw ?? 0.05, t = 0.02;
  if (o.glass) k.glass(new THREE.BoxGeometry(w - fw, h - fw, 0.006), T(x, y, z + 0.01));
  else if (o.mirror) { k.box(w - fw, h - fw, 0.01, x, y, z + 0.005, 0x8a9aa0); mirror(k, new THREE.PlaneGeometry(w - fw * 2, h - fw * 2), T(x, y, z + 0.0105)); }
  else k.box(w - fw, h - fw, 0.012, x, y, z + 0.006, o.pc ?? tone(c, 0.93));
  for (const s of [-1, 1]) { k.box(fw, h, t, x + s * (w - fw) / 2, y, z + t / 2, c); k.box(w - fw * 2, fw, t, x, y + s * (h - fw) / 2, z + t / 2, c); }
  if (o.mid != null) k.box(w - fw * 2, fw * 0.8, t, x, y + o.mid, z + t / 2, c);
  if (o.hs != null) handle(k, x + o.hs * (w / 2 - fw / 2), y + (o.hy ?? 0), z + t, o.hc ?? METAL.latao, o.hstyle ?? 'knob', o.hl ?? 0.14);
}
// a row of books standing on y, spines at the plane zf
function books(k, x0, x1, y, zf, seed, o = {}) {
  const r = rng(seed), hmax = o.h ?? 0.25; let x = x0;
  while (x < x1 - 0.03) { const w = (0.022 + r() * 0.03) * (o.bw ?? 1), h = hmax * (0.66 + r() * 0.34), d = (o.d ?? 0.15) * (0.82 + r() * 0.18), c = BOOKC[(r() * BOOKC.length) | 0];
    if (x + w > x1) break;
    if (r() < (o.gap ?? 0.06)) { x += 0.04 + r() * 0.05; continue; }
    if (r() < 0.07 && x + w + h * 0.3 < x1) { k.box(w, h, d, x + w / 2 + h * 0.125, y + h * 0.485, zf - d / 2, c, RZ(-0.25)); x += w + h * 0.27; continue; }
    k.box(w, h, d, x + w / 2, y + h / 2, zf - d / 2, c); if (r() < 0.3) k.box(w + 0.002, 0.014, 0.004, x + w / 2, y + h * 0.78, zf, tone(c, 1.5));
    x += w + 0.002; }
}
// books lying in a pile, centred on x,z
function pile(k, x, y, z, seed, n = 3, s = 1) { const r = rng(seed); for (let i = 0; i < n; i++) { const h = (0.022 + r() * 0.02) * s; k.box((0.15 + r() * 0.04) * s, h, (0.2 + r() * 0.04) * s, x, y + h / 2, z, BOOKC[(r() * BOOKC.length) | 0], RY((r() - 0.5) * 0.5)); y += h; } return y; }
// turned leg: profile of [radius factor, height factor]
const TURN = [[0.5, 0], [0.62, 0.03], [0.62, 0.08], [0.36, 0.13], [0.52, 0.2], [1, 0.45], [0.95, 0.62], [0.6, 0.8], [0.6, 0.84], [0.92, 0.87], [0.92, 1]];
const BUN = [[0.6, 0], [1, 0.25], [1, 0.55], [0.55, 0.8], [0.7, 1]];
const turned = (k, x, z, h, r, c, y0 = 0, seg = 8, prof = TURN) => k.lathe([[0.001, 0], ...prof.map(([a, b]) => [a * r, b * h])], x, y0, z, c, seg);
// four splayed, tapered legs ("pés palito"); w, d = spread at mid height
function splay(k, w, d, h, c, o = {}) { const r = o.r ?? 0.022, a = o.a ?? 0.17, y0 = o.y ?? 0; for (const sx of [-1, 1]) for (const sz of [-1, 1]) k.cyl(r, r * (o.taper ?? 0.55), h / Math.cos(a), sx * (w / 2), y0 + h / 2, sz * (d / 2), c, 8, mul(RZ(sx * a), RX(-sz * a))); }
// mattress + duvet + folded sheet + pillows. Bottom of the mattress at y0, head towards -z. Returns the height of the mattress top.
function bedding(k, w, L, y0, C, o = {}) {
  const z = o.z ?? 0, mh = o.mh ?? 0.2, top = y0 + mh, n = o.n ?? (w > 1.25 ? 2 : 1), zh = z - L / 2;
  sbox(k, w, mh, L, 0, y0 + mh / 2, z, o.mc ?? LINEN, 0.05);
  if (o.duvet !== false) { const dl = L * (o.cover ?? 0.64), dh = mh * 0.7 + 0.05;
    sbox(k, w + 0.05, dh, dl, 0, top + 0.03 - dh / 2, z + L / 2 - dl / 2 + 0.015, C, 0.045);
    sbox(k, w + 0.056, 0.05, 0.22, 0, top + 0.012, z + L / 2 - dl + 0.1, o.fold ?? tone(C, 1.55), 0.022); }
  const pw = Math.min(0.66, (w - 0.1) / n - 0.04);
  for (let i = 0; i < n; i++) pillow(k, (i - (n - 1) / 2) * (pw + 0.05), top + 0.055, zh + 0.27, pw, 0.4, o.pc ?? LINEN, RX(0.1));
  if (o.deco) o.deco.forEach((c, i, a) => { const m = i - (a.length - 1) / 2; cushion(k, m * Math.min(0.42, (w - 0.3) / a.length), top + 0.2, zh + 0.5 + (i % 2) * 0.03, 0.37, c, -m * 0.1); });
  if (o.throw != null) { sbox(k, w + 0.075, 0.04, 0.42, 0, top + 0.035, z + L / 2 - 0.36, o.throw, 0.018); sbox(k, w + 0.08, 0.02, 0.06, 0, top + 0.05, z + L / 2 - 0.5, tone(o.throw, 1.25), 0.008); }
  return top;
}
// looking-glass: any flat geometry with uvs (plane, circle), painted with a soft sky gradient and two streaks of light
let mirTex = null;
function mirror(k, geo, M) {
  if (!mirTex) { const c = document.createElement('canvas'); c.width = c.height = 128; const g = c.getContext('2d'), gr = g.createLinearGradient(0, 0, 128, 128); gr.addColorStop(0, '#f6fcfd'); gr.addColorStop(0.55, '#cfe4ea'); gr.addColorStop(1, '#a8c8d4'); g.fillStyle = gr; g.fillRect(0, 0, 128, 128);
    g.fillStyle = 'rgba(255,255,255,0.6)'; for (const [x, w] of [[26, 16], [56, 6]]) { g.beginPath(); g.moveTo(x + 40, 0); g.lineTo(x + 40 + w, 0); g.lineTo(x - 40 + w, 128); g.lineTo(x - 40, 128); g.fill(); }
    mirTex = new THREE.CanvasTexture(c); mirTex.colorSpace = THREE.SRGBColorSpace; }
  const m = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ map: mirTex, roughness: 0.3, metalness: 0.05 })); if (M) m.applyMatrix4(M); return k.mesh(m);
}
// small things that make a room lived-in
const vase = (k, x, y, z, c, s = 1) => k.latheS([[0.001, 0], [0.035 * s, 0], [0.06 * s, 0.06 * s], [0.05 * s, 0.13 * s], [0.022 * s, 0.18 * s], [0.03 * s, 0.21 * s]], x, y, z, c, 10);
const plate = (k, x, y, z, c, r = 0.1) => k.latheS([[0.001, 0], [r * 0.6, 0], [r, 0.014], [r, 0.02], [r * 0.6, 0.008], [0.001, 0.008]], x, y, z, c, 12);
const cup = (k, x, y, z, c, s = 1) => { k.latheS([[0.001, 0], [0.024 * s, 0], [0.034 * s, 0.06 * s], [0.03 * s, 0.06 * s], [0.02 * s, 0.01 * s], [0.001, 0.01 * s]], x, y, z, c, 8); k.boxS(0.01 * s, 0.03 * s, 0.006 * s, x + 0.036 * s, y + 0.033 * s, z, c); };
// little table lamp whose shade glows at night
function lamp(k, x, y, z, base, shade, s = 1) {
  k.latheS([[0.001, 0], [0.05 * s, 0], [0.05 * s, 0.012 * s], [0.014 * s, 0.03 * s], [0.03 * s, 0.09 * s], [0.012 * s, 0.15 * s], [0.008 * s, 0.2 * s]], x, y, z, base, 10);
  k.lathe2([[0.095 * s, 0.17 * s], [0.06 * s, 0.3 * s]], x, y, z, shade, 14);
  k.glow(new THREE.CylinderGeometry(0.057 * s, 0.092 * s, 0.125 * s, 14, 1, true), 0xffdca8, 1.1, { at: [x, y + 0.235 * s, z], double: true, opacity: 0.6 });
  k.glow(new THREE.SphereGeometry(0.028 * s, 8, 6), 0xfff0c8, 2.6, { at: [x, y + 0.22 * s, z] });
}
// curved tap, spout towards +z
function tap(k, x, y, z, c = METAL.cromo, s = 1, knobs = true) {
  k.cylS(0.02 * s, 0.026 * s, 0.03 * s, x, y + 0.015 * s, z, c, 10);
  k.tubeS([[x, y, z], [x, y + 0.15 * s, z], [x, y + 0.21 * s, z + 0.04 * s], [x, y + 0.2 * s, z + 0.11 * s], [x, y + 0.15 * s, z + 0.135 * s]], 0.012 * s, c, 6);
  if (knobs) for (const sx of [-1, 1]) { k.cylS(0.011 * s, 0.014 * s, 0.05 * s, x + sx * 0.075 * s, y + 0.025 * s, z, c, 8); k.boxS(0.05 * s, 0.012 * s, 0.014 * s, x + sx * 0.075 * s, y + 0.056 * s, z, c); }
}

// =====================================================================================================================
// CAMAS
// =====================================================================================================================
furn({ id: 'cama_simples', name: 'Cama simples', cat: 'Camas', price: 120, lvl: 1, w: 0.95, d: 2.0, h: 0.66, cols: [0xa9c4d8, WOOD.pinho], colN: ['Coberta', 'Madeira'], sleep: [0, 0.5, 0.05], info: 'De pinho, com lençol branco e um travesseiro. Sono honesto.' }, (k) => {
  const C = k.c1, W = k.c2;
  for (const s of [-1, 1]) { k.box(0.06, 0.64, 0.06, s * 0.445, 0.32, -0.97, W); k.box(0.06, 0.44, 0.06, s * 0.445, 0.22, 0.97, W); k.box(0.03, 0.12, 1.9, s * 0.455, 0.27, 0, tone(W, 0.94)); }
  k.box(0.83, 0.26, 0.03, 0, 0.48, -0.975, tone(W, 1.06)); k.box(0.83, 0.05, 0.035, 0, 0.625, -0.975, tone(W, 0.94)); k.box(0.83, 0.16, 0.03, 0, 0.33, 0.975, tone(W, 1.06));
  k.box(0.86, 0.03, 1.9, 0, 0.285, 0, tone(W, 0.82));
  bedding(k, 0.84, 1.88, 0.3, C, { mh: 0.17, fold: LINEN });
});

furn({ id: 'cama_palete', name: 'Cama de paletes', cat: 'Camas', price: 210, lvl: 2, w: 1.3, d: 2.1, h: 1.2, cols: [0xd9a05b, WOOD.pinho], colN: ['Manta', 'Paletes'], sleep: [0, 0.45, 0.1], info: 'Feita de paletes lixados, com manta e almofadas coloridas.' }, (k) => {
  const C = k.c1, W = k.c2;
  const pal = (x, y, z, w, d, rot) => { const g = (px, py, pz, pw, ph, pd, c) => k.add(new THREE.BoxGeometry(pw, ph, pd), mul(T(x, y, z), rot ?? new THREE.Matrix4(), T(px, py, pz)), c);
    for (let i = 0; i < 5; i++) g((i - 2) * (w - 0.12) / 4, 0.115, 0, 0.115, 0.02, d, tone(W, i % 2 ? 1.04 : 0.97));
    for (const s of [-1, 0, 1]) { g(0, 0.06, s * (d / 2 - 0.05), w, 0.09, 0.08, tone(W, 0.84)); g(0, 0.01, s * (d / 2 - 0.05), w, 0.02, 0.1, tone(W, 0.92)); } };
  pal(0, 0, -0.5, 1.3, 1.0); pal(0, 0, 0.52, 1.3, 1.0); pal(0, 0.125, -0.5, 1.3, 1.0); pal(0, 0.125, 0.52, 1.3, 1.0);
  pal(0, 0.72, -0.98, 1.3, 0.94, RX(HP * 0.985));                                          // a pallet standing as headboard
  bedding(k, 1.18, 1.86, 0.25, C, { mh: 0.17, z: 0.1, n: 2, fold: LINEN, deco: [mixHex(C, 0x5d8a8a, 0.7), mixHex(C, 0xf2e3c0, 0.75)] });
});

furn({ id: 'cama_ripas', name: 'Cama de solteiro com ripas', cat: 'Camas', price: 340, lvl: 3, w: 1.0, d: 2.05, h: 0.98, cols: [0xe8b4a0, WOOD.mel], colN: ['Coberta', 'Madeira'], sleep: [0, 0.53, 0.05], info: 'Cabeceira de ripas, pináculos redondos e uma mantinha dobrada aos pés.' }, (k) => {
  const C = k.c1, W = k.c2, zb = -0.995, zf = 0.995;
  for (const s of [-1, 1]) { k.box(0.055, 0.92, 0.055, s * 0.47, 0.46, zb, W); k.sph(0.036, s * 0.47, 0.945, zb, tone(W, 0.9), 1, 1, 1, 8); k.box(0.055, 0.56, 0.055, s * 0.47, 0.28, zf, W); k.sph(0.034, s * 0.47, 0.585, zf, tone(W, 0.9), 1, 1, 1, 8);
    k.box(0.03, 0.13, 1.95, s * 0.478, 0.28, 0, tone(W, 0.94)); }
  k.box(0.89, 0.07, 0.04, 0, 0.87, zb, W); k.box(0.89, 0.06, 0.035, 0, 0.42, zb, W); k.box(0.89, 0.06, 0.04, 0, 0.52, zf, W); k.box(0.89, 0.05, 0.035, 0, 0.3, zf, W);
  for (let i = 0; i < 7; i++) { k.box(0.06, 0.4, 0.02, -0.36 + i * 0.12, 0.645, zb, tone(W, 1.07)); k.box(0.06, 0.18, 0.02, -0.36 + i * 0.12, 0.41, zf, tone(W, 1.07)); }
  k.box(0.9, 0.03, 1.95, 0, 0.29, 0, tone(W, 0.82));
  bedding(k, 0.88, 1.9, 0.305, C, { mh: 0.18, throw: tone(C, 0.78), deco: [mixHex(C, 0xf4dfa8, 0.7)] });
});

furn({ id: 'cama_ferro', name: 'Cama de ferro com colcha de retalhos', cat: 'Camas', price: 580, lvl: 4, w: 1.0, d: 2.05, h: 1.15, cols: [0xc9705a, METAL.ferro], colN: ['Colcha', 'Ferro'], sleep: [0, 0.57, 0.05], info: 'Ferro batido, bolinhas de latão e a colcha que a vó costurou.' }, (k) => {
  const C = k.c1, M = k.c2, B = METAL.latao, zb = -0.99, zf = 0.99;
  for (const s of [-1, 1]) { k.cylS(0.02, 0.02, 1.08, s * 0.46, 0.54, zb, M, 8); k.sphS(0.036, s * 0.46, 1.105, zb, B, 1, 1, 1, 10); k.cylS(0.02, 0.02, 0.74, s * 0.46, 0.37, zf, M, 8); k.sphS(0.036, s * 0.46, 0.765, zf, B, 1, 1, 1, 10); k.boxS(0.03, 0.05, 1.96, s * 0.46, 0.3, 0, M); }
  for (const [z, y0, y1, yb] of [[zb, 0.9, 1.06, 0.5], [zf, 0.6, 0.72, 0.36]]) {
    k.tubeS([[-0.46, y0, z], [-0.3, y0 + (y1 - y0) * 0.62, z], [0, y1, z], [0.3, y0 + (y1 - y0) * 0.62, z], [0.46, y0, z]], 0.014, M);
    k.cylS(0.012, 0.012, 0.92, 0, yb, z, M, 6, RZ(HP));
    for (let i = -2; i <= 2; i++) { const x = i * 0.15, top = y0 + (y1 - y0) * (1 - (x / 0.46) ** 2); k.cylS(0.008, 0.008, top - yb, x, (top + yb) / 2, z, M, 6); k.sphS(0.019, x, (top + yb) / 2, z, B, 1, 1, 1, 6); } }
  k.box(0.9, 0.03, 1.95, 0, 0.3, 0, tone(M, 0.8));
  const top = bedding(k, 0.86, 1.9, 0.315, C, { mh: 0.2, fold: LINEN });
  const P = [C, tone(C, 1.35), LINEN, mixHex(C, 0xe8c070, 0.6), tone(C, 0.78), mixHex(C, 0x7fa08a, 0.6)];
  for (let i = 0; i < 4; i++) for (let j = 0; j < 5; j++) k.box(0.205, 0.012, 0.186, (i - 1.5) * 0.21, top + 0.031, -0.02 + (j + 0.5) * 0.192, P[(i * 3 + j * 5 + (i * j) % 2) % P.length]);
  for (const s of [-1, 1]) for (let j = 0; j < 5; j++) k.box(0.012, 0.1, 0.186, s * 0.452, top - 0.035, -0.02 + (j + 0.5) * 0.192, P[(j * 2 + (s > 0 ? 1 : 4)) % P.length]);
});

furn({ id: 'cama_casal', name: 'Cama de casal clássica', cat: 'Camas', price: 920, lvl: 5, w: 1.52, d: 2.13, h: 1.16, cols: [0x8fa8a0, WOOD.nogueira], colN: ['Colcha', 'Madeira'], sleep: [-0.35, 0.6, 0.05], info: 'Cabeceira arqueada de nogueira, para sonhar a dois.' }, (k) => {
  const C = k.c1, W = k.c2, zb = -1.015, zf = 1.015;
  for (const s of [-1, 1]) { k.box(0.075, 0.98, 0.075, s * 0.71, 0.49, zb, W); k.box(0.095, 0.03, 0.095, s * 0.71, 0.985, zb, tone(W, 0.85)); k.sph(0.045, s * 0.71, 1.04, zb, tone(W, 0.9), 1, 1.1, 1, 8);
    k.box(0.075, 0.6, 0.075, s * 0.71, 0.3, zf, W); k.box(0.095, 0.03, 0.095, s * 0.71, 0.605, zf, tone(W, 0.85)); k.sph(0.04, s * 0.71, 0.655, zf, tone(W, 0.9), 1, 1.1, 1, 8);
    k.box(0.035, 0.17, 1.98, s * 0.722, 0.3, 0, tone(W, 0.93)); }
  k.box(1.36, 0.58, 0.05, 0, 0.63, zb, W); crest(k, 0, 0.92, zb, 0.68, 0.32, 0.05, W, 20); k.box(1.1, 0.4, 0.012, 0, 0.68, zb + 0.03, tone(W, 1.1)); crest(k, 0, 0.92, zb + 0.004, 0.52, 0.26, 0.05, tone(W, 0.88), 16);
  k.box(1.36, 0.3, 0.05, 0, 0.4, zf, W); crest(k, 0, 0.55, zf, 0.68, 0.14, 0.05, W, 20); k.box(1.1, 0.16, 0.012, 0, 0.42, zf + 0.03, tone(W, 1.1));
  k.box(1.4, 0.03, 1.98, 0, 0.33, 0, tone(W, 0.8));
  bedding(k, 1.38, 1.93, 0.345, C, { mh: 0.22, throw: tone(C, 0.75), deco: [mixHex(C, 0xf2e6cc, 0.8), tone(C, 0.82)] });
});

furn({ id: 'cama_bau', name: 'Cama baú com cabeceira-estante', cat: 'Camas', price: 1350, lvl: 6, w: 1.5, d: 2.1, h: 1.06, cols: [0x7d9cc0, WOOD.carvalho], colN: ['Colcha', 'Madeira'], sleep: [-0.35, 0.58, 0.1], info: 'Gavetões embaixo e livros na cabeceira: tudo à mão.' }, (k) => {
  const C = k.c1, W = k.c2, H = METAL.ferro;
  k.box(1.44, 0.28, 1.85, 0, 0.2, 0.075, W); k.box(1.36, 0.06, 1.78, 0, 0.03, 0.075, tone(W, 0.65));
  for (const s of [-1, 1]) for (const z of [-0.36, 0.52]) { k.box(0.016, 0.2, 0.8, s * 0.728, 0.2, z, tone(W, 1.08)); k.boxS(0.012, 0.014, 0.16, s * 0.744, 0.2, z, H); }
  for (const x of [-0.36, 0.36]) drawer(k, x, 0.2, 1.0, 0.66, 0.2, tone(W, 1.08), H, 'bar');
  // bookcase headboard
  k.box(1.44, 1.05, 0.02, 0, 0.525, -1.04, tone(W, 0.9)); k.box(1.5, 0.03, 0.21, 0, 1.04, -0.945, W); k.box(1.44, 0.03, 0.2, 0, 0.635, -0.95, W); k.box(1.44, 0.62, 0.02, 0, 0.31, -0.86, W);
  for (const x of [-0.72, 0, 0.72]) k.box(0.03, x ? 1.05 : 0.4, 0.2, x * 0.985, x ? 0.525 : 0.835, -0.95, W);
  books(k, -0.68, -0.2, 0.65, -0.87, 11, { h: 0.27 }); pile(k, 0.52, 0.65, -0.94, 5, 3, 0.8);
  lamp(k, 0.22, 0.65, -0.95, METAL.latao, CREAM, 1.05); vase(k, -0.1, 0.65, -0.95, mixHex(C, 0xffffff, 0.3), 0.9);
  bedding(k, 1.38, 1.83, 0.34, C, { mh: 0.21, z: 0.075, throw: mixHex(C, 0xf2e3c0, 0.8) });
});

furn({ id: 'beliche', name: 'Beliche', cat: 'Camas', price: 1100, lvl: 6, w: 1.05, d: 2.1, h: 1.76, cols: [0x7fb6a8, WOOD.pinho], colN: ['Cobertas', 'Madeira'], sleep: [0, 0.48, 0], info: 'Dois andares e uma escadinha: quem chegar primeiro escolhe.' }, (k) => {
  const C = k.c1, W = k.c2, px = 0.485, pz = 0.975;
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) { k.box(0.07, 1.72, 0.07, sx * px, 0.86, sz * pz, W); k.box(0.085, 0.025, 0.085, sx * px, 1.732, sz * pz, tone(W, 0.85)); }
  for (const [y0, up] of [[0.26, 0], [1.12, 1]]) {
    for (const s of [-1, 1]) k.box(0.03, 0.14, 1.88, s * 0.497, y0 + 0.03, 0, tone(W, 0.94));
    k.box(0.92, 0.025, 1.88, 0, y0 + 0.02, 0, tone(W, 0.8)); k.box(0.9, 0.36, 0.03, 0, y0 + 0.2, -pz, tone(W, 1.06)); k.box(0.9, up ? 0.2 : 0.24, 0.03, 0, y0 + (up ? 0.12 : 0.14), pz, tone(W, 1.06));
    bedding(k, 0.9, 1.86, y0 + 0.035, up ? mixHex(C, 0xf2d58a, 0.55) : C, { mh: 0.15, fold: LINEN });
  }
  for (const s of [-1, 1]) for (const y of [1.44, 1.58]) k.box(0.025, 0.055, 1.88, s * 0.497, y, 0, W);
  for (const s of [-1, 1]) for (const z of [-0.5, 0, 0.5]) k.box(0.025, 0.36, 0.05, s * 0.497, 1.42, z, tone(W, 0.94));
  for (const x of [-0.02, 0.38]) k.box(0.035, 1.5, 0.03, x, 0.75, 1.03, tone(W, 0.9));
  for (let i = 0; i < 4; i++) k.box(0.4, 0.035, 0.035, 0.18, 0.28 + i * 0.3, 1.03, W);
  k.sph(0.07, -0.25, 1.4, -0.45, 0xc9a070, 1, 1, 0.9, 8); k.sph(0.05, -0.25, 1.5, -0.45, 0xc9a070, 1, 1, 1, 8);        // a teddy on the top bunk
  for (const s of [-1, 1]) { k.sph(0.02, -0.25 + s * 0.04, 1.545, -0.45, 0xb08a5c, 1, 1, 0.6, 6); k.sph(0.025, -0.25 + s * 0.07, 1.4, -0.4, 0xb08a5c, 1, 1, 1.6, 6); }
});

furn({ id: 'cama_box', name: 'Cama box com cabeceira estofada', cat: 'Camas', price: 1600, lvl: 7, w: 1.65, d: 2.14, h: 1.2, cols: [0x8d99ae, 0xd9cdb8], colN: ['Estofado', 'Colcha'], sleep: [-0.38, 0.64, 0.1], info: 'Moderna e alta, com cabeceira macia em gomos.' }, (k) => {
  const F = k.c1, C = k.c2;
  for (const sx of [-1, 1]) for (const z of [-0.85, 0.06, 0.95]) k.cyl(0.035, 0.028, 0.07, sx * 0.72, 0.035, z, DARK, 10);
  sbox(k, 1.6, 0.27, 2.0, 0, 0.2, 0.05, tone(F, 0.86), 0.03); k.box(1.605, 0.012, 2.005, 0, 0.3, 0.05, tone(F, 0.7));
  bedding(k, 1.58, 1.98, 0.335, C, { mh: 0.26, z: 0.065, pc: LINEN, fold: LINEN, throw: F, deco: [tone(F, 1.15), mixHex(F, 0xe6c58a, 0.75), tone(F, 0.85)] });
  sbox(k, 1.65, 1.16, 0.08, 0, 0.6, -1.02, tone(F, 0.86), 0.03);
  for (let i = 0; i < 6; i++) sbox(k, 0.262, 0.76, 0.075, (i - 2.5) * 0.265, 0.8, -0.955, i % 2 ? tone(F, 1.04) : F, 0.035);
});

furn({ id: 'cama_japonesa', name: 'Cama japonesa de tatame', cat: 'Camas', price: 1250, lvl: 8, w: 1.7, d: 2.2, h: 0.52, cols: [0x6f8f7a, WOOD.ebano], colN: ['Edredom', 'Madeira'], sleep: [-0.33, 0.32, 0.07], info: 'Baixinha, sobre tatame, com lanterna de papel. Paz.' }, (k) => {
  const C = k.c1, W = k.c2;
  k.box(1.7, 0.1, 2.2, 0, 0.11, 0, W); k.box(1.5, 0.06, 2.0, 0, 0.03, 0, tone(W, 0.6));
  k.box(1.62, 0.014, 2.08, 0, 0.165, 0.02, STRAW); for (const x of [-0.81, 0, 0.81]) k.box(0.035, 0.016, 2.08, x, 0.166, 0.02, 0x4f5a44); for (const z of [-1.02, 1.06]) k.box(1.62, 0.016, 0.035, 0, 0.166, z, 0x4f5a44);
  k.box(1.7, 0.36, 0.04, 0, 0.34, -1.08, tone(W, 1.1)); for (const y of [0.3, 0.44]) k.box(1.6, 0.05, 0.012, 0, y, -1.056, tone(W, 1.3));
  bedding(k, 1.34, 1.96, 0.172, C, { mh: 0.11, z: 0.07, fold: LINEN });
  for (const s of [-1, 1]) k.box(0.1, 0.012, 0.9, s * 0.69, 0.3, 0.55, tone(C, 0.7));                                            // dark borders of the futon cover
  // andon lantern and a tea tray on the platform
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) k.box(0.012, 0.25, 0.012, 0.765 + sx * 0.055, 0.285, -0.93 + sz * 0.055, DARK); k.box(0.13, 0.012, 0.13, 0.765, 0.412, -0.93, DARK); k.box(0.13, 0.012, 0.13, 0.765, 0.176, -0.93, DARK);
  k.glow(new THREE.BoxGeometry(0.1, 0.21, 0.1), 0xfff0cf, 1.5, { at: [0.765, 0.29, -0.93] });
  k.box(0.13, 0.012, 0.3, -0.765, 0.178, 0.2, 0x8a5a3c); cup(k, -0.765, 0.184, 0.27, 0xe9e4d6, 0.8); k.latheS([[0.001, 0], [0.03, 0], [0.045, 0.03], [0.035, 0.065], [0.012, 0.075]], -0.765, 0.184, 0.14, 0x3f4a45, 10);
});

furn({ id: 'cama_provencal', name: 'Cama provençal', cat: 'Camas', price: 2700, lvl: 10, w: 1.62, d: 2.2, h: 1.4, cols: [0xe6c3cb, WOOD.branco], colN: ['Tecido', 'Madeira'], sleep: [-0.36, 0.62, 0.05], info: 'Branca, cheia de curvas, com medalhão estofado e babados.' }, (k) => {
  const C = k.c1, W = k.c2, zb = -1.035, zf = 1.035, Wd = tone(W, 0.9);
  for (const s of [-1, 1]) {
    turned(k, s * 0.76, zb, 0.34, 0.05, W, 0, 8); k.cyl(0.04, 0.045, 0.72, s * 0.76, 0.7, zb, W, 10); k.cyl(0.055, 0.055, 0.03, s * 0.76, 1.06, zb, Wd, 10); k.lathe([[0.001, 0], [0.03, 0], [0.05, 0.05], [0.03, 0.1], [0.012, 0.13], [0.022, 0.15], [0.001, 0.17]], s * 0.76, 1.075, zb, W, 10);
    turned(k, s * 0.76, zf, 0.34, 0.05, W, 0, 8); k.cyl(0.04, 0.045, 0.3, s * 0.76, 0.49, zf, W, 10); k.cyl(0.055, 0.055, 0.03, s * 0.76, 0.645, zf, Wd, 10); k.sph(0.04, s * 0.76, 0.69, zf, W, 1, 1.1, 1, 8);
    k.box(0.035, 0.16, 2.0, s * 0.765, 0.33, 0, W); }
  k.box(1.46, 0.62, 0.05, 0, 0.66, zb, W); crest(k, 0, 0.97, zb, 0.73, 0.5, 0.05, W, 24);
  k.sph(0.5, 0, 0.93, zb + 0.022, C, 1.12, 0.72, 0.07, 12); ring(k, 0.5, 0.016, mul(T(0, 0.93, zb + 0.03), S(1.14, 0.74, 1)), Wd, 0, TAU, 24);
  tuft(k, 0, 0.93, zb + 0.058, 0.6, 0.3, 4, 3, tone(C, 0.8));
  k.sph(0.05, 0, 1.345, zb + 0.01, Wd, 1.5, 1, 0.7, 8); for (const s of [-1, 1]) ring(k, 0.07, 0.014, mul(T(s * 0.14, 1.3, zb + 0.012), RZ(s > 0 ? -0.4 : PI - 2.2)), Wd, 0, 2.6, 8);
  k.box(1.46, 0.26, 0.05, 0, 0.44, zf, W); crest(k, 0, 0.57, zf, 0.73, 0.2, 0.05, W, 24); k.sph(0.3, 0, 0.5, zf + 0.022, Wd, 1.3, 0.42, 0.06, 12); k.sph(0.04, 0, 0.5, zf + 0.04, W, 1, 1, 0.6, 8);
  k.box(1.5, 0.03, 2.0, 0, 0.34, 0, Wd);
  for (const s of [-1, 1]) curtain(k, s * 0.735, 0.36, 0.02, 1.9, 0.33, LINEN, { side: 1, amp: 0.014, n: 30 }); curtain(k, 0, 0.36, 0.985, 1.44, 0.33, LINEN, { amp: 0.014, n: 22 });
  bedding(k, 1.44, 1.96, 0.35, C, { mh: 0.23, fold: LINEN, throw: LINEN, deco: [LINEN, tone(C, 0.82), LINEN] });
});

furn({ id: 'cama_dossel', name: 'Cama com dossel', cat: 'Camas', price: 4300, lvl: 12, w: 1.76, d: 2.2, h: 2.28, cols: [0xd9c7a8, WOOD.mogno], colN: ['Tecido', 'Madeira'], sleep: [-0.36, 0.64, 0.05], info: 'Quatro colunas torneadas e um céu de tecido só seu.' }, (k) => {
  const C = k.c1, W = k.c2, Wd = tone(W, 0.82), px = 0.8, pz = 1.04, Cl = tone(C, 1.3);
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) { const x = sx * px, z = sz * pz;
    k.box(0.09, 0.62, 0.09, x, 0.31, z, W); k.lathe([[0.045, 0], [0.058, 0.03], [0.03, 0.08], [0.042, 0.3], [0.03, 0.7], [0.036, 0.74], [0.026, 0.78], [0.03, 1.3], [0.045, 1.36], [0.03, 1.4]], x, 0.62, z, W, 8);
    k.box(0.085, 0.1, 0.085, x, 2.07, z, W); k.lathe([[0.03, 0], [0.045, 0.03], [0.02, 0.06], [0.035, 0.1], [0.001, 0.15]], x, 2.12, z, Wd, 8); }
  for (const s of [-1, 1]) { k.box(0.05, 0.07, 2.0, s * px, 2.07, 0, W); k.box(1.52, 0.07, 0.05, 0, 2.07, s * pz, W); k.box(0.035, 0.18, 2.0, s * 0.8, 0.33, 0, W); }
  k.box(1.52, 0.66, 0.045, 0, 0.75, -pz, W); crest(k, 0, 1.08, -pz, 0.76, 0.26, 0.045, W, 20); k.box(1.2, 0.42, 0.012, 0, 0.82, -pz + 0.027, tone(W, 1.12)); k.box(1.52, 0.3, 0.045, 0, 0.47, pz, W); k.box(1.2, 0.16, 0.012, 0, 0.47, pz + 0.027, tone(W, 1.12));
  k.box(1.56, 0.03, 2.0, 0, 0.36, 0, Wd);
  cloth(k, (u, v) => [(u - 0.5) * 1.66, 2.13 - 0.1 * Math.sin(u * PI) * Math.sin(v * PI) + 0.012 * Math.sin(u * 9 * PI), (v - 0.5) * 2.14], 18, 8, Cl);
  for (const s of [-1, 1]) { curtain(k, 0, 2.11, s * (pz + 0.035), 1.66, 0.2, C, { amp: 0.014, n: 26 }); curtain(k, s * (px + 0.035), 2.11, 0, 2.14, 0.2, C, { side: 1, amp: 0.014, n: 32 }); }
  for (const s of [-1, 1]) { curtain(k, s * 0.77, 2.05, -pz + 0.06, 0.62, 1.98, Cl, { dir: -s, tie: { v: 0.47, g: 0.2, e: 0.2 }, amp: 0.03, n: 8 }); ring(k, 0.05, 0.012, mul(T(s * 0.71, 1.12, -pz + 0.06), RX(HP)), METAL.ouro, 1, TAU, 10);
    curtain(k, s * (px + 0.02), 2.05, pz - 0.07, 0.6, 1.98, Cl, { side: 1, dir: -1, tie: { v: 0.47, g: 0.2, e: 0.2 }, amp: 0.03, n: 8 }); ring(k, 0.045, 0.012, mul(T(s * (px + 0.02), 1.12, pz - 0.13), RX(HP)), METAL.ouro, 1, TAU, 10); }
  bedding(k, 1.5, 1.98, 0.37, C, { mh: 0.24, fold: LINEN, throw: tone(C, 0.72), deco: [tone(C, 0.8), LINEN, tone(C, 0.8)] });
});

furn({ id: 'cama_redonda', name: 'Cama redonda', cat: 'Camas', price: 6800, lvl: 14, w: 2.2, d: 2.2, h: 0.95, cols: [0xb7647a, 0x4a4660], colN: ['Colcha', 'Estofado'], sleep: [0, 0.62, 0.1], info: 'Um ninho redondo com cabeceira em gomos e luz por baixo.' }, (k) => {
  const C = k.c1, F = k.c2, z0 = 0.05, R = 1.0;
  k.cyl(0.9, 0.9, 0.08, 0, 0.04, z0, DARK, 28); disc(k, 1.02, 0.25, 0, 0.07, z0, tone(F, 0.85), 0.03, 32);
  k.glow(new THREE.TorusGeometry(0.93, 0.014, 4, 32), 0xffd9a8, 2.2, { M: mul(T(0, 0.045, z0), RX(HP)) });
  disc(k, R, 0.25, 0, 0.32, z0, LINEN, 0.06, 32);
  const zc = -0.28, a0 = Math.asin(zc / 1.03), sh = new THREE.Shape(); sh.absarc(0, 0, 1.03, a0, PI - a0, false); sh.closePath();
  k.add(new THREE.ExtrudeGeometry(sh, { depth: 0.05, bevelEnabled: true, bevelThickness: 0.02, bevelSize: 0.02, bevelSegments: 2, curveSegments: 22 }), mul(T(0, 0.615, z0), RX(HP)), C);
  const p0 = Math.acos(zc / 1.03); k.add(lathG([[1.035, 0.4], [1.052, 0.46], [1.05, 0.59]], 30, -p0, p0 * 2), T(0, 0, z0), C);
  sbox(k, 1.96, 0.045, 0.2, 0, 0.6, z0 + zc + 0.1, LINEN, 0.02);
  for (const s of [-1, 1]) pillow(k, s * 0.35, 0.63, z0 - 0.56, 0.6, 0.36, LINEN, mul(RY(-s * 0.16), RX(0.12)));
  [[-0.26, tone(C, 0.8)], [0.02, mixHex(C, 0xf4e6c8, 0.8)], [0.28, tone(F, 1.2)]].forEach(([x, c], i) => cushion(k, x, 0.77, z0 - 0.33 + (i % 2) * 0.03, 0.35, c, -x * 0.5));
  for (let i = -7; i <= 7; i++) { const a = PI + i * 0.127, h = 0.95 - 0.32 * (i / 7) ** 2, x = Math.sin(a) * 1.03, z = Math.cos(a) * 1.03; k.cyl(0.07, 0.07, h - 0.07, x, (h - 0.07) / 2, z, i % 2 ? tone(F, 1.06) : F, 8); k.add(new THREE.SphereGeometry(0.07, 8, 3, 0, TAU, 0, HP), T(x, h - 0.07, z), i % 2 ? tone(F, 1.06) : F); }
  sbox(k, 0.5, 0.03, 0.34, 0.45, 0.66, z0 + 0.5, tone(F, 1.1), 0.012, RY(0.5)); cup(k, 0.5, 0.676, z0 + 0.52, CERAM, 0.9);                         // breakfast tray
  k.box(0.1, 0.014, 0.14, 0.38, 0.682, z0 + 0.46, BOOKC[1], RY(0.2));
});

furn({ id: 'cama_princesa', name: 'Cama de princesa', cat: 'Camas', price: 12500, lvl: 17, w: 1.8, d: 2.34, h: 2.64, cols: [0xf0b8c8, 0xf7f1e6], colN: ['Tecido', 'Madeira'], sleep: [-0.38, 0.66, 0.05], info: 'Coroa dourada, véu de cortinas e almofadas de sonho.' }, (k) => {
  const C = k.c1, W = k.c2, G = METAL.ouro, Wd = tone(W, 0.9), zb = -1.1, zf = 1.1, Cl = tone(C, 1.45);
  for (const s of [-1, 1]) {
    turned(k, s * 0.82, zb, 0.36, 0.055, W, 0, 6); k.cyl(0.042, 0.048, 0.86, s * 0.82, 0.79, zb, W, 10); k.cylS(0.056, 0.056, 0.03, s * 0.82, 1.22, zb, G, 10); k.latheS([[0.001, 0], [0.03, 0], [0.052, 0.05], [0.03, 0.1], [0.012, 0.13], [0.024, 0.155], [0.001, 0.18]], s * 0.82, 1.235, zb, G, 10);
    turned(k, s * 0.82, zf, 0.36, 0.055, W, 0, 6); k.cyl(0.042, 0.048, 0.34, s * 0.82, 0.53, zf, W, 10); k.cylS(0.056, 0.056, 0.03, s * 0.82, 0.705, zf, G, 10); k.sphS(0.042, s * 0.82, 0.755, zf, G, 1, 1.1, 1, 8);
    k.box(0.035, 0.17, 2.14, s * 0.825, 0.34, 0, W); k.boxS(0.012, 0.02, 2.1, s * 0.845, 0.34, 0, G); }
  // headboard: tall medallion with a golden rim and a little crown
  k.box(1.58, 0.7, 0.05, 0, 0.72, zb, W); crest(k, 0, 1.07, zb, 0.79, 0.62, 0.05, W, 24);
  k.sph(0.5, 0, 1.06, zb + 0.022, C, 1.2, 0.86, 0.07, 12); ring(k, 0.5, 0.018, mul(T(0, 1.06, zb + 0.03), S(1.22, 0.88, 1)), G, 1, TAU, 24);
  tuft(k, 0, 1.06, zb + 0.058, 0.72, 0.44, 5, 4, G);
  k.cylS(0.07, 0.06, 0.05, 0, 1.585, zb + 0.02, G, 10); for (let i = -2; i <= 2; i++) { k.addS(new THREE.ConeGeometry(0.016, 0.07 - Math.abs(i) * 0.012, 6), T(i * 0.028, 1.64 - Math.abs(i) * 0.006, zb + 0.03 + (2 - Math.abs(i)) * 0.012), G); }
  gem(k, 0.016, 0, 1.69, zb + 0.054, 0xfff2f6);
  for (const s of [-1, 1]) ring(k, 0.09, 0.013, mul(T(s * 0.2, 1.5, zb + 0.03), RZ(s > 0 ? -0.3 : PI - 2.1)), G, 1, 2.4, 8);
  k.box(1.58, 0.3, 0.05, 0, 0.48, zf, W); crest(k, 0, 0.63, zf, 0.79, 0.2, 0.05, W, 24); k.sphS(0.3, 0, 0.56, zf + 0.02, G, 1.3, 0.34, 0.05, 10); k.sph(0.045, 0, 0.56, zf + 0.034, C, 1, 1, 0.6, 8);
  k.box(1.6, 0.03, 2.14, 0, 0.35, 0, Wd);
  for (const s of [-1, 1]) curtain(k, s * 0.79, 0.37, 0, 2.06, 0.34, Cl, { side: 1, amp: 0.016, n: 22 }); curtain(k, 0, 0.37, 1.045, 1.56, 0.34, Cl, { amp: 0.016, n: 18 });
  // crown canopy on the wall with two sweeping veils
  const cy = 2.42, cz = zb + 0.3;
  k.latheS([[0.3, 0], [0.33, 0.02], [0.31, 0.06], [0.33, 0.1], [0.31, 0.12]], 0, cy, cz, G, 20); k.cyl(0.3, 0.3, 0.02, 0, cy + 0.11, cz, Cl, 20);
  for (let i = 0; i < 9; i++) { const a = (i / 9) * TAU + 0.35, x = Math.sin(a) * 0.32, z = cz + Math.cos(a) * 0.32; k.addS(new THREE.ConeGeometry(0.022, 0.08, 5), T(x, cy + 0.15, z), G); gem(k, 0.016, x, cy + 0.2, z, 0xfff2f6); }
  for (const s of [-1, 1]) {
    cloth(k, (u, v) => { const xi = 0.02 + 0.74 * v ** 2.1, xo = 0.3 + 0.57 * v ** 0.55, y = cy + 0.02 - 1.22 * (0.75 * v + 0.25 * v * v); return [s * (xi + (xo - xi) * u), y - 0.05 * Math.sin(u * PI) * (1 - v), zb + 0.14 + (1 - v) * 0.2 * Math.sin(u * PI * 0.5 + 0.6) + Math.sin(u * 5 * PI) * 0.024]; }, 10, 8, Cl);
    cloth(k, (u, v) => [s * (0.76 - 0.1 * v + (0.13 + 0.1 * v) * u), 1.22 - 1.19 * v, zb + 0.14 + Math.sin(u * 3 * PI) * 0.025 * (0.4 + v)], 6, 3, Cl);
    ring(k, 0.06, 0.013, mul(T(s * 0.83, 1.21, zb + 0.14), RX(HP)), G, 1, TAU, 10); k.sphS(0.028, s * 0.86, 1.14, zb + 0.18, G, 1, 1.3, 1, 6); }
  const top = bedding(k, 1.56, 2.08, 0.36, C, { mh: 0.25, fold: LINEN, throw: Cl, deco: [LINEN, tone(C, 0.85), LINEN] });
  k.cyl(0.09, 0.09, 0.5, 0, top + 0.1, -0.3, tone(C, 0.9), 10, RZ(HP)); for (const s of [-1, 1]) gem(k, 0.024, s * 0.255, top + 0.1, -0.3, G);
});

furn({ id: 'cama_king_luxo', name: 'Cama king capitonê de luxo', cat: 'Camas', price: 18500, lvl: 19, w: 2.24, d: 2.5, h: 1.68, cols: [0x3f5a78, METAL.ouro], colN: ['Veludo', 'Detalhes'], sleep: [-0.5, 0.67, -0.1], info: 'Veludo capitonê, frisos dourados e recamier aos pés. Um palácio.' }, (k) => {
  const F = k.c1, G = k.c2, Fd = tone(F, 0.8), Fl = tone(F, 1.5);
  // headboard with wings
  sbox(k, 2.06, 1.5, 0.1, 0, 0.75, -1.2, Fd, 0.03); crest(k, 0, 1.5, -1.2, 1.03, 0.15, 0.1, Fd, 24);
  sbox(k, 1.84, 0.98, 0.09, 0, 0.96, -1.13, F, 0.045); crest(k, 0, 1.4, -1.135, 0.9, 0.16, 0.07, F, 22);
  tuft(k, 0, 0.98, -1.082, 1.62, 0.66, 9, 5, G, null, 0.015);
  for (let j = 0; j < 4; j++) for (let i = 0; i < 8; i++) { const x = (i - 3.5) * 0.2025, y = 0.73 + j * 0.165 + 0.0825; for (const s of [-1, 1]) k.add(new THREE.PlaneGeometry(0.004, 0.24), mul(T(x, y, -1.0835), RZ(s * 0.887)), tone(F, 0.7)); } // the diamond folds
  for (const s of [-1, 1]) { k.boxS(0.022, 1.0, 0.03, s * 0.94, 0.96, -1.1, G); sbox(k, 0.13, 1.42, 0.42, s * 1.03, 0.74, -0.99, Fd, 0.045, RY(s * 0.12)); k.boxS(0.016, 1.3, 0.016, s * 1.075, 0.74, -0.775, G, RY(s * 0.12)); }
  ring(k, 0.905, 0.014, mul(T(0, 1.4, -1.095), S(1, 0.16, 1)), G, 1, PI, 18); k.boxS(1.9, 0.022, 0.03, 0, 0.455, -1.1, G);
  k.sphS(0.06, 0, 1.6, -1.16, G, 1.6, 1, 0.6, 10); for (const s of [-1, 1]) ring(k, 0.08, 0.014, mul(T(s * 0.19, 1.58, -1.16), RZ(s > 0 ? -0.5 : PI - 2.1)), G, 1, 2.6, 8);
  // base and golden feet
  sbox(k, 2.06, 0.3, 2.04, 0, 0.21, -0.1, Fd, 0.035); k.boxS(2.066, 0.016, 2.046, 0, 0.09, -0.1, G);
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) k.latheS([[0.02, 0], [0.03, 0.01], [0.022, 0.03], [0.045, 0.06]], sx * 0.95, 0, -0.1 + sz * 0.94, G, 8);
  const top = bedding(k, 2.0, 1.96, 0.35, Fl, { mh: 0.28, z: -0.1, fold: LINEN, throw: F, n: 3 });
  for (const s of [-1, 1]) puff(k, s * 0.5, top + 0.3, -0.98, 0.64, 0.54, 0.17, LINEN, RX(HP - 0.25));                                              // euro shams
  [[-0.5, F], [0, G], [0.5, F]].forEach(([x, c]) => cushion(k, x, top + 0.22, -0.6, 0.38, x ? c : mixHex(G, LINEN, 0.35), -x * 0.2));
  k.cyl(0.085, 0.085, 0.6, 0, top + 0.09, -0.4, F, 12, RZ(HP)); for (const s of [-1, 1]) gem(k, 0.024, s * 0.305, top + 0.09, -0.4, G);
  // recamier at the foot
  sbox(k, 1.66, 0.1, 0.36, 0, 0.3, 1.06, Fd, 0.03); sbox(k, 1.62, 0.13, 0.34, 0, 0.41, 1.06, F, 0.05); tuft(k, 0, 0, 0, 1.3, 0.14, 7, 2, G, mul(T(0, 0.478, 1.06), RX(-HP)), 0.015);
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) k.latheS([[0.012, 0], [0.016, 0.01], [0.012, 0.03], [0.024, 0.22], [0.03, 0.25]], sx * 0.76, 0, 1.06 + sz * 0.13, G, 8);
  k.boxS(1.668, 0.014, 0.366, 0, 0.26, 1.06, G);
});

// =====================================================================================================================
// SOFÁS E POLTRONAS
// =====================================================================================================================
// straight rod from a to b (stretchers, slanted legs, ropes); r = radius at a, r1 = radius at b
function rod(k, a, b, r, c, seg = 6, shiny, r1) {
  const A = new THREE.Vector3(...a), B = new THREE.Vector3(...b), d = B.clone().sub(A), L = d.length(), q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.normalize());
  const M = new THREE.Matrix4().compose(A.add(B).multiplyScalar(0.5), q, new THREE.Vector3(1, 1, 1)), g = new THREE.CylinderGeometry(r1 ?? r, r, L, seg);
  return shiny ? k.addS(g, M, c) : k.add(g, M, c);
}
// rocker runner: an arc of radius R touching the floor at z = 0, lying in the plane x
const rocker = (k, x, R, arc, r, c) => k.add(new THREE.TorusGeometry(R, r, 5, 14, arc), mul(T(x, R + r, 0), RY(HP), RZ(-HP - arc / 2)), c);
// gentle rocking of the whole piece about its rockers
const rock = (k, amp = 0.045, speed = 1.5, R = 1.1) => k.tick((dt, t, night, g) => { const a = Math.sin(t * speed) * amp; for (const ch of g.children) { ch.rotation.x = a; ch.position.y = R * (1 - Math.cos(a)); ch.position.z = R * (a - Math.sin(a)); } });
// upholstered sofa body: base, back, n seat + back cushions, two arms. Returns { top (seat height), sw (cushion width), iw }
function sofa(k, w, d, F, o = {}) {
  const leg = o.leg ?? 0.1, aw = o.aw ?? 0.16, ah = o.ah ?? 0.58, bh = o.bh ?? 0.78, bt = o.bt ?? 0.18, n = o.n ?? 2, sh = o.sh ?? 0.43, iw = w - aw * 2, sw = iw / n, zb = -d / 2, sd = d - bt + 0.02, Fd = tone(F, 0.88), Fl = tone(F, 1.07);
  sbox(k, iw + 0.04, sh - 0.12 - leg, d - 0.05, 0, (sh - 0.12 + leg) / 2, 0, Fd, 0.025);
  sbox(k, iw + 0.04, bh - leg - 0.04, bt, 0, (bh + leg - 0.04) / 2, zb + bt / 2, F, 0.05);
  for (let i = 0; i < n; i++) { const x = (i - (n - 1) / 2) * sw;
    sbox(k, sw - 0.012, 0.15, sd, x, sh - 0.06, zb + bt - 0.025 + sd / 2, Fl, 0.05);
    if (o.backC !== false) sbox(k, sw - 0.02, bh - sh + 0.04, 0.15, x, sh + (bh - sh) / 2 + 0.03, zb + bt + 0.04, Fl, 0.06, RX(-0.17)); }
  for (const s of [-1, 1]) { sbox(k, aw, ah - leg * 0.5, d, s * (w - aw) / 2, (ah + leg * 0.5) / 2, 0, F, Math.min(0.06, aw * 0.4)); if (o.roll) k.cyl(aw * 0.56, aw * 0.56, d - 0.01, s * (w - aw * 1.14) / 2, ah - aw * 0.3, 0, Fl, 10, RX(HP)); }
  return { top: sh + 0.015, sw, iw };
}

furn({ id: 'sofa_simples', name: 'Sofá simples de 2 lugares', cat: 'Sofás e poltronas', price: 180, lvl: 1, w: 1.5, d: 0.8, h: 0.82, cols: [0x9bb0a5, WOOD.pinho], colN: ['Tecido', 'Pés'], seat: [-0.3, 0.45, 0.1], info: 'Pequeno e sincero, cabe em qualquer cantinho.' }, (k) => {
  const F = k.c1, W = k.c2;
  sofa(k, 1.5, 0.8, F, { n: 2, bh: 0.76, ah: 0.56, aw: 0.14 });
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) k.box(0.06, 0.1, 0.06, sx * 0.67, 0.05, sz * 0.32, W);
  cushion(k, 0.42, 0.62, -0.03, 0.34, mixHex(F, 0xf2dfae, 0.75), -0.25, 0.45);
});

furn({ id: 'poltrona_simples', name: 'Poltrona simples', cat: 'Sofás e poltronas', price: 110, lvl: 1, w: 0.8, d: 0.78, h: 0.84, cols: [0xd9a86c, WOOD.pinho], colN: ['Tecido', 'Pés'], seat: [0, 0.45, 0.08], info: 'Uma poltroninha para chamar de sua.' }, (k) => {
  const F = k.c1, W = k.c2;
  sofa(k, 0.8, 0.78, F, { n: 1, bh: 0.78, ah: 0.56, aw: 0.13 });
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) k.box(0.055, 0.1, 0.055, sx * 0.33, 0.05, sz * 0.31, W);
});

furn({ id: 'pufe_redondo', name: 'Pufe redondo', cat: 'Sofás e poltronas', price: 60, lvl: 1, w: 0.5, d: 0.5, h: 0.42, cols: [0xd98a6a, WOOD.mel], colN: ['Tecido', 'Pés'], seat: [0, 0.42, 0], info: 'Fofinho: serve de banco, de apoio de pés e de mesinha.' }, (k) => {
  const F = k.c1, W = k.c2;
  for (let i = 0; i < 4; i++) k.cyl(0.022, 0.016, 0.07, Math.sin(i * HP + 0.78) * 0.17, 0.035, Math.cos(i * HP + 0.78) * 0.17, W, 8);
  disc(k, 0.24, 0.27, 0, 0.065, 0, F, 0.05, 20); disc(k, 0.248, 0.1, 0, 0.315, 0, tone(F, 1.08), 0.045, 20);
  ring(k, 0.243, 0.008, mul(T(0, 0.325, 0), RX(HP)), tone(F, 0.75), 0, TAU, 20); k.add(new THREE.CircleGeometry(0.022, 8), mul(T(0, 0.417, 0), RX(-HP)), tone(F, 0.75));
  for (let i = 0; i < 8; i++) rod(k, [0, 0.4165, 0], [Math.sin(i * PI / 4) * 0.21, 0.405, Math.cos(i * PI / 4) * 0.21], 0.003, tone(F, 0.85), 3);
});

furn({ id: 'pufe_bau', name: 'Pufe baú', cat: 'Sofás e poltronas', price: 150, lvl: 2, w: 0.62, d: 0.46, h: 0.45, cols: [0x7f9bb5, WOOD.nogueira], colN: ['Tecido', 'Pés'], seat: [0, 0.44, 0], info: 'Guarda as mantas e ainda oferece um lugar para sentar.' }, (k) => {
  const F = k.c1, W = k.c2;
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) k.cyl(0.024, 0.018, 0.06, sx * 0.25, 0.03, sz * 0.17, W, 8);
  sbox(k, 0.6, 0.28, 0.44, 0, 0.2, 0, F, 0.03); k.box(0.605, 0.008, 0.445, 0, 0.342, 0, tone(F, 0.6)); sbox(k, 0.62, 0.1, 0.46, 0, 0.395, 0, tone(F, 1.08), 0.04);
  tuft(k, 0, 0, 0, 0.36, 0.18, 3, 2, tone(F, 0.7), mul(T(0, 0.447, 0), RX(-HP)), 0.014);
  k.box(0.05, 0.07, 0.008, 0, 0.33, 0.224, W); k.boxS(0.02, 0.02, 0.006, 0, 0.31, 0.23, METAL.latao);
  sbox(k, 0.2, 0.05, 0.03, 0.14, 0.33, 0.215, 0xe9dcc8, 0.012, RZ(-0.2));                                   // a blanket corner that did not fit
});

furn({ id: 'banco_estofado', name: 'Banco estofado', cat: 'Sofás e poltronas', price: 230, lvl: 3, w: 1.1, d: 0.42, h: 0.48, cols: [0xc9b79c, WOOD.mel], colN: ['Tecido', 'Madeira'], seat: [0, 0.47, 0], info: 'Para o pé da cama ou o corredor, com botões no assento.' }, (k) => {
  const F = k.c1, W = k.c2;
  splay(k, 0.94, 0.3, 0.36, W, { r: 0.022, a: 0.1 }); k.box(1.0, 0.06, 0.34, 0, 0.35, 0, W);
  for (const s of [-1, 1]) rod(k, [s * 0.47, 0.14, -0.15], [s * 0.47, 0.14, 0.15], 0.012, tone(W, 0.9)); rod(k, [-0.47, 0.14, 0], [0.47, 0.14, 0], 0.012, tone(W, 0.9));
  sbox(k, 1.1, 0.1, 0.42, 0, 0.425, 0, F, 0.045); tuft(k, 0, 0, 0, 0.8, 0.16, 5, 2, tone(F, 0.72), mul(T(0, 0.477, 0), RX(-HP)), 0.014);
});

furn({ id: 'sofa_3_lugares', name: 'Sofá de 3 lugares', cat: 'Sofás e poltronas', price: 540, lvl: 3, w: 2.1, d: 0.9, h: 0.88, cols: [0x6f8fa8, WOOD.nogueira], colN: ['Tecido', 'Pés'], seat: [-0.57, 0.46, 0.12], info: 'Braços roliços e lugar para a família toda (e o gato).' }, (k) => {
  const F = k.c1, W = k.c2;
  sofa(k, 2.1, 0.9, F, { n: 3, roll: 1, aw: 0.2, ah: 0.6, bh: 0.8 });
  for (const sx of [-1, 0, 1]) for (const sz of [-1, 1]) turned(k, sx * 0.94, sz * 0.36, 0.1, 0.045, W, 0, 8, BUN);
  cushion(k, -0.6, 0.63, 0.0, 0.36, mixHex(F, 0xf4e3b4, 0.8), 0.2, 0.42); cushion(k, 0.66, 0.63, 0.0, 0.36, tone(F, 0.75), -0.25, 0.42);
  sbox(k, 0.4, 0.045, 0.3, 0.05, 0.467, 0.2, 0xe9dcc8, 0.018); sbox(k, 0.4, 0.04, 0.3, 0.05, 0.508, 0.2, 0xdccdb4, 0.018); for (let i = 0; i < 8; i++) k.box(0.012, 0.004, 0.04, -0.12 + i * 0.05, 0.49, 0.365, 0xd9c8ac); // folded throw on the seat
});

furn({ id: 'namoradeira', name: 'Namoradeira', cat: 'Sofás e poltronas', price: 690, lvl: 5, w: 1.3, d: 0.72, h: 0.97, cols: [0xd7a3a8, WOOD.branco], colN: ['Tecido', 'Madeira'], seat: [-0.28, 0.44, 0.08], info: 'Para dois, bem juntinhos, com encosto em medalhão.' }, (k) => {
  const F = k.c1, W = k.c2, Wd = tone(W, 0.88), B = mul(T(0, 0.67, -0.29), RX(-0.14));
  for (const sx of [-1, 1]) { turned(k, sx * 0.58, 0.28, 0.27, 0.035, W, 0, 8); k.box(0.05, 0.3, 0.05, sx * 0.58, 0.15, -0.28, W, RX(0.12)); }
  k.box(1.24, 0.08, 0.62, 0, 0.3, 0.01, W); k.sph(0.06, 0, 0.3, 0.32, Wd, 1.6, 0.5, 0.3, 8); sbox(k, 1.16, 0.1, 0.58, 0, 0.385, 0.04, F, 0.04);
  k.add(new THREE.SphereGeometry(0.5, 14, 8), mul(B, S(1.14, 0.47, 0.07)), F); ring(k, 0.5, 0.03, mul(B, S(1.17, 0.5, 1)), W, 0, TAU, 26, 5);
  tuft(k, 0, 0, 0.036, 0.72, 0.2, 5, 2, tone(F, 0.75), B);
  k.sph(0.05, 0, 0.925, -0.325, Wd, 1.8, 0.8, 0.6, 8); for (const s of [-1, 1]) { k.box(0.05, 0.2, 0.04, s * 0.4, 0.4, -0.27, W);
    k.tube([[s * 0.56, 0.66, -0.3], [s * 0.6, 0.62, -0.05], [s * 0.6, 0.6, 0.2], [s * 0.59, 0.5, 0.29], [s * 0.58, 0.33, 0.28]], 0.02, W, 6); sbox(k, 0.055, 0.03, 0.22, s * 0.6, 0.63, 0.02, F, 0.014); }
  cushion(k, -0.36, 0.56, -0.08, 0.3, LINEN, 0.2, 0.35, 0.11); cushion(k, 0.38, 0.56, -0.08, 0.3, tone(F, 0.8), -0.2, 0.35, 0.11);
});

furn({ id: 'sofa_retro', name: 'Sofá retrô de pés palito', cat: 'Sofás e poltronas', price: 820, lvl: 5, w: 1.9, d: 0.84, h: 0.81, cols: [0xd9a441, WOOD.mel], colN: ['Tecido', 'Madeira'], seat: [-0.6, 0.42, 0.1], info: 'Anos 60, pés palito e botões: charme de casa de vó moderna.' }, (k) => {
  const F = k.c1, W = k.c2;
  splay(k, 1.62, 0.56, 0.2, W, { r: 0.024, a: 0.2 }); for (const s of [-1, 1]) k.cylS(0.013, 0.012, 0.03, s * 0.83, 0.015, 0.3, METAL.latao, 8);
  k.box(1.86, 0.06, 0.78, 0, 0.23, 0, W);
  for (const s of [-1, 1]) { k.box(0.045, 0.3, 0.72, s * 0.925, 0.4, 0.0, W); k.box(0.075, 0.03, 0.8, s * 0.912, 0.555, 0, tone(W, 1.12)); }
  k.box(1.82, 0.42, 0.03, 0, 0.55, -0.375, tone(W, 0.92), RX(-0.14));
  for (let i = -1; i <= 1; i++) { sbox(k, 0.59, 0.14, 0.64, i * 0.6, 0.33, 0.07, F, 0.045); const B = mul(T(i * 0.6, 0.6, -0.27), RX(-0.2)); k.add(sgeo(0.59, 0.42, 0.13, 0.05), B, tone(F, 1.06)); tuft(k, 0, 0, 0.066, 0.3, 0.2, 2, 2, tone(F, 0.7), B, 0.014); }
  puff(k, 0.62, 0.52, 0.0, 0.3, 0.3, 0.12, mixHex(F, 0x3f6d6e, 0.8), mul(RY(-0.3), RX(HP - 0.4)), 0.95); cushion(k, -0.64, 0.54, -0.02, 0.32, LINEN, 0.25, 0.4);
});

furn({ id: 'poltrona_balanco', name: 'Poltrona de balanço', cat: 'Sofás e poltronas', price: 720, lvl: 5, w: 0.7, d: 1.0, h: 1.1, cols: [0xc96f5a, WOOD.carvalho], colN: ['Almofadas', 'Madeira'], seat: [0, 0.46, 0.05], info: 'Vai e vem, vai e vem... e a tarde passa devagar.' }, (k) => {
  const F = k.c1, W = k.c2, Wd = tone(W, 0.88);
  for (const s of [-1, 1]) { rocker(k, s * 0.3, 1.15, 0.84, 0.02, Wd); rod(k, [s * 0.3, 0.06, 0.3], [s * 0.3, 0.6, 0.3], 0.022, W); rod(k, [s * 0.3, 0.06, -0.26], [s * 0.3, 0.42, -0.26], 0.022, W);
    rod(k, [s * 0.3, 0.4, -0.25], [s * 0.3, 1.06, -0.43], 0.022, W); k.sph(0.03, s * 0.3, 1.07, -0.433, Wd, 1, 1, 1, 8);
    k.box(0.07, 0.03, 0.62, s * 0.31, 0.61, 0.03, tone(W, 1.08)); rod(k, [s * 0.3, 0.22, -0.26], [s * 0.3, 0.22, 0.3], 0.014, Wd); }
  k.box(0.62, 0.04, 0.56, 0, 0.38, 0.03, W); rod(k, [-0.3, 0.2, 0.3], [0.3, 0.2, 0.3], 0.014, Wd);
  const B = mul(T(0, 0.4, -0.25), RX(-0.266));
  for (let i = -2; i <= 2; i++) k.add(new THREE.BoxGeometry(0.06, 0.56, 0.018), mul(B, T(i * 0.105, 0.32, 0)), tone(W, 1.06)); k.add(new THREE.BoxGeometry(0.6, 0.07, 0.03), mul(B, T(0, 0.63, 0)), W); k.add(new THREE.CylinderGeometry(0.3, 0.3, 0.03, 14, 1, false, HP, PI), mul(B, T(0, 0.66, 0), S(1, 0.2, 1), RX(HP)), W);
  sbox(k, 0.54, 0.09, 0.5, 0, 0.445, 0.05, F, 0.04); k.add(sgeo(0.48, 0.46, 0.08, 0.035), mul(B, T(0, 0.33, 0.05)), tone(F, 1.07)); tuft(k, 0, 0.33, 0.092, 0.24, 0.22, 2, 2, tone(F, 0.72), B, 0.013);
  rock(k, 0.05, 1.5, 1.15);
});

furn({ id: 'sofa_cama', name: 'Sofá-cama', cat: 'Sofás e poltronas', price: 980, lvl: 6, w: 2.0, d: 0.95, h: 0.96, cols: [0x7a8f6a, WOOD.pinho], colN: ['Colchão', 'Madeira'], seat: [-0.5, 0.49, 0.1], info: 'De dia é sofá, de noite acolhe a visita que perdeu o ônibus.' }, (k) => {
  const F = k.c1, W = k.c2, Wd = tone(W, 0.88);
  for (const s of [-1, 1]) { for (const z of [-0.43, 0.43]) k.box(0.06, 0.62, 0.06, s * 0.965, 0.31, z, W); k.box(0.085, 0.035, 0.95, s * 0.955, 0.635, 0, tone(W, 1.08)); k.box(0.035, 0.06, 0.8, s * 0.965, 0.2, 0, Wd); for (let i = -2; i <= 2; i++) k.box(0.025, 0.36, 0.06, s * 0.965, 0.42, i * 0.14, tone(W, 1.05)); }
  k.box(1.87, 0.1, 0.035, 0, 0.26, 0.44, W); k.box(1.87, 0.1, 0.035, 0, 0.26, -0.44, W); k.box(1.87, 0.025, 0.86, 0, 0.3, 0, Wd); k.box(0.06, 0.22, 0.06, 0, 0.11, 0.43, W);
  sbox(k, 1.85, 0.17, 0.8, 0, 0.395, 0.06, F, 0.06); const B = mul(T(0, 0.66, -0.31), RX(-0.24)); k.add(sgeo(1.85, 0.6, 0.17, 0.06), B, F);
  tuft(k, 0, 0, 0, 1.5, 0.36, 6, 2, tone(F, 0.68), mul(T(0, 0.482, 0.12), RX(-HP)), 0.015); tuft(k, 0, 0.02, 0.087, 1.5, 0.26, 6, 2, tone(F, 0.68), B, 0.015);
  for (const x of [-0.62, 0, 0.62]) { k.box(0.01, 0.175, 0.81, x, 0.395, 0.06, tone(F, 0.8)); }
  pillow(k, 0.62, 0.6, -0.08, 0.56, 0.36, LINEN, mul(RY(-0.15), RX(HP - 0.55)), 0.15);
  sbox(k, 0.36, 0.05, 0.3, -0.6, 0.505, 0.14, 0xe6d3b0, 0.02); sbox(k, 0.36, 0.045, 0.3, -0.6, 0.55, 0.14, 0xd8bf96, 0.02);                    // folded sheets waiting for the night
});

furn({ id: 'poltrona_leitura', name: 'Poltrona de leitura com orelhas', cat: 'Sofás e poltronas', price: 960, lvl: 6, w: 0.9, d: 0.9, h: 1.16, cols: [0x7fa08a, WOOD.nogueira], colN: ['Tecido', 'Pés'], seat: [0, 0.49, 0.1], info: 'As orelhas abraçam, o livro prende, o chá esfria.' }, (k) => {
  const F = k.c1, W = k.c2, Fd = tone(F, 0.88), Fl = tone(F, 1.07), B = mul(T(0, 0.74, -0.33), RX(-0.11));
  for (const s of [-1, 1]) { turned(k, s * 0.31, 0.34, 0.2, 0.034, W, 0, 8); k.box(0.05, 0.22, 0.05, s * 0.3, 0.115, -0.36, W, RX(0.2)); }
  sbox(k, 0.72, 0.16, 0.76, 0, 0.27, 0.02, Fd, 0.03); sbox(k, 0.56, 0.15, 0.64, 0, 0.415, 0.1, Fl, 0.05);
  k.add(sgeo(0.64, 0.84, 0.17, 0.07), B, F); k.add(sgeo(0.5, 0.56, 0.08, 0.04), mul(B, T(0, -0.02, 0.07)), Fl); tuft(k, 0, 0, 0.112, 0.3, 0.34, 3, 3, tone(F, 0.7), B, 0.013);
  for (const s of [-1, 1]) { k.add(sgeo(0.1, 0.5, 0.3, 0.045), mul(B, T(s * 0.34, 0.14, 0.14), RY(-s * 0.3)), F);
    sbox(k, 0.15, 0.36, 0.74, s * 0.355, 0.4, 0.03, F, 0.06); k.cyl(0.085, 0.085, 0.72, s * 0.35, 0.585, 0.03, Fl, 10, RX(HP)); k.add(new THREE.CircleGeometry(0.05, 10), T(s * 0.35, 0.585, 0.392), Fd); }
  cushion(k, 0.04, 0.63, -0.1, 0.32, mixHex(F, 0xf2d9a0, 0.8), 0.15, 0.4);
  sbox(k, 0.2, 0.03, 0.4, -0.345, 0.675, 0.1, 0xe9dcc8, 0.012); sbox(k, 0.025, 0.3, 0.4, -0.434, 0.53, 0.1, 0xe9dcc8, 0.012);
  k.box(0.13, 0.02, 0.18, 0.355, 0.682, 0.12, BOOKC[0], RY(0.3)); k.box(0.12, 0.012, 0.17, 0.355, 0.675, 0.12, LINEN, RY(0.3));               // the book of the moment
});

furn({ id: 'diva', name: 'Divã', cat: 'Sofás e poltronas', price: 1500, lvl: 8, w: 1.76, d: 0.72, h: 0.9, cols: [0xa7b8c9, WOOD.nogueira], colN: ['Tecido', 'Madeira'], seat: [0.2, 0.48, 0.03], info: 'Para ler deitada, cochilar ou apenas suspirar com elegância.' }, (k) => {
  const F = k.c1, W = k.c2, Fd = tone(F, 0.88), Fl = tone(F, 1.07);
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) turned(k, sx * 0.78, sz * 0.28, 0.2, 0.036, W, 0, 8);
  k.box(1.72, 0.05, 0.68, 0, 0.215, 0, W); sbox(k, 1.7, 0.13, 0.66, 0, 0.3, 0, Fd, 0.03); sbox(k, 1.66, 0.13, 0.64, 0.02, 0.41, 0, Fl, 0.05);
  sbox(k, 0.5, 0.15, 0.64, -0.62, 0.61, 0, F, 0.06, RZ(-0.77)); k.cyl(0.1, 0.1, 0.64, -0.775, 0.79, 0, F, 12, RX(HP)); for (const s of [-1, 1]) { k.add(new THREE.CircleGeometry(0.06, 10), mul(T(-0.775, 0.79, s * 0.321), RY(s > 0 ? 0 : PI)), Fd); }
  sbox(k, 0.2, 0.36, 0.64, -0.76, 0.5, 0, Fd, 0.05);
  sbox(k, 0.95, 0.3, 0.09, -0.3, 0.6, -0.3, F, 0.04, RZ(-0.3)); k.tube([[-0.8, 0.88, -0.31], [-0.45, 0.8, -0.31], [0, 0.62, -0.31], [0.2, 0.5, -0.31], [0.26, 0.38, -0.31]], 0.022, W, 6);
  tuft(k, -0.3, 0.63, -0.254, 0.6, 0.0, 4, 1, tone(F, 0.7), mul(T(-0.3, 0.63, 0), RZ(-0.3), T(0.3, -0.63, 0)), 0.013);
  k.cyl(0.085, 0.085, 0.5, -0.5, 0.57, 0.02, tone(F, 0.8), 10, mul(RX(HP), RZ(0))); for (const s of [-1, 1]) gem(k, 0.022, -0.5, 0.57, 0.02 + s * 0.255, METAL.latao);
  sbox(k, 0.4, 0.035, 0.7, 0.6, 0.485, 0.0, 0xe9dcc8, 0.014); sbox(k, 0.4, 0.3, 0.03, 0.6, 0.35, 0.345, 0xe9dcc8, 0.012); for (let i = 0; i < 7; i++) k.box(0.012, 0.05, 0.004, 0.44 + i * 0.054, 0.18, 0.345, 0xd9c8ac);
});

furn({ id: 'sofa_canto', name: 'Sofá de canto em L', cat: 'Sofás e poltronas', price: 2500, lvl: 9, w: 2.6, d: 1.8, h: 0.86, cols: [0xb9a58f, WOOD.ebano], colN: ['Tecido', 'Pés'], seat: [-0.75, 0.45, -0.35], info: 'Enorme, com chaise: sessão de cinema com pipoca e cobertor.' }, (k) => {
  const F = k.c1, W = k.c2, Fd = tone(F, 0.88), Fl = tone(F, 1.07);
  for (const [x, z] of [[-1.22, -0.82], [-1.22, -0.08], [1.22, -0.82], [0.48, 0.82], [1.22, 0.82], [0.3, -0.08]]) k.cyl(0.03, 0.022, 0.09, x, 0.045, z, W, 8);
  sbox(k, 2.46, 0.22, 0.86, 0.07, 0.2, -0.45, Fd, 0.025); sbox(k, 0.9, 0.22, 0.92, 0.85, 0.2, 0.42, Fd, 0.025);
  sbox(k, 2.6, 0.7, 0.18, 0, 0.44, -0.81, F, 0.05); sbox(k, 0.17, 0.5, 0.9, -1.215, 0.34, -0.45, F, 0.06);
  for (const x of [-0.745, 0.035]) { sbox(k, 0.77, 0.15, 0.74, x, 0.37, -0.37, Fl, 0.05); sbox(k, 0.75, 0.4, 0.15, x, 0.66, -0.68, Fl, 0.06, RX(-0.17)); }
  sbox(k, 0.87, 0.15, 1.64, 0.865, 0.37, 0.08, Fl, 0.05); sbox(k, 0.85, 0.4, 0.15, 0.865, 0.66, -0.68, Fl, 0.06, RX(-0.17));
  cushion(k, -0.95, 0.63, -0.5, 0.36, tone(F, 0.75), 0.5, 0.42); cushion(k, -0.2, 0.63, -0.55, 0.36, mixHex(F, 0xc9705a, 0.75), 0.0, 0.42); cushion(k, 0.95, 0.63, -0.52, 0.36, mixHex(F, 0xf4ecd8, 0.8), -0.2, 0.42);
  sbox(k, 0.87, 0.035, 0.5, 0.865, 0.462, 0.5, mixHex(F, 0xc9705a, 0.75), 0.014); sbox(k, 0.03, 0.26, 0.5, 1.285, 0.345, 0.5, mixHex(F, 0xc9705a, 0.75), 0.012);
  k.box(0.3, 0.014, 0.2, 0.75, 0.487, 0.52, 0x8a5a3c, RY(0.2)); k.latheS([[0.001, 0], [0.05, 0], [0.085, 0.07], [0.08, 0.07], [0.045, 0.012], [0.001, 0.012]], 0.75, 0.494, 0.52, CERAM, 10); k.sph(0.07, 0.75, 0.55, 0.52, 0xf6ecc8, 1, 0.45, 1, 8); // popcorn bowl on a tray
});

furn({ id: 'poltrona_ovo', name: 'Poltrona ovo', cat: 'Sofás e poltronas', price: 2200, lvl: 10, w: 0.9, d: 0.86, h: 1.3, cols: [0xd9694f, 0xf3efe6], colN: ['Forro', 'Casca'], seat: [0, 0.48, 0.08], info: 'Um casulo giratório para se esconder do mundo.' }, (k) => {
  const F = k.c1, Sh = k.c2, t0 = 0.95, M = mul(T(0, 0.74, -0.01), S(0.96, 1.2, 0.9), RX(1.2));
  k.add(new THREE.SphereGeometry(0.45, 18, 9, 0, TAU, t0, PI - t0), M, Sh); k.add2(new THREE.SphereGeometry(0.436, 18, 9, 0, TAU, t0, PI - t0), M, F);
  ring(k, 0.443 * Math.sin(t0), 0.02, mul(M, T(0, 0.443 * Math.cos(t0), 0), RX(HP)), Sh, 0, TAU, 22, 5);
  puff(k, 0, 0.43, 0.07, 0.6, 0.56, 0.16, tone(F, 1.08), null, 0.75); puff(k, 0, 0.76, -0.22, 0.5, 0.52, 0.14, tone(F, 1.08), RX(HP - 0.2), 0.75);
  cushion(k, 0.1, 0.6, -0.06, 0.26, mixHex(F, 0xf6e7c0, 0.85), -0.3, 0.4, 0.1);
  k.cylS(0.035, 0.035, 0.2, 0, 0.13, 0, METAL.cromo, 10); k.latheS([[0.001, 0], [0.3, 0], [0.3, 0.012], [0.06, 0.04], [0.04, 0.06]], 0, 0, 0, METAL.cromo, 22);
});

furn({ id: 'rede_descanso', name: 'Rede de descanso com suporte', cat: 'Sofás e poltronas', price: 1700, lvl: 9, w: 2.6, d: 0.9, h: 1.22, cols: [0xd9584a, WOOD.mel], colN: ['Rede', 'Suporte'], seat: [0, 0.56, 0], info: 'Rede listrada com varanda de crochê: a sesta é sagrada.' }, (k) => {
  const C = k.c1, W = k.c2, P = [C, LINEN, mixHex(C, 0xf2c14e, 0.7), LINEN, C, mixHex(C, 0x3f8a8a, 0.75), LINEN, C];
  k.tube([[-1.26, 1.18, 0], [-1.08, 0.5, 0], [-0.62, 0.1, 0], [0, 0.05, 0], [0.62, 0.1, 0], [1.08, 0.5, 0], [1.26, 1.18, 0]], 0.04, W, 6);
  for (const s of [-1, 1]) { k.box(0.08, 0.06, 0.9, s * 0.62, 0.03, 0, tone(W, 0.9)); rod(k, [s * 0.62, 0.06, 0.3], [s * 0.86, 0.3, 0], 0.022, tone(W, 0.9)); rod(k, [s * 0.62, 0.06, -0.3], [s * 0.86, 0.3, 0], 0.022, tone(W, 0.9)); k.cylS(0.012, 0.012, 0.06, s * 1.24, 1.14, 0, METAL.ferro, 6, RZ(HP)); }
  const hm = (u, v) => { const t = Math.sin(u * PI) ** 0.85, hw = 0.05 + 0.36 * t, q = v * 2 - 1; return [(u - 0.5) * 1.9, 1.0 - 0.46 * t + 0.2 * q * q * t, q * hw]; };
  for (let i = 0; i < 8; i++) cloth(k, (u, v) => hm(u, (i + v) / 8), 14, 1, P[i]);
  for (const s of [-1, 1]) { for (let i = 0; i < 5; i++) rod(k, [s * 1.2, 1.12, 0], [s * 0.95, 1.0, (i - 2) * 0.025], 0.004, LINEN, 3);
    cloth(k, (u, v) => { const p = hm(0.12 + u * 0.76, s > 0 ? 1 : 0); return [p[0], p[1] - v * 0.13, p[2] + s * (0.01 + v * 0.03 + Math.sin(u * 30 * PI) * 0.006)]; }, 30, 1, LINEN); }
  pillow(k, -0.5, 0.71, 0, 0.36, 0.5, LINEN, RZ(-0.42), 0.13);
});

furn({ id: 'chesterfield', name: 'Sofá Chesterfield', cat: 'Sofás e poltronas', price: 4900, lvl: 13, w: 2.2, d: 0.95, h: 0.8, cols: [0x7a4a32, WOOD.ebano], colN: ['Couro', 'Pés'], seat: [-0.55, 0.45, 0.1], info: 'Couro capitonê e tachinhas douradas: um clássico de biblioteca.' }, (k) => {
  const F = k.c1, W = k.c2, Fd = tone(F, 0.85), Fl = tone(F, 1.08), G = METAL.latao, bt = tone(F, 0.6);
  for (const sx of [-1, -0.33, 0.33, 1]) for (const sz of [-1, 1]) turned(k, sx * 0.98, sz * 0.38, 0.1, 0.045, W, 0, 8, BUN);
  sbox(k, 2.16, 0.2, 0.9, 0, 0.2, 0, Fd, 0.03);
  sbox(k, 1.8, 0.44, 0.2, 0, 0.5, -0.365, F, 0.04); k.cyl(0.115, 0.115, 1.76, 0, 0.685, -0.355, F, 12, RZ(HP));
  for (const s of [-1, 1]) { sbox(k, 0.22, 0.44, 0.9, s * 0.985, 0.5, 0, F, 0.04); k.cyl(0.115, 0.115, 0.72, s * 0.985, 0.685, 0.1, F, 12, RX(HP)); k.sph(0.115, s * 0.985, 0.685, -0.355, F, 1, 1, 1, 12);
    k.cyl(0.115, 0.115, 0.02, s * 0.985, 0.685, 0.462, Fd, 14, RX(HP)); k.box(0.2, 0.4, 0.02, s * 0.985, 0.5, 0.445, Fd);
    for (let i = 0; i < 10; i++) k.addS(new THREE.CircleGeometry(0.009, 6), T(s * 0.985 + Math.sin(i * TAU / 10) * 0.095, 0.685 + Math.cos(i * TAU / 10) * 0.095, 0.4725), G);
    for (let i = 0; i < 6; i++) for (const q of [-1, 1]) k.addS(new THREE.CircleGeometry(0.008, 6), T(s * 0.985 + q * 0.085, 0.33 + i * 0.055, 0.4555), G);
    tuft(k, 0, 0.54, 0, 0.56, 0.2, 4, 3, bt, mul(T(s * 0.874, 0, 0.06), RY(-s * HP)), 0.014); }
  tuft(k, 0, 0.54, -0.264, 1.56, 0.2, 10, 3, bt, null, 0.014);
  for (let i = -1; i <= 1; i++) sbox(k, 0.575, 0.15, 0.66, i * 0.58, 0.375, 0.1, Fl, 0.05);
  for (let i = 0; i < 26; i++) k.addS(new THREE.CircleGeometry(0.008, 6), T(-0.85 + i * 0.068, 0.15, 0.4505), G);
  cushion(k, 0.62, 0.62, -0.1, 0.34, 0xe6dcc6, -0.2, 0.4);
});

furn({ id: 'poltrona_bergere', name: 'Poltrona bergère dourada', cat: 'Sofás e poltronas', price: 7200, lvl: 15, w: 0.8, d: 0.8, h: 1.11, cols: [0x9fb8c9, METAL.ouro], colN: ['Seda', 'Moldura'], seat: [0, 0.47, 0.06], info: 'Moldura entalhada a ouro e assento de seda, como nos palacetes.' }, (k) => {
  const F = k.c1, G = k.c2, Gd = tone(G, 0.82), B = mul(T(0, 0.76, -0.31), RX(-0.14));
  for (const sx of [-1, 1]) { k.latheS([[0.001, 0], [0.014, 0], [0.02, 0.02], [0.014, 0.05], [0.034, 0.2], [0.04, 0.26], [0.03, 0.28]], sx * 0.33, 0, 0.31, G, 8); k.boxS(0.045, 0.3, 0.045, sx * 0.32, 0.155, -0.32, G, RX(0.14)); }
  k.boxS(0.72, 0.075, 0.68, 0, 0.31, 0.01, G); k.sphS(0.05, 0, 0.31, 0.35, Gd, 1.8, 0.6, 0.35, 8); sbox(k, 0.62, 0.14, 0.6, 0, 0.4, 0.04, F, 0.05);
  k.addS(sgeo(0.68, 0.62, 0.06, 0.16), B, G); k.add(sgeo(0.56, 0.5, 0.075, 0.13), mul(B, T(0, 0, 0.012)), F); tuft(k, 0, 0, 0.051, 0.3, 0.26, 3, 3, G, B, 0.012);
  k.sphS(0.045, 0, 1.065, -0.36, Gd, 1.8, 0.9, 0.6, 8); for (const s of [-1, 1]) ring(k, 0.05, 0.012, mul(T(s * 0.13, 1.04, -0.355), RZ(s > 0 ? -0.5 : PI - 2.1)), G, 1, 2.6, 8);
  for (const s of [-1, 1]) { k.tubeS([[s * 0.33, 0.74, -0.3], [s * 0.37, 0.66, -0.05], [s * 0.37, 0.64, 0.2], [s * 0.36, 0.52, 0.3], [s * 0.34, 0.34, 0.3]], 0.02, G, 6);
    sbox(k, 0.06, 0.035, 0.26, s * 0.37, 0.675, 0.02, F, 0.016); sbox(k, 0.035, 0.3, 0.52, s * 0.335, 0.5, -0.03, tone(F, 0.92), 0.015); }
  cushion(k, 0, 0.6, -0.1, 0.3, mixHex(F, 0xffffff, 0.6), 0.1, 0.35, 0.11);
});

furn({ id: 'sofa_veludo_luxo', name: 'Sofá de veludo com franjas', cat: 'Sofás e poltronas', price: 14500, lvl: 18, w: 2.4, d: 1.0, h: 1.15, cols: [0x7a2f45, METAL.ouro], colN: ['Veludo', 'Dourados'], seat: [-0.6, 0.5, 0.12], info: 'Veludo, encosto de camelo, rolos e franjas: puro salão de baile.' }, (k) => {
  const F = k.c1, G = k.c2, Fd = tone(F, 0.82), Fl = tone(F, 1.1), Gd = tone(G, 0.8);
  for (const sx of [-1, 0, 1]) for (const sz of [-1, 1]) k.latheS([[0.001, 0], [0.016, 0], [0.024, 0.02], [0.016, 0.05], [0.04, 0.16], [0.05, 0.2]], sx * 1.08, 0, sz * 0.4, G, 8);
  k.boxS(2.3, 0.06, 0.92, 0, 0.225, 0, G); sbox(k, 2.26, 0.1, 0.9, 0, 0.3, 0, Fd, 0.03);
  curtain(k, 0, 0.2, 0.455, 2.22, 0.1, Gd, { amp: 0.005, n: 70 }); for (const s of [-1, 1]) curtain(k, s * 1.145, 0.2, 0, 0.86, 0.1, Gd, { side: 1, amp: 0.005, n: 28 });
  sbox(k, 1.98, 0.17, 0.78, 0, 0.415, 0.09, Fl, 0.06);
  sbox(k, 2.0, 0.44, 0.17, 0, 0.62, -0.4, F, 0.05); crest(k, 0, 0.82, -0.4, 1.0, 0.27, 0.17, F, 24); ring(k, 1.0, 0.02, mul(T(0, 0.825, -0.325), S(1, 0.27, 1)), G, 1, PI, 22);
  k.sphS(0.06, 0, 1.085, -0.39, G, 1.7, 0.9, 0.6, 8); for (const s of [-1, 1]) ring(k, 0.07, 0.013, mul(T(s * 0.17, 1.065, -0.39), RZ(s > 0 ? -0.5 : PI - 2.1)), G, 1, 2.6, 8);
  tuft(k, 0, 0.66, -0.314, 1.6, 0.22, 11, 3, G, null, 0.013); tuft(k, 0, 0.92, -0.314, 0.9, 0.0, 4, 1, G, null, 0.013);
  for (const s of [-1, 1]) { sbox(k, 0.2, 0.34, 0.92, s * 1.07, 0.5, 0, F, 0.05); k.cyl(0.125, 0.125, 0.9, s * 1.07, 0.7, 0, F, 12, RX(HP)); k.cylS(0.1, 0.1, 0.02, s * 1.07, 0.7, 0.455, G, 14, RX(HP)); k.sph(0.05, s * 1.07, 0.7, 0.46, Fl, 1, 1, 0.5, 8); k.boxS(0.03, 0.34, 0.02, s * 1.07, 0.42, 0.455, G);
    k.cyl(0.085, 0.085, 0.5, s * 0.86, 0.585, 0.1, Fl, 10, RX(HP)); gem(k, 0.024, s * 0.86, 0.585, 0.355, G); rod(k, [s * 0.86, 0.585, 0.36], [s * 0.86, 0.5, 0.39], 0.006, G, 4); }
  cushion(k, -0.45, 0.68, -0.13, 0.36, mixHex(G, LINEN, 0.45), 0.15, 0.4); cushion(k, 0.05, 0.68, -0.15, 0.36, Fl, 0, 0.4); cushion(k, 0.5, 0.68, -0.13, 0.36, LINEN, -0.15, 0.4);
});

// =====================================================================================================================
// MESAS
// =====================================================================================================================
const TLEG = [[0.55, 0], [0.75, 0.03], [0.45, 0.08], [0.7, 0.2], [1, 0.52], [0.62, 0.72], [0.62, 0.76], [1, 0.8], [1, 1]];
// plain table: top, apron and four legs. o: { tt, ov (overhang), lr (leg half size), ah (apron), leg: 'sq' | 'round' | 'turned', top (colour) }
function table(k, w, d, h, W, o = {}) {
  const tt = o.tt ?? 0.035, ov = o.ov ?? 0.04, lr = o.lr ?? 0.025, ah = o.ah ?? 0.07, ins = ov + lr, Wd = tone(W, 0.9), lh = h - tt;
  k.box(w, tt, d, 0, h - tt / 2, 0, o.top ?? tone(W, 1.06));
  if (ah) for (const s of [-1, 1]) { k.box(w - ins * 2, ah, 0.02, 0, lh - ah / 2, s * (d / 2 - ins), Wd); k.box(0.02, ah, d - ins * 2, s * (w / 2 - ins), lh - ah / 2, 0, Wd); }
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) { const x = sx * (w / 2 - ins), z = sz * (d / 2 - ins);
    if (o.leg === 'turned') turned(k, x, z, lh, lr * 1.3, W, 0, 8, TLEG); else if (o.leg === 'round') k.cyl(lr, lr * (o.taper ?? 0.6), lh, x, lh / 2, z, W, 8); else k.box(lr * 2, lh, lr * 2, x, lh / 2, z, W); }
}
// a table runner in cloth: lies along x on a top at height y and hangs a little at both ends
function runner(k, len, wid, y, c, hang = 0.14) { k.box(len + 0.006, 0.006, wid, 0, y + 0.003, 0, c); for (const s of [-1, 1]) { k.box(0.006, hang, wid, s * (len / 2 + 0.003), y + 0.006 - hang / 2, 0, c); k.box(0.007, 0.02, wid, s * (len / 2 + 0.0035), y - hang + 0.03, 0, tone(c, 1.35)); } k.box(len * 0.9, 0.007, wid * 0.12, 0, y + 0.0035, wid * 0.36, tone(c, 1.35)); k.box(len * 0.9, 0.007, wid * 0.12, 0, y + 0.0035, -wid * 0.36, tone(c, 1.35)); }

furn({ id: 'mesa_simples', name: 'Mesa simples', cat: 'Mesas', price: 90, lvl: 1, w: 0.8, d: 0.8, h: 0.75, surf: 0.75, cols: [WOOD.pinho, WOOD.mel], colN: ['Tampo', 'Pés'], info: 'Quadradinha, de pinho: café da manhã para dois.' }, (k) => {
  table(k, 0.8, 0.8, 0.75, k.c2, { top: k.c1, lr: 0.026 }); for (const x of [-0.2, 0, 0.2]) k.box(0.004, 0.002, 0.8, x + 0.1, 0.7505, 0, tone(k.c1, 0.86));
});

furn({ id: 'mesinha_cabeceira', name: 'Mesinha de cabeceira', cat: 'Mesas', price: 70, lvl: 1, w: 0.45, d: 0.4, h: 0.55, surf: 0.55, cols: [WOOD.pinho, METAL.ferro], colN: ['Madeira', 'Puxador'], info: 'Uma gaveta para os segredos e um nicho para o livro da vez.' }, (k) => {
  const W = k.c1, Wd = tone(W, 0.88);
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) k.box(0.035, 0.12, 0.035, sx * 0.19, 0.06, sz * 0.165, Wd);
  k.box(0.45, 0.025, 0.4, 0, 0.5375, 0, tone(W, 1.06)); k.box(0.42, 0.02, 0.37, 0, 0.13, 0, W); k.box(0.42, 0.02, 0.37, 0, 0.36, 0, W); k.box(0.42, 0.41, 0.015, 0, 0.325, -0.18, Wd);
  for (const s of [-1, 1]) k.box(0.02, 0.41, 0.37, s * 0.2, 0.325, 0, W);
  drawer(k, 0, 0.447, 0.155, 0.375, 0.135, tone(W, 1.08), k.c2);
  k.box(0.15, 0.03, 0.2, -0.05, 0.155, 0.05, BOOKC[1], RY(0.1)); k.box(0.14, 0.025, 0.19, -0.04, 0.183, 0.05, BOOKC[2], RY(-0.15));
});

furn({ id: 'mesinha_caixote', name: 'Mesinha de caixote', cat: 'Mesas', price: 60, lvl: 1, w: 0.9, d: 0.5, h: 0.38, surf: 0.38, cols: [WOOD.pinho, METAL.ferro], colN: ['Madeira', 'Rodízios'], info: 'Um caixote de feira virou mesa de centro, com rodinhas e tudo.' }, (k) => {
  const W = k.c1, Wd = tone(W, 0.85);
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) { k.cylS(0.03, 0.03, 0.025, sx * 0.38, 0.03, sz * 0.19, k.c2, 10, RZ(HP)); k.boxS(0.04, 0.02, 0.04, sx * 0.38, 0.065, sz * 0.19, k.c2); }
  for (let i = 0; i < 4; i++) { k.box(0.9, 0.02, 0.115, 0, 0.37, -0.1875 + i * 0.125, i % 2 ? W : tone(W, 1.06)); k.box(0.9, 0.018, 0.115, 0, 0.084, -0.1875 + i * 0.125, Wd); }
  for (const s of [-1, 1]) { for (let j = 0; j < 3; j++) k.box(0.02, 0.075, 0.5, s * 0.44, 0.14 + j * 0.092, 0, j % 2 ? tone(W, 1.06) : W); for (const z of [-0.22, 0.22]) k.box(0.035, 0.27, 0.035, s * 0.415, 0.225, z, Wd); }
  for (let j = 0; j < 3; j++) k.box(0.86, 0.075, 0.018, 0, 0.14 + j * 0.092, -0.241, j % 2 ? tone(W, 1.06) : W);
  pile(k, -0.22, 0.093, 0.02, 21, 4, 1.1); books(k, 0.05, 0.36, 0.093, 0.16, 8, { h: 0.22, d: 0.2 });
});

furn({ id: 'mesa_lateral', name: 'Mesa lateral redonda', cat: 'Mesas', price: 120, lvl: 2, w: 0.46, d: 0.46, h: 0.56, surf: 0.56, cols: [WOOD.mel, WOOD.nogueira], colN: ['Tampo', 'Pés'], info: 'Do tamanho certo para uma xícara e um abajur.' }, (k) => {
  const W = k.c1, L = k.c2;
  disc(k, 0.23, 0.028, 0, 0.532, 0, W, 0.01, 22); k.cyl(0.19, 0.19, 0.03, 0, 0.517, 0, tone(L, 0.9), 18);
  for (let i = 0; i < 3; i++) { const a = i * TAU / 3 + 0.5; rod(k, [Math.sin(a) * 0.12, 0.51, Math.cos(a) * 0.12], [Math.sin(a) * 0.2, 0, Math.cos(a) * 0.2], 0.018, L, 8, 0, 0.012); }
  disc(k, 0.14, 0.018, 0, 0.2, 0, tone(W, 0.94), 0.006, 16);
});

furn({ id: 'mesa_jantar_4', name: 'Mesa de jantar de 4 lugares', cat: 'Mesas', price: 390, lvl: 3, w: 1.32, d: 0.85, h: 0.77, surf: 0.76, cols: [WOOD.mel, 0xc9584a], colN: ['Madeira', 'Caminho de mesa'], info: 'Com caminho de mesa bordado, pronta para o almoço de domingo.' }, (k) => {
  table(k, 1.3, 0.85, 0.76, k.c1, { leg: 'round', lr: 0.03, taper: 0.55, ov: 0.05, ah: 0.08 }); runner(k, 1.3, 0.3, 0.76, k.c2);
});

furn({ id: 'escrivaninha', name: 'Escrivaninha', cat: 'Mesas', price: 300, lvl: 3, w: 1.1, d: 0.55, h: 0.9, surf: 0.76, cols: [WOOD.pinho, METAL.ferro], colN: ['Madeira', 'Ferragens'], info: 'Para as cartas, as contas e os planos do jardim.' }, (k) => {
  const W = k.c1, Wd = tone(W, 0.88);
  table(k, 1.1, 0.55, 0.76, W, { lr: 0.024, ov: 0.03, ah: 0.11 });
  drawer(k, -0.24, 0.67, 0.222, 0.44, 0.09, tone(W, 1.08), k.c2, 'bar'); drawer(k, 0.24, 0.67, 0.222, 0.44, 0.09, tone(W, 1.08), k.c2, 'bar');
  k.box(1.1, 0.14, 0.018, 0, 0.83, -0.266, Wd); k.box(1.1, 0.018, 0.14, 0, 0.895, -0.205, W); for (const x of [-0.541, -0.18, 0.18, 0.541]) k.box(0.018, 0.13, 0.14, x, 0.825, -0.205, Wd);
  books(k, -0.16, 0.16, 0.76, -0.15, 31, { h: 0.115, d: 0.1 }); k.cylS(0.03, 0.026, 0.07, 0.36, 0.795, -0.2, k.c2, 10); for (const [dx, c] of [[-0.01, 0xd9584a], [0.012, 0x3f6d8e], [0, 0xd9a441]]) rod(k, [0.36 + dx, 0.8, -0.2], [0.36 + dx * 3, 0.9, -0.2 + dx], 0.004, c, 4);
});

furn({ id: 'mesinha_tronco', name: 'Mesinha de tronco', cat: 'Mesas', price: 350, lvl: 4, w: 0.74, d: 0.74, h: 0.4, surf: 0.4, cols: [0xdcb98a, 0x6a4a34], colN: ['Miolo', 'Casca'], info: 'Uma fatia de árvore antiga, com todos os anéis para contar.' }, (k) => {
  const f = (a) => 1 + 0.05 * Math.sin(3 * a + 1) + 0.035 * Math.sin(5 * a + 2.3) + 0.02 * Math.sin(9 * a), warp = (g, s) => { const p = g.attributes.position; for (let i = 0; i < p.count; i++) { const x = p.getX(i), z = p.getZ(i), m = f(Math.atan2(x, z)) * s; p.setX(i, x * m); p.setZ(i, z * m); } g.computeVertexNormals(); return g; };
  const body = new THREE.CylinderGeometry(0.3, 0.3, 0.39, 22, 4), p = body.attributes.position; for (let i = 0; i < p.count; i++) { const t = (p.getY(i) + 0.195) / 0.39, m = 1 + 0.12 * (1 - t) ** 3; p.setX(i, p.getX(i) * m); p.setZ(i, p.getZ(i) * m); }
  k.add(warp(body, 1), T(0, 0.195, 0), k.c2);
  [[0.275, 1.0], [0.21, 0.9], [0.15, 1.04], [0.095, 0.9], [0.045, 1.05]].forEach(([r, t], i) => k.add(warp(new THREE.CircleGeometry(r, 22).rotateX(-HP), 1), T(0.01 * i, 0.391 + i * 0.0012, 0.006 * i), tone(k.c1, t)));
  k.add(new THREE.PlaneGeometry(0.004, 0.16).rotateX(-HP), mul(T(0.1, 0.398, 0.12), RY(0.6)), tone(k.c1, 0.7));                                       // a little crack
  for (const [a, s] of [[0.6, 1], [2.5, 0.8], [4.4, 0.9]]) k.sph(0.07 * s, Math.sin(a) * 0.3, 0.06, Math.cos(a) * 0.3, tone(k.c2, 0.9), 1, 0.9, 1, 7);  // roots
  k.sph(0.035, 0.27, 0.2, 0.17, 0x6f9a4a, 1.2, 0.5, 1.2, 6); k.sph(0.028, 0.3, 0.24, 0.1, 0x7fae5a, 1.2, 0.5, 1.2, 6);                               // moss
});

furn({ id: 'mesa_redonda', name: 'Mesa redonda de pé central', cat: 'Mesas', price: 640, lvl: 5, w: 1.1, d: 1.1, h: 0.76, surf: 0.76, cols: [WOOD.nogueira, WOOD.nogueira], colN: ['Tampo', 'Pé'], info: 'Sem cabeceira: aqui todo mundo se olha nos olhos.' }, (k) => {
  const W = k.c1, L = k.c2;
  disc(k, 0.55, 0.035, 0, 0.725, 0, tone(W, 1.05), 0.014, 32); k.cyl(0.47, 0.47, 0.05, 0, 0.7, 0, tone(L, 0.88), 24);
  k.lathe([[0.001, 0.1], [0.11, 0.1], [0.12, 0.14], [0.07, 0.18], [0.06, 0.24], [0.1, 0.34], [0.1, 0.4], [0.05, 0.52], [0.06, 0.6], [0.12, 0.68]], 0, 0, 0, L, 14);
  for (let i = 0; i < 4; i++) { const a = i * HP + 0.785, s = Math.sin(a), c = Math.cos(a); k.tube([[s * 0.05, 0.3, c * 0.05], [s * 0.16, 0.24, c * 0.16], [s * 0.3, 0.1, c * 0.3], [s * 0.4, 0.035, c * 0.4]], 0.03, L, 6); k.sph(0.042, s * 0.41, 0.036, c * 0.41, tone(L, 0.85), 1.1, 0.85, 1.1, 8); }
});

furn({ id: 'mesinha_vidro', name: 'Mesinha de centro de vidro', cat: 'Mesas', price: 720, lvl: 6, w: 1.1, d: 0.6, h: 0.42, surf: 0.42, cols: [WOOD.carvalho, METAL.latao], colN: ['Prateleira', 'Estrutura'], info: 'Tampo de vidro, estrutura fina e as revistas embaixo.' }, (k) => {
  const W = k.c1, M = k.c2;
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) k.boxS(0.02, 0.405, 0.02, sx * 0.53, 0.2025, sz * 0.28, M);
  for (const y of [0.395, 0.12]) { for (const s of [-1, 1]) { k.boxS(1.04, 0.02, 0.02, 0, y, s * 0.28, M); k.boxS(0.02, 0.02, 0.54, s * 0.53, y, 0, M); } }
  k.glass(new THREE.BoxGeometry(1.1, 0.014, 0.6), T(0, 0.413, 0), 0xcfe9ee, 0.34); k.box(1.04, 0.02, 0.54, 0, 0.14, 0, W);
  pile(k, -0.3, 0.15, 0.02, 4, 3, 1.15); k.box(0.24, 0.012, 0.3, 0.25, 0.156, 0, 0xe8dcc0, RY(0.25)); k.box(0.24, 0.01, 0.3, 0.27, 0.167, 0.01, 0xc97b63, RY(-0.1));
});

furn({ id: 'criado_mudo_provencal', name: 'Criado-mudo provençal', cat: 'Mesas', price: 880, lvl: 7, w: 0.5, d: 0.45, h: 0.66, surf: 0.66, cols: [WOOD.branco, METAL.ouro], colN: ['Madeira', 'Puxadores'], info: 'Pernas curvas e puxadores dourados para o lado da cama.' }, (k) => {
  const W = k.c1, Wd = tone(W, 0.9), G = k.c2;
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) { k.tube([[sx * 0.2, 0.3, sz * 0.165], [sx * 0.225, 0.2, sz * 0.185], [sx * 0.2, 0.07, sz * 0.165], [sx * 0.215, 0, sz * 0.18]], 0.02, W, 6); }
  sbox(k, 0.46, 0.34, 0.38, 0, 0.45, 0, W, 0.02); k.box(0.5, 0.012, 0.42, 0, 0.628, 0, Wd); sbox(k, 0.5, 0.03, 0.42, 0, 0.645, 0, W, 0.012);
  for (const y of [0.52, 0.38]) { k.box(0.38, 0.115, 0.012, 0, y, 0.192, Wd); k.box(0.33, 0.07, 0.01, 0, y, 0.198, W); k.cylS(0.016, 0.01, 0.022, 0, y, 0.21, G, 8, RX(HP)); }
  crest(k, 0, 0.283, 0.175, 0.16, -0.3, 0.02, W, 12);
});

furn({ id: 'mesa_costura', name: 'Mesa de costura', cat: 'Mesas', price: 860, lvl: 7, w: 1.04, d: 0.54, h: 1.07, surf: 0.76, cols: [WOOD.mogno, METAL.ferro], colN: ['Madeira', 'Ferro'], info: 'Máquina de pedal da bisavó: ainda costura que é uma beleza.' }, (k) => {
  const W = k.c1, M = k.c2, G = METAL.ouro, BK = 0x26242a;
  k.box(1.0, 0.03, 0.5, 0, 0.745, 0, tone(W, 1.06)); for (const s of [-1, 1]) { k.box(0.16, 0.1, 0.4, s * 0.4, 0.68, 0, W); k.box(0.13, 0.07, 0.014, s * 0.4, 0.68, 0.207, tone(W, 1.1)); k.cylS(0.012, 0.008, 0.02, s * 0.4, 0.68, 0.224, G, 8, RX(HP)); }
  for (const s of [-1, 1]) { const x = s * 0.3; for (const q of [-1, 1]) { rod(k, [x, 0.73, q * 0.06], [x, 0.03, q * 0.2], 0.014, M, 6, 1); rod(k, [x, 0.03, q * 0.2], [x, 0.014, q * 0.225], 0.016, M, 6, 1); }
    ring(k, 0.1, 0.012, mul(T(x, 0.36, 0), RY(HP)), M, 1, TAU, 14); k.boxS(0.02, 0.02, 0.44, x, 0.04, 0, M); k.boxS(0.016, 0.016, 0.26, x, 0.52, 0, M); }
  k.boxS(0.6, 0.02, 0.02, 0, 0.36, 0, M); k.boxS(0.36, 0.014, 0.26, -0.04, 0.09, 0.02, M, RX(0.12));
  ring(k, 0.15, 0.012, mul(T(0.24, 0.36, 0.0), RY(HP)), M, 1, TAU, 18); for (let i = 0; i < 3; i++) k.boxS(0.01, 0.29, 0.012, 0.24, 0.36, 0, M, RX(i * PI / 3)); rod(k, [0.24, 0.5, 0], [0.26, 0.8, -0.02], 0.004, 0x8a6a4a, 4);
  // the machine
  sboxS(k, 0.4, 0.035, 0.17, -0.05, 0.777, -0.04, BK, 0.012); sboxS(k, 0.07, 0.2, 0.09, 0.1, 0.89, -0.04, BK, 0.03); sboxS(k, 0.34, 0.075, 0.08, -0.04, 0.985, -0.04, BK, 0.035); sboxS(k, 0.06, 0.13, 0.07, -0.19, 0.93, -0.04, BK, 0.02);
  k.cylS(0.006, 0.006, 0.07, -0.19, 0.835, -0.04, STEEL, 5); ring(k, 0.05, 0.012, mul(T(0.155, 0.93, -0.04), RY(HP)), BK, 1, TAU, 14); k.cylS(0.03, 0.03, 0.012, 0.155, 0.93, -0.04, G, 10, RZ(HP));
  k.boxS(0.2, 0.008, 0.002, -0.04, 0.985, 0.001, G); k.boxS(0.1, 0.006, 0.002, -0.05, 0.777, 0.046, G); k.cyl(0.018, 0.018, 0.04, -0.1, 1.045, -0.04, 0xc9584a, 8); k.cyl(0.004, 0.004, 0.06, -0.1, 1.04, -0.04, STEEL, 4);
  k.box(0.26, 0.004, 0.3, -0.27, 0.797, 0.05, 0xe6c3cb, RY(0.2)); k.box(0.3, 0.004, 0.12, -0.36, 0.764, 0.2, 0xe6c3cb, mul(RY(0.2), RX(0.9)));                // cloth being sewn
  k.sph(0.035, 0.38, 0.775, 0.12, 0xd9584a, 1, 0.75, 1, 8); k.cyl(0.02, 0.02, 0.035, 0.28, 0.777, 0.15, 0x3f6d8e, 8); k.cyl(0.02, 0.02, 0.035, 0.33, 0.777, 0.19, 0xd9a441, 8);
});

furn({ id: 'aparador', name: 'Aparador', cat: 'Mesas', price: 960, lvl: 7, w: 1.4, d: 0.43, h: 0.85, surf: 0.85, cols: [WOOD.carvalho, METAL.latao], colN: ['Madeira', 'Puxadores'], info: 'Fino e elegante para o corredor, com cestos de palha.' }, (k) => {
  const W = k.c1, Wd = tone(W, 0.88);
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) turned(k, sx * 0.65, sz * 0.155, 0.7, 0.03, W, 0, 8, TLEG);
  k.box(1.4, 0.03, 0.4, 0, 0.835, 0, tone(W, 1.06)); k.box(1.32, 0.13, 0.34, 0, 0.755, 0, Wd); for (const x of [-0.44, 0, 0.44]) drawer(k, x, 0.755, 0.17, 0.42, 0.105, tone(W, 1.08), k.c2);
  k.box(1.3, 0.022, 0.32, 0, 0.2, 0, W);
  for (const x of [-0.36, 0.36]) { sbox(k, 0.42, 0.22, 0.27, x, 0.32, 0, STRAW, 0.04); for (const y of [0.26, 0.32, 0.38]) k.box(0.424, 0.008, 0.274, x, y, 0, tone(STRAW, 0.8)); k.box(0.38, 0.012, 0.23, x, 0.428, 0, tone(STRAW, 0.6)); sbox(k, 0.3, 0.05, 0.2, x, 0.43, 0, x < 0 ? 0xe9dcc8 : 0xc9a5a0, 0.02); }
});

furn({ id: 'escrivaninha_gavetas', name: 'Escrivaninha com gavetas e luminária', cat: 'Mesas', price: 1350, lvl: 8, w: 1.4, d: 0.65, h: 1.2, surf: 0.76, cols: [WOOD.mogno, 0x2f5d4a], colN: ['Madeira', 'Couro'], info: 'Tampo de couro, seis gavetas e a clássica luminária verde.' }, (k) => {
  const W = k.c1, L = k.c2, Wd = tone(W, 0.86), G = METAL.latao;
  k.box(1.4, 0.035, 0.65, 0, 0.7425, 0, tone(W, 1.05)); k.box(1.1, 0.004, 0.44, 0, 0.762, 0.04, L); for (const s of [-1, 1]) k.boxS(1.1, 0.003, 0.006, 0, 0.7635, 0.04 + s * 0.2, G);
  for (const s of [-1, 1]) { k.box(0.4, 0.66, 0.58, s * 0.48, 0.395, 0, W); k.box(0.42, 0.06, 0.6, s * 0.48, 0.03, 0, Wd); for (let j = 0; j < 3; j++) drawer(k, s * 0.48, 0.62 - j * 0.2, 0.29, 0.34, 0.17, tone(W, 1.07), G, 'cup'); }
  k.box(0.56, 0.1, 0.5, 0, 0.675, 0, W); drawer(k, 0, 0.675, 0.25, 0.5, 0.075, tone(W, 1.07), G); k.box(0.56, 0.5, 0.015, 0, 0.47, -0.28, Wd);
  // banker's lamp
  k.latheS([[0.001, 0], [0.09, 0], [0.09, 0.012], [0.02, 0.03], [0.012, 0.05]], -0.5, 0.76, -0.16, G, 12); k.tubeS([[-0.5, 0.78, -0.16], [-0.5, 1.02, -0.16], [-0.5, 1.1, -0.13], [-0.5, 1.12, -0.08]], 0.009, G, 5);
  k.add2(new THREE.CylinderGeometry(0.07, 0.07, 0.26, 10, 1, true, 0, PI), mul(T(-0.5, 1.09, -0.06), RZ(HP)), 0x2f8a5a);
  k.glow(new THREE.CylinderGeometry(0.062, 0.062, 0.24, 10, 1, true, 0, PI), 0xfff0c0, 1.6, { M: mul(T(-0.5, 1.088, -0.06), RZ(HP)), double: true });
  pile(k, 0.5, 0.76, -0.14, 9, 3); k.cylS(0.035, 0.03, 0.09, 0.27, 0.805, -0.2, G, 10); rod(k, [0.27, 0.8, -0.2], [0.29, 0.93, -0.19], 0.004, 0x2f4858, 4); rod(k, [0.265, 0.8, -0.2], [0.25, 0.92, -0.21], 0.004, 0xb5533c, 4);
  k.box(0.3, 0.004, 0.21, 0.02, 0.766, 0.08, LINEN, RY(0.12));
});

furn({ id: 'mesa_jantar_grande', name: 'Mesa de jantar grande', cat: 'Mesas', price: 1850, lvl: 9, w: 2.22, d: 1.0, h: 0.78, surf: 0.77, cols: [WOOD.carvalho, 0x7f9a7a], colN: ['Madeira', 'Caminho de mesa'], info: 'Tábuas largas e cavaletes: cabem oito e ainda sobra bolo.' }, (k) => {
  const W = k.c1, Wd = tone(W, 0.86);
  for (let i = 0; i < 5; i++) k.box(2.2, 0.05, 0.198, 0, 0.745, -0.4 + i * 0.2, i % 2 ? W : tone(W, 1.07)); for (const s of [-1, 1]) k.box(0.06, 0.054, 1.0, s * 1.07, 0.745, 0, tone(W, 0.95));
  for (const s of [-1, 1]) { const x = s * 0.8; k.box(0.1, 0.06, 0.86, x, 0.03, 0, Wd); k.box(0.1, 0.05, 0.8, x, 0.695, 0, Wd); for (const q of [-1, 1]) rod(k, [x, 0.67, q * 0.14], [x, 0.06, q * 0.34], 0.04, W, 4); k.box(0.09, 0.07, 0.4, x, 0.36, 0, Wd); }
  k.box(1.7, 0.09, 0.05, 0, 0.36, 0, W); for (const s of [-1, 1]) k.box(0.03, 0.14, 0.03, s * 0.87, 0.36, 0, tone(W, 0.7));
  runner(k, 2.2, 0.34, 0.77, k.c2, 0.16);
});

furn({ id: 'penteadeira', name: 'Penteadeira com espelho', cat: 'Mesas', price: 2300, lvl: 10, w: 1.1, d: 0.53, h: 1.66, surf: 0.76, cols: [WOOD.branco, 0xe6b8c2], colN: ['Madeira', 'Detalhes'], info: 'Espelho oval com luzinhas, perfumes e uma caixinha de joias.' }, (k) => {
  const W = k.c1, A = k.c2, Wd = tone(W, 0.9), G = METAL.ouro;
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) { k.tube([[sx * 0.48, 0.6, sz * 0.2], [sx * 0.51, 0.42, sz * 0.22], [sx * 0.48, 0.12, sz * 0.2], [sx * 0.5, 0, sz * 0.215]], 0.022, W, 6); }
  sbox(k, 1.06, 0.15, 0.46, 0, 0.665, 0, W, 0.02); sbox(k, 1.1, 0.03, 0.5, 0, 0.745, 0, W, 0.012); k.box(1.1, 0.01, 0.5, 0, 0.727, 0, Wd);
  for (const x of [-0.36, 0, 0.36]) { k.box(0.3, 0.1, 0.012, x, 0.665, 0.232, Wd); k.box(0.25, 0.06, 0.01, x, 0.665, 0.238, W); k.cylS(0.015, 0.009, 0.022, x, 0.665, 0.25, G, 8, RX(HP)); }
  crest(k, 0, 0.593, 0.22, 0.3, -0.25, 0.02, W, 14);
  // oval mirror with a ring of little bulbs
  for (const s of [-1, 1]) { k.box(0.04, 0.5, 0.03, s * 0.36, 0.99, -0.2, W); k.sph(0.028, s * 0.36, 1.26, -0.2, Wd, 1, 1.2, 1, 8); }
  const Mi = mul(T(0, 1.2, -0.2), RX(-0.06));
  k.add(new THREE.CylinderGeometry(0.33, 0.33, 0.03, 24), mul(Mi, S(1, 1.22, 1), RX(HP)), W); mirror(k, new THREE.CircleGeometry(0.29, 24), mul(Mi, T(0, 0, 0.0165), S(1, 1.24, 1))); ring(k, 0.29, 0.012, mul(Mi, T(0, 0, 0.018), S(1, 1.24, 1)), A, 0, TAU, 24);
  for (let i = 0; i < 10; i++) { const a = i * TAU / 10 + 0.31, m = mul(Mi, T(Math.sin(a) * 0.31, Math.cos(a) * 0.31 * 1.23, 0.03)); k.glow(new THREE.SphereGeometry(0.02, 6, 5), 0xfff3d6, 2.4, { M: m, day: 0.25 }); }
  k.sph(0.045, 0, 1.615, -0.224, A, 1.6, 0.8, 0.5, 8);
  // perfumes, brush and jewellery box
  k.latheS([[0.001, 0], [0.03, 0], [0.034, 0.05], [0.012, 0.07], [0.012, 0.09], [0.018, 0.1]], -0.4, 0.76, -0.08, A, 8); k.boxS(0.045, 0.07, 0.03, -0.31, 0.795, -0.12, 0xcfe3e8); k.cylS(0.012, 0.012, 0.025, -0.31, 0.842, -0.12, G, 6);
  sbox(k, 0.16, 0.06, 0.11, 0.36, 0.79, -0.1, A, 0.015); k.boxS(0.165, 0.008, 0.115, 0.36, 0.806, -0.1, G); k.boxS(0.02, 0.02, 0.006, 0.36, 0.795, -0.043, G);
  k.box(0.05, 0.012, 0.16, 0.12, 0.766, 0.06, A, RY(0.5)); k.box(0.06, 0.02, 0.08, 0.1, 0.77, 0.03, tone(A, 0.7), RY(0.5));
});

furn({ id: 'mesinha_marmore', name: 'Mesinha de centro de mármore', cat: 'Mesas', price: 3300, lvl: 12, w: 1.0, d: 1.0, h: 0.42, surf: 0.42, cols: [MARBLE, METAL.ouro], colN: ['Mármore', 'Base'], info: 'Mármore polido sobre base dourada: o brilho da sala.' }, (k) => {
  const Mb = k.c1, G = k.c2;
  disc(k, 0.5, 0.035, 0, 0.385, 0, Mb, 0.012, 32); k.cylS(0.5, 0.5, 0.008, 0, 0.381, 0, G, 32);
  for (const [x0, z0, a, l] of [[-0.2, 0.1, 0.5, 0.5], [0.15, -0.2, -0.3, 0.42], [0.1, 0.25, 1.2, 0.3], [-0.28, -0.22, 2.2, 0.26], [0.3, 0.05, 0.9, 0.2]]) k.add(new THREE.PlaneGeometry(l, 0.006).rotateX(-HP), mul(T(x0, 0.4205, z0), RY(a)), tone(mixHex(Mb, 0x8a8a90, 0.5), 1));
  for (let i = 0; i < 3; i++) { const a = i * TAU / 3, m = mul(RY(a)); for (const s of [-1, 1]) k.tubeS([[0, 0.38, 0.4], [s * 0.1, 0.25, 0.3], [s * 0.07, 0.12, 0.16], [0, 0.01, 0.06]].map(([x, y, z]) => { const v = new THREE.Vector3(x, y, z).applyMatrix4(m); return [v.x, v.y, v.z]; }), 0.012, G, 5); }
  ring(k, 0.2, 0.012, mul(T(0, 0.19, 0), RX(HP)), G, 1, TAU, 22); k.cylS(0.1, 0.12, 0.012, 0, 0.006, 0, G, 16);
});

furn({ id: 'mesa_jantar_luxo', name: 'Mesa de jantar de gala', cat: 'Mesas', price: 16500, lvl: 18, w: 2.62, d: 1.1, h: 1.25, surf: 0.78, cols: [0x4a2c22, METAL.ouro], colN: ['Madeira', 'Dourados'], info: 'Laca espelhada, colunas entalhadas e candelabro: jantar de gala.' }, (k) => {
  const W = k.c1, G = k.c2, Wd = tone(W, 0.8);
  sboxS(k, 2.6, 0.045, 1.1, 0, 0.7575, 0, W, 0.02); k.boxS(2.5, 0.02, 1.0, 0, 0.726, 0, G); k.boxS(2.3, 0.05, 0.8, 0, 0.695, 0, Wd);
  k.boxS(2.3, 0.002, 0.012, 0, 0.7805, 0.44, G); k.boxS(2.3, 0.002, 0.012, 0, 0.7805, -0.44, G); for (const s of [-1, 1]) k.boxS(0.012, 0.002, 0.88, s * 1.15, 0.7805, 0, G);
  for (const s of [-1, 1]) { const x = s * 0.75;
    k.latheS([[0.001, 0.08], [0.19, 0.08], [0.2, 0.12], [0.12, 0.16], [0.09, 0.22], [0.15, 0.32], [0.16, 0.4], [0.08, 0.5], [0.07, 0.58], [0.13, 0.64], [0.18, 0.67]], x, 0, 0, W, 14);
    for (const y of [0.13, 0.27, 0.6]) ring(k, y === 0.27 ? 0.125 : y === 0.13 ? 0.19 : 0.1, 0.012, mul(T(x, y, 0), RX(HP)), G, 1, TAU, 16);
    for (const q of [-1, 1]) { rod(k, [x, 0.17, q * 0.08], [x, 0.045, q * 0.46], 0.045, W, 6, 1, 0.028); k.sphS(0.04, x, 0.035, q * 0.47, G, 1, 0.8, 1, 8); }
    for (const q of [-1, 1]) { rod(k, [x + q * 0.08, 0.17, 0], [x + q * 0.3, 0.04, 0], 0.042, W, 6, 1, 0.026); k.sphS(0.036, x + q * 0.31, 0.032, 0, G, 1, 0.8, 1, 8); } }
  k.boxS(1.3, 0.06, 0.07, 0, 0.2, 0, Wd); k.sphS(0.05, 0, 0.2, 0, G, 1.4, 1, 1.2, 8);
  runner(k, 2.6, 0.36, 0.78, mixHex(G, LINEN, 0.72), 0.18);
  // candelabrum
  k.latheS([[0.001, 0], [0.08, 0], [0.085, 0.012], [0.02, 0.04], [0.014, 0.1], [0.03, 0.14], [0.012, 0.2], [0.012, 0.3]], 0, 0.786, 0, G, 10);
  for (const s of [-1, 0, 1]) { if (s) k.tubeS([[0, 1.0, 0], [s * 0.08, 0.96, 0], [s * 0.15, 1.0, 0], [s * 0.16, 1.06, 0]], 0.008, G, 5); const x = s * 0.16, y = s ? 1.06 : 1.09; k.cylS(0.022, 0.012, 0.02, x, y, 0, G, 8); k.cyl(0.011, 0.011, 0.1, x, y + 0.06, 0, 0xf7f0e0, 6);
    k.glow(new THREE.SphereGeometry(0.012, 6, 5), 0xffc860, 3, { M: mul(T(x, y + 0.128, 0), S(1, 1.9, 1)), day: 0.9 }); }
});

// =====================================================================================================================
// CADEIRAS
// =====================================================================================================================
furn({ id: 'cadeira_simples', name: 'Cadeira simples', cat: 'Cadeiras', price: 40, lvl: 1, w: 0.42, d: 0.5, h: 0.9, cols: [WOOD.pinho, 0xc9584a], colN: ['Madeira', 'Almofadinha'], seat: [0, 0.48, 0.02], info: 'Cadeira de pinho com almofadinha amarrada. Simples e firme.' }, (k) => {
  const W = k.c1, P = k.c2, Wd = tone(W, 0.9), B = mul(T(0, 0.44, -0.185), RX(-0.09));
  for (const s of [-1, 1]) { k.box(0.04, 0.44, 0.04, s * 0.18, 0.22, 0.185, W); k.box(0.04, 0.44, 0.04, s * 0.18, 0.22, -0.185, W); k.add(new THREE.BoxGeometry(0.04, 0.46, 0.035), mul(B, T(s * 0.18, 0.23, 0)), W);
    k.box(0.02, 0.03, 0.34, s * 0.18, 0.2, 0, Wd); }
  k.box(0.34, 0.03, 0.02, 0, 0.26, 0.185, Wd); k.box(0.42, 0.03, 0.43, 0, 0.445, 0.005, tone(W, 1.05));
  k.add(new THREE.BoxGeometry(0.33, 0.08, 0.02), mul(B, T(0, 0.4, 0)), tone(W, 1.05)); k.add(new THREE.BoxGeometry(0.33, 0.05, 0.02), mul(B, T(0, 0.24, 0)), tone(W, 1.05));
  sbox(k, 0.37, 0.035, 0.36, 0, 0.475, 0.02, P, 0.015); for (const s of [-1, 1]) k.box(0.01, 0.06, 0.004, s * 0.15, 0.45, -0.165, tone(P, 0.8), RZ(s * 0.3));
});

furn({ id: 'banquinho_madeira', name: 'Banquinho de madeira', cat: 'Cadeiras', price: 30, lvl: 1, w: 0.36, d: 0.36, h: 0.45, cols: [WOOD.mel, WOOD.pinho], colN: ['Assento', 'Pés'], seat: [0, 0.45, 0], info: 'Três pés e muita serventia.' }, (k) => {
  disc(k, 0.17, 0.04, 0, 0.41, 0, k.c1, 0.014, 18);
  for (let i = 0; i < 3; i++) { const a = i * TAU / 3, s = Math.sin(a), c = Math.cos(a); rod(k, [s * 0.09, 0.42, c * 0.09], [s * 0.155, 0, c * 0.155], 0.02, k.c2, 8, 0, 0.015); }
  ring(k, 0.127, 0.01, mul(T(0, 0.17, 0), RX(HP)), tone(k.c2, 0.9), 0, TAU, 12);
});

furn({ id: 'cadeira_palhinha', name: 'Cadeira de palhinha', cat: 'Cadeiras', price: 170, lvl: 3, w: 0.44, d: 0.48, h: 0.92, cols: [WOOD.ebano, STRAW], colN: ['Madeira', 'Palhinha'], seat: [0, 0.47, 0.02], info: 'Madeira vergada e assento trançado, como nos cafés antigos.' }, (k) => {
  const W = k.c1, P = k.c2;
  k.add(lathG([[0.15, 0], [0.2, 0], [0.205, 0.02], [0.2, 0.04], [0.15, 0.04]], 20), T(0, 0.43, 0.02), W); k.cyl(0.155, 0.155, 0.02, 0, 0.455, 0.02, P, 20); ring(k, 0.11, 0.004, mul(T(0, 0.4655, 0.02), RX(HP)), tone(P, 0.75), 0, TAU, 16, 3); ring(k, 0.06, 0.004, mul(T(0, 0.4655, 0.02), RX(HP)), tone(P, 0.75), 0, TAU, 12, 3);
  for (const s of [-1, 1]) rod(k, [s * 0.13, 0.44, 0.15], [s * 0.18, 0, 0.21], 0.018, W, 6, 0, 0.013);
  k.tube([[-0.18, 0, -0.21], [-0.16, 0.44, -0.13], [-0.18, 0.76, -0.19], [0, 0.9, -0.215], [0.18, 0.76, -0.19], [0.16, 0.44, -0.13], [0.18, 0, -0.21]], 0.017, W, 6);
  k.tube([[-0.1, 0.46, -0.12], [-0.115, 0.68, -0.17], [0, 0.8, -0.195], [0.115, 0.68, -0.17], [0.1, 0.46, -0.12]], 0.012, W, 5);
  ring(k, 0.165, 0.011, mul(T(0, 0.2, 0.005), RX(HP)), W, 0, TAU, 16);
});

furn({ id: 'banco_madeira', name: 'Banco de madeira comprido', cat: 'Cadeiras', price: 230, lvl: 3, w: 1.5, d: 0.54, h: 0.88, cols: [WOOD.carvalho, 0x8fae9a], colN: ['Madeira', 'Almofadas'], seat: [-0.35, 0.47, 0.04], info: 'Banco de ripas para a copa: cabe a família apertadinha.' }, (k) => {
  const W = k.c1, P = k.c2, Wd = tone(W, 0.88), B = mul(T(0, 0.42, -0.19), RX(-0.12));
  for (const s of [-1, 1]) { k.box(0.05, 0.64, 0.05, s * 0.71, 0.32, 0.2, W); k.box(0.05, 0.44, 0.05, s * 0.71, 0.22, -0.19, W); k.add(new THREE.BoxGeometry(0.05, 0.46, 0.045), mul(B, T(s * 0.71, 0.22, 0)), W);
    k.box(0.07, 0.03, 0.5, s * 0.71, 0.65, 0, tone(W, 1.07)); k.box(0.03, 0.05, 0.36, s * 0.71, 0.2, 0, Wd); }
  for (let i = 0; i < 4; i++) k.box(1.4, 0.022, 0.095, 0, 0.42, -0.16 + i * 0.112, i % 2 ? W : tone(W, 1.06)); k.box(1.37, 0.06, 0.025, 0, 0.375, 0.2, Wd); k.box(1.37, 0.03, 0.03, 0, 0.2, 0, Wd);
  k.add(new THREE.BoxGeometry(1.42, 0.07, 0.03), mul(B, T(0, 0.425, 0)), W); k.add(new THREE.BoxGeometry(1.37, 0.05, 0.025), mul(B, T(0, 0.1, 0)), W);
  for (let i = 0; i < 11; i++) k.add(new THREE.BoxGeometry(0.06, 0.28, 0.018), mul(B, T(-0.6 + i * 0.12, 0.26, 0)), tone(W, 1.06));
  for (const x of [-0.35, 0.35]) sbox(k, 0.66, 0.05, 0.4, x, 0.455, 0.015, P, 0.022); cushion(k, 0.5, 0.63, -0.06, 0.3, mixHex(P, 0xf4e6c0, 0.8), -0.2, 0.3, 0.11);
});

furn({ id: 'banqueta_alta', name: 'Banqueta alta', cat: 'Cadeiras', price: 190, lvl: 4, w: 0.4, d: 0.4, h: 0.98, cols: [0xc9705a, METAL.ferro], colN: ['Assento', 'Estrutura'], seat: [0, 0.78, 0], info: 'Para o balcão da cozinha e as conversas de fim de tarde.' }, (k) => {
  const F = k.c1, M = k.c2;
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) rod(k, [sx * 0.11, 0.72, sz * 0.11], [sx * 0.18, 0, sz * 0.18], 0.013, M, 6, 1);
  for (const s of [-1, 1]) { k.boxS(0.31, 0.016, 0.016, 0, 0.28, s * 0.153, M); k.boxS(0.016, 0.016, 0.31, s * 0.153, 0.28, 0, M); }
  k.cylS(0.15, 0.15, 0.02, 0, 0.71, 0, M, 16); disc(k, 0.175, 0.075, 0, 0.715, 0, F, 0.03, 18); ring(k, 0.176, 0.006, mul(T(0, 0.752, 0), RX(HP)), tone(F, 0.75), 0, TAU, 18, 3);
  for (const s of [-1, 1]) rod(k, [s * 0.1, 0.72, -0.13], [s * 0.11, 0.95, -0.17], 0.01, M, 6, 1); sbox(k, 0.3, 0.1, 0.04, 0, 0.92, -0.165, F, 0.018, RX(-0.12));
});

furn({ id: 'cadeira_estofada', name: 'Cadeira estofada de jantar', cat: 'Cadeiras', price: 350, lvl: 5, w: 0.48, d: 0.56, h: 0.98, cols: [0x9fb0a0, WOOD.nogueira], colN: ['Tecido', 'Madeira'], seat: [0, 0.48, 0.03], info: 'Macia no assento e no encosto: o jantar pode demorar.' }, (k) => {
  const F = k.c1, W = k.c2, B = mul(T(0, 0.44, -0.165), RX(-0.13));
  for (const s of [-1, 1]) { rod(k, [s * 0.19, 0.4, 0.21], [s * 0.2, 0, 0.23], 0.024, W, 8, 0, 0.014); rod(k, [s * 0.19, 0.42, -0.17], [s * 0.2, 0, -0.255], 0.024, W, 8, 0, 0.014); }
  k.box(0.45, 0.05, 0.46, 0, 0.385, 0.02, W); sbox(k, 0.47, 0.09, 0.48, 0, 0.44, 0.03, F, 0.04);
  k.add(sgeo(0.44, 0.54, 0.075, 0.04), mul(B, T(0, 0.27, 0)), F); k.add(new THREE.BoxGeometry(0.4, 0.46, 0.012), mul(B, T(0, 0.26, -0.04)), W); tuft(k, 0, 0.3, 0.039, 0.18, 0.18, 2, 2, tone(F, 0.72), B, 0.012);
});

furn({ id: 'cadeira_escritorio', name: 'Cadeira de escritório giratória', cat: 'Cadeiras', price: 660, lvl: 7, w: 0.68, d: 0.68, h: 1.12, cols: [0x4f6f8a, 0x33363c], colN: ['Estofado', 'Estrutura'], seat: [0, 0.5, 0.02], info: 'Gira, sobe, desce e rola: trabalhar ficou divertido.' }, (k) => {
  const F = k.c1, St = k.c2, B = mul(T(0, 0.82, -0.26), RX(-0.09));
  for (let i = 0; i < 5; i++) { const a = i * TAU / 5, s = Math.sin(a), c = Math.cos(a); rod(k, [0, 0.1, 0], [s * 0.29, 0.065, c * 0.29], 0.022, St, 5, 1, 0.016); k.sph(0.028, s * 0.29, 0.028, c * 0.29, DARK, 0.7, 1, 1, 8); }
  k.cylS(0.04, 0.045, 0.14, 0, 0.15, 0, St, 10); k.cylS(0.022, 0.022, 0.2, 0, 0.3, 0, METAL.cromo, 8); k.boxS(0.22, 0.04, 0.22, 0, 0.405, 0, St);
  sbox(k, 0.5, 0.09, 0.48, 0, 0.455, 0.03, F, 0.045); k.tubeS([[0, 0.4, -0.1], [0, 0.4, -0.27], [0, 0.48, -0.31], [0, 0.72, -0.3]], 0.02, St, 6);
  k.add(sgeo(0.46, 0.54, 0.07, 0.06), B, F); k.addS(sgeo(0.4, 0.46, 0.03, 0.05), mul(B, T(0, 0, -0.035)), St); k.add(sgeo(0.36, 0.14, 0.03, 0.03), mul(B, T(0, -0.12, 0.03)), tone(F, 1.1));
  for (const s of [-1, 1]) { k.tubeS([[s * 0.2, 0.4, 0], [s * 0.29, 0.44, 0], [s * 0.3, 0.64, 0]], 0.014, St, 5); sboxS(k, 0.06, 0.03, 0.26, s * 0.3, 0.66, 0.02, St, 0.012); }
});

furn({ id: 'cadeira_balanco_vime', name: 'Cadeira de balanço de vime', cat: 'Cadeiras', price: 820, lvl: 8, w: 0.72, d: 0.96, h: 1.14, cols: [0xcaa76a, 0xd9c7a8], colN: ['Vime', 'Almofadas'], seat: [0, 0.47, 0.04], info: 'Trançada à mão, range baixinho e embala qualquer preocupação.' }, (k) => {
  const V = k.c1, P = k.c2, Vd = tone(V, 0.82), ay = (x) => 1.1 - 0.34 * (x / 0.33) ** 2, az = (y) => -0.2 - (y - 0.42) * 0.36;
  for (const s of [-1, 1]) { rocker(k, s * 0.28, 1.1, 0.86, 0.018, Vd); rod(k, [s * 0.28, 0.07, 0.27], [s * 0.27, 0.4, 0.22], 0.016, V); rod(k, [s * 0.28, 0.07, -0.25], [s * 0.27, 0.4, -0.2], 0.016, V); rod(k, [s * 0.28, 0.2, -0.24], [s * 0.28, 0.2, 0.26], 0.01, Vd);
    k.tube([[s * 0.3, 0.72, az(0.72)], [s * 0.335, 0.66, -0.05], [s * 0.335, 0.62, 0.18], [s * 0.31, 0.5, 0.27], [s * 0.28, 0.4, 0.24]], 0.016, V, 6);
    for (const z of [-0.08, 0.08]) rod(k, [s * 0.29, 0.42, z], [s * 0.335, 0.64, z], 0.007, Vd, 4); }
  disc(k, 0.3, 0.05, 0, 0.385, 0.02, V, 0.02, 20); k.add2(new THREE.CylinderGeometry(0.3, 0.28, 0.1, 20, 1, true), T(0, 0.34, 0.02), Vd);
  const arch = []; for (let i = -6; i <= 6; i++) { const x = i * 0.055, y = ay(x); arch.push([x, y, az(y)]); } k.tube(arch, 0.018, V, 6);
  for (let i = -5; i <= 5; i++) { const x = i * 0.055, y = ay(x); rod(k, [x * 0.8, 0.42, -0.2], [x, y, az(y)], 0.007, i % 2 ? V : Vd, 4); }
  for (const y of [0.62, 0.84]) { const hw = 0.33 * Math.sqrt((1.1 - y) / 0.34); k.tube([[-Math.min(hw, 0.3), y, az(y) + 0.004], [0, y, az(y) + 0.012], [Math.min(hw, 0.3), y, az(y) + 0.004]], 0.009, Vd, 4); }
  puff(k, 0, 0.455, 0.03, 0.5, 0.5, 0.1, P, null, 0.85); puff(k, 0, 0.72, az(0.72) + 0.06, 0.36, 0.36, 0.1, P, RX(HP - 0.36), 0.8); tuft(k, 0, 0, 0.051, 0, 0, 1, 1, tone(P, 0.7), mul(T(0, 0.72, az(0.72) + 0.06), RX(-0.36)), 0.014);
  rock(k, 0.05, 1.4, 1.1);
});

furn({ id: 'cadeira_medalhao', name: 'Cadeira medalhão Luís XV', cat: 'Cadeiras', price: 1900, lvl: 11, w: 0.56, d: 0.58, h: 1.08, cols: [0xd9c3a0, WOOD.branco], colN: ['Tecido', 'Madeira'], seat: [0, 0.49, 0.03], info: 'Encosto oval e pernas curvas, direto de um salão francês.' }, (k) => {
  const F = k.c1, W = k.c2, Wd = tone(W, 0.88), B = mul(T(0, 0.78, -0.215), RX(-0.13));
  for (const s of [-1, 1]) { k.tube([[s * 0.2, 0.4, 0.21], [s * 0.235, 0.28, 0.24], [s * 0.21, 0.1, 0.225], [s * 0.225, 0, 0.245]], 0.02, W, 6); k.sph(0.03, s * 0.215, 0.38, 0.225, W, 1, 1.2, 1, 8); rod(k, [s * 0.19, 0.4, -0.19], [s * 0.21, 0, -0.26], 0.022, W, 8, 0, 0.014);
    rod(k, [s * 0.1, 0.42, -0.21], [s * 0.12, 0.6, -0.2], 0.018, W, 6); }
  sbox(k, 0.5, 0.07, 0.5, 0, 0.395, 0.01, W, 0.03); k.sph(0.04, 0, 0.395, 0.262, Wd, 1.6, 0.6, 0.3, 8); puff(k, 0, 0.45, 0.015, 0.47, 0.47, 0.11, F, null, 0.7);
  ring(k, 0.2, 0.026, mul(B, S(1, 1.25, 1)), W, 0, TAU, 22, 5); k.add(new THREE.SphereGeometry(0.2, 12, 8), mul(B, S(0.97, 1.22, 0.16)), F); tuft(k, 0, 0, 0.033, 0.14, 0.24, 2, 3, tone(F, 0.75), B, 0.011);
  k.sph(0.035, 0, 1.045, -0.255, Wd, 1.7, 0.8, 0.6, 8);
});

furn({ id: 'cadeira_trono', name: 'Cadeira trono de veludo', cat: 'Cadeiras', price: 6500, lvl: 15, w: 0.66, d: 0.68, h: 1.41, cols: [0x5a3f8a, METAL.ouro], colN: ['Veludo', 'Moldura'], seat: [0, 0.5, 0.04], info: 'Encosto altíssimo, capitonê e ouro: sente-se, majestade.' }, (k) => {
  const F = k.c1, G = k.c2, Gd = tone(G, 0.8), B = mul(T(0, 0.46, -0.25), RX(-0.07));
  for (const s of [-1, 1]) { k.latheS([[0.001, 0], [0.016, 0], [0.024, 0.02], [0.016, 0.05], [0.038, 0.22], [0.045, 0.3], [0.03, 0.33]], s * 0.26, 0, 0.26, G, 8); k.boxS(0.05, 0.34, 0.05, s * 0.26, 0.17, -0.27, G, RX(0.1)); }
  k.boxS(0.6, 0.08, 0.6, 0, 0.36, 0.01, G); k.sphS(0.05, 0, 0.36, 0.31, Gd, 1.8, 0.6, 0.3, 8); sbox(k, 0.54, 0.12, 0.54, 0, 0.44, 0.04, F, 0.05);
  curtain(k, 0, 0.325, 0.312, 0.56, 0.07, Gd, { amp: 0.004, n: 20 });
  k.addS(sgeo(0.58, 0.74, 0.06, 0.04), mul(B, T(0, 0.37, 0)), G); k.addS(new THREE.CylinderGeometry(0.29, 0.29, 0.06, 18, 1, false, HP, PI), mul(B, T(0, 0.72, 0), S(1, 0.5, 1), RX(HP)), G);
  k.add(sgeo(0.47, 0.64, 0.07, 0.04), mul(B, T(0, 0.39, 0.012)), F); k.add(new THREE.CylinderGeometry(0.235, 0.235, 0.07, 16, 1, false, HP, PI), mul(B, T(0, 0.69, 0.012), S(1, 0.5, 1), RX(HP)), F);
  tuft(k, 0, 0.42, 0.049, 0.3, 0.42, 3, 5, G, B, 0.012);
  k.addS(new THREE.SphereGeometry(0.05, 8, 6), mul(B, T(0, 0.9, 0), S(1.5, 1, 0.6)), Gd); for (const s of [-1, 1]) { ring(k, 0.05, 0.012, mul(B, T(s * 0.13, 0.86, 0.0), RZ(s > 0 ? -0.5 : PI - 2.1)), G, 1, 2.6, 8); k.addS(lathG([[0.001, 0], [0.02, 0], [0.032, 0.03], [0.014, 0.06], [0.022, 0.08], [0.001, 0.11]], 8), mul(B, T(s * 0.27, 0.74, 0)), G); }
  for (const s of [-1, 1]) { k.tubeS([[s * 0.28, 0.72, -0.27], [s * 0.305, 0.68, -0.05], [s * 0.305, 0.66, 0.2], [s * 0.29, 0.52, 0.28], [s * 0.27, 0.36, 0.27]], 0.02, G, 6); sbox(k, 0.06, 0.035, 0.26, s * 0.305, 0.695, 0.02, F, 0.016); }
});

// =====================================================================================================================
// ARMÁRIOS E ESTANTES
// =====================================================================================================================
// open shell of a bookcase / cabinet: sides, top, bottom, back and plinth
function carcass(k, w, h, d, W, o = {}) {
  const t = o.t ?? 0.025, pl = o.plinth ?? 0.06, Wd = tone(W, 0.86), y0 = o.y ?? 0;
  for (const s of [-1, 1]) k.box(t, h - pl, d, s * (w - t) / 2, y0 + pl + (h - pl) / 2, 0, W);
  k.box(w, t, d, 0, y0 + h - t / 2, 0, W); k.box(w - t * 2, t, d - 0.01, 0, y0 + pl + t / 2, 0, W); k.box(w - t * 2, h - pl, 0.012, 0, y0 + pl + (h - pl) / 2, -d / 2 + 0.006, o.back ?? Wd);
  if (pl) k.box(w - 0.04, pl, d - 0.04, 0, y0 + pl / 2, -0.01, Wd);
}
// stepped cornice on top of a cabinet (stays inside w x d)
function cornice(k, w, d, y, W, zc = 0) { k.box(w - 0.05, 0.03, d - 0.025, 0, y + 0.015, zc - 0.0125, tone(W, 0.9)); k.box(w - 0.02, 0.03, d - 0.01, 0, y + 0.045, zc - 0.005, W); k.box(w, 0.025, d, 0, y + 0.0725, zc, tone(W, 1.06)); }
const shoe = (k, x, y, z, c, rot, s = 1) => { k.add(sgeo(0.075 * s, 0.05 * s, 0.21 * s, 0.022 * s), mul(T(x, y + 0.03 * s, z), rot ?? new THREE.Matrix4()), c); k.add(new THREE.BoxGeometry(0.07 * s, 0.012 * s, 0.2 * s), mul(T(x, y + 0.006 * s, z), rot ?? new THREE.Matrix4()), tone(c, 0.55)); };
const pair = (k, x, y, z, c, a = 0, s = 1) => { shoe(k, x - 0.045 * s, y, z, c, RY(a), s); shoe(k, x + 0.045 * s, y, z + 0.01, c, RY(a + 0.06), s); };
const folded = (k, x, y, z, cs, w = 0.24, d = 0.26) => { cs.forEach((c, i) => k.box(w - (i % 2) * 0.01, 0.035, d, x, y + 0.0175 + i * 0.036, z, c)); };
// clothes on hangers along a rail (x0..x1) at height y
function clothes(k, x0, x1, y, z, cs, o = {}) { const n = Math.round((x1 - x0) / 0.055), r = rng(o.seed ?? 3);
  for (let i = 0; i < n; i++) { const x = x0 + (i + 0.5) * (x1 - x0) / n, len = (o.len ?? 0.6) * (0.75 + r() * 0.3), c = cs[(r() * cs.length) | 0]; k.add(new THREE.BoxGeometry(0.034, len, o.dep ?? 0.36), mul(T(x, y - 0.07 - len / 2, z), RY((r() - 0.5) * 0.16)), c); k.add(new THREE.BoxGeometry(0.03, 0.03, (o.dep ?? 0.36) * 0.6), T(x, y - 0.06, z), c); }
  k.cylS(0.012, 0.012, x1 - x0 + 0.04, (x0 + x1) / 2, y, z, METAL.cromo, 6, RZ(HP)); }
const CLO = [0xe9dcc8, 0x7f9bb5, 0xd98a6a, 0x8fa88a, 0xe6c3cb, 0x4f5f7a, 0xd9b45b, 0xf4efe6, 0xa85a5a, 0x6f8f8a];
const basket = (k, x, y, z, w, h, d, c = STRAW) => { sbox(k, w, h, d, x, y + h / 2, z, c, 0.03); for (let i = 1; i < 4; i++) k.box(w + 0.004, 0.007, d + 0.004, x, y + i * h / 4, z, tone(c, 0.78)); k.box(w - 0.04, 0.01, d - 0.04, x, y + h - 0.004, z, tone(c, 0.55)); };

furn({ id: 'guarda_roupa_simples', name: 'Guarda-roupa simples', cat: 'Armários e estantes', price: 220, lvl: 1, w: 0.9, d: 0.5, h: 1.84, cols: [WOOD.pinho, METAL.ferro], colN: ['Madeira', 'Puxadores'], info: 'Duas portas de pinho para começar a organizar a vida.' }, (k) => {
  const W = k.c1, Wd = tone(W, 0.86);
  k.box(0.84, 0.07, 0.4, 0, 0.035, -0.03, Wd); k.box(0.9, 1.72, 0.44, 0, 0.93, -0.03, W); k.box(0.9, 0.035, 0.47, 0, 1.8075, -0.015, tone(W, 1.06));
  for (const s of [-1, 1]) door(k, s * 0.2225, 0.93, 0.19, 0.435, 1.68, tone(W, 1.05), { hs: -s, hc: k.c2, hstyle: 'vbar', hl: 0.16 });
});

furn({ id: 'comoda_simples', name: 'Cômoda simples', cat: 'Armários e estantes', price: 150, lvl: 1, w: 0.9, d: 0.45, h: 0.8, surf: 0.8, cols: [WOOD.pinho, METAL.ferro], colN: ['Madeira', 'Puxadores'], info: 'Três gavetas fundas para as roupas dobradinhas.' }, (k) => {
  const W = k.c1, Wd = tone(W, 0.86);
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) k.box(0.05, 0.11, 0.05, sx * 0.4, 0.055, -0.02 + sz * 0.16, Wd);
  k.box(0.88, 0.67, 0.38, 0, 0.445, -0.02, W); k.box(0.9, 0.025, 0.43, 0, 0.7875, -0.005, tone(W, 1.06));
  for (let j = 0; j < 3; j++) drawer(k, 0, 0.225 + j * 0.22, 0.17, 0.82, 0.2, tone(W, 1.07), k.c2);
});

furn({ id: 'estante_simples', name: 'Estante simples', cat: 'Armários e estantes', price: 130, lvl: 1, w: 0.8, d: 0.3, h: 1.5, surf: 1.5, cols: [WOOD.pinho, 0xa9c4c0], colN: ['Madeira', 'Fundo'], info: 'Quatro prateleiras e os primeiros livros da casa.' }, (k) => {
  const W = k.c1;
  carcass(k, 0.8, 1.5, 0.3, W, { back: k.c2 }); for (const y of [0.43, 0.77, 1.11]) k.box(0.75, 0.022, 0.27, 0, y, 0.005, W);
  books(k, -0.36, 0.1, 1.121, 0.1, 41, { h: 0.26 }); vase(k, 0.24, 1.121, 0.02, 0xd98a6a, 1.1);
  books(k, -0.2, 0.36, 0.781, 0.1, 42, { h: 0.25 }); pile(k, -0.28, 0.781, 0.0, 43, 2);
  books(k, -0.36, -0.05, 0.441, 0.1, 44, { h: 0.27 }); sbox(k, 0.3, 0.2, 0.22, 0.19, 0.541, 0.0, tone(k.c2, 0.8), 0.02); k.boxS(0.08, 0.03, 0.004, 0.19, 0.57, 0.111, METAL.latao);
  basket(k, 0, 0.097, 0.0, 0.6, 0.24, 0.24);
});

furn({ id: 'bau', name: 'Baú de madeira', cat: 'Armários e estantes', price: 190, lvl: 2, w: 0.9, d: 0.52, h: 0.56, cols: [WOOD.nogueira, METAL.latao], colN: ['Madeira', 'Ferragens'], info: 'Tampa abaulada, cintas de metal e cheiro de lembranças.' }, (k) => {
  const W = k.c1, M = k.c2, Wd = tone(W, 0.85);
  k.box(0.84, 0.03, 0.44, 0, 0.015, 0, Wd); for (let j = 0; j < 3; j++) k.box(0.88, 0.108, 0.48, 0, 0.085 + j * 0.11, 0, j % 2 ? tone(W, 1.06) : W);
  k.add(new THREE.CylinderGeometry(0.24, 0.24, 0.88, 14, 1, false, 0, PI), mul(T(0, 0.36, 0), S(1, 0.75, 1), RZ(HP)), tone(W, 1.04));
  for (const x of [-0.3, 0.3]) { k.boxS(0.05, 0.33, 0.49, x, 0.195, 0, M); k.addS(new THREE.CylinderGeometry(0.245, 0.245, 0.05, 14, 1, false, 0, PI), mul(T(x, 0.36, 0), S(1, 0.75, 1), RZ(HP)), M); }
  for (const s of [-1, 1]) { k.boxS(0.008, 0.05, 0.14, s * 0.442, 0.25, 0, M); ring(k, 0.045, 0.008, mul(T(s * 0.447, 0.24, 0), RY(HP), RZ(PI)), M, 1, PI, 8); }
  k.boxS(0.09, 0.11, 0.012, 0, 0.33, 0.246, M); k.cylS(0.012, 0.012, 0.016, 0, 0.31, 0.25, DARK, 8, RX(HP)); k.boxS(0.89, 0.012, 0.49, 0, 0.36, 0, M);
});

furn({ id: 'cabideiro', name: 'Cabideiro de pé', cat: 'Armários e estantes', price: 170, lvl: 2, w: 0.66, d: 0.66, h: 1.82, cols: [WOOD.nogueira, 0x6f8fa8], colN: ['Madeira', 'Casaco'], info: 'Com o chapéu de palha e o casaco sempre à espera na entrada.' }, (k) => {
  const W = k.c1, C = k.c2;
  k.cyl(0.022, 0.03, 1.7, 0, 0.9, 0, W, 8); k.sph(0.04, 0, 1.77, 0, tone(W, 0.9), 1, 1.2, 1, 8);
  for (let i = 0; i < 4; i++) { const a = i * HP + 0.785, s = Math.sin(a), c = Math.cos(a); k.tube([[s * 0.02, 0.32, c * 0.02], [s * 0.12, 0.14, c * 0.12], [s * 0.26, 0.03, c * 0.26]], 0.02, W, 5); k.sph(0.026, s * 0.26, 0.026, c * 0.26, tone(W, 0.9), 1, 1, 1, 6); }
  for (let i = 0; i < 6; i++) { const a = i * TAU / 6, s = Math.sin(a), c = Math.cos(a), y = i % 2 ? 1.58 : 1.44; rod(k, [s * 0.02, y, c * 0.02], [s * 0.11, y + 0.02, c * 0.11], 0.011, W, 5); rod(k, [s * 0.11, y + 0.02, c * 0.11], [s * 0.15, y + 0.09, c * 0.15], 0.011, W, 5); k.sph(0.018, s * 0.15, y + 0.095, c * 0.15, tone(W, 0.9), 1, 1, 1, 6); }
  // coat on the front hook, straw hat on a side hook, scarf
  sbox(k, 0.36, 0.72, 0.1, 0, 1.12, 0.13, C, 0.04); for (const s of [-1, 1]) sbox(k, 0.09, 0.56, 0.09, s * 0.21, 1.14, 0.12, tone(C, 0.92), 0.035, RZ(s * 0.08)); k.box(0.012, 0.6, 0.004, 0, 1.08, 0.181, tone(C, 0.7)); for (let i = 0; i < 4; i++) k.add(new THREE.CircleGeometry(0.012, 6), T(0.03, 0.88 + i * 0.14, 0.1815), tone(C, 0.55));
  sbox(k, 0.2, 0.07, 0.06, 0, 1.47, 0.15, tone(C, 0.8), 0.025);
  k.add2(lathG([[0.2, 0], [0.09, 0.012], [0.085, 0.07], [0.06, 0.1], [0.001, 0.105]], 16), mul(T(-0.15, 1.66, -0.09), RZ(0.5), RX(-0.3)), STRAW); ring(k, 0.088, 0.012, mul(T(-0.15, 1.66, -0.09), RZ(0.5), RX(-0.3), T(0, 0.025, 0), RX(HP)), 0xb5533c, 0, TAU, 14);
  sbox(k, 0.07, 0.6, 0.03, 0.13, 1.28, -0.11, 0xd9a441, 0.012, RZ(-0.05)); sbox(k, 0.07, 0.4, 0.03, 0.16, 1.4, -0.14, 0xd9a441, 0.012, RZ(0.08));
});

furn({ id: 'sapateira', name: 'Sapateira com banquinho', cat: 'Armários e estantes', price: 260, lvl: 3, w: 0.8, d: 0.34, h: 0.58, surf: 0.5, cols: [WOOD.mel, 0x8fae9a], colN: ['Madeira', 'Almofada'], seat: [0.18, 0.55, 0], info: 'Senta, calça o sapato e sai: tudo organizado na entrada.' }, (k) => {
  const W = k.c1, Wd = tone(W, 0.86);
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) k.box(0.04, 0.5, 0.04, sx * 0.38, 0.25, sz * 0.15, W);
  k.box(0.8, 0.03, 0.34, 0, 0.485, 0, tone(W, 1.06)); for (const y of [0.08, 0.27]) for (let i = 0; i < 4; i++) k.box(0.74, 0.016, 0.06, 0, y, -0.12 + i * 0.08, Wd);
  sbox(k, 0.42, 0.05, 0.32, 0.18, 0.525, 0, k.c2, 0.022);
  pair(k, -0.22, 0.088, 0.0, 0x8a5a3c, 0.05); pair(k, 0.04, 0.088, 0.0, 0xd9584a, -0.04); pair(k, 0.26, 0.088, 0.0, 0x3f4f6a, 0.02, 0.95);
  pair(k, -0.2, 0.278, 0.0, 0xf2e6d0, -0.03, 0.9); pair(k, 0.2, 0.278, 0, 0xd9a441, 0.04, 0.9);
  for (const s of [-1, 1]) { k.add(sgeo(0.08, 0.2, 0.09, 0.025), T(0.0 + s * 0.05, 0.378, -0.06), 0x4f6f52); k.add(sgeo(0.075, 0.06, 0.2, 0.025), T(0.0 + s * 0.05, 0.308, 0.0), 0x4f6f52); }  // rubber boots for the garden
  basket(k, -0.24, 0.5, 0, 0.24, 0.07, 0.24);
});

furn({ id: 'gaveteiro', name: 'Gaveteiro', cat: 'Armários e estantes', price: 340, lvl: 4, w: 0.5, d: 0.45, h: 1.1, surf: 1.1, cols: [WOOD.branco, WOOD.mel], colN: ['Corpo', 'Gavetas'], info: 'Alto e estreito, com cinco gavetas para as miudezas.' }, (k) => {
  const W = k.c1, D = k.c2;
  splay(k, 0.36, 0.3, 0.12, D, { r: 0.02, a: 0.14, y: 0 }); sbox(k, 0.5, 0.96, 0.4, 0, 0.6, -0.02, W, 0.02); k.box(0.5, 0.02, 0.43, 0, 1.09, -0.005, tone(W, 0.95));
  for (let j = 0; j < 5; j++) { k.box(0.43, 0.165, 0.018, 0, 0.225 + j * 0.185, 0.189, j % 2 ? tone(D, 1.06) : D); k.add(new THREE.CylinderGeometry(0.035, 0.035, 0.02, 10, 1, false, HP, PI), mul(T(0, 0.3 + j * 0.185, 0.199), RX(HP)), tone(W, 0.8)); }
});

furn({ id: 'estante_nichos', name: 'Estante de nichos', cat: 'Armários e estantes', price: 540, lvl: 5, w: 1.2, d: 0.36, h: 1.22, surf: 1.22, cols: [WOOD.branco, 0xd9a05b], colN: ['Madeira', 'Caixas'], info: 'Nove nichos: livros, caixas coloridas, um globo e o que mais couber.' }, (k) => {
  const W = k.c1, C = k.c2, s = 0.385, y0 = 0.045;
  k.box(1.14, 0.045, 0.32, 0, 0.0225, 0, tone(W, 0.8)); k.box(1.2, 1.17, 0.012, 0, y0 + 0.585, -0.174, tone(W, 0.9));
  for (let i = 0; i < 4; i++) { k.box(0.025, 1.175, 0.36, -0.5875 + i * 0.3917, y0 + 0.5875, 0, W); k.box(1.2, 0.025, 0.36, 0, y0 + 0.0125 + i * 0.3833, 0, W); }
  const X = (i) => -0.3917 + i * 0.3917, Y = (j) => y0 + 0.025 + j * 0.3833, bin = (i, j, c) => { sbox(k, 0.33, 0.3, 0.3, X(i), Y(j) + 0.15, 0.02, c, 0.025); k.box(0.1, 0.03, 0.006, X(i), Y(j) + 0.2, 0.172, tone(c, 0.6)); };
  bin(0, 0, C); bin(2, 0, tone(C, 0.8)); bin(1, 1, mixHex(C, 0x5d8a8a, 0.8));
  books(k, X(1) - 0.16, X(1) + 0.16, Y(0), 0.12, 51, { h: 0.27 }); books(k, X(0) - 0.16, X(0) + 0.08, Y(2), 0.12, 52, { h: 0.26 }); books(k, X(2) - 0.16, X(2) + 0.16, Y(1), 0.12, 53, { h: 0.24, gap: 0.2 });
  pile(k, X(0), Y(1), 0.02, 54, 4, 1.1); vase(k, X(0) + 0.02, Y(1) + 0.14, 0.02, 0x7fa0b5, 0.8);
  k.cylS(0.05, 0.06, 0.012, X(1), Y(2) + 0.006, 0.02, METAL.latao, 10); k.cylS(0.005, 0.005, 0.26, X(1), Y(2) + 0.13, 0.02, METAL.latao, 5, RZ(0.4)); k.sph(0.095, X(1), Y(2) + 0.135, 0.02, 0x5f9ab5, 1, 1, 1, 12); for (const [a, b, r] of [[0.5, 0.3, 0.04], [2.2, -0.2, 0.05], [4, 0.4, 0.035]]) k.sph(r, X(1) + Math.sin(a) * Math.cos(b) * 0.066, Y(2) + 0.135 + Math.sin(b) * 0.066, 0.02 + Math.cos(a) * Math.cos(b) * 0.066, 0x7fae5a, 1, 1, 1, 6);
  k.box(0.16, 0.2, 0.015, X(2) - 0.05, Y(2) + 0.1, -0.02, 0x8a6a4a, RX(-0.15)); k.box(0.12, 0.16, 0.004, X(2) - 0.05, Y(2) + 0.1, -0.01, 0xcfe0d0, RX(-0.15)); k.latheS([[0.001, 0], [0.04, 0], [0.05, 0.05], [0.03, 0.11], [0.04, 0.13]], X(2) + 0.1, Y(2), 0.05, tone(C, 1.1), 10);
});

furn({ id: 'estante_escada', name: 'Estante-escada', cat: 'Armários e estantes', price: 430, lvl: 5, w: 0.7, d: 0.5, h: 1.9, cols: [WOOD.mel, 0xf4efe6], colN: ['Madeira', 'Prateleiras'], info: 'Encostada na parede, cada degrau guarda um pedacinho da casa.' }, (k) => {
  const W = k.c1, P = k.c2, a = 0.2, zAt = (y) => 0.2 - (y / 1.8) * 0.4;
  for (const s of [-1, 1]) { rod(k, [s * 0.33, 0, 0.2], [s * 0.33, 1.8, -0.2], 0.02, W, 4); k.box(0.035, 1.8, 0.025, s * 0.33, 0.9, -0.215, tone(W, 0.9)); }
  const sh = [[0.2, 0.4], [0.58, 0.33], [0.96, 0.26], [1.34, 0.19], [1.68, 0.12]];
  for (const [y, d] of sh) { k.box(0.62, 0.022, d, 0, y, -0.23 + d / 2, P); k.box(0.62, 0.05, 0.015, 0, y + 0.02, -0.23 + d, W); for (const s of [-1, 1]) k.box(0.015, 0.05, d, s * 0.305, y + 0.02, -0.23 + d / 2, W); }
  basket(k, -0.12, 0.211, -0.03, 0.3, 0.2, 0.28); pile(k, 0.19, 0.211, -0.03, 61, 4, 1.05);
  books(k, -0.28, 0.1, 0.591, 0.02, 62, { h: 0.25 }); vase(k, 0.2, 0.591, -0.08, 0xc97b63, 1.1);
  books(k, -0.05, 0.28, 0.971, -0.04, 63, { h: 0.24 }); k.box(0.14, 0.18, 0.014, -0.17, 1.06, -0.1, 0x8a6a4a, RX(-0.15)); k.box(0.1, 0.14, 0.004, -0.17, 1.06, -0.091, 0xe6d3b0, RX(-0.15));
  lamp(k, -0.14, 1.351, -0.13, METAL.latao, CREAM, 0.9); pile(k, 0.14, 1.351, -0.13, 64, 2, 0.9);
  k.latheS([[0.001, 0], [0.04, 0], [0.055, 0.05], [0.05, 0.1], [0.055, 0.11]], 0.0, 1.691, -0.17, 0x7fa0a5, 10); k.sph(0.05, 0, 1.83, -0.17, 0x6f9a5a, 1, 0.8, 1, 7); k.sph(0.035, 0.04, 1.86, -0.15, 0x7fae5a, 1, 0.8, 1, 6);
});

furn({ id: 'comoda_5_gavetas', name: 'Cômoda de 5 gavetas', cat: 'Armários e estantes', price: 720, lvl: 6, w: 1.1, d: 0.5, h: 1.02, surf: 1.02, cols: [WOOD.nogueira, METAL.latao], colN: ['Madeira', 'Puxadores'], info: 'Duas gavetinhas em cima, três gavetões embaixo e pés torneados.' }, (k) => {
  const W = k.c1, Wd = tone(W, 0.85);
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) turned(k, sx * 0.49, -0.02 + sz * 0.185, 0.14, 0.045, W, 0, 8, BUN);
  k.box(1.06, 0.83, 0.43, 0, 0.555, -0.02, W); k.box(1.08, 0.03, 0.45, 0, 0.14, -0.01, Wd); k.box(1.1, 0.03, 0.48, 0, 1.005, -0.005, tone(W, 1.06)); k.box(1.08, 0.02, 0.46, 0, 0.98, -0.01, Wd);
  for (let j = 0; j < 3; j++) drawer(k, 0, 0.275 + j * 0.225, 0.195, 0.98, 0.2, tone(W, 1.07), k.c2, 'cup'); for (const s of [-1, 1]) drawer(k, s * 0.25, 0.885, 0.195, 0.48, 0.14, tone(W, 1.07), k.c2, 'cup');
  for (let j = 0; j < 3; j++) k.addS(new THREE.CircleGeometry(0.012, 6), T(0, 0.275 + j * 0.225, 0.2135), k.c2);
});

furn({ id: 'estante_alta', name: 'Estante alta de livros', cat: 'Armários e estantes', price: 920, lvl: 7, w: 1.0, d: 0.43, h: 2.1, cols: [WOOD.carvalho, 0x5a6f5a], colN: ['Madeira', 'Fundo'], info: 'Do chão ao teto, cheia de histórias para as noites de chuva.' }, (k) => {
  const W = k.c1;
  carcass(k, 1.0, 2.0, 0.34, W, { back: k.c2, plinth: 0.08 }); cornice(k, 1.0, 0.36, 2.0, W, 0.01);
  const ys = [0.55, 0.9, 1.24, 1.58]; for (const y of ys) k.box(0.95, 0.024, 0.31, 0, y, 0.005, W);
  for (const s of [-1, 1]) door(k, s * 0.2375, 0.325, 0.17, 0.47, 0.42, tone(W, 1.05), { hs: -s, hy: 0.1 });
  books(k, -0.46, 0.46, 0.562, 0.11, 71, { h: 0.3 }); books(k, -0.46, 0.2, 0.912, 0.11, 72, { h: 0.29 }); vase(k, 0.34, 0.912, 0.02, 0xc9a070, 1.1);
  books(k, -0.2, 0.46, 1.252, 0.11, 73, { h: 0.29 }); pile(k, -0.33, 1.252, 0.01, 74, 3, 1.1); books(k, -0.46, 0.46, 1.592, 0.11, 75, { h: 0.3, gap: 0.12 });
});

furn({ id: 'guarda_roupa_3_portas', name: 'Guarda-roupa de 3 portas com espelho', cat: 'Armários e estantes', price: 1750, lvl: 9, w: 1.6, d: 0.6, h: 2.1, cols: [WOOD.branco, METAL.latao], colN: ['Madeira', 'Puxadores'], info: 'Espaço de sobra e um espelho de corpo inteiro na porta do meio.' }, (k) => {
  const W = k.c1, Wd = tone(W, 0.88);
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) turned(k, sx * 0.72, -0.03 + sz * 0.22, 0.1, 0.045, W, 0, 8, BUN);
  k.box(1.56, 1.9, 0.52, 0, 1.05, -0.03, W); cornice(k, 1.6, 0.58, 2.0, W, -0.01); k.box(1.58, 0.03, 0.54, 0, 0.115, -0.02, Wd);
  for (const i of [-1, 0, 1]) door(k, i * 0.51, 1.3, 0.23, 0.5, 1.36, tone(W, 1.03), i ? { hs: -i, hy: -0.2, hc: k.c2, hstyle: 'vbar', pc: tone(W, 0.96) } : { mirror: 1, fw: 0.04 });
  for (const s of [-1, 1]) drawer(k, s * 0.385, 0.37, 0.23, 0.74, 0.42, tone(W, 1.03), k.c2, 'cup'); k.boxS(0.012, 0.14, 0.012, 0.215, 1.1, 0.26, k.c2);
});

furn({ id: 'cristaleira', name: 'Cristaleira', cat: 'Armários e estantes', price: 2500, lvl: 10, w: 1.0, d: 0.44, h: 1.92, surf: 0.86, cols: [WOOD.mogno, 0xf2e6d8], colN: ['Madeira', 'Louças'], info: 'Portas de vidro para exibir as louças de festa da família.' }, (k) => {
  const W = k.c1, P = k.c2, Wd = tone(W, 0.85), G = METAL.latao;
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) turned(k, sx * 0.44, -0.02 + sz * 0.16, 0.12, 0.04, W, 0, 8, BUN);
  k.box(0.98, 0.7, 0.4, 0, 0.47, -0.02, W); k.box(1.0, 0.03, 0.44, 0, 0.845, 0, tone(W, 1.06)); for (const s of [-1, 1]) door(k, s * 0.235, 0.47, 0.18, 0.46, 0.62, tone(W, 1.05), { hs: -s, hy: 0.1, hc: G });
  carcass(k, 0.92, 0.96, 0.3, W, { y: 0.86, plinth: 0, back: tone(W, 1.25) }); cornice(k, 0.98, 0.35, 1.82, W, -0.045 + 0.02);
  for (const y of [1.2, 1.5]) k.glass(new THREE.BoxGeometry(0.87, 0.008, 0.26), T(0, y, -0.05), 0xd8eef2, 0.4);
  for (const s of [-1, 1]) door(k, s * 0.22, 1.34, 0.105, 0.44, 0.92, tone(W, 1.05), { glass: 1, fw: 0.045, hs: -s, hc: G }); k.box(0.92, 0.96, 0.001, 0, 1.34, -0.2, W);
  const z = -0.07; for (const x of [-0.3, 0, 0.3]) { k.addS(lathG([[0.001, 0], [0.05, 0], [0.09, 0.012], [0.09, 0.018], [0.05, 0.008], [0.001, 0.008]], 12), mul(T(x, 1.6, z - 0.06), RX(HP - 0.25)), P); ring(k, 0.07, 0.004, mul(T(x, 1.6 + 0.004, z - 0.045), RX(-0.25)), G, 1, TAU, 12, 3); }
  for (const x of [-0.26, 0.26]) { k.latheS([[0.001, 0], [0.04, 0], [0.065, 0.04], [0.06, 0.09], [0.035, 0.11], [0.04, 0.12]], x, 1.204, z, P, 10); k.sphS(0.012, x, 1.335, z, G, 1, 1, 1, 6); k.cylS(0.036, 0.036, 0.012, x, 1.326, z, P, 8); k.tubeS([[x + 0.06, 1.25, z], [x + 0.11, 1.27, z], [x + 0.12, 1.31, z]], 0.008, P, 4); ring(k, 0.03, 0.007, T(x - 0.085, 1.26, z), P, 1, TAU, 8, 3); }
  for (const x of [-0.08, 0.02, 0.12]) cup(k, x, 1.204, z + 0.03 * (x > 0 ? 1 : -1), P, 0.9); for (const x of [-0.3, -0.1, 0.1, 0.3]) { k.latheS([[0.001, 0], [0.025, 0], [0.006, 0.02], [0.006, 0.07], [0.03, 0.1], [0.034, 0.14]], x, 0.884, z, 0xdff0f4, 8); }
  for (const x of [-0.2, 0.2]) plate(k, x, 0.884, z + 0.09, P, 0.07);
  k.glow(new THREE.BoxGeometry(0.8, 0.012, 0.02), 0xffe6b8, 1.8, { at: [0, 1.79, 0.06] });
});

furn({ id: 'armario_colonial', name: 'Armário colonial', cat: 'Armários e estantes', price: 3700, lvl: 12, w: 1.3, d: 0.56, h: 2.14, cols: [WOOD.mogno, METAL.ferro], colN: ['Madeira', 'Ferragens'], info: 'Madeira maciça de fazenda, almofadas em losango e chave na porta.' }, (k) => {
  const W = k.c1, M = k.c2, Wd = tone(W, 0.84), Wl = tone(W, 1.08), zf = 0.2;
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) turned(k, sx * 0.58, -0.03 + sz * 0.2, 0.14, 0.055, W, 0, 8, BUN);
  k.box(1.24, 1.78, 0.46, 0, 1.03, -0.03, W); k.box(1.28, 0.04, 0.5, 0, 0.15, -0.01, Wd); cornice(k, 1.3, 0.54, 1.92, W, -0.01); crest(k, 0, 2.0, -0.01 + 0.1, 0.52, 0.26, 0.3, W, 18); crest(k, 0, 2.0, 0.245, 0.4, 0.22, 0.012, Wl, 14); k.sph(0.04, 0, 2.06, 0.25, Wd, 1.4, 1, 0.5, 8);
  for (const s of [-1, 1]) { const x = s * 0.3; door(k, x, 1.2, zf, 0.58, 1.34, W, { pc: Wd, fw: 0.07, mid: 0 });
    for (const y of [0.895, 1.505]) { k.add(new THREE.ConeGeometry(0.21, 0.03, 4), mul(T(x, y, zf + 0.012), S(1, 1.2, 1), RX(HP), RY(PI / 4)), Wl); }
    for (const y of [0.7, 1.2, 1.7]) { k.boxS(0.14, 0.03, 0.006, s * 0.51, y, zf + 0.022, M); k.cylS(0.012, 0.012, 0.07, s * 0.595, y, zf + 0.022, M, 6); }
    k.boxS(0.04, 0.12, 0.008, s * 0.05, 1.2, zf + 0.023, M); ring(k, 0.022, 0.005, T(s * 0.05, 1.16, zf + 0.03), M, 1, TAU, 8, 3); }
  k.boxS(0.006, 0.05, 0.02, 0.05, 1.23, zf + 0.04, METAL.latao); ring(k, 0.014, 0.004, mul(T(0.05, 1.23, zf + 0.06), RY(HP)), METAL.latao, 1, TAU, 8, 3);
  drawer(k, 0, 0.34, zf, 1.16, 0.26, Wl, M, 'cup'); k.box(1.0, 0.16, 0.008, 0, 0.34, zf + 0.02, W);
});

furn({ id: 'biblioteca', name: 'Biblioteca de parede com escada', cat: 'Armários e estantes', price: 9200, lvl: 15, w: 2.4, d: 0.8, h: 2.62, cols: [WOOD.nogueira, 0x2f4a3f], colN: ['Madeira', 'Fundo'], info: 'Uma parede inteira de livros e uma escada de correr para alcançá-los.' }, (k) => {
  const W = k.c1, Wd = tone(W, 0.84), Wl = tone(W, 1.07), G = METAL.latao, zc = -0.22, D = 0.36, zf = zc + D / 2;
  k.box(2.36, 0.08, D - 0.04, 0, 0.04, zc - 0.01, Wd); k.box(2.4, 2.46, 0.012, 0, 1.31, zc - D / 2 + 0.006, k.c2);
  for (let i = 0; i < 4; i++) k.box(0.035, 2.46, D, -1.1825 + i * 0.7883, 1.31, zc, W); for (const y of [0.095, 0.7, 2.525]) k.box(2.4, 0.03, D, 0, y, zc, W);
  k.box(2.4, 0.03, D + 0.03, 0, 0.73, zc + 0.015, Wl); cornice(k, 2.4, D + 0.04, 2.54, W, zc + 0.02);
  for (let b = 0; b < 3; b++) { const x = -0.7883 + b * 0.7883;
    for (const s of [-1, 1]) door(k, x + s * 0.188, 0.4, zf, 0.372, 0.57, Wl, { hs: -s, hy: 0.12, hc: G, pc: W });
    [1.07, 1.42, 1.77, 2.12].forEach((y) => k.box(0.76, 0.024, D - 0.03, x, y, zc, W));
    [0.745, 1.082, 1.432, 1.782, 2.132].forEach((y, j) => { const sd = b * 10 + j + 80, m = (b + j) % 4;
      if (m === 1) { books(k, x - 0.36, x + 0.08, y, zf - 0.04, sd, { h: 0.29, bw: 1.5 }); vase(k, x + 0.24, y, zc, [0xc97b63, 0x7fa0b5, 0xd9b45b][j % 3], 1.1); }
      else if (m === 3) { books(k, x - 0.1, x + 0.36, y, zf - 0.04, sd, { h: 0.29, bw: 1.5 }); pile(k, x - 0.24, y, zc, sd + 3, 3, 1.1); }
      else books(k, x - 0.36, x + 0.36, y, zf - 0.04, sd, { h: j === 0 ? 0.3 : 0.29, bw: 1.5, gap: 0.03 }); });
    k.tubeS([[x, 2.5, zf], [x, 2.53, zf + 0.09], [x, 2.47, zf + 0.13]], 0.008, G, 4); k.add2(new THREE.CylinderGeometry(0.03, 0.03, 0.22, 8, 1, true, 0, PI), mul(T(x, 2.47, zf + 0.13), RZ(HP)), G);
    k.glow(new THREE.BoxGeometry(0.2, 0.012, 0.03), 0xffe2b0, 2.4, { at: [x, 2.462, zf + 0.13] }); }
  // rolling ladder on a brass rail
  k.cylS(0.012, 0.012, 2.34, 0, 2.2, zf + 0.05, G, 6, RZ(HP)); for (const x of [-1.15, -0.39, 0.39, 1.15]) k.boxS(0.02, 0.02, 0.06, x, 2.2, zf + 0.025, G);
  const lx = 0.56, top = [2.2, zf + 0.06], bot = [0.0, 0.37], lp = (t) => [bot[0] + (top[0] - bot[0]) * t, bot[1] + (top[1] - bot[1]) * t];
  for (const s of [-1, 1]) { rod(k, [lx + s * 0.2, bot[0], bot[1]], [lx + s * 0.2, top[0] + 0.06, top[1] - 0.012], 0.022, Wl, 4); k.cylS(0.025, 0.025, 0.02, lx + s * 0.2, 0.025, bot[1] + 0.005, DARK, 8, RZ(HP)); k.boxS(0.03, 0.05, 0.05, lx + s * 0.2, 2.2, zf + 0.05, G); }
  for (let i = 1; i <= 7; i++) { const [y, z] = lp(i / 8.2); k.box(0.4, 0.022, 0.09, lx, y, z, W); }
});

furn({ id: 'closet_luxo', name: 'Closet de luxo iluminado', cat: 'Armários e estantes', price: 15500, lvl: 18, w: 2.6, d: 0.62, h: 2.4, cols: [WOOD.branco, 0xd9c7b0], colN: ['Madeira', 'Fundo'], info: 'Roupas por cor, sapatos em fila, bolsas e luz em cada prateleira.' }, (k) => {
  const W = k.c1, Wd = tone(W, 0.88), G = METAL.ouro, D = 0.56, zc = -0.03, zf = zc + D / 2, LED = (x, y, w) => k.glow(new THREE.BoxGeometry(w, 0.01, 0.02), 0xffe8c0, 2.2, { at: [x, y, zf - 0.05], day: 0.35 });
  k.box(2.56, 0.07, D - 0.04, 0, 0.035, zc - 0.01, Wd); k.box(2.6, 2.26, 0.012, 0, 1.2, zc - D / 2 + 0.006, k.c2); cornice(k, 2.6, D + 0.04, 2.32, W, zc + 0.02);
  for (let i = 0; i < 4; i++) k.box(0.03, 2.26, D, -1.285 + i * 0.8567, 1.2, zc, W); for (const y of [0.085, 2.315]) k.box(2.6, 0.03, D, 0, y, zc, W);
  const X = (b) => -0.8567 + b * 0.8567, shelf = (b, y) => { k.box(0.83, 0.024, D - 0.04, X(b), y, zc - 0.01, W); LED(X(b), y - 0.018, 0.7); };
  // left bay: shirts above, drawers below
  shelf(0, 2.0); clothes(k, X(0) - 0.37, X(0) + 0.37, 1.9, zc, CLO, { len: 0.62, seed: 5 }); shelf(0, 0.98);
  for (let j = 0; j < 4; j++) { drawer(k, X(0), 0.2 + j * 0.215, zf - 0.02, 0.81, 0.195, tone(W, 1.03), G, 'bar'); }
  folded(k, X(0) - 0.22, 2.012, zc, [0xe9dcc8, 0x7f9bb5, 0xe6c3cb]); folded(k, X(0) + 0.08, 2.012, zc, [0x8fa88a, 0xf4efe6]); sbox(k, 0.22, 0.2, 0.3, X(0) + 0.27, 2.112, zc, 0xe6c3cb, 0.02); k.box(0.225, 0.03, 0.305, X(0) + 0.27, 2.19, zc, 0xd9a5b0);
  // middle bay: shelves with folded clothes, bags, hat box and a mirror
  for (const y of [0.5, 0.86, 1.22, 1.9]) shelf(1, y); LED(X(1), 2.29, 0.7);
  mirror(k, new THREE.PlaneGeometry(0.5, 0.56), T(X(1), 1.56, zc - D / 2 + 0.03)); for (const s of [-1, 1]) { k.boxS(0.02, 0.6, 0.02, X(1) + s * 0.26, 1.56, zc - D / 2 + 0.025, G); k.boxS(0.54, 0.02, 0.02, X(1), 1.56 + s * 0.29, zc - D / 2 + 0.025, G); }
  folded(k, X(1) - 0.24, 0.872, zc, [0x4f5f7a, 0x7f9bb5, 0xd9b45b, 0xf4efe6]); folded(k, X(1) + 0.04, 0.872, zc, [0xa85a5a, 0xe9dcc8, 0x8fa88a]); folded(k, X(1) + 0.3, 0.872, zc, [0xf4efe6, 0xe6c3cb], 0.2);
  for (const [x, c, s] of [[-0.24, 0xc9705a, 1], [0.02, 0x4f5f4a, 0.85], [0.26, 0xd9b45b, 0.95]]) { sbox(k, 0.2 * s, 0.16 * s, 0.09, X(1) + x, 1.232 + 0.08 * s, zc + 0.05, c, 0.03); ring(k, 0.06 * s, 0.008, T(X(1) + x, 1.232 + 0.16 * s, zc + 0.05), tone(c, 0.7), 0, PI, 8, 3); k.boxS(0.03, 0.03, 0.006, X(1) + x, 1.232 + 0.11 * s, zc + 0.097, G); }
  k.cyl(0.14, 0.14, 0.14, X(1) - 0.2, 1.982, zc, 0xe6c3cb, 14); k.cyl(0.146, 0.146, 0.03, X(1) - 0.2, 2.055, zc, 0xd9a5b0, 14); k.add2(lathG([[0.17, 0], [0.08, 0.012], [0.075, 0.08], [0.001, 0.09]], 14), T(X(1) + 0.18, 1.915, zc), STRAW); ring(k, 0.079, 0.012, mul(T(X(1) + 0.18, 1.94, zc), RX(HP)), 0x3f4f6a, 0, TAU, 12);
  pair(k, X(1) - 0.26, 0.512, zc + 0.05, 0xd9584a); pair(k, X(1), 0.512, zc + 0.05, 0xf2e6d0); pair(k, X(1) + 0.26, 0.512, zc + 0.05, 0x3f4f6a);
  pair(k, X(1) - 0.26, 0.1, zc + 0.05, 0x8a5a3c); pair(k, X(1), 0.1, zc + 0.05, 0xd9a441); pair(k, X(1) + 0.26, 0.1, zc + 0.05, 0x26242a);
  // right bay: long dresses and boots
  shelf(2, 2.0); clothes(k, X(2) - 0.37, X(2) + 0.37, 1.9, zc, [0xe6c3cb, 0xc9584a, 0x4f5f7a, 0xf4efe6, 0x6f8f8a, 0xd9b45b, 0x8a5a8a], { len: 1.25, seed: 9 });
  for (const [x, c] of [[-0.25, 0x6a4a34], [0.05, 0x26242a]]) for (const s of [-1, 1]) { k.box(0.075, 0.34, 0.085, X(2) + x + s * 0.05, 0.27, zc - 0.03, c); k.add(sgeo(0.078, 0.07, 0.22, 0.025), T(X(2) + x + s * 0.05, 0.135, zc + 0.03), c); }
  sbox(k, 0.3, 0.12, 0.32, X(2) - 0.2, 2.072, zc, 0xd9c7b0, 0.015); sbox(k, 0.26, 0.1, 0.3, X(2) - 0.2, 2.18, zc, 0xc9a5a0, 0.015); sbox(k, 0.3, 0.16, 0.3, X(2) + 0.2, 2.092, zc, 0x8fa8a0, 0.015);
});

// =====================================================================================================================
// COZINHA  (stove, sink and base cabinets are all 0.6 deep and 0.9 high so they line up into one worktop)
// =====================================================================================================================
// base cabinet body: recessed plinth, carcass and worktop (ct). Fronts go on the plane z = 0.25. o.sink leaves room for a basin
function kbase(k, w, W, ct, o = {}) {
  const top = o.h ?? 0.9, t = 0.04, bh = top - t;
  k.box(w - 0.02, 0.1, 0.48, 0, 0.05, -0.03, tone(W, 0.45));
  if (o.sink) { k.box(w, 0.6, 0.55, 0, 0.4, -0.025, W); for (const s of [-1, 1]) k.box(0.02, bh - 0.7, 0.55, s * (w / 2 - 0.01), (bh + 0.7) / 2, -0.025, W); k.box(w, bh - 0.7, 0.02, 0, (bh + 0.7) / 2, -0.29, W); k.box(w, bh - 0.7, 0.02, 0, (bh + 0.7) / 2, 0.24, W); }
  else { k.box(w, bh - 0.1, 0.55, 0, (bh + 0.1) / 2, -0.025, W); if (ct != null) k.box(w, t, 0.6, 0, top - t / 2, 0, ct); }
  return 0.25;
}
// worktop with a real hole and a steel basin in it. y = top surface, t = slab thickness, hole centred on hx, hz
function sinkTop(k, w, d, y, t, ct, hx, hw, hd, o = {}) {
  const zc = o.zc ?? 0, hz = (o.hz ?? 0.02) + zc, dep = o.dep ?? 0.15, x0 = hx - hw / 2, x1 = hx + hw / 2, z0 = hz - hd / 2, z1 = hz + hd / 2, yc = y - t / 2, St = o.steel ?? STEEL, B = o.shiny ? k.boxS.bind(k) : k.box.bind(k);
  if (x0 > -w / 2 + 0.001) B(x0 + w / 2, t, d, (x0 - w / 2) / 2, yc, zc, ct); if (x1 < w / 2 - 0.001) B(w / 2 - x1, t, d, (x1 + w / 2) / 2, yc, zc, ct);
  B(hw, t, z0 - (zc - d / 2), hx, yc, (z0 + zc - d / 2) / 2, ct); B(hw, t, zc + d / 2 - z1, hx, yc, (z1 + zc + d / 2) / 2, ct);
  k.boxS(hw, 0.008, hd, hx, y - dep, hz, St); for (const s of [-1, 1]) { k.boxS(0.008, dep, hd, hx + s * (hw / 2 + 0.003), y - dep / 2 - 0.002, hz, St); k.boxS(hw, dep, 0.008, hx, y - dep / 2 - 0.002, hz + s * (hd / 2 + 0.003), St); }
  k.cylS(0.022, 0.022, 0.004, hx, y - dep + 0.007, hz, DARK, 8);
}
function burner(k, x, y, z, r, c = DARK) { k.cylS(r, r, 0.008, x, y + 0.004, z, 0x1c1c20, 12); k.cylS(r * 0.42, r * 0.5, 0.016, x, y + 0.012, z, 0x55555c, 8); for (let i = 0; i < 2; i++) k.boxS(r * 2.3, 0.008, 0.012, x, y + 0.026, z, c, RY(i * HP + 0.785)); for (let i = 0; i < 4; i++) k.boxS(0.012, 0.022, 0.012, x + Math.sin(i * HP + 0.785) * r * 1.1, y + 0.012, z + Math.cos(i * HP + 0.785) * r * 1.1, c); }
// cooking pot with lid and two handles
function pot(k, x, y, z, r, h, c, lid = true) { k.cylS(r, r * 0.94, h, x, y + h / 2, z, c, 14); for (const s of [-1, 1]) k.boxS(0.03, 0.01, 0.035, x + s * (r + 0.012), y + h * 0.75, z, DARK);
  if (lid) { k.latheS([[r * 1.02, 0], [r * 0.7, r * 0.2], [0.001, r * 0.26]], x, y + h, z, tone(c, 1.12), 14); k.sphS(0.014, x, y + h + r * 0.3, z, DARK, 1, 0.8, 1, 6); } else k.cylS(r * 0.92, r * 0.92, 0.004, x, y + h - 0.01, z, tone(c, 0.6), 12); }
const mug = (k, x, y, z, c, s = 1, a = 0) => { k.cylS(0.035 * s, 0.032 * s, 0.08 * s, x, y + 0.04 * s, z, c, 8); k.addS(new THREE.TorusGeometry(0.022 * s, 0.006 * s, 3, 6, PI), mul(T(x, y + 0.04 * s, z), RY(a), T(0.034 * s, 0, 0), RZ(-HP)), c); };
function teapot(k, x, y, z, c, s = 1) { k.latheS([[0.001, 0], [0.045 * s, 0], [0.075 * s, 0.045 * s], [0.07 * s, 0.095 * s], [0.04 * s, 0.12 * s]], x, y, z, c, 10); k.latheS([[0.042 * s, 0], [0.03 * s, 0.014 * s], [0.001, 0.02 * s]], x, y + 0.12 * s, z, c, 8); k.sphS(0.012 * s, x, y + 0.147 * s, z, c, 1, 1, 1, 6);
  rod(k, [x + 0.06 * s, y + 0.05 * s, z], [x + 0.125 * s, y + 0.11 * s, z], 0.013 * s, c, 5, 1, 0.008 * s); k.addS(new THREE.TorusGeometry(0.035 * s, 0.008 * s, 3, 7, PI), mul(T(x - 0.07 * s, y + 0.065 * s, z), RZ(HP)), c); }

furn({ id: 'fogao_simples', name: 'Fogão de 4 bocas', cat: 'Cozinha', price: 200, lvl: 1, w: 0.56, d: 0.6, h: 1.06, cols: [0xf4f1ea, 0x3a3a40], colN: ['Esmalte', 'Detalhes'], info: 'Quatro bocas, forno e muito feijão para cozinhar.' }, (k) => {
  const E = k.c1, D = k.c2;
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) k.cyl(0.02, 0.02, 0.05, sx * 0.24, 0.025, sz * 0.24, DARK, 6);
  sbox(k, 0.56, 0.83, 0.56, 0, 0.465, -0.02, E, 0.015); k.boxS(0.54, 0.012, 0.54, 0, 0.886, -0.02, 0x2a2a2e); k.box(0.56, 0.06, 0.02, 0, 0.91, -0.29, E);
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) burner(k, sx * 0.13, 0.892, -0.02 + sz * 0.13, sz > 0 ? 0.05 : 0.062, D);
  k.box(0.54, 0.08, 0.012, 0, 0.82, 0.265, tone(E, 0.92)); for (let i = 0; i < 5; i++) { k.cylS(0.018, 0.02, 0.02, -0.2 + i * 0.1, 0.82, 0.28, D, 8, RX(HP)); k.boxS(0.005, 0.02, 0.004, -0.2 + i * 0.1, 0.827, 0.292, tone(D, 2)); }
  k.box(0.5, 0.5, 0.014, 0, 0.5, 0.266, tone(E, 0.97)); k.boxS(0.36, 0.26, 0.004, 0, 0.5, 0.275, 0x1f2126); k.glow(new THREE.PlaneGeometry(0.32, 0.22), 0xff9a3c, 0.5, { at: [0, 0.5, 0.2775], opacity: 0.35 });
  k.cylS(0.011, 0.011, 0.42, 0, 0.7, 0.295, D, 6, RZ(HP)); for (const s of [-1, 1]) k.boxS(0.014, 0.014, 0.03, s * 0.19, 0.7, 0.283, D);
  k.box(0.5, 0.12, 0.012, 0, 0.17, 0.266, tone(E, 0.95)); k.boxS(0.16, 0.012, 0.014, 0, 0.2, 0.278, D);
  pot(k, -0.13, 0.918, -0.15, 0.085, 0.1, 0xc9584a);
});

furn({ id: 'geladeira_simples', name: 'Geladeira simples', cat: 'Cozinha', price: 260, lvl: 1, w: 0.6, d: 0.66, h: 1.62, cols: [0xf4f1ea, 0xb9bec2], colN: ['Corpo', 'Puxadores'], info: 'Branquinha, com ímãs e o bilhete da lista de compras.' }, (k) => {
  const E = k.c1, H = k.c2;
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) k.cyl(0.022, 0.022, 0.04, sx * 0.25, 0.02, -0.03 + sz * 0.24, DARK, 6);
  sbox(k, 0.6, 1.58, 0.58, 0, 0.83, -0.04, tone(E, 0.96), 0.025); sbox(k, 0.59, 0.42, 0.05, 0, 1.4, 0.272, E, 0.018); sbox(k, 0.59, 1.1, 0.05, 0, 0.62, 0.272, E, 0.018); k.box(0.58, 0.012, 0.04, 0, 1.18, 0.26, tone(E, 0.6));
  k.boxS(0.02, 0.2, 0.025, -0.25, 1.3, 0.31, H); k.boxS(0.02, 0.36, 0.025, -0.25, 0.94, 0.31, H); k.boxS(0.1, 0.03, 0.004, 0.2, 1.57, 0.299, tone(H, 0.8));
  k.box(0.1, 0.12, 0.003, 0.1, 0.95, 0.299, 0xfff6c8, RZ(0.06)); k.addS(new THREE.CircleGeometry(0.016, 8), T(0.1, 1.0, 0.301), 0xd9584a);
  for (const [x, y, c] of [[0.16, 1.36, 0x5d8a5a], [0.05, 1.44, 0xd9a441], [0.2, 1.48, 0x3f6d8e]]) k.addS(new THREE.CircleGeometry(0.018, 8), T(x, y, 0.2985), c);
});

furn({ id: 'pia_simples', name: 'Pia de cozinha', cat: 'Cozinha', price: 160, lvl: 1, w: 1.0, d: 0.6, h: 1.18, surf: 0.9, cols: [WOOD.branco, 0xb9bfc4], colN: ['Gabinete', 'Bancada'], info: 'Cuba de inox, torneira alta e a louça escorrendo ao lado.' }, (k) => {
  const W = k.c1, Ct = k.c2, zf = kbase(k, 1.0, W, null, { sink: 1 });
  sinkTop(k, 1.0, 0.6, 0.9, 0.04, Ct, 0.2, 0.44, 0.36); k.box(1.0, 0.07, 0.02, 0, 0.935, -0.29, Ct);
  for (const s of [-1, 1]) door(k, s * 0.2475, 0.48, zf, 0.485, 0.74, tone(W, 1.03), { hs: -s, hy: 0.22, hc: METAL.cromo, hstyle: 'vbar', hl: 0.12 });
  tap(k, 0.2, 0.9, -0.22, METAL.cromo, 1.25, false); k.boxS(0.012, 0.012, 0.06, 0.25, 0.94, -0.22, METAL.cromo, RY(0.4));
  // dish rack with plates and a cup, sponge and soap
  for (const s of [-1, 1]) { k.boxS(0.36, 0.008, 0.008, -0.27, 0.92, 0.0 + s * 0.13, STEEL); k.boxS(0.008, 0.008, 0.27, -0.27 + s * 0.18, 0.92, 0, STEEL); for (const q of [-1, 1]) k.boxS(0.008, 0.02, 0.008, -0.27 + s * 0.18, 0.91, q * 0.13, STEEL); }
  for (let i = 0; i < 4; i++) { k.addS(new THREE.CylinderGeometry(0.1, 0.1, 0.01, 14), mul(T(-0.38 + i * 0.05, 1.01, 0), RZ(HP - 0.2)), i % 2 ? 0xf7f3ea : 0xa9c4d8); k.boxS(0.006, 0.07, 0.006, -0.405 + i * 0.05, 0.955, 0.1, STEEL); }
  mug(k, -0.15, 0.925, -0.03, 0xd98a6a, 1, 1); k.box(0.09, 0.03, 0.06, 0.02, 0.915, -0.24, 0xe6c94a); k.box(0.09, 0.008, 0.06, 0.02, 0.934, -0.24, 0x5d8a5a); k.cylS(0.028, 0.03, 0.12, -0.08, 0.96, -0.23, 0x7fbf8a, 8); k.cylS(0.012, 0.012, 0.03, -0.08, 1.035, -0.23, 0xf4f1ea, 6);
});

furn({ id: 'armario_cozinha_baixo', name: 'Armário de cozinha baixo', cat: 'Cozinha', price: 180, lvl: 2, w: 0.8, d: 0.6, h: 0.9, surf: 0.9, cols: [WOOD.branco, WOOD.mel], colN: ['Gabinete', 'Bancada'], info: 'Bancada de madeira, gavetas para talheres e portas para as panelas.' }, (k) => {
  const W = k.c1, zf = kbase(k, 0.8, W, k.c2);
  for (const s of [-1, 1]) { door(k, s * 0.1975, 0.39, zf, 0.385, 0.56, tone(W, 1.03), { hs: -s, hy: 0.18, hc: METAL.cromo }); drawer(k, s * 0.1975, 0.765, zf, 0.385, 0.15, tone(W, 1.03), METAL.cromo, 'bar'); }
  for (let i = 0; i < 4; i++) k.box(0.002, 0.002, 0.6, -0.3 + i * 0.2, 0.9005, 0, tone(k.c2, 0.82));
});

furn({ id: 'armario_aereo', name: 'Armário aéreo', cat: 'Cozinha', kind: 'wall', price: 170, lvl: 2, w: 0.8, d: 0.34, h: 0.8, cols: [WOOD.branco, 0xd98a6a], colN: ['Armário', 'Canecas'], info: 'Fica no alto, com canecas penduradas e luz sob o armário.' }, (k) => {
  const W = k.c1, y = 1.88;
  k.box(0.8, 0.66, 0.3, 0, y, 0.15, W); k.box(0.8, 0.02, 0.33, 0, y + 0.34, 0.165, tone(W, 0.92)); for (const s of [-1, 1]) door(k, s * 0.1975, y, 0.3, 0.385, 0.62, tone(W, 1.03), { hs: -s, hy: -0.2, hc: METAL.cromo });
  k.glow(new THREE.BoxGeometry(0.6, 0.012, 0.04), 0xfff0cc, 2.2, { at: [0, y - 0.336, 0.2] });
  for (let i = 0; i < 4; i++) { const x = -0.27 + i * 0.18; k.boxS(0.006, 0.03, 0.006, x, y - 0.345, 0.1, METAL.cromo); mug(k, x, y - 0.44, 0.1, i % 2 ? k.c2 : mixHex(k.c2, 0xf4efe6, 0.8), 0.9, HP); }
});

furn({ id: 'fruteira_cozinha', name: 'Fruteira com paninho', cat: 'Cozinha', kind: 'top', price: 45, lvl: 1, w: 0.32, d: 0.32, h: 0.2, cols: [0xf2ead8, 0xc9584a], colN: ['Tigela', 'Paninho'], info: 'Banana, laranja, maçã e uvas: o colorido da mesa.' }, (k) => {
  k.box(0.22, 0.004, 0.22, 0, 0.002, 0, k.c2, RY(0.785)); k.box(0.16, 0.0045, 0.16, 0, 0.0023, 0, tone(k.c2, 1.4), RY(0.785));
  k.latheS([[0.001, 0.004], [0.06, 0.004], [0.065, 0.02], [0.13, 0.075], [0.14, 0.08], [0.135, 0.088], [0.06, 0.03], [0.001, 0.028]], 0, 0, 0, k.c1, 16);
  k.sph(0.042, -0.05, 0.085, 0.03, 0xd9483a, 1, 0.92, 1, 8); k.sph(0.04, 0.03, 0.08, 0.06, 0xa8c24a, 1, 0.92, 1, 8); k.sph(0.044, 0.05, 0.085, -0.04, 0xf09a2a, 1, 0.95, 1, 8); k.sph(0.042, -0.03, 0.09, -0.055, 0xf09a2a, 1, 0.95, 1, 8);
  for (const [dx, dz] of [[0, 0], [0.022, 0.01], [-0.01, 0.024]]) k.tube([[-0.09 + dx, 0.11, -0.01 + dz], [-0.03 + dx, 0.14 + dz, 0.0 + dz], [0.05 + dx, 0.13, 0.02 + dz], [0.09 + dx, 0.1, 0.03 + dz]], 0.014, 0xf2cf4a, 5);
  for (const [x, y, z] of [[0.08, 0.1, 0.05], [0.1, 0.09, 0.03], [0.1, 0.1, 0.065], [0.115, 0.085, 0.05], [0.09, 0.115, 0.04], [0.125, 0.075, 0.035]]) k.sph(0.014, x, y, z, 0x7a4a8a, 1, 1, 1, 5);
  k.cyl(0.003, 0.003, 0.02, -0.05, 0.13, 0.03, 0x6a4a2a, 4); k.cyl(0.003, 0.003, 0.02, 0.03, 0.123, 0.06, 0x6a4a2a, 4);
});

furn({ id: 'micro_ondas', name: 'Micro-ondas', cat: 'Cozinha', kind: 'top', price: 280, lvl: 3, w: 0.48, d: 0.38, h: 0.28, cols: [0xf1eee8, 0x2c2e33], colN: ['Corpo', 'Porta'], info: 'Pipoca em três minutos e o café requentado de todo dia.' }, (k) => {
  const E = k.c1, D = k.c2;
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) k.cyl(0.015, 0.015, 0.012, sx * 0.2, 0.006, sz * 0.14, DARK, 6);
  sbox(k, 0.48, 0.265, 0.34, 0, 0.1445, -0.01, E, 0.015); k.boxS(0.34, 0.22, 0.012, -0.06, 0.145, 0.164, D); k.boxS(0.27, 0.15, 0.004, -0.06, 0.145, 0.171, 0x16171a); k.boxS(0.012, 0.18, 0.02, 0.085, 0.145, 0.178, tone(E, 0.85));
  k.glow(new THREE.PlaneGeometry(0.25, 0.13), 0xffc27a, 0.5, { at: [-0.06, 0.145, 0.1735], opacity: 0.25 });
  k.glow(new THREE.PlaneGeometry(0.08, 0.03), 0x7dffb0, 1.6, { at: [0.175, 0.23, 0.1615], day: 1 }); k.boxS(0.1, 0.04, 0.004, 0.175, 0.23, 0.159, 0x101214);
  for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) k.boxS(0.022, 0.018, 0.006, 0.148 + i * 0.027, 0.18 - j * 0.026, 0.162, tone(E, 0.8)); k.cylS(0.025, 0.025, 0.015, 0.175, 0.07, 0.165, tone(E, 0.8), 10, RX(HP));
});

furn({ id: 'panelas_penduradas', name: 'Jogo de panelas penduradas', cat: 'Cozinha', kind: 'wall', price: 330, lvl: 4, w: 0.96, d: 0.2, h: 0.62, cols: [METAL.cobre, METAL.ferro], colN: ['Panelas', 'Barra'], info: 'Cobre areado brilhando na parede, como na cozinha da fazenda.' }, (k) => {
  const C = k.c1, M = k.c2, y = 1.9, z = 0.08;
  k.cylS(0.011, 0.011, 0.86, 0, y, z, M, 6, RZ(HP)); for (const s of [-1, 1]) { k.boxS(0.014, 0.014, z, s * 0.36, y, z / 2, M); k.cylS(0.03, 0.03, 0.006, s * 0.36, y, 0.003, M, 8, RX(HP)); k.sphS(0.018, s * 0.43, y, z, M, 1, 1, 1, 6); }
  const hook = (x) => { ring(k, 0.016, 0.004, mul(T(x, y - 0.016, z), RY(HP)), M, 1, TAU, 8, 3); };
  // frying pan, saucepan, pot, ladle, skimmer, colander
  hook(-0.34); k.cylS(0.01, 0.008, 0.2, -0.34, y - 0.13, z, DARK, 6); k.addS(lathG([[0.001, 0], [0.1, 0], [0.115, 0.035], [0.108, 0.035], [0.095, 0.008], [0.001, 0.008]], 14), mul(T(-0.34, y - 0.33, z - 0.02), RX(HP)), C);
  hook(-0.1); k.cylS(0.009, 0.008, 0.16, -0.1, y - 0.11, z, DARK, 6); k.addS(lathG([[0.001, 0], [0.07, 0], [0.075, 0.1], [0.068, 0.1], [0.064, 0.008], [0.001, 0.008]], 12), mul(T(-0.1, y - 0.26, z - 0.02), RX(HP), RZ(0)), C);
  hook(0.1); k.boxS(0.012, 0.3, 0.006, 0.1, y - 0.18, z, STEEL); k.addS(new THREE.SphereGeometry(0.04, 8, 4, 0, TAU, HP, HP), mul(T(0.1, y - 0.34, z + 0.012), RX(-HP)), STEEL);
  hook(0.22); k.boxS(0.012, 0.28, 0.006, 0.22, y - 0.17, z, STEEL); k.addS(new THREE.CylinderGeometry(0.045, 0.045, 0.004, 10), mul(T(0.22, y - 0.34, z), RX(HP)), STEEL); for (const [dx, dy] of [[0, 0], [0.02, 0.02], [-0.02, 0.02], [0.02, -0.02], [-0.02, -0.02]]) k.addS(new THREE.CircleGeometry(0.006, 5), T(0.22 + dx, y - 0.34 + dy, z + 0.003), DARK);
  hook(0.37); ring(k, 0.03, 0.006, T(0.37, y - 0.06, z), C, 1, TAU, 8, 3); k.addS(new THREE.SphereGeometry(0.1, 12, 5, 0, TAU, HP, HP), mul(T(0.37, y - 0.19, z - 0.04), RX(HP + PI)), C); ring(k, 0.1, 0.007, T(0.37, y - 0.19, z - 0.04), tone(C, 1.15), 1, TAU, 14, 3);
});

furn({ id: 'mesa_cozinha_banquinhos', name: 'Mesa de cozinha com banquinhos', cat: 'Cozinha', price: 480, lvl: 4, w: 1.3, d: 1.0, h: 0.78, surf: 0.78, cols: [WOOD.pinho, 0xc9584a], colN: ['Madeira', 'Toalha'], seat: [-0.3, 0.46, 0.34], info: 'Toalha xadrez, quatro banquinhos e cheirinho de café coado.' }, (k) => {
  const W = k.c1, C = k.c2, Cl = tone(C, 1.6);
  table(k, 0.96, 0.62, 0.765, W, { leg: 'sq', lr: 0.025, ov: 0.04 });
  k.box(1.0, 0.012, 0.66, 0, 0.772, 0, Cl); for (const s of [-1, 1]) { k.box(1.0, 0.14, 0.008, 0, 0.708, s * 0.33, Cl); k.box(0.008, 0.14, 0.66, s * 0.5, 0.708, 0, Cl); k.box(1.002, 0.03, 0.01, 0, 0.66, s * 0.33, C); k.box(0.01, 0.03, 0.662, s * 0.5, 0.66, 0, C); }
  for (let i = 0; i < 10; i++) for (let j = 0; j < 6; j++) if ((i + j) % 2) k.box(0.1, 0.002, 0.11, -0.45 + i * 0.1, 0.779, -0.275 + j * 0.11, i % 2 ? C : mixHex(C, Cl, 0.5));
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) { const x = sx * 0.3, z = sz * 0.34; disc(k, 0.14, 0.035, x, 0.415, z, tone(W, 1.06), 0.012, 14); for (let i = 0; i < 3; i++) { const a = i * TAU / 3 + sx, s = Math.sin(a), c = Math.cos(a); rod(k, [x + s * 0.07, 0.42, z + c * 0.07], [x + s * 0.13, 0, z + c * 0.13], 0.018, W, 6, 0, 0.013); } }
});

furn({ id: 'carrinho_cha', name: 'Carrinho de chá', cat: 'Cozinha', price: 580, lvl: 5, w: 0.78, d: 0.46, h: 0.96, surf: 0.78, cols: [METAL.latao, 0xf2e6d8], colN: ['Estrutura', 'Louça'], info: 'Bule, xícaras e um bolo inteiro passeando pela casa.' }, (k) => {
  const M = k.c1, P = k.c2, Wd = WOOD.nogueira;
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) { k.cylS(0.011, 0.011, 0.72, sx * 0.3, 0.44, sz * 0.19, M, 6); const big = sx < 0; ring(k, big ? 0.08 : 0.04, 0.008, mul(T(sx * 0.3, big ? 0.088 : 0.048, sz * 0.205), RY(0)), M, 1, TAU, big ? 14 : 8, 3); if (big) for (let i = 0; i < 3; i++) k.boxS(0.006, 0.16, 0.004, sx * 0.3, 0.088, sz * 0.205, M, RZ(i * PI / 3)); }
  for (const y of [0.3, 0.77]) { k.box(0.62, 0.014, 0.4, 0, y, 0, Wd); for (const s of [-1, 1]) { k.boxS(0.64, 0.035, 0.008, 0, y + 0.02, s * 0.2, M); k.boxS(0.008, 0.035, 0.4, s * 0.316, y + 0.02, 0, M); } }
  k.tubeS([[0.3, 0.78, -0.19], [0.36, 0.86, -0.19], [0.37, 0.88, 0], [0.36, 0.86, 0.19], [0.3, 0.78, 0.19]], 0.011, M, 5);
  teapot(k, -0.14, 0.777, -0.03, P, 1.1); for (const [x, z] of [[0.06, 0.09], [0.16, -0.06]]) { plate(k, x, 0.777, z, P, 0.06); cup(k, x, 0.787, z, P, 0.9); }
  // cake on a stand, plates and a jar below
  k.latheS([[0.001, 0], [0.05, 0], [0.012, 0.02], [0.012, 0.07], [0.11, 0.085], [0.11, 0.092], [0.001, 0.092]], -0.1, 0.307, 0, P, 12); k.cyl(0.085, 0.085, 0.07, -0.1, 0.434, 0, 0xf6e7c8, 14); k.cyl(0.087, 0.087, 0.012, -0.1, 0.44, 0, 0xc9584a, 14); k.cyl(0.088, 0.088, 0.016, -0.1, 0.472, 0, 0xfaf3ea, 14); for (let i = 0; i < 6; i++) k.sph(0.013, -0.1 + Math.sin(i * PI / 3) * 0.06, 0.487, Math.cos(i * PI / 3) * 0.06, 0xd9483a, 1, 1, 1, 5);
  for (let i = 0; i < 4; i++) plate(k, 0.16, 0.307 + i * 0.012, 0.02, i % 2 ? P : tone(P, 0.92), 0.085); k.box(0.14, 0.004, 0.14, 0.02, 0.779, -0.1, 0xc9584a, RY(0.3));
});

furn({ id: 'geladeira_retro', name: 'Geladeira retrô', cat: 'Cozinha', price: 1250, lvl: 7, w: 0.66, d: 0.72, h: 1.62, cols: [0x8fc7b8, METAL.cromo], colN: ['Cor', 'Cromados'], info: 'Cantos redondos, puxador cromado e cor de bala de hortelã.' }, (k) => {
  const E = k.c1, M = k.c2;
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) k.cylS(0.02, 0.014, 0.08, sx * 0.25, 0.04, -0.03 + sz * 0.24, M, 8);
  k.rbox(0.66, 1.52, 0.6, 0, 0.84, -0.05, tone(E, 0.95), 0.09); sbox(k, 0.64, 0.4, 0.07, 0, 1.37, 0.28, E, 0.03); sbox(k, 0.64, 1.02, 0.07, 0, 0.63, 0.28, E, 0.03); k.box(0.6, 0.012, 0.05, 0, 1.155, 0.27, tone(E, 0.6));
  for (const [y, l] of [[1.3, 0.2], [1.0, 0.26]]) { k.cylS(0.014, 0.014, l, -0.24, y, 0.342, M, 8); for (const s of [-1, 1]) k.boxS(0.02, 0.02, 0.03, -0.24, y + s * (l / 2 - 0.01), 0.328, M); }
  k.boxS(0.2, 0.035, 0.008, 0.1, 1.48, 0.318, M); k.boxS(0.5, 0.01, 0.006, 0, 0.2, 0.317, M); k.boxS(0.5, 0.01, 0.006, 0, 0.16, 0.317, M);
});

furn({ id: 'bancada_ilha', name: 'Bancada ilha', cat: 'Cozinha', price: 1450, lvl: 8, w: 1.5, d: 0.8, h: 0.92, surf: 0.92, cols: [0x5f7f8a, WOOD.mel], colN: ['Gabinete', 'Tampo'], info: 'Tampo de madeira maciça, gavetões e nichos para os livros de receita.' }, (k) => {
  const W = k.c1, Ct = k.c2, zf = 0.3;
  k.box(1.36, 0.1, 0.56, 0, 0.05, 0, tone(W, 0.45)); k.box(1.0, 0.76, 0.66, -0.2, 0.49, -0.03, W); k.box(1.4, 0.76, 0.02, 0, 0.49, -0.35, W); k.box(0.02, 0.76, 0.66, 0.69, 0.49, -0.03, W); k.box(0.4, 0.02, 0.66, 0.5, 0.12, -0.03, W); k.box(0.4, 0.02, 0.64, 0.5, 0.5, -0.03, W);
  for (let i = 0; i < 6; i++) k.box(1.5, 0.05, 0.132, 0, 0.895, -0.333 + i * 0.1333, i % 2 ? Ct : tone(Ct, 1.07)); k.box(1.5, 0.052, 0.02, 0, 0.895, 0.39, tone(Ct, 0.9));
  for (let j = 0; j < 3; j++) drawer(k, -0.45, 0.25 + j * 0.24, zf, 0.48, 0.22, tone(W, 1.05), METAL.latao, 'cup'); door(k, 0.05, 0.49, zf, 0.48, 0.7, tone(W, 1.05), { hs: -1, hy: 0.2, hc: METAL.latao });
  books(k, 0.33, 0.6, 0.51, 0.22, 91, { h: 0.3, d: 0.2 }); basket(k, 0.5, 0.13, 0.0, 0.34, 0.24, 0.4); k.sph(0.05, 0.44, 0.38, 0.05, 0xd9a05b, 1, 0.8, 1, 7); k.sph(0.05, 0.54, 0.38, -0.03, 0xc98a4b, 1, 0.8, 1, 7);
  k.cylS(0.008, 0.008, 0.4, -0.75 + 0.012, 0.72, 0.0, METAL.latao, 6, RX(HP)); for (const s of [-1, 1]) k.boxS(0.03, 0.012, 0.012, -0.715, 0.72, s * 0.19, METAL.latao);
  k.box(0.012, 0.3, 0.22, -0.745, 0.58, 0.02, 0xf2e6d0); k.box(0.013, 0.03, 0.22, -0.745, 0.47, 0.02, 0xc9584a); k.box(0.013, 0.012, 0.22, -0.745, 0.52, 0.02, 0xc9584a);
});

furn({ id: 'fogao_lenha', name: 'Fogão a lenha', cat: 'Cozinha', price: 1850, lvl: 9, w: 1.2, d: 0.72, h: 2.3, cols: [0xb5533c, 0x3a3a3e], colN: ['Alvenaria', 'Ferro'], info: 'Chapa quente, brasa viva e café no bule: coração da casa.' }, (k) => {
  const B = k.c1, M = k.c2, Bl = tone(B, 1.25), Bd = tone(B, 0.8);
  k.box(1.2, 0.74, 0.62, 0, 0.37, -0.02, B); k.box(1.2, 0.06, 0.66, 0, 0.77, 0, Bl); k.box(1.2, 0.05, 0.64, 0, 0.025, -0.01, Bd);
  for (let j = 0; j < 4; j++) for (let i = 0; i < 6; i++) k.box(0.186, 0.14, 0.006, -0.5 + i * 0.2 + (j % 2) * 0.0, 0.14 + j * 0.16, 0.291, (i + j) % 2 ? Bl : mixHex(B, 0xf4efe6, 0.5));
  k.boxS(1.02, 0.02, 0.5, 0.06, 0.81, 0, M); for (const [x, r] of [[-0.22, 0.11], [0.08, 0.09], [0.36, 0.11]]) { k.cylS(r, r, 0.006, x, 0.823, 0.02, tone(M, 1.4), 14); ring(k, r * 0.6, 0.004, mul(T(x, 0.826, 0.02), RX(HP)), tone(M, 0.7), 1, TAU, 10, 3); }
  // fire door with live embers, firewood niche
  k.box(0.36, 0.26, 0.02, -0.3, 0.52, 0.295, 0x17120f); k.glow(new THREE.PlaneGeometry(0.3, 0.2), 0xff6a1e, 2.2, { at: [-0.3, 0.52, 0.306], day: 1 });
  for (const [x, y, s] of [[-0.38, 0.46, 1], [-0.3, 0.47, 1.3], [-0.22, 0.455, 0.9]]) k.glow(new THREE.ConeGeometry(0.035 * s, 0.11 * s, 5), 0xffc23c, 3, { at: [x, y + 0.04 * s, 0.31], day: 1 });
  for (const s of [-1, 1]) k.boxS(0.03, 0.3, 0.014, -0.3 + s * 0.195, 0.52, 0.305, M); for (const s of [-1, 1]) k.boxS(0.42, 0.03, 0.014, -0.3, 0.52 + s * 0.145, 0.305, M); for (let i = 0; i < 3; i++) k.boxS(0.012, 0.26, 0.01, -0.39 + i * 0.09, 0.52, 0.312, M);
  k.box(0.4, 0.3, 0.02, 0.3, 0.3, 0.295, 0x1c1512); for (let i = 0; i < 5; i++) { const x = 0.16 + (i % 3) * 0.13 + (i > 2 ? 0.065 : 0), y = i > 2 ? 0.31 : 0.2; k.cyl(0.055, 0.055, 0.1, x, y + 0.005, 0.26, 0x7a5236, 7, RX(HP)); k.add(new THREE.CircleGeometry(0.045, 7), T(x, y + 0.005, 0.311), 0xd9b98a); }
  k.boxS(0.34, 0.03, 0.012, -0.3, 0.3, 0.3, M); k.boxS(0.1, 0.02, 0.02, -0.3, 0.32, 0.31, M);
  // chimney, kettle and clay pot
  k.cylS(0.085, 0.085, 1.48, -0.45, 1.56, -0.2, M, 12); k.cylS(0.1, 0.1, 0.04, -0.45, 0.84, -0.2, M, 12); k.cylS(0.1, 0.1, 0.03, -0.45, 1.5, -0.2, tone(M, 1.3), 12);
  k.latheS([[0.001, 0], [0.07, 0], [0.09, 0.04], [0.08, 0.1], [0.04, 0.125], [0.001, 0.13]], 0.08, 0.826, 0.02, 0x4a6a8a, 12); rod(k, [0.15, 0.89, 0.02], [0.22, 0.95, 0.02], 0.014, 0x4a6a8a, 5, 1, 0.009); k.addS(new THREE.TorusGeometry(0.055, 0.007, 3, 8, PI), T(0.08, 0.95, 0.02), DARK);
  k.latheS([[0.001, 0], [0.08, 0], [0.12, 0.05], [0.115, 0.1], [0.1, 0.11], [0.105, 0.12]], 0.36, 0.826, 0.02, 0x9a5a3c, 12); k.latheS([[0.108, 0], [0.07, 0.03], [0.001, 0.04]], 0.36, 0.946, 0.02, 0x8a4f34, 12); k.sph(0.016, 0.36, 0.99, 0.02, 0x8a4f34, 1, 1, 1, 6);
});

furn({ id: 'forno_torre', name: 'Torre de forno e micro-ondas', cat: 'Cozinha', price: 2350, lvl: 10, w: 0.66, d: 0.62, h: 2.1, cols: [WOOD.branco, STEEL], colN: ['Armário', 'Inox'], info: 'Forno embutido na altura dos olhos: o assado vira espetáculo.' }, (k) => {
  const W = k.c1, I = k.c2, zf = 0.25;
  k.box(0.64, 0.1, 0.48, 0, 0.05, -0.03, tone(W, 0.45)); k.box(0.66, 1.98, 0.57, 0, 1.09, -0.025, W); k.box(0.66, 0.025, 0.6, 0, 2.0875, -0.01, tone(W, 0.92));
  drawer(k, 0, 0.3, zf, 0.64, 0.36, tone(W, 1.03), METAL.cromo, 'bar'); door(k, 0, 1.87, zf, 0.64, 0.38, tone(W, 1.03), { hs: 0, hy: -0.13, hc: METAL.cromo, hstyle: 'bar' });
  // oven
  k.boxS(0.62, 0.6, 0.016, 0, 0.82, zf + 0.008, I); k.boxS(0.5, 0.34, 0.004, 0, 0.77, zf + 0.018, 0x17181b); k.glow(new THREE.PlaneGeometry(0.46, 0.3), 0xff9c40, 0.9, { at: [0, 0.77, zf + 0.0205], opacity: 0.4, day: 0.35 });
  k.cylS(0.012, 0.012, 0.5, 0, 0.985, zf + 0.045, tone(I, 1.1), 6, RZ(HP)); for (const s of [-1, 1]) k.boxS(0.016, 0.016, 0.035, s * 0.22, 0.985, zf + 0.03, I);
  for (const x of [-0.22, 0.22]) k.cylS(0.02, 0.022, 0.02, x, 1.065, zf + 0.026, tone(I, 0.7), 8, RX(HP)); k.glow(new THREE.PlaneGeometry(0.12, 0.035), 0x7dd8ff, 1.6, { at: [0, 1.065, zf + 0.0175], day: 1 }); k.boxS(0.14, 0.05, 0.002, 0, 1.065, zf + 0.016, 0x101214);
  for (const y of [0.7, 0.8]) k.boxS(0.44, 0.004, 0.004, 0, y, zf + 0.021, 0x8a8a8a);
  // microwave
  k.boxS(0.62, 0.38, 0.016, 0, 1.4, zf + 0.008, I); k.boxS(0.4, 0.26, 0.004, -0.08, 1.4, zf + 0.018, 0x17181b); k.boxS(0.012, 0.26, 0.02, 0.15, 1.4, zf + 0.03, tone(I, 1.1));
  k.glow(new THREE.PlaneGeometry(0.09, 0.03), 0x7dffb0, 1.6, { at: [0.235, 1.5, zf + 0.0175], day: 1 }); for (let i = 0; i < 2; i++) for (let j = 0; j < 4; j++) k.boxS(0.035, 0.022, 0.005, 0.215 + i * 0.045, 1.44 - j * 0.035, zf + 0.017, tone(I, 0.75));
});

furn({ id: 'adega', name: 'Adega climatizada', cat: 'Cozinha', price: 2900, lvl: 11, w: 0.6, d: 0.6, h: 1.62, cols: [0x26282c, WOOD.carvalho], colN: ['Corpo', 'Prateleiras'], info: 'Vinhos deitados no escuro, à espera de uma boa conversa.' }, (k) => {
  const Bk = k.c1, W = k.c2, zf = 0.24;
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) k.cyl(0.022, 0.022, 0.04, sx * 0.25, 0.02, -0.03 + sz * 0.22, DARK, 6);
  for (const s of [-1, 1]) k.boxS(0.03, 1.56, 0.54, s * 0.285, 0.82, -0.03, Bk); k.boxS(0.6, 0.03, 0.54, 0, 1.585, -0.03, Bk); k.boxS(0.6, 0.14, 0.54, 0, 0.11, -0.03, Bk); k.boxS(0.54, 1.4, 0.02, 0, 0.88, -0.29, tone(Bk, 0.7));
  for (let j = 0; j < 7; j++) { const y = 0.26 + j * 0.185; k.box(0.54, 0.014, 0.46, 0, y, -0.04, W); k.box(0.54, 0.03, 0.014, 0, y + 0.008, 0.185, tone(W, 1.08));
    for (let i = 0; i < 4; i++) { if ((i * 3 + j * 5) % 7 === 0) continue; const x = -0.195 + i * 0.13, c = [0x2f4a36, 0x3a2a2e, 0x2a3a2a, 0x4a3a2a][(i + j) % 4]; k.cylS(0.04, 0.04, 0.3, x, y + 0.05, -0.06, c, 8, RX(HP)); k.cylS(0.016, 0.02, 0.09, x, y + 0.05, 0.135, c, 6, RX(HP)); k.cylS(0.018, 0.018, 0.03, x, y + 0.05, 0.17, (i + j) % 3 ? 0x8a2a3a : METAL.ouro, 6, RX(HP)); } }
  k.glass(new THREE.BoxGeometry(0.5, 1.34, 0.008), T(0, 0.9, zf + 0.01), 0xbfe0ea, 0.2); for (const s of [-1, 1]) { k.boxS(0.035, 1.42, 0.022, s * 0.265, 0.9, zf + 0.011, STEEL); k.boxS(0.5, 0.035, 0.022, 0, 0.9 + s * 0.6925, zf + 0.011, STEEL); }
  k.cylS(0.012, 0.012, 0.6, -0.2, 0.9, zf + 0.05, STEEL, 6); for (const s of [-1, 1]) k.boxS(0.016, 0.016, 0.03, -0.2, 0.9 + s * 0.27, zf + 0.035, STEEL);
  k.glow(new THREE.BoxGeometry(0.5, 0.012, 0.02), 0xd8ecff, 2.2, { at: [0, 1.56, 0.16], day: 0.5 }); k.glow(new THREE.PlaneGeometry(0.1, 0.03), 0x7dd8ff, 1.6, { at: [0.15, 0.11, zf + 0.001], day: 1 });
});

furn({ id: 'geladeira_duplex_inox', name: 'Geladeira duplex de inox', cat: 'Cozinha', price: 4300, lvl: 13, w: 0.92, d: 0.74, h: 1.84, cols: [0xc9ced2, 0x8a9096], colN: ['Inox', 'Puxadores'], info: 'Duas portas, gelo na porta e espaço para a feira do mês.' }, (k) => {
  const I = k.c1, H = k.c2;
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) k.cyl(0.025, 0.025, 0.04, sx * 0.38, 0.02, -0.04 + sz * 0.26, DARK, 6);
  sboxS(k, 0.92, 1.8, 0.64, 0, 0.94, -0.05, tone(I, 0.85), 0.02); for (const s of [-1, 1]) { sboxS(k, 0.452, 1.76, 0.06, s * 0.229, 0.95, 0.3, I, 0.02); k.cylS(0.014, 0.014, 0.9, s * 0.045, 1.1, 0.355, H, 8); for (const q of [-1, 1]) k.boxS(0.02, 0.02, 0.03, s * 0.045, 1.1 + q * 0.42, 0.34, H); }
  k.boxS(0.24, 0.36, 0.006, -0.25, 1.2, 0.331, 0x1c1e22); k.boxS(0.18, 0.16, 0.02, -0.25, 1.13, 0.325, 0x0e0f11); k.glow(new THREE.PlaneGeometry(0.16, 0.05), 0x7dd8ff, 1.6, { at: [-0.25, 1.32, 0.3345], day: 1 }); k.boxS(0.03, 0.06, 0.02, -0.25, 1.17, 0.335, H);
  k.boxS(0.1, 0.03, 0.004, 0.25, 1.72, 0.332, tone(I, 0.7));
});

furn({ id: 'cozinha_luxo', name: 'Ilha gourmet com cooktop e coifa', cat: 'Cozinha', price: 21000, lvl: 19, w: 2.4, d: 1.0, h: 2.8, surf: 0.93, cols: [0x2f4a5a, MARBLE], colN: ['Gabinete', 'Mármore'], info: 'Mármore em cascata, cooktop, cuba, adega e coifa suspensa: cozinha de chef.' }, (k) => {
  const W = tone(k.c1, 0.8), Mb = k.c2, G = METAL.ouro, zf = 0.4, Wl = k.c1;
  k.box(2.2, 0.1, 0.76, 0, 0.05, 0, tone(W, 0.4)); k.box(2.28, 0.7, 0.84, 0, 0.45, -0.02, W); k.box(2.28, 0.09, 0.02, 0, 0.845, -0.43, W); k.box(2.28, 0.09, 0.02, 0, 0.845, 0.39, W); k.box(1.5, 0.09, 0.84, -0.39, 0.845, -0.02, W);
  // marble top with waterfall sides and a sink
  sinkTop(k, 2.4, 1.0, 0.93, 0.04, Mb, 0.78, 0.46, 0.4, { hz: 0.0, dep: 0.13 }); for (const s of [-1, 1]) k.box(0.04, 0.89, 1.0, s * 1.18, 0.445, 0, Mb);
  for (const [x, z, a, l] of [[-0.6, 0.3, 0.3, 0.5], [0.1, -0.3, -0.5, 0.4], [-0.9, -0.2, 1.0, 0.3], [0.3, 0.35, 0.2, 0.3]]) k.add(new THREE.PlaneGeometry(l, 0.006).rotateX(-HP), mul(T(x, 0.9305, z), RY(a)), mixHex(Mb, 0x8a8a90, 0.45));
  tap(k, 0.78, 0.93, -0.3, G, 1.5, false); k.boxS(0.014, 0.014, 0.07, 0.86, 0.975, -0.3, G, RY(0.5));
  // cooktop with glowing rings
  k.boxS(0.8, 0.008, 0.52, -0.5, 0.934, 0, 0x121316); for (const [x, z, r] of [[-0.7, -0.12, 0.09], [-0.7, 0.13, 0.07], [-0.32, -0.12, 0.07], [-0.32, 0.13, 0.09]]) { k.glow(new THREE.RingGeometry(r * 0.72, r, 20).rotateX(-HP), 0xff5a2a, 1.8, { at: [x, 0.9385, z], day: 0.3 }); k.glow(new THREE.RingGeometry(r * 0.3, r * 0.45, 14).rotateX(-HP), 0xff5a2a, 1.8, { at: [x, 0.9385, z], day: 0.3 }); }
  k.glow(new THREE.PlaneGeometry(0.2, 0.02).rotateX(-HP), 0xffffff, 1.2, { at: [-0.5, 0.9385, 0.23], day: 0.6 });
  pot(k, -0.7, 0.938, -0.12, 0.1, 0.11, METAL.cobre); k.latheS([[0.001, 0], [0.085, 0], [0.1, 0.04], [0.094, 0.04], [0.08, 0.008], [0.001, 0.008]], -0.32, 0.938, 0.13, 0x26282c, 12); rod(k, [-0.23, 0.97, 0.13], [-0.05, 0.99, 0.2], 0.01, 0x26282c, 5, 1);
  // fronts: drawers, doors and a wine niche
  for (let j = 0; j < 3; j++) { drawer(k, -0.78, 0.22 + j * 0.225, zf, 0.64, 0.205, Wl, G, 'bar'); drawer(k, -0.12, 0.22 + j * 0.225, zf, 0.64, 0.205, Wl, G, 'bar'); }
  k.box(0.4, 0.66, 0.02, 0.43, 0.45, zf - 0.005, 0x17181b); for (let j = 0; j < 4; j++) { k.box(0.38, 0.012, 0.03, 0.43, 0.2 + j * 0.16, zf + 0.005, WOOD.carvalho); for (let i = 0; i < 3; i++) { k.cylS(0.035, 0.035, 0.03, 0.31 + i * 0.12, 0.25 + j * 0.16, zf + 0.01, 0x2f4a36, 8, RX(HP)); k.cylS(0.016, 0.016, 0.03, 0.31 + i * 0.12, 0.25 + j * 0.16, zf + 0.03, (i + j) % 2 ? 0x8a2a3a : G, 6, RX(HP)); } }
  door(k, 0.89, 0.45, zf, 0.46, 0.66, Wl, { hs: -1, hy: 0.2, hc: G, hstyle: 'vbar' }); k.boxS(2.28, 0.012, 0.006, 0, 0.1, zf + 0.004, G);
  // hood hanging from the ceiling
  k.boxS(1.0, 0.1, 0.6, -0.5, 1.95, 0, STEEL); k.boxS(0.9, 0.16, 0.5, -0.5, 2.08, 0, tone(STEEL, 0.9)); k.boxS(0.34, ROOM_H - 2.16, 0.3, -0.5, (ROOM_H + 2.16) / 2, 0, STEEL); k.boxS(1.0, 0.014, 0.6, -0.5, 1.897, 0, tone(STEEL, 0.6));
  for (const x of [-0.8, -0.2]) k.glow(new THREE.CircleGeometry(0.05, 12).rotateX(HP), 0xfff0cc, 3, { at: [x, 1.888, 0.1] }); k.boxS(1.01, 0.01, 0.01, -0.5, 1.99, 0.302, G);
  // board with bread, a bowl of lemons
  k.box(0.32, 0.018, 0.2, 0.15, 0.939, -0.25, WOOD.carvalho, RY(0.2)); k.sph(0.07, 0.15, 0.975, -0.25, 0xd9a05b, 1.6, 0.6, 0.9, 8);
  k.latheS([[0.001, 0], [0.06, 0], [0.12, 0.06], [0.113, 0.06], [0.055, 0.01], [0.001, 0.01]], 0.2, 0.93, 0.26, G, 12); for (const [x, z] of [[0.17, 0.25], [0.23, 0.24], [0.2, 0.29]]) k.sph(0.035, x, 0.985, z, 0xf2d24a, 1.2, 0.9, 0.9, 6);
});

// =====================================================================================================================
// BANHEIRO
// =====================================================================================================================
const olathe = (k, pts, x, y, z, sx, sz, c, seg = 20, shiny) => (shiny ? k.addS(lathG(pts, seg), mul(T(x, y, z), S(sx, 1, sz)), c) : k.add(lathG(pts, seg), mul(T(x, y, z), S(sx, 1, sz)), c));
// a towel folded over a bar that runs along x at height y
function towel(k, x, y, z, w, len, c, t = 0.012) { k.box(w, len, t, x, y - len / 2 + 0.01, z + 0.014, c); k.box(w, len * 0.62, t, x, y - len * 0.31 + 0.01, z - 0.014, tone(c, 0.92)); k.box(w, 0.016, 0.04, x, y + 0.012, z, c); for (const f of [0.78, 0.86]) k.box(w + 0.002, len * 0.035, t + 0.002, x, y - len * f, z + 0.014, tone(c, 1.5)); }
const rolled = (k, x, y, z, c, r = 0.05, l = 0.2, rot) => { k.add(new THREE.CylinderGeometry(r, r, l, 10), mul(T(x, y, z), rot ?? RX(HP)), c); k.add(new THREE.CircleGeometry(r * 0.55, 8), mul(T(x, y, z), rot ? mul(rot, RX(-HP)) : new THREE.Matrix4(), T(0, 0, l / 2 + 0.001)), tone(c, 0.8)); };
const bottle = (k, x, y, z, c, s = 1) => { k.cylS(0.024 * s, 0.026 * s, 0.1 * s, x, y + 0.05 * s, z, c, 8); k.cylS(0.01 * s, 0.014 * s, 0.03 * s, x, y + 0.115 * s, z, 0xf4f1ea, 6); };
// drifting wisps of steam (tick-animated translucent puffs)
function steam(k, pts, r = 0.07) { const ms = pts.map(([x, y, z], i) => { const m = k.glass(new THREE.SphereGeometry(r * (0.8 + (i % 3) * 0.2), 8, 6), mul(T(x, y, z), S(1, 0.6, 1)), 0xffffff, 0.12); m.userData.y0 = y; m.userData.ph = i * 1.7; return m; });
  k.tick((dt, t) => { for (const m of ms) { const f = ((t * 0.22 + m.userData.ph) % 1 + 1) % 1; m.position.y = m.userData.y0 + f * 0.45; m.material.opacity = 0.16 * Math.sin(f * PI); const s = 0.7 + f * 0.8; m.scale.set(s, s * 0.6, s); } }); }

furn({ id: 'vaso_sanitario', name: 'Vaso sanitário', cat: 'Banheiro', price: 150, lvl: 1, w: 0.42, d: 0.7, h: 0.85, cols: [CERAM, 0xf1ede4], colN: ['Louça', 'Assento'], seat: [0, 0.43, 0.1], info: 'Com caixa acoplada e tampa. Indispensável!' }, (k) => {
  const C = k.c1, A = k.c2, zc = 0.1;
  olathe(k, [[0.001, 0], [0.105, 0], [0.115, 0.03], [0.095, 0.1], [0.105, 0.2], [0.165, 0.34], [0.182, 0.39], [0.165, 0.395], [0.13, 0.3], [0.06, 0.2], [0.001, 0.18]], 0, 0, zc, 1, 1.28, C, 18);
  k.add(new THREE.CircleGeometry(0.1, 14).rotateX(-HP), mul(T(0, 0.25, zc), S(1, 1, 1.28)), WATER); sbox(k, 0.2, 0.4, 0.22, 0, 0.2, -0.18, C, 0.04);
  ring(k, 0.15, 0.022, mul(T(0, 0.405, zc), S(1, 1, 1.28), RX(HP)), A, 0, TAU, 18, 5); k.add(new THREE.CylinderGeometry(0.17, 0.17, 0.022, 18), mul(T(0, 0.63, -0.135), RX(-0.12), S(1, 1.28, 1), RX(HP)), A); k.box(0.2, 0.03, 0.05, 0, 0.415, -0.13, A);
  sbox(k, 0.4, 0.36, 0.17, 0, 0.6, -0.26, C, 0.03); sbox(k, 0.42, 0.035, 0.19, 0, 0.795, -0.255, C, 0.015); k.cylS(0.025, 0.025, 0.012, 0, 0.817, -0.255, METAL.cromo, 10);
});

furn({ id: 'pia_banheiro_simples', name: 'Pia de coluna', cat: 'Banheiro', price: 120, lvl: 1, w: 0.52, d: 0.44, h: 1.03, cols: [CERAM, METAL.cromo], colN: ['Louça', 'Metais'], info: 'Lavatório de coluna com sabonete e torneirinha.' }, (k) => {
  const C = k.c1, M = k.c2;
  k.lathe([[0.001, 0], [0.1, 0], [0.105, 0.03], [0.07, 0.08], [0.06, 0.4], [0.075, 0.62], [0.11, 0.7]], 0, 0, -0.04, C, 14);
  olathe(k, [[0.001, 0.68], [0.08, 0.68], [0.17, 0.76], [0.2, 0.84], [0.203, 0.875], [0.185, 0.875], [0.15, 0.79], [0.05, 0.75], [0.001, 0.745]], 0, 0, 0.0, 1.25, 1, C, 20);
  sbox(k, 0.46, 0.07, 0.1, 0, 0.855, -0.17, C, 0.025); k.cylS(0.018, 0.018, 0.004, 0, 0.752, 0, M, 8);
  tap(k, 0, 0.89, -0.17, M, 0.62); sbox(k, 0.07, 0.022, 0.045, 0.17, 0.9, -0.17, 0xe9a8b8, 0.01);
});

furn({ id: 'tapetinho_banheiro', name: 'Tapetinho de banheiro', cat: 'Banheiro', kind: 'rug', price: 35, lvl: 1, w: 0.74, d: 0.45, h: 0.025, cols: [0x9fc4c9, 0xf4f1ea], colN: ['Tapete', 'Listras'], info: 'Felpudo e quentinho para os pés molhados.' }, (k) => {
  sbox(k, 0.7, 0.022, 0.45, 0, 0.011, 0, k.c1, 0.01); for (const z of [-0.14, -0.07, 0, 0.07, 0.14]) k.box(0.58, 0.006, 0.028, 0, 0.0235, z, k.c2);
  for (const s of [-1, 1]) for (let i = 0; i < 12; i++) k.box(0.02, 0.006, 0.012, s * 0.355, 0.006, -0.19 + i * 0.0345, tone(k.c1, 1.3));
});

furn({ id: 'cesto_roupa', name: 'Cesto de roupa', cat: 'Banheiro', price: 60, lvl: 1, w: 0.5, d: 0.5, h: 0.6, cols: [STRAW, 0xf2e9d8], colN: ['Vime', 'Forro'], info: 'De vime trançado, com forro de pano e uma toalha fugindo.' }, (k) => {
  const V = k.c1, F = k.c2;
  k.add(lathG([[0.001, 0], [0.16, 0], [0.17, 0.02], [0.2, 0.52], [0.185, 0.52], [0.155, 0.03], [0.001, 0.03]], 18), null, V);
  for (let i = 1; i < 7; i++) ring(k, 0.171 + i * 0.0042, 0.006, mul(T(0, 0.02 + i * 0.072, 0), RX(HP)), tone(V, i % 2 ? 0.78 : 0.9), 0, TAU, 18, 3);
  k.add(lathG([[0.178, 0.5], [0.208, 0.44], [0.214, 0.52], [0.2, 0.545], [0.182, 0.53]], 18), null, F); for (const s of [-1, 1]) ring(k, 0.04, 0.008, mul(T(s * 0.21, 0.42, 0), RY(HP), RZ(PI)), tone(V, 0.7), 0, PI, 8, 3);
  k.sph(0.16, 0, 0.5, 0, 0xa9c4d8, 1, 0.45, 1, 10); sbox(k, 0.16, 0.3, 0.03, 0.1, 0.45, 0.2, 0xe6c3cb, 0.012, mul(RY(0.3), RX(0.12))); sbox(k, 0.16, 0.05, 0.1, 0.09, 0.57, 0.16, 0xe6c3cb, 0.02, RY(0.3));
});

furn({ id: 'espelho_banheiro', name: 'Espelho de banheiro com prateleira', cat: 'Banheiro', kind: 'wall', price: 95, lvl: 2, w: 0.56, d: 0.14, h: 0.86, cols: [WOOD.branco, WOOD.mel], colN: ['Moldura', 'Prateleira'], info: 'Para escovar os dentes fazendo careta.' }, (k) => {
  const F = k.c1, y = 1.6;
  sbox(k, 0.56, 0.7, 0.03, 0, y, 0.015, F, 0.02); mirror(k, new THREE.PlaneGeometry(0.47, 0.61), T(0, y, 0.0312));
  k.box(0.54, 0.02, 0.13, 0, y - 0.4, 0.065, k.c2); for (const s of [-1, 1]) k.box(0.02, 0.06, 0.1, s * 0.22, y - 0.435, 0.05, tone(k.c2, 0.85));
  k.cylS(0.03, 0.026, 0.08, -0.16, y - 0.35, 0.07, 0xa9d0c8, 8); rod(k, [-0.165, y - 0.35, 0.07], [-0.19, y - 0.22, 0.075], 0.005, 0xd9584a, 4); rod(k, [-0.155, y - 0.35, 0.07], [-0.135, y - 0.22, 0.065], 0.005, 0x3f6d8e, 4);
  bottle(k, 0.1, y - 0.39, 0.07, 0xe6b8c2, 0.9); bottle(k, 0.18, y - 0.39, 0.06, 0x8fc7b8, 0.7);
});

furn({ id: 'toalheiro', name: 'Toalheiro com toalhas', cat: 'Banheiro', kind: 'wall', price: 85, lvl: 2, w: 0.66, d: 0.12, h: 0.56, cols: [0x7fb6c9, 0xf4efe6], colN: ['Toalha de banho', 'Toalha de rosto'], info: 'Duas toalhas macias sempre à mão.' }, (k) => {
  const y = 1.3, z = 0.08, M = METAL.cromo;
  k.cylS(0.01, 0.01, 0.62, 0, y, z, M, 8, RZ(HP)); for (const s of [-1, 1]) { k.boxS(0.014, 0.014, z, s * 0.3, y, z / 2, M); k.cylS(0.026, 0.026, 0.006, s * 0.3, y, 0.003, M, 10, RX(HP)); }
  towel(k, -0.1, y, z, 0.34, 0.5, k.c1); towel(k, 0.2, y, z, 0.18, 0.32, k.c2);
});

furn({ id: 'armarinho_banheiro', name: 'Armarinho de banheiro', cat: 'Banheiro', price: 390, lvl: 4, w: 0.42, d: 0.42, h: 1.64, cols: [WOOD.branco, 0x8fc7b8], colN: ['Madeira', 'Toalhas'], info: 'Estreitinho, com toalhas enroladas e os potinhos de creme.' }, (k) => {
  const W = k.c1, Tw = k.c2;
  carcass(k, 0.42, 1.6, 0.32, W, { plinth: 0.07 }); k.box(0.42, 0.025, 0.34, 0, 1.6125, 0, tone(W, 0.94)); for (const y of [0.72, 1.0, 1.3]) k.box(0.37, 0.02, 0.29, 0, y, 0.005, W);
  door(k, 0, 0.4, 0.16, 0.41, 0.62, tone(W, 1.03), { hs: 1, hy: 0.15, hc: METAL.cromo });
  for (const [x, yy, c] of [[-0.09, 0.78, Tw], [0.09, 0.78, tone(Tw, 1.4)], [0, 0.875, LINEN]]) rolled(k, x, yy, 0.02, c, 0.05, 0.24);
  bottle(k, -0.1, 1.01, 0.04, 0xe6b8c2, 1.1); bottle(k, -0.02, 1.01, 0.02, 0xf2d9a0, 0.9); k.cylS(0.04, 0.04, 0.06, 0.1, 1.04, 0.03, 0xf4f1ea, 10); k.cylS(0.042, 0.042, 0.016, 0.1, 1.078, 0.03, Tw, 10);
  basket(k, 0, 1.31, 0.01, 0.3, 0.16, 0.24); folded(k, 0, 1.44, 0.01, [LINEN, Tw], 0.22, 0.2);
});

furn({ id: 'banheira_simples', name: 'Banheira simples', cat: 'Banheiro', price: 920, lvl: 5, w: 1.6, d: 0.8, h: 0.79, cols: [CERAM, 0x9fc4c9], colN: ['Banheira', 'Azulejos'], info: 'Banho de espuma depois de um dia inteiro de jardim.' }, (k) => {
  const C = k.c1, Az = k.c2, h = 0.56;
  for (const s of [-1, 1]) { sbox(k, 0.09, h, 0.76, s * 0.755, h / 2, 0, C, 0.03); sbox(k, 1.48, h, 0.09, 0, h / 2, s * 0.335, C, 0.03); } k.box(1.44, 0.03, 0.6, 0, 0.14, 0, C);
  k.box(1.5, 0.48, 0.012, 0, 0.26, 0.376, Az); for (let i = 0; i < 9; i++) for (let j = 0; j < 3; j++) if ((i + j) % 2) k.box(0.166, 0.16, 0.014, -0.667 + i * 0.1667, 0.1 + j * 0.16, 0.376, tone(Az, 1.3));
  k.box(1.42, 0.02, 0.58, 0, 0.44, 0, WATER); k.glass(new THREE.BoxGeometry(1.42, 0.004, 0.58), T(0, 0.452, 0), 0xe8fbff, 0.35);
  for (const [x, z, r] of [[-0.5, 0.05, 0.09], [-0.38, -0.1, 0.07], [-0.56, -0.12, 0.06], [-0.3, 0.1, 0.06], [-0.44, 0.17, 0.05], [-0.2, -0.05, 0.05], [-0.62, 0.14, 0.05]]) k.sph(r, x, 0.46, z, 0xffffff, 1, 0.7, 1, 7);
  tap(k, -0.76, h, 0, METAL.cromo, 1.0, false); for (const s of [-1, 1]) { k.cylS(0.016, 0.02, 0.03, -0.755, h + 0.015, s * 0.12, METAL.cromo, 8); k.boxS(0.012, 0.012, 0.05, -0.755, h + 0.036, s * 0.12, METAL.cromo); }
  k.sph(0.04, 0.3, 0.485, 0.1, 0xf2cf3a, 1.2, 0.9, 1, 8); k.sph(0.026, 0.335, 0.53, 0.1, 0xf2cf3a, 1, 1, 1, 8); k.box(0.03, 0.01, 0.022, 0.365, 0.526, 0.1, 0xe8792a);                 // rubber duck
  k.box(0.3, 0.02, 0.1, 0.4, h + 0.01, -0.335, 0xf2e6d0); sbox(k, 0.34, 0.012, 0.11, 0.5, h + 0.008, 0.335, 0xe6b8c2, 0.005); sbox(k, 0.34, 0.26, 0.012, 0.5, h - 0.12, 0.388, 0xe6b8c2, 0.005);
  bottle(k, 0.32, h + 0.02, -0.335, 0x8fc7b8, 0.9); bottle(k, 0.42, h + 0.02, -0.335, 0xe9a8b8, 0.75); sbox(k, 0.06, 0.02, 0.04, 0.52, h + 0.03, -0.335, 0xf6efc8, 0.008);
});

furn({ id: 'chuveiro_box', name: 'Chuveiro com box de vidro', cat: 'Banheiro', price: 1150, lvl: 6, w: 0.96, d: 0.96, h: 2.14, cols: [CERAM, METAL.cromo], colN: ['Base', 'Metais'], info: 'Ducha grandona e box de vidro: cantoria garantida.' }, (k) => {
  const C = k.c1, M = k.c2;
  for (const s of [-1, 1]) { sbox(k, 0.06, 0.09, 0.92, s * 0.43, 0.045, 0, C, 0.02); sbox(k, 0.84, 0.09, 0.06, 0, 0.045, s * 0.43, C, 0.02); } k.box(0.82, 0.03, 0.82, 0, 0.03, 0, tone(C, 0.96)); k.cylS(0.04, 0.04, 0.006, 0, 0.048, 0.1, M, 10); k.cylS(0.03, 0.03, 0.007, 0, 0.048, 0.1, DARK, 8);
  for (const s of [-1, 1]) { k.glass(new THREE.BoxGeometry(0.008, 1.9, 0.82), T(s * 0.43, 1.04, 0), 0xcfeaf2, 0.2); k.boxS(0.02, 1.92, 0.02, s * 0.43, 1.05, 0.44, M); k.boxS(0.02, 0.02, 0.86, s * 0.43, 2.0, 0, M); k.boxS(0.02, 1.92, 0.02, s * 0.43, 1.05, -0.44, M); }
  k.glass(new THREE.BoxGeometry(0.84, 1.9, 0.008), T(0, 1.04, 0.43), 0xcfeaf2, 0.2); k.boxS(0.88, 0.02, 0.02, 0, 2.0, 0.44, M); k.boxS(0.014, 1.9, 0.014, -0.02, 1.05, 0.436, M); k.cylS(0.012, 0.012, 0.3, 0.06, 1.05, 0.46, M, 6); for (const s of [-1, 1]) k.boxS(0.014, 0.014, 0.03, 0.06, 1.05 + s * 0.13, 0.447, M);
  // riser, rain head, hand shower, mixer and a little shelf
  k.cylS(0.012, 0.012, 1.1, 0, 1.55, -0.42, M, 6); k.tubeS([[0, 2.1, -0.42], [0, 2.13, -0.36], [0, 2.12, -0.15], [0, 2.08, -0.1]], 0.012, M, 5); k.cylS(0.14, 0.14, 0.02, 0, 2.06, -0.1, M, 16); k.cylS(0.12, 0.12, 0.004, 0, 2.048, -0.1, DARK, 14);
  k.boxS(0.16, 0.05, 0.05, 0, 1.0, -0.42, M); for (const s of [-1, 1]) k.cylS(0.022, 0.022, 0.04, s * 0.1, 1.0, -0.42, M, 8, RZ(HP)); k.boxS(0.03, 0.03, 0.04, 0.2, 1.5, -0.43, M); k.cylS(0.012, 0.014, 0.16, 0.2, 1.55, -0.4, M, 6, RX(0.4)); k.cylS(0.035, 0.03, 0.02, 0.2, 1.63, -0.36, M, 10, RX(HP + 0.4));
  k.tubeS([[0.05, 0.98, -0.42], [0.14, 0.8, -0.4], [0.24, 1.0, -0.41], [0.2, 1.46, -0.42]], 0.006, M, 4);
  k.boxS(0.24, 0.012, 0.1, -0.28, 1.2, -0.39, M); bottle(k, -0.34, 1.206, -0.39, 0xe9a8b8, 1.1); bottle(k, -0.26, 1.206, -0.39, 0x8fc7b8, 0.9); sbox(k, 0.06, 0.022, 0.04, -0.2, 1.217, -0.39, 0xf6efc8, 0.008);
});

furn({ id: 'gabinete_pia_espelho', name: 'Gabinete com pia e espelho', cat: 'Banheiro', price: 1350, lvl: 7, w: 0.9, d: 0.5, h: 1.94, surf: 0.84, cols: [WOOD.carvalho, MARBLE], colN: ['Gabinete', 'Tampo'], info: 'Cuba de apoio, gavetão para as toalhas e espelho iluminado.' }, (k) => {
  const W = k.c1, Ct = k.c2, G = METAL.latao, zf = 0.2;
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) k.cyl(0.02, 0.014, 0.18, sx * 0.4, 0.09, -0.03 + sz * 0.17, G, 8);
  k.box(0.88, 0.6, 0.45, 0, 0.5, -0.025, W); k.box(0.9, 0.04, 0.5, 0, 0.82, 0, Ct); k.box(0.9, 0.08, 0.02, 0, 0.88, -0.24, Ct);
  drawer(k, 0, 0.67, zf, 0.84, 0.2, tone(W, 1.06), G, 'bar'); for (const s of [-1, 1]) door(k, s * 0.2125, 0.39, zf, 0.415, 0.34, tone(W, 1.06), { hs: -s, hy: 0.1, hc: G });
  olathe(k, [[0.001, 0], [0.07, 0], [0.16, 0.05], [0.19, 0.12], [0.178, 0.125], [0.15, 0.065], [0.06, 0.025], [0.001, 0.022]], -0.12, 0.84, 0.02, 1.15, 1, CERAM, 18); tap(k, -0.12, 0.84, -0.19, G, 1.05, false); k.boxS(0.012, 0.05, 0.012, -0.07, 0.89, -0.19, G, RZ(-0.5));
  rolled(k, 0.28, 0.89, 0.02, 0xa9c4d8, 0.05, 0.2); rolled(k, 0.28, 0.975, 0.02, LINEN, 0.045, 0.2); bottle(k, 0.2, 0.84, -0.16, 0xe6b8c2, 1); k.latheS([[0.001, 0], [0.03, 0], [0.04, 0.05], [0.035, 0.05], [0.025, 0.008]], 0.33, 0.84, -0.17, 0x8fc7b8, 8);
  // mirror on the wall with two sconces
  sbox(k, 0.72, 0.86, 0.03, 0, 1.5, -0.235, W, 0.02); mirror(k, new THREE.PlaneGeometry(0.64, 0.78), T(0, 1.5, -0.2188));
  for (const s of [-1, 1]) { k.boxS(0.03, 0.08, 0.05, s * 0.405, 1.6, -0.225, G); k.glow(new THREE.CylinderGeometry(0.035, 0.035, 0.2, 10), 0xfff1d0, 2.4, { at: [s * 0.405, 1.6, -0.17], day: 0.3 }); for (const q of [-1, 1]) k.cylS(0.038, 0.038, 0.012, s * 0.405, 1.6 + q * 0.105, -0.17, G, 10); }
});

furn({ id: 'banheira_vitoriana', name: 'Banheira vitoriana com pés', cat: 'Banheiro', price: 3300, lvl: 11, w: 1.72, d: 0.84, h: 1.1, cols: [0x5f8a8a, METAL.ouro], colN: ['Pintura', 'Metais'], info: 'Pés de leão, torneira de coluna e espuma até a borda.' }, (k) => {
  const P = k.c1, G = k.c2, sx = 2.05, sz = 0.95;
  olathe(k, [[0.001, 0.16], [0.2, 0.16], [0.3, 0.22], [0.36, 0.4], [0.39, 0.62], [0.412, 0.665]], 0, 0, 0, sx, sz, P, 24);
  olathe(k, [[0.412, 0.665], [0.418, 0.69], [0.4, 0.705], [0.375, 0.69], [0.36, 0.62], [0.33, 0.4], [0.26, 0.27], [0.001, 0.25]], 0, 0, 0, sx, sz, CERAM, 24);
  k.add(new THREE.CircleGeometry(0.365, 24).rotateX(-HP), mul(T(0, 0.61, 0), S(sx, 1, sz)), WATER); k.glass(new THREE.CircleGeometry(0.368, 24).rotateX(-HP), mul(T(0, 0.622, 0), S(sx, 1, sz)), 0xe8fbff, 0.35);
  for (const [x, z, r] of [[-0.45, 0.02, 0.1], [-0.3, -0.12, 0.08], [-0.55, -0.1, 0.07], [-0.22, 0.1, 0.07], [-0.4, 0.17, 0.06], [-0.1, -0.04, 0.06], [-0.6, 0.1, 0.06], [0.05, 0.1, 0.045], [-0.3, 0.04, 0.09]]) k.sph(r, x, 0.63, z, 0xffffff, 1, 0.75, 1, 7);
  for (const qx of [-1, 1]) for (const qz of [-1, 1]) { const x = qx * 0.5, z = qz * 0.23; k.latheS([[0.001, 0], [0.04, 0], [0.05, 0.03], [0.03, 0.07], [0.045, 0.16], [0.06, 0.22]], x, 0, z, G, 8); k.sphS(0.03, x + qx * 0.03, 0.025, z + qz * 0.03, G, 1.2, 0.8, 1.2, 6); }
  // freestanding column tap with hand shower
  for (const s of [-1, 1]) k.cylS(0.012, 0.012, 0.92, 0.9 - 0.06, 0.46, s * 0.07, G, 6); k.boxS(0.05, 0.05, 0.2, 0.84, 0.92, 0, G); for (const s of [-1, 1]) { k.cylS(0.012, 0.012, 0.05, 0.84, 0.955, s * 0.07, G, 6); k.boxS(0.012, 0.012, 0.06, 0.84, 0.98, s * 0.07, G, RY(0.5)); }
  k.tubeS([[0.82, 0.92, 0], [0.76, 0.95, 0], [0.68, 0.92, 0], [0.66, 0.86, 0]], 0.014, G, 5); k.tubeS([[0.84, 0.95, 0], [0.84, 1.06, 0], [0.8, 1.08, 0]], 0.008, G, 4); k.cylS(0.012, 0.016, 0.16, 0.74, 1.065, 0, CERAM, 6, RZ(HP + 0.15)); k.cylS(0.03, 0.02, 0.03, 0.655, 1.045, 0, G, 8, RZ(0.3));
  sbox(k, 0.3, 0.012, 0.07, 0.25, 0.711, 0.385, LINEN, 0.005); sbox(k, 0.3, 0.3, 0.012, 0.25, 0.565, 0.41, LINEN, 0.005); k.box(0.302, 0.03, 0.014, 0.25, 0.46, 0.41, P);
});

furn({ id: 'ofuro', name: 'Ofurô de madeira', cat: 'Banheiro', price: 4600, lvl: 13, w: 1.24, d: 1.3, h: 0.8, cols: [WOOD.mel, METAL.cobre], colN: ['Madeira', 'Cintas'], info: 'Água quentinha até o pescoço, vapor subindo e cheiro de cedro.' }, (k) => {
  const W = k.c1, M = k.c2, zc = -0.08, n = 22;
  for (let i = 0; i < n; i++) { const a = i * TAU / n; k.add(new THREE.BoxGeometry(0.155, 0.78, 0.035), mul(T(Math.sin(a) * 0.54, 0.39, zc + Math.cos(a) * 0.54), RY(a)), i % 2 ? W : tone(W, 1.07)); }
  for (const y of [0.16, 0.6]) k.addS(new THREE.CylinderGeometry(0.568, 0.568, 0.035, n * 2, 1, true), T(0, y, zc), M); k.add(lathG([[0.52, 0.76], [0.57, 0.76], [0.57, 0.79], [0.52, 0.79]], n), T(0, 0, zc), tone(W, 0.9));
  k.add2(new THREE.CylinderGeometry(0.525, 0.525, 0.6, n, 1, true), T(0, 0.48, zc), tone(W, 0.85)); k.cyl(0.53, 0.53, 0.02, 0, 0.64, zc, WATER, n); k.glass(new THREE.CircleGeometry(0.525, n).rotateX(-HP), T(0, 0.655, zc), 0xe8fbff, 0.35);
  k.box(0.3, 0.03, 0.9, -0.3, 0.6, zc, tone(W, 0.9));                                                                              // inner bench, just under water
  steam(k, [[-0.2, 0.68, zc], [0.2, 0.7, zc - 0.15], [0.05, 0.66, zc + 0.2], [-0.1, 0.72, zc - 0.25], [0.3, 0.67, zc + 0.1]], 0.085);
  // step, bucket and ladle
  k.box(0.6, 0.04, 0.2, 0, 0.26, 0.54, tone(W, 1.06)); for (const s of [-1, 1]) k.box(0.04, 0.24, 0.18, s * 0.26, 0.12, 0.54, W);
  k.add(lathG([[0.001, 0], [0.07, 0], [0.085, 0.14], [0.075, 0.14], [0.062, 0.012], [0.001, 0.012]], 12), T(-0.16, 0.28, 0.54), tone(W, 0.95)); ring(k, 0.08, 0.005, mul(T(-0.16, 0.37, 0.54), RX(HP)), M, 1, TAU, 12, 3); ring(k, 0.08, 0.005, mul(T(-0.16, 0.42, 0.54), RY(0.3)), M, 1, PI, 8, 3);
  rolled(k, 0.14, 0.33, 0.54, LINEN, 0.05, 0.22, mul(RY(0.3), RZ(HP)));
});

furn({ id: 'banheira_hidro_luxo', name: 'Banheira de hidromassagem de luxo', cat: 'Banheiro', price: 16800, lvl: 18, w: 2.0, d: 1.5, h: 0.95, cols: [MARBLE, METAL.ouro], colN: ['Mármore', 'Metais'], info: 'Mármore, jatos, luz na água, velas e espumante: spa em casa.' }, (k) => {
  const Mb = k.c1, G = k.c2, h = 0.62, zc = -0.15, Md = tone(Mb, 0.9);
  // marble deck around a real hole, apron, step
  const hw = 1.5, hd = 0.8; k.box(0.25, 0.06, 1.2, -0.875, h - 0.03, zc, Mb); k.box(0.25, 0.06, 1.2, 0.875, h - 0.03, zc, Mb); k.box(hw, 0.06, 0.2, 0, h - 0.03, zc - 0.5, Mb); k.box(hw, 0.06, 0.2, 0, h - 0.03, zc + 0.5, Mb);
  k.box(1.96, h - 0.06, 0.03, 0, (h - 0.06) / 2, zc + 0.575, Md); for (const s of [-1, 1]) k.box(0.03, h - 0.06, 1.16, s * 0.965, (h - 0.06) / 2, zc, Md); for (let i = 0; i < 5; i++) k.box(0.36, h - 0.14, 0.008, -0.76 + i * 0.38, (h - 0.06) / 2, zc + 0.592, Mb);
  k.box(2.0, 0.18, 0.3, 0, 0.09, 0.6, Mb); k.box(2.0, 0.012, 0.31, 0, 0.186, 0.6, Md); k.boxS(1.9, 0.012, 0.006, 0, 0.03, 0.752, G);
  for (const [x, z, a, l] of [[-0.88, 0, 1.3, 0.5], [0.86, -0.3, 1.8, 0.4], [0.3, 0.36, 0.2, 0.5], [-0.4, -0.64, -0.1, 0.4]]) k.add(new THREE.PlaneGeometry(l, 0.006).rotateX(-HP), mul(T(x, h + 0.0005, z), RY(a)), mixHex(Mb, 0x8a8a90, 0.45));
  // the tub itself
  k.box(hw, 0.03, hd, 0, 0.12, zc, CERAM); for (const s of [-1, 1]) { k.box(0.03, h - 0.12, hd, s * (hw / 2 + 0.01), (h + 0.1) / 2, zc, CERAM); k.box(hw, h - 0.12, 0.03, 0, (h + 0.1) / 2, zc + s * (hd / 2 + 0.01), CERAM); }
  for (const s of [-1, 1]) sbox(k, 0.2, 0.3, hd, s * (hw / 2 - 0.09), 0.3, zc, CERAM, 0.08);
  k.box(hw - 0.02, 0.02, hd - 0.02, 0, 0.48, zc, 0x8fd6e2); k.glow(new THREE.PlaneGeometry(hw - 0.3, hd - 0.2).rotateX(-HP), 0x7ff0f4, 1.5, { at: [0, 0.4915, zc], day: 0.2, opacity: 0.5 }); k.boxS(2.0, 0.01, 0.01, 0, h - 0.055, zc + 0.6, G); k.glass(new THREE.BoxGeometry(hw - 0.02, 0.004, hd - 0.02), T(0, 0.493, zc), 0xe8fbff, 0.35);
  for (let i = 0; i < 5; i++) { for (const s of [-1, 1]) { k.cylS(0.022, 0.022, 0.012, -0.4 + i * 0.2, 0.555, zc + s * (hd / 2 - 0.002), G, 8, RX(HP)); } }
  for (const [x, z, r] of [[0.5, 0.1, 0.08], [0.38, -0.12, 0.06], [0.55, -0.2, 0.06], [0.3, 0.2, 0.05], [0.6, 0.25, 0.05], [0.2, 0.0, 0.04]]) k.sph(r, x, 0.5, zc + z, 0xffffff, 1, 0.7, 1, 7);
  for (const s of [-1, 1]) puff(k, -0.68, h + 0.04, zc + s * 0.2, 0.14, 0.26, 0.1, 0xf4efe6, null, 0.8);
  // golden tap, candles, sparkling wine, rolled towels
  tap(k, 0.2, h, zc - 0.5, G, 1.5, false); for (const s of [-1, 1]) { k.cylS(0.02, 0.024, 0.04, 0.2 + s * 0.16, h + 0.02, zc - 0.5, G, 8); k.boxS(0.07, 0.014, 0.014, 0.2 + s * 0.16, h + 0.05, zc - 0.5, G); }
  for (const [x, z, hh] of [[-0.9, -0.62, 0.12], [-0.82, -0.56, 0.08], [-0.92, -0.5, 0.16], [0.9, 0.38, 0.1], [0.84, 0.32, 0.14]]) { k.cyl(0.03, 0.03, hh, x, h + hh / 2, z, 0xf7f0e0, 8); k.glow(new THREE.SphereGeometry(0.014, 6, 5), 0xffc860, 3, { M: mul(T(x, h + hh + 0.022, z), S(1, 1.8, 1)), day: 0.9 }); }
  k.latheS([[0.001, 0], [0.07, 0], [0.09, 0.16], [0.1, 0.17], [0.085, 0.17], [0.065, 0.012]], 0.85, h, -0.55, G, 12); k.cylS(0.03, 0.035, 0.2, 0.85, h + 0.13, -0.55, 0x2f4a36, 8, RZ(0.25)); k.cylS(0.012, 0.016, 0.1, 0.815, h + 0.27, -0.55, G, 6, RZ(0.25));
  for (const x of [0.6, 0.68]) { k.latheS([[0.001, 0], [0.025, 0], [0.004, 0.012], [0.004, 0.07], [0.022, 0.1], [0.02, 0.15]], x, h, -0.66 + (x - 0.6) * 0.5, 0xe8f4f0, 8); }
  rolled(k, -0.88, h + 0.05, 0.3, 0xf4efe6, 0.05, 0.24, RY(0.2)); rolled(k, -0.88, h + 0.05, 0.19, tone(G, 1.4), 0.05, 0.24, RY(0.2)); rolled(k, -0.88, h + 0.135, 0.245, 0xf4efe6, 0.05, 0.24, RY(0.2));
  steam(k, [[-0.3, 0.6, zc], [0.3, 0.65, zc - 0.2], [0, 0.56, zc + 0.2]], 0.08);
});
