#!/bin/sh
# Rebuilds every audio asset of "Jardim do Sossego" into ../dist/audio,
# verifies it and removes the intermediate WAVs.
set -e
cd "$(dirname "$0")"
mkdir -p _tmp ../dist/audio
python3 make_music.py 1 > _tmp/music1.log 2>&1 &
python3 make_music.py 2 > _tmp/music2.log 2>&1 &
python3 make_music.py 3 > _tmp/music3.log 2>&1 &
python3 make_music.py 4 > _tmp/music4.log 2>&1 &
wait
cat _tmp/music1.log _tmp/music2.log _tmp/music3.log _tmp/music4.log
python3 make_ambience.py
python3 make_sfx.py
python3 verify.py
rm -rf _tmp __pycache__
