import { unitConverter } from "../../src/helpers";
import { LengthObject } from "../../src/interfaces";

describe("unitConverter", () => {
  let spy: jest.SpyInstance = jest.spyOn(console, "warn");
  let output: LengthObject = {
    value: 12,
    unit: "px"
  };

  it("is a function", () => {
    expect(typeof unitConverter).toEqual("function");
  });

  it("takes a number as the input and append px to the value", () => {
    expect(unitConverter(12)).toEqual(output);
    expect(spy).not.toBeCalled();
  });

  it("take a string with valid integer css unit and return an object with value and unit", () => {
    expect(unitConverter("12px")).toEqual(output);
    expect(spy).not.toBeCalled();
  });

  it("take a string with valid css float unit and return an object with value and unit", () => {
    let output: LengthObject = {
      value: 12.5,
      unit: "px"
    };
    expect(unitConverter("12.5px")).toEqual(output);
    expect(spy).not.toBeCalled();
  });

  it("takes an invalid css unit and default the value to px", () => {
    expect(unitConverter("12fd")).toEqual(output);
    expect(spy).toBeCalled();
  });
});
