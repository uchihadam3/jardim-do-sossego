// Contact sheet of Eliane wearing pieces. ?slot=top&from=0&n=8 [&yaw=0.4] [&pose=walk|sit|plant] [&zoom=head|feet] [&also=dress:verao,hat:nenhum]
import * as THREE from 'three';
import { createGardener } from '../src/character.js';
import { WARDROBE, WEAR0, resolveWear } from '../src/wardrobe.js';
import { windU } from '../src/plantmat.js';
const q = new URLSearchParams(location.search), slot = q.get('slot') || 'top', from = +(q.get('from') ?? 0), n = +(q.get('n') ?? 8), yaw = +(q.get('yaw') ?? 0.45), pose = q.get('pose'), zoom = q.get('zoom');
const also = Object.fromEntries((q.get('also') || '').split(',').filter(Boolean).map((s) => s.split(':').map((v) => (v === 'null' ? null : v))));
const r = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true }); r.setSize(innerWidth, innerHeight); r.setPixelRatio(1); document.body.style.margin = 0; document.body.appendChild(r.domElement);
r.toneMapping = THREE.ACESFilmicToneMapping; r.shadowMap.enabled = true; r.shadowMap.type = THREE.PCFSoftShadowMap;
const sc = new THREE.Scene(); sc.background = new THREE.Color(0xdfe8dc); sc.add(new THREE.HemisphereLight(0xffffff, 0xa8b890, 1.3));
const sun = new THREE.DirectionalLight(0xfff0dc, 2.2); sun.position.set(4, 8, 6); sun.castShadow = true; sun.shadow.mapSize.set(2048, 2048); const s = sun.shadow.camera; s.left = -8; s.right = 8; s.top = 8; s.bottom = -8; sc.add(sun);
const fl = new THREE.Mesh(new THREE.PlaneGeometry(60, 60), new THREE.MeshStandardMaterial({ color: 0x9ab87a, roughness: 1 })); fl.rotation.x = -Math.PI / 2; fl.receiveShadow = true; sc.add(fl);
const list = WARDROBE[slot].list.slice(from, from + n), gs = [], SP = zoom ? 0.6 : 1.0;
list.forEach((p, i) => { const g = createGardener(), wear = { ...WEAR0, ...also, [slot]: p.id }; if (slot === 'top' || slot === 'bottom') wear.dress = null; if (slot === 'bottom' && !('top' in also)) wear.top = 'camiseta';
  g.wear(resolveWear(wear, {})); g.group.position.x = (i - (list.length - 1) / 2) * SP; g.heading = g.targetHeading = yaw; sc.add(g.group); gs.push(g); console.log(i + 1, p.id, p.name);
  if (pose === 'walk') { g.state = 'walk'; g.speed = 2; g.phase = 1.2 + i; } else if (pose) g.play(pose, 9999); });
const cam = new THREE.PerspectiveCamera(26, innerWidth / innerHeight, 0.1, 100), W = list.length * SP, dist = +(q.get('dist') ?? Math.max(4.4, (W / 2 + 0.2) / (Math.tan((13 * Math.PI) / 180) * (innerWidth / innerHeight))));
const cy = zoom === 'head' ? 1.62 : zoom === 'feet' ? 0.15 : 0.9, dd = zoom ? Math.max(1.3, (W / 2 + 0.05) / (Math.tan((13 * Math.PI) / 180) * (innerWidth / innerHeight))) : dist; cam.position.set(0, cy + dd * 0.18, dd); cam.lookAt(0, cy, 0);
let f = 0, t = 0; (function loop() { t += 0.016; windU.uTime.value = t; for (const g of gs) { if (pose === 'walk') { g.state = 'walk'; g.speed = 2; g.group.position.z += 0.02; } for (let k = 0; k < (f < 40 ? 4 : 1); k++) g.update(0.016, t); } r.render(sc, cam); if (++f === 45) { document.title = 'ready'; return; } requestAnimationFrame(loop); })();
