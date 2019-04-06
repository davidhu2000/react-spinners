/** @jsx jsx */
import React from 'react';
import { keyframes, css, jsx } from '@emotion/core';
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys';
import { sizeMarginKeys, sizeMarginDefaults, sizeMarginProps } from './helpers';

const beat = keyframes`
  50% {transform: scale(0.75);opacity: 0.2} 
  100% {transform: scale(1);opacity: 1}
`;

class Loader extends React.Component {
    style = i => {
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
            animation: ${beat} 0.7s ${i % 2 ? '0s' : '0.35s'} infinite linear;
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
