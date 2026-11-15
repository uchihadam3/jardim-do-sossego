import * as THREE from 'three';
import { createRenderer, QUALITY } from './render.js';
import { createEnv } from './env.js';
import { createWorld, ZONES, zoneAt } from './world.js';
import { createGardener } from './character.js';
import { createFx } from './fx.js';
import { createAudio } from './audio.js';
import { createNav } from './nav.js';
import { createUI } from './ui.js';
import { createGame, loadState } from './game.js';
import { SPECIES_LIST, buildPlantGeometry, plantMaterialFor } from './species.js';
import { windU } from './plantmat.js';
import { clamp, lerp, smooth } from './util.js';

const V3 = THREE.Vector3;
const $ = (s) => document.querySelector(s);
const params = new URLSearchParams(location.search);

async function makeThumbs(renderer, onProgress) {
  const thumbs = {}, N = 168, rt = new THREE.WebGLRenderTarget(N, N, { samples: 4 }); rt.texture.colorSpace = THREE.SRGBColorSpace;
  const sc = new THREE.Scene(); sc.add(new THREE.HemisphereLight(0xffffff, 0xb8c8a0, 1.5)); const d = new THREE.DirectionalLight(0xfff4e0, 1.7); d.position.set(2, 4, 3); sc.add(d);
  const cam = new THREE.PerspectiveCamera(26, 1, 0.05, 60), buf = new Uint8Array(N * N * 4), cv = document.createElement('canvas'); cv.width = cv.height = N; const ctx = cv.getContext('2d');
  const oldDay = windU.uDay.value; windU.uDay.value = 0.5;
  for (let i = 0; i < SPECIES_LIST.length; i++) {
    const sp = SPECIES_LIST[i], geo = buildPlantGeometry(sp.id, 11, 4), mat = plantMaterialFor(sp.id); mat.userData.u.uSway.value = 0;
    const m = new THREE.Mesh(geo, mat); sc.add(m);
    const bb = geo.boundingBox, c = bb.getCenter(new V3()), size = bb.getSize(new V3()), r = Math.max(size.x, size.y, size.z) * 0.62 + 0.03, dist = r / Math.tan((13 * Math.PI) / 180);
    cam.position.set(c.x + dist * 0.25, c.y + dist * 0.5, c.z + dist * 0.83); cam.lookAt(c); cam.near = dist * 0.1; cam.far = dist * 4; cam.updateProjectionMatrix();
    renderer.setRenderTarget(rt); renderer.setClearColor(0x000000, 0); renderer.clear(); renderer.render(sc, cam);
    renderer.readRenderTargetPixels(rt, 0, 0, N, N, buf); renderer.setRenderTarget(null);
    const img = ctx.createImageData(N, N);
    for (let y = 0; y < N; y++) img.data.set(buf.subarray((N - 1 - y) * N * 4, (N - y) * N * 4), y * N * 4);
    ctx.putImageData(img, 0, 0); thumbs[sp.id] = cv.toDataURL('image/png');
    sc.remove(m); geo.dispose(); mat.dispose();
    onProgress((i + 1) / SPECIES_LIST.length);
    if (i % 3 === 2) await new Promise((r) => setTimeout(r, 0));
  }
  windU.uDay.value = oldDay; rt.dispose();
  return thumbs;
}

// hosted version: keep an offline copy and pick up new versions automatically
let swUpdated = null;
if (window.__WEB && 'serviceWorker' in navigator) {
  const had = !!navigator.serviceWorker.controller;
  navigator.serviceWorker.register('sw.js').then((r) => { setInterval(() => r.update().catch(() => {}), 30 * 60 * 1000); }).catch(() => {});
  navigator.serviceWorker.addEventListener('controllerchange', () => { if (had && swUpdated) swUpdated(); });
  addEventListener('beforeinstallprompt', (e) => { e.preventDefault(); window.__pwaPrompt = e; });
}

async function boot() {
  const state = loadState();
  const demo = params.get('demo'); // preview a grown garden without touching the save
  if (demo) { state.zones = [0, 1, 2, 3, 4, 5, 6]; state.decor = ['lanternas', 'banco', 'bebedouro', 'casinha', 'carrinho', 'anao']; state.coins = 999; state.xp = 3000; state.settings.time = 'fixo'; state.hour = +(params.get('h') || 16.8); }
  const mobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || (navigator.maxTouchPoints > 1 && Math.min(screen.width, screen.height) < 820);
  let qName = params.get('q') || (state.settings.quality !== 'auto' ? state.settings.quality : mobile ? 'media' : 'alta');
  const canvas = $('#stage');
  const R = createRenderer(canvas, QUALITY[qName]);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(32, 1, 0.3, 900);
  const env = createEnv(scene, R.renderer, QUALITY.alta);
  const world = createWorld(scene, QUALITY[qName], new Set(state.zones));
  const gardener = createGardener(); gardener.group.position.set(0.3, 0, 1.6); gardener.heading = gardener.targetHeading = 0.2; scene.add(gardener.group);
  const fx = createFx(scene);
  const audio = createAudio('audio/'); audio.setVolumes(state.settings.music, state.settings.sfx);
  const nav = createNav(world.blocked);
  R.setup(scene, camera);
  const applyShadow = (q) => { const s = env.sun.shadow; if (s.mapSize.x !== q.shadows) { s.mapSize.set(q.shadows, q.shadows); if (s.map) { s.map.dispose(); s.map = null; } } };
  const setQ = (name) => { qName = name; const q = QUALITY[name]; R.setQuality(q); world.setGrass(q.grass); applyShadow(q); };
  const resize = () => { const w = canvas.clientWidth || innerWidth, h = canvas.clientHeight || innerHeight; camera.aspect = w / h; camera.fov = w < h ? 44 : 32; camera.updateProjectionMatrix(); R.resize(w, h); };
  R.w = innerWidth; R.h = innerHeight; setQ(qName); resize(); addEventListener('resize', resize);

  // ---------- camera ----------
  const cam = { yaw: 0.0, pitch: 0.6, dist: 12.5, target: new V3(0, 0.9, 0.5), focusT: 0, focus: new V3() };
  const tmp = new V3();
  const project = (v) => { tmp.copy(v).project(camera); return { x: (tmp.x * 0.5 + 0.5) * R.w, y: (-tmp.y * 0.5 + 0.5) * R.h, vis: tmp.z < 1 && Math.abs(tmp.x) < 1.15 && Math.abs(tmp.y) < 1.15 }; };

  // ---------- loading ----------
  const bar = $('#load i'), startBtn = $('#start');
  R.render(scene, camera);
  const thumbs = await makeThumbs(R.renderer, (f) => { bar.style.width = Math.round(f * 100) + '%'; });
  const ui = createUI({ project, thumbs, audio });
  const game = createGame({ scene, world, fx, audio, gardener, nav, env, ui, state });
  if (demo) { game.save = () => {}; world.spots.forEach((s, i) => { if (demo === '2' && i % 3 === 0) return; const list = SPECIES_LIST.filter((d) => d.spots.includes(s.type)); const d = list[(i * 7 + 3) % list.length]; state.plants[s.id] = { sp: d.id, seed: i + 5, grown: demo === '2' && i % 4 === 1 ? d.grow * 0.6 : d.grow, wet: i % 9 === 4 ? 0 : 300, giftT: i % 6 === 2 ? 80 : 0, ready: false }; }); }
  ui.game = game; ui.initTags(ZONES);
  ui.onQuality = (q) => setQ(q === 'auto' ? (mobile ? 'media' : 'alta') : q);
  ui.onReset = () => { game.save = () => {}; location.reload(); };
  ui.focus = (x, z) => { cam.focus.set(x, 0.8, z); cam.focusT = 3.2; };
  game.init();
  const returning = game.count() > 0 || state.stats.planted > 0;
  startBtn.textContent = returning ? 'Voltar ao meu jardim' : 'Começar';
  $('#load').hidden = true; startBtn.hidden = false;

  let started = false, startT = 0, perfT = 0, perfN = 0, perfDone = false;
  const start = () => {
    if (started) return; started = true; audio.unlock(); document.body.classList.add('playing'); startT = 0;
    if (game.away > 120 && game.count() > 0) setTimeout(() => ui.toast('Que bom te ver de volta! Veja quem está com sede.', 'info'), 1800);
    else if (!returning) setTimeout(() => ui.toast('Toque num + do canteiro para plantar sua primeira flor', 'info'), 1500);
  };
  startBtn.onclick = start;
  swUpdated = () => { if (!started) location.reload(); else ui.toast('Chegaram novidades! Elas aparecem na próxima vez que você abrir o jogo.', 'good'); };
  if (params.get('autostart')) start();

  // ---------- input ----------
  const ptrs = new Map(); let downAt = 0, moved = 0, pinch0 = 0, dist0 = 0;
  const ray = new THREE.Raycaster(), ndc = new THREE.Vector2(), plane = new THREE.Plane(new V3(0, 1, 0), 0), hit = new V3();
  const pickAt = (cx, cy) => {
    const r = canvas.getBoundingClientRect(); ndc.set(((cx - r.left) / r.width) * 2 - 1, -((cy - r.top) / r.height) * 2 + 1); ray.setFromCamera(ndc, camera);
    const hits = ray.intersectObjects(world.pickables.filter((m) => m.visible || !state.zones.includes(m.userData.spot.zone)), false);
    const th = ray.intersectObjects(Object.values(world.things).map((t) => t.pick), false);
    if (th.length && (!hits.length || th[0].distance < hits[0].distance)) return { thing: th[0].object.userData.thing };
    if (hits.length) return { spot: hits[0].object.userData.spot };
    if (ray.ray.intersectPlane(plane, hit)) return { ground: hit.clone() };
    return {};
  };
  canvas.addEventListener('pointerdown', (e) => { canvas.setPointerCapture(e.pointerId); ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY }); if (ptrs.size === 1) { downAt = performance.now(); moved = 0; } else if (ptrs.size === 2) { const [a, b] = [...ptrs.values()]; pinch0 = Math.hypot(a.x - b.x, a.y - b.y); dist0 = cam.dist; moved = 99; } });
  canvas.addEventListener('pointermove', (e) => {
    const p = ptrs.get(e.pointerId);
    if (!p) { if (e.pointerType === 'mouse' && started) { const h = pickAt(e.clientX, e.clientY); canvas.style.cursor = h.spot || h.thing ? 'pointer' : 'grab'; } return; }
    const dx = e.clientX - p.x, dy = e.clientY - p.y; p.x = e.clientX; p.y = e.clientY;
    if (ptrs.size === 1) { moved += Math.abs(dx) + Math.abs(dy); if (moved > 8) { cam.yaw -= dx * 0.006; cam.pitch = clamp(cam.pitch + dy * 0.004, 0.16, 1.3); } }
    else if (ptrs.size === 2) { const [a, b] = [...ptrs.values()]; const d = Math.hypot(a.x - b.x, a.y - b.y); if (pinch0 > 0) cam.dist = clamp(dist0 * (pinch0 / d), 3.5, 34); }
  });
  const up = (e) => {
    const had = ptrs.delete(e.pointerId); if (!had) return;
    if (ptrs.size === 0 && moved <= 8 && performance.now() - downAt < 600 && started) {
      if (document.body.classList.contains('photo')) return;
      if (ui.open === 'modal') return;
      const h = pickAt(e.clientX, e.clientY);
      if (h.thing) game.tapThing(h.thing);
      else if (h.spot) game.tapSpot(h.spot);
      else if (h.ground) {
        const g = h.ground, zn = zoneAt(g.x, g.z);
        if (ui.open) { ui.closeCards(); return; }
        if (zn > 0 && !state.zones.includes(zn)) game.offerZone(zn);
        else if (Math.abs(g.x) < 12.4 && g.z > -9 && g.z < 14.5) { game.tapGround(g.x, g.z); fx.sparkle(new V3(g.x, 0.05, g.z), 4, 0xffffff, 0.12); }
      }
    }
  };
  canvas.addEventListener('pointerup', up); canvas.addEventListener('pointercancel', (e) => ptrs.delete(e.pointerId));
  canvas.addEventListener('wheel', (e) => { e.preventDefault(); cam.dist = clamp(cam.dist * Math.exp(e.deltaY * 0.0011), 3.5, 34); }, { passive: false });
  addEventListener('keydown', (e) => { if (e.key === 'Escape') { ui.closeCards(); ui.closeModal(); document.body.classList.remove('photo'); } });
  document.addEventListener('visibilitychange', () => { if (document.hidden) { game.save(); audio.pause(true); } else audio.pause(false); });
  addEventListener('pagehide', () => game.save());

  // ---------- loop ----------
  let last = performance.now(), time = 0, focusY = 0.5, ready = 0;
  let frozen = 0; const maxFrames = +(params.get('frames') || 0);
  const frame = (now) => {
    if (maxFrames && started && ++frozen > maxFrames) { window.__frozen = true; return; }
    requestAnimationFrame(frame);
    let dt = Math.min(0.1, (now - last) / 1000); last = now; if (document.hidden) return;
    const speed = +(params.get('speed') || 1); time += dt; windU.uTime.value = time;
    if (started) { for (let i = 0; i < speed; i++) game.update(dt); startT += params.get('nointro') ? 9 : dt; }
    gardener.update(dt, time);
    env.setHour(state.hour); world.setNight(env.night); world.update(dt, time); env.update(dt, camera.position);
    fx.update(dt, time, env, camera, world.chimney); audio.update(env.night, fx.rain);
    windU.uWind.value = 1 + fx.rain * 0.8;
    // camera
    const gp = gardener.group.position, k = 1 - Math.exp(-3.2 * dt);
    if (!started) { cam.yaw = Math.sin(time * 0.06) * 0.55; tmp.set(0, 1.0, 1.5); cam.target.lerp(tmp, k); }
    else if (cam.focusT > 0) { cam.focusT -= dt; cam.target.lerp(cam.focus, k); }
    else { tmp.set(gp.x, gp.y + 0.95, gp.z); cam.target.lerp(tmp, k); }
    const intro = started ? smooth(startT / 2.2) : 0, dist = lerp(27, cam.dist, intro), pitch = lerp(0.5, cam.pitch, intro);
    const cp = Math.cos(pitch); camera.position.set(cam.target.x + Math.sin(cam.yaw) * cp * dist, cam.target.y + Math.sin(pitch) * dist, cam.target.z + Math.cos(cam.yaw) * cp * dist);
    camera.lookAt(cam.target);
    if (R.final) { tmp.set(gp.x, gp.y + 0.8, gp.z).project(camera); focusY += ((started ? clamp(tmp.y * 0.5 + 0.5, 0.3, 0.7) : 0.5) - focusY) * k; R.final.uniforms.uFocus.value = focusY; }
    R.render(scene, camera);
    if (started) ui.frame(ZONES, V3);
    // adaptive quality
    if (started && !perfDone && state.settings.quality === 'auto' && !params.get('q')) { perfT += dt; perfN++; if (perfT > 4) { const avg = perfT / perfN; perfDone = true; if (avg > 0.036) { setQ(qName === 'alta' ? 'media' : 'baixa'); perfDone = false; perfT = 0; perfN = 0; if (qName === 'baixa') perfDone = true; } } }
    if (++ready === 3) { document.title = document.title; window.__ready = true; }
  };
  requestAnimationFrame(frame);
  window.__game = { game, state, cam, gardener, world, env, ui, start, setQ, fx };
}
boot().catch((e) => { console.error(e); const m = document.querySelector('#err'); if (m) { m.hidden = false; m.textContent = 'Não foi possível abrir o jardim neste aparelho: ' + e.message; } });
