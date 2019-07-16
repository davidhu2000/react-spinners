export interface PrecompiledCss {
  name: string;
  styles: string;
}

export type StyleFunction = (i?: number) => PrecompiledCss;

interface CommonProps {
  color?: string;
  loading?: boolean;
  css?: string | PrecompiledCss;
}

export interface BarLoaderProps extends CommonProps {
  height?: number;
  heightUnit?: string;
  width?: number;
  widthUnit?: string;
}

export interface BeatLoaderProps extends CommonProps {
  margin?: string;
  size?: number;
  sizeUnit?: string;
}
