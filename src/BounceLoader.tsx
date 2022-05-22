import * as React from "react";

import { cssValue } from "./helpers/unitConverter";
import { LoaderSizeProps } from "./helpers/props";
import { createAnimation } from "./helpers/animation";

const bounce = createAnimation(
  "BounceLoader",
  "0% {transform: scale(0)} 50% {transform: scale(1.0)} 100% {transform: scale(0)}",
  "bounce"
);

function BounceLoader({
  loading = true,
  color = "#000000",
  speedMultiplier = 1,
  css = {},
  size = 60,
  ...additionalprops
}: LoaderSizeProps): JSX.Element | null {
  const style = (i: number): React.CSSProperties => {
    const animationTiming = i === 1 ? `${1 / speedMultiplier}s` : "0s";
    return {
      position: "absolute",
      height: cssValue(size),
      width: cssValue(size),
      backgroundColor: color,
      borderRadius: "100%",
      opacity: 0.6,
      top: 0,
      left: 0,
      animationFillMode: "both",
      animation: `${bounce} ${2.1 / speedMultiplier}s ${animationTiming} infinite ease-in-out`,
    };
  };

  const wrapper: React.CSSProperties = {
    display: "inherit",
    position: "relative",
    width: cssValue(size),
    height: cssValue(size),
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

export default BounceLoader;
