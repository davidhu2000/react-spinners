import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import { matchers } from "jest-emotion";
expect.extend(matchers);

import BarLoader from "../src/BarLoader";
import { LoaderHeightWidthProps } from "../src/interfaces";
import { heightWidthDefaults } from "../src/helpers";

describe("BarLoader", () => {
  let loader: ReactWrapper;
  let props: LoaderHeightWidthProps;

  it("should match snapshot", () => {
    loader = mount(<BarLoader />);
    expect(loader).toMatchSnapshot();
  });

  it("should contain default props if no props are passed", () => {
    props = loader.props();
    expect(props).toEqual(heightWidthDefaults(4, 100));
  });

  it("should contain styles created using default props", () => {
    props = loader.props();
    expect(loader).toHaveStyleRule("height", "4px");
    expect(loader).toHaveStyleRule("width", "100px");
    expect(loader).toHaveStyleRule("background-color", "rgba(0,0,0,0.2)");
    expect(loader.find("div div")).toHaveStyleRule("background-color", "#000000");
  });

  it("should render null if loading prop is set as false", () => {
    loader = mount(<BarLoader loading={false} />);
    expect(loader.isEmptyRender()).toBe(true);
  });

  it("renders the correct color based on passed in prop", () => {
    loader = mount(<BarLoader color="#e2e2e2" />);
    expect(loader).not.toHaveStyleRule("background-color", "rgba(0,0,0,0.2)");
    expect(loader).toHaveStyleRule("background-color", "rgba(226,226,226,0.2)");
  });

  it("renders the correct height based on props", () => {
    loader = mount(<BarLoader height={10} />);
    expect(loader).not.toHaveStyleRule("height", "4px");
    expect(loader).toHaveStyleRule("height", "10px");
  });

  it("renders the correct heightUnit basd on passed in props", () => {
    loader = mount(<BarLoader heightUnit="%" />);
    expect(loader).not.toHaveStyleRule("height", "4px");
    expect(loader).toHaveStyleRule("height", "4%");
  });

  it("renders the correct width based on props", () => {
    loader = mount(<BarLoader width={10} />);
    expect(loader).not.toHaveStyleRule("width", "100px");
    expect(loader).toHaveStyleRule("width", "10px");
  });

  it("renders the correct widthUnit basd on passed in props", () => {
    loader = mount(<BarLoader widthUnit="%" />);
    expect(loader).not.toHaveStyleRule("width", "100px");
    expect(loader).toHaveStyleRule("width", "100%");
  });

  it("renders the css override based on props", () => {
    loader = mount(<BarLoader css={"position: absolute; overflow: scroll;"} />);
    expect(loader).not.toHaveStyleRule("position", "relative");
    expect(loader).toHaveStyleRule("position", "absolute");
    expect(loader).not.toHaveStyleRule("overflow", "hidden");
    expect(loader).toHaveStyleRule("overflow", "scroll");
  });
});
