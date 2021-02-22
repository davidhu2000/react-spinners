import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import { matchers } from "@emotion/jest";
expect.extend(matchers);

import PropagateLoader from "../src/PropagateLoader";
import { sizeDefaults } from "../src/helpers";
import { commonSpecs, cssSpecs, lengthSpecs } from "./sharedSpecs";

describe("PropagateLoader", () => {
  const defaultSize = 15;
  const defaultColor = "#000000";
  const defaultUnit = "px";

  commonSpecs(PropagateLoader, sizeDefaults(defaultSize));
  cssSpecs(PropagateLoader);

  it("should contain styles created using default props", () => {
    const loader = mount(<PropagateLoader />);
    for (let i = 0; i < 6; i++) {
      expect(loader.find("span span").at(i)).toHaveStyleRule(
        "height",
        `${defaultSize}${defaultUnit}`
      );
      expect(loader.find("span span").at(i)).toHaveStyleRule(
        "width",
        `${defaultSize}${defaultUnit}`
      );
      expect(loader.find("span span").at(i)).toHaveStyleRule("background", defaultColor);
      expect(loader.find("span span").at(i)).toHaveStyleRule(
        "font-size",
        `${defaultSize / 3}${defaultUnit}`
      );
    }
  });

  it("should render the correct color based on props", () => {
    const color = "#e2e2e2";
    const loader = mount(<PropagateLoader color={color} />);

    for (let i = 0; i < 6; i++) {
      expect(loader.find("span span").at(i)).not.toHaveStyleRule("background", defaultColor);

      expect(loader.find("span span").at(i)).toHaveStyleRule("background", color);
    }
  });

  const sizeExpectStatements = (loader: ReactWrapper, length: number, unit?: string) => {
    for (let i = 0; i < 6; i++) {
      expect(loader.find("span span").at(i)).not.toHaveStyleRule(
        "height",
        `${defaultSize}${defaultUnit}`
      );
      expect(loader.find("span span").at(i)).not.toHaveStyleRule(
        "width",
        `${defaultSize}${defaultUnit}`
      );
      expect(loader.find("span span").at(i)).not.toHaveStyleRule(
        "font-size",
        `${defaultSize / 3}${defaultUnit}`
      );

      expect(loader.find("span span").at(i)).toHaveStyleRule(
        "height",
        `${length}${unit || defaultUnit}`
      );
      expect(loader.find("span span").at(i)).toHaveStyleRule(
        "width",
        `${length}${unit || defaultUnit}`
      );
      expect(loader.find("span span").at(i)).toHaveStyleRule(
        "font-size",
        `${length / 3}${unit || defaultUnit}`
      );
    }
  };
  lengthSpecs(PropagateLoader, "size", sizeExpectStatements);
});
