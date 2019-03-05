/** @jsx jsx */
import React from 'react';
import { keyframes, css, jsx } from '@emotion/core';
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys';
import { calculateRgba, heightWidthProps, heightWidthDefaults, heightWidthKeys } from './helpers';

const long = keyframes`
  0% {left: -35%;right: 100%} 
  60% {left: 100%;right: -90%}
  100% {left: 100%;right: -90%}
`;

const short = keyframes`
  0% {left: -200%;right: 100%} 
  60% {left: 107%;right: -8%}
  100% {left: 107%;right: -8%}
`;

export class Loader extends React.Component {
    style = i => {
      const { height, color, heightUnit } = this.props;

      return css`{
            position: absolute;
            height: ${`${height}${heightUnit}`};
            overflow: hidden;
            background-color: ${color};
            background-clip: padding-box;
            display: block;
            border-radius: 2px;
            will-change: left, right;
            animation-fill-mode: forwards;
            animation: ${i === 1 ? long : short} 2.1s ${i === 2 ? '1.15s' : ''} ${i === 1 ? 'cubic-bezier(0.65, 0.815, 0.735, 0.395)' : 'cubic-bezier(0.165, 0.84, 0.44, 1)'} infinite;
        }`;
    };

    wrapper = () => {
      const {
        width, height, color, heightUnit, widthUnit
      } = this.props;

      const wrapper = css`{        
            position: relative;
            width: ${`${width}${widthUnit}`};
            height: ${`${height}${heightUnit}`};
            overflow: hidden;
            background-color: ${calculateRgba(color, 0.2)};
            background-clip: padding-box;
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

Loader.propTypes = heightWidthProps;

Loader.defaultProps = heightWidthDefaults(4, 100);

const Component = onlyUpdateForKeys(heightWidthKeys)(Loader);
Component.defaultProps = Loader.defaultProps;
export default Component;
