/** @jsx jsx */
import * as React from "react";
import { keyframes, css, jsx, SerializedStyles } from "@emotion/core";

import { sizeMarginDefaults, cssValue } from "./helpers";
import { LoaderSizeMarginProps } from "./interfaces";

const pulse = keyframes`
  0% {transform: scale(1);opacity: 1}
  45% {transform: scale(0.1);opacity: 0.7}
  80% {transform: scale(1);opacity: 1}
`;

class Loader extends React.PureComponent<LoaderSizeMarginProps> {
  public static defaultProps = sizeMarginDefaults(15);

  public style = (i: number): SerializedStyles => {
    const { color, size, margin } = this.props;

    return css`
      background-color: ${color};
      width: ${cssValue(size || Loader.defaultProps.size)};
      height: ${cssValue(size || Loader.defaultProps.size)};
      margin: ${cssValue(margin || Loader.defaultProps.margin)};
      border-radius: 100%;
      display: inline-block;
      animation: ${pulse} 0.75s ${i * 0.12}s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
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
