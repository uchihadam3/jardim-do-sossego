import * as THREE from 'three';
import { Builder } from './builder.js';
import { T, RX, RY, RZ, S, mul, col, mulberry, clamp, lerp, TAU, smooth, easeInOut } from './util.js';
import { makePlantMaterial } from './plantmat.js';

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

// Skirt fabric: drawn for the chosen colour and print. Canvas top = hem, x wraps around the waist (front at x = 0).
const hex = (n) => '#' + n.toString(16).padStart(6, '0');
function mixHex(a, b, t) { const A = new THREE.Color(a), B = new THREE.Color(b); return '#' + A.lerp(B, t).getHexString(); }
export function fabricCanvas(pattern, color, apron) {
  const W = 1024, H = 256, c = document.createElement('canvas'); c.width = W; c.height = H; const g = c.getContext('2d');
  if (!g.roundRect) g.roundRect = (x, y, w, h) => g.rect(x, y, w, h);
  const base = hex(color), light = mixHex(color, 0xffffff, 0.75), dark = mixHex(color, 0x000000, 0.22), r = (() => { let a = 7; return () => ((a = (a * 16807) % 2147483647) / 2147483647); })();
  g.fillStyle = base; g.fillRect(0, 0, W, H);
  const tile = (step, fn) => { for (let y = step / 2; y < H; y += step) for (let x = step / 2 + ((Math.round(y / step) % 2) * step) / 2; x < W + step; x += step) fn(x % W, y); };
  if (pattern === 'poa') { g.fillStyle = light; tile(34, (x, y) => { g.beginPath(); g.arc(x, y, 6.5, 0, TAU); g.fill(); }); }
  else if (pattern === 'xadrez') { g.fillStyle = 'rgba(255,255,255,0.5)'; for (let x = 0; x < W; x += 32) g.fillRect(x, 0, 16, H); for (let y = 0; y < H; y += 32) g.fillRect(0, y, W, 16); }
  else if (pattern === 'listras') { g.fillStyle = light; for (let x = 0; x < W; x += 26) g.fillRect(x, 0, 9, H); }
  else if (pattern === 'florido') { const cs = ['#fff6e8', '#ffd6e2', '#ffe9a8', mixHex(color, 0xffffff, 0.55)];
    tile(44, (x, y) => { const X = x + (r() - 0.5) * 12, Y = y + (r() - 0.5) * 12, cc = cs[Math.floor(r() * cs.length)]; g.fillStyle = cc; for (let k = 0; k < 5; k++) { const a = (k / 5) * TAU; g.beginPath(); g.arc(X + Math.cos(a) * 6, Y + Math.sin(a) * 6, 5, 0, TAU); g.fill(); } g.fillStyle = '#f2b23a'; g.beginPath(); g.arc(X, Y, 3.4, 0, TAU); g.fill();
      g.fillStyle = mixHex(color, 0x2f6a34, 0.6); g.beginPath(); g.ellipse(X + 12, Y + 9, 6, 2.6, 0.7, 0, TAU); g.fill(); }); }
  else if (pattern === 'margaridas') { tile(58, (x, y) => { g.fillStyle = '#ffffff'; for (let k = 0; k < 9; k++) { const a = (k / 9) * TAU; g.beginPath(); g.ellipse(x + Math.cos(a) * 9, y + Math.sin(a) * 9, 7, 3, a, 0, TAU); g.fill(); } g.fillStyle = '#f5c22a'; g.beginPath(); g.arc(x, y, 5, 0, TAU); g.fill(); }); }
  else if (pattern === 'coracoes') { g.fillStyle = light; tile(40, (x, y) => { g.beginPath(); g.moveTo(x, y + 7); g.bezierCurveTo(x - 14, y - 4, x - 5, y - 13, x, y - 4); g.bezierCurveTo(x + 5, y - 13, x + 14, y - 4, x, y + 7); g.fill(); }); }
  else if (pattern === 'folhas') { tile(46, (x, y) => { g.strokeStyle = dark; g.lineWidth = 2; g.beginPath(); g.moveTo(x - 10, y + 10); g.lineTo(x + 10, y - 10); g.stroke(); g.fillStyle = light; for (const [dx, dy, a] of [[-4, 2, 0.2], [3, -3, 2.0], [8, -10, 0.2], [-2, 8, 2.0]]) { g.beginPath(); g.ellipse(x + dx, y + dy, 7, 3, a, 0, TAU); g.fill(); } }); }
  // apron: a pale panel over the front, with a pocket
  if (apron != null) { const ac = hex(apron), w = 150; g.fillStyle = ac; for (const x0 of [-w, W - w]) { g.beginPath(); g.roundRect(x0, 30, w * 2, H + 20, 34); g.fill(); }
    g.strokeStyle = mixHex(apron, 0x000000, 0.14); g.lineWidth = 3; for (const x0 of [-w, W - w]) { g.beginPath(); g.roundRect(x0 + 5, 35, w * 2 - 10, H + 20, 30); g.stroke(); }
    g.fillStyle = mixHex(apron, 0x000000, 0.07); for (const x0 of [44, W - 106]) { g.beginPath(); g.roundRect(x0, 118, 62, 56, 12); g.fill(); } }
  // hem: scalloped lighter band
  g.fillStyle = light; g.fillRect(0, 0, W, 9); for (let x = 8; x < W; x += 16) { g.beginPath(); g.arc(x, 9, 8, 0, Math.PI); g.fill(); }
  g.fillStyle = dark; g.globalAlpha = 0.25; g.fillRect(0, 20, W, 2.5); g.globalAlpha = 1;
  return c;
}
const std = (color, rough = 0.7, extra = {}) => new THREE.MeshStandardMaterial({ color, roughness: rough, ...extra });
function part(geo, mat, parent, x = 0, y = 0, z = 0) { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.castShadow = true; m.receiveShadow = true; parent.add(m); return m; }
function joint(parent, x, y, z) { const g = new THREE.Group(); g.position.set(x, y, z); parent.add(g); return g; }
const lathe = (pts, seg = 20) => new THREE.LatheGeometry(pts.map(([r, y]) => new THREE.Vector2(r, y)), seg);

export function createGardener() {
  const root = new THREE.Group(), body = joint(root, 0, 0, 0);
  const mSkin = std(SKIN, 0.62), mDress = std(DRESS, 0.8, { side: THREE.DoubleSide }), mBlouse = std(BLOUSE, 0.8), mBoot = std(BOOT, 0.45), mDress2 = std(DRESS2, 0.8), mBib = std(DRESS, 0.8, { side: THREE.DoubleSide }), mHand = std(SKIN, 0.62), mScarf = std(RIBBON, 0.7), mHatB = std(RIBBON, 0.8, { side: THREE.DoubleSide }), mRibbon = std(RIBBON, 0.7, { side: THREE.DoubleSide }), mStraw = std(STRAW, 0.9, { side: THREE.DoubleSide });
  const J = {};
  J.hips = joint(body, 0, 0.87, 0);
  J.spine = joint(J.hips, 0, 0.1, 0);
  // torso
  part(lathe([[0.001, -0.02], [0.118, 0], [0.108, 0.1], [0.125, 0.24], [0.138, 0.32], [0.11, 0.4], [0.05, 0.43], [0.045, 0.5]]), mBlouse, J.spine).scale.z = 0.82;
  // pinafore bib + straps
  { const bib = new THREE.LatheGeometry([[0.122, 0.0], [0.112, 0.1], [0.128, 0.22], [0.139, 0.3]].map(([r, y]) => new THREE.Vector2(r * 1.04, y)), 10, -0.6, 1.2); const bm = part(bib, mBib, J.spine); bm.scale.z = 0.84; J.bib = bm; }
  for (const s of [-1, 1]) { part(new THREE.BoxGeometry(0.032, 0.17, 0.014), mBib, J.spine, s * 0.075, 0.365, 0.092).rotation.x = -0.5; part(new THREE.BoxGeometry(0.035, 0.34, 0.016), mBib, J.spine, s * 0.075, 0.26, -0.1).rotation.x = 0.2; part(new THREE.SphereGeometry(0.014, 8, 6), std(0xf2e6c0, 0.4), J.spine, s * 0.075, 0.285, 0.123); }
  // skirt
  J.skirt = joint(J.hips, 0, 0.11, 0);
  const skProf = []; for (let i = 0; i <= 12; i++) { const t = i / 12, y = 0.02 - t * 0.54; skProf.push([0.112 + 0.012 * Math.min(1, t * 6) + 0.178 * Math.pow(t, 1.25), y]); }
  const sk = lathe(skProf, 32);
  { const p = sk.attributes.position; for (let i = 0; i < p.count; i++) { const y = p.getY(i), a = Math.atan2(p.getZ(i), p.getX(i)), k = 1 + 0.06 * Math.sin(a * 9) * clamp(-y / 0.5, 0, 1); p.setX(i, p.getX(i) * k); p.setZ(i, p.getZ(i) * k * 0.92); } sk.computeVertexNormals(); }
  const skRest = Float32Array.from(sk.attributes.position.array);
  const skMesh = part(sk, mDress, J.skirt); skMesh.receiveShadow = false; skMesh.frustumCulled = false;
  part(new THREE.TorusGeometry(0.119, 0.014, 6, 24), mDress2, J.skirt, 0, 0.012, 0).rotation.x = Math.PI / 2;
  // legs
  for (const s of [-1, 1]) {
    const hip = joint(J.hips, s * 0.075, 0, 0), knee = joint(hip, 0, -0.4, 0);
    part(new THREE.CapsuleGeometry(0.06, 0.3, 4, 10), mSkin, hip, 0, -0.2, 0);
    part(new THREE.CapsuleGeometry(0.05, 0.2, 4, 10), mSkin, knee, 0, -0.12, 0); part(new THREE.SphereGeometry(0.061, 10, 8), mSkin, knee, 0, 0, 0);
    part(lathe([[0.001, -0.455], [0.066, -0.45], [0.062, -0.3], [0.066, -0.17], [0.072, -0.165], [0.072, -0.15], [0.058, -0.15]], 14), mBoot, knee);
    const foot = part(new THREE.SphereGeometry(0.068, 12, 8), mBoot, knee, 0, -0.415, 0.045); foot.scale.set(1, 0.72, 1.7);
    J[s < 0 ? 'hipL' : 'hipR'] = hip; J[s < 0 ? 'kneeL' : 'kneeR'] = knee;
  }
  // arms
  for (const s of [-1, 1]) {
    const sh = joint(J.spine, s * 0.15, 0.345, 0), el = joint(sh, 0, -0.23, 0);
    const puff = part(new THREE.SphereGeometry(0.062, 12, 9), mBlouse, sh, s * 0.005, -0.03, 0); puff.scale.set(1, 1.15, 1);
    // soft tapered arm: no doll joints
    part(lathe([[0.001, -0.262], [0.0305, -0.235], [0.032, -0.2], [0.0355, -0.12], [0.0365, -0.035], [0.03, 0.0], [0.001, 0.012]], 14), mSkin, sh).receiveShadow = false;
    part(lathe([[0.001, -0.218], [0.0225, -0.205], [0.0235, -0.185], [0.028, -0.11], [0.031, -0.03], [0.0295, 0.004], [0.001, 0.028]], 14), mSkin, el).receiveShadow = false;
    const hand = joint(el, 0, -0.205, 0);
    part(new THREE.SphereGeometry(0.03, 12, 10), mHand, hand, 0, -0.028, 0.002).scale.set(0.62, 1.12, 0.98);            // palm
    for (let k = 0; k < 4; k++) { const f = part(new THREE.CapsuleGeometry(0.0085, 0.022, 3, 6), mHand, hand, s * 0.004, -0.066, -0.021 + k * 0.014); f.rotation.z = s * 0.25; f.scale.y = k === 0 || k === 3 ? 0.85 : 1; } // fingers
    const th = part(new THREE.CapsuleGeometry(0.009, 0.018, 3, 6), mHand, hand, s * -0.006, -0.03, 0.03); th.rotation.set(0.75, 0, s * 0.2);                 // thumb
    part(new THREE.TorusGeometry(0.0235, 0.006, 5, 12), mHand, hand, 0, -0.002, 0).rotation.x = Math.PI / 2;                                             // glove cuff / wrist
    J[s < 0 ? 'shL' : 'shR'] = sh; J[s < 0 ? 'elL' : 'elR'] = el; J[s < 0 ? 'handL' : 'handR'] = hand;
  }
  // head
  J.neck = joint(J.spine, 0, 0.46, 0);
  J.head = joint(J.neck, 0, 0.135, 0.005);
  const R = 0.158;
  const faces = { open: faceTexture('open'), closed: faceTexture('closed'), happy: faceTexture('happy') };
  const mFace = std(0xffffff, 0.62, { map: faces.open, emissive: 0xffffff, emissiveMap: faces.open, emissiveIntensity: 0.16 });
  const head = part(new THREE.SphereGeometry(R, 40, 28), mFace, J.head); head.scale.set(0.97, 1.04, 0.96);
  part(new THREE.SphereGeometry(0.012, 8, 6), mSkin, J.head, 0, -0.03, R * 0.955).scale.set(1, 0.75, 0.6);
  for (const s of [-1, 1]) part(new THREE.SphereGeometry(0.03, 8, 6), mSkin, J.head, s * R * 0.95, -0.01, 0).scale.set(0.4, 1, 0.7);
  for (const s of [-1, 1]) part(new THREE.SphereGeometry(0.011, 8, 6), std(0x2f8f5e, 0.3, { metalness: 0.4, emissive: 0x0f3a22 }), J.head, s * R * 0.975, -0.045, 0.004);
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
  for (const s of [-1, 1]) for (let i = 0; i < 4; i++) strand(s * (1.42 + i * 0.2), 0.42 + i * 0.07, 0.1, 1.5, { flare: -0.14, waves: 1.6, ruffle: 0.05, rf: 1.2 }); // side locks
  const backStart = hb.n; // everything above (cap, fringe, side locks) is shared by every hair style
  const mHair = makePlantMaterial({ sway: 0.16, glow: 0.07, roughness: 0.48 });
  const hairFront = new THREE.Mesh(hb.build(), mHair); hairFront.castShadow = true; hairFront.receiveShadow = true; J.head.add(hairFront);
  const hairs = {};
  const mkHair = (id, fn) => { hb.pos.length = 0; hb.col.length = 0; hb.nrm.length = 0; hb.fix.length = 0; hb.idx.length = 0; hb.n = 0; fn(); const m = new THREE.Mesh(hb.build(), mHair); m.castShadow = true; m.visible = false; J.head.add(m); hairs[id] = m; };
  const skull = () => { for (let i = 0; i < 15; i++) { const f = i / 14 - 0.5; strand(Math.PI + f * 2.9, Rh * 1.95, 0.11, 9, { nu: 8 }); } };
  mkHair('solto', () => { for (let i = 0; i < 17; i++) { const f = i / 16 - 0.5; strand(Math.PI + f * 2.9, 0.62 + hr.range(-0.04, 0.06) - Math.abs(f) * 0.1, 0.105, 1.62, { flare: -0.16, waves: 1.5, ruffle: 0.06, rf: 1.2, nu: 12 }); } });
  mkHair('rabo', () => { skull(); const M0 = mul(T(0, R * 0.42, -Rh * 0.98), RX(-2.25));
    for (let i = 0; i < 9; i++) hb.petal(mul(M0, RY(i * 0.7), RX(0.14)), { L: 0.46 + hr.range(-0.04, 0.04), W: 0.06, a: 0.6, b: 0.4, cup: 0.5, base: 0.5, nu: 9, nv: 2, vein: 0.2, angFn: (u) => 0.9 * Math.sin(u * 2.2), cols: hc.map((c) => c.clone().multiplyScalar(hr.range(0.9, 1.1))) });
    hb.blob(mul(T(0, R * 0.42, -Rh * 1.0), RX(0.9)), 0.03, 0.022, hc[1], hc[1], 8, 5); });
  mkHair('coque', () => { skull(); hb.blob(T(0, R * 0.72, -R * 0.82), 0.075, 0.068, hc[0], hc[2], 12, 8); for (let i = 0; i < 10; i++) hb.petal(mul(T(0, R * 0.72, -R * 0.82), RY(i * 0.63), RX(0.5)), { L: 0.11, W: 0.05, a: 0.7, b: 0.5, cup: 0.9, curl: 2.2, curlPow: 1, nu: 5, nv: 2, cols: hc }); });
  mkHair('tranca', () => { skull(); const P = [[0.03, -0.03, -0.15], [0.15, -0.1, -0.08], [0.135, -0.27, 0.075], [0.115, -0.43, 0.1]];
    for (let i = 0; i < 13; i++) { const t = i / 12, u = 1 - t, w = [u * u * u, 3 * u * u * t, 3 * u * t * t, t * t * t], q = [0, 1, 2].map((k) => P[0][k] * w[0] + P[1][k] * w[1] + P[2][k] * w[2] + P[3][k] * w[3]);
      hb.blob(mul(T(q[0] + (i % 2 ? 0.01 : -0.01), q[1], q[2]), RZ(i % 2 ? 0.55 : -0.55)), 0.032 * (1 - t * 0.35), 0.03 * (1 - t * 0.3), hc[i % 2 ? 0 : 1], hc[2], 7, 5); }
    hb.blob(T(0.115, -0.455, 0.1), 0.02, 0.014, hc[1], hc[1], 7, 4); for (let k = 0; k < 6; k++) hb.petal(mul(T(0.115, -0.46, 0.1), RY(k), RX(2.7)), { L: 0.06, W: 0.02, a: 0.6, b: 0.6, nu: 3, nv: 1, cols: hc }); });

  // hats (one group each; the outfit picks which is visible)
  J.hat = joint(J.head, 0, R * 0.7, -0.03); J.hat.rotation.x = -0.36;
  const hats = {}, hat = (id) => { const g = new THREE.Group(); g.visible = false; J.hat.add(g); hats[id] = g; return g; };
  const wavy = (geo, amp, R0) => { const p = geo.attributes.position; for (let i = 0; i < p.count; i++) { const a = Math.atan2(p.getZ(i), p.getX(i)), rr = Math.hypot(p.getX(i), p.getZ(i)); p.setY(i, p.getY(i) + Math.sin(a * 2 + 0.5) * amp * (rr / R0) ** 2 + Math.sin(a * 5) * amp * 0.25 * (rr / R0)); } geo.computeVertexNormals(); return geo; };
  const flower = (parent, x, y, z, c, s = 1) => { const fb = new Builder(); for (let k = 0; k < 6; k++) fb.petal(mul(RY(k * 1.047), RX(1.25)), { L: 0.034 * s, W: 0.026 * s, nu: 2, nv: 2, cup: 0.3, cols: [col(c), col(c), col(0xffffff)] }); fb.blob(T(0, 0.004, 0), 0.01 * s, 0.006 * s, col(0xf2b21c), col(0xf8d040), 6, 3);
    const f = new THREE.Mesh(fb.build(), std(0xffffff, 0.7, { vertexColors: true, side: THREE.DoubleSide })); f.position.set(x, y, z); f.lookAt(x * 3, y + 0.25, z * 3); f.rotateX(Math.PI / 2); parent.add(f); return f; };
  { const h = hat('palha'); part(wavy(lathe([[0.13, 0.012], [0.19, 0.004], [0.25, -0.012], [0.292, -0.036], [0.297, -0.042]], 36), 0.02, 0.3), mStraw, h).receiveShadow = false;
    part(lathe([[0.146, 0], [0.143, 0.05], [0.128, 0.1], [0.09, 0.128], [0.001, 0.134]], 28), mStraw, h); part(new THREE.CylinderGeometry(0.1445, 0.148, 0.038, 28, 1, true), mRibbon, h, 0, 0.024, 0);
    for (const s of [-1, 1]) part(new THREE.SphereGeometry(0.03, 8, 6), mRibbon, h, -0.12, 0.03, s * 0.035 - 0.07).scale.set(0.5, 1.2, 1.5); flower(h, 0.108, 0.04, 0.103, 0xfff6e0); }
  { const h = hat('aba_larga'); part(wavy(lathe([[0.13, 0.014], [0.2, 0.006], [0.29, -0.02], [0.37, -0.07], [0.378, -0.08]], 40), 0.035, 0.38), mStraw, h).receiveShadow = false;
    part(lathe([[0.146, 0], [0.146, 0.06], [0.13, 0.1], [0.08, 0.118], [0.001, 0.12]], 28), mStraw, h); part(new THREE.CylinderGeometry(0.147, 0.149, 0.05, 28, 1, true), mRibbon, h, 0, 0.03, 0);
    for (const s of [-1, 1]) { const b = part(new THREE.SphereGeometry(0.05, 8, 6), mRibbon, h, s * 0.045, 0.035, -0.15); b.scale.set(1.1, 0.75, 0.35); } part(new THREE.SphereGeometry(0.02, 8, 6), mRibbon, h, 0, 0.035, -0.152);
    for (const s of [-1, 1]) part(new THREE.BoxGeometry(0.03, 0.14, 0.006), mRibbon, h, s * 0.02, -0.03, -0.165).rotation.set(0.3, 0, s * 0.2); }
  { const h = hat('jardineira'); part(lathe([[0.2, -0.05], [0.185, -0.03], [0.152, 0.0], [0.148, 0.06], [0.128, 0.105], [0.07, 0.125], [0.001, 0.128]], 30), mHatB, h); part(new THREE.CylinderGeometry(0.15, 0.153, 0.03, 28, 1, true), mStraw, h, 0, 0.02, 0); flower(h, 0.1, 0.03, 0.115, 0xffffff, 0.9); }
  { const h = hat('boina'); h.position.set(0.02, -0.01, 0.0); const b = part(new THREE.SphereGeometry(0.175, 20, 12), mHatB, h, 0.02, 0.04, -0.01); b.scale.set(1, 0.42, 0.96); b.rotation.z = -0.25; part(new THREE.SphereGeometry(0.014, 8, 6), mHatB, h, 0.06, 0.115, -0.01); }
  { const h = hat('lenco'); h.rotation.x = 0.36; h.position.set(0, -R * 0.66, 0.03); const c = part(new THREE.SphereGeometry(R * 1.1, 24, 12, 0, TAU, 0, 1.25), mHatB, h, 0, 0, -0.02); c.rotation.x = -0.42;
    part(new THREE.SphereGeometry(0.024, 8, 6), mHatB, h, 0, -0.07, -R * 1.08); for (const s of [-1, 1]) part(new THREE.BoxGeometry(0.05, 0.11, 0.008), mHatB, h, s * 0.03, -0.13, -R * 1.1).rotation.set(0.25, 0, s * 0.35); }
  { const h = hat('laco'); h.position.set(0, -0.02, 0.01); for (const s of [-1, 1]) { const b = part(new THREE.SphereGeometry(0.075, 12, 8), mRibbon, h, s * 0.07, 0.06, 0); b.scale.set(1.1, 0.8, 0.4); b.rotation.z = s * 0.35; } part(new THREE.SphereGeometry(0.03, 8, 6), mRibbon, h, 0, 0.05, 0.005); }
  { const h = hat('coroa'); h.rotation.x = 0.3; h.position.set(0, -0.045, 0.03); part(new THREE.TorusGeometry(R * 1.02, 0.008, 5, 28), std(0x4a8a3a), h).rotation.x = Math.PI / 2;
    const cs = [0xf07aa4, 0xffffff, 0xf7c84a, 0xb48af0, 0xf2701a]; for (let i = 0; i < 14; i++) { const a = (i / 14) * TAU; flower(h, Math.cos(a) * R * 1.03, 0.004, Math.sin(a) * R * 1.03, cs[i % cs.length], 0.85); } }
  hat('nenhum');
  // neck scarf + flower basket on the arm
  const scarf = new THREE.Group(); scarf.visible = false; J.spine.add(scarf);
  { const t = part(new THREE.TorusGeometry(0.056, 0.017, 6, 18), mScarf, scarf, 0, 0.445, 0.004); t.rotation.x = Math.PI / 2 + 0.12; t.scale.set(1, 0.9, 1); part(new THREE.SphereGeometry(0.02, 8, 6), mScarf, scarf, 0.02, 0.43, 0.06);
    for (const s of [-1, 1]) part(new THREE.BoxGeometry(0.03, 0.075, 0.008), mScarf, scarf, 0.02 + s * 0.02, 0.395, 0.07).rotation.set(-0.2, 0, s * 0.3); }
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
  const pose = { by: 0, lean: 0, twist: 0, spine: 0, headX: 0, headY: 0, headZ: 0, shLx: 0, shLz: 0.2, shRx: 0, shRz: -0.2, elL: -0.1, elR: -0.1, hipL: 0, hipR: 0, kneeL: 0, kneeR: 0, skirtX: 0, skirtS: 1, handRx: 0 };
  const cur = { ...pose };
  const g = {
    group: root, J, state: 'idle', t: 0, phase: 0, speed: 0, heading: 0, targetHeading: 0, blinkT: 2, face: 'open', faceHold: 0,
    actionT: 0, actionDur: 0, action: null, high: false, lookAt: null, onStep: null, spoutWorld: new THREE.Vector3(), idleSeed: 0,
  };
  g.setFace = (f, hold = 0) => { g.face = f; g.faceHold = hold; mFace.map = faces[f]; mFace.emissiveMap = faces[f]; };
  g.play = (action, dur, opts = {}) => { g.state = action; g.actionT = 0; g.actionDur = dur; g.high = !!opts.high; can.visible = action === 'water'; trowel.visible = action === 'plant'; if (action === 'cheer') g.setFace('happy', dur + 0.4); };
  g.stop = () => { g.state = 'idle'; can.visible = false; trowel.visible = false; };
  g.faceTo = (x, z) => { g.targetHeading = Math.atan2(x - root.position.x, z - root.position.z); };

  let fabricKey = '', fabricTex = null;
  g.setOutfit = (o = {}) => {
    if (o.dress != null || o.pattern != null || 'apron' in o) { g._dress = o.dress ?? g._dress ?? DRESS; g._pattern = o.pattern ?? g._pattern ?? 'liso'; if ('apron' in o) g._apron = o.apron; const key = [g._dress, g._pattern, g._apron].join();
      if (key !== fabricKey) { fabricKey = key; if (fabricTex) fabricTex.dispose(); fabricTex = new THREE.CanvasTexture(fabricCanvas(g._pattern, g._dress, g._apron)); fabricTex.colorSpace = THREE.SRGBColorSpace; fabricTex.wrapS = THREE.RepeatWrapping; fabricTex.anisotropy = 4; mDress.map = fabricTex; mDress.color.setHex(0xffffff); mDress.needsUpdate = true; }
      mBib.color.setHex(g._apron ?? g._dress); mDress2.color.setHex(g._dress).multiplyScalar(0.82); }
    if (o.ribbon != null) { mRibbon.color.setHex(o.ribbon); mHatB.color.setHex(o.ribbon); }
    if (o.boots != null) mBoot.color.setHex(o.boots);
    if (o.blouse != null) mBlouse.color.setHex(o.blouse);
    if ('gloves' in o) mHand.color.setHex(o.gloves ?? SKIN);
    if ('scarf' in o) { scarf.visible = o.scarf != null; if (o.scarf != null) mScarf.color.setHex(o.scarf); }
    if ('basket' in o) basket.visible = !!o.basket;
    if (o.hat) for (const k in hats) hats[k].visible = k === o.hat;
    if (o.hair) for (const k in hairs) hairs[k].visible = k === o.hair;
  };
  g.setOutfit({ dress: DRESS, pattern: 'liso', apron: null, hat: 'palha', hair: 'solto' });

  // ---------- skirt: light cloth. It trails behind her steps, swings, and is pushed out of the way by the legs ----------
  const sw = { x: 0, z: 0, vx: 0, vz: 0, tw: 0, vtw: 0, px: 0, pz: 0, ph: 0, init: false }, skPos = sk.attributes.position;
  const legs = [{ h: -0.075 }, { h: 0.075 }];
  const updateSkirt = (dt, time) => {
    dt = Math.min(Math.max(dt, 0), 0.05);
    // how the body moved, seen from her own frame
    const wx = root.position.x, wz = root.position.z; if (!sw.init) { sw.px = wx; sw.pz = wz; sw.ph = g.heading; sw.init = true; }
    const dx = (wx - sw.px) / Math.max(dt, 1e-3), dz = (wz - sw.pz) / Math.max(dt, 1e-3), ch = Math.cos(g.heading), shh = Math.sin(g.heading); sw.px = wx; sw.pz = wz;
    const vf = dx * shh + dz * ch, vs = dx * ch - dz * shh; let dh = g.heading - sw.ph; dh = Math.atan2(Math.sin(dh), Math.cos(dh)); sw.ph = g.heading;
    const tx = clamp(-vs * 0.03, -0.09, 0.09) + Math.sin(g.phase) * 0.018 * Math.min(1, g.speed), tz = clamp(-vf * 0.035, -0.1, 0.1) - cur.lean * 0.1 + cur.by * 0.25;
    sw.vx += ((tx - sw.x) * 70 - sw.vx * 7.5) * dt; sw.vz += ((tz - sw.z) * 70 - sw.vz * 7.5) * dt; sw.x += sw.vx * dt; sw.z += sw.vz * dt;
    sw.vtw += ((clamp(-dh / Math.max(dt, 1e-3) * 0.06, -0.5, 0.5) - sw.tw) * 50 - sw.vtw * 6) * dt; sw.tw += sw.vtw * dt;
    for (let i = 0; i < 2; i++) { const L = legs[i], a = i ? cur.hipR : cur.hipL, k = i ? cur.kneeR : cur.kneeL; L.ky = -0.11 - Math.cos(a) * 0.4; L.kz = -Math.sin(a) * 0.4; L.fy = L.ky - Math.cos(a + k) * 0.42; L.fz = L.kz - Math.sin(a + k) * 0.42; }
    const A = skPos.array, flut = Math.min(1, g.speed) * 0.02 + 0.006;
    for (let i = 0; i < A.length; i += 3) {
      let x = skRest[i], y = skRest[i + 1], z = skRest[i + 2]; const t = clamp(-y / 0.52, 0, 1), t2 = t * Math.sqrt(t), ang = Math.atan2(z, x);
      const f = 1 + flut * t * Math.sin(ang * 3 + time * 5.5) + 0.008 * t * Math.sin(ang * 2 - time * 1.3); x *= f; z *= f;
      const c = Math.cos(sw.tw * t), s2 = Math.sin(sw.tw * t), rx = x * c - z * s2, rz = x * s2 + z * c; x = rx + sw.x * t2; z = rz + sw.z * t2; y += (Math.abs(sw.x) + Math.abs(sw.z)) * t2 * 0.25;
      if (t > 0.12) for (let l = 0; l < 2; l++) { const L = legs[l];
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
    P.by = br * 0.004; P.lean = 0; P.twist = Math.sin(time * 0.45) * 0.03; P.spine = br * 0.012;
    P.headX = Math.sin(time * 0.6 + 1) * 0.04; P.headY = Math.sin(time * 0.33) * 0.22 + Math.sin(time * 0.71) * 0.08; P.headZ = Math.sin(time * 0.5) * 0.03;
    P.shLx = Math.sin(time * 0.9) * 0.03; P.shRx = -Math.sin(time * 0.9) * 0.03; P.shLz = 0.2; P.shRz = -0.2; P.elL = -0.2; P.elR = -0.2;
    P.hipL = 0; P.hipR = 0; P.kneeL = 0; P.kneeR = 0; P.skirtX = 0; P.skirtS = 1; P.handRx = 0;
    if (g.state === 'walk') {
      g.phase += dt * g.speed * 3.5; const s = Math.sin(g.phase), c = Math.cos(g.phase), amp = clamp(g.speed / 2.4, 0.3, 1);
      P.hipL = -s * 0.52 * amp; P.hipR = s * 0.52 * amp; P.kneeL = Math.max(0, c) * 0.82 * amp + 0.08; P.kneeR = Math.max(0, -c) * 0.82 * amp + 0.08;
      P.shLx = s * 0.5 * amp; P.shRx = -s * 0.5 * amp; P.elL = -0.3 - Math.max(0, s) * 0.3; P.elR = -0.3 - Math.max(0, -s) * 0.3; P.shLz = 0.2; P.shRz = -0.2;
      P.by = Math.abs(c) * 0.035 * amp - 0.02; P.lean = 0.07 * amp; P.twist = -s * 0.1 * amp; P.headY = s * 0.05; P.headX = -0.03; P.headZ = c * 0.03; P.skirtX = -0.05 + c * 0.04;
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
    }
    if (g.state !== 'idle' && g.state !== 'walk' && g.actionT >= g.actionDur) g.stop();
    const a = 1 - Math.exp(-k * dt);
    for (const f in cur) cur[f] += (pose[f] - cur[f]) * a;
    // apply
    // lean bends mostly at the waist so she never tips over like a plank
    body.position.y = cur.by; body.rotation.x = cur.lean * 0.22; body.position.z = -cur.lean * 0.1;
    J.spine.rotation.set(cur.spine + cur.lean * 0.95, cur.twist, 0); J.hips.rotation.y = -cur.twist * 0.4;
    J.head.rotation.set(cur.headX - cur.lean * 0.75, cur.headY - cur.twist, cur.headZ);
    J.shL.rotation.set(cur.shLx, 0, -cur.shLz); J.shR.rotation.set(cur.shRx, 0, -cur.shRz); // pose values: positive L / negative R = away from the body J.elL.rotation.x = cur.elL; J.elR.rotation.x = cur.elR; J.handR.rotation.x = cur.handRx;
    J.hipL.rotation.x = cur.hipL; J.hipR.rotation.x = cur.hipR; J.kneeL.rotation.x = cur.kneeL; J.kneeR.rotation.x = cur.kneeR;
    J.skirt.scale.set(1 + (1 - cur.skirtS) * 0.35, cur.skirtS, 1 + (1 - cur.skirtS) * 0.5); updateSkirt(dt, time);
    mHair.userData.u.uSway.value = 0.14 + g.speed * 0.12;
    // heading
    let dh = g.targetHeading - g.heading; dh = Math.atan2(Math.sin(dh), Math.cos(dh)); g.heading += dh * (1 - Math.exp(-9 * dt)); root.rotation.y = g.heading;
    // blink
    if (g.faceHold > 0) { g.faceHold -= dt; if (g.faceHold <= 0) g.setFace('open'); }
    else { g.blinkT -= dt; if (g.blinkT < 0) { if (g.face === 'open') { g.setFace('closed'); g.blinkT = 0.11; } else { g.setFace('open'); g.blinkT = 1.8 + Math.random() * 3.5; } } }
    rose.getWorldPosition(g.spoutWorld);
  };
  return g;
}
