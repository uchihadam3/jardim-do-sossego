import * as THREE from 'three';
import { createRenderer, QUALITY } from '../src/render.js';
import { createEnv } from '../src/env.js';
import { createWorld } from '../src/world.js';
import { createGardener } from '../src/character.js';
import { SPECIES_LIST, buildPlantGeometry, plantMaterialFor } from '../src/species.js';
import { windU } from '../src/plantmat.js';
const qs = new URLSearchParams(location.search);
const q = QUALITY[qs.get('q') ?? 'alta'];
const canvas = document.createElement('canvas'); document.body.appendChild(canvas);
const R = createRenderer(canvas, q);
const scene = new THREE.Scene();
const cam = new THREE.PerspectiveCamera(+(qs.get('fov') ?? 32), innerWidth / innerHeight, 0.3, 900);
const env = createEnv(scene, R.renderer, q); env.setHour(+(qs.get('h') ?? 9));
const unlocked = new Set(qs.get('lock') ? [0] : [0, 1, 2, 3, 4, 5, 6]);
const world = createWorld(scene, q, unlocked);
for (const z of world.zones) world.setZone(z.id, unlocked.has(z.id));
if (!qs.get('lock')) for (const d in world.decor) world.setDecor(d, true);
world.setNight(env.night);
const g = createGardener(); g.group.position.set(+(qs.get('gx') ?? 0.4), 0, +(qs.get('gz') ?? 1.2)); scene.add(g.group);
if (qs.get('act')) { g.play(qs.get('act'), 2.1, { high: !!qs.get('high') }); for (let i = 0; i < 20; i++) g.update(0.05, i * 0.05); } if (qs.get('walk')) { g.state = 'walk'; g.speed = 2.2; }
g.targetHeading = g.heading = +(qs.get('gh') ?? 0.4);
// sample plants
if (!qs.get('empty')) world.spots.forEach((s, i) => {
  if (!unlocked.has(s.zone)) return;
  const list = SPECIES_LIST.filter((d) => d.spots.includes(s.type)); const d = list[(i * 7) % list.length];
  const m = new THREE.Mesh(buildPlantGeometry(d.id, i + 1, +(qs.get('stage') ?? 4)), plantMaterialFor(d.id)); m.castShadow = m.receiveShadow = true;
  m.position.copy(s.pos); m.scale.setScalar(s.scale); if (!d.fixedRot) m.rotation.y = i; scene.add(m);
});
R.setup(scene, cam); R.resize(innerWidth, innerHeight);
const tx = +(qs.get('tx') ?? 0), tz = +(qs.get('tz') ?? 0), ty = +(qs.get('ty') ?? 0.8), dist = +(qs.get('dist') ?? 17), yaw = +(qs.get('yaw') ?? 0), pitch = +(qs.get('pitch') ?? 0.62);
cam.position.set(tx + Math.sin(yaw) * Math.cos(pitch) * dist, ty + Math.sin(pitch) * dist, tz + Math.cos(yaw) * Math.cos(pitch) * dist); cam.lookAt(tx, ty, tz);
env.sun.target.position.set(0, 0, 2.5); env.setHour(env.hour);
let f = 0, t = +(qs.get('t') ?? 3);
(function loop() { t += 0.016; windU.uTime.value = t; if (!qs.get('act')) g.update(0.016, t); else g.update(0.0001, t); world.update(0.016, t); env.update(0.016, cam.position); R.render(scene, cam); if (++f === (+(qs.get('frames') ?? 3))) { document.title = 'ready'; console.log('tris', R.renderer.info.render.triangles, 'calls', R.renderer.info.render.calls); return; } requestAnimationFrame(loop); })();
