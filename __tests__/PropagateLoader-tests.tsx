import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import { matchers } from "jest-emotion";
expect.extend(matchers);

import PropagateLoader from "../src/PropagateLoader";
import { LoaderSizeProps } from "../src/interfaces";
import { sizeDefaults } from "../src/helpers";

describe("PropagateLoader", () => {
  let loader: ReactWrapper;
  let props: LoaderSizeProps;

  it("should match snapshot", () => {
    loader = mount(<PropagateLoader />);
    expect(loader).toMatchSnapshot();
  });

  it("should contain default props if no props are passed", () => {
    props = loader.props();
    expect(props).toEqual(sizeDefaults(15));
  });

  it("should contain styles created using default props", () => {
    for (let i: number = 0; i < 6; i++) {
      expect(loader.find("div div").at(i)).toHaveStyleRule("height", "15px");
      expect(loader.find("div div").at(i)).toHaveStyleRule("width", "15px");
      expect(loader.find("div div").at(i)).toHaveStyleRule("background", "#000000");
      expect(loader.find("div div").at(i)).toHaveStyleRule("font-size", "5px");
    }
  });

  it("should render null if loading prop is set as false", () => {
    loader = mount(<PropagateLoader loading={false} />);
    expect(loader.isEmptyRender()).toBe(true);
  });

  it("renders the correct color based on props", () => {
    let color: string = "#e2e2e2";
    loader = mount(<PropagateLoader color={color} />);

    for (let i: number = 0; i < 6; i++) {
      expect(loader.find("div div").at(i)).not.toHaveStyleRule("background", "#000000");

      expect(loader.find("div div").at(i)).toHaveStyleRule("background", color);
    }
  });

  it("renders the correct size for the parent div based on props", () => {
    let size: number = 21;
    loader = mount(<PropagateLoader size={size} />);

    for (let i: number = 0; i < 6; i++) {
      expect(loader.find("div div").at(i)).not.toHaveStyleRule("height", "15px");
      expect(loader.find("div div").at(i)).not.toHaveStyleRule("width", "15px");
      expect(loader.find("div div").at(i)).not.toHaveStyleRule("font-size", "5px");

      expect(loader.find("div div").at(i)).toHaveStyleRule("height", `${size}px`);
      expect(loader.find("div div").at(i)).toHaveStyleRule("width", `${size}px`);
      expect(loader.find("div div").at(i)).toHaveStyleRule("font-size", `${size / 3}px`);
    }
  });

  it("renders the css override based on props", () => {
    loader = mount(
      <PropagateLoader css={"position: absolute; width: 100px; height: 200px; color: blue;"} />
    );
    expect(loader).not.toHaveStyleRule("position", "relative");
    expect(loader).toHaveStyleRule("position", "absolute");
    expect(loader).toHaveStyleRule("width", "100px");
    expect(loader).toHaveStyleRule("height", "200px");
    expect(loader).toHaveStyleRule("color", "blue");
  });
});
