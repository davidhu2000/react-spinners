import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import { matchers } from "jest-emotion";
expect.extend(matchers);

import RingLoader from "../src/RingLoader";
import { LoaderSizeProps } from "../src/interfaces";
import { sizeDefaults } from "../src/helpers";

describe("RingLoader", () => {
  let loader: ReactWrapper;
  let props: LoaderSizeProps;
  let defaultSize: number = 60;
  let defaultColor: string = "#000000";
  let defaultUnit: string = "px";

  it("should match snapshot", () => {
    loader = mount(<RingLoader />);
    expect(loader).toMatchSnapshot();
  });

  it("should contain default props if no props are passed", () => {
    props = loader.props();
    expect(props).toEqual(sizeDefaults(defaultSize));
  });

  it("should contain styles created using default props", () => {
    expect(loader).toHaveStyleRule("height", `${defaultSize}${defaultUnit}`);
    expect(loader).toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);

    for (let i: number = 0; i < 2; i++) {
      expect(loader.find("div div").at(i)).toHaveStyleRule(
        "height",
        `${defaultSize}${defaultUnit}`
      );
      expect(loader.find("div div").at(i)).toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);
      expect(loader.find("div div").at(i)).toHaveStyleRule(
        "border",
        `${defaultSize / 10}${defaultUnit} solid ${defaultColor}`
      );
    }
  });

  it("should render null if loading prop is set as false", () => {
    loader = mount(<RingLoader loading={false} />);
    expect(loader.isEmptyRender()).toBe(true);
  });

  it("should render the correct color based on props", () => {
    let color: string = "#e2e2e2";
    loader = mount(<RingLoader color={color} />);

    for (let i: number = 0; i < 2; i++) {
      expect(loader.find("div div").at(i)).not.toHaveStyleRule(
        "border",
        `${defaultSize / 10}${defaultUnit} solid ${defaultColor}`
      );

      expect(loader.find("div div").at(i)).toHaveStyleRule(
        "border",
        `${defaultSize / 10}${defaultUnit} solid ${color}`
      );
    }
  });

  it("should render the correct size based on props", () => {
    let size: number = 21;
    loader = mount(<RingLoader size={size} />);

    expect(loader).not.toHaveStyleRule("height", `${defaultSize}${defaultUnit}`);
    expect(loader).not.toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);
    expect(loader).toHaveStyleRule("height", `${size}${defaultUnit}`);
    expect(loader).toHaveStyleRule("width", `${size}${defaultUnit}`);

    for (let i: number = 0; i < 2; i++) {
      expect(loader.find("div div").at(i)).not.toHaveStyleRule(
        "height",
        `${defaultSize}${defaultUnit}`
      );
      expect(loader.find("div div").at(i)).not.toHaveStyleRule(
        "width",
        `${defaultSize}${defaultUnit}`
      );
      expect(loader.find("div div").at(i)).not.toHaveStyleRule(
        "border",
        `${defaultSize / 10}${defaultUnit} solid ${defaultColor}`
      );

      expect(loader.find("div div").at(i)).toHaveStyleRule("height", `${size}${defaultUnit}`);
      expect(loader.find("div div").at(i)).toHaveStyleRule("width", `${size}${defaultUnit}`);
      expect(loader.find("div div").at(i)).toHaveStyleRule(
        "border",
        `${size / 10}${defaultUnit} solid ${defaultColor}`
      );
    }
  });

  it("should render the correct sizeUnit based on props", () => {
    let unit: string = "%";
    loader = mount(<RingLoader sizeUnit={unit} />);

    expect(loader).not.toHaveStyleRule("height", `${defaultSize}${defaultUnit}`);
    expect(loader).not.toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);
    expect(loader).toHaveStyleRule("height", `${defaultSize}${unit}`);
    expect(loader).toHaveStyleRule("width", `${defaultSize}${unit}`);

    for (let i: number = 0; i < 2; i++) {
      expect(loader.find("div div").at(i)).not.toHaveStyleRule(
        "height",
        `${defaultSize}${defaultUnit}`
      );
      expect(loader.find("div div").at(i)).not.toHaveStyleRule(
        "width",
        `${defaultSize}${defaultUnit}`
      );
      expect(loader.find("div div").at(i)).not.toHaveStyleRule(
        "border",
        `${defaultSize / 10}${defaultUnit} solid ${defaultColor}`
      );

      expect(loader.find("div div").at(i)).toHaveStyleRule("height", `${defaultSize}${unit}`);
      expect(loader.find("div div").at(i)).toHaveStyleRule("width", `${defaultSize}${unit}`);
      expect(loader.find("div div").at(i)).toHaveStyleRule(
        "border",
        `${defaultSize / 10}${unit} solid ${defaultColor}`
      );
    }
  });

  it("should render the css override based on props", () => {
    loader = mount(<RingLoader css={"position: absolute; color: blue;"} />);

    expect(loader).not.toHaveStyleRule("position", "relative");
    expect(loader).toHaveStyleRule("position", "absolute");
    expect(loader).toHaveStyleRule("color", "blue");
  });
});
