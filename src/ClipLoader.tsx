import * as React from "react";

import { cssValue } from "./helpers/unitConverter";
import { LoaderSizeProps } from "./helpers/props";
import { createAnimation } from "./helpers/animation";

const clip = createAnimation(
  "ClipLoader",
  "0% {transform: rotate(0deg) scale(1)} 50% {transform: rotate(180deg) scale(0.8)} 100% {transform: rotate(360deg) scale(1)}",
  "clip"
);

function ClipLoader({
  loading = true,
  color = "#000000",
  speedMultiplier = 1,
  css = {},
  size = 35,
  ...additionalprops
}: LoaderSizeProps): JSX.Element | null {
  const style: React.CSSProperties = {
    background: "transparent !important",
    width: cssValue(size),
    height: cssValue(size),
    borderRadius: "100%",
    border: "2px solid",
    borderColor: color,
    borderBottomColor: "transparent",
    display: "inline-block",
    animation: `${clip} ${0.75 / speedMultiplier}s 0s infinite linear`,
    animationFillMode: "both",
    ...css,
  };

  if (!loading) {
    return null;
  }

  return <span style={style} {...additionalprops} />;
}

export default ClipLoader;
