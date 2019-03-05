/** @jsx jsx */
import React from 'react';
import { keyframes, css, jsx } from '@emotion/core';
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys';
import { heightWidthRadiusProps, heightWidthRadiusDefaults, heightWidthRadiusKeys } from './helpers';

const scale = keyframes`
  0% {transform: scaley(1.0)}
  50% {transform: scaley(0.4)}
  100% {transform: scaley(1.0)}
`;

class Loader extends React.Component {
    style = i => {
      const {
        color, width, height, margin, radius, widthUnit, heightUnit, radiusUnit
      } = this.props;

      return css`{
            background-color: ${color};
            width: ${`${width}${widthUnit}`};
            height: ${`${height}${heightUnit}`};
            margin: ${margin};
            border-radius: ${`${radius}${radiusUnit}`};
            display: inline-block;
            animation: ${scale} 1s ${i * 0.1}s infinite cubic-bezier(.2,.68,.18,1.08);
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

Loader.propTypes = heightWidthRadiusProps;

Loader.defaultProps = heightWidthRadiusDefaults(35, 4, 2);

const Component = onlyUpdateForKeys(heightWidthRadiusKeys)(Loader);
Component.defaultProps = Loader.defaultProps;
export default Component;
