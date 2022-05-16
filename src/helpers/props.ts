import { CSSProperties } from "react";

type LengthType = number | string;

interface CommonProps {
  color?: string;
  loading?: boolean;
  css?: CSSProperties;
  speedMultiplier?: number;
}

export interface LoaderHeightWidthProps extends CommonProps {
  height?: LengthType;
  width?: LengthType;
}
