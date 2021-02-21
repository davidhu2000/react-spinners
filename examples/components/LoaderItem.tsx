import * as React from "react";
import Form from "./Form";
import { LoaderSizeMarginProps, LoaderHeightWidthRadiusProps } from "../../src/interfaces";

type TProps = LoaderSizeMarginProps & LoaderHeightWidthRadiusProps;

interface ItemProps {
  color: string;
  name: string;
  speedMultiplier: number;
  Spinner: React.ComponentType<TProps>;
}

interface ItemState {
  height?: number | string;
  width?: number | string;
  radius?: number | string;
  margin?: number | string;
  size?: number | string;
}

class LoaderItem extends React.Component<ItemProps, ItemState> {
  constructor(props: ItemProps) {
    super(props);
    const { Spinner } = props;
    const defaults: typeof Spinner.defaultProps = Object.assign({}, Spinner.defaultProps);
    delete defaults.color;
    delete defaults.loading;
    delete defaults.css;
    delete defaults.speedMultiplier;

    this.state = {
      ...defaults
    };
  }

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
        <div className="spinner-title">{name}</div>
        <Spinner
          color={this.props.color}
          speedMultiplier={this.props.speedMultiplier}
          {...this.state}
        />
        <Form inputs={this.state} update={this.update} />
      </div>
    );
  }
}

export default LoaderItem;
