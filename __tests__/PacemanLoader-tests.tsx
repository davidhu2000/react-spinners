import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import { matchers } from "jest-emotion";
expect.extend(matchers);

import PacmanLoader from "../src/PacmanLoader";
import { LoaderSizeMarginProps } from "../src/interfaces";
import { sizeMarginDefaults } from "../src/helpers";

describe("PacmanLoader", () => {
  let loader: ReactWrapper;
  let props: LoaderSizeMarginProps;

  it("should match snapshot", () => {
    loader = mount(<PacmanLoader />);
    expect(loader).toMatchSnapshot();
  });

  it("should contain default props if no props are passed", () => {
    props = loader.props();
    expect(props).toEqual(sizeMarginDefaults(25));
  });

  it("parent div should contain styles created using default props", () => {
    expect(loader).toHaveStyleRule("height", "25px");
    expect(loader).toHaveStyleRule("width", "25px");
  });

  it("child div should contain styles created using default props", () => {
    expect(loader.find("div div").at(0)).toHaveStyleRule("border-radius", "25px");
    expect(loader.find("div div").at(1)).toHaveStyleRule("border-radius", "25px");

    for (let i: number = 2; i < 6; i++) {
      expect(loader.find("div div").at(i)).toHaveStyleRule("background-color", "#000000");
      expect(loader.find("div div").at(i)).toHaveStyleRule("height", `${25 / 3}px`);
      expect(loader.find("div div").at(i)).toHaveStyleRule("width", `${25 / 3}px`);
      expect(loader.find("div div").at(i)).toHaveStyleRule("margin", "2px");
      expect(loader.find("div div").at(i)).toHaveStyleRule("top", "25px");
      expect(loader.find("div div").at(i)).toHaveStyleRule("left", "100px");
    }
  });

  it("should render null if loading prop is set as false", () => {
    loader = mount(<PacmanLoader loading={false} />);
    expect(loader.isEmptyRender()).toBe(true);
  });

  it("renders the correct color based on prop", () => {
    loader = mount(<PacmanLoader color="#e2e2e2" />);
    for (let i: number = 2; i < 6; i++) {
      expect(loader.find("div div").at(i)).not.toHaveStyleRule("background-color", "#000000");
      expect(loader.find("div div").at(i)).toHaveStyleRule("background-color", "#e2e2e2");
    }
  });

  it("renders the correct size for the parent div based on props", () => {
    loader = mount(<PacmanLoader size={18} />);
    expect(loader).not.toHaveStyleRule("width", "25px");
    expect(loader).toHaveStyleRule("width", "18px");

    expect(loader.find("div div").at(0)).not.toHaveStyleRule("border-radius", `${25 / 3}px`);
    expect(loader.find("div div").at(0)).toHaveStyleRule("border-radius", "18px");
    expect(loader.find("div div").at(1)).not.toHaveStyleRule("border-radius", `${25 / 3}px`);
    expect(loader.find("div div").at(1)).toHaveStyleRule("border-radius", "18px");

    for (let i: number = 2; i < 6; i++) {
      expect(loader.find("div div").at(i)).not.toHaveStyleRule("height", `${25 / 3}px`);
      expect(loader.find("div div").at(i)).not.toHaveStyleRule("width", `${25 / 3}px`);
      expect(loader.find("div div").at(i)).not.toHaveStyleRule("top", "25px");
      expect(loader.find("div div").at(i)).not.toHaveStyleRule("left", "100px");

      expect(loader.find("div div").at(i)).toHaveStyleRule("height", "6px");
      expect(loader.find("div div").at(i)).toHaveStyleRule("width", "6px");
      expect(loader.find("div div").at(i)).toHaveStyleRule("top", "18px");
      expect(loader.find("div div").at(i)).toHaveStyleRule("left", "72px");
    }
  });

  it("renders the css override based on props", () => {
    loader = mount(
      <PacmanLoader css={"position: fixed; width: 100px; height: 200px; color: blue;"} />
    );
    expect(loader).not.toHaveStyleRule("position", "relative");
    expect(loader).not.toHaveStyleRule("width", "25px");
    expect(loader).toHaveStyleRule("position", "fixed");
    expect(loader).toHaveStyleRule("width", "100px");
  });
});
