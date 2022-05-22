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
  css = {},
  height = 35,
  width = 4,
  radius = 2,
  margin = 2,
  ...additionalprops
}: LoaderHeightWidthRadiusProps): JSX.Element | null {
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
    <span style={css} {...additionalprops}>
      <span style={style(1)} />
      <span style={style(2)} />
      <span style={style(3)} />
      <span style={style(4)} />
      <span style={style(5)} />
    </span>
  );
}

export default ScaleLoader;
