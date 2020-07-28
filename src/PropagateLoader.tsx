/** @jsx jsx */
import * as React from "react";
import { keyframes, css, jsx, SerializedStyles } from "@emotion/core";
import { Keyframes } from "@emotion/serialize";

import { sizeDefaults, parseLengthAndUnit } from "./helpers";
import { LoaderSizeProps } from "./interfaces";

// 1.5 4.5 7.5
const distance: number[] = [1, 3, 5];

const propagate: Keyframes[] = [
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

class Loader extends React.PureComponent<LoaderSizeProps> {
  public static defaultProps = sizeDefaults(15);

  public style = (i: number): SerializedStyles => {
    const { size, color } = this.props;
    const { value, unit } = parseLengthAndUnit(size || Loader.defaultProps.size);

    return css`
      position: absolute;
      font-size: ${`${value / 3}${unit}`};
      width: ${`${value}${unit}`};
      height: ${`${value}${unit}`};
      background: ${color};
      border-radius: 50%;
      animation: ${propagate[i]} 1.5s infinite;
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
      <div css={[this.wrapper(), css]}>
        <div css={this.style(0)} />
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
