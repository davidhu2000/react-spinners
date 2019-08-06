import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import { matchers } from "jest-emotion";
expect.extend(matchers);

import BounceLoader from "../src/BounceLoader";
import { LoaderSizeProps } from "../src/interfaces";
import { sizeDefaults } from "../src/helpers";

describe("BounceLoader", () => {
  let loader: ReactWrapper;
  let props: LoaderSizeProps;
  let defaultColor: string = "#000000";
  let defaultSize: number = 60;
  let defaultUnit: string = "px";

  it("should match snapshot", () => {
    loader = mount(<BounceLoader />);
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
    expect(loader.find("div div")).toHaveStyleRule("background-color", defaultColor);
  });

  it("should render null if loading prop is set as false", () => {
    loader = mount(<BounceLoader loading={false} />);
    expect(loader.isEmptyRender()).toBe(true);
  });

  it("should render the correct color based on prop", () => {
    let color: string = "#e2e2e2";
    loader = mount(<BounceLoader color={color} />);
    expect(loader.find("div div")).not.toHaveStyleRule("background-color", defaultColor);
    expect(loader.find("div div")).toHaveStyleRule("background-color", color);
  });

  it("should render the correct size based on props", () => {
    let size: number = 18;
    loader = mount(<BounceLoader size={size} />);
    expect(loader).not.toHaveStyleRule("height", `${defaultSize}${defaultUnit}`);
    expect(loader).not.toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);
    expect(loader.find("div div")).not.toHaveStyleRule("height", `${defaultSize}${defaultUnit}`);
    expect(loader.find("div div")).not.toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);

    expect(loader).toHaveStyleRule("height", `${size}${defaultUnit}`);
    expect(loader).toHaveStyleRule("width", `${size}${defaultUnit}`);
    expect(loader.find("div div")).toHaveStyleRule("height", `${size}${defaultUnit}`);
    expect(loader.find("div div")).toHaveStyleRule("width", `${size}${defaultUnit}`);
  });

  it("should render the correct sizeUnit based on props", () => {
    let unit: string = "%";
    loader = mount(<BounceLoader sizeUnit={unit} />);
    expect(loader.find("div div")).not.toHaveStyleRule("height", `${defaultSize}${defaultUnit}`);
    expect(loader.find("div div")).not.toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);
    expect(loader.find("div div")).toHaveStyleRule("height", `${defaultSize}${unit}`);
    expect(loader.find("div div")).toHaveStyleRule("width", `${defaultSize}${unit}`);
  });

  it("should render the css override based on props", () => {
    loader = mount(<BounceLoader css={"position: absolute; overflow: scroll;"} />);
    expect(loader).not.toHaveStyleRule("position", "relative");
    expect(loader).toHaveStyleRule("position", "absolute");
    expect(loader).toHaveStyleRule("overflow", "scroll");
  });
});
