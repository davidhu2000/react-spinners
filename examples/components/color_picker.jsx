import React from 'react';
import PropTypes from 'prop-types';
import enhanceWithClickOutside from 'react-click-outside';
import { SketchPicker } from 'react-color';

class Picker extends React.Component {
  handleClickOutside() {
    this.props.togglePicker();
  }

  render() {
    let { color, updateColor } = this.props;
    return (
      <SketchPicker color={color} onChangeComplete={updateColor} />
    );
  }
}

Picker.propTypes = {
  color: PropTypes.string.isRequired,
  updateColor: PropTypes.func.isRequired,
  togglePicker: PropTypes.func.isRequired
};

export const ColorPicker = enhanceWithClickOutside(Picker);
