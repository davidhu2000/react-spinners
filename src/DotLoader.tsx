/** @jsx jsx */
import * as React from "react";
import { keyframes, css, jsx } from "@emotion/core";
import { Keyframes } from "@emotion/serialize";
import onlyUpdateForKeys from "recompose/onlyUpdateForKeys";

import { sizeDefaults, sizeKeys } from "./helpers";
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
    const { size, sizeUnit, color } = this.props;

    return css`
      position: absolute;
      top: ${i % 2 ? "0" : "auto"};
      bottom: ${i % 2 ? "auto" : "0"};
      height: ${`${size! / 2}${sizeUnit}`};
      width: ${`${size! / 2}${sizeUnit}`};
      background-color: ${color};
      border-radius: 100%;
      animation-fill-mode: forwards;
      animation: ${bounce} 2s ${i === 2 ? "-1s" : "0s"} infinite linear;
    `;
  };

  public wrapper: StyleFunction = (): PrecompiledCss => {
    const { size, sizeUnit } = this.props;

    return css`
      position: relative;
      width: ${`${size}${sizeUnit}`};
      height: ${`${size}${sizeUnit}`};
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

const Component: React.ComponentClass<LoaderSizeProps> = onlyUpdateForKeys(sizeKeys)(Loader);
Component.defaultProps = Loader.defaultProps;
export default Component;
