import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import { matchers } from "@emotion/jest";
expect.extend(matchers);

import RotateLoader from "../src/RotateLoader";
import { sizeMarginDefaults } from "../src/helpers";
import { commonSpecs, cssSpecs, lengthSpecs } from "./sharedSpecs";

describe("RotateLoader", () => {
  const defaultSize = 15;
  const defaultMargin = 2;
  const defaultColor = "#000000";
  const defaultUnit = "px";

  commonSpecs(RotateLoader, sizeMarginDefaults(defaultSize));
  cssSpecs(RotateLoader);

  it("should contain styles created using default props", () => {
    const loader = mount(<RotateLoader />);
    expect(loader).toHaveStyleRule("background-color", defaultColor);
    expect(loader).toHaveStyleRule("height", `${defaultSize}${defaultUnit}`);
    expect(loader).toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);

    for (let i = 0; i < 2; i++) {
      expect(loader.find("span span").at(i)).toHaveStyleRule("background-color", defaultColor);
      expect(loader.find("span span").at(i)).toHaveStyleRule(
        "height",
        `${defaultSize}${defaultUnit}`
      );
      expect(loader.find("span span").at(i)).toHaveStyleRule(
        "width",
        `${defaultSize}${defaultUnit}`
      );
      const leftDefault = (i % 2 ? 1 : -1) * (26 + defaultMargin);

      expect(loader.find("span span").at(i)).toHaveStyleRule(
        "left",
        `${leftDefault}${defaultUnit}`
      );
    }
  });

  it("should render the correct color based on prop", () => {
    const color = "#e2e2e2";
    const loader = mount(<RotateLoader color={color} />);
    expect(loader).not.toHaveStyleRule("background-color", defaultColor);
    expect(loader).toHaveStyleRule("background-color", color);

    for (let i = 0; i < 2; i++) {
      expect(loader.find("span span").at(i)).not.toHaveStyleRule("background-color", defaultColor);
      expect(loader.find("span span").at(i)).toHaveStyleRule("background-color", color);
    }
  });

  const sizeExpectStatements = (loader: ReactWrapper, length: number, unit?: string) => {
    expect(loader).not.toHaveStyleRule("height", `${defaultSize}${defaultUnit}`);
    expect(loader).not.toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);

    expect(loader).toHaveStyleRule("height", `${length}${unit || defaultUnit}`);
    expect(loader).toHaveStyleRule("width", `${length}${unit || defaultUnit}`);

    for (let i = 0; i < 2; i++) {
      expect(loader.find("span span").at(i)).not.toHaveStyleRule(
        "height",
        `${defaultSize}${defaultUnit}`
      );
      expect(loader.find("span span").at(i)).not.toHaveStyleRule(
        "width",
        `${defaultSize}${defaultUnit}`
      );

      expect(loader.find("span span").at(i)).toHaveStyleRule(
        "height",
        `${length}${unit || defaultUnit}`
      );
      expect(loader.find("span span").at(i)).toHaveStyleRule(
        "width",
        `${length}${unit || defaultUnit}`
      );
    }
  };
  lengthSpecs(RotateLoader, "size", sizeExpectStatements);

  const marginExpectStatements = (loader: ReactWrapper, length: number, unit?: string) => {
    for (let i = 0; i < 2; i++) {
      const leftDefault = (i % 2 ? 1 : -1) * (26 + defaultMargin);
      expect(loader.find("span span").at(i)).not.toHaveStyleRule(
        "left",
        `${leftDefault}${defaultUnit}`
      );

      const left = (i % 2 ? 1 : -1) * (26 + length);
      expect(loader.find("span span").at(i)).toHaveStyleRule(
        "left",
        `${left}${unit || defaultUnit}`
      );
    }
  };
  lengthSpecs(RotateLoader, "margin", marginExpectStatements);
});
