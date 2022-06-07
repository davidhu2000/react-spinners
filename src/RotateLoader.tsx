import * as React from "react";

import { cssValue, parseLengthAndUnit } from "./helpers/unitConverter";
import { LoaderSizeMarginProps } from "./helpers/props";
import { createAnimation } from "./helpers/animation";

const rotate = createAnimation(
  "RotateLoader",
  "0% {transform: rotate(0deg)} 50% {transform: rotate(180deg)} 100% {transform: rotate(360deg)}",
  "rotate"
);

function RotateLoader({
  loading = true,
  color = "#000000",
  speedMultiplier = 1,
  cssOverride = {},
  size = 15,
  margin = 2,
  ...additionalprops
}: LoaderSizeMarginProps): JSX.Element | null {
  const { value, unit } = parseLengthAndUnit(margin);

  const ball: React.CSSProperties = {
    backgroundColor: color,
    width: cssValue(size),
    height: cssValue(size),
    borderRadius: "100%",
  };

  const wrapper: React.CSSProperties = {
    ...ball,
    display: "inline-block",
    position: "relative",
    animationFillMode: "both",
    animation: `${rotate} ${1 / speedMultiplier}s 0s infinite cubic-bezier(0.7, -0.13, 0.22, 0.86)`,
    ...cssOverride,
  };

  const style = (i: number): React.CSSProperties => {
    const left = (i % 2 ? -1 : 1) * (26 + value);

    return {
      opacity: "0.8",
      position: "absolute",
      top: "0",
      left: `${left}${unit}`,
    };
  };

  if (!loading) {
    return null;
  }

  return (
    <span style={wrapper} {...additionalprops}>
      <span style={{ ...ball, ...style(1) }} />
      <span style={{ ...ball, ...style(2) }} />
    </span>
  );
}

export default RotateLoader;
