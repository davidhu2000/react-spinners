import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import { matchers } from "@emotion/jest";
expect.extend(matchers);

import RingLoader from "../src/RingLoader";
import { sizeDefaults } from "../src/helpers";
import { commonSpecs, cssSpecs, lengthSpecs, speedMultiplierSpecs } from "./sharedSpecs";

describe("RingLoader", () => {
  const defaultSize = 60;
  const defaultColor = "#000000";
  const defaultUnit = "px";
  const defaultSpeed = 2;

  commonSpecs(RingLoader, sizeDefaults(defaultSize));
  cssSpecs(RingLoader);

  it("should contain styles created using default props", () => {
    const loader = mount(<RingLoader />);
    expect(loader).toHaveStyleRule("height", `${defaultSize}${defaultUnit}`);
    expect(loader).toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);

    for (let i = 0; i < 2; i++) {
      expect(loader.find("span span").at(i)).toHaveStyleRule("height", `${defaultSize}${defaultUnit}`);
      expect(loader.find("span span").at(i)).toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);
      expect(loader.find("span span").at(i)).toHaveStyleRule(
        "border",
        `${defaultSize / 10}${defaultUnit} solid ${defaultColor}`
      );
    }
  });

  it("should render the correct color based on props", () => {
    const color = "#e2e2e2";
    const loader = mount(<RingLoader color={color} />);

    for (let i = 0; i < 2; i++) {
      expect(loader.find("span span").at(i)).not.toHaveStyleRule(
        "border",
        `${defaultSize / 10}${defaultUnit} solid ${defaultColor}`
      );

      expect(loader.find("span span").at(i)).toHaveStyleRule(
        "border",
        `${defaultSize / 10}${defaultUnit} solid ${color}`
      );
    }
  });

  const sizeExpectStatements = (loader: ReactWrapper, length: number, unit?: string) => {
    expect(loader).not.toHaveStyleRule("height", `${defaultSize}${defaultUnit}`);
    expect(loader).not.toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);
    expect(loader).toHaveStyleRule("height", `${length}${unit || defaultUnit}`);
    expect(loader).toHaveStyleRule("width", `${length}${unit || defaultUnit}`);

    for (let i = 0; i < 2; i++) {
      expect(loader.find("span span").at(i)).not.toHaveStyleRule("height", `${defaultSize}${defaultUnit}`);
      expect(loader.find("span span").at(i)).not.toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);
      expect(loader.find("span span").at(i)).not.toHaveStyleRule(
        "border",
        `${defaultSize / 10}${defaultUnit} solid ${defaultColor}`
      );

      expect(loader.find("span span").at(i)).toHaveStyleRule("height", `${length}${unit || defaultUnit}`);
      expect(loader.find("span span").at(i)).toHaveStyleRule("width", `${length}${unit || defaultUnit}`);
      expect(loader.find("span span").at(i)).toHaveStyleRule(
        "border",
        `${length / 10}${unit || defaultUnit} solid ${defaultColor}`
      );
    }
  };
  lengthSpecs(RingLoader, "size", sizeExpectStatements);

  const speedMultiplierExpectStatements = (loader: ReactWrapper, multiplier: number) => {
    for (let i = 0; i < 2; i++) {
      expect(loader.find("span span").at(i)).toHaveStyleRule(
        "animation",
        expect.stringContaining(`${defaultSpeed * multiplier}s`)
      );
    }
  };

  speedMultiplierSpecs(RingLoader, speedMultiplierExpectStatements);
});
