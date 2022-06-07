import * as React from "react";

import { cssValue } from "./helpers/unitConverter";
import { createAnimation } from "./helpers/animation";
import { LoaderHeightWidthProps } from "./helpers/props";
import { calculateRgba } from "./helpers/colors";

const long = createAnimation(
  "BarLoader",
  `0% {left: -35%;right: 100%} 60% {left: 100%;right: -90%} 100% {left: 100%;right: -90%}`,
  "long"
);

const short = createAnimation(
  "BarLoader",
  `0% {left: -200%;right: 100%} 60% {left: 107%;right: -8%} 100% {left: 107%;right: -8%}`,
  "short"
);

function BarLoader({
  loading = true,
  color = "#000000",
  speedMultiplier = 1,
  cssOverride = {},
  height = 4,
  width = 100,
  ...additionalprops
}: LoaderHeightWidthProps): JSX.Element | null {
  const wrapper: React.CSSProperties = {
    display: "inherit",
    position: "relative",
    width: cssValue(width),
    height: cssValue(height),
    overflow: "hidden",
    backgroundColor: calculateRgba(color, 0.2),
    backgroundClip: "padding-box",
    ...cssOverride,
  };

  const style = (i: number): React.CSSProperties => {
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
      animation: `${i === 1 ? long : short} ${2.1 / speedMultiplier}s ${i === 2 ? `${1.15 / speedMultiplier}s` : ""} ${
        i === 1 ? "cubic-bezier(0.65, 0.815, 0.735, 0.395)" : "cubic-bezier(0.165, 0.84, 0.44, 1)"
      } infinite`,
    };
  };

  if (!loading) {
    return null;
  }

  return (
    <span style={wrapper} {...additionalprops}>
      <span style={style(1)} />
      <span style={style(2)} />
    </span>
  );
}

export default BarLoader;
