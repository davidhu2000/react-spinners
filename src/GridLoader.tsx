"use client";

import * as React from "react";

import { cssValue, parseLengthAndUnit } from "./helpers/unitConverter";
import { LoaderSizeMarginProps } from "./helpers/props";
import { createAnimation } from "./helpers/animation";

const grid = createAnimation(
  "GridLoader",
  "0% {transform: scale(1)} 50% {transform: scale(0.5); opacity: 0.7} 100% {transform: scale(1); opacity: 1}",
  "grid"
);

const random = (top: number): number => Math.random() * top;

function GridLoader({
  loading = true,
  color = "#000000",
  speedMultiplier = 1,
  cssOverride = {},
  size = 15,
  margin = 2,
  ...additionalprops
}: LoaderSizeMarginProps) {
  const sizeWithUnit = parseLengthAndUnit(size);
  const marginWithUnit = parseLengthAndUnit(margin);

  const width =
    parseFloat(sizeWithUnit.value.toString()) * 3 + parseFloat(marginWithUnit.value.toString()) * 6;

  const wrapper: React.CSSProperties = {
    width: `${width}${sizeWithUnit.unit}`,
    fontSize: 0,
    display: "inline-block",
    ...cssOverride,
  };

  const style = (rand: number): React.CSSProperties => {
    return {
      display: "inline-block",
      backgroundColor: color,
      width: `${cssValue(size)}`,
      height: `${cssValue(size)}`,
      margin: cssValue(margin),
      borderRadius: "100%",
      animationFillMode: "both",
      animation: `${grid} ${(rand / 100 + 0.6) / speedMultiplier}s ${rand / 100 - 0.2}s infinite ease`,
    };
  };

  if (!loading) {
    return null;
  }

  return (
    <span
      style={wrapper}
      {...additionalprops}
      ref={(node) => {
        if (node) {
          node.style.setProperty("width", `${width}${sizeWithUnit.unit}`, "important");
        }
      }}
    >
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
