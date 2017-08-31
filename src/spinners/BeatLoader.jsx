import React from 'react';
import PropTypes from 'prop-types';
import { keyframes, css } from 'emotion';
import { onlyUpdateForKeys } from 'recompose';

const beat = keyframes`
  50% {transform: scale(0.75);opacity: 0.2} 
  100% {transform: scale(1);opacity: 1}
`;

class Loader extends React.Component {
  style = i => css`{
        display: inline-block;
        background-color: ${this.props.color};
        width: ${this.props.size}px;
        height: ${this.props.size}px;
        margin: ${this.props.margin};
        border-radius: 100%;
        animation: ${beat} 0.7s ${i % 2 ? '0s' : '0.35s'} infinite linear;
        animation-fill-mode: both;
    }`;

  a = this.style(1);
  b = this.style(2);
  c = this.style(3);

  render() {
    return this.props.loading ?
      <div>
        <div className={this.a} />
        <div className={this.b} />
        <div className={this.c} />
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

export default onlyUpdateForKeys(['loading', 'color', 'size', 'margin'])(Loader);
