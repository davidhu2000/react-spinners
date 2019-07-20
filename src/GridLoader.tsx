/** @jsx jsx */
import * as React from "react";
import { keyframes, css, jsx } from "@emotion/core";
import { Keyframes } from "@emotion/serialize";
import onlyUpdateForKeys from "recompose/onlyUpdateForKeys";

import { sizeMarginDefaults, sizeMarginKeys } from "./helpers";
import {
  StyleFunction,
  PrecompiledCss,
  LoaderSizeMarginProps,
  StyleFunctionWithIndex
} from "./interfaces";

const grid: Keyframes = keyframes`
  0% {transform: scale(1)}
  50% {transform: scale(0.5); opacity: 0.7}
  100% {transform: scale(1);opacity: 1}
`;

type RandomFunction = (top: number) => number;
const random: RandomFunction = (top: number): number => Math.random() * top;

class Loader extends React.PureComponent<LoaderSizeMarginProps> {
  public static defaultProps: LoaderSizeMarginProps = sizeMarginDefaults(15);

  public style: StyleFunctionWithIndex = (rand: number): PrecompiledCss => {
    const { color, size, sizeUnit, margin } = this.props;

    return css`
      display: inline-block;
      background-color: ${color};
      width: ${`${size}${sizeUnit}`};
      height: ${`${size}${sizeUnit}`};
      margin: ${margin};
      border-radius: 100%;
      animation-fill-mode: "both";
      animation: ${grid} ${rand / 100 + 0.6}s ${rand / 100 - 0.2}s infinite ease;
    `;
  };

  public wrapper: StyleFunction = (): PrecompiledCss => {
    const { size, sizeUnit, margin } = this.props;

    return css`
      width: ${`${parseFloat(size!.toString()) * 3 + parseFloat(margin!) * 6}${sizeUnit}`};
      font-size: 0;
    `;
  };

  public render(): JSX.Element | null {
    const { loading, css } = this.props;

    return loading ? (
      <div css={[this.wrapper(), css]}>
        <div css={this.style(random(100))} />
        <div css={this.style(random(100))} />
        <div css={this.style(random(100))} />
        <div css={this.style(random(100))} />
        <div css={this.style(random(100))} />
        <div css={this.style(random(100))} />
        <div css={this.style(random(100))} />
        <div css={this.style(random(100))} />
        <div css={this.style(random(100))} />
      </div>
    ) : null;
  }
}

const Component: React.ComponentClass<LoaderSizeMarginProps> = onlyUpdateForKeys(sizeMarginKeys)(
  Loader
);
Component.defaultProps = Loader.defaultProps;
export default Component;
