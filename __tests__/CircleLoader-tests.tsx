import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import { matchers } from "jest-emotion";
expect.extend(matchers);

import CircleLoader from "../src/CircleLoader";
import { LoaderSizeProps } from "../src/interfaces";
import { sizeDefaults } from "../src/helpers";

describe("CircleLoader", () => {
  let loader: ReactWrapper<LoaderSizeProps, null, CircleLoader>;
  let props: LoaderSizeProps;
  const defaultColor = "#000000";
  const defaultSize = 50;
  const defaultUnit = "px";

  it("should match snapshot", () => {
    loader = mount(<CircleLoader />);
    expect(loader).toMatchSnapshot();
  });

  it("should contain default props if no props are passed", () => {
    props = loader.props();
    expect(props).toEqual(sizeDefaults(defaultSize));
  });

  it("should contain styles created using default props", () => {
    expect(loader).toHaveStyleRule("height", `${defaultSize}${defaultUnit}`);
    expect(loader).toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);
    expect(loader.find("span span")).toHaveStyleRule("height", `${defaultSize}${defaultUnit}`);
    expect(loader.find("span span")).toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);
    expect(loader.find("span span")).toHaveStyleRule("border", `1px solid ${defaultColor}`);
  });

  it("should render null if loading prop is set as false", () => {
    loader = mount(<CircleLoader loading={false} />);
    expect(loader.isEmptyRender()).toBe(true);
  });

  it("should render the correct color based on prop", () => {
    const color = "#e2e2e2";
    loader = mount(<CircleLoader color={color} />);
    expect(loader.find("span span")).not.toHaveStyleRule("border", `1px solid ${defaultColor}`);
    expect(loader.find("span span")).toHaveStyleRule("border", `1px solid ${color}`);
  });

  describe("size prop", () => {
    it("should render the size with px unit when size is a number", () => {
      const size = 18;
      loader = mount(<CircleLoader size={size} />);
      expect(loader).not.toHaveStyleRule("height", `${defaultSize}${defaultUnit}`);
      expect(loader).not.toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);
      expect(loader.find("span span")).not.toHaveStyleRule("height", `${defaultSize}${defaultUnit}`);
      expect(loader.find("span span")).not.toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);

      expect(loader).toHaveStyleRule("height", `${size}${defaultUnit}`);
      expect(loader).toHaveStyleRule("width", `${size}${defaultUnit}`);
      expect(loader.find("span span")).toHaveStyleRule("height", `${size}${defaultUnit}`);
      expect(loader.find("span span")).toHaveStyleRule("width", `${size}${defaultUnit}`);
    });

    it("should render the size as is when size is a string with valid css unit", () => {
      const size = "18px";
      loader = mount(<CircleLoader size={size} />);
      expect(loader).not.toHaveStyleRule("height", `${defaultSize}${defaultUnit}`);
      expect(loader).not.toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);
      expect(loader.find("span span")).not.toHaveStyleRule("height", `${defaultSize}${defaultUnit}`);
      expect(loader.find("span span")).not.toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);

      expect(loader).toHaveStyleRule("height", `${size}`);
      expect(loader).toHaveStyleRule("width", `${size}`);
      expect(loader.find("span span")).toHaveStyleRule("height", `${size}`);
      expect(loader.find("span span")).toHaveStyleRule("width", `${size}`);
    });

    it("should render the size with default unit of px when the unit is incorrect", () => {
      const length = 18;
      const unit = "ad";
      const size = `${length}${unit}`;
      loader = mount(<CircleLoader size={size} />);
      expect(loader).not.toHaveStyleRule("height", `${defaultSize}${defaultUnit}`);
      expect(loader).not.toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);
      expect(loader.find("span span")).not.toHaveStyleRule("height", `${defaultSize}${defaultUnit}`);
      expect(loader.find("span span")).not.toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);

      expect(loader).toHaveStyleRule("height", `${length}${defaultUnit}`);
      expect(loader).toHaveStyleRule("width", `${length}${defaultUnit}`);
      expect(loader.find("span span")).toHaveStyleRule("height", `${length}${defaultUnit}`);
      expect(loader.find("span span")).toHaveStyleRule("width", `${length}${defaultUnit}`);
    });
  });

  it("should render the css override based on props", () => {
    loader = mount(<CircleLoader css={"position: absolute; overflow: scroll;"} />);
    expect(loader).not.toHaveStyleRule("position", "relative");
    expect(loader).toHaveStyleRule("position", "absolute");
    expect(loader).toHaveStyleRule("overflow", "scroll");
  });
});
