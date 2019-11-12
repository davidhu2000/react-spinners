import { parseLengthAndUnit, cssValue } from "../../src/helpers";
import { LengthObject } from "../../src/interfaces";

describe("unitConverter", () => {
  describe("parseLengthAndUnit", () => {
    let spy: jest.SpyInstance = jest.spyOn(console, "warn");
    let output: LengthObject = {
      value: 12,
      unit: "px"
    };

    it("is a function", () => {
      expect(typeof parseLengthAndUnit).toEqual("function");
    });

    it("takes a number as the input and append px to the value", () => {
      expect(parseLengthAndUnit(12)).toEqual(output);
      expect(spy).not.toBeCalled();
    });

    it("take a string with valid integer css unit and return an object with value and unit", () => {
      expect(parseLengthAndUnit("12px")).toEqual(output);
      expect(spy).not.toBeCalled();
    });

    it("take a string with valid css float unit and return an object with value and unit", () => {
      let output: LengthObject = {
        value: 12.5,
        unit: "px"
      };
      expect(parseLengthAndUnit("12.5px")).toEqual(output);
      expect(spy).not.toBeCalled();
    });

    it("takes an invalid css unit and default the value to px", () => {
      expect(parseLengthAndUnit("12fd")).toEqual(output);
      expect(spy).toBeCalled();
    });
  });

  describe("cssValue", () => {
    it("is a function", () => {
      expect(typeof cssValue).toEqual("function");
    });

    it("takes a number as the input and append px to the value", () => {
      expect(cssValue(12)).toEqual("12px");
    });

    it("takes a string with valid css unit as the input and return the value", () => {
      expect(cssValue("12%")).toEqual("12%");
      expect(cssValue("12em")).toEqual("12em");
    });

    it("takes a string with invalid css unit as the input and default to px", () => {
      expect(cssValue("12qw")).toEqual("12px");
    });
  });
});
