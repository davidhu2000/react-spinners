import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import { matchers } from "@emotion/jest";
expect.extend(matchers);

import ClimbingBoxLoader from "../src/ClimbingBoxLoader";
import { sizeDefaults } from "../src/helpers";
import { commonSpecs, cssSpecs, lengthSpecs } from "./sharedSpecs";

describe("ClimbingBoxLoader", () => {
  const defaultColor = "#000000";
  const defaultSize = 15;
  const defaultUnit = "px";

  commonSpecs(ClimbingBoxLoader, sizeDefaults(defaultSize));
  cssSpecs(ClimbingBoxLoader);

  it("should contain styles created using default props", () => {
    const loader = mount(<ClimbingBoxLoader />);
    expect(loader.find("span span")).toHaveStyleRule("font-size", `${defaultSize}${defaultUnit}`);
    expect(loader.find("span span span").at(0)).toHaveStyleRule(
      "border",
      `0.25em solid ${defaultColor}`
    );
    expect(loader.find("span span span").at(1)).toHaveStyleRule(
      "border-left",
      `0.25em solid ${defaultColor}`
    );
  });

  it("should render the correct color based on prop", () => {
    const color = "#e2e2e2";
    const loader = mount(<ClimbingBoxLoader color={color} />);

    expect(loader.find("span span span").at(0)).not.toHaveStyleRule(
      "border",
      `0.25em solid ${defaultColor}`
    );
    expect(loader.find("span span span").at(0)).toHaveStyleRule("border", `0.25em solid ${color}`);

    expect(loader.find("span span span").at(1)).not.toHaveStyleRule(
      "border-left",
      `0.25em solid ${defaultColor}`
    );
    expect(loader.find("span span span").at(1)).toHaveStyleRule(
      "border-left",
      `0.25em solid ${color}`
    );
  });

  const sizeExpectStatements = (loader: ReactWrapper, length: number, unit?: string) => {
    expect(loader.find("span span")).not.toHaveStyleRule(
      "font-size",
      `${defaultSize}${defaultUnit}`
    );
    expect(loader.find("span span")).toHaveStyleRule(
      "font-size",
      `${length}${unit || defaultUnit}`
    );
  };
  lengthSpecs(ClimbingBoxLoader, "size", sizeExpectStatements);
});
