import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import { matchers } from "jest-emotion";
expect.extend(matchers);

import PropagateLoader from "../src/PropagateLoader";
import { LoaderSizeProps } from "../src/interfaces";
import { sizeDefaults } from "../src/helpers";

describe("PropagateLoader", () => {
  let loader: ReactWrapper;
  let props: LoaderSizeProps;
  const defaultSize = 15;
  const defaultColor = "#000000";
  const defaultUnit = "px";

  it("should match snapshot", () => {
    loader = mount(<PropagateLoader />);
    expect(loader).toMatchSnapshot();
  });

  it("should contain default props if no props are passed", () => {
    props = loader.props();
    expect(props).toEqual(sizeDefaults(defaultSize));
  });

  it("should contain styles created using default props", () => {
    for (let i = 0; i < 6; i++) {
      expect(loader.find("span span").at(i)).toHaveStyleRule(
        "height",
        `${defaultSize}${defaultUnit}`
      );
      expect(loader.find("span span").at(i)).toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);
      expect(loader.find("span span").at(i)).toHaveStyleRule("background", defaultColor);
      expect(loader.find("span span").at(i)).toHaveStyleRule(
        "font-size",
        `${defaultSize / 3}${defaultUnit}`
      );
    }
  });

  it("should render null if loading prop is set as false", () => {
    loader = mount(<PropagateLoader loading={false} />);
    expect(loader.isEmptyRender()).toBe(true);
  });

  it("should render the correct color based on props", () => {
    const color = "#e2e2e2";
    loader = mount(<PropagateLoader color={color} />);

    for (let i = 0; i < 6; i++) {
      expect(loader.find("span span").at(i)).not.toHaveStyleRule("background", defaultColor);

      expect(loader.find("span span").at(i)).toHaveStyleRule("background", color);
    }
  });

  it("should render the correct size based on props", () => {
    const size = 21;
    loader = mount(<PropagateLoader size={size} />);

    for (let i = 0; i < 6; i++) {
      expect(loader.find("span span").at(i)).not.toHaveStyleRule(
        "height",
        `${defaultSize}${defaultUnit}`
      );
      expect(loader.find("span span").at(i)).not.toHaveStyleRule(
        "width",
        `${defaultSize}${defaultUnit}`
      );
      expect(loader.find("span span").at(i)).not.toHaveStyleRule(
        "font-size",
        `${defaultSize / 3}${defaultUnit}`
      );

      expect(loader.find("span span").at(i)).toHaveStyleRule("height", `${size}${defaultUnit}`);
      expect(loader.find("span span").at(i)).toHaveStyleRule("width", `${size}${defaultUnit}`);
      expect(loader.find("span span").at(i)).toHaveStyleRule(
        "font-size",
        `${size / 3}${defaultUnit}`
      );
    }
  });

  describe("size props", () => {
    it("should render the size with px unit when size is a number", () => {
      const size = 18;
      loader = mount(<PropagateLoader size={size} />);
      for (let i = 0; i < 6; i++) {
        expect(loader.find("span span").at(i)).not.toHaveStyleRule(
          "height",
          `${defaultSize}${defaultUnit}`
        );
        expect(loader.find("span span").at(i)).not.toHaveStyleRule(
          "width",
          `${defaultSize}${defaultUnit}`
        );
        expect(loader.find("span span").at(i)).not.toHaveStyleRule(
          "font-size",
          `${defaultSize / 3}${defaultUnit}`
        );

        expect(loader.find("span span").at(i)).toHaveStyleRule("height", `${size}${defaultUnit}`);
        expect(loader.find("span span").at(i)).toHaveStyleRule("width", `${size}${defaultUnit}`);
        expect(loader.find("span span").at(i)).toHaveStyleRule(
          "font-size",
          `${size / 3}${defaultUnit}`
        );
      }
    });

    it("should render the size as is when size is a string with valid css unit", () => {
      const length = 18;
      const unit = "px";
      const size = `${length}${unit}`;

      loader = mount(<PropagateLoader size={size} />);
      for (let i = 0; i < 6; i++) {
        expect(loader.find("span span").at(i)).not.toHaveStyleRule(
          "height",
          `${defaultSize}${defaultUnit}`
        );
        expect(loader.find("span span").at(i)).not.toHaveStyleRule(
          "width",
          `${defaultSize}${defaultUnit}`
        );
        expect(loader.find("span span").at(i)).not.toHaveStyleRule(
          "font-size",
          `${defaultSize / 3}${defaultUnit}`
        );

        expect(loader.find("span span").at(i)).toHaveStyleRule("height", `${size}`);
        expect(loader.find("span span").at(i)).toHaveStyleRule("width", `${size}`);
        expect(loader.find("span span").at(i)).toHaveStyleRule("font-size", `${length / 3}${unit}`);
      }
    });

    it("should render the size with default unit of px when the unit is incorrect", () => {
      const length = 18;
      const unit = "ad";
      const size = `${length}${unit}`;
      loader = mount(<PropagateLoader size={size} />);

      for (let i = 0; i < 6; i++) {
        expect(loader.find("span span").at(i)).not.toHaveStyleRule(
          "height",
          `${defaultSize}${defaultUnit}`
        );
        expect(loader.find("span span").at(i)).not.toHaveStyleRule(
          "width",
          `${defaultSize}${defaultUnit}`
        );
        expect(loader.find("span span").at(i)).not.toHaveStyleRule(
          "font-size",
          `${defaultSize / 3}${defaultUnit}`
        );

        expect(loader.find("span span").at(i)).toHaveStyleRule("height", `${length}${defaultUnit}`);
        expect(loader.find("span span").at(i)).toHaveStyleRule("width", `${length}${defaultUnit}`);
        expect(loader.find("span span").at(i)).toHaveStyleRule(
          "font-size",
          `${length / 3}${defaultUnit}`
        );
      }
    });
  });

  it("should render the css override based on props", () => {
    loader = mount(
      <PropagateLoader css={"position: absolute; width: 100px; height: 200px; color: blue;"} />
    );
    expect(loader).not.toHaveStyleRule("position", "relative");
    expect(loader).toHaveStyleRule("position", "absolute");
    expect(loader).toHaveStyleRule("width", "100px");
    expect(loader).toHaveStyleRule("height", "200px");
    expect(loader).toHaveStyleRule("color", "blue");
  });
});
