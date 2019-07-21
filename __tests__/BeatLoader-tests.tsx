import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import { matchers } from "jest-emotion";
expect.extend(matchers);

import BeatLoader from "../src/BeatLoader";
import { LoaderSizeMarginProps } from "../src/interfaces";
import { sizeMarginDefaults } from "../src/helpers";

describe("BeatLoader", () => {
  let loader: ReactWrapper;
  let props: LoaderSizeMarginProps;

  it("should match snapshot", () => {
    loader = mount(<BeatLoader />);
    expect(loader).toMatchSnapshot();
  });

  it("should contain default props if no props are passed", () => {
    props = loader.props();
    expect(props).toEqual(sizeMarginDefaults(15));
  });

  it("should contain styles created using default props", () => {
    props = loader.props();
    expect(loader.find("div div")).toHaveStyleRule("height", "15px");
    expect(loader.find("div div")).toHaveStyleRule("width", "15px");
    expect(loader.find("div div")).toHaveStyleRule("margin", "2px");
    expect(loader.find("div div")).toHaveStyleRule("background-color", "#000000");
  });

  it("should render null if loading prop is set as false", () => {
    loader = mount(<BeatLoader loading={false} />);
    expect(loader.isEmptyRender()).toBe(true);
  });

  it("renders the correct color based on prop", () => {
    loader = mount(<BeatLoader color="#e2e2e2" />);
    expect(loader.find("div div")).not.toHaveStyleRule("background-color", "#000000");
    expect(loader.find("div div")).toHaveStyleRule("background-color", "#e2e2e2");
  });

  it("renders the correct size based on props", () => {
    loader = mount(<BeatLoader size={18} />);
    expect(loader.find("div div")).not.toHaveStyleRule("height", "15px");
    expect(loader.find("div div")).not.toHaveStyleRule("width", "15px");
    expect(loader.find("div div")).toHaveStyleRule("height", "18px");
    expect(loader.find("div div")).toHaveStyleRule("width", "18px");
  });

  it("renders the correct heightUnit basd on props", () => {
    loader = mount(<BeatLoader sizeUnit="%" />);
    expect(loader.find("div div")).not.toHaveStyleRule("height", "15px");
    expect(loader.find("div div")).not.toHaveStyleRule("width", "15px");
    expect(loader.find("div div")).toHaveStyleRule("height", "15%");
    expect(loader.find("div div")).toHaveStyleRule("width", "15%");
  });

  it("renders the correct margin props based on props", () => {
    loader = mount(<BeatLoader margin="4%" />);
    expect(loader.find("div div")).not.toHaveStyleRule("margin", "2px");
    expect(loader.find("div div")).toHaveStyleRule("margin", "4%");
  });

  it("renders the css override based on props", () => {
    loader = mount(<BeatLoader css={"position: absolute; overflow: scroll;"} />);
    expect(loader).toHaveStyleRule("position", "absolute");
    expect(loader).toHaveStyleRule("overflow", "scroll");
  });
});
