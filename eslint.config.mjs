import typescriptEslint from "@typescript-eslint/eslint-plugin";
import unicorn from "eslint-plugin-unicorn";
import jestDom from "eslint-plugin-jest-dom";
import testingLibrary from "eslint-plugin-testing-library";
import tsParser from "@typescript-eslint/parser";

export default [
  { ignores: [".yarn/releases/*"] },
  {
    plugins: {
      "@typescript-eslint": typescriptEslint,
      unicorn,
      "jest-dom": jestDom,
      "testing-library": testingLibrary,
    },
    languageOptions: {
      parser: tsParser,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
