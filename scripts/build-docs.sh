#!/bin/bash

ruby scripts/stories.rb
yarn run build-storybook --docs
rm -r docs/storybook-static
mv storybook-static docs
