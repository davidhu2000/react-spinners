import * as React from "react";
import enhanceWithClickOutside from "react-click-outside";
import { HexAlphaColorPicker } from "react-colorful";

interface ColorPickerProps {
  togglePicker: () => void;
  color: string;
  updateColor: (color: string) => void;
}

class Picker extends React.Component<ColorPickerProps> {
  public handleClickOutside(): void {
    this.props.togglePicker();
  }

  public render(): JSX.Element {
    const { color, updateColor } = this.props;

    return <HexAlphaColorPicker color={color} onChange={updateColor} />;
  }
}

export default enhanceWithClickOutside(Picker);
