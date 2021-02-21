import * as React from "react";
import { mount } from "enzyme";
import { matchers } from "@emotion/jest";
expect.extend(matchers);

import BarLoader from "../src/BarLoader";
import { commonSpecs } from "./sharedSpecs/commonSpecs";
import { heightWidthDefaults } from "../src/helpers";

describe("BarLoader", () => {
  const defaultColor = "#000000";
  const defaultHeight = 4;
  const defaultWidth = 100;
  const defaultUnit = "px";

  commonSpecs(BarLoader, heightWidthDefaults(defaultHeight, defaultWidth));

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

  describe("height prop", () => {
    it("should render the height with px unit when size is a number", () => {
      const height = 10;
      const loader = mount(<BarLoader height={height} />);
      expect(loader).not.toHaveStyleRule("height", `${defaultHeight}${defaultUnit}`);
      expect(loader).toHaveStyleRule("height", `${height}${defaultUnit}`);
      expect(loader.find("span span")).not.toHaveStyleRule(
        "height",
        `${defaultHeight}${defaultUnit}`
      );
      expect(loader.find("span span")).toHaveStyleRule("height", `${height}${defaultUnit}`);
    });

    it("should render the height as is when height is a string with valid css unit", () => {
      const height = "18%";
      const loader = mount(<BarLoader height={height} />);
      expect(loader).not.toHaveStyleRule("height", `${defaultHeight}${defaultUnit}`);
      expect(loader).toHaveStyleRule("height", `${height}`);
      expect(loader.find("span span")).not.toHaveStyleRule(
        "height",
        `${defaultHeight}${defaultUnit}`
      );
      expect(loader.find("span span")).toHaveStyleRule("height", `${height}`);
    });

    it("should render the height with default unit of px when the unit is incorrect", () => {
      const length = 18;
      const unit = "ad";
      const height = `${length}${unit}`;
      const loader = mount(<BarLoader height={height} />);
      expect(loader).not.toHaveStyleRule("height", `${defaultHeight}${defaultUnit}`);
      expect(loader).toHaveStyleRule("height", `${length}${defaultUnit}`);
      expect(loader.find("span span")).not.toHaveStyleRule(
        "height",
        `${defaultHeight}${defaultUnit}`
      );
      expect(loader.find("span span")).toHaveStyleRule("height", `${length}${defaultUnit}`);
    });
  });

  describe("width prop", () => {
    it("should render the width with px unit when size is a number", () => {
      const width = 10;
      const loader = mount(<BarLoader width={10} />);
      expect(loader).not.toHaveStyleRule("width", `${defaultWidth}${defaultUnit}`);
      expect(loader).toHaveStyleRule("width", `${width}${defaultUnit}`);
    });

    it("should render the height as is when height is a string with valid css unit", () => {
      const width = "18%";
      const loader = mount(<BarLoader width={width} />);
      expect(loader).not.toHaveStyleRule("width", `${defaultWidth}${defaultUnit}`);
      expect(loader).toHaveStyleRule("width", `${width}`);
    });

    it("should render the width with default unit of px when the unit is incorrect", () => {
      const length = 18;
      const unit = "ad";
      const width = `${length}${unit}`;
      const loader = mount(<BarLoader width={width} />);
      expect(loader).not.toHaveStyleRule("width", `${defaultWidth}${defaultUnit}`);
      expect(loader).toHaveStyleRule("width", `${length}${defaultUnit}`);
    });
  });

  describe("speedMultipler prop", () => {
    const defaultSpeed = 2.1;
    const defaultDelay = 1.15;
    let loader = mount(<BarLoader />);

    const animationSpeedSpec = (multiplier: number) => {
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

    it("should use default speed and delay if speedMultipler is not passed in", () => {
      animationSpeedSpec(1);
    });

    it("should double the animation speed if passed in as 2", () => {
      const speedMultiplier = 2;
      loader = mount(<BarLoader speedMultiplier={speedMultiplier} />);
      animationSpeedSpec(0.5);
    });

    it("should half the animation speed if passed in as 0.5", () => {
      const speedMultiplier = 0.5;
      loader = mount(<BarLoader speedMultiplier={speedMultiplier} />);
      animationSpeedSpec(2);
    });

    it("should stop animating if passed in as 0", () => {
      const speedMultiplier = 0;
      loader = mount(<BarLoader speedMultiplier={speedMultiplier} />);
      animationSpeedSpec(Infinity);
    });
  });

  it("should render the css override based on props", () => {
    const loader = mount(<BarLoader css={"position: absolute; overflow: scroll;"} />);
    expect(loader).not.toHaveStyleRule("position", "relative");
    expect(loader).toHaveStyleRule("position", "absolute");
    expect(loader).not.toHaveStyleRule("overflow", "hidden");
    expect(loader).toHaveStyleRule("overflow", "scroll");
  });
});
