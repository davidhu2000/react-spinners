/** @jsxImportSource @emotion/react */
import * as React from "react";
import { keyframes, css, SerializedStyles } from "@emotion/react";

import { sizeDefaults, parseLengthAndUnit } from "./helpers";
import { LoaderSizeProps } from "./interfaces";

// 1.5 4.5 7.5
const distance = [1, 3, 5];

const propagate = [
  keyframes`
      25% {transform: translateX(-${distance[0]}rem) scale(0.75)}
      50% {transform: translateX(-${distance[1]}rem) scale(0.6)}
      75% {transform: translateX(-${distance[2]}rem) scale(0.5)}
      95% {transform: translateX(0rem) scale(1)}
    `,
  keyframes`
      25% {transform: translateX(-${distance[0]}rem) scale(0.75)}
      50% {transform: translateX(-${distance[1]}rem) scale(0.6)}
      75% {transform: translateX(-${distance[1]}rem) scale(0.6)}
      95% {transform: translateX(0rem) scale(1)}
    `,
  keyframes`
      25% {transform: translateX(-${distance[0]}rem) scale(0.75)}
      75% {transform: translateX(-${distance[0]}rem) scale(0.75)}
      95% {transform: translateX(0rem) scale(1)}
    `,
  keyframes`
      25% {transform: translateX(${distance[0]}rem) scale(0.75)}
      75% {transform: translateX(${distance[0]}rem) scale(0.75)}
      95% {transform: translateX(0rem) scale(1)}
    `,
  keyframes`
      25% {transform: translateX(${distance[0]}rem) scale(0.75)}
      50% {transform: translateX(${distance[1]}rem) scale(0.6)}
      75% {transform: translateX(${distance[1]}rem) scale(0.6)}
      95% {transform: translateX(0rem) scale(1)}
    `,
  keyframes`
      25% {transform: translateX(${distance[0]}rem) scale(0.75)}
      50% {transform: translateX(${distance[1]}rem) scale(0.6)}
      75% {transform: translateX(${distance[2]}rem) scale(0.5)}
      95% {transform: translateX(0rem) scale(1)}
    `
];

class Loader extends React.PureComponent<Required<LoaderSizeProps>> {
  public static defaultProps = sizeDefaults(15);

  public style = (i: number): SerializedStyles => {
    const { size, color, speedMultiplier } = this.props;
    const { value, unit } = parseLengthAndUnit(size);

    return css`
      position: absolute;
      font-size: ${`${value / 3}${unit}`};
      width: ${`${value}${unit}`};
      height: ${`${value}${unit}`};
      background: ${color};
      border-radius: 50%;
      animation: ${propagate[i]} ${1.5 / speedMultiplier}s infinite;
      animation-fill-mode: forwards;
    `;
  };

  public wrapper = (): SerializedStyles => {
    return css`
      position: relative;
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
        <span css={this.style(5)} />
      </span>
    ) : null;
  }
}

export default Loader;
