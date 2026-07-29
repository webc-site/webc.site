#!/usr/bin/env bash

set -e
DIR=$(realpath $0) && DIR=${DIR%/*}
cd $DIR
set -x

bun x jscpd . --pattern "**/*.js" -r ai
bun x oxfmt
bun x oxlint --fix
bun x knip
bun x lint-staged
bun test --only-failures
