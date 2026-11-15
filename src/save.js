// Keeps the garden safe: several copies on the device (two browser stores), a copy in the player's Claude account when
// the game runs inside Claude, a "previous garden" slot that is never silently destroyed, and a backup code to carry
// the garden to another device.
const KEY = 'jardim-do-sossego-v1', BAK = KEY + '-bak', OLD = KEY + '-old', DBN = 'jardim-do-sossego', STORE = 'save';
export const valid = (s) => !!s && s.v === 1 && typeof s.coins === 'number' && !!s.plants;
export const progress = (s) => (valid(s) ? (s.xp || 0) + ((s.stats && s.stats.planted) || 0) * 3 + ((s.zones && s.zones.length) || 1) * 50 + Object.keys(s.plants).length + ((s.items && s.items.length) || 0) : -1);
const parse = (t) => { try { const s = typeof t === 'string' ? JSON.parse(t) : t; return valid(s) ? s : null; } catch (e) { return null; } };
const lsGet = (k) => { try { return parse(localStorage.getItem(k)); } catch (e) { return null; } };
const lsSet = (k, json) => { try { localStorage.setItem(k, json); return true; } catch (e) { return false; } };
const idb = (mode, fn) => new Promise((res) => { try { const rq = indexedDB.open(DBN, 1); rq.onupgradeneeded = () => rq.result.createObjectStore(STORE); rq.onerror = () => res(null);
  rq.onsuccess = () => { try { const tx = rq.result.transaction(STORE, mode), r = fn(tx.objectStore(STORE)); tx.oncomplete = () => { res(r && r.result !== undefined ? r.result : true); rq.result.close(); }; tx.onerror = tx.onabort = () => res(null); } catch (e) { res(null); } }; } catch (e) { res(null); } });
const withTimeout = (p, ms) => Promise.race([p, new Promise((r) => setTimeout(() => r(null), ms))]);

// backup code: text the player can copy, keep or send to another device
export const toCode = (s) => 'JARDIM1:' + btoa(unescape(encodeURIComponent(JSON.stringify(s))));
export const fromCode = (t) => { try { const m = String(t).trim().replace(/\s+/g, ''); if (!m.startsWith('JARDIM1:')) return parse(m); return parse(decodeURIComponent(escape(atob(m.slice(8))))); } catch (e) { return null; } };

export function createStore() {
  const st = { where: [], cloud: false, lastSaved: 0, old: null };
  try { if (navigator.storage && navigator.storage.persist) navigator.storage.persist().catch(() => {}); } catch (e) {}
  let doc = null;
  const cloudReady = (async () => { if (!window.claude || !window.claude.use) return null; const [db, user] = await Promise.all([window.claude.use('db'), window.claude.use('user')]); if (!db || !user) return null; const id = await user.id(); if (!id) return null; doc = db.doc(`data/users/${id}/jardim`); return doc; })().catch(() => null);
  const cloudGet = async () => { const d = await cloudReady; if (!d) return null; try { const snap = await d.get(); if (!snap.exists) return null; return parse(snap.data().json); } catch (e) { return null; } };

  // pick the newest copy; a copy with real progress always beats an empty one
  st.load = async (cloudWaitMs = 6000) => {
    const cands = [['aparelho', lsGet(KEY)], ['reserva', lsGet(BAK)], ['banco', parse(await withTimeout(idb('readonly', (o) => o.get('main')), 2500))]];
    if (window.claude && window.claude.use) cands.push(['conta Claude', await withTimeout(cloudGet(), cloudWaitMs)]);
    let best = null, from = '';
    for (const [name, s] of cands) { if (!s) continue; const better = !best || (progress(s) > 60 && progress(best) <= 60) || (!(progress(best) > 60 && progress(s) <= 60) && (s.last || 0) > (best.last || 0)); if (better) { best = s; from = name; } }
    st.old = lsGet(OLD); st.from = from; st.cloud = !!doc;
    return best;
  };
  let idbT = 0, cloudT = 0, bakT = 0, pendingCloud = null, firstWrite = true;
  const pushCloud = (json, last) => { if (!doc) return; cloudT = Date.now(); pendingCloud = null; doc.set({ json, last, v: 1 }).then(() => { st.cloudAt = Date.now(); }).catch(() => {}); };
  st.save = (state, force) => {
    state.last = Date.now(); const json = JSON.stringify(state), now = state.last;
    if (firstWrite) { firstWrite = false; const cur = lsGet(KEY); // never silently replace a different, richer garden
      if (cur && cur.t0 !== state.t0 && progress(cur) > progress(state) && progress(cur) > 60) { lsSet(OLD, JSON.stringify(cur)); st.old = cur; } }
    const okLs = lsSet(KEY, json); st.where = okLs ? ['aparelho'] : [];
    if (force || now - bakT > 60000) { bakT = now; lsSet(BAK, json); }
    if (force || now - idbT > 4000) { idbT = now; idb('readwrite', (o) => o.put(json, 'main')).then((r) => { if (r) st.idbAt = Date.now(); }); }
    if (doc) { if (force || now - cloudT > 20000) pushCloud(json, now); else pendingCloud = [json, now]; }
    st.lastSaved = now; st.cloud = !!doc; return okLs;
  };
  st.flush = (state) => { if (state) st.save(state, true); else if (pendingCloud) pushCloud(...pendingCloud); };
  st.wipe = async () => { try { localStorage.removeItem(KEY); localStorage.removeItem(BAK); localStorage.removeItem(OLD); } catch (e) {} await idb('readwrite', (o) => o.delete('main')); if (doc) { try { await doc.delete(); } catch (e) {} } };
  st.adopt = async (s) => { const json = JSON.stringify(s); lsSet(KEY, json); lsSet(BAK, json); await idb('readwrite', (o) => o.put(json, 'main')); if (doc) { try { await doc.set({ json, last: s.last || Date.now(), v: 1 }); } catch (e) {} } };
  st.cloudReady = cloudReady;
  return st;
}
