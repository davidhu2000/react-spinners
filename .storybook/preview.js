export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: "centered",
};

export const argTypes = {
  color: { control: { type: "color" } },
  loading: { control: { type: "boolean" } },
  speedMultiplier: { control: { type: "number" } },
  cssOverride: { control: { type: "object" } },
};
