import { SPECIES_LIST } from './species.js';
import { DECOR } from './world.js';
import { UPGRADES, STAGE_NAMES, LV } from './game.js';

const $ = (s) => document.querySelector(s);
const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html !== undefined) e.innerHTML = html; return e; };
const ICON = (n) => `<svg class="ic" aria-hidden="true"><use href="#i-${n}"/></svg>`;
const SPOT_NAMES = { bed: 'canteiro', pot: 'vaso', hang: 'vaso suspenso', window: 'jardineira', pond: 'lago', tree: 'árvore', arch: 'arco' };
const fmtTime = (s) => { if (s >= 3600) { const h = Math.floor(s / 3600), m = Math.round((s % 3600) / 60 / 5) * 5; return m >= 60 ? `${h + 1} h` : m ? `${h} h ${m}` : `${h} h`; } return s >= 60 ? `${Math.ceil(s / 60)} min` : `${Math.max(1, Math.ceil(s))} s`; };

export function createUI({ project, thumbs, audio }) {
  const U = { game: null, open: null };
  const hudCoins = $('#coins'), hudLvl = $('#lvl'), hudBar = $('#lvlbar'), hudBeauty = $('#beauty');
  const toasts = $('#toasts'), floats = $('#floats'), tags = $('#tags'), sheet = $('#sheet'), card = $('#card'), modal = $('#modal'), questEl = $('#quest');
  let cardUpd = null, cardSpot = null, lastCoins = null;
  const click = () => audio.sfx('click', 0.35);

  U.hud = () => {
    const G = U.game, S = G.state, l = G.level();
    if (lastCoins !== null && S.coins !== lastCoins) { hudCoins.parentElement.classList.remove('bump'); void hudCoins.offsetWidth; hudCoins.parentElement.classList.add('bump'); }
    lastCoins = S.coins; hudCoins.textContent = S.coins; hudLvl.textContent = l;
    const a = LV[l - 1] ?? 0, b = LV[l] ?? a + 1; hudBar.style.width = Math.round(Math.min(1, (S.xp - a) / (b - a)) * 100) + '%';
    hudBeauty.textContent = G.beauty();
    if (U.open === 'picker') refreshPicker();
  };
  U.toast = (text, kind = 'info') => {
    const t = el('div', 'toast ' + kind, text); toasts.appendChild(t);
    while (toasts.children.length > 3) toasts.firstChild.remove();
    setTimeout(() => t.classList.add('out'), 3400); setTimeout(() => t.remove(), 3900);
  };
  U.floatText = (v, text, kind) => {
    const p = project(v); if (!p.vis) return;
    const f = el('div', 'float ' + kind, (kind === 'coin' ? ICON('coin') : '') + text); f.style.left = p.x + 'px'; f.style.top = p.y + 'px'; floats.appendChild(f); setTimeout(() => f.remove(), 1500);
  };
  U.quest = (q) => {
    if (!q) { questEl.innerHTML = `<div class="q-t">Seu jardim está completo. Aproveite o sossego!</div>`; return; }
    const key = q.text + q.val; if (questEl.dataset.k === key) return; questEl.dataset.k = key;
    questEl.innerHTML = `<div class="q-h">Próximo passo</div><div class="q-t">${q.text}</div><div class="q-r"><div class="bar"><i style="width:${Math.round((q.val / q.goal) * 100)}%"></i></div><span>${q.val}/${q.goal}</span><b>${ICON('coin')}${q.reward}</b></div>`;
  };

  // ---------- bottom sheet: choose what to plant ----------
  let pickSpot = null, pickList = null;
  const refreshPicker = () => {
    if (!pickSpot) return; const G = U.game, lvl = G.level();
    sheet.querySelectorAll('.seed').forEach((b) => { const sp = SPECIES_LIST.find((s) => s.id === b.dataset.id); b.classList.toggle('poor', G.state.coins < sp.price && sp.lvl <= lvl); });
  };
  U.picker = (spot, list) => {
    U.closeCards(); pickSpot = spot; pickList = list; U.open = 'picker';
    const lvl = U.game.level();
    sheet.innerHTML = `<div class="sheet-h"><div><b>O que vamos plantar?</b><span>Plantas para ${SPOT_NAMES[spot.type]}</span></div><button class="x" aria-label="Fechar">${ICON('x')}</button></div><div class="seeds"></div>`;
    const row = sheet.querySelector('.seeds');
    for (const { sp, locked } of list) {
      const b = el('button', 'seed' + (locked ? ' locked' : ''));
      b.dataset.id = sp.id;
      b.innerHTML = `<div class="th"><img alt="" src="${thumbs[sp.id] || ''}">${locked ? `<em>Nível ${sp.lvl}</em>` : ''}</div><b>${sp.name}</b><small>${sp.info}</small><div class="meta"><span class="price">${ICON('coin')}${sp.price}</span><span>${ICON('clock')}${fmtTime(sp.grow)}</span></div>`;
      b.onclick = () => { if (U.game.choose(spot, sp.id)) U.closeCards(); };
      row.appendChild(b);
    }
    sheet.querySelector('.x').onclick = () => { click(); U.closeCards(); };
    sheet.classList.add('on'); refreshPicker();
    const first = row.querySelector('.seed:not(.locked)'); if (first) row.scrollLeft = 0;
  };

  // ---------- plant card ----------
  U.plantCard = (spot, getInfo, act) => {
    U.closeCards(); cardSpot = spot; U.open = 'card';
    const draw = () => {
      const i = getInfo(); if (!i) { U.closeCards(); return; }
      const st = i.stage === 4 ? (i.ready ? 'Presente pronto!' : 'Em flor') : STAGE_NAMES[i.stage];
      card.innerHTML = `<img class="c-th" alt="" src="${thumbs[i.sp.id] || ''}"><div class="c-b"><div class="c-n"><b>${i.sp.name}</b><span>${st}</span></div>
        <div class="c-row">${ICON('leaf')}<div class="bar g"><i style="width:${Math.round(i.grow * 100)}%"></i></div><small>${i.stage === 4 ? 'adulta' : 'faltam ' + fmtTime(i.left)}</small></div>
        <div class="c-row">${ICON('drop')}<div class="bar w"><i style="width:${Math.round(i.water * 100)}%"></i></div><small>${i.noWater ? 'vive na água' : i.water <= 0 ? 'com sede!' : 'regada'}</small></div>
        ${i.stage === 4 ? `<div class="c-row">${ICON('coin')}<div class="bar c"><i style="width:${Math.round((i.ready ? 1 : i.gift) * 100)}%"></i></div><small>próximo presente</small></div>` : ''}
        <div class="c-act">${i.noWater ? '' : `<button class="btn" data-a="water">${ICON('drop')}Regar</button>`}<button class="btn ghost" data-a="remove">Retirar</button><button class="btn ghost" data-a="close">Fechar</button></div></div>`;
      card.querySelectorAll('button').forEach((b) => (b.onclick = () => { click(); const a = b.dataset.a;
        if (a === 'remove') { if (b.dataset.sure) { act.remove(); U.closeCards(); } else { b.dataset.sure = 1; b.textContent = 'Tem certeza?'; b.classList.add('danger'); cardUpd = null; } }
        else { if (a === 'water') act.water(); U.closeCards(); } }));
    };
    draw(); cardUpd = draw; card.classList.add('on');
  };
  U.closeCards = () => { sheet.classList.remove('on'); card.classList.remove('on'); pickSpot = null; cardUpd = null; cardSpot = null; if (U.open === 'picker' || U.open === 'card') U.open = null; };

  // ---------- modals ----------
  const openModal = (html, cls = '') => { U.closeCards(); modal.innerHTML = `<div class="panel ${cls}">${html}</div>`; modal.classList.add('on'); U.open = 'modal';
    modal.querySelectorAll('[data-close]').forEach((b) => (b.onclick = () => { click(); closeModal(); })); };
  const closeModal = () => { modal.classList.remove('on'); if (U.open === 'modal') U.open = null; };
  modal.addEventListener('pointerdown', (e) => { if (e.target === modal) closeModal(); });
  U.closeModal = closeModal;

  U.zoneOffer = (z, afford, onBuy) => {
    openModal(`<h2>${z.name}</h2><p>${z.desc || ''}</p><div class="offer"><span class="bigprice">${ICON('coin')}${z.cost}</span>${afford ? '' : `<small>Você tem ${U.game.state.coins}. Recolha mais presentes das flores.</small>`}</div>
      <div class="row"><button class="btn ghost" data-close>Agora não</button><button class="btn big" id="buyz" ${afford ? '' : 'disabled'}>Abrir esta área</button></div>`, 'small');
    $('#buyz').onclick = () => { closeModal(); onBuy(); };
  };
  U.levelUp = (l, list) => {
    const items = list.map((s) => `<div class="unl"><img alt="" src="${thumbs[s.id] || ''}"><span>${s.name}</span></div>`).join('');
    setTimeout(() => openModal(`<div class="lv-badge">${l}</div><h2>Nível ${l}!</h2><p>${list.length ? 'Novas plantas chegaram à sua coleção de sementes:' : 'Você está cada vez melhor com as plantas.'}</p><div class="unls">${items}</div><div class="row"><button class="btn big" data-close>Que lindo!</button></div>`, 'small center'), 900);
  };
  const shop = (tab = 'decor') => {
    const G = U.game, S = G.state;
    const dec = DECOR.map((d) => { const own = S.decor.includes(d.id); return `<div class="item ${own ? 'own' : ''}"><div><b>${d.name}</b><small>${d.desc}</small></div>${own ? '<span class="tagok">No jardim</span>' : `<button class="btn" data-buy="d:${d.id}" ${S.coins >= d.price ? '' : 'disabled'}>${ICON('coin')}${d.price}</button>`}</div>`; }).join('');
    const upg = UPGRADES.map((u) => { const own = S.upg.includes(u.id), locked = u.need && !S.upg.includes(u.need); return `<div class="item ${own ? 'own' : ''}"><div><b>${u.name}</b><small>${u.desc}</small></div>${own ? '<span class="tagok">Comprado</span>' : locked ? '<span class="taglock">Depois do anterior</span>' : `<button class="btn" data-buy="u:${u.id}" ${S.coins >= u.price ? '' : 'disabled'}>${ICON('coin')}${u.price}</button>`}</div>`; }).join('');
    openModal(`<div class="p-h"><h2>Lojinha do jardim</h2><span class="wallet">${ICON('coin')}${S.coins}</span><button class="x" data-close aria-label="Fechar">${ICON('x')}</button></div>
      <div class="tabs"><button class="${tab === 'decor' ? 'on' : ''}" data-tab="decor">Decoração</button><button class="${tab === 'upg' ? 'on' : ''}" data-tab="upg">Melhorias</button></div>
      <div class="list">${tab === 'decor' ? dec : upg}</div><p class="hint">Sementes e mudas você escolhe tocando num lugar vazio do jardim.</p>`);
    modal.querySelectorAll('[data-tab]').forEach((b) => (b.onclick = () => { click(); shop(b.dataset.tab); }));
    modal.querySelectorAll('[data-buy]').forEach((b) => (b.onclick = () => { const [k, id] = b.dataset.buy.split(':'); if (k === 'd') G.buyDecor(id); else G.buyUpgrade(id); shop(tab); }));
  };
  const album = () => {
    const S = U.game.state, lvl = U.game.level();
    const cells = SPECIES_LIST.map((s) => { const got = S.album.includes(s.id); return `<div class="alb ${got ? 'got' : ''}"><img alt="" src="${thumbs[s.id] || ''}"><b>${got ? s.name : s.lvl > lvl ? 'Nível ' + s.lvl : s.name}</b></div>`; }).join('');
    openModal(`<div class="p-h"><h2>Álbum de flores</h2><span class="wallet">${S.album.length}/${SPECIES_LIST.length}</span><button class="x" data-close aria-label="Fechar">${ICON('x')}</button></div><p class="hint">Cada espécie entra no álbum quando floresce pela primeira vez.</p><div class="albgrid">${cells}</div>`, 'wide');
  };
  const settings = () => {
    const S = U.game.state.settings;
    const opt = (v, t, cur) => `<option value="${v}" ${cur === v ? 'selected' : ''}>${t}</option>`;
    openModal(`<div class="p-h"><h2>Ajustes</h2><button class="x" data-close aria-label="Fechar">${ICON('x')}</button></div>
      <label class="set" for="s-music"><span>Música</span><input id="s-music" type="range" min="0" max="1" step="0.05" value="${S.music}"></label>
      <label class="set" for="s-sfx"><span>Sons do jardim</span><input id="s-sfx" type="range" min="0" max="1" step="0.05" value="${S.sfx}"></label>
      <label class="set" for="s-time"><span>Hora do dia</span><select id="s-time">${opt('auto', 'O dia passa sozinho', S.time)}${opt('dia', 'Sempre manhã', S.time)}${opt('tarde', 'Sempre entardecer', S.time)}${opt('noite', 'Sempre noite', S.time)}</select></label>
      <label class="set" for="s-q"><span>Qualidade da imagem</span><select id="s-q">${opt('auto', 'Automática', S.quality)}${opt('alta', 'Alta', S.quality)}${opt('media', 'Média', S.quality)}${opt('baixa', 'Leve (para aparelhos simples)', S.quality)}</select></label>
      <div class="howto"><b>Como jogar</b><ul><li>Toque num <i>+</i> para escolher uma planta.</li><li>Toque numa planta com a gotinha para regar.</li><li>Toque na flor com a moedinha para recolher o presente.</li><li>Arraste para girar a vista; use dois dedos ou a rodinha para aproximar.</li></ul></div>
      <div class="row"><button class="btn ghost danger" id="s-reset">Recomeçar o jardim</button><button class="btn" data-close>Pronto</button></div>`, 'small');
    const apply = () => { S.music = +$('#s-music').value; S.sfx = +$('#s-sfx').value; S.time = $('#s-time').value; const q = $('#s-q').value; if (q !== S.quality) { S.quality = q; U.onQuality && U.onQuality(q); } audio.setVolumes(S.music, S.sfx); U.game.save(); };
    ['#s-music', '#s-sfx', '#s-time', '#s-q'].forEach((id) => ($(id).oninput = $(id).onchange = apply));
    $('#s-reset').onclick = (e) => { const b = e.currentTarget; if (b.dataset.sure) { U.game.reset(); U.onReset && U.onReset(); } else { b.dataset.sure = 1; b.textContent = 'Apagar tudo e recomeçar?'; } };
  };
  // ---------- install on the computer ----------
  const install = () => {
    openModal(`<div class="p-h"><h2>Instalar no computador</h2><button class="x" data-close aria-label="Fechar">${ICON('x')}</button></div>
      <p>Jogue sem internet, com o jogo guardado no seu computador.</p>
      <div class="list">
        <div class="item"><div><b>Windows</b><small>Instalador com atalho na área de trabalho e no menu Iniciar. Baixa um .zip: abra e dê dois cliques em “Instalar Jardim do Sossego”. Começa um jardim novo.</small></div><button class="btn" data-dl="win">Baixar</button></div>
        <div class="item"><div><b>Mac, Linux ou sem instalar</b><small>Um arquivo só: dois cliques e o jogo abre no navegador, levando o seu jardim de agora.</small></div><button class="btn" data-dl="html">Baixar</button></div>
      </div><p class="hint" id="dl-msg" role="status">O download pede a sua confirmação antes de salvar.</p>`, 'small');
    const msg = (t) => { const m = $('#dl-msg'); if (m) m.textContent = t; };
    modal.querySelectorAll('[data-dl]').forEach((b) => (b.onclick = async () => {
      click(); const all = modal.querySelectorAll('[data-dl]'); all.forEach((x) => (x.disabled = true)); msg('Preparando o arquivo…');
      try {
        const downloads = window.claude && window.claude.use ? await window.claude.use('downloads') : null;
        if (!downloads) { msg('Por aqui não dá para baixar. Abra o jogo pelo link, no navegador do computador.'); return; }
        let data, filename;
        if (b.dataset.dl === 'win') { const r = await fetch('instalar/Jardim-do-Sossego-Windows.zip'); if (!r.ok) throw new Error('fetch'); data = await r.blob(); filename = 'Jardim-do-Sossego-Windows.zip'; }
        else { const r = await fetch('instalar/Jardim-do-Sossego.html'); if (!r.ok) throw new Error('fetch'); const t = await r.text(); U.game.save();
          const seed = 'window.__SAVE=' + JSON.stringify(U.game.state).replace(/</g, '\\u003c') + ';';
          data = new Blob([t.replace('/*__SAVE__*/', () => seed)]); filename = 'Jardim-do-Sossego.html'; }
        await downloads.save({ filename, data });
        msg(b.dataset.dl === 'win' ? 'Salvo! Abra o .zip e dê dois cliques no instalador.' : 'Salvo! Dois cliques no arquivo e o jardim abre.');
      } catch (e) { msg(e && e.code === 'declined' ? 'Tudo bem, fica para depois.' : e && e.code === 'rate_limited' ? 'Já existe um pedido de download aberto. Confirme ou feche-o primeiro.' : 'Não foi possível baixar agora. Tente de novo em instantes.'); }
      finally { all.forEach((x) => (x.disabled = false)); }
    }));
  };
  // hosted (self-updating) version: install as an app, or with the Windows installer
  const installWeb = () => {
    const ios = /iPhone|iPad|iPod/i.test(navigator.userAgent), standalone = matchMedia('(display-mode: standalone)').matches || navigator.standalone;
    const win = /Windows/i.test(navigator.userAgent);
    openModal(`<div class="p-h"><h2>Instalar o jogo</h2><button class="x" data-close aria-label="Fechar">${ICON('x')}</button></div>
      <p>${standalone ? 'O jogo já está instalado neste aparelho.' : 'Instalado, o jogo ganha um ícone próprio, funciona sem internet e recebe as novidades sozinho.'}</p>
      <div class="list">
        ${standalone ? '' : `<div class="item"><div><b>Neste aparelho</b><small id="pwa-how">${ios ? 'No iPhone ou iPad: toque em Compartilhar e depois em “Adicionar à Tela de Início”.' : 'Instala como aplicativo, no celular ou no computador.'}</small></div>${ios ? '' : '<button class="btn" id="pwa-go">Instalar</button>'}</div>`}
        ${win && !standalone ? `<div class="item"><div><b>Instalador de Windows</b><small>Cria o atalho com a flor na área de trabalho e no menu Iniciar.</small></div><a class="btn" href="instalar/Instalar-Jardim-do-Sossego.exe" download>Baixar</a></div>` : ''}
      </div><p class="hint">O seu jardim fica guardado neste aparelho.</p>`, 'small');
    const go = $('#pwa-go');
    if (go) go.onclick = async () => { click(); const ev = window.__pwaPrompt;
      if (ev) { ev.prompt(); try { await ev.userChoice; } catch (e) {} window.__pwaPrompt = null; closeModal(); }
      else $('#pwa-how').textContent = 'Abra o menu do navegador (os três pontinhos) e escolha “Instalar aplicativo” ou “Adicionar à tela inicial”.'; };
  };
  if (window.__WEB) $('#b-install').onclick = () => { click(); installWeb(); };
  else if (window.__APP || !window.__INSTALL) $('#b-install').hidden = true; else $('#b-install').onclick = () => { click(); install(); };
  $('#b-shop').onclick = () => { click(); shop(); };
  $('#b-album').onclick = () => { click(); album(); };
  $('#b-set').onclick = () => { click(); settings(); };
  $('#b-photo').onclick = () => { click(); document.body.classList.add('photo'); U.closeCards(); };
  $('#photo-exit').onclick = () => document.body.classList.remove('photo');

  // ---------- zone tags (locked areas) ----------
  const tagEls = {};
  U.initTags = (zones) => { for (const z of zones) { if (!z.cost) continue; const b = el('button', 'ztag', `${ICON('lock')}<small>${ICON('coin')}${z.cost}</small>`); b.title = z.name; b.setAttribute('aria-label', `${z.name}: ${z.cost} moedas`); b.onclick = () => { click(); U.game.offerZone(z.id); }; tags.appendChild(b); tagEls[z.id] = b; } };
  U.frame = (zones, V3) => {
    const S = U.game.state;
    for (const z of zones) { const b = tagEls[z.id]; if (!b) continue; if (S.zones.includes(z.id)) { b.hidden = true; continue; }
      const p = project(new V3(z.tag[0], z.id === 1 ? 2.25 : 1.75, z.tag[1])); b.hidden = !p.vis; if (p.vis) { b.style.transform = `translate(-50%,-100%) translate(${p.x.toFixed(1)}px,${p.y.toFixed(1)}px)`; b.classList.toggle('can', S.coins >= z.cost); } }
    if (cardUpd && (U._ct = (U._ct || 0) + 1) % 20 === 0) cardUpd();
  };
  U.focus = () => {};
  return U;
}
