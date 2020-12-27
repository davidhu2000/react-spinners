import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import { matchers } from "jest-emotion";
expect.extend(matchers);

import MoonLoader from "../src/MoonLoader";
import { LoaderSizeProps } from "../src/interfaces";
import { sizeDefaults } from "../src/helpers";

describe("MoonLoader", () => {
  let loader: ReactWrapper;
  let props: LoaderSizeProps;
  const defaultColor = "#000000";
  const defaultSize = 60;
  const defaultUnit = "px";
  const defaultWrapperSize = defaultSize + (defaultSize / 7) * 2;

  it("should match snapshot", () => {
    loader = mount(<MoonLoader />);
    expect(loader).toMatchSnapshot();
  });

  it("should contain default props if no props are passed", () => {
    props = loader.props();
    expect(props).toEqual(sizeDefaults(defaultSize));
  });

  it("should contain styles created using default props", () => {
    expect(loader).toHaveStyleRule("height", `${defaultWrapperSize}${defaultUnit}`);
    expect(loader).toHaveStyleRule("width", `${defaultWrapperSize}${defaultUnit}`);
    expect(loader.find("span span").at(0)).toHaveStyleRule("background-color", defaultColor);
    expect(loader.find("span span").at(0)).toHaveStyleRule(
      "height",
      `${defaultSize / 7}${defaultUnit}`
    );
    expect(loader.find("span span").at(0)).toHaveStyleRule(
      "width",
      `${defaultSize / 7}${defaultUnit}`
    );
    expect(loader.find("span span").at(1)).toHaveStyleRule(
      "border",
      `${defaultSize / 7}${defaultUnit} solid ${defaultColor}`
    );
    expect(loader.find("span span").at(1)).toHaveStyleRule("height", `60${defaultUnit}`);
    expect(loader.find("span span").at(1)).toHaveStyleRule("width", `60${defaultUnit}`);
  });

  it("should render null if loading prop is set as false", () => {
    loader = mount(<MoonLoader loading={false} />);
    expect(loader.isEmptyRender()).toBe(true);
  });

  it("should render the correct color based on prop", () => {
    const color = "#e2e2e2";
    loader = mount(<MoonLoader color={color} />);
    expect(loader.find("span span")).not.toHaveStyleRule("background-color", defaultColor);
    expect(loader.find("span span")).toHaveStyleRule("background-color", color);
  });

  it("should render the correct size based on props", () => {
    const size = 21;

    loader = mount(<MoonLoader size={size} />);
    const wrapperSize = 21 + (21 / 7) * 2;
    expect(loader).not.toHaveStyleRule("height", `${defaultWrapperSize}${defaultUnit}`);
    expect(loader).not.toHaveStyleRule("width", `${defaultWrapperSize}${defaultUnit}`);
    expect(loader).toHaveStyleRule("height", `${wrapperSize}${defaultUnit}`);
    expect(loader).toHaveStyleRule("width", `${wrapperSize}${defaultUnit}`);
  });

  describe("size props", () => {
    it("should render the size with px unit when size is a number", () => {
      const size = 18;
      loader = mount(<MoonLoader size={size} />);
      const wrapperSize = size + (size / 7) * 2;
      expect(loader).not.toHaveStyleRule("height", `${defaultWrapperSize}${defaultUnit}`);
      expect(loader).not.toHaveStyleRule("width", `${defaultWrapperSize}${defaultUnit}`);
      expect(loader).toHaveStyleRule("height", `${wrapperSize}${defaultUnit}`);
      expect(loader).toHaveStyleRule("width", `${wrapperSize}${defaultUnit}`);
    });

    it("should render the size as is when size is a string with valid css unit", () => {
      const length = 18;
      const unit = "px";
      const size = `${length}${unit}`;

      loader = mount(<MoonLoader size={size} />);
      const wrapperSize = length + (length / 7) * 2;
      expect(loader).not.toHaveStyleRule("height", `${defaultWrapperSize}${defaultUnit}`);
      expect(loader).not.toHaveStyleRule("width", `${defaultWrapperSize}${defaultUnit}`);
      expect(loader).toHaveStyleRule("height", `${wrapperSize}${unit}`);
      expect(loader).toHaveStyleRule("width", `${wrapperSize}${unit}`);
    });

    it("should render the size with default unit of px when the unit is incorrect", () => {
      const length = 18;
      const unit = "ad";
      const size = `${length}${unit}`;

      loader = mount(<MoonLoader size={size} />);
      const wrapperSize = length + (length / 7) * 2;
      expect(loader).not.toHaveStyleRule("height", `${defaultWrapperSize}${defaultUnit}`);
      expect(loader).not.toHaveStyleRule("width", `${defaultWrapperSize}${defaultUnit}`);
      expect(loader).toHaveStyleRule("height", `${wrapperSize}${defaultUnit}`);
      expect(loader).toHaveStyleRule("width", `${wrapperSize}${defaultUnit}`);
    });
  });

  it("should render the css override based on props", () => {
    loader = mount(
      <MoonLoader css={"position: absolute; width: 100px; height: 200px; color: blue;"} />
    );
    const defaultSize = 60 + (60 / 7) * 2;
    expect(loader).not.toHaveStyleRule("position", "relative");
    expect(loader).not.toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);
    expect(loader).not.toHaveStyleRule("height", `${defaultSize}${defaultUnit}`);
    expect(loader).toHaveStyleRule("position", "absolute");
    expect(loader).toHaveStyleRule("width", "100px");
    expect(loader).toHaveStyleRule("height", "200px");
    expect(loader).toHaveStyleRule("color", "blue");
  });
});
