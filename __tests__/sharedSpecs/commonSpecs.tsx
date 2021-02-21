import * as React from "react";
import { mount } from "enzyme";
import { matchers } from "@emotion/jest";
import BarLoader from "../../src/BarLoader";
import PulseLoader from "../../src/PulseLoader";
import { LoaderHeightWidthProps, LoaderSizeMarginProps } from "../../src/interfaces";
expect.extend(matchers);

export function commonSpecs(Loader: typeof BarLoader, defaultProps: LoaderHeightWidthProps): void;
export function commonSpecs(Loader: typeof PulseLoader, defaultProps: LoaderSizeMarginProps): void;
export function commonSpecs(Loader: typeof React.Component, defaultProps: unknown): void {
  it("should match snapshot", () => {
    const loader = mount(<Loader />);
    expect(loader).toMatchSnapshot();
  });

  it("should contain default props if no props are passed", () => {
    const loader = mount(<Loader />);
    expect(loader.props()).toEqual(defaultProps);
  });

  it("should render null if loading prop is set as false", () => {
    const loader = mount(<Loader loading={false} />);
    expect(loader.isEmptyRender()).toBe(true);
  });

  it("should render the css override based on props", () => {
    const loader = mount(<Loader css={"position: absolute; overflow: scroll;"} />);
    expect(loader).not.toHaveStyleRule("position", "relative");
    expect(loader).toHaveStyleRule("position", "absolute");
    expect(loader).not.toHaveStyleRule("overflow", "hidden");
    expect(loader).toHaveStyleRule("overflow", "scroll");
  });
}
