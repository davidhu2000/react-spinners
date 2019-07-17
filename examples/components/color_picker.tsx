import React from "react";
import enhanceWithClickOutside from "react-click-outside";
import { SketchPicker, ColorResult } from "react-color";

interface ColorPickerProps {
  togglePicker: () => void;
  color: string;
  updateColor: (color: ColorResult) => void;
}

class Picker extends React.Component<ColorPickerProps> {
  handleClickOutside() {
    this.props.togglePicker();
  }

  render() {
    let { color, updateColor } = this.props;
    return <SketchPicker color={color} onChangeComplete={updateColor} />;
  }
}

export const ColorPicker = enhanceWithClickOutside(Picker);
