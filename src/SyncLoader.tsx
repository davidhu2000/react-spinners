/** @jsxImportSource @emotion/react */
import * as React from "react";
import { keyframes, css, SerializedStyles } from "@emotion/react";

import { sizeMarginDefaults } from "./helpers/proptypes";
import { LoaderSizeMarginProps } from "./interfaces";
import { cssValue } from "./helpers";

const sync = keyframes`
  33% {transform: translateY(10px)}
  66% {transform: translateY(-10px)}
  100% {transform: translateY(0)}
`;

class Loader extends React.PureComponent<Required<LoaderSizeMarginProps>> {
  public static defaultProps = sizeMarginDefaults(15);

  public style = (i: number): SerializedStyles => {
    const { color, size, margin, speedMultiplier } = this.props;

    return css`
      background-color: ${color};
      width: ${cssValue(size)};
      height: ${cssValue(size)};
      margin: ${cssValue(margin)};
      border-radius: 100%;
      display: inline-block;
      animation: ${sync} ${0.6 / speedMultiplier}s ${i * 0.07}s infinite ease-in-out;
      animation-fill-mode: both;
    `;
  };

  public render(): JSX.Element | null {
    const { loading, css } = this.props;

    return loading ? (
      <span css={[css]}>
        <span css={this.style(1)} />
        <span css={this.style(2)} />
        <span css={this.style(3)} />
      </span>
    ) : null;
  }
}

export default Loader;
