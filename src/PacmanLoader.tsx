/** @jsx jsx */
import * as React from "react";
import { keyframes, css, jsx } from "@emotion/core";
import { Keyframes } from "@emotion/serialize";

import { sizeMarginDefaults, parseLengthAndUnit, cssValue } from "./helpers";
import {
  StyleFunction,
  PrecompiledCss,
  LoaderSizeMarginProps,
  CalcFunction,
  StyleFunctionWithIndex
} from "./interfaces";

const pacman: Keyframes[] = [
  keyframes`
    0% {transform: rotate(0deg)}
    50% {transform: rotate(-44deg)}
  `,
  keyframes`
    0% {transform: rotate(0deg)}
    50% {transform: rotate(44deg)}
  `
];

class Loader extends React.PureComponent<LoaderSizeMarginProps> {
  public static defaultProps: LoaderSizeMarginProps = sizeMarginDefaults(25);

  public ball: CalcFunction<Keyframes> = (): Keyframes => {
    const { size } = this.props;
    let { value, unit } = parseLengthAndUnit(size!);

    return keyframes`
      75% {opacity: 0.7}
      100% {transform: translate(${`${-4 * value}${unit}`}, ${`${-value / 4}${unit}`})}
    `;
  };

  public ballStyle: StyleFunctionWithIndex = (i: number): PrecompiledCss => {
    const { color, margin, size } = this.props;
    let { value, unit } = parseLengthAndUnit(size!);

    return css`
      width: ${`${value / 3}${unit}`};
      height: ${`${value / 3}${unit}`};
      background-color: ${color};
      margin: ${cssValue(margin!)};
      border-radius: 100%;
      transform: translate(0, ${`${-value / 4}${unit}`});
      position: absolute;
      top: ${`${value}${unit}`};
      left: ${`${value * 4}${unit}`};
      animation: ${this.ball()} 1s ${i * 0.25}s infinite linear;
      animation-fill-mode: both;
    `;
  };

  public s1: CalcFunction<string> = (): string => {
    const { size } = this.props;

    return `${cssValue(size!)} solid transparent`;
  };

  public s2: CalcFunction<string> = (): string => {
    const { size, color } = this.props;

    return `${cssValue(size!)} solid ${color}`;
  };

  public pacmanStyle: StyleFunctionWithIndex = (i: number): PrecompiledCss => {
    const { size } = this.props;

    const s1: string = this.s1();
    const s2: string = this.s2();

    return css`
      width: 0;
      height: 0;
      border-right: ${s1};
      border-top: ${i === 0 ? s1 : s2};
      border-left: ${s2};
      border-bottom: ${i === 0 ? s2 : s1};
      border-radius: ${cssValue(size!)};
      position: absolute;
      animation: ${pacman[i]} 0.8s infinite ease-in-out;
      animation-fill-mode: both;
    `;
  };

  public wrapper: StyleFunction = (): PrecompiledCss => {
    const { size } = this.props;

    return css`
      position: relative;
      font-size: 0;
      height: ${cssValue(size!)};
      width: ${cssValue(size!)};
    `;
  };

  public pac: StyleFunction = (): PrecompiledCss => this.pacmanStyle(0);
  public man: StyleFunction = (): PrecompiledCss => this.pacmanStyle(1);

  public render(): JSX.Element | null {
    const { loading, css } = this.props;

    return loading ? (
      <div css={[this.wrapper(), css]}>
        <div css={this.pac()} />
        <div css={this.man()} />
        <div css={this.ballStyle(2)} />
        <div css={this.ballStyle(3)} />
        <div css={this.ballStyle(4)} />
        <div css={this.ballStyle(5)} />
      </div>
    ) : null;
  }
}

export default Loader;
