/** @jsx jsx */
import * as React from "react";
import { keyframes, css, jsx, SerializedStyles } from '@emotion/react';

import { sizeDefaults, parseLengthAndUnit, cssValue } from "./helpers";
import { LoaderSizeProps } from "./interfaces";

const moon = keyframes`
  100% {transform: rotate(360deg)}
`;

class Loader extends React.PureComponent<LoaderSizeProps> {
  public static defaultProps = sizeDefaults(60);

  public moonSize = (): number => {
    const { size } = this.props;
    const { value } = parseLengthAndUnit(size || Loader.defaultProps.size);

    return value / 7;
  };

  public ballStyle = (size: number): SerializedStyles => {
    return css`
      width: ${cssValue(size)};
      height: ${cssValue(size)};
      border-radius: 100%;
    `;
  };

  public wrapper = (): SerializedStyles => {
    const { size } = this.props;
    const { value, unit } = parseLengthAndUnit(size || Loader.defaultProps.size);

    return css`
      position: relative;
      width: ${`${value + this.moonSize() * 2}${unit}`};
      height: ${`${value + this.moonSize() * 2}${unit}`};
      animation: ${moon} 0.6s 0s infinite linear;
      animation-fill-mode: forwards;
    `;
  };

  public ball = (): SerializedStyles => {
    const { color, size } = this.props;
    const { value, unit } = parseLengthAndUnit(size || Loader.defaultProps.size);

    return css`
      ${this.ballStyle(this.moonSize())};
      background-color: ${color};
      opacity: 0.8;
      position: absolute;
      top: ${`${value / 2 - this.moonSize() / 2}${unit}`};
      animation: ${moon} 0.6s 0s infinite linear;
      animation-fill-mode: forwards;
    `;
  };

  public circle = (): SerializedStyles => {
    const { size, color } = this.props;
    const { value } = parseLengthAndUnit(size || Loader.defaultProps.size);

    return css`
      ${this.ballStyle(value)};
      border: ${this.moonSize()}px solid ${color};
      opacity: 0.1;
      box-sizing: content-box;
      position: absolute;
    `;
  };

  public render(): JSX.Element | null {
    const { loading, css } = this.props;

    return loading ? (
      <span css={[this.wrapper(), css]}>
        <span css={this.ball()} />
        <span css={this.circle()} />
      </span>
    ) : null;
  }
}

export default Loader;
