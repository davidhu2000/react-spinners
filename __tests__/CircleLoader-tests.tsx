import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import { matchers } from "@emotion/jest";
expect.extend(matchers);

import CircleLoader from "../src/CircleLoader";
import { sizeDefaults } from "../src/helpers";
import { commonSpecs, cssSpecs, lengthSpecs } from "./sharedSpecs";

describe("CircleLoader", () => {
  const defaultColor = "#000000";
  const defaultSize = 50;
  const defaultUnit = "px";

  commonSpecs(CircleLoader, sizeDefaults(defaultSize));
  cssSpecs(CircleLoader);

  it("should contain styles created using default props", () => {
    const loader = mount(<CircleLoader />);
    expect(loader).toHaveStyleRule("height", `${defaultSize}${defaultUnit}`);
    expect(loader).toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);
    expect(loader.find("span span")).toHaveStyleRule("height", `${defaultSize}${defaultUnit}`);
    expect(loader.find("span span")).toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);
    expect(loader.find("span span")).toHaveStyleRule("border", `1px solid ${defaultColor}`);
  });

  it("should render the correct color based on prop", () => {
    const color = "#e2e2e2";
    const loader = mount(<CircleLoader color={color} />);
    expect(loader.find("span span")).not.toHaveStyleRule("border", `1px solid ${defaultColor}`);
    expect(loader.find("span span")).toHaveStyleRule("border", `1px solid ${color}`);
  });

  const sizeExpectStatements = (loader: ReactWrapper, length: number, unit?: string) => {
    expect(loader).not.toHaveStyleRule("height", `${defaultSize}${defaultUnit}`);
    expect(loader).not.toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);
    expect(loader.find("span span")).not.toHaveStyleRule("height", `${defaultSize}${defaultUnit}`);
    expect(loader.find("span span")).not.toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);

    expect(loader).toHaveStyleRule("height", `${length}${unit || defaultUnit}`);
    expect(loader).toHaveStyleRule("width", `${length}${unit || defaultUnit}`);
    expect(loader.find("span span")).toHaveStyleRule("height", `${length}${unit || defaultUnit}`);
    expect(loader.find("span span")).toHaveStyleRule("width", `${length}${unit || defaultUnit}`);
  };
  lengthSpecs(CircleLoader, "size", sizeExpectStatements);
});
