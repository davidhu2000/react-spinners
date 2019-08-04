import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import { matchers } from "jest-emotion";
expect.extend(matchers);

import MoonLoader from "../src/MoonLoader";
import { LoaderSizeProps } from "../src/interfaces";
import { sizeDefaults } from "../src/helpers";

describe("MoonLoader", () => {
  let loader: ReactWrapper;
  let props: LoaderSizeProps;

  it("should match snapshot", () => {
    loader = mount(<MoonLoader />);
    expect(loader).toMatchSnapshot();
  });

  it("should contain default props if no props are passed", () => {
    props = loader.props();
    expect(props).toEqual(sizeDefaults(60));
  });

  it("should contain styles created using default props", () => {
    let wrapperSize: number = 60 + (60 / 7) * 2;
    let size: number = 60 / 7;
    expect(loader).toHaveStyleRule("height", `${wrapperSize}px`);
    expect(loader).toHaveStyleRule("width", `${wrapperSize}px`);
    expect(loader.find("div div").at(0)).toHaveStyleRule("background-color", "#000000");
    expect(loader.find("div div").at(0)).toHaveStyleRule("height", `${size}px`);
    expect(loader.find("div div").at(0)).toHaveStyleRule("width", `${size}px`);
    expect(loader.find("div div").at(1)).toHaveStyleRule("border", `${size}px solid #000000`);
    expect(loader.find("div div").at(1)).toHaveStyleRule("height", `60px`);
    expect(loader.find("div div").at(1)).toHaveStyleRule("width", `60px`);
  });

  it("should render null if loading prop is set as false", () => {
    loader = mount(<MoonLoader loading={false} />);
    expect(loader.isEmptyRender()).toBe(true);
  });

  it("renders the correct color based on prop", () => {
    loader = mount(<MoonLoader color="#e2e2e2" />);
    expect(loader.find("div div")).not.toHaveStyleRule("background-color", "#000000");
    expect(loader.find("div div")).toHaveStyleRule("background-color", "#e2e2e2");
  });

  it("renders the correct size based on props", () => {
    loader = mount(<MoonLoader size={21} />);
    let defaultSize: number = 60 + (60 / 7) * 2;
    let size: number = 21 + (21 / 7) * 2;
    expect(loader).not.toHaveStyleRule("height", `${defaultSize}px`);
    expect(loader).not.toHaveStyleRule("width", `${defaultSize}px`);
    expect(loader).toHaveStyleRule("height", `${size}px`);
    expect(loader).toHaveStyleRule("width", `${size}px`);
  });

  it("renders the css override based on props", () => {
    loader = mount(
      <MoonLoader css={"position: absolute; width: 100px; height: 200px; color: blue;"} />
    );
    let defaultSize: number = 60 + (60 / 7) * 2;
    expect(loader).not.toHaveStyleRule("position", "relative");
    expect(loader).not.toHaveStyleRule("width", `${defaultSize}px`);
    expect(loader).not.toHaveStyleRule("height", `${defaultSize}px`);
    expect(loader).toHaveStyleRule("position", "absolute");
    expect(loader).toHaveStyleRule("width", "100px");
    expect(loader).toHaveStyleRule("height", "200px");
    expect(loader).toHaveStyleRule("color", "blue");
  });
});
