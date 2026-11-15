import * as THREE from 'three';
import { mulberry, clamp, lerp, TAU } from './util.js';
import { Builder } from './builder.js';
import { T, RX, RY, RZ, mul, col } from './util.js';

const MAX = 900;

export function createFx(scene) {
  // ---------- particle pool ----------
  const pos = new Float32Array(MAX * 3), colr = new Float32Array(MAX * 3), size = new Float32Array(MAX), alpha = new Float32Array(MAX);
  const P = []; for (let i = 0; i < MAX; i++) P.push({ life: 0 });
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3)); geo.setAttribute('color', new THREE.BufferAttribute(colr, 3));
  geo.setAttribute('aSize', new THREE.BufferAttribute(size, 1)); geo.setAttribute('aAlpha', new THREE.BufferAttribute(alpha, 1));
  const mat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, uniforms: { uScale: { value: 600 } },
    vertexShader: `attribute float aSize, aAlpha; attribute vec3 color; varying vec3 vC; varying float vA; uniform float uScale;
      void main(){ vC = color; vA = aAlpha; vec4 mv = modelViewMatrix * vec4(position,1.0); gl_Position = projectionMatrix * mv; gl_PointSize = aSize * uScale / -mv.z; }`,
    fragmentShader: `varying vec3 vC; varying float vA; void main(){ vec2 d = gl_PointCoord - 0.5; float r = length(d); if (r > 0.5) discard; float a = smoothstep(0.5, 0.15, r) * vA; gl_FragColor = vec4(vC, a); }`,
  });
  const points = new THREE.Points(geo, mat); points.frustumCulled = false; points.renderOrder = 5; scene.add(points);
  let cursor = 0;
  const c = new THREE.Color();
  const emit = (o) => {
    for (let k = 0; k < MAX; k++) { cursor = (cursor + 1) % MAX; if (P[cursor].life <= 0) break; }
    const p = P[cursor];
    p.x = o.x; p.y = o.y; p.z = o.z; p.vx = o.vx ?? 0; p.vy = o.vy ?? 0; p.vz = o.vz ?? 0; p.g = o.g ?? 0; p.drag = o.drag ?? 0; p.life = p.max = o.life ?? 1; p.size = o.size ?? 0.05; p.grow = o.grow ?? 0;
    c.set(o.color ?? 0xffffff); p.r = c.r; p.gc = c.g; p.b = c.b; p.a = o.alpha ?? 1; p.floor = o.floor ?? -1; p.sway = o.sway ?? 0; p.tw = o.twinkle ?? 0; p.seed = Math.random() * 10;
  };
  const fx = { emit };
  const rnd = (a, b) => a + Math.random() * (b - a);

  fx.water = (from, to, n = 5) => {
    for (let i = 0; i < n; i++) {
      const t = 0.42 + Math.random() * 0.1, tx = to.x + rnd(-0.2, 0.2), tz = to.z + rnd(-0.2, 0.2), ty = to.y + rnd(0, 0.15);
      emit({ x: from.x, y: from.y, z: from.z, vx: (tx - from.x) / t, vz: (tz - from.z) / t, vy: (ty - from.y) / t + 4.9 * t, g: -9.8, life: t + 0.05, size: rnd(0.025, 0.045), color: Math.random() < 0.5 ? 0xbfe6ff : 0xe8f6ff, alpha: 0.85 });
    }
  };
  fx.splash = (p, n = 6) => { for (let i = 0; i < n; i++) emit({ x: p.x + rnd(-0.12, 0.12), y: p.y + 0.05, z: p.z + rnd(-0.12, 0.12), vx: rnd(-0.5, 0.5), vy: rnd(0.6, 1.4), vz: rnd(-0.5, 0.5), g: -5, life: 0.4, size: 0.03, color: 0xd8f0ff, alpha: 0.7 }); };
  fx.sparkle = (p, n = 14, color = 0xffe680, spread = 0.3) => { for (let i = 0; i < n; i++) emit({ x: p.x + rnd(-spread, spread), y: p.y + rnd(0, spread * 1.5), z: p.z + rnd(-spread, spread), vx: rnd(-0.3, 0.3), vy: rnd(0.3, 1.0), vz: rnd(-0.3, 0.3), drag: 1.5, life: rnd(0.6, 1.2), size: rnd(0.04, 0.09), color, twinkle: 12 }); };
  fx.dust = (p, n = 10) => { for (let i = 0; i < n; i++) emit({ x: p.x + rnd(-0.1, 0.1), y: p.y + 0.03, z: p.z + rnd(-0.1, 0.1), vx: rnd(-0.6, 0.6), vy: rnd(0.2, 0.7), vz: rnd(-0.6, 0.6), drag: 3, life: rnd(0.4, 0.8), size: rnd(0.07, 0.14), grow: 0.2, color: 0x8a6a50, alpha: 0.5 }); };
  fx.hearts = (p, n = 5) => { for (let i = 0; i < n; i++) emit({ x: p.x + rnd(-0.2, 0.2), y: p.y, z: p.z + rnd(-0.2, 0.2), vx: rnd(-0.15, 0.15), vy: rnd(0.5, 0.9), vz: rnd(-0.15, 0.15), drag: 0.8, life: rnd(0.9, 1.5), size: rnd(0.07, 0.11), color: i % 2 ? 0xff9ab8 : 0xffc6d8, sway: 1 }); };
  fx.burst = (p, colors, n = 40, r = 1.2) => { for (let i = 0; i < n; i++) { const a = Math.random() * TAU, s = rnd(0.5, 2.2); emit({ x: p.x, y: p.y + rnd(0.2, 1), z: p.z, vx: Math.cos(a) * s * r, vy: rnd(1.2, 3.2), vz: Math.sin(a) * s * r, g: -3.2, drag: 1.2, life: rnd(1.2, 2.4), size: rnd(0.06, 0.12), color: colors[i % colors.length], sway: 1.5 }); } };
  fx.petalFall = (p, color, R) => emit({ x: p.x + rnd(-R, R), y: p.y + rnd(-0.3, 0.5), z: p.z + rnd(-R, R), vx: rnd(-0.1, 0.25), vy: -rnd(0.25, 0.5), vz: rnd(-0.1, 0.1), life: rnd(4, 7), size: rnd(0.05, 0.08), color, sway: 2, floor: 0.03, alpha: 0.95 });
  fx.smoke = (p) => emit({ x: p.x + rnd(-0.08, 0.08), y: p.y, z: p.z + rnd(-0.08, 0.08), vx: 0.18 + rnd(-0.05, 0.05), vy: rnd(0.35, 0.55), vz: rnd(-0.05, 0.05), life: rnd(5, 8), size: 0.3, grow: 0.22, color: 0xe8e4de, alpha: 0.22, drag: 0.1 });

  // ---------- butterflies ----------
  const bfs = [], bmat = new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.DoubleSide });
  const mkWing = (c0, c1) => { const b = new Builder();
    b.petal(mul(RZ(-1.15), RX(0)), { L: 0.085, W: 0.075, a: 1.5, b: 0.45, nu: 3, nv: 2, cols: [col(0x2a2018), c0, c1] });
    b.petal(mul(RZ(-2.05), RX(0)), { L: 0.06, W: 0.06, a: 1.4, b: 0.45, nu: 3, nv: 2, cols: [col(0x2a2018), c0, c1] }); return b.build(); };
  const pal = [[0xf7a21e, 0xfbd25a], [0x6aa8f0, 0xbfe0ff], [0xf7f0d8, 0xffffff], [0xf06a9a, 0xfcc0d8], [0xf7d84a, 0xfff2a0], [0xb48af0, 0xe0d0ff]];
  for (let i = 0; i < 9; i++) {
    const g = new THREE.Group(), [c0, c1] = pal[i % pal.length], wg = mkWing(col(c0), col(c1));
    const wr = new THREE.Mesh(wg, bmat), wl = new THREE.Mesh(wg, bmat); wl.scale.x = -1; g.add(wr, wl);
    const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.006, 0.05, 2, 5), new THREE.MeshBasicMaterial({ color: 0x2a2018 })); body.rotation.x = Math.PI / 2; g.add(body);
    g.visible = false; scene.add(g);
    bfs.push({ g, wr, wl, pos: new THREE.Vector3(Math.random() * 6 - 3, 1, Math.random() * 6), target: new THREE.Vector3(0, 1, 0), t: Math.random() * 10, rest: 0, seed: Math.random() * 100, speed: rnd(0.8, 1.4) });
  }
  fx.butterflyTargets = []; fx.butterflyCount = 0;

  // ---------- fireflies ----------
  const flies = []; for (let i = 0; i < 46; i++) flies.push({ x: rnd(-12, 12), z: rnd(-8, 14), y: rnd(0.3, 1.8), s: Math.random() * 100 });

  // ---------- rain ----------
  const RN = 500, rpos = new Float32Array(RN * 6), rgeo = new THREE.BufferGeometry(); rgeo.setAttribute('position', new THREE.BufferAttribute(rpos, 3));
  const rain = new THREE.LineSegments(rgeo, new THREE.LineBasicMaterial({ color: 0xcfe4f4, transparent: true, opacity: 0 })); rain.frustumCulled = false; scene.add(rain);
  const drops = []; for (let i = 0; i < RN; i++) drops.push({ x: rnd(-16, 16), y: rnd(0, 14), z: rnd(-12, 18), v: rnd(11, 15) });
  fx.rain = 0;

  let smokeT = 0;
  fx.update = (dt, time, env, camera, chimney) => {
    mat.uniforms.uScale.value = innerHeight * 1.9 * (camera.fov ? 1 / Math.tan((camera.fov * Math.PI) / 360) / 3.4 : 1);
    for (let i = 0; i < MAX; i++) {
      const p = P[i];
      if (p.life <= 0) { alpha[i] = 0; size[i] = 0; continue; }
      p.life -= dt; const u = 1 - p.life / p.max;
      p.vy += p.g * dt; const dr = Math.exp(-p.drag * dt); p.vx *= dr; p.vy *= p.g ? 1 : dr; p.vz *= dr;
      p.x += (p.vx + (p.sway ? Math.sin(time * 2.2 + p.seed) * 0.25 * p.sway : 0)) * dt; p.y += p.vy * dt; p.z += (p.vz + (p.sway ? Math.cos(time * 1.7 + p.seed) * 0.2 * p.sway : 0)) * dt;
      if (p.floor >= 0 && p.y < p.floor) { p.y = p.floor; p.vy = 0; p.vx = 0; p.vz = 0; p.sway = 0; }
      pos[i * 3] = p.x; pos[i * 3 + 1] = p.y; pos[i * 3 + 2] = p.z; colr[i * 3] = p.r; colr[i * 3 + 1] = p.gc; colr[i * 3 + 2] = p.b;
      size[i] = p.size + p.grow * u * p.max;
      alpha[i] = p.a * Math.min(1, u * 8) * Math.min(1, (1 - u) * 3) * (p.tw ? 0.6 + 0.4 * Math.sin(time * p.tw + p.seed * 7) : 1);
    }
    // fireflies ride on top of the pool's last slots at night
    const night = env.night;
    if (night > 0.3) for (const f of flies) { if (Math.random() < dt * 0.55) emit({ x: f.x + Math.sin(time * 0.3 + f.s) * 1.5, y: f.y + Math.sin(time * 0.5 + f.s * 2) * 0.3, z: f.z + Math.cos(time * 0.27 + f.s) * 1.5, vx: rnd(-0.1, 0.1), vy: rnd(-0.03, 0.08), vz: rnd(-0.1, 0.1), life: rnd(1.2, 2.4), size: 0.07, color: 0xe8ff7a, alpha: night, sway: 0.4 }); }
    geo.attributes.position.needsUpdate = true; geo.attributes.color.needsUpdate = true; geo.attributes.aSize.needsUpdate = true; geo.attributes.aAlpha.needsUpdate = true;
    // chimney smoke
    smokeT -= dt; if (smokeT < 0 && chimney) { smokeT = 0.45; fx.smoke(chimney); }
    // butterflies
    const want = night > 0.5 || fx.rain > 0.3 ? 0 : fx.butterflyCount;
    bfs.forEach((b, i) => {
      const on = i < want; if (!on && !b.g.visible) return;
      if (on && !b.g.visible) { b.g.visible = true; b.pos.set(rnd(-13, 13), 2.5, 15); b.rest = 0; }
      b.t += dt;
      if (!on) b.target.set(b.pos.x * 1.2 + 4, 5, 22);
      else if (b.rest > 0) { b.rest -= dt; if (b.rest <= 0) { const tg = fx.butterflyTargets; if (tg.length) { const t = tg[Math.floor(Math.random() * tg.length)]; b.target.set(t.x + rnd(-0.1, 0.1), t.y, t.z + rnd(-0.1, 0.1)); } else b.target.set(rnd(-4, 4), 0.8, rnd(-3, 3)); } }
      const d = b.target.clone().sub(b.pos), dist = d.length();
      if (b.rest <= 0) {
        if (dist < 0.08) { b.rest = on ? rnd(1.5, 4) : 0; if (!on) b.g.visible = false; }
        else { d.normalize(); const flut = Math.min(1, dist); b.pos.addScaledVector(d, b.speed * dt * Math.min(1, dist * 2 + 0.3));
          b.pos.x += Math.sin(b.t * 3.1 + b.seed) * 0.5 * dt * flut; b.pos.y += Math.sin(b.t * 5.3 + b.seed) * 0.6 * dt * flut; b.pos.z += Math.cos(b.t * 2.7 + b.seed) * 0.5 * dt * flut;
          b.g.rotation.y = Math.atan2(d.x, d.z); }
      }
      b.g.position.copy(b.pos);
      const flap = b.rest > 0 ? 0.25 + Math.sin(b.t * 2.5) * 0.25 : Math.sin(b.t * 26) * 0.9 + 0.1;
      b.wr.rotation.z = flap; b.wl.rotation.z = -flap;
    });
    // rain
    rain.material.opacity = fx.rain * 0.4; rain.visible = fx.rain > 0.01;
    if (rain.visible) { for (let i = 0; i < RN; i++) { const d = drops[i]; d.y -= d.v * dt; if (d.y < 0) { d.y = 14; d.x = camera.position.x * 0.3 + rnd(-16, 16); d.z = rnd(-12, 18); }
        rpos[i * 6] = d.x; rpos[i * 6 + 1] = d.y; rpos[i * 6 + 2] = d.z; rpos[i * 6 + 3] = d.x + 0.03; rpos[i * 6 + 4] = d.y + 0.38; rpos[i * 6 + 5] = d.z; }
      rgeo.attributes.position.needsUpdate = true; }
  };
  return fx;
}

// small in-world status bubbles (need water / gift ready / empty spot)
export function bubbleTextures() {
  const mk = (draw) => { const c = document.createElement('canvas'); c.width = c.height = 128; const g = c.getContext('2d');
    g.shadowColor = 'rgba(40,60,40,0.35)'; g.shadowBlur = 8; g.shadowOffsetY = 3; g.fillStyle = '#ffffff'; g.beginPath(); g.arc(64, 60, 46, 0, TAU); g.fill();
    g.beginPath(); g.moveTo(52, 100); g.lineTo(64, 122); g.lineTo(76, 100); g.fill(); g.shadowColor = 'transparent'; draw(g);
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t; };
  const water = mk((g) => { const gr = g.createLinearGradient(0, 28, 0, 92); gr.addColorStop(0, '#8fd3ff'); gr.addColorStop(1, '#2f8fe0'); g.fillStyle = gr; g.beginPath(); g.moveTo(64, 24); g.bezierCurveTo(64, 24, 38, 58, 38, 70); g.arc(64, 70, 26, Math.PI, 0, true); g.bezierCurveTo(90, 58, 64, 24, 64, 24); g.fill(); g.fillStyle = 'rgba(255,255,255,0.75)'; g.beginPath(); g.ellipse(54, 66, 5, 9, 0.4, 0, TAU); g.fill(); });
  const gift = mk((g) => { g.fillStyle = '#f7b92a'; g.beginPath(); g.arc(64, 60, 30, 0, TAU); g.fill(); g.fillStyle = '#ffd95a'; g.beginPath(); g.arc(64, 60, 24, 0, TAU); g.fill();
    g.fillStyle = '#f29a1a'; for (let i = 0; i < 5; i++) { const a = (i / 5) * TAU - Math.PI / 2; g.beginPath(); g.ellipse(64 + Math.cos(a) * 11, 60 + Math.sin(a) * 11, 8, 8, 0, 0, TAU); g.fill(); } g.fillStyle = '#fff2b0'; g.beginPath(); g.arc(64, 60, 6, 0, TAU); g.fill(); });
  const plus = (() => { const c = document.createElement('canvas'); c.width = c.height = 96; const g = c.getContext('2d'); g.fillStyle = 'rgba(255,255,255,0.92)'; g.beginPath(); g.arc(48, 48, 36, 0, TAU); g.fill(); g.strokeStyle = '#6aa85a'; g.lineWidth = 9; g.lineCap = 'round'; g.beginPath(); g.moveTo(48, 30); g.lineTo(48, 66); g.moveTo(30, 48); g.lineTo(66, 48); g.stroke(); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t; })();
  const weed = mk((g) => { g.strokeStyle = '#5a8f3a'; g.lineWidth = 7; g.lineCap = 'round'; g.beginPath(); g.moveTo(64, 88); g.lineTo(64, 56); g.stroke();
    g.fillStyle = '#7fb24a'; for (const [a, l] of [[-0.9, 30], [0.9, 30], [-0.25, 36], [0.3, 34]]) { g.save(); g.translate(64, 70); g.rotate(a); g.beginPath(); g.ellipse(0, -l * 0.6, 7, l * 0.55, 0, 0, TAU); g.fill(); g.restore(); }
    g.fillStyle = '#f7d23a'; g.beginPath(); g.arc(64, 34, 9, 0, TAU); g.fill(); });
  const prune = mk((g) => { g.strokeStyle = '#8a97a0'; g.lineWidth = 8; g.lineCap = 'round'; g.beginPath(); g.moveTo(42, 30); g.lineTo(76, 70); g.moveTo(86, 30); g.lineTo(52, 70); g.stroke();
    g.strokeStyle = '#e2685f'; g.lineWidth = 7; g.beginPath(); g.arc(46, 82, 10, 0, TAU); g.stroke(); g.beginPath(); g.arc(82, 82, 10, 0, TAU); g.stroke(); g.fillStyle = '#5d6b72'; g.beginPath(); g.arc(64, 56, 4, 0, TAU); g.fill(); });
  const order = mk((g) => { g.strokeStyle = '#9a6a3a'; g.lineWidth = 6; g.beginPath(); g.arc(64, 62, 24, Math.PI, 0); g.stroke();
    g.fillStyle = '#c08a4e'; g.beginPath(); g.moveTo(36, 60); g.lineTo(92, 60); g.lineTo(84, 90); g.lineTo(44, 90); g.closePath(); g.fill(); g.strokeStyle = '#9a6a3a'; g.lineWidth = 3; for (const y of [70, 80]) { g.beginPath(); g.moveTo(40, y); g.lineTo(88, y); g.stroke(); }
    for (const [x, y, c] of [[50, 52, '#f07aa4'], [64, 46, '#f7c84a'], [78, 52, '#b48af0']]) { g.fillStyle = c; g.beginPath(); g.arc(x, y, 9, 0, TAU); g.fill(); g.fillStyle = '#fff6c8'; g.beginPath(); g.arc(x, y, 3.5, 0, TAU); g.fill(); } });
  const daily = mk((g) => { g.fillStyle = '#e2685f'; g.fillRect(36, 52, 56, 38); g.fillStyle = '#ee7f76'; g.fillRect(32, 40, 64, 14); g.fillStyle = '#f7c84a'; g.fillRect(58, 40, 12, 50);
    g.strokeStyle = '#f7c84a'; g.lineWidth = 6; g.beginPath(); g.ellipse(52, 32, 11, 8, -0.5, 0, TAU); g.stroke(); g.beginPath(); g.ellipse(76, 32, 11, 8, 0.5, 0, TAU); g.stroke(); });
  const seed = mk((g) => { g.fillStyle = '#8a5a34'; g.beginPath(); g.ellipse(64, 64, 15, 22, 0.5, 0, TAU); g.fill(); g.fillStyle = '#b07a4a'; g.beginPath(); g.ellipse(59, 58, 5, 10, 0.5, 0, TAU); g.fill();
    g.fillStyle = '#f7c84a'; for (const [x, y, r] of [[36, 40, 7], [92, 46, 6], [88, 84, 8], [40, 86, 5]]) { g.beginPath(); for (let i = 0; i < 8; i++) { const a = (i / 8) * TAU, rr = i % 2 ? r * 0.4 : r; g.lineTo(x + Math.cos(a) * rr, y + Math.sin(a) * rr); } g.fill(); } });
  return { water, gift, plus, weed, prune, order, daily, seed };
}
