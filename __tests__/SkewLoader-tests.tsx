import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import { matchers } from '@emotion/jest';
expect.extend(matchers);

import SkewLoader from "../src/SkewLoader";
import { LoaderSizeProps } from "../src/interfaces";
import { sizeDefaults } from "../src/helpers";

describe("SkewLoader", () => {
  let loader: ReactWrapper;
  let props: LoaderSizeProps;
  const defaultSize = 20;
  const defaultColor = "#000000";
  const defaultUnit = "px";

  it("should match snapshot", () => {
    loader = mount(<SkewLoader />);
    expect(loader).toMatchSnapshot();
  });

  it("should contain default props if no props are passed", () => {
    props = loader.props();
    expect(props).toEqual(sizeDefaults(defaultSize));
  });

  it("should contain styles created using default props", () => {
    expect(loader).toHaveStyleRule("border-left", `${defaultSize}${defaultUnit} solid transparent`);
    expect(loader).toHaveStyleRule(
      "border-right",
      `${defaultSize}${defaultUnit} solid transparent`
    );
    expect(loader).toHaveStyleRule(
      "border-bottom",
      `${defaultSize}${defaultUnit} solid ${defaultColor}`
    );
  });

  it("should render null if loading prop is set as false", () => {
    loader = mount(<SkewLoader loading={false} />);
    expect(loader.isEmptyRender()).toBe(true);
  });

  it("should render the correct color based on props", () => {
    const color = "#e2e2e2";
    loader = mount(<SkewLoader color={color} />);

    expect(loader).not.toHaveStyleRule(
      "border-bottom",
      `${defaultSize}${defaultUnit} solid ${defaultColor}`
    );
    expect(loader).toHaveStyleRule("border-bottom", `${defaultSize}${defaultUnit} solid ${color}`);
  });

  it("should render the correct size based on props", () => {
    const size = 21;
    loader = mount(<SkewLoader size={size} />);

    expect(loader).not.toHaveStyleRule(
      "border-left",
      `${defaultSize}${defaultUnit} solid transparent`
    );
    expect(loader).not.toHaveStyleRule(
      "border-right",
      `${defaultSize}${defaultUnit} solid transparent`
    );
    expect(loader).not.toHaveStyleRule(
      "border-bottom",
      `${defaultSize}${defaultUnit} solid ${defaultColor}`
    );

    expect(loader).toHaveStyleRule("border-left", `${size}${defaultUnit} solid transparent`);
    expect(loader).toHaveStyleRule("border-right", `${size}${defaultUnit} solid transparent`);
    expect(loader).toHaveStyleRule("border-bottom", `${size}${defaultUnit} solid ${defaultColor}`);
  });

  describe("size props", () => {
    it("should render the size with px unit when size is a number", () => {
      const size = 18;
      loader = mount(<SkewLoader size={size} />);

      expect(loader).not.toHaveStyleRule(
        "border-left",
        `${defaultSize}${defaultUnit} solid transparent`
      );
      expect(loader).not.toHaveStyleRule(
        "border-right",
        `${defaultSize}${defaultUnit} solid transparent`
      );
      expect(loader).not.toHaveStyleRule(
        "border-bottom",
        `${defaultSize}${defaultUnit} solid ${defaultColor}`
      );

      expect(loader).toHaveStyleRule("border-left", `${size}${defaultUnit} solid transparent`);
      expect(loader).toHaveStyleRule("border-right", `${size}${defaultUnit} solid transparent`);
      expect(loader).toHaveStyleRule(
        "border-bottom",
        `${size}${defaultUnit} solid ${defaultColor}`
      );
    });

    it("should render the size as is when size is a string with valid css unit", () => {
      const size = "18px";
      loader = mount(<SkewLoader size={size} />);

      expect(loader).not.toHaveStyleRule(
        "border-left",
        `${defaultSize}${defaultUnit} solid transparent`
      );
      expect(loader).not.toHaveStyleRule(
        "border-right",
        `${defaultSize}${defaultUnit} solid transparent`
      );
      expect(loader).not.toHaveStyleRule(
        "border-bottom",
        `${defaultSize}${defaultUnit} solid ${defaultColor}`
      );

      expect(loader).toHaveStyleRule("border-left", `${size} solid transparent`);
      expect(loader).toHaveStyleRule("border-right", `${size} solid transparent`);
      expect(loader).toHaveStyleRule("border-bottom", `${size} solid ${defaultColor}`);
    });

    it("should render the size with default unit of px when the unit is incorrect", () => {
      const length = 18;
      const unit = "ad";
      const size = `${length}${unit}`;
      loader = mount(<SkewLoader size={size} />);

      expect(loader).not.toHaveStyleRule(
        "border-left",
        `${defaultSize}${defaultUnit} solid transparent`
      );
      expect(loader).not.toHaveStyleRule(
        "border-right",
        `${defaultSize}${defaultUnit} solid transparent`
      );
      expect(loader).not.toHaveStyleRule(
        "border-bottom",
        `${defaultSize}${defaultUnit} solid ${defaultColor}`
      );

      expect(loader).toHaveStyleRule("border-left", `${length}${defaultUnit} solid transparent`);
      expect(loader).toHaveStyleRule("border-right", `${length}${defaultUnit} solid transparent`);
      expect(loader).toHaveStyleRule(
        "border-bottom",
        `${length}${defaultUnit} solid ${defaultColor}`
      );
    });
  });

  it("should render the css override based on props", () => {
    loader = mount(<SkewLoader css={"position: absolute; color: blue; display: block"} />);

    expect(loader).not.toHaveStyleRule("display", "inline-block");
    expect(loader).toHaveStyleRule("display", "block");
    expect(loader).toHaveStyleRule("position", "absolute");
    expect(loader).toHaveStyleRule("color", "blue");
  });
});
