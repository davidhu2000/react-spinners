import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import { matchers } from "@emotion/jest";
expect.extend(matchers);

import SkewLoader from "../src/SkewLoader";
import { sizeDefaults } from "../src/helpers";
import { commonSpecs, cssSpecs, lengthSpecs } from "./sharedSpecs";

describe("SkewLoader", () => {
  const defaultSize = 20;
  const defaultColor = "#000000";
  const defaultUnit = "px";

  commonSpecs(SkewLoader, sizeDefaults(defaultSize));
  cssSpecs(SkewLoader);

  it("should contain styles created using default props", () => {
    const loader = mount(<SkewLoader />);
    expect(loader).toHaveStyleRule("border-left", `${defaultSize}${defaultUnit} solid transparent`);
    expect(loader).toHaveStyleRule(
      "border-right",
      `${defaultSize}${defaultUnit} solid transparent`
    );
    expect(loader).toHaveStyleRule(
      "border-bottom",
      `${defaultSize}${defaultUnit} solid ${defaultColor}`
    );
  });

  it("should render the correct color based on props", () => {
    const color = "#e2e2e2";
    const loader = mount(<SkewLoader color={color} />);

    expect(loader).not.toHaveStyleRule(
      "border-bottom",
      `${defaultSize}${defaultUnit} solid ${defaultColor}`
    );
    expect(loader).toHaveStyleRule("border-bottom", `${defaultSize}${defaultUnit} solid ${color}`);
  });

  const sizeExpectStatements = (loader: ReactWrapper, length: number, unit?: string) => {
    expect(loader).not.toHaveStyleRule(
      "border-left",
      `${defaultSize}${defaultUnit} solid transparent`
    );
    expect(loader).not.toHaveStyleRule(
      "border-right",
      `${defaultSize}${defaultUnit} solid transparent`
    );
    expect(loader).not.toHaveStyleRule(
      "border-bottom",
      `${defaultSize}${defaultUnit} solid ${defaultColor}`
    );

    expect(loader).toHaveStyleRule(
      "border-left",
      `${length}${unit || defaultUnit} solid transparent`
    );
    expect(loader).toHaveStyleRule(
      "border-right",
      `${length}${unit || defaultUnit} solid transparent`
    );
    expect(loader).toHaveStyleRule(
      "border-bottom",
      `${length}${unit || defaultUnit} solid ${defaultColor}`
    );
  };
  lengthSpecs(SkewLoader, "size", sizeExpectStatements);
});
