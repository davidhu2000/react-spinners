import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import { matchers } from "jest-emotion";
expect.extend(matchers);

import FadeLoader from "../src/FadeLoader";
import { LoaderHeightWidthRadiusProps } from "../src/interfaces";
import { heightWidthRadiusDefaults } from "../src/helpers";

describe("FadeLoader", () => {
  let loader: ReactWrapper;
  let props: LoaderHeightWidthRadiusProps;
  let defaultColor: string = "#000000";
  let defaultHeight: number = 15;
  let defaultWidth: number = 5;
  let defaultRadius: number = 2;
  let defaultUnit: string = "px";

  it("should match snapshot", () => {
    loader = mount(<FadeLoader />);
    expect(loader).toMatchSnapshot();
  });

  it("should contain default props if no props are passed", () => {
    props = loader.props();
    expect(props).toEqual(heightWidthRadiusDefaults(defaultHeight, defaultWidth, defaultRadius));
  });

  it("should contain styles created using default props", () => {
    for (let i: number = 0; i < 8; i++) {
      expect(loader.find("div div").at(i)).toHaveStyleRule("background-color", defaultColor);
      expect(loader.find("div div").at(i)).toHaveStyleRule(
        "height",
        `${defaultHeight}${defaultUnit}`
      );
      expect(loader.find("div div").at(i)).toHaveStyleRule(
        "width",
        `${defaultWidth}${defaultUnit}`
      );
      expect(loader.find("div div").at(i)).toHaveStyleRule("margin", "2px");
      expect(loader.find("div div").at(i)).toHaveStyleRule(
        "border-radius",
        `${defaultRadius}${defaultUnit}`
      );
    }
  });

  it("should render null if loading prop is set as false", () => {
    loader = mount(<FadeLoader loading={false} />);
    expect(loader.isEmptyRender()).toBe(true);
  });

  it("should render the correct color based on prop", () => {
    loader = mount(<FadeLoader color="#e2e2e2" />);
    expect(loader.find("div div")).not.toHaveStyleRule("background-color", defaultColor);
    expect(loader.find("div div")).toHaveStyleRule("background-color", "#e2e2e2");
  });

  it("should render the correct height based on props", () => {
    let height: number = 18;
    loader = mount(<FadeLoader height={height} />);

    for (let i: number = 0; i < 8; i++) {
      expect(loader.find("div div").at(i)).not.toHaveStyleRule(
        "height",
        `${defaultHeight}${defaultUnit}`
      );

      expect(loader.find("div div").at(i)).toHaveStyleRule("height", `${height}${defaultUnit}`);
    }
  });

  it("should render the correct heightUnit based on props", () => {
    let unit: string = "%";
    loader = mount(<FadeLoader heightUnit={unit} />);

    for (let i: number = 0; i < 8; i++) {
      expect(loader.find("div div").at(i)).not.toHaveStyleRule(
        "height",
        `${defaultHeight}${defaultUnit}`
      );

      expect(loader.find("div div").at(i)).toHaveStyleRule("height", `${defaultHeight}${unit}`);
    }
  });

  it("should render the correct width based on props", () => {
    let width: number = 20;
    loader = mount(<FadeLoader width={width} />);

    for (let i: number = 0; i < 8; i++) {
      expect(loader.find("div div").at(i)).not.toHaveStyleRule(
        "width",
        `${defaultWidth}${defaultUnit}`
      );

      expect(loader.find("div div").at(i)).toHaveStyleRule("width", `${width}${defaultUnit}`);
    }
  });

  it("should render the correct widthUnit based on props", () => {
    let unit: string = "%";
    loader = mount(<FadeLoader widthUnit={unit} />);

    for (let i: number = 0; i < 8; i++) {
      expect(loader.find("div div").at(i)).not.toHaveStyleRule(
        "width",
        `${defaultWidth}${defaultUnit}`
      );

      expect(loader.find("div div").at(i)).toHaveStyleRule("width", `${defaultWidth}${unit}`);
    }
  });

  it("should render the correct radius based on props", () => {
    let radius: number = 8;
    loader = mount(<FadeLoader radius={radius} />);

    for (let i: number = 0; i < 8; i++) {
      expect(loader.find("div div").at(i)).not.toHaveStyleRule(
        "border-radius",
        `${defaultRadius}${defaultUnit}`
      );

      expect(loader.find("div div").at(i)).toHaveStyleRule(
        "border-radius",
        `${radius}${defaultUnit}`
      );
    }
  });

  it("should render the correct radiusUnit based on props", () => {
    let unit: string = "%";
    loader = mount(<FadeLoader radiusUnit={unit} />);

    for (let i: number = 0; i < 8; i++) {
      expect(loader.find("div div").at(i)).not.toHaveStyleRule(
        "radius",
        `${defaultRadius}${defaultUnit}`
      );

      expect(loader.find("div div").at(i)).toHaveStyleRule(
        "border-radius",
        `${defaultRadius}${unit}`
      );
    }
  });

  it("should render the css override based on props", () => {
    loader = mount(
      <FadeLoader css={"position: absolute; width: 100px; height: 200px; color: blue;"} />
    );
    expect(loader).not.toHaveStyleRule("position", "relative");
    expect(loader).not.toHaveStyleRule("width", "60px");
    expect(loader).not.toHaveStyleRule("height", "60px");
    expect(loader).toHaveStyleRule("position", "absolute");
    expect(loader).toHaveStyleRule("width", "100px");
    expect(loader).toHaveStyleRule("height", "200px");
    expect(loader).toHaveStyleRule("color", "blue");
  });
});
