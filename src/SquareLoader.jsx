import React from 'react';
import PropTypes from 'prop-types';
import { keyframes, css } from 'emotion';
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys';

const square = keyframes`
  25% {transform: rotateX(180deg) rotateY(0)}
  50% {transform: rotateX(180deg) rotateY(180deg)}
  75% {transform: rotateX(0) rotateY(180deg)}
  100% {transform: rotateX(0) rotateY(0)}
`;

class Loader extends React.Component {
    style = () => {
      const {
        color, size, sizeUnit, className
      } = this.props;

      const style = css`{
            background-color: ${color};
            width: ${`${size}${sizeUnit}`};
            height: ${`${size}${sizeUnit}`};
            display: inline-block;
            animation: ${square} 3s 0s infinite cubic-bezier(.09,.57,.49,.9);
            animation-fill-mode: both;
        }`;

      return className ? css`${style};${className}` : style;
    };

    render() {
      const { loading } = this.props;

      return loading ?
        <div className={this.style()} /> : null;
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
