import * as React from "react";
import { Form } from "./Form";

interface ItemProps {
  color: string;
  name: string;
  spinner: React.ComponentClass<any>;
}

interface ItemState {
  [key: string]: number | string;
}

type UpdateFunction = (e: React.ChangeEvent<any>) => void;

class LoaderItem extends React.Component<ItemProps, ItemState> {
  constructor(props: ItemProps) {
    super(props);
    let { spinner } = props;
    let defaults: any = Object.assign({}, spinner.defaultProps);
    delete defaults.color;
    delete defaults.loading;
    delete defaults.css;

    this.state = {
      ...defaults
    };

    this.update = this.update.bind(this);
  }

  public update(field: string): UpdateFunction {
    return (e: React.ChangeEvent<any>): void => {
      let { value } = e.target;

      if (value && !/[^0-9]/.test(value)) {
        value = parseInt(value, 10);
      }

      this.setState({ [field]: value });
    };
  }

  public renderSpinner(Spinner: React.ComponentType<any>): JSX.Element {
    return <Spinner color={this.props.color} {...this.state} />;
  }

  public render(): JSX.Element {
    let { name, spinner } = this.props;

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

export { LoaderItem };
