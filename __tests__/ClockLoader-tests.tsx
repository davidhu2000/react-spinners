import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import { matchers } from "@emotion/jest";
expect.extend(matchers);

import ClockLoader from "../src/ClockLoader";
import { sizeDefaults } from "../src/helpers";
import { commonSpecs, cssSpecs, lengthSpecs, speedMultiplierSpecs } from "./sharedSpecs";

describe("ClockLoader", () => {
  const defaultColor = "#000000";
  const defaultSize = 50;
  const defaultUnit = "px";
  const defaultSpeedBefore = 8;
  const defaultSpeedAfter = 2;

  commonSpecs(ClockLoader, sizeDefaults(defaultSize));
  cssSpecs(ClockLoader);

  it("should contain styles created using default props", () => {
    const loader = mount(<ClockLoader />);
    expect(loader).toHaveStyleRule("height", `${defaultSize}${defaultUnit}`);
    expect(loader).toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);
    expect(loader).toHaveStyleRule("box-shadow", `inset 0px 0px 0px 2px ${defaultColor}`);
  });

  it("should render the correct color based on prop", () => {
    const color = "#e2e2e2";
    const loader = mount(<ClockLoader color={color} />);
    expect(loader).not.toHaveStyleRule("box-shadow", `inset 0px 0px 0px 2px ${defaultColor}`);
    expect(loader).toHaveStyleRule("box-shadow", `inset 0px 0px 0px 2px ${color}`);
  });

  const sizeExpectStatements = (loader: ReactWrapper, length: number, unit?: string) => {
    expect(loader).not.toHaveStyleRule("height", `${defaultSize}${defaultUnit}`);
    expect(loader).not.toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);

    expect(loader).toHaveStyleRule("height", `${length}${unit || defaultUnit}`);
    expect(loader).toHaveStyleRule("width", `${length}${unit || defaultUnit}`);
  };
  lengthSpecs(ClockLoader, "size", sizeExpectStatements);

  const speedMultiplierExpectStatements = (loader: ReactWrapper, multiplier: number) => {
    expect(loader.find("span")).toHaveStyleRule(
      "animation",
      expect.stringContaining(`${defaultSpeedBefore * multiplier}s`),
      {
        target: ":before"
      }
    );
    expect(loader.find("span")).toHaveStyleRule(
      "animation",
      expect.stringContaining(`${defaultSpeedAfter * multiplier}s`),
      {
        target: ":after"
      }
    );
  };
  speedMultiplierSpecs(ClockLoader, speedMultiplierExpectStatements);
});
