import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import { matchers } from "jest-emotion";
expect.extend(matchers);

import CircleLoader from "../src/CircleLoader";
import { LoaderSizeProps } from "../src/interfaces";
import { sizeDefaults } from "../src/helpers";

describe("CircleLoader", () => {
  let loader: ReactWrapper;
  let props: LoaderSizeProps;
  let defaultColor: string = "#000000";
  let defaultSize: number = 50;
  let defaultUnit: string = "px";

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
    expect(loader.find("div div")).toHaveStyleRule("height", `${defaultSize}${defaultUnit}`);
    expect(loader.find("div div")).toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);
    expect(loader.find("div div")).toHaveStyleRule("border", `1px solid ${defaultColor}`);
  });

  it("should render null if loading prop is set as false", () => {
    loader = mount(<CircleLoader loading={false} />);
    expect(loader.isEmptyRender()).toBe(true);
  });

  it("should render the correct color based on prop", () => {
    let color: string = "#e2e2e2";
    loader = mount(<CircleLoader color={color} />);
    expect(loader.find("div div")).not.toHaveStyleRule("border", `1px solid ${defaultColor}`);
    expect(loader.find("div div")).toHaveStyleRule("border", `1px solid ${color}`);
  });

  it("should render the correct size for the parent div based on props", () => {
    let size: number = 18;
    loader = mount(<CircleLoader size={size} />);

    expect(loader).not.toHaveStyleRule("height", `${defaultSize}${defaultUnit}`);
    expect(loader).not.toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);
    expect(loader.find("div div")).not.toHaveStyleRule("height", `${defaultSize}${defaultUnit}`);
    expect(loader.find("div div")).not.toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);

    expect(loader).toHaveStyleRule("height", `${size}${defaultUnit}`);
    expect(loader).toHaveStyleRule("width", `${size}${defaultUnit}`);
    expect(loader.find("div div")).toHaveStyleRule("height", `${size}${defaultUnit}`);
    expect(loader.find("div div")).toHaveStyleRule("width", `${size}${defaultUnit}`);
  });

  it("should render the correct heightUnit based on props", () => {
    let unit: string = "%";
    loader = mount(<CircleLoader sizeUnit={unit} />);
    expect(loader.find("div div")).not.toHaveStyleRule("height", `${defaultSize}${defaultUnit}`);
    expect(loader.find("div div")).not.toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);
    expect(loader.find("div div")).toHaveStyleRule("height", `${defaultSize}${unit}`);
    expect(loader.find("div div")).toHaveStyleRule("width", `${defaultSize}${unit}`);
  });

  it("should render the css override based on props", () => {
    loader = mount(<CircleLoader css={"position: absolute; overflow: scroll;"} />);
    expect(loader).not.toHaveStyleRule("position", "relative");
    expect(loader).toHaveStyleRule("position", "absolute");
    expect(loader).toHaveStyleRule("overflow", "scroll");
  });
});
