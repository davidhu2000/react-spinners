# Change Log

All notable changes to this project will be documented in this file. This project adheres to [Semantic Versioning](http://semver.org/).

## 0.5.4

- refactored proptypes into helper functions. No functionality change here, just some cleanups

## 0.5.3

- **bugfix**: update default value for `css` prop to `{}` instead of `""` to fix console error.

## 0.5.2

- **bugfix**: change `css` proptype to `PropTypes.shape({ ... })` instead of `PropTypes.string` to fix console error.
- Fix a few console warnings on the demo site. 

## 0.5.1

- Update demo page link to `https://www.react-spinners.com`

## 0.5.0

- Update emotion package to emotion 10
- **Breaking change**: replaced `className` prop with `css` prop to match Emotion 10. 

## 0.4.8

- update `package.json` to include wider range of version for `recompose`

## 0.4.7

- add `loaders` and `spinners` keyword to package.json

## 0.4.6

- update how `onlyUpdateForKeys` is imported from `recompose`. Reduced import cost from `26kb` to `19kb`.

## 0.4.5

- update README `.babelrc` to use `env` preset

## 0.4.4

- fix README example import to using correct loader
- add default value for unit props to README

## 0.4.3

- update readme to include unit props for each loader

## 0.4.2

- fix single loader import.
- add `className` to `index.d.ts`
- update readme to include single loader import

## 0.4.1

- Remove second import method from readme. Add deprecation warning to 0.4.0

## 0.4.0

**Note: this release has a critical issue and was deprecated. Please update to 0.4.1 or higher.**

- Add `className` prop to loaders
- Deprecated `loaderStyle` prop for loaders to follow Emotion module standard

## 0.3.3

**Note: this release was deprecated through removing `loaderStyle` prop. Please update to 0.4.1 or higher.**

- Add `loaderStyle` prop to loaders to allow more customized loader.

## 0.3.2

- **bugfix**: fixed rendering issue for FadeLoader, SyncLoader, RotateLoader, and MoonLoader

## 0.3.1

- Moved `babel-plugin-emotion` to devDependencies and updates to 9.1.0.

## 0.3.0

- Added `unit` props to each loader to allow `%` units on css
- **bugfix**: fixed string concatenation on some loaders that prevented the correct rendering.

## 0.2.6

- **bugfix**: add missing `px` for `border-radius` in `ScaleLoader` styling.
- add `minor` and `major` versioning scripts to `package.json`

## 0.2.5

- add `ISSUE_TEMPLATE.md` and `PULL_REQUEST_TEMPLATE.MD`

## 0.2.4

- removed codesponsers from readme.

## 0.2.3

- updated devDendencies to latest stable versions
- removed unused npm scripts from `package.json`
- minor linting fixes after update.
- add `^16.0.0` to `react` and `react-dom` peerDependencies.

## 0.2.2

- **bugfix**: change `borderRadius` to `border-radius` in `RingLoader` so the browser will recognize the css.

## 0.2.1

- **bugfix**: moved `prop-types` to from devDependencies to dependencies. This fixes the `Package not found` error for projects that do not include `prop-types` as a dependency.

## 0.2.0

**Note: this release has a critical issue and was deprecated. Please update to 0.2.1 or higher.**

- add TypeScript typings

## 0.1.9

**Note: this release has a critical issue and was deprecated. Please update to 0.2.1 or higher.**

- **bugfix**: moved `emotion` from devDependency to dependency. This fixed the `Package not found` error.

## 0.1.8

**Note: this release has a critical issue and was deprecated. Please update to 0.2.1 or higher.**

- update `emotion` package version from `7.2.0` to `8.0.6`. 

## 0.1.7

**Note: this release has a critical issue and was deprecated. Please update to 0.2.1 or higher.**

- update dependencies versions. 

## 0.1.6

**Note: this release has a critical issue and was deprecated. Please update to 0.2.1 or higher.**

- fixed some typo in readme.

## 0.1.5

**Note: this release has a critical issue and was deprecated. Please update to 0.2.1 or higher.**

- updated readme. 

## 0.1.4

**Note: this release has a critical issue and was deprecated. Please update to 0.2.1 or higher.**

- **bugfix**: fixed `PulseLoader` size default prop to be the correct type. 

## 0.1.3

**Note: this release has a critical issue and was deprecated. Please update to 0.2.1 or higher.**

- **bugfix**: moved `recompose` from devDependency to dependency.
- update author field in `package.json`.

## 0.1.2

**Note: this release has a critical issue and was deprecated. Please update to 0.2.1 or higher.**

- update margin column in readme proptype table.
- update contributors list in `package.json`.

## 0.1.1

**Note: this release has a critical issue and was deprecated. Please update to 0.2.1 or higher.**

- update readme to include note about `react-emotion` plugin for babel.
- fixed circleci badge to go to circle ci instead of npm.
- removed flow from test script. 

## 0.1.0

**Note: this release has a critical issue and was deprecated. Please update to 0.2.1 or higher.**

- removed `domkit` as a dependency and replaced it with `emotion`. This package now officially supports `Server Side Rendering.