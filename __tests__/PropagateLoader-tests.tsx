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
  let defaultSize: number = 15;
  let defaultColor: string = "#000000";

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
      expect(loader.find("div div").at(i)).toHaveStyleRule("height", `${defaultSize}px`);
      expect(loader.find("div div").at(i)).toHaveStyleRule("width", `${defaultSize}px`);
      expect(loader.find("div div").at(i)).toHaveStyleRule("background", defaultColor);
      expect(loader.find("div div").at(i)).toHaveStyleRule("font-size", `${defaultSize / 3}px`);
    }
  });

  it("should render null if loading prop is set as false", () => {
    loader = mount(<PropagateLoader loading={false} />);
    expect(loader.isEmptyRender()).toBe(true);
  });

  it("should render the correct color based on props", () => {
    let color: string = "#e2e2e2";
    loader = mount(<PropagateLoader color={color} />);

    for (let i: number = 0; i < 6; i++) {
      expect(loader.find("div div").at(i)).not.toHaveStyleRule("background", defaultColor);

      expect(loader.find("div div").at(i)).toHaveStyleRule("background", color);
    }
  });

  it("should render the correct size based on props", () => {
    let size: number = 21;
    loader = mount(<PropagateLoader size={size} />);

    for (let i: number = 0; i < 6; i++) {
      expect(loader.find("div div").at(i)).not.toHaveStyleRule("height", `${defaultSize}px`);
      expect(loader.find("div div").at(i)).not.toHaveStyleRule("width", `${defaultSize}px`);
      expect(loader.find("div div").at(i)).not.toHaveStyleRule("font-size", `${defaultSize / 3}px`);

      expect(loader.find("div div").at(i)).toHaveStyleRule("height", `${size}px`);
      expect(loader.find("div div").at(i)).toHaveStyleRule("width", `${size}px`);
      expect(loader.find("div div").at(i)).toHaveStyleRule("font-size", `${size / 3}px`);
    }
  });

  it("should render the css override based on props", () => {
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
