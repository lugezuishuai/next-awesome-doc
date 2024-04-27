#!/bin/sh
node common/scripts/install-run-rush-pnpm.js --rush-skip-checks --filter="@awesome-blog/server" lint:staged
