import React from 'react';
import PropTypes from 'prop-types';
import { keyframes, css } from 'emotion';
import { onlyUpdateForKeys } from 'recompose';
import { calculateRgba } from '../helpers';


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

      return keyframes`
          0% {width: ${this.thickness()}px;box-shadow: ${this.lat()}px ${-this.offset}px ${this.color()}, ${-this.lat()}px ${this.offset}px ${this.color()}} 
          35% {width: ${size}${sizeUnit};box-shadow: 0 ${-this.offset}px ${this.color()}, 0 ${this.offset}px ${this.color()}}
          70% {width: ${this.thickness()}px;box-shadow: ${-this.lat()}px ${-this.offset}px ${this.color()}, ${this.lat()}px ${this.offset}px ${this.color()}}
          100% {box-shadow: ${this.lat()}px ${-this.offset}px ${this.color()}, ${-this.lat()}px ${this.offset}px ${this.color()}}
        `;
    };

    after = () => {
      const { size, sizeUnit } = this.props;

      return keyframes`
          0% {height: ${this.thickness()}px;box-shadow: ${this.offset}px ${this.lat()}px ${this.color()}, ${-this.offset}px ${-this.lat()}px ${this.color()}} 
          35% {height: ${size}${sizeUnit};box-shadow: ${this.offset}px 0 ${this.color()}, ${-this.offset}px 0 ${this.color()}}
          70% {height: ${this.thickness()}px;box-shadow: ${this.offset}px ${-this.lat()}px ${this.color()}, ${-this.offset}px ${this.lat()}px ${this.color()}}
          100% {box-shadow: ${this.offset}px ${this.lat()}px ${this.color()}, ${-this.offset}px ${-this.lat()}px ${this.color()}}
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
            width: ${size / 5}${sizeUnit};
            height: ${size / 5}${sizeUnit};
            border-radius: ${size / 10}${sizeUnit};
            transform: translate(-50%, -50%);
            animation-fill-mode: none;
            animation: ${i === 1 ? this.before() : this.after()} 2s infinite;
        }`;
    };

    wrapper = () => {
      const { size, sizeUnit } = this.props;

      return css`{        
            position: relative;
            width: ${size}${sizeUnit};
            height: ${size}${sizeUnit};
            transform: rotate(165deg);
        }`;
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
  sizeUnit: PropTypes.string
};

Loader.defaultProps = {
  loading: true,
  size: 50,
  color: '#000000',
  sizeUnit: 'px'
};

const Component = onlyUpdateForKeys(['loading', 'color', 'size', 'sizeUnit'])(Loader);
Component.defaultProps = Loader.defaultProps;
export default Component;

