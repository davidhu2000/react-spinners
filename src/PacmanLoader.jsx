import React from 'react';
import PropTypes from 'prop-types';
import { keyframes, css } from 'emotion';
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys';

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
    ball = () => {
      const { size, sizeUnit } = this.props;

      return keyframes`
          75% {opacity: 0.7}
          100% {transform: translate(${`${-4 * size}${sizeUnit}`}, ${`${-size / 4}${sizeUnit}`})}
        `;
    };

    ballStyle = i => {
      const {
        color, margin, size, sizeUnit
      } = this.props;

      return css`{
            width: ${`${size / 3}${sizeUnit}`};
            height: ${`${size / 3}${sizeUnit}`};
            background-color: ${color};
            margin: ${margin};
            border-radius: 100%;
            transform: translate(0, ${`${-size / 4}${sizeUnit}`});
            position: absolute;
            top: ${size}px;
            left: ${`${size * 4}${sizeUnit}`};
            animation: ${this.ball()} 1s ${i * 0.25}s infinite linear;
            animation-fill-mode: both;
        }`;
    };

    s1 = () => {
      const { size, sizeUnit } = this.props;

      return `${size}${sizeUnit} solid transparent`;
    };

    s2 = () => {
      const { size, sizeUnit, color } = this.props;

      return `${size}${sizeUnit} solid ${color}`;
    };

    pacmanStyle = i => {
      const { size, sizeUnit } = this.props;

      const s1 = this.s1();
      const s2 = this.s2();

      return css`{
            width: 0;
            height: 0;
            border-right: ${s1};
            border-top: ${i === 0 ? s1 : s2};
            border-left: ${s2};
            border-bottom: ${i === 0 ? s2 : s1};
            border-radius: ${`${size}${sizeUnit}`};
            position: absolute;
            animation: ${pacman[i]} 0.8s infinite ease-in-out;
            animation-fill-mode: both;
        }`;
    };

    wrapper = () => {
      const { size, sizeUnit, className } = this.props;

      const wrapper = css`{
            position: relative;
            font-size: 0;
            height: ${`${size}${sizeUnit}`};
            width: ${`${size}${sizeUnit}`};
        }`;

      return className ? css`${wrapper};${className}` : wrapper;
    };

  pac = () => this.pacmanStyle(0);
  man = () => this.pacmanStyle(1);

  render() {
    const { loading } = this.props;

    return loading ?
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
  sizeUnit: PropTypes.string,
  className: PropTypes.string
};

Loader.defaultProps = {
  loading: true,
  color: '#000000',
  size: 25,
  margin: '2px',
  sizeUnit: 'px',
  className: ''
};

const Component = onlyUpdateForKeys(['loading', 'color', 'size', 'margin', 'sizeUnit', 'className'])(Loader);
Component.defaultProps = Loader.defaultProps;
export default Component;
