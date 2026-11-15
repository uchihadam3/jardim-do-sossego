// Close-ups of Eliane's face. ?hair=solto&views=0,0.6,-0.6,1.57 [&happy=1] [&hat=nenhum] [&full=1]   or   ?hairs=a,b,c (one head per style) [&yaw=0.5]
import * as THREE from 'three';
import { createGardener } from '../src/character_x.js';
import { WEAR0, resolveWear, WARDROBE } from '../src/wardrobe.js';
import { windU } from '../src/plantmat.js';
const q = new URLSearchParams(location.search), hairs = q.get('hairs') ? (q.get('hairs') === 'all' ? WARDROBE.hair.list.map((h) => h.id) : q.get('hairs').split(',')) : null;
const views = (q.get('views') || '0,0.55,-0.55,1.45').split(',').map(Number), yaw = +(q.get('yaw') ?? 0.5), full = q.get('full');
const r = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true }); r.setSize(innerWidth, innerHeight); r.setPixelRatio(1); document.body.style.margin = 0; document.body.appendChild(r.domElement);
r.toneMapping = THREE.ACESFilmicToneMapping; r.shadowMap.enabled = true; r.shadowMap.type = THREE.PCFSoftShadowMap;
const sc = new THREE.Scene(); sc.background = new THREE.Color(0xdfe9e2); sc.add(new THREE.HemisphereLight(0xffffff, 0xb8c8a0, 1.35));
const sun = new THREE.DirectionalLight(0xfff0dc, 2.0); sun.position.set(3, 6, 6); sun.castShadow = true; sun.shadow.mapSize.set(2048, 2048); const s = sun.shadow.camera; s.left = -6; s.right = 6; s.top = 6; s.bottom = -6; sun.shadow.bias = -0.0004; sc.add(sun);
const n = hairs ? hairs.length : views.length, SP = full ? 1.0 : 0.62, gs = [];
for (let i = 0; i < n; i++) { const g = createGardener(), wear = { ...WEAR0, hat: q.get('hat') || 'nenhum', hair: hairs ? hairs[i] : q.get('hair') || 'solto', top: q.get('top') || 'bufante', bottom: q.get('bottom') || 'jardineira' }; if (q.get('dress')) wear.dress = q.get('dress');
  const W0 = resolveWear(wear, q.get('cor') ? { hair: q.get('cor') } : {}); W0.hair = { ...W0.hair, id: wear.hair }; g.wear(W0); g.group.position.x = (i - (n - 1) / 2) * SP; g.heading = g.targetHeading = hairs ? yaw : views[i]; if (q.get('happy') && (hairs ? q.get('happy') === '1' : i === 1)) g.setFace('happy', 999); g.blinkT = 999; sc.add(g.group); gs.push(g); console.log(i + 1, wear.hair); }
const cam = new THREE.PerspectiveCamera(8, innerWidth / innerHeight, 0.1, 200), W = n * SP, cy = full ? 0.9 : 1.74, d = Math.max(full ? 14 : 4, (W / 2 + 0.02) / (Math.tan((4 * Math.PI) / 180) * (innerWidth / innerHeight)));
cam.position.set(0, cy + d * 0.05, d); cam.lookAt(0, cy, 0);
let f = 0, t = 0; (function loop() { t += 0.016; windU.uTime.value = t; for (const g of gs) { for (let k = 0; k < 3; k++) g.update(0.016, 0.2); g.J.head.rotation.set(0, 0, 0); g.J.spine.rotation.set(0, 0, 0); } r.render(sc, cam); if (++f === 30) { document.title = 'ready'; return; } requestAnimationFrame(loop); })();
