import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import { matchers } from "jest-emotion";
expect.extend(matchers);

import FadeLoader from "../src/FadeLoader";
import { LoaderHeightWidthRadiusProps } from "../src/interfaces";
import { heightWidthRadiusDefaults } from "../src/helpers";

describe("FadeLoader", () => {
  let loader: ReactWrapper;
  let props: LoaderHeightWidthRadiusProps;

  it("should match snapshot", () => {
    loader = mount(<FadeLoader />);
    expect(loader).toMatchSnapshot();
  });

  it("should contain default props if no props are passed", () => {
    props = loader.props();
    expect(props).toEqual(heightWidthRadiusDefaults(15, 5, 2));
  });

  it("parent div should contain styles created using default props", () => {
    expect(loader).toHaveStyleRule("top", "20px");
    expect(loader).toHaveStyleRule("left", "20px");
    expect(loader).toHaveStyleRule("height", "60px");
    expect(loader).toHaveStyleRule("width", "60px");
  });

  it("child div should contain styles created using default props", () => {
    for (let i: number = 0; i < 8; i++) {
      expect(loader.find("div div").at(i)).toHaveStyleRule("background-color", "#000000");
      expect(loader.find("div div").at(i)).toHaveStyleRule("height", "15px");
      expect(loader.find("div div").at(i)).toHaveStyleRule("width", "5px");
      expect(loader.find("div div").at(i)).toHaveStyleRule("margin", "2px");
      expect(loader.find("div div").at(i)).toHaveStyleRule("border-radius", "2px");
    }
  });

  it("should render null if loading prop is set as false", () => {
    loader = mount(<FadeLoader loading={false} />);
    expect(loader.isEmptyRender()).toBe(true);
  });

  it("renders the correct color based on prop", () => {
    loader = mount(<FadeLoader color="#e2e2e2" />);
    expect(loader.find("div div")).not.toHaveStyleRule("background-color", "#000000");
    expect(loader.find("div div")).toHaveStyleRule("background-color", "#e2e2e2");
  });

  it("renders the correct size for the parent div based on props", () => {
    loader = mount(<FadeLoader height={18} width={20} radius={5} />);
    expect(loader.find("div div")).not.toHaveStyleRule("height", "15px");
    expect(loader.find("div div")).not.toHaveStyleRule("width", "5px");
    expect(loader.find("div div")).not.toHaveStyleRule("border-radius", "2px");
    expect(loader.find("div div")).toHaveStyleRule("height", "18px");
    expect(loader.find("div div")).toHaveStyleRule("width", "20px");
    expect(loader.find("div div")).toHaveStyleRule("border-radius", "5px");
  });

  it("renders the css override based on props", () => {
    loader = mount(
      <FadeLoader css={"position: absolute; width: 100px; height: 200px; color: blue;"} />
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
