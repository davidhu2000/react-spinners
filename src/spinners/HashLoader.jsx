import React from 'react';
import PropTypes from 'prop-types';
import { keyframes, css } from 'emotion';
import { onlyUpdateForKeys } from 'recompose';
import { calculateRgba } from '../helpers';


class Loader extends React.Component {
  thickness = () => this.props.size / 5;
  lat = () => (this.props.size - this.thickness()) / 2;
  offset = () => this.lat() - this.thickness();
  color = () => calculateRgba(this.props.color, 0.75);
  before = () => keyframes`
          0% {width: ${this.thickness()}px;box-shadow: ${this.lat()}px ${-this.offset()}px ${this.color()}, ${-this.lat()}px ${this.offset()}px ${this.color()}} 
          35% {width: ${this.props.size + this.props.sizeUnit};box-shadow: 0 ${-this.offset()}px ${this.color()}, 0 ${this.offset()}px ${this.color()}}
          70% {width: ${this.thickness()}px;box-shadow: ${-this.lat()}px ${-this.offset()}px ${this.color()}, ${this.lat()}px ${this.offset()}px ${this.color()}}
          100% {box-shadow: ${this.lat()}px ${-this.offset()}px ${this.color()}, ${-this.lat()}px ${this.offset()}px ${this.color()}}
        `;
  after = () => keyframes`
          0% {height: ${this.thickness()}px;box-shadow: ${this.offset()}px ${this.lat()}px ${this.color()}, ${-this.offset()}px ${-this.lat()}px ${this.color()}} 
          35% {height: ${this.props.size + this.props.sizeUnit};box-shadow: ${this.offset()}px 0 ${this.color()}, ${-this.offset()}px 0 ${this.color()}}
          70% {height: ${this.thickness()}px;box-shadow: ${this.offset()}px ${-this.lat()}px ${this.color()}, ${-this.offset()}px ${this.lat()}px ${this.color()}}
          100% {box-shadow: ${this.offset()}px ${this.lat()}px ${this.color()}, ${-this.offset()}px ${-this.lat()}px ${this.color()}}
        `;
  style = i => css`{
        position: absolute;
        content: '';
        top: 50%;
        left: 50%;
        display: block;
        width: ${(this.props.size / 5) + this.props.sizeUnit};
        height: ${(this.props.size / 5) + this.props.sizeUnit};
        border-radius: ${(this.props.size / 10) + this.props.sizeUnit};
        transform: translate(-50%, -50%);
        animation-fill-mode: none;
        animation: ${i === 1 ? this.before() : this.after()} 2s infinite;
    }`;

  wrapper = () => css`{        
        position: relative;
        width: ${this.props.size + this.props.sizeUnit};
        height: ${this.props.size + this.props.sizeUnit};
        transform: rotate(165deg);
    }`;

  render() {
    return this.props.loading ?
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

