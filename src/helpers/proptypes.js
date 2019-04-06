import PropTypes from 'prop-types';

/*
 * List of string constants to represent different props
 */
const LOADING = 'loading';
const COLOR = 'color';
const CSS = 'css';
const SIZE = 'size';
const SIZE_UNIT = 'sizeUnit';
const WIDTH = 'width';
const WIDTH_UNIT = 'widthUnit';
const HEIGHT = 'height';
const HEIGHT_UNIT = 'heightUnit';
const RADIUS = 'radius';
const RADIUS_UNIT = 'radiusUnit';
const MARGIN = 'margin';

/*
 * Array for onlyUpdateForKeys function
 */
const commonStrings = [LOADING, COLOR, CSS];
const sizeStrings = [SIZE, SIZE_UNIT];
const heightWidthString = [HEIGHT, HEIGHT_UNIT, WIDTH, WIDTH_UNIT];

export const sizeKeys = commonStrings.concat(sizeStrings);
export const sizeMarginKeys = sizeKeys.concat([MARGIN]);
export const heightWidthKeys = commonStrings.concat(heightWidthString);
export const heightWidthRadiusKeys = heightWidthKeys.concat([
  RADIUS, RADIUS_UNIT, MARGIN
]);


/*
 * PropType object for different loaders
 */
const common = {
  [LOADING]: PropTypes.bool,
  [COLOR]: PropTypes.string,
  [CSS]: PropTypes.shape({
    name: PropTypes.string,
    styles: PropTypes.string
  })
};

const size = {
  [SIZE]: PropTypes.number,
  [SIZE_UNIT]: PropTypes.string
};

const heightWidth = {
  [WIDTH]: PropTypes.number,
  [WIDTH_UNIT]: PropTypes.string,
  [HEIGHT]: PropTypes.number,
  [HEIGHT_UNIT]: PropTypes.string
};

export const sizeProps = Object.assign({}, common, size);

export const sizeMarginProps = Object.assign({}, sizeProps, {
  [MARGIN]: PropTypes.string
});

export const heightWidthProps = Object.assign({}, common, heightWidth);

export const heightWidthRadiusProps = Object.assign({}, heightWidthProps, {
  [RADIUS]: PropTypes.number,
  [RADIUS_UNIT]: PropTypes.string,
  [MARGIN]: PropTypes.string
});


/*
 * DefaultProps object for different loaders
 */

const commonValues = {
  [LOADING]: true,
  [COLOR]: '#000000',
  [CSS]: {}
};

const heightWidthValues = (height, width) => ({
  [HEIGHT]: height,
  [HEIGHT_UNIT]: 'px',
  [WIDTH]: width,
  [WIDTH_UNIT]: 'px'
});

const sizeValues = sizeValue => ({
  [SIZE]: sizeValue,
  [SIZE_UNIT]: 'px'
});

export const sizeDefaults = sizeValue => {
  return Object.assign({}, commonValues, sizeValues(sizeValue));
};

export const sizeMarginDefaults = sizeValue => {
  return Object.assign({}, sizeDefaults(sizeValue), {
    [MARGIN]: '2px'
  });
};

export const heightWidthDefaults = (height, width) => {
  return Object.assign({}, commonValues, heightWidthValues(height, width));
};

export const heightWidthRadiusDefaults = (height, width, radius = 2) => {
  return Object.assign({}, heightWidthDefaults(height, width), {
    [RADIUS]: radius,
    [RADIUS_UNIT]: 'px',
    [MARGIN]: '2px'
  });
};
