import React from 'react';
import PropTypes from 'prop-types';
import { keyframes, css } from 'emotion';
import { onlyUpdateForKeys } from 'recompose';

const rotate = keyframes`
  0% {transform: rotate(0deg)}
  50% {transform: rotate(180deg)}
  100% {transform: rotate(360deg)}
`;

class Loader extends React.Component {
  style = i => css`{
        opacity: 0.8;
        position: absolute;
        top: 0;
        left: ${i % 2 ? -28 : 25}px;
    }`;

  ball = () => css`{
        background-color: ${this.props.color};
        width: ${this.props.size + this.props.sizeUnit};
        height: ${this.props.size + this.props.sizeUnit};
        margin: ${this.props.margin};
        border-radius: 100%;
    }`;

  wrapper = () => css`
        ${this.ball()};
        display: inline-block;
        position: relative;
        animation-fill-mode: both;
        animation: ${rotate} 1s 0s infinite cubic-bezier(.7,-.13,.22,.86);        
    `;

  long = () => css`
        ${this.ball()};       
        ${this.style(1)};
    `;
  short = () => css`
        ${this.ball()};       
        ${this.style(2)};
    `;

  render() {
    return this.props.loading ?
      <div className={this.wrapper()}>
        <div className={this.long()} />
        <div className={this.short()} />
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

const Component = onlyUpdateForKeys(['loading', 'color', 'size', 'margin'])(Loader);
Component.defaultProps = Loader.defaultProps;
export default Component;
