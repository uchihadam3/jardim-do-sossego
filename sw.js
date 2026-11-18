// Jardim do Sossego: copia offline + atualizacao automatica (gerado por tools/build.py)
const V = 'jardim-40b998375a';
const ASSETS = ["./", "index.html", "game.js?v=40b998375a", "manifest.webmanifest", "icone-192.png", "icone-512.png", "audio/amb_day.mp3", "audio/amb_night.mp3", "audio/amb_rain.mp3", "audio/music1.mp3", "audio/music2.mp3", "audio/music3.mp3", "audio/music4.mp3", "audio/sfx_bloom.mp3", "audio/sfx_buy.mp3", "audio/sfx_click.mp3", "audio/sfx_coin.mp3", "audio/sfx_error.mp3", "audio/sfx_expand.mp3", "audio/sfx_levelup.mp3", "audio/sfx_plant.mp3", "audio/sfx_pop.mp3", "audio/sfx_step.mp3", "audio/sfx_water.mp3"];
// sounds and icons do not change from one version to the next: they are copied from the copy already on the device, so an update is a small download
self.addEventListener('install', (e) => { e.waitUntil((async () => { const c = await caches.open(V), old = (await caches.keys()).filter((k) => k.startsWith('jardim-') && k !== V);
  await Promise.all(ASSETS.map(async (u) => { if (/^(audio\/|icone-)/.test(u)) for (const k of old) { const r = await (await caches.open(k)).match(u); if (r) { await c.put(u, r.clone()); return; } } await c.add(new Request(u, { cache: 'reload' })); }));
  await self.skipWaiting(); })()); });
self.addEventListener('activate', (e) => { e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k.startsWith('jardim-') && k !== V).map((k) => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(caches.open(V).then((c) => c.match(e.request, { ignoreSearch: e.request.mode === 'navigate' })).then((r) => r || fetch(e.request)));
});
