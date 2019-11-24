import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import { matchers } from "jest-emotion";
expect.extend(matchers);

import SyncLoader from "../src/SyncLoader";
import { LoaderSizeMarginProps } from "../src/interfaces";
import { sizeMarginDefaults } from "../src/helpers";

describe("SyncLoader", () => {
  let loader: ReactWrapper;
  let props: LoaderSizeMarginProps;
  let defaultSize: number = 15;
  let defaultMargin: number = 2;
  let defaultColor: string = "#000000";
  let defaultUnit: string = "px";

  it("should match snapshot", () => {
    loader = mount(<SyncLoader />);
    expect(loader).toMatchSnapshot();
  });

  it("should contain default props if no props are passed", () => {
    props = loader.props();
    expect(props).toEqual(sizeMarginDefaults(defaultSize));
  });

  it("should contain styles created using default props", () => {
    for (let i: number = 0; i < 3; i++) {
      expect(loader.find("div div").at(i)).toHaveStyleRule("background-color", defaultColor);
      expect(loader.find("div div").at(i)).toHaveStyleRule(
        "height",
        `${defaultSize}${defaultUnit}`
      );
      expect(loader.find("div div").at(i)).toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);
      expect(loader.find("div div").at(i)).toHaveStyleRule(
        "margin",
        `${defaultMargin}${defaultUnit}`
      );
    }
  });

  it("should render null if loading prop is set as false", () => {
    loader = mount(<SyncLoader loading={false} />);
    expect(loader.isEmptyRender()).toBe(true);
  });

  it("should render the correct color based on prop", () => {
    let color: string = "#e2e2e2";
    loader = mount(<SyncLoader color={color} />);

    for (let i: number = 0; i < 3; i++) {
      expect(loader.find("div div").at(i)).not.toHaveStyleRule("background-color", defaultColor);
      expect(loader.find("div div").at(i)).toHaveStyleRule("background-color", color);
    }
  });

  it("should render the correct size based on props", () => {
    let size: number = 18;
    loader = mount(<SyncLoader size={size} />);

    for (let i: number = 0; i < 3; i++) {
      expect(loader.find("div div").at(i)).not.toHaveStyleRule(
        "height",
        `${defaultSize}${defaultUnit}`
      );
      expect(loader.find("div div").at(i)).not.toHaveStyleRule(
        "width",
        `${defaultSize}${defaultUnit}`
      );

      expect(loader.find("div div").at(i)).toHaveStyleRule("height", `${size}${defaultUnit}`);
      expect(loader.find("div div").at(i)).toHaveStyleRule("width", `${size}${defaultUnit}`);
    }
  });

  describe("size props", () => {
    it("should render the size with px unit when size is a number", () => {
      let size: number = 18;
      loader = mount(<SyncLoader size={size} />);

      for (let i: number = 0; i < 3; i++) {
        expect(loader.find("div div").at(i)).not.toHaveStyleRule(
          "height",
          `${defaultSize}${defaultUnit}`
        );
        expect(loader.find("div div").at(i)).not.toHaveStyleRule(
          "width",
          `${defaultSize}${defaultUnit}`
        );

        expect(loader.find("div div").at(i)).toHaveStyleRule("height", `${size}${defaultUnit}`);
        expect(loader.find("div div").at(i)).toHaveStyleRule("width", `${size}${defaultUnit}`);
      }
    });

    it("should render the size as is when size is a string with valid css unit", () => {
      let size: string = "18px";
      loader = mount(<SyncLoader size={size} />);

      for (let i: number = 0; i < 3; i++) {
        expect(loader.find("div div").at(i)).not.toHaveStyleRule(
          "height",
          `${defaultSize}${defaultUnit}`
        );
        expect(loader.find("div div").at(i)).not.toHaveStyleRule(
          "width",
          `${defaultSize}${defaultUnit}`
        );

        expect(loader.find("div div").at(i)).toHaveStyleRule("height", `${size}`);
        expect(loader.find("div div").at(i)).toHaveStyleRule("width", `${size}`);
      }
    });

    it("should render the size with default unit of px when the unit is incorrect", () => {
      let length: number = 18;
      let unit: string = "ad";
      let size: string = `${length}${unit}`;
      loader = mount(<SyncLoader size={size} />);

      for (let i: number = 0; i < 3; i++) {
        expect(loader.find("div div").at(i)).not.toHaveStyleRule(
          "height",
          `${defaultSize}${defaultUnit}`
        );
        expect(loader.find("div div").at(i)).not.toHaveStyleRule(
          "width",
          `${defaultSize}${defaultUnit}`
        );

        expect(loader.find("div div").at(i)).toHaveStyleRule("height", `${length}${defaultUnit}`);
        expect(loader.find("div div").at(i)).toHaveStyleRule("width", `${length}${defaultUnit}`);
      }
    });
  });

  describe("margin props", () => {
    it("should render the margin with px unit when margin is a number", () => {
      let margin: number = 18;
      loader = mount(<SyncLoader margin={margin} />);

      for (let i: number = 0; i < 3; i++) {
        expect(loader.find("div div").at(i)).not.toHaveStyleRule(
          "margin",
          `${defaultMargin}${defaultUnit}`
        );
        expect(loader.find("div div").at(i)).toHaveStyleRule("margin", `${margin}${defaultUnit}`);
      }
    });

    it("should render the margin as is when margin is a string with valid css unit", () => {
      let margin: string = "18px";
      loader = mount(<SyncLoader margin={margin} />);

      for (let i: number = 0; i < 3; i++) {
        expect(loader.find("div div").at(i)).not.toHaveStyleRule(
          "margin",
          `${defaultMargin}${defaultUnit}`
        );
        expect(loader.find("div div").at(i)).toHaveStyleRule("margin", `${margin}`);
      }
    });

    it("should render the margin with default unit of px when the unit is incorrect", () => {
      let length: number = 18;
      let unit: string = "ad";
      let margin: string = `${length}${unit}`;
      loader = mount(<SyncLoader margin={margin} />);

      for (let i: number = 0; i < 3; i++) {
        expect(loader.find("div div").at(i)).not.toHaveStyleRule(
          "margin",
          `${defaultMargin}${defaultUnit}`
        );
        expect(loader.find("div div").at(i)).toHaveStyleRule("margin", `${length}${defaultUnit}`);
      }
    });
  });

  it("should render the css override based on props", () => {
    loader = mount(<SyncLoader css={"position: fixed; width: 100px; color: blue;"} />);

    expect(loader).toHaveStyleRule("position", "fixed");
    expect(loader).toHaveStyleRule("width", "100px");
    expect(loader).toHaveStyleRule("color", "blue");
  });
});
