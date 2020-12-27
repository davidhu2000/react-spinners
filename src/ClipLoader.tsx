/** @jsx jsx */
import * as React from "react";
import { keyframes, css, jsx, SerializedStyles } from "@emotion/core";

import { sizeDefaults, cssValue } from "./helpers";
import { LoaderSizeProps } from "./interfaces";

const clip = keyframes`
  0% {transform: rotate(0deg) scale(1)}
  50% {transform: rotate(180deg) scale(0.8)}
  100% {transform: rotate(360deg) scale(1)}
`;

class Loader extends React.PureComponent<LoaderSizeProps> {
  public static defaultProps = sizeDefaults(35);

  public style = (): SerializedStyles => {
    const { size, color } = this.props;

    return css`
      background: transparent !important;
      width: ${cssValue(size || Loader.defaultProps.size)};
      height: ${cssValue(size || Loader.defaultProps.size)};
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

    return loading ? <span css={[this.style(), css]} /> : null;
  }
}

export default Loader;
