// An update of the published game (new service worker + files) must keep the garden.
import { createRequire } from 'module'; const { chromium } = createRequire(import.meta.url)('playwright'); import fs from 'fs';
const b = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const ctx = await b.newContext({ viewport: { width: 900, height: 600 } }); const p = await ctx.newPage(); p.on('pageerror', (e) => console.log('[pageerror]', e.message));
const U = 'http://localhost:8766/?q=baixa&nointro=1&speed=8', ready = () => p.waitForFunction(() => window.__ready, null, { timeout: 300000 });
await p.goto(U); await ready(); await p.evaluate(() => navigator.serviceWorker.ready); await p.click('#start'); await p.waitForTimeout(2500);
await p.evaluate(() => { const g = window.__game; g.state.coins = 777; g.game.tapSpot(g.world.spots[0]); document.querySelector('.seed:not(.locked)').click(); });
const t0 = Date.now(); while (Date.now() - t0 < 90000) { if (await p.evaluate(() => !window.__game.game.cur && !window.__game.game.tasks.length)) break; await p.waitForTimeout(800); }
const a = await p.evaluate(() => ({ plants: Object.keys(window.__game.state.plants).length, coins: window.__game.state.coins, cache: null })); a.cache = await p.evaluate(() => caches.keys());
const sw = fs.readFileSync('docs/sw.js', 'utf8'), idx = fs.readFileSync('docs/index.html', 'utf8'), v0 = sw.match(/jardim-([0-9a-f]+)/)[1];
fs.writeFileSync('docs/sw.js', sw.replaceAll(v0, 'feedc0de02')); fs.writeFileSync('docs/index.html', idx.replaceAll(v0, 'feedc0de02'));
await p.reload(); await p.waitForTimeout(20000); await ready(); await p.reload(); await p.waitForTimeout(8000); await ready();
const c = await p.evaluate(async () => ({ plants: Object.keys(window.__game.state.plants).length, coins: window.__game.state.coins, cache: await caches.keys(), btn: document.querySelector('#start').textContent }));
fs.writeFileSync('docs/sw.js', sw); fs.writeFileSync('docs/index.html', idx);
console.log('before', JSON.stringify(a)); console.log('after update', JSON.stringify(c));
console.log(c.plants === a.plants && c.coins === a.coins && c.cache[0] !== a.cache[0] ? 'PASS update keeps the garden' : 'FAIL update lost progress');
await b.close();
