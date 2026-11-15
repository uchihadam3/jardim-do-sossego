// usage: node tools/shot.mjs <url> <out.png> [w] [h] [waitMs] [dpr]
import { createRequire } from 'module'; const { chromium } = createRequire(import.meta.url)('playwright');
const [url, out, w = 1600, h = 1000, wait = 1500, dpr = 1] = process.argv.slice(2);
const b = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const p = await b.newPage({ viewport: { width: +w, height: +h }, deviceScaleFactor: +dpr });
p.on('console', (m) => console.log('[' + m.type() + ']', m.text()));
p.on('pageerror', (e) => console.log('[pageerror]', e.message, e.stack?.split('\n').slice(0, 4).join(' | ')));
await p.goto(url);
await p.waitForFunction(() => document.title === 'ready', null, { timeout: 120000 }).catch((e) => console.log('timeout waiting ready'));
await p.waitForTimeout(+wait);
await p.screenshot({ path: out });
await b.close();
