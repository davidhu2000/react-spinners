/* global document, window */
import React from 'react';
import ReactDOM from 'react-dom';

import { Code, ColorPicker } from './components';
import {
  BarLoader,
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
      showPicker: false
    }

    this.updateColor = this.updateColor.bind(this);
    this.togglePicker = this.togglePicker.bind(this);

  }

  componentDidMount() {

    document.addEventListener('scroll', () => {
      if (window.scrollY > 360) {
        let picker = document.getElementsByClassName('color-picker')[0];
        picker.classList.remove('position-abs');
        picker.classList.add('position-fixed');
      } else {
        let picker = document.getElementsByClassName('color-picker')[0];
        picker.classList.add('position-abs');
        picker.classList.remove('position-fixed');
      }
    })

  }

  updateColor(color) {
    this.setState({ color: color.hex });
  }

  togglePicker() {
    this.setState({ showPicker: !this.state.showPicker });
  }

  render() {
    let { color, showPicker } = this.state;
    return (
      <div className="spinner-container">
        <div className="color-picker position-abs">
          { showPicker ? (
            <ColorPicker color={color} updateColor={this.updateColor} togglePicker={this.togglePicker} />
          ) : (
            <button onClick={this.togglePicker}>
              Change Color
            </button>
          ) }
        </div>

        <div className='spinner-item'>
          <div className='spinner-title'>BarLoader</div>
          <BarLoader color={color}/>
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