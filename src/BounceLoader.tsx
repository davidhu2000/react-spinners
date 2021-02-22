/** @jsx jsx */
import * as React from "react";
import { keyframes, css, jsx, SerializedStyles } from "@emotion/react";

import { sizeDefaults, cssValue } from "./helpers";
import { LoaderSizeProps } from "./interfaces";

const bounce = keyframes`
  0%, 100% {transform: scale(0)}
  50% {transform: scale(1.0)}
`;

class Loader extends React.PureComponent<Required<LoaderSizeProps>> {
  public static defaultProps = sizeDefaults(60);

  public style = (i: number): SerializedStyles => {
    const { color, size, speedMultiplier } = this.props;

    return css`
      position: absolute;
      height: ${cssValue(size || Loader.defaultProps.size)};
      width: ${cssValue(size || Loader.defaultProps.size)};
      background-color: ${color || Loader.defaultProps.color};
      border-radius: 100%;
      opacity: 0.6;
      top: 0;
      left: 0;
      animation-fill-mode: both;
      animation: ${bounce} ${2.1 / speedMultiplier}s ${i === 1 ? `${1 / speedMultiplier}s` : "0s"}
        infinite ease-in-out;
    `;
  };

  public wrapper = (): SerializedStyles => {
    const { size } = this.props;

    return css`
      position: relative;
      width: ${cssValue(size || Loader.defaultProps.size)};
      height: ${cssValue(size || Loader.defaultProps.size)};
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
