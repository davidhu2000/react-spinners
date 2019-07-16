import PropTypes from "prop-types";

/*
 * List of string constants to represent different props
 */
const LOADING: string = "loading";
const COLOR: string = "color";
const CSS: string = "css";
const SIZE: string = "size";
const SIZE_UNIT: string = "sizeUnit";
const WIDTH: string = "width";
const WIDTH_UNIT: string = "widthUnit";
const HEIGHT: string = "height";
const HEIGHT_UNIT: string = "heightUnit";
const RADIUS: string = "radius";
const RADIUS_UNIT: string = "radiusUnit";
const MARGIN: string = "margin";

/*
 * Array for onlyUpdateForKeys function
 */
const commonStrings: string[] = [LOADING, COLOR, CSS];
const sizeStrings: string[] = [SIZE, SIZE_UNIT];
const heightWidthString: string[] = [HEIGHT, HEIGHT_UNIT, WIDTH, WIDTH_UNIT];

export const sizeKeys: string[] = commonStrings.concat(sizeStrings);
export const sizeMarginKeys: string[] = sizeKeys.concat([MARGIN]);
export const heightWidthKeys: string[] = commonStrings.concat(heightWidthString);
export const heightWidthRadiusKeys: string[] = heightWidthKeys.concat([
  RADIUS,
  RADIUS_UNIT,
  MARGIN
]);

/*
 * DefaultProps object for different loaders
 */

const commonValues = {
  [LOADING]: true,
  [COLOR]: "#000000",
  [CSS]: {}
};

const heightWidthValues = (height: number, width: number) => ({
  [HEIGHT]: height,
  [HEIGHT_UNIT]: "px",
  [WIDTH]: width,
  [WIDTH_UNIT]: "px"
});

const sizeValues = (sizeValue: number) => ({
  [SIZE]: sizeValue,
  [SIZE_UNIT]: "px"
});

export const sizeDefaults = (sizeValue: number) => {
  return Object.assign({}, commonValues, sizeValues(sizeValue));
};

export const sizeMarginDefaults = (sizeValue: number) => {
  return Object.assign({}, sizeDefaults(sizeValue), {
    [MARGIN]: "2px"
  });
};

export const heightWidthDefaults = (height: number, width: number) => {
  return Object.assign({}, commonValues, heightWidthValues(height, width));
};

export const heightWidthRadiusDefaults = (height: number, width: number, radius: number = 2) => {
  return Object.assign({}, heightWidthDefaults(height, width), {
    [RADIUS]: radius,
    [RADIUS_UNIT]: "px",
    [MARGIN]: "2px"
  });
};
