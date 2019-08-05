import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import { matchers } from "jest-emotion";
expect.extend(matchers);

import PulseLoader from "../src/PulseLoader";
import { LoaderSizeMarginProps } from "../src/interfaces";
import { sizeMarginDefaults } from "../src/helpers";

describe("PulseLoader", () => {
  let loader: ReactWrapper;
  let props: LoaderSizeMarginProps;
  let defaultSize: number = 15;
  let defaultColor: string = "#000000";

  it("should match snapshot", () => {
    loader = mount(<PulseLoader />);
    expect(loader).toMatchSnapshot();
  });

  it("should contain default props if no props are passed", () => {
    props = loader.props();
    expect(props).toEqual(sizeMarginDefaults(defaultSize));
  });

  it("should contain styles created using default props", () => {
    for (let i: number = 0; i < 3; i++) {
      expect(loader.find("div div").at(i)).toHaveStyleRule("background-color", defaultColor);
      expect(loader.find("div div").at(i)).toHaveStyleRule("height", `${defaultSize}px`);
      expect(loader.find("div div").at(i)).toHaveStyleRule("width", `${defaultSize}px`);
      expect(loader.find("div div").at(i)).toHaveStyleRule("margin", "2px");
    }
  });

  it("should render null if loading prop is set as false", () => {
    loader = mount(<PulseLoader loading={false} />);
    expect(loader.isEmptyRender()).toBe(true);
  });

  it("should render the correct color based on prop", () => {
    let color: string = "#e2e2e2";
    loader = mount(<PulseLoader color={color} />);
    for (let i: number = 0; i < 3; i++) {
      expect(loader.find("div div").at(i)).not.toHaveStyleRule("background-color", defaultColor);
      expect(loader.find("div div").at(i)).toHaveStyleRule("background-color", color);
    }
  });

  it("should render the correct size based on props", () => {
    let size: number = 18;
    loader = mount(<PulseLoader size={18} />);

    for (let i: number = 0; i < 3; i++) {
      expect(loader.find("div div").at(i)).not.toHaveStyleRule("height", `${defaultSize}px`);
      expect(loader.find("div div").at(i)).not.toHaveStyleRule("width", `${defaultSize}px`);

      expect(loader.find("div div").at(i)).toHaveStyleRule("height", `${size}px`);
      expect(loader.find("div div").at(i)).toHaveStyleRule("width", `${size}px`);
    }
  });

  it("should render the css override based on props", () => {
    loader = mount(<PulseLoader css={"position: fixed; width: 100px; color: blue;"} />);
    expect(loader).toHaveStyleRule("position", "fixed");
    expect(loader).toHaveStyleRule("width", "100px");
    expect(loader).toHaveStyleRule("color", "blue");
  });
});
