import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import { matchers } from "@emotion/jest";
expect.extend(matchers);

import PuffLoader from "../src/PuffLoader";
import { sizeDefaults } from "../src/helpers";
import { commonSpecs, cssSpecs, lengthSpecs, speedMultiplierSpecs } from "./sharedSpecs";

describe("PuffLoader", () => {
  const defaultColor = "#000000";
  const defaultSize = 60;
  const defaultUnit = "px";
  const defaultSpeed = 2;

  commonSpecs(PuffLoader, sizeDefaults(defaultSize));
  cssSpecs(PuffLoader);

  it("should contain styles created using default props", () => {
    const loader = mount(<PuffLoader />);
    expect(loader).toHaveStyleRule("height", `${defaultSize}${defaultUnit}`);
    expect(loader).toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);
    expect(loader.find("span span")).toHaveStyleRule("height", `${defaultSize}${defaultUnit}`);
    expect(loader.find("span span")).toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);
    expect(loader.find("span span")).toHaveStyleRule("border", `thick solid ${defaultColor}`);
  });

  it("should render the correct color based on prop", () => {
    const color = "#e2e2e2";
    const loader = mount(<PuffLoader color={color} />);
    expect(loader.find("span span")).not.toHaveStyleRule("border", `thick solid ${defaultColor}`);
    expect(loader.find("span span")).toHaveStyleRule("border", `thick solid ${color}`);
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
  lengthSpecs(PuffLoader, "size", sizeExpectStatements);

  const speedMultiplierExpectStatements = (loader: ReactWrapper, multiplier: number) => {
    for (let i = 0; i < 2; i++) {
      expect(loader.find("span span").at(i)).toHaveStyleRule("animation-duration", `${defaultSpeed * multiplier}s`);
    }
  };

  speedMultiplierSpecs(PuffLoader, speedMultiplierExpectStatements);
});
