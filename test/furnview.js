// Contact sheet for furniture. URL: ?ids=a,b,c | ?cat=Camas | ?from=0&n=12 ; &cols=4 &yaw=0.5 &pitch=0.45 &dist=9 &night=1 &c1=ff0000 &c2=00ff00
import * as THREE from 'three';
import { FURN, buildFurn, ROOM_H } from '../src/furncore.js';
export function run() {
  const q = new URLSearchParams(location.search), ids = q.get('ids')?.split(','), cat = q.get('cat'), from = +(q.get('from') ?? 0), n = +(q.get('n') ?? 12);
  let list = ids ? FURN.filter((f) => ids.includes(f.id)) : cat ? FURN.filter((f) => f.cat === cat) : FURN; if (!ids) list = list.slice(from, from + n);
  const r = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true }); r.setSize(innerWidth, innerHeight); r.setPixelRatio(1); document.body.style.margin = 0; document.body.appendChild(r.domElement);
  r.toneMapping = THREE.ACESFilmicToneMapping; r.shadowMap.enabled = true; r.shadowMap.type = THREE.PCFSoftShadowMap;
  const night = +(q.get('night') ?? 0), sc = new THREE.Scene(); sc.background = new THREE.Color(night ? 0x2a2630 : 0xe9e2d6);
  sc.add(new THREE.HemisphereLight(0xfff4e6, 0x9a8a78, night ? 0.5 : 1.25));
  const sun = new THREE.DirectionalLight(0xfff0dc, night ? 0.6 : 2.2); sun.position.set(5, 9, 7); sun.castShadow = true; sun.shadow.mapSize.set(4096, 4096); const s = sun.shadow.camera; s.left = -14; s.right = 14; s.top = 14; s.bottom = -14; sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.02; sc.add(sun);
  const cols = +(q.get('cols') ?? Math.min(4, list.length)), SP = 3.0, rows = Math.ceil(list.length / cols);
  const floorM = new THREE.MeshStandardMaterial({ color: 0xc9a77c, roughness: 0.9 }), wallM = new THREE.MeshStandardMaterial({ color: 0xf3ead8, roughness: 1 }), poleM = new THREE.MeshStandardMaterial({ color: 0x8aa0b8 });
  const fl = new THREE.Mesh(new THREE.PlaneGeometry(80, 80), floorM); fl.rotation.x = -Math.PI / 2; fl.receiveShadow = true; sc.add(fl);
  let tris = 0; const groups = [];
  list.forEach((d, i) => { const cx = ((i % cols) - (cols - 1) / 2) * SP, cz = Math.floor(i / cols) * (SP + 0.6);
    const wall = new THREE.Mesh(new THREE.BoxGeometry(2.7, ROOM_H, 0.08), wallM); wall.position.set(cx, ROOM_H / 2, cz - 1.3 - 0.04); wall.receiveShadow = true; sc.add(wall);
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 1.75, 6), poleM); pole.position.set(cx + 1.3, 0.875, cz + 0.9); sc.add(pole); // Eliane is 1.75 m tall
    const t0 = performance.now(), g = buildFurn(d.id, q.get('c1') ? parseInt(q.get('c1'), 16) : undefined, q.get('c2') ? parseInt(q.get('c2'), 16) : undefined); let t = 0;
    g.traverse((o) => { if (o.isMesh) t += (o.geometry.index ? o.geometry.index.count : o.geometry.attributes.position.count) / 3; }); tris += t;
    g.position.set(cx, 0, d.kind === 'wall' ? cz - 1.3 : d.kind === 'ceil' || d.kind === 'top' || d.kind === 'rug' ? cz : cz - 1.3 + d.d / 2 + 0.05); sc.add(g); groups.push(g);
    for (const m of g.userData.glow) m.emissiveIntensity = m.userData.e * Math.max(night, m.userData.day || 0);
    if (d.plants) for (const [x, y, z, s] of d.plants) { const m = new THREE.Mesh(new THREE.SphereGeometry(0.06 * (s || 1), 8, 6), new THREE.MeshStandardMaterial({ color: 0x4a9a3a })); m.position.set(g.position.x + x, y + 0.05, g.position.z + z); sc.add(m); }
    console.log(`${i + 1}. ${d.id} | ${d.name} | ${d.cat} | ${d.kind} ${d.w}x${d.d}x${d.h} | $${d.price} lv${d.lvl} | ${Math.round(t)} tris | ${(performance.now() - t0).toFixed(0)}ms`); });
  console.log('TOTAL', list.length, 'items', Math.round(tris), 'tris');
  const cam = new THREE.PerspectiveCamera(30, innerWidth / innerHeight, 0.1, 200), yaw = +(q.get('yaw') ?? 0.45), pitch = +(q.get('pitch') ?? 0.42), cz = ((rows - 1) * (SP + 0.6)) / 2 - 0.2;
  const dist = +(q.get('dist') ?? Math.max(7.5, cols * 3.4, rows * 5.2));
  cam.position.set(Math.sin(yaw) * Math.cos(pitch) * dist, 1 + Math.sin(pitch) * dist, cz + Math.cos(yaw) * Math.cos(pitch) * dist); cam.lookAt(0, 0.9, cz);
  let f = 0, last = performance.now(); (function loop() { const now = performance.now(), dt = (now - last) / 1000; last = now; for (const g of groups) for (const fn of g.userData.ticks) fn(dt, now / 1000, night, g); r.render(sc, cam); if (++f === 4) { document.title = 'ready'; return; } requestAnimationFrame(loop); })();
}
