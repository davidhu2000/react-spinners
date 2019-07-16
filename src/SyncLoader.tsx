/** @jsx jsx */
import React from "react";
import { keyframes, css, jsx } from "@emotion/core";
import onlyUpdateForKeys from "recompose/onlyUpdateForKeys";
import { sizeMarginDefaults, sizeMarginKeys } from "./helpers/proptypes";
import { Keyframes } from "@emotion/serialize";
import { PrecompiledCss, LoaderSizeMarginProps, StyleFunctionWithIndex } from "./interfaces";

const sync: Keyframes = keyframes`
  33% {transform: translateY(10px)}
  66% {transform: translateY(-10px)}
  100% {transform: translateY(0)}
`;

class Loader extends React.PureComponent<LoaderSizeMarginProps> {
  static defaultProps: LoaderSizeMarginProps = sizeMarginDefaults(15);

  style: StyleFunctionWithIndex = (i: number): PrecompiledCss => {
    const { color, size, sizeUnit, margin } = this.props;

    return css`
      background-color: ${color};
      width: ${`${size}${sizeUnit}`};
      height: ${`${size}${sizeUnit}`};
      margin: ${margin};
      border-radius: 100%;
      display: inline-block;
      animation: ${sync} 0.6s ${i * 0.07}s infinite ease-in-out;
      animation-fill-mode: both;
    `;
  };

  render(): JSX.Element | null {
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

const Component = onlyUpdateForKeys(sizeMarginKeys)(Loader);
Component.defaultProps = Loader.defaultProps;
export default Component;
