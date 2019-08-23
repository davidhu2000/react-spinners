import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import { matchers } from "jest-emotion";
expect.extend(matchers);

import GridLoader from "../src/GridLoader";
import { LoaderSizeMarginProps } from "../src/interfaces";
import { sizeMarginDefaults } from "../src/helpers";

interface MockMath {
  random: () => number;
}

const mockMath: MockMath = Object.create(global.Math);
mockMath.random = (): number => 0.5;
global.Math = mockMath as Math;

describe("GridLoader", () => {
  let loader: ReactWrapper;
  let props: LoaderSizeMarginProps;
  let defaultColor: string = "#000000";
  let defaultSize: number = 15;
  let defaultUnit: string = "px";
  let wrapperWidthDefault: number = parseFloat(defaultSize.toString()) * 3 + parseFloat("2px") * 6;

  it("should match snapshot", () => {
    loader = mount(<GridLoader />);
    expect(loader).toMatchSnapshot();
  });

  it("should contain default props if no props are passed", () => {
    props = loader.props();
    expect(props).toEqual(sizeMarginDefaults(defaultSize));
  });

  it("should contain styles created using default props", () => {
    expect(loader).toHaveStyleRule("width", `${wrapperWidthDefault}${defaultUnit}`);

    for (let i: number = 0; i < 9; i++) {
      expect(loader.find("div div").at(i)).toHaveStyleRule("background-color", defaultColor);
      expect(loader.find("div div").at(i)).toHaveStyleRule(
        "height",
        `${defaultSize}${defaultUnit}`
      );
      expect(loader.find("div div").at(i)).toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);
      expect(loader.find("div div").at(i)).toHaveStyleRule("margin", "2px");
    }
  });

  it("should render null if loading prop is set as false", () => {
    loader = mount(<GridLoader loading={false} />);
    expect(loader.isEmptyRender()).toBe(true);
  });

  it("should render the correct color based on prop", () => {
    let color: string = "#e2e2e2";
    loader = mount(<GridLoader color={color} />);
    expect(loader.find("div div")).not.toHaveStyleRule("background-color", defaultColor);
    expect(loader.find("div div")).toHaveStyleRule("background-color", color);
  });

  it("should render the correct size for the parent div based on props", () => {
    let size: number = 18;
    let wrapperWidth: number = parseFloat(size.toString()) * 3 + parseFloat("2px") * 6;

    loader = mount(<GridLoader size={size} />);
    expect(loader).not.toHaveStyleRule("width", `${wrapperWidthDefault}${defaultUnit}`);
    expect(loader).toHaveStyleRule("width", `${wrapperWidth}${defaultUnit}`);

    for (let i: number = 0; i < 9; i++) {
      expect(loader.find("div div").at(i)).not.toHaveStyleRule(
        "height",
        `${defaultSize}${defaultUnit}`
      );
      expect(loader.find("div div").at(i)).not.toHaveStyleRule(
        "width",
        `${defaultSize}${defaultUnit}`
      );

      expect(loader.find("div div").at(i)).toHaveStyleRule("height", `${size}${defaultUnit}`);
      expect(loader.find("div div").at(i)).toHaveStyleRule("width", `${size}${defaultUnit}`);
    }
  });

  it("should render the css override based on props", () => {
    loader = mount(
      <GridLoader css={"font-size: 11px; width: 100px; height: 200px; color: blue;"} />
    );
    expect(loader).not.toHaveStyleRule("font-size", "0");
    expect(loader).not.toHaveStyleRule("width", "57px");
    expect(loader).toHaveStyleRule("font-size", "11px");
    expect(loader).toHaveStyleRule("width", "100px");
  });
});
