module.exports = {
  verbose: true,
  collectCoverage: true,
  coverageDirectory: "./coverage",
  moduleDirectories: ["node_modules"],
  setupFiles: ["<rootDir>/__tests__/config/enzyme.ts"],
  testPathIgnorePatterns: ["<rootDir>/__tests__/config/*", "<rootDir>/__tests__/mock/*"],
  transform: {
    ".(ts|tsx|js|jsx)": "ts-jest"
  },
  roots: ["<rootDir>"],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(t|j)sx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  snapshotSerializers: ["enzyme-to-json/serializer", "jest-emotion"],
  setupFilesAfterEnv: ["<rootDir>/__tests__/config/enzyme.ts"]
};
