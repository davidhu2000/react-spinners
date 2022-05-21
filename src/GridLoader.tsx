import * as React from "react";

import { sizeMarginDefaults, cssValue, parseLengthAndUnit } from "./helpers";
import { LoaderSizeMarginProps } from "./helpers/props";
import { createAnimation } from "./helpers/animation";

const grid = createAnimation(
  "GridLoader",
  `
  0% {transform: scale(1)}
  50% {transform: scale(0.5), opacity: 0.7}
  100% {transform: scale(1),opacity: 1}
`
);

const random = (top: number): number => Math.random() * top;

function GridLoader({
  loading = true,
  color = "#000000",
  speedMultiplier = 1,
  css = {},
  size = 15,
  margin = 2,
  ...additionalprops
}: LoaderSizeMarginProps): JSX.Element | null {
  const style = (rand: number): React.CSSProperties => {
    return {
      display: `inline-block`,
      backgroundColor: color,
      width: cssValue(size),
      height: cssValue(size),
      margin: cssValue(margin),
      borderRadius: `100%`,
      animationFillMode: `"both"`,
      animation: `${grid} ${(rand / 100 + 0.6) / speedMultiplier}s ${rand / 100 - 0.2}s infinite ease`,
    };
  };

  const sizeWithUnit = parseLengthAndUnit(size);
  const marginWithUnit = parseLengthAndUnit(margin);

  const width = parseFloat(sizeWithUnit.value.toString()) * 3 + parseFloat(marginWithUnit.value.toString()) * 6;

  const wrapper: React.CSSProperties = {
    width: width,
    fontSize: `${width}${sizeWithUnit.unit}`,
  };

  if (!loading) {
    return null;
  }

  return (
    <span style={wrapper}>
      <span style={style(random(100))} />
      <span style={style(random(100))} />
      <span style={style(random(100))} />
      <span style={style(random(100))} />
      <span style={style(random(100))} />
      <span style={style(random(100))} />
      <span style={style(random(100))} />
      <span style={style(random(100))} />
      <span style={style(random(100))} />
    </span>
  );
}

export default GridLoader;
