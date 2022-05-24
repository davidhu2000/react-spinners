export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const argTypes = {
  color: { control: { type: "color" } },
  loading: { control: { type: "boolean" } },
  speedMultiplier: { control: { type: "number" } },
  css: { control: { type: "object" } },
};
