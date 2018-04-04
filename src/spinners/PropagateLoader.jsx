import React from 'react';
import PropTypes from 'prop-types';
import { keyframes, css } from 'emotion';
import { onlyUpdateForKeys } from 'recompose';

// 1.5 4.5 7.5
let distance = [1, 3, 5];

const propagate = [
  keyframes`
      25% {transform: translateX(-${distance[0]}rem) scale(0.75)} 
      50% {transform: translateX(-${distance[1]}rem) scale(0.6)}
      75% {transform: translateX(-${distance[2]}rem) scale(0.5)}
      95% {transform: translateX(0rem) scale(1)}
    `,
  keyframes`
      25% {transform: translateX(-${distance[0]}rem) scale(0.75)} 
      50% {transform: translateX(-${distance[1]}rem) scale(0.6)}
      75% {transform: translateX(-${distance[1]}rem) scale(0.6)}
      95% {transform: translateX(0rem) scale(1)}
    `,
  keyframes`
      25% {transform: translateX(-${distance[0]}rem) scale(0.75)}
      75% {transform: translateX(-${distance[0]}rem) scale(0.75)}
      95% {transform: translateX(0rem) scale(1)}
    `,
  keyframes`
      25% {transform: translateX(${distance[0]}rem) scale(0.75)}
      75% {transform: translateX(${distance[0]}rem) scale(0.75)}
      95% {transform: translateX(0rem) scale(1)}
    `,
  keyframes`
      25% {transform: translateX(${distance[0]}rem) scale(0.75)} 
      50% {transform: translateX(${distance[1]}rem) scale(0.6)}
      75% {transform: translateX(${distance[1]}rem) scale(0.6)}
      95% {transform: translateX(0rem) scale(1)}
    `,
  keyframes`
      25% {transform: translateX(${distance[0]}rem) scale(0.75)} 
      50% {transform: translateX(${distance[1]}rem) scale(0.6)}
      75% {transform: translateX(${distance[2]}rem) scale(0.5)}
      95% {transform: translateX(0rem) scale(1)}
    `
];

class Loader extends React.Component {
  style = i => css`{
        position: absolute;
        font-size: ${(this.props.size / 3)} ${this.props.sizeUnit};
        height: ${this.props.size + this.props.sizeUnit};
        width: ${this.props.size + this.props.sizeUnit};
        height: ${this.props.size + this.props.sizeUnit};
        background: ${this.props.color};
        border-radius: 50%;
        animation: ${propagate[i]} 1.5s  infinite;
        animation-fill-mode: forwards;
    }`;

  wrapper = () => css`{
        position: relative;
    }`;

  render() {
    return this.props.loading ?
      <div className={this.wrapper()}>
        <div className={this.style(0)} />
        <div className={this.style(1)} />
        <div className={this.style(2)} />
        <div className={this.style(3)} />
        <div className={this.style(4)} />
        <div className={this.style(5)} />
      </div> : null;
  }
}

Loader.propTypes = {
  loading: PropTypes.bool,
  size: PropTypes.number,
  color: PropTypes.string,
  sizeUnit: PropTypes.string
};

Loader.defaultProps = {
  loading: true,
  size: 15,
  color: '#000000',
  sizeUnit: 'px'
};

const Component = onlyUpdateForKeys(['loading', 'color', 'size', 'sizeUnit'])(Loader);
Component.defaultProps = Loader.defaultProps;
export default Component;
