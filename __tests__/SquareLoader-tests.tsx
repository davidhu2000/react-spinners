import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import { matchers } from "jest-emotion";
expect.extend(matchers);

import SquareLoader from "../src/SquareLoader";
import { LoaderSizeProps } from "../src/interfaces";
import { sizeDefaults } from "../src/helpers";

describe("SquareLoader", () => {
  let loader: ReactWrapper;
  let props: LoaderSizeProps;
  let defaultSize: number = 50;
  let defaultColor: string = "#000000";
  let defaultUnit: string = "px";

  it("should match snapshot", () => {
    loader = mount(<SquareLoader />);
    expect(loader).toMatchSnapshot();
  });

  it("should contain default props if no props are passed", () => {
    props = loader.props();
    expect(props).toEqual(sizeDefaults(defaultSize));
  });

  it("should contain styles created using default props", () => {
    expect(loader).toHaveStyleRule("height", `${defaultSize}${defaultUnit}`);
    expect(loader).toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);
    expect(loader).toHaveStyleRule("background-color", defaultColor);
  });

  it("should render null if loading prop is set as false", () => {
    loader = mount(<SquareLoader loading={false} />);
    expect(loader.isEmptyRender()).toBe(true);
  });

  it("should render the correct color based on props", () => {
    let color: string = "#e2e2e2";
    loader = mount(<SquareLoader color={color} />);
    expect(loader).not.toHaveStyleRule("background-color", defaultColor);
    expect(loader).toHaveStyleRule("background-color", color);
  });

  it("should render the correct size based on props", () => {
    let size: number = 21;
    loader = mount(<SquareLoader size={size} />);

    expect(loader).not.toHaveStyleRule("height", `${defaultSize}${defaultUnit}`);
    expect(loader).not.toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);

    expect(loader).toHaveStyleRule("height", `${size}${defaultUnit}`);
    expect(loader).toHaveStyleRule("width", `${size}${defaultUnit}`);
  });

  describe("size props", () => {
    it("should render the size with px unit when size is a number", () => {
      let size: number = 18;
      loader = mount(<SquareLoader size={size} />);

      expect(loader).not.toHaveStyleRule("height", `${defaultSize}${defaultUnit}`);
      expect(loader).not.toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);

      expect(loader).toHaveStyleRule("height", `${size}${defaultUnit}`);
      expect(loader).toHaveStyleRule("width", `${size}${defaultUnit}`);
    });

    it("should render the size as is when size is a string with valid css unit", () => {
      let size: string = "18px";
      loader = mount(<SquareLoader size={size} />);

      expect(loader).not.toHaveStyleRule("height", `${defaultSize}${defaultUnit}`);
      expect(loader).not.toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);

      expect(loader).toHaveStyleRule("height", `${size}`);
      expect(loader).toHaveStyleRule("width", `${size}`);
    });

    it("should render the size with default unit of px when the unit is incorrect", () => {
      let length: number = 18;
      let unit: string = "ad";
      let size: string = `${length}${unit}`;
      loader = mount(<SquareLoader size={size} />);

      expect(loader).not.toHaveStyleRule("height", `${defaultSize}${defaultUnit}`);
      expect(loader).not.toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);

      expect(loader).toHaveStyleRule("height", `${length}${defaultUnit}`);
      expect(loader).toHaveStyleRule("width", `${length}${defaultUnit}`);
    });
  });

  it("should render the css override based on props", () => {
    loader = mount(<SquareLoader css={"position: absolute; color: blue; display: block"} />);

    expect(loader).not.toHaveStyleRule("display", "inline-block");
    expect(loader).toHaveStyleRule("display", "block");
    expect(loader).toHaveStyleRule("position", "absolute");
    expect(loader).toHaveStyleRule("color", "blue");
  });
});
