import React from 'react';
import PropTypes from 'prop-types';
import { keyframes, css } from 'emotion';
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys';
import { calculateRgba } from './helpers/index';


class Loader extends React.Component {
    thickness = () => {
      const { size } = this.props;

      return size / 5;
    };

    lat = () => {
      const { size } = this.props;

      return (size - this.thickness()) / 2;
    };
    offset = () => this.lat() - this.thickness();
    color = () => {
      const { color } = this.props;

      return calculateRgba(color, 0.75);
    };

    before = () => {
      const { size, sizeUnit } = this.props;

      const color = this.color();
      const lat = this.lat();
      const thickness = this.thickness();
      const offset = this.offset();

      return keyframes`
          0% {width: ${thickness}px;box-shadow: ${lat}px ${-offset}px ${color}, ${-lat}px ${offset}px ${color}} 
          35% {width: ${`${size}${sizeUnit}`};box-shadow: 0 ${-offset}px ${color}, 0 ${offset}px ${color}}
          70% {width: ${thickness}px;box-shadow: ${-lat}px ${-offset}px ${color}, ${lat}px ${offset}px ${color}}
          100% {box-shadow: ${lat}px ${-offset}px ${color}, ${-lat}px ${offset}px ${color}}
        `;
    };

    after = () => {
      const { size, sizeUnit } = this.props;

      const color = this.color();
      const lat = this.lat();
      const thickness = this.thickness();
      const offset = this.offset();

      return keyframes`
          0% {height: ${thickness}px;box-shadow: ${offset}px ${lat}px ${color}, ${-offset}px ${-lat}px ${color}} 
          35% {height: ${`${size}${sizeUnit}`};box-shadow: ${offset}px 0 ${color}, ${-offset}px 0 ${color}}
          70% {height: ${thickness}px;box-shadow: ${offset}px ${-lat}px ${color}, ${-offset}px ${lat}px ${color}}
          100% {box-shadow: ${offset}px ${lat}px ${color}, ${-offset}px ${-lat}px ${color}}
        `;
    };

    style = i => {
      const { size, sizeUnit } = this.props;

      return css`{
            position: absolute;
            content: '';
            top: 50%;
            left: 50%;
            display: block;
            width: ${`${size / 5}${sizeUnit}`};
            height: ${`${size / 5}${sizeUnit}`};
            border-radius: ${`${size / 10}${sizeUnit}`};
            transform: translate(-50%, -50%);
            animation-fill-mode: none;
            animation: ${i === 1 ? this.before() : this.after()} 2s infinite;
        }`;
    };

    wrapper = () => {
      const { size, sizeUnit, className } = this.props;

      const wrapper = css`{        
            position: relative;
            width: ${`${size}${sizeUnit}`};
            height: ${`${size}${sizeUnit}`};
            transform: rotate(165deg);
        }`;

      return className ? css`${wrapper};${className}` : wrapper;
    };

    render() {
      const { loading } = this.props;

      return loading ?
        <div className={this.wrapper()}>
          <div className={this.style(1)} />
          <div className={this.style(2)} />
        </div> : null;
    }
}

Loader.propTypes = {
  loading: PropTypes.bool,
  size: PropTypes.number,
  color: PropTypes.string,
  sizeUnit: PropTypes.string,
  className: PropTypes.string
};

Loader.defaultProps = {
  loading: true,
  size: 50,
  color: '#000000',
  sizeUnit: 'px',
  className: ''
};

const Component = onlyUpdateForKeys(['loading', 'color', 'size', 'sizeUnit', 'className'])(Loader);
Component.defaultProps = Loader.defaultProps;
export default Component;

