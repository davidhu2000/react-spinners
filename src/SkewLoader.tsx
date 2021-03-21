/** @jsx jsx */
import * as React from "react";
import { keyframes, css, jsx, SerializedStyles } from "@emotion/react";

import { sizeDefaults, cssValue } from "./helpers";
import { LoaderSizeProps } from "./interfaces";

const skew = keyframes`
  25% {transform: perspective(100px) rotateX(180deg) rotateY(0)}
  50% {transform: perspective(100px) rotateX(180deg) rotateY(180deg)}
  75% {transform: perspective(100px) rotateX(0) rotateY(180deg)}
  100% {transform: perspective(100px) rotateX(0) rotateY(0)}
`;

class Loader extends React.PureComponent<Required<LoaderSizeProps>> {
  public static defaultProps = sizeDefaults(20);

  public style = (): SerializedStyles => {
    const { color, speedMultiplier, size } = this.props;

    return css`
      width: 0;
      height: 0;
      border-left: ${cssValue(size)} solid transparent;
      border-right: ${cssValue(size)} solid transparent;
      border-bottom: ${cssValue(size)} solid ${color};
      display: inline-block;
      animation: ${skew} ${3 / speedMultiplier}s 0s infinite cubic-bezier(0.09, 0.57, 0.49, 0.9);
      animation-fill-mode: both;
    `;
  };

  public render(): JSX.Element | null {
    const { loading, css } = this.props;

    return loading ? <span css={[this.style(), css]} /> : null;
  }
}

export default Loader;
