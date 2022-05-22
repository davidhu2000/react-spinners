import * as React from "react";

import { cssValue } from "./helpers/unitConverter";
import { LoaderSizeMarginProps } from "./helpers/props";
import { createAnimation } from "./helpers/animation";

function RiseLoader({
  loading = true,
  color = "#000000",
  speedMultiplier = 1,
  css = {},
  size = 15,
  margin = 2,
  ...additionalprops
}: LoaderSizeMarginProps): JSX.Element | null {
  const even = createAnimation(
    "RiseLoader",
    `0% {transform: scale(1.1)}
    25% {transform: translateY(-${size}px)}
    50% {transform: scale(0.4)}
    75% {transform: translateY(${size}px)}
    100% {transform: translateY(0) scale(1.0)}`,
    "even"
  );

  const odd = createAnimation(
    "RiseLoader",
    `0% {transform: scale(0.4)}
    25% {transform: translateY(${size}px)}
    50% {transform: scale(1.1)}
    75% {transform: translateY(${-size}px)}
    100% {transform: translateY(0) scale(0.75)}`,
    "odd"
  );

  const style = (i: number): React.CSSProperties => {
    return {
      backgroundColor: color,
      width: cssValue(size),
      height: cssValue(size),
      margin: cssValue(margin),
      borderRadius: "100%",
      display: "inline-block",
      animation: `${i % 2 === 0 ? even : odd} ${1 / speedMultiplier}s 0s infinite cubic-bezier(0.15, 0.46, 0.9, 0.6)`,
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

export default RiseLoader;
