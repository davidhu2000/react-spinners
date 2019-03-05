/** @jsx jsx */
import React from 'react';
import { keyframes, css, jsx } from '@emotion/core';
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys';
import { sizeProps, sizeDefaults, sizeKeys } from './helpers';

const bounce = keyframes`
  0%, 100% {transform: scale(0)} 
  50% {transform: scale(1.0)}
`;

class Loader extends React.Component {
    style = i => {
      const { size, color, sizeUnit } = this.props;

      return css`{
            position: absolute;
            height: ${`${size}${sizeUnit}`};
            width: ${`${size}${sizeUnit}`};
            background-color: ${color};
            border-radius: 100%;
            opacity: 0.6;        
            top: 0;
            left: 0;
            animation-fill-mode: both;
            animation: ${bounce} 2.1s ${i === 1 ? '1s' : '0s'} infinite ease-in-out;
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
