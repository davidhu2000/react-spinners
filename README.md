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

[Demo Page](https://www.react-spinners.com)

## Installation

```bash
npm install react-spinners --save
```

## Usage

Each loader has their own default properties. You can overwrite the defaults by passing props into the loaders.

Each loader accepts a `loading` prop as a boolean. The loader will not render anything if `loading` is `false`. The `loading` prop defaults to `true`.

**IMPORTANT**: This package uses [emotion](https://github.com/emotion-js/emotion). Remember to add the plugin to `.babelrc`, for example: 

```
{
    "presets": ["@babel/preset-react", "@babel/preset-env"],
    "plugins": ["emotion"]
}
```

### Examples
 
```js
import React from 'react';
import { css } from '@emotion/core';
// First way to import
import { ClipLoader } from 'react-spinners';
// Another way to import. This is recommended to reduce bundle size
import ClipLoader from 'react-spinners/ClipLoader';

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
    }
  }
  render() {
    return (
      <div className='sweet-loading'>
        <ClipLoader
          css={override}
          sizeUnit={"px"}
          size={150}
          color={'#123abc'}
          loading={this.state.loading}
        />
      </div> 
    )
  }
}
```

## Available Loaders, PropTypes, and Default Values

Common default props for all loaders:

```js
loading: true
color: '#000000'
css: {}
```
Note:
`css` works exactly like the `css` works with the emotion package.
You can directly write your css in css syntax without the dirty camelCase css in jss syntax.
We recommend you to use this awesome library in your project. It supports Server side rendering with HTTP2 Stream! 
More info about using `css` [here](https://emotion.sh/docs/introduction)

For `size`, `height`, `width`, and `radius` props, there are `sizeUnit`, `heightUnit`, `widthUnit` and `radiusUnit` prop that accepts `px`, `%`, or `em`. The default for the unit prop is `px`.

|            Loader | size:int | height:int | width:int | radius:int | margin:str |
| ----------------: | :------: | :--------: | :-------: | :--------: | :--------: |
|         BarLoader |          |    `4`     |   `100`   |            |
|        BeatLoader |   `15`   |            |           |            |   `2px`    |
|      BounceLoader |   `60`   |            |           |            |
|      CircleLoader |   `50`   |            |           |            |
|        ClipLoader |   `35`   |            |           |            |
| ClimbingBoxLoader |   `15`   |            |           |            |
|         DotLoader |   `60`   |            |           |            |   `2px`    |
|        FadeLoader |          |    `15`    |    `5`    |    `2`     |   `2px`    |
|        GridLoader |   `15`   |            |           |            |
|        HashLoader |   `50`   |            |           |            |   `2px`    |
|        MoonLoader |   `60`   |            |           |            |   `2px`    |
|      PacmanLoader |   `25`   |            |           |            |   `2px`    |
|   PropagateLoader |   `15`   |            |           |            |
|       PulseLoader |   `15`   |            |           |            |   `2px`    |
|        RingLoader |   `60`   |            |           |            |   `2px`    |
|        RiseLoader |   `15`   |            |           |            |   `2px`    |
|      RotateLoader |   `15`   |            |           |            |   `2px`    |
|       ScaleLoader |          |    `35`    |    `4`    |    `2`     |   `2px`    |
|        SyncLoader |   `15`   |            |           |            |   `2px`    |
