import * as React from "react";
import { LoaderSizeMarginProps, LoaderHeightWidthRadiusProps } from "../../src/interfaces";

type TProps = LoaderSizeMarginProps & LoaderHeightWidthRadiusProps;

interface ItemProps {
  color: string;
  name: string;
  Spinner: React.ComponentType<TProps>;
}

class LoaderItem extends React.Component<ItemProps> {
  public update = (field: string) => {
    return (e: React.ChangeEvent<HTMLInputElement>): void => {
      let value: number | string = e.target.value;

      if (value && !/[^0-9]/.test(value)) {
        value = parseInt(value, 10);
      }

      this.setState({ [field]: value });
    };
  };

  public render(): JSX.Element {
    const { name, Spinner } = this.props;

    return (
      <div className="spinner-item">
        <a href={`storybook/index.html?path=/docs/${name.toLowerCase()}--main`} className="spinner-title">
          {name}
        </a>
        <Spinner color={this.props.color} />
      </div>
    );
  }
}

export default LoaderItem;
