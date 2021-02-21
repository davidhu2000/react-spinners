import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import { matchers } from "@emotion/jest";
expect.extend(matchers);

import PulseLoader from "../src/PulseLoader";
import { sizeMarginDefaults } from "../src/helpers";
import { commonSpecs, speedMultiplierSpecs } from "./sharedSpecs";

describe("PulseLoader", () => {
  const defaultSize = 15;
  const defaultMargin = 2;
  const defaultColor = "#000000";
  const defaultUnit = "px";
  const defaultSpeed = 0.75;
  const defaultDelay = 0.12;

  commonSpecs(PulseLoader, sizeMarginDefaults(defaultSize));

  it("should contain styles created using default props", () => {
    const loader = mount(<PulseLoader />);
    for (let i = 0; i < 3; i++) {
      expect(loader.find("span span").at(i)).toHaveStyleRule("background-color", defaultColor);
      expect(loader.find("span span").at(i)).toHaveStyleRule(
        "height",
        `${defaultSize}${defaultUnit}`
      );
      expect(loader.find("span span").at(i)).toHaveStyleRule(
        "width",
        `${defaultSize}${defaultUnit}`
      );
      expect(loader.find("span span").at(i)).toHaveStyleRule(
        "margin",
        `${defaultMargin}${defaultUnit}`
      );
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

  describe("size props", () => {
    it("should render the size with px unit when size is a number", () => {
      const size = 18;
      const loader = mount(<PulseLoader size={size} />);

      for (let i = 0; i < 3; i++) {
        expect(loader.find("span span").at(i)).not.toHaveStyleRule(
          "height",
          `${defaultSize}${defaultUnit}`
        );
        expect(loader.find("span span").at(i)).not.toHaveStyleRule(
          "width",
          `${defaultSize}${defaultUnit}`
        );

        expect(loader.find("span span").at(i)).toHaveStyleRule("height", `${size}${defaultUnit}`);
        expect(loader.find("span span").at(i)).toHaveStyleRule("width", `${size}${defaultUnit}`);
      }
    });

    it("should render the size as is when size is a string with valid css unit", () => {
      const size = "18px";
      const loader = mount(<PulseLoader size={size} />);

      for (let i = 0; i < 3; i++) {
        expect(loader.find("span span").at(i)).not.toHaveStyleRule(
          "height",
          `${defaultSize}${defaultUnit}`
        );
        expect(loader.find("span span").at(i)).not.toHaveStyleRule(
          "width",
          `${defaultSize}${defaultUnit}`
        );

        expect(loader.find("span span").at(i)).toHaveStyleRule("height", `${size}`);
        expect(loader.find("span span").at(i)).toHaveStyleRule("width", `${size}`);
      }
    });

    it("should render the size with default unit of px when the unit is incorrect", () => {
      const length = 18;
      const unit = "ad";
      const size = `${length}${unit}`;
      const loader = mount(<PulseLoader size={size} />);

      for (let i = 0; i < 3; i++) {
        expect(loader.find("span span").at(i)).not.toHaveStyleRule(
          "height",
          `${defaultSize}${defaultUnit}`
        );
        expect(loader.find("span span").at(i)).not.toHaveStyleRule(
          "width",
          `${defaultSize}${defaultUnit}`
        );

        expect(loader.find("span span").at(i)).toHaveStyleRule("height", `${length}${defaultUnit}`);
        expect(loader.find("span span").at(i)).toHaveStyleRule("width", `${length}${defaultUnit}`);
      }
    });
  });

  describe("margin props", () => {
    it("should render the margin with px unit when margin is a number", () => {
      const margin = 18;
      const loader = mount(<PulseLoader margin={margin} />);

      for (let i = 0; i < 3; i++) {
        expect(loader.find("span span").at(i)).not.toHaveStyleRule(
          "margin",
          `${defaultMargin}${defaultUnit}`
        );
        expect(loader.find("span span").at(i)).toHaveStyleRule("margin", `${margin}${defaultUnit}`);
      }
    });

    it("should render the margin as is when margin is a string with valid css unit", () => {
      const margin = "18px";
      const loader = mount(<PulseLoader margin={margin} />);

      for (let i = 0; i < 3; i++) {
        expect(loader.find("span span").at(i)).not.toHaveStyleRule(
          "margin",
          `${defaultMargin}${defaultUnit}`
        );
        expect(loader.find("span span").at(i)).toHaveStyleRule("margin", `${margin}`);
      }
    });

    it("should render the margin with default unit of px when the unit is incorrect", () => {
      const length = 18;
      const unit = "ad";
      const margin = `${length}${unit}`;
      const loader = mount(<PulseLoader margin={margin} />);

      for (let i = 0; i < 3; i++) {
        expect(loader.find("span span").at(i)).not.toHaveStyleRule(
          "margin",
          `${defaultMargin}${defaultUnit}`
        );
        expect(loader.find("span span").at(i)).toHaveStyleRule("margin", `${length}${defaultUnit}`);
      }
    });
  });

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

  it("should render the css override based on props", () => {
    const loader = mount(<PulseLoader css={"position: fixed; width: 100px; color: blue;"} />);
    expect(loader).toHaveStyleRule("position", "fixed");
    expect(loader).toHaveStyleRule("width", "100px");
    expect(loader).toHaveStyleRule("color", "blue");
  });
});
