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
