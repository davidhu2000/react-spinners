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
-------------|-------------------------------------------------------------------------------------------
BeatLoader   | loading:boolean, color:string, size:number, margin:number
BounceLoader | loading:boolean, color:string, size:number
ClipLoader   | loading:boolean, color:string, size:number
DotLoader    | loading:boolean, color:string, size:number, margin:number
FadeLoader   | loading:boolean, color:string, height:number, width:number, radius:number,  margin:number
GridLoader   | loading:boolean, color:string, size:number, margin:number
MoonLoader   | loading:boolean, color:string, size:number, margin:number
PacmanLoader | loading:boolean, color:string, size:number, margin:number
PulseLoader  | loading:boolean, color:string, size:number, margin:number
RingLoader   | loading:boolean, color:string, size:number, margin:number
RiseLoader   | loading:boolean, color:string, size:number, margin:number
RotateLoader | loading:boolean, color:string, size:number, margin:number
ScaleLoader  | loading:boolean, color:string, height:number, width:number, radius:number,  margin:number
SkewLoader   | loading:boolean, color:string, size:number
SquareLoader | loading:boolean, color:string, size:number, margin:number
SyncLoader   | loading:boolean, color:string, size:number, margin:number
