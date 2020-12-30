/** @jsx jsx */
import * as React from "react";
import { keyframes, css, jsx, SerializedStyles } from '@emotion/react';

import { heightWidthRadiusDefaults, cssValue, parseLengthAndUnit } from "./helpers";
import { LoaderHeightWidthRadiusProps } from "./interfaces";

const fade = keyframes`
  50% {opacity: 0.3}
  100% {opacity: 1}
`;

class Loader extends React.PureComponent<LoaderHeightWidthRadiusProps> {
  public static defaultProps = heightWidthRadiusDefaults(15, 5, 2);

  public radius = (): number => {
    const { margin } = this.props;
    const { value } = parseLengthAndUnit(margin || Loader.defaultProps.margin);

    return value + 18;
  };

  public quarter = (): number => {
    return this.radius() / 2 + this.radius() / 5.5;
  };

  public style = (i: number): SerializedStyles => {
    const { height, width, margin, color, radius } = this.props;

    return css`
      position: absolute;
      width: ${cssValue(width || Loader.defaultProps.width)};
      height: ${cssValue(height || Loader.defaultProps.height)};
      margin: ${cssValue(margin || Loader.defaultProps.margin)};
      background-color: ${color};
      border-radius: ${cssValue(radius || Loader.defaultProps.radius)};
      transition: 2s;
      animation-fill-mode: "both";
      animation: ${fade} 1.2s ${i * 0.12}s infinite ease-in-out;
    `;
  };

  public wrapper = (): SerializedStyles => {
    return css`
      position: relative;
      font-size: 0;
      top: ${this.radius()}px;
      left: ${this.radius()}px;
      width: ${this.radius() * 3}px;
      height: ${this.radius() * 3}px;
    `;
  };

  public a = (): SerializedStyles => css`
    ${this.style(1)};
    top: ${this.radius()}px;
    left: 0;
  `;
  public b = (): SerializedStyles => css`
    ${this.style(2)};
    top: ${this.quarter()}px;
    left: ${this.quarter()}px;
    transform: rotate(-45deg);
  `;
  public c = (): SerializedStyles => css`
    ${this.style(3)};
    top: 0;
    left: ${this.radius()}px;
    transform: rotate(90deg);
  `;
  public d = (): SerializedStyles => css`
    ${this.style(4)};
    top: ${-this.quarter()}px;
    left: ${this.quarter()}px;
    transform: rotate(45deg);
  `;
  public e = (): SerializedStyles => css`
    ${this.style(5)};
    top: ${-this.radius()}px;
    left: 0;
  `;
  public f = (): SerializedStyles => css`
    ${this.style(6)};
    top: ${-this.quarter()}px;
    left: ${-this.quarter()}px;
    transform: rotate(-45deg);
  `;
  public g = (): SerializedStyles => css`
    ${this.style(7)};
    top: 0;
    left: ${-this.radius()}px;
    transform: rotate(90deg);
  `;
  public h = (): SerializedStyles => css`
    ${this.style(8)};
    top: ${this.quarter()}px;
    left: ${-this.quarter()}px;
    transform: rotate(45deg);
  `;

  public render(): JSX.Element | null {
    const { loading, css } = this.props;

    return loading ? (
      <span css={[this.wrapper(), css]}>
        <span css={this.a()} />
        <span css={this.b()} />
        <span css={this.c()} />
        <span css={this.d()} />
        <span css={this.e()} />
        <span css={this.f()} />
        <span css={this.g()} />
        <span css={this.h()} />
      </span>
    ) : null;
  }
}

export default Loader;
