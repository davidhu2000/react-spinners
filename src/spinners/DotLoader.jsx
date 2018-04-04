import React from 'react';
import PropTypes from 'prop-types';
import { keyframes, css } from 'emotion';
import { onlyUpdateForKeys } from 'recompose';

const rotate = keyframes`
  100% {transform: rotate(360deg)}
`;

const bounce = keyframes`
  0%, 100% {transform: scale(0)} 
  50% {transform: scale(1.0)}
`;

class Loader extends React.Component {
  style = i => css`{
        position: absolute;
        top: ${i % 2 ? '0' : 'auto'};
        bottom: ${i % 2 ? 'auto' : '0'};
        height: ${(this.props.size / 2).toString() + this.props.sizeUnit};
        width: ${(this.props.size / 2).toString() + this.props.sizeUnit};
        background-color: ${this.props.color};
        border-radius: 100%;
        animation-fill-mode: forwards;
        animation: ${bounce} 2s ${i === 2 ? '-1s' : '0s'} infinite linear;
    }`;

  wrapper = () => css`{        
        position: relative;
        width: ${this.props.size + this.props.sizeUnit};
        height: ${this.props.size + this.props.sizeUnit};
        animation-fill-mode: forwards;
        animation: ${rotate} 2s 0s infinite linear;
    }`;

  render() {
    return this.props.loading ?
      <div className={this.wrapper()}>
        <div className={this.style(1)} />
        <div className={this.style(2)} />
      </div> : null;
  }
}

Loader.propTypes = {
  loading: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.number,
  sizeUnit: PropTypes.string
};

Loader.defaultProps = {
  loading: true,
  color: '#000000',
  size: 60,
  sizeUnit: 'px'
};

const Component = onlyUpdateForKeys(['loading', 'color', 'size', 'sizeUnit'])(Loader);
Component.defaultProps = Loader.defaultProps;
export default Component;
