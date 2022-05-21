import * as React from "react";

import { cssValue } from "./helpers";

import { createAnimation } from "./helpers/animation";
import { LoaderSizeMarginProps } from "./helpers/props";

const beat = createAnimation(
  "BeatLoader",
  " 50% {transform: scale(0.75);opacity: 0.2} 100% {transform: scale(1);opacity: 1}"
);

function BeatLoader({
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
      display: "inline-block",
      backgroundColor: color,
      width: cssValue(size),
      height: cssValue(size),
      margin: cssValue(margin),
      borderRadius: "100%",
      animation: `${beat} ${0.7 / speedMultiplier}s ${i % 2 ? "0s" : `${0.35 / speedMultiplier}s`} infinite linear`,
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

export default BeatLoader;
