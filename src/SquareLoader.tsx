/** @jsx jsx */
import * as React from "react";
import { keyframes, css, jsx } from "@emotion/core";
import { Keyframes } from "@emotion/serialize";

import { sizeDefaults } from "./helpers";
import { StyleFunction, PrecompiledCss, LoaderSizeProps } from "./interfaces";

const square: Keyframes = keyframes`
  25% {transform: rotateX(180deg) rotateY(0)}
  50% {transform: rotateX(180deg) rotateY(180deg)}
  75% {transform: rotateX(0) rotateY(180deg)}
  100% {transform: rotateX(0) rotateY(0)}
`;

class Loader extends React.PureComponent<LoaderSizeProps> {
  public static defaultProps: LoaderSizeProps = sizeDefaults(50);

  public style: StyleFunction = (): PrecompiledCss => {
    const { color, size, sizeUnit } = this.props;

    return css`
      background-color: ${color};
      width: ${`${size}${sizeUnit}`};
      height: ${`${size}${sizeUnit}`};
      display: inline-block;
      animation: ${square} 3s 0s infinite cubic-bezier(0.09, 0.57, 0.49, 0.9);
      animation-fill-mode: both;
    `;
  };

  public render(): JSX.Element | null {
    const { loading, css } = this.props;

    return loading ? <div css={[this.style(), css]} /> : null;
  }
}

export default Loader;
