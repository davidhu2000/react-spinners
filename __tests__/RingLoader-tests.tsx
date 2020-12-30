import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import { matchers } from '@emotion/jest';
expect.extend(matchers);

import RingLoader from "../src/RingLoader";
import { LoaderSizeProps } from "../src/interfaces";
import { sizeDefaults } from "../src/helpers";

describe("RingLoader", () => {
  let loader: ReactWrapper;
  let props: LoaderSizeProps;
  const defaultSize = 60;
  const defaultColor = "#000000";
  const defaultUnit = "px";

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

    for (let i = 0; i < 2; i++) {
      expect(loader.find("span span").at(i)).toHaveStyleRule(
        "height",
        `${defaultSize}${defaultUnit}`
      );
      expect(loader.find("span span").at(i)).toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);
      expect(loader.find("span span").at(i)).toHaveStyleRule(
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
    const color = "#e2e2e2";
    loader = mount(<RingLoader color={color} />);

    for (let i = 0; i < 2; i++) {
      expect(loader.find("span span").at(i)).not.toHaveStyleRule(
        "border",
        `${defaultSize / 10}${defaultUnit} solid ${defaultColor}`
      );

      expect(loader.find("span span").at(i)).toHaveStyleRule(
        "border",
        `${defaultSize / 10}${defaultUnit} solid ${color}`
      );
    }
  });

  describe("size props", () => {
    it("should render the size with px unit when size is a number", () => {
      const size = 18;
      loader = mount(<RingLoader size={size} />);

      expect(loader).not.toHaveStyleRule("height", `${defaultSize}${defaultUnit}`);
      expect(loader).not.toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);
      expect(loader).toHaveStyleRule("height", `${size}${defaultUnit}`);
      expect(loader).toHaveStyleRule("width", `${size}${defaultUnit}`);

      for (let i = 0; i < 2; i++) {
        expect(loader.find("span span").at(i)).not.toHaveStyleRule(
          "height",
          `${defaultSize}${defaultUnit}`
        );
        expect(loader.find("span span").at(i)).not.toHaveStyleRule(
          "width",
          `${defaultSize}${defaultUnit}`
        );
        expect(loader.find("span span").at(i)).not.toHaveStyleRule(
          "border",
          `${defaultSize / 10}${defaultUnit} solid ${defaultColor}`
        );

        expect(loader.find("span span").at(i)).toHaveStyleRule("height", `${size}${defaultUnit}`);
        expect(loader.find("span span").at(i)).toHaveStyleRule("width", `${size}${defaultUnit}`);
        expect(loader.find("span span").at(i)).toHaveStyleRule(
          "border",
          `${size / 10}${defaultUnit} solid ${defaultColor}`
        );
      }
    });

    it("should render the size as is when size is a string with valid css unit", () => {
      const length = 18;
      const unit = "px";
      const size = `${length}${unit}`;
      loader = mount(<RingLoader size={size} />);

      expect(loader).not.toHaveStyleRule("height", `${defaultSize}${defaultUnit}`);
      expect(loader).not.toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);
      expect(loader).toHaveStyleRule("height", `${size}`);
      expect(loader).toHaveStyleRule("width", `${size}`);

      for (let i = 0; i < 2; i++) {
        expect(loader.find("span span").at(i)).not.toHaveStyleRule(
          "height",
          `${defaultSize}${defaultUnit}`
        );
        expect(loader.find("span span").at(i)).not.toHaveStyleRule(
          "width",
          `${defaultSize}${defaultUnit}`
        );
        expect(loader.find("span span").at(i)).not.toHaveStyleRule(
          "border",
          `${defaultSize / 10}${defaultUnit} solid ${defaultColor}`
        );

        expect(loader.find("span span").at(i)).toHaveStyleRule("height", `${size}`);
        expect(loader.find("span span").at(i)).toHaveStyleRule("width", `${size}`);
        expect(loader.find("span span").at(i)).toHaveStyleRule(
          "border",
          `${length / 10}${unit} solid ${defaultColor}`
        );
      }
    });

    it("should render the size with default unit of px when the unit is incorrect", () => {
      const length = 18;
      const unit = "ad";
      const size = `${length}${unit}`;
      loader = mount(<RingLoader size={size} />);

      expect(loader).not.toHaveStyleRule("height", `${defaultSize}${defaultUnit}`);
      expect(loader).not.toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);
      expect(loader).toHaveStyleRule("height", `${length}${defaultUnit}`);
      expect(loader).toHaveStyleRule("width", `${length}${defaultUnit}`);

      for (let i = 0; i < 2; i++) {
        expect(loader.find("span span").at(i)).not.toHaveStyleRule(
          "height",
          `${defaultSize}${defaultUnit}`
        );
        expect(loader.find("span span").at(i)).not.toHaveStyleRule(
          "width",
          `${defaultSize}${defaultUnit}`
        );
        expect(loader.find("span span").at(i)).not.toHaveStyleRule(
          "border",
          `${defaultSize / 10}${defaultUnit} solid ${defaultColor}`
        );

        expect(loader.find("span span").at(i)).toHaveStyleRule("height", `${length}${defaultUnit}`);
        expect(loader.find("span span").at(i)).toHaveStyleRule("width", `${length}${defaultUnit}`);
        expect(loader.find("span span").at(i)).toHaveStyleRule(
          "border",
          `${length / 10}${defaultUnit} solid ${defaultColor}`
        );
      }
    });
  });

  it("should render the css override based on props", () => {
    loader = mount(<RingLoader css={"position: absolute; color: blue;"} />);

    expect(loader).not.toHaveStyleRule("position", "relative");
    expect(loader).toHaveStyleRule("position", "absolute");
    expect(loader).toHaveStyleRule("color", "blue");
  });
});
