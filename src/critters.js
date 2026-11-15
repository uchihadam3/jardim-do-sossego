// Little visitors: each one shows up on its own when the garden offers what it likes.
import * as THREE from 'three';
import { SPECIES } from './species.js';
import { PORCH_Y } from './world.js';
import { Builder } from './builder.js';
import { T, RX, RY, RZ, mul, col } from './util.js';

const V3 = THREE.Vector3;
export const CRITTERS = [
  { id: 'borboleta', name: 'Borboletas', hint: 'Aparecem quando há flores abertas.' },
  { id: 'abelha', name: 'Abelhas', hint: 'Adoram lavanda, alecrim, sálvia e girassol em flor.' },
  { id: 'joaninha', name: 'Joaninha', hint: 'Passeia quando o jardim tem pelo menos seis plantas.' },
  { id: 'beija_flor', name: 'Beija-flor', hint: 'Vem beber no hibisco, na sálvia, na dedaleira ou no brinco-de-princesa.' },
  { id: 'passarinho', name: 'Sabiá', hint: 'Pousa onde há banho de passarinho ou casinha.' },
  { id: 'sapo', name: 'Sapinho', hint: 'Mora no laguinho quando há flor na água.' },
  { id: 'libelula', name: 'Libélula', hint: 'Sobrevoa o lago quando há duas plantas aquáticas.' },
  { id: 'caracol', name: 'Caracol', hint: 'Sai para passear depois da chuva.' },
  { id: 'gato', name: 'Gato', hint: 'Vem cochilar na varanda de um jardim com banco e muitas flores.' },
  { id: 'vagalume', name: 'Vaga-lumes', hint: 'Piscam nas noites do jardim.' },
];
const BEE = ['lavanda', 'lavanda_branca', 'alecrim', 'salvia', 'girassol', 'girassol_rubro', 'manjericao', 'hortela', 'alho_ornamental'];
const HUM = ['hibisco', 'salvia', 'dedaleira', 'fucsia', 'estrelicia', 'heliconia', 'boca_de_leao', 'malva_rosa', 'madressilva'];

const M = (color, o = {}) => new THREE.MeshStandardMaterial({ color, roughness: 0.6, ...o });
const sph = (r, mat, sx = 1, sy = 1, sz = 1, x = 0, y = 0, z = 0) => { const m = new THREE.Mesh(new THREE.SphereGeometry(r, 10, 8), mat); m.scale.set(sx, sy, sz); m.position.set(x, y, z); m.castShadow = true; return m; };
const wing = (w, l, color, op = 0.55) => { const g = new THREE.CircleGeometry(1, 10); g.scale(w, l, 1); g.translate(0, l, 0); return new THREE.Mesh(g, new THREE.MeshBasicMaterial({ color, transparent: true, opacity: op, side: THREE.DoubleSide, depthWrite: false })); };

export function critterModel(id) {
  const g = new THREE.Group(); g.userData.parts = {};
  if (id === 'abelha') { g.add(sph(0.016, M(0xf2b41e), 1, 0.9, 1.5), sph(0.0165, M(0x2a2018), 1.02, 0.92, 0.28, 0, 0, 0.004), sph(0.0165, M(0x2a2018), 1.0, 0.9, 0.24, 0, 0, -0.012), sph(0.011, M(0x2a2018), 1, 1, 1, 0, 0.002, 0.024));
    for (const s of [-1, 1]) { const w = wing(0.012, 0.014, 0xffffff); w.rotation.set(-1.2, 0, s * 0.9); w.position.set(s * 0.008, 0.012, 0); g.add(w); (g.userData.parts.wings ??= []).push(w); } }
  else if (id === 'joaninha') { const b = new THREE.Mesh(new THREE.SphereGeometry(0.022, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2), M(0xd8281e, { roughness: 0.3 })); b.castShadow = true; g.add(b, sph(0.011, M(0x1a1a1a), 1, 0.8, 1, 0, 0.004, 0.02));
    for (const [x, z] of [[0.009, 0.004], [-0.009, 0.004], [0.006, -0.01], [-0.006, -0.01], [0, 0.012]]) g.add(sph(0.004, M(0x1a1a1a), 1, 0.4, 1, x, 0.0195 - Math.hypot(x, z) * 0.35, z)); }
  else if (id === 'beija_flor') { g.add(sph(0.022, M(0x2a9a6a, { roughness: 0.25, metalness: 0.4 }), 0.9, 0.9, 1.7), sph(0.016, M(0x2f8ab0, { roughness: 0.25, metalness: 0.4 }), 1, 1, 1, 0, 0.014, 0.034), sph(0.015, M(0xf0ece0), 0.8, 0.7, 1.3, 0, -0.008, 0.012));
    const beak = new THREE.Mesh(new THREE.ConeGeometry(0.003, 0.045, 5), M(0x2a2018)); beak.rotation.x = Math.PI / 2; beak.position.set(0, 0.014, 0.07); g.add(beak);
    const tail = wing(0.012, 0.02, 0x1f6a4a, 1); tail.rotation.x = Math.PI / 2 + 0.3; tail.position.set(0, 0, -0.03); tail.scale.y = -1; g.add(tail);
    for (const s of [-1, 1]) { const w = wing(0.014, 0.03, 0x9ad8c0, 0.5); w.rotation.set(-1.4, 0, s * 1.1); w.position.set(s * 0.012, 0.008, 0.004); g.add(w); (g.userData.parts.wings ??= []).push(w); } }
  else if (id === 'passarinho') { const brown = M(0x6a5444), belly = M(0xd87a3a); g.add(sph(0.05, brown, 0.85, 0.85, 1.25, 0, 0.05, 0), sph(0.042, belly, 0.78, 0.74, 1.0, 0, 0.04, 0.014), sph(0.032, brown, 1, 1, 1, 0, 0.095, 0.04));
    const beak = new THREE.Mesh(new THREE.ConeGeometry(0.009, 0.03, 5), M(0xe8b03a)); beak.rotation.x = Math.PI / 2; beak.position.set(0, 0.093, 0.08); g.add(beak);
    for (const s of [-1, 1]) g.add(sph(0.005, M(0x1a1a1a), 1, 1, 1, s * 0.018, 0.103, 0.062));
    const tail = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.008, 0.07), brown); tail.position.set(0, 0.06, -0.085); tail.rotation.x = 0.4; g.add(tail);
    for (const s of [-1, 1]) { const l = new THREE.Mesh(new THREE.CylinderGeometry(0.003, 0.003, 0.03, 4), M(0xc89a5a)); l.position.set(s * 0.015, 0.005, 0.005); g.add(l); } }
  else if (id === 'sapo') { const gr = M(0x5aa83a, { roughness: 0.35 }); g.add(sph(0.05, gr, 1.1, 0.7, 1.25, 0, 0.035, 0), sph(0.035, M(0xcfe09a), 0.9, 0.5, 0.9, 0, 0.022, 0.03));
    for (const s of [-1, 1]) { g.add(sph(0.016, gr, 1, 1, 1, s * 0.026, 0.068, 0.034), sph(0.007, M(0x1a1a1a), 1, 1, 0.6, s * 0.028, 0.072, 0.047), sph(0.022, gr, 1.4, 0.5, 1.2, s * 0.05, 0.012, -0.02), sph(0.012, gr, 1, 0.5, 1.6, s * 0.035, 0.008, 0.055)); } }
  else if (id === 'libelula') { const body = new THREE.Mesh(new THREE.CylinderGeometry(0.004, 0.002, 0.09, 6), M(0x2a8ad8, { metalness: 0.5, roughness: 0.3 })); body.rotation.x = Math.PI / 2; g.add(body, sph(0.008, M(0x2a8ad8, { metalness: 0.5, roughness: 0.3 }), 1, 1, 1, 0, 0, 0.05));
    for (const s of [-1, 1]) for (const z of [0.022, 0.004]) { const w = wing(0.008, 0.028, 0xd8f0ff, 0.45); w.rotation.set(-Math.PI / 2, 0, s * 1.45); w.position.set(s * 0.004, 0.004, z); g.add(w); (g.userData.parts.wings ??= []).push(w); } }
  else if (id === 'caracol') { g.add(sph(0.018, M(0xd8c8a0), 0.7, 0.55, 2.2, 0, 0.01, 0.008), sph(0.026, M(0xb8834a, { roughness: 0.4 }), 0.75, 1, 1, 0, 0.034, -0.008), sph(0.017, M(0xd8a86a, { roughness: 0.4 }), 0.8, 1, 1, 0, 0.036, -0.006));
    for (const s of [-1, 1]) { const a = new THREE.Mesh(new THREE.CylinderGeometry(0.0015, 0.0015, 0.022, 4), M(0xd8c8a0)); a.position.set(s * 0.007, 0.026, 0.044); a.rotation.x = 0.5; g.add(a, sph(0.003, M(0x2a2018), 1, 1, 1, s * 0.007, 0.037, 0.05)); } }
  else if (id === 'gato') { const fur = M(0xe89a4a, { roughness: 0.9 }), cream = M(0xf8e6cc, { roughness: 0.9 });
    const body = sph(0.17, fur, 1.25, 0.72, 0.9, 0, 0.115, 0); g.add(body, sph(0.1, cream, 1, 0.6, 0.8, 0.07, 0.09, 0.05)); g.userData.parts.body = body;
    const head = new THREE.Group(); head.position.set(0.2, 0.15, 0.04); head.add(sph(0.085, fur, 1, 0.9, 0.95), sph(0.04, cream, 1.2, 0.7, 0.8, 0.02, -0.03, 0.055));
    for (const s of [-1, 1]) { const ear = new THREE.Mesh(new THREE.ConeGeometry(0.03, 0.05, 4), fur); ear.position.set(s * 0.05, 0.075, 0); ear.castShadow = true; head.add(ear);
      const eye = new THREE.Mesh(new THREE.TorusGeometry(0.012, 0.003, 4, 8, Math.PI), M(0x3a2a1e)); eye.position.set(s * 0.03 + 0.012, 0.0, 0.08); eye.rotation.z = Math.PI; head.add(eye); }
    head.add(sph(0.008, M(0xe88a8a), 1, 0.7, 1, 0.02, -0.022, 0.085)); head.rotation.y = 0.5; g.add(head); g.userData.parts.head = head;
    const tb = new Builder(), pts = []; for (let i = 0; i <= 8; i++) { const t = i / 8; pts.push(new V3(-0.19 - Math.sin(t * 1.6) * 0.1, 0.06 + t * 0.02, 0.05 + t * 0.2)); }
    tb.tube(null, pts, 0.026, 0.02, col(0xe89a4a), col(0xc87a2a), 6, true); const tail = new THREE.Mesh(tb.build(), M(0xffffff, { vertexColors: true, roughness: 0.9 })); tail.castShadow = true; g.add(tail); g.userData.parts.tail = tail; }
  else if (id === 'borboleta') { const b = new Builder();
    for (const s of [-1, 1]) { b.petal(mul(RZ(s * -1.15)), { L: 0.085, W: 0.075, a: 1.5, b: 0.45, nu: 3, nv: 2, cols: [col(0x2a2018), col(0xf7a21e), col(0xfbd25a)] }); b.petal(mul(RZ(s * -2.05)), { L: 0.06, W: 0.06, a: 1.4, b: 0.45, nu: 3, nv: 2, cols: [col(0x2a2018), col(0xf7a21e), col(0xfbd25a)] }); }
    const m = new THREE.Mesh(b.build(), new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.DoubleSide })); m.rotation.x = -0.9; g.add(m); }
  else if (id === 'vagalume') { g.add(sph(0.012, new THREE.MeshBasicMaterial({ color: 0xf0ff8a })), sph(0.03, new THREE.MeshBasicMaterial({ color: 0xe8ff7a, transparent: true, opacity: 0.35 })), sph(0.008, M(0x3a3a2a), 1, 1, 1.6, 0, 0.004, 0.014)); }
  return g;
}

export function createCritters(scene, world, { S, G, env, fx, ui, audio }) {
  const C = {}, P = world.pond, rnd = (a, b) => a + Math.random() * (b - a), pick = (a) => a[Math.floor(Math.random() * a.length)];
  const add = (id, n = 1) => { const list = []; for (let i = 0; i < n; i++) { const g = critterModel(id); g.visible = false; scene.add(g); list.push({ g, parts: g.userData.parts, pos: new V3(0, 1, 0), tgt: new V3(0, 1, 0), t: Math.random() * 9, wait: 0, seed: Math.random() * 100 }); } C[id] = list; };
  add('abelha', 3); add('joaninha'); add('beija_flor'); add('passarinho'); add('sapo'); add('libelula'); add('caracol'); add('gato');
  let bee = [], hum = [], any = [], pondBloom = 0, pondCount = 0, scanT = 0, wetT = 0, seeT = {};
  const scan = () => { bee = []; hum = []; any = []; pondBloom = 0; pondCount = 0;
    for (const id in S.plants) { const p = S.plants[id], sp = SPECIES[p.sp], spot = world.spots[id], v = G.V[id]; if (!sp || !spot) continue; if (spot.type === 'pond') { pondCount++; if (p.grown >= sp.grow) pondBloom++; }
      if (p.grown < sp.grow) continue; const at = new V3(spot.pos.x, spot.pos.y + (v.h || 0.3) * 0.85, spot.pos.z);
      if (BEE.includes(p.sp)) bee.push(at); if (HUM.includes(p.sp)) hum.push(at); if (!sp.tree && !sp.climber && spot.type !== 'pond' && spot.type !== 'green') any.push({ at, spot }); } };
  const see = (id, on, dt) => { if (!on || S.seen.includes(id)) return; seeT[id] = (seeT[id] || 0) + dt; if (seeT[id] > 2.5) { S.seen.push(id); const c = CRITTERS.find((x) => x.id === id); audio.sfx('bloom', 0.7, 1.1); ui.toast(`Novo visitante no jardim: ${c.name}!`, 'good'); G.sys.log(`Recebi a visita de: ${c.name}.`); G.save(); } };
  const fly = (c, dt, speed, wobble, hover) => { const d = c.tgt.clone().sub(c.pos), dist = d.length();
    if (dist > 0.04) { d.normalize(); c.pos.addScaledVector(d, Math.min(dist, speed * dt * Math.min(1, dist * 3 + 0.25))); c.g.rotation.y = Math.atan2(d.x, d.z); }
    c.g.position.copy(c.pos); c.g.position.x += Math.sin(c.t * 7 + c.seed) * wobble; c.g.position.y += Math.sin(c.t * 9 + c.seed * 2) * wobble + (hover ? Math.sin(c.t * 3) * 0.01 : 0); c.g.position.z += Math.cos(c.t * 6 + c.seed) * wobble; return dist; };

  C.update = (dt, time) => {
    scanT -= dt; if (scanT < 0) { scanT = 1.2; scan(); }
    const day = env.night < 0.5, dry = fx.rain < 0.3;
    if (fx.rain > 0.6) wetT = 300; wetT -= dt;
    // bees
    const beesOn = day && dry && bee.length > 0;
    C.abelha.forEach((c, i) => { const on = beesOn && i < Math.min(3, bee.length + 1); if (on && !c.g.visible) { c.pos.set(rnd(-8, 8), 2.5, 16); c.wait = 0; } c.g.visible = on; if (!on) return; c.t += dt;
      c.wait -= dt; if (c.wait <= 0) { const b = pick(bee); c.tgt.set(b.x + rnd(-0.08, 0.08), b.y + rnd(0, 0.06), b.z + rnd(-0.08, 0.08)); c.wait = rnd(2, 5); }
      fly(c, dt, 1.3, 0.012, true); const f = Math.sin(c.t * 70) * 0.5; c.parts.wings[0].rotation.z = -0.9 + f; c.parts.wings[1].rotation.z = 0.9 - f; });
    see('abelha', beesOn, dt);
    // hummingbird
    { const c = C.beija_flor[0], on = day && dry && hum.length > 0; if (on && !c.g.visible) { c.pos.set(14, 3, rnd(-4, 10)); c.wait = 0; } c.g.visible = on;
      if (on) { c.t += dt; c.wait -= dt; if (c.wait <= 0) { const b = pick(hum), a = Math.random() * 6.28; c.look = b; c.tgt.set(b.x + Math.cos(a) * 0.13, b.y + 0.03, b.z + Math.sin(a) * 0.13); c.wait = rnd(2.5, 5.5); }
        const d = fly(c, dt, 3.2, 0.004, true); if (d < 0.06 && c.look) c.g.rotation.y = Math.atan2(c.look.x - c.pos.x, c.look.z - c.pos.z);
        const f = Math.sin(c.t * 90) * 0.7; c.parts.wings[0].rotation.z = -1.1 + f; c.parts.wings[1].rotation.z = 1.1 - f; } see('beija_flor', on, dt); }
    // ladybird
    { const c = C.joaninha[0], on = day && dry && any.length > 0 && G.count() >= 6; c.g.visible = on;
      if (on) { c.t += dt; if (!c.home || !S.plants[c.home.spot.id] || c.t > 40) { c.home = pick(any); c.t = 0; } const s = c.home.spot, a = c.t * 0.25 + c.seed, r = s.type === 'pot' ? 0.2 : 0.27;
        c.g.position.set(s.pos.x + Math.cos(a) * r, s.pos.y + 0.012, s.pos.z + Math.sin(a) * r); c.g.rotation.y = -a; } see('joaninha', on, dt); }
    // thrush on the bird bath / bird house
    { const c = C.passarinho[0], perches = []; if (S.decor.includes('bebedouro')) perches.push(new V3(2.6 + 0.36, 0.84, 2.5)); if (S.decor.includes('casinha')) perches.push(new V3(4.6, 2.56, -3.7));
      const on = day && dry && perches.length > 0; if (on && !c.g.visible) { c.pos.set(-15, 5, 6); c.wait = 0; } c.g.visible = on;
      if (on) { c.t += dt; c.wait -= dt; if (c.wait <= 0) { c.wait = rnd(9, 18); const far = Math.random() < 0.35; c.perch = far ? null : pick(perches); c.tgt.copy(far ? new V3(rnd(-11, 11), 0.98, 14.7) : c.perch); c.hop = 0; }
        const d = c.tgt.clone().sub(c.pos), dist = d.length();
        if (dist > 0.05) { d.normalize(); c.pos.addScaledVector(d, Math.min(dist, 4.2 * dt)); c.g.rotation.set(0, Math.atan2(d.x, d.z), 0); c.g.position.copy(c.pos); c.g.position.y += Math.sin(Math.min(1, dist / 3) * Math.PI) * 0.6; }
        else { c.g.position.copy(c.pos); c.g.rotation.x = Math.max(0, Math.sin(c.t * 2.2)) > 0.92 ? 0.7 : 0; c.g.rotation.y += Math.sin(c.t * 0.7) * dt * 0.8; } }
      see('passarinho', on, dt); }
    // frog + dragonfly at the pond
    { const c = C.sapo[0], on = S.zones.includes(3) && pondBloom > 0 && !!P; c.g.visible = on;
      if (on) { c.t += dt; const a = 0.75; c.g.position.set(P.x + Math.cos(a) * P.rx * 1.04, 0.13, P.z + Math.sin(a) * P.rz * 1.04); c.g.rotation.y = a + Math.PI + 0.3; c.wait -= dt; if (c.wait <= 0) { c.wait = rnd(5, 11); c.hop = 0.5; }
        if (c.hop > 0) { c.hop -= dt; c.g.position.y += Math.sin((1 - c.hop / 0.5) * Math.PI) * 0.12; } c.g.scale.setScalar(1.4 * (1 + Math.sin(c.t * 2.4) * 0.03)); } see('sapo', on, dt);
      const d = C.libelula[0], on2 = S.zones.includes(3) && pondCount >= 2 && day && dry && !!P; d.g.visible = on2;
      if (on2) { d.t += dt; const a = d.t * 0.7; d.g.position.set(P.x + Math.sin(a) * P.rx * 0.8, 0.45 + Math.sin(d.t * 1.7) * 0.12, P.z + Math.sin(a * 2) * P.rz * 0.6); d.g.rotation.y = Math.atan2(Math.cos(a) * P.rx * 0.8, Math.cos(a * 2) * 2 * P.rz * 0.6);
        const f = Math.sin(d.t * 60) * 0.25; d.parts.wings.forEach((w, i) => { w.rotation.z = (i < 2 ? -1 : 1) * (1.45 + f * (i % 2 ? 1 : -1)); }); d.g.scale.setScalar(1.6); } see('libelula', on2, dt); }
    // snail after the rain
    { const c = C.caracol[0], on = wetT > 0 && fx.rain < 0.5; if (on && !c.g.visible) { c.pos.set(0.95, 0.02, rnd(-3, 2)); } c.g.visible = on;
      if (on) { c.pos.z += dt * 0.012; c.g.position.copy(c.pos); c.g.scale.setScalar(1.5); } see('caracol', on, dt); }
    // cat napping on the porch
    { const c = C.gato[0], on = S.decor.includes('banco') && G.blooming() >= 12; c.g.visible = on;
      if (on) { c.t += dt; c.g.position.set(2.3, PORCH_Y + 0.005, -6.15); c.g.rotation.y = -0.5; const br = 1 + Math.sin(c.t * 1.3) * 0.025; c.parts.body.scale.set(1.25, 0.72 * br, 0.9); c.parts.tail.rotation.y = Math.sin(c.t * 0.9) * 0.12 + (Math.sin(c.t * 0.23) > 0.9 ? Math.sin(c.t * 9) * 0.15 : 0); c.parts.head.rotation.x = Math.sin(c.t * 0.31) > 0.96 ? -0.25 : 0; } see('gato', on, dt); }
    see('borboleta', fx.butterflyCount > 0 && day && dry, dt); see('vagalume', env.night > 0.6, dt);
  };
  return C;
}
