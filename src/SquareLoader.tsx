import * as React from "react";

import { cssValue } from "./helpers/unitConverter";
import { LoaderSizeProps } from "./helpers/props";
import { createAnimation } from "./helpers/animation";

const square = createAnimation(
  "SquareLoader",
  `25% {transform: rotateX(180deg) rotateY(0)}
  50% {transform: rotateX(180deg) rotateY(180deg)} 
  75% {transform: rotateX(0) rotateY(180deg)} 
  100% {transform: rotateX(0) rotateY(0)}`,
  "square"
);

function SquareLoader({
  loading = true,
  color = "#000000",
  speedMultiplier = 1,
  cssOverride = {},
  size = 50,
  ...additionalprops
}: LoaderSizeProps): JSX.Element | null {
  const style: React.CSSProperties = {
    backgroundColor: color,
    width: cssValue(size),
    height: cssValue(size),
    display: "inline-block",
    animation: `${square} ${3 / speedMultiplier}s 0s infinite cubic-bezier(0.09, 0.57, 0.49, 0.9)`,
    animationFillMode: "both",
    ...cssOverride,
  };

  if (!loading) {
    return null;
  }

  return <span style={style} {...additionalprops} />;
}

export default SquareLoader;
