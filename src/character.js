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

const std = (color, rough = 0.7, extra = {}) => new THREE.MeshStandardMaterial({ color, roughness: rough, ...extra });
function part(geo, mat, parent, x = 0, y = 0, z = 0) { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.castShadow = true; m.receiveShadow = true; parent.add(m); return m; }
function joint(parent, x, y, z) { const g = new THREE.Group(); g.position.set(x, y, z); parent.add(g); return g; }
const lathe = (pts, seg = 20) => new THREE.LatheGeometry(pts.map(([r, y]) => new THREE.Vector2(r, y)), seg);

export function createGardener() {
  const root = new THREE.Group(), body = joint(root, 0, 0, 0);
  const mSkin = std(SKIN, 0.62), mDress = std(DRESS, 0.8, { side: THREE.DoubleSide }), mBlouse = std(BLOUSE, 0.8), mBoot = std(BOOT, 0.45), mStraw = std(STRAW, 0.9, { side: THREE.DoubleSide });
  const J = {};
  J.hips = joint(body, 0, 0.87, 0);
  J.spine = joint(J.hips, 0, 0.1, 0);
  // torso
  part(lathe([[0.001, -0.02], [0.118, 0], [0.108, 0.1], [0.125, 0.24], [0.138, 0.32], [0.11, 0.4], [0.05, 0.43], [0.045, 0.5]]), mBlouse, J.spine).scale.z = 0.82;
  // pinafore bib + straps
  { const bib = new THREE.LatheGeometry([[0.122, 0.0], [0.112, 0.1], [0.128, 0.22], [0.139, 0.3]].map(([r, y]) => new THREE.Vector2(r * 1.04, y)), 10, -0.6, 1.2); part(bib, mDress, J.spine).scale.z = 0.84; }
  for (const s of [-1, 1]) { part(new THREE.BoxGeometry(0.032, 0.17, 0.014), mDress, J.spine, s * 0.075, 0.365, 0.092).rotation.x = -0.5; part(new THREE.BoxGeometry(0.035, 0.34, 0.016), mDress, J.spine, s * 0.075, 0.26, -0.1).rotation.x = 0.2; part(new THREE.SphereGeometry(0.014, 8, 6), std(0xf2e6c0, 0.4), J.spine, s * 0.075, 0.285, 0.123); }
  // skirt
  J.skirt = joint(J.hips, 0, 0.11, 0);
  const sk = lathe([[0.112, 0.02], [0.122, 0], [0.146, -0.1], [0.2, -0.25], [0.262, -0.4], [0.296, -0.5], [0.301, -0.52]], 28);
  { const p = sk.attributes.position; for (let i = 0; i < p.count; i++) { const y = p.getY(i), a = Math.atan2(p.getZ(i), p.getX(i)), k = 1 + 0.07 * Math.sin(a * 9) * clamp(-y / 0.5, 0, 1); p.setX(i, p.getX(i) * k); p.setZ(i, p.getZ(i) * k * 0.92); } sk.computeVertexNormals(); }
  part(sk, mDress, J.skirt).receiveShadow = false;
  part(new THREE.TorusGeometry(0.119, 0.014, 6, 24), std(DRESS2, 0.8), J.skirt, 0, 0.012, 0).rotation.x = Math.PI / 2;
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
    part(new THREE.CapsuleGeometry(0.036, 0.16, 4, 8), mSkin, sh, 0, -0.14, 0);
    part(new THREE.CapsuleGeometry(0.032, 0.17, 4, 8), mSkin, el, 0, -0.095, 0); part(new THREE.SphereGeometry(0.037, 10, 8), mSkin, el, 0, 0, 0);
    const hand = joint(el, 0, -0.215, 0); part(new THREE.SphereGeometry(0.04, 10, 8), mSkin, hand).scale.set(0.85, 1.1, 1);
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
  for (let i = 0; i < 17; i++) { const f = i / 16 - 0.5; strand(Math.PI + f * 2.9, 0.62 + hr.range(-0.04, 0.06) - Math.abs(f) * 0.1, 0.105, 1.62, { flare: -0.16, waves: 1.5, ruffle: 0.06, rf: 1.2, nu: 12 }); }
  const mHair = makePlantMaterial({ sway: 0.16, glow: 0.07, roughness: 0.48 });
  const hair = new THREE.Mesh(hb.build(), mHair); hair.castShadow = true; hair.receiveShadow = true; J.head.add(hair);
  // hat
  J.hat = joint(J.head, 0, R * 0.7, -0.03); J.hat.rotation.x = -0.36;
  const brim = lathe([[0.13, 0.012], [0.19, 0.004], [0.25, -0.012], [0.292, -0.036], [0.297, -0.042]], 36);
  { const p = brim.attributes.position; for (let i = 0; i < p.count; i++) { const a = Math.atan2(p.getZ(i), p.getX(i)), rr = Math.hypot(p.getX(i), p.getZ(i)); p.setY(i, p.getY(i) + Math.sin(a * 2 + 0.5) * 0.02 * (rr / 0.3) ** 2 + Math.sin(a * 5) * 0.005 * (rr / 0.3)); } brim.computeVertexNormals(); }
  part(brim, mStraw, J.hat).receiveShadow = false;
  part(lathe([[0.146, 0], [0.143, 0.05], [0.128, 0.1], [0.09, 0.128], [0.001, 0.134]], 28), mStraw, J.hat);
  part(new THREE.CylinderGeometry(0.1445, 0.148, 0.038, 28, 1, true), std(RIBBON, 0.7, { side: THREE.DoubleSide }), J.hat, 0, 0.024, 0);
  for (const s of [-1, 1]) part(new THREE.SphereGeometry(0.03, 8, 6), std(RIBBON, 0.7), J.hat, -0.12 + 0, 0.03, s * 0.035 - 0.07).scale.set(0.5, 1.2, 1.5);
  // little flower on the hat
  { const fb = new Builder(); for (let k = 0; k < 6; k++) fb.petal(mul(RY(k * 1.047), RX(1.25)), { L: 0.034, W: 0.026, nu: 2, nv: 2, cup: 0.3, cols: [col(0xfff6e0), col(0xffffff), col(0xffffff)] }); fb.blob(T(0, 0.004, 0), 0.01, 0.006, col(0xf2b21c), col(0xf8d040), 6, 3);
    const f = new THREE.Mesh(fb.build(), std(0xffffff, 0.7, { vertexColors: true, side: THREE.DoubleSide })); f.position.set(0.108, 0.045, 0.103); f.rotation.set(1.1, 0, -0.75); J.hat.add(f); }

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

  g.update = (dt, time) => {
    g.t += dt;
    const P = pose; let k = 10; // smoothing rate
    // defaults (idle)
    const br = Math.sin(time * 1.7);
    P.by = br * 0.004; P.lean = 0; P.twist = Math.sin(time * 0.45) * 0.03; P.spine = br * 0.012;
    P.headX = Math.sin(time * 0.6 + 1) * 0.04; P.headY = Math.sin(time * 0.33) * 0.22 + Math.sin(time * 0.71) * 0.08; P.headZ = Math.sin(time * 0.5) * 0.03;
    P.shLx = Math.sin(time * 0.9) * 0.03; P.shRx = -Math.sin(time * 0.9) * 0.03; P.shLz = 0.2; P.shRz = -0.2; P.elL = -0.2; P.elR = -0.2;
    P.hipL = 0; P.hipR = 0; P.kneeL = 0; P.kneeR = 0; P.skirtX = 0; P.skirtS = 1; P.handRx = 0;
    if (g.state === 'walk') {
      g.phase += dt * g.speed * 3.5; const s = Math.sin(g.phase), c = Math.cos(g.phase), amp = clamp(g.speed / 2.4, 0.3, 1);
      P.hipL = -s * 0.62 * amp; P.hipR = s * 0.62 * amp; P.kneeL = Math.max(0, c) * 0.95 * amp + 0.08; P.kneeR = Math.max(0, -c) * 0.95 * amp + 0.08;
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
    J.skirt.rotation.x = cur.skirtX; J.skirt.scale.set(1 + (1 - cur.skirtS) * 0.5, cur.skirtS, 1 + (1 - cur.skirtS) * 0.8);
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
