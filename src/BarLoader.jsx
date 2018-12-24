import React from 'react';
import PropTypes from 'prop-types';
import { keyframes, css } from 'emotion';
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys';
import { calculateRgba } from './helpers/index';

const long = keyframes`
  0% {left: -35%;right: 100%} 
  60% {left: 100%;right: -90%}
  100% {left: 100%;right: -90%}
`;

const short = keyframes`
  0% {left: -200%;right: 100%} 
  60% {left: 107%;right: -8%}
  100% {left: 107%;right: -8%}
`;

export class Loader extends React.Component {
    style = i => {
      const { height, color, heightUnit } = this.props;

      return css`{
            position: absolute;
            height: ${`${height}${heightUnit}`};
            overflow: hidden;
            background-color: ${color};
            background-clip: padding-box;
            display: block;
            border-radius: 2px;
            will-change: left, right;
            animation-fill-mode: forwards;
            animation: ${i === 1 ? long : short} 2.1s ${i === 2 ? '1.15s' : ''} ${i === 1 ? 'cubic-bezier(0.65, 0.815, 0.735, 0.395)' : 'cubic-bezier(0.165, 0.84, 0.44, 1)'} infinite;
        }`;
    };

    wrapper = () => {
      const {
        width, height, color, heightUnit, widthUnit, className
      } = this.props;

      const wrapper = css`{        
            position: relative;
            width: ${`${width}${widthUnit}`};
            height: ${`${height}${heightUnit}`};
            overflow: hidden;
            background-color: ${calculateRgba(color, 0.2)};
            background-clip: padding-box;
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
  color: PropTypes.string,
  width: PropTypes.number,
  widthUnit: PropTypes.string,
  height: PropTypes.number,
  heightUnit: PropTypes.string,
  className: PropTypes.string
};

Loader.defaultProps = {
  loading: true,
  color: '#000000',
  width: 100,
  widthUnit: 'px',
  height: 4,
  heightUnit: 'px',
  className: ''
};

const Component = onlyUpdateForKeys(['loading', 'color', 'width', 'height', 'heightUnit', 'widthUnit', 'className'])(Loader);
Component.defaultProps = Loader.defaultProps;
export default Component;
