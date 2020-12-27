/** @jsx jsx */
import * as React from "react";
import { keyframes, css, jsx, SerializedStyles } from "@emotion/core";

import { sizeDefaults, cssValue } from "./helpers";
import { LoaderSizeProps, LengthType } from "./interfaces";

const skew = keyframes`
  25% {transform: perspective(100px) rotateX(180deg) rotateY(0)}
  50% {transform: perspective(100px) rotateX(180deg) rotateY(180deg)}
  75% {transform: perspective(100px) rotateX(0) rotateY(180deg)}
  100% {transform: perspective(100px) rotateX(0) rotateY(0)}
`;

class Loader extends React.PureComponent<LoaderSizeProps> {
  public static defaultProps = sizeDefaults(20);

  public getSize = (): LengthType => {
    return this.props.size || Loader.defaultProps.size;
  };

  public style = (): SerializedStyles => {
    const { color } = this.props;

    return css`
      width: 0;
      height: 0;
      border-left: ${cssValue(this.getSize())} solid transparent;
      border-right: ${cssValue(this.getSize())} solid transparent;
      border-bottom: ${cssValue(this.getSize())} solid ${color};
      display: inline-block;
      animation: ${skew} 3s 0s infinite cubic-bezier(0.09, 0.57, 0.49, 0.9);
      animation-fill-mode: both;
    `;
  };

  public render(): JSX.Element | null {
    const { loading, css } = this.props;

    return loading ? <span css={[this.style(), css]} /> : null;
  }
}

export default Loader;
