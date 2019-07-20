/** @jsx jsx */
import * as React from "react";
import { keyframes, css, jsx } from "@emotion/core";
import { Keyframes } from "@emotion/serialize";
import onlyUpdateForKeys from "recompose/onlyUpdateForKeys";

import { heightWidthRadiusDefaults, heightWidthRadiusKeys } from "./helpers";
import { PrecompiledCss, LoaderHeightWidthRadiusProps, StyleFunctionWithIndex } from "./interfaces";

const scale: Keyframes = keyframes`
  0% {transform: scaley(1.0)}
  50% {transform: scaley(0.4)}
  100% {transform: scaley(1.0)}
`;

class Loader extends React.PureComponent<LoaderHeightWidthRadiusProps> {
  public static defaultProps: LoaderHeightWidthRadiusProps = heightWidthRadiusDefaults(35, 4, 2);

  public style: StyleFunctionWithIndex = (i: number): PrecompiledCss => {
    const { color, width, height, margin, radius, widthUnit, heightUnit, radiusUnit } = this.props;

    return css`
      background-color: ${color};
      width: ${`${width}${widthUnit}`};
      height: ${`${height}${heightUnit}`};
      margin: ${margin};
      border-radius: ${`${radius}${radiusUnit}`};
      display: inline-block;
      animation: ${scale} 1s ${i * 0.1}s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
      animation-fill-mode: both;
    `;
  };

  public render(): JSX.Element | null {
    const { loading, css } = this.props;

    return loading ? (
      <div css={[css]}>
        <div css={this.style(1)} />
        <div css={this.style(2)} />
        <div css={this.style(3)} />
        <div css={this.style(4)} />
        <div css={this.style(5)} />
      </div>
    ) : null;
  }
}

const Component: React.ComponentClass<LoaderHeightWidthRadiusProps> = onlyUpdateForKeys(
  heightWidthRadiusKeys
)(Loader);
Component.defaultProps = Loader.defaultProps;
export default Component;
