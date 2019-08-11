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
  let defaultColor: string = "#000000";
  let defaultSize: number = 60;
  let defaultUnit: string = "px";
  let defaultWrapperSize: number = defaultSize + (defaultSize / 7) * 2;

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
    expect(loader.find("div div").at(0)).toHaveStyleRule("background-color", defaultColor);
    expect(loader.find("div div").at(0)).toHaveStyleRule(
      "height",
      `${defaultSize / 7}${defaultUnit}`
    );
    expect(loader.find("div div").at(0)).toHaveStyleRule(
      "width",
      `${defaultSize / 7}${defaultUnit}`
    );
    expect(loader.find("div div").at(1)).toHaveStyleRule(
      "border",
      `${defaultSize / 7}${defaultUnit} solid ${defaultColor}`
    );
    expect(loader.find("div div").at(1)).toHaveStyleRule("height", `60${defaultUnit}`);
    expect(loader.find("div div").at(1)).toHaveStyleRule("width", `60${defaultUnit}`);
  });

  it("should render null if loading prop is set as false", () => {
    loader = mount(<MoonLoader loading={false} />);
    expect(loader.isEmptyRender()).toBe(true);
  });

  it("should render the correct color based on prop", () => {
    let color: string = "#e2e2e2";
    loader = mount(<MoonLoader color={color} />);
    expect(loader.find("div div")).not.toHaveStyleRule("background-color", defaultColor);
    expect(loader.find("div div")).toHaveStyleRule("background-color", color);
  });

  it("should render the correct size based on props", () => {
    let size: number = 21;

    loader = mount(<MoonLoader size={21} />);
    let wrapperSize: number = 21 + (21 / 7) * 2;
    expect(loader).not.toHaveStyleRule("height", `${defaultWrapperSize}${defaultUnit}`);
    expect(loader).not.toHaveStyleRule("width", `${defaultWrapperSize}${defaultUnit}`);
    expect(loader).toHaveStyleRule("height", `${wrapperSize}${defaultUnit}`);
    expect(loader).toHaveStyleRule("width", `${wrapperSize}${defaultUnit}`);
  });

  it("should render the correct sizeUnit based on props", () => {
    let unit: string = "%";

    loader = mount(<MoonLoader sizeUnit={unit} />);
    expect(loader).not.toHaveStyleRule("height", `${defaultWrapperSize}${defaultUnit}`);
    expect(loader).not.toHaveStyleRule("width", `${defaultWrapperSize}${defaultUnit}`);
    expect(loader).toHaveStyleRule("height", `${defaultWrapperSize}${unit}`);
    expect(loader).toHaveStyleRule("width", `${defaultWrapperSize}${unit}`);
  });

  it("should render the css override based on props", () => {
    loader = mount(
      <MoonLoader css={"position: absolute; width: 100px; height: 200px; color: blue;"} />
    );
    let defaultSize: number = 60 + (60 / 7) * 2;
    expect(loader).not.toHaveStyleRule("position", "relative");
    expect(loader).not.toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);
    expect(loader).not.toHaveStyleRule("height", `${defaultSize}${defaultUnit}`);
    expect(loader).toHaveStyleRule("position", "absolute");
    expect(loader).toHaveStyleRule("width", "100px");
    expect(loader).toHaveStyleRule("height", "200px");
    expect(loader).toHaveStyleRule("color", "blue");
  });
});
