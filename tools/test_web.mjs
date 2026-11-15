// hosted build: service worker installs, game runs offline, and a new build replaces the old one by itself
import { createRequire } from 'module'; const { chromium } = createRequire(import.meta.url)('playwright');
import fs from 'fs';
const b = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const ctx = await b.newContext({ viewport: { width: 900, height: 600 } });
const p = await ctx.newPage();
p.on('pageerror', (e) => console.log('[pageerror]', e.message));
const U = 'http://localhost:8766/?q=baixa';
const keys = () => p.evaluate(async () => ({ caches: await caches.keys(), ctrl: !!navigator.serviceWorker.controller, ready: !!window.__ready, web: window.__WEB, btn: !document.querySelector('#b-install').hidden }));
await p.goto(U); await p.waitForFunction(() => window.__ready, null, { timeout: 240000 });
await p.evaluate(() => navigator.serviceWorker.ready); await p.waitForTimeout(6000);
console.log('1 first load', JSON.stringify(await keys()));
await ctx.setOffline(true);
await p.reload(); await p.waitForFunction(() => window.__ready, null, { timeout: 240000 });
console.log('2 offline reload', JSON.stringify(await keys()));
await ctx.setOffline(false);
// publish a "new version": change the files on the server
const sw = fs.readFileSync('docs/sw.js', 'utf8'), idx = fs.readFileSync('docs/index.html', 'utf8');
const v0 = sw.match(/jardim-([0-9a-f]+)/)[1];
fs.writeFileSync('docs/sw.js', sw.replaceAll(v0, 'feedc0de01')); fs.writeFileSync('docs/index.html', idx.replaceAll(v0, 'feedc0de01').replace('window.__WEB=true;', 'window.__WEB=true;window.__NEW=1;'));
let navs = 0; p.on('framenavigated', () => navs++);
await p.reload(); await p.waitForTimeout(15000);
await p.waitForFunction(() => window.__ready, null, { timeout: 240000 });
console.log('3 after update', JSON.stringify(await keys()), 'new flag', await p.evaluate(() => window.__NEW), 'navigations', navs);
fs.writeFileSync('docs/sw.js', sw); fs.writeFileSync('docs/index.html', idx);
await b.close();
