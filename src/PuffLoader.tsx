/** @jsx jsx */
import * as React from "react";
import { keyframes, css, jsx } from "@emotion/core";
import { Keyframes } from "@emotion/serialize";

import { sizeDefaults, cssValue } from "./helpers";
import {
  StyleFunction,
  PrecompiledCss,
  LoaderSizeProps,
  StyleFunctionWithIndex
} from "./interfaces";

const puff: Keyframes[] = [keyframes`
  0%  {transform: scale(0)}
  100% {transform: scale(1.0)}
`,
 keyframes`
  0%  {opacity: 1}
  100% {opacity: 0}
`];


class Loader extends React.PureComponent<LoaderSizeProps> {
  public static defaultProps: Required<LoaderSizeProps> = sizeDefaults(60);

  public style: StyleFunctionWithIndex = (i: number): PrecompiledCss => {
    const { color, size } = this.props;

    return css`
      position: absolute;
      height: ${cssValue(size!)};
      width: ${cssValue(size!)};
      border: thick solid ${color};
      border-radius: 50%;
      opacity: 1;
      top: 0;
      left: 0;
      animation-fill-mode: both;
      animation: ${puff[0]}, ${puff[1]};
      animation-duration: 2s;
      animation-iteration-count: infinite;
      animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1), cubic-bezier(0.3, 0.61, 0.355, 1);
      animation-delay: ${i === 1 ? "-1s" : "0s"};
    `;
  };

  public wrapper: StyleFunction = (): PrecompiledCss => {
    const { size } = this.props;

    return css`
      position: relative;
      width: ${cssValue(size!)};
      height: ${cssValue(size!)};
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
