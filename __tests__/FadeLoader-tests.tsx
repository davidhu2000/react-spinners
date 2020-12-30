import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import { matchers } from '@emotion/jest';
expect.extend(matchers);

import FadeLoader from "../src/FadeLoader";
import { LoaderHeightWidthRadiusProps } from "../src/interfaces";
import { heightWidthRadiusDefaults } from "../src/helpers";

describe("FadeLoader", () => {
  let loader: ReactWrapper<LoaderHeightWidthRadiusProps, null, FadeLoader>;
  let props: LoaderHeightWidthRadiusProps;
  const defaultColor = "#000000";
  const defaultHeight = 15;
  const defaultWidth = 5;
  const defaultRadius = 2;
  const defaultMargin = 2;
  const defaultUnit = "px";

  it("should match snapshot", () => {
    loader = mount(<FadeLoader />);
    expect(loader).toMatchSnapshot();
  });

  it("should contain default props if no props are passed", () => {
    props = loader.props();
    expect(props).toEqual(heightWidthRadiusDefaults(defaultHeight, defaultWidth, defaultRadius));
  });

  it("should contain styles created using default props", () => {
    for (let i = 0; i < 8; i++) {
      expect(loader.find("span span").at(i)).toHaveStyleRule("background-color", defaultColor);
      expect(loader.find("span span").at(i)).toHaveStyleRule(
        "height",
        `${defaultHeight}${defaultUnit}`
      );
      expect(loader.find("span span").at(i)).toHaveStyleRule(
        "width",
        `${defaultWidth}${defaultUnit}`
      );
      expect(loader.find("span span").at(i)).toHaveStyleRule(
        "margin",
        `${defaultMargin}${defaultUnit}`
      );
      expect(loader.find("span span").at(i)).toHaveStyleRule(
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
    expect(loader.find("span span")).not.toHaveStyleRule("background-color", defaultColor);
    expect(loader.find("span span")).toHaveStyleRule("background-color", "#e2e2e2");
  });

  describe("height props", () => {
    it("should render the height with px unit when height is a number", () => {
      const height = 18;
      loader = mount(<FadeLoader height={height} />);

      for (let i = 0; i < 8; i++) {
        expect(loader.find("span span").at(i)).not.toHaveStyleRule(
          "height",
          `${defaultHeight}${defaultUnit}`
        );

        expect(loader.find("span span").at(i)).toHaveStyleRule("height", `${height}${defaultUnit}`);
      }
    });

    it("should render the height as is when height is a string with valid css unit", () => {
      const height = "18px";
      loader = mount(<FadeLoader height={height} />);

      for (let i = 0; i < 8; i++) {
        expect(loader.find("span span").at(i)).not.toHaveStyleRule(
          "height",
          `${defaultHeight}${defaultUnit}`
        );

        expect(loader.find("span span").at(i)).toHaveStyleRule("height", `${height}`);
      }
    });

    it("should render the height with default unit of px when the unit is incorrect", () => {
      const length = 18;
      const unit = "ad";
      const height = `${length}${unit}`;
      loader = mount(<FadeLoader height={height} />);

      for (let i = 0; i < 8; i++) {
        expect(loader.find("span span").at(i)).not.toHaveStyleRule(
          "height",
          `${defaultHeight}${defaultUnit}`
        );

        expect(loader.find("span span").at(i)).toHaveStyleRule("height", `${length}${defaultUnit}`);
      }
    });
  });

  describe("width props", () => {
    it("should render the width with px unit when width is a number", () => {
      const width = 18;
      loader = mount(<FadeLoader width={width} />);

      for (let i = 0; i < 8; i++) {
        expect(loader.find("span span").at(i)).not.toHaveStyleRule(
          "width",
          `${defaultWidth}${defaultUnit}`
        );

        expect(loader.find("span span").at(i)).toHaveStyleRule("width", `${width}${defaultUnit}`);
      }
    });

    it("should render the width as is when width is a string with valid css unit", () => {
      const width = "18px";
      loader = mount(<FadeLoader width={width} />);

      for (let i = 0; i < 8; i++) {
        expect(loader.find("span span").at(i)).not.toHaveStyleRule(
          "width",
          `${defaultWidth}${defaultUnit}`
        );

        expect(loader.find("span span").at(i)).toHaveStyleRule("width", `${width}`);
      }
    });

    it("should render the width with default unit of px when the unit is incorrect", () => {
      const length = 18;
      const unit = "ad";
      const width = `${length}${unit}`;
      loader = mount(<FadeLoader width={width} />);

      for (let i = 0; i < 8; i++) {
        expect(loader.find("span span").at(i)).not.toHaveStyleRule(
          "width",
          `${defaultWidth}${defaultUnit}`
        );

        expect(loader.find("span span").at(i)).toHaveStyleRule("width", `${length}${defaultUnit}`);
      }
    });
  });

  describe("radius props", () => {
    it("should render the radius with px unit when radius is a number", () => {
      const radius = 18;
      loader = mount(<FadeLoader radius={radius} />);

      for (let i = 0; i < 8; i++) {
        expect(loader.find("span span").at(i)).not.toHaveStyleRule(
          "border-radius",
          `${defaultRadius}${defaultUnit}`
        );

        expect(loader.find("span span").at(i)).toHaveStyleRule(
          "border-radius",
          `${radius}${defaultUnit}`
        );
      }
    });

    it("should render the radius as is when radius is a string with valid css unit", () => {
      const radius = "18px";
      loader = mount(<FadeLoader radius={radius} />);

      for (let i = 0; i < 8; i++) {
        expect(loader.find("span span").at(i)).not.toHaveStyleRule(
          "border-radius",
          `${defaultRadius}${defaultUnit}`
        );

        expect(loader.find("span span").at(i)).toHaveStyleRule("border-radius", `${radius}`);
      }
    });

    it("should render the radius with default unit of px when the unit is incorrect", () => {
      const length = 18;
      const unit = "ad";
      const radius = `${length}${unit}`;
      loader = mount(<FadeLoader radius={radius} />);

      for (let i = 0; i < 8; i++) {
        expect(loader.find("span span").at(i)).not.toHaveStyleRule(
          "border-radius",
          `${defaultRadius}${defaultUnit}`
        );

        expect(loader.find("span span").at(i)).toHaveStyleRule(
          "border-radius",
          `${length}${defaultUnit}`
        );
      }
    });
  });

  describe("margin props", () => {
    it("should render the margin with px unit when margin is a number", () => {
      const margin = 18;
      loader = mount(<FadeLoader margin={margin} />);

      for (let i = 0; i < 8; i++) {
        expect(loader.find("span span").at(i)).not.toHaveStyleRule(
          "margin",
          `${defaultMargin}${defaultUnit}`
        );

        expect(loader.find("span span").at(i)).toHaveStyleRule("margin", `${margin}${defaultUnit}`);
      }
    });

    it("should render the margin as is when margin is a string with valid css unit", () => {
      const margin = "18px";
      loader = mount(<FadeLoader margin={margin} />);

      for (let i = 0; i < 8; i++) {
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
      loader = mount(<FadeLoader margin={margin} />);

      for (let i = 0; i < 8; i++) {
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
