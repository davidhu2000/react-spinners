/* global document, window */
import * as React from "react";
import ReactDOM from "react-dom";
import { css } from "@emotion/core";
import { ColorResult } from "react-color";

import { Code, ColorPicker, LoaderItem } from "./components";
import * as Spinners from "../src";

interface ExampleState {
  color: string;
  showPicker: boolean;
}

class SpinnerExamples extends React.Component<{}, ExampleState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      color: "#36D7B7",
      showPicker: false
    };

    this.updateColor = this.updateColor.bind(this);
    this.togglePicker = this.togglePicker.bind(this);
  }

  public componentDidMount(): void {
    document.addEventListener("scroll", () => {
      let picker: HTMLElement = document.getElementsByClassName("color-picker")[0] as HTMLElement;
      let top: number = 370 - window.scrollY * 2;
      if (top > 60) {
        picker.style.top = `${top}px`;
      } else {
        picker.style.top = `50px`;
      }
    });
  }

  public updateColor(color: ColorResult): void {
    this.setState({ color: color.hex });
    document.getElementById("header").style.cssText = `
      background: -webkit-gradient(linear, left top, right top, from(${color.hex}), to(#2b303b));
      background: -webkit-linear-gradient(left, ${color.hex}, #2b303b);
      background: -o-linear-gradient(left, ${color.hex}, #2b303b);
      background: linear-gradient(90deg, ${color.hex}, #2b303b);
    `;
  }

  public togglePicker(): void {
    this.setState({ showPicker: !this.state.showPicker });
  }

  public renderSpinner(Spinner: React.ComponentType<any>): JSX.Element {
    return <Spinner color={this.state.color} />;
  }

  public render(): JSX.Element {
    let { color, showPicker } = this.state;

    return (
      <div className="spinner-container">
        <div className="color-picker position-abs">
          {showPicker ? (
            <ColorPicker
              color={color}
              updateColor={this.updateColor}
              togglePicker={this.togglePicker}
            />
          ) : (
            <button onClick={this.togglePicker}>Change Color</button>
          )}
        </div>

        {Object.keys(Spinners).map((name: string) => (
          <LoaderItem key={`loader-${name}`} color={color} name={name} spinner={Spinners[name]} />
        ))}
      </div>
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const root: HTMLElement = document.getElementById("root");
  ReactDOM.render(<SpinnerExamples />, root);

  const code: HTMLElement = document.getElementById("code");
  ReactDOM.render(<Code />, code);
});
