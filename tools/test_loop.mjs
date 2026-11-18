// What there is to do for ever: harvests that free the bed, saved seedlings, mastery stars, wishes of the day, recipes, hens.
import { createRequire } from 'module'; const { chromium } = createRequire(import.meta.url)('playwright');
const URL = 'http://localhost:8765/local.html';
const b = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const ctx = await b.newContext({ viewport: { width: 1100, height: 750 } }), p = await ctx.newPage(), errors = [];
p.on('pageerror', (e) => errors.push(e.message + ' @ ' + (e.stack || '').split('\n').slice(1, 3).join(' | '))); p.on('console', (m) => { if (m.type() === 'error') errors.push(m.text().slice(0, 200)); });
const ev = (fn, a) => p.evaluate(fn, a), wait = (ms) => p.waitForTimeout(ms), ok = (n, c, x = '') => console.log((c ? 'PASS ' : 'FAIL ') + n + ' ' + x);
const until = async (fn, ms = 240000, a) => { const t0 = Date.now(); while (Date.now() - t0 < ms) { if (await ev(fn, a)) return true; await wait(700); } return false; };
const idle = () => until(() => !window.__game.game.cur && !window.__game.game.tasks.length);
const open = async () => { await p.goto(URL + '?q=baixa&nointro=1&speed=8'); await p.waitForFunction(() => window.__ready, null, { timeout: 300000 }); };
await open(); await ev(async () => { window.__game.game.save = () => {}; localStorage.clear(); await new Promise((r) => { const q = indexedDB.deleteDatabase('jardim-do-sossego'); q.onsuccess = q.onerror = q.onblocked = r; }); }); await open(); await p.click('#start'); await wait(2500);
await ev(() => { const g = window.__game; g.state.coins = 50000; g.state.xp = 30000; g.state.settings.time = 'fixo'; g.state.hour = 11; for (const z of [7, 2]) { g.state.zones.push(z); g.world.setZone(z, true); g.world.mowZone(z); } g.state.stats.planted = 5; g.state.stats.collected = 30; g.state.stats.blooms = 5; g.game.refreshMarkers();
  window.put = (type, sp, extra = {}) => { const s = g.world.spots.find((q) => q.type === type && !q.indoor && g.state.zones.includes(q.zone) && !g.state.plants[q.id]); g.state.plants[s.id] = { sp, seed: 5, grown: g.SPECIES_LIST.find((d) => d.id === sp).grow, wet: 9999, giftT: 0, ready: true, stock: 1, ...extra }; g.game.rebuild(s); g.game.refreshMarkers(); return s.id; }; });
// 1. a carrot is one big harvest
let id = await ev(() => window.put('veg', 'cenoura')); await ev((i) => window.__game.game.tapSpot(window.__game.world.spots[i]), id); await idle();
let r = await ev((i) => { const g = window.__game; return { gone: !g.state.plants[i], basket: g.state.basket.cenoura, harv: g.state.stats.harvests, plus: g.game.V[i].plus.visible }; }, id);
ok('a carrot is harvested once, gives three and frees the bed', r.gone && r.basket === 3 && r.harv === 1 && r.plus, JSON.stringify(r));
// 2. a tomato gives four harvests
id = await ev(() => window.put('veg', 'tomate')); await ev((i) => window.__game.game.tapSpot(window.__game.world.spots[i]), id); await idle();
r = await ev((i) => { const g = window.__game, q = g.state.plants[i]; return { there: !!q, cuts: q && q.cuts }; }, id); ok('a tomato plant stays after the first harvest', r.there && r.cuts === 1, JSON.stringify(r));
await ev((i) => { const q = window.__game.state.plants[i]; q.cuts = 3; q.ready = true; q.stock = 1; }, id); await ev((i) => window.__game.game.tapSpot(window.__game.world.spots[i]), id); await idle();
ok('…and leaves after the fourth', await ev((i) => !window.__game.state.plants[i] && window.__game.state.stats.harvests === 2, id));
id = await ev(() => window.put('veg', 'hortela', { stock: 2 })); await ev((i) => window.__game.game.tapSpot(window.__game.world.spots[i]), id); await idle();
ok('herbs stay for good', await ev((i) => !!window.__game.state.plants[i] && window.__game.state.basket.hortela === 2, id));
// 3. mastery star
await ev(() => { window.__game.state.mast.margarida = 9; }); id = await ev(() => window.put('bed', 'margarida')); const c0 = await ev(() => window.__game.state.coins);
await ev((i) => window.__game.game.tapSpot(window.__game.world.spots[i]), id); await idle();
r = await ev((c) => { const g = window.__game; return { stars: g.game.stars('margarida'), total: g.game.starsTotal(), gain: g.state.coins - c }; }, c0); ok('the tenth daisy gift earns a star and a prize', r.stars === 1 && r.total >= 1 && r.gain > 10, JSON.stringify(r));
// 4. taking a plant out keeps the seedling; replanting is free
await ev((i) => { const g = window.__game; g.state.plants[i].ready = false; g.game.tapSpot(g.world.spots[i]); }, id); await wait(900);
ok('the plant card offers to keep the seedling', (await p.textContent('#card')).includes('Guardar a muda')); await p.click('#card [data-a="remove"]'); await wait(300); await p.click('#card [data-a="remove"]'); await idle();
r = await ev((i) => { const g = window.__game; return { gone: !g.state.plants[i], box: g.state.seedbox.margarida }; }, id); ok('the seedling goes to the box', r.gone && r.box === 1, JSON.stringify(r));
const c1 = await ev(() => window.__game.state.coins); await ev((i) => window.__game.game.tapSpot(window.__game.world.spots[i]), id); await wait(800);
ok('the picker shows the saved seedling', (await p.textContent('#sheet')).includes('Guardada')); await ev(() => document.querySelector('.seed[data-id="margarida"]').click()); await idle();
r = await ev((a) => { const g = window.__game; return { back: !!g.state.plants[a.i], free: g.state.coins >= a.c, box: g.state.seedbox.margarida }; }, { i: id, c: c1 }); ok('replanting it costs nothing', r.back && r.free && r.box === 0, JSON.stringify(r));
// 5. wishes of the day
r = await ev(() => window.__game.game.sys.wishes()); ok('three wishes for today', r.length === 3 && r.every((w) => w.text && w.goal > 0 && w.r > 0), JSON.stringify(r.map((w) => w.text)));
ok('the next step is one slim line', await ev(() => { const q = document.querySelector('#quest'), m = document.querySelector('#q-min'); return !!m && q.classList.contains('min') && q.getBoundingClientRect().height < 40; })); await p.click('#q-min'); await wait(400);
ok('touching it opens the card with the wishes chip', await ev(() => !!document.querySelector('#q-w') && !!document.querySelector('#q-x'))); await p.click('#q-w'); await wait(600); ok('wishes panel opens', (await p.textContent('#modal')).includes('Desejos de hoje')); await ev(() => window.__game.ui.closeModal()); await p.click('#q-x'); await wait(300); ok('…and the little cross shrinks it again', await ev(() => !!document.querySelector('#q-min')));
const c2 = await ev(() => { const g = window.__game; for (const w of g.state.wishes.list) w.base = -99999; return g.state.coins; }); await wait(4000);
r = await ev((c) => { const g = window.__game; return { done: g.state.wishes.list.every((w) => w.done), bonus: g.state.wishes.bonus, gain: g.state.coins - c, n: g.state.stats.wishes }; }, c2); ok('finished wishes pay, and all three bring a present', r.done && r.bonus && r.gain > 60 && r.n === 3, JSON.stringify(r));
// 6. the hen house
r = await ev(() => { const g = window.__game; g.game.deco.buy('galinheiro'); g.game.deco.move(-3, 1.5); const okp = g.game.placing.ok; g.game.deco.confirm(); const it = g.world.items.find((i) => i.rec.k === 'galinheiro'); if (it) it.rec.pn = 2; return { okp, has: !!it, c: g.state.coins }; });
ok('the hen house can be placed', r.okp && r.has, JSON.stringify(r)); await wait(1200); await ev(() => { const g = window.__game; g.game.tapItem(g.world.items.find((i) => i.rec.k === 'galinheiro')); }); await idle(); await wait(800);
{ const e = await ev((c) => { const g = window.__game, it = g.world.items.find((i) => i.rec.k === 'galinheiro'); return { pn: it.rec.pn, gain: g.state.coins - c, prod: g.state.stats.prod }; }, r.c); ok('collecting the eggs pays', e.pn === 0 && e.gain === 110 && e.prod === 2, JSON.stringify(e)); }
// 7. cooking
await ev(() => window.__game.game.enterHouse()); await until(() => window.__game.game.inside); await wait(800);
r = await ev(() => { const g = window.__game; g.game.home.buyRoom('cozinha'); g.ui.closeModal(); g.state.basket.hortela = 2; const stove = g.house.items.find((i) => i.rec.k === 'fogao_simples'); window.__stove = stove; return { stove: !!stove, use: stove && g.game.home.canUse(stove), c: g.state.coins }; });
ok('the kitchen comes with a stove to cook on', r.stove && r.use === 'Cozinhar', JSON.stringify(r)); await ev(() => window.__game.game.home.use(window.__stove)); await wait(700);
ok('the recipe book opens', (await p.textContent('#modal')).includes('Caderno de receitas') && (await p.textContent('#modal')).includes('Chá de hortelã')); await p.click('[data-cook="cha_hortela"]');
ok('she cooks the tea', await until(() => (window.__game.state.recipes.cha_hortela || 0) === 1));
ok('ingredients are used and the dish pays', await ev((c) => { const g = window.__game; return g.state.basket.hortela === 0 && g.state.coins > c && g.state.stats.cooked === 1; }, r.c));
await ev(() => window.__game.ui.album('receitas')); await wait(600); ok('the album has the recipes page', (await p.textContent('#modal')).includes('Chá de hortelã')); await ev(() => window.__game.ui.closeModal());
console.log('errors', errors.length, [...new Set(errors)].slice(0, 6).join(' || '));
await b.close();
