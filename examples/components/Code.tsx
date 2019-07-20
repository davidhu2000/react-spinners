import * as React from "react";

interface CodeState {
  text: string[];
  index: number;
}

class Code extends React.Component<{}, CodeState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      text: ["yarn add react-spinners", "npm install react-spinners --save"],
      index: 0
    };
  }

  public componentDidMount(): void {
    let el: HTMLElement = document.getElementById("code");
    el.addEventListener("click", () => {
      this.setState({
        index: +!this.state.index
      });
    });
  }

  public render(): JSX.Element {
    return <span>{this.state.text[this.state.index]}</span>;
  }
}

export { Code };
