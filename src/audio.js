// Music playlist with crossfades, ambience layers and one-shot effects (all pre-rendered by tools/make_music.py)
const SFX = ['water', 'plant', 'pop', 'bloom', 'coin', 'buy', 'click', 'levelup', 'expand', 'step', 'error'];
export function createAudio(base = 'audio/') {
  const A = { ctx: null, ready: false, musicVol: 0.6, sfxVol: 0.8, buffers: {}, night: 0, rain: 0 };
  let master, musicGain, sfxGain, ambGain, cur = null, order = [], amb = {}, started = false, timer = null;
  const load = async (name) => {
    if (A.buffers[name]) return A.buffers[name];
    try {
      let buf; const emb = window.__AUDIO && window.__AUDIO[name]; // installed copy carries its audio inside the page
      if (emb) { const bin = atob(emb), u8 = new Uint8Array(bin.length); for (let i = 0; i < bin.length; i++) u8[i] = bin.charCodeAt(i); buf = u8.buffer; }
      else { const r = await fetch(base + name + '.mp3'); if (!r.ok) return null; buf = await r.arrayBuffer(); }
      const b = await A.ctx.decodeAudioData(buf); A.buffers[name] = b; return b;
    } catch (e) { return null; }
  };
  A.unlock = () => {
    if (A.ctx) { A.ctx.resume && A.ctx.resume(); return; }
    const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return;
    A.ctx = new AC(); master = A.ctx.createGain(); master.connect(A.ctx.destination);
    musicGain = A.ctx.createGain(); musicGain.gain.value = A.musicVol; musicGain.connect(master);
    sfxGain = A.ctx.createGain(); sfxGain.gain.value = A.sfxVol; sfxGain.connect(master);
    ambGain = A.ctx.createGain(); ambGain.gain.value = Math.min(1, A.sfxVol * 1.1); ambGain.connect(master);
    for (const s of SFX) load('sfx_' + s);
    A.ready = true; startAmb(); nextTrack();
  };
  const startAmb = async () => {
    for (const k of ['day', 'night', 'rain']) {
      const b = await load('amb_' + k); if (!b) continue;
      const src = A.ctx.createBufferSource(), g = A.ctx.createGain(); src.buffer = b; src.loop = true; g.gain.value = 0; src.connect(g); g.connect(ambGain); src.start(); amb[k] = g;
    }
  };
  const nextTrack = async () => {
    if (!A.ready) return;
    const pool = A.night > 0.6 ? ['music4'] : ['music1', 'music2', 'music3'];
    if (!order.length) order = pool.slice().sort(() => Math.random() - 0.5);
    let name = order.shift(); if (!pool.includes(name)) { order = []; name = pool[Math.floor(Math.random() * pool.length)]; }
    if (cur && cur.name === name && pool.length > 1) name = pool[(pool.indexOf(name) + 1) % pool.length];
    const b = await load(name); if (!b) { timer = setTimeout(nextTrack, 8000); return; }
    const t = A.ctx.currentTime, src = A.ctx.createBufferSource(), g = A.ctx.createGain();
    src.buffer = b; src.connect(g); g.connect(musicGain); g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(1, t + 3);
    src.start();
    if (cur) { const old = cur; old.g.gain.cancelScheduledValues(t); old.g.gain.setValueAtTime(old.g.gain.value, t); old.g.gain.linearRampToValueAtTime(0, t + 4); setTimeout(() => { try { old.src.stop(); } catch (e) {} }, 4500); }
    cur = { src, g, name, night: A.night > 0.6 };
    clearTimeout(timer); timer = setTimeout(nextTrack, Math.max(5, b.duration - 4 + 2.5) * 1000);
  };
  A.sfx = (name, vol = 1, rate = 1) => {
    if (!A.ready) return; const b = A.buffers['sfx_' + name]; if (!b) return;
    const src = A.ctx.createBufferSource(), g = A.ctx.createGain(); src.buffer = b; src.playbackRate.value = rate * (0.96 + Math.random() * 0.08); g.gain.value = vol; src.connect(g); g.connect(sfxGain); src.start();
  };
  A.setVolumes = (m, s) => { A.musicVol = m; A.sfxVol = s; if (!A.ready) return; musicGain.gain.value = m; sfxGain.gain.value = s; ambGain.gain.value = Math.min(1, s * 1.1); };
  A.update = (night, rain, indoor = false) => {
    A.night = night; A.rain = rain; if (!A.ready) return;
    const t = A.ctx.currentTime, set = (g, v) => g && g.gain.setTargetAtTime(v, t, 1.2), k = indoor ? 0.3 : 1; // inside the house the garden sounds come muffled through the windows
    set(amb.day, (1 - night) * (1 - rain * 0.7) * 0.9 * k); set(amb.night, night * 0.9 * k); set(amb.rain, rain * 0.9 * (indoor ? 0.55 : 1));
    if (cur && cur.night !== night > 0.6 && Math.abs(night - 0.6) > 0.25) { order = []; nextTrack(); }
  };
  A.pause = (p) => { if (A.ctx) p ? A.ctx.suspend() : A.ctx.resume(); };
  return A;
}
