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

export interface DefaultProps {
  [key: string]: boolean | string | {} | number;
}

type HeightWidthFunction = (height: number, width: number) => DefaultProps;
type HeightWidthRadiusFunction = (height: number, width: number, radius?: number) => DefaultProps;
type SizeFunction = (size: number) => DefaultProps;

const commonValues: DefaultProps = {
  [LOADING]: true,
  [COLOR]: "#000000",
  [CSS]: {}
};

const heightWidthValues: HeightWidthFunction = (height: number, width: number): DefaultProps => ({
  [HEIGHT]: height,
  [HEIGHT_UNIT]: "px",
  [WIDTH]: width,
  [WIDTH_UNIT]: "px"
});

const sizeValues: SizeFunction = (sizeValue: number): DefaultProps => ({
  [SIZE]: sizeValue,
  [SIZE_UNIT]: "px"
});

export const sizeDefaults: SizeFunction = (sizeValue: number): DefaultProps => {
  return Object.assign({}, commonValues, sizeValues(sizeValue));
};

export const sizeMarginDefaults: SizeFunction = (sizeValue: number): DefaultProps => {
  return Object.assign({}, sizeDefaults(sizeValue), {
    [MARGIN]: "2px"
  });
};

export const heightWidthDefaults: HeightWidthFunction = (
  height: number,
  width: number
): DefaultProps => {
  return Object.assign({}, commonValues, heightWidthValues(height, width));
};

export const heightWidthRadiusDefaults: HeightWidthRadiusFunction = (
  height: number,
  width: number,
  radius: number = 2
): DefaultProps => {
  return Object.assign({}, heightWidthDefaults(height, width), {
    [RADIUS]: radius,
    [RADIUS_UNIT]: "px",
    [MARGIN]: "2px"
  });
};
