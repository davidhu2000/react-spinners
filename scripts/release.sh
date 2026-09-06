#!/usr/bin/env bash

set -euo pipefail

if [[ "$(git branch --show-current)" != "main" ]]; then
  echo "Release must run from main." >&2
  exit 1
fi

if [[ -n "$(git status --porcelain)" ]]; then
  echo "Release requires a clean working tree." >&2
  exit 1
fi

git fetch origin main

if [[ "$(git rev-parse HEAD)" != "$(git rev-parse origin/main)" ]]; then
  echo "Local main must match origin/main." >&2
  exit 1
fi

version="$(node -p "require('./package.json').version")"
tag="v${version}"

gh release create "$tag" --target "$(git rev-parse HEAD)" --title "$tag" --generate-notes
