// Everything that gives the garden a life of days and weeks: seasons, neighbours' orders, the daily surprise,
// little care jobs (weeds, pruning, fertiliser), achievements and Eliane's diary.
import * as THREE from 'three';
import { SPECIES, SPECIES_LIST } from './species.js';
import { ZONES, DECOR } from './world.js';
import { FRIENDS, heartsOf } from './visitor.js';

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
  ...T('decor', 'Capricho', 'Tenha # decorações no jardim', [[2, 60], [8, 300], [20, 900], [40, 2500]], (S) => S.decor.length + (S.items || []).length),
  ...T('friends', 'Boa vizinha', 'Some # corações de amizade com as vizinhas', [[2, 100], [6, 400], [12, 1200], [20, 4000]], (S) => FRIENDS.reduce((a, f) => a + heartsOf((S.friends || {})[f.n]), 0)),
  ...T('style', 'Estilosa', 'Tenha # peças no guarda-roupa', [[3, 80], [12, 400], [30, 1500], [70, 5000]], (S) => Object.keys(S.own || {}).length),
  ...T('beauty', 'Encanto', 'Chegue a # de beleza', [[150, 60], [600, 250], [2000, 900]], (S, G) => G.beauty()),
  ...T('hybrid', 'Jardineira curiosa', 'Descubra # raridades', [[1, 80], [5, 400], [14, 1500]], (S) => (S.hybrids || []).length),
  ...T('visit', 'Amiga dos bichos', 'Receba # visitantes diferentes', [[3, 80], [7, 400], [10, 1000]], (S) => (S.seen || []).length),
  ...T('season', 'O ano inteiro', 'Cuide do jardim em # estações', [[2, 100], [4, 500]], (S) => (S.seasonsSeen || []).length),
  ...T('album2', 'Enciclopédia viva', 'Tenha # espécies no álbum', [[80, 1500], [140, 3000], [220, 6000]], (S) => S.album.length),
  ...T('home', 'Lar, doce lar', 'Chegue a # de aconchego em casa', [[120, 80], [400, 400], [1200, 1500], [3500, 5000]], (S, G) => G.home.comfort()),
  ...T('rooms', 'Casa que cresce', 'Tenha # cômodos', [[3, 150], [6, 800], [9, 2500], [12, 6000]], (S) => S.house.rooms.length),
  ...T('furn', 'Decoradora', 'Tenha # móveis e enfeites em casa', [[28, 80], [60, 400], [120, 1500], [220, 4000]], (S) => S.house.items.length),
  ...T('inplants', 'Selva particular', 'Tenha # plantas dentro de casa', [[3, 60], [15, 400], [40, 1500], [90, 4000]], (S, G) => G.home.plants()),
  ...T('paper', 'De parede em parede', 'Tenha # papéis de parede e pisos', [[1, 100], [8, 600], [20, 2500]], (S) => S.house.ownW.length + S.house.ownF.length - 2),
  ...T('cook', 'Mão boa na cozinha', 'Prepare # pratos', [[1, 40], [25, 300], [120, 1200], [400, 4000]], (S) => S.stats.cooked || 0),
  ...T('recipes', 'Caderno cheio', 'Aprenda # receitas', [[5, 150], [20, 800], [40, 3000]], (S) => Object.keys(S.recipes || {}).length),
  ...T('prod', 'Do quintal para a mesa', 'Recolha # ovos, potes de mel e companhia', [[5, 60], [60, 500], [300, 2000]], (S) => S.stats.prod || 0),
  ...T('land', 'Sítio de respeito', 'Abra # áreas do terreno grande', [[1, 400], [4, 2000], [10, 10000]], (S) => S.zones.filter((z) => z >= 9).length),
  ...T('stars', 'Mestra jardineira', 'Ganhe # estrelas de mestre', [[5, 100], [40, 800], [150, 3000], [400, 10000]], (S, G) => G.starsTotal()),
  ...T('wish', 'Dia bem vivido', 'Realize # desejos do dia', [[3, 60], [30, 400], [150, 1500], [600, 5000]], (S) => S.stats.wishes || 0),
  ...T('harvest', 'Mesa farta', 'Faça # colheitas na horta', [[5, 50], [60, 400], [300, 1500], [1000, 5000]], (S) => S.stats.harvests || 0),
  ...T('nap', 'Soneca merecida', 'Tire # sonecas', [[1, 30], [15, 250]], (S) => S.stats.naps || 0),
  ...T('dance', 'Dona da pista', 'Dance # vezes ao som de música', [[1, 30], [20, 300]], (S) => S.stats.dances || 0),
];

const dayKey = (d = new Date()) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
export const DAILY = [
  { coins: 30 }, { adubo: 1 }, { coins: 60 }, { adubo: 2 }, { coins: 110 }, { adubo: 3 }, { coins: 260, adubo: 2, big: true },
];

export function attachSystems(G, { S, world, fx, audio, gardener, ui, addCoins, addXp, level, save }) {
  const sys = {};
  const rnd = (a, b) => a + Math.random() * (b - a), pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  // the garden's calendar only moves on days she actually visits: time away never skips a season
  const touchDay = () => { const k = dayKey(); if (S.dayKey !== k) { S.dayKey = k; S.days = (S.days || 0) + 1; } };
  const day = () => Math.max(0, (S.days || 1) - 1);

  // ---------- seasons ----------
  const seasonOv = new URLSearchParams(location.search).get('season');
  sys.season = () => { const d = seasonOv != null ? +seasonOv * SEASON_DAYS : day(), i = Math.floor(d / SEASON_DAYS) % 4; return { ...SEASONS[i], day: (d % SEASON_DAYS) + 1, of: SEASON_DAYS, left: SEASON_DAYS - (d % SEASON_DAYS) }; };
  sys.inSeason = (sp) => sp.loves != null && sp.loves.includes(sys.season().id);
  sys.growMul = (id, sp) => (sys.inSeason(sp) ? 1.5 : 1) * (world.spots[id].type === 'green' ? 2 : 1);
  sys.giftMul = (sp) => (sys.inSeason(sp) ? 1.5 : 1);

  // ---------- rarities: two different flowers blooming side by side may leave a special seed ----------
  const HYB = SPECIES_LIST.filter((s) => s.hybrid);
  sys.afterGift = (id) => {
    const p = S.plants[id], spot = world.spots[id]; if (!p || S.rare[id]) return;
    for (const oid in S.plants) { if (oid === String(id)) continue; const q = S.plants[oid], o = world.spots[oid];
      if (q.sp === p.sp || q.grown < SPECIES[q.sp].grow || !o.indoor !== !spot.indoor || o.pos.distanceTo(spot.pos) > 1.25) continue;
      const h = HYB.find((x) => !S.hybrids.includes(x.id) && x.hybrid.includes(p.sp) && x.hybrid.includes(q.sp) && !Object.values(S.rare).includes(x.id));
      if (h && Math.random() < 0.3) { S.rare[id] = h.id; ui.toast('Uma semente diferente apareceu entre as flores!', 'good'); audio.sfx('bloom', 0.7, 1.3); return; } }
  };
  sys.takeRare = (id) => { const hid = S.rare[id]; delete S.rare[id]; const h = SPECIES[hid]; if (!h || S.hybrids.includes(hid)) return;
    S.hybrids.push(hid); addXp(25); audio.sfx('levelup'); fx.burst(world.spots[id].pos, [0xffe680, 0xff9ab8, 0xb48af0, 0xffffff], 50, 1.4); ui.rare(h); sys.log(`Descobri uma raridade: ${h.name}.`); save(); };
  sys.hybrids = HYB;

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
    S.orderT = Math.min(S.orderT || Infinity, Date.now() + 12 * 60000); save(); return true;
  };
  sys.dismiss = (id) => { S.orders = S.orders.filter((x) => x.id !== id); S.orderT = Date.now() + 8 * 60000; save(); };

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

  // ---------- wishes of the day: three small things to do, new on every day she visits, for ever ----------
  const lv = () => level(), has = (z) => S.zones.includes(z);
  const WISH = {
    plant: { t: (n) => `Plante ${n} mudas`, v: () => S.stats.planted, n: () => 3 + Math.min(9, Math.floor(lv() / 2)) },
    water: { t: (n) => `Regue ${n} vezes`, v: () => S.stats.watered, n: () => 4 + Math.min(10, lv()), ok: () => !S.upg.includes('sprinkler') },
    collect: { t: (n) => `Recolha ${n} presentes das plantas`, v: () => S.stats.collected, n: () => 5 + Math.min(25, lv() * 2), ok: () => S.stats.collected > 0 },
    bloom: { t: (n) => `Veja ${n} plantas desabrocharem`, v: () => S.stats.blooms, n: () => 2 + Math.min(6, Math.floor(lv() / 3)), ok: () => S.stats.blooms > 0 },
    order: { t: () => 'Entregue um pedido na banquinha', v: () => S.stats.orders || 0, n: () => 1, ok: () => S.stats.collected > 3, w: 1.4 },
    weed: { t: (n) => `Arranque ${n} matinhos`, v: () => S.stats.weeds || 0, n: () => 2, ok: () => G.count() > 6 && count(S.weeds) > 0 },
    prune: { t: () => 'Faça uma poda numa flor cansada', v: () => S.stats.prunes || 0, n: () => 1, ok: () => count(S.wilt) > 0 },
    harvest: { t: (n) => `Faça ${n} colheitas na horta`, v: () => S.stats.harvests || 0, n: () => 2 + Math.min(6, Math.floor(lv() / 4)), ok: () => has(7), w: 1.3 },
    cook: { t: () => 'Prepare um prato no fogão', v: () => S.stats.cooked || 0, n: () => 1, ok: () => S.house.rooms.includes('cozinha') && has(7), w: 1.4 },
    furn: { t: () => 'Coloque algo novo dentro de casa', v: () => S.stats.furn || 0, n: () => 1, ok: () => (S.stats.visits || 0) > 0 },
    inplant: { t: () => 'Plante alguma coisa dentro de casa', v: () => S.stats.inplant || 0, n: () => 1, ok: () => (S.stats.visits || 0) > 0 },
    rest: { t: () => 'Descanse: sente-se um pouco ou tire uma soneca', v: () => (S.stats.sits || 0) + (S.stats.naps || 0), n: () => 1, ok: () => (S.stats.visits || 0) > 0, w: 0.7 },
    prod: { t: (n) => `Recolha ${n} vezes o que a criação deixou`, v: () => S.stats.prod || 0, n: () => 2, ok: () => (S.stats.prod || 0) > 0 },
    album: { t: () => 'Faça florir uma espécie nova para o álbum', v: () => S.album.length, n: () => 1, ok: () => S.album.length > 2, w: 1.6 },
    star: { t: () => 'Ganhe uma estrela de mestre com alguma planta', v: () => G.starsTotal(), n: () => 1, ok: () => S.stats.collected > 20, w: 1.6 },
    fert: { t: () => 'Use adubo numa planta que está crescendo', v: () => S.stats.fert || 0, n: () => 1, ok: () => S.adubo > 0 },
  };
  const newWishes = () => { const keys = Object.keys(WISH).filter((k) => !WISH[k].ok || WISH[k].ok()), list = []; while (list.length < 3 && keys.length) { const k = keys.splice(Math.floor(Math.random() * keys.length), 1)[0], w = WISH[k]; list.push({ k, goal: w.n(), base: w.v(), r: Math.round(((16 + lv() * 6) * (w.w || 1)) / 5) * 5 }); }
    S.wishes = { day: S.dayKey, list, bonus: false }; };
  sys.wishes = () => { if (S.stats.planted < 3) return []; if (!S.wishes || S.wishes.day !== S.dayKey || !Array.isArray(S.wishes.list)) newWishes(); return S.wishes.list.filter((w) => WISH[w.k]).map((w) => ({ text: WISH[w.k].t(w.goal), val: Math.max(0, Math.min(w.goal, WISH[w.k].v() - w.base)), goal: w.goal, r: w.r, done: !!w.done })); };
  const checkWishes = () => { const list = sys.wishes(); if (!list.length) return; let all = true; S.wishes.list.forEach((w, i) => { const q = list[i]; if (!q) return; if (!w.done && q.val >= q.goal) { w.done = true; addCoins(w.r); S.stats.wishes = (S.stats.wishes || 0) + 1; audio.sfx('buy', 0.7); ui.toast(`Desejo do dia realizado: +${w.r} moedas`, 'good'); save(); } if (!w.done) all = false; });
    if (all && !S.wishes.bonus) { S.wishes.bonus = true; const c = 40 + lv() * 12; addCoins(c); S.adubo += 1; S.stats.wishDays = (S.stats.wishDays || 0) + 1; audio.sfx('levelup', 0.7); ui.toast(`Os três desejos de hoje! Presente: +${c} moedas e 1 adubo. Amanhã tem mais.`, 'good'); save(); } };

  // ---------- little care jobs ----------
  let weedT = rnd(240, 420), wiltT = rnd(420, 700);
  const count = (o) => Object.keys(o).length;
  const spawnWeed = () => { const c = Object.keys(S.plants).filter((id) => !S.weeds[id] && !world.spots[id].indoor && ['bed', 'pot', 'tree', 'veg'].includes(world.spots[id].type)); if (c.length && count(S.weeds) < 4) S.weeds[pick(c)] = 1; };
  const spawnWilt = () => { const c = Object.keys(S.plants).filter((id) => { const p = S.plants[id], sp = SPECIES[p.sp]; return !S.wilt[id] && !p.ready && p.grown >= sp.grow && !sp.tree && !sp.foliage && world.spots[id].type !== 'pond'; }); if (c.length && count(S.wilt) < 3) S.wilt[pick(c)] = 1; };

  // ---------- achievements ----------
  let achT = 2;
  const checkAch = () => { for (const a of ACH) { if (S.ach[a.id]) continue; if (a.v(S, G) >= a.goal) { S.ach[a.id] = 1; addCoins(a.r); audio.sfx('levelup', 0.8); ui.achievement(a); sys.log(`Conquista: ${a.name}.`); save(); break; } } };

  sys.tick = (dt) => {
    // orders trickle in
    if (S.stats.collected > 0 && S.orders.length < 3 && Date.now() >= (S.orderT || 0)) { const o = genOrder(); if (o) { S.orders.push(o); if (S.orders.length === 1 && !S.tips.order) { S.tips.order = 1; ui.toast('Chegou um pedido na banquinha de flores!', 'info'); } } S.orderT = Date.now() + 30 * 60000; }
    weedT -= dt; if (weedT < 0) { weedT = rnd(420, 720); spawnWeed(); }
    wiltT -= dt; if (wiltT < 0) { wiltT = rnd(600, 960); spawnWilt(); }
    achT -= dt; if (achT < 0) { achT = 1.5; checkAch(); touchDay(); checkWishes(); }
    const se = sys.season(); if (!S.seasonsSeen.includes(se.id)) { S.seasonsSeen.push(se.id); if (S.seasonsSeen.length > 1) { ui.toast(`Chegou ${se.id === 1 ? 'o' : se.id === 2 ? 'o' : se.id === 3 ? 'o' : 'a'} ${se.name.toLowerCase()}! ${se.line}`, 'good'); sys.log(`Começou ${se.name.toLowerCase()}.`); } }
  };
  sys.init = (away) => {
    touchDay();
    for (const id in S.weeds) if (!S.plants[id]) delete S.weeds[id];
    for (const id in S.wilt) if (!S.plants[id]) delete S.wilt[id];
    for (let i = 0; i < (away > 8 * 3600 ? 3 : away > 3 * 3600 ? 2 : away > 1800 ? 1 : 0); i++) spawnWeed();
    if (away > 1800) while (S.stats.collected > 0 && S.orders.length < 3) { const o = genOrder(); if (!o) break; S.orders.push(o); }
  };
  G.sys = sys;
  return sys;
}
