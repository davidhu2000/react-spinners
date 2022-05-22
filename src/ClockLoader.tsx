import * as React from "react";

import { parseLengthAndUnit } from "./helpers";
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
    position: "relative",
    width: `${value}${unit}`,
    height: `${value}${unit}`,
    backgroundColor: "transparent",
    boxShadow: `inset 0px 0px 0px 2px ${color}`,
    borderRadius: "50%",

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore the keys are valid css classes
    "&:before,&:after": {
      position: "absolute",
      content: "",
      backgroundColor: color,
    },
    "&:after": {
      width: `${value / 2.4}px`,
      height: "2px",
      top: `${value / 2 - 1}px`,
      left: `${value / 2 - 1}px`,
      transformOrigin: "1px 1px",
      animation: `${rotate} ${2 / speedMultiplier}s linear infinite`,
    },
    "&:before": {
      width: `${value / 3}px`,
      height: "2px",
      top: `${value / 2 - 1}px`,
      left: `${value / 2 - 1}px`,
      transformOrigin: "1px 1px",
      animation: `${rotate} ${8 / speedMultiplier}s linear infinite`,
    },
    ...css,
  };

  if (!loading) {
    return null;
  }

  return <span style={wrapper} {...additionalprops} />;
}

export default ClockLoader;
