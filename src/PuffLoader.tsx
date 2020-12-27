/** @jsx jsx */
import * as React from "react";
import { keyframes, css, jsx, SerializedStyles } from "@emotion/core";
import { Keyframes } from "@emotion/serialize";

import { sizeDefaults, cssValue } from "./helpers";
import { LoaderSizeProps, LengthType } from "./interfaces";

const puff: Keyframes[] = [
  keyframes`
  0%  {transform: scale(0)}
  100% {transform: scale(1.0)}
`,
  keyframes`
  0%  {opacity: 1}
  100% {opacity: 0}
`
];

class Loader extends React.PureComponent<LoaderSizeProps> {
  public static defaultProps = sizeDefaults(60);

  public getSize = (): LengthType => {
    return this.props.size || Loader.defaultProps.size;
  };

  public style = (i: number): SerializedStyles => {
    const { color } = this.props;

    return css`
      position: absolute;
      height: ${cssValue(this.getSize())};
      width: ${cssValue(this.getSize())};
      border: thick solid ${color};
      border-radius: 50%;
      opacity: 1;
      top: 0;
      left: 0;
      animation-fill-mode: both;
      animation: ${puff[0]}, ${puff[1]};
      animation-duration: 2s;
      animation-iteration-count: infinite;
      animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1),
        cubic-bezier(0.3, 0.61, 0.355, 1);
      animation-delay: ${i === 1 ? "-1s" : "0s"};
    `;
  };

  public wrapper = (): SerializedStyles => {
    return css`
      position: relative;
      width: ${cssValue(this.getSize())};
      height: ${cssValue(this.getSize())};
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
