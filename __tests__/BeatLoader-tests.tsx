import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import { matchers } from "jest-emotion";
expect.extend(matchers);

import BeatLoader from "../src/BeatLoader";
import { LoaderSizeMarginProps } from "../src/interfaces";
import { sizeMarginDefaults } from "../src/helpers";

describe("BeatLoader", () => {
  let loader: ReactWrapper;
  let props: LoaderSizeMarginProps;
  let defaultColor: string = "#000000";
  let defaultSize: number = 15;
  let defaultMargin: number = 2;
  let defaultUnit: string = "px";

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
    expect(loader.find("div div")).toHaveStyleRule("height", `${defaultSize}${defaultUnit}`);
    expect(loader.find("div div")).toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);
    expect(loader.find("div div")).toHaveStyleRule("margin", "2px");
    expect(loader.find("div div")).toHaveStyleRule("background-color", defaultColor);
  });

  it("should render null if loading prop is set as false", () => {
    loader = mount(<BeatLoader loading={false} />);
    expect(loader.isEmptyRender()).toBe(true);
  });

  it("should render the correct color based on prop", () => {
    loader = mount(<BeatLoader color="#e2e2e2" />);
    expect(loader.find("div div")).not.toHaveStyleRule("background-color", defaultColor);
    expect(loader.find("div div")).toHaveStyleRule("background-color", "#e2e2e2");
  });

  describe("size prop", () => {
    it("should render the size with px unit when size is a number", () => {
      let size: number = 18;
      loader = mount(<BeatLoader size={18} />);
      expect(loader.find("div div")).not.toHaveStyleRule("height", `${defaultSize}${defaultUnit}`);
      expect(loader.find("div div")).not.toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);
      expect(loader.find("div div")).toHaveStyleRule("height", `${size}${defaultUnit}`);
      expect(loader.find("div div")).toHaveStyleRule("width", `${size}${defaultUnit}`);
    });

    it("should render the size as is when size is a string with valid css unit", () => {
      let size: string = "18px";
      loader = mount(<BeatLoader size={size} />);
      expect(loader.find("div div")).not.toHaveStyleRule("height", `${defaultSize}${defaultUnit}`);
      expect(loader.find("div div")).not.toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);
      expect(loader.find("div div")).toHaveStyleRule("height", `${size}`);
      expect(loader.find("div div")).toHaveStyleRule("width", `${size}`);
    });

    it("should render the size with default unit of px when the unit is incorrect", () => {
      let length: number = 18;
      let unit: string = "ad";
      let size: string = `${length}${unit}`;
      loader = mount(<BeatLoader size={size} />);
      expect(loader.find("div div")).not.toHaveStyleRule("height", `${defaultSize}${defaultUnit}`);
      expect(loader.find("div div")).not.toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);
      expect(loader.find("div div")).toHaveStyleRule("height", `${length}${defaultUnit}`);
      expect(loader.find("div div")).toHaveStyleRule("width", `${length}${defaultUnit}`);
    });
  });

  describe("margin prop", () => {
    it("should render the margin with px unit when margin is a number", () => {
      let margin: number = 18;
      loader = mount(<BeatLoader margin={18} />);
      expect(loader.find("div div")).not.toHaveStyleRule(
        "margin",
        `${defaultMargin}${defaultUnit}`
      );
      expect(loader.find("div div")).toHaveStyleRule("margin", `${margin}${defaultUnit}`);
    });

    it("should render the margin as is when margin is a string with valid css unit", () => {
      let margin: string = "18px";
      loader = mount(<BeatLoader margin={margin} />);
      expect(loader.find("div div")).not.toHaveStyleRule(
        "margin",
        `${defaultMargin}${defaultUnit}`
      );
      expect(loader.find("div div")).toHaveStyleRule("margin", `${margin}`);
    });

    it("should render the margin with default unit of px when the unit is incorrect", () => {
      let length: number = 18;
      let unit: string = "ad";
      let margin: string = `${length}${unit}`;
      loader = mount(<BeatLoader margin={margin} />);
      expect(loader.find("div div")).not.toHaveStyleRule(
        "margin",
        `${defaultMargin}${defaultUnit}`
      );
      expect(loader.find("div div")).toHaveStyleRule("margin", `${length}${defaultUnit}`);
    });
  });

  it("should render the css override based on props", () => {
    loader = mount(<BeatLoader css={"position: absolute; overflow: scroll;"} />);
    expect(loader).toHaveStyleRule("position", "absolute");
    expect(loader).toHaveStyleRule("overflow", "scroll");
  });
});
