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

export interface LoaderHeightWidthProps extends CommonProps {
  height?: number;
  width?: number;
}

export interface LoaderSizeProps extends CommonProps {
  size?: number | string;
}

export interface LoaderSizeMarginProps extends LoaderSizeProps {
  margin?: string;
}

export interface LoaderHeightWidthRadiusProps extends LoaderHeightWidthProps {
  margin?: string;
  radius?: number;
}
