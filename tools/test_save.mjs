// Saving: survives reloads, an "update" of the game files, a wiped localStorage, and travels by backup code.
import { createRequire } from 'module'; const { chromium } = createRequire(import.meta.url)('playwright');
const URL = /^http/.test(process.argv[2] || '') ? process.argv[2] : 'http://localhost:8765/local.html';
const b = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const ctx = await b.newContext({ viewport: { width: 1000, height: 700 }, permissions: ['clipboard-read', 'clipboard-write'] }); const p = await ctx.newPage(); const errors = [];
p.on('pageerror', (e) => errors.push(e.message)); p.on('console', (m) => { if (m.type() === 'error') errors.push(m.text().slice(0, 160)); });
const ev = (fn, a) => p.evaluate(fn, a), wait = (ms) => p.waitForTimeout(ms), ok = (n, c, x = '') => console.log((c ? 'PASS ' : 'FAIL ') + n + ' ' + x);
const open = async () => { await p.goto(URL + '?q=baixa&nointro=1&speed=8'); await p.waitForFunction(() => window.__ready, null, { timeout: 300000 }); };
const snap = () => ev(() => { const s = window.__game.state; return { coins: s.coins, plants: Object.keys(s.plants).length, zones: s.zones.length, t0: s.t0 }; });
await open(); await ev(async () => { localStorage.clear(); await new Promise((r) => { const q = indexedDB.deleteDatabase('jardim-do-sossego'); q.onsuccess = q.onerror = q.onblocked = r; }); }); await open();
ok('first visit starts a new garden', (await p.textContent('#start')).trim() === 'Começar'); await p.click('#start'); await wait(2500);
// play a little: buy an area, plant
await ev(() => { const g = window.__game; g.state.coins = 5000; g.game.offerZone(7); }); await wait(500); await p.click('#buyz'); await wait(1200); await ev(() => window.__game.ui.closeModal());
await ev(() => { const g = window.__game; g.game.tapSpot(g.world.spots[0]); document.querySelector('.seed:not(.locked)').click(); });
const t0 = Date.now(); while (Date.now() - t0 < 90000) { if (await ev(() => !window.__game.game.cur && !window.__game.game.tasks.length)) break; await wait(800); }
const a = await snap(); ok('progress exists', a.plants === 1 && a.zones === 2, JSON.stringify(a));
// 1. close the tab right after an action (no waiting for the periodic save)
await p.close(); const p2 = await ctx.newPage(); const P = p2; const ev2 = (fn, x) => P.evaluate(fn, x);
const open2 = async (q = '') => { await P.goto(URL + '?q=baixa&nointro=1&speed=8' + q); await P.waitForFunction(() => window.__ready, null, { timeout: 300000 }); };
const snap2 = () => ev2(() => { const s = window.__game.state; return { coins: s.coins, plants: Object.keys(s.plants).length, zones: s.zones.length, t0: s.t0 }; });
await open2(); const b1 = await snap2(); ok('reopening keeps everything', b1.plants === a.plants && b1.zones === a.zones && b1.t0 === a.t0, JSON.stringify(b1));
ok('button says welcome back', (await P.textContent('#start')).includes('Voltar'));
// 2. localStorage wiped (browser cleaning): the second copy brings the garden back
await ev2(() => window.__game.game.save(true)); await P.waitForTimeout(1500); await ev2(() => localStorage.clear()); await open2();
const b2 = await snap2(); ok('garden comes back even if the main copy is erased', b2.plants === a.plants && b2.t0 === a.t0, JSON.stringify(b2));
// 3. backup code round trip into an empty browser
const code = await ev2(() => { window.__game.ui.closeModal(); document.querySelector('#b-set').click(); return null; }); await P.click('#start').catch(() => {}); await P.waitForTimeout(1500);
await ev2(() => document.querySelector('#b-set').click()); await P.waitForTimeout(700); await P.click('#s-copy'); await P.waitForTimeout(500);
const clip = await ev2(() => navigator.clipboard.readText()); ok('backup code copied', clip.startsWith('JARDIM1:'), clip.length + ' chars');
await ev2(async () => { localStorage.clear(); await new Promise((r) => { const q = indexedDB.deleteDatabase('jardim-do-sossego'); q.onsuccess = q.onerror = q.onblocked = r; }); window.__game.game.save = () => {}; });
const other = await b.newContext({ viewport: { width: 1000, height: 700 } }); const o = await other.newPage(); o.on('pageerror', (e) => errors.push('other: ' + e.message));
await P.close(); await o.goto(URL + '?q=baixa&nointro=1'); await o.waitForFunction(() => window.__ready, null, { timeout: 300000 }); await o.click('#start'); await o.waitForTimeout(2000);
ok('other device starts empty', await o.evaluate(() => Object.keys(window.__game.state.plants).length === 0));
await o.click('#b-set'); await o.waitForTimeout(600); await o.click('#s-in'); await o.fill('#s-code', clip); await o.click('#s-use'); await o.click('#s-use');
await o.waitForFunction(() => window.__ready && window.__game && Object.keys(window.__game.state.plants).length === 1, null, { timeout: 300000 }).catch(() => {});
const b3 = await o.evaluate(() => { const s = window.__game.state; return { plants: Object.keys(s.plants).length, zones: s.zones.length, t0: s.t0 }; }); ok('backup code restores the garden on another device', b3.plants === a.plants && b3.zones === a.zones && b3.t0 === a.t0, JSON.stringify(b3));
console.log('errors', errors.length, [...new Set(errors)].slice(0, 5).join(' || '));
await b.close();
