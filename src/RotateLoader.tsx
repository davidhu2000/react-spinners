/** @jsx jsx */
import * as React from "react";
import { keyframes, css, jsx } from "@emotion/core";
import { Keyframes } from "@emotion/serialize";

import { sizeMarginDefaults, cssValue, parseLengthAndUnit } from "./helpers";
import {
  StyleFunction,
  PrecompiledCss,
  LoaderSizeMarginProps,
  StyleFunctionWithIndex
} from "./interfaces";

const rotate: Keyframes = keyframes`
  0% {transform: rotate(0deg)}
  50% {transform: rotate(180deg)}
  100% {transform: rotate(360deg)}
`;

class Loader extends React.PureComponent<LoaderSizeMarginProps> {
  public static defaultProps: LoaderSizeMarginProps = sizeMarginDefaults(15);

  public style: StyleFunctionWithIndex = (i: number): PrecompiledCss => {
    let { margin } = this.props;
    let { value } = parseLengthAndUnit(margin!);
    let left: number = (i % 2 ? -1 : 1) * (26 + value);

    return css`
      opacity: 0.8;
      position: absolute;
      top: 0;
      left: ${left}px;
    `;
  };

  public ball: StyleFunction = (): PrecompiledCss => {
    const { color, size } = this.props;

    return css`
      background-color: ${color};
      width: ${cssValue(size!)};
      height: ${cssValue(size!)};
      border-radius: 100%;
    `;
  };

  public wrapper: StyleFunction = (): PrecompiledCss => {
    return css`
      ${this.ball()};
      display: inline-block;
      position: relative;
      animation-fill-mode: both;
      animation: ${rotate} 1s 0s infinite cubic-bezier(0.7, -0.13, 0.22, 0.86);
    `;
  };

  public long: StyleFunction = (): PrecompiledCss => css`
    ${this.ball()};
    ${this.style(1)};
  `;
  public short: StyleFunction = (): PrecompiledCss => css`
    ${this.ball()};
    ${this.style(2)};
  `;

  public render(): JSX.Element | null {
    const { loading, css } = this.props;

    return loading ? (
      <div css={[this.wrapper(), css]}>
        <div css={this.long()} />
        <div css={this.short()} />
      </div>
    ) : null;
  }
}

export default Loader;
