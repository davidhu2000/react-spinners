/** @jsx jsx */
import React from 'react';
import { keyframes, css, jsx } from '@emotion/core';
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys';
import { sizeMarginProps, sizeMarginDefaults, sizeMarginKeys } from './helpers';

// This returns an animation
const pulse = keyframes`
  0% {transform: scale(1);opacity: 1} 
  45% {transform: scale(0.1);opacity: 0.7}
  80% {transform: scale(1);opacity: 1}
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
            margin: ${margin};
            border-radius: 100%;
            display: inline-block;
            animation: ${pulse} 0.75s ${i * 0.12}s infinite cubic-bezier(.2,.68,.18,1.08);
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
        </div> : null;
    }
}

Loader.propTypes = sizeMarginProps;

Loader.defaultProps = sizeMarginDefaults(15);

const Component = onlyUpdateForKeys(sizeMarginKeys)(Loader);
Component.defaultProps = Loader.defaultProps;
export default Component;
