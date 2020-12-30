# React Spinners

[![npm version](https://badge.fury.io/js/react-spinners.svg)][npm_url]
[![circle ci](https://circleci.com/gh/davidhu2000/react-spinners.svg?style=shield)][ci_url]
[![downloads](https://img.shields.io/npm/dt/react-spinners.svg)][npm_url]
[![license](https://img.shields.io/npm/l/react-spinners.svg)][npm_url]
[![Coverage Status](https://coveralls.io/repos/github/davidhu2000/react-spinners/badge.svg?branch=master)](https://coveralls.io/github/davidhu2000/react-spinners?branch=master)

[![dependencies Status](https://david-dm.org/davidhu2000/react-spinners/status.svg)](https://david-dm.org/davidhu2000/react-spinners)
[![devDependencies Status](https://david-dm.org/davidhu2000/react-spinners/dev-status.svg)](https://david-dm.org/davidhu2000/react-spinners?type=dev)
[![peerDependencies Status](https://david-dm.org/davidhu2000/react-spinners/peer-status.svg)](https://david-dm.org/davidhu2000/react-spinners?type=peer)

[npm_url]: https://www.npmjs.org/package/react-spinners
[ci_url]: https://circleci.com/gh/davidhu2000/react-spinners

A collection of loading spinners with React.js based on [Halogen](https://github.com/yuanyan/halogen).

This package is bootstraped using [react-npm-boilerplate](https://github.com/juliancwirko/react-npm-boilerplate)

## Demo

[Demo Page](https://www.davidhu.io/react-spinners)

## Installation

With Yarn:

```bash
yarn add react-spinners
```

With npm:

```bash
npm install --save react-spinners
```

## Usage

Each loader has their own default properties. You can overwrite the defaults by passing props into the loaders.

Each loader accepts a `loading` prop as a boolean. The loader will render `null` if `loading` is `false`.

**IMPORTANT**: This package uses [emotion](https://github.com/emotion-js/emotion). Remember to add the plugin to `.babelrc`, for example:

```
{
    "presets": ["@babel/preset-react", "@babel/preset-env"],
    "plugins": ["emotion"]
}
```

### Example

```js
import { useState } from "react";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function App() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

  return (
    <div className="sweet-loading">
      <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
      <input
        value={color}
        onChange={(input) => setColor(input.target.value)}
        placeholder="Color of the loader"
      />

      <ClipLoader color={color} loading={loading} css={override} size={150} />
    </div>
  );
}

export default App;
```

<details><summary>Example using React Class</summary>

```js
import React from "react";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

class AwesomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  render() {
    return (
      <div className="sweet-loading">
        <ClipLoader css={override} size={150} color={"#123abc"} loading={this.state.loading} />
      </div>
    );
  }
}
```

</details>

## Available Loaders, PropTypes, and Default Values

Common default props for all loaders:

```js
loading: true;
color: "#000000";
css: "";
```

### `color` prop

`color` prop accepts a color hash in the format of `#XXXXXX` or `#XXX`. It also accepts basic colors listed below:

> maroon, red, orange, yellow, olive, green, purple, white,
> fuchsia, lime, teal, aqua, blue, navy, black, gray, silver

### `css` prop

`css` works exactly like the `css` works with the emotion package.
You can directly write your css in css syntax without the dirty camelCase css in jss syntax.
We recommend you to use this awesome library in your project. It supports Server side rendering with HTTP2 Stream!
More info about using `css` [here](https://emotion.sh/docs/introduction)

### `size`, `height`, `width`, and `radius` props

The input to these props can be _number_ or _string_.

- If value is number, the loader will default to css unit `px`.
- If value is string, the loader will verify the unit against valid css units.
  - If unit is valid, return the original value
  - If unit is invalid, output warning console log and default to `px`.

The table below has the default values for each loader.

|            Loader | size | height | width | radius | margin |
| ----------------: | :--: | :----: | :---: | :----: | :----: |
|         BarLoader |      |  `4`   | `100` |        |
|        BeatLoader | `15` |        |       |        |  `2`   |
|      BounceLoader | `60` |        |       |        |
|      CircleLoader | `50` |        |       |        |
| ClimbingBoxLoader | `15` |        |       |        |
|        ClipLoader | `35` |        |       |        |
|       ClockLoader | `50` |        |       |        |
|         DotLoader | `60` |        |       |        |  `2`   |
|        FadeLoader |      |  `15`  |  `5`  |  `2`   |  `2`   |
|        GridLoader | `15` |        |       |        |
|        HashLoader | `50` |        |       |        |  `2`   |
|        MoonLoader | `60` |        |       |        |  `2`   |
|      PacmanLoader | `25` |        |       |        |  `2`   |
|   PropagateLoader | `15` |        |       |        |
|        PuffLoader | `60` |        |       |        |
|       PulseLoader | `15` |        |       |        |  `2`   |
|        RingLoader | `60` |        |       |        |  `2`   |
|        RiseLoader | `15` |        |       |        |  `2`   |
|      RotateLoader | `15` |        |       |        |  `2`   |
|       ScaleLoader |      |  `35`  |  `4`  |  `2`   |  `2`   |
|        SyncLoader | `15` |        |       |        |  `2`   |
