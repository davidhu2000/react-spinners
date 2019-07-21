import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import { matchers } from "jest-emotion";
expect.extend(matchers);

import BounceLoader from "../src/BounceLoader";
import { LoaderSizeProps } from "../src/interfaces";
import { sizeDefaults } from "../src/helpers";

describe("BounceLoader", () => {
  let loader: ReactWrapper;
  let props: LoaderSizeProps;

  it("should match snapshot", () => {
    loader = mount(<BounceLoader />);
    expect(loader).toMatchSnapshot();
  });

  it("should contain default props if no props are passed", () => {
    props = loader.props();
    expect(props).toEqual(sizeDefaults(60));
  });

  it("parent div should contain styles created using default props", () => {
    expect(loader).toHaveStyleRule("height", "60px");
    expect(loader).toHaveStyleRule("width", "60px");
  });

  it("children div should contain styles created using default props", () => {
    expect(loader.find("div div")).toHaveStyleRule("height", "60px");
    expect(loader.find("div div")).toHaveStyleRule("width", "60px");
    expect(loader.find("div div")).toHaveStyleRule("background-color", "#000000");
  });

  it("should render null if loading prop is set as false", () => {
    loader = mount(<BounceLoader loading={false} />);
    expect(loader.isEmptyRender()).toBe(true);
  });

  it("renders the correct color based on prop", () => {
    loader = mount(<BounceLoader color="#e2e2e2" />);
    expect(loader.find("div div")).not.toHaveStyleRule("background-color", "#000000");
    expect(loader.find("div div")).toHaveStyleRule("background-color", "#e2e2e2");
  });

  it("renders the correct size for the parent div based on props", () => {
    loader = mount(<BounceLoader size={18} />);
    expect(loader).not.toHaveStyleRule("height", "60px");
    expect(loader).not.toHaveStyleRule("width", "60px");
    expect(loader).toHaveStyleRule("height", "18px");
    expect(loader).toHaveStyleRule("width", "18px");
  });

  it("renders the correct size for the child div based on props", () => {
    loader = mount(<BounceLoader size={18} />);
    expect(loader.find("div div")).not.toHaveStyleRule("height", "60px");
    expect(loader.find("div div")).not.toHaveStyleRule("width", "60px");
    expect(loader.find("div div")).toHaveStyleRule("height", "18px");
    expect(loader.find("div div")).toHaveStyleRule("width", "18px");
  });

  it("renders the correct heightUnit basd on props", () => {
    loader = mount(<BounceLoader sizeUnit="%" />);
    expect(loader.find("div div")).not.toHaveStyleRule("height", "60px");
    expect(loader.find("div div")).not.toHaveStyleRule("width", "60px");
    expect(loader.find("div div")).toHaveStyleRule("height", "60%");
    expect(loader.find("div div")).toHaveStyleRule("width", "60%");
  });

  it("renders the css override based on props", () => {
    loader = mount(<BounceLoader css={"position: absolute; overflow: scroll;"} />);
    expect(loader).not.toHaveStyleRule("position", "relative");
    expect(loader).toHaveStyleRule("position", "absolute");
    expect(loader).toHaveStyleRule("overflow", "scroll");
  });
});
