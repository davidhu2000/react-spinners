import * as React from "react";

import { cssValue } from "./helpers";
import { LoaderSizeProps } from "./helpers/props";
import { createAnimation } from "./helpers/animation";

const skew = createAnimation(
  "SkewLoader",
  "25% {transform: perspective(100px) rotateX(180deg) rotateY(0)} 50% {transform: perspective(100px) rotateX(180deg) rotateY(180deg)} 75% {transform: perspective(100px) rotateX(0) rotateY(180deg)} 100% {transform: perspective(100px) rotateX(0) rotateY(0)}",
  "skew"
);

function SkewLoader({
  loading = true,
  color = "#000000",
  speedMultiplier = 1,
  css = {},
  size = 20,
  ...additionalprops
}: LoaderSizeProps): JSX.Element | null {
  const style: React.CSSProperties = {
    width: "0",
    height: "0",
    borderLeft: `${cssValue(size)} solid transparent`,
    borderRight: `${cssValue(size)} solid transparent`,
    borderBottom: `${cssValue(size)} solid ${color}`,
    display: "inline-block",
    animation: `${skew} ${3 / speedMultiplier}s 0s infinite cubic-bezier(0.09, 0.57, 0.49, 0.9)`,
    animationFillMode: "both",
    ...css,
  };

  if (!loading) {
    return null;
  }

  return <span style={style} {...additionalprops} />;
}

export default SkewLoader;
