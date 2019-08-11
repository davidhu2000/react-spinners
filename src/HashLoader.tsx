/** @jsx jsx */
import * as React from "react";
import { keyframes, css, jsx } from "@emotion/core";
import { Keyframes } from "@emotion/serialize";

import { calculateRgba, sizeDefaults } from "./helpers/index";
import {
  StyleFunction,
  PrecompiledCss,
  LoaderSizeProps,
  CalcFunction,
  StyleFunctionWithIndex
} from "./interfaces";

class Loader extends React.PureComponent<LoaderSizeProps> {
  public static defaultProps: LoaderSizeProps = sizeDefaults(50);

  public thickness: CalcFunction<number> = (): number => {
    const { size } = this.props;

    return size! / 5;
  };

  public lat: CalcFunction<number> = (): number => {
    const { size } = this.props;

    return (size! - this.thickness()) / 2;
  };

  public offset: CalcFunction<number> = (): number => this.lat() - this.thickness();

  public color: CalcFunction<string> = (): string => {
    const { color } = this.props;

    return calculateRgba(color!, 0.75);
  };

  public before: CalcFunction<Keyframes> = (): Keyframes => {
    const { size, sizeUnit } = this.props;

    const color: string = this.color();
    const lat: number = this.lat();
    const thickness: number = this.thickness();
    const offset: number = this.offset();

    return keyframes`
      0% {width: ${thickness}px;box-shadow: ${lat}px ${-offset}px ${color}, ${-lat}px ${offset}px ${color}}
      35% {width: ${`${size}${sizeUnit}`};box-shadow: 0 ${-offset}px ${color}, 0 ${offset}px ${color}}
      70% {width: ${thickness}px;box-shadow: ${-lat}px ${-offset}px ${color}, ${lat}px ${offset}px ${color}}
      100% {box-shadow: ${lat}px ${-offset}px ${color}, ${-lat}px ${offset}px ${color}}
    `;
  };

  public after: CalcFunction<Keyframes> = (): Keyframes => {
    const { size, sizeUnit } = this.props;

    const color: string = this.color();
    const lat: number = this.lat();
    const thickness: number = this.thickness();
    const offset: number = this.offset();

    return keyframes`
      0% {height: ${thickness}px;box-shadow: ${offset}px ${lat}px ${color}, ${-offset}px ${-lat}px ${color}}
      35% {height: ${`${size}${sizeUnit}`};box-shadow: ${offset}px 0 ${color}, ${-offset}px 0 ${color}}
      70% {height: ${thickness}px;box-shadow: ${offset}px ${-lat}px ${color}, ${-offset}px ${lat}px ${color}}
      100% {box-shadow: ${offset}px ${lat}px ${color}, ${-offset}px ${-lat}px ${color}}
    `;
  };

  public style: StyleFunctionWithIndex = (i: number): PrecompiledCss => {
    const { size, sizeUnit } = this.props;

    return css`
      position: absolute;
      content: "";
      top: 50%;
      left: 50%;
      display: block;
      width: ${`${size! / 5}${sizeUnit}`};
      height: ${`${size! / 5}${sizeUnit}`};
      border-radius: ${`${size! / 10}${sizeUnit}`};
      transform: translate(-50%, -50%);
      animation-fill-mode: none;
      animation: ${i === 1 ? this.before() : this.after()} 2s infinite;
    `;
  };

  public wrapper: StyleFunction = (): PrecompiledCss => {
    const { size, sizeUnit } = this.props;

    return css`
      position: relative;
      width: ${`${size}${sizeUnit}`};
      height: ${`${size}${sizeUnit}`};
      transform: rotate(165deg);
    `;
  };

  public render(): JSX.Element | null {
    const { loading, css } = this.props;

    return loading ? (
      <div css={[this.wrapper(), css]}>
        <div css={this.style(1)} />
        <div css={this.style(2)} />
      </div>
    ) : null;
  }
}

export default Loader;
