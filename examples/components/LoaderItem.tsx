import * as React from "react";
import { LoaderHeightWidthRadiusProps, LoaderSizeMarginProps } from "../../src/helpers/props";

type TProps = LoaderSizeMarginProps & LoaderHeightWidthRadiusProps;

interface ItemProps {
  color: string;
  name: string;
  Spinner: React.ComponentType<TProps>;
}

function LoaderItem({ color, Spinner, name }: ItemProps) {
  return (
    <div className="spinner-item">
      <a href={`storybook?path=/docs/${name.toLowerCase()}--docs`} className="spinner-title">
        {name}
      </a>
      <Spinner color={color} />
    </div>
  );
}

export default LoaderItem;
