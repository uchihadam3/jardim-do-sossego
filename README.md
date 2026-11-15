# Jardim do Sossego

Jogo cozy de jardinagem em 3D que roda no navegador (celular ou computador).

- `src/` — o jogo (Three.js): plantas procedurais (`species.js`, `species2.js`, `parts.js`), mundo (`world.js`), a Eliane (`character.js`), regras (`game.js`), estações/pedidos/conquistas (`systems.js`), visitantes (`critters.js`), interface (`ui.js`).
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

## Publicar uma atualização

```bash
bash tools/publicar.sh "O que mudou"
```

As cópias instaladas pegam a novidade sozinhas na próxima vez que forem abertas.
