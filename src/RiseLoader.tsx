/** @jsx jsx */
import * as React from "react";
import { keyframes, css, jsx } from "@emotion/core";
import { Keyframes, SerializedStyles } from "@emotion/serialize";

import { sizeMarginDefaults, cssValue } from "./helpers";
import { LoaderSizeMarginProps } from "./interfaces";

const riseAmount = 30;

const even: Keyframes = keyframes`
  0% {transform: scale(1.1)}
  25% {transform: translateY(-${riseAmount}px)}
  50% {transform: scale(0.4)}
  75% {transform: translateY(${riseAmount}px)}
  100% {transform: translateY(0) scale(1.0)}
`;

const odd: Keyframes = keyframes`
  0% {transform: scale(0.4)}
  25% {transform: translateY(${riseAmount}px)}
  50% {transform: scale(1.1)}
  75% {transform: translateY(${-riseAmount}px)}
  100% {transform: translateY(0) scale(0.75)}
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
      animation: ${i % 2 === 0 ? even : odd} 1s 0s infinite cubic-bezier(0.15, 0.46, 0.9, 0.6);
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
        <div css={this.style(4)} />
        <div css={this.style(5)} />
      </div>
    ) : null;
  }
}

export default Loader;
