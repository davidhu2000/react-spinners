import React from 'react';
import PropTypes from 'prop-types';
import { keyframes, css } from 'emotion';
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys';

const moon = keyframes`
  100% {transform: rotate(360deg)}
`;

class Loader extends React.Component {
    moonSize = () => {
      const { size } = this.props;

      return size / 7;
    };

  ballStyle = size => {
    const { sizeUnit } = this.props;

    return css`{
          width: ${`${size}${sizeUnit}`};
          height: ${`${size}${sizeUnit}`};
          border-radius: 100%;
      }`;
  };

    wrapper = () => {
      const { size, sizeUnit } = this.props;

      return css`{
            position: relative;
            width: ${`${size + (this.moonSize() * 2)}${sizeUnit}`};
            height: ${`${size + (this.moonSize() * 2)}${sizeUnit}`};
            animation: ${moon} 0.6s 0s infinite linear;
            animation-fill-mode: forwards;
        }`;
    };

    ball = () => {
      const { color, size, sizeUnit } = this.props;

      return css`
            ${this.ballStyle(this.moonSize())};
            background-color: ${color};
            opacity: 0.8;
            position: absolute;
            top: ${`${(size / 2) - (this.moonSize() / 2)}${sizeUnit}`};
            animation: ${moon} 0.6s 0s infinite linear;
            animation-fill-mode: forwards;
        `;
    };


    circle = () => {
      const { size, color, className } = this.props;

      const wrapper = css`
            ${this.ballStyle(size)};
            border: ${this.moonSize()}px solid ${color};
            opacity: 0.1;
        `;

      return className ? css`${wrapper};${className}` : wrapper;
    };

    render() {
      const { loading } = this.props;

      return loading ?
        <div className={this.wrapper()}>
          <div className={this.ball()} />
          <div className={this.circle()} />
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
  size: 60,
  sizeUnit: 'px',
  className: ''
};

const Component = onlyUpdateForKeys(['loading', 'color', 'size', 'sizeUnit', 'className'])(Loader);
Component.defaultProps = Loader.defaultProps;
export default Component;
