import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import { matchers } from "jest-emotion";
expect.extend(matchers);

import DotLoader from "../src/DotLoader";
import { LoaderSizeProps } from "../src/interfaces";
import { sizeDefaults } from "../src/helpers";

describe("DotLoader", () => {
  let loader: ReactWrapper;
  let props: LoaderSizeProps;

  it("should match snapshot", () => {
    loader = mount(<DotLoader />);
    expect(loader).toMatchSnapshot();
  });

  it("should contain default props if no props are passed", () => {
    props = loader.props();
    expect(props).toEqual(sizeDefaults(60));
  });

  it("parent div should contain styles created using default props", () => {
    expect(loader).toHaveStyleRule("height", "60px");
    expect(loader).toHaveStyleRule("width", "60px");
    expect(loader.find("div div").at(0)).toHaveStyleRule("background-color", "#000000");
    expect(loader.find("div div").at(0)).toHaveStyleRule("height", "30px");
    expect(loader.find("div div").at(0)).toHaveStyleRule("width", "30px");
    expect(loader.find("div div").at(1)).toHaveStyleRule("background-color", "#000000");
    expect(loader.find("div div").at(1)).toHaveStyleRule("height", "30px");
    expect(loader.find("div div").at(1)).toHaveStyleRule("width", "30px");
  });

  it("should render null if loading prop is set as false", () => {
    loader = mount(<DotLoader loading={false} />);
    expect(loader.isEmptyRender()).toBe(true);
  });

  it("renders the correct color based on prop", () => {
    loader = mount(<DotLoader color="#e2e2e2" />);
    expect(loader.find("div div")).not.toHaveStyleRule("background-color", "#000000");
    expect(loader.find("div div")).toHaveStyleRule("background-color", "#e2e2e2");
  });

  it("renders the correct size for the parent div based on props", () => {
    loader = mount(<DotLoader size={18} />);
    expect(loader).not.toHaveStyleRule("height", "60px");
    expect(loader).not.toHaveStyleRule("width", "60px");
    expect(loader).toHaveStyleRule("height", "18px");
    expect(loader).toHaveStyleRule("width", "18px");
  });

  it("renders the css override based on props", () => {
    loader = mount(
      <DotLoader css={"position: absolute; width: 100px; height: 200px; color: blue;"} />
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
