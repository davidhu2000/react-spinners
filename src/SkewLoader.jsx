/** @jsx jsx */
import React from 'react';
import PropTypes from 'prop-types';
import { keyframes, css, jsx } from '@emotion/core';
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys';

const skew = keyframes`
  25% {transform: perspective(100px) rotateX(180deg) rotateY(0)}
  50% {transform: perspective(100px) rotateX(180deg) rotateY(180deg)}
  75% {transform: perspective(100px) rotateX(0) rotateY(180deg)}
  100% {transform: perspective(100px) rotateX(0) rotateY(0)}
`;

class Loader extends React.Component {
    style = () => {
      const {
        size, sizeUnit, color
      } = this.props;

      const style = css`{
            width: 0;
            height: 0;
            border-left: ${`${size}${sizeUnit}`} solid transparent;
            border-right: ${`${size}${sizeUnit}`} solid transparent;
            border-bottom: ${`${size}${sizeUnit}`} solid ${color};
            display: inline-block;
            animation: ${skew} 3s 0s infinite cubic-bezier(.09,.57,.49,.9);
            animation-fill-mode: both;
        }`;

      return this.props.css ? css`${style};${this.props.css}` : style;
    };

    render() {
      const { loading } = this.props;

      return loading ?
        <div css={this.style()} /> : null;
    }
}

Loader.propTypes = {
  loading: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.number,
  sizeUnit: PropTypes.string,
  css: PropTypes.string
};

Loader.defaultProps = {
  loading: true,
  color: '#000000',
  size: 20,
  sizeUnit: 'px',
  css: ''
};

const Component = onlyUpdateForKeys(['loading', 'color', 'size', 'css'])(Loader);
Component.defaultProps = Loader.defaultProps;
export default Component;
