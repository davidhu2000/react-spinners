# Change Log

All notable changes to this project will be documented in this file. This project adheres to [Semantic Versioning](http://semver.org/).

## 0.13.4

- **bugfix**: fix server side render issue on `HashLoader`

## 0.13.3

- **bugfix**: Fix PuffLoader initial rendering issue

## 0.13.2

- remove next version badge until needed

## 0.13.1

- update homepage in package.json

## 0.13.0

- Rewrite each loader from the ground up using functional components.
- Replaced `@emotion` with vanilla javascript and inline style to reduce component size by 75%. This project now have 0 dependencies, while continuing to support server side rendering.
- Added support for custom props such as `aria-label`
- renamed `css` prop to `cssOverride` to avoid type conflicts with css-in-js libraries.

## 0.13.0-beta.7

- **bugfix**: fix style warnings on ClipLoader and CircleLoader

## 0.13.0-beta.6

- **bugfix**: fix GridLoader rendering issue

## 0.13.0-beta.5

- **BREAKING CHANGE**: `css` prop has been renamed to `cssOverride` to avoid type conflicts with css-in-js libraries such as emotion and styled-components

## 0.13.0-beta.4

- **bugfix**: Fix `document is not defined` when rendering server side

## 0.13.0-beta.3

- update `.npmignore` to ignore `stories` folder, yarn error log

## 0.13.0-beta.2

- **bugfix**: Update `tsconfig.json` to ignore `stories` folder. This caused the outputted files to not be in the root directory and breaking the imports.

## 0.13.0-beta.1

- **bugfix**: Properly assign important tag to `GridLoader` width prop.

## 0.13.0-alpha.5

- **bugfix**: Update `GridLoader` height/width with `important` tag to prevent overwrites from outside css.

## 0.13.0-alpha.4

- **Feature**: Add support for custom props in all loaders.
- **Feature**: Removed `@emotion/react` as a dependency.
- **Feature**: Update `RiseLoader` rise amount of use `size` prop instead of hardcoded as 30px.

## 0.13.0-alpha.3

- **Feature**: Add support for custom props in BarLoader

## 0.13.0-alpha.2

- Added react testing library
- added basic tests for BarLoader
- **bugfix**: add `display: inherit` on barloader to fix issue where nothing shows up on page.

## 0.13.0-alpha.1

- Rewrite BarLoader as functional component. Use vanilla javascript to inject keyframes, and removing emotion from the component.

## 0.12.0

- **Feature**: output commonjs, es module, and umd file types.
- **Feature**: add support for react 18 [#464](https://github.com/davidhu2000/react-spinners/pull/464)

## 0.12.0-beta.1

- reverted devDepencies react back to v17 until tests can be migrated away from enzyme. [#471](https://github.com/davidhu2000/react-spinners/pull/471)

## 0.12.0-alpha.3

- migrate from circle-ci to github actions for lint/jest
- **Feature**: add support for react 18 [#464](https://github.com/davidhu2000/react-spinners/pull/464)

## 0.12.0-alpha.2

- Update pragma to `/** @jsxImportSource @emotion/react */` to fix issue with the new jsx runtime.
- update all dependencies to latest version and rebuild demo site

## 0.12.0-alpha.1

- **Feature**: output commonjs, es module, and umd file types.

## 0.11.0

- **Feature**: added `speedMultiplier` prop to allow controlling the speed of animations.

## 0.11.0-beta.1

- No changes, just promoting to beta

## 0.11.0-alpha.8

- Update readme to include speed multiplier prop

## 0.11.0-alpha.7

- Implemented `speedMultiplier` props to all loaders
- Added feature flag to demo site. adding a url param `speed-multiplier=true` will enable to input

## 0.11.0-alpha.6

- Refactored all the tests using shared specs to reduce maintenance cost.
- Removed unnecessary type in `colors.ts` to let typescript infer.

## 0.11.0-alpha.5

- Implement `speedMultipler` prop to `PulseLoader`. This is done to test the API for a single loader before adding to the rest.

## 0.11.0-alpha.4

- Clean up `BarLoader` by marking the props using `Required` utility to avoid having to do `width || Loader.defaultProps.width`.

## 0.11.0-alpha.3

- Implement `speedMultipler` prop to `BarLoader`. This is done to test the API for a single loader before adding to the rest.

## 0.11.0-alpha.2

- Update readme usage section to use `@emotion` for `.babelrc` plugins

## 0.11.0-alpha.1

- updated emotion to v11. [PR #329](https://github.com/davidhu2000/react-spinners/pull/329)

## 0.10.6

- **bugfix**: Fixed MoonLoader display issue [#342](https://github.com/davidhu2000/react-spinners/pull/342)

## 0.10.4

- Add `.eslintrc.*` to `.npmignore` to reduce packge size.

## 0.10.3

- **bugfix**: Reverted `type:module` change in `package.json` due to [issue #336](https://github.com/davidhu2000/react-spinners/issues/336). This is causing a `Must use import to load ES Module` error.

## 0.10.2

**Note: this release has a critical issue and was deprecated. Please update to 0.10.3 or higher.**

- **bugfix**: the tsconfig compiler option was not overriding properly, so the outputted files are es2015 (with import syntax) vs commonjs (with require syntax. This could cause similar issues like [#74](https://github.com/davidhu2000/react-spinners/issues/74).

## 0.10.1

**Note: this release has a critical issue and was deprecated. Please update to 0.10.3 or higher.**

- Update README using react hooks. Move react class example under a summary tag.

## 0.10.0

**Note: this release has a critical issue and was deprecated. Please update to 0.10.3 or higher.**

- update `div` to `span` to fix `<div> cannot appear as a descendant of <p>` per [#159](https://github.com/davidhu2000/react-spinners/issues/159). [PR #325](https://github.com/davidhu2000/react-spinners/pull/325)
- Using [lodash-es](https://github.com/lodash/lodash/blob/4.17.20-es/package.json#L10-L14) as a reference, added `type: module` to `package.json` as an attempt to implement tree shaking via [PR #327](https://github.com/davidhu2000/react-spinners/pull/327).
- replaced tslint with eslint, and npm with yarn.

## 0.10.0-beta.3

- Update `.npmignore` to ignore the `.cjs` files so they are not included in the published build.
- Add `.yarn` and `.yarnrc` to `.npmignore`.

Old:

```
npm notice version:       0.10.0-beta.2
npm notice package size:  1.2 MB
npm notice unpacked size: 5.3 MB
npm notice total files:   69
```

New:

```
npm notice version:       0.10.0-beta.3
npm notice package size:  21.3 kB
npm notice unpacked size: 167.1 kB
npm notice total files:   65
```

## 0.10.0-beta.2

- Using [lodash-es](https://github.com/lodash/lodash/blob/4.17.20-es/package.json#L10-L14) as a reference, added `type: module` to `package.json` as an attempt to fix tree shaking via [PR #327](https://github.com/davidhu2000/react-spinners/pull/327).
- Renamed relevant `.js` files to `.cjs` so they are treated as CommonJs. Otherwise we get errors like `ReferenceError: module is not defined` when running certain commands, like `yarn`.

## 0.10.0-beta.1

- No changes here. Upgrading alpha to beta.

## 0.10.0-alpha.3

- add `react ^17.0.0` and `react-dom ^17.0.0` into peerDependencies to fix [#321](https://github.com/davidhu2000/react-spinners/issues/321)
- update `div` to `span` to fix `<div> cannot appear as a descendant of <p>` per [#159](https://github.com/davidhu2000/react-spinners/issues/159). [PR #325](https://github.com/davidhu2000/react-spinners/pull/325)
- removed `Keyframes` typing to allow for inferring [PR #326](https://github.com/davidhu2000/react-spinners/pull/326)
- another round of update for all devDependencies to the latest version except for `react-color`, `react`, `react-dom`, and `@motion/core`. These 4 packages have caused issues during the update and will save them for another time.

## 0.10.0-alpha.2

- add `sideEffects` property to `package.json` to fix tree shaking

## 0.10.0-alpha.1

- updated all dependencies to the latest version.
- switched from using npm to yarn
- deprecated ts-lint in favor of eslint
- updated how loaders are exported to support tree shaking

## 0.9.0

- Added a new loader: `PuffLoader`. Thanks to @dsaw via [PR #200](https://github.com/davidhu2000/react-spinners/pull/200)
- Update docs site with new loader

## 0.8.3

- **Security**: Bump acorn from 5.7.3 to 5.7.4 due to `Regular Expression Denial of Service`. Details [here](https://github.com/advisories/GHSA-6chw-6frg-f759)

## 0.8.2

- Add `box-sizing: content-box;` to MoonLoader. See [PR](https://github.com/davidhu2000/react-spinners/pull/162) for more details.

## 0.8.1

- clean up README example: removed unrecommended import, removed comment out size prop, and bolded text for size prop being string and number

## 0.8.0

- Added a new loader: `ClockLoader`
- No other functionality changes
- Fix default value table in README to alphabetize correctly

## 0.7.2

- update README demo site url

## 0.7.1

- run `npm audit fix` to fix vulnerability in `serialslize-javascript` package
- update README to showcase number and string input for size prop

## 0.7.0

- **BREAKING CHANGE**: all unit props have been removed to simplify the component API. See change log for `0.7.0-alpha.1` for more details

## 0.7.0-beta.1

- Update readme to include yarn installation

## 0.7.0-alpha.5

- clean up readme. break up prop section with individual prop headers

## 0.7.0-alpha.4

- update default value for `css` prop on README to be `""` instead of `{}`
- add list of available color words that the `color` prop accepts
- run prettier to format readme

## 0.7.0-alpha.3

- **bugfix**: Fix [issue #140](https://github.com/davidhu2000/react-spinners/issues/140). The margin prop on `FadeLoader` does what we expect it to do, expand the spacing between the lines

## 0.7.0-alpha.2

- **bugfix**: Fix [issue #139](https://github.com/davidhu2000/react-spinners/issues/139). The margin prop on `RotateLoader` does what we expect it to do, expand the spacing between the dots
- updated webpack config to split up npm files to avoid brower having to reload them on each change

## 0.7.0-alpha.1

- **BREAKING CHANGE**: all unit props are deprecated, including `sizeUnit`, `heightUnit`, `widthUnit`, and `radiusUnit`. The `size`, `height`, `width`, and `radius` props now accepts `number` and `string`
  - If value is number, default to `px`
  - If value is string with valid css unit, return the input value
  - If value is string with invalid css unit, output warning console log and default to `px`
- `margin` prop now work the same way as other length props. Can accept `number` and `string`
- `css` prop default is now `""`. No functionality change here

## 0.6.1

- **bugfix**: Fix [issue 109](https://github.com/davidhu2000/react-spinners/issues/109) where `Math.random` is stubbed out in the `GridLoader` component instead in the tests, causing `Math.random` to not work properly if `GridLoader` is used

## 0.6.0

- Offical release for the TypeScript rewrite!
- Major changes:
  - Add support for types for individual loader imports
  - Add support for using basic color name as props instead of only color hashes
  - Reduced total package size from around 850kb to 135gb
  - Fix `main` key value in `package.json` to point to the correct `index.js`
  - Removed `prop-types` and `recompose` from dependencies
  - Added tests to get to 100% code coverage

## 0.6.0-beta.1

- updated `devDependencies` to latest versions

## 0.6.0-alpha.10

- Removed `recompose` from the list of dependencies. We currently wants the component to update for all prop changes, so the `onlyUpdateForKeys` was passed in all the props anyways, so it wasn't doing much

## 0.6.0-alpha.9

- **bugfix**: Fix issue where `PacmanLoader` `top` css property does not respect the `sizeUnit` prop. It was hardcoded to be `px` instead of using `sizeUnit` prop
- update javascript bundle files for demo site

## 0.6.0-alpha.8

- updated rgba conversion function to handle basic colors. Now supports these basically colors
  - maroon, red, orange, yellow, olive, green, purple, fuchsia, lime, teal, aqua, blue, navy, black, gray, silver, white

## 0.6.0-alpha.7

- update readme to include `radius` and `radiusUnit` prop description
- update all the tests to use default variables
- add the following to `.npmignore` to further reduce package size

```
tslint.json
jest.config.js
CODEOWNERS
CODE_OF_CONDUCT.md
CONTRIBUTING.md
CHANGELOG.md
```

Old:

```
npm notice version:       0.6.0-alpha.6
npm notice package size:  19.8 kB
npm notice unpacked size: 138.5 kB
```

New:

```
npm notice version:       0.6.0-alpha.7
npm notice package size:  16.7 kB
npm notice unpacked size: 132.1 kB
```

## 0.6.0-alpha.6

- add `src` folder to `npmignore`. Previous version wasn't ruthless enough in saving data

Old:

```
npm notice version:       0.6.0-alpha.5
npm notice package size:  26.1 kB
npm notice unpacked size: 191.2 kB
```

New:

```
npm notice version:       0.6.0-alpha.6
npm notice package size:  19.8 kB
npm notice unpacked size: 138.5 kB
```

## 0.6.0-alpha.5

- update `npmignore` to include `__tests__`, `.github`, `.circleci`, `coverage`. This helped to reduce package size. Help to save some data

Old:

```
npm notice version:       0.6.0-alpha.4
npm notice package size:  85.6 kB
npm notice unpacked size: 850.4 kB
```

New:

```
npm notice version:       0.6.0-alpha.5
npm notice package size:  26.1 kB
npm notice unpacked size: 191.2 kB
```

## 0.6.0-alpha.4

- **bugfix**: update `package.json` `main` value from `dist/index.js` to `index.js` to fix codeSandbox import issue
- **bugfix**: add missing `transform` key to the `25%` keyframe in RiseLoader. It was just `25% {translateY(-${riseAmount}px)}` before. Now it is corrected
- add tests for all the loaders. Fixed up a few tests using default variables, namely the first 3 letters in the alphabet

## 0.6.0-alpha.3

- fix missing `"` from `.babelrc` in readme per [PR #77](https://github.com/davidhu2000/react-spinners/pull/77)
- add tests for `ClipLoader`, `DotLoader`, `FadeLoader`, `GridLoader`, `HashLoader`, and `MoonLoader`

## 0.6.0-alpha.2

- **bugfix**: update `tsconfig.json` `module` property to `commonjs` instead of `esnext`. This caused import errors as seen in [issue 74](https://github.com/davidhu2000/react-spinners/issues/74)
- added tests for `BarLoader`, `BeatLoader`, `BounceLoader`, `CircleLoader`, and `ClimbingBoxLoader`

## 0.6.0-alpha.1

- This is a complete rewrite of the package. 100% of the code is now in TypeScript. This will show inidividual type definitions for each loader
- `prop-types` has been removed as a dependency. This is now handled by typings
- set up `ts-lint` and `prettier` to help ensure code consistency

## 0.5.13

**Note: this release has a critical [issue](https://github.com/davidhu2000/react-spinners/issues/74) and was deprecated. Please use <= 0.5.12 or > 0.6.0.**

- fix readme props table formatting. It got a little messy for some reason

## 0.5.12

- fix version glitch. No code changes here

## 0.5.11

- this version should be 0.5.10, but internet issues causesa weird version glitch. Update to 0.5.12 so everything matches

## 0.5.10

- update readme to include explanation of css prop can be string as well as css function from @emotion/core

## 0.5.9

- **bugfix**: Fix [issue 61](https://github.com/davidhu2000/react-spinners/issues/61) where css overrides are not applied properly. Updated how the override workings using [emotion composition](https://emotion.sh/docs/composition)

## 0.5.8

- **bugfix**: Fix [issue 66](https://github.com/davidhu2000/react-spinners/issues/66) where destructuring import no longer works. Updated how components are exported, changed from `export default` to `export const`

## 0.5.7

- update README.md `.babelrc` example to use `@babel/<name>` syntax in accordance to latest babel packages

## 0.5.6

- big update for outdated devDependencies. This version should not affect any existing functionalities.
  - removed eslint related packages. Will be moving to use `tslint` as part of the typescript conversion.
  - updated babel plus plugins/presets to latest versions
  - updated `index.js` import from `module.exports = {...}` to `export default {...}`
  - webpack changes
    - added development configuration for easier debugging
    - add `html-webpack-plugin` to inject the script tags to `index.html`

## 0.5.5

- **bugfix**: update `CommonProps` interface `css` prop to used `PrecompiledCss` and `string`. Update PropTypes helper to be able to accept both `PrecompiledCss` and `string`. This is to fix the validation error for the `css` prop

## 0.5.4

- refactored proptypes into helper functions. No functionality change here, just some cleanups

## 0.5.3

- **bugfix**: update default value for `css` prop to `{}` instead of `""` to fix console error

## 0.5.2

- **bugfix**: change `css` proptype to `PropTypes.shape({ ... })` instead of `PropTypes.string` to fix console error.
- Fix a few console warnings on the demo site

## 0.5.1

- Update demo page link to `https://www.react-spinners.com`

## 0.5.0

- Update emotion package to emotion 10
- **Breaking change**: replaced `className` prop with `css` prop to match Emotion 10

## 0.4.8

- update `package.json` to include wider range of version for `recompose`

## 0.4.7

- add `loaders` and `spinners` keyword to package.json

## 0.4.6

- update how `onlyUpdateForKeys` is imported from `recompose`. Reduced import cost from `26kb` to `19kb`

## 0.4.5

- update README `.babelrc` to use `env` preset

## 0.4.4

- fix README example import to using correct loader
- add default value for unit props to README

## 0.4.3

- update readme to include unit props for each loader

## 0.4.2

- fix single loader import
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

- Add `loaderStyle` prop to loaders to allow more customized loader

## 0.3.2

- **bugfix**: fixed rendering issue for FadeLoader, SyncLoader, RotateLoader, and MoonLoader

## 0.3.1

- Moved `babel-plugin-emotion` to devDependencies and updates to 9.1.0

## 0.3.0

- Added `unit` props to each loader to allow `%` units on css
- **bugfix**: fixed string concatenation on some loaders that prevented the correct rendering

## 0.2.6

- **bugfix**: add missing `px` for `border-radius` in `ScaleLoader` styling
- add `minor` and `major` versioning scripts to `package.json`

## 0.2.5

- add `ISSUE_TEMPLATE.md` and `PULL_REQUEST_TEMPLATE.MD`

## 0.2.4

- removed codesponsers from readme

## 0.2.3

- updated devDendencies to latest stable versions
- removed unused npm scripts from `package.json`
- minor linting fixes after update
- add `^16.0.0` to `react` and `react-dom` peerDependencies

## 0.2.2

- **bugfix**: change `borderRadius` to `border-radius` in `RingLoader` so the browser will recognize the css

## 0.2.1

- **bugfix**: moved `prop-types` to from devDependencies to dependencies. This fixes the `Package not found` error for projects that do not include `prop-types` as a dependency

## 0.2.0

**Note: this release has a critical issue and was deprecated. Please update to 0.2.1 or higher.**

- add TypeScript typings

## 0.1.9

**Note: this release has a critical issue and was deprecated. Please update to 0.2.1 or higher.**

- **bugfix**: moved `emotion` from devDependency to dependency. This fixed the `Package not found` error

## 0.1.8

**Note: this release has a critical issue and was deprecated. Please update to 0.2.1 or higher.**

- update `emotion` package version from `7.2.0` to `8.0.6`

## 0.1.7

**Note: this release has a critical issue and was deprecated. Please update to 0.2.1 or higher.**

- update dependencies versions

## 0.1.6

**Note: this release has a critical issue and was deprecated. Please update to 0.2.1 or higher.**

- fixed some typo in readme

## 0.1.5

**Note: this release has a critical issue and was deprecated. Please update to 0.2.1 or higher.**

- updated readme

## 0.1.4

**Note: this release has a critical issue and was deprecated. Please update to 0.2.1 or higher.**

- **bugfix**: fixed `PulseLoader` size default prop to be the correct type

## 0.1.3

**Note: this release has a critical issue and was deprecated. Please update to 0.2.1 or higher.**

- **bugfix**: moved `recompose` from devDependency to dependency
- update author field in `package.json`

## 0.1.2

**Note: this release has a critical issue and was deprecated. Please update to 0.2.1 or higher.**

- update margin column in readme proptype table
- update contributors list in `package.json`

## 0.1.1

**Note: this release has a critical issue and was deprecated. Please update to 0.2.1 or higher.**

- update readme to include note about `react-emotion` plugin for babel
- fixed circleci badge to go to circle ci instead of npm
- removed flow from test script

## 0.1.0

**Note: this release has a critical issue and was deprecated. Please update to 0.2.1 or higher.**

- removed `domkit` as a dependency and replaced it with `emotion`. This package now officially supports `Server Side Rendering
