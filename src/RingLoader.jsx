/** @jsx jsx */
import React from 'react';
import { keyframes, css, jsx } from '@emotion/core';
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys';
import { sizeProps, sizeDefaults, sizeKeys } from './helpers';

const right = keyframes`
  0% {transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg)}
  100% {transform: rotateX(180deg) rotateY(360deg) rotateZ(360deg)}
`;

const left = keyframes`
  0% {transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg)}
  100% {transform: rotateX(360deg) rotateY(180deg) rotateZ(360deg)}
`;


class Loader extends React.Component {
    style = i => {
      const { size, sizeUnit, color } = this.props;

      return css`{
            position: absolute;
            top: 0;
            left: 0;
            width: ${`${size}${sizeUnit}`};
            height: ${`${size}${sizeUnit}`};
            border: ${`${size / 10}${sizeUnit}`} solid ${color};
            opacity: 0.4;
            border-radius: 100%;
            animation-fill-mode: forwards;
            perspective: 800px;
            animation: ${i === 1 ? right : left} 2s 0s infinite linear;
        }`;
    };

    wrapper = () => {
      const { size, sizeUnit } = this.props;

      const wrapper = css`{        
            width: ${`${size}${sizeUnit}`};
            height: ${`${size}${sizeUnit}`};
            position: relative;
        }`;

      return this.props.css ? css`${wrapper};${this.props.css}` : wrapper;
    };

    render() {
      const { loading } = this.props;

      return loading ?
        <div css={this.wrapper()}>
          <div css={this.style(1)} />
          <div css={this.style(2)} />
        </div> : null;
    }
}

Loader.propTypes = sizeProps;

Loader.defaultProps = sizeDefaults(60);

const Component = onlyUpdateForKeys(sizeKeys)(Loader);
Component.defaultProps = Loader.defaultProps;
export default Component;
