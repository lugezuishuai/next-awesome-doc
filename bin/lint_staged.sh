#!/bin/sh
pnpm run lint:staged --filter="@jacksonhuang/random-blog-client" && \
pnpm run lint:staged --filter="@jacksonhuang/random-blog-server"