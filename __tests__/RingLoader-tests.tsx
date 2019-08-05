import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import { matchers } from "jest-emotion";
expect.extend(matchers);

import RingLoader from "../src/RingLoader";
import { LoaderSizeProps } from "../src/interfaces";
import { sizeDefaults } from "../src/helpers";

describe("RingLoader", () => {
  let loader: ReactWrapper;
  let props: LoaderSizeProps;

  it("should match snapshot", () => {
    loader = mount(<RingLoader />);
    expect(loader).toMatchSnapshot();
  });

  it("should contain default props if no props are passed", () => {
    props = loader.props();
    expect(props).toEqual(sizeDefaults(60));
  });

  it("should contain styles created using default props", () => {
    expect(loader).toHaveStyleRule("height", "60px");
    expect(loader).toHaveStyleRule("width", "60px");

    for (let i: number = 0; i < 2; i++) {
      expect(loader.find("div div").at(i)).toHaveStyleRule("height", "60px");
      expect(loader.find("div div").at(i)).toHaveStyleRule("width", "60px");
      expect(loader.find("div div").at(i)).toHaveStyleRule("border", "6px solid #000000");
    }
  });

  it("should render null if loading prop is set as false", () => {
    loader = mount(<RingLoader loading={false} />);
    expect(loader.isEmptyRender()).toBe(true);
  });

  it("renders the correct color based on props", () => {
    let color: string = "#e2e2e2";
    loader = mount(<RingLoader color={color} />);

    for (let i: number = 0; i < 2; i++) {
      expect(loader.find("div div").at(i)).not.toHaveStyleRule("border", "6px solid #000000");

      expect(loader.find("div div").at(i)).toHaveStyleRule("border", `6px solid ${color}`);
    }
  });

  it("renders the correct size for the parent div based on props", () => {
    let size: number = 21;
    loader = mount(<RingLoader size={size} />);

    expect(loader).not.toHaveStyleRule("height", "60px");
    expect(loader).not.toHaveStyleRule("width", "60px");
    expect(loader).toHaveStyleRule("height", "21px");
    expect(loader).toHaveStyleRule("width", "21px");

    for (let i: number = 0; i < 2; i++) {
      expect(loader.find("div div").at(i)).not.toHaveStyleRule("height", "60px");
      expect(loader.find("div div").at(i)).not.toHaveStyleRule("width", "60px");
      expect(loader.find("div div").at(i)).not.toHaveStyleRule("border", "6px solid #000000");

      expect(loader.find("div div").at(i)).toHaveStyleRule("height", `${size}px`);
      expect(loader.find("div div").at(i)).toHaveStyleRule("width", `${size}px`);
      expect(loader.find("div div").at(i)).toHaveStyleRule(
        "border",
        `${size / 10}px solid #000000`
      );
    }
  });

  it("renders the css override based on props", () => {
    loader = mount(<RingLoader css={"position: absolute; color: blue;"} />);

    expect(loader).not.toHaveStyleRule("position", "relative");
    expect(loader).toHaveStyleRule("position", "absolute");
    expect(loader).toHaveStyleRule("color", "blue");
  });
});
