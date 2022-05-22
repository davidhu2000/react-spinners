import * as React from "react";

import { parseLengthAndUnit, cssValue } from "./helpers";
import { LoaderSizeMarginProps } from "./helpers/props";
import { createAnimation } from "./helpers/animation";

const pacman = [
  createAnimation("PacmanLoader", "0% {transform: rotate(0deg)} 50% {transform: rotate(-44deg)}", "pacman-1"),
  createAnimation("PacmanLoader", "0% {transform: rotate(0deg)} 50% {transform: rotate(44deg)}", "pacman-2"),
];

function PacmanLoader({
  loading = true,
  color = "#000000",
  speedMultiplier = 1,
  css = {},
  size = 25,
  margin = 2,
  ...additionalprops
}: LoaderSizeMarginProps): JSX.Element | null {
  const { value, unit } = parseLengthAndUnit(size);

  const ball = createAnimation(
    "PacmanLoader",
    `75% {opacity: 0.7}
    100% {transform: translate(${`${-4 * value}${unit}`}, ${`${-value / 4}${unit}`})}`,
    "ball"
  );

  const ballStyle = (i: number): React.CSSProperties => {
    return {
      width: `${value / 3}${unit}`,
      height: `${value / 3}${unit}`,
      backgroundColor: color,
      margin: cssValue(margin),
      borderRadius: "100%",
      transform: `translate(0, ${`${-value / 4}${unit}`})`,
      position: `absolute`,
      top: `${value}${unit}`,
      left: `${value * 4}${unit}`,
      animation: `${ball} ${1 / speedMultiplier}s ${i * 0.25}s infinite linear`,
      animationFillMode: "both",
    };
  };

  const s1 = `${cssValue(size)} solid transparent`;

  const s2 = `${cssValue(size)} solid ${color}`;

  const pacmanStyle = (i: number): React.CSSProperties => {
    return {
      width: 0,
      height: 0,
      borderRight: s1,
      borderTop: i === 0 ? s1 : s2,
      borderLeft: s2,
      borderBottom: i === 0 ? s2 : s1,
      borderRadius: cssValue(size),
      position: "absolute",
      animation: `${pacman[i]} ${0.8 / speedMultiplier}s infinite ease-in-out`,
      animationFillMode: "both",
    };
  };

  const wrapper: React.CSSProperties = {
    position: "relative",
    fontSize: 0,
    height: cssValue(size),
    width: cssValue(size),
    ...css,
  };

  const pac = pacmanStyle(0);
  const man = pacmanStyle(1);

  if (!loading) {
    return null;
  }

  return (
    <span style={wrapper} {...additionalprops}>
      <span style={pac} />
      <span style={man} />
      <span style={ballStyle(2)} />
      <span style={ballStyle(3)} />
      <span style={ballStyle(4)} />
      <span style={ballStyle(5)} />
    </span>
  );
}

export default PacmanLoader;
