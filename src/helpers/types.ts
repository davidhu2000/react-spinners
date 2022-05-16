import { CSSProperties } from "react";

export type LengthType = number | string;

export interface CommonPropsNew {
  color?: string;
  loading?: boolean;
  css?: CSSProperties;
  speedMultiplier?: number;
}

export interface LoaderHeightWidthPropsNew extends CommonPropsNew {
  height?: LengthType;
  width?: LengthType;
}
