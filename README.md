# Jardim do Sossego

Jogo cozy de jardinagem em 3D que roda no navegador (celular ou computador).

- `src/` — o jogo (Three.js):
  - plantas procedurais: `species.js`, `species2.js`, `species3.js` (horta, árvores, trepadeiras, aquáticas), `species4.js` (flores e plantas de interior), `parts.js`;
  - jardim: `world.js` (as áreas novas entram sempre no fim de `ZONES`: os lugares de planta são numerados em ordem e os jardins salvos usam esses números — `node tools/spots.mjs check` confere), `decor.js` (enfeites e criação);
  - a Eliane: `character.js` (corpo, roupas e animações) e `wardrobe.js` (catálogo de peças; cor e estampa são livres);
  - a casa por dentro: `house.js` (cômodos, paredes, pisos, onde cada coisa pode ficar), `home.js` (entrar e sair, mobiliar, usar os móveis, cozinhar), `furncore.js` + `furniture1.js` + `furniture2.js` (262 móveis e enfeites), `recipes.js`;
  - regras e interface: `game.js`, `systems.js` (estações, pedidos, conquistas), `critters.js`, `ui.js`, `save.js`.
- `docs/` — o site publicado em https://uchihadam3.github.io/jardim-do-sossego/ (GitHub Pages, ramo `gh-pages`).
- `tools/` — ferramentas em Python: `make_music.py`, `make_ambience.py`, `make_sfx.py` (trilha e sons sintetizados com numpy/scipy), `build.py` (monta `dist/`), `serve.py` (servidor local).
- `dist/` — jogo pronto: `index.html` (página publicada), `local.html` (para abrir localmente), `game.js`, `audio/`.

## Rodar no computador

```bash
npm install
python3 tools/build.py
python3 tools/serve.py
```

Depois abra http://localhost:8000/local.html

`?demo=1` no endereço mostra um jardim já crescido (não altera o jogo salvo).

Testes (com o servidor de `dist/` na porta 8765): `node tools/test_all.mjs`, `test_house.mjs`, `test_w.mjs`, `test_save.mjs`, `test_h.mjs`, `test_pick.mjs`, `test_away.mjs`, `spots.mjs check`.

## Publicar uma atualização

```bash
bash tools/publicar.sh "O que mudou"
```

As cópias instaladas pegam a novidade sozinhas na próxima vez que forem abertas.
