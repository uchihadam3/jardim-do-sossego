#!/bin/bash
# Contact sheets of the whole furniture catalogue, 7 pieces per sheet, into the folder given as $1.
cd "$(dirname "$0")/.." || exit 1
OUT=${1:-/tmp/furn}; mkdir -p "$OUT"
npx esbuild test/furnall.js --bundle --format=iife --outfile=test/furnall.bundle.js --log-level=warning
N=${2:-262}; FROM=${3:-0}
for ((i=FROM; i<N; i+=7)); do
  node tools/shot.mjs "http://localhost:8770/test/furn.html?b=furnall.bundle.js&from=$i&n=7&cols=7&dist=17&pitch=0.36&yaw=0.3${4:+&$4}" "$OUT/f$(printf %03d $i).png" 1900 620 600 2>&1 | grep -E "pageerror|^\[log\] [0-9]+\." | cut -c1-90
done
echo sheets done
