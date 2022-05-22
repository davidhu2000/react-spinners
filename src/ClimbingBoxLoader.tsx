import * as React from "react";

import { cssValue } from "./helpers";
import { LoaderSizeProps } from "./helpers/props";
import { createAnimation } from "./helpers/animation";

const climbingBox = createAnimation(
  "ClimbingBoxLoader",
  `0% {transform:translate(0, -1em) rotate(-45deg)}
  5% {transform:translate(0, -1em) rotate(-50deg)}
  20% {transform:translate(1em, -2em) rotate(47deg)}
  25% {transform:translate(1em, -2em) rotate(45deg)}
  30% {transform:translate(1em, -2em) rotate(40deg)}
  45% {transform:translate(2em, -3em) rotate(137deg)}
  50% {transform:translate(2em, -3em) rotate(135deg)}
  55% {transform:translate(2em, -3em) rotate(130deg)}
  70% {transform:translate(3em, -4em) rotate(217deg)}
  75% {transform:translate(3em, -4em) rotate(220deg)}
  100% {transform:translate(0, -1em) rotate(-225deg)}`,
  "climbingBox"
);

function ClimbingBoxLoader({
  loading = true,
  color = "#000000",
  speedMultiplier = 1,
  css = {},
  size = 15,
  ...additionalprops
}: LoaderSizeProps): JSX.Element | null {
  const style: React.CSSProperties = {
    position: "absolute",
    left: "0",
    bottom: "-0.1em",
    height: "1em",
    width: "1em",
    backgroundColor: "transparent",
    borderRadius: "15%",
    border: `0.25em solid ${color}`,
    transform: "translate(0, -1em) rotate(-45deg)",
    animationFillMode: "both",
    animation: `${climbingBox} ${2.5 / speedMultiplier}s infinite cubic-bezier(0.79, 0, 0.47, 0.97)`,
  };

  const wrapper: React.CSSProperties = {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: "-2.7em",
    marginLeft: "-2.7em",
    width: "5.4em",
    height: "5.4em",
    fontSize: cssValue(size),
  };

  const hill: React.CSSProperties = {
    position: "absolute",
    width: "7.1em",
    height: "7.1em",
    top: "1.7em",
    left: "1.7em",
    borderLeft: `0.25em solid ${color}`,
    transform: "rotate(45deg)",
  };

  const container: React.CSSProperties = {
    position: "relative",
    width: "7.1em",
    height: "7.1em",
    ...css,
  };

  if (!loading) {
    return null;
  }

  return (
    <span style={container} {...additionalprops}>
      <span style={wrapper}>
        <span style={style} />
        <span style={hill} />
      </span>
    </span>
  );
}

export default ClimbingBoxLoader;
