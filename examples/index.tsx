/* global document, window */
import * as React from "react";
import ReactDOM from "react-dom";
import { ColorResult } from "react-color";

import { Code, ColorPicker, LoaderItem, SpeedMultiplierInput } from "./components";
import * as Spinners from "../src";
import { LoaderSizeMarginProps, LoaderHeightWidthRadiusProps } from "../src/interfaces";

const files: {
  [key: string]: {
    default: React.ComponentType<LoaderSizeMarginProps & LoaderHeightWidthRadiusProps>;
  };
} = {};

Object.keys(Spinners).forEach((key) => {
  files[key] = require(`../src/${key}.tsx`);
});

interface ExampleState {
  color: string;
  showPicker: boolean;
  speedMultiplier: number;
}

class SpinnerExamples extends React.Component<unknown, ExampleState> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      color: "#36D7B7",
      speedMultiplier: 1,
      showPicker: false
    };
  }

  public componentDidMount(): void {
    document.addEventListener("scroll", () => {
      const picker = document.getElementsByClassName("color-picker")[0] as HTMLElement;
      const top = 370 - window.scrollY * 2;
      if (top > 60) {
        picker.style.top = `${top}px`;
      } else {
        picker.style.top = `50px`;
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

  public updateMultiplier = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      speedMultiplier: parseFloat(e.target.value)
    });
  };

  public togglePicker = (): void => {
    this.setState({ showPicker: !this.state.showPicker });
  };

  public urlParams = () => {
    return new URLSearchParams(window.location.search);
  };

  public render(): JSX.Element {
    const { color, showPicker, speedMultiplier } = this.state;

    return (
      <div className="spinner-container">
        <div className="color-picker position-abs">
          <SpeedMultiplierInput value={this.state.speedMultiplier} update={this.updateMultiplier} />

          <br />
          {showPicker ? (
            <ColorPicker color={color} updateColor={this.updateColor} togglePicker={this.togglePicker} />
          ) : (
            <button onClick={this.togglePicker}>Change Color</button>
          )}
        </div>

        {Object.keys(Spinners).map((name: string) => (
          <LoaderItem
            key={`loader-${name}`}
            color={color}
            name={name}
            speedMultiplier={speedMultiplier}
            Spinner={files[name].default}
          />
        ))}
      </div>
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root") as HTMLElement;
  ReactDOM.render(<SpinnerExamples />, root);

  const code = document.getElementById("code") as HTMLElement;
  ReactDOM.render(<Code />, code);
});
