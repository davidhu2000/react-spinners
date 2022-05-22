module.exports = {
  verbose: true,
  collectCoverage: true,
  coverageDirectory: "./coverage",
  moduleDirectories: ["node_modules"],
  transform: {
    ".(ts|tsx|js|jsx)": "ts-jest",
  },
  roots: ["<rootDir>"],
  // testRegex: "(/__tests__/.*|(\\.|/)(tests|spec))\\.(t|j)sx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  snapshotSerializers: ["@emotion/jest/serializer"],
  testEnvironment: "jsdom",
};
