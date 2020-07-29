import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import { matchers } from "jest-emotion";
expect.extend(matchers);

import PuffLoader from "../src/PuffLoader";
import { LoaderSizeProps } from "../src/interfaces";
import { sizeDefaults } from "../src/helpers";

describe("PuffLoader", () => {
  let loader: ReactWrapper<LoaderSizeProps, null, PuffLoader>;
  let props: LoaderSizeProps;
  const defaultColor = "#000000";
  const defaultSize = 60;
  const defaultUnit = "px";

  it("should match snapshot", () => {
    loader = mount(<PuffLoader />);
    expect(loader).toMatchSnapshot();
  });

  it("should contain default props if no props are passed", () => {
    props = loader.props();
    expect(props).toEqual(sizeDefaults(defaultSize));
  });

  it("should contain styles created using default props", () => {
    expect(loader).toHaveStyleRule("height", `${defaultSize}${defaultUnit}`);
    expect(loader).toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);
    expect(loader.find("div div")).toHaveStyleRule("height", `${defaultSize}${defaultUnit}`);
    expect(loader.find("div div")).toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);
    expect(loader.find("div div")).toHaveStyleRule("border", `thick solid ${defaultColor}`);
  });

  it("should render null if loading prop is set as false", () => {
    loader = mount(<PuffLoader loading={false} />);
    expect(loader.isEmptyRender()).toBe(true);
  });

  it("should render the correct color based on prop", () => {
    const color = "#e2e2e2";
    loader = mount(<PuffLoader color={color} />);
    expect(loader.find("div div")).not.toHaveStyleRule("border", `thick solid ${defaultColor}`);
    expect(loader.find("div div")).toHaveStyleRule("border", `thick solid ${color}`);
  });

  describe("size prop", () => {
    it("should render the size with px unit when size is a number", () => {
      const size = 18;
      loader = mount(<PuffLoader size={size} />);
      expect(loader).not.toHaveStyleRule("height", `${defaultSize}${defaultUnit}`);
      expect(loader).not.toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);
      expect(loader.find("div div")).not.toHaveStyleRule("height", `${defaultSize}${defaultUnit}`);
      expect(loader.find("div div")).not.toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);

      expect(loader).toHaveStyleRule("height", `${size}${defaultUnit}`);
      expect(loader).toHaveStyleRule("width", `${size}${defaultUnit}`);
      expect(loader.find("div div")).toHaveStyleRule("height", `${size}${defaultUnit}`);
      expect(loader.find("div div")).toHaveStyleRule("width", `${size}${defaultUnit}`);
    });

    it("should render the size as is when size is a string with valid css unit", () => {
      const size = "18px";
      loader = mount(<PuffLoader size={size} />);
      expect(loader).not.toHaveStyleRule("height", `${defaultSize}${defaultUnit}`);
      expect(loader).not.toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);
      expect(loader.find("div div")).not.toHaveStyleRule("height", `${defaultSize}${defaultUnit}`);
      expect(loader.find("div div")).not.toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);

      expect(loader).toHaveStyleRule("height", `${size}`);
      expect(loader).toHaveStyleRule("width", `${size}`);
      expect(loader.find("div div")).toHaveStyleRule("height", `${size}`);
      expect(loader.find("div div")).toHaveStyleRule("width", `${size}`);
    });

    it("should render the size with default unit of px when the unit is incorrect", () => {
      const length = 18;
      const unit = "ad";
      const size = `${length}${unit}`;
      loader = mount(<PuffLoader size={size} />);
      expect(loader).not.toHaveStyleRule("height", `${defaultSize}${defaultUnit}`);
      expect(loader).not.toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);
      expect(loader.find("div div")).not.toHaveStyleRule("height", `${defaultSize}${defaultUnit}`);
      expect(loader.find("div div")).not.toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);

      expect(loader).toHaveStyleRule("height", `${length}${defaultUnit}`);
      expect(loader).toHaveStyleRule("width", `${length}${defaultUnit}`);
      expect(loader.find("div div")).toHaveStyleRule("height", `${length}${defaultUnit}`);
      expect(loader.find("div div")).toHaveStyleRule("width", `${length}${defaultUnit}`);
    });
  });

  it("should render the css override based on props", () => {
    loader = mount(<PuffLoader css={"position: absolute; overflow: scroll;"} />);
    expect(loader).not.toHaveStyleRule("position", "relative");
    expect(loader).toHaveStyleRule("position", "absolute");
    expect(loader).toHaveStyleRule("overflow", "scroll");
  });
});
