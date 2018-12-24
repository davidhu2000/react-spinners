/** @jsx jsx */
import React from 'react';
import PropTypes from 'prop-types';
import { keyframes, css, jsx } from '@emotion/core';
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys';

const rotate = keyframes`
  0% {transform: rotate(0deg)}
  50% {transform: rotate(180deg)}
  100% {transform: rotate(360deg)}
`;

class Loader extends React.Component {
  style = i => css`{
        opacity: 0.8;
        position: absolute;
        top: 0;
        left: ${i % 2 ? -28 : 25}px;
    }`;

    ball = () => {
      const {
        color, size, sizeUnit, margin
      } = this.props;

      return css`{
            background-color: ${color};
            width: ${`${size}${sizeUnit}`};
            height: ${`${size}${sizeUnit}`};
            margin: ${margin};
            border-radius: 100%;
        }`;
    };

  wrapper = () => {
    const wrapper = css`
            ${this.ball()};
            display: inline-block;
            position: relative;
            animation-fill-mode: both;
            animation: ${rotate} 1s 0s infinite cubic-bezier(.7,-.13,.22,.86);        
        `;

    return this.props.css ? css`${wrapper};${this.props.css}` : wrapper;
  };

  long = () => css`
        ${this.ball()};       
        ${this.style(1)};
    `;
  short = () => css`
        ${this.ball()};       
        ${this.style(2)};
    `;

  render() {
    const { loading } = this.props;

    return loading ?
      <div css={this.wrapper()}>
        <div css={this.long()} />
        <div css={this.short()} />
      </div> : null;
  }
}

Loader.propTypes = {
  loading: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.number,
  margin: PropTypes.string,
  sizeUnit: PropTypes.string,
  css: PropTypes.string
};

Loader.defaultProps = {
  loading: true,
  color: '#000000',
  size: 15,
  margin: '2px',
  sizeUnit: 'px',
  css: ''
};

const Component = onlyUpdateForKeys(['loading', 'color', 'size', 'margin', 'css'])(Loader);
Component.defaultProps = Loader.defaultProps;
export default Component;
