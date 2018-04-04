import React from 'react';
import PropTypes from 'prop-types';
import { keyframes, css } from 'emotion';
import { onlyUpdateForKeys } from 'recompose';

const right = keyframes`
  0% {transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg)}
  100% {transform: rotateX(180deg) rotateY(360deg) rotateZ(360deg)}
`;

const left = keyframes`
  0% {transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg)}
  100% {transform: rotateX(360deg) rotateY(180deg) rotateZ(360deg)}
`;


class Loader extends React.Component {
  style = i => css`{
        position: absolute;
        top: 0;
        left: 0;
        width: ${this.props.size.toString() + this.props.sizeUnit};
        height: ${this.props.size.toString() + this.props.sizeUnit};
        border: ${(this.props.size / 10).toString() + this.props.sizeUnit} solid ${this.props.color};
        opacity: 0.4;
        border-radius: 100%;
        animation-fill-mode: forwards;
        perspective: 800px;
        animation: ${i === 1 ? right : left} 2s 0s infinite linear;
    }`;

  wrapper = () => css`{        
        width: ${this.props.size.toString() + this.props.sizeUnit};
        height: ${this.props.size.toString() + this.props.sizeUnit};
        position: relative;
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
