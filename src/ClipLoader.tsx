/** @jsx jsx */
import * as React from "react";
import { keyframes, css, jsx } from "@emotion/core";
import { Keyframes } from "@emotion/serialize";

import { sizeDefaults } from "./helpers/proptypes";
import { StyleFunction, PrecompiledCss, LoaderSizeProps } from "./interfaces";

const clip: Keyframes = keyframes`
  0% {transform: rotate(0deg) scale(1)}
  50% {transform: rotate(180deg) scale(0.8)}
  100% {transform: rotate(360deg) scale(1)}
`;

class Loader extends React.PureComponent<LoaderSizeProps> {
  public static defaultProps: LoaderSizeProps = sizeDefaults(35);

  public style: StyleFunction = (): PrecompiledCss => {
    const { size, sizeUnit, color } = this.props;

    return css`
      background: transparent !important;
      width: ${`${size}${sizeUnit}`};
      height: ${`${size}${sizeUnit}`};
      border-radius: 100%;
      border: 2px solid;
      border-color: ${color};
      border-bottom-color: transparent;
      display: inline-block;
      animation: ${clip} 0.75s 0s infinite linear;
      animation-fill-mode: both;
    `;
  };

  public render(): JSX.Element | null {
    const { loading, css } = this.props;

    return loading ? <div css={[this.style(), css]} /> : null;
  }
}

export default Loader;
