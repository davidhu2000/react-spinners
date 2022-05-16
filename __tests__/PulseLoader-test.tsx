import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import { matchers } from "@emotion/jest";
expect.extend(matchers);

import PulseLoader from "../src/PulseLoader";
import { sizeMarginDefaults } from "../src/helpers";
import { commonSpecs, cssSpecs, lengthSpecs, speedMultiplierSpecs } from "./sharedSpecs";

describe("PulseLoader", () => {
  const defaultSize = 15;
  const defaultMargin = 2;
  const defaultColor = "#000000";
  const defaultUnit = "px";
  const defaultSpeed = 0.75;
  const defaultDelay = 0.12;

  commonSpecs(PulseLoader, sizeMarginDefaults(defaultSize));
  cssSpecs(PulseLoader);

  it("should contain styles created using default props", () => {
    const loader = mount(<PulseLoader />);
    for (let i = 0; i < 3; i++) {
      expect(loader.find("span span").at(i)).toHaveStyleRule("background-color", defaultColor);
      expect(loader.find("span span").at(i)).toHaveStyleRule("height", `${defaultSize}${defaultUnit}`);
      expect(loader.find("span span").at(i)).toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);
      expect(loader.find("span span").at(i)).toHaveStyleRule("margin", `${defaultMargin}${defaultUnit}`);
    }
  });

  it("should render the correct color based on prop", () => {
    const color = "#e2e2e2";
    const loader = mount(<PulseLoader color={color} />);
    for (let i = 0; i < 3; i++) {
      expect(loader.find("span span").at(i)).not.toHaveStyleRule("background-color", defaultColor);
      expect(loader.find("span span").at(i)).toHaveStyleRule("background-color", color);
    }
  });

  const sizeExpectStatements = (loader: ReactWrapper, length: number, unit?: string) => {
    for (let i = 0; i < 3; i++) {
      expect(loader.find("span span").at(i)).not.toHaveStyleRule("height", `${defaultSize}${defaultUnit}`);
      expect(loader.find("span span").at(i)).not.toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);

      expect(loader.find("span span").at(i)).toHaveStyleRule("height", `${length}${unit || defaultUnit}`);
      expect(loader.find("span span").at(i)).toHaveStyleRule("width", `${length}${unit || defaultUnit}`);
    }
  };
  lengthSpecs(PulseLoader, "size", sizeExpectStatements);

  const marginExpectStatements = (loader: ReactWrapper, length: number, unit?: string) => {
    for (let i = 0; i < 3; i++) {
      expect(loader.find("span span").at(i)).not.toHaveStyleRule("margin", `${defaultMargin}${defaultUnit}`);
      expect(loader.find("span span").at(i)).toHaveStyleRule("margin", `${length}${unit || defaultUnit}`);
    }
  };
  lengthSpecs(PulseLoader, "margin", marginExpectStatements);

  const speedMultiplierExpectStatements = (loader: ReactWrapper, multiplier: number) => {
    for (let i = 0; i < 3; i++) {
      expect(loader.find("span span").at(i)).toHaveStyleRule(
        "animation",
        expect.stringContaining(`${defaultSpeed * multiplier}s`)
      );

      expect(loader.find("span span").at(i)).toHaveStyleRule(
        "animation",
        expect.stringContaining(`${(i + 1) * defaultDelay * multiplier}s`)
      );
    }
  };
  speedMultiplierSpecs(PulseLoader, speedMultiplierExpectStatements);
});
