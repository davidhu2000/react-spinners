import React from "react";
import { DocsContainer } from "@storybook/addon-docs";
import { themes } from "@storybook/theming";
import { useDarkMode } from "storybook-dark-mode";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: "centered",
  docs: {
    container: (props) => {
      const isDark = useDarkMode();

      const { id: storyId, storyById } = props.context;
      const {
        parameters: { docs = {} },
      } = storyById(storyId);
      docs.theme = isDark ? themes.dark : themes.light;

      return React.createElement(DocsContainer, props);
    },
  },
};

export const argTypes = {
  color: {
    description: "Hex code of load colors",
    control: { type: "color" },
    defaultValue: "#36d7b7",
  },
  loading: {
    description: "controls whether loader is shown",
    control: { type: "boolean" },
  },
  speedMultiplier: {
    description: "controls the speed of animation. Higher number equals faster speed",
    control: { type: "number" },
  },
  cssOverride: {
    description: "override default styles. Needs to be camelCase keys",
    control: { type: "object" },
  },
};
