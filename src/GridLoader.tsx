/** @jsx jsx */
import * as React from "react";
import { keyframes, css, jsx } from "@emotion/core";
import { Keyframes } from "@emotion/serialize";

import { sizeMarginDefaults, cssValue, parseLengthAndUnit } from "./helpers";
import {
  StyleFunction,
  PrecompiledCss,
  LoaderSizeMarginProps,
  StyleFunctionWithIndex,
  LengthObject
} from "./interfaces";

const grid: Keyframes = keyframes`
  0% {transform: scale(1)}
  50% {transform: scale(0.5); opacity: 0.7}
  100% {transform: scale(1);opacity: 1}
`;

type RandomFunction = (top: number) => number;
const random: RandomFunction = (top: number): number => Math.random() * top;

class Loader extends React.PureComponent<LoaderSizeMarginProps> {
  public static defaultProps: LoaderSizeMarginProps = sizeMarginDefaults(15);

  public style: StyleFunctionWithIndex = (rand: number): PrecompiledCss => {
    const { color, size, margin } = this.props;

    return css`
      display: inline-block;
      background-color: ${color};
      width: ${cssValue(size!)};
      height: ${cssValue(size!)};
      margin: ${cssValue(margin!)};
      border-radius: 100%;
      animation-fill-mode: "both";
      animation: ${grid} ${rand / 100 + 0.6}s ${rand / 100 - 0.2}s infinite ease;
    `;
  };

  public wrapper: StyleFunction = (): PrecompiledCss => {
    const { size, margin } = this.props;
    let sizeWithUnit: LengthObject = parseLengthAndUnit(size!);
    let marginWithUnit: LengthObject = parseLengthAndUnit(margin!);

    let width: string = `${parseFloat(sizeWithUnit.value.toString()) * 3 +
      parseFloat(marginWithUnit.value.toString()) * 6}${sizeWithUnit.unit}`;

    return css`
      width: ${width};
      font-size: 0;
    `;
  };

  public render(): JSX.Element | null {
    const { loading, css } = this.props;

    return loading ? (
      <div css={[this.wrapper(), css]}>
        <div css={this.style(random(100))} />
        <div css={this.style(random(100))} />
        <div css={this.style(random(100))} />
        <div css={this.style(random(100))} />
        <div css={this.style(random(100))} />
        <div css={this.style(random(100))} />
        <div css={this.style(random(100))} />
        <div css={this.style(random(100))} />
        <div css={this.style(random(100))} />
      </div>
    ) : null;
  }
}

export default Loader;
