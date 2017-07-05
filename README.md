# React Spinners

[![npm version](https://badge.fury.io/js/react-spinners.svg)][npm_url]
[![downloads](https://img.shields.io/npm/davidh2000/react-spinner.svg)][npm_url]
[![dependencies](https://david-dm.org/davidhu2000/react-spinners.svg)][npm_url]
[![devDependencies](https://david-dm.org/davidhu2000/react-spinners.svg#info=devDependencies)][npm_url]

[npm_url]: https://www.npmjs.org/package/react-spinners

A collection of loading spinners with React.js based on [Halogen](https://github.com/yuanyan/halogen).

This package is bootstraped using [react-npm-boilerplate](https://github.com/juliancwirko/react-npm-boilerplate)

## Demo

[Demo Page](https://davidhu2000.github.io/react-spinners)

## Installation

    npm install react-spinners --save

## Usage

Each loader has their own default properties. You can overwrite the defaults by passing props into the loaders.

Each loader accepts a `loading` prop as a boolean. The loader will not render anything if `loading` is `false`. The `loading` prop defaults to `true`.

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
      <div>
        <RingLoader color={'#123abc'} loading={this.state.loading} />
      </div>
    )
  }
}
```

## Available Loaders, PropTypes, and Default Values

Loader       | Loading:bool | color:str | size:int | height:int | width:int | radius:int | margin:int
------------:|:------------:|:---------:|:--------:|:----------:|:---------:|:----------:|:---------:
BeatLoader   | `true`       | `'#fff'`  | `15`     |            |           |            | `2`
BounceLoader | `true`       | `'#fff'`  | `60`     |            |           |            |
ClipLoader   | `true`       | `'#fff'`  | `35`     |            |           |            |
DotLoader    | `true`       | `'#fff'`  | `60`     |            |           |            | `2`
FadeLoader   | `true`       | `'#fff'`  |          | `15`       | `5`       | `2`        | `2`
GridLoader   | `true`       | `'#fff'`  | `15`     |            |           |            | `2`
MoonLoader   | `true`       | `'#fff'`  | `60`     |            |           |            | `2`
PacmanLoader | `true`       | `'#fff'`  | `25`     |            |           |            | `2`
PulseLoader  | `true`       | `'#fff'`  | `15`     |            |           |            | `2`
RingLoader   | `true`       | `'#fff'`  | `60`     |            |           |            | `2`
RiseLoader   | `true`       | `'#fff'`  | `15`     |            |           |            | `2`
RotateLoader | `true`       | `'#fff'`  | `15`     |            |           |            | `2`
ScaleLoader  | `true`       | `'#fff'`  |          | `35`       | `4`       | `2`        | `2`
SkewLoader   | `true`       | `'#fff'`  | `20`     |            |           |            |
SquareLoader | `true`       | `'#fff'`  | `50`     |            |           |            | `2`
SyncLoader   | `true`       | `'#fff'`  | `15`     |            |           |            | `2`
