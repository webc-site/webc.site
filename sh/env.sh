#!/usr/bin/env bash

DIR="${BASH_SOURCE[0]%/*/*}"
cd $DIR
if [ ! -d "node_modules" ]; then
  rm -f bun.lock
  bun i
  rm -f bun.lock
  if [ ! -d ".codegraph" ]; then
    if command -v codegraph 2>/dev/null; then
      codegraph init -i
    fi
  fi
fi

if [ ! -d ".agents/skills" ]; then
  ./node_modules/@webc.site/cli/src/init.js
fi
