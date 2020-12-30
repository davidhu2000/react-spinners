/** @jsx jsx */
import * as React from "react";
import { keyframes, css, jsx, SerializedStyles } from '@emotion/react';

import { sizeMarginDefaults, cssValue, parseLengthAndUnit } from "./helpers";
import { LoaderSizeMarginProps, LengthObject } from "./interfaces";

const grid = keyframes`
  0% {transform: scale(1)}
  50% {transform: scale(0.5); opacity: 0.7}
  100% {transform: scale(1);opacity: 1}
`;

type RandomFunction = (top: number) => number;
const random: RandomFunction = (top: number): number => Math.random() * top;

class Loader extends React.PureComponent<LoaderSizeMarginProps> {
  public static defaultProps = sizeMarginDefaults(15);

  public style = (rand: number): SerializedStyles => {
    const { color, size, margin } = this.props;

    return css`
      display: inline-block;
      background-color: ${color};
      width: ${cssValue(size || Loader.defaultProps.size)};
      height: ${cssValue(size || Loader.defaultProps.size)};
      margin: ${cssValue(margin || Loader.defaultProps.size)};
      border-radius: 100%;
      animation-fill-mode: "both";
      animation: ${grid} ${rand / 100 + 0.6}s ${rand / 100 - 0.2}s infinite ease;
    `;
  };

  public wrapper = (): SerializedStyles => {
    const { size, margin } = this.props;
    const sizeWithUnit: LengthObject = parseLengthAndUnit(size || Loader.defaultProps.size);
    const marginWithUnit: LengthObject = parseLengthAndUnit(margin || Loader.defaultProps.margin);

    const width = `${
      parseFloat(sizeWithUnit.value.toString()) * 3 +
      parseFloat(marginWithUnit.value.toString()) * 6
    }${sizeWithUnit.unit}`;

    return css`
      width: ${width};
      font-size: 0;
    `;
  };

  public render(): JSX.Element | null {
    const { loading, css } = this.props;

    return loading ? (
      <span css={[this.wrapper(), css]}>
        <span css={this.style(random(100))} />
        <span css={this.style(random(100))} />
        <span css={this.style(random(100))} />
        <span css={this.style(random(100))} />
        <span css={this.style(random(100))} />
        <span css={this.style(random(100))} />
        <span css={this.style(random(100))} />
        <span css={this.style(random(100))} />
        <span css={this.style(random(100))} />
      </span>
    ) : null;
  }
}

export default Loader;
