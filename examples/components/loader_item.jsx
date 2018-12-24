import React from 'react';
import PropTypes from 'prop-types';
import { Form } from './form';

class LoaderItem extends React.Component {
  constructor(props) {
    super(props);
    let { spinner } = props;
    let defaults = Object.assign({}, spinner.defaultProps);
    delete defaults.color;
    delete defaults.loading;
    delete defaults.sizeUnit;
    delete defaults.widthUnit;
    delete defaults.heightUnit;
    delete defaults.radiusUnit;
    delete defaults.loaderStyle;
    delete defaults.className;

    this.state = {
      ...defaults
    };

    this.update = this.update.bind(this);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  renderSpinner(Spinner) {
    return <Spinner color={this.props.color} {...this.state} />;
  }

  render() {
    let { name, spinner } = this.props;
    return (
      <div>
        <div className="spinner-item">
          <div className="spinner-title">{name}</div>
          { this.renderSpinner(spinner) }
          <Form inputs={this.state} update={this.update} />
        </div>
      </div>
    );
  }
}

LoaderItem.propTypes = {
  spinner: PropTypes.element.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};

export { LoaderItem };
