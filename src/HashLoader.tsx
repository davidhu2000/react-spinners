/** @jsx jsx */
import * as React from "react";
import { keyframes, css, jsx, SerializedStyles } from "@emotion/core";
import { Keyframes } from "@emotion/serialize";

import { calculateRgba, sizeDefaults, parseLengthAndUnit, cssValue } from "./helpers/index";
import { LoaderSizeProps } from "./interfaces";

class Loader extends React.PureComponent<LoaderSizeProps> {
  public static defaultProps = sizeDefaults(50);

  public thickness = (): number => {
    const { size } = this.props;
    const { value } = parseLengthAndUnit(size || Loader.defaultProps.size);

    return value / 5;
  };

  public lat = (): number => {
    const { size } = this.props;
    const { value } = parseLengthAndUnit(size || Loader.defaultProps.size);

    return (value - this.thickness()) / 2;
  };

  public offset = (): number => this.lat() - this.thickness();

  public color = (): string => {
    const { color } = this.props;

    return calculateRgba(color || Loader.defaultProps.color, 0.75);
  };

  public before = (): Keyframes => {
    let { size } = this.props;
    size = size || Loader.defaultProps.size;

    const color: string = this.color();
    const lat: number = this.lat();
    const thickness: number = this.thickness();
    const offset: number = this.offset();

    return keyframes`
      0% {width: ${thickness}px;box-shadow: ${lat}px ${-offset}px ${color}, ${-lat}px ${offset}px ${color}}
      35% {width: ${cssValue(size)};box-shadow: 0 ${-offset}px ${color}, 0 ${offset}px ${color}}
      70% {width: ${thickness}px;box-shadow: ${-lat}px ${-offset}px ${color}, ${lat}px ${offset}px ${color}}
      100% {box-shadow: ${lat}px ${-offset}px ${color}, ${-lat}px ${offset}px ${color}}
    `;
  };

  public after = (): Keyframes => {
    let { size } = this.props;
    size = size || Loader.defaultProps.size;

    const color: string = this.color();
    const lat: number = this.lat();
    const thickness: number = this.thickness();
    const offset: number = this.offset();

    return keyframes`
      0% {height: ${thickness}px;box-shadow: ${offset}px ${lat}px ${color}, ${-offset}px ${-lat}px ${color}}
      35% {height: ${cssValue(size)};box-shadow: ${offset}px 0 ${color}, ${-offset}px 0 ${color}}
      70% {height: ${thickness}px;box-shadow: ${offset}px ${-lat}px ${color}, ${-offset}px ${lat}px ${color}}
      100% {box-shadow: ${offset}px ${lat}px ${color}, ${-offset}px ${-lat}px ${color}}
    `;
  };

  public style = (i: number): SerializedStyles => {
    const { size } = this.props;
    const { value, unit } = parseLengthAndUnit(size || Loader.defaultProps.size);

    return css`
      position: absolute;
      content: "";
      top: 50%;
      left: 50%;
      display: block;
      width: ${`${value / 5}${unit}`};
      height: ${`${value / 5}${unit}`};
      border-radius: ${`${value / 10}${unit}`};
      transform: translate(-50%, -50%);
      animation-fill-mode: none;
      animation: ${i === 1 ? this.before() : this.after()} 2s infinite;
    `;
  };

  public wrapper = (): SerializedStyles => {
    let { size } = this.props;
    size = size || Loader.defaultProps.size;

    return css`
      position: relative;
      width: ${cssValue(size)};
      height: ${cssValue(size)};
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
