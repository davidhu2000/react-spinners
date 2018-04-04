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
        width: ${this.props.size + this.props.sizeUnit};
        height: ${this.props.size + this.props.sizeUnit};
        margin: ${this.props.margin};
        border-radius: 100%;
        animation: ${beat} 0.7s ${i % 2 ? '0s' : '0.35s'} infinite linear;
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
  sizeUnit: PropTypes.string,
  margin: PropTypes.string
};

Loader.defaultProps = {
  loading: true,
  color: '#000000',
  size: 15,
  sizeUnit: 'px',
  margin: '2px'
};

const Component = onlyUpdateForKeys(['loading', 'color', 'size', 'margin', 'sizeUnit'])(Loader);
Component.defaultProps = Loader.defaultProps;
export default Component;
