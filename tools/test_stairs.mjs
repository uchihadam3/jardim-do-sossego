// The staircase and the second floor: building it, going up step by step, furnishing upstairs, coming down, leaving, and all of it surviving a reload.
import { createRequire } from 'module'; const { chromium } = createRequire(import.meta.url)('playwright');
const URL = 'http://localhost:8765/local.html', DZ = 224;
const b = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const ctx = await b.newContext({ viewport: { width: 1100, height: 750 } }), p = await ctx.newPage(), errors = []; p.setDefaultTimeout(120000);
p.on('pageerror', (e) => errors.push(e.message + ' @ ' + (e.stack || '').split('\n').slice(1, 3).join(' | '))); p.on('console', (m) => { if (m.type() === 'error') errors.push(m.text().slice(0, 200)); });
const ev = (fn, a) => p.evaluate(fn, a), wait = (ms) => p.waitForTimeout(ms), ok = (n, c, x = '') => console.log((c ? 'PASS ' : 'FAIL ') + n + ' ' + x);
const until = async (fn, ms = 240000, a) => { const t0 = Date.now(); while (Date.now() - t0 < ms) { if (await ev(fn, a)) return true; await wait(500); } return false; };
const open = async () => { await p.goto(URL + '?q=baixa&nointro=1&speed=8'); await p.waitForFunction(() => window.__ready, null, { timeout: 300000 }); };
await open(); await ev(async () => { localStorage.clear(); await new Promise((r) => { const q = indexedDB.deleteDatabase('jardim-do-sossego'); q.onsuccess = q.onerror = q.onblocked = r; }); }); await open(); await p.click('#start'); await wait(2500);
await ev(() => { const g = window.__game; g.state.quest = 999; g.state.coins = 300000; g.state.xp = 900000; g.state.settings.time = 'fixo'; g.state.hour = 11; g.game.enterHouse(); });
ok('she goes in', await until(() => window.__game.game.inside)); await wait(1200);
// 1. before the staircase: nothing to climb; a chair stands in the corner where it will go
let r = await ev(() => { const g = window.__game, home = g.game.home; home.buy('cadeira_simples'); home.move(-2.2, -2.0); const placed = g.game.placing.ok; home.confirm(); return { placed, stairs: g.house.stairs(), climb: home.stairs('up'), buyable: g.house.buyable().map((q) => q.id).includes('hall2'), n: g.house.items.length }; });
ok('no stairs yet, and the second floor is on offer', r.placed && !r.stairs && !r.climb && r.buyable, JSON.stringify(r));
r = await ev(() => { const g = window.__game, S = g.state, n0 = g.house.items.length, c0 = S.coins, okb = g.game.home.buyRoom('hall2'); g.ui.closeModal(); return { okb, paid: c0 - S.coins, stairs: g.house.stairs(), boxed: n0 - g.house.items.length, stored: S.house.stored.cadeira_simples || 0, rooms: S.house.rooms, outside: g.world.houseKey }; });
ok('building the second floor puts the staircase in the Sala', r.okb && r.paid === 9000 && r.stairs && r.rooms.includes('hall2'), JSON.stringify(r));
ok('what stood in its corner goes back to the box', r.boxed >= 1 && r.stored >= 1, JSON.stringify({ boxed: r.boxed, stored: r.stored }));
ok('the house grows a floor on the outside too', r.outside.includes('hall2'));
r = await ev(() => { const g = window.__game, home = g.game.home; home.buy('cadeira_simples'); home.move(-2.2, -2.0); const pl = g.game.placing, out = { ok: pl.ok, x: pl.x, z: pl.z }; home.cancel(); return out; });
ok('furniture no longer fits in the stair corner: it slides out of it, staying in the Sala', r.ok && !(r.x < -0.72 && r.z < -0.72) && r.z > -2.8 && r.x > -3.2, JSON.stringify(r));
// 2. up
await ev(() => { window.__maxY = -9; window.__minY = 9; window.__iv = setInterval(() => { const y = window.__game.game.gp.y; window.__maxY = Math.max(window.__maxY, y); window.__minY = Math.min(window.__minY, y); }, 30); window.__game.game.home.stairs('up'); });
ok('she reaches the upper floor', await until(() => window.__game.house.level === 1 && window.__game.game.gp.z > 200 && !window.__game.game.cur, 240000));
r = await ev(() => ({ maxY: +window.__maxY.toFixed(2), y: window.__game.game.gp.y, room: window.__game.game.home.roomOf().id }));
ok('…climbing the steps, not jumping', r.maxY > 2.5 && r.y === 0 && r.room === 'hall2', JSON.stringify(r)); await p.screenshot({ path: (process.argv[2] || '/tmp') + '/stairs_up.png' });
// 3. a room and a bed upstairs
r = await ev((DZ) => { const g = window.__game, home = g.game.home, okb = home.buyRoom('suite'); g.ui.closeModal(); home.buy('cama_simples'); home.move(0.5, DZ - 5.6); const pl = g.game.placing, okp = pl.ok; home.confirm(); const bed = g.house.items.find((i) => i.rec.k === 'cama_simples' && i.rec.z > 100); return { okb, okp, bed: !!bed, bz: bed && bed.rec.z }; }, DZ);
ok('a new room and a bed on the upper floor', r.okb && r.okp && r.bed, JSON.stringify(r));
await ev((DZ) => window.__game.game.walkThen(1.5, DZ - 5.0, () => { window.__there = 1; }), DZ); ok('she walks through the door into the suite', await until(() => window.__there === 1, 120000));
// 4. down
await ev(() => { window.__minY = 9; window.__game.game.home.stairs('down'); });
ok('she comes back down to the Sala', await until(() => window.__game.house.level === 0 && window.__game.game.gp.z < 100 && !window.__game.game.cur, 240000));
r = await ev(() => ({ minY: +window.__minY.toFixed(2), y: window.__game.game.gp.y, room: window.__game.game.home.roomOf().id })); ok('…step by step as well', r.minY < -2.4 && r.y === 0 && r.room === 'sala', JSON.stringify(r));
// 5. leaving straight from upstairs, and the save
await ev(() => window.__game.game.home.stairs('up')); await until(() => window.__game.house.level === 1 && !window.__game.game.cur, 240000);
await ev(() => window.__game.game.exitHouse()); ok('from upstairs she can go straight out to the garden', await until(() => !window.__game.game.inside, 60000)); await wait(1500);
await ev(() => window.__game.game.enterHouse()); await until(() => window.__game.game.inside); await wait(1000); ok('…and comes back in through the front door, downstairs', await ev(() => window.__game.house.level === 0 && window.__game.game.gp.z < 10));
const snap = () => ev(() => { const g = window.__game; return { rooms: g.state.house.rooms.join(), items: g.state.house.items.length, upBed: g.state.house.items.some((i) => i.k === 'cama_simples' && i.z > 100), stairs: g.house.stairs() }; });
const before = await snap(); await ev(() => window.__game.game.save(true)); await wait(800); await open(); await p.click('#start'); await wait(2500); const after = await snap();
ok('the second floor survives closing and reopening', JSON.stringify(before) === JSON.stringify(after) && after.upBed && after.stairs, JSON.stringify(after));
ok('the house outside is still two floors', await ev(() => window.__game.world.houseKey.includes('hall2')));
console.log('errors', errors.length, [...new Set(errors)].slice(0, 6).join(' || '));
await b.close();
