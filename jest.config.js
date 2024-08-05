const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  roots: ["<rootDir>"],
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
  },
  moduleNameMapper: {
    "/^components/(.*)$/": "<rootDir>/src/components/$1",
    "/^pages/(.*)$/": "<rootDir>/src/pages/$1",
    "/^api/(.*)$/": "<rootDir>/src/api/$1",
    "/^styles/(.*)$/": "<rootDir>/src/styles/$1",
    "/^public/(.*)$/": "<rootDir>/public/$1",
    "/^hooks/(.*)$/": "<rootDir>/src/hooks/$1",
    "/^store/(.*)$/": "<rootDir>/src/store/$1",
    "/^utils/(.*)$/": "<rootDir>/src/utils/$1",
    "/^interface/(.*)$/": "<rootDir>/src/interface/$1",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
};

module.exports = createJestConfig(customJestConfig);
