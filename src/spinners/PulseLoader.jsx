import React from 'react';
import PropTypes from 'prop-types';
import { keyframes, css } from 'emotion';
import { onlyUpdateForKeys } from 'recompose';

// This returns an animation
const pulse = keyframes`
  0% {transform: scale(1);opacity: 1} 
  45% {transform: scale(0.1);opacity: 0.7}
  80% {transform: scale(1);opacity: 1}
`;

class Loader extends React.Component {
  style = i => css`{
        background-color: ${this.props.color};
        width: ${this.props.size + this.props.sizeUnit};
        height: ${this.props.size + this.props.sizeUnit};
        margin: ${this.props.margin};
        border-radius: 100%;
        display: inline-block;
        animation: ${pulse} 0.75s ${i * 0.12}s infinite cubic-bezier(.2,.68,.18,1.08);
        animation-fill-mode: both;
    }`;

  render() {
    return this.props.loading ?
      <div>
        <div className={this.style(1)} />
        <div className={this.style(2)} />
        <div className={this.style(3)} />
      </div> : null;
  }
}

Loader.propTypes = {
  loading: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.number,
  margin: PropTypes.string,
  sizeUnit: PropTypes.string
};

Loader.defaultProps = {
  loading: true,
  color: '#000000',
  size: 15,
  margin: '2px',
  sizeUnit: 'px'
};

const Component = onlyUpdateForKeys(['loading', 'color', 'size', 'margin', 'sizeUnit'])(Loader);
Component.defaultProps = Loader.defaultProps;
export default Component;
