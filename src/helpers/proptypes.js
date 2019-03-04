import PropTypes from 'prop-types';

// list of string constants to represent different props
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

const common = {
  [LOADING]: PropTypes.bool,
  [COLOR]: PropTypes.string,
  [CSS]: PropTypes.shape({
    name: PropTypes.string,
    styles: PropTypes.string
  })
};

const commonValues = {
  [LOADING]: true,
  [COLOR]: '#000000',
  [CSS]: {}
};

const commonStrings = [LOADING, COLOR, CSS];

const size = {
  [SIZE]: PropTypes.number,
  [SIZE_UNIT]: PropTypes.string
};

const sizeValues = sizeValue => ({
  [SIZE]: sizeValue,
  [SIZE_UNIT]: 'px'
});

const sizeStrings = [SIZE, SIZE_UNIT];

const heightWidth = {
  [WIDTH]: PropTypes.number,
  [WIDTH_UNIT]: PropTypes.string,
  [HEIGHT]: PropTypes.number,
  [HEIGHT_UNIT]: PropTypes.string
};

const heightWidthValues = (height, width) => ({
  [HEIGHT]: height,
  [HEIGHT_UNIT]: 'px',
  [WIDTH]: width,
  [WIDTH_UNIT]: 'px'
});

const heightWidthString = [HEIGHT, HEIGHT_UNIT, WIDTH, WIDTH_UNIT];

export const sizeProps = Object.assign({}, common, size);

export const sizeDefaults = sizeValue => {
  return Object.assign({}, commonValues, sizeValues(sizeValue));
};

export const sizeKeys = commonStrings.concat(sizeStrings);

export const sizeMarginProps = Object.assign({}, sizeProps, {
  [MARGIN]: PropTypes.string
});

export const sizeMarginDefaults = sizeValue => {
  return Object.assign({}, sizeValues(sizeValue), {
    [MARGIN]: '2px'
  });
};

export const sizeMarginKeys = sizeKeys.concat([MARGIN]);

export const heightWidthProps = Object.assign({}, common, heightWidth);

export const heightWidthDefaults = (height, width) => {
  return Object.assign({}, commonValues, heightWidthValues(height, width));
};

export const heightWidthKeys = commonStrings.contact(heightWidthString)

export const heightWidthRadiusProps = Object.assign({}, heightWidthProps, {
  [RADIUS]: PropTypes.number,
  [RADIUS_UNIT]: PropTypes.string,
  [MARGIN]: PropTypes.string
});

export const heightWidthRadiusValues = (height, width, radius = 2) => {
  return Object.assign({}, heightWidthDefaults(height, width), {
    [RADIUS]: radius,
    [RADIUS_UNIT]: 'px',
    [MARGIN]: '2px'
  });
};

export const heightWidthRadiusKeys = commonStrings.contact(heightWidthString).concat([
  RADIUS, RADIUS_UNIT, MARGIN
]);
