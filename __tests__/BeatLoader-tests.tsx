import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import { matchers } from '@emotion/jest';
expect.extend(matchers);

import BeatLoader from "../src/BeatLoader";
import { LoaderSizeMarginProps } from "../src/interfaces";
import { sizeMarginDefaults } from "../src/helpers";

describe("BeatLoader", () => {
  let loader: ReactWrapper<LoaderSizeMarginProps, null, BeatLoader>;
  let props: LoaderSizeMarginProps;
  const defaultColor = "#000000";
  const defaultSize = 15;
  const defaultMargin = 2;
  const defaultUnit = "px";

  it("should match snapshot", () => {
    loader = mount(<BeatLoader />);
    expect(loader).toMatchSnapshot();
  });

  it("should contain default props if no props are passed", () => {
    props = loader.props();
    expect(props).toEqual(sizeMarginDefaults(defaultSize));
  });

  it("should contain styles created using default props", () => {
    props = loader.props();
    expect(loader.find("span span")).toHaveStyleRule("height", `${defaultSize}${defaultUnit}`);
    expect(loader.find("span span")).toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);
    expect(loader.find("span span")).toHaveStyleRule("margin", `${defaultMargin}${defaultUnit}`);
    expect(loader.find("span span")).toHaveStyleRule("background-color", defaultColor);
  });

  it("should render null if loading prop is set as false", () => {
    loader = mount(<BeatLoader loading={false} />);
    expect(loader.isEmptyRender()).toBe(true);
  });

  it("should render the correct color based on prop", () => {
    loader = mount(<BeatLoader color="#e2e2e2" />);
    expect(loader.find("span span")).not.toHaveStyleRule("background-color", defaultColor);
    expect(loader.find("span span")).toHaveStyleRule("background-color", "#e2e2e2");
  });

  describe("size prop", () => {
    it("should render the size with px unit when size is a number", () => {
      const size = 18;
      loader = mount(<BeatLoader size={18} />);
      expect(loader.find("span span")).not.toHaveStyleRule("height", `${defaultSize}${defaultUnit}`);
      expect(loader.find("span span")).not.toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);
      expect(loader.find("span span")).toHaveStyleRule("height", `${size}${defaultUnit}`);
      expect(loader.find("span span")).toHaveStyleRule("width", `${size}${defaultUnit}`);
    });

    it("should render the size as is when size is a string with valid css unit", () => {
      const size = "18px";
      loader = mount(<BeatLoader size={size} />);
      expect(loader.find("span span")).not.toHaveStyleRule("height", `${defaultSize}${defaultUnit}`);
      expect(loader.find("span span")).not.toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);
      expect(loader.find("span span")).toHaveStyleRule("height", `${size}`);
      expect(loader.find("span span")).toHaveStyleRule("width", `${size}`);
    });

    it("should render the size with default unit of px when the unit is incorrect", () => {
      const length = 18;
      const unit = "ad";
      const size = `${length}${unit}`;
      loader = mount(<BeatLoader size={size} />);
      expect(loader.find("span span")).not.toHaveStyleRule("height", `${defaultSize}${defaultUnit}`);
      expect(loader.find("span span")).not.toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);
      expect(loader.find("span span")).toHaveStyleRule("height", `${length}${defaultUnit}`);
      expect(loader.find("span span")).toHaveStyleRule("width", `${length}${defaultUnit}`);
    });
  });

  describe("margin prop", () => {
    it("should render the margin with px unit when margin is a number", () => {
      const margin = 18;
      loader = mount(<BeatLoader margin={18} />);
      expect(loader.find("span span")).not.toHaveStyleRule(
        "margin",
        `${defaultMargin}${defaultUnit}`
      );
      expect(loader.find("span span")).toHaveStyleRule("margin", `${margin}${defaultUnit}`);
    });

    it("should render the margin as is when margin is a string with valid css unit", () => {
      const margin = "18px";
      loader = mount(<BeatLoader margin={margin} />);
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
      loader = mount(<BeatLoader margin={margin} />);
      expect(loader.find("span span")).not.toHaveStyleRule(
        "margin",
        `${defaultMargin}${defaultUnit}`
      );
      expect(loader.find("span span")).toHaveStyleRule("margin", `${length}${defaultUnit}`);
    });
  });

  it("should render the css override based on props", () => {
    loader = mount(<BeatLoader css={"position: absolute; overflow: scroll;"} />);
    expect(loader).toHaveStyleRule("position", "absolute");
    expect(loader).toHaveStyleRule("overflow", "scroll");
  });
});
