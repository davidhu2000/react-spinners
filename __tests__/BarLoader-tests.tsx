import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import { matchers } from "jest-emotion";
expect.extend(matchers);

import BarLoader from "../src/BarLoader";
import { LoaderHeightWidthProps } from "../src/interfaces";
import { heightWidthDefaults } from "../src/helpers";

describe("BarLoader", () => {
  let loader: ReactWrapper<LoaderHeightWidthProps, null, BarLoader>;
  let props: LoaderHeightWidthProps;
  let defaultColor: string = "#000000";
  let defaultHeight: number = 4;
  let defaultWidth: number = 100;
  let defaultUnit: string = "px";

  it("should match snapshot", () => {
    loader = mount(<BarLoader />);
    expect(loader).toMatchSnapshot();
  });

  it("should contain default props if no props are passed", () => {
    props = loader.props();
    expect(props).toEqual(heightWidthDefaults(defaultHeight, defaultWidth));
  });

  it("should contain styles created using default props", () => {
    expect(loader).toHaveStyleRule("height", `${defaultHeight}${defaultUnit}`);
    expect(loader).toHaveStyleRule("width", `${defaultWidth}${defaultUnit}`);
    expect(loader).toHaveStyleRule("background-color", "rgba(0,0,0,0.2)");
    expect(loader.find("div div")).toHaveStyleRule("background-color", defaultColor);
    expect(loader.find("div div")).toHaveStyleRule("height", `${defaultHeight}${defaultUnit}`);
  });

  it("should render null if loading prop is set as false", () => {
    loader = mount(<BarLoader loading={false} />);
    expect(loader.isEmptyRender()).toBe(true);
  });

  it("should render the correct color based on passed in prop", () => {
    let color: string = "#e2e2e2";
    loader = mount(<BarLoader color={color} />);
    expect(loader).not.toHaveStyleRule("background-color", "rgba(0,0,0,0.2)");
    expect(loader).toHaveStyleRule("background-color", "rgba(226,226,226,0.2)");
    expect(loader.find("div div")).toHaveStyleRule("background-color", color);
  });

  describe("height prop", () => {
    it("should render the height with px unit when size is a number", () => {
      let height: number = 10;
      loader = mount(<BarLoader height={height} />);
      expect(loader).not.toHaveStyleRule("height", `${defaultHeight}${defaultUnit}`);
      expect(loader).toHaveStyleRule("height", `${height}${defaultUnit}`);
      expect(loader.find("div div")).not.toHaveStyleRule(
        "height",
        `${defaultHeight}${defaultUnit}`
      );
      expect(loader.find("div div")).toHaveStyleRule("height", `${height}${defaultUnit}`);
    });

    it("should render the height as is when height is a string with valid css unit", () => {
      let height: string = "18%";
      loader = mount(<BarLoader height={height} />);
      expect(loader).not.toHaveStyleRule("height", `${defaultHeight}${defaultUnit}`);
      expect(loader).toHaveStyleRule("height", `${height}`);
      expect(loader.find("div div")).not.toHaveStyleRule(
        "height",
        `${defaultHeight}${defaultUnit}`
      );
      expect(loader.find("div div")).toHaveStyleRule("height", `${height}`);
    });

    it("should render the height with default unit of px when the unit is incorrect", () => {
      let length: number = 18;
      let unit: string = "ad";
      let height: string = `${length}${unit}`;
      loader = mount(<BarLoader height={height} />);
      expect(loader).not.toHaveStyleRule("height", `${defaultHeight}${defaultUnit}`);
      expect(loader).toHaveStyleRule("height", `${length}${defaultUnit}`);
      expect(loader.find("div div")).not.toHaveStyleRule(
        "height",
        `${defaultHeight}${defaultUnit}`
      );
      expect(loader.find("div div")).toHaveStyleRule("height", `${length}${defaultUnit}`);
    });
  });

  describe("width prop", () => {
    it("should render the width with px unit when size is a number", () => {
      let width: number = 10;
      loader = mount(<BarLoader width={10} />);
      expect(loader).not.toHaveStyleRule("width", `${defaultWidth}${defaultUnit}`);
      expect(loader).toHaveStyleRule("width", `${width}${defaultUnit}`);
    });

    it("should render the height as is when height is a string with valid css unit", () => {
      let width: string = "18%";
      loader = mount(<BarLoader width={width} />);
      expect(loader).not.toHaveStyleRule("width", `${defaultWidth}${defaultUnit}`);
      expect(loader).toHaveStyleRule("width", `${width}`);
    });

    it("should render the width with default unit of px when the unit is incorrect", () => {
      let length: number = 18;
      let unit: string = "ad";
      let width: string = `${length}${unit}`;
      loader = mount(<BarLoader width={width} />);
      expect(loader).not.toHaveStyleRule("width", `${defaultWidth}${defaultUnit}`);
      expect(loader).toHaveStyleRule("width", `${length}${defaultUnit}`);
    });
  });

  it("should render the css override based on props", () => {
    loader = mount(<BarLoader css={"position: absolute; overflow: scroll;"} />);
    expect(loader).not.toHaveStyleRule("position", "relative");
    expect(loader).toHaveStyleRule("position", "absolute");
    expect(loader).not.toHaveStyleRule("overflow", "hidden");
    expect(loader).toHaveStyleRule("overflow", "scroll");
  });
});
