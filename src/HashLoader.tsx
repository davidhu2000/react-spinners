import * as React from "react";

import { calculateRgba, parseLengthAndUnit, cssValue } from "./helpers/index";
import { LoaderSizeProps } from "./helpers/props";
import { createAnimation } from "./helpers/animation";

function HashLoader({
  loading = true,
  color = "#000000",
  speedMultiplier = 1,
  css = {},
  size = 50,
  ...additionalprops
}: LoaderSizeProps): JSX.Element | null {
  const { value, unit } = parseLengthAndUnit(size);
  const thickness = value / 5;

  const lat = (value - thickness) / 2;

  const offset = lat - thickness;

  const colorValue = calculateRgba(color, 0.75);

  const before = createAnimation(
    "HashLoader",
    `
      0% {width: ${thickness}px,box-shadow: ${lat}px ${-offset}px ${colorValue}, ${-lat}px ${offset}px ${colorValue}}
      35% {width: ${cssValue(size)},box-shadow: 0 ${-offset}px ${colorValue}, 0 ${offset}px ${colorValue}}
      70% {width: ${thickness}px,box-shadow: ${-lat}px ${-offset}px ${colorValue}, ${lat}px ${offset}px ${colorValue}}
      100% {box-shadow: ${lat}px ${-offset}px ${colorValue}, ${-lat}px ${offset}px ${colorValue}}`,
    "after"
  );

  const after = createAnimation(
    "HashLoader",
    `
      0% {height: ${thickness}px,box-shadow: ${offset}px ${lat}px ${color}, ${-offset}px ${-lat}px ${color}}
      35% {height: ${cssValue(size)},box-shadow: ${offset}px 0 ${color}, ${-offset}px 0 ${color}}
      70% {height: ${thickness}px,box-shadow: ${offset}px ${-lat}px ${color}, ${-offset}px ${lat}px ${color}}
      100% {box-shadow: ${offset}px ${lat}px ${color}, ${-offset}px ${-lat}px ${color}}`,
    "after"
  );

  const style = (i: number): React.CSSProperties => {
    return {
      position: "absolute",
      content: "",
      top: "50%",
      left: "50%",
      display: "block",
      width: `${value / 5}${unit}`,
      height: `${value / 5}${unit}`,
      borderRadius: `${value / 10}${unit}`,
      transform: "translate(-50%, -50%)",
      animationFillMode: "none",
      animation: `${i === 1 ? before : after} ${2 / speedMultiplier}s infinite`,
    };
  };

  const wrapper: React.CSSProperties = {
    position: "relative",
    width: cssValue(size),
    height: cssValue(size),
    transform: "rotate(165deg)",
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

export default HashLoader;
