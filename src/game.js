import * as THREE from 'three';
import { SPECIES, SPECIES_LIST, PACE_V, buildPlantGeometry, plantMaterialFor } from './species.js';
import { ZONES, DECOR, groundY, zoneAt } from './world.js';
import { bubbleTextures } from './fx.js';
import { clamp, lerp, easeOutBack, T, RX, RY, mul, col, mulberry } from './util.js';
import { Builder } from './builder.js';
import { makePlantMaterial } from './plantmat.js';
import { attachSystems } from './systems.js';
import { DECO, DECO_BY, buildDeco } from './decor.js';
import { WARDROBE, WEAR0, resolveWear, piece } from './wardrobe.js';
import { attachHome } from './home.js';

const SAVE_KEY = 'jardim-do-sossego-v1';
export const WATER_MAX = 4 * 3600;
export const LV = [0, 60, 180, 380, 680, 1100, 1650, 2350, 3200, 4200, 5400, 6800, 8500, 10500, 13000, 16000, 20000, 25000, 31000, 38000, 46000, 55000, 65000, 76000, 88000, 101000, 115000, 130000, 146000, 163000];
export const UPGRADES = [
  { id: 'can1', name: 'Regador de cobre', price: 450, desc: 'Rega uma área maior de uma só vez.', need: null },
  { id: 'can2', name: 'Regador dourado', price: 1800, desc: 'Rega longe e a água dura o dobro.', need: 'can1' },
  { id: 'sprinkler', name: 'Aspersores automáticos', price: 7500, desc: 'O jardim inteiro se rega sozinho.', need: 'can2' },
];
// The colours of the house and the fence. opts: [id, name, value, value2]; the first of each list is free.
// lv[i] = level at which option i shows up (so there is always something new to unlock).
export const STYLE = {
  wall: { name: 'Paredes da casa', short: 'Paredes', tab: 'casa', price: 400, house: true, lv: [1, 2, 4, 6, 8, 10, 12, 14], opts: [['creme', 'Creme', 0xf6ecd9], ['amarela', 'Amarelinha', 0xf7e3a0], ['rosa', 'Rosada', 0xf2c8c2], ['azul', 'Azul-clarinha', 0xcfe0ea], ['verde', 'Verde-clarinha', 0xd4e6c8], ['lilas', 'Lilás', 0xdcd0ea], ['branca', 'Branquinha', 0xfbf8f2], ['terracota', 'Terracota', 0xe0a888]] },
  trim: { name: 'Porta e janelas', tab: 'casa', price: 300, house: true, lv: [1, 2, 4, 6, 8, 10, 12], opts: [['mar', 'Verde-mar', 0x5f8f8a, 0x6f93a8], ['vermelha', 'Vermelhas', 0xb8483a, 0xa8584a], ['marinho', 'Azul-marinho', 0x3f5f8a, 0x4a6a98], ['sol', 'Amarelas', 0xd8a83a, 0xc89a3a], ['lilas', 'Lilases', 0x8a6aa8, 0x9a7ab8], ['rosa', 'Rosa', 0xd87a9a, 0xe08aa8], ['madeira', 'Madeira', 0x8a6648, 0x9a7658]] },
  fence: { name: 'Cerca', tab: 'casa', price: 350, house: true, lv: [1, 3, 5, 7, 9, 11], opts: [['branca', 'Branca', 0xf3ede2], ['madeira', 'Madeira', 0xb98a5e], ['verde', 'Verde-menta', 0xa8c8a8], ['azul', 'Azul-claro', 0xb0c8dc], ['rosa', 'Rosinha', 0xf2c8d0], ['amarela', 'Amarelinha', 0xf4e2a0]] },
};
// Wardrobe of the first versions (colours were bought one by one). Kept only to convert old saves: the coins spent on colours are given back.
const OLD_STYLE = {
  dress: [180, { salvia: 0x7fa08a, ceu: 0x7fa8c8, rosa: 0xd89aa4, manteiga: 0xe8cf7a, lilas: 0xa894c8, cereja: 0xc8504a, menta: 0x9fd0b8, pessego: 0xf2b48a, marinho: 0x3f5a8a, branco: 0xf6f1e6, uva: 0x7a4a8a, turquesa: 0x4aa8a8, coral: 0xe8806a }],
  pattern: [260, {}], apron: [220, { branco: 0xfaf6ee, rosa: 0xf9d8e0, azul: 0xd4e6f4, amarelo: 0xf9ecc0 }], blouse: [140, { branca: 0xfbf3e4, rosa: 0xf7d0d8, azul: 0xcfe0f2, amarela: 0xf7e8b0, lilas: 0xe0d4f2, verde: 0xd4ecd0 }],
  boots: [150, { mostarda: 0xdfa53c, vermelha: 0xd8483a, verde: 0x5a9a5a, azul: 0x4a7ab8, rosa: 0xe88aa8, branca: 0xf4f0e8, lilas: 0xa88ad8, laranja: 0xf2903a, preta: 0x3a3a44, turquesa: 0x4ab0b0 }],
  ribbon: [110, { coral: 0xe8736a, azul: 0x5a8ac8, sol: 0xf2c84a, lilas: 0x9a7ac8, branca: 0xfaf4ec, verde: 0x6aa87a, rosa: 0xf08ab0, vinho: 0x8a2a4a }],
  scarf: [130, { vermelho: 0xd8483a, azul: 0x5a8ac8, amarelo: 0xf2c84a, rosa: 0xf08ab0, verde: 0x6aa87a }], gloves: [130, { rosa: 0xf0a0b8, verde: 0x7ab87a, amarela: 0xf2d06a, azul: 0x8ab8e0 }],
};
function migrateWardrobe(s) {
  const st = s.style || {}, own = Array.isArray(st.own) ? st.own : [], wear = { ...WEAR0 }, tint = {}, has = {}; let refund = 0;
  const T = (k) => (tint[k] ??= {}), seen = {};
  for (const e of own) { const [k, id] = e.split(':');
    if (k === 'hat' || k === 'hair') { if (piece(k, id)) has[k + ':' + id] = 1; }
    else if (k === 'basket') has['bag:cestinha'] = 1;
    else if (k === 'apron' || k === 'scarf' || k === 'gloves') { if (seen[k]) refund += OLD_STYLE[k][0]; seen[k] = 1; has[{ apron: 'apron:avental', scarf: 'neck:lencinho', gloves: 'hands:luvas' }[k]] = 1; }
    else if (OLD_STYLE[k]) refund += OLD_STYLE[k][0]; }
  const C = (k) => (st[k] && OLD_STYLE[k][1][st[k]]) ?? null;
  if (C('dress') != null) T('bottom:jardineira').c = C('dress'); if (st.pattern && st.pattern !== 'liso') T('bottom:jardineira').p = st.pattern;
  if (C('blouse') != null) T('top:bufante').c = C('blouse'); if (C('boots') != null) T('shoes:galocha').c = C('boots');
  if (st.hat && piece('hat', st.hat)) wear.hat = st.hat; if (st.hair && piece('hair', st.hair)) wear.hair = st.hair;
  if (C('ribbon') != null) { const h = wear.hat; T('hat:' + h)[h === 'palha' || h === 'aba_larga' ? 'c2' : 'c'] = C('ribbon'); }
  if (C('apron') != null) { wear.apron = 'avental'; T('apron:avental').c = C('apron'); } if (C('scarf') != null) { wear.neck = 'lencinho'; T('neck:lencinho').c = C('scarf'); }
  if (C('gloves') != null) { wear.hands = 'luvas'; T('hands:luvas').c = C('gloves'); } if (st.basket === 'com') wear.bag = 'cestinha';
  s.wear = wear; s.tint = tint; s.own = has; if (refund > 0) { s.coins += refund; s.refund = refund; }
  s.style = { own: own.filter((e) => /^(wall|trim|fence):/.test(e)), wall: st.wall, trim: st.trim, fence: st.fence };
}
export const STOCK_MAX = 3; // presents an adult plant can keep waiting
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
  { t: 'Entre em casa pela porta da frente', goal: 1, v: (s) => s.stats.visits || 0, r: 20 },
  { t: 'Plante num vaso dentro de casa', goal: 1, v: (s, g) => g.home.plants(), r: 30 },
  { t: 'Abra a Varanda', goal: 1, v: (s) => +s.zones.includes(1), r: 40 },
  { t: 'Plante num vaso suspenso', goal: 1, v: (s, g) => g.count((p, sp) => sp.type === 'hang'), r: 30 },
  { t: 'Compre um móvel ou enfeite para a casa', goal: 1, v: (s) => s.stats.furn || 0, r: 30 },
  { t: 'Abra a Horta', goal: 1, v: (s) => +s.zones.includes(7), r: 40 },
  { t: 'Plante uma hortaliça', goal: 1, v: (s, g) => g.count((p, sp) => sp.type === 'veg'), r: 30 },
  { t: 'Tenha 3 espécies diferentes em flor', goal: 3, v: (s, g) => g.bloomSpecies(), r: 40 },
  { t: 'Compre uma decoração na loja', goal: 1, v: (s) => s.decor.length, r: 40 },
  { t: 'Compre uma roupa nova no guarda-roupa', goal: 1, v: (s) => s.stats.clothes || 0, r: 40 },
  { t: 'Sente-se um pouco no sofá', goal: 1, v: (s) => s.stats.sits || 0, r: 30 },
  { t: 'Abra os Canteiros do leste', goal: 1, v: (s) => +s.zones.includes(2), r: 60 },
  { t: 'Deixe a casa com 60 de aconchego', goal: 60, v: (s, g) => g.home.comfort(), r: 80 },
  { t: 'Plante uma árvore', goal: 1, v: (s, g) => g.count((p, sp) => sp.type === 'tree'), r: 60 },
  { t: 'Tenha 12 plantas em flor ao mesmo tempo', goal: 12, v: (s, g) => g.blooming(), r: 80 },
  { t: 'Construa a Cozinha', goal: 1, v: (s) => +s.house.rooms.includes('cozinha'), r: 100 },
  { t: 'Cozinhe uma receita no fogão', goal: 1, v: (s) => s.stats.cooked || 0, r: 80 },
  { t: 'Abra o Laguinho', goal: 1, v: (s) => +s.zones.includes(3), r: 100 },
  { t: 'Troque o papel de parede ou o piso de um cômodo', goal: 1, v: (s) => s.house.ownW.length + s.house.ownF.length - 2, r: 80 },
  { t: 'Tenha 5 plantas dentro de casa', goal: 5, v: (s, g) => g.home.plants(), r: 100 },
  { t: 'Plante uma ninfeia no lago', goal: 1, v: (s, g) => g.count((p, sp) => sp.type === 'pond'), r: 60 },
  { t: 'Álbum: veja 12 espécies florirem', goal: 12, v: (s) => s.album.length, r: 120 },
  { t: 'Deixe a casa com 200 de aconchego', goal: 200, v: (s, g) => g.home.comfort(), r: 150 },
  { t: 'Abra a Alameda dos arcos', goal: 1, v: (s) => +s.zones.includes(4), r: 150 },
  { t: 'Construa o Banheiro', goal: 1, v: (s) => +s.house.rooms.includes('banheiro'), r: 150 },
  { t: 'Cubra um arco com uma trepadeira em flor', goal: 1, v: (s, g) => g.count((p, sp) => sp.type === 'arch' && p.grown >= SPECIES[p.sp].grow), r: 150 },
  { t: 'Descubra uma raridade (veja o álbum)', goal: 1, v: (s) => s.hybrids.length, r: 200 },
  { t: 'Tenha 30 plantas em flor', goal: 30, v: (s, g) => g.blooming(), r: 200 },
  { t: 'Tenha 8 peças de roupa diferentes', goal: 8, v: (s) => Object.keys(s.own).length, r: 200 },
  { t: 'Abra o Pomar', goal: 1, v: (s) => +s.zones.includes(5), r: 200 },
  { t: 'Tenha um bichinho ou uma composteira no jardim (lojinha, Criação)', goal: 1, v: (s) => s.items.filter((r) => (DECO_BY[r.k] || {}).prod).length, r: 200 },
  { t: 'Aprenda 8 receitas', goal: 8, v: (s) => Object.keys(s.recipes || {}).length, r: 300 },
  { t: 'Construa o Jardim de inverno', goal: 1, v: (s) => +s.house.rooms.includes('inverno'), r: 250 },
  { t: 'Deixe a casa com 500 de aconchego', goal: 500, v: (s, g) => g.home.comfort(), r: 300 },
  { t: 'Tenha 3 árvores em flor', goal: 3, v: (s, g) => g.count((p, sp) => sp.type === 'tree' && p.grown >= SPECIES[p.sp].grow), r: 250 },
  { t: 'Abra o Prado das flores', goal: 1, v: (s) => +s.zones.includes(6), r: 300 },
  { t: 'Álbum: veja 30 espécies florirem', goal: 30, v: (s) => s.album.length, r: 400 },
  { t: 'Tenha 60 plantas em flor', goal: 60, v: (s, g) => g.blooming(), r: 600 },
  { t: 'Construa a Estufa', goal: 1, v: (s) => +s.zones.includes(8), r: 500 },
  { t: 'Abra a Horta grande', goal: 1, v: (s) => +s.zones.includes(9), r: 600 },
  { t: 'Abra o Bosque', goal: 1, v: (s) => +s.zones.includes(15), r: 700 },
  { t: 'Construa a Estufa grande', goal: 1, v: (s) => +s.zones.includes(12), r: 900 },
  { t: 'Tenha 20 plantas dentro de casa', goal: 20, v: (s, g) => g.home.plants(), r: 500 },
  { t: 'Tenha 6 cômodos na casa', goal: 6, v: (s) => s.house.rooms.length, r: 600 },
  { t: 'Deixe a casa com 1500 de aconchego', goal: 1500, v: (s, g) => g.home.comfort(), r: 800 },
  { t: 'Tenha todos os 12 cômodos da casa', goal: 12, v: (s) => s.house.rooms.length, r: 2000 },
  { t: 'Complete o álbum de flores', goal: SPECIES_LIST.length, v: (s) => s.album.length, r: 1000 },
];

const fresh = () => ({ v: 1, coins: 45, xp: 0, zones: [0], decor: [], upg: [], plants: {}, quest: 0, album: [], stats: { planted: 0, watered: 0, collected: 0, blooms: 0, orders: 0, weeds: 0, prunes: 0, fert: 0 }, hour: 8.6, pace: PACE_V, days: 0, dayKey: '', last: Date.now(), t0: Date.now(), tips: {},
  recent: [], style: { own: [] }, wear: { ...WEAR0 }, tint: {}, own: {}, seedbox: {}, mast: {}, recipes: {}, friends: {}, items: [], stored: {}, basket: {}, orders: [], orderT: 0, adubo: 0, daily: { last: '', streak: 0, best: 0 }, weeds: {}, wilt: {}, ach: {}, log: [], hybrids: [], seen: [], seasonsSeen: [], rare: {}, paint: {}, outfit: {}, settings: { music: 0.6, sfx: 0.8, quality: 'auto', time: 'auto' } });

// Turns whatever was stored (possibly by an older version of the game) into a complete, current state.
export function normalize(raw) {
  const f = fresh(); if (!raw || raw.v !== 1) return f;
  const oldWardrobe = !raw.wear;
  if (raw.pace == null) raw.pace = 1;
  if (raw.days == null) { raw.days = Math.floor((Date.now() - (raw.t0 || Date.now())) / 86400000) + 1; raw.dayKey = ''; } // older saves counted calendar days
  const s = Object.assign(f, raw, { settings: Object.assign(fresh().settings, raw.settings), stats: Object.assign(fresh().stats, raw.stats), daily: Object.assign(fresh().daily, raw.daily) });
  for (const k of ['zones', 'decor', 'upg', 'album', 'orders', 'log', 'hybrids', 'seen', 'seasonsSeen', 'items', 'recent']) if (!Array.isArray(s[k])) s[k] = fresh()[k];
  for (const k of ['plants', 'tips', 'basket', 'weeds', 'wilt', 'ach', 'rare', 'stored']) if (!s[k] || typeof s[k] !== 'object') s[k] = {};
  if (!s.style || !Array.isArray(s.style.own)) s.style = { own: [] };
  if (oldWardrobe) migrateWardrobe(s); for (const k of ['wear', 'tint', 'own', 'seedbox', 'mast', 'recipes', 'friends']) if (!s[k] || typeof s[k] !== 'object') s[k] = k === 'wear' ? { ...WEAR0 } : {};
  if (!s.zones.includes(0)) s.zones.unshift(0); if (!s.t0) s.t0 = Date.now();
  return s;
}
export function loadState() { let raw = null; try { raw = JSON.parse(localStorage.getItem(SAVE_KEY)); } catch (e) {} return normalize(raw || window.__SAVE); }

export function createGame({ scene, world, fx, audio, gardener, nav: gardenNav, env, ui, state, store, house }) {
  const G = { state, tasks: [], cur: null, time: 0, rainT: 240 + Math.random() * 200, raining: 0, inside: false, gardenScene: scene };
  const nav = { path: (...a) => (G.inside ? house.nav : gardenNav).path(...a), invalidate: () => gardenNav.invalidate() };
  const S = state, V = {}; // V: visuals per spot
  G.gp = gardener.group.position;
  const tex = bubbleTextures();
  const bubbleMat = { water: new THREE.SpriteMaterial({ map: tex.water, depthTest: false, transparent: true }), gift: new THREE.SpriteMaterial({ map: tex.gift, depthTest: false, transparent: true }),
    weed: new THREE.SpriteMaterial({ map: tex.weed, depthTest: false, transparent: true }), prune: new THREE.SpriteMaterial({ map: tex.prune, depthTest: false, transparent: true }), seed: new THREE.SpriteMaterial({ map: tex.seed, depthTest: false, transparent: true }),
    order: new THREE.SpriteMaterial({ map: tex.order, depthTest: false, transparent: true }), daily: new THREE.SpriteMaterial({ map: tex.daily, depthTest: false, transparent: true }), plus: new THREE.SpriteMaterial({ map: tex.plus, transparent: true, opacity: 0.85, depthWrite: false }) };
  const dry = new THREE.Color(0x6b4e3a), wetC = new THREE.Color(0x3a281e);

  G.save = (force) => { if (store) store.save(S, force); else { S.last = Date.now(); try { localStorage.setItem(SAVE_KEY, JSON.stringify(S)); } catch (e) {} } };
  G.store = store;
  const save = () => G.save();
  G.reset = async () => { G.save = () => {}; if (store) await store.wipe(); else { try { localStorage.removeItem(SAVE_KEY); } catch (e) {} } };
  const level = () => { let l = 1; while (l < LV.length && S.xp >= LV[l]) l++; return l; };
  G.level = level; G.addCoins = (n) => addCoins(n); G.addXp = (n) => addXp(n);
  const has = (u) => S.upg.includes(u);
  const waterMax = () => WATER_MAX * (has('can2') ? 2 : 1);
  const waterR = () => (has('can2') ? 3.3 : has('can1') ? 2.2 : 1.35);
  const stageOf = (p) => { const f = p.grown / SPECIES[p.sp].grow; return f >= 1 ? 4 : f >= 0.45 ? 3 : f >= 0.12 ? 2 : 1; };
  G.count = (fn) => { let n = 0; for (const id in S.plants) if (!fn || fn(S.plants[id], world.spots[id])) n++; return n; };
  G.blooming = () => G.count((p) => p.grown >= SPECIES[p.sp].grow);
  G.bloomSpecies = () => { const set = new Set(); for (const id in S.plants) { const p = S.plants[id]; if (p.grown >= SPECIES[p.sp].grow) set.add(p.sp); } return set.size; };
  G.beauty = () => { let b = 0; for (const id in S.plants) { const p = S.plants[id], sp = SPECIES[p.sp]; b += Math.round(sp.price * (p.grown >= sp.grow ? 0.5 : 0.12)); } for (const d of S.decor) b += DECOR.find((x) => x.id === d)?.beauty ?? 0; for (const r of S.items) b += DECO_BY[r.k]?.beauty ?? 0; return b; };

  // ---------- visuals ----------
  const makeSprite = (mat, s, sc = scene) => { const sp = new THREE.Sprite(mat); sp.scale.setScalar(s); sp.renderOrder = 10; sp.visible = false; sc.add(sp); return sp; };
  const live = (spot) => (spot.indoor ? spot.active : S.zones.includes(spot.zone)); // can she use this place now?
  for (const spot of world.spots) {
    const top = spot.type === 'hang' ? -0.02 : spot.type === 'tree' ? 0.5 : spot.type === 'arch' ? 1.1 : 0.3;
    V[spot.id] = { mesh: null, stage: 0, pop: 1, droop: 0, plus: makeSprite(bubbleMat.plus, spot.indoor ? 0.2 : spot.type === 'window' ? 0.2 : 0.3, spot.scene), bubble: makeSprite(bubbleMat.water, spot.indoor ? 0.34 : 0.42, spot.scene), top };
    V[spot.id].plus.position.copy(spot.pos).y += top;
    if (spot.type === 'arch') V[spot.id].plus.position.x -= 0.75;
  }
  const rebuild = (spot) => {
    const v = V[spot.id], p = S.plants[spot.id];
    if (v.mesh) { v.mesh.parent && v.mesh.parent.remove(v.mesh); v.mesh.geometry.dispose(); v.mesh.material.dispose(); v.mesh = null; }
    if (!p) { v.stage = 0; return; }
    const sp = SPECIES[p.sp], st = stageOf(p);
    const m = new THREE.Mesh(buildPlantGeometry(p.sp, p.seed, st), plantMaterialFor(p.sp));
    m.castShadow = true; m.receiveShadow = true; m.position.copy(spot.pos); if (!sp.fixedRot) m.rotation.y = p.seed * 1.7;
    (spot.scene || scene).add(m); v.mesh = m; v.stage = st; v.h = sp.h * spot.scale * (sp.tree ? [0, 0.15, 0.5, 0.8, 1][st] : [0, 0.15, 0.6, 0.9, 1][st]);
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
  const stockCap = (sp, p) => (sp.crop ? Math.max(1, Math.min(STOCK_MAX, sp.crop === 1 ? 1 : sp.crop - (p.cuts || 0))) : STOCK_MAX);
  const thirstOf = (sp, spot) => (spot.type === 'green' ? 0 : sp.thirst ?? 1); // the greenhouse keeps everything moist
  const outOfSeason = (sp, spot) => sp.season != null && spot.type !== 'green' && !spot.indoor && sp.season !== G.sys.season().id;
  const growMul = (id, sp, spot) => G.sys.growMul(id, sp) * (spot.indoor && spot.glass ? 1.6 : 1); // glass rooms are little greenhouses
  // an indoor place moved with its piece of furniture (or is being carried: hide)
  const moveSpot = (spot, hide) => { const v = V[spot.id]; v.plus.position.copy(spot.pos).y += spot.type === 'hang' ? 0.06 : 0.2 * spot.scale; if (v.mesh) { v.mesh.position.copy(spot.pos); v.mesh.visible = !hide; } spot.hidden = !!hide; if (hide) { v.plus.visible = false; v.bubble.visible = false; } };

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
    if (G.tasks.length >= 30) return false;
    G.tasks.push({ kind, spot, ...extra }); return true;
  };
  // a seed that was not planted after all goes back where it came from (her purse, or the box of saved seedlings)
  const refund = (t) => { if (t.box) S.seedbox[t.sp] = (S.seedbox[t.sp] || 0) + 1; else S.coins += t.paid ?? SPECIES[t.sp].price; t.spot.pending = null; };
  const cancelAll = () => { for (const t of G.tasks) if (t.kind === 'plant') { refund(t); } G.tasks.length = 0; ui.hud(); };
  const endBusy = () => { const c = G.cur; if (c && c.phase === 'busy') { G.cur = null; c.end && c.end(); } };
  G.clearTasks = () => { cancelAll(); endBusy(); if (G.cur && G.cur.kind === 'plant') { refund(G.cur); ui.hud(); } G.cur = null; gardener.stop(); };
  // walk somewhere and then do something; stay busy for a while (sitting, sleeping, dancing)
  G.walkThen = (x, z, then) => { cancelAll(); endBusy(); if (G.cur && G.cur.phase === 'act') return false; if (G.cur && G.cur.kind === 'plant') { refund(G.cur); ui.hud(); } G.cur = { kind: 'move', path: walkTo(x, z), phase: 'walk', then }; ui.closeCards(); return true; };
  G.busy = (dur, tick, end) => { G.cur = { kind: 'busy', phase: 'busy', t: 0, dur, tick, end }; };

  G.tapGround = (x, z) => {
    cancelAll(); endBusy();
    if (G.cur && G.cur.phase === 'act') return; // let her finish what she is doing
    if (G.cur && G.cur.kind === 'plant') { refund(G.cur); ui.hud(); }
    G.cur = { kind: 'move', path: walkTo(x, z), phase: 'walk' };
    ui.closeCards();
  };
  G.tapSpot = (spot) => {
    if (G.placing) return;
    if (spot.indoor ? !spot.active || spot.hidden : !S.zones.includes(spot.zone)) { if (!spot.indoor) G.offerZone(spot.zone); return; }
    endBusy();
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
      return { sp, stage: stageOf(q), grow: clamp(q.grown / sp.grow, 0, 1), water: thirstOf(sp, spot) === 0 ? 1 : clamp(q.wet / waterMax(), 0, 1), noWater: thirstOf(sp, spot) === 0, green: spot.type === 'green', gift: q.grown >= sp.grow ? ((q.stock || 0) >= stockCap(sp, q) ? 1 : clamp(q.giftT / sp.every, 0, 1)) : 0, crop: sp.crop || 0, cropLeft: sp.crop ? Math.max(1, sp.crop - (q.cuts || 0)) : 0, stars: starsOf(S.mast[q.sp] || 0), mast: S.mast[q.sp] || 0, stock: q.stock || 0, ready: q.ready, left: Math.max(0, sp.grow - q.grown), info: sp.info, adubo: S.adubo, inSeason: G.sys.inSeason(sp), weed: !!S.weeds[spot.id] }; },
    { water: () => pushAct('water', spot), remove: () => pushAct('remove', spot), fert: () => G.fertilize(spot) });
  };
  const fits = (s, spot) => s.spots.includes(spot.type) || (spot.type === 'green' && s.spots.includes('pot'));
  const speciesFor = (spot) => SPECIES_LIST.filter((s) => fits(s, spot) && (!s.hybrid || S.hybrids.includes(s.id))).map((s) => ({ sp: s, box: S.seedbox[s.id] || 0, locked: s.lvl > level() && !S.seedbox[s.id], off: outOfSeason(s, spot), afford: S.coins >= s.price || S.seedbox[s.id] > 0, cat: s.hybrid ? 'rara' : s.veg ? 'horta' : s.foliage ? 'folhagem' : 'flor' }));
  G.speciesFor = speciesFor;
  // empty places that belong to the same bed / window box / shelf as this one (the tapped one first)
  G.siblings = (spot) => (spot.indoor && spot.item ? world.spots.filter((s) => s.item === spot.item && s.active && s.type === spot.type && !S.plants[s.id] && !s.pending).sort((a, b) => (a === spot ? -1 : b === spot ? 1 : 0)) : spot.group ? world.spots.filter((s) => s.group === spot.group && s.zone === spot.zone && !S.plants[s.id] && !s.pending).sort((a, b) => (a === spot ? -1 : b === spot ? 1 : a.pos.distanceTo(spot.pos) - b.pos.distanceTo(spot.pos))) : [spot]);
  G.choose = (spot, id, opts = {}) => {
    const sp = SPECIES[id], box = (S.seedbox[id] || 0) > 0, price = box ? 0 : sp.price;
    if (sp.lvl > level() && !box) { audio.sfx('error'); ui.toast(`${sp.name} chega no nível ${sp.lvl}`, 'warn'); return false; }
    if (outOfSeason(sp, spot)) { audio.sfx('error'); ui.toast(`${sp.name} só nasce ${['na primavera', 'no verão', 'no outono', 'no inverno'][sp.season]} (ou na estufa)`, 'warn'); return false; }
    if (S.coins < price) { audio.sfx('error'); ui.toast('Faltam moedas. Recolha os presentes das flores!', 'warn'); return false; }
    if (S.plants[spot.id] || spot.pending) return false;
    if (G.tasks.length >= 26) { audio.sfx('error'); ui.toast('A Eliane já tem bastante coisa para fazer. Espere ela terminar um pouquinho.', 'info'); return false; } // never charge for a seed she cannot queue
    S.coins -= price; if (box) S.seedbox[id]--; spot.pending = id; ui.hud(); if (!opts.quiet) audio.sfx('buy', 0.7);
    S.recent = [id, ...S.recent.filter((x) => x !== id)].slice(0, 12);
    pushAct('plant', spot, { sp: id, paid: price, box });
    if (!opts.noWater && thirstOf(sp, spot) !== 0 && !has('sprinkler')) pushAct('water', spot);
    return true;
  };
  // fill every empty place of the bed with the same plant: plant them all first, then water the lot
  G.chooseMany = (spot, id) => { const list = G.siblings(spot), done = []; for (const s of list) { if (done.length && ((S.coins < SPECIES[id].price && !(S.seedbox[id] > 0)) || G.tasks.length >= 24)) break; if (!G.choose(s, id, { noWater: true, quiet: done.length > 0 })) { if (!done.length) return 0; break; } done.push(s); }
    if (!has('sprinkler')) for (const s of done) if (thirstOf(SPECIES[id], s) !== 0) pushAct('water', s);
    if (done.length > 1) ui.toast(`${done.length} mudas de ${SPECIES[id].name} a caminho do canteiro`, 'good'); return done.length; };
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
    const it = { rec, def, group, pick, pop: animate ? 0 : 1 }; pick.userData.item = it; items.push(it);
    if (def.prod) { it.bub = makeSprite(bubbleMat.gift, 0.46); it.bub.position.set(rec.x, h + 0.35, rec.z); } return it; };
  const dropItem = (it, keepGroup) => { if (it.bub) scene.remove(it.bub); if (!keepGroup) scene.remove(it.group); scene.remove(it.pick); const i = items.indexOf(it); if (i >= 0) items.splice(i, 1); };
  const showGhost = () => { const p = G.placing; if (!p) { ring.visible = false; return; } p.group.position.set(p.x, 0, p.z); p.group.rotation.y = p.rot; p.ok = world.canPlace(p.x, p.z, p.def.r, null, S.zones, p.def.water);
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
  // the hen house, the beehive and friends keep something waiting for her (up to three)
  const PROD_MAX = 3;
  G.takeProd = (it) => { const pr = it.def.prod, n = it.rec.pn || 0; if (!pr || !n) return; const a = it.rec.r || 0, d = it.def.r + 0.35;
    G.walkThen(it.rec.x + Math.sin(a) * d, it.rec.z + Math.cos(a) * d, () => { const k = it.rec.pn || 0; if (!k) return; gardener.faceTo(it.rec.x, it.rec.z); gardener.play('collect', 1.1); it.rec.pn = 0; const at = new THREE.Vector3(it.rec.x, 1.2, it.rec.z);
      if (pr.coins) { const amt = pr.coins * k; S.coins += amt; ui.floatText(at, '+' + amt, 'coin'); audio.sfx('coin', 0.6); addXp(Math.ceil(amt / 6)); } if (pr.adubo) { S.adubo += pr.adubo * k; ui.toast(`+${pr.adubo * k} adubo da composteira`, 'good'); audio.sfx('pop', 0.6); }
      S.stats.prod = (S.stats.prod || 0) + k; fx.sparkle(at, 14); ui.hud(); checkQuest(); save(); }); };
  G.tapItem = (it) => { if (it.def.prod && it.rec.pn) { audio.sfx('click', 0.35); ui.closeCards(); G.takeProd(it); return; } audio.sfx('click', 0.35); ui.decoCard(it); };
  const tickItems = (dt) => { for (const it of items) { const u = it.group.userData;
      if (it.def.prod) { const r = it.rec; if ((r.pn || 0) < PROD_MAX) { r.pt = (r.pt || 0) + dt; if (r.pt >= it.def.prod.every) { r.pt = 0; r.pn = (r.pn || 0) + 1; audio.sfx('pop', 0.3, 1.2); } } it.bub.visible = (r.pn || 0) > 0 && !G.inside; it.bub.position.y = Math.max(1.1, it.pick.position.y * 2) + 0.4 + Math.sin(G.time * 2.4 + r.x) * 0.04; } if (u.tick) u.tick(dt, G.time, env.night, fx, it.group.position); if (u.glow) for (const m of u.glow) m.emissiveIntensity = m.userData.e * Math.max(env.night, u.dayGlow || 0);
      if (it.pop < 1) { it.pop = Math.min(1, it.pop + dt * 2.2); it.group.scale.setScalar(0.6 + 0.4 * easeOutBack(it.pop)); }
      if (it.def.water && world.inPond(it.rec.x, it.rec.z)) { const ph = it.rec.x * 3 + it.rec.z; it.group.position.y = 0.012 + Math.sin(G.time * 1.3 + ph) * 0.012; it.group.rotation.z = Math.sin(G.time * 0.9 + ph) * 0.03; } } // floating on the pond
    const p = G.placing; if (p) { const u = p.group.userData; if (u.tick) u.tick(dt, G.time, env.night, null, p.group.position); ring.material.opacity = 0.6 + 0.25 * Math.sin(G.time * 5); } };

  const refreshMarkers = () => { for (const spot of world.spots) V[spot.id].plus.visible = live(spot) && !spot.hidden && !S.plants[spot.id] && !spot.pending; };

  // effects of each action
  const doWater = (spot) => {
    const r = waterR(), m = waterMax(); let n = 0;
    for (const id in S.plants) { const o = world.spots[id]; if (!o.indoor === !spot.indoor && o.pos.distanceTo(spot.pos) <= (spot.indoor ? Math.min(r, 1.1) : r) + 0.01 && (Math.abs(o.pos.y - spot.pos.y) < 1.2)) { const p = S.plants[id]; if (thirstOf(SPECIES[p.sp], o) === 0) continue; p.wet = m; n++; fx.splash(o.pos, 5); } }
    S.stats.watered += Math.max(1, n); addXp(1); checkQuest();
  };
  const doPlant = (t) => {
    const spot = t.spot; spot.pending = null;
    S.plants[spot.id] = { sp: t.sp, seed: 1 + Math.floor(Math.random() * 9999), grown: 0, wet: 0, giftT: 0, ready: false };
    S.stats.planted++; if (spot.indoor) S.stats.inplant = (S.stats.inplant || 0) + 1; rebuild(spot); V[spot.id].pop = 0; fx.dust(spot.pos, 12); audio.sfx('plant'); addXp(3); checkQuest(); refreshMarkers(); save();
  };
  // mastery: every species earns up to three stars as she keeps looking after it
  const STAR = [10, 40, 120], starsOf = (m) => (m >= STAR[2] ? 3 : m >= STAR[1] ? 2 : m >= STAR[0] ? 1 : 0);
  G.stars = (id) => starsOf(S.mast[id] || 0); G.starsTotal = () => { let n = 0; for (const k in S.mast) n += starsOf(S.mast[k]); return n; }; G.STAR = STAR;
  const master = (id, n) => { const a = starsOf(S.mast[id] || 0); S.mast[id] = (S.mast[id] || 0) + n; const b = starsOf(S.mast[id]); if (b > a) { const sp = SPECIES[id], prize = Math.round((sp.gift * [0, 3, 8, 20][b]) / 5) * 5; S.coins += prize; audio.sfx('levelup', 0.6); ui.toast(`${'★'.repeat(b)} Você já é ${['', 'boa', 'ótima', 'mestra'][b]} em ${sp.name}! +${prize} moedas`, 'good'); addXp(10 * b); } };
  const doCollect = (spot) => {
    let total = 0; const harvested = [];
    for (const id in S.rare) { const o = world.spots[id]; if (!o || !o.indoor !== !spot.indoor || o.pos.distanceTo(spot.pos) > Math.max(1.4, waterR()) + 0.01) continue; G.sys.takeRare && G.sys.takeRare(id); }
    for (const id in S.plants) { const o = world.spots[id], p = S.plants[id]; if (!p.ready || !o.indoor !== !spot.indoor || o.pos.distanceTo(spot.pos) > Math.max(1.4, waterR()) + 0.01) continue;
      const sp = SPECIES[p.sp], n = sp.crop === 1 ? 3 : Math.max(1, p.stock || 1), amt = Math.round(sp.gift * n * G.sys.giftMul(sp)); p.ready = false; p.stock = 0; total += amt; S.stats.collected += n;
      S.basket[p.sp] = Math.min(99, (S.basket[p.sp] || 0) + n); master(p.sp, n);
      const at = o.pos.clone(); at.y += V[id].h * 0.7 + 0.2; fx.sparkle(at, 12); ui.floatText(at, '+' + amt, 'coin'); G.sys.afterGift && G.sys.afterGift(id);
      // vegetables are a real crop: after the last harvest the place is free again
      p.cuts = (p.cuts || 0) + (sp.crop === 1 ? 1 : n); if (sp.crop && p.cuts >= sp.crop) { harvested.push(sp.name); delete S.weeds[id]; delete S.wilt[id]; delete S.plants[id]; rebuild(o); fx.dust(o.pos, 12); S.stats.harvests = (S.stats.harvests || 0) + 1; } }
    if (harvested.length) { refreshMarkers(); if (!S.tips.crop) { S.tips.crop = 1; ui.toast(`Colheita de ${harvested[0]}! As hortaliças liberam o lugar depois de colhidas: é só plantar de novo.`, 'good'); } else ui.toast(harvested.length > 1 ? `Colheita feita: ${harvested.length} lugares livres para replantar` : `Colheita de ${harvested[0]} feita. O lugar está livre de novo.`, 'info'); }
    if (total) { S.coins += total; audio.sfx('coin', 0.6); addXp(Math.ceil(total / 3)); ui.hud(); checkQuest(); save(); }
  };
  const doWeed = (spot) => { if (!S.weeds[spot.id]) return; delete S.weeds[spot.id]; S.stats.weeds = (S.stats.weeds || 0) + 1; fx.dust(V[spot.id].weed ? V[spot.id].weed.position : spot.pos, 10); audio.sfx('plant', 0.7, 1.25);
    const at = spot.pos.clone(); at.y += 0.4; S.coins += 3; ui.floatText(at, '+3', 'coin'); addXp(2); ui.hud(); };
  const doPrune = (spot) => { const p = S.plants[spot.id]; if (!p || !S.wilt[spot.id]) return; delete S.wilt[spot.id]; S.stats.prunes = (S.stats.prunes || 0) + 1;
    const sp = SPECIES[p.sp], amt = Math.round(sp.gift * 1.5 * G.sys.giftMul(sp)); p.giftT = 0; S.coins += amt; S.basket[p.sp] = Math.min(99, (S.basket[p.sp] || 0) + 2); S.stats.collected++; master(p.sp, 1);
    const at = spot.pos.clone(); at.y += V[spot.id].h * 0.7 + 0.2; fx.sparkle(at, 18, 0xffd0e0); ui.floatText(at, '+' + amt, 'coin'); audio.sfx('coin', 0.6, 1.15); addXp(Math.ceil(amt / 3)); ui.hud(); G.sys.afterGift(spot.id); save(); };
  G.fertilize = (spot) => { const p = S.plants[spot.id]; if (!p || S.adubo < 1) return; const sp = SPECIES[p.sp]; if (p.grown >= sp.grow) { ui.toast('Esta planta já está adulta', 'info'); return; }
    S.adubo--; S.stats.fert = (S.stats.fert || 0) + 1; p.grown = Math.min(sp.grow, p.grown + sp.grow * 0.25); const at = spot.pos.clone(); at.y += 0.3; fx.sparkle(at, 20, 0xb8f08a, 0.3); audio.sfx('bloom', 0.6, 1.2); addXp(2); save(); };
  G.tapThing = (kind) => { audio.sfx('click', 0.35); if (kind === 'orders') ui.orders(); else if (kind === 'mail') ui.daily(); else if (kind === 'eliane') ui.wardrobe(); else if (kind === 'house') ui.door(); else if (kind === 'visitor' && G.visitor) G.visitor.tap(); };
  const styleOf = (k) => { const o = STYLE[k].opts; return o.find((x) => x[0] === S.style[k]) || o[0]; };
  G.applyStyle = () => { gardener.wear(resolveWear(S.wear, S.tint));
    const t = styleOf('trim'), key = [styleOf('wall')[0], t[0], styleOf('fence')[0]].join();
    if (G._painted !== key) { if (G._painted || key !== 'creme,mar,branca') { world.paintHouse({ wall: styleOf('wall')[2], door: t[2], shut: t[3] }); world.paintFence(styleOf('fence')[2]); } G._painted = key; } };
  G.pickStyle = (k, id) => { const def = STYLE[k], i = def.opts.findIndex((x) => x[0] === id), opt = def.opts[i]; if (!opt) return false; const own = i === 0 || S.style.own.includes(k + ':' + id), need = (def.lv && def.lv[i]) || 1;
    if (!own && level() < need) { audio.sfx('error'); ui.toast(`Chega no nível ${need}`, 'warn'); return false; }
    if (!own) { if (S.coins < def.price) { audio.sfx('error'); ui.toast(`Faltam ${def.price - S.coins} moedas para esta tinta`, 'warn'); return false; } S.coins -= def.price; S.style.own.push(k + ':' + id); audio.sfx('buy'); ui.hud(); }
    else audio.sfx('click', 0.5);
    S.style[k] = id; G.applyStyle(); save(); return true; };
  // ----- wardrobe: she buys pieces; the colours and prints of a piece she owns are free -----
  const owns = (slot, id) => { const pc = piece(slot, id); return !!pc && (pc.price === 0 || !!S.own[slot + ':' + id]); };
  const curId = (slot) => (S.wear[slot] === undefined ? WEAR0[slot] : S.wear[slot]);
  G.ward = {
    owns, cur: curId, owned: () => Object.keys(S.own).length,
    put: (slot, id) => { if (id == null) { if (slot !== 'dress') return false; S.wear.dress = null; } else { if (!owns(slot, id)) return false; S.wear[slot] = id; if (slot === 'top' || slot === 'bottom') S.wear.dress = null; }
      audio.sfx('click', 0.5); G.applyStyle(); save(); return true; },
    buy: (slot, id) => { const pc = piece(slot, id); if (!pc || owns(slot, id)) return false;
      if (level() < pc.lvl) { audio.sfx('error'); ui.toast(`${pc.name} chega no nível ${pc.lvl}`, 'warn'); return false; }
      if (S.coins < pc.price) { audio.sfx('error'); ui.toast(`Faltam ${pc.price - S.coins} moedas para ${pc.name}`, 'warn'); return false; }
      S.coins -= pc.price; S.own[slot + ':' + id] = 1; S.wear[slot] = id; if (slot === 'top' || slot === 'bottom') S.wear.dress = null; S.stats.clothes = (S.stats.clothes || 0) + 1;
      audio.sfx('buy'); G.applyStyle(); fx.burst(gardener.group.position, [pc.c ?? 0xff9ab8, 0xffffff, 0xffe680], 30, 1); gardener.play('cheer', 1.3); addXp(6); ui.hud(); save(); return true; },
    tint: (slot, id, t) => { if (!owns(slot, id)) return; const k = slot + ':' + id; S.tint[k] = { ...(S.tint[k] || {}), ...t }; G.applyStyle(); save(); },
    hair: (id) => { S.tint.hair = id; G.applyStyle(); save(); },
    look: (slot) => resolveWear(S.wear, S.tint)[slot],
  };
  const doRemove = (spot) => { const gone = S.plants[spot.id]; if (gone && SPECIES[gone.sp]) { S.seedbox[gone.sp] = Math.min(99, (S.seedbox[gone.sp] || 0) + 1); ui.toast(`Muda de ${SPECIES[gone.sp].name} guardada. Ela volta de graça quando você quiser replantar.`, 'info'); }
    delete S.weeds[spot.id]; delete S.wilt[spot.id]; delete S.rare[spot.id]; delete S.plants[spot.id]; rebuild(spot); fx.dust(spot.pos, 14); audio.sfx('plant', 0.8, 0.8); refreshMarkers(); ui.closeCards(); checkQuest(); save(); };

  const DUR = { water: 2.1, plant: 1.9, collect: 1.1, admire: 1.6, remove: 1.7, weed: 1.5, prune: 1.2 };
  const startNext = () => {
    const t = G.tasks.shift(); if (!t) { G.cur = null; return; }
    if (!t.spot.indoor !== !G.inside) { if (t.kind === 'plant') { refund(t); ui.hud(); } return startNext(); }
    if (t.kind !== 'plant' && !S.plants[t.spot.id]) return startNext();
    if (t.kind === 'collect' && !S.plants[t.spot.id].ready && !S.rare[t.spot.id]) return startNext();
    if ((t.kind === 'weed' && !S.weeds[t.spot.id]) || (t.kind === 'prune' && !S.wilt[t.spot.id])) return startNext();
    if (t.kind === 'water' && S.plants[t.spot.id].wet >= waterMax() * 0.9) return startNext(); // a neighbour's watering already reached it
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
        if (c.kind === 'move') { gardener.stop(); G.cur = null; if (c.then) c.then(); }
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
    } else if (c.phase === 'busy') { c.t += dt; gardener.speed = 0; if (c.tick) c.tick(dt, c.t); if (c.t >= c.dur) endBusy();
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
    gp.y = G.inside ? G.climbY ?? 0 : groundY(gp.x, gp.z); // climbY: on the stairs

    // --- time, rain ---
    const mode = S.settings.time;
    if (mode === 'auto') S.hour = (S.hour + dt * (S.hour > 6 && S.hour < 19 ? 13 / 1800 : 11 / 480)) % 24; // a day lasts about half an hour, the night about eight minutes
    else if (mode !== 'fixo') { const tgt = { dia: 10, tarde: 17.3, noite: 22 }[mode]; let d = tgt - S.hour; if (d > 12) d -= 24; if (d < -12) d += 24; S.hour = (S.hour + d * Math.min(1, dt * 0.8) + 24) % 24; }
    G.rainT -= dt;
    if (G.rainT < 0 && G.rainT > -50) { if (!G.rainOn) { G.rainOn = true; if (G.count() > 0) ui.toast('Uma chuvinha! As plantas agradecem.', 'info'); } G.raining = Math.min(1, G.raining + dt * 0.3);
      if (G.raining > 0.6) for (const id in S.plants) if (!world.spots[id].indoor) S.plants[id].wet = Math.max(S.plants[id].wet, waterMax() * 0.9); }
    else { G.raining = Math.max(0, G.raining - dt * 0.25); if (G.rainT <= -50) { G.rainT = 420 + Math.random() * 300; G.rainOn = false; } }
    fx.rain = G.raining;
    if (fx.rainbowT > 68 && !G._rb) { G._rb = 1; S.stats.rainbows = (S.stats.rainbows || 0) + 1; if (!G.inside) ui.toast('Olhe para o céu: um arco-íris!', 'good'); } else if (fx.rainbowT <= 0) G._rb = 0;

    // --- plants ---
    const sprink = has('sprinkler'), wm = waterMax();
    const firstBoost = S.stats.blooms === 0 ? 12 : 1, giftBoost = S.stats.collected === 0 ? 12 : 1; // the very first flower and gift come quickly, to teach the loop
    const targets = fx.butterflyTargets; targets.length = 0; let blooms = 0;
    for (const id in S.plants) {
      const p = S.plants[id], sp = SPECIES[p.sp], spot = world.spots[id], v = V[id];
      const th = thirstOf(sp, spot);
      if (sprink && !spot.indoor) p.wet = wm;
      const hyd = th === 0 || p.wet > 0;
      if (th > 0) p.wet = Math.max(0, p.wet - dt * th);
      if (hyd) { if (p.grown < sp.grow) p.grown = Math.min(sp.grow, p.grown + dt * firstBoost * growMul(id, sp, spot)); else if ((p.stock || 0) < stockCap(sp, p)) { p.giftT += dt * giftBoost; if (p.giftT >= sp.every) { p.giftT = 0; p.stock = (p.stock || 0) + 1; if (!p.ready) audio.sfx('pop', 0.35, 1.3); p.ready = true; } } }
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
      v.mesh.scale.setScalar(sc); if (spot.indoor) v.mesh.visible = !spot.hidden;
      const targetDroop = hyd ? 0 : 0.85; v.droop += (targetDroop - v.droop) * Math.min(1, dt * 1.5); v.mesh.material.userData.u.uDroop.value = v.droop;
      if (spot.soil) spot.soil.material.color.copy(dry).lerp(wetC, th === 0 ? 1 : clamp(p.wet / wm * 2, 0, 1));
      // bubble
      const need = S.rare[id] ? 'seed' : p.ready ? 'gift' : S.wilt[id] ? 'prune' : S.weeds[id] ? 'weed' : !hyd ? 'water' : null, b = v.bubble;
      setWeed(id, !!S.weeds[id]); if (v.weed) v.weed.scale.setScalar(Math.min(1, v.weed.scale.x + dt * 2) * 1);
      if (need && !spot.hidden) { b.visible = true; b.material = bubbleMat[need]; b.position.copy(spot.pos); b.position.y += Math.max(0.5, v.h + 0.25) + Math.sin(G.time * 2.4 + spot.id) * 0.04; if (spot.type === 'arch') b.position.y = 2.6; }
      else b.visible = false;
      if (st === 4) { blooms++; if (!sp.tree && !sp.climber && !spot.indoor && targets.length < 24) targets.push({ x: spot.pos.x, y: spot.pos.y + v.h * 0.85, z: spot.pos.z }); if (sp.petal && !spot.indoor && Math.random() < dt * 1.6) fx.petalFall(new THREE.Vector3(spot.pos.x, spot.pos.y + 3.2, spot.pos.z), sp.petal, 1.6); }
    }
    for (const spot of world.spots) { if (!S.plants[spot.id]) { V[spot.id].bubble.visible = false; if (V[spot.id].weed) setWeed(spot.id, false); if (spot.soil && !spot.pending) spot.soil.material.color.lerp(dry, dt); } const pl = V[spot.id].plus; if (pl.visible) pl.material.opacity = 0.7 + 0.2 * Math.sin(G.time * 2); }
    fx.butterflyCount = Math.min(9, Math.floor(blooms / 2) + (blooms > 0 ? 1 : 0));

    // stall + mailbox
    const ob = thingBubble.orders, mb = thingBubble.mail, bob = Math.sin(G.time * 2.4) * 0.04;
    if (ob) { ob.visible = G.sys.anyDeliverable(); ob.position.y = world.things.orders.top + 0.25 + bob; }
    if (mb) { const rdy = G.sys.dailyReady(); mb.visible = rdy; mb.position.y = world.things.mail.top + 0.25 + bob; if (world.mailFlag) world.mailFlag.rotation.x += ((rdy ? 0 : -1.5) - world.mailFlag.rotation.x) * Math.min(1, dt * 4); }
    G.sys.tick(dt); tickItems(dt); G.home.tick(dt, G.time);
    questT -= dt; if (questT < 0) { questT = 1; checkQuest(); }
    saveT += dt; if (saveT > 5) { saveT = 0; save(); }
  };

  // ---------- init from save ----------
  G.init = () => {
    for (const z of ZONES) world.setZone(z.id, S.zones.includes(z.id));
    G.home.init(); G.growHouse = () => world.setHouseRooms(S.house.rooms); G.growHouse();
    for (const d of DECOR) world.setDecor(d.id, S.decor.includes(d.id));
    // a garden saved under an older, faster pace: convert so every plant keeps exactly the stage it had
    if ((S.pace || 1) < PACE_V) { const v = S.pace || 1; for (const id in S.plants) { const p = S.plants[id], sp = SPECIES[p.sp]; if (!sp || !sp.growOld[v]) continue; p.grown = Math.min(1, p.grown / sp.growOld[v]) * sp.grow; p.giftT = Math.min(1, (p.giftT || 0) / sp.everyOld[v]) * sp.every; p.wet = (p.wet || 0) * 2; } S.pace = PACE_V; }
    // offline progress (plants keep growing while they still had water)
    const away = clamp((Date.now() - (S.last || Date.now())) / 1000, 0, 48 * 3600);
    for (const id in S.plants) {
      const p = S.plants[id], sp = SPECIES[p.sp]; if (!sp || !world.spots[id]) { delete S.plants[id]; continue; }
      const sp0 = world.spots[id], th = thirstOf(sp, sp0), hydT = th === 0 || (has('sprinkler') && !sp0.indoor) ? away : Math.min(away, p.wet / th), gm = growMul(id, sp, sp0);
      const growT = Math.min(hydT, Math.max(0, sp.grow - p.grown) / gm); p.grown = Math.min(sp.grow, p.grown + growT * gm);
      if (p.grown >= sp.grow) { if (!S.album.includes(p.sp)) S.album.push(p.sp); const t = (p.giftT || 0) + Math.max(0, away - growT), made = Math.floor(t / sp.every);
        const cap = stockCap(sp, p); p.stock = Math.min(cap, (p.stock || (p.ready ? 1 : 0)) + made); p.giftT = p.stock >= cap ? 0 : t - made * sp.every; if (p.stock > 0) { p.ready = true; if (made > 0) G.awayGifts = (G.awayGifts || 0) + 1; } }
      if (th > 0) p.wet = Math.max(0, p.wet - away * th);
      rebuild(world.spots[id]);
    }
    if (!S.items) S.items = []; if (!S.stored) S.stored = {}; for (const rec of S.items.slice()) if (!addItem(rec)) S.items.splice(S.items.indexOf(rec), 1);
    for (const rec of S.items) { const pr = (DECO_BY[rec.k] || {}).prod; if (!pr) continue; const t = (rec.pt || 0) + away, made = Math.floor(t / pr.every); rec.pn = Math.min(PROD_MAX, (rec.pn || 0) + made); rec.pt = rec.pn >= PROD_MAX ? 0 : t - made * pr.every; if (made > 0 && rec.pn) G.awayGifts = (G.awayGifts || 0) + 1; }
    G.away = away; G.sys.init(away); if (!S.style || !S.style.own) S.style = { own: [] }; G.applyStyle();
    if (S.refund) { const r = S.refund; delete S.refund; setTimeout(() => ui.toast(`Guarda-roupa novo! As cores agora são de graça: devolvemos ${r} moedas das que você tinha comprado.`, 'good'), 4500); }
    refreshMarkers(); ui.hud(); checkQuest();
  };
  G.zoneAt = zoneAt; G.refreshMarkers = refreshMarkers; G.rebuild = rebuild; G.V = V;
  attachSystems(G, { S, world, fx, audio, gardener, ui, scene, addCoins, addXp, level, save });
  attachHome(G, { S, house, fx, audio, gardener, ui, addXp, level, save, setScene: (inside) => G.onScene && G.onScene(inside), moveSpot });
  G.placer = () => (G.inside ? G.home : G.deco); G.live = live;
  return G;
}
