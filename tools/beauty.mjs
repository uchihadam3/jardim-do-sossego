// node tools/beauty.mjs out.png "query" w h "js to eval after start" waitMs
import { createRequire } from 'module'; const { chromium } = createRequire(import.meta.url)('playwright');
const [out, query, w = 1600, h = 1000, js = '', wait = 25000] = process.argv.slice(2);
const b = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const p = await b.newPage({ viewport: { width: +w, height: +h }, deviceScaleFactor: 1 });
p.on('console', (m) => { if (m.type() === 'error') console.log('[error]', m.text().slice(0, 300)); });
p.on('pageerror', (e) => console.log('[pageerror]', e.message, (e.stack || '').split('\n').slice(0, 5).join(' | ')));
await p.goto(`http://localhost:8765/local.html?${query}`);
await p.waitForFunction(() => window.__ready, null, { timeout: 240000 });
await p.evaluate(() => window.__game.start());
if (js) await p.evaluate(js);
await p.waitForFunction(() => window.__frozen, null, { timeout: +wait });
await p.waitForTimeout(500);
await p.screenshot({ path: out });
await b.close();
