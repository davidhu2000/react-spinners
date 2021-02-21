import * as React from "react";
import { mount } from "enzyme";
import { matchers } from "@emotion/jest";
expect.extend(matchers);

import BeatLoader from "../src/BeatLoader";
import { sizeMarginDefaults } from "../src/helpers";
import { commonSpecs } from "./sharedSpecs/commonSpecs";

describe("BeatLoader", () => {
  const defaultColor = "#000000";
  const defaultSize = 15;
  const defaultMargin = 2;
  const defaultUnit = "px";

  commonSpecs(BeatLoader, sizeMarginDefaults(defaultSize));

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

  describe("size prop", () => {
    it("should render the size with px unit when size is a number", () => {
      const size = 18;
      const loader = mount(<BeatLoader size={18} />);
      expect(loader.find("span span")).not.toHaveStyleRule(
        "height",
        `${defaultSize}${defaultUnit}`
      );
      expect(loader.find("span span")).not.toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);
      expect(loader.find("span span")).toHaveStyleRule("height", `${size}${defaultUnit}`);
      expect(loader.find("span span")).toHaveStyleRule("width", `${size}${defaultUnit}`);
    });

    it("should render the size as is when size is a string with valid css unit", () => {
      const size = "18px";
      const loader = mount(<BeatLoader size={size} />);
      expect(loader.find("span span")).not.toHaveStyleRule(
        "height",
        `${defaultSize}${defaultUnit}`
      );
      expect(loader.find("span span")).not.toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);
      expect(loader.find("span span")).toHaveStyleRule("height", `${size}`);
      expect(loader.find("span span")).toHaveStyleRule("width", `${size}`);
    });

    it("should render the size with default unit of px when the unit is incorrect", () => {
      const length = 18;
      const unit = "ad";
      const size = `${length}${unit}`;
      const loader = mount(<BeatLoader size={size} />);
      expect(loader.find("span span")).not.toHaveStyleRule(
        "height",
        `${defaultSize}${defaultUnit}`
      );
      expect(loader.find("span span")).not.toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);
      expect(loader.find("span span")).toHaveStyleRule("height", `${length}${defaultUnit}`);
      expect(loader.find("span span")).toHaveStyleRule("width", `${length}${defaultUnit}`);
    });
  });

  describe("margin prop", () => {
    it("should render the margin with px unit when margin is a number", () => {
      const margin = 18;
      const loader = mount(<BeatLoader margin={18} />);
      expect(loader.find("span span")).not.toHaveStyleRule(
        "margin",
        `${defaultMargin}${defaultUnit}`
      );
      expect(loader.find("span span")).toHaveStyleRule("margin", `${margin}${defaultUnit}`);
    });

    it("should render the margin as is when margin is a string with valid css unit", () => {
      const margin = "18px";
      const loader = mount(<BeatLoader margin={margin} />);
      expect(loader.find("span span")).not.toHaveStyleRule(
        "margin",
        `${defaultMargin}${defaultUnit}`
      );
      expect(loader.find("span span")).toHaveStyleRule("margin", `${margin}`);
    });

    it("should render the margin with default unit of px when the unit is incorrect", () => {
      const length = 18;
      const unit = "ad";
      const margin = `${length}${unit}`;
      const loader = mount(<BeatLoader margin={margin} />);
      expect(loader.find("span span")).not.toHaveStyleRule(
        "margin",
        `${defaultMargin}${defaultUnit}`
      );
      expect(loader.find("span span")).toHaveStyleRule("margin", `${length}${defaultUnit}`);
    });
  });

  it("should render the css override based on props", () => {
    const loader = mount(<BeatLoader css={"position: absolute; overflow: scroll;"} />);
    expect(loader).toHaveStyleRule("position", "absolute");
    expect(loader).toHaveStyleRule("overflow", "scroll");
  });
});
