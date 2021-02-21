import { SerializedStyles } from '@emotion/react';

export interface LengthObject {
  value: number;
  unit: string;
}

export interface CommonProps {
  color?: string;
  loading?: boolean;
  css?: string | SerializedStyles;
  speedMultiplier?: number
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
