import * as React from "react";
import { HexAlphaColorPicker } from "react-colorful";

interface ColorPickerProps {
  togglePicker: () => void;
  color: string;
  updateColor: (color: string) => void;
}

function Picker({ togglePicker, color, updateColor }: ColorPickerProps) {
  return (
    <div>
      <HexAlphaColorPicker color={color} onChange={updateColor} />
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "100vh",
          width: "100vw",
          zIndex: -1,
        }}
        onClick={togglePicker}
      ></div>
    </div>
  );
}

export default Picker;
