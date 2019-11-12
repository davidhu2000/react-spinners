import {
  LoaderHeightWidthProps,
  LoaderSizeProps,
  PrecompiledCss,
  LoaderSizeMarginProps,
  LoaderHeightWidthRadiusProps
} from "../interfaces";

/*
 * DefaultProps object for different loaders
 */

interface CommonDefaults {
  loading: boolean;
  color: string;
  css: string | PrecompiledCss;
}

const commonValues: CommonDefaults = {
  loading: true,
  color: "#000000",
  css: ""
};

export function sizeDefaults(sizeValue: number): Required<LoaderSizeProps> {
  return Object.assign({}, commonValues, { size: sizeValue });
}

export function sizeMarginDefaults(sizeValue: number): Required<LoaderSizeMarginProps> {
  return Object.assign({}, sizeDefaults(sizeValue), {
    margin: "2px"
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
  radius: number = 2
): Required<LoaderHeightWidthRadiusProps> {
  return Object.assign({}, heightWidthDefaults(height, width), {
    radius,
    margin: "2px"
  });
}
