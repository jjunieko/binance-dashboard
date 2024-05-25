module.exports = {
    transform: {
      "^.+\\.tsx?$": "babel-jest",
      "^.+\\.jsx?$": "babel-jest"
    },
    moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
    testEnvironment: "jsdom",
    transformIgnorePatterns: [
      "/node_modules/(?!chartjs-adapter-date-fns)"
    ],
  };