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

  it("calculates the correct rgba using basic color names", () => {
    expect(calculateRgba("maroon", 0.7)).toEqual("rgba(128, 0, 0, 0.7)");
    expect(calculateRgba("red", 0.7)).toEqual("rgba(255, 0, 0, 0.7)");
    expect(calculateRgba("orange", 0.7)).toEqual("rgba(255, 165, 0, 0.7)");
    expect(calculateRgba("yellow", 0.7)).toEqual("rgba(255, 255, 0, 0.7)");
    expect(calculateRgba("olive", 0.7)).toEqual("rgba(128, 128, 0, 0.7)");
    expect(calculateRgba("green", 0.7)).toEqual("rgba(0, 128, 0, 0.7)");
    expect(calculateRgba("purple", 0.7)).toEqual("rgba(128, 0, 128, 0.7)");
    expect(calculateRgba("fuchsia", 0.7)).toEqual("rgba(255, 0, 255, 0.7)");
    expect(calculateRgba("lime", 0.7)).toEqual("rgba(0, 255, 0, 0.7)");
    expect(calculateRgba("teal", 0.7)).toEqual("rgba(0, 128, 128, 0.7)");
    expect(calculateRgba("aqua", 0.7)).toEqual("rgba(0, 255, 255, 0.7)");
    expect(calculateRgba("blue", 0.7)).toEqual("rgba(0, 0, 255, 0.7)");
    expect(calculateRgba("navy", 0.7)).toEqual("rgba(0, 0, 128, 0.7)");
    expect(calculateRgba("black", 0.7)).toEqual("rgba(0, 0, 0, 0.7)");
    expect(calculateRgba("gray", 0.7)).toEqual("rgba(128, 128, 128, 0.7)");
    expect(calculateRgba("silver", 0.7)).toEqual("rgba(192, 192, 192, 0.7)");
    expect(calculateRgba("white", 0.7)).toEqual("rgba(255, 255, 255, 0.7)");
  });
});
