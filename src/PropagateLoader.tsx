"use client";

import * as React from "react";

import { parseLengthAndUnit } from "./helpers/unitConverter";
import { LoaderSizeProps } from "./helpers/props";
import { createAnimation } from "./helpers/animation";

// 1.5 4.5 7.5
const distance = [1, 3, 5];

const propagate = [
  createAnimation(
    "PropagateLoader",
    `25% {transform: translateX(-${distance[0]}rem) scale(0.75)}
    50% {transform: translateX(-${distance[1]}rem) scale(0.6)}
    75% {transform: translateX(-${distance[2]}rem) scale(0.5)}
    95% {transform: translateX(0rem) scale(1)}`,
    "propogate-0"
  ),
  createAnimation(
    "PropagateLoader",
    `25% {transform: translateX(-${distance[0]}rem) scale(0.75)}
    50% {transform: translateX(-${distance[1]}rem) scale(0.6)}
    75% {transform: translateX(-${distance[1]}rem) scale(0.6)}
    95% {transform: translateX(0rem) scale(1)}`,
    "propogate-1"
  ),
  createAnimation(
    "PropagateLoader",
    `25% {transform: translateX(-${distance[0]}rem) scale(0.75)}
    75% {transform: translateX(-${distance[0]}rem) scale(0.75)}
    95% {transform: translateX(0rem) scale(1)}`,
    "propogate-2"
  ),
  createAnimation(
    "PropagateLoader",
    `25% {transform: translateX(${distance[0]}rem) scale(0.75)}
    75% {transform: translateX(${distance[0]}rem) scale(0.75)}
    95% {transform: translateX(0rem) scale(1)}`,
    "propogate-3"
  ),
  createAnimation(
    "PropagateLoader",
    `25% {transform: translateX(${distance[0]}rem) scale(0.75)}
    50% {transform: translateX(${distance[1]}rem) scale(0.6)}
    75% {transform: translateX(${distance[1]}rem) scale(0.6)}
    95% {transform: translateX(0rem) scale(1)}`,
    "propogate-4"
  ),
  createAnimation(
    "PropagateLoader",
    `25% {transform: translateX(${distance[0]}rem) scale(0.75)}
    50% {transform: translateX(${distance[1]}rem) scale(0.6)}
    75% {transform: translateX(${distance[2]}rem) scale(0.5)}
    95% {transform: translateX(0rem) scale(1)}`,
    "propogate-5"
  ),
];

function PropagateLoader({
  loading = true,
  color = "#000000",
  speedMultiplier = 1,
  cssOverride = {},
  size = 15,
  ...additionalprops
}: LoaderSizeProps) {
  const { value, unit } = parseLengthAndUnit(size);

  const wrapper: React.CSSProperties = {
    display: "inherit",
    position: "relative",
    ...cssOverride,
  };

  const style = (i: number): React.CSSProperties => {
    return {
      position: "absolute",
      fontSize: `${value / 3}${unit}`,
      width: `${value}${unit}`,
      height: `${value}${unit}`,
      background: color,
      borderRadius: "50%",
      animation: `${propagate[i]} ${1.5 / speedMultiplier}s infinite`,
      animationFillMode: "forwards",
    };
  };

  if (!loading) {
    return null;
  }

  return (
    <span style={wrapper} {...additionalprops}>
      <span style={style(0)} />
      <span style={style(1)} />
      <span style={style(2)} />
      <span style={style(3)} />
      <span style={style(4)} />
      <span style={style(5)} />
    </span>
  );
}

export default PropagateLoader;
