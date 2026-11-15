#!/bin/bash
# Runs every test, one after the other, against dist/ served on port 8765. Usage: bash tools/suite.sh [folder for screenshots] [tests...]
cd "$(dirname "$0")/.." || exit 1
OUT=${1:-/tmp}; shift
TESTS=${*:-test_loop test_house test_w test_all test_h test_save test_pick test_away}
for t in $TESTS; do
  echo "== $t"
  timeout 2400 node tools/$t.mjs "$OUT" 2>&1 | grep --line-buffered -E "^(PASS|FAIL|errors)|Error" | cut -c1-400
done
echo "== SUITE_DONE"
