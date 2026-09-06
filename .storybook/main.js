module.exports = {
  stories: ["../stories/*.stories.@(ts|tsx)"],

  addons: [
    "storybook-dark-mode",
    "./google-analytics-v4/register.js",
    "./canonical-link/register.js",
    "@storybook/addon-webpack5-compiler-swc",
  ],

  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  core: {
    disableTelemetry: true,
  },

  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
};
