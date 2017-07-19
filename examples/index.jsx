/* global document, window */
import React from 'react';
import ReactDOM from 'react-dom';

import { Code, ColorPicker, LoaderItem } from './components';
import Spinners from '../src';

class SpinnerExamples extends React.Component {
  constructor() {
    super();
    this.state = {
      color: '#36D7B7',
      showPicker: false
    };

    this.updateColor = this.updateColor.bind(this);
    this.togglePicker = this.togglePicker.bind(this);
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      let picker = document.getElementsByClassName('color-picker')[0];
      let top = 370 - (window.scrollY * 2);
      if (top > 60) {
        picker.style.top = `${top}px`;
      } else {
        picker.style.top = `50px`;
      }
    });
  }

  updateColor(color) {
    this.setState({ color: color.hex });
  }

  togglePicker() {
    this.setState({ showPicker: !this.state.showPicker });
  }

  renderSpinner(Spinner) {
    return (
      <Spinner color={this.state.color} />
    );
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

        { Object.keys(Spinners).map(name => (
          <LoaderItem color={color} name={name} spinner={Spinners[name]} />
        )) }
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<SpinnerExamples />, root);

  const code = document.getElementById('code');
  ReactDOM.render(<Code />, code);
});
