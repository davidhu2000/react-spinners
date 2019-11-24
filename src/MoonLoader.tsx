/** @jsx jsx */
import * as React from "react";
import { keyframes, css, jsx } from "@emotion/core";
import { Keyframes } from "@emotion/serialize";

import { sizeDefaults, parseLengthAndUnit, cssValue } from "./helpers";
import { StyleFunction, PrecompiledCss, LoaderSizeProps, CalcFunction } from "./interfaces";

type BallStyleFunction = (size: number) => PrecompiledCss;

const moon: Keyframes = keyframes`
  100% {transform: rotate(360deg)}
`;

class Loader extends React.PureComponent<LoaderSizeProps> {
  public static defaultProps: LoaderSizeProps = sizeDefaults(60);

  public moonSize: CalcFunction<number> = (): number => {
    const { size } = this.props;
    let { value } = parseLengthAndUnit(size!);

    return value / 7;
  };

  public ballStyle: BallStyleFunction = (size: number): PrecompiledCss => {
    return css`
      width: ${cssValue(size)};
      height: ${cssValue(size)};
      border-radius: 100%;
    `;
  };

  public wrapper: StyleFunction = (): PrecompiledCss => {
    const { size } = this.props;
    let { value, unit } = parseLengthAndUnit(size!);

    return css`
      position: relative;
      width: ${`${value + this.moonSize() * 2}${unit}`};
      height: ${`${value + this.moonSize() * 2}${unit}`};
      animation: ${moon} 0.6s 0s infinite linear;
      animation-fill-mode: forwards;
    `;
  };

  public ball: CalcFunction<PrecompiledCss> = (): PrecompiledCss => {
    const { color, size } = this.props;
    let { value, unit } = parseLengthAndUnit(size!);

    return css`
      ${this.ballStyle(this.moonSize())};
      background-color: ${color};
      opacity: 0.8;
      position: absolute;
      top: ${`${value / 2 - this.moonSize() / 2}${unit}`};
      animation: ${moon} 0.6s 0s infinite linear;
      animation-fill-mode: forwards;
    `;
  };

  public circle: CalcFunction<PrecompiledCss> = (): PrecompiledCss => {
    const { size, color } = this.props;
    let { value } = parseLengthAndUnit(size!);

    return css`
      ${this.ballStyle(value)};
      border: ${this.moonSize()}px solid ${color};
      opacity: 0.1;
    `;
  };

  public render(): JSX.Element | null {
    const { loading, css } = this.props;

    return loading ? (
      <div css={[this.wrapper(), css]}>
        <div css={this.ball()} />
        <div css={this.circle()} />
      </div>
    ) : null;
  }
}

export default Loader;
