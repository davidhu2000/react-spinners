import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import { matchers } from '@emotion/jest';
expect.extend(matchers);

import PacmanLoader from "../src/PacmanLoader";
import { LoaderSizeMarginProps } from "../src/interfaces";
import { sizeMarginDefaults } from "../src/helpers";

describe("PacmanLoader", () => {
  let loader: ReactWrapper;
  let props: LoaderSizeMarginProps;
  const defaultSize = 25;
  const defaultMargin = 2;
  const defaultColor = "#000000";
  const defaultUnit = "px";

  it("should match snapshot", () => {
    loader = mount(<PacmanLoader />);
    expect(loader).toMatchSnapshot();
  });

  it("should contain default props if no props are passed", () => {
    props = loader.props();
    expect(props).toEqual(sizeMarginDefaults(defaultSize));
  });

  it("should contain styles created using default props", () => {
    expect(loader).toHaveStyleRule("height", `${defaultSize}${defaultUnit}`);
    expect(loader).toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);

    expect(loader.find("span span").at(0)).toHaveStyleRule(
      "border-radius",
      `${defaultSize}${defaultUnit}`
    );
    expect(loader.find("span span").at(1)).toHaveStyleRule(
      "border-radius",
      `${defaultSize}${defaultUnit}`
    );

    for (let i = 2; i < 6; i++) {
      expect(loader.find("span span").at(i)).toHaveStyleRule("background-color", defaultColor);
      expect(loader.find("span span").at(i)).toHaveStyleRule(
        "height",
        `${defaultSize / 3}${defaultUnit}`
      );
      expect(loader.find("span span").at(i)).toHaveStyleRule(
        "width",
        `${defaultSize / 3}${defaultUnit}`
      );
      expect(loader.find("span span").at(i)).toHaveStyleRule(
        "margin",
        `${defaultMargin}${defaultUnit}`
      );
      expect(loader.find("span span").at(i)).toHaveStyleRule("top", `${defaultSize}${defaultUnit}`);
      expect(loader.find("span span").at(i)).toHaveStyleRule(
        "left",
        `${defaultSize * 4}${defaultUnit}`
      );
    }
  });

  it("should render null if loading prop is set as false", () => {
    loader = mount(<PacmanLoader loading={false} />);
    expect(loader.isEmptyRender()).toBe(true);
  });

  it("should render the correct color based on prop", () => {
    const color = "#e2e2e2";
    loader = mount(<PacmanLoader color={color} />);
    for (let i = 2; i < 6; i++) {
      expect(loader.find("span span").at(i)).not.toHaveStyleRule("background-color", defaultColor);
      expect(loader.find("span span").at(i)).toHaveStyleRule("background-color", color);
    }
  });

  describe("size props", () => {
    it("should render the size with px unit when size is a number", () => {
      const size = 18;
      loader = mount(<PacmanLoader size={size} />);

      expect(loader).not.toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);
      expect(loader).toHaveStyleRule("width", `${size}${defaultUnit}`);

      expect(loader.find("span span").at(0)).not.toHaveStyleRule(
        "border-radius",
        `${defaultSize / 3}${defaultUnit}`
      );
      expect(loader.find("span span").at(1)).not.toHaveStyleRule(
        "border-radius",
        `${defaultSize / 3}${defaultUnit}`
      );

      expect(loader.find("span span").at(0)).toHaveStyleRule(
        "border-radius",
        `${size}${defaultUnit}`
      );
      expect(loader.find("span span").at(1)).toHaveStyleRule(
        "border-radius",
        `${size}${defaultUnit}`
      );

      for (let i = 2; i < 6; i++) {
        expect(loader.find("span span").at(i)).not.toHaveStyleRule(
          "height",
          `${defaultSize / 3}${defaultUnit}`
        );
        expect(loader.find("span span").at(i)).not.toHaveStyleRule(
          "width",
          `${defaultSize / 3}${defaultUnit}`
        );
        expect(loader.find("span span").at(i)).not.toHaveStyleRule(
          "top",
          `${defaultSize}${defaultUnit}`
        );
        expect(loader.find("span span").at(i)).not.toHaveStyleRule(
          "left",
          `${defaultSize * 4}${defaultUnit}`
        );

        expect(loader.find("span span").at(i)).toHaveStyleRule("height", `${size / 3}${defaultUnit}`);
        expect(loader.find("span span").at(i)).toHaveStyleRule("width", `${size / 3}${defaultUnit}`);
        expect(loader.find("span span").at(i)).toHaveStyleRule("top", `${size}${defaultUnit}`);
        expect(loader.find("span span").at(i)).toHaveStyleRule("left", `${size * 4}${defaultUnit}`);
      }
    });

    it("should render the size as is when size is a string with valid css unit", () => {
      const length = 18;
      const unit = "px";
      const size = `${length}${unit}`;
      loader = mount(<PacmanLoader size={size} />);

      expect(loader).not.toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);
      expect(loader).toHaveStyleRule("width", `${size}`);

      expect(loader.find("span span").at(0)).not.toHaveStyleRule(
        "border-radius",
        `${defaultSize / 3}${defaultUnit}`
      );
      expect(loader.find("span span").at(1)).not.toHaveStyleRule(
        "border-radius",
        `${defaultSize / 3}${defaultUnit}`
      );

      expect(loader.find("span span").at(0)).toHaveStyleRule("border-radius", `${size}`);
      expect(loader.find("span span").at(1)).toHaveStyleRule("border-radius", `${size}`);

      for (let i = 2; i < 6; i++) {
        expect(loader.find("span span").at(i)).not.toHaveStyleRule(
          "height",
          `${defaultSize / 3}${defaultUnit}`
        );
        expect(loader.find("span span").at(i)).not.toHaveStyleRule(
          "width",
          `${defaultSize / 3}${defaultUnit}`
        );
        expect(loader.find("span span").at(i)).not.toHaveStyleRule(
          "top",
          `${defaultSize}${defaultUnit}`
        );
        expect(loader.find("span span").at(i)).not.toHaveStyleRule(
          "left",
          `${defaultSize * 4}${defaultUnit}`
        );

        expect(loader.find("span span").at(i)).toHaveStyleRule("height", `${length / 3}${unit}`);
        expect(loader.find("span span").at(i)).toHaveStyleRule("width", `${length / 3}${unit}`);
        expect(loader.find("span span").at(i)).toHaveStyleRule("top", `${length}${unit}`);
        expect(loader.find("span span").at(i)).toHaveStyleRule("left", `${length * 4}${unit}`);
      }
    });

    it("should render the size with default unit of px when the unit is incorrect", () => {
      const length = 18;
      const unit = "ad";
      const size = `${length}${unit}`;
      loader = mount(<PacmanLoader size={size} />);

      expect(loader).not.toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);
      expect(loader).toHaveStyleRule("width", `${length}${defaultUnit}`);

      expect(loader.find("span span").at(0)).not.toHaveStyleRule(
        "border-radius",
        `${defaultSize / 3}${defaultUnit}`
      );
      expect(loader.find("span span").at(1)).not.toHaveStyleRule(
        "border-radius",
        `${defaultSize / 3}${defaultUnit}`
      );

      expect(loader.find("span span").at(0)).toHaveStyleRule(
        "border-radius",
        `${length}${defaultUnit}`
      );
      expect(loader.find("span span").at(1)).toHaveStyleRule(
        "border-radius",
        `${length}${defaultUnit}`
      );

      for (let i = 2; i < 6; i++) {
        expect(loader.find("span span").at(i)).not.toHaveStyleRule(
          "height",
          `${defaultSize / 3}${defaultUnit}`
        );
        expect(loader.find("span span").at(i)).not.toHaveStyleRule(
          "width",
          `${defaultSize / 3}${defaultUnit}`
        );
        expect(loader.find("span span").at(i)).not.toHaveStyleRule(
          "top",
          `${defaultSize}${defaultUnit}`
        );
        expect(loader.find("span span").at(i)).not.toHaveStyleRule(
          "left",
          `${defaultSize * 4}${defaultUnit}`
        );

        expect(loader.find("span span").at(i)).toHaveStyleRule(
          "height",
          `${length / 3}${defaultUnit}`
        );
        expect(loader.find("span span").at(i)).toHaveStyleRule(
          "width",
          `${length / 3}${defaultUnit}`
        );
        expect(loader.find("span span").at(i)).toHaveStyleRule("top", `${length}${defaultUnit}`);
        expect(loader.find("span span").at(i)).toHaveStyleRule("left", `${length * 4}${defaultUnit}`);
      }
    });
  });

  describe("margin props", () => {
    it("should render the margin with px unit when margin is a number", () => {
      const margin = 18;
      loader = mount(<PacmanLoader margin={margin} />);
      for (let i = 2; i < 6; i++) {
        expect(loader.find("span span").at(i)).not.toHaveStyleRule(
          "margin",
          `${defaultMargin}${defaultUnit}`
        );
        expect(loader.find("span span").at(i)).toHaveStyleRule("margin", `${margin}${defaultUnit}`);
      }
    });

    it("should render the margin as is when margin is a string with valid css unit", () => {
      const length = 18;
      const unit = "px";
      const margin = `${length}${unit}`;

      loader = mount(<PacmanLoader margin={margin} />);
      for (let i = 2; i < 6; i++) {
        expect(loader.find("span span").at(i)).not.toHaveStyleRule(
          "margin",
          `${defaultMargin}${defaultUnit}`
        );
        expect(loader.find("span span").at(i)).toHaveStyleRule("margin", `${margin}`);
      }
    });

    it("should render the margin with default unit of px when the unit is incorrect", () => {
      const length = 18;
      const unit = "ad";
      const margin = `${length}${unit}`;

      loader = mount(<PacmanLoader margin={margin} />);
      for (let i = 2; i < 6; i++) {
        expect(loader.find("span span").at(i)).not.toHaveStyleRule(
          "margin",
          `${defaultMargin}${defaultUnit}`
        );
        expect(loader.find("span span").at(i)).toHaveStyleRule("margin", `${length}${defaultUnit}`);
      }
    });
  });

  it("should render the css override based on props", () => {
    loader = mount(
      <PacmanLoader css={"position: fixed; width: 100px; height: 200px; color: blue;"} />
    );
    expect(loader).not.toHaveStyleRule("position", "relative");
    expect(loader).not.toHaveStyleRule("width", "25px");
    expect(loader).toHaveStyleRule("position", "fixed");
    expect(loader).toHaveStyleRule("width", "100px");
  });
});
