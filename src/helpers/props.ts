import { CSSProperties, DetailedHTMLProps, HTMLAttributes } from "react";

type LengthType = number | string;

interface CommonProps extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  color?: string;
  loading?: boolean;
  css?: CSSProperties;
  speedMultiplier?: number;
}

export interface LoaderHeightWidthProps extends CommonProps {
  height?: LengthType;
  width?: LengthType;
}

export interface LoaderSizeProps extends CommonProps {
  size?: LengthType;
}

export interface LoaderSizeMarginProps extends CommonProps {
  size?: LengthType;
  margin?: LengthType;
}

export interface LoaderHeightWidthRadiusProps extends CommonProps {
  height?: LengthType;
  width?: LengthType;
  radius?: LengthType;
  margin?: LengthType;
}
