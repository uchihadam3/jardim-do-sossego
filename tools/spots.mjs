// The places for plants are numbered in order and saved gardens use those numbers, so the numbering must never change.
//   node tools/spots.mjs save [url]   -> writes tools/spots.json from a running game (default: the published one)
//   node tools/spots.mjs check        -> compares the local build (localhost:8765) with tools/spots.json
import { createRequire } from 'module'; import { readFileSync, writeFileSync } from 'fs';
const { chromium } = createRequire(import.meta.url)('playwright');
const [mode = 'check', url = 'https://uchihadam3.github.io/jardim-do-sossego/'] = process.argv.slice(2), file = new URL('./spots.json', import.meta.url);
const b = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const p = await b.newPage(); await p.goto((mode === 'save' ? url : 'http://localhost:8765/local.html') + '?q=baixa&nointro=1'); await p.waitForFunction(() => window.__ready, null, { timeout: 300000 });
const spots = await p.evaluate(() => window.__game.world.spots.map((s) => [s.id, s.indoor ? 'indoor' : s.type, s.zone, +s.pos.x.toFixed(2), +s.pos.y.toFixed(2), +s.pos.z.toFixed(2)]));
await b.close();
if (mode === 'save') { writeFileSync(file, JSON.stringify(spots)); console.log('saved', spots.length, 'places'); }
else { const old = JSON.parse(readFileSync(file, 'utf8')); let bad = 0; old.forEach((o, i) => { const n = spots[i]; if (!n || (o[1] !== 'indoor' && JSON.stringify(o) !== JSON.stringify(n)) || (o[1] === 'indoor' && n[1] !== 'indoor')) { if (bad++ < 5) console.log('CHANGED', JSON.stringify(o), '->', JSON.stringify(n)); } });
  console.log(bad ? `FAIL ${bad} places changed their number` : `PASS the ${old.length} known places keep their numbers (${spots.length} now)`); }
