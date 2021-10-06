/** @jsxImportSource @emotion/react */
import * as React from "react";
import { keyframes, css, SerializedStyles } from "@emotion/react";

import { sizeDefaults, cssValue, parseLengthAndUnit } from "./helpers";
import { LoaderSizeProps } from "./interfaces";

const circle = keyframes`
  0% {transform: rotate(0deg)}
  50% {transform: rotate(180deg)}
  100% {transform: rotate(360deg)}
`;

class Loader extends React.PureComponent<Required<LoaderSizeProps>> {
  public static defaultProps = sizeDefaults(50);

  public style = (i: number): SerializedStyles => {
    const { size, color, speedMultiplier } = this.props;
    const { value, unit } = parseLengthAndUnit(size);

    return css`
      position: absolute;
      height: ${`${value * (1 - i / 10)}${unit}`};
      width: ${`${value * (1 - i / 10)}${unit}`};
      border: 1px solid ${color};
      border-radius: 100%;
      transition: 2s;
      border-bottom: none;
      border-right: none;
      top: ${i * 0.7 * 2.5}%;
      left: ${i * 0.35 * 2.5}%;
      animation-fill-mode: "";
      animation: ${circle} ${1 / speedMultiplier}s ${(i * 0.2) / speedMultiplier}s infinite linear;
    `;
  };

  public wrapper = (): SerializedStyles => {
    const { size } = this.props;

    return css`
      position: relative;
      width: ${cssValue(size)};
      height: ${cssValue(size)};
    `;
  };

  public render(): JSX.Element | null {
    const { loading, css } = this.props;

    return loading ? (
      <span css={[this.wrapper(), css]}>
        <span css={this.style(0)} />
        <span css={this.style(1)} />
        <span css={this.style(2)} />
        <span css={this.style(3)} />
        <span css={this.style(4)} />
      </span>
    ) : null;
  }
}

export default Loader;
