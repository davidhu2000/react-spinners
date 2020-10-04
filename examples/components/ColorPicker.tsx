import * as React from "react";
import enhanceWithClickOutside from "react-click-outside";
import { SketchPicker, ColorResult } from "react-color";

interface ColorPickerProps {
  togglePicker: () => void;
  color: string;
  updateColor: (color: ColorResult) => void;
}

class Picker extends React.Component<ColorPickerProps> {
  public handleClickOutside(): void {
    this.props.togglePicker();
  }

  public render(): JSX.Element {
    const { color, updateColor } = this.props;

    return <SketchPicker color={color} onChangeComplete={updateColor} />;
  }
}

export default enhanceWithClickOutside(Picker);
