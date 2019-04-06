/** @jsx jsx */
import React from 'react';
import { keyframes, css, jsx } from '@emotion/core';
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys';
import { sizeMarginProps, sizeMarginDefaults, sizeMarginKeys } from './helpers';

const grid = keyframes`
  0% {transform: scale(1)}
  50% {transform: scale(0.5); opacity: 0.7}
  100% {transform: scale(1);opacity: 1}
`;

const random = top => Math.random() * top;

class Loader extends React.Component {
    style = rand => {
      const {
        color, size, sizeUnit, margin
      } = this.props;

      return css`{
            display: inline-block;
            background-color: ${color};
            width: ${`${size}${sizeUnit}`};
            height: ${`${size}${sizeUnit}`};
            margin: ${margin};
            border-radius: 100%;
            animation-fill-mode: 'both';
            animation: ${grid} ${(rand / 100) + 0.6}s ${(rand / 100) - 0.2}s infinite ease;
        }`;
    };

    wrapper = () => {
      const {
        size, sizeUnit, margin
      } = this.props;

      const wrapper = css`{        
            width: ${`${(parseFloat(size) * 3) + (parseFloat(margin) * 6)}${sizeUnit}`};
            font-size: 0;
        }`;

      return this.props.css ? css`${wrapper};${this.props.css}` : wrapper;
    };


    render() {
      const { loading } = this.props;

      return loading ?
        <div css={this.wrapper()}>
          <div css={this.style(random(100))} />
          <div css={this.style(random(100))} />
          <div css={this.style(random(100))} />
          <div css={this.style(random(100))} />
          <div css={this.style(random(100))} />
          <div css={this.style(random(100))} />
          <div css={this.style(random(100))} />
          <div css={this.style(random(100))} />
          <div css={this.style(random(100))} />
        </div> : null;
    }
}

Loader.propTypes = sizeMarginProps;

Loader.defaultProps = sizeMarginDefaults(15);

const Component = onlyUpdateForKeys(sizeMarginKeys)(Loader);
Component.defaultProps = Loader.defaultProps;
export default Component;

