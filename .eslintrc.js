module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "@emotion", "unicorn", "jest-dom", "testing-library"],
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:react/recommended", "prettier"],
  settings: {
    react: {
      version: "detect",
    },
  },
};
