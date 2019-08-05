import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import { matchers } from "jest-emotion";
expect.extend(matchers);

import RiseLoader from "../src/RiseLoader";
import { LoaderSizeMarginProps } from "../src/interfaces";
import { sizeMarginDefaults } from "../src/helpers";

describe("RiseLoader", () => {
  let loader: ReactWrapper;
  let props: LoaderSizeMarginProps;

  it("should match snapshot", () => {
    loader = mount(<RiseLoader />);
    expect(loader).toMatchSnapshot();
  });

  it("should contain default props if no props are passed", () => {
    props = loader.props();
    expect(props).toEqual(sizeMarginDefaults(15));
  });

  it("should contain styles created using default props", () => {
    for (let i: number = 0; i < 5; i++) {
      expect(loader.find("div div").at(i)).toHaveStyleRule("background-color", "#000000");
      expect(loader.find("div div").at(i)).toHaveStyleRule("height", "15px");
      expect(loader.find("div div").at(i)).toHaveStyleRule("width", "15px");
      expect(loader.find("div div").at(i)).toHaveStyleRule("margin", "2px");
    }
  });

  it("should render null if loading prop is set as false", () => {
    loader = mount(<RiseLoader loading={false} />);
    expect(loader.isEmptyRender()).toBe(true);
  });

  it("renders the correct color based on prop", () => {
    loader = mount(<RiseLoader color="#e2e2e2" />);
    for (let i: number = 0; i < 5; i++) {
      expect(loader.find("div div").at(i)).not.toHaveStyleRule("background-color", "#000000");
      expect(loader.find("div div").at(i)).toHaveStyleRule("background-color", "#e2e2e2");
    }
  });

  it("renders the correct size for the parent div based on props", () => {
    loader = mount(<RiseLoader size={18} />);

    for (let i: number = 0; i < 5; i++) {
      expect(loader.find("div div").at(i)).not.toHaveStyleRule("height", "15px");
      expect(loader.find("div div").at(i)).not.toHaveStyleRule("width", "15px");

      expect(loader.find("div div").at(i)).toHaveStyleRule("height", "18px");
      expect(loader.find("div div").at(i)).toHaveStyleRule("width", "18px");
    }
  });

  it("renders the css override based on props", () => {
    loader = mount(<RiseLoader css={"position: fixed; width: 100px; color: blue;"} />);
    expect(loader).toHaveStyleRule("position", "fixed");
    expect(loader).toHaveStyleRule("width", "100px");
    expect(loader).toHaveStyleRule("color", "blue");
  });
});
