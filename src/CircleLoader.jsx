import React from 'react';
import PropTypes from 'prop-types';
import { keyframes, css } from 'emotion';
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys';

const circle = keyframes`
  0% {transform: rotate(0deg)} 
  50% {transform: rotate(180deg)}
  100% {transform: rotate(360deg)}
`;

class Loader extends React.Component {
    style = i => {
      const { size, color, sizeUnit } = this.props;

      return css`{
            position: absolute;
            height: ${`${size * (1 - (i / 10))}${sizeUnit}`};
            width: ${`${size * (1 - (i / 10))}${sizeUnit}`};
            border: 1px solid ${color};
            border-radius: 100%;
            transition: 2s;
            border-bottom: none;
            border-right: none;
            top: ${(i * 0.7 * 2.5)}%;
            left: ${(i * 0.35 * 2.5)}%;
            animation-fill-mode: '';
            animation: ${circle} 1s ${i * 0.2}s infinite linear;
        }`;
    };

    wrapper = () => {
      const { size, sizeUnit, className } = this.props;

      const wrapper = css`{        
            position: relative;
            width: ${`${size}${sizeUnit}`};
            height: ${`${size}${sizeUnit}`};
        }`;

      return className ? css`${wrapper};${className}` : wrapper;
    };


    render() {
      const { loading } = this.props;

      return loading ?
        <div className={this.wrapper()}>
          <div className={this.style(0)} />
          <div className={this.style(1)} />
          <div className={this.style(2)} />
          <div className={this.style(3)} />
          <div className={this.style(4)} />
        </div> : null;
    }
}

Loader.propTypes = {
  loading: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.number,
  sizeUnit: PropTypes.string,
  className: PropTypes.string
};

Loader.defaultProps = {
  loading: true,
  color: '#000000',
  size: 50,
  sizeUnit: 'px',
  className: ''
};

const Component = onlyUpdateForKeys(['loading', 'color', 'size', 'sizeUnit', 'className'])(Loader);
Component.defaultProps = Loader.defaultProps;
export default Component;
