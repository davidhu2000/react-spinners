import React from 'react';
import PropTypes from 'prop-types';
import { keyframes, css } from 'emotion';
import { onlyUpdateForKeys } from 'recompose';

const scale = keyframes`
  0% {transform: scaley(1.0)}
  50% {transform: scaley(0.4)}
  100% {transform: scaley(1.0)}
`;

class Loader extends React.Component {
  style = i => css`{
        background-color: ${this.props.color};
        width: ${this.props.width}px;
        height: ${this.props.height}px;
        margin: ${this.props.margin};
        border-radius: ${this.props.radius};
        display: inline-block;
        animation: ${scale} 1s ${i * 0.1}s infinite cubic-bezier(.2,.68,.18,1.08);
        animation-fill-mode: both;
    }`;

  a = this.style(1);
  b = this.style(2);
  c = this.style(3);
  d = this.style(4);
  e = this.style(5);

  render() {
    return this.props.loading ?
      <div>
        <div className={this.a} />
        <div className={this.b} />
        <div className={this.c} />
        <div className={this.d} />
        <div className={this.e} />
      </div> : null;
  }
}

Loader.propTypes = {
  loading: PropTypes.bool,
  color: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  margin: PropTypes.number,
  radius: PropTypes.number
};

Loader.defaultProps = {
  loading: true,
  color: '#000000',
  height: 35,
  width: 4,
  margin: 2,
  radius: 2
};

export default onlyUpdateForKeys(['loading', 'color', 'height', 'width', 'margin', 'radius'])(Loader);
