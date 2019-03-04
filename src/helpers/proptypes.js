import PropTypes from 'prop-types';

const common = {
  loading: PropTypes.bool,
  color: PropTypes.string,
  css: PropTypes.shape({
    name: PropTypes.string,
    styles: PropTypes.string
  })
};

const commonValues = {
  loading: true,
  color: '#000000',
  css: {}
};

const size = {
  size: PropTypes.number,
  sizeUnit: PropTypes.string
};

const sizeValues = sizeValue => ({
  size: sizeValue,
  sizeUnit: 'px'
});

const heightWidth = {
  width: PropTypes.number,
  widthUnit: PropTypes.string,
  height: PropTypes.number,
  heightUnit: PropTypes.string
};

const heightWidthValues = (height, width) => ({
  height,
  heightUnit: 'px',
  width,
  widthUnit: 'px'
});

export const sizeProps = Object.assign({}, common, size);

export const sizeDefaults = sizeValue => {
  return Object.assign({}, commonValues, sizeValues(sizeValue));
};

export const sizeMarginProps = Object.assign({}, sizeProps, {
  margin: PropTypes.string
});

export const sizeMarginDefaults = sizeValue => {
  return Object.assign({}, sizeValues(sizeValue), {
    margin: '2px'
  });
};

export const heightWidthProps = Object.assign({}, common, heightWidth);

export const heightWidthDefaults = (height, width) => {
  return Object.assign({}, commonValues, heightWidthValues(height, width));
};

export const heightWidthRadiusProps = Object.assign({}, heightWidthProps, {
  radius: PropTypes.number,
  radiusUnit: PropTypes.string,
  margin: PropTypes.string
});

export const heightWidthRadiusValues = (height, width, radius = 2) => {
  return Object.assign({}, heightWidthDefaults(height, width), {
    radius,
    radiusUnit: 'px',
    margin: '2px'
  });
};
