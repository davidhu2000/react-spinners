import { LengthObject } from "../interfaces";

const cssUnit: { [unit: string]: boolean } = {
  cm: true,
  mm: true,
  in: true,
  px: true,
  pt: true,
  pc: true,
  em: true,
  ex: true,
  ch: true,
  rem: true,
  vw: true,
  vh: true,
  vmin: true,
  vmax: true,
  "%": true
};

/**
 * If size is a number, append px to the value as default unit.
 * If size is a string, validate against list of valid units.
 * If unit is valid, return size as is.
 * If unit is invalid, console warn issue, replace with px as the unit.
 *
 * @param {(number | string)} size
 * @return {LengthObject} LengthObject
 */
export function unitConverter(size: number | string): LengthObject {
  if (typeof size === "number") {
    return {
      value: size,
      unit: "px"
    };
  }
  let value: number;
  let valueString: string = size.match(/^[0-9.]*/)!.toString();
  if (valueString.includes(".")) {
    value = parseFloat(valueString);
  } else {
    value = parseInt(valueString, 10);
  }

  let unit: string = size.match(/[^0-9]*$/)!.toString();

  if (cssUnit[unit]) {
    return {
      value,
      unit
    };
  }

  console.warn(`React Spinners: ${size} is not a valid css value. Defaulting to ${value}px.`);

  return {
    value,
    unit: "px"
  };
}
