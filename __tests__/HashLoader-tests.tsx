import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import { matchers } from "@emotion/jest";
expect.extend(matchers);

import HashLoader from "../src/HashLoader";
import { sizeDefaults } from "../src/helpers";
import { commonSpecs, cssSpecs, lengthSpecs } from "./sharedSpecs";

describe("HashLoader", () => {
  const defaultSize = 50;
  const defaultUnit = "px";

  commonSpecs(HashLoader, sizeDefaults(defaultSize));
  cssSpecs(HashLoader);

  it("should contain styles created using default props", () => {
    const loader = mount(<HashLoader />);
    expect(loader).toHaveStyleRule("height", `${defaultSize}${defaultUnit}`);
    expect(loader).toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);

    for (let i = 0; i < 2; i++) {
      expect(loader.find("span span").at(0)).toHaveStyleRule(
        "height",
        `${defaultSize / 5}${defaultUnit}`
      );
      expect(loader.find("span span").at(0)).toHaveStyleRule(
        "width",
        `${defaultSize / 5}${defaultUnit}`
      );
      expect(loader.find("span span").at(0)).toHaveStyleRule(
        "border-radius",
        `${defaultSize / 10}${defaultUnit}`
      );
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
        `${defaultSize / 5}${defaultUnit}`
      );
      expect(loader.find("span span").at(i)).not.toHaveStyleRule(
        "width",
        `${defaultSize / 5}${defaultUnit}`
      );
      expect(loader.find("span span").at(i)).not.toHaveStyleRule(
        "border-radius",
        `${defaultSize / 10}${defaultUnit}`
      );

      expect(loader.find("span span").at(i)).toHaveStyleRule(
        "height",
        `${length / 5}${unit || defaultUnit}`
      );
      expect(loader.find("span span").at(i)).toHaveStyleRule(
        "width",
        `${length / 5}${unit || defaultUnit}`
      );
      expect(loader.find("span span").at(i)).toHaveStyleRule(
        "border-radius",
        `${length / 10}${unit || defaultUnit}`
      );
    }
  };
  lengthSpecs(HashLoader, "size", sizeExpectStatements);
});
