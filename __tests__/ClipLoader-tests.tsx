import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import { matchers } from "jest-emotion";
expect.extend(matchers);

import ClipLoader from "../src/ClipLoader";
import { LoaderSizeProps } from "../src/interfaces";
import { sizeDefaults } from "../src/helpers";

describe("ClipLoader", () => {
  let loader: ReactWrapper;
  let props: LoaderSizeProps;

  it("should match snapshot", () => {
    loader = mount(<ClipLoader />);
    expect(loader).toMatchSnapshot();
  });

  it("should contain default props if no props are passed", () => {
    props = loader.props();
    expect(props).toEqual(sizeDefaults(35));
  });

  it("parent div should contain styles created using default props", () => {
    expect(loader).toHaveStyleRule("height", "35px");
    expect(loader).toHaveStyleRule("width", "35px");
    expect(loader).toHaveStyleRule("border-color", "#000000");
  });

  it("should render null if loading prop is set as false", () => {
    loader = mount(<ClipLoader loading={false} />);
    expect(loader.isEmptyRender()).toBe(true);
  });

  it("renders the correct color based on prop", () => {
    loader = mount(<ClipLoader color="#e2e2e2" />);
    expect(loader).not.toHaveStyleRule("border-color", "#000000");
    expect(loader).toHaveStyleRule("border-color", "#e2e2e2");
  });

  it("renders the correct size for the parent div based on props", () => {
    loader = mount(<ClipLoader size={18} />);
    expect(loader).not.toHaveStyleRule("height", "35px");
    expect(loader).not.toHaveStyleRule("width", "35px");
    expect(loader).toHaveStyleRule("height", "18px");
    expect(loader).toHaveStyleRule("width", "18px");
  });

  it("renders the css override based on props", () => {
    loader = mount(
      <ClipLoader css={"position: absolute; width: 100px; height: 200px; color: blue;"} />
    );
    expect(loader).not.toHaveStyleRule("position", "relative");
    expect(loader).not.toHaveStyleRule("width", "35px");
    expect(loader).not.toHaveStyleRule("height", "35px");
    expect(loader).toHaveStyleRule("position", "absolute");
    expect(loader).toHaveStyleRule("width", "100px");
    expect(loader).toHaveStyleRule("height", "200px");
    expect(loader).toHaveStyleRule("color", "blue");
  });
});
