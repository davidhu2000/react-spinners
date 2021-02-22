import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import { matchers } from "@emotion/jest";
expect.extend(matchers);

import BeatLoader from "../src/BeatLoader";
import { sizeMarginDefaults } from "../src/helpers";
import { commonSpecs, cssSpecs, lengthSpecs, speedMultiplierSpecs } from "./sharedSpecs";

describe("BeatLoader", () => {
  const defaultColor = "#000000";
  const defaultSize = 15;
  const defaultMargin = 2;
  const defaultUnit = "px";
  const defaultSpeed = 0.7;
  const defaultDelay = 0.35;

  commonSpecs(BeatLoader, sizeMarginDefaults(defaultSize));
  cssSpecs(BeatLoader);

  it("should contain styles created using default props", () => {
    const loader = mount(<BeatLoader />);
    expect(loader.find("span span")).toHaveStyleRule("height", `${defaultSize}${defaultUnit}`);
    expect(loader.find("span span")).toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);
    expect(loader.find("span span")).toHaveStyleRule("margin", `${defaultMargin}${defaultUnit}`);
    expect(loader.find("span span")).toHaveStyleRule("background-color", defaultColor);
  });

  it("should render the correct color based on prop", () => {
    const loader = mount(<BeatLoader color="#e2e2e2" />);
    expect(loader.find("span span")).not.toHaveStyleRule("background-color", defaultColor);
    expect(loader.find("span span")).toHaveStyleRule("background-color", "#e2e2e2");
  });

  const sizeExpectStatements = (loader: ReactWrapper, length: number, unit?: string) => {
    expect(loader.find("span span")).not.toHaveStyleRule("height", `${defaultSize}${defaultUnit}`);
    expect(loader.find("span span")).not.toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);
    expect(loader.find("span span")).toHaveStyleRule("height", `${length}${unit || defaultUnit}`);
    expect(loader.find("span span")).toHaveStyleRule("width", `${length}${unit || defaultUnit}`);
  };
  lengthSpecs(BeatLoader, "size", sizeExpectStatements);

  const marginExpectStatements = (loader: ReactWrapper, length: number, unit?: string) => {
    expect(loader.find("span span")).not.toHaveStyleRule(
      "margin",
      `${defaultMargin}${defaultUnit}`
    );
    expect(loader.find("span span")).toHaveStyleRule("margin", `${length}${unit || defaultUnit}`);
  };
  lengthSpecs(BeatLoader, "margin", marginExpectStatements);

  const speedMultiplierExpectStatements = (loader: ReactWrapper, multiplier: number) => {
    [0, 1, 2].forEach((index) => {
      expect(loader.find("span span").at(index)).toHaveStyleRule(
        "animation",
        expect.stringContaining(`${defaultSpeed * multiplier}s`)
      );
    });

    expect(loader.find("span span").at(1)).toHaveStyleRule(
      "animation",
      expect.stringContaining(`${defaultDelay * multiplier}s`)
    );
  };
  speedMultiplierSpecs(BeatLoader, speedMultiplierExpectStatements);
});
