import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import { matchers } from "@emotion/jest";
expect.extend(matchers);

import BarLoader from "../src/BarLoader";
import { commonSpecs, cssSpecs, lengthSpecs, speedMultiplierSpecs } from "./sharedSpecs/";
import { heightWidthDefaults } from "../src/helpers";

describe("BarLoader", () => {
  const defaultColor = "#000000";
  const defaultHeight = 4;
  const defaultWidth = 100;
  const defaultUnit = "px";
  const defaultSpeed = 2.1;
  const defaultDelay = 1.15;

  commonSpecs(BarLoader, heightWidthDefaults(defaultHeight, defaultWidth));
  cssSpecs(BarLoader);

  it("should contain styles created using default props", () => {
    const loader = mount(<BarLoader />);
    expect(loader).toHaveStyleRule("height", `${defaultHeight}${defaultUnit}`);
    expect(loader).toHaveStyleRule("width", `${defaultWidth}${defaultUnit}`);
    expect(loader).toHaveStyleRule("background-color", "rgba(0, 0, 0, 0.2)");
    expect(loader.find("span span")).toHaveStyleRule("background-color", defaultColor);
    expect(loader.find("span span")).toHaveStyleRule("height", `${defaultHeight}${defaultUnit}`);
  });

  it("should render the correct color based on passed in prop", () => {
    const color = "#e2e2e2";
    const loader = mount(<BarLoader color={color} />);
    expect(loader).not.toHaveStyleRule("background-color", "rgba(0, 0, 0, 0.2)");
    expect(loader).toHaveStyleRule("background-color", "rgba(226, 226, 226, 0.2)");
    expect(loader.find("span span")).toHaveStyleRule("background-color", color);
  });

  const heightExpectStatements = (loader: ReactWrapper, length: number, unit?: string) => {
    expect(loader).not.toHaveStyleRule("height", `${defaultHeight}${defaultUnit}`);
    expect(loader).toHaveStyleRule("height", `${length}${unit || defaultUnit}`);
    expect(loader.find("span span")).not.toHaveStyleRule(
      "height",
      `${defaultHeight}${defaultUnit}`
    );
    expect(loader.find("span span")).toHaveStyleRule("height", `${length}${unit || defaultUnit}`);
  };
  lengthSpecs(BarLoader, "height", heightExpectStatements);

  const widthExpectStatements = (loader: ReactWrapper, length: number, unit?: string) => {
    expect(loader).not.toHaveStyleRule("width", `${defaultWidth}${defaultUnit}`);
    expect(loader).toHaveStyleRule("width", `${length}${unit || defaultUnit}`);
  };
  lengthSpecs(BarLoader, "width", widthExpectStatements);

  const speedMultiplierExpectStatements = (loader: ReactWrapper, multiplier: number) => {
    expect(loader.find("span span").at(0)).toHaveStyleRule(
      "animation",
      expect.stringContaining(`${defaultSpeed * multiplier}s`)
    );
    expect(loader.find("span span").at(1)).toHaveStyleRule(
      "animation",
      expect.stringContaining(`${defaultSpeed * multiplier}s`)
    );
    expect(loader.find("span span").at(1)).toHaveStyleRule(
      "animation",
      expect.stringContaining(`${defaultDelay * multiplier}s`)
    );
  };
  speedMultiplierSpecs(BarLoader, speedMultiplierExpectStatements);
});
