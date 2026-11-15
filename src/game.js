import * as THREE from 'three';
import { SPECIES, SPECIES_LIST, buildPlantGeometry, plantMaterialFor } from './species.js';
import { ZONES, DECOR, groundY, zoneAt } from './world.js';
import { bubbleTextures } from './fx.js';
import { clamp, lerp, easeOutBack, T, RX, RY, mul, col, mulberry } from './util.js';
import { Builder } from './builder.js';
import { makePlantMaterial } from './plantmat.js';
import { attachSystems } from './systems.js';
import { DECO, DECO_BY, buildDeco } from './decor.js';

const SAVE_KEY = 'jardim-do-sossego-v1';
export const WATER_MAX = 2 * 3600;
export const LV = [0, 60, 180, 380, 680, 1100, 1650, 2350, 3200, 4200, 5400, 6800, 8500, 10500, 13000, 16000, 20000, 25000];
export const UPGRADES = [
  { id: 'can1', name: 'Regador de cobre', price: 450, desc: 'Rega uma área maior de uma só vez.', need: null },
  { id: 'can2', name: 'Regador dourado', price: 1800, desc: 'Rega longe e a água dura o dobro.', need: 'can1' },
  { id: 'sprinkler', name: 'Aspersores automáticos', price: 7500, desc: 'O jardim inteiro se rega sozinho.', need: 'can2' },
];
// "do seu jeito": Eliane's wardrobe and the colours of the house. opts: [id, name, value, value2]; the first of each list is free.
// lv[i] = level at which option i shows up in the shop (so there is always something new to unlock).
export const STYLE = {
  dress: { name: 'Cor do vestido', tab: 'roupas', price: 180, lv: [1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], opts: [['salvia', 'Verde-sálvia', 0x7fa08a], ['ceu', 'Azul-céu', 0x7fa8c8], ['rosa', 'Rosa-antigo', 0xd89aa4], ['manteiga', 'Manteiga', 0xe8cf7a], ['lilas', 'Lilás', 0xa894c8], ['cereja', 'Cereja', 0xc8504a], ['menta', 'Menta', 0x9fd0b8], ['pessego', 'Pêssego', 0xf2b48a], ['marinho', 'Marinho', 0x3f5a8a], ['branco', 'Branco', 0xf6f1e6], ['uva', 'Uva', 0x7a4a8a], ['turquesa', 'Turquesa', 0x4aa8a8], ['coral', 'Coral', 0xe8806a]] },
  pattern: { name: 'Estampa', tab: 'roupas', price: 260, lv: [1, 2, 3, 4, 5, 6, 8, 10], opts: [['liso', 'Lisa', 'liso'], ['poa', 'Poá', 'poa'], ['listras', 'Listras', 'listras'], ['xadrez', 'Xadrez', 'xadrez'], ['florido', 'Florida', 'florido'], ['margaridas', 'Margaridas', 'margaridas'], ['coracoes', 'Corações', 'coracoes'], ['folhas', 'Folhagem', 'folhas']] },
  apron: { name: 'Avental', tab: 'roupas', price: 220, lv: [1, 2, 4, 6, 8], opts: [['sem', 'Sem avental', null], ['branco', 'Branco', 0xfaf6ee], ['rosa', 'Rosinha', 0xf9d8e0], ['azul', 'Azulzinho', 0xd4e6f4], ['amarelo', 'Amarelinho', 0xf9ecc0]] },
  blouse: { name: 'Blusa', tab: 'roupas', price: 140, lv: [1, 2, 3, 5, 7, 9], opts: [['branca', 'Branca', 0xfbf3e4], ['rosa', 'Rosa', 0xf7d0d8], ['azul', 'Azul', 0xcfe0f2], ['amarela', 'Amarela', 0xf7e8b0], ['lilas', 'Lilás', 0xe0d4f2], ['verde', 'Verde', 0xd4ecd0]] },
  boots: { name: 'Galochas', tab: 'roupas', price: 150, lv: [1, 1, 2, 3, 4, 5, 6, 8, 10, 12], opts: [['mostarda', 'Mostarda', 0xdfa53c], ['vermelha', 'Vermelhas', 0xd8483a], ['verde', 'Verdes', 0x5a9a5a], ['azul', 'Azuis', 0x4a7ab8], ['rosa', 'Rosa', 0xe88aa8], ['branca', 'Brancas', 0xf4f0e8], ['lilas', 'Lilases', 0xa88ad8], ['laranja', 'Laranja', 0xf2903a], ['preta', 'Pretas', 0x3a3a44], ['turquesa', 'Turquesa', 0x4ab0b0]] },
  hat: { name: 'Na cabeça', tab: 'acessorios', price: 320, lv: [1, 2, 3, 4, 5, 6, 7, 1], opts: [['palha', 'Chapéu de palha', 'palha'], ['aba_larga', 'Aba larga com laço', 'aba_larga'], ['lenco', 'Lenço', 'lenco'], ['jardineira', 'Chapéu de pano', 'jardineira'], ['laco', 'Laço', 'laco'], ['boina', 'Boina', 'boina'], ['coroa', 'Coroa de flores', 'coroa'], ['nenhum', 'Nada', 'nenhum']] },
  ribbon: { name: 'Cor da fita, laço ou lenço', tab: 'acessorios', price: 110, lv: [1, 1, 2, 3, 4, 5, 6, 8], opts: [['coral', 'Coral', 0xe8736a], ['azul', 'Azul', 0x5a8ac8], ['sol', 'Amarelo', 0xf2c84a], ['lilas', 'Lilás', 0x9a7ac8], ['branca', 'Branca', 0xfaf4ec], ['verde', 'Verde', 0x6aa87a], ['rosa', 'Rosa', 0xf08ab0], ['vinho', 'Vinho', 0x8a2a4a]] },
  hair: { name: 'Penteado', tab: 'acessorios', price: 280, lv: [1, 2, 4, 6], opts: [['solto', 'Solto', 'solto'], ['rabo', 'Rabo de cavalo', 'rabo'], ['tranca', 'Trança de lado', 'tranca'], ['coque', 'Coque', 'coque']] },
  scarf: { name: 'Lencinho no pescoço', tab: 'acessorios', price: 130, lv: [1, 2, 3, 5, 7, 9], opts: [['sem', 'Sem lencinho', null], ['vermelho', 'Vermelho', 0xd8483a], ['azul', 'Azul', 0x5a8ac8], ['amarelo', 'Amarelo', 0xf2c84a], ['rosa', 'Rosa', 0xf08ab0], ['verde', 'Verde', 0x6aa87a]] },
  gloves: { name: 'Luvas de jardinagem', tab: 'acessorios', price: 130, lv: [1, 3, 5, 7, 9], opts: [['sem', 'Sem luvas', null], ['rosa', 'Rosa', 0xf0a0b8], ['verde', 'Verdes', 0x7ab87a], ['amarela', 'Amarelas', 0xf2d06a], ['azul', 'Azuis', 0x8ab8e0]] },
  basket: { name: 'Cestinha de flores', tab: 'acessorios', price: 350, lv: [1, 4], opts: [['sem', 'Sem cestinha', null], ['com', 'No braço', true]] },
  wall: { name: 'Paredes da casa', tab: 'casa', price: 400, house: true, lv: [1, 2, 4, 6, 8], opts: [['creme', 'Creme', 0xf6ecd9], ['amarela', 'Amarelinha', 0xf7e3a0], ['rosa', 'Rosada', 0xf2c8c2], ['azul', 'Azul-clarinha', 0xcfe0ea], ['verde', 'Verde-clarinha', 0xd4e6c8]] },
  trim: { name: 'Porta e janelas', tab: 'casa', price: 300, house: true, lv: [1, 2, 4, 6, 8], opts: [['mar', 'Verde-mar', 0x5f8f8a, 0x6f93a8], ['vermelha', 'Vermelhas', 0xb8483a, 0xa8584a], ['marinho', 'Azul-marinho', 0x3f5f8a, 0x4a6a98], ['sol', 'Amarelas', 0xd8a83a, 0xc89a3a], ['lilas', 'Lilases', 0x8a6aa8, 0x9a7ab8]] },
  fence: { name: 'Cerca', tab: 'casa', price: 350, house: true, lv: [1, 3, 5, 7], opts: [['branca', 'Branca', 0xf3ede2], ['madeira', 'Madeira', 0xb98a5e], ['verde', 'Verde-menta', 0xa8c8a8], ['azul', 'Azul-claro', 0xb0c8dc]] },
};
export const STAGE_NAMES = ['', 'Brotinho', 'Crescendo', 'Em botão', 'Em flor'];

const QUESTS = [
  { t: 'Plante sua primeira flor', goal: 1, v: (s) => s.stats.planted, r: 15 },
  { t: 'Regue a plantinha para ela brotar', goal: 1, v: (s) => s.stats.watered, r: 10 },
  { t: 'Plante 3 flores no canteiro', goal: 3, v: (s, g) => g.count(), r: 20 },
  { t: 'Veja uma flor desabrochar', goal: 1, v: (s) => s.stats.blooms, r: 25 },
  { t: 'Recolha o presente de uma flor', goal: 1, v: (s) => s.stats.collected, r: 20 },
  { t: 'Abra a caixa de correio azul', goal: 1, v: (s) => s.daily.streak, r: 15 },
  { t: 'Tenha 8 plantas no jardim', goal: 8, v: (s, g) => g.count(), r: 30 },
  { t: 'Entregue um pedido na banquinha de flores', goal: 1, v: (s) => s.stats.orders || 0, r: 30 },
  { t: 'Abra a Varanda', goal: 1, v: (s) => +s.zones.includes(1), r: 40 },
  { t: 'Plante num vaso suspenso', goal: 1, v: (s, g) => g.count((p, sp) => sp.type === 'hang'), r: 30 },
  { t: 'Abra a Horta', goal: 1, v: (s) => +s.zones.includes(7), r: 40 },
  { t: 'Plante uma hortaliça', goal: 1, v: (s, g) => g.count((p, sp) => sp.type === 'veg'), r: 30 },
  { t: 'Tenha 3 espécies diferentes em flor', goal: 3, v: (s, g) => g.bloomSpecies(), r: 40 },
  { t: 'Compre uma decoração na loja', goal: 1, v: (s) => s.decor.length, r: 40 },
  { t: 'Abra os Canteiros do leste', goal: 1, v: (s) => +s.zones.includes(2), r: 60 },
  { t: 'Plante uma árvore', goal: 1, v: (s, g) => g.count((p, sp) => sp.type === 'tree'), r: 60 },
  { t: 'Tenha 12 plantas em flor ao mesmo tempo', goal: 12, v: (s, g) => g.blooming(), r: 80 },
  { t: 'Abra o Laguinho', goal: 1, v: (s) => +s.zones.includes(3), r: 100 },
  { t: 'Plante uma ninfeia no lago', goal: 1, v: (s, g) => g.count((p, sp) => sp.type === 'pond'), r: 60 },
  { t: 'Álbum: veja 12 espécies florirem', goal: 12, v: (s) => s.album.length, r: 120 },
  { t: 'Abra a Alameda dos arcos', goal: 1, v: (s) => +s.zones.includes(4), r: 150 },
  { t: 'Cubra um arco com uma trepadeira em flor', goal: 1, v: (s, g) => g.count((p, sp) => sp.type === 'arch' && p.grown >= SPECIES[p.sp].grow), r: 150 },
  { t: 'Descubra uma raridade (veja o álbum)', goal: 1, v: (s) => s.hybrids.length, r: 200 },
  { t: 'Tenha 30 plantas em flor', goal: 30, v: (s, g) => g.blooming(), r: 200 },
  { t: 'Abra o Pomar', goal: 1, v: (s) => +s.zones.includes(5), r: 200 },
  { t: 'Tenha 3 árvores em flor', goal: 3, v: (s, g) => g.count((p, sp) => sp.type === 'tree' && p.grown >= SPECIES[p.sp].grow), r: 250 },
  { t: 'Abra o Prado das flores', goal: 1, v: (s) => +s.zones.includes(6), r: 300 },
  { t: 'Álbum: veja 30 espécies florirem', goal: 30, v: (s) => s.album.length, r: 400 },
  { t: 'Tenha 60 plantas em flor', goal: 60, v: (s, g) => g.blooming(), r: 600 },
  { t: 'Construa a Estufa', goal: 1, v: (s) => +s.zones.includes(8), r: 500 },
  { t: 'Complete o álbum de flores', goal: SPECIES_LIST.length, v: (s) => s.album.length, r: 1000 },
];

const fresh = () => ({ v: 1, coins: 45, xp: 0, zones: [0], decor: [], upg: [], plants: {}, quest: 0, album: [], stats: { planted: 0, watered: 0, collected: 0, blooms: 0, orders: 0, weeds: 0, prunes: 0, fert: 0 }, hour: 8.6, last: Date.now(), t0: Date.now(), tips: {},
  style: { own: [] }, items: [], stored: {}, basket: {}, orders: [], orderT: 0, adubo: 0, daily: { last: '', streak: 0, best: 0 }, weeds: {}, wilt: {}, ach: {}, log: [], hybrids: [], seen: [], seasonsSeen: [], rare: {}, paint: {}, outfit: {}, settings: { music: 0.6, sfx: 0.8, quality: 'auto', time: 'auto' } });

export function loadState() {
  const merge = (s) => Object.assign(fresh(), s, { settings: Object.assign(fresh().settings, s.settings), stats: Object.assign(fresh().stats, s.stats), daily: Object.assign(fresh().daily, s.daily) });
  try { const raw = localStorage.getItem(SAVE_KEY); if (raw) { const s = JSON.parse(raw); if (s && s.v === 1) return merge(s); } } catch (e) {}
  try { const s = window.__SAVE; if (s && s.v === 1) return merge(JSON.parse(JSON.stringify(s))); } catch (e) {} // garden carried over by the downloaded copy
  return fresh();
}

export function createGame({ scene, world, fx, audio, gardener, nav, env, ui, state }) {
  const G = { state, tasks: [], cur: null, time: 0, rainT: 240 + Math.random() * 200, raining: 0 };
  const S = state, V = {}; // V: visuals per spot
  const tex = bubbleTextures();
  const bubbleMat = { water: new THREE.SpriteMaterial({ map: tex.water, depthTest: false, transparent: true }), gift: new THREE.SpriteMaterial({ map: tex.gift, depthTest: false, transparent: true }),
    weed: new THREE.SpriteMaterial({ map: tex.weed, depthTest: false, transparent: true }), prune: new THREE.SpriteMaterial({ map: tex.prune, depthTest: false, transparent: true }), seed: new THREE.SpriteMaterial({ map: tex.seed, depthTest: false, transparent: true }),
    order: new THREE.SpriteMaterial({ map: tex.order, depthTest: false, transparent: true }), daily: new THREE.SpriteMaterial({ map: tex.daily, depthTest: false, transparent: true }), plus: new THREE.SpriteMaterial({ map: tex.plus, transparent: true, opacity: 0.85, depthWrite: false }) };
  const dry = new THREE.Color(0x6b4e3a), wetC = new THREE.Color(0x3a281e);

  G.save = () => { S.last = Date.now(); try { localStorage.setItem(SAVE_KEY, JSON.stringify(S)); } catch (e) {} };
  const save = () => G.save();
  G.reset = () => { try { localStorage.removeItem(SAVE_KEY); } catch (e) {} };
  const level = () => { let l = 1; while (l < LV.length && S.xp >= LV[l]) l++; return l; };
  G.level = level;
  const has = (u) => S.upg.includes(u);
  const waterMax = () => WATER_MAX * (has('can2') ? 2 : 1);
  const waterR = () => (has('can2') ? 3.3 : has('can1') ? 2.2 : 1.35);
  const stageOf = (p) => { const f = p.grown / SPECIES[p.sp].grow; return f >= 1 ? 4 : f >= 0.45 ? 3 : f >= 0.12 ? 2 : 1; };
  G.count = (fn) => { let n = 0; for (const id in S.plants) if (!fn || fn(S.plants[id], world.spots[id])) n++; return n; };
  G.blooming = () => G.count((p) => p.grown >= SPECIES[p.sp].grow);
  G.bloomSpecies = () => { const set = new Set(); for (const id in S.plants) { const p = S.plants[id]; if (p.grown >= SPECIES[p.sp].grow) set.add(p.sp); } return set.size; };
  G.beauty = () => { let b = 0; for (const id in S.plants) { const p = S.plants[id], sp = SPECIES[p.sp]; b += Math.round(sp.price * (p.grown >= sp.grow ? 0.5 : 0.12)); } for (const d of S.decor) b += DECOR.find((x) => x.id === d)?.beauty ?? 0; for (const r of S.items) b += DECO_BY[r.k]?.beauty ?? 0; return b; };

  // ---------- visuals ----------
  const makeSprite = (mat, s) => { const sp = new THREE.Sprite(mat); sp.scale.setScalar(s); sp.renderOrder = 10; sp.visible = false; scene.add(sp); return sp; };
  for (const spot of world.spots) {
    const top = spot.type === 'hang' ? -0.02 : spot.type === 'tree' ? 0.5 : spot.type === 'arch' ? 1.1 : 0.3;
    V[spot.id] = { mesh: null, stage: 0, pop: 1, droop: 0, plus: makeSprite(bubbleMat.plus, spot.type === 'window' ? 0.2 : 0.3), bubble: makeSprite(bubbleMat.water, 0.42), top };
    V[spot.id].plus.position.copy(spot.pos).y += top;
    if (spot.type === 'arch') V[spot.id].plus.position.x -= 0.75;
  }
  const rebuild = (spot) => {
    const v = V[spot.id], p = S.plants[spot.id];
    if (v.mesh) { scene.remove(v.mesh); v.mesh.geometry.dispose(); v.mesh.material.dispose(); v.mesh = null; }
    if (!p) { v.stage = 0; return; }
    const sp = SPECIES[p.sp], st = stageOf(p);
    const m = new THREE.Mesh(buildPlantGeometry(p.sp, p.seed, st), plantMaterialFor(p.sp));
    m.castShadow = true; m.receiveShadow = true; m.position.copy(spot.pos); if (!sp.fixedRot) m.rotation.y = p.seed * 1.7;
    scene.add(m); v.mesh = m; v.stage = st; v.h = sp.h * spot.scale * (sp.tree ? [0, 0.15, 0.5, 0.8, 1][st] : [0, 0.15, 0.6, 0.9, 1][st]);
  };
  // a scruffy little weed that pops up beside a plant
  const weedGeo = (() => { const b = new Builder(), r = mulberry(91);
    for (let i = 0; i < 7; i++) b.petal(mul(RY(i * 0.9 + r()), RX(r.range(0.25, 0.95))), { L: r.range(0.1, 0.19), W: 0.035, a: 0.7, b: 0.5, fold: 0.4, curl: 0.5, ruffle: 0.25, rf: 4, nu: 4, nv: 2, cols: [col(0x5e8a2e), col(0x86b03c), col(0xb6cc5a)] });
    b.tube(null, [new THREE.Vector3(0, 0, 0), new THREE.Vector3(0.01, 0.09, 0), new THREE.Vector3(0.02, 0.17, 0.01)], 0.004, 0.003, col(0x86b03c), col(0x9cc04a), 4);
    for (let k = 0; k < 9; k++) b.petal(mul(T(0.02, 0.17, 0.01), RY(k * 0.7), RX(1.2)), { L: 0.03, W: 0.012, nu: 2, nv: 1, cols: [col(0xf2c21e), col(0xf7d23a), col(0xfbe36a)] });
    return b.build(); })();
  const weedMat = makePlantMaterial({ sway: 0.6 });
  const setWeed = (id, on) => { const v = V[id]; if (on && !v.weed) { const sp = world.spots[id], m = new THREE.Mesh(weedGeo, weedMat); m.castShadow = true; const a = id * 2.4, r = sp.type === 'tree' ? 0.5 : sp.type === 'pot' ? 0.2 : 0.27;
      m.position.set(sp.pos.x + Math.cos(a) * r, sp.pos.y, sp.pos.z + Math.sin(a) * r); m.rotation.y = a; m.scale.setScalar(0.01); scene.add(m); v.weed = m; }
    else if (!on && v.weed) { scene.remove(v.weed); v.weed = null; } };
  const thingBubble = {};
  for (const k in world.things) { const t = world.things[k], b = makeSprite(k === 'orders' ? bubbleMat.order : bubbleMat.daily, 0.5); b.position.set(t.pos.x, t.top + 0.25, t.pos.z); thingBubble[k] = b; }
  const thirstOf = (sp, spot) => (spot.type === 'green' ? 0 : sp.thirst ?? 1); // the greenhouse keeps everything moist
  const outOfSeason = (sp, spot) => sp.season != null && spot.type !== 'green' && sp.season !== G.sys.season().id;

  // ---------- economy ----------
  const addCoins = (n, at) => { S.coins += n; if (at) ui.floatText(at, (n > 0 ? '+' : '') + n, 'coin'); ui.hud(); };
  const addXp = (n) => { const l0 = level(); S.xp += n; const l1 = level(); if (l1 > l0) { audio.sfx('levelup'); gardener.play('cheer', 1.6); fx.burst(gardener.group.position, [0xffe680, 0xff9ab8, 0x9ad8ff, 0xb8f0a0], 50); ui.levelUp(l1, SPECIES_LIST.filter((s) => s.lvl > l0 && s.lvl <= l1)); } ui.hud(); };
  const checkQuest = () => {
    const q = QUESTS[S.quest]; if (!q) { ui.quest(null); return; }
    const val = Math.min(q.goal, q.v(S, G));
    if (val >= q.goal) { S.quest++; addCoins(q.r); audio.sfx('buy'); ui.toast(`Missão cumprida! +${q.r} moedas`, 'good'); checkQuest(); save(); return; }
    ui.quest({ text: q.t, val, goal: q.goal, reward: q.r });
  };
  G.checkQuest = checkQuest;

  // ---------- tasks ----------
  const walkTo = (x, z) => { const p = gardener.group.position; return nav.path(p.x, p.z, x, z); };
  const pushAct = (kind, spot, extra = {}) => {
    if (G.tasks.some((t) => t.kind === kind && t.spot === spot) || (G.cur && G.cur.kind === kind && G.cur.spot === spot)) return;
    if (G.tasks.length >= 8) return;
    G.tasks.push({ kind, spot, ...extra });
  };
  const cancelAll = () => { for (const t of G.tasks) if (t.kind === 'plant') { S.coins += SPECIES[t.sp].price; t.spot.pending = null; } G.tasks.length = 0; ui.hud(); };

  G.tapGround = (x, z) => {
    cancelAll();
    if (G.cur && G.cur.phase === 'act') return; // let her finish what she is doing
    if (G.cur && G.cur.kind === 'plant') { S.coins += SPECIES[G.cur.sp].price; G.cur.spot.pending = null; ui.hud(); }
    G.cur = { kind: 'move', path: walkTo(x, z), phase: 'walk' };
    ui.closeCards();
  };
  G.tapSpot = (spot) => {
    if (G.placing) return;
    if (!S.zones.includes(spot.zone)) { G.offerZone(spot.zone); return; }
    const p = S.plants[spot.id];
    if (!p) { if (spot.pending) return; audio.sfx('click', 0.35); ui.picker(spot, speciesFor(spot)); return; }
    const sp = SPECIES[p.sp];
    if (p.ready || S.rare[spot.id]) { pushAct('collect', spot); ui.closeCards(); }
    else if (S.wilt[spot.id]) { pushAct('prune', spot); ui.closeCards(); }
    else if (S.weeds[spot.id]) { pushAct('weed', spot); ui.closeCards(); }
    else if (thirstOf(sp, spot) !== 0 && p.wet < waterMax() * 0.4 && !has('sprinkler')) { pushAct('water', spot); ui.closeCards(); }
    else { audio.sfx('click', 0.35); G.showCard(spot); pushAct('admire', spot); }
  };
  G.showCard = (spot) => {
    const p = S.plants[spot.id]; if (!p) return;
    ui.plantCard(spot, () => { const q = S.plants[spot.id]; if (!q) return null; const sp = SPECIES[q.sp];
      return { sp, stage: stageOf(q), grow: clamp(q.grown / sp.grow, 0, 1), water: thirstOf(sp, spot) === 0 ? 1 : clamp(q.wet / waterMax(), 0, 1), noWater: thirstOf(sp, spot) === 0, green: spot.type === 'green', gift: q.grown >= sp.grow ? clamp(q.giftT / sp.every, 0, 1) : 0, ready: q.ready, left: Math.max(0, sp.grow - q.grown), adubo: S.adubo, inSeason: G.sys.inSeason(sp), weed: !!S.weeds[spot.id] }; },
    { water: () => pushAct('water', spot), remove: () => pushAct('remove', spot), fert: () => G.fertilize(spot) });
  };
  const fits = (s, spot) => s.spots.includes(spot.type) || (spot.type === 'green' && s.spots.includes('pot'));
  const speciesFor = (spot) => SPECIES_LIST.filter((s) => fits(s, spot) && (!s.hybrid || S.hybrids.includes(s.id))).map((s) => ({ sp: s, locked: s.lvl > level(), off: outOfSeason(s, spot), afford: S.coins >= s.price }));
  G.choose = (spot, id) => {
    const sp = SPECIES[id];
    if (sp.lvl > level()) { audio.sfx('error'); ui.toast(`${sp.name} chega no nível ${sp.lvl}`, 'warn'); return false; }
    if (outOfSeason(sp, spot)) { audio.sfx('error'); ui.toast(`${sp.name} só nasce ${['na primavera', 'no verão', 'no outono', 'no inverno'][sp.season]} (ou na estufa)`, 'warn'); return false; }
    if (S.coins < sp.price) { audio.sfx('error'); ui.toast('Faltam moedas. Recolha os presentes das flores!', 'warn'); return false; }
    if (S.plants[spot.id] || spot.pending) return false;
    S.coins -= sp.price; spot.pending = id; ui.hud(); audio.sfx('buy', 0.7);
    pushAct('plant', spot, { sp: id });
    if (thirstOf(sp, spot) !== 0 && !has('sprinkler')) pushAct('water', spot);
    return true;
  };
  G.offerZone = (id) => {
    const z = ZONES[id]; if (S.zones.includes(id)) return;
    ui.zoneOffer(z, S.coins >= z.cost, () => {
      if (S.coins < z.cost) { audio.sfx('error'); ui.toast(`Faltam ${z.cost - S.coins} moedas para abrir ${z.name}`, 'warn'); return; }
      S.coins -= z.cost; S.zones.push(id); world.setZone(id, true); world.mowZone(id); nav.invalidate();
      audio.sfx('expand'); const [tx, tz] = z.tag; fx.burst(new THREE.Vector3(tx, 0.3, tz), [0xffe680, 0xb8f0a0, 0xffffff, 0xffc6d8], 70, 2.2);
      ui.toast(`${z.name} agora faz parte do seu jardim!`, 'good'); ui.hud(); addXp(20 + id * 10); checkQuest(); save(); refreshMarkers(); ui.focus(tx, tz);
    });
  };
  G.buyDecor = (id) => {
    const d = DECOR.find((x) => x.id === id); if (!d || S.decor.includes(id)) return;
    if (S.coins < d.price) { audio.sfx('error'); ui.toast('Faltam moedas para esta decoração', 'warn'); return; }
    S.coins -= d.price; S.decor.push(id); world.setDecor(id, true); nav.invalidate(); audio.sfx('buy'); ui.toast(`${d.name} colocado no jardim`, 'good'); addXp(15); ui.hud(); checkQuest(); save();
  };
  G.buyUpgrade = (id) => {
    const u = UPGRADES.find((x) => x.id === id); if (!u || has(id)) return;
    if (u.need && !has(u.need)) { audio.sfx('error'); ui.toast('Compre a melhoria anterior primeiro', 'warn'); return; }
    if (S.coins < u.price) { audio.sfx('error'); ui.toast('Faltam moedas para esta melhoria', 'warn'); return; }
    S.coins -= u.price; S.upg.push(id); audio.sfx('levelup'); ui.toast(`${u.name}: ${u.desc}`, 'good'); ui.hud(); save();
  };

  // ---------- ornaments: buy, place anywhere on the lawn, move, turn, store ----------
  const items = world.items, pickMatD = new THREE.MeshBasicMaterial({ visible: false });
  const ring = new THREE.Mesh(new THREE.RingGeometry(0.92, 1, 48), new THREE.MeshBasicMaterial({ color: 0x6ab85a, transparent: true, opacity: 0.85, depthWrite: false })); ring.rotation.x = -Math.PI / 2; ring.position.y = 0.04; ring.visible = false; ring.renderOrder = 6; scene.add(ring);
  const addItem = (rec, group, animate) => { const def = DECO_BY[rec.k]; if (!def) return null; group = group || buildDeco(rec.k); group.position.set(rec.x, 0, rec.z); group.rotation.y = rec.r || 0; scene.add(group);
    const h = Math.max(0.5, new THREE.Box3().setFromObject(group).max.y), pick = new THREE.Mesh(new THREE.CylinderGeometry(Math.max(0.25, def.r * 0.8), Math.max(0.25, def.r * 0.8), h, 8), pickMatD); pick.position.set(rec.x, h / 2, rec.z); scene.add(pick);
    const it = { rec, def, group, pick, pop: animate ? 0 : 1 }; pick.userData.item = it; items.push(it); return it; };
  const dropItem = (it, keepGroup) => { if (!keepGroup) scene.remove(it.group); scene.remove(it.pick); const i = items.indexOf(it); if (i >= 0) items.splice(i, 1); };
  const showGhost = () => { const p = G.placing; if (!p) { ring.visible = false; return; } p.group.position.set(p.x, 0, p.z); p.group.rotation.y = p.rot; p.ok = world.canPlace(p.x, p.z, p.def.r, null, S.zones);
    ring.visible = true; ring.position.set(p.x, 0.045, p.z); ring.scale.setScalar(Math.max(0.3, p.def.r)); ring.material.color.setHex(p.ok ? 0x6ab85a : 0xe2685f); };
  const beginPlacing = (p) => { cancelAll(); ui.closeCards(); ui.closeModal(); const gp = gardener.group.position; if (p.x == null) { p.x = Math.round((gp.x + Math.sin(gardener.heading) * (1.2 + p.def.r)) * 4) / 4; p.z = Math.round((gp.z + Math.cos(gardener.heading) * (1.2 + p.def.r)) * 4) / 4; }
    if (!p.group.parent) scene.add(p.group); G.placing = p; showGhost(); ui.placeBar(p.def); };
  G.deco = {
    buy: (id) => { const def = DECO_BY[id]; if (!def) return; const have = S.stored[id] || 0;
      if (!have) { if (level() < def.lvl) { audio.sfx('error'); ui.toast(`${def.name} chega no nível ${def.lvl}`, 'warn'); return; } if (S.coins < def.price) { audio.sfx('error'); ui.toast(`Faltam ${def.price - S.coins} moedas`, 'warn'); return; } }
      beginPlacing({ id, def, group: buildDeco(id), rot: 0, mode: have ? 'stored' : 'new' }); },
    move: (x, z) => { const p = G.placing; if (!p) return; p.x = Math.round(x * 4) / 4; p.z = Math.round(z * 4) / 4; showGhost(); },
    rotate: () => { const p = G.placing; if (!p) return; p.rot = (p.rot + Math.PI / 4) % (Math.PI * 2); audio.sfx('click', 0.4); showGhost(); },
    confirm: () => { const p = G.placing; if (!p) return; if (!p.ok) { audio.sfx('error'); ui.toast('Aqui não cabe. Toque em outro cantinho do gramado.', 'warn'); return; }
      if (p.mode === 'new') { if (S.coins < p.def.price) { audio.sfx('error'); return; } S.coins -= p.def.price; addXp(8); } else if (p.mode === 'stored') S.stored[p.id] = Math.max(0, (S.stored[p.id] || 0) - 1);
      const rec = p.mode === 'move' ? p.rec : { k: p.id, x: 0, z: 0, r: 0 }; rec.x = p.x; rec.z = p.z; rec.r = p.rot; if (p.mode !== 'move') S.items.push(rec);
      addItem(rec, p.group, true); G.placing = null; ring.visible = false; ui.placeBar(null); nav.invalidate(); audio.sfx(p.mode === 'new' ? 'buy' : 'plant');
      fx.sparkle(new THREE.Vector3(rec.x, 0.5, rec.z), 22, 0xfff0a0, Math.max(0.3, p.def.r * 0.6)); ui.hud(); save(); },
    cancel: () => { const p = G.placing; if (!p) return; if (p.mode === 'move') addItem(p.rec, p.group, false); else scene.remove(p.group); G.placing = null; ring.visible = false; ui.placeBar(null); nav.invalidate(); },
    startMove: (it) => { dropItem(it, true); nav.invalidate(); beginPlacing({ id: it.rec.k, def: it.def, group: it.group, rot: it.rec.r || 0, x: it.rec.x, z: it.rec.z, mode: 'move', rec: it.rec }); },
    turn: (it) => { it.rec.r = ((it.rec.r || 0) + Math.PI / 4) % (Math.PI * 2); it.group.rotation.y = it.rec.r; audio.sfx('click', 0.4); save(); },
    store: (it) => { dropItem(it); S.items.splice(S.items.indexOf(it.rec), 1); S.stored[it.rec.k] = (S.stored[it.rec.k] || 0) + 1; nav.invalidate(); audio.sfx('plant', 0.6, 1.2); ui.closeCards(); ui.toast(`${it.def.name} guardado. Está na lojinha para colocar de novo.`, 'info'); ui.hud(); save(); },
  };
  G.tapItem = (it) => { audio.sfx('click', 0.35); ui.decoCard(it); };
  const tickItems = (dt) => { for (const it of items) { const u = it.group.userData; if (u.tick) u.tick(dt, G.time, env.night, fx, it.group.position); if (u.glow) for (const m of u.glow) m.emissiveIntensity = m.userData.e * Math.max(env.night, u.dayGlow || 0);
      if (it.pop < 1) { it.pop = Math.min(1, it.pop + dt * 2.2); it.group.scale.setScalar(0.6 + 0.4 * easeOutBack(it.pop)); } }
    const p = G.placing; if (p) { const u = p.group.userData; if (u.tick) u.tick(dt, G.time, env.night, null, p.group.position); ring.material.opacity = 0.6 + 0.25 * Math.sin(G.time * 5); } };

  const refreshMarkers = () => { for (const spot of world.spots) V[spot.id].plus.visible = S.zones.includes(spot.zone) && !S.plants[spot.id] && !spot.pending; };

  // effects of each action
  const doWater = (spot) => {
    const r = waterR(), m = waterMax(); let n = 0;
    for (const id in S.plants) { const o = world.spots[id]; if (o.pos.distanceTo(spot.pos) <= r + 0.01 && (Math.abs(o.pos.y - spot.pos.y) < 1.2)) { const p = S.plants[id]; if (thirstOf(SPECIES[p.sp], o) === 0) continue; p.wet = m; n++; fx.splash(o.pos, 5); } }
    S.stats.watered += Math.max(1, n); addXp(1); checkQuest();
  };
  const doPlant = (t) => {
    const spot = t.spot; spot.pending = null;
    S.plants[spot.id] = { sp: t.sp, seed: 1 + Math.floor(Math.random() * 9999), grown: 0, wet: 0, giftT: 0, ready: false };
    S.stats.planted++; rebuild(spot); V[spot.id].pop = 0; fx.dust(spot.pos, 12); audio.sfx('plant'); addXp(3); checkQuest(); refreshMarkers(); save();
  };
  const doCollect = (spot) => {
    let total = 0;
    for (const id in S.rare) { const o = world.spots[id]; if (!o || o.pos.distanceTo(spot.pos) > Math.max(1.4, waterR()) + 0.01) continue; G.sys.takeRare && G.sys.takeRare(id); }
    for (const id in S.plants) { const o = world.spots[id], p = S.plants[id]; if (!p.ready || o.pos.distanceTo(spot.pos) > Math.max(1.4, waterR()) + 0.01) continue;
      const sp = SPECIES[p.sp], amt = Math.round(sp.gift * G.sys.giftMul(sp)); p.ready = false; p.giftT = 0; total += amt; S.stats.collected++;
      S.basket[p.sp] = Math.min(99, (S.basket[p.sp] || 0) + 1);
      const at = o.pos.clone(); at.y += V[id].h * 0.7 + 0.2; fx.sparkle(at, 12); ui.floatText(at, '+' + amt, 'coin'); G.sys.afterGift && G.sys.afterGift(id); }
    if (total) { S.coins += total; audio.sfx('coin', 0.6); addXp(Math.ceil(total / 3)); ui.hud(); checkQuest(); save(); }
  };
  const doWeed = (spot) => { if (!S.weeds[spot.id]) return; delete S.weeds[spot.id]; S.stats.weeds = (S.stats.weeds || 0) + 1; fx.dust(V[spot.id].weed ? V[spot.id].weed.position : spot.pos, 10); audio.sfx('plant', 0.7, 1.25);
    const at = spot.pos.clone(); at.y += 0.4; S.coins += 3; ui.floatText(at, '+3', 'coin'); addXp(2); ui.hud(); };
  const doPrune = (spot) => { const p = S.plants[spot.id]; if (!p || !S.wilt[spot.id]) return; delete S.wilt[spot.id]; S.stats.prunes = (S.stats.prunes || 0) + 1;
    const sp = SPECIES[p.sp], amt = Math.round(sp.gift * 1.5 * G.sys.giftMul(sp)); p.giftT = 0; S.coins += amt; S.basket[p.sp] = Math.min(99, (S.basket[p.sp] || 0) + 2); S.stats.collected++;
    const at = spot.pos.clone(); at.y += V[spot.id].h * 0.7 + 0.2; fx.sparkle(at, 18, 0xffd0e0); ui.floatText(at, '+' + amt, 'coin'); audio.sfx('coin', 0.6, 1.15); addXp(Math.ceil(amt / 3)); ui.hud(); G.sys.afterGift(spot.id); save(); };
  G.fertilize = (spot) => { const p = S.plants[spot.id]; if (!p || S.adubo < 1) return; const sp = SPECIES[p.sp]; if (p.grown >= sp.grow) { ui.toast('Esta planta já está adulta', 'info'); return; }
    S.adubo--; S.stats.fert = (S.stats.fert || 0) + 1; p.grown = Math.min(sp.grow, p.grown + sp.grow * 0.25); const at = spot.pos.clone(); at.y += 0.3; fx.sparkle(at, 20, 0xb8f08a, 0.3); audio.sfx('bloom', 0.6, 1.2); addXp(2); save(); };
  G.tapThing = (kind) => { audio.sfx('click', 0.35); if (kind === 'orders') ui.orders(); else if (kind === 'mail') ui.daily(); else if (kind === 'eliane') ui.style('roupas'); else if (kind === 'house') ui.style('casa'); };
  const styleOf = (k) => { const o = STYLE[k].opts; return o.find((x) => x[0] === S.style[k]) || o[0]; };
  G.applyStyle = () => { const v = (k) => styleOf(k)[2];
    gardener.setOutfit({ dress: v('dress'), pattern: v('pattern'), apron: v('apron'), blouse: v('blouse'), boots: v('boots'), hat: v('hat'), ribbon: v('ribbon'), hair: v('hair'), scarf: v('scarf'), gloves: v('gloves'), basket: v('basket') });
    const t = styleOf('trim'), key = [styleOf('wall')[0], t[0], styleOf('fence')[0]].join();
    if (G._painted !== key) { if (G._painted || key !== 'creme,mar,branca') { world.paintHouse({ wall: styleOf('wall')[2], door: t[2], shut: t[3] }); world.paintFence(styleOf('fence')[2]); } G._painted = key; } };
  G.pickStyle = (k, id) => { const def = STYLE[k], i = def.opts.findIndex((x) => x[0] === id), opt = def.opts[i]; if (!opt) return false; const own = i === 0 || S.style.own.includes(k + ':' + id), need = (def.lv && def.lv[i]) || 1;
    if (!own && level() < need) { audio.sfx('error'); ui.toast(`Chega no nível ${need}`, 'warn'); return false; }
    if (!own) { if (S.coins < def.price) { audio.sfx('error'); ui.toast(`Faltam ${def.price - S.coins} moedas para esta cor`, 'warn'); return false; } S.coins -= def.price; S.style.own.push(k + ':' + id); audio.sfx('buy'); fx.burst(gardener.group.position, [typeof opt[2] === 'number' ? opt[2] : 0xff9ab8, 0xffffff, 0xffe680], 26, 1); ui.hud(); }
    else audio.sfx('click', 0.5);
    S.style[k] = id; G.applyStyle(); if (!def.house) gardener.play('cheer', 1.2); save(); return true; };
  const doRemove = (spot) => { delete S.weeds[spot.id]; delete S.wilt[spot.id]; delete S.rare[spot.id]; delete S.plants[spot.id]; rebuild(spot); fx.dust(spot.pos, 14); audio.sfx('plant', 0.8, 0.8); refreshMarkers(); ui.closeCards(); checkQuest(); save(); };

  const DUR = { water: 2.1, plant: 1.9, collect: 1.1, admire: 1.6, remove: 1.7, weed: 1.5, prune: 1.2 };
  const startNext = () => {
    const t = G.tasks.shift(); if (!t) { G.cur = null; return; }
    if (t.kind !== 'plant' && !S.plants[t.spot.id]) return startNext();
    if (t.kind === 'collect' && !S.plants[t.spot.id].ready && !S.rare[t.spot.id]) return startNext();
    if ((t.kind === 'weed' && !S.weeds[t.spot.id]) || (t.kind === 'prune' && !S.wilt[t.spot.id])) return startNext();
    t.path = walkTo(t.spot.stand.x, t.spot.stand.z); t.phase = 'walk'; G.cur = t;
  };

  // ---------- main update ----------
  let saveT = 0, questT = 0, petalT = 0, bfT = 0, stepFlip = 0;
  gardener.onStep = () => { audio.sfx('step', 0.3, (stepFlip ^= 1) ? 1 : 1.12); };
  G.update = (dt) => {
    G.time += dt;
    // --- gardener ---
    const gp = gardener.group.position, c = G.cur;
    if (!c) { if (gardener.state === 'walk') gardener.stop(); gardener.speed = 0; startNext(); }
    else if (c.phase === 'walk') {
      const wp = c.path[0];
      if (!wp) {
        gardener.speed = 0;
        if (c.kind === 'move') { gardener.stop(); G.cur = null; }
        else { c.phase = 'act'; c.t = 0; c.done = false; gardener.faceTo(c.spot.pos.x + (c.spot.type === 'arch' ? -0.75 : 0), c.spot.pos.z);
          gardener.play(c.kind === 'remove' || c.kind === 'weed' ? 'plant' : c.kind === 'prune' ? 'collect' : c.kind, DUR[c.kind], { high: c.spot.high || (c.spot.type === 'arch' && c.kind === 'water' && false) });
          if (c.kind === 'water') audio.sfx('water'); }
      } else {
        const dx = wp[0] - gp.x, dz = wp[1] - gp.z, d = Math.hypot(dx, dz);
        let remain = d; for (let i = 1; i < c.path.length; i++) remain += Math.hypot(c.path[i][0] - c.path[i - 1][0], c.path[i][1] - c.path[i - 1][1]);
        const sp = clamp(remain * 2.2 + 0.7, 0.9, remain > 6 ? 3.5 : 2.5);
        gardener.speed += (sp - gardener.speed) * Math.min(1, dt * 6); gardener.state = 'walk';
        const step = gardener.speed * dt;
        if (d <= step) { gp.x = wp[0]; gp.z = wp[1]; c.path.shift(); } else { gp.x += (dx / d) * step; gp.z += (dz / d) * step; gardener.targetHeading = Math.atan2(dx, dz); }
      }
    } else if (c.phase === 'act') {
      c.t += dt; const u = c.t / DUR[c.kind], tp = c.spot.pos;
      if (c.kind === 'water') {
        if (u > 0.26 && u < 0.84) fx.water(gardener.spoutWorld, c.spot.type === 'arch' ? new THREE.Vector3(tp.x - 0.75, 0.1, tp.z) : tp, 3);
        if (!c.done && u > 0.5) { c.done = true; doWater(c.spot); }
      } else if (c.kind === 'plant') { if (!c.done && u > 0.55) { c.done = true; doPlant(c); } }
      else if (c.kind === 'remove') { if (!c.done && u > 0.55) { c.done = true; doRemove(c.spot); } }
      else if (c.kind === 'collect') { if (!c.done && u > 0.45) { c.done = true; doCollect(c.spot); } }
      else if (c.kind === 'weed') { if (!c.done && u > 0.55) { c.done = true; doWeed(c.spot); } }
      else if (c.kind === 'prune') { if (!c.done && u > 0.5) { c.done = true; doPrune(c.spot); } }
      else if (c.kind === 'admire') { if (!c.done && u > 0.4) { c.done = true; fx.hearts(new THREE.Vector3(gp.x, 1.7, gp.z), 4); } }
      if (u >= 1) { G.cur = null; }
    }
    gp.y = groundY(gp.x, gp.z);

    // --- time, rain ---
    const mode = S.settings.time;
    if (mode === 'auto') S.hour = (S.hour + dt * (S.hour > 6 && S.hour < 19 ? 13 / 540 : 11 / 150)) % 24;
    else if (mode !== 'fixo') { const tgt = { dia: 10, tarde: 17.3, noite: 22 }[mode]; let d = tgt - S.hour; if (d > 12) d -= 24; if (d < -12) d += 24; S.hour = (S.hour + d * Math.min(1, dt * 0.8) + 24) % 24; }
    G.rainT -= dt;
    if (G.rainT < 0 && G.rainT > -50) { if (!G.rainOn) { G.rainOn = true; if (G.count() > 0) ui.toast('Uma chuvinha! As plantas agradecem.', 'info'); } G.raining = Math.min(1, G.raining + dt * 0.3);
      if (G.raining > 0.6) for (const id in S.plants) S.plants[id].wet = Math.max(S.plants[id].wet, waterMax() * 0.9); }
    else { G.raining = Math.max(0, G.raining - dt * 0.25); if (G.rainT <= -50) { G.rainT = 420 + Math.random() * 300; G.rainOn = false; } }
    fx.rain = G.raining;

    // --- plants ---
    const sprink = has('sprinkler'), wm = waterMax();
    const firstBoost = S.stats.blooms === 0 ? 8 : 1, giftBoost = S.stats.collected === 0 ? 12 : 1; // the very first flower and gift come quickly, to teach the loop
    const targets = fx.butterflyTargets; targets.length = 0; let blooms = 0;
    for (const id in S.plants) {
      const p = S.plants[id], sp = SPECIES[p.sp], spot = world.spots[id], v = V[id];
      const th = thirstOf(sp, spot);
      if (sprink) p.wet = wm;
      const hyd = th === 0 || p.wet > 0;
      if (th > 0) p.wet = Math.max(0, p.wet - dt * th);
      if (hyd) { if (p.grown < sp.grow) p.grown = Math.min(sp.grow, p.grown + dt * firstBoost * G.sys.growMul(id, sp)); else if (!p.ready) { p.giftT += dt * giftBoost; if (p.giftT >= sp.every) { p.ready = true; audio.sfx('pop', 0.35, 1.3); } } }
      const st = stageOf(p);
      if (!v.mesh || st !== v.stage) {
        const first = v.mesh && st > v.stage; rebuild(spot);
        if (first) { V[id].pop = 0; const at = spot.pos.clone(); at.y += V[id].h * 0.6;
          if (st === 4) { audio.sfx('bloom'); fx.sparkle(at, 26, 0xfff0a0, 0.4 * spot.scale); S.stats.blooms++; if (!S.album.includes(p.sp)) { S.album.push(p.sp); ui.toast(`Nova flor no álbum: ${sp.name}`, 'good'); } addXp(8); if (!G.cur && gardener.state === 'idle') gardener.play('cheer', 1.4); save(); }
          else { audio.sfx('pop', 0.6); fx.sparkle(at, 8, 0xd8ffb0, 0.25); }
          questT = 0; }
      }
      // smooth growth inside a stage + pop
      v.pop = Math.min(1, v.pop + dt * 1.6);
      const f = p.grown / sp.grow, lo = [0, 0, 0.12, 0.45, 1][st], hi = [0, 0.12, 0.45, 1, 1][st], within = hi > lo ? (f - lo) / (hi - lo) : 1;
      const sc = spot.scale * lerp(0.82, 1, within) * (0.55 + 0.45 * easeOutBack(v.pop));
      v.mesh.scale.setScalar(sc);
      const targetDroop = hyd ? 0 : 0.85; v.droop += (targetDroop - v.droop) * Math.min(1, dt * 1.5); v.mesh.material.userData.u.uDroop.value = v.droop;
      if (spot.soil) spot.soil.material.color.copy(dry).lerp(wetC, th === 0 ? 1 : clamp(p.wet / wm * 2, 0, 1));
      // bubble
      const need = S.rare[id] ? 'seed' : p.ready ? 'gift' : S.wilt[id] ? 'prune' : S.weeds[id] ? 'weed' : !hyd ? 'water' : null, b = v.bubble;
      setWeed(id, !!S.weeds[id]); if (v.weed) v.weed.scale.setScalar(Math.min(1, v.weed.scale.x + dt * 2) * 1);
      if (need) { b.visible = true; b.material = bubbleMat[need]; b.position.copy(spot.pos); b.position.y += Math.max(0.5, v.h + 0.25) + Math.sin(G.time * 2.4 + spot.id) * 0.04; if (spot.type === 'arch') b.position.y = 2.6; }
      else b.visible = false;
      if (st === 4) { blooms++; if (!sp.tree && !sp.climber && targets.length < 24) targets.push({ x: spot.pos.x, y: spot.pos.y + v.h * 0.85, z: spot.pos.z }); if (sp.petal && Math.random() < dt * 1.6) fx.petalFall(new THREE.Vector3(spot.pos.x, spot.pos.y + 3.2, spot.pos.z), sp.petal, 1.6); }
    }
    for (const spot of world.spots) { if (!S.plants[spot.id]) { V[spot.id].bubble.visible = false; if (V[spot.id].weed) setWeed(spot.id, false); if (spot.soil && !spot.pending) spot.soil.material.color.lerp(dry, dt); } const pl = V[spot.id].plus; if (pl.visible) pl.material.opacity = 0.7 + 0.2 * Math.sin(G.time * 2); }
    fx.butterflyCount = Math.min(9, Math.floor(blooms / 2) + (blooms > 0 ? 1 : 0));

    // stall + mailbox
    const ob = thingBubble.orders, mb = thingBubble.mail, bob = Math.sin(G.time * 2.4) * 0.04;
    if (ob) { ob.visible = G.sys.anyDeliverable(); ob.position.y = world.things.orders.top + 0.25 + bob; }
    if (mb) { const rdy = G.sys.dailyReady(); mb.visible = rdy; mb.position.y = world.things.mail.top + 0.25 + bob; if (world.mailFlag) world.mailFlag.rotation.x += ((rdy ? 0 : -1.5) - world.mailFlag.rotation.x) * Math.min(1, dt * 4); }
    G.sys.tick(dt); tickItems(dt);
    questT -= dt; if (questT < 0) { questT = 1; checkQuest(); }
    saveT += dt; if (saveT > 10) { saveT = 0; save(); }
  };

  // ---------- init from save ----------
  G.init = () => {
    for (const z of ZONES) world.setZone(z.id, S.zones.includes(z.id));
    for (const d of DECOR) world.setDecor(d.id, S.decor.includes(d.id));
    // offline progress (plants keep growing while they still had water)
    const away = clamp((Date.now() - (S.last || Date.now())) / 1000, 0, 48 * 3600);
    for (const id in S.plants) {
      const p = S.plants[id], sp = SPECIES[p.sp]; if (!sp || !world.spots[id]) { delete S.plants[id]; continue; }
      const th = thirstOf(sp, world.spots[id]), hydT = th === 0 || has('sprinkler') ? away : Math.min(away, p.wet / th), gm = G.sys.growMul(id, sp);
      const growT = Math.min(hydT, Math.max(0, sp.grow - p.grown) / gm); p.grown = Math.min(sp.grow, p.grown + growT * gm);
      if (p.grown >= sp.grow) { if (!S.album.includes(p.sp)) S.album.push(p.sp); p.giftT += hydT - growT; if (p.giftT >= sp.every) { p.ready = true; p.giftT = sp.every; } }
      if (th > 0) p.wet = Math.max(0, p.wet - away * th);
      rebuild(world.spots[id]);
    }
    if (!S.items) S.items = []; if (!S.stored) S.stored = {}; for (const rec of S.items.slice()) if (!addItem(rec)) S.items.splice(S.items.indexOf(rec), 1);
    G.away = away; G.sys.init(away); if (!S.style || !S.style.own) S.style = { own: [] }; G.applyStyle();
    refreshMarkers(); ui.hud(); checkQuest();
  };
  G.zoneAt = zoneAt; G.refreshMarkers = refreshMarkers; G.rebuild = rebuild; G.V = V;
  attachSystems(G, { S, world, fx, audio, gardener, ui, scene, addCoins, addXp, level, save });
  return G;
}
