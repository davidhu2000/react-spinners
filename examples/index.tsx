import * as React from "react";
import { createRoot } from "react-dom/client";
import { ColorResult } from "react-color";

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

interface ExampleState {
  color: string;
  showPicker: boolean;
}

class SpinnerExamples extends React.Component<unknown, ExampleState> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      color: "#36D7B7",
      showPicker: false,
    };
  }

  public componentDidMount(): void {
    document.addEventListener("scroll", () => {
      const picker = document.getElementsByClassName("color-picker")[0] as HTMLElement;
      const top = 370 - window.scrollY * 2;
      if (top > 80) {
        picker.style.top = `${top}px`;
      } else {
        picker.style.top = "70px";
      }
    });
  }

  public updateColor = (color: ColorResult): void => {
    this.setState({ color: color.hex });
    const header = document.getElementById("header") as HTMLElement;
    header.style.cssText = `
      background: -webkit-gradient(linear, left top, right top, from(${color.hex}), to(#2b303b));
      background: -webkit-linear-gradient(left, ${color.hex}, #2b303b);
      background: -o-linear-gradient(left, ${color.hex}, #2b303b);
      background: linear-gradient(90deg, ${color.hex}, #2b303b);
    `;
  };

  public togglePicker = (): void => {
    this.setState({ showPicker: !this.state.showPicker });
  };

  public render(): JSX.Element {
    const { color, showPicker } = this.state;

    return (
      <div className="spinner-container">
        <div className="color-picker position-abs">
          {showPicker ? (
            <ColorPicker color={color} updateColor={this.updateColor} togglePicker={this.togglePicker} />
          ) : (
            <button onClick={this.togglePicker}>Change Color</button>
          )}
        </div>

        {Object.keys(Spinners).map((name: string) => (
          <LoaderItem key={`loader-${name}`} color={color} name={name} Spinner={files[name].default} />
        ))}
      </div>
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const root = createRoot(document.getElementById("root"));
  root.render(<SpinnerExamples />);

  const code = createRoot(document.getElementById("code"));
  code.render(<Code />);
});
