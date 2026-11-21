#!/bin/bash
cd "$(dirname "$0")"
for job in "$@"; do IFS=: read sc lang fmt <<< "$job"; card=""; [ $sc = daily ] && card=i:c-herpes:OPH-059
  NODE_PATH=$(npm root -g) node run.js $sc $lang $fmt $card || echo "FAIL $job"; done
