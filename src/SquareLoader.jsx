/** @jsx jsx */
import React from 'react';
import { keyframes, css, jsx } from '@emotion/core';
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys';
import { sizeProps, sizeKeys, sizeDefaults } from './helpers';

const square = keyframes`
  25% {transform: rotateX(180deg) rotateY(0)}
  50% {transform: rotateX(180deg) rotateY(180deg)}
  75% {transform: rotateX(0) rotateY(180deg)}
  100% {transform: rotateX(0) rotateY(0)}
`;

class Loader extends React.Component {
    style = () => {
      const {
        color, size, sizeUnit
      } = this.props;

      const style = css`{
            background-color: ${color};
            width: ${`${size}${sizeUnit}`};
            height: ${`${size}${sizeUnit}`};
            display: inline-block;
            animation: ${square} 3s 0s infinite cubic-bezier(.09,.57,.49,.9);
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

Loader.propTypes = sizeProps;

Loader.defaultProps = sizeDefaults(50);

const Component = onlyUpdateForKeys(sizeKeys)(Loader);
Component.defaultProps = Loader.defaultProps;
export default Component;
