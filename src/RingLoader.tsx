/** @jsxImportSource @emotion/react */
import * as React from "react";
import { keyframes, css, SerializedStyles } from "@emotion/react";

import { sizeDefaults, parseLengthAndUnit, cssValue } from "./helpers";
import { LoaderSizeProps, LengthType } from "./interfaces";

const right = keyframes`
  0% {transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg)}
  100% {transform: rotateX(180deg) rotateY(360deg) rotateZ(360deg)}
`;

const left = keyframes`
  0% {transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg)}
  100% {transform: rotateX(360deg) rotateY(180deg) rotateZ(360deg)}
`;

class Loader extends React.PureComponent<Required<LoaderSizeProps>> {
  public static defaultProps = sizeDefaults(60);

  public getSize = (): LengthType => {
    return this.props.size;
  };

  public style = (i: number): SerializedStyles => {
    const { color, speedMultiplier } = this.props;
    const { value, unit } = parseLengthAndUnit(this.getSize());

    return css`
      position: absolute;
      top: 0;
      left: 0;
      width: ${`${value}${unit}`};
      height: ${`${value}${unit}`};
      border: ${`${value / 10}${unit}`} solid ${color};
      opacity: 0.4;
      border-radius: 100%;
      animation-fill-mode: forwards;
      perspective: 800px;
      animation: ${i === 1 ? right : left} ${2 / speedMultiplier}s 0s infinite linear;
    `;
  };

  public wrapper = (): SerializedStyles => {
    return css`
      width: ${cssValue(this.getSize())};
      height: ${cssValue(this.getSize())};
      position: relative;
    `;
  };

  public render(): JSX.Element | null {
    const { loading, css } = this.props;

    return loading ? (
      <span css={[this.wrapper(), css]}>
        <span css={this.style(1)} />
        <span css={this.style(2)} />
      </span>
    ) : null;
  }
}

export default Loader;
