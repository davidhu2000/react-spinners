export interface PrecompiledCss {
  name: string;
  styles: string;
}

export interface LengthObject {
  value: number;
  unit: string;
}

export type StyleFunction = () => PrecompiledCss;

export type StyleFunctionWithIndex = (i: number) => PrecompiledCss;

export type CalcFunction<T> = () => T;

interface CommonProps {
  color?: string;
  loading?: boolean;
  css?: string | PrecompiledCss;
}

type LengthType = number | string;

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
