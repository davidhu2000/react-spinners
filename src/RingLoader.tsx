import * as React from "react";

import { parseLengthAndUnit, cssValue } from "./helpers/unitConverter";
import { LoaderSizeProps } from "./helpers/props";
import { createAnimation } from "./helpers/animation";

const right = createAnimation(
  "RingLoader",
  "0% {transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg)} 100% {transform: rotateX(180deg) rotateY(360deg) rotateZ(360deg)}",
  "right"
);

const left = createAnimation(
  "RingLoader",
  "0% {transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg)} 100% {transform: rotateX(360deg) rotateY(180deg) rotateZ(360deg)}",
  "left"
);

function RingLoader({
  loading = true,
  color = "#000000",
  speedMultiplier = 1,
  cssOverride = {},
  size = 60,
  ...additionalprops
}: LoaderSizeProps): JSX.Element | null {
  const { value, unit } = parseLengthAndUnit(size);

  const wrapper: React.CSSProperties = {
    display: "inherit",
    width: cssValue(size),
    height: cssValue(size),
    position: "relative",
    ...cssOverride,
  };

  const style = (i: number): React.CSSProperties => {
    return {
      position: "absolute",
      top: "0",
      left: "0",
      width: `${value}${unit}`,
      height: `${value}${unit}`,
      border: `${value / 10}${unit} solid ${color}`,
      opacity: "0.4",
      borderRadius: "100%",
      animationFillMode: "forwards",
      perspective: "800px",
      animation: `${i === 1 ? right : left} ${2 / speedMultiplier}s 0s infinite linear`,
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

export default RingLoader;
