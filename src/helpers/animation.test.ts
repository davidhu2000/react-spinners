import * as React from "react";
import { render } from "@testing-library/react";
import { createAnimation } from "./animation";
import RiseLoader from "../RiseLoader";

describe("createAnimation", () => {
  beforeEach(() => {
    document.head.innerHTML = "";
  });

  it("should return name with suffix if passed in", () => {
    const name = createAnimation(
      "TestLoader",
      "0% {left: -35%;right: 100%} 60% {left: 100%;right: -90%} 100% {left: 100%;right: -90%}",
      "my-suffix"
    );
    expect(name).toEqual("react-spinners-TestLoader-my-suffix");
  });

  it("should handle a missing stylesheet", () => {
    const originalCreateElement = document.createElement.bind(document);
    const createElement = jest.spyOn(document, "createElement").mockImplementation((tagName) => {
      const element = originalCreateElement(tagName);
      if (tagName === "style") Object.defineProperty(element, "sheet", { value: null });
      return element;
    });

    expect(createAnimation("TestLoader", "", "missing-stylesheet")).toBe(
      "react-spinners-TestLoader-missing-stylesheet"
    );

    createElement.mockRestore();
  });

  it("shares a single stylesheet across multiple animations", () => {
    createAnimation("Loader1", "0% {opacity: 0}", "test-1");
    createAnimation("Loader2", "0% {opacity: 1}", "test-2");

    expect(document.querySelectorAll("style")).toHaveLength(1);
  });

  it("reuses the existing keyframes when an animation is rendered again", () => {
    const frames = "0% {opacity: 0} 100% {opacity: 1}";

    const firstName = createAnimation("TestLoader", frames, "deduplicated");
    const secondName = createAnimation("TestLoader", frames, "deduplicated");

    expect(firstName).toEqual(secondName);
    expect(
      Array.from(document.styleSheets).filter((sheet) =>
        Array.from(sheet.cssRules).some((rule) => rule.cssText.includes(firstName))
      )
    ).toHaveLength(1);
  });

  it("restores keyframes when an animation returns to an earlier value", () => {
    const animationName = createAnimation("TestLoader", "0% {width: 10px}", "dynamic");

    createAnimation("TestLoader", "0% {width: 20px}", "dynamic");
    createAnimation("TestLoader", "0% {width: 10px}", "dynamic");

    const matchingRules = Array.from(document.styleSheets).flatMap((sheet) =>
      Array.from(sheet.cssRules).filter((rule) => rule.cssText.includes(animationName))
    );

    expect(matchingRules).toHaveLength(1);
    expect(matchingRules[0].cssText).toContain("10px");
  });

  it("does not delete other animation rules when names share a common prefix", () => {
    const baseName = createAnimation("PrefixLoader", "0% {width: 10px}", "prefix");
    const extendedName = createAnimation("PrefixLoader", "0% {width: 30px}", "prefix-extended");

    createAnimation("PrefixLoader", "0% {width: 20px}", "prefix");

    const rules = Array.from(document.styleSheets).flatMap((sheet) => Array.from(sheet.cssRules));

    const baseRules = rules.filter((rule) => (rule as CSSKeyframesRule).name === baseName);
    const extendedRules = rules.filter((rule) => (rule as CSSKeyframesRule).name === extendedName);

    expect(baseRules).toHaveLength(1);
    expect(baseRules[0].cssText).toContain("20px");
    expect(extendedRules).toHaveLength(1);
    expect(extendedRules[0].cssText).toContain("30px");
  });

  it("updates RiseLoader keyframes when size changes and returns to earlier value", () => {
    const { rerender } = render(React.createElement(RiseLoader, { size: 10 }));
    rerender(React.createElement(RiseLoader, { size: 20 }));
    rerender(React.createElement(RiseLoader, { size: 10 }));

    const matchingRules = Array.from(document.styleSheets).flatMap((sheet) =>
      Array.from(sheet.cssRules).filter((rule) => rule.cssText.includes("react-spinners-RiseLoader-even"))
    );

    expect(matchingRules).toHaveLength(1);
    expect(matchingRules[0].cssText).toContain("10px");
  });
});
