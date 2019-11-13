/** @jsx jsx */
import * as React from "react";
import { keyframes, css, jsx } from "@emotion/core";
import { Keyframes } from "@emotion/serialize";

import { sizeDefaults, parseLengthAndUnit, cssValue } from "./helpers";
import {
  StyleFunction,
  PrecompiledCss,
  LoaderSizeProps,
  StyleFunctionWithIndex
} from "./interfaces";

const rotate: Keyframes = keyframes`
  100% {transform: rotate(360deg)}
`;

const bounce: Keyframes = keyframes`
  0%, 100% {transform: scale(0)}
  50% {transform: scale(1.0)}
`;

class Loader extends React.PureComponent<LoaderSizeProps> {
  public static defaultProps: LoaderSizeProps = sizeDefaults(60);

  public style: StyleFunctionWithIndex = (i: number): PrecompiledCss => {
    const { size, color } = this.props;
    let { value, unit } = parseLengthAndUnit(size!);

    return css`
      position: absolute;
      top: ${i % 2 ? "0" : "auto"};
      bottom: ${i % 2 ? "auto" : "0"};
      height: ${`${value! / 2}${unit}`};
      width: ${`${value! / 2}${unit}`};
      background-color: ${color};
      border-radius: 100%;
      animation-fill-mode: forwards;
      animation: ${bounce} 2s ${i === 2 ? "-1s" : "0s"} infinite linear;
    `;
  };

  public wrapper: StyleFunction = (): PrecompiledCss => {
    const { size } = this.props;

    return css`
      position: relative;
      width: ${cssValue(size!)};
      height: ${cssValue(size!)};
      animation-fill-mode: forwards;
      animation: ${rotate} 2s 0s infinite linear;
    `;
  };

  public render(): JSX.Element | null {
    const { loading, css } = this.props;

    return loading ? (
      <div css={[this.wrapper(), css]}>
        <div css={this.style(1)} />
        <div css={this.style(2)} />
      </div>
    ) : null;
  }
}

export default Loader;
