import * as THREE from 'three';
import { Builder } from './builder.js';
import { T, RX, RY, RZ, S, mul, col, mulberry, clamp, lerp, TAU, smooth, easeInOut } from './util.js';
import { makePlantMaterial } from './plantmat.js';
import { resolveWear } from './wardrobe.js';

const SKIN = 0xfbe0cc, HAIR = [0x7c5c44, 0x9a7658, 0xbc9a78], DRESS = 0x7fa08a, DRESS2 = 0x6c8e78, BLOUSE = 0xfbf3e4, BOOT = 0xdfa53c, STRAW = 0xecd49a, RIBBON = 0xe8736a;

function faceTexture(mode) {
  const c = document.createElement('canvas'); c.width = 1024; c.height = 512;
  const g = c.getContext('2d');
  g.fillStyle = '#fbe0cc'; g.fillRect(0, 0, 1024, 512);
  const cx = 256, ey = 276, K = 1.62;
  g.translate(cx, ey); g.scale(K, K); g.translate(-cx, -ey);
  for (const s of [-1, 1]) { const gr = g.createRadialGradient(cx + s * 58, ey + 30, 2, cx + s * 58, ey + 30, 26); gr.addColorStop(0, 'rgba(244,128,128,0.5)'); gr.addColorStop(1, 'rgba(244,128,128,0)'); g.fillStyle = gr; g.fillRect(cx + s * 58 - 30, ey, 60, 62); }
  for (const s of [-1, 1]) {
    const ex = cx + s * 36;
    if (mode === 'open') {
      g.save(); g.beginPath(); g.ellipse(ex, ey, 16.5, 20, 0, 0, TAU); g.clip();
      g.fillStyle = '#fffdfa'; g.fillRect(ex - 20, ey - 24, 40, 48);
      const ir = g.createRadialGradient(ex, ey + 5, 2, ex, ey + 1, 16);
      ir.addColorStop(0, '#d9c27a'); ir.addColorStop(0.42, '#a9a45e'); ir.addColorStop(0.85, '#6f7a44'); ir.addColorStop(1, '#4a5230');
      g.fillStyle = ir; g.beginPath(); g.ellipse(ex, ey + 2, 13.5, 16.5, 0, 0, TAU); g.fill();
      g.fillStyle = '#1e2a2c'; g.beginPath(); g.ellipse(ex, ey + 2, 5.6, 7.6, 0, 0, TAU); g.fill();
      g.fillStyle = 'rgba(60,40,30,0.26)'; g.fillRect(ex - 20, ey - 24, 40, 9);
      g.fillStyle = '#ffffff'; g.beginPath(); g.ellipse(ex - 5, ey - 6, 4.4, 5.2, 0, 0, TAU); g.fill(); g.beginPath(); g.ellipse(ex + 5, ey + 9, 2.1, 2.5, 0, 0, TAU); g.fill();
      g.restore();
      g.strokeStyle = '#4a3022'; g.lineWidth = 4; g.lineCap = 'round';
      g.beginPath(); g.moveTo(ex - 18, ey - 9); g.quadraticCurveTo(ex, ey - 27, ex + 18, ey - 9); g.stroke();
      g.lineWidth = 2.6; g.beginPath(); g.moveTo(ex + s * 17, ey - 10); g.lineTo(ex + s * 23, ey - 15); g.stroke(); g.beginPath(); g.moveTo(ex + s * 14, ey - 14); g.lineTo(ex + s * 18, ey - 21); g.stroke();
    } else {
      g.strokeStyle = '#4a3022'; g.lineWidth = 4; g.lineCap = 'round'; g.beginPath();
      if (mode === 'happy') { g.moveTo(ex - 16, ey + 5); g.quadraticCurveTo(ex, ey - 13, ex + 16, ey + 5); }
      else { g.moveTo(ex - 16, ey + 1); g.quadraticCurveTo(ex, ey + 12, ex + 16, ey + 1); }
      g.stroke();
    }
    g.strokeStyle = '#7c5a40'; g.lineWidth = 3.4; g.lineCap = 'round'; g.beginPath(); g.moveTo(ex - 15, ey - 35 + s * 0); g.quadraticCurveTo(ex, ey - 42, ex + 15, ey - 35); g.stroke();
  }
  g.fillStyle = 'rgba(220,150,120,0.45)'; g.beginPath(); g.ellipse(cx, ey + 28, 3.4, 2.4, 0, 0, TAU); g.fill();
  g.strokeStyle = '#c4605c'; g.lineWidth = 3; g.lineCap = 'round'; g.beginPath();
  if (mode === 'happy') { g.moveTo(cx - 11, ey + 43); g.quadraticCurveTo(cx, ey + 58, cx + 11, ey + 43); g.closePath(); g.fillStyle = '#d8706a'; g.fill(); }
  else { g.moveTo(cx - 12, ey + 44); g.quadraticCurveTo(cx, ey + 47.5, cx + 12, ey + 44); g.quadraticCurveTo(cx, ey + 58, cx - 12, ey + 44); g.closePath(); g.fillStyle = '#fffaf4'; g.fill(); g.lineJoin = 'round'; g.lineWidth = 2.6; }
  g.stroke();
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; return t;
}

// Cloth: drawn for the chosen colour and print. Canvas top = hem (when o.hem), x wraps around the body (front at x = 0).
const hex = (n) => '#' + n.toString(16).padStart(6, '0');
function mixHex(a, b, t) { const A = new THREE.Color(a), B = new THREE.Color(b); return '#' + A.lerp(B, t).getHexString(); }
export function fabricCanvas(pattern, color, o = {}) {
  if (o == null || typeof o === 'number') o = { apron: o, hem: true }; // old call: fabricCanvas(pattern, color, apron)
  const apron = o.apron, W = 1024, H = 256, c = document.createElement('canvas'); c.width = W; c.height = H; const g = c.getContext('2d');
  if (!g.roundRect) g.roundRect = (x, y, w, h) => g.rect(x, y, w, h);
  const base = hex(color), lum = new THREE.Color(color).getHSL({}).l, light = lum > 0.82 ? mixHex(color, 0x7a8aa0, 0.3) : mixHex(color, 0xffffff, 0.75), dark = mixHex(color, 0x000000, 0.22), r = (() => { let a = 7; return () => ((a = (a * 16807) % 2147483647) / 2147483647); })();
  g.fillStyle = base; g.fillRect(0, 0, W, H);
  const tile = (step, fn) => { for (let y = step / 2; y < H; y += step) for (let x = step / 2 + ((Math.round(y / step) % 2) * step) / 2; x < W + step; x += step) fn(x % W, y); };
  if (pattern === 'poa') { g.fillStyle = light; tile(32, (x, y) => { g.beginPath(); g.arc(x, y, 6.5, 0, TAU); g.fill(); }); }
  else if (pattern === 'xadrez') { g.fillStyle = lum > 0.82 ? 'rgba(90,110,140,0.35)' : 'rgba(255,255,255,0.5)'; for (let x = 0; x < W; x += 32) g.fillRect(x, 0, 16, H); for (let y = 0; y < H; y += 32) g.fillRect(0, y, W, 16); }
  else if (pattern === 'vichy') { g.fillStyle = lum > 0.82 ? 'rgba(90,110,140,0.3)' : 'rgba(255,255,255,0.45)'; for (let x = 0; x < W; x += 16) g.fillRect(x, 0, 8, H); for (let y = 0; y < H; y += 16) g.fillRect(0, y, W, 8); }
  else if (pattern === 'listras') { g.fillStyle = light; for (let x = 0; x < W; x += 32) g.fillRect(x, 0, 11, H); }
  else if (pattern === 'marinheiro') { g.fillStyle = light; for (let y = 6; y < H; y += 32) g.fillRect(0, y, W, 12); }
  else if (pattern === 'florido') { const cs = ['#fff6e8', '#ffd6e2', '#ffe9a8', mixHex(color, 0xffffff, 0.55)];
    tile(44, (x, y) => { const X = x + (r() - 0.5) * 12, Y = y + (r() - 0.5) * 12, cc = cs[Math.floor(r() * cs.length)]; g.fillStyle = cc; for (let k = 0; k < 5; k++) { const a = (k / 5) * TAU; g.beginPath(); g.arc(X + Math.cos(a) * 6, Y + Math.sin(a) * 6, 5, 0, TAU); g.fill(); } g.fillStyle = '#f2b23a'; g.beginPath(); g.arc(X, Y, 3.4, 0, TAU); g.fill();
      g.fillStyle = mixHex(color, 0x2f6a34, 0.6); g.beginPath(); g.ellipse(X + 12, Y + 9, 6, 2.6, 0.7, 0, TAU); g.fill(); }); }
  else if (pattern === 'miudo') { const cs = ['#ffffff', '#ffd0dc', '#fff0a8', '#e2d4ff']; tile(22, (x, y) => { const X = x + (r() - 0.5) * 8, Y = y + (r() - 0.5) * 8; g.fillStyle = cs[Math.floor(r() * cs.length)]; for (let k = 0; k < 4; k++) { const a = (k / 4) * TAU; g.beginPath(); g.arc(X + Math.cos(a) * 2.6, Y + Math.sin(a) * 2.6, 2.3, 0, TAU); g.fill(); } g.fillStyle = '#e8a02a'; g.beginPath(); g.arc(X, Y, 1.5, 0, TAU); g.fill(); }); }
  else if (pattern === 'margaridas') { tile(58, (x, y) => { g.fillStyle = lum > 0.82 ? '#fff4c8' : '#ffffff'; for (let k = 0; k < 9; k++) { const a = (k / 9) * TAU; g.beginPath(); g.ellipse(x + Math.cos(a) * 9, y + Math.sin(a) * 9, 7, 3, a, 0, TAU); g.fill(); } g.fillStyle = '#f5c22a'; g.beginPath(); g.arc(x, y, 5, 0, TAU); g.fill(); }); }
  else if (pattern === 'coracoes') { g.fillStyle = light; tile(40, (x, y) => { g.beginPath(); g.moveTo(x, y + 7); g.bezierCurveTo(x - 14, y - 4, x - 5, y - 13, x, y - 4); g.bezierCurveTo(x + 5, y - 13, x + 14, y - 4, x, y + 7); g.fill(); }); }
  else if (pattern === 'folhas') { tile(46, (x, y) => { g.strokeStyle = dark; g.lineWidth = 2; g.beginPath(); g.moveTo(x - 10, y + 10); g.lineTo(x + 10, y - 10); g.stroke(); g.fillStyle = light; for (const [dx, dy, a] of [[-4, 2, 0.2], [3, -3, 2.0], [8, -10, 0.2], [-2, 8, 2.0]]) { g.beginPath(); g.ellipse(x + dx, y + dy, 7, 3, a, 0, TAU); g.fill(); } }); }
  else if (pattern === 'estrelas') { g.fillStyle = light; tile(40, (x, y) => { g.beginPath(); for (let k = 0; k < 10; k++) { const a = (k / 10) * TAU - Math.PI / 2, rr = k % 2 ? 3.6 : 8.5; g.lineTo(x + Math.cos(a) * rr, y + Math.sin(a) * rr); } g.fill(); }); }
  else if (pattern === 'losangos') { g.fillStyle = light; tile(32, (x, y) => { g.beginPath(); g.moveTo(x, y - 12); g.lineTo(x + 9, y); g.lineTo(x, y + 12); g.lineTo(x - 9, y); g.fill(); }); g.strokeStyle = dark; g.globalAlpha = 0.35; g.lineWidth = 1.5; for (let x = -H; x < W + H; x += 32) { g.beginPath(); g.moveTo(x, 0); g.lineTo(x + H * 0.75, H); g.moveTo(x, 0); g.lineTo(x - H * 0.75, H); g.stroke(); } g.globalAlpha = 1; }
  else if (pattern === 'ondas') { g.strokeStyle = light; g.lineWidth = 5; for (let y = 10; y < H + 20; y += 26) { g.beginPath(); for (let x = 0; x <= W; x += 8) g.lineTo(x, y + Math.sin((x / 64) * TAU) * 6); g.stroke(); } }
  // apron: a pale panel over the front, with a pocket
  if (apron != null) { const ac = hex(apron), w = 150; g.fillStyle = ac; for (const x0 of [-w, W - w]) { g.beginPath(); g.roundRect(x0, 30, w * 2, H + 20, 34); g.fill(); }
    g.strokeStyle = mixHex(apron, 0x000000, 0.14); g.lineWidth = 3; for (const x0 of [-w, W - w]) { g.beginPath(); g.roundRect(x0 + 5, 35, w * 2 - 10, H + 20, 30); g.stroke(); }
    g.fillStyle = mixHex(apron, 0x000000, 0.07); for (const x0 of [44, W - 106]) { g.beginPath(); g.roundRect(x0, 118, 62, 56, 12); g.fill(); } }
  // hem: scalloped lighter band
  if (o.hem) { g.fillStyle = light; g.fillRect(0, 0, W, 9); for (let x = 8; x < W; x += 16) { g.beginPath(); g.arc(x, 9, 8, 0, Math.PI); g.fill(); }
    g.fillStyle = dark; g.globalAlpha = 0.25; g.fillRect(0, 20, W, 2.5); g.globalAlpha = 1; }
  return c;
}
const std = (color, rough = 0.7, extra = {}) => new THREE.MeshStandardMaterial({ color, roughness: rough, ...extra });
function part(geo, mat, parent, x = 0, y = 0, z = 0) { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.castShadow = true; m.receiveShadow = true; parent.add(m); return m; }
function joint(parent, x, y, z) { const g = new THREE.Group(); g.position.set(x, y, z); parent.add(g); return g; }
const lathe = (pts, seg = 20, a0, al) => new THREE.LatheGeometry(pts.map(([r, y]) => new THREE.Vector2(r, y)), seg, a0, al);
// the torso's silhouette (radius at each height above the waist); clothes are cut a little wider than it
const BODY = [[0.118, 0], [0.108, 0.1], [0.125, 0.24], [0.138, 0.32], [0.11, 0.4], [0.05, 0.43], [0.045, 0.5]];
const bodyR = (y) => { if (y <= 0) return BODY[0][0] + Math.min(0.012, -y * 0.2); for (let i = 1; i < BODY.length; i++) if (y <= BODY[i][1]) { const [r0, y0] = BODY[i - 1], [r1, y1] = BODY[i]; return r0 + ((r1 - r0) * (y - y0)) / (y1 - y0); } return BODY[BODY.length - 1][0]; };
const shell = (y0, y1, k, n = 12) => { const pts = []; for (let i = 0; i <= n; i++) { const y = y0 + ((y1 - y0) * i) / n; pts.push([bodyR(y) * k, y]); } return pts; };
const tri = (x) => 1 - 2 * Math.abs(((x / TAU) % 1 + 1) % 1 - 0.5) * 2; // triangle wave, period 2π, -1..1
const ZS = 0.83; // the torso is a little flat front to back

// a skirt of any cut. Returns the geometry (waist at y = 0.02, hem at 0.02 - len)
function skirtGeometry(sp) {
  const len = sp.len, fl = sp.flare, NR = 16, pts = [];
  for (let i = 0; i <= NR; i++) { const t = i / NR; let r;
    if (sp.shape === 'lapis') r = 0.112 + 0.028 * Math.min(1, t * 4) + fl * t;
    else if (sp.shape === 'balone') r = 0.124 + fl * Math.pow(Math.sin(Math.PI * Math.pow(t, 0.8)), 0.8) + 0.045 * t;
    else if (sp.shape === 'sereia') r = 0.112 + 0.03 * Math.min(1, t * 4) + 0.012 * t + fl * Math.pow(smooth((t - 0.6) / 0.4), 1.3);
    else r = 0.112 + 0.012 * Math.min(1, t * 6) + fl * Math.pow(t, 1.25);
    if (sp.tiers) { const f = t * sp.tiers, k = f - Math.floor(f); r += 0.024 * (i === NR ? 1 : k) * Math.min(1, t * 3); }
    pts.push([r, 0.02 - t * len]); }
  const geo = lathe(pts, 32), p = geo.attributes.position, soft = sp.shape === 'lapis' ? 0.012 : sp.tiers ? 0.085 : 0.06;
  for (let i = 0; i < p.count; i++) { let y = p.getY(i); const a = Math.atan2(p.getZ(i), p.getX(i)), t = clamp((0.02 - y) / len, 0, 1);
    let k = 1 + soft * Math.sin(a * 9) * t; if (sp.pleats) k += sp.pleats[1] * tri(a * sp.pleats[0]) * t; if (sp.tiers) k += 0.03 * Math.sin(a * 15 + Math.floor(t * sp.tiers) * 1.7) * t;
    if (sp.zig) y += sp.zig[1] * (0.5 + 0.5 * tri(a * sp.zig[0])) * t * t * t;
    if (sp.asym) y = 0.02 - (0.02 - y) * (1 - sp.asym * Math.max(0, Math.cos(a - 1.05)) ** 2);
    p.setXYZ(i, p.getX(i) * k, y, p.getZ(i) * k * 0.92); }
  geo.computeVertexNormals(); return geo;
}

export function createGardener() {
  const root = new THREE.Group(), body = joint(root, 0, 0, 0), DS = { side: THREE.DoubleSide };
  const mSkin = std(SKIN, 0.62), mLeg = std(SKIN, 0.62), mHand = std(SKIN, 0.62);
  // every slot has a main and a detail material; cloth is double-sided (open hems, sleeves, collars)
  const M = { top: std(0xffffff, 0.8, DS), top2: std(0xffffff, 0.8, DS), bot: std(0xffffff, 0.8, DS), bot2: std(0xffffff, 0.8, DS), skirt: std(0xffffff, 0.8, DS), waist: std(0xffffff, 0.8), apron: std(0xffffff, 0.8, DS),
    shoe: std(BOOT, 0.45), shoe2: std(0xffffff, 0.5), sole: std(0xf6f1e6, 0.7), sock: std(0xffffff, 0.8), sock2: std(0xffffff, 0.8), hat: std(STRAW, 0.9, DS), hat2: std(RIBBON, 0.75, DS),
    neck: std(RIBBON, 0.7, DS), neck2: std(0xffffff, 0.7, DS), hand: std(0xffffff, 0.6), hand2: std(0xffffff, 0.6), bag: std(0xb98a5e, 0.8, DS), bag2: std(0xf2c84a, 0.6, DS), face: std(0x6a4a3a, 0.4), lens: std(0x20242c, 0.15, { transparent: true, opacity: 0.82 }),
    ear: std(0x2f8f5e, 0.3, { metalness: 0.4 }), ear2: std(0xf2c84a, 0.3, { metalness: 0.4 }) };
  const J = {};
  J.hips = joint(body, 0, 0.87, 0);
  J.spine = joint(J.hips, 0, 0.1, 0);
  part(lathe([[0.001, -0.02], ...BODY]), mSkin, J.spine).scale.z = 0.82;
  J.skirt = joint(J.hips, 0, 0.11, 0);
  // legs
  for (const s of [-1, 1]) {
    const hip = joint(J.hips, s * 0.075, 0, 0), knee = joint(hip, 0, -0.4, 0);
    part(lathe([[0.001, -0.43], [0.047, -0.41], [0.052, -0.36], [0.06, -0.2], [0.064, -0.08], [0.058, 0.0], [0.03, 0.04], [0.001, 0.045]], 16), mLeg, hip);          // thigh
    part(lathe([[0.001, -0.445], [0.034, -0.44], [0.037, -0.38], [0.043, -0.3], [0.051, -0.16], [0.052, -0.08], [0.048, 0.0], [0.001, 0.03]], 16), mLeg, knee);        // shin and ankle
    part(new THREE.SphereGeometry(0.046, 14, 10), mLeg, knee, 0, -0.004, 0);
    J[s < 0 ? 'hipL' : 'hipR'] = hip; J[s < 0 ? 'kneeL' : 'kneeR'] = knee;
  }
  // arms
  for (const s of [-1, 1]) {
    const sh = joint(J.spine, s * 0.15, 0.345, 0), el = joint(sh, 0, -0.23, 0);
    part(new THREE.SphereGeometry(0.04, 10, 8), mSkin, sh, -s * 0.004, -0.004, 0);
    part(lathe([[0.001, -0.262], [0.0305, -0.235], [0.032, -0.2], [0.0355, -0.12], [0.0365, -0.035], [0.03, 0.0], [0.001, 0.012]], 14), mSkin, sh).receiveShadow = false;
    part(lathe([[0.001, -0.218], [0.0225, -0.205], [0.0235, -0.185], [0.028, -0.11], [0.031, -0.03], [0.0295, 0.004], [0.001, 0.028]], 14), mSkin, el).receiveShadow = false;
    const hand = joint(el, 0, -0.205, 0);
    part(new THREE.SphereGeometry(0.03, 12, 10), mHand, hand, 0, -0.028, 0.002).scale.set(0.62, 1.12, 0.98);            // palm
    for (let k = 0; k < 4; k++) { const f = part(new THREE.CapsuleGeometry(0.0085, 0.022, 3, 6), mHand, hand, s * 0.004, -0.066, -0.021 + k * 0.014); f.rotation.z = s * 0.25; f.scale.y = k === 0 || k === 3 ? 0.85 : 1; } // fingers
    const th = part(new THREE.CapsuleGeometry(0.009, 0.018, 3, 6), mHand, hand, s * -0.006, -0.03, 0.03); th.rotation.set(0.75, 0, s * 0.2);                 // thumb
    part(new THREE.TorusGeometry(0.0235, 0.006, 5, 12), mHand, hand, 0, -0.002, 0).rotation.x = Math.PI / 2;                                             // wrist
    J[s < 0 ? 'shL' : 'shR'] = sh; J[s < 0 ? 'elL' : 'elR'] = el; J[s < 0 ? 'handL' : 'handR'] = hand;
  }
  // head
  J.neck = joint(J.spine, 0, 0.46, 0);
  J.head = joint(J.neck, 0, 0.135, 0.005);
  const R = 0.158;
  const faces = { open: faceTexture('open'), closed: faceTexture('closed'), happy: faceTexture('happy') };
  const mFace = std(0xffffff, 0.62, { map: faces.open, emissive: 0xffffff, emissiveMap: faces.open, emissiveIntensity: 0.16 });
  const head = part(new THREE.SphereGeometry(R, 40, 28), mFace, J.head); head.scale.set(0.97, 1.04, 0.96);
  part(new THREE.SphereGeometry(0.012, 8, 6), mSkin, J.head, 0, -0.056, R * 0.915).scale.set(1, 0.75, 0.6);
  for (const s of [-1, 1]) part(new THREE.SphereGeometry(0.03, 8, 6), mSkin, J.head, s * R * 0.95, -0.01, 0).scale.set(0.4, 1, 0.7);
  // hair
  const hb = new Builder(), hr = mulberry(4), hc = HAIR.map(col);
  const Rh = R * 1.07;
  // a lock that follows the skull (uniform curvature) and then hangs
  const strand = (az, L, W, hang, o = {}) => hb.petal(mul(T(0, Rh * 0.98, -0.012), RY(az), RX(Math.PI / 2 - 0.04)), {
    L, W, a: 0.6, b: 0.42, cup: 0.16, nu: o.nu ?? 10, nv: 3, vein: 0.2, base: 0.6, phase: hr() * 6,
    angFn: (u) => { const s = u * L, wrap = hang * Rh; return s < wrap ? s / Rh : hang + (o.flare ?? 0) * Math.sin(((s - wrap) / Math.max(0.01, L - wrap)) * Math.PI * (o.waves ?? 1)); },
    cols: hc.map((c) => c.clone().multiplyScalar(hr.range(0.9, 1.1))), ...o });
  hb.blob(T(0, 0.034, -0.05), R * 1.0, R * 1.0, hc[0], hc[1], 16, 9);
  for (let i = 0; i < 15; i++) { const f = i / 14 - 0.5, part = Math.abs(f + 0.17); strand(f * 2.6 + 0.1 + hr.range(-0.04, 0.04), Rh * (0.62 + part * 1.35 + hr.range(0, 0.08)), 0.125, 9, { nu: 6, b: 0.3, twist: (f + 0.17) * 0.5 }); } // side-swept fringe
  const mHair = makePlantMaterial({ sway: 0.16, glow: 0.07, roughness: 0.48 });
  const hairFront = new THREE.Mesh(hb.build(), mHair); hairFront.castShadow = true; hairFront.receiveShadow = true; J.head.add(hairFront);
  const hairs = {}, HAIRFN = {}, CURLY = new Set(['cachinhos', 'cachos_curtos', 'cachos_longos', 'volumoso', 'rabo_cachos', 'abacaxi']);
  const hbReset = () => { hb.pos.length = 0; hb.col.length = 0; hb.nrm.length = 0; hb.fix.length = 0; hb.idx.length = 0; hb.n = 0; };
  hbReset();
  for (const s of [-1, 1]) for (let i = 0; i < 4; i++) strand(s * (1.42 + i * 0.2), 0.42 + i * 0.07, 0.1, 1.5, { flare: -0.14, waves: 1.6, ruffle: 0.05, rf: 1.2 }); // side locks
  const hairSide = new THREE.Mesh(hb.build(), mHair); hairSide.castShadow = true; J.head.add(hairSide); // straight locks beside the face: not worn with curls
  const mkHair = (id) => { hbReset(); (HAIRFN[id] || HAIRFN.solto)(); const m = new THREE.Mesh(hb.build(), mHair); m.castShadow = true; m.visible = false; J.head.add(m); hairs[id] = m; return m; };
  const skull = () => { for (let i = 0; i < 15; i++) { const f = i / 14 - 0.5; strand(Math.PI + f * 2.9, Rh * 1.95, 0.11, 9, { nu: 8 }); } };
  const hcj = () => hc.map((c) => c.clone().multiplyScalar(hr.range(0.9, 1.1)));
  const loose = (L, o = {}) => { const n = o.n ?? 17; for (let i = 0; i < n; i++) { const f = i / (n - 1) - 0.5; strand(Math.PI + f * 2.9, L + hr.range(-0.04, 0.06) - Math.abs(f) * 0.1, o.W ?? 0.105, 1.62, { flare: -0.16, waves: 1.5, ruffle: 0.06, rf: 1.2, nu: 12, ...o.s }); } };
  // a bunch of locks hanging from a point (pony tails, pigtails)
  // pos = where it is tied, yaw = which way it leaves the head (0 = straight back), pitch = how far it points down at the start (0 up .. π down); gravity does the rest
  const tail = (x, y, z, yaw, pitch, L, n = 9, W = 0.06) => { for (let i = 0; i < n; i++) { const pt = pitch + hr.range(-0.22, 0.22), droop = (Math.PI - pt) * hr.range(0.86, 1.0);
      hb.petal(mul(T(x, y, z), RY(yaw + hr.range(-0.3, 0.3)), RX(-pt)), { L: L + hr.range(-0.05, 0.04), W, a: 0.6, b: 0.4, cup: 0.5, base: 0.5, nu: 10, nv: 2, vein: 0.2, twist: hr.range(-0.6, 0.6), angFn: (u) => -droop * Math.sin(Math.min(1, u * 1.5) * Math.PI / 2), cols: hcj() }); } };
  const bun = (x, y, z, r) => { hb.blob(T(x, y, z), r, r * 0.9, hc[0], hc[2], 12, 8); for (let i = 0; i < 10; i++) hb.petal(mul(T(x, y, z), RY(i * 0.63), RX(0.5)), { L: r * 1.45, W: r * 0.66, a: 0.7, b: 0.5, cup: 0.9, curl: 2.2, curlPow: 1, nu: 5, nv: 2, cols: hc }); };
  const braid = (sx) => { const P = [[0.03 * sx, -0.03, -0.15], [0.15 * sx, -0.1, -0.08], [0.135 * sx, -0.27, 0.075], [0.115 * sx, -0.43, 0.1]];
    for (let i = 0; i < 13; i++) { const t = i / 12, u = 1 - t, w = [u * u * u, 3 * u * u * t, 3 * u * t * t, t * t * t], q = [0, 1, 2].map((k) => P[0][k] * w[0] + P[1][k] * w[1] + P[2][k] * w[2] + P[3][k] * w[3]);
      hb.blob(mul(T(q[0] + (i % 2 ? 0.01 : -0.01), q[1], q[2]), RZ(i % 2 ? 0.55 : -0.55)), 0.032 * (1 - t * 0.35), 0.03 * (1 - t * 0.3), hc[i % 2 ? 0 : 1], hc[2], 7, 5); }
    hb.blob(T(0.115 * sx, -0.455, 0.1), 0.02, 0.014, hc[1], hc[1], 7, 4); for (let k = 0; k < 6; k++) hb.petal(mul(T(0.115 * sx, -0.46, 0.1), RY(k), RX(2.7)), { L: 0.06, W: 0.02, a: 0.6, b: 0.6, nu: 3, nv: 1, cols: hc }); };
  // ----- curls: corkscrew locks -----
  const V3 = THREE.Vector3;
  const helix = (cs, ref, o = {}) => { const rc = o.rc ?? 0.02, pitch = o.pitch ?? 0.046, rt = o.rt ?? 0.0125, n = cs.length, dir = hr() < 0.5 ? 1 : -1, ph0 = hr() * TAU, pts = [], t = new V3(), u = new V3(), w = new V3(); let s = 0;
    for (let i = 0; i < n; i++) { t.copy(cs[Math.min(n - 1, i + 1)]).sub(cs[Math.max(0, i - 1)]).normalize(); u.crossVectors(t, ref).normalize(); w.crossVectors(u, t).normalize(); if (i) s += cs[i].distanceTo(cs[i - 1]);
      const f = i / (n - 1), a = ph0 + dir * (s / pitch) * TAU, r = rc * Math.min(1, s / (pitch * 0.7) + (o.r0 ?? 0)) * (1 - (o.taper ?? 0.3) * f); pts.push(new V3().copy(cs[i]).addScaledVector(u, Math.sin(a) * r).addScaledVector(w, Math.cos(a) * r)); }
    const k = hr.range(0.84, 1.14), c0 = hc[0].clone().multiplyScalar(k), c1 = hc[2].clone().multiplyScalar(k * 1.04);
    hb.tube(null, pts, (f) => rt * (f > 0.82 ? Math.max(0.12, 1 - (f - 0.82) * 4.6) : f < 0.06 ? 0.5 + f * 8.3 : 1), 0, c0, c1, 5, false); };
  // a curl that starts on the skull at (az, el), slides down the head and then hangs
  const CAPC = new V3(0, 0.034, -0.05), surf = (e, sa, ca) => { const dc = Math.cos(e) * sa * CAPC.x + Math.sin(e) * CAPC.y + Math.cos(e) * ca * CAPC.z; return Math.max(Rh, dc + Math.sqrt(Math.max(0, dc * dc - CAPC.lengthSq() + R * R)) + 0.005); }; // the head with its cap of hair
  const ringlet = (az, el, hang, o = {}) => { const rc = o.rc ?? 0.02, pitch = o.pitch ?? 0.046, off = rc * 0.8 + (o.out ?? 0), elMin = o.elMin ?? -0.2, ds = pitch / 7, sa = Math.sin(az), ca = Math.cos(az), cs = [], k = o.flare ?? 0.14; let e = el, x, y, z, h = 0;
    while (h < hang && cs.length < 220) { if (e > elMin) { const Rc = surf(e, sa, ca) + off; x = Rc * Math.cos(e) * sa * 0.97; y = Rc * Math.sin(e); z = Rc * Math.cos(e) * ca * 0.97; e -= ds / Rc; if (o.stop !== undefined && e < o.stop) h = hang; } else { y -= ds; h += ds; const q = k * Math.cos(Math.min(1, h / 0.14) * 1.4); x += sa * ds * q; z += ca * ds * q; } cs.push(new V3(x, y, z)); }
    if (cs.length > 3) helix(cs, new V3(sa, 0.35, ca).normalize(), o); };
  // curls falling from a point (a pony tail or a top knot of curls)
  const spray = (x, y, z, yaw0, yaw1, n, L, o = {}) => { for (let i = 0; i < n; i++) { const yaw = yaw0 + (yaw1 - yaw0) * (n > 1 ? i / (n - 1) : 0.5) + hr.range(-0.12, 0.12), dx = Math.sin(yaw), dz = Math.cos(yaw), cs = [], ds = 0.0066, up = (o.up ?? 0.5) + hr.range(-0.25, 0.25), len = L * hr.range(0.8, 1.08); let px = x, py = y, pz = z, s = 0;
      while (s < len) { const th = up - Math.min(1, s / (o.arc ?? 0.1)) * (up + 1.45); px += dx * Math.cos(th) * ds; pz += dz * Math.cos(th) * ds; py += Math.sin(th) * ds; s += ds; cs.push(new V3(px, py, pz)); }
      helix(cs, new V3(-dz, 0, dx), o); } };
  const curls = (hang, o = {}) => { const rows = o.rows || [[1.22, 7, 3.14], [0.86, 11, 2.75], [0.48, 13, 2.25], [0.12, 13, 2.05]];
    rows.forEach(([el, n, half], k) => { for (let i = 0; i < n; i++) { const az = Math.PI + (n > 1 ? (i / (n - 1) - 0.5) * 2 * half * (half > 3 ? 1 - 1 / n : 1) : 0) + hr.range(-0.07, 0.07) + (k % 2) * 0.09, front = Math.abs(Math.atan2(Math.sin(az), Math.cos(az))) < 1.05;
        ringlet(az, el + hr.range(-0.06, 0.06), front ? 0.02 : hang * hr.range(0.8, 1.08) * (1 - k * (o.layer ?? 0.05)), { ...o, ...(front ? { stop: 0.74 + hr.range(-0.05, 0.08) } : 0) }); } }); };
  Object.assign(HAIRFN, {
    cachinhos: () => curls(0.2),
    cachos_curtos: () => curls(0.07, { rc: 0.019, pitch: 0.04, out: 0.006, flare: 0.3 }),
    cachos_longos: () => curls(0.42, { rc: 0.021, pitch: 0.05, flare: 0.1 }),
    volumoso: () => { curls(0.2, { rc: 0.026, rt: 0.0145, pitch: 0.052, out: 0.004, flare: 0.42 }); curls(0.15, { rc: 0.024, rt: 0.014, pitch: 0.05, out: 0.03, flare: 0.6, rows: [[0.95, 9, 2.6], [0.5, 11, 2.2], [0.1, 11, 2.0]] }); },
    rabo_cachos: () => { skull(); for (const s of [-1, 1]) ringlet(s * 1.5, 0.5, 0.12, { rc: 0.017, pitch: 0.04 }); spray(0, R * 0.5, -Rh * 0.98, Math.PI - 0.9, Math.PI + 0.9, 11, 0.36, { up: 0.5, rc: 0.021 }); hb.blob(mul(T(0, R * 0.5, -Rh * 1.0), RX(0.9)), 0.03, 0.022, hc[1], hc[1], 8, 5); },
    abacaxi: () => { skull(); for (const s of [-1, 1]) ringlet(s * 1.5, 0.5, 0.1, { rc: 0.017, pitch: 0.04 }); spray(0, R * 1.04, -R * 0.2, 0, TAU * 0.93, 15, 0.23, { up: 1.25, arc: 0.12, rc: 0.02 }); spray(0, R * 1.08, -R * 0.2, 0.4, TAU * 0.93 + 0.4, 8, 0.15, { up: 1.5, arc: 0.1, rc: 0.019 }); hb.blob(T(0, R * 1.0, -R * 0.2), 0.045, 0.03, hc[1], hc[1], 8, 5); },
    ondulado: () => loose(0.7, { n: 19, W: 0.115, s: { waves: 3, flare: -0.2, ruffle: 0.1, rf: 2.2 } }),
    solto: () => loose(0.62),
    longo: () => loose(0.98, { n: 19, s: { waves: 2.2, flare: -0.12 } }),
    curto: () => loose(0.36, { s: { flare: 0.42, waves: 0.55, ruffle: 0.03 } }),
    cacheado: () => { loose(0.6, { n: 23, W: 0.13, s: { waves: 4.5, flare: -0.2, ruffle: 0.16, rf: 3.2 } }); loose(0.44, { n: 15, W: 0.13, s: { waves: 3.5, flare: -0.3, ruffle: 0.18, rf: 3.6 } }); },
    rabo: () => { skull(); tail(0, R * 0.42, -Rh * 0.98, 0, 1.75, 0.5, 11); hb.blob(mul(T(0, R * 0.42, -Rh * 1.0), RX(0.9)), 0.03, 0.022, hc[1], hc[1], 8, 5); },
    rabo_alto: () => { skull(); tail(0, R * 0.98, -Rh * 0.62, 0, 1.05, 0.72, 13, 0.065); hb.blob(T(0, R * 0.98, -Rh * 0.62), 0.034, 0.03, hc[1], hc[1], 8, 5); },
    coque: () => { skull(); bun(0, R * 0.72, -R * 0.82, 0.075); },
    coques: () => { skull(); for (const s of [-1, 1]) bun(s * R * 0.62, R * 0.92, -R * 0.12, 0.058); },
    chiquinhas: () => { skull(); for (const s of [-1, 1]) { tail(s * R * 0.98, -R * 0.12, -R * 0.3, -s * 1.25, 1.7, 0.38, 9, 0.055); hb.blob(T(s * R * 0.98, -R * 0.12, -R * 0.3), 0.028, 0.024, hc[1], hc[1], 8, 5); } },
    tranca: () => { skull(); braid(1); },
    trancas: () => { skull(); braid(1); braid(-1); },
    meio_preso: () => { loose(0.62); bun(0, R * 0.62, -R * 0.9, 0.05); },
  });

  // ---------- hats (built the first time they are worn) ----------
  J.hat = joint(J.head, 0, R * 0.7, -0.03); J.hat.rotation.x = -0.36;
  const hats = {}, HATFN = {};
  const wavy = (geo, amp, R0, n = 2, ph = 0.5) => { const p = geo.attributes.position; for (let i = 0; i < p.count; i++) { const a = Math.atan2(p.getZ(i), p.getX(i)), rr = Math.hypot(p.getX(i), p.getZ(i)); p.setY(i, p.getY(i) + Math.sin(a * n + ph) * amp * (rr / R0) ** 2 + Math.sin(a * 5) * amp * 0.25 * (rr / R0)); } geo.computeVertexNormals(); return geo; };
  const flower = (parent, x, y, z, c, s = 1) => { const fb = new Builder(); for (let k = 0; k < 6; k++) fb.petal(mul(RY(k * 1.047), RX(1.25)), { L: 0.034 * s, W: 0.026 * s, nu: 2, nv: 2, cup: 0.3, cols: [col(c), col(c), col(0xffffff)] }); fb.blob(T(0, 0.004, 0), 0.01 * s, 0.006 * s, col(0xf2b21c), col(0xf8d040), 6, 3);
    const f = new THREE.Mesh(fb.build(), std(0xffffff, 0.7, { vertexColors: true, side: THREE.DoubleSide })); f.position.set(x, y, z); f.lookAt(x * 3, y + 0.25, z * 3); f.rotateX(Math.PI / 2); parent.add(f); return f; };
  const A = M.hat, B = M.hat2;
  // hats that hug the skull are modelled around the centre of the head, upright
  const onSkull = (h) => { h.rotation.x = 0.36; h.position.set(0, -R * 0.66, 0.03); };
  Object.assign(HATFN, {
    palha: (h) => { part(wavy(lathe([[0.13, 0.012], [0.19, 0.004], [0.25, -0.012], [0.292, -0.036], [0.297, -0.042]], 36), 0.02, 0.3), A, h).receiveShadow = false;
      part(lathe([[0.146, 0], [0.143, 0.05], [0.128, 0.1], [0.09, 0.128], [0.001, 0.134]], 28), A, h); part(new THREE.CylinderGeometry(0.1445, 0.148, 0.038, 28, 1, true), B, h, 0, 0.024, 0);
      for (const s of [-1, 1]) part(new THREE.SphereGeometry(0.03, 8, 6), B, h, -0.12, 0.03, s * 0.035 - 0.07).scale.set(0.5, 1.2, 1.5); flower(h, 0.108, 0.04, 0.103, 0xfff6e0); },
    aba_larga: (h) => { part(wavy(lathe([[0.13, 0.014], [0.2, 0.006], [0.29, -0.02], [0.37, -0.07], [0.378, -0.08]], 40), 0.035, 0.38), A, h).receiveShadow = false;
      part(lathe([[0.146, 0], [0.146, 0.06], [0.13, 0.1], [0.08, 0.118], [0.001, 0.12]], 28), A, h); part(new THREE.CylinderGeometry(0.147, 0.149, 0.05, 28, 1, true), B, h, 0, 0.03, 0);
      for (const s of [-1, 1]) { const b = part(new THREE.SphereGeometry(0.05, 8, 6), B, h, s * 0.045, 0.035, -0.15); b.scale.set(1.1, 0.75, 0.35); } part(new THREE.SphereGeometry(0.02, 8, 6), B, h, 0, 0.035, -0.152);
      for (const s of [-1, 1]) part(new THREE.BoxGeometry(0.03, 0.14, 0.006), B, h, s * 0.02, -0.03, -0.165).rotation.set(0.3, 0, s * 0.2); },
    capeline: (h) => { part(wavy(lathe([[0.13, 0.014], [0.22, 0.01], [0.33, -0.01], [0.43, -0.05], [0.44, -0.058]], 44), 0.05, 0.44, 3), A, h).receiveShadow = false;
      part(lathe([[0.146, 0], [0.146, 0.05], [0.13, 0.085], [0.08, 0.1], [0.001, 0.102]], 28), A, h); part(new THREE.CylinderGeometry(0.147, 0.149, 0.045, 28, 1, true), B, h, 0, 0.026, 0);
      for (let i = 0; i < 3; i++) flower(h, 0.12 * Math.cos(0.5 + i * 0.5), 0.05, 0.12 * Math.sin(0.5 + i * 0.5) + 0.02, [0xffffff, 0xffd0e0, 0xfff0a8][i], 1.5 - i * 0.25);
      for (const s of [-1, 1]) part(new THREE.BoxGeometry(0.04, 0.2, 0.006), B, h, s * 0.03, -0.05, -0.17).rotation.set(0.3, 0, s * 0.25); },
    jardineira: (h) => { part(lathe([[0.2, -0.05], [0.185, -0.03], [0.152, 0.0], [0.148, 0.06], [0.128, 0.105], [0.07, 0.125], [0.001, 0.128]], 30), A, h); part(new THREE.CylinderGeometry(0.15, 0.153, 0.03, 28, 1, true), B, h, 0, 0.02, 0); flower(h, 0.1, 0.03, 0.115, 0xffffff, 0.9); },
    bucket: (h) => { part(wavy(lathe([[0.235, -0.085], [0.2, -0.04], [0.152, 0.0], [0.146, 0.065], [0.13, 0.1], [0.07, 0.112], [0.001, 0.114]], 30), 0.012, 0.23, 3), A, h);
      for (const y of [-0.03, -0.055]) part(new THREE.TorusGeometry(0.19 - y * 0.6, 0.0025, 4, 30), B, h, 0, y, 0).rotation.x = Math.PI / 2; part(new THREE.CylinderGeometry(0.1485, 0.153, 0.016, 28, 1, true), B, h, 0, 0.012, 0); },
    fedora: (h) => { part(wavy(lathe([[0.14, 0.006], [0.2, 0.0], [0.235, -0.012], [0.24, -0.016]], 36), 0.02, 0.24, 2, 1.57), A, h).receiveShadow = false;
      const c = part(lathe([[0.146, 0], [0.142, 0.07], [0.125, 0.118], [0.07, 0.112], [0.001, 0.098]], 28), A, h); c.scale.set(1, 1, 1.08); part(new THREE.CylinderGeometry(0.1455, 0.148, 0.034, 28, 1, true), B, h, 0, 0.02, 0).scale.z = 1.08; },
    vaqueira: (h) => { const g = lathe([[0.14, 0.006], [0.2, 0.0], [0.27, -0.012], [0.285, -0.016]], 40), p = g.attributes.position; for (let i = 0; i < p.count; i++) { const a = Math.atan2(p.getZ(i), p.getX(i)), rr = Math.hypot(p.getX(i), p.getZ(i)); p.setY(i, p.getY(i) + Math.cos(a * 2) * 0.075 * (rr / 0.285) ** 2.4 - 0.02 * (rr / 0.285) ** 2); } g.computeVertexNormals(); part(g, A, h).receiveShadow = false;
      const c = part(lathe([[0.146, 0], [0.14, 0.09], [0.12, 0.14], [0.06, 0.128], [0.001, 0.108]], 28), A, h); c.scale.z = 1.1; part(new THREE.CylinderGeometry(0.1455, 0.148, 0.026, 28, 1, true), B, h, 0, 0.016, 0).scale.z = 1.1; part(new THREE.SphereGeometry(0.014, 8, 6), std(0xe6c05a, 0.3, { metalness: 0.6 }), h, 0, 0.018, 0.163); },
    boina: (h) => { h.position.set(0.02, -0.01, 0.0); const b = part(new THREE.SphereGeometry(0.175, 20, 12), A, h, 0.02, 0.04, -0.01); b.scale.set(1, 0.42, 0.96); b.rotation.z = -0.25; part(new THREE.SphereGeometry(0.014, 8, 6), A, h, 0.06, 0.115, -0.01); },
    lenco: (h) => { h.rotation.x = 0.36; h.position.set(0, -R * 0.66, 0.03); const c = part(new THREE.SphereGeometry(R * 1.1, 24, 12, 0, TAU, 0, 1.25), A, h, 0, 0, -0.02); c.rotation.x = -0.42;
      part(new THREE.SphereGeometry(0.024, 8, 6), A, h, 0, -0.07, -R * 1.08); for (const s of [-1, 1]) part(new THREE.BoxGeometry(0.05, 0.11, 0.008), A, h, s * 0.03, -0.13, -R * 1.1).rotation.set(0.25, 0, s * 0.35); },
    laco: (h) => { h.position.set(0, -0.02, 0.01); for (const s of [-1, 1]) { const b = part(new THREE.SphereGeometry(0.075, 12, 8), A, h, s * 0.07, 0.06, 0); b.scale.set(1.1, 0.8, 0.4); b.rotation.z = s * 0.35; } part(new THREE.SphereGeometry(0.03, 8, 6), A, h, 0, 0.05, 0.005); },
    coroa: (h) => { h.rotation.x = 0.3; h.position.set(0, -0.045, 0.03); part(new THREE.TorusGeometry(R * 1.02, 0.008, 5, 28), std(0x4a8a3a), h).rotation.x = Math.PI / 2;
      const cs = [0xf07aa4, 0xffffff, 0xf7c84a, 0xb48af0, 0xf2701a]; for (let i = 0; i < 14; i++) { const a = (i / 14) * TAU; flower(h, Math.cos(a) * R * 1.03, 0.004, Math.sin(a) * R * 1.03, cs[i % cs.length], 0.85); } },
    bone: (h) => { onSkull(h); const d = part(new THREE.SphereGeometry(R * 1.1, 24, 10, 0, TAU, 0, 1.5), A, h, 0, 0.012, -0.012); d.rotation.x = -0.2; d.scale.set(1, 0.98, 1.04);
      const v = part(new THREE.CylinderGeometry(0.125, 0.125, 0.012, 20, 1, false, -Math.PI / 2, Math.PI), B, h, 0, 0.052, R * 0.86); v.rotation.x = 0.2; v.scale.z = 1.15; part(new THREE.SphereGeometry(0.014, 8, 6), B, h, 0, R * 1.09, -0.045); },
    gorro: (h) => { onSkull(h); const d = part(new THREE.SphereGeometry(R * 1.12, 24, 12, 0, TAU, 0, 1.62), A, h, 0, 0.02, -0.012); d.rotation.x = -0.24; d.scale.set(1, 1.1, 1.02);
      const t = part(new THREE.TorusGeometry(R * 1.1, 0.026, 8, 28), B, h, 0, 0.02, -0.015); t.rotation.x = Math.PI / 2 - 0.24; part(new THREE.SphereGeometry(0.05, 12, 9), B, h, 0, R * 1.3, -0.07); },
    tiara: (h) => { onSkull(h); const t = part(new THREE.TorusGeometry(R * 1.05, 0.012, 6, 24, Math.PI), A, h, 0, 0.0, 0.02); t.rotation.x = -0.12; for (const s of [-1, 1]) { const b = part(new THREE.SphereGeometry(0.028, 8, 6), A, h, 0.085 + s * 0.022, R * 0.98, 0.03); b.scale.set(1, 0.7, 0.4); b.rotation.z = s * 0.4 - 0.5; } },
    gatinho: (h) => { onSkull(h); const t = part(new THREE.TorusGeometry(R * 1.05, 0.01, 6, 24, Math.PI), A, h, 0, 0.0, 0.01); t.rotation.x = -0.1;
      for (const s of [-1, 1]) { const e = part(new THREE.ConeGeometry(0.045, 0.085, 4), A, h, s * 0.085, R * 1.2, 0.0); e.rotation.set(0, Math.PI / 4, -s * 0.3); e.scale.z = 0.5; const i = part(new THREE.ConeGeometry(0.026, 0.05, 4), B, h, s * 0.084, R * 1.17, 0.012); i.rotation.set(0, Math.PI / 4, -s * 0.3); i.scale.z = 0.4; } },
    diadema: (h) => { onSkull(h); const t = part(new THREE.TorusGeometry(R * 1.04, 0.007, 6, 24, Math.PI), A, h, 0, 0.0, 0.035); t.rotation.x = -0.35; const y0 = R * 1.0, z0 = 0.035 + R * 0.35;
      for (let i = -3; i <= 3; i++) { const a = i * 0.2, hh = 0.07 - Math.abs(i) * 0.014, x = Math.sin(a) * R * 1.02, yy = y0 - Math.abs(i) * 0.012 - (1 - Math.cos(a)) * 0.02, s = part(new THREE.ConeGeometry(0.012, hh, 5), A, h, x, yy + hh / 2 - 0.03, z0 - Math.abs(i) * 0.012); s.rotation.x = -0.35; if (i % 2 === 0) part(new THREE.SphereGeometry(i === 0 ? 0.013 : 0.009, 8, 6), B, h, x, yy + hh - 0.03, z0 - Math.abs(i) * 0.012 - hh * 0.3); } },
    nenhum: () => {},
  });
  for (const k of ['hat', 'hat2']) { M[k].metalness = 0; }

  // ---------- clothes: rebuilt whenever she changes ----------
  const worn = [], put = (geo, mat, parent, x = 0, y = 0, z = 0) => { const m = part(geo, mat, parent, x, y, z); worn.push(m); return m; };
  const texCache = new Map(), tile = (p, c, rx, ry, o) => { if ((p === 'liso' || !p) && !o) return null; const key = [p, c, rx, ry, o ? JSON.stringify(o) : ''].join(); let t = texCache.get(key);
    if (!t) { if (texCache.size > 24) { for (const v of texCache.values()) v.dispose(); texCache.clear(); } t = new THREE.CanvasTexture(fabricCanvas(p, c, o || {})); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = 4; t.repeat.set(rx, ry); texCache.set(key, t); } return t; };
  const paint = (m, c, p, rx = 1, ry = 1, o) => { const t = tile(p, c, rx, ry, o); m.map = t; m.color.setHex(t ? 0xffffff : c); m.needsUpdate = true; };
  let sk = null, skRest = null, skPos = null, skLen = 0.54, wings = null, hatNow = null, hairNow = null;
  const ruffle = (pts, parent, mat, n, amp, sx = 1, sz = 1) => { const g = lathe(pts, 40), p = g.attributes.position; for (let i = 0; i < p.count; i++) { const a = Math.atan2(p.getZ(i), p.getX(i)), k = 1 + amp * Math.sin(a * n) * (p.getY(i) < pts[0][1] + 0.004 ? 1 : 0.3); p.setXYZ(i, p.getX(i) * k * sx, p.getY(i), p.getZ(i) * k * sz); } g.computeVertexNormals(); return put(g, mat, parent); };
  const bow = (parent, mat, x, y, z, s = 1) => { for (const d of [-1, 1]) { const b = put(new THREE.SphereGeometry(0.03 * s, 10, 7), mat, parent, x + d * 0.03 * s, y, z); b.scale.set(1.15, 0.7, 0.4); b.rotation.z = d * 0.35; } put(new THREE.SphereGeometry(0.013 * s, 8, 6), mat, parent, x, y, z + 0.004);
    for (const d of [-1, 1]) put(new THREE.BoxGeometry(0.018 * s, 0.06 * s, 0.006), mat, parent, x + d * 0.014 * s, y - 0.04 * s, z).rotation.z = d * 0.3; };
  // the upper half of a garment (a blouse, or the bodice of a dress)
  const bodice = (sp, m1, m2) => {
    const thick = sp.sleeve === 'thick' || sp.knit, k = thick ? 1.075 : 1.045, yTop = { round: 0.418, boat: 0.4, v: 0.418, square: 0.398, turtle: 0.43, strap: 0.335, off: 0.335 }[sp.neck] ?? 0.418, y0 = sp.hem === 'crop' ? 0.13 : -0.006;
    const front = (y, kk = k) => bodyR(y) * kk * ZS;
    if (sp.open) { put(lathe(shell(y0, 0.418, 1.035), 22), m2, J.spine).scale.z = ZS; put(lathe(shell(y0, 0.41, k + 0.035), 24, 0.26, TAU - 0.52), m1, J.spine).scale.z = ZS; }
    else put(lathe(shell(y0, yTop, k), 24), m1, J.spine).scale.z = ZS;
    if (sp.neck === 'turtle') { put(new THREE.CylinderGeometry(0.052, 0.056, 0.07, 16, 1, true), m1, J.spine, 0, 0.462, 0); put(new THREE.TorusGeometry(0.053, 0.012, 6, 16), m1, J.spine, 0, 0.49, 0).rotation.x = Math.PI / 2; }
    if (sp.neck === 'v' && !sp.open) { const g = new THREE.BufferGeometry(), z = front(0.4) + 0.012; g.setAttribute('position', new THREE.Float32BufferAttribute([-0.04, 0.425, z - 0.022, 0.04, 0.425, z - 0.022, 0, 0.345, front(0.345) + 0.004], 3)); g.computeVertexNormals(); put(g, mSkin, J.spine); }
    if (sp.neck === 'square') { const g = new THREE.PlaneGeometry(0.11, 0.05); put(g, mSkin, J.spine, 0, 0.385, front(0.385) + 0.003).rotation.x = -0.35; }
    if (sp.neck === 'strap') for (const s of [-1, 1]) { put(new THREE.BoxGeometry(0.02, 0.15, 0.012), m1, J.spine, s * 0.072, 0.385, 0.082).rotation.x = -0.52; put(new THREE.BoxGeometry(0.02, 0.2, 0.012), m1, J.spine, s * 0.072, 0.36, -0.092).rotation.x = 0.3; }
    // sleeves
    const sm = sp.vest ? m2 : m1, th = thick ? 0.008 : 0;
    for (const s of [-1, 1]) { const sh = s < 0 ? J.shL : J.shR, el = s < 0 ? J.elL : J.elR, SL = sp.sleeve;
      if (SL !== 'none' && SL !== 'strap' && SL !== 'puff' && SL !== 'cap' && !(sp.neck === 'off')) put(new THREE.SphereGeometry(0.0495 + th, 12, 9), sm, sh, -s * 0.006, -0.002, 0);
      if (SL === 'puff') put(new THREE.SphereGeometry(0.062, 12, 9), sm, sh, s * 0.005, -0.03, 0).scale.set(1, 1.15, 1);
      else if (SL === 'cap') put(new THREE.SphereGeometry(0.053, 12, 9), sm, sh, s * 0.003, -0.012, 0).scale.set(1, 0.85, 1);
      else if (SL === 'lantern') { put(lathe([[0.001, 0.03], [0.05, 0.016], [0.068, -0.05], [0.064, -0.12], [0.042, -0.19], [0.04, -0.2]], 14), sm, sh); put(new THREE.TorusGeometry(0.04, 0.007, 5, 12), sp.c2 != null ? m2 : sm, sh, 0, -0.195, 0).rotation.x = Math.PI / 2; }
      else if (SL === 'short') put(lathe([[0.001, 0.028], [0.043, 0.016], [0.048, -0.03], [0.046, -0.105], [0.0455, -0.11]], 14), sm, sh);
      else if (SL === 'elbow' || SL === 'long' || SL === 'bell' || SL === 'thick') { put(lathe([[0.001, 0.028], [0.043 + th, 0.016], [0.047 + th, -0.03], [0.044 + th, -0.12], [0.041 + th, -0.2], [0.04 + th, -0.245]], 14), sm, sh);
        if (SL === 'long' || SL === 'thick') { put(lathe([[0.04 + th, 0.02], [0.038 + th, -0.03], [0.034 + th, -0.11], [0.031 + th, -0.19]], 12), sm, el); put(new THREE.TorusGeometry(0.031 + th, 0.007, 5, 12), thick ? m2 : sm, el, 0, -0.19, 0).rotation.x = Math.PI / 2; }
        if (SL === 'bell') put(lathe([[0.04, 0.02], [0.042, -0.04], [0.06, -0.14], [0.078, -0.2]], 14), sm, el); } }
    // collars and trims
    if (sp.collar === 'shirt') { put(new THREE.CylinderGeometry(0.05, 0.056, 0.028, 14, 1, true), m1, J.spine, 0, 0.44, 0); for (const s of [-1, 1]) { const c = put(new THREE.BoxGeometry(0.055, 0.01, 0.04), m1, J.spine, s * 0.034, 0.428, 0.062); c.rotation.set(0.5, s * 0.5, s * 0.35); } }
    if (sp.collar === 'peter') for (const s of [-1, 1]) { const c = put(new THREE.SphereGeometry(0.042, 12, 6), m2, J.spine, s * 0.036, 0.424, 0.05); c.scale.set(1, 0.22, 0.85); c.rotation.set(0.55, 0, s * 0.25); }
    if (sp.collar === 'sailor') { for (const s of [-1, 1]) { const c = put(new THREE.BoxGeometry(0.03, 0.105, 0.008), m2, J.spine, s * 0.03, 0.39, front(0.39) + 0.008); c.rotation.set(-0.3, 0, s * 0.42); } put(new THREE.BoxGeometry(0.18, 0.1, 0.01), m2, J.spine, 0, 0.385, -front(0.385) - 0.008).rotation.x = 0.28; for (const s of [-1, 1]) put(new THREE.BoxGeometry(0.02, 0.06, 0.012), m2, J.spine, s * 0.085, 0.41, 0).rotation.z = s * 0.5; }
    if (sp.collar === 'ruffle') { if (sp.neck === 'off') ruffle([[0.142, 0.3], [0.168, 0.33], [0.15, 0.355]], J.spine, m1, 13, 0.07, 1.3, 0.9); else ruffle([[0.085, 0.405], [0.07, 0.425], [0.056, 0.44]], J.spine, sp.c2 != null ? m2 : m1, 11, 0.09, 1, 0.9); }
    if (sp.ruffles) for (const y of [0.3, 0.22]) ruffle([[bodyR(y) * k + 0.02, y - 0.035], [bodyR(y) * k + 0.004, y], [bodyR(y) * k, y + 0.01]], J.spine, m1, 14, 0.05, 1, ZS);
    if (sp.bow) bow(J.spine, m2, 0, 0.398, front(0.398) + 0.016, 0.85);
    if (sp.buttons) for (let i = 0; i < 4; i++) { const y = 0.09 + i * 0.085; put(new THREE.SphereGeometry(0.0085, 8, 6), m2, J.spine, sp.open ? 0.05 : 0, y, front(y, k + (sp.open ? 0.035 : 0)) * (sp.open ? 0.93 : 1) + 0.003); }
    if (sp.lace) for (let i = 0; i < 3; i++) for (const s of [-1, 1]) { const y = 0.1 + i * 0.065; put(new THREE.BoxGeometry(0.066, 0.007, 0.006), m2, J.spine, 0, y + 0.02, front(y + 0.02) + 0.004).rotation.z = s * 0.75; }
    if (sp.pocket) { const y = 0.075; put(new THREE.BoxGeometry(0.13, 0.065, 0.012), m1, J.spine, 0, y, front(y) + 0.004).rotation.x = -0.05; }
    if (sp.hood) put(new THREE.SphereGeometry(0.085, 12, 9), m1, J.spine, 0, 0.425, -0.085).scale.set(1.25, 0.9, 0.75);
    if (sp.knit) put(new THREE.TorusGeometry(0.056, 0.011, 6, 16), m2, J.spine, 0, 0.428, 0).rotation.x = Math.PI / 2;
    if (sp.hem === 'out') { const L = sp.long ? 0.36 : 0.11, r1 = sp.long ? 0.215 : 0.162, pts = [[0.118 * k + 0.008, 0.04], [0.14, -0.015], [0.14 + (r1 - 0.14) * 0.6, -L * 0.6], [r1, -L]];
      if (sp.open) put(lathe(pts.map(([r, y]) => [r + 0.006, y]), 24, 0.26, TAU - 0.52), m1, J.skirt).scale.z = 0.94; else put(lathe(pts, 24), m1, J.skirt).scale.z = 0.94;
      if (sp.knit) { const t = put(new THREE.TorusGeometry(r1, 0.012, 6, 22), m2, J.skirt, 0, -L, 0); t.rotation.x = Math.PI / 2; t.scale.y = 0.94; } }
    if (sp.belt && sp.open) { const t = put(new THREE.TorusGeometry(0.125, 0.014, 6, 22), m2, J.skirt, 0, 0.0, 0); t.rotation.x = Math.PI / 2; t.scale.y = ZS + 0.02; bow(J.skirt, m2, 0.03, 0.0, 0.118, 0.9); }
  };
  const bibOf = (m1, m2) => { const bib = new THREE.LatheGeometry([[0.122, 0.0], [0.112, 0.1], [0.128, 0.22], [0.139, 0.3]].map(([r, y]) => new THREE.Vector2(r * 1.09, y)), 10, -0.6, 1.2); put(bib, m1, J.spine).scale.z = 0.86;
    for (const s of [-1, 1]) { put(new THREE.BoxGeometry(0.032, 0.17, 0.014), m1, J.spine, s * 0.075, 0.37, 0.097).rotation.x = -0.5; put(new THREE.BoxGeometry(0.035, 0.34, 0.016), m1, J.spine, s * 0.075, 0.262, -0.107).rotation.x = 0.2; put(new THREE.SphereGeometry(0.014, 8, 6), m2, J.spine, s * 0.075, 0.29, 0.13); }
    put(new THREE.LatheGeometry([[0.124, 0.0], [0.114, 0.1], [0.128, 0.2]].map(([r, y]) => new THREE.Vector2(r * 1.09, y)), 10, Math.PI - 0.62, 1.24), m1, J.spine).scale.z = 0.86; };
  const trousers = (sp, m1, m2, tallBoot) => {
    const cut = sp.cut, r0 = cut === 'skinny' ? 0.068 : cut === 'larga' ? 0.078 : 0.072, r1 = cut === 'skinny' ? 0.058 : cut === 'larga' ? 0.076 : 0.064;
    { const g = lathe([[0.001, -0.205], [0.1, -0.19], [0.142, -0.14], [0.14, -0.09], [0.131, -0.03], [0.129, 0.035]], 24), p = g.attributes.position; for (let i = 0; i < p.count; i++) p.setZ(i, p.getZ(i) * lerp(0.86, 0.64, clamp(-p.getY(i) / 0.16, 0, 1))); g.computeVertexNormals(); put(g, m1, J.skirt); }
    { const t = put(new THREE.TorusGeometry(0.128, 0.011, 6, 22), M.waist, J.skirt, 0, 0.026, 0); t.rotation.x = Math.PI / 2; t.scale.y = 0.86; }
    for (const s of [-1, 1]) { const hip = s < 0 ? J.hipL : J.hipR, knee = s < 0 ? J.kneeL : J.kneeR, topP = [[0.001, 0.03], [r0 * 0.75, 0.02], [r0, -0.04]];
      if (sp.leg === 'short') { put(lathe([[r0 + 0.012, -0.17], [r0 + 0.005, -0.1], ...topP.slice().reverse()], 14), m1, hip); if (sp.cuff) put(new THREE.TorusGeometry(r0 + 0.012, 0.008, 5, 14), m2, hip, 0, -0.168, 0).rotation.x = Math.PI / 2; continue; }
      if (sp.leg === 'bermuda') { put(lathe([[r0 - 0.004, -0.34], [r0, -0.1], ...topP.slice().reverse()], 14), m1, hip); if (sp.cuff) put(new THREE.TorusGeometry(r0 - 0.004, 0.008, 5, 14), m2, hip, 0, -0.335, 0).rotation.x = Math.PI / 2; continue; }
      put(lathe([[r1 + 0.002, -0.4], [r0, -0.1], ...topP.slice().reverse()], 14), m1, hip); put(new THREE.SphereGeometry(r1 + 0.004, 12, 9), m1, knee);
      const yEnd = sp.leg === 'capri' ? -0.2 : tallBoot != null ? Math.min(-0.1, tallBoot + 0.02) : -0.405, rE = cut === 'sino' ? 0.104 : cut === 'larga' ? 0.088 : cut === 'skinny' ? 0.047 : 0.058;
      const f = yEnd / -0.405, rEnd = cut === 'sino' ? r1 + (rE - r1) * f * f : r1 + (rE - r1) * f;
      put(lathe([[rEnd, yEnd], [cut === 'sino' ? r1 - 0.002 : Math.max(0.056, (r1 + rEnd) / 2), yEnd * 0.5], [r1, -0.04], [r1 + 0.002, 0.01]], 14), m1, knee);
      if (sp.cuff && tallBoot == null) put(new THREE.TorusGeometry(rEnd, 0.007, 5, 14), m2, knee, 0, yEnd + 0.004, 0).rotation.x = Math.PI / 2; }
    if (sp.stitch) for (const s of [-1, 1]) put(new THREE.BoxGeometry(0.055, 0.05, 0.008), m2, J.skirt, s * 0.055, -0.07, -0.1).rotation.x = -0.25;
  };
  const shoes = (sp, legs) => { const m1 = M.shoe, m2 = M.shoe2;
    for (const s of [-1, 1]) { const knee = s < 0 ? J.kneeL : J.kneeR, foot = (mat, sy = 0.72, sz = 1.7, y = -0.415, r = 0.068, z = 0.045) => { const f = put(new THREE.SphereGeometry(r, 12, 8), mat, knee, 0, y, z); f.scale.set(1, sy, sz); return f; };
      if (sp.kind === 'boot') { const t = sp.top; put(lathe(t > -0.25 ? [[0.001, -0.455], [0.066, -0.45], [0.062, -0.3], [0.066, t - 0.02], [0.072, t - 0.015], [0.072, t], [0.058, t]] : [[0.001, -0.455], [0.066, -0.45], [0.06, -0.38], [0.062, t - 0.02], [0.068, t - 0.015], [0.068, t], [0.054, t]], 14), m1, knee); foot(m1);
        if (sp.band) put(new THREE.CylinderGeometry(0.0735, 0.0675, 0.05, 14, 1, true), m2, knee, 0, t - 0.03, 0); if (sp.laces) for (let i = 0; i < 3; i++) put(new THREE.BoxGeometry(0.04, 0.007, 0.006), m2, knee, 0, -0.4 + i * 0.03, 0.064 - i * 0.004).rotation.z = i % 2 ? 0.4 : -0.4;
        put(new THREE.SphereGeometry(0.07, 12, 6), M.sole, knee, 0, -0.447, 0.04).scale.set(1.02, 0.22, 1.72); }
      else if (sp.kind === 'sneaker') { foot(m1, 0.66, 1.7, -0.418); put(new THREE.SphereGeometry(0.07, 12, 6), M.sole, knee, 0, -0.444, 0.045).scale.set(1.04, 0.3, 1.74); put(new THREE.SphereGeometry(0.04, 10, 6), M.sole, knee, 0, -0.425, 0.125).scale.set(1.2, 0.7, 0.8);
        put(new THREE.TorusGeometry(0.046, 0.012, 6, 12), m1, knee, 0, -0.375, 0.0).rotation.x = Math.PI / 2; for (let i = 0; i < 3; i++) put(new THREE.BoxGeometry(0.045, 0.006, 0.008), m2, knee, 0, -0.378 - i * 0.008, 0.06 + i * 0.022); }
      else if (sp.kind === 'flat') { foot(mLeg, 0.52, 1.25, -0.404, 0.056, 0.022); foot(m1, 0.5, 1.72, -0.428, 0.068, 0.045); put(new THREE.SphereGeometry(0.05, 12, 8), m1, knee, 0, -0.42, 0.115).scale.set(1.12, 0.62, 0.85);
        if (sp.bow) for (const d of [-1, 1]) put(new THREE.SphereGeometry(0.014, 8, 6), m1, knee, d * 0.014, -0.405, 0.135).scale.set(1.2, 0.7, 0.5); if (sp.strap) put(new THREE.TorusGeometry(0.047, 0.006, 5, 12, Math.PI), m1, knee, 0, -0.41, 0.05).rotation.set(0, 0, 0);
        if (sp.heel) put(new THREE.CylinderGeometry(0.02, 0.014, 0.03, 8), m1, knee, 0, -0.445, -0.04); }
      else if (sp.kind === 'sandal') { foot(mLeg, 0.6, 1.5, -0.412, 0.06, 0.04); put(new THREE.SphereGeometry(0.07, 12, 6), m1, knee, 0, -0.447, 0.042).scale.set(1, 0.2, 1.7); for (const [z, r] of [[0.1, 0.05], [0.02, 0.052]]) put(new THREE.TorusGeometry(r, 0.008, 5, 12, Math.PI), m1, knee, 0, -0.44, z); }
      else if (sp.kind === 'flip') { foot(mLeg, 0.6, 1.5, -0.412, 0.06, 0.04); put(new THREE.SphereGeometry(0.072, 12, 6), m1, knee, 0, -0.449, 0.042).scale.set(1, 0.16, 1.7); for (const d of [-1, 1]) put(new THREE.CylinderGeometry(0.005, 0.005, 0.085, 5), m2, knee, d * 0.026, -0.415, 0.085).rotation.set(1.1, d * 0.7, 0); }
      else if (sp.kind === 'clog') { foot(mLeg, 0.6, 1.3, -0.41, 0.058, 0.02); const f = put(new THREE.SphereGeometry(0.074, 12, 8), m1, knee, 0, -0.418, 0.075); f.scale.set(1.02, 0.74, 1.2); put(new THREE.SphereGeometry(0.074, 12, 6), m1, knee, 0, -0.446, 0.04).scale.set(1.02, 0.24, 1.72); }
      else foot(mLeg, 0.6, 1.5, -0.412, 0.06, 0.04);
      if (legs && legs.sock != null && sp.kind !== 'boot') { const t = legs.sock, n = legs.stripes ? Math.max(2, Math.round((t + 0.43) / 0.045)) : 1; for (let i = 0; i < n; i++) { const ya = -0.43 + ((t + 0.43) * i) / n, yb = -0.43 + ((t + 0.43) * (i + 1)) / n, rr = (y) => (y < -0.2 ? 0.043 + ((y + 0.43) / 0.23) * 0.011 : 0.054) ;
          put(lathe([[rr(ya), ya], [rr((ya + yb) / 2), (ya + yb) / 2], [rr(yb), yb]], 12), i % 2 ? M.sock2 : M.sock, knee); } if (sp.kind !== 'bare' && sp.kind !== 'sandal' && sp.kind !== 'flip') continue; foot(M.sock, 0.62, 1.52, -0.412, 0.061, 0.04); } }
  };
  const extras = (W) => {
    // neck
    const nk = W.neck.id, n1 = M.neck, n2 = M.neck2;
    if (nk === 'lencinho') { const t = put(new THREE.TorusGeometry(0.056, 0.017, 6, 18), n1, J.spine, 0, 0.445, 0.004); t.rotation.x = Math.PI / 2 + 0.12; t.scale.set(1, 0.9, 1); put(new THREE.SphereGeometry(0.02, 8, 6), n1, J.spine, 0.02, 0.43, 0.06); for (const s of [-1, 1]) put(new THREE.BoxGeometry(0.03, 0.075, 0.008), n1, J.spine, 0.02 + s * 0.02, 0.395, 0.07).rotation.set(-0.2, 0, s * 0.3); }
    else if (nk === 'colar' || nk === 'pingente') { const N = nk === 'colar' ? 22 : 0, rx = 0.072, rz = 0.068; if (N) for (let i = 0; i < N; i++) { const a = (i / N) * TAU, f = (1 + Math.cos(a)) / 2; put(new THREE.SphereGeometry(0.0085, 6, 5), n1, J.spine, Math.sin(a) * (0.062 + 0.012 * f), 0.447 - 0.06 * Math.pow(f, 1.5), Math.cos(a) * (0.052 + 0.052 * f) + 0.004); }
      else { for (let i = 0; i < 26; i++) { const a = (i / 26) * TAU, f = (1 + Math.cos(a)) / 2; put(new THREE.SphereGeometry(0.0035, 5, 4), n1, J.spine, Math.sin(a) * (0.06 + 0.008 * f), 0.447 - 0.075 * Math.pow(f, 1.6), Math.cos(a) * (0.052 + 0.053 * f) + 0.003); } put(new THREE.SphereGeometry(0.015, 10, 7), n2, J.spine, 0, 0.36, 0.112).scale.set(1, 1.3, 0.6); } }
    else if (nk === 'cachecol') { const t = put(new THREE.TorusGeometry(0.062, 0.028, 8, 18), n1, J.spine, 0, 0.452, 0.004); t.rotation.x = Math.PI / 2 + 0.1; for (let i = 0; i < 5; i++) put(new THREE.BoxGeometry(0.06, 0.05, 0.016), i % 2 ? n2 : n1, J.spine, 0.04, 0.4 - i * 0.05, 0.1 + (i < 2 ? 0 : 0.004)).rotation.set(-0.12, 0, 0.06); for (let i = 0; i < 4; i++) put(new THREE.BoxGeometry(0.008, 0.03, 0.008), n2, J.spine, 0.018 + i * 0.015, 0.165, 0.105); }
    else if (nk === 'gravatinha') bow(J.spine, n1, 0, 0.432, 0.062, 0.8);
    // hands
    const hd = W.hands.id;
    if (hd === 'pulseira') { for (const [j, y, m] of [[J.elR, -0.185, M.hand], [J.elR, -0.172, M.hand2], [J.elL, -0.185, M.hand2]]) put(new THREE.TorusGeometry(0.027, 0.005, 5, 12), m, j, 0, y, 0).rotation.x = Math.PI / 2; }
    else if (hd === 'relogio') { put(new THREE.TorusGeometry(0.0265, 0.006, 5, 12), M.hand, J.elL, 0, -0.185, 0).rotation.x = Math.PI / 2; put(new THREE.CylinderGeometry(0.014, 0.014, 0.008, 10), M.hand2, J.elL, -0.03, -0.185, 0).rotation.z = Math.PI / 2; }
    // bags
    const bg = W.bag.id;
    if (bg === 'bolsa') { const t = put(new THREE.TorusGeometry(0.21, 0.008, 5, 26), M.bag, J.spine, 0.0, 0.2, 0); t.rotation.set(0, 0, 0.72); t.scale.set(1, 1, 0.6); const b = put(new THREE.SphereGeometry(0.07, 12, 9), M.bag, J.spine, 0.165, 0.02, 0.03); b.scale.set(0.5, 0.9, 1.15); put(new THREE.BoxGeometry(0.012, 0.03, 0.03), M.bag2, J.spine, 0.2, 0.04, 0.03); }
    else if (bg === 'mochila') { const b = put(new THREE.SphereGeometry(0.11, 12, 10), M.bag, J.spine, 0, 0.21, -0.15); b.scale.set(1.05, 1.25, 0.6); put(new THREE.SphereGeometry(0.06, 10, 8), M.bag2, J.spine, 0, 0.15, -0.205).scale.set(1.2, 0.9, 0.4); for (const s of [-1, 1]) put(new THREE.TorusGeometry(0.1, 0.012, 5, 16, Math.PI * 1.25), M.bag2, J.spine, s * 0.09, 0.28, -0.03).rotation.set(0, Math.PI / 2, -0.5); }
    else if (bg === 'asas') { wings = new THREE.Group(); wings.position.set(0, 0.3, -0.105); J.spine.add(wings); const c1 = col(W.bag.c), c2 = col(W.bag.c2), wm = std(0xffffff, 0.5, { vertexColors: true, side: THREE.DoubleSide, transparent: true, opacity: 0.88 });
      for (const s of [-1, 1]) { const wb = new Builder(); wb.petal(mul(RZ(-s * 0.9), RX(0.15)), { L: 0.4, W: 0.3, a: 1.3, b: 0.55, nu: 6, nv: 4, cup: 0.1, vein: 0.5, cols: [c2, c1, col(0xffffff)] }); wb.petal(mul(RZ(-s * 2.0), RX(0.15)), { L: 0.27, W: 0.22, a: 1.2, b: 0.55, nu: 5, nv: 4, cup: 0.1, vein: 0.5, cols: [c2, c1, col(0xffffff)] });
        const w = new THREE.Mesh(wb.build(), wm); w.castShadow = true; w.userData.s = s; wings.add(w); } worn.push(wings); }
    // glasses and the flower in her hair
    const fc = W.face.id, ey = -0.021, ez = R * 0.955, ex = 0.054;
    if (fc === 'oculos' || fc === 'gatinho' || fc === 'sol') { for (const s of [-1, 1]) { const t = put(new THREE.TorusGeometry(0.031, 0.0042, 6, 18), M.face, J.head, s * ex, ey, ez + 0.004); t.rotation.y = s * 0.3; if (fc === 'gatinho') { t.scale.set(1.12, 0.82, 1); put(new THREE.ConeGeometry(0.01, 0.03, 4), M.face, J.head, s * (ex + 0.032), ey + 0.024, ez - 0.006).rotation.z = -s * 0.9; }
        if (fc === 'sol') put(new THREE.CircleGeometry(0.03, 16), M.lens, J.head, s * ex, ey, ez + 0.005).rotation.y = s * 0.3; put(new THREE.BoxGeometry(0.004, 0.005, 0.075), M.face, J.head, s * (ex + 0.036) * 1.4, ey + 0.004, ez - 0.05).rotation.y = -s * 0.5; }
      put(new THREE.BoxGeometry(0.05, 0.005, 0.005), M.face, J.head, 0, ey + 0.004, ez + 0.012); }
    else if (fc === 'flor') { const f = flower(J.head, R * 0.86, R * 0.42, R * 0.42, W.face.c, 2.1); worn.push(f); }
    // earrings
    const er = W.ears.id;
    for (const s of [-1, 1]) { const x = s * R * 0.975, y = -0.045, z = 0.004;
      if (er === 'pingo') put(new THREE.SphereGeometry(0.011, 8, 6), M.ear, J.head, x, y, z);
      else if (er === 'perola') { put(new THREE.SphereGeometry(0.015, 10, 8), M.ear, J.head, x + s * 0.004, y - 0.012, z); }
      else if (er === 'argola') put(new THREE.TorusGeometry(0.024, 0.004, 5, 16), M.ear, J.head, x + s * 0.006, y - 0.024, z).rotation.y = Math.PI / 2;
      else if (er === 'flor') { for (let k = 0; k < 5; k++) { const a = (k / 5) * TAU; put(new THREE.SphereGeometry(0.008, 6, 5), M.ear, J.head, x + s * 0.006, y - 0.004 + Math.sin(a) * 0.011, z + Math.cos(a) * 0.011); } put(new THREE.SphereGeometry(0.007, 6, 5), M.ear2, J.head, x + s * 0.01, y - 0.004, z); }
      else if (er === 'pena') { put(new THREE.CylinderGeometry(0.002, 0.002, 0.03, 4), M.ear, J.head, x + s * 0.004, y - 0.018, z); put(new THREE.SphereGeometry(0.012, 8, 6), M.ear, J.head, x + s * 0.004, y - 0.05, z).scale.set(0.6, 2.0, 0.9); } }
  };

  const g = {
    group: root, J, state: 'idle', t: 0, phase: 0, speed: 0, heading: 0, targetHeading: 0, blinkT: 2, face: 'open', faceHold: 0,
    actionT: 0, actionDur: 0, action: null, high: false, lookAt: null, onStep: null, spoutWorld: new THREE.Vector3(), idleSeed: 0,
  };
  // W = resolveWear(...): what she is wearing, piece by piece, with the colours she chose
  g.wear = (W) => {
    for (const m of worn) { if (m.parent) m.parent.remove(m); if (m.geometry) m.geometry.dispose(); else m.traverse((o) => o.geometry && o.geometry.dispose()); } worn.length = 0; wings = null; sk = null;
    const D = W.dress, top = D || W.top, bot = D || W.bottom, apron = W.apron && W.apron.id !== 'sem' ? W.apron.c : null;
    // colours and prints
    paint(M.top, W.top.c, W.top.p, 0.42, 1.6); M.top2.color.setHex(W.top.c2 ?? 0xffffff);
    paint(M.bot, bot.c, bot.p, 0.42, 1.6); M.bot2.color.setHex(bot.c2 ?? 0xffffff); paint(M.skirt, bot.c, bot.p || 'liso', 1, 1, { hem: true, apron: bot.skirt ? apron : null });
    M.waist.color.setHex(bot.c).multiplyScalar(0.82); M.apron.color.setHex(apron ?? 0xffffff);
    M.shoe.color.setHex(W.shoes.c ?? BOOT); M.shoe2.color.setHex(W.shoes.c2 ?? 0xffffff); M.shoe.metalness = W.shoes.heel ? 0.35 : 0; M.shoe.roughness = W.shoes.heel ? 0.3 : 0.45;
    const lg = W.legs; mLeg.color.setHex(lg.tights ? lg.c : SKIN); M.sock.color.setHex(lg.c ?? 0xffffff); M.sock2.color.setHex(lg.c2 ?? 0xffffff);
    M.hat.color.setHex(W.hat.c ?? STRAW); M.hat2.color.setHex(W.hat.c2 ?? RIBBON); M.neck.color.setHex(W.neck.c ?? RIBBON); M.neck2.color.setHex(W.neck.c2 ?? 0xffffff);
    mHand.color.setHex(W.hands.id === 'luvas' ? W.hands.c : SKIN); M.hand.color.setHex(W.hands.c ?? 0xffffff); M.hand2.color.setHex(W.hands.c2 ?? 0xffffff);
    M.bag.color.setHex(W.bag.c ?? 0xb98a5e); M.bag2.color.setHex(W.bag.c2 ?? 0xf2c84a); M.face.color.setHex(W.face.c ?? 0x6a4a3a); M.ear.color.setHex(W.ears.c ?? 0x2f8f5e); M.ear2.color.setHex(W.ears.c2 ?? 0xf2c84a);
    mHair.color.setRGB(...(W.hairColor || [1, 1, 1]));
    // pieces
    if (D) bodice(D, M.bot, M.bot2); else bodice(W.top, M.top, M.top2);
    if (bot.skirt) { sk = skirtGeometry(bot.skirt); skLen = bot.skirt.len; skRest = Float32Array.from(sk.attributes.position.array); skPos = sk.attributes.position; const m = put(sk, M.skirt, J.skirt); m.receiveShadow = false; m.frustumCulled = false;
      if (D || W.top.hem !== 'out') { const t = put(new THREE.TorusGeometry(0.119, 0.014, 6, 24), D && D.belt ? M.bot2 : M.waist, J.skirt, 0, 0.012, 0); t.rotation.x = Math.PI / 2; t.scale.y = 0.94; } if (D && D.belt) bow(J.skirt, M.bot2, 0.035, 0.012, 0.118, 0.85); }
    else if (bot.pants) { trousers(bot.pants, M.bot, M.bot2, W.shoes.kind === 'boot' ? W.shoes.top : null); if (apron != null) put(lathe([[0.15, -0.26], [0.146, -0.1], [0.134, 0.02]], 12, -0.75, 1.5), M.apron, J.skirt).scale.z = 0.86; }
    if (!D && bot.bib) bibOf(M.bot, M.bot2); else if (apron != null && !D) { /* apron bib */ put(new THREE.LatheGeometry([[0.12, 0.02], [0.112, 0.1], [0.128, 0.22], [0.136, 0.27]].map(([r, y]) => new THREE.Vector2(r * 1.1, y)), 8, -0.42, 0.84), M.apron, J.spine).scale.z = 0.87; for (const s of [-1, 1]) put(new THREE.BoxGeometry(0.014, 0.19, 0.01), M.apron, J.spine, s * 0.05, 0.35, 0.098).rotation.set(-0.5, 0, -s * 0.2); }
    shoes(W.shoes, lg); extras(W);
    if (W.bag.id === 'cestinha') basket.visible = true; else basket.visible = false;
    // hat and hair (kept once built)
    const hid = W.hat.id; if (!hats[hid]) { const h = new THREE.Group(); J.hat.add(h); hats[hid] = h; (HATFN[hid] || HATFN.nenhum)(h); h.traverse((o) => { if (o.isMesh) o.castShadow = true; }); } for (const k in hats) hats[k].visible = k === hid; hatNow = hid;
    const hr0 = W.hair.id; if (!hairs[hr0]) mkHair(hr0); for (const k in hairs) hairs[k].visible = k === hr0; hairNow = hr0; hairSide.visible = !CURLY.has(hr0);
    g.W = W; g.stride = bot.skirt && (bot.skirt.shape === 'lapis' || bot.skirt.shape === 'sereia') ? 0.5 : 1;
  };
  // flower basket on the arm
  const basket = new THREE.Group(); basket.visible = false; J.elL.add(basket); basket.position.set(-0.03, -0.13, 0.02);
  { part(lathe([[0.001, -0.1], [0.07, -0.1], [0.095, -0.02], [0.098, 0.0], [0.09, 0.0]], 14), std(0xc49a5c, 0.85, { side: THREE.DoubleSide }), basket); const hd = part(new THREE.TorusGeometry(0.085, 0.008, 5, 16, Math.PI), std(0xa87a48, 0.85), basket, 0, 0, 0); hd.rotation.y = Math.PI / 2;
    const cs = [0xf07aa4, 0xf7c84a, 0xffffff, 0xb48af0]; for (let i = 0; i < 6; i++) { const a = i * 1.05; flower(basket, Math.cos(a) * 0.04, 0.01 + (i % 2) * 0.02, Math.sin(a) * 0.04, cs[i % 4], 1.1); } }

  // tools
  const can = new THREE.Group(), mCan = std(0x6fa7a0, 0.35, { metalness: 0.35 });
  part(new THREE.CylinderGeometry(0.075, 0.085, 0.15, 16), mCan, can, 0, 0, 0);
  const spout = part(new THREE.CylinderGeometry(0.014, 0.024, 0.2, 8), mCan, can, 0, 0.03, 0.14); spout.rotation.x = 0.95;
  const rose = part(new THREE.CylinderGeometry(0.034, 0.016, 0.03, 10), mCan, can, 0, 0.092, 0.225); rose.rotation.x = 0.95;
  const handle = part(new THREE.TorusGeometry(0.06, 0.009, 6, 14, Math.PI * 1.1), mCan, can, 0, 0.05, -0.07); handle.rotation.y = Math.PI / 2; handle.rotation.z = 0;
  const topH = part(new THREE.TorusGeometry(0.055, 0.008, 6, 12, Math.PI), mCan, can, 0, 0.075, 0); topH.rotation.y = Math.PI / 2;
  can.position.set(0, -0.11, 0.03); can.visible = false; J.handR.add(can);
  const trowel = new THREE.Group();
  part(new THREE.CylinderGeometry(0.013, 0.013, 0.09, 6), std(0x8a5a38), trowel, 0, 0, 0);
  const blade = part(new THREE.SphereGeometry(0.035, 8, 6), std(0xb8c0c4, 0.3, { metalness: 0.6 }), trowel, 0, -0.085, 0); blade.scale.set(0.8, 1.5, 0.25);
  trowel.position.set(0, -0.05, 0.02); trowel.visible = false; J.handR.add(trowel);

  // ---------- animation ----------
  const pose = { by: 0, lean: 0, twist: 0, spine: 0, headX: 0, headY: 0, headZ: 0, shLx: 0, shLz: 0.2, shRx: 0, shRz: -0.2, elL: -0.1, elR: -0.1, hipL: 0, hipR: 0, kneeL: 0, kneeR: 0, skirtX: 0, skirtS: 1, handRx: 0, lie: 0 };
  const cur = { ...pose };
  g.setFace = (f, hold = 0) => { g.face = f; g.faceHold = hold; mFace.map = faces[f]; mFace.emissiveMap = faces[f]; };
  g.play = (action, dur, opts = {}) => { g.state = action; g.actionT = 0; g.actionDur = dur; g.high = !!opts.high; can.visible = action === 'water'; trowel.visible = action === 'plant'; if (action === 'cheer') g.setFace('happy', dur + 0.4); if (action === 'sleep') g.setFace('closed', dur + 0.3); };
  g.stop = () => { g.state = 'idle'; can.visible = false; trowel.visible = false; if (g.face === 'closed' && g.faceHold > 1) g.setFace('open'); };
  g.faceTo = (x, z) => { g.targetHeading = Math.atan2(x - root.position.x, z - root.position.z); };
  g.wear(resolveWear());

  // ---------- skirt: light cloth. It trails behind her steps, swings, and is pushed out of the way by the legs ----------
  const sw = { x: 0, z: 0, vx: 0, vz: 0, tw: 0, vtw: 0, px: 0, pz: 0, ph: 0, init: false };
  const legs = [{ h: -0.075 }, { h: 0.075 }];
  const updateSkirt = (dt, time) => {
    if (!sk) return;
    dt = Math.min(Math.max(dt, 0), 0.05);
    // how the body moved, seen from her own frame
    const wx = root.position.x, wz = root.position.z; if (!sw.init) { sw.px = wx; sw.pz = wz; sw.ph = g.heading; sw.init = true; }
    const dx = (wx - sw.px) / Math.max(dt, 1e-3), dz = (wz - sw.pz) / Math.max(dt, 1e-3), ch = Math.cos(g.heading), shh = Math.sin(g.heading); sw.px = wx; sw.pz = wz;
    const vf = clamp(dx * shh + dz * ch, -4, 4), vs = clamp(dx * ch - dz * shh, -4, 4); let dh = g.heading - sw.ph; dh = Math.atan2(Math.sin(dh), Math.cos(dh)); sw.ph = g.heading;
    const tx = clamp(-vs * 0.03, -0.09, 0.09) + Math.sin(g.phase) * 0.018 * Math.min(1, g.speed), tz = clamp(-vf * 0.035, -0.1, 0.1) - cur.lean * 0.1 + cur.by * 0.25;
    sw.vx += ((tx - sw.x) * 70 - sw.vx * 7.5) * dt; sw.vz += ((tz - sw.z) * 70 - sw.vz * 7.5) * dt; sw.x += sw.vx * dt; sw.z += sw.vz * dt;
    sw.vtw += ((clamp(-dh / Math.max(dt, 1e-3) * 0.06, -0.5, 0.5) - sw.tw) * 50 - sw.vtw * 6) * dt; sw.tw += sw.vtw * dt;
    for (let i = 0; i < 2; i++) { const L = legs[i], a = i ? cur.hipR : cur.hipL, k = i ? cur.kneeR : cur.kneeL; L.ky = -0.11 - Math.cos(a) * 0.4; L.kz = -Math.sin(a) * 0.4; L.fy = L.ky - Math.cos(a + k) * 0.42; L.fz = L.kz - Math.sin(a + k) * 0.42; }
    const A = skPos.array, flut = Math.min(1, g.speed) * 0.02 + 0.006, SL = skLen - 0.02, amp = Math.min(1.5, skLen / 0.54);
    for (let i = 0; i < A.length; i += 3) {
      let x = skRest[i], y = skRest[i + 1], z = skRest[i + 2]; const t = clamp(-y / SL, 0, 1), t2 = t * Math.sqrt(t) * amp, ang = Math.atan2(z, x);
      const f = 1 + flut * t * Math.sin(ang * 3 + time * 5.5) + 0.008 * t * Math.sin(ang * 2 - time * 1.3); x *= f; z *= f;
      const c = Math.cos(sw.tw * t), s2 = Math.sin(sw.tw * t), rx = x * c - z * s2, rz = x * s2 + z * c; x = rx + sw.x * t2; z = rz + sw.z * t2; y += (Math.abs(sw.x) + Math.abs(sw.z)) * t2 * 0.25;
      if (t > 0.08) for (let l = 0; l < 2; l++) { const L = legs[l];
        for (let sgm = 0; sgm < 2; sgm++) { const ay = sgm ? L.ky : -0.11, az = sgm ? L.kz : 0, by = sgm ? L.fy : L.ky, bz = sgm ? L.fz : L.kz, R0 = sgm ? 0.082 : 0.098;
          const ey = by - ay, ez = bz - az, u = clamp(((y - ay) * ey + (z - az) * ez) / (ey * ey + ez * ez), 0, 1), cy = ay + ey * u, cz = az + ez * u;
          const qx = x - L.h, qy = y - cy, qz = z - cz, d = Math.hypot(qx, qy, qz);
          if (d < R0) { let ox = qx, oz = qz; const ol = Math.hypot(ox, oz); if (ol < 1e-4 || ox * x + oz * z < 0) { ox = x; oz = z; } const n = Math.hypot(ox, oz) || 1, push = R0 - d; x += (ox / n) * push; z += (oz / n) * push; } } }
      A[i] = x; A[i + 1] = y; A[i + 2] = z;
    }
    skPos.needsUpdate = true; sk.computeVertexNormals();
  };
  g.update = (dt, time) => {
    dt = Math.min(Math.max(dt, 0), 0.1); g.t += dt;
    const P = pose; let k = 10; // smoothing rate
    // defaults (idle)
    const br = Math.sin(time * 1.7);
    P.by = br * 0.004; P.lean = 0; P.twist = Math.sin(time * 0.45) * 0.03; P.spine = br * 0.012; P.lie = 0;
    P.headX = Math.sin(time * 0.6 + 1) * 0.04; P.headY = Math.sin(time * 0.33) * 0.22 + Math.sin(time * 0.71) * 0.08; P.headZ = Math.sin(time * 0.5) * 0.03;
    P.shLx = Math.sin(time * 0.9) * 0.03; P.shRx = -Math.sin(time * 0.9) * 0.03; P.shLz = 0.2; P.shRz = -0.2; P.elL = -0.2; P.elR = -0.2;
    P.hipL = 0; P.hipR = 0; P.kneeL = 0; P.kneeR = 0; P.skirtX = 0; P.skirtS = 1; P.handRx = 0;
    if (g.state === 'walk') {
      g.phase += dt * g.speed * 3.5; const s = Math.sin(g.phase), c = Math.cos(g.phase), amp = clamp(g.speed / 2.4, 0.3, 1);
      P.hipL = -s * 0.52 * amp; P.hipR = s * 0.52 * amp; P.kneeL = Math.max(0, c) * 0.82 * amp + 0.08; P.kneeR = Math.max(0, -c) * 0.82 * amp + 0.08;
      P.shLx = s * 0.5 * amp; P.shRx = -s * 0.5 * amp; P.elL = -0.3 - Math.max(0, s) * 0.3; P.elR = -0.3 - Math.max(0, -s) * 0.3; P.shLz = 0.2; P.shRz = -0.2;
      P.by = Math.abs(c) * 0.035 * amp - 0.02; P.lean = 0.07 * amp; P.twist = -s * 0.1 * amp; P.headY = s * 0.05; P.headX = -0.03; P.headZ = c * 0.03; P.skirtX = -0.05 + c * 0.04;
      if (g.stride < 1) { P.hipL *= g.stride; P.hipR *= g.stride; P.kneeL *= 0.5 + g.stride * 0.5; P.kneeR *= 0.5 + g.stride * 0.5; }
      const stepNow = Math.floor(g.phase / Math.PI); if (stepNow !== g._step) { g._step = stepNow; g.onStep && g.onStep(); }
      k = 16;
    } else if (g.state === 'water') {
      g.actionT += dt; const u = clamp(g.actionT / g.actionDur, 0, 1), on = smooth(u / 0.18) * smooth((1 - u) / 0.15), tip = smooth((u - 0.16) / 0.12) * smooth((1 - u) / 0.14);
      const hi = g.high ? 1 : 0;
      P.shRx = -(1.0 + hi * 1.25) * on; P.shRz = -0.1 - 0.12 * on; P.elR = -(0.55 - hi * 0.3) * on; P.handRx = (0.75 + Math.sin(time * 5) * 0.06) * tip - hi * 0.3 * on;
      P.shLx = 0.15 * on; P.shLz = 0.3 * on + 0.1; P.elL = -0.9 * on; P.lean = (0.14 - hi * 0.2) * on; P.headX = (0.3 - hi * 0.75) * on; P.headY = 0; P.twist = 0.12 * on; P.kneeL = 0.12 * on; P.hipL = -0.06 * on;
    } else if (g.state === 'plant') {
      g.actionT += dt; const u = clamp(g.actionT / g.actionDur, 0, 1), d = smooth(u / 0.22) * smooth((1 - u) / 0.2), dig = Math.sin(time * 9) * 0.5 + 0.5;
      P.by = -0.36 * d; P.hipL = -1.5 * d; P.kneeL = 2.25 * d; P.hipR = -0.55 * d; P.kneeR = 2.1 * d; P.lean = 0.55 * d; P.spine = 0.15 * d; P.skirtX = -0.5 * d; P.skirtS = 1 - 0.3 * d;
      P.shRx = -(1.05 + dig * 0.3) * d; P.elR = -(0.5 + dig * 0.45) * d; P.shRz = -0.05; P.shLx = -0.9 * d; P.elL = -0.7 * d; P.shLz = 0.25 * d; P.headX = 0.35 * d; P.headY = 0; P.handRx = 0.6 * d; k = 12;
    } else if (g.state === 'collect') {
      g.actionT += dt; const u = clamp(g.actionT / g.actionDur, 0, 1), d = smooth(u / 0.3) * smooth((1 - u) / 0.3);
      P.lean = 0.4 * d; P.shRx = -1.25 * d; P.shLx = -1.2 * d; P.elR = -0.4 * d; P.elL = -0.45 * d; P.shRz = -0.25 * d; P.shLz = 0.25 * d; P.kneeL = 0.3 * d; P.kneeR = 0.3 * d; P.hipL = -0.3 * d; P.hipR = -0.3 * d; P.by = -0.04 * d; P.headX = 0.3 * d; P.headY = 0;
    } else if (g.state === 'cheer') {
      g.actionT += dt; const u = clamp(g.actionT / g.actionDur, 0, 1), d = smooth(u / 0.2) * smooth((1 - u) / 0.25), hop = Math.abs(Math.sin(u * Math.PI * 3)) * d;
      P.by = hop * 0.11; P.shLx = -2.45 * d; P.shRx = -2.45 * d; P.shLz = 0.95 * d + 0.1; P.shRz = -0.95 * d - 0.1; P.elL = -0.25; P.elR = -0.25; P.headX = -0.2 * d; P.headY = 0; P.kneeL = (1 - hop) * 0.3 * d; P.kneeR = (1 - hop) * 0.3 * d; P.hipL = -(1 - hop) * 0.15 * d; P.hipR = -(1 - hop) * 0.15 * d; P.spine = -0.08 * d; k = 18;
    } else if (g.state === 'admire') {
      g.actionT += dt; const u = clamp(g.actionT / g.actionDur, 0, 1), d = smooth(u / 0.25) * smooth((1 - u) / 0.25);
      P.lean = 0.25 * d; P.shLx = -0.5 * d; P.shRx = -0.5 * d; P.elL = -1.7 * d; P.elR = -1.7 * d; P.shLz = -0.25 * d; P.shRz = 0.25 * d; P.headX = 0.22 * d; P.headZ = 0.12 * d; P.headY = 0; P.kneeL = 0.15 * d; P.kneeR = 0.15 * d; P.hipL = -0.1 * d; P.hipR = -0.1 * d;
    } else if (g.state === 'sit') {
      // seated: g.seatY = height of the seat. Hands on her lap, a little sway, looking around
      g.actionT += dt; const u = clamp(g.actionT / g.actionDur, 0, 1), d = smooth(u / 0.08) * smooth((1 - u) / 0.08), drop = 0.87 - (g.seatY ?? 0.45) - 0.1;
      P.by = -drop * d; P.hipL = -1.5 * d; P.hipR = -1.5 * d; P.kneeL = 1.5 * d; P.kneeR = 1.5 * d; P.lean = -0.04 * d; P.skirtX = -0.6 * d; P.skirtS = 1 - 0.25 * d;
      P.shLx = -0.45 * d; P.shRx = -0.45 * d; P.elL = -0.9 * d; P.elR = -0.9 * d; P.shLz = 0.05; P.shRz = -0.05; P.headY = Math.sin(time * 0.5) * 0.3 * d; P.headX = 0.03; k = 7;
    } else if (g.state === 'sleep') {
      g.actionT += dt; const u = clamp(g.actionT / g.actionDur, 0, 1), d = smooth(u / 0.1) * smooth((1 - u) / 0.1);
      P.lie = d; P.shLz = 0.12; P.shRz = -0.12; P.elL = -0.1; P.elR = -0.1; P.headY = 0; P.headX = 0; P.headZ = 0; P.twist = 0; P.spine = Math.sin(time * 1.1) * 0.012; k = 6;
    } else if (g.state === 'dance') {
      g.actionT += dt; const u = clamp(g.actionT / g.actionDur, 0, 1), d = smooth(u / 0.1) * smooth((1 - u) / 0.1), b = time * 5.2, s = Math.sin(b), c = Math.cos(b);
      P.by = Math.abs(s) * 0.04 * d; P.twist = s * 0.28 * d; P.shLx = (-0.9 + c * 0.5) * d; P.shRx = (-0.9 - c * 0.5) * d; P.shLz = 0.5 * d + 0.1; P.shRz = -0.5 * d - 0.1; P.elL = -1.0 * d; P.elR = -1.0 * d;
      P.hipL = Math.max(0, s) * -0.25 * d; P.hipR = Math.max(0, -s) * -0.25 * d; P.kneeL = Math.max(0, s) * 0.5 * d; P.kneeR = Math.max(0, -s) * 0.5 * d; P.headZ = s * 0.12 * d; P.headY = 0; k = 14;
    }
    if (g.state !== 'idle' && g.state !== 'walk' && g.actionT >= g.actionDur) g.stop();
    const a = 1 - Math.exp(-k * dt);
    for (const f in cur) cur[f] += (pose[f] - cur[f]) * a;
    // apply
    // lean bends mostly at the waist so she never tips over like a plank
    body.position.y = cur.by + cur.lie * ((g.bedY ?? 0.5) + 0.12); body.rotation.x = cur.lean * 0.22 - cur.lie * Math.PI / 2; body.position.z = -cur.lean * 0.1 + cur.lie * 0.87;
    J.spine.rotation.set(cur.spine + cur.lean * 0.95, cur.twist, 0); J.hips.rotation.y = -cur.twist * 0.4;
    J.head.rotation.set(cur.headX - cur.lean * 0.75 + cur.lie * 0.25, cur.headY - cur.twist, cur.headZ);
    J.shL.rotation.set(cur.shLx, 0, -cur.shLz); J.shR.rotation.set(cur.shRx, 0, -cur.shRz); // pose values: positive L / negative R = away from the body
    J.elL.rotation.x = cur.elL; J.elR.rotation.x = cur.elR; J.handR.rotation.x = cur.handRx;
    J.hipL.rotation.x = cur.hipL; J.hipR.rotation.x = cur.hipR; J.kneeL.rotation.x = cur.kneeL; J.kneeR.rotation.x = cur.kneeR;
    J.skirt.scale.set(1 + (1 - cur.skirtS) * 0.35, cur.skirtS, 1 + (1 - cur.skirtS) * 0.5); updateSkirt(dt, time);
    mHair.userData.u.uSway.value = 0.14 + g.speed * 0.12;
    if (wings) for (const w of wings.children) w.rotation.y = w.userData.s * (0.55 + Math.sin(time * (g.speed > 0.2 ? 9 : 2.6)) * 0.3);
    // heading
    let dh = g.targetHeading - g.heading; dh = Math.atan2(Math.sin(dh), Math.cos(dh)); g.heading += dh * (1 - Math.exp(-9 * dt)); root.rotation.y = g.heading;
    // blink
    if (g.faceHold > 0) { g.faceHold -= dt; if (g.faceHold <= 0) g.setFace('open'); }
    else { g.blinkT -= dt; if (g.blinkT < 0) { if (g.face === 'open') { g.setFace('closed'); g.blinkT = 0.11; } else { g.setFace('open'); g.blinkT = 1.8 + Math.random() * 3.5; } } }
    rose.getWorldPosition(g.spoutWorld);
  };
  return g;
}
