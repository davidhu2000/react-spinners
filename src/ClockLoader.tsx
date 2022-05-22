import * as React from "react";

import { parseLengthAndUnit } from "./helpers/unitConverter";
import { LoaderSizeProps } from "./helpers/props";
import { createAnimation } from "./helpers/animation";

const rotate = createAnimation("ClockLoader", "100% { transform: rotate(360deg) }", "rotate");

function ClockLoader({
  loading = true,
  color = "#000000",
  speedMultiplier = 1,
  css = {},
  size = 50,
  ...additionalprops
}: LoaderSizeProps): JSX.Element | null {
  const { value, unit } = parseLengthAndUnit(size);

  const wrapper: React.CSSProperties = {
    display: "inherit",
    position: "relative",
    width: `${value}${unit}`,
    height: `${value}${unit}`,
    backgroundColor: "transparent",
    boxShadow: `inset 0px 0px 0px 2px ${color}`,
    borderRadius: "50%",
    ...css,
  };

  const minute: React.CSSProperties = {
    position: "absolute",
    backgroundColor: color,
    width: `${value / 3}px`,
    height: "2px",
    top: `${value / 2 - 1}px`,
    left: `${value / 2 - 1}px`,
    transformOrigin: "1px 1px",
    animation: `${rotate} ${8 / speedMultiplier}s linear infinite`,
  };

  const hour: React.CSSProperties = {
    position: "absolute",
    backgroundColor: color,
    width: `${value / 2.4}px`,
    height: "2px",
    top: `${value / 2 - 1}px`,
    left: `${value / 2 - 1}px`,
    transformOrigin: "1px 1px",
    animation: `${rotate} ${2 / speedMultiplier}s linear infinite`,
  };

  if (!loading) {
    return null;
  }

  return (
    <span style={wrapper} {...additionalprops}>
      <span style={hour} />
      <span style={minute} />
    </span>
  );
}

export default ClockLoader;
