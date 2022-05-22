import * as React from "react";

import { cssValue } from "./helpers/unitConverter";
import { LoaderSizeMarginProps } from "./helpers/props";
import { createAnimation } from "./helpers/animation";

const pulse = createAnimation(
  "PulseLoader",
  "0% {transform: scale(1),opacity: 1} 45% {transform: scale(0.1),opacity: 0.7} 80% {transform: scale(1),opacity: 1}",
  "pulse"
);

function PulseLoader({
  loading = true,
  color = "#000000",
  speedMultiplier = 1,
  css = {},
  size = 15,
  margin = 2,
  ...additionalprops
}: LoaderSizeMarginProps): JSX.Element | null {
  const style = (i: number): React.CSSProperties => {
    return {
      backgroundColor: color,
      width: cssValue(size),
      height: cssValue(size),
      margin: cssValue(margin),
      borderRadius: "100%",
      display: "inline-block",
      animation: `${pulse} ${0.75 / speedMultiplier}s ${
        (i * 0.12) / speedMultiplier
      }s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)`,
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
    </span>
  );
}

export default PulseLoader;
