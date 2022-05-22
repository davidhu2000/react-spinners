import * as React from "react";

import { parseLengthAndUnit, cssValue } from "./helpers";
import { LoaderSizeProps } from "./helpers/props";
import { createAnimation } from "./helpers/animation";

const rotate = createAnimation("DotLoader", "100% {transform: rotate(360deg)}", "rotate");

const bounce = createAnimation("DotLoader", "0%, 100% {transform: scale(0)} 50% {transform: scale(1.0)}", "bounce");

function DotLoader({
  loading = true,
  color = "#000000",
  speedMultiplier = 1,
  css = {},
  size = 60,
  ...additionalprops
}: LoaderSizeProps): JSX.Element | null {
  const style = (i: number): React.CSSProperties => {
    const { value, unit } = parseLengthAndUnit(size);

    return {
      position: "absolute",
      top: i % 2 ? "0" : "auto",
      bottom: i % 2 ? "auto" : "0",
      height: `${value / 2}${unit}`,
      width: `${value / 2}${unit}`,
      backgroundColor: color,
      borderRadius: "100%",
      animationFillMode: "forwards",
      animation: `${bounce} ${2 / speedMultiplier}s ${i === 2 ? "1s" : "0s"} infinite linear`,
    };
  };

  const wrapper: React.CSSProperties = {
    position: "relative",
    width: cssValue(size),
    height: cssValue(size),
    animationFillMode: "forwards",
    animation: `${rotate} ${2 / speedMultiplier}s 0s infinite linear`,
    ...css,
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

export default DotLoader;
