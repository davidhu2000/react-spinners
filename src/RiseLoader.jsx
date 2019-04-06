/** @jsx jsx */
import React from 'react';
import { keyframes, css, jsx } from '@emotion/core';
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys';
import { sizeMarginProps, sizeMarginDefaults, sizeMarginKeys } from './helpers';

const riseAmount = 30;

const even = keyframes`
  0% {transform: scale(1.1)}
  25% {translateY(-${riseAmount}px)}
  50% {transform: scale(0.4)}
  75% {transform: translateY(${riseAmount}px)}
  100% {transform: translateY(0) scale(1.0)}
`;

const odd = keyframes`
  0% {transform: scale(0.4)}
  25% {translateY(${riseAmount}px)}
  50% {transform: scale(1.1)}
  75% {transform: translateY(${-riseAmount}px)}
  100% {transform: translateY(0) scale(0.75)}
`;

class Loader extends React.Component {
    style = i => {
      const {
        color, size, sizeUnit, margin
      } = this.props;

      return css`{
            background-color: ${color};
            width: ${`${size}${sizeUnit}`};
            height: ${`${size}${sizeUnit}`};
            margin: ${`${margin}`};
            border-radius: 100%;
            display: inline-block;
            animation: ${i % 2 === 0 ? even : odd} 1s 0s infinite cubic-bezier(.15,.46,.9,.6);
            animation-fill-mode: both;
        }`;
    };

    wrapper = () => this.props.css || '';

    render() {
      const { loading } = this.props;

      return loading ?
        <div css={this.wrapper()}>
          <div css={this.style(1)} />
          <div css={this.style(2)} />
          <div css={this.style(3)} />
          <div css={this.style(4)} />
          <div css={this.style(5)} />
        </div> : null;
    }
}

Loader.propTypes = sizeMarginProps;

Loader.defaultProps = sizeMarginDefaults(15);

const Component = onlyUpdateForKeys(sizeMarginKeys)(Loader);
Component.defaultProps = Loader.defaultProps;
export default Component;
