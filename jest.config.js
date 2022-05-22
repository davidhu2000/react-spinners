module.exports = {
  verbose: true,
  collectCoverage: true,
  coverageDirectory: "./coverage",
  moduleDirectories: ["node_modules"],
  testPathIgnorePatterns: [
    "<rootDir>/__tests__/config/*",
    "<rootDir>/__tests__/mock/*",
    "<rootDir>/__tests__/sharedSpecs/*",
  ],
  transform: {
    ".(ts|tsx|js|jsx)": "ts-jest",
  },
  roots: ["<rootDir>"],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(t|j)sx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  snapshotSerializers: ["@emotion/jest/serializer"],
  testEnvironment: "jsdom",
};
