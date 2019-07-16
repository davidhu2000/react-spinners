export interface PrecompiledCss {
  name: string;
  styles: string;
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
  heightUnit?: string;
  width?: number;
  widthUnit?: string;
}

export interface LoaderSizeProps extends CommonProps {
  size?: number;
  sizeUnit?: string;
}

export interface LoaderSizeMarginProps extends LoaderSizeProps {
  margin?: string;
}

export interface LoaderHeightWidthRadiusProps extends LoaderHeightWidthProps {
  margin?: string;
  radius?: number;
  radiusUnit?: string;
}
