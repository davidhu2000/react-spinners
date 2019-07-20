import { calculateRgba } from "../../src/helpers";

describe("calculateRgba", () => {
  it("is a function", () => {
    expect(typeof calculateRgba).toEqual("function");
  });

  it("converts hash values to rgb", () => {
    expect(calculateRgba("#ffffff", 1)).toEqual("rgba(255, 255, 255, 1)");
  });

  it("calculates 3 character hash value to the correct rgba", () => {
    expect(calculateRgba("#fff", 1)).toEqual("rgba(255, 255, 255, 1)");
  });

  it("returns the passed in opacity as the part of the rgba value", () => {
    expect(calculateRgba("#fff", 0.5)).toEqual("rgba(255, 255, 255, 0.5)");
  });

  it("calculated the correct rgba value without the starting # passed in", () => {
    expect(calculateRgba("fff", 1)).toEqual("rgba(255, 255, 255, 1)");
  });
});
