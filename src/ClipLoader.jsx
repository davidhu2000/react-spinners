/** @jsx jsx */
import React from 'react';
import PropTypes from 'prop-types';
import { keyframes, css, jsx } from '@emotion/core';
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys';

// This returns an animation
const clip = keyframes`
  0% {transform: rotate(0deg) scale(1)} 
  50% {transform: rotate(180deg) scale(0.8)}
  100% {transform: rotate(360deg) scale(1)}
`;

class Loader extends React.Component {
    style = () => {
      const {
        size, sizeUnit, color
      } = this.props;

      const style = css`{
            background: transparent !important;
            width: ${`${size}${sizeUnit}`};
            height: ${`${size}${sizeUnit}`};
            border-radius: 100%;
            border: 2px solid;
            border-color: ${color};
            border-bottom-color: transparent;
            display: inline-block;
            animation: ${clip} 0.75s 0s infinite linear;
            animation-fill-mode: both;
        }`;

      return this.props.css ? css`${style};${this.props.css}` : style;
    };

    render() {
      const { loading } = this.props;
      return loading ? <div css={this.style()} /> : null;
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
  size: 35,
  sizeUnit: 'px',
  css: ''
};

const Component = onlyUpdateForKeys(['loading', 'color', 'size', 'sizeUnit', 'css'])(Loader);
Component.defaultProps = Loader.defaultProps;
export default Component;
