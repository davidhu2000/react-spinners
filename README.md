# React Spinners

[![npm version](https://badge.fury.io/js/react-spinners.svg)][npm_url]
[![circle ci](https://circleci.com/gh/davidhu2000/react-spinners.svg?style=shield)][ci_url]
[![downloads](https://img.shields.io/npm/dt/react-spinners.svg)][npm_url]
[![license](https://img.shields.io/npm/l/react-spinners.svg)][npm_url]
[![Code Triagers Badge](https://www.codetriage.com/davidhu2000/react-spinners/badges/users.svg)](https://www.codetriage.com/davidhu2000/react-spinners)

[![dependencies Status](https://david-dm.org/davidhu2000/react-spinners/status.svg)](https://david-dm.org/davidhu2000/react-spinners)
[![devDependencies Status](https://david-dm.org/davidhu2000/react-spinners/dev-status.svg)](https://david-dm.org/davidhu2000/react-spinners?type=dev)
[![peerDependencies Status](https://david-dm.org/davidhu2000/react-spinners/peer-status.svg)](https://david-dm.org/davidhu2000/react-spinners?type=peer)

[npm_url]: https://www.npmjs.org/package/react-spinners
[ci_url]: https://circleci.com/gh/davidhu2000/react-spinners

A collection of loading spinners with React.js based on [Halogen](https://github.com/yuanyan/halogen).

This package is bootstraped using [react-npm-boilerplate](https://github.com/juliancwirko/react-npm-boilerplate)

## Demo

[Demo Page](https://davidhu2000.github.io/react-spinners)

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
    "presets": [ "react", "es2015", "stage-0"],
    "plugins": ["emotion"]
}
```

### Example

```js
import React from 'react';
import { RingLoader } from 'react-spinners';

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
        <RingLoader
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
```

Loader                  | size:int | height:int | width:int | radius:int | margin:str
-----------------------:|:--------:|:----------:|:---------:|:----------:|:---------:
BarLoader               |          | `4`        | `100`     |            |
BeatLoader              | `15`     |            |           |            | `2px`
BounceLoader            | `60`     |            |           |            |
CircleLoader            | `50`     |            |           |            |
ClipLoader              | `35`     |            |           |            |
ClimbingBoxLoader       | `15`     |            |           |            |
DotLoader               | `60`     |            |           |            | `2px`
FadeLoader              |          | `15`       | `5`       | `2`        | `2px`
GridLoader              | `15`     |            |           |            |
HashLoader              | `50`     |            |           |            | `2px`
MoonLoader              | `60`     |            |           |            | `2px`
PacmanLoader            | `25`     |            |           |            | `2px`
PropagateLoader         | `15`     |            |           |            |
PulseLoader             | `15`     |            |           |            | `2px`
RingLoader              | `60`     |            |           |            | `2px`
RiseLoader              | `15`     |            |           |            | `2px`
RotateLoader            | `15`     |            |           |            | `2px`
ScaleLoader             |          | `35`       | `4`       | `2`        | `2px`
SyncLoader              | `15`     |            |           |            | `2px`
