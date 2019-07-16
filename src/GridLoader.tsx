/** @jsx jsx */
import React from "react";
import { keyframes, css, jsx } from "@emotion/core";
import onlyUpdateForKeys from "recompose/onlyUpdateForKeys";
import { sizeMarginDefaults, sizeMarginKeys } from "./helpers";
import { Keyframes } from "@emotion/serialize";
import { StyleFunction, PrecompiledCss, LoaderSizeMarginProps } from "./interfaces";

const grid: Keyframes = keyframes`
  0% {transform: scale(1)}
  50% {transform: scale(0.5); opacity: 0.7}
  100% {transform: scale(1);opacity: 1}
`;

const random = (top: number) => Math.random() * top;

class Loader extends React.PureComponent<LoaderSizeMarginProps> {
  static defaultProps: LoaderSizeMarginProps = sizeMarginDefaults(15);

  style: StyleFunction = (rand: number): PrecompiledCss => {
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

  wrapper: StyleFunction = (): PrecompiledCss => {
    const { size, sizeUnit, margin } = this.props;

    return css`
      width: ${`${parseFloat(size!.toString()) * 3 + parseFloat(margin!) * 6}${sizeUnit}`};
      font-size: 0;
    `;
  };

  render(): JSX.Element | null {
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

const Component = onlyUpdateForKeys(sizeMarginKeys)(Loader);
Component.defaultProps = Loader.defaultProps;
export default Component;
