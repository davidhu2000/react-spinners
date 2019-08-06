import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import { matchers } from "jest-emotion";
expect.extend(matchers);

import ClimbingBoxLoader from "../src/ClimbingBoxLoader";
import { LoaderSizeProps } from "../src/interfaces";
import { sizeDefaults } from "../src/helpers";

describe("ClimbingBoxLoader", () => {
  let loader: ReactWrapper;
  let props: LoaderSizeProps;
  let defaultColor: string = "#000000";
  let defaultSize: number = 15;
  let defaultUnit: string = "px";

  it("should match snapshot", () => {
    loader = mount(<ClimbingBoxLoader />);
    expect(loader).toMatchSnapshot();
  });

  it("should contain default props if no props are passed", () => {
    props = loader.props();
    expect(props).toEqual(sizeDefaults(defaultSize));
  });

  it("parent div should contain styles created using default props", () => {
    expect(loader.find("div div")).toHaveStyleRule("font-size", `${defaultSize}${defaultUnit}`);
  });

  it("children div should contain styles created using default props", () => {
    expect(loader.find("div div div").at(0)).toHaveStyleRule(
      "border",
      `0.25em solid ${defaultColor}`
    );
    expect(loader.find("div div div").at(1)).toHaveStyleRule(
      "border-left",
      `0.25em solid ${defaultColor}`
    );
  });

  it("should render null if loading prop is set as false", () => {
    loader = mount(<ClimbingBoxLoader loading={false} />);
    expect(loader.isEmptyRender()).toBe(true);
  });

  it("should render the correct color based on prop", () => {
    let color: string = "#e2e2e2";
    loader = mount(<ClimbingBoxLoader color={color} />);

    expect(loader.find("div div div").at(0)).not.toHaveStyleRule(
      "border",
      `0.25em solid ${defaultColor}`
    );
    expect(loader.find("div div div").at(0)).toHaveStyleRule("border", `0.25em solid ${color}`);

    expect(loader.find("div div div").at(1)).not.toHaveStyleRule(
      "border-left",
      `0.25em solid ${defaultColor}`
    );
    expect(loader.find("div div div").at(1)).toHaveStyleRule(
      "border-left",
      `0.25em solid ${color}`
    );
  });

  it("should render the correct size based on props", () => {
    let size: number = 18;
    loader = mount(<ClimbingBoxLoader size={size} />);
    expect(loader.find("div div")).not.toHaveStyleRule("font-size", `${defaultSize}${defaultUnit}`);
    expect(loader.find("div div")).toHaveStyleRule("font-size", `${size}${defaultUnit}`);
  });

  it("should render the correct sizeUnit based on props", () => {
    let unit: string = "%";
    loader = mount(<ClimbingBoxLoader sizeUnit={unit} />);
    expect(loader.find("div div")).not.toHaveStyleRule("font-size", `${defaultSize}${defaultUnit}`);
    expect(loader.find("div div")).toHaveStyleRule("font-size", `${defaultSize}${unit}`);
  });

  it("should render the css override based on props", () => {
    loader = mount(
      <ClimbingBoxLoader css={"position: absolute; width: 100px; height: 200px; color: blue;"} />
    );
    expect(loader).not.toHaveStyleRule("position", "relative");
    expect(loader).not.toHaveStyleRule("width", "7.1em");
    expect(loader).not.toHaveStyleRule("height", "7.1em");
    expect(loader).toHaveStyleRule("position", "absolute");
    expect(loader).toHaveStyleRule("width", "100px");
    expect(loader).toHaveStyleRule("height", "200px");
    expect(loader).toHaveStyleRule("color", "blue");
  });
});
