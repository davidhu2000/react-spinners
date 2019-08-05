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
  let defaultColor: string = "#000000";

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
      expect(loader.find("div div").at(i)).toHaveStyleRule("height", `${defaultSize}px`);
      expect(loader.find("div div").at(i)).toHaveStyleRule("width", `${defaultSize}px`);
      expect(loader.find("div div").at(i)).toHaveStyleRule("margin", "2px");
    }
  });

  it("should render null if loading prop is set as false", () => {
    loader = mount(<SyncLoader loading={false} />);
    expect(loader.isEmptyRender()).toBe(true);
  });

  it("renders the correct color based on prop", () => {
    let color: string = "#e2e2e2";
    loader = mount(<SyncLoader color={color} />);

    for (let i: number = 0; i < 3; i++) {
      expect(loader.find("div div").at(i)).not.toHaveStyleRule("background-color", defaultColor);
      expect(loader.find("div div").at(i)).toHaveStyleRule("background-color", color);
    }
  });

  it("renders the correct size for the parent div based on props", () => {
    let size: number = 18;
    loader = mount(<SyncLoader size={size} />);

    for (let i: number = 0; i < 3; i++) {
      expect(loader.find("div div").at(i)).not.toHaveStyleRule("height", `${defaultSize}px`);
      expect(loader.find("div div").at(i)).not.toHaveStyleRule("width", `${defaultSize}px`);

      expect(loader.find("div div").at(i)).toHaveStyleRule("height", `${size}px`);
      expect(loader.find("div div").at(i)).toHaveStyleRule("width", `${size}px`);
    }
  });

  it("renders the css override based on props", () => {
    loader = mount(<SyncLoader css={"position: fixed; width: 100px; color: blue;"} />);

    expect(loader).toHaveStyleRule("position", "fixed");
    expect(loader).toHaveStyleRule("width", "100px");
    expect(loader).toHaveStyleRule("color", "blue");
  });
});
