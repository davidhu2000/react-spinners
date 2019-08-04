import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import { matchers } from "jest-emotion";
expect.extend(matchers);

import HashLoader from "../src/HashLoader";
import { LoaderSizeProps } from "../src/interfaces";
import { sizeDefaults } from "../src/helpers";

describe("HashLoader", () => {
  let loader: ReactWrapper;
  let props: LoaderSizeProps;

  it("should match snapshot", () => {
    loader = mount(<HashLoader />);
    expect(loader).toMatchSnapshot();
  });

  it("should contain default props if no props are passed", () => {
    props = loader.props();
    expect(props).toEqual(sizeDefaults(50));
  });

  it("parent div should contain styles created using default props", () => {
    expect(loader).toHaveStyleRule("height", "50px");
    expect(loader).toHaveStyleRule("width", "50px");

    for (let i: number = 0; i < 2; i++) {
      expect(loader.find("div div").at(0)).toHaveStyleRule("height", "10px");
      expect(loader.find("div div").at(0)).toHaveStyleRule("width", "10px");
      expect(loader.find("div div").at(0)).toHaveStyleRule("border-radius", "5px");
    }
  });

  it("should render null if loading prop is set as false", () => {
    loader = mount(<HashLoader loading={false} />);
    expect(loader.isEmptyRender()).toBe(true);
  });

  it("renders the correct size for the parent div based on props", () => {
    loader = mount(<HashLoader size={20} />);
    expect(loader).not.toHaveStyleRule("height", "50px");
    expect(loader).not.toHaveStyleRule("width", "50px");
    expect(loader).toHaveStyleRule("height", "20px");
    expect(loader).toHaveStyleRule("width", "20px");

    for (let i: number = 0; i < 2; i++) {
      expect(loader.find("div div").at(i)).toHaveStyleRule("height", "4px");
      expect(loader.find("div div").at(i)).toHaveStyleRule("width", "4px");
      expect(loader.find("div div").at(i)).toHaveStyleRule("border-radius", "2px");
    }
  });

  it("renders the css override based on props", () => {
    loader = mount(
      <HashLoader css={"position: absolute; width: 100px; height: 200px; color: blue;"} />
    );
    expect(loader).not.toHaveStyleRule("position", "relative");
    expect(loader).not.toHaveStyleRule("width", "50px");
    expect(loader).not.toHaveStyleRule("height", "50px");
    expect(loader).toHaveStyleRule("position", "absolute");
    expect(loader).toHaveStyleRule("width", "100px");
    expect(loader).toHaveStyleRule("height", "200px");
    expect(loader).toHaveStyleRule("color", "blue");
  });
});
