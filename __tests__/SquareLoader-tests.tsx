import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import { matchers } from "@emotion/jest";
expect.extend(matchers);

import SquareLoader from "../src/SquareLoader";
import { sizeDefaults } from "../src/helpers";
import { commonSpecs, cssSpecs, lengthSpecs, speedMultiplierSpecs } from "./sharedSpecs";

describe("SquareLoader", () => {
  const defaultSize = 50;
  const defaultColor = "#000000";
  const defaultUnit = "px";
  const defaultSpeed = 3;

  commonSpecs(SquareLoader, sizeDefaults(defaultSize));
  cssSpecs(SquareLoader);

  it("should contain styles created using default props", () => {
    const loader = mount(<SquareLoader />);
    expect(loader).toHaveStyleRule("height", `${defaultSize}${defaultUnit}`);
    expect(loader).toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);
    expect(loader).toHaveStyleRule("background-color", defaultColor);
  });

  it("should render the correct color based on props", () => {
    const color = "#e2e2e2";
    const loader = mount(<SquareLoader color={color} />);
    expect(loader).not.toHaveStyleRule("background-color", defaultColor);
    expect(loader).toHaveStyleRule("background-color", color);
  });

  const sizeExpectStatements = (loader: ReactWrapper, length: number, unit?: string) => {
    expect(loader).not.toHaveStyleRule("height", `${defaultSize}${defaultUnit}`);
    expect(loader).not.toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);

    expect(loader).toHaveStyleRule("height", `${length}${unit || defaultUnit}`);
    expect(loader).toHaveStyleRule("width", `${length}${unit || defaultUnit}`);
  };
  lengthSpecs(SquareLoader, "size", sizeExpectStatements);

  const speedMultiplierExpectStatements = (loader: ReactWrapper, multiplier: number) => {
    expect(loader.find("span")).toHaveStyleRule("animation", expect.stringContaining(`${defaultSpeed * multiplier}s`));
  };

  speedMultiplierSpecs(SquareLoader, speedMultiplierExpectStatements);
});
