# Jardim do Sossego

Jogo cozy de jardinagem em 3D que roda no navegador (celular ou computador).

- `src/` — o jogo (Three.js): plantas procedurais (`species.js`, `parts.js`), mundo (`world.js`), jardineira (`character.js`), regras (`game.js`), interface (`ui.js`).
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
