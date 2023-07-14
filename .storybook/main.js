module.exports = {
  stories: ["../stories/*.stories.@(ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    // "@storybook/addon-google-analytics",
    "storybook-dark-mode",
    "./google-analytics-v4/register.js",
    "./google-adsense/register.js",
    "./canonical-link/register.js",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
    disableTelemetry: true,
  },
};
