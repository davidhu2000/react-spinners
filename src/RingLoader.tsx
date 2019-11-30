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

const right: Keyframes = keyframes`
  0% {transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg)}
  100% {transform: rotateX(180deg) rotateY(360deg) rotateZ(360deg)}
`;

const left: Keyframes = keyframes`
  0% {transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg)}
  100% {transform: rotateX(360deg) rotateY(180deg) rotateZ(360deg)}
`;

class Loader extends React.PureComponent<LoaderSizeProps> {
  public static defaultProps: LoaderSizeProps = sizeDefaults(60);

  public style: StyleFunctionWithIndex = (i: number): PrecompiledCss => {
    const { size, color } = this.props;
    let { value, unit } = parseLengthAndUnit(size!);

    return css`
      position: absolute;
      top: 0;
      left: 0;
      width: ${`${value}${unit}`};
      height: ${`${value}${unit}`};
      border: ${`${value! / 10}${unit}`} solid ${color};
      opacity: 0.4;
      border-radius: 100%;
      animation-fill-mode: forwards;
      perspective: 800px;
      animation: ${i === 1 ? right : left} 2s 0s infinite linear;
    `;
  };

  public wrapper: StyleFunction = (): PrecompiledCss => {
    const { size } = this.props;

    return css`
      width: ${cssValue(size!)};
      height: ${cssValue(size!)};
      position: relative;
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
