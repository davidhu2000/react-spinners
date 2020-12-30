import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import { matchers } from '@emotion/jest';
expect.extend(matchers);

import ClimbingBoxLoader from "../src/ClimbingBoxLoader";
import { LoaderSizeProps } from "../src/interfaces";
import { sizeDefaults } from "../src/helpers";

describe("ClimbingBoxLoader", () => {
  let loader: ReactWrapper<LoaderSizeProps, null, ClimbingBoxLoader>;
  let props: LoaderSizeProps;
  const defaultColor = "#000000";
  const defaultSize = 15;
  const defaultUnit = "px";

  it("should match snapshot", () => {
    loader = mount(<ClimbingBoxLoader />);
    expect(loader).toMatchSnapshot();
  });

  it("should contain default props if no props are passed", () => {
    props = loader.props();
    expect(props).toEqual(sizeDefaults(defaultSize));
  });

  it("parent span should contain styles created using default props", () => {
    expect(loader.find("span span")).toHaveStyleRule("font-size", `${defaultSize}${defaultUnit}`);
  });

  it("children span should contain styles created using default props", () => {
    expect(loader.find("span span span").at(0)).toHaveStyleRule(
      "border",
      `0.25em solid ${defaultColor}`
    );
    expect(loader.find("span span span").at(1)).toHaveStyleRule(
      "border-left",
      `0.25em solid ${defaultColor}`
    );
  });

  it("should render null if loading prop is set as false", () => {
    loader = mount(<ClimbingBoxLoader loading={false} />);
    expect(loader.isEmptyRender()).toBe(true);
  });

  it("should render the correct color based on prop", () => {
    const color = "#e2e2e2";
    loader = mount(<ClimbingBoxLoader color={color} />);

    expect(loader.find("span span span").at(0)).not.toHaveStyleRule(
      "border",
      `0.25em solid ${defaultColor}`
    );
    expect(loader.find("span span span").at(0)).toHaveStyleRule("border", `0.25em solid ${color}`);

    expect(loader.find("span span span").at(1)).not.toHaveStyleRule(
      "border-left",
      `0.25em solid ${defaultColor}`
    );
    expect(loader.find("span span span").at(1)).toHaveStyleRule(
      "border-left",
      `0.25em solid ${color}`
    );
  });

  describe("size props", () => {
    it("should render the size with px unit when size is a number", () => {
      const size = 18;
      loader = mount(<ClimbingBoxLoader size={size} />);
      expect(loader.find("span span")).not.toHaveStyleRule(
        "font-size",
        `${defaultSize}${defaultUnit}`
      );
      expect(loader.find("span span")).toHaveStyleRule("font-size", `${size}${defaultUnit}`);
    });

    it("should render the size as is when size is a string with valid css unit", () => {
      const size = "18px";
      loader = mount(<ClimbingBoxLoader size={size} />);
      expect(loader.find("span span")).not.toHaveStyleRule(
        "font-size",
        `${defaultSize}${defaultUnit}`
      );
      expect(loader.find("span span")).toHaveStyleRule("font-size", `${size}`);
    });

    it("should render the size with default unit of px when the unit is incorrect", () => {
      const length = 18;
      const unit = "ad";
      const size = `${length}${unit}`;
      loader = mount(<ClimbingBoxLoader size={size} />);
      expect(loader.find("span span")).not.toHaveStyleRule(
        "font-size",
        `${defaultSize}${defaultUnit}`
      );
      expect(loader.find("span span")).toHaveStyleRule("font-size", `${length}${defaultUnit}`);
    });
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
