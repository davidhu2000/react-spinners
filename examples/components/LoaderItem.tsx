import * as React from "react";
import Form from "./Form";

interface ItemProps {
  color: string;
  name: string;
  spinner: React.ComponentClass<ItemState>;
}

interface ItemState {
  [key: string]: number | string;
}

class LoaderItem extends React.Component<ItemProps, ItemState> {
  constructor(props: ItemProps) {
    super(props);
    const { spinner } = props;
    const defaults: typeof spinner.defaultProps = Object.assign({}, spinner.defaultProps);
    delete defaults.color;
    delete defaults.loading;
    delete defaults.css;

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

  public renderSpinner(Spinner: React.ComponentType<ItemState>): JSX.Element {
    return <Spinner color={this.props.color} {...this.state} />;
  }

  public render(): JSX.Element {
    const { name, spinner } = this.props;

    return (
      <div>
        <div className="spinner-item">
          <div className="spinner-title">{name}</div>
          {this.renderSpinner(spinner)}
          <Form inputs={this.state} update={this.update} />
        </div>
      </div>
    );
  }
}

export default LoaderItem;
