#!/bin/bash
# ./batch.sh            → every scene × language × format
# ./batch.sh cas:fr:9x16 …  → selected jobs
cd "$(dirname "$0")"
jobs="$@"; [ -z "$jobs" ] && for sc in cas ascan daily social; do for l in fr en; do for f in 9x16 16x9; do jobs="$jobs $sc:$l:$f"; done; done; done
for job in $jobs; do IFS=: read sc lang fmt <<< "$job"
  NODE_PATH=$(npm root -g) timeout 240 node run.js $sc $lang $fmt || echo "FAIL $job"; done
