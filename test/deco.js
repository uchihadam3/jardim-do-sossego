// Contact sheet of garden ornaments: ?ids=a,b,c [&night=1]
import * as THREE from 'three';
import { DECO, buildDeco } from '../src/decor.js';
const q = new URLSearchParams(location.search), ids = (q.get('ids') || '').split(',').filter(Boolean), night = +(q.get('night') || 0);
const list = ids.length ? DECO.filter((d) => ids.includes(d.id)) : DECO.slice(-6);
const r = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true }); r.setSize(innerWidth, innerHeight); r.setPixelRatio(1); document.body.style.margin = 0; document.body.appendChild(r.domElement);
r.toneMapping = THREE.ACESFilmicToneMapping; r.shadowMap.enabled = true; r.shadowMap.type = THREE.PCFSoftShadowMap;
const sc = new THREE.Scene(); sc.background = new THREE.Color(0xcfe3ee); sc.add(new THREE.HemisphereLight(0xdfeeff, 0x8a9a6a, 1.3));
const sun = new THREE.DirectionalLight(0xfff0d8, 2.4); sun.position.set(4, 8, 6); sun.castShadow = true; sun.shadow.mapSize.set(2048, 2048); const s = sun.shadow.camera; s.left = -10; s.right = 10; s.top = 10; s.bottom = -10; sc.add(sun);
const g = new THREE.Mesh(new THREE.PlaneGeometry(60, 60), new THREE.MeshStandardMaterial({ color: 0x86ad62, roughness: 1 })); g.rotation.x = -Math.PI / 2; g.receiveShadow = true; sc.add(g);
const SP = 3.2, groups = list.map((d, i) => { const m = buildDeco(d.id); m.position.x = (i - (list.length - 1) / 2) * SP; m.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } }); sc.add(m); console.log(i + 1, d.id, d.name); return m; });
const cam = new THREE.PerspectiveCamera(30, innerWidth / innerHeight, 0.1, 100), dist = Math.max(7, list.length * 3.1); cam.position.set(dist * 0.25, dist * 0.42, dist * 0.82); cam.lookAt(0, 0.8, 0);
let f = 0, t = 3; (function loop() { t += 0.4; for (const m of groups) if (m.userData.tick) m.userData.tick(0.016, t, night, null, m.position); r.render(sc, cam); if (++f === 6) { document.title = 'ready'; return; } requestAnimationFrame(loop); })();
