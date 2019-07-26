import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import { matchers } from "jest-emotion";
expect.extend(matchers);

import ClimbingBoxLoader from "../src/ClimbingBoxLoader";
import { LoaderSizeProps } from "../src/interfaces";
import { sizeDefaults } from "../src/helpers";

describe("ClimbingBoxLoader", () => {
  let loader: ReactWrapper;
  let props: LoaderSizeProps;

  it("should match snapshot", () => {
    loader = mount(<ClimbingBoxLoader />);
    expect(loader).toMatchSnapshot();
  });

  it("should contain default props if no props are passed", () => {
    props = loader.props();
    expect(props).toEqual(sizeDefaults(15));
  });

  it("parent div should contain styles created using default props", () => {
    expect(loader.find("div div")).toHaveStyleRule("font-size", "15px");
  });

  it("children div should contain styles created using default props", () => {
    expect(loader.find("div div div")).toHaveStyleRule("border", "0.25em solid #000000");
    expect(loader.find("div div div")).toHaveStyleRule("border-left", "0.25em solid #000000");
  });

  it("should render null if loading prop is set as false", () => {
    loader = mount(<ClimbingBoxLoader loading={false} />);
    expect(loader.isEmptyRender()).toBe(true);
  });

  it("renders the correct color based on prop", () => {
    loader = mount(<ClimbingBoxLoader color="#e2e2e2" />);
    expect(loader.find("div div div")).not.toHaveStyleRule("border", "0.25em solid #000000");
    expect(loader.find("div div div")).toHaveStyleRule("border", "025em solid #e2e2e2");
  });

  it("renders the correct size for the parent div based on props", () => {
    loader = mount(<ClimbingBoxLoader size={18} />);
    expect(loader).not.toHaveStyleRule("height", "15px");
    expect(loader).not.toHaveStyleRule("width", "15px");
    expect(loader).toHaveStyleRule("height", "18px");
    expect(loader).toHaveStyleRule("width", "18px");
  });

  it("renders the correct size for the child div based on props", () => {
    loader = mount(<ClimbingBoxLoader size={18} />);
    expect(loader.find("div div")).not.toHaveStyleRule("height", "15px");
    expect(loader.find("div div")).not.toHaveStyleRule("width", "15px");
    expect(loader.find("div div")).toHaveStyleRule("height", "18px");
    expect(loader.find("div div")).toHaveStyleRule("width", "18px");
  });

  it("renders the correct heightUnit based on props", () => {
    loader = mount(<ClimbingBoxLoader sizeUnit="%" />);
    expect(loader.find("div div")).not.toHaveStyleRule("height", "15px");
    expect(loader.find("div div")).not.toHaveStyleRule("width", "15px");
    expect(loader.find("div div")).toHaveStyleRule("height", "15%");
    expect(loader.find("div div")).toHaveStyleRule("width", "15%");
  });

  it("renders the css override based on props", () => {
    loader = mount(<ClimbingBoxLoader css={"position: absolute; overflow: scroll;"} />);
    expect(loader).not.toHaveStyleRule("position", "relative");
    expect(loader).toHaveStyleRule("position", "absolute");
    expect(loader).toHaveStyleRule("overflow", "scroll");
  });
});
