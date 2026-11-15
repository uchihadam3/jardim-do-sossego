#!/usr/bin/env bash
# Publica uma nova versão do jogo: monta docs/, envia o código (main) e o site (gh-pages).
# As cópias instaladas pegam a novidade sozinhas na próxima vez que forem abertas.
set -euo pipefail
cd "$(dirname "$0")/.."
python3 tools/build.py --web https://uchihadam3.github.io/jardim-do-sossego
git add -A
git commit -m "${1:-Atualização do jogo}" || true
git push origin main
git branch -D gh-pages 2>/dev/null || true
git subtree split --prefix docs -b gh-pages >/dev/null
git push -f origin gh-pages
