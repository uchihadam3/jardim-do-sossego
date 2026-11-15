// Everything that gives the garden a life of days and weeks: seasons, neighbours' orders, the daily surprise,
// little care jobs (weeds, pruning, fertiliser), achievements and Eliane's diary.
import * as THREE from 'three';
import { SPECIES, SPECIES_LIST } from './species.js';
import { ZONES, DECOR } from './world.js';

export const SEASONS = [
  { id: 0, name: 'Primavera', icon: 'spring', line: 'Tudo quer brotar.' },
  { id: 1, name: 'Verão', icon: 'summer', line: 'Dias longos e quentes.' },
  { id: 2, name: 'Outono', icon: 'autumn', line: 'Folhas douradas pelo chão.' },
  { id: 3, name: 'Inverno', icon: 'winter', line: 'Manhãs frescas e céu limpo.' },
];
export const SEASON_DAYS = 3; // real days per season

const NEIGHBORS = [
  { n: 'Dona Lúcia', l: ['quer enfeitar a mesa do café.', 'vai receber as netas no domingo.', 'está montando um arranjo para a igreja.'] },
  { n: 'Seu Antônio', l: ['quer fazer uma surpresa para a esposa.', 'vai visitar um velho amigo.', 'precisa alegrar a barbearia.'] },
  { n: 'Bia', l: ['está decorando a festa de aniversário.', 'quer um buquê para a professora.', 'vai fazer uma coroa de flores.'] },
  { n: 'Padaria da praça', l: ['quer flores frescas no balcão.', 'vai enfeitar a vitrine.'] },
  { n: 'Tia Zezé', l: ['está preparando um chá da tarde.', 'quer perfumar a sala.', 'vai presentear a vizinha nova.'] },
  { n: 'Professor Henrique', l: ['quer mostrar as flores para a turma.', 'está montando um herbário.'] },
  { n: 'Marina', l: ['vai se casar no sábado!', 'quer flores para o ateliê.', 'está fazendo sabonetes artesanais.'] },
  { n: 'Seu Joaquim da feira', l: ['quer vender buquês na barraca.', 'precisa de enfeite para a banca.'] },
];

// goal list: tiers share an id prefix
const T = (id, name, desc, tiers, v) => tiers.map(([goal, r], i) => ({ id: id + i, name: tiers.length > 1 ? `${name} ${['I', 'II', 'III', 'IV'][i]}` : name, desc: desc.replace('#', goal), goal, r, v }));
export const ACH = [
  ...T('plant', 'Mãos na terra', 'Plante # mudas', [[10, 40], [60, 150], [250, 500]], (S) => S.stats.planted),
  ...T('water', 'Regador amigo', 'Regue # vezes', [[25, 40], [200, 150], [800, 500]], (S) => S.stats.watered),
  ...T('bloom', 'Jardim em flor', 'Veja # plantas florirem', [[10, 50], [80, 200], [400, 700]], (S) => S.stats.blooms),
  ...T('gift', 'Colheita de mimos', 'Recolha # presentes', [[20, 40], [250, 200], [1200, 700]], (S) => S.stats.collected),
  ...T('album', 'Colecionadora', 'Tenha # espécies no álbum', [[5, 50], [15, 150], [30, 400], [45, 900]], (S) => S.album.length),
  ...T('order', 'Querida da vizinhança', 'Entregue # pedidos', [[1, 30], [12, 200], [50, 600], [150, 1500]], (S) => S.stats.orders || 0),
  ...T('weed', 'Canteiro limpinho', 'Arranque # matinhos', [[5, 30], [50, 180], [200, 500]], (S) => S.stats.weeds || 0),
  ...T('prune', 'Tesoura afiada', 'Faça # podas', [[5, 30], [50, 180], [200, 500]], (S) => S.stats.prunes || 0),
  ...T('fert', 'Dedo verde', 'Use adubo # vezes', [[3, 30], [30, 200]], (S) => S.stats.fert || 0),
  ...T('streak', 'Visita querida', 'Abra a caixa de correio em # dias', [[3, 60], [7, 200], [21, 800]], (S) => S.daily.streak || 0),
  ...T('zone', 'Jardim que cresce', 'Abra # áreas novas', [[2, 80], [4, 300], [6, 1000]], (S) => S.zones.length - 1),
  ...T('decor', 'Capricho', 'Tenha # decorações', [[2, 60], [6, 400]], (S) => S.decor.length),
  ...T('beauty', 'Encanto', 'Chegue a # de beleza', [[150, 60], [600, 250], [2000, 900]], (S, G) => G.beauty()),
  ...T('hybrid', 'Jardineira curiosa', 'Descubra # raridades', [[1, 80], [5, 400], [14, 1500]], (S) => (S.hybrids || []).length),
  ...T('visit', 'Amiga dos bichos', 'Receba # visitantes diferentes', [[3, 80], [7, 400], [10, 1000]], (S) => (S.seen || []).length),
  ...T('season', 'O ano inteiro', 'Cuide do jardim em # estações', [[2, 100], [4, 500]], (S) => (S.seasonsSeen || []).length),
];

const dayKey = (d = new Date()) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
export const DAILY = [
  { coins: 30 }, { adubo: 1 }, { coins: 60 }, { adubo: 2 }, { coins: 110 }, { adubo: 3 }, { coins: 260, adubo: 2, big: true },
];

export function attachSystems(G, { S, world, fx, audio, gardener, ui, addCoins, addXp, level, save }) {
  const sys = {};
  const rnd = (a, b) => a + Math.random() * (b - a), pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const day = () => Math.floor((Date.now() - S.t0) / 86400000);

  // ---------- seasons ----------
  sys.season = () => { const d = day(), i = Math.floor(d / SEASON_DAYS) % 4; return { ...SEASONS[i], day: (d % SEASON_DAYS) + 1, of: SEASON_DAYS, left: SEASON_DAYS - (d % SEASON_DAYS) }; };
  sys.inSeason = (sp) => sp.loves != null && sp.loves.includes(sys.season().id);
  sys.growMul = (id, sp) => (sys.inSeason(sp) ? 1.5 : 1) * (world.spots[id].type === 'green' ? 2 : 1);
  sys.giftMul = (sp) => (sys.inSeason(sp) ? 1.5 : 1);

  // ---------- diary ----------
  sys.log = (text) => { S.log.push({ d: day() + 1, t: text }); if (S.log.length > 60) S.log.shift(); };

  // ---------- neighbours' orders ----------
  const available = () => {
    const lvl = level(), types = new Set(world.spots.filter((s) => S.zones.includes(s.zone)).map((s) => s.type)), se = sys.season().id;
    return SPECIES_LIST.filter((s) => s.lvl <= lvl && s.spots.some((t) => types.has(t)) && (s.season == null || s.season === se) && (!s.hybrid || S.hybrids.includes(s.id)));
  };
  sys.available = available;
  const genOrder = () => {
    const lvl = level(), pool = available(), growing = pool.filter((s) => Object.values(S.plants).some((p) => p.sp === s.id));
    if (!pool.length) return null;
    const count = lvl < 3 ? 1 : lvl < 6 ? (Math.random() < 0.5 ? 1 : 2) : Math.random() < 0.4 ? 2 : Math.random() < 0.6 ? 3 : 1;
    const items = [], used = new Set();
    for (let i = 0; i < count; i++) {
      const from = growing.length && Math.random() < 0.7 ? growing : pool, sp = pick(from.filter((s) => !used.has(s.id)).length ? from.filter((s) => !used.has(s.id)) : pool);
      if (used.has(sp.id)) continue; used.add(sp.id);
      items.push({ sp: sp.id, n: 1 + Math.floor(Math.random() * Math.min(4, 1.5 + lvl / 3)) });
    }
    const who = pick(NEIGHBORS), value = items.reduce((a, it) => a + it.n * SPECIES[it.sp].gift, 0);
    return { id: Date.now() + Math.floor(Math.random() * 1000), who: who.n, why: pick(who.l), items, coins: Math.round(value * 2.4 + 12), xp: items.reduce((a, it) => a + it.n, 0) * 5, adubo: Math.random() < 0.35 ? 1 : 0 };
  };
  sys.canDeliver = (o) => o.items.every((it) => (S.basket[it.sp] || 0) >= it.n);
  sys.anyDeliverable = () => S.orders.some(sys.canDeliver);
  sys.deliver = (id) => {
    const o = S.orders.find((x) => x.id === id); if (!o || !sys.canDeliver(o)) return false;
    for (const it of o.items) S.basket[it.sp] -= it.n;
    S.orders = S.orders.filter((x) => x !== o); S.stats.orders = (S.stats.orders || 0) + 1; S.adubo += o.adubo;
    addCoins(o.coins); addXp(o.xp); audio.sfx('levelup', 0.7); gardener.play('cheer', 1.4);
    fx.burst(world.things.orders.pos, [0xffe680, 0xff9ab8, 0xffffff, 0xb8f0a0], 40, 1.4);
    ui.toast(`${o.who} adorou! +${o.coins} moedas${o.adubo ? ' e 1 adubo' : ''}`, 'good'); sys.log(`Entreguei flores para ${o.who}.`);
    S.orderT = Math.min(S.orderT || Infinity, Date.now() + 5 * 60000); save(); return true;
  };
  sys.dismiss = (id) => { S.orders = S.orders.filter((x) => x.id !== id); S.orderT = Date.now() + 3 * 60000; save(); };

  // ---------- daily surprise ----------
  sys.dailyReady = () => S.daily.last !== dayKey();
  sys.claimDaily = () => {
    if (!sys.dailyReady()) return null;
    S.daily.streak += 1; S.daily.last = dayKey(); // cozy: a missed day never resets anything S.daily.best = Math.max(S.daily.best || 0, S.daily.streak);
    const r = DAILY[(S.daily.streak - 1) % 7], coins = r.coins ? Math.round(r.coins * (1 + level() * 0.2)) : 0;
    if (coins) addCoins(coins); if (r.adubo) S.adubo += r.adubo;
    audio.sfx(r.big ? 'levelup' : 'bloom'); fx.burst(world.things.mail.pos, [0xffe680, 0xff9ab8, 0x9ad8ff], r.big ? 60 : 24, 1.2);
    sys.log(`Presente do dia ${S.daily.streak}: ${coins ? coins + ' moedas' : ''}${coins && r.adubo ? ' e ' : ''}${r.adubo ? r.adubo + ' adubo' : ''}.`); save();
    return { streak: S.daily.streak, coins, adubo: r.adubo || 0 };
  };

  // ---------- little care jobs ----------
  let weedT = rnd(70, 130), wiltT = rnd(120, 200);
  const count = (o) => Object.keys(o).length;
  const spawnWeed = () => { const c = Object.keys(S.plants).filter((id) => !S.weeds[id] && ['bed', 'pot', 'tree', 'veg'].includes(world.spots[id].type)); if (c.length && count(S.weeds) < 4) S.weeds[pick(c)] = 1; };
  const spawnWilt = () => { const c = Object.keys(S.plants).filter((id) => { const p = S.plants[id], sp = SPECIES[p.sp]; return !S.wilt[id] && !p.ready && p.grown >= sp.grow && !sp.tree && !sp.foliage && world.spots[id].type !== 'pond'; }); if (c.length && count(S.wilt) < 3) S.wilt[pick(c)] = 1; };

  // ---------- achievements ----------
  let achT = 2;
  const checkAch = () => { for (const a of ACH) { if (S.ach[a.id]) continue; if (a.v(S, G) >= a.goal) { S.ach[a.id] = 1; addCoins(a.r); audio.sfx('levelup', 0.8); ui.achievement(a); sys.log(`Conquista: ${a.name}.`); save(); break; } } };

  sys.tick = (dt) => {
    // orders trickle in
    if (S.stats.collected > 0 && S.orders.length < 3 && Date.now() >= (S.orderT || 0)) { const o = genOrder(); if (o) { S.orders.push(o); if (S.orders.length === 1 && !S.tips.order) { S.tips.order = 1; ui.toast('Chegou um pedido na banquinha de flores!', 'info'); } } S.orderT = Date.now() + 12 * 60000; }
    weedT -= dt; if (weedT < 0) { weedT = rnd(150, 260); spawnWeed(); }
    wiltT -= dt; if (wiltT < 0) { wiltT = rnd(200, 320); spawnWilt(); }
    achT -= dt; if (achT < 0) { achT = 1.5; checkAch(); }
    const se = sys.season(); if (!S.seasonsSeen.includes(se.id)) { S.seasonsSeen.push(se.id); if (S.seasonsSeen.length > 1) { ui.toast(`Chegou ${se.id === 1 ? 'o' : se.id === 2 ? 'o' : se.id === 3 ? 'o' : 'a'} ${se.name.toLowerCase()}! ${se.line}`, 'good'); sys.log(`Começou ${se.name.toLowerCase()}.`); } }
  };
  sys.init = (away) => {
    for (const id in S.weeds) if (!S.plants[id]) delete S.weeds[id];
    for (const id in S.wilt) if (!S.plants[id]) delete S.wilt[id];
    for (let i = 0; i < (away > 8 * 3600 ? 3 : away > 3 * 3600 ? 2 : away > 1800 ? 1 : 0); i++) spawnWeed();
    if (away > 1800) while (S.stats.collected > 0 && S.orders.length < 3) { const o = genOrder(); if (!o) break; S.orders.push(o); }
  };
  G.sys = sys;
  return sys;
}
