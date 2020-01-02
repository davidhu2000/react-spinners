import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import { css } from "@emotion/core";
import { matchers } from "jest-emotion";
expect.extend(matchers);

import ClockLoader from "../src/ClockLoader";
import { LoaderSizeProps } from "../src/interfaces";
import { sizeDefaults } from "../src/helpers";

describe("ClockLoader", () => {
  let loader: ReactWrapper<LoaderSizeProps, null, ClockLoader>;
  let props: LoaderSizeProps;
  let defaultColor: string = "#000000";
  let defaultSize: number = 50;
  let defaultUnit: string = "px";

  it("should match snapshot", () => {
    loader = mount(<ClockLoader />);
    expect(loader).toMatchSnapshot();
  });

  it("should contain default props if no props are passed", () => {
    props = loader.props();
    expect(props).toEqual(sizeDefaults(defaultSize));
  });

  it("should contain styles created using default props", () => {
    expect(loader).toHaveStyleRule("height", `${defaultSize}${defaultUnit}`);
    expect(loader).toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);
    expect(loader).toHaveStyleRule("box-shadow", `inset 0px 0px 0px 2px ${defaultColor}`);
  });

  it("should render null if loading prop is set as false", () => {
    loader = mount(<ClockLoader loading={false} />);
    expect(loader.isEmptyRender()).toBe(true);
  });

  it("should render the correct color based on prop", () => {
    let color: string = "#e2e2e2";
    loader = mount(<ClockLoader color={color} />);
    expect(loader).not.toHaveStyleRule("box-shadow", `inset 0px 0px 0px 2px ${defaultColor}`);
    expect(loader).toHaveStyleRule("box-shadow", `inset 0px 0px 0px 2px ${color}`);
  });

  describe("size prop", () => {
    it("should render the size with px unit when size is a number", () => {
      let size: number = 18;
      loader = mount(<ClockLoader size={size} />);
      expect(loader).not.toHaveStyleRule("height", `${defaultSize}${defaultUnit}`);
      expect(loader).not.toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);

      expect(loader).toHaveStyleRule("height", `${size}${defaultUnit}`);
      expect(loader).toHaveStyleRule("width", `${size}${defaultUnit}`);
    });

    it("should render the size as is when size is a string with valid css unit", () => {
      let size: string = "18px";
      loader = mount(<ClockLoader size={size} />);
      expect(loader).not.toHaveStyleRule("height", `${defaultSize}${defaultUnit}`);
      expect(loader).not.toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);

      expect(loader).toHaveStyleRule("height", `${size}`);
      expect(loader).toHaveStyleRule("width", `${size}`);
    });

    it("should render the size with default unit of px when the unit is incorrect", () => {
      let length: number = 18;
      let unit: string = "ad";
      let size: string = `${length}${unit}`;
      loader = mount(<ClockLoader size={size} />);
      expect(loader).not.toHaveStyleRule("height", `${defaultSize}${defaultUnit}`);
      expect(loader).not.toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);

      expect(loader).toHaveStyleRule("height", `${length}${defaultUnit}`);
      expect(loader).toHaveStyleRule("width", `${length}${defaultUnit}`);
    });
  });

  describe("css prop", () => {
    it("should render the css override if a valid css string is passed in", () => {
      loader = mount(<ClockLoader css={"position: absolute; overflow: scroll;"} />);
      expect(loader).not.toHaveStyleRule("position", "relative");
      expect(loader).toHaveStyleRule("position", "absolute");
      expect(loader).toHaveStyleRule("overflow", "scroll");
    });

    it("should render the css override if the result of the emotion css function is passed in", () => {
      loader = mount(
        <ClockLoader
          css={css`
            position: absolute;
            overflow: scroll;
          `}
        />
      );
      expect(loader).not.toHaveStyleRule("position", "relative");
      expect(loader).toHaveStyleRule("position", "absolute");
      expect(loader).toHaveStyleRule("overflow", "scroll");
    });
  });
});
