/** @jsx jsx */
import * as React from "react";
import { keyframes, css, jsx, SerializedStyles } from "@emotion/react";

import { sizeDefaults, cssValue } from "./helpers";
import { LoaderSizeProps } from "./interfaces";

const climbingBox = keyframes`
  0% {transform:translate(0, -1em) rotate(-45deg)}
  5% {transform:translate(0, -1em) rotate(-50deg)}
  20% {transform:translate(1em, -2em) rotate(47deg)}
  25% {transform:translate(1em, -2em) rotate(45deg)}
  30% {transform:translate(1em, -2em) rotate(40deg)}
  45% {transform:translate(2em, -3em) rotate(137deg)}
  50% {transform:translate(2em, -3em) rotate(135deg)}
  55% {transform:translate(2em, -3em) rotate(130deg)}
  70% {transform:translate(3em, -4em) rotate(217deg)}
  75% {transform:translate(3em, -4em) rotate(220deg)}
  100% {transform:translate(0, -1em) rotate(-225deg)}
`;

class Loader extends React.PureComponent<Required<LoaderSizeProps>> {
  public static defaultProps = sizeDefaults(15);

  public style = (): SerializedStyles => {
    const { color, speedMultiplier } = this.props;

    return css`
      position: absolute;
      left: 0;
      bottom: -0.1em;
      height: 1em;
      width: 1em;
      background-color: transparent;
      border-radius: 15%;
      border: 0.25em solid ${color};
      transform: translate(0, -1em) rotate(-45deg);
      animation-fill-mode: both;
      animation: ${climbingBox} ${2.5 / speedMultiplier}s infinite cubic-bezier(0.79, 0, 0.47, 0.97);
    `;
  };

  public wrapper = (): SerializedStyles => {
    const { size } = this.props;

    return css`
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -2.7em;
      margin-left: -2.7em;
      width: 5.4em;
      height: 5.4em;
      font-size: ${cssValue(size)};
    `;
  };

  public hill = (): SerializedStyles => {
    const { color } = this.props;

    return css`
      position: absolute;
      width: 7.1em;
      height: 7.1em;
      top: 1.7em;
      left: 1.7em;
      border-left: 0.25em solid ${color};
      transform: rotate(45deg);
    `;
  };

  public container = (): SerializedStyles => {
    return css`
      position: relative;
      width: 7.1em;
      height: 7.1em;
    `;
  };

  public render(): JSX.Element | null {
    const { loading, css } = this.props;

    return loading ? (
      <span css={[this.container(), css]}>
        <span css={this.wrapper()}>
          <span css={this.style()} />
          <span css={this.hill()} />
        </span>
      </span>
    ) : null;
  }
}

export default Loader;
