import React from 'react';
import PropTypes from 'prop-types';
import { keyframes, css } from 'emotion';
import { onlyUpdateForKeys } from 'recompose';

// This returns an animation
const pacman = [
  keyframes`
      0% {transform: rotate(0deg)} 
      50% {transform: rotate(-44deg)}
    `,
  keyframes`
      0% {transform: rotate(0deg)} 
      50% {transform: rotate(44deg)}
    `
];

class Loader extends React.Component {
  ball = () => keyframes`
      75% {opacity: 0.7}
      100% {transform: translate(${(-4 * this.props.size).toString() + this.props.sizeUnit}, ${(-this.props.size / 4).toString() + this.props.sizeUnit})}
    `;

  ballStyle = i => css`{
        width: 10px;
        height: 10px;
        background-color: ${this.props.color};
        margin: ${this.props.margin};
        border-radius: 100%;
        transform: translate(0, ${(-this.props.size / 4).toString() + this.props.sizeUnit});
        position: absolute;
        top: 25px;
        left: 100px;
        animation: ${this.ball()} 1s ${i * 0.25}s infinite linear;
        animation-fill-mode: both;
    }`;

  s1 = () => `${this.props.size.toString() + this.props.sizeUnit} solid transparent`;
  s2 = () => `${this.props.size.toString() + this.props.sizeUnit} solid ${this.props.color}`;
  pacmanStyle = i => css`{
        width: 0;
        height: 0;
        border-right: ${this.s1()};
        border-top: ${i === 0 ? this.s1() : this.s2()};
        border-left: ${this.s2()};
        border-bottom: ${i === 0 ? this.s2() : this.s1()};
        border-radius: ${this.props.size.toString() + this.props.sizeUnit};
        position: absolute;
        animation: ${pacman[i]} 0.8s infinite ease-in-out;
        animation-fill-mode: both;
    }`;

  wrapper = () => css`{
        position: relative;
        font-size: 0;
        height: ${this.props.size.toString() + this.props.sizeUnit};
        width: ${this.props.size.toString() + this.props.sizeUnit};
    }`;

  pac = () => this.pacmanStyle(0);
  man = () => this.pacmanStyle(1);

  render() {
    return this.props.loading ?
      <div className={this.wrapper()}>
        <div className={this.pac()} />
        <div className={this.man()} />
        <div className={this.ballStyle(2)} />
        <div className={this.ballStyle(3)} />
        <div className={this.ballStyle(4)} />
        <div className={this.ballStyle(5)} />
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
  size: 25,
  margin: '2px',
  sizeUnit: 'px'
};

const Component = onlyUpdateForKeys(['loading', 'color', 'size', 'margin', 'sizeUnit'])(Loader);
Component.defaultProps = Loader.defaultProps;
export default Component;
