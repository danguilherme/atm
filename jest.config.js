module.exports = {
  verbose: true,
  testURL: "http://localhost/",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  testRegex: "spec\\.ts$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  globals: {
    "ts-jest": {
      tsConfigFile: "tsconfig.jest.json"
    }
  }
};
