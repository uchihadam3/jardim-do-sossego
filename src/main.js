import * as THREE from 'three';
import { createRenderer, QUALITY } from './render.js';
import { createEnv } from './env.js';
import { createWorld, ZONES, zoneAt, LAND } from './world.js';
import { createGardener } from './character.js';
import { createFx } from './fx.js';
import { createAudio } from './audio.js';
import { createNav } from './nav.js';
import { createUI } from './ui.js';
import { createGame, normalize, STYLE } from './game.js';
import { createStore } from './save.js';
import { SPECIES_LIST, buildPlantGeometry, plantMaterialFor } from './species.js';
import { windU } from './plantmat.js';
import { clamp, lerp, smooth } from './util.js';
import { createCritters, critterModel, CRITTERS } from './critters.js';
import { DECO, buildDeco } from './decor.js';
import { FURN_BY, buildFurn } from './furncore.js';
import { WEAR0, resolveWear, WARDROBE } from './wardrobe.js';
import { createHouse } from './house.js';
import { createVisitor } from './visitor.js';

const NEWS_V = 1; // raise it to show the “what is new” note once to returning players
const V3 = THREE.Vector3;
const $ = (s) => document.querySelector(s);
const params = new URLSearchParams(location.search);

// Little pictures for the menus (plants, visitors, ornaments, furniture, clothes). Each one is rendered the first time it is asked for.
function createThumbs(renderer) {
  const cache = {}, N = 168, rt = new THREE.WebGLRenderTarget(N, N, { samples: 4 }); rt.texture.colorSpace = THREE.SRGBColorSpace;
  const sc = new THREE.Scene(); sc.add(new THREE.HemisphereLight(0xffffff, 0xb8c8a0, 1.5)); const d = new THREE.DirectionalLight(0xfff4e0, 1.7); d.position.set(2, 4, 3); sc.add(d);
  const cam = new THREE.PerspectiveCamera(26, 1, 0.05, 60), buf = new Uint8Array(N * N * 4), cv = document.createElement('canvas'); cv.width = cv.height = N; const ctx = cv.getContext('2d'), cc = new THREE.Color();
  const grab = () => { const old = renderer.getRenderTarget(), a0 = renderer.getClearAlpha(); renderer.getClearColor(cc); const day = windU.uDay.value; windU.uDay.value = 0.5;
    renderer.setRenderTarget(rt); renderer.setClearColor(0x000000, 0); renderer.clear(); renderer.render(sc, cam); renderer.readRenderTargetPixels(rt, 0, 0, N, N, buf); renderer.setRenderTarget(old); renderer.setClearColor(cc, a0); windU.uDay.value = day;
    const img = ctx.createImageData(N, N); for (let y = 0; y < N; y++) img.data.set(buf.subarray((N - 1 - y) * N * 4, (N - y) * N * 4), y * N * 4); ctx.putImageData(img, 0, 0); return cv.toDataURL('image/png'); };
  const aim = (ctr, r, dx, dy, dz) => { const dist = r / Math.tan((13 * Math.PI) / 180), l = Math.hypot(dx, dy, dz); cam.position.set(ctr.x + (dx / l) * dist, ctr.y + (dy / l) * dist, ctr.z + (dz / l) * dist); cam.lookAt(ctr); cam.near = dist * 0.1; cam.far = dist * 4; cam.updateProjectionMatrix(); };
  const shootObj = (m, k, dx, dy, dz) => { sc.add(m); m.updateMatrixWorld(true); const bb = new THREE.Box3().setFromObject(m), ctr = bb.getCenter(new V3()), size = bb.getSize(new V3()); aim(ctr, Math.max(size.x, size.y, size.z) * k + 0.02, dx, dy, dz); const u = grab(); sc.remove(m); return u; };
  let pg = null;
  const VIEW = { top: [1.2, 0.42, 0.5], dress: [0.86, 0.95, 0.5], bottom: [0.56, 0.72, 0.5], apron: [0.86, 0.95, 0.5], shoes: [0.14, 0.3, 0.7], legs: [0.25, 0.42, 0.6], hair: [1.6, 0.36, 0.5], hat: [1.68, 0.4, 0.5], face: [1.62, 0.3, 0.3], ears: [1.6, 0.26, 1.0], neck: [1.38, 0.3, 0.35], hands: [0.95, 0.42, 0.5], bag: [1.05, 0.6, 0.6] };
  const make = (key) => {
    if (key.startsWith('c:')) return shootObj(critterModel(key.slice(2)), 0.7, 0.55, 0.45, 0.7);
    if (key.startsWith('d:')) return shootObj(buildDeco(key.slice(2)), 0.62, 0.45, 0.42, 0.78);
    if (key.startsWith('f:')) { const def = FURN_BY[key.slice(2)]; if (!def) return ''; const m = buildFurn(def.id); for (const g of m.userData.glow) g.emissiveIntensity = g.userData.e * 0.8; return def.kind === 'rug' ? shootObj(m, 0.56, 0.2, 1, 0.55) : def.kind === 'wall' ? shootObj(m, 0.58, 0.3, 0.2, 1) : shootObj(m, 0.6, 0.5, 0.42, 0.78); }
    if (key.startsWith('w:')) { const [, slot, id] = key.split(':'), v = VIEW[slot] || VIEW.dress; if (!pg) pg = createGardener(); const wear = { ...WEAR0, hat: 'nenhum', [slot]: id }, tint = {};
      if (slot === 'top') { wear.bottom = 'rodada'; tint['bottom:rodada'] = { c: 0xd9dfd2, p: 'liso' }; } else if (slot === 'bottom') { wear.top = 'camiseta'; tint['top:camiseta'] = { c: 0xffffff }; } else if (slot === 'shoes' || slot === 'legs') { wear.bottom = 'curta'; tint['bottom:curta'] = { c: 0xd9dfd2 }; if (slot === 'legs') wear.shoes = 'sapatilha'; }
      else if (slot === 'neck' || slot === 'hands') { wear.top = 'regata'; wear.bottom = 'rodada'; } else if (slot === 'ears') wear.hair = 'coque';
      const back = (slot === 'bag' && (id === 'mochila' || id === 'asas')) || (slot === 'hair' && id !== 'tranca' && id !== 'trancas' && id !== 'curto' && id !== 'solto' && id !== 'cacheado' && id !== 'longo' && id !== 'chiquinhas');
      pg.wear(resolveWear(wear, tint)); pg.heading = pg.targetHeading = 0; pg.group.rotation.y = 0; sc.add(pg.group); for (let i = 0; i < 3; i++) pg.update(0.016, 1); pg.group.updateMatrixWorld(true);
      const yaw = back ? 2.5 : v[2]; aim(new V3(0, v[0], 0), v[1], Math.sin(yaw), 0.16, Math.cos(yaw)); const u = grab(); sc.remove(pg.group); return u; }
    const sp = SPECIES_LIST.find((s) => s.id === key); if (!sp) return '';
    const geo = buildPlantGeometry(sp.id, 11, 4), mat = plantMaterialFor(sp.id); mat.userData.u.uSway.value = 0; const m = new THREE.Mesh(geo, mat); sc.add(m);
    const bb = geo.boundingBox || (geo.computeBoundingBox(), geo.boundingBox), c = bb.getCenter(new V3()), size = bb.getSize(new V3()); aim(c, Math.max(size.x, size.y, size.z) * 0.62 + 0.03, 0.25, 0.5, 0.83);
    const u = grab(); sc.remove(m); geo.dispose(); mat.dispose(); return u;
  };
  const T = { has: (k) => k in cache, get: (k) => { if (!(k in cache)) { try { cache[k] = make(k); } catch (e) { console.error('thumb', k, e); cache[k] = ''; } } return cache[k]; }, queue: [], warm: () => { if ((T._w = (T._w || 0) + 1) % 12) return; const k = T.queue.shift(); if (k && !(k in cache)) T.get(k); } };
  return T;
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
  const store = createStore();
  const state = normalize((await store.load()) || window.__SAVE);
  const demo = params.get('demo'); // preview a grown garden without touching the save
  if (demo) { state.zones = ZONES.map((z) => z.id); state.decor = ['lanternas', 'banco', 'bebedouro', 'casinha', 'carrinho', 'anao']; state.coins = 999; state.xp = 3000; state.settings.time = 'fixo'; state.hour = +(params.get('h') || 16.8); }
  const mobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || (navigator.maxTouchPoints > 1 && Math.min(screen.width, screen.height) < 820);
  let qName = params.get('q') || (state.settings.quality !== 'auto' ? state.settings.quality : mobile ? 'media' : 'alta');
  const canvas = $('#stage');
  const R = createRenderer(canvas, QUALITY[qName]);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(32, 1, 0.3, 900);
  const env = createEnv(scene, R.renderer, QUALITY.alta);
  const house = createHouse();
  const world = createWorld(scene, QUALITY[qName], new Set(state.zones), { indoor: (w) => house.makeSpots(w) });
  const gardener = createGardener(); gardener.group.position.set(0.3, 0, 1.6); gardener.heading = gardener.targetHeading = 0.2; scene.add(gardener.group);
  const fx = createFx(scene);
  const audio = createAudio('audio/'); audio.setVolumes(state.settings.music, state.settings.sfx);
  const nav = createNav(world.blocked, { x0: -LAND, nx: Math.round((2 * LAND) / 0.4) + 1, guard: 22000 });
  R.setup(scene, camera);
  const applyShadow = (q) => { const s = env.sun.shadow; if (s.mapSize.x !== q.shadows) { s.mapSize.set(q.shadows, q.shadows); if (s.map) { s.map.dispose(); s.map = null; } } };
  const setQ = (name) => { qName = name; const q = QUALITY[name]; R.setQuality(q); world.setGrass(q.grass); applyShadow(q); };
  const resize = () => { const w = canvas.clientWidth || innerWidth, h = canvas.clientHeight || innerHeight; camera.aspect = w / h; camera.fov = w < h ? 44 : 32; camera.updateProjectionMatrix(); R.resize(w, h); };
  R.w = innerWidth; R.h = innerHeight; setQ(qName); resize(); addEventListener('resize', resize);

  // ---------- camera ----------
  const cam = { dress: 0, yaw: 0.0, pitch: 0.6, dist: 12.5, target: new V3(0, 0.9, 0.5), focusT: 0, focus: new V3() };
  const tmp = new V3();
  const project = (v) => { tmp.copy(v).project(camera); return { x: (tmp.x * 0.5 + 0.5) * R.w, y: (-tmp.y * 0.5 + 0.5) * R.h, vis: tmp.z < 1 && Math.abs(tmp.x) < 1.15 && Math.abs(tmp.y) < 1.15 }; };

  // ---------- loading ----------
  const bar = $('#load i'), startBtn = $('#start');
  R.render(scene, camera);
  const thumbs = createThumbs(R.renderer); bar.style.width = '100%';
  const ui = createUI({ project, thumbs, audio });
  const game = createGame({ scene, world, fx, audio, gardener, nav, env, ui, state, store, house });
  // going in and out of the house: another scene, another camera angle
  const camSave = { out: null, in: { yaw: 0, pitch: 0.8, dist: 11.5 } };
  game.onWarp = (dx, dy, dz) => { cam.target.x += dx; cam.target.y += dy; cam.target.z += dz; }; // changing floor: the view goes with her
  game.onScene = (inside) => { const from = inside ? 'out' : 'in', to = inside ? 'in' : 'out'; camSave[from] = { yaw: cam.yaw, pitch: cam.pitch, dist: cam.dist }; if (camSave[to]) Object.assign(cam, camSave[to]);
    (inside ? house.scene : scene).add(gardener.group); const p = gardener.group.position; cam.target.set(p.x, p.y + 0.95, p.z); cam.focusT = 0; };
  if (demo) { game.save = () => {}; world.spots.forEach((s, i) => { if (s.indoor || (demo === '2' && i % 3 === 0)) return; const list = SPECIES_LIST.filter((d) => d.spots.includes(s.type)); const d = list[(i * 7 + 3) % list.length]; state.plants[s.id] = { sp: d.id, seed: i + 5, grown: demo === '2' && i % 4 === 1 ? d.grow * 0.6 : d.grow, wet: i % 9 === 4 ? 0 : 300, giftT: i % 6 === 2 ? 80 : 0, ready: false }; }); }
  ui.game = game; ui.initTags(ZONES);
  ui.onQuality = (q) => setQ(q === 'auto' ? (mobile ? 'media' : 'alta') : q);
  ui.onReset = async () => { await game.reset(); location.reload(); };
  ui.store = store;
  ui.focus = (x, z) => { cam.focus.set(x, 0.8, z); cam.focusT = 3.2; };
  const critters = createCritters(scene, world, { S: state, G: game, env, fx, ui, audio });
  const visitor = createVisitor(scene, { S: state, G: game, env, fx, ui, audio, world, gardener, nav }); game.visitor = visitor;
  game.init();
  thumbs.queue = SPECIES_LIST.filter((s) => s.lvl <= game.level() + 2).map((s) => s.id); // filled in little by little while she plays
  const returning = game.count() > 0 || state.stats.planted > 0;
  startBtn.textContent = returning ? 'Voltar ao meu jardim' : 'Começar';
  $('#load').hidden = true; startBtn.hidden = false;

  let started = false, startT = 0, perfT = 0, perfN = 0, perfDone = false;
  const start = () => {
    if (started) return; started = true; audio.unlock(); document.body.classList.add('playing'); startT = 0;
    if (game.away > 120 && game.count() > 0) setTimeout(() => ui.toast(game.awayGifts ? `Que bom te ver de volta! ${game.awayGifts} ${game.awayGifts === 1 ? 'planta guardou presente' : 'plantas guardaram presentes'} para você.` : 'Que bom te ver de volta! Veja quem está com sede.', 'info'), 1800);
    else if (!returning) setTimeout(() => ui.toast('Toque num + do canteiro para plantar sua primeira flor', 'info'), 1500);
    if (returning && (state.news || 0) < NEWS_V && !params.get('nointro')) setTimeout(() => { if (!ui.open) ui.news(); }, 3200); state.news = NEWS_V;
  };
  startBtn.onclick = start;
  swUpdated = () => { if (!started) location.reload(); else ui.toast('Chegaram novidades! Elas aparecem na próxima vez que você abrir o jogo.', 'good'); };
  if (params.get('autostart')) start();

  // ---------- input ----------
  const ptrs = new Map(); let downAt = 0, moved = 0, pinch0 = 0, dist0 = 0;
  const ray = new THREE.Raycaster(), ndc = new THREE.Vector2(), plane = new THREE.Plane(new V3(0, 1, 0), 0), hit = new V3();
  const elianePick = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 1.75, 8), new THREE.MeshBasicMaterial({ visible: false })); elianePick.position.y = 0.875; gardener.group.add(elianePick);
  // how far the camera may pull back: enough to see the whole property (or the whole house) at once, also on an upright phone
  const maxDist = () => { const half = Math.tan((16 * Math.PI) / 180) * Math.min(1.9, camera.aspect); return game.inside ? clamp(17 / half, 40, 130) : clamp(33 / half, 64, 260); }; // the whole width has to fit, even on a phone held upright
  const pickAt = (cx, cy, fat = 0) => {
    const r = canvas.getBoundingClientRect(); ndc.set(((cx - r.left) / r.width) * 2 - 1, -((cy - r.top) / r.height) * 2 + 1); ray.setFromCamera(ndc, camera);
    if (game.inside && fat) { const h0 = pickAt(cx, cy); if (!h0.ground) return h0; // a finger is wide: when the tap lands just beside a piece of furniture, take the nearest one
      for (const rad of [fat * 0.5, fat]) { let best = null; for (let k = 0; k < 8; k++) { const h = pickAt(cx + Math.cos(k * 0.785) * rad, cy + Math.sin(k * 0.785) * rad); if ((h.hitem || h.spot || h.stairs) && (!best || h.dist < best.dist)) best = h; } if (best) return best; }
      return pickAt(cx, cy); }
    if (game.inside) { const sh = ray.intersectObjects(house.spots.filter((s) => s.active && !s.hidden).map((s) => s.pick), false), ih = ray.intersectObjects(house.items.filter((it) => !it.wall || it.wall.group.visible).map((it) => it.pick), false), eh = ray.intersectObject(elianePick, false);
      const st = house.stairs() ? ray.intersectObjects(house.stairPicks, false) : [];
      const ds = sh.length ? sh[0].distance - 0.25 : 1e9, di = ih.length ? ih[0].distance : 1e9, de = eh.length && gardener.state === 'idle' ? eh[0].distance : 1e9, m = Math.min(ds, di, de);
      if (st.length && st[0].distance < m) return { stairs: st[0].object.userData.stairs, dist: st[0].distance };
      if (m < 1e9) return m === ds ? { spot: sh[0].object.userData.spot, dist: m } : m === de ? { thing: 'eliane', dist: m } : { hitem: ih[0].object.userData.item, dist: m };
      return ray.ray.intersectPlane(plane, hit) ? { ground: hit.clone() } : {}; }
    const sg = ray.intersectObjects(world.signPicks.filter((m) => !state.zones.includes(m.userData.zoneSign)), false);
    if (sg.length) return { sign: sg[0].object.userData.zoneSign };
    const hits = ray.intersectObjects(world.pickables.filter((m) => m.visible), false);
    const ih = ray.intersectObjects(world.items.map((it) => it.pick), false);
    if (ih.length && (!hits.length || ih[0].distance < hits[0].distance)) return { item: ih[0].object.userData.item };
    const th = ray.intersectObjects([...Object.values(world.things).map((t) => t.pick), ...(visitor.pick ? [visitor.pick] : [])], false);
    const eh = ray.intersectObject(elianePick, false);
    if (eh.length && (!hits.length || eh[0].distance < hits[0].distance) && (!th.length || eh[0].distance < th[0].distance) && gardener.state === 'idle') return { thing: 'eliane' };
    if (th.length && (!hits.length || th[0].distance < hits[0].distance)) return { thing: th[0].object.userData.thing };
    if (hits.length) return { spot: hits[0].object.userData.spot };
    if (ray.ray.intersectPlane(plane, hit)) return { ground: hit.clone() };
    return {};
  };
  let x0 = 0, y0 = 0, slop = 8, dragPl = null;
  const groundAt = (cx, cy) => { const r = canvas.getBoundingClientRect(); ndc.set(((cx - r.left) / r.width) * 2 - 1, -((cy - r.top) / r.height) * 2 + 1); ray.setFromCamera(ndc, camera); return ray.ray.intersectPlane(plane, hit) ? hit : null; };
  canvas.addEventListener('pointerdown', (e) => { canvas.setPointerCapture(e.pointerId); ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY }); if (ptrs.size === 1) { downAt = performance.now(); moved = 0; x0 = e.clientX; y0 = e.clientY; slop = e.pointerType === 'mouse' ? 7 : 16; dragPl = null;
      const pl = game.placing; if (pl && pl.x != null && started) { const g = groundAt(e.clientX, e.clientY), gp = pl.group ? pl.group.position : pl; if (g && Math.hypot(g.x - gp.x, g.z - gp.z) < (pl.def.r ?? Math.max(pl.def.w || 0.6, pl.def.d || 0.6) / 2) + 0.55) dragPl = { ox: pl.x - g.x, oz: pl.z - g.z }; } } // a finger on the piece being placed drags it
 else if (ptrs.size === 2) { const [a, b] = [...ptrs.values()]; pinch0 = Math.hypot(a.x - b.x, a.y - b.y); dist0 = cam.dist; moved = 99; } });
  canvas.addEventListener('pointermove', (e) => {
    const p = ptrs.get(e.pointerId);
    if (!p) { if (e.pointerType === 'mouse' && started) { const h = pickAt(e.clientX, e.clientY); canvas.style.cursor = h.spot || h.thing || h.item || h.hitem || h.stairs || h.sign != null ? 'pointer' : 'grab'; } return; }
    const dx = e.clientX - p.x, dy = e.clientY - p.y; p.x = e.clientX; p.y = e.clientY;
    if (ptrs.size === 1) { moved = Math.max(moved, Math.hypot(e.clientX - x0, e.clientY - y0));
      if (dragPl && game.placing) { if (moved > slop * 0.5) { const g = groundAt(e.clientX, e.clientY); if (g) game.placer().move(g.x + dragPl.ox, g.z + dragPl.oz); moved = Math.max(moved, 99); } }
      else if (moved > slop) { cam.yaw -= dx * 0.006; cam.pitch = clamp(cam.pitch + dy * 0.004, 0.16, 1.3); } }
    else if (ptrs.size === 2) { const [a, b] = [...ptrs.values()]; const d = Math.hypot(a.x - b.x, a.y - b.y); if (pinch0 > 0) cam.dist = clamp(dist0 * (pinch0 / d), 3.5, maxDist()); }
  });
  const up = (e) => {
    const had = ptrs.delete(e.pointerId); if (!had) return;
    if (ptrs.size === 0) dragPl = null;
    if (ptrs.size === 0 && moved <= slop && performance.now() - downAt < 800 && started) {
      if (document.body.classList.contains('photo')) return;
      if (ui.open === 'modal') return;
      if (game.placing) { const r = canvas.getBoundingClientRect(); ndc.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1); ray.setFromCamera(ndc, camera); if (ray.ray.intersectPlane(plane, hit)) game.placer().move(hit.x, hit.z); return; }
      const h = pickAt(e.clientX, e.clientY, e.pointerType === 'mouse' ? 0 : 20);
      if (h.sign != null) game.offerZone(h.sign);
      else if (h.item) game.tapItem(h.item);
      else if (h.stairs) { audio.sfx('click', 0.35); game.home.stairs(h.stairs); }
      else if (h.hitem) { audio.sfx('click', 0.35); ui.furnCard(h.hitem); }
      else if (h.thing) game.tapThing(h.thing);
      else if (h.spot) game.tapSpot(h.spot);
      else if (h.ground) {
        const g = h.ground, zn = zoneAt(g.x, g.z);
        if (ui.open) { ui.closeCards(); return; }
        if (game.inside) { if (!game.home.tapFloor(g.x, g.z) && house.roomAt(g.x, g.z)) { game.tapGround(g.x, g.z); fx.sparkle(new V3(g.x, 0.05, g.z), 4, 0xffffff, 0.12); } return; }
        if (Math.abs(g.x) < LAND && g.z > -9 && g.z < 14.5) { game.tapGround(g.x, g.z); fx.sparkle(new V3(g.x, 0.05, g.z), 4, 0xffffff, 0.12); }
      }
    }
  };
  canvas.addEventListener('pointerup', up); canvas.addEventListener('pointercancel', (e) => ptrs.delete(e.pointerId));
  canvas.addEventListener('wheel', (e) => { e.preventDefault(); cam.dist = clamp(cam.dist * Math.exp(e.deltaY * 0.0011), 3.5, maxDist()); }, { passive: false });
  addEventListener('keydown', (e) => { if (e.key === 'Escape' && game.placing) { game.placer().cancel(); return; } if (e.key === 'Escape') { ui.closeCards(); ui.closeModal(); document.body.classList.remove('photo'); } });
  document.addEventListener('visibilitychange', () => { if (document.hidden) { game.save(true); audio.pause(true); } else audio.pause(false); });
  addEventListener('pagehide', () => game.save(true)); addEventListener('beforeunload', () => game.save(true));

  // ---------- loop ----------
  let last = performance.now(), time = 0, focusY = 0.5, ready = 0;
  let frozen = 0; const maxFrames = +(params.get('frames') || 0);
  const frame = (now) => {
    if (maxFrames && started && ++frozen > maxFrames) { window.__frozen = true; return; }
    requestAnimationFrame(frame);
    let dt = Math.min(0.1, Math.max(0, (now - last) / 1000)); last = now; // the first callback can carry a timestamp older than `last` if (document.hidden) return;
    const speed = +(params.get('speed') || 1); time += dt; windU.uTime.value = time;
    if (started) { for (let i = 0; i < speed; i++) game.update(dt); startT += params.get('nointro') ? 9 : dt; }
    gardener.update(dt, time);
    env.setHour(state.hour); world.setNight(env.night); world.update(dt, time); env.update(dt, camera.position);
    { const se = game.sys.season().id; if (se !== fx.season) { world.setSeason(se, fx.season === -1); fx.season = se; } }
    if (started && !game.inside) { critters.update(dt, time); for (let i = 0; i < speed; i++) visitor.update(dt, time); }
    if (game.inside) house.update(dt, time, camera.position, gardener.group.position, env.night, state.hour);
    fx.update(dt, time, env, camera, world.chimney); audio.update(env.night, fx.rain, game.inside);
    windU.uWind.value = 1 + fx.rain * 0.8;
    // camera
    const gp = gardener.group.position, k = 1 - Math.exp(-3.2 * dt);
    if (!started) { cam.yaw = Math.sin(time * 0.06) * 0.55; tmp.set(0, 1.0, 1.5); cam.target.lerp(tmp, k); }
    else if (ui.dressing) { if (R.w >= 700) { const vw = 2 * 5.4 * Math.tan((16 * Math.PI) / 180) * camera.aspect, off = (Math.min(440, R.w * 0.46) / 2 / R.w) * vw; tmp.set(gp.x + Math.cos(cam.yaw) * off, gp.y + 0.85, gp.z - Math.sin(cam.yaw) * off); } else tmp.set(gp.x, gp.y - 0.5, gp.z); cam.target.lerp(tmp, k); }
    else if (game.placing) { tmp.set(game.placing.x, 0.6, game.placing.z); cam.target.lerp(tmp, k); }
    else if (cam.focusT > 0) { cam.focusT -= dt; cam.target.lerp(cam.focus, k); }
    else { const far = game.inside ? 0 : clamp((cam.dist - 30) / 28, 0, 1) * 0.85; tmp.set(lerp(gp.x, 0, far), gp.y + 0.95, lerp(gp.z, 2.7, far)); cam.target.lerp(tmp, k); } // from far away the view settles on the middle of the garden
    cam.dress += ((ui.dressing ? 1 : 0) - cam.dress) * k; if (ui.dressing && !cam.wasDress) { let d = gardener.heading + 0.35 - cam.yaw; d = Math.atan2(Math.sin(d), Math.cos(d)); cam.yaw += d; } cam.wasDress = ui.dressing;
    const intro = started ? smooth(startT / 2.2) : 0, dist = lerp(lerp(27, cam.dist, intro), R.w < 700 ? 6.2 : 5.4, cam.dress), pitch = lerp(lerp(0.5, cam.pitch, intro), 0.2, cam.dress);
    const cp = Math.cos(pitch); camera.position.set(cam.target.x + Math.sin(cam.yaw) * cp * dist, cam.target.y + Math.sin(pitch) * dist, cam.target.z + Math.cos(cam.yaw) * cp * dist);
    camera.lookAt(cam.target);
    if (!game.inside) { const f = scene.fog, fn = Math.max(38, dist * 1.6), ff = Math.max(230, dist * 6.5); if (f && Math.abs(f.near - fn) > 0.5) { f.near = fn; f.far = ff; } // the haze and the shadows reach as far as the eye
      const sh = env.sun.shadow.camera, ext = clamp(Math.round(dist * 0.62), 19, 62), tx = Math.round(cam.target.x / 2) * 2, tz = Math.round(cam.target.z / 2) * 2, st = env.sun.target.position; if (st.x !== tx || st.z !== tz) { st.set(tx, 0, tz); env.sun.target.updateMatrixWorld(); }
      if (sh.right !== ext) { sh.left = -ext; sh.right = ext; sh.top = ext; sh.bottom = -ext; sh.far = 90 + ext; sh.updateProjectionMatrix(); } }
    { const nr = cam.dress > 0.5 ? Math.max(0.3, camera.position.distanceTo(gp) - 1.4) : 0.3; if (Math.abs(nr - camera.near) > 0.01) { camera.near = nr; camera.updateProjectionMatrix(); } } // in the dressing room nothing stands between her and the camera
    if (R.final) { tmp.set(gp.x, gp.y + 0.8, gp.z).project(camera); focusY += ((started ? clamp(tmp.y * 0.5 + 0.5, 0.3, 0.7) : 0.5) - focusY) * k; R.final.uniforms.uFocus.value = focusY; }
    R.render(game.inside ? house.scene : scene, camera);
    if (started) ui.frame(ZONES, V3);
    // adaptive quality
    if (started && !perfDone && state.settings.quality === 'auto' && !params.get('q')) { perfT += dt; perfN++; if (perfT > 4) { const avg = perfT / perfN; perfDone = true; if (avg > 0.036) { setQ(qName === 'alta' ? 'media' : 'baixa'); perfDone = false; perfT = 0; perfN = 0; if (qName === 'baixa') perfDone = true; } } }
    if (++ready === 3) { document.title = document.title; window.__ready = true; }
  };
  requestAnimationFrame(frame);
  window.__game = { game, state, cam, gardener, world, env, ui, start, setQ, fx, project, SPECIES_LIST, buildPlantGeometry, house, camera, WARDROBE, STYLE, visitor };
}
boot().catch((e) => { console.error(e); const m = document.querySelector('#err'); if (m) { m.hidden = false; m.textContent = 'Não foi possível abrir o jardim neste aparelho: ' + e.message; } });
