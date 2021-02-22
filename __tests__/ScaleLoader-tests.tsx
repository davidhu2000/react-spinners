import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import { matchers } from "@emotion/jest";
expect.extend(matchers);

import ScaleLoader from "../src/ScaleLoader";
import { heightWidthRadiusDefaults } from "../src/helpers";
import { commonSpecs, cssSpecs, lengthSpecs } from "./sharedSpecs";

describe("ScaleLoader", () => {
  const defaultColor = "#000000";
  const defaultHeight = 35;
  const defaultWidth = 4;
  const defaultRadius = 2;
  const defaultMargin = 2;
  const defaultUnit = "px";

  commonSpecs(ScaleLoader, heightWidthRadiusDefaults(defaultHeight, defaultWidth, defaultRadius));
  cssSpecs(ScaleLoader);

  it("should contain styles created using default props", () => {
    const loader = mount(<ScaleLoader />);
    for (let i = 0; i < 5; i++) {
      expect(loader.find("span span").at(i)).toHaveStyleRule("background-color", defaultColor);
      expect(loader.find("span span").at(i)).toHaveStyleRule(
        "height",
        `${defaultHeight}${defaultUnit}`
      );
      expect(loader.find("span span").at(i)).toHaveStyleRule(
        "width",
        `${defaultWidth}${defaultUnit}`
      );
      expect(loader.find("span span").at(i)).toHaveStyleRule(
        "border-radius",
        `${defaultRadius}${defaultUnit}`
      );
      expect(loader.find("span span").at(i)).toHaveStyleRule(
        "margin",
        `${defaultMargin}${defaultUnit}`
      );
    }
  });

  it("should render the correct color based on prop", () => {
    const color = "#e2e2e2";
    const loader = mount(<ScaleLoader color={color} />);
    for (let i = 0; i < 5; i++) {
      expect(loader.find("span span")).not.toHaveStyleRule("background-color", defaultColor);
      expect(loader.find("span span")).toHaveStyleRule("background-color", color);
    }
  });

  const lengthExpectStatements = (property: string) => (
    loader: ReactWrapper,
    length: number,
    unit?: string
  ) => {
    expect(loader.find("span span")).not.toHaveStyleRule(
      property,
      `${defaultHeight}${defaultUnit}`
    );
    expect(loader.find("span span")).toHaveStyleRule(property, `${length}${unit || defaultUnit}`);
  };
  lengthSpecs(ScaleLoader, "height", lengthExpectStatements("height"));
  lengthSpecs(ScaleLoader, "width", lengthExpectStatements("width"));
  lengthSpecs(ScaleLoader, "radius", lengthExpectStatements("border-radius"));
  lengthSpecs(ScaleLoader, "margin", lengthExpectStatements("margin"));
});
