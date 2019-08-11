/** @jsx jsx */
import * as React from "react";
import { keyframes, css, jsx } from "@emotion/core";
import { Keyframes } from "@emotion/serialize";

import { sizeDefaults } from "./helpers";
import { StyleFunction, PrecompiledCss, LoaderSizeProps, CalcFunction } from "./interfaces";

type BallStyleFunction = (size: number) => PrecompiledCss;

const moon: Keyframes = keyframes`
  100% {transform: rotate(360deg)}
`;

class Loader extends React.PureComponent<LoaderSizeProps> {
  public static defaultProps: LoaderSizeProps = sizeDefaults(60);

  public moonSize: CalcFunction<number> = (): number => {
    const { size } = this.props;

    return size! / 7;
  };

  public ballStyle: BallStyleFunction = (size: number): PrecompiledCss => {
    const { sizeUnit } = this.props;

    return css`
      width: ${`${size}${sizeUnit}`};
      height: ${`${size}${sizeUnit}`};
      border-radius: 100%;
    `;
  };

  public wrapper: StyleFunction = (): PrecompiledCss => {
    const { size, sizeUnit } = this.props;

    return css`
      position: relative;
      width: ${`${size! + this.moonSize() * 2}${sizeUnit}`};
      height: ${`${size! + this.moonSize() * 2}${sizeUnit}`};
      animation: ${moon} 0.6s 0s infinite linear;
      animation-fill-mode: forwards;
    `;
  };

  public ball: CalcFunction<PrecompiledCss> = (): PrecompiledCss => {
    const { color, size, sizeUnit } = this.props;

    return css`
      ${this.ballStyle(this.moonSize())};
      background-color: ${color};
      opacity: 0.8;
      position: absolute;
      top: ${`${size! / 2 - this.moonSize() / 2}${sizeUnit}`};
      animation: ${moon} 0.6s 0s infinite linear;
      animation-fill-mode: forwards;
    `;
  };

  public circle: CalcFunction<PrecompiledCss> = (): PrecompiledCss => {
    const { size, color } = this.props;

    return css`
      ${this.ballStyle(size!)};
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
