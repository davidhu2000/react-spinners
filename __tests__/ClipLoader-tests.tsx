import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import { matchers } from "@emotion/jest";
expect.extend(matchers);

import ClipLoader from "../src/ClipLoader";
import { sizeDefaults } from "../src/helpers";
import { commonSpecs, cssSpecs, lengthSpecs, speedMultiplierSpecs } from "./sharedSpecs";

describe("ClipLoader", () => {
  const defaultColor = "#000000";
  const defaultSize = 35;
  const defaultUnit = "px";
  const defaultSpeed = 0.75;

  commonSpecs(ClipLoader, sizeDefaults(defaultSize));
  cssSpecs(ClipLoader);

  it("parent span should contain styles created using default props", () => {
    const loader = mount(<ClipLoader />);
    expect(loader).toHaveStyleRule("height", `${defaultSize}${defaultUnit}`);
    expect(loader).toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);
    expect(loader).toHaveStyleRule("border-color", defaultColor);
  });

  it("should render the correct color based on prop", () => {
    const color = "#e2e2e2";
    const loader = mount(<ClipLoader color={color} />);
    expect(loader).not.toHaveStyleRule("border-color", defaultColor);
    expect(loader).toHaveStyleRule("border-color", color);
  });

  const sizeExpectStatements = (loader: ReactWrapper, length: number, unit?: string) => {
    expect(loader).not.toHaveStyleRule("height", `${defaultSize}${defaultUnit}`);
    expect(loader).not.toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);
    expect(loader).toHaveStyleRule("height", `${length}${unit || defaultUnit}`);
    expect(loader).toHaveStyleRule("width", `${length}${unit || defaultUnit}`);
  };
  lengthSpecs(ClipLoader, "size", sizeExpectStatements);

  const speedMultiplierExpectStatements = (loader: ReactWrapper, multiplier: number) => {
    expect(loader.find("span")).toHaveStyleRule("animation", expect.stringContaining(`${defaultSpeed * multiplier}s`));
  };
  speedMultiplierSpecs(ClipLoader, speedMultiplierExpectStatements);
});
