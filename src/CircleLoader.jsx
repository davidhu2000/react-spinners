/** @jsx jsx */
import React from 'react';
import { keyframes, css, jsx } from '@emotion/core';
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys';
import { sizeProps, sizeDefaults, sizeKeys } from './helpers';

const circle = keyframes`
  0% {transform: rotate(0deg)} 
  50% {transform: rotate(180deg)}
  100% {transform: rotate(360deg)}
`;

class Loader extends React.Component {
    style = i => {
      const { size, color, sizeUnit } = this.props;

      return css`{
            position: absolute;
            height: ${`${size * (1 - (i / 10))}${sizeUnit}`};
            width: ${`${size * (1 - (i / 10))}${sizeUnit}`};
            border: 1px solid ${color};
            border-radius: 100%;
            transition: 2s;
            border-bottom: none;
            border-right: none;
            top: ${(i * 0.7 * 2.5)}%;
            left: ${(i * 0.35 * 2.5)}%;
            animation-fill-mode: '';
            animation: ${circle} 1s ${i * 0.2}s infinite linear;
        }`;
    };

    wrapper = () => {
      const { size, sizeUnit } = this.props;

      const wrapper = css`{        
            position: relative;
            width: ${`${size}${sizeUnit}`};
            height: ${`${size}${sizeUnit}`};
        }`;

      return this.props.css ? css`${wrapper};${this.props.css}` : wrapper;
    };

    render() {
      const { loading } = this.props;

      return loading ?
        <div css={this.wrapper()}>
          <div css={this.style(0)} />
          <div css={this.style(1)} />
          <div css={this.style(2)} />
          <div css={this.style(3)} />
          <div css={this.style(4)} />
        </div> : null;
    }
}

Loader.propTypes = sizeProps;

Loader.defaultProps = sizeDefaults(50);

const Component = onlyUpdateForKeys(sizeKeys)(Loader);
Component.defaultProps = Loader.defaultProps;
export default Component;
