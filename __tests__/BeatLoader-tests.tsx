import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import { matchers } from "jest-emotion";
expect.extend(matchers);

import BeatLoader from "../src/BeatLoader";
import { LoaderSizeMarginProps } from "../src/interfaces";
import { sizeMarginDefaults } from "../src/helpers";

describe("BeatLoader", () => {
  let loader: ReactWrapper;
  let props: LoaderSizeMarginProps;
  let defaultColor: string = "#000000";
  let defaultSize: number = 15;
  let defaultUnit: string = "px";

  it("should match snapshot", () => {
    loader = mount(<BeatLoader />);
    expect(loader).toMatchSnapshot();
  });

  it("should contain default props if no props are passed", () => {
    props = loader.props();
    expect(props).toEqual(sizeMarginDefaults(defaultSize));
  });

  it("should contain styles created using default props", () => {
    props = loader.props();
    expect(loader.find("div div")).toHaveStyleRule("height", `${defaultSize}${defaultUnit}`);
    expect(loader.find("div div")).toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);
    expect(loader.find("div div")).toHaveStyleRule("margin", "2px");
    expect(loader.find("div div")).toHaveStyleRule("background-color", defaultColor);
  });

  it("should render null if loading prop is set as false", () => {
    loader = mount(<BeatLoader loading={false} />);
    expect(loader.isEmptyRender()).toBe(true);
  });

  it("should render the correct color based on prop", () => {
    loader = mount(<BeatLoader color="#e2e2e2" />);
    expect(loader.find("div div")).not.toHaveStyleRule("background-color", defaultColor);
    expect(loader.find("div div")).toHaveStyleRule("background-color", "#e2e2e2");
  });

  it("should render the correct size based on props", () => {
    let size: number = 18;
    loader = mount(<BeatLoader size={18} />);
    expect(loader.find("div div")).not.toHaveStyleRule("height", `${defaultSize}${defaultUnit}`);
    expect(loader.find("div div")).not.toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);
    expect(loader.find("div div")).toHaveStyleRule("height", `${size}${defaultUnit}`);
    expect(loader.find("div div")).toHaveStyleRule("width", `${size}${defaultUnit}`);
  });

  it("should render the correct heightUnit basd on props", () => {
    let unit: string = "%";
    loader = mount(<BeatLoader sizeUnit="%" />);
    expect(loader.find("div div")).not.toHaveStyleRule("height", `${defaultSize}${defaultUnit}`);
    expect(loader.find("div div")).not.toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);
    expect(loader.find("div div")).toHaveStyleRule("height", `${defaultSize}${unit}`);
    expect(loader.find("div div")).toHaveStyleRule("width", `${defaultSize}${unit}`);
  });

  it("should render the correct margin props based on props", () => {
    loader = mount(<BeatLoader margin="4%" />);
    expect(loader.find("div div")).not.toHaveStyleRule("margin", "2px");
    expect(loader.find("div div")).toHaveStyleRule("margin", "4%");
  });

  it("should render the css override based on props", () => {
    loader = mount(<BeatLoader css={"position: absolute; overflow: scroll;"} />);
    expect(loader).toHaveStyleRule("position", "absolute");
    expect(loader).toHaveStyleRule("overflow", "scroll");
  });
});
