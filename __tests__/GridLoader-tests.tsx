import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import { matchers } from "jest-emotion";
expect.extend(matchers);

import GridLoader from "../src/GridLoader";
import { LoaderSizeMarginProps } from "../src/interfaces";
import { sizeMarginDefaults } from "../src/helpers";

describe("GridLoader", () => {
  let loader: ReactWrapper;
  let props: LoaderSizeMarginProps;

  it("should match snapshot", () => {
    loader = mount(<GridLoader />);
    expect(loader).toMatchSnapshot();
  });

  it("should contain default props if no props are passed", () => {
    props = loader.props();
    expect(props).toEqual(sizeMarginDefaults(15));
  });

  it("parent div should contain styles created using default props", () => {
    expect(loader).toHaveStyleRule("width", "57px");
  });

  it("child div should contain styles created using default props", () => {
    for (let i: number = 0; i < 9; i++) {
      expect(loader.find("div div").at(i)).toHaveStyleRule("background-color", "#000000");
      expect(loader.find("div div").at(i)).toHaveStyleRule("height", "15px");
      expect(loader.find("div div").at(i)).toHaveStyleRule("width", "15px");
      expect(loader.find("div div").at(i)).toHaveStyleRule("margin", "2px");
    }
  });

  it("should render null if loading prop is set as false", () => {
    loader = mount(<GridLoader loading={false} />);
    expect(loader.isEmptyRender()).toBe(true);
  });

  it("renders the correct color based on prop", () => {
    loader = mount(<GridLoader color="#e2e2e2" />);
    expect(loader.find("div div")).not.toHaveStyleRule("background-color", "#000000");
    expect(loader.find("div div")).toHaveStyleRule("background-color", "#e2e2e2");
  });

  it("renders the correct size for the parent div based on props", () => {
    loader = mount(<GridLoader size={18} />);
    expect(loader).not.toHaveStyleRule("width", "57px");
    expect(loader).toHaveStyleRule("width", "66px");

    expect(loader.find("div div")).not.toHaveStyleRule("height", "60px");
    expect(loader.find("div div")).toHaveStyleRule("height", "18px");

    for (let i: number = 0; i < 9; i++) {
      expect(loader.find("div div").at(i)).not.toHaveStyleRule("height", "15px");
      expect(loader.find("div div").at(i)).not.toHaveStyleRule("width", "15px");

      expect(loader.find("div div").at(i)).toHaveStyleRule("height", "18px");
      expect(loader.find("div div").at(i)).toHaveStyleRule("width", "18px");
    }
  });

  it("renders the css override based on props", () => {
    loader = mount(
      <GridLoader css={"font-size: 15px; width: 100px; height: 200px; color: blue;"} />
    );
    expect(loader).not.toHaveStyleRule("font-size", "0");
    expect(loader).not.toHaveStyleRule("width", "57px");
    expect(loader).toHaveStyleRule("font-size", "15px");
    expect(loader).toHaveStyleRule("width", "100px");
  });
});
