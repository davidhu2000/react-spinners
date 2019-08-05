/** @jsx jsx */
import * as React from "react";
import { keyframes, css, jsx } from "@emotion/core";
import { Keyframes } from "@emotion/serialize";
import onlyUpdateForKeys from "recompose/onlyUpdateForKeys";

import { sizeMarginDefaults, sizeMarginKeys } from "./helpers";
import { PrecompiledCss, LoaderSizeMarginProps, StyleFunctionWithIndex } from "./interfaces";

const riseAmount: number = 30;

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
  public static defaultProps: LoaderSizeMarginProps = sizeMarginDefaults(15);

  public style: StyleFunctionWithIndex = (i: number): PrecompiledCss => {
    const { color, size, sizeUnit, margin } = this.props;

    return css`
      background-color: ${color};
      width: ${`${size}${sizeUnit}`};
      height: ${`${size}${sizeUnit}`};
      margin: ${`${margin}`};
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

const Component: React.ComponentClass<LoaderSizeMarginProps> = onlyUpdateForKeys(sizeMarginKeys)(
  Loader
);
Component.defaultProps = Loader.defaultProps;
export default Component;
