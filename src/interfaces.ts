import { SerializedStyles } from "@emotion/core";

export interface LengthObject {
  value: number;
  unit: string;
}

interface CommonProps {
  color?: string;
  loading?: boolean;
  css?: string | SerializedStyles;
}

export type LengthType = number | string;

export interface LoaderHeightWidthProps extends CommonProps {
  height?: LengthType;
  width?: LengthType;
}

export interface LoaderSizeProps extends CommonProps {
  size?: LengthType;
}

export interface LoaderSizeMarginProps extends LoaderSizeProps {
  margin?: LengthType;
}

export interface LoaderHeightWidthRadiusProps extends LoaderHeightWidthProps {
  margin?: LengthType;
  radius?: LengthType;
}
