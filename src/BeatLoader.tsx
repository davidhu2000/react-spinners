/** @jsx jsx */
import * as React from "react";
import { keyframes, css, jsx, SerializedStyles } from "@emotion/core";
import { Keyframes } from "@emotion/serialize";

import { sizeMarginDefaults, cssValue } from "./helpers";
import { LoaderSizeMarginProps } from "./interfaces";

const beat: Keyframes = keyframes`
  50% {transform: scale(0.75);opacity: 0.2}
  100% {transform: scale(1);opacity: 1}
`;

class Loader extends React.PureComponent<LoaderSizeMarginProps> {
  public static defaultProps = sizeMarginDefaults(15);

  public style = (i: number): SerializedStyles => {
    const { color, size, margin } = this.props;

    return css`
      display: inline-block;
      background-color: ${color};
      width: ${cssValue(size || Loader.defaultProps.size)};
      height: ${cssValue(size || Loader.defaultProps.size)};
      margin: ${cssValue(margin || Loader.defaultProps.margin)};
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
