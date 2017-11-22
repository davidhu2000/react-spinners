import React from 'react';
import PropTypes from 'prop-types';
import { keyframes, css } from 'emotion';
import { onlyUpdateForKeys } from 'recompose';

const sync = keyframes`
  33% {transform: translateY(10px)}
  66% {transform: translateY(-10px)}
  100% {transform: translateY(0)}
`;

class Loader extends React.Component {
  style = i => css`{
        background-color: ${this.props.color};
        width: ${this.props.size}px;
        height: ${this.props.size}px;
        margin: ${this.props.margin};
        border-radius: 100%;
        display: inline-block;
        animation: ${sync} 0.6s ${i * 0.07}s infinite ease-in-out;
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
  margin: PropTypes.string
};

Loader.defaultProps = {
  loading: true,
  color: '#000000',
  size: 15,
  margin: '2px'
};

const Component = onlyUpdateForKeys(['loading', 'color', 'size', 'margin'])(Loader);
Component.defaultProps = Loader.defaultProps;
export default Component;
