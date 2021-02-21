import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import { matchers } from "@emotion/jest";
expect.extend(matchers);

import GridLoader from "../src/GridLoader";
import { sizeMarginDefaults } from "../src/helpers";
import { commonSpecs, cssSpecs, lengthSpecs } from "./sharedSpecs";

interface MockMath {
  random: () => number;
}

const mockMath: MockMath = Object.create(global.Math);
mockMath.random = () => 0.5;
global.Math = mockMath as Math;

describe("GridLoader", () => {
  const defaultColor = "#000000";
  const defaultSize = 15;
  const defaultUnit = "px";
  const wrapperWidthDefault = parseFloat(defaultSize.toString()) * 3 + parseFloat("2px") * 6;

  commonSpecs(GridLoader, sizeMarginDefaults(defaultSize));
  cssSpecs(GridLoader);

  it("should contain styles created using default props", () => {
    const loader = mount(<GridLoader />);
    expect(loader).toHaveStyleRule("width", `${wrapperWidthDefault}${defaultUnit}`);

    for (let i = 0; i < 9; i++) {
      expect(loader.find("span span").at(i)).toHaveStyleRule("background-color", defaultColor);
      expect(loader.find("span span").at(i)).toHaveStyleRule(
        "height",
        `${defaultSize}${defaultUnit}`
      );
      expect(loader.find("span span").at(i)).toHaveStyleRule(
        "width",
        `${defaultSize}${defaultUnit}`
      );
      expect(loader.find("span span").at(i)).toHaveStyleRule("margin", "2px");
    }
  });

  it("should render the correct color based on prop", () => {
    const color = "#e2e2e2";
    const loader = mount(<GridLoader color={color} />);
    expect(loader.find("span span")).not.toHaveStyleRule("background-color", defaultColor);
    expect(loader.find("span span")).toHaveStyleRule("background-color", color);
  });

  const sizeExpectStatements = (loader: ReactWrapper, length: number, unit?: string) => {
    const wrapperWidth = parseFloat(length.toString()) * 3 + parseFloat("2px") * 6;
    expect(loader).not.toHaveStyleRule("width", `${wrapperWidthDefault}${defaultUnit}`);
    expect(loader).toHaveStyleRule("width", `${wrapperWidth}${unit || defaultUnit}`);
    for (let i = 0; i < 9; i++) {
      expect(loader.find("span span").at(i)).not.toHaveStyleRule(
        "height",
        `${defaultSize}${defaultUnit}`
      );
      expect(loader.find("span span").at(i)).not.toHaveStyleRule(
        "width",
        `${defaultSize}${defaultUnit}`
      );

      expect(loader.find("span span").at(i)).toHaveStyleRule(
        "height",
        `${length}${unit || defaultUnit}`
      );
      expect(loader.find("span span").at(i)).toHaveStyleRule(
        "width",
        `${length}${unit || defaultUnit}`
      );
    }
  };
  lengthSpecs(GridLoader, "size", sizeExpectStatements);
});
