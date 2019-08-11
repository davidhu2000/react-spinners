/** @jsx jsx */
import * as React from "react";
import { keyframes, css, jsx } from "@emotion/core";
import { Keyframes } from "@emotion/serialize";

import { sizeMarginDefaults } from "./helpers";
import { LoaderSizeMarginProps, PrecompiledCss, StyleFunctionWithIndex } from "./interfaces";

const beat: Keyframes = keyframes`
  50% {transform: scale(0.75);opacity: 0.2}
  100% {transform: scale(1);opacity: 1}
`;

class Loader extends React.PureComponent<LoaderSizeMarginProps> {
  public static defaultProps: LoaderSizeMarginProps = sizeMarginDefaults(15);
  public style: StyleFunctionWithIndex = (i: number): PrecompiledCss => {
    const { color, size, sizeUnit, margin } = this.props;

    return css`
      display: inline-block;
      background-color: ${color};
      width: ${`${size}${sizeUnit}`};
      height: ${`${size}${sizeUnit}`};
      margin: ${margin};
      border-radius: 100%;
      animation: ${beat} 0.7s ${i % 2 ? "0s" : "0.35s"} infinite linear;
      animation-fill-mode: both;
    `;
  };

  public render(): JSX.Element | null {
    const { loading, css } = this.props;

    return loading ? (
      <div css={[css]}>
        <div css={this.style(1)} />
        <div css={this.style(2)} />
        <div css={this.style(3)} />
      </div>
    ) : null;
  }
}

export default Loader;
