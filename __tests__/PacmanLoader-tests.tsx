import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import { matchers } from "@emotion/jest";
expect.extend(matchers);

import PacmanLoader from "../src/PacmanLoader";
import { LoaderSizeMarginProps } from "../src/interfaces";
import { sizeMarginDefaults } from "../src/helpers";
import { commonSpecs, cssSpecs, lengthSpecs } from "./sharedSpecs";

describe("PacmanLoader", () => {
  const defaultSize = 25;
  const defaultMargin = 2;
  const defaultColor = "#000000";
  const defaultUnit = "px";

  commonSpecs(PacmanLoader, sizeMarginDefaults(defaultSize));
  cssSpecs(PacmanLoader);

  it("should contain styles created using default props", () => {
    const loader = mount(<PacmanLoader />);
    expect(loader).toHaveStyleRule("height", `${defaultSize}${defaultUnit}`);
    expect(loader).toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);

    expect(loader.find("span span").at(0)).toHaveStyleRule(
      "border-radius",
      `${defaultSize}${defaultUnit}`
    );
    expect(loader.find("span span").at(1)).toHaveStyleRule(
      "border-radius",
      `${defaultSize}${defaultUnit}`
    );

    for (let i = 2; i < 6; i++) {
      expect(loader.find("span span").at(i)).toHaveStyleRule("background-color", defaultColor);
      expect(loader.find("span span").at(i)).toHaveStyleRule(
        "height",
        `${defaultSize / 3}${defaultUnit}`
      );
      expect(loader.find("span span").at(i)).toHaveStyleRule(
        "width",
        `${defaultSize / 3}${defaultUnit}`
      );
      expect(loader.find("span span").at(i)).toHaveStyleRule(
        "margin",
        `${defaultMargin}${defaultUnit}`
      );
      expect(loader.find("span span").at(i)).toHaveStyleRule("top", `${defaultSize}${defaultUnit}`);
      expect(loader.find("span span").at(i)).toHaveStyleRule(
        "left",
        `${defaultSize * 4}${defaultUnit}`
      );
    }
  });

  it("should render the correct color based on prop", () => {
    const color = "#e2e2e2";
    const loader = mount(<PacmanLoader color={color} />);
    for (let i = 2; i < 6; i++) {
      expect(loader.find("span span").at(i)).not.toHaveStyleRule("background-color", defaultColor);
      expect(loader.find("span span").at(i)).toHaveStyleRule("background-color", color);
    }
  });

  const sizeExpectStatements = (loader: ReactWrapper, length: number, unit?: string) => {
    expect(loader).not.toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);
    expect(loader).toHaveStyleRule("width", `${length}${unit || defaultUnit}`);

    expect(loader.find("span span").at(0)).not.toHaveStyleRule(
      "border-radius",
      `${defaultSize / 3}${defaultUnit}`
    );
    expect(loader.find("span span").at(1)).not.toHaveStyleRule(
      "border-radius",
      `${defaultSize / 3}${defaultUnit}`
    );

    expect(loader.find("span span").at(0)).toHaveStyleRule(
      "border-radius",
      `${length}${unit || defaultUnit}`
    );
    expect(loader.find("span span").at(1)).toHaveStyleRule(
      "border-radius",
      `${length}${unit || defaultUnit}`
    );

    for (let i = 2; i < 6; i++) {
      expect(loader.find("span span").at(i)).not.toHaveStyleRule(
        "height",
        `${defaultSize / 3}${defaultUnit}`
      );
      expect(loader.find("span span").at(i)).not.toHaveStyleRule(
        "width",
        `${defaultSize / 3}${defaultUnit}`
      );
      expect(loader.find("span span").at(i)).not.toHaveStyleRule(
        "top",
        `${defaultSize}${defaultUnit}`
      );
      expect(loader.find("span span").at(i)).not.toHaveStyleRule(
        "left",
        `${defaultSize * 4}${defaultUnit}`
      );

      expect(loader.find("span span").at(i)).toHaveStyleRule(
        "height",
        `${length / 3}${unit || defaultUnit}`
      );
      expect(loader.find("span span").at(i)).toHaveStyleRule(
        "width",
        `${length / 3}${unit || defaultUnit}`
      );
      expect(loader.find("span span").at(i)).toHaveStyleRule(
        "top",
        `${length}${unit || defaultUnit}`
      );
      expect(loader.find("span span").at(i)).toHaveStyleRule(
        "left",
        `${length * 4}${unit || defaultUnit}`
      );
    }
  };
  lengthSpecs(PacmanLoader, "size", sizeExpectStatements);

  const marginExpectStatements = (loader: ReactWrapper, length: number, unit?: string) => {
    for (let i = 2; i < 6; i++) {
      expect(loader.find("span span").at(i)).not.toHaveStyleRule(
        "margin",
        `${defaultMargin}${defaultUnit}`
      );
      expect(loader.find("span span").at(i)).toHaveStyleRule(
        "margin",
        `${length}${unit || defaultUnit}`
      );
    }
  };
  lengthSpecs(PacmanLoader, "margin", marginExpectStatements);
});
