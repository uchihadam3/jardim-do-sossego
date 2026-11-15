import { createRequire } from 'module'; const { chromium } = createRequire(import.meta.url)('playwright');
const b = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const p = await b.newPage({ viewport: { width: 900, height: 600 } });
p.on('pageerror', (e) => console.log('[pageerror]', e.message)); p.on('console', (m) => { if (m.text().startsWith('SKIRT')) console.log(m.text()); });
await p.goto('http://localhost:8765/local.html?q=baixa&nointro=1');
await p.waitForFunction(() => window.__game && window.__game.gardener._sw, null, { timeout: 300000 });
for (let i = 0; i < 4; i++) { console.log(JSON.stringify(await p.evaluate(() => { const g = window.__game.gardener, s = g._sw; return { x: s.x, z: s.z, vx: s.vx, vz: s.vz, tw: s.tw, vtw: s.vtw, heading: g.heading, phase: g.phase, speed: g.speed }; }))); await p.waitForTimeout(1500); }
await b.close();
