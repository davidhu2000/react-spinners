/** @jsx jsx */
import * as React from "react";
import { keyframes, css, jsx } from "@emotion/core";
import { Keyframes } from "@emotion/serialize";
import onlyUpdateForKeys from "recompose/onlyUpdateForKeys";

import { sizeDefaults, sizeKeys } from "./helpers";
import { StyleFunction, PrecompiledCss, LoaderSizeProps } from "./interfaces";

const skew: Keyframes = keyframes`
  25% {transform: perspective(100px) rotateX(180deg) rotateY(0)}
  50% {transform: perspective(100px) rotateX(180deg) rotateY(180deg)}
  75% {transform: perspective(100px) rotateX(0) rotateY(180deg)}
  100% {transform: perspective(100px) rotateX(0) rotateY(0)}
`;

class Loader extends React.PureComponent<LoaderSizeProps> {
  public static defaultProps: LoaderSizeProps = sizeDefaults(20);

  public style: StyleFunction = (): PrecompiledCss => {
    const { size, sizeUnit, color } = this.props;

    return css`
      width: 0;
      height: 0;
      border-left: ${`${size}${sizeUnit}`} solid transparent;
      border-right: ${`${size}${sizeUnit}`} solid transparent;
      border-bottom: ${`${size}${sizeUnit}`} solid ${color};
      display: inline-block;
      animation: ${skew} 3s 0s infinite cubic-bezier(0.09, 0.57, 0.49, 0.9);
      animation-fill-mode: both;
    `;
  };

  public render(): JSX.Element | null {
    const { loading, css } = this.props;

    return loading ? <div css={[this.style(), css]} /> : null;
  }
}

const Component: React.ComponentClass<LoaderSizeProps> = onlyUpdateForKeys(sizeKeys)(Loader);
Component.defaultProps = Loader.defaultProps;
export default Component;
