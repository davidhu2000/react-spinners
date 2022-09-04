import * as React from "react";
import { createRoot } from "react-dom/client";
import type { ColorResult } from "react-color";

import { Code, ColorPicker, LoaderItem } from "./components";
import * as Spinners from "../src";

const files: {
  [key: string]: {
    default: React.FC;
  };
} = {};

Object.keys(Spinners).forEach((key) => {
  files[key] = require(`../src/${key}.tsx`);
});

function SpinnerExamples() {
  const [color, setColor] = React.useState("#36D7B7");
  const [showPicker, setShowPicker] = React.useState(false);

  React.useEffect(() => {
    document.addEventListener("scroll", () => {
      const picker = document.getElementsByClassName("color-picker")[0] as HTMLElement;
      const top = 370 - window.scrollY * 2;

      picker.style.top = `${top > 80 ? top : 70}px`;
    });
  }, []);

  function updateColor(color: ColorResult) {
    setColor(color.hex);
    const header = document.getElementById("header") as HTMLElement;
    header.style.cssText = `
      background: -webkit-gradient(linear, left top, right top, from(${color.hex}), to(#2b303b));
      background: -webkit-linear-gradient(left, ${color.hex}, #2b303b);
      background: -o-linear-gradient(left, ${color.hex}, #2b303b);
      background: linear-gradient(90deg, ${color.hex}, #2b303b);
    `;
  }

  function togglePicker() {
    setShowPicker(!showPicker);
  }

  return (
    <div className="spinner-container">
      <div className="color-picker position-abs">
        {showPicker ? (
          <ColorPicker color={color} updateColor={updateColor} togglePicker={togglePicker} />
        ) : (
          <button onClick={togglePicker}>Change Color</button>
        )}
      </div>

      {Object.keys(Spinners).map((name: string) => (
        <LoaderItem key={`loader-${name}`} color={color} name={name} Spinner={files[name].default} />
      ))}
    </div>
  );
}

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  if (root) {
    const reactRoot = createRoot(root);
    reactRoot.render(<SpinnerExamples />);
  }

  const code = document.getElementById("code");

  if (code) {
    const reactCode = createRoot(code);
    reactCode.render(<Code />);
  }
});
