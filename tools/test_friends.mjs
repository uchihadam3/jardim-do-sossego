// Neighbours who visit (talk, presents, hearts, deliveries) and the duck family on the pond.
import { createRequire } from 'module'; const { chromium } = createRequire(import.meta.url)('playwright');
const URL = 'http://localhost:8765/local.html';
const b = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const ctx = await b.newContext({ viewport: { width: 1100, height: 750 } }), p = await ctx.newPage(), errors = []; p.setDefaultTimeout(120000);
p.on('pageerror', (e) => errors.push(e.message + ' @ ' + (e.stack || '').split('\n').slice(1, 3).join(' | '))); p.on('console', (m) => { if (m.type() === 'error') errors.push(m.text().slice(0, 200)); });
const ev = (fn, a) => p.evaluate(fn, a), wait = (ms) => p.waitForTimeout(ms), ok = (n, c, x = '') => console.log((c ? 'PASS ' : 'FAIL ') + n + ' ' + x);
const until = async (fn, ms = 240000, a) => { const t0 = Date.now(); while (Date.now() - t0 < ms) { if (await ev(fn, a)) return true; await wait(700); } return false; };
const open = async () => { await p.goto(URL + '?q=baixa&nointro=1&speed=8'); await p.waitForFunction(() => window.__ready, null, { timeout: 300000 }); };
await open(); await ev(async () => { window.__game.game.save = () => {}; localStorage.clear(); await new Promise((r) => { const q = indexedDB.deleteDatabase('jardim-do-sossego'); q.onsuccess = q.onerror = q.onblocked = r; }); }); await open(); await p.click('#start'); await wait(2500);
await ev(() => { const g = window.__game; g.state.quest = 999; g.state.coins = 5000; g.state.xp = 3000; g.state.settings.time = 'fixo'; g.state.hour = 11; g.state.stats.collected = 5; g.state.basket = { tomate: 2, margarida: 3 };
  const s = g.world.spots.find((q) => q.type === 'bed' && g.state.zones.includes(q.zone)); g.state.plants[s.id] = { sp: 'margarida', seed: 5, grown: 99999, wet: 9999, giftT: 0, ready: false }; g.game.rebuild(s); });
// 1. a neighbour comes for a walk and can be talked to
await ev(() => window.__game.visitor.come('stroll', 'Bia')); await wait(1500);
let r = await ev(() => { const v = window.__game.visitor; return { here: v.here, who: v.who, pick: !!v.pick, friends: window.__game.state.friends }; });
ok('Bia arrives at the gate', r.here && r.who === 'Bia' && r.pick && r.friends.Bia === 0, JSON.stringify(r));
await ev(() => window.__game.game.tapThing('visitor')); ok('Eliane walks up and the talk card opens', await until(() => window.__game.ui.cardFor === 'neighbour', 120000));
ok('the card shows who she is and what she likes', (await p.textContent('#card')).includes('Bia') && (await p.textContent('#card')).includes('frutas e hortaliças'));
const p0 = await ev(() => { const v = window.__game.visitor.pos; return [v.x, v.z]; }); await wait(2500); const p1 = await ev(() => { const v = window.__game.visitor.pos; return [v.x, v.z]; });
ok('she stands still while they talk', Math.hypot(p0[0] - p1[0], p0[1] - p1[1]) < 0.05, JSON.stringify([p0, p1]));
await p.click('#card [data-a="talk"]'); await wait(400); r = await ev(() => ({ pts: window.__game.state.friends.Bia, say: document.querySelector('#card .c-say').textContent }));
ok('talking makes them a little closer', r.pts === 1 && r.say.length > 8, JSON.stringify(r)); await p.click('#card [data-a="talk"]'); await wait(300); ok('…but only once a visit', await ev(() => window.__game.state.friends.Bia === 1));
// 2. a present she loves: first heart and a present back
const c0 = await ev(() => window.__game.state.coins); await p.click('#card [data-a="gift"]'); await wait(400); ok('the basket is offered', await ev(() => document.querySelectorAll('#card [data-give]').length === 2));
await p.click('#card [data-give="tomate"]'); await until(() => document.querySelector('#modal').textContent.includes('Amizade com'), 40000);
r = await ev((c) => { const g = window.__game, S = g.state; return { pts: S.friends.Bia, hearts: g.visitor.hearts, basket: S.basket.tomate, gain: S.coins - c, box: Object.values(S.seedbox).reduce((a, n) => a + n, 0), modal: document.querySelector('#modal').textContent }; }, c0);
ok('tomatoes are her favourite: three points, the first heart', r.pts === 4 && r.hearts === 1 && r.basket === 1, JSON.stringify({ ...r, modal: 0 }));
ok('the new heart brings coins and a seedling', r.gain >= 80 && r.box === 1 && r.modal.includes('Amizade com Bia'), r.modal.slice(0, 140)); await ev(() => window.__game.ui.closeModal()); await wait(400);
await ev(() => window.__game.game.tapThing('visitor')); await until(() => window.__game.ui.cardFor === 'neighbour', 60000); await p.click('#card [data-a="gift"]'); await wait(400);
ok('one present a visit', await ev(() => window.__game.state.basket.tomate === 1 && document.querySelector('#card .c-say').textContent.includes('próxima visita')));
await ev(() => window.__game.ui.album('bichos')); await wait(500); ok('the album lists the neighbours', (await p.textContent('#modal')).includes('Bia') && (await p.textContent('#modal')).includes('? ? ?')); await ev(() => window.__game.ui.closeModal());
ok('she walks round, looks at the plants and goes home', await until(() => !window.__game.visitor.here, 400000));
// 3. an order: she waits by the stall and takes the flowers
await ev(() => { const g = window.__game; g.state.orders = [{ id: 77, who: 'Marina', why: 'quer flores para o ateliê.', items: [{ sp: 'margarida', n: 2 }], coins: 50, xp: 10, adubo: 0 }]; g.visitor.come('order'); });
ok('Marina comes for her order and waits', await until(() => window.__game.visitor.waiting && window.__game.visitor.who === 'Marina', 240000));
await ev(() => window.__game.game.tapThing('visitor')); await until(() => window.__game.ui.cardFor === 'neighbour', 120000); const c1 = await ev(() => window.__game.state.coins);
ok('the card offers the delivery', await ev(() => !!document.querySelector('#card [data-a="order"]'))); await p.click('#card [data-a="order"]'); await wait(1500);
r = await ev((c) => { const S = window.__game.state; return { orders: S.orders.length, gain: S.coins - c, basket: S.basket.margarida, pts: S.friends.Marina }; }, c1);
ok('delivering to her pays and counts for the friendship', r.orders === 0 && r.gain >= 50 && r.basket === 1 && r.pts >= 2, JSON.stringify(r)); await ev(() => window.__game.ui.closeCards());
ok('she goes home after it', await until(() => !window.__game.visitor.here, 300000));
// 4. the duck family floats on the pond
r = await ev(() => { const g = window.__game, pd = g.world.pond, zn = g.game.zoneAt(pd.x, pd.z); if (zn >= 0 && !g.state.zones.includes(zn)) { g.state.zones.push(zn); g.world.setZone(zn, true); } g.state.xp = 30000; g.game.deco.buy('patos'); let okp = false;
  for (const [dx, dz] of [[0, 0], [0.8, 0.5], [-0.9, 0.4], [1.2, -0.6], [-1.3, -0.5], [0.4, 1.0]]) { g.game.deco.move(pd.x + dx, pd.z + dz); if (g.game.placing.ok) { okp = true; break; } } const at = okp ? [g.game.placing.x, g.game.placing.z] : null; g.game.deco.confirm(); const it = g.world.items.find((i) => i.rec.k === 'patos'); return { okp, at, has: !!it, inPond: it && g.world.inPond(it.rec.x, it.rec.z) }; });
ok('the ducks can be put on the pond', r.okp && r.has && r.inPond, JSON.stringify(r)); await wait(1500);
ok('…and they bob on the water', await ev(() => { const it = window.__game.world.items.find((i) => i.rec.k === 'patos'); return it.group.position.y > 0 && it.group.position.y < 0.05; }));
r = await ev(() => { const g = window.__game; g.game.deco.buy('patos'); g.game.deco.move(-3, 1.5); const okg = g.game.placing.ok; g.game.deco.cancel(); g.game.deco.buy('placa'); g.game.deco.move(g.world.pond.x + 0.8, g.world.pond.z + 0.5); const sign = g.game.placing.ok; g.game.deco.cancel(); return { okg, sign }; });
ok('ducks still fit on the grass; a sign does not go in the water', r.okg && !r.sign, JSON.stringify(r));
console.log('errors', errors.length, [...new Set(errors)].slice(0, 6).join(' || '));
await b.close();
