/** @jsx jsx */
import React from "react";
import { keyframes, css, jsx } from "@emotion/core";
import onlyUpdateForKeys from "recompose/onlyUpdateForKeys";
import { sizeDefaults, sizeKeys } from "./helpers";
import { Keyframes } from "@emotion/serialize";
import { StyleFunction, PrecompiledCss, LoaderSizeProps } from "./interfaces";

const bounce: Keyframes = keyframes`
  0%, 100% {transform: scale(0)} 
  50% {transform: scale(1.0)}
`;

class Loader extends React.PureComponent<LoaderSizeProps> {
  static defaultProps = sizeDefaults(60);

  style: StyleFunction = (i: number): PrecompiledCss => {
    const { size, color, sizeUnit } = this.props;

    return css`
      position: absolute;
      height: ${`${size}${sizeUnit}`};
      width: ${`${size}${sizeUnit}`};
      background-color: ${color};
      border-radius: 100%;
      opacity: 0.6;
      top: 0;
      left: 0;
      animation-fill-mode: both;
      animation: ${bounce} 2.1s ${i === 1 ? "1s" : "0s"} infinite ease-in-out;
    `;
  };

  wrapper: StyleFunction = (): PrecompiledCss => {
    const { size, sizeUnit } = this.props;

    return css`
      position: relative;
      width: ${`${size}${sizeUnit}`};
      height: ${`${size}${sizeUnit}`};
    `;
  };

  render(): JSX.Element | null {
    const { loading, css } = this.props;

    return loading ? (
      <div css={[this.wrapper(), css]}>
        <div css={this.style(1)} />
        <div css={this.style(2)} />
      </div>
    ) : null;
  }
}

const Component = onlyUpdateForKeys(sizeKeys)(Loader);
Component.defaultProps = Loader.defaultProps;
export default Component;
