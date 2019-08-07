import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import { matchers } from "jest-emotion";
expect.extend(matchers);

import ScaleLoader from "../src/ScaleLoader";
import { LoaderHeightWidthRadiusProps } from "../src/interfaces";
import { heightWidthRadiusDefaults } from "../src/helpers";

describe("ScaleLoader", () => {
  let loader: ReactWrapper;
  let props: LoaderHeightWidthRadiusProps;
  let defaultColor: string = "#000000";
  let defaultHeight: number = 35;
  let defaultWidth: number = 4;
  let defaultRadius: number = 2;
  let defaultUnit: string = "px";

  it("should match snapshot", () => {
    loader = mount(<ScaleLoader />);
    expect(loader).toMatchSnapshot();
  });

  it("should contain default props if no props are passed", () => {
    props = loader.props();
    expect(props).toEqual(heightWidthRadiusDefaults(defaultHeight, defaultWidth, defaultRadius));
  });

  it("should contain styles created using default props", () => {
    for (let i: number = 0; i < 5; i++) {
      expect(loader.find("div div").at(i)).toHaveStyleRule("background-color", defaultColor);
      expect(loader.find("div div").at(i)).toHaveStyleRule(
        "height",
        `${defaultHeight}${defaultUnit}`
      );
      expect(loader.find("div div").at(i)).toHaveStyleRule(
        "width",
        `${defaultWidth}${defaultUnit}`
      );
      expect(loader.find("div div").at(i)).toHaveStyleRule(
        "border-radius",
        `${defaultRadius}${defaultUnit}`
      );
      expect(loader.find("div div").at(i)).toHaveStyleRule("margin", "2px");
    }
  });

  it("should render null if loading prop is set as false", () => {
    loader = mount(<ScaleLoader loading={false} />);
    expect(loader.isEmptyRender()).toBe(true);
  });

  it("should render the correct color based on prop", () => {
    let color: string = "#e2e2e2";
    loader = mount(<ScaleLoader color={color} />);
    for (let i: number = 0; i < 5; i++) {
      expect(loader.find("div div")).not.toHaveStyleRule("background-color", defaultColor);
      expect(loader.find("div div")).toHaveStyleRule("background-color", color);
    }
  });

  it("should render the correct height based on props", () => {
    let height: number = 18;
    loader = mount(<ScaleLoader height={height} />);
    expect(loader.find("div div")).not.toHaveStyleRule("height", `${defaultHeight}${defaultUnit}`);
    expect(loader.find("div div")).toHaveStyleRule("height", `${height}${defaultUnit}`);
  });

  it("should render the correct heightUnit based on props", () => {
    let unit: string = "%";
    loader = mount(<ScaleLoader heightUnit={unit} />);
    expect(loader.find("div div")).not.toHaveStyleRule("height", `${defaultHeight}${defaultUnit}`);
    expect(loader.find("div div")).toHaveStyleRule("height", `${defaultHeight}${unit}`);
  });

  it("should render the correct width based on props", () => {
    let width: number = 20;
    loader = mount(<ScaleLoader width={width} />);
    expect(loader.find("div div")).not.toHaveStyleRule("width", `${defaultWidth}${defaultUnit}`);
    expect(loader.find("div div")).toHaveStyleRule("width", `${width}${defaultUnit}`);
  });

  it("should render the correct widthUnit based on props", () => {
    let unit: string = "%";
    loader = mount(<ScaleLoader widthUnit={unit} />);
    expect(loader.find("div div")).not.toHaveStyleRule("width", `${defaultWidth}${defaultUnit}`);
    expect(loader.find("div div")).toHaveStyleRule("width", `${defaultWidth}${unit}`);
  });

  it("should render the correct radius based on props", () => {
    let radius: number = 5;
    loader = mount(<ScaleLoader radius={radius} />);
    expect(loader.find("div div")).not.toHaveStyleRule(
      "border-radius",
      `${defaultRadius}${defaultUnit}`
    );
    expect(loader.find("div div")).toHaveStyleRule("border-radius", `${radius}${defaultUnit}`);
  });

  it("should render the correct radiusUnit based on props", () => {
    let unit: string = "%";
    loader = mount(<ScaleLoader radiusUnit={unit} />);
    expect(loader.find("div div")).not.toHaveStyleRule(
      "border-radius",
      `${defaultRadius}${defaultUnit}`
    );
    expect(loader.find("div div")).toHaveStyleRule("border-radius", `${defaultRadius}${unit}`);
  });

  it("should render the css override based on props", () => {
    loader = mount(
      <ScaleLoader css={"position: absolute; width: 100px; height: 200px; color: blue;"} />
    );
    expect(loader).toHaveStyleRule("position", "absolute");
    expect(loader).toHaveStyleRule("width", "100px");
    expect(loader).toHaveStyleRule("height", "200px");
    expect(loader).toHaveStyleRule("color", "blue");
  });
});
