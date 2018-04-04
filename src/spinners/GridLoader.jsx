import React from 'react';
import PropTypes from 'prop-types';
import { keyframes, css } from 'emotion';
import { onlyUpdateForKeys } from 'recompose';

const grid = keyframes`
  0% {transform: scale(1)}
  50% {transform: scale(0.5); opacity: 0.7}
  100% {transform: scale(1);opacity: 1}
`;

const random = top => Math.random() * top;

class Loader extends React.Component {
  style = rand => css`{
        display: inline-block;
        background-color: ${this.props.color};
        width: ${this.props.size + this.props.sizeUnit};
        height: ${this.props.size + this.props.sizeUnit};
        margin: ${this.props.margin};
        border-radius: 100%;
        animation-fill-mode: 'both';
        animation: ${grid} ${(rand / 100) + 0.6}s ${(rand / 100) - 0.2}s infinite ease;
    }`;

  wrapper = () => css`{        
        width: ${((parseFloat(this.props.size) * 3) + (parseFloat(this.props.margin) * 6)).toString() + this.props.sizeUnit};
        font-size: 0;
    }`;

  render() {
    return this.props.loading ?
      <div className={this.wrapper()}>
        <div className={this.style(random(100))} />
        <div className={this.style(random(100))} />
        <div className={this.style(random(100))} />
        <div className={this.style(random(100))} />
        <div className={this.style(random(100))} />
        <div className={this.style(random(100))} />
        <div className={this.style(random(100))} />
        <div className={this.style(random(100))} />
        <div className={this.style(random(100))} />
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

