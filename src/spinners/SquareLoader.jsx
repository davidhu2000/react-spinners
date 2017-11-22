import React from 'react';
import PropTypes from 'prop-types';
import { keyframes, css } from 'emotion';
import { onlyUpdateForKeys } from 'recompose';

const square = keyframes`
  25% {transform: rotateX(180deg) rotateY(0)}
  50% {transform: rotateX(180deg) rotateY(180deg)}
  75% {transform: rotateX(0) rotateY(180deg)}
  100% {transform: rotateX(0) rotateY(0)}
`;

class Loader extends React.Component {
  style = () => css`{
        background-color: ${this.props.color};
        width: ${this.props.size}px;
        height: ${this.props.size}px;
        display: inline-block;
        animation: ${square} 3s 0s infinite cubic-bezier(.09,.57,.49,.9);
        animation-fill-mode: both;
    }`;

  render() {
    return this.props.loading ?
      <div className={this.style()} /> : null;
  }
}

Loader.propTypes = {
  loading: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.number
};

Loader.defaultProps = {
  loading: true,
  color: '#000000',
  size: 50
};

const Component = onlyUpdateForKeys(['loading', 'color', 'size'])(Loader);
Component.defaultProps = Loader.defaultProps;
export default Component;
