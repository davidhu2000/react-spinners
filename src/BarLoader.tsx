import * as React from "react";

import { calculateRgba, heightWidthDefaults, cssValue } from "./helpers";
import { LoaderHeightWidthPropsNew } from "./interfaces";
import "./BarLoader.css";

class Loader extends React.PureComponent<Required<LoaderHeightWidthPropsNew>> {
  public static defaultProps = heightWidthDefaults(4, 100);

  public style = (i: number): React.CSSProperties => {
    const { height, color, speedMultiplier } = this.props;

    return {
      position: "absolute",
      height: cssValue(height),
      overflow: "hidden",
      backgroundColor: color,
      backgroundClip: "padding-box",
      display: "block",
      borderRadius: 2,
      willChange: "left, right",
      animationFillMode: "forwards",
      animation: `BarLoader-${i === 1 ? "long" : "short"} ${2.1 / speedMultiplier}s ${
        i === 2 ? `${1.15 / speedMultiplier}s` : ""
      } ${i === 1 ? "cubic-bezier(0.65, 0.815, 0.735, 0.395)" : "cubic-bezier(0.165, 0.84, 0.44, 1)"} infinite`
    };
  };

  public wrapper = (): React.CSSProperties => {
    const { width, height, color, css } = this.props;

    return Object.assign(
      {
        position: "relative",
        width: cssValue(width),
        height: cssValue(height),
        overflow: "hidden",
        backgroundColor: calculateRgba(color, 0.2),
        backgroundClip: "padding-box"
      },
      css
    );
  };

  public render(): JSX.Element | null {
    const { loading } = this.props;

    return loading ? (
      <span style={this.wrapper()}>
        <span style={this.style(1)} />
        <span style={this.style(2)} />
      </span>
    ) : null;
  }
}

export default Loader;
