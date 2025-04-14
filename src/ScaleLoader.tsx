import * as React from "react";

import { cssValue } from "./helpers/unitConverter";
import { LoaderHeightWidthRadiusProps } from "./helpers/props";
import { createAnimation } from "./helpers/animation";

const scale = createAnimation(
  "ScaleLoader",
  "0% {transform: scaley(1.0)} 50% {transform: scaley(0.4)} 100% {transform: scaley(1.0)}",
  "scale"
);

function ScaleLoader({
  loading = true,
  color = "#000000",
  speedMultiplier = 1,
  cssOverride = {},
  height = 35,
  width = 4,
  radius = 2,
  margin = 2,
  barCount = 5,
  ...additionalprops
}: LoaderHeightWidthRadiusProps & { barCount: number }): JSX.Element | null {
  const wrapper: React.CSSProperties = {
    display: "inherit",
    ...cssOverride,
  };

  const style = (i: number): React.CSSProperties => {
    return {
      backgroundColor: color,
      width: cssValue(width),
      height: cssValue(height),
      margin: cssValue(margin),
      borderRadius: cssValue(radius),
      display: "inline-block",
      animation: `${scale} ${1 / speedMultiplier}s ${i * 0.1}s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)`,
      animationFillMode: "both",
    };
  };

  if (!loading) {
    return null;
  }

  return (
    <span style={wrapper} {...additionalprops}>
      {[...Array(count)].map((_, i) => (
        <span key={i} style={style(i)} />
      ))}
    </span>
  );
}

export default ScaleLoader;
