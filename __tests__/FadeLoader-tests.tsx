import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import { matchers } from "@emotion/jest";
expect.extend(matchers);

import FadeLoader from "../src/FadeLoader";
import { heightWidthRadiusDefaults } from "../src/helpers";
import { commonSpecs, cssSpecs, lengthSpecs, speedMultiplierSpecs } from "./sharedSpecs";

describe("FadeLoader", () => {
  const defaultColor = "#000000";
  const defaultHeight = 15;
  const defaultWidth = 5;
  const defaultRadius = 2;
  const defaultMargin = 2;
  const defaultUnit = "px";
  const defaultSpeed = 1.2;

  commonSpecs(FadeLoader, heightWidthRadiusDefaults(defaultHeight, defaultWidth, defaultRadius));
  cssSpecs(FadeLoader);

  it("should contain styles created using default props", () => {
    const loader = mount(<FadeLoader />);
    for (let i = 0; i < 8; i++) {
      expect(loader.find("span span").at(i)).toHaveStyleRule("background-color", defaultColor);
      expect(loader.find("span span").at(i)).toHaveStyleRule("height", `${defaultHeight}${defaultUnit}`);
      expect(loader.find("span span").at(i)).toHaveStyleRule("width", `${defaultWidth}${defaultUnit}`);
      expect(loader.find("span span").at(i)).toHaveStyleRule("margin", `${defaultMargin}${defaultUnit}`);
      expect(loader.find("span span").at(i)).toHaveStyleRule("border-radius", `${defaultRadius}${defaultUnit}`);
    }
  });

  it("should render the correct color based on prop", () => {
    const loader = mount(<FadeLoader color="#e2e2e2" />);
    expect(loader.find("span span")).not.toHaveStyleRule("background-color", defaultColor);
    expect(loader.find("span span")).toHaveStyleRule("background-color", "#e2e2e2");
  });

  const lengthExpectStatements = (property: string) => (loader: ReactWrapper, length: number, unit?: string) => {
    for (let i = 0; i < 8; i++) {
      expect(loader.find("span span").at(i)).not.toHaveStyleRule(property, `${defaultHeight}${defaultUnit}`);

      expect(loader.find("span span").at(i)).toHaveStyleRule(property, `${length}${unit || defaultUnit}`);
    }
  };
  lengthSpecs(FadeLoader, "height", lengthExpectStatements("height"));
  lengthSpecs(FadeLoader, "width", lengthExpectStatements("width"));
  lengthSpecs(FadeLoader, "radius", lengthExpectStatements("border-radius"));
  lengthSpecs(FadeLoader, "margin", lengthExpectStatements("margin"));

  const speedMultiplierExpectStatements = (loader: ReactWrapper, multiplier: number) => {
    for (let i = 0; i < 8; i++) {
      expect(loader.find("span span").at(i)).toHaveStyleRule(
        "animation",
        expect.stringContaining(`${defaultSpeed * multiplier}s`)
      );
    }
  };
  speedMultiplierSpecs(FadeLoader, speedMultiplierExpectStatements);
});
