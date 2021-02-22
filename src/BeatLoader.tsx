/** @jsx jsx */
import * as React from "react";
import { keyframes, css, jsx, SerializedStyles } from "@emotion/react";

import { sizeMarginDefaults, cssValue } from "./helpers";
import { LoaderSizeMarginProps } from "./interfaces";

const beat = keyframes`
  50% {transform: scale(0.75);opacity: 0.2}
  100% {transform: scale(1);opacity: 1}
`;

class Loader extends React.PureComponent<Required<LoaderSizeMarginProps>> {
  public static defaultProps = sizeMarginDefaults(15);

  public style = (i: number): SerializedStyles => {
    const { color, size, margin, speedMultiplier } = this.props;

    return css`
      display: inline-block;
      background-color: ${color};
      width: ${cssValue(size)};
      height: ${cssValue(size)};
      margin: ${cssValue(margin)};
      border-radius: 100%;
      animation: ${beat} ${0.7 / speedMultiplier}s ${i % 2 ? "0s" : `${0.35 / speedMultiplier}s`}
        infinite linear;
      animation-fill-mode: both;
    `;
  };

  public render(): JSX.Element | null {
    const { loading, css } = this.props;

    return loading ? (
      <span css={[css]}>
        <span css={this.style(1)} />
        <span css={this.style(2)} />
        <span css={this.style(3)} />
      </span>
    ) : null;
  }
}

export default Loader;
