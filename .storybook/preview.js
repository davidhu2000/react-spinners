export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: "centered",
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
export const tags = ["autodocs"];
