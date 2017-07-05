# React Spinners

A collection of loading spinners with React.js based on [Halogen](https://github.com/yuanyan/halogen). 
This package is bootstraped using [react-npm-boilerplate](https://github.com/juliancwirko/react-npm-boilerplate)

## Demo

[Demo](https://davidhu2000.github.io/react-spinners)

## Installation

    npm install react-spinners --save

## Usage

Each loader has their own default properties. You can overwrite the defaults by passing props into the loaders.

Each loader accepts a `loading` prop as a boolean. The loader will not render anything if `loading` is `false`. This prop defaults to `true`.

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

## Available Loaders

Loader       | Props
-------------|------------------------------------------------------------
BeatLoader   | loading:boolean, color:string, size:string, margin:string
BounceLoader | loading:boolean, color:string, size:string, margin:string
ClipLoader   | loading:boolean, color:string, size:string, margin:string
DotLoader    | loading:boolean, color:string, size:string, margin:string
FadeLoader   | loading:boolean, color:string, size:string, margin:string
GridLoader   | loading:boolean, color:string, size:string, margin:string
MoonLoader   | loading:boolean, color:string, size:string, margin:string
PacmanLoader | loading:boolean, color:string, size:string, margin:string
PulseLoader  | loading:boolean, color:string, size:string, margin:string
RingLoader   | loading:boolean, color:string, size:string, margin:string
RiseLoader   | loading:boolean, color:string, size:string, margin:string
RotateLoader | loading:boolean, color:string, size:string, margin:string
ScaleLoader  | loading:boolean, color:string, size:string, margin:string
SkewLoader   | loading:boolean, color:string, size:string, margin:string
SquareLoader | loading:boolean, color:string, size:string, margin:string
SyncLoader   | loading:boolean, color:string, size:string, margin:string
