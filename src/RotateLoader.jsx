/** @jsx jsx */
import React from "react";
import { keyframes, css, jsx } from "@emotion/core";
import onlyUpdateForKeys from "recompose/onlyUpdateForKeys";
import { sizeMarginProps, sizeMarginDefaults, sizeMarginKeys } from "./helpers";

const rotate = keyframes`
  0% {transform: rotate(0deg)}
  50% {transform: rotate(180deg)}
  100% {transform: rotate(360deg)}
`;

class Loader extends React.Component {
  style = (i) => css`
    opacity: 0.8;
    position: absolute;
    top: 0;
    left: ${i % 2 ? -28 : 25}px;
  `;

  ball = () => {
    const { color, size, sizeUnit, margin } = this.props;

    return css`
      background-color: ${color};
      width: ${`${size}${sizeUnit}`};
      height: ${`${size}${sizeUnit}`};
      margin: ${margin};
      border-radius: 100%;
    `;
  };

  wrapper = () => {
    return css`
      ${this.ball()};
      display: inline-block;
      position: relative;
      animation-fill-mode: both;
      animation: ${rotate} 1s 0s infinite cubic-bezier(0.7, -0.13, 0.22, 0.86);
    `;
  };

  long = () => css`
    ${this.ball()};
    ${this.style(1)};
  `;
  short = () => css`
    ${this.ball()};
    ${this.style(2)};
  `;

  render() {
    const { loading, css } = this.props;

    return loading ? (
      <div css={[this.wrapper(), css]}>
        <div css={this.long()} />
        <div css={this.short()} />
      </div>
    ) : null;
  }
}

Loader.propTypes = sizeMarginProps;

Loader.defaultProps = sizeMarginDefaults(15);

const Component = onlyUpdateForKeys(sizeMarginKeys)(Loader);
Component.defaultProps = Loader.defaultProps;
export default Component;
