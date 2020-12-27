import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import { matchers } from "jest-emotion";
expect.extend(matchers);

import HashLoader from "../src/HashLoader";
import { LoaderSizeProps } from "../src/interfaces";
import { sizeDefaults } from "../src/helpers";

describe("HashLoader", () => {
  let loader: ReactWrapper;
  let props: LoaderSizeProps;
  const defaultSize = 50;
  const defaultUnit = "px";

  it("should match snapshot", () => {
    loader = mount(<HashLoader />);
    expect(loader).toMatchSnapshot();
  });

  it("should contain default props if no props are passed", () => {
    props = loader.props();
    expect(props).toEqual(sizeDefaults(defaultSize));
  });

  it("should contain styles created using default props", () => {
    expect(loader).toHaveStyleRule("height", `${defaultSize}${defaultUnit}`);
    expect(loader).toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);

    for (let i = 0; i < 2; i++) {
      expect(loader.find("span span").at(0)).toHaveStyleRule(
        "height",
        `${defaultSize / 5}${defaultUnit}`
      );
      expect(loader.find("span span").at(0)).toHaveStyleRule(
        "width",
        `${defaultSize / 5}${defaultUnit}`
      );
      expect(loader.find("span span").at(0)).toHaveStyleRule(
        "border-radius",
        `${defaultSize / 10}${defaultUnit}`
      );
    }
  });

  it("should render null if loading prop is set as false", () => {
    loader = mount(<HashLoader loading={false} />);
    expect(loader.isEmptyRender()).toBe(true);
  });

  it("should render the correct size based on props", () => {
    const size = 20;

    loader = mount(<HashLoader size={size} />);
    expect(loader).not.toHaveStyleRule("height", `${defaultSize}${defaultUnit}`);
    expect(loader).not.toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);
    expect(loader).toHaveStyleRule("height", `${size}${defaultUnit}`);
    expect(loader).toHaveStyleRule("width", `${size}${defaultUnit}`);

    for (let i = 0; i < 2; i++) {
      expect(loader.find("span span").at(i)).not.toHaveStyleRule(
        "height",
        `${defaultSize / 5}${defaultUnit}`
      );
      expect(loader.find("span span").at(i)).not.toHaveStyleRule(
        "width",
        `${defaultSize / 5}${defaultUnit}`
      );
      expect(loader.find("span span").at(i)).not.toHaveStyleRule(
        "border-radius",
        `${defaultSize / 10}${defaultUnit}`
      );

      expect(loader.find("span span").at(i)).toHaveStyleRule("height", `${size / 5}${defaultUnit}`);
      expect(loader.find("span span").at(i)).toHaveStyleRule("width", `${size / 5}${defaultUnit}`);
      expect(loader.find("span span").at(i)).toHaveStyleRule(
        "border-radius",
        `${size / 10}${defaultUnit}`
      );
    }
  });

  describe("size props", () => {
    it("should render the size with px unit when size is a number", () => {
      const size = 18;

      loader = mount(<HashLoader size={size} />);
      expect(loader).not.toHaveStyleRule("height", `${defaultSize}${defaultUnit}`);
      expect(loader).not.toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);
      expect(loader).toHaveStyleRule("height", `${size}${defaultUnit}`);
      expect(loader).toHaveStyleRule("width", `${size}${defaultUnit}`);

      for (let i = 0; i < 2; i++) {
        expect(loader.find("span span").at(i)).not.toHaveStyleRule(
          "height",
          `${defaultSize / 5}${defaultUnit}`
        );
        expect(loader.find("span span").at(i)).not.toHaveStyleRule(
          "width",
          `${defaultSize / 5}${defaultUnit}`
        );
        expect(loader.find("span span").at(i)).not.toHaveStyleRule(
          "border-radius",
          `${defaultSize / 10}${defaultUnit}`
        );

        expect(loader.find("span span").at(i)).toHaveStyleRule("height", `${size / 5}${defaultUnit}`);
        expect(loader.find("span span").at(i)).toHaveStyleRule("width", `${size / 5}${defaultUnit}`);
        expect(loader.find("span span").at(i)).toHaveStyleRule(
          "border-radius",
          `${size / 10}${defaultUnit}`
        );
      }
    });

    it("should render the size as is when size is a string with valid css unit", () => {
      const length = 18;
      const unit = "px";
      const size = `${length}${unit}`;

      loader = mount(<HashLoader size={size} />);
      expect(loader).not.toHaveStyleRule("height", `${defaultSize}${defaultUnit}`);
      expect(loader).not.toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);
      expect(loader).toHaveStyleRule("height", `${size}`);
      expect(loader).toHaveStyleRule("width", `${size}`);

      for (let i = 0; i < 2; i++) {
        expect(loader.find("span span").at(i)).not.toHaveStyleRule(
          "height",
          `${defaultSize / 5}${defaultUnit}`
        );
        expect(loader.find("span span").at(i)).not.toHaveStyleRule(
          "width",
          `${defaultSize / 5}${defaultUnit}`
        );
        expect(loader.find("span span").at(i)).not.toHaveStyleRule(
          "border-radius",
          `${defaultSize / 10}${defaultUnit}`
        );

        expect(loader.find("span span").at(i)).toHaveStyleRule("height", `${length / 5}${unit}`);
        expect(loader.find("span span").at(i)).toHaveStyleRule("width", `${length / 5}${unit}`);
        expect(loader.find("span span").at(i)).toHaveStyleRule(
          "border-radius",
          `${length / 10}${unit}`
        );
      }
    });

    it("should render the size with default unit of px when the unit is incorrect", () => {
      const length = 18;
      const unit = "ad";
      const size = `${length}${unit}`;

      loader = mount(<HashLoader size={size} />);
      expect(loader).not.toHaveStyleRule("height", `${defaultSize}${defaultUnit}`);
      expect(loader).not.toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);
      expect(loader).toHaveStyleRule("height", `${length}${defaultUnit}`);
      expect(loader).toHaveStyleRule("width", `${length}${defaultUnit}`);

      for (let i = 0; i < 2; i++) {
        expect(loader.find("span span").at(i)).not.toHaveStyleRule(
          "height",
          `${defaultSize / 5}${defaultUnit}`
        );
        expect(loader.find("span span").at(i)).not.toHaveStyleRule(
          "width",
          `${defaultSize / 5}${defaultUnit}`
        );
        expect(loader.find("span span").at(i)).not.toHaveStyleRule(
          "border-radius",
          `${defaultSize / 10}${defaultUnit}`
        );

        expect(loader.find("span span").at(i)).toHaveStyleRule(
          "height",
          `${length / 5}${defaultUnit}`
        );
        expect(loader.find("span span").at(i)).toHaveStyleRule(
          "width",
          `${length / 5}${defaultUnit}`
        );
        expect(loader.find("span span").at(i)).toHaveStyleRule(
          "border-radius",
          `${length / 10}${defaultUnit}`
        );
      }
    });
  });

  it("should render the css override based on props", () => {
    loader = mount(
      <HashLoader css={"position: absolute; width: 100px; height: 200px; color: blue;"} />
    );
    expect(loader).not.toHaveStyleRule("position", "relative");
    expect(loader).not.toHaveStyleRule("width", `${defaultSize}${defaultUnit}`);
    expect(loader).not.toHaveStyleRule("height", `${defaultSize}${defaultUnit}`);
    expect(loader).toHaveStyleRule("position", "absolute");
    expect(loader).toHaveStyleRule("width", "100px");
    expect(loader).toHaveStyleRule("height", "200px");
    expect(loader).toHaveStyleRule("color", "blue");
  });
});
