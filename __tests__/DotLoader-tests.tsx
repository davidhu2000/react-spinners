import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import { matchers } from "@emotion/jest";
expect.extend(matchers);

import DotLoader from "../src/DotLoader";
import { sizeDefaults } from "../src/helpers";
import { commonSpecs, cssSpecs, lengthSpecs, speedMultiplierSpecs } from "./sharedSpecs";

describe("DotLoader", () => {
  const defaultColor = "#000000";
  const defaultSize = 60;
  const defaultUnit = "px";
  const defaultSpeed = 2;

  commonSpecs(DotLoader, sizeDefaults(defaultSize));
  cssSpecs(DotLoader);

  it("should contain styles created using default props", () => {
    const childSize = defaultSize / 2;
    const loader = mount(<DotLoader />);
    expect(loader).toHaveStyleRule("height", `${defaultSize}${defaultUnit}`);
    expect(loader).toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);

    for (let i = 0; i < 2; i++) {
      expect(loader.find("span span").at(i)).toHaveStyleRule("background-color", defaultColor);
      expect(loader.find("span span").at(i)).toHaveStyleRule("height", `${childSize}${defaultUnit}`);
      expect(loader.find("span span").at(i)).toHaveStyleRule("width", `${childSize}${defaultUnit}`);
    }
  });

  it("should render the correct color based on prop", () => {
    const color = "#e2e2e2";
    const loader = mount(<DotLoader color={color} />);
    expect(loader.find("span span")).not.toHaveStyleRule("background-color", defaultColor);
    expect(loader.find("span span")).toHaveStyleRule("background-color", color);
  });

  const sizeExpectStatements = (loader: ReactWrapper, length: number, unit?: string) => {
    expect(loader).not.toHaveStyleRule("height", `${defaultSize}${defaultUnit}`);
    expect(loader).not.toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);

    expect(loader).toHaveStyleRule("height", `${length}${unit || defaultUnit}`);
    expect(loader).toHaveStyleRule("width", `${length}${unit || defaultUnit}`);
  };
  lengthSpecs(DotLoader, "size", sizeExpectStatements);

  const speedMultiplierExpectStatements = (loader: ReactWrapper, multiplier: number) => {
    expect(loader.find("span")).toHaveStyleRule("animation", expect.stringContaining(`${defaultSpeed * multiplier}s`));
    expect(loader.find("span span").at(0)).toHaveStyleRule(
      "animation",
      expect.stringContaining(`${defaultSpeed * multiplier}s`)
    );
    expect(loader.find("span span").at(1)).toHaveStyleRule(
      "animation",
      expect.stringContaining(`${defaultSpeed * multiplier}s`)
    );
  };
  speedMultiplierSpecs(DotLoader, speedMultiplierExpectStatements);
});
