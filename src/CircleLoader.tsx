/** @jsx jsx */
import * as React from "react";
import { keyframes, css, jsx } from "@emotion/core";

import { sizeDefaults } from "./helpers";
import { Keyframes } from "@emotion/serialize";
import {
  StyleFunction,
  PrecompiledCss,
  LoaderSizeProps,
  StyleFunctionWithIndex
} from "./interfaces";

const circle: Keyframes = keyframes`
  0% {transform: rotate(0deg)}
  50% {transform: rotate(180deg)}
  100% {transform: rotate(360deg)}
`;

class Loader extends React.PureComponent<LoaderSizeProps> {
  public static defaultProps: LoaderSizeProps = sizeDefaults(50);

  public style: StyleFunctionWithIndex = (i: number): PrecompiledCss => {
    const { size, color, sizeUnit } = this.props;

    return css`
      position: absolute;
      height: ${`${size! * (1 - i / 10)}${sizeUnit}`};
      width: ${`${size! * (1 - i / 10)}${sizeUnit}`};
      border: 1px solid ${color};
      border-radius: 100%;
      transition: 2s;
      border-bottom: none;
      border-right: none;
      top: ${i * 0.7 * 2.5}%;
      left: ${i * 0.35 * 2.5}%;
      animation-fill-mode: "";
      animation: ${circle} 1s ${i * 0.2}s infinite linear;
    `;
  };

  public wrapper: StyleFunction = (): PrecompiledCss => {
    const { size, sizeUnit } = this.props;

    return css`
      position: relative;
      width: ${`${size}${sizeUnit}`};
      height: ${`${size}${sizeUnit}`};
    `;
  };

  public render(): JSX.Element | null {
    const { loading, css } = this.props;

    return loading ? (
      <div css={[this.wrapper(), css]}>
        <div css={this.style(0)} />
        <div css={this.style(1)} />
        <div css={this.style(2)} />
        <div css={this.style(3)} />
        <div css={this.style(4)} />
      </div>
    ) : null;
  }
}

export default Loader;
