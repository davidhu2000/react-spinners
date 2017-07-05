/* global document, window */
import React from 'react';
import ReactDOM from 'react-dom';
import { SketchPicker } from 'react-color';

import { Code } from './components';
import {
  BeatLoader,
  BounceLoader,
  ClipLoader,
  DotLoader,
  FadeLoader,
  GridLoader,
  MoonLoader,
  PacmanLoader,
  PulseLoader,
  RingLoader,
  RiseLoader,
  RotateLoader,
  ScaleLoader,
  SkewLoader,
  SquareLoader,
  SyncLoader
} from '../dist';

class SpinnerExamples extends React.Component {
  constructor() {
    super();
    this.state = {
      color: '#36D7B7',
      showPicker: true
    }

    this.updateColor = this.updateColor.bind(this);
  }

  updateColor(color) {
    this.setState({ color: color.hex });
  }

  render() {
    let { color } = this.state;
    return (
      <div className="spinner-container">
        <div className="color-picker">
          { this.state.showPicker ? (
            <SketchPicker color={color} onChangeComplete={this.updateColor}/>
          ) : (
            <button onClick={() => this.setState({ showPicker: !this.state.showPicker })}>
              Show Color Picker
            </button>
          ) }
        </div>
        <div className='spinner-item'>
          <div className='spinner-title'>BeatLoader</div>
          <BeatLoader color={color}/>
        </div>

        <div className='spinner-item'>
          <div className='spinner-title'>BounceLoader</div>
          <BounceLoader color={color}/>
        </div>

        <div className='spinner-item'>
          <div className='spinner-title'>ClipLoader</div>
          <ClipLoader color={color}/>
        </div>

        <div className='spinner-item'>
          <div className='spinner-title'>DotLoader</div>
          <DotLoader color={color}/>
        </div>

        <div className='spinner-item'>
          <div className='spinner-title'>FadeLoader</div>
          <FadeLoader color={color}/>
        </div>

        <div className='spinner-item'>
          <div className='spinner-title'>GridLoader</div>
          <GridLoader color={color}/>
        </div>

        <div className='spinner-item'>
          <div className='spinner-title'>MoonLoader</div>
          <MoonLoader color={color}/>
        </div>
        
        <div className='spinner-item'>
          <div className='spinner-title'>PacmanLoader</div>
          <PacmanLoader color={color}/>
        </div>

        <div className='spinner-item'>
          <div className='spinner-title'>PulseLoader</div>
          <PulseLoader color={color}/>
        </div>

        <div className='spinner-item'>
          <div className='spinner-title'>RingLoader</div>
          <RingLoader color={color}/>
        </div>

        <div className='spinner-item'>
          <div className='spinner-title'>RiseLoader</div>
          <RiseLoader color={color}/>
        </div>

        <div className='spinner-item'>
          <div className='spinner-title'>RotateLoader</div>
          <RotateLoader color={color}/>
        </div>

        <div className='spinner-item'>
          <div className='spinner-title'>ScaleLoader</div>
          <ScaleLoader color={color}/>
        </div>

        <div className='spinner-item'>
          <div className='spinner-title'>SkewLoader</div>
          <SkewLoader color={color}/>
        </div>

        <div className='spinner-item'>
          <div className='spinner-title'>SquareLoader</div>
          <SquareLoader color={color}/>
        </div>

        <div className='spinner-item'>
          <div className='spinner-title'>SyncLoader</div>
          <SyncLoader color={color}/>
        </div>
      </div>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<SpinnerExamples />, root);

  const code = document.getElementById('code');
  ReactDOM.render(<Code />, code);
});