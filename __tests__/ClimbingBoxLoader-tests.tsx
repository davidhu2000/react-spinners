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
    expect(loader.find("div div div").at(0)).toHaveStyleRule("border", "0.25em solid #000000");
    expect(loader.find("div div div").at(1)).toHaveStyleRule("border-left", "0.25em solid #000000");
  });

  it("should render null if loading prop is set as false", () => {
    loader = mount(<ClimbingBoxLoader loading={false} />);
    expect(loader.isEmptyRender()).toBe(true);
  });

  it("renders the correct color based on prop", () => {
    loader = mount(<ClimbingBoxLoader color="#e2e2e2" />);
    expect(loader.find("div div div").at(0)).not.toHaveStyleRule("border", "0.25em solid #000000");
    expect(loader.find("div div div").at(0)).toHaveStyleRule("border", "0.25em solid #e2e2e2");
    expect(loader.find("div div div").at(1)).not.toHaveStyleRule(
      "border-left",
      "0.25em solid #000000"
    );
    expect(loader.find("div div div").at(1)).toHaveStyleRule("border-left", "0.25em solid #e2e2e2");
  });

  it("renders the correct size for the parent div based on props", () => {
    loader = mount(<ClimbingBoxLoader size={18} />);
    expect(loader.find("div div")).not.toHaveStyleRule("font-size", "15px");
    expect(loader.find("div div")).toHaveStyleRule("font-size", "18px");
  });

  it("renders the css override based on props", () => {
    loader = mount(
      <ClimbingBoxLoader css={"position: absolute; width: 100px; height: 200px; color: blue;"} />
    );
    expect(loader).not.toHaveStyleRule("position", "relative");
    expect(loader).not.toHaveStyleRule("width", "7.1em");
    expect(loader).not.toHaveStyleRule("height", "7.1em");
    expect(loader).toHaveStyleRule("position", "absolute");
    expect(loader).toHaveStyleRule("width", "100px");
    expect(loader).toHaveStyleRule("height", "200px");
    expect(loader).toHaveStyleRule("color", "blue");
  });
});
