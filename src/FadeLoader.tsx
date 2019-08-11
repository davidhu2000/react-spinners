/** @jsx jsx */
import * as React from "react";
import { keyframes, css, jsx } from "@emotion/core";
import { Keyframes } from "@emotion/serialize";

import { heightWidthRadiusDefaults } from "./helpers";
import {
  StyleFunction,
  PrecompiledCss,
  LoaderHeightWidthRadiusProps,
  StyleFunctionWithIndex
} from "./interfaces";

const fade: Keyframes = keyframes`
  50% {opacity: 0.3}
  100% {opacity: 1}
`;

class Loader extends React.PureComponent<LoaderHeightWidthRadiusProps> {
  public static defaultProps: LoaderHeightWidthRadiusProps = heightWidthRadiusDefaults(15, 5, 2);
  public radius: number = 20;
  public quarter: number = this.radius / 2 + this.radius / 5.5;

  public style: StyleFunctionWithIndex = (i: number): PrecompiledCss => {
    const { height, width, margin, color, radius, widthUnit, heightUnit, radiusUnit } = this.props;

    return css`
      position: absolute;
      width: ${`${width}${widthUnit}`};
      height: ${`${height}${heightUnit}`};
      margin: ${margin};
      background-color: ${color};
      border-radius: ${`${radius}${radiusUnit}`};
      transition: 2s;
      animation-fill-mode: "both";
      animation: ${fade} 1.2s ${i * 0.12}s infinite ease-in-out;
    `;
  };

  public wrapper: StyleFunction = (): PrecompiledCss => {
    return css`
      position: relative;
      font-size: 0;
      top: ${this.radius}px;
      left: ${this.radius}px;
      width: ${this.radius * 3}px;
      height: ${this.radius * 3}px;
    `;
  };

  public a: StyleFunction = (): PrecompiledCss => css`
    ${this.style(1)};
    top: ${this.radius}px;
    left: 0;
  `;
  public b: StyleFunction = (): PrecompiledCss => css`
    ${this.style(2)};
    top: ${this.quarter}px;
    left: ${this.quarter}px;
    transform: rotate(-45deg);
  `;
  public c: StyleFunction = (): PrecompiledCss => css`
    ${this.style(3)};
    top: 0;
    left: ${this.radius}px;
    transform: rotate(90deg);
  `;
  public d: StyleFunction = (): PrecompiledCss => css`
    ${this.style(4)};
    top: ${-this.quarter}px;
    left: ${this.quarter}px;
    transform: rotate(45deg);
  `;
  public e: StyleFunction = (): PrecompiledCss => css`
    ${this.style(5)};
    top: ${-this.radius}px;
    left: 0;
  `;
  public f: StyleFunction = (): PrecompiledCss => css`
    ${this.style(6)};
    top: ${-this.quarter}px;
    left: ${-this.quarter}px;
    transform: rotate(-45deg);
  `;
  public g: StyleFunction = (): PrecompiledCss => css`
    ${this.style(7)};
    top: 0;
    left: ${-this.radius}px;
    transform: rotate(90deg);
  `;
  public h: StyleFunction = (): PrecompiledCss => css`
    ${this.style(8)};
    top: ${this.quarter}px;
    left: ${-this.quarter}px;
    transform: rotate(45deg);
  `;

  public render(): JSX.Element | null {
    const { loading, css } = this.props;

    return loading ? (
      <div css={[this.wrapper(), css]}>
        <div css={this.a()} />
        <div css={this.b()} />
        <div css={this.c()} />
        <div css={this.d()} />
        <div css={this.e()} />
        <div css={this.f()} />
        <div css={this.g()} />
        <div css={this.h()} />
      </div>
    ) : null;
  }
}

export default Loader;
