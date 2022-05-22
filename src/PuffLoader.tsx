import * as React from "react";

import { cssValue } from "./helpers";
import { LoaderSizeProps } from "./helpers/props";
import { createAnimation } from "./helpers/animation";

const puff = [
  createAnimation("PuffLoader", "0% {transform: scale(0)} 100% {transform: scale(1.0)}", "puff-1"),
  createAnimation("PuffLoader", "0% {opacity: 1} 100% {opacity: 0}", "puff-2"),
];

function PuffLoader({
  loading = true,
  color = "#000000",
  speedMultiplier = 1,
  css = {},
  size = 60,
  ...additionalprops
}: LoaderSizeProps): JSX.Element | null {
  const style = (i: number): React.CSSProperties => {
    return {
      position: `absolute`,
      height: cssValue(size),
      width: cssValue(size),
      border: `thick solid ${color}`,
      borderRadius: `50%`,
      opacity: `1`,
      top: `0`,
      left: `0`,
      animationFillMode: `both`,
      animation: `${puff[0]}, ${puff[1]}`,
      animationDuration: `${2 / speedMultiplier}s`,
      animationIterationCount: `infinite`,
      animationTimingFunction: `cubic-bezier(0.165, 0.84, 0.44, 1), cubic-bezier(0.3, 0.61, 0.355, 1)`,
      animationDelay: i === 1 ? "1s" : "0s",
    };
  };

  const wrapper: React.CSSProperties = {
    position: `relative`,
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

export default PuffLoader;
