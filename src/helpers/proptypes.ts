import {
  LoaderHeightWidthProps,
  LoaderSizeProps,
  LoaderSizeMarginProps,
  LoaderHeightWidthRadiusProps,
  CommonProps
} from "../interfaces";

/*
 * DefaultProps object for different loaders
 */
const commonValues: Required<CommonProps> = {
  loading: true,
  color: "#000000",
  css: "",
  speedMultiplier: 1
};

export function sizeDefaults(sizeValue: number): Required<LoaderSizeProps> {
  return Object.assign({}, commonValues, { size: sizeValue });
}

export function sizeMarginDefaults(sizeValue: number): Required<LoaderSizeMarginProps> {
  return Object.assign({}, sizeDefaults(sizeValue), {
    margin: 2
  });
}

export function heightWidthDefaults(
  height: number,
  width: number
): Required<LoaderHeightWidthProps> {
  return Object.assign({}, commonValues, {
    height,
    width
  });
}

export function heightWidthRadiusDefaults(
  height: number,
  width: number,
  radius = 2
): Required<LoaderHeightWidthRadiusProps> {
  return Object.assign({}, heightWidthDefaults(height, width), {
    radius,
    margin: 2
  });
}
