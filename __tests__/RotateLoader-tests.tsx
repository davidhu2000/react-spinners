import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import { matchers } from "jest-emotion";
expect.extend(matchers);

import RotateLoader from "../src/RotateLoader";
import { LoaderSizeMarginProps } from "../src/interfaces";
import { sizeMarginDefaults } from "../src/helpers";

describe("RotateLoader", () => {
  let loader: ReactWrapper;
  let props: LoaderSizeMarginProps;

  it("should match snapshot", () => {
    loader = mount(<RotateLoader />);
    expect(loader).toMatchSnapshot();
  });

  it("should contain default props if no props are passed", () => {
    props = loader.props();
    expect(props).toEqual(sizeMarginDefaults(15));
  });

  it("should contain styles created using default props", () => {
    expect(loader).toHaveStyleRule("background-color", "#000000");
    expect(loader).toHaveStyleRule("height", "15px");
    expect(loader).toHaveStyleRule("width", "15px");
    expect(loader).toHaveStyleRule("margin", "2px");

    for (let i: number = 0; i < 2; i++) {
      expect(loader.find("div div").at(i)).toHaveStyleRule("background-color", "#000000");
      expect(loader.find("div div").at(i)).toHaveStyleRule("height", "15px");
      expect(loader.find("div div").at(i)).toHaveStyleRule("width", "15px");
      expect(loader.find("div div").at(i)).toHaveStyleRule("margin", "2px");
    }
  });

  it("should render null if loading prop is set as false", () => {
    loader = mount(<RotateLoader loading={false} />);
    expect(loader.isEmptyRender()).toBe(true);
  });

  it("renders the correct color based on prop", () => {
    let color: string = "#e2e2e2";
    loader = mount(<RotateLoader color={color} />);
    expect(loader).not.toHaveStyleRule("background-color", "#000000");
    expect(loader).toHaveStyleRule("background-color", color);

    for (let i: number = 0; i < 2; i++) {
      expect(loader.find("div div").at(i)).not.toHaveStyleRule("background-color", "#000000");
      expect(loader.find("div div").at(i)).toHaveStyleRule("background-color", color);
    }
  });

  it("renders the correct size for the parent div based on props", () => {
    let size: number = 18;
    loader = mount(<RotateLoader size={size} />);

    expect(loader).not.toHaveStyleRule("height", "15px");
    expect(loader).not.toHaveStyleRule("width", "15px");

    expect(loader).toHaveStyleRule("height", `${size}px`);
    expect(loader).toHaveStyleRule("width", `${size}px`);

    for (let i: number = 0; i < 2; i++) {
      expect(loader.find("div div").at(i)).not.toHaveStyleRule("height", "15px");
      expect(loader.find("div div").at(i)).not.toHaveStyleRule("width", "15px");

      expect(loader.find("div div").at(i)).toHaveStyleRule("height", `${size}px`);
      expect(loader.find("div div").at(i)).toHaveStyleRule("width", `${size}px`);
    }
  });

  it("renders the css override based on props", () => {
    loader = mount(<RotateLoader css={"position: fixed; width: 100px; color: blue;"} />);
    expect(loader).not.toHaveStyleRule("position", "relative");
    expect(loader).toHaveStyleRule("position", "fixed");
    expect(loader).toHaveStyleRule("width", "100px");
    expect(loader).toHaveStyleRule("color", "blue");
  });
});
