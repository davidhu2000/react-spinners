import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import { matchers } from "@emotion/jest";
expect.extend(matchers);

import MoonLoader from "../src/MoonLoader";
import { sizeDefaults } from "../src/helpers";
import { commonSpecs, cssSpecs, lengthSpecs } from "./sharedSpecs";

describe("MoonLoader", () => {
  const defaultColor = "#000000";
  const defaultSize = 60;
  const defaultUnit = "px";
  const defaultWrapperSize = defaultSize + (defaultSize / 7) * 2;

  commonSpecs(MoonLoader, sizeDefaults(defaultSize));
  cssSpecs(MoonLoader);

  it("should contain styles created using default props", () => {
    const loader = mount(<MoonLoader />);
    expect(loader).toHaveStyleRule("height", `${defaultWrapperSize}${defaultUnit}`);
    expect(loader).toHaveStyleRule("width", `${defaultWrapperSize}${defaultUnit}`);
    expect(loader.find("span span").at(0)).toHaveStyleRule("background-color", defaultColor);
    expect(loader.find("span span").at(0)).toHaveStyleRule(
      "height",
      `${defaultSize / 7}${defaultUnit}`
    );
    expect(loader.find("span span").at(0)).toHaveStyleRule(
      "width",
      `${defaultSize / 7}${defaultUnit}`
    );
    expect(loader.find("span span").at(1)).toHaveStyleRule(
      "border",
      `${defaultSize / 7}${defaultUnit} solid ${defaultColor}`
    );
    expect(loader.find("span span").at(1)).toHaveStyleRule("height", `60${defaultUnit}`);
    expect(loader.find("span span").at(1)).toHaveStyleRule("width", `60${defaultUnit}`);
  });

  it("should render the correct color based on prop", () => {
    const color = "#e2e2e2";
    const loader = mount(<MoonLoader color={color} />);
    expect(loader.find("span span")).not.toHaveStyleRule("background-color", defaultColor);
    expect(loader.find("span span")).toHaveStyleRule("background-color", color);
  });

  const sizeExpectStatements = (loader: ReactWrapper, length: number, unit?: string) => {
    const wrapperSize = length + (length / 7) * 2;
    expect(loader).not.toHaveStyleRule("height", `${defaultWrapperSize}${defaultUnit}`);
    expect(loader).not.toHaveStyleRule("width", `${defaultWrapperSize}${defaultUnit}`);
    expect(loader).toHaveStyleRule("height", `${wrapperSize}${unit || defaultUnit}`);
    expect(loader).toHaveStyleRule("width", `${wrapperSize}${unit || defaultUnit}`);
  };
  lengthSpecs(MoonLoader, "size", sizeExpectStatements);
});
