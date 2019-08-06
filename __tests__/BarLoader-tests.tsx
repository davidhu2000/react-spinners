import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import { matchers } from "jest-emotion";
expect.extend(matchers);

import BarLoader from "../src/BarLoader";
import { LoaderHeightWidthProps } from "../src/interfaces";
import { heightWidthDefaults } from "../src/helpers";

describe("BarLoader", () => {
  let loader: ReactWrapper;
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

  it("should render the correct height based on props", () => {
    let height: number = 10;
    loader = mount(<BarLoader height={height} />);
    expect(loader).not.toHaveStyleRule("height", `${defaultHeight}${defaultUnit}`);
    expect(loader).toHaveStyleRule("height", `${height}${defaultUnit}`);
    expect(loader.find("div div")).not.toHaveStyleRule("height", `${defaultHeight}${defaultUnit}`);
    expect(loader.find("div div")).toHaveStyleRule("height", `${height}${defaultUnit}`);
  });

  it("should render the correct heightUnit basd on passed in props", () => {
    let unit: string = "%";
    loader = mount(<BarLoader heightUnit={unit} />);
    expect(loader).not.toHaveStyleRule("height", `${defaultHeight}${defaultUnit}`);
    expect(loader).toHaveStyleRule("height", `${defaultHeight}${unit}`);
    expect(loader.find("div div")).not.toHaveStyleRule("height", `${defaultHeight}${defaultUnit}`);
    expect(loader.find("div div")).toHaveStyleRule("height", `${defaultHeight}${unit}`);
  });

  it("should render the correct width based on props", () => {
    let width: number = 10;
    loader = mount(<BarLoader width={10} />);
    expect(loader).not.toHaveStyleRule("width", `${defaultWidth}${defaultUnit}`);
    expect(loader).toHaveStyleRule("width", `${width}${defaultUnit}`);
  });

  it("should render the correct widthUnit basd on passed in props", () => {
    let unit: string = "%";
    loader = mount(<BarLoader widthUnit="%" />);
    expect(loader).not.toHaveStyleRule("width", `${defaultWidth}${defaultUnit}`);
    expect(loader).toHaveStyleRule("width", `${defaultWidth}${unit}`);
  });

  it("should render the css override based on props", () => {
    loader = mount(<BarLoader css={"position: absolute; overflow: scroll;"} />);
    expect(loader).not.toHaveStyleRule("position", "relative");
    expect(loader).toHaveStyleRule("position", "absolute");
    expect(loader).not.toHaveStyleRule("overflow", "hidden");
    expect(loader).toHaveStyleRule("overflow", "scroll");
  });
});
