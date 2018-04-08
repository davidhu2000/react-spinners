import React from 'react';
import PropTypes from 'prop-types';
import { keyframes, css } from 'emotion';
import { onlyUpdateForKeys } from 'recompose';

const fade = keyframes`
  50% {opacity: 0.3} 
  100% {opacity: 1}
`;

class Loader extends React.Component {
  style = i => css`{
        position: absolute;
        width: ${this.props.width.toString() + this.props.widthUnit};
        height: ${this.props.height.toString() + this.props.heightUnit};
        margin: ${this.props.margin};
        background-color: ${this.props.color};
        border-radius: ${this.props.radius.toString() + this.props.radiusUnit};
        transition: 2s;
        animation-fill-mode: 'both';
        animation: ${fade} 1.2s ${i * 0.12}s infinite ease-in-out;
    }`;

  radius = 20;
  quarter = (this.radius / 2) + (this.radius / 5.5);

  wrapper = () => css`{        
        position: relative;
        font-size: 0;
        top: ${this.radius}px;
        left: ${this.radius}px;
        width: ${this.radius * 3}px;
        height: ${this.radius * 3}px;
    }`;

  a = () => css`
          ${this.style(1)};
          top: ${this.radius}px;
          left: 0;
        `;
  b = () => css`
          ${this.style(2)};
          top: ${this.quarter}px;
          left: ${this.quarter}px;
          transform: rotate(-45deg);
        `;
  c = () => css`
          ${this.style(3)};
          top: 0;
          left: ${this.radius}px;
          transform: rotate(90deg);
        `;
  d = () => css`
          ${this.style(4)};
          top: ${-this.quarter}px;
          left: ${this.quarter}px;
          transform: rotate(45deg);
        `;
  e = () => css`
          ${this.style(5)};
          top: ${-this.radius}px;
          left: 0;
        `;
  f = () => css`
          ${this.style(6)};
          top: ${-this.quarter}px;
          left: ${-this.quarter}px;
          transform: rotate(-45deg);
        `;
  g = () => css`
          ${this.style(7)};
          top: 0;
          left: ${-this.radius}px;
          transform: rotate(90deg);
        `;
  h = () => css`
          ${this.style(8)};
          top: ${this.quarter}px;
          left: ${-this.quarter}px;
          transform: rotate(45deg);
        `;

  render() {
    return this.props.loading ?
      <div className={this.wrapper()}>
        <div className={this.a()} />
        <div className={this.b()} />
        <div className={this.c()} />
        <div className={this.d()} />
        <div className={this.e()} />
        <div className={this.f()} />
        <div className={this.g()} />
        <div className={this.h()} />
      </div> : null;
  }
}

Loader.propTypes = {
  loading: PropTypes.bool,
  color: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  margin: PropTypes.string,
  radius: PropTypes.number,
  heightUnit: PropTypes.string,
  widthUnit: PropTypes.string,
  radiusUnit: PropTypes.string
};

Loader.defaultProps = {
  loading: true,
  color: '#000000',
  height: 15,
  width: 5,
  margin: '2px',
  radius: 2,
  widthUnit: 'px',
  heightUnit: 'px',
  radiusUnit: 'px'
};

const Component = onlyUpdateForKeys(['loading', 'color', 'height', 'width', 'margin', 'radius', 'widthUnit', 'heightUnit', 'radiusUnit'])(Loader);
Component.defaultProps = Loader.defaultProps;
export default Component;
