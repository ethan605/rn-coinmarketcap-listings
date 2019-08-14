module.exports = {
  setupFiles: ['<rootDir>/__mocks__/globals.js'],
  coverageDirectory: '<rootDir>/__tests__/coverage',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  modulePathIgnorePatterns: ['<rootDir>/__tests__/coverage'],
  preset: 'react-native',
  testEnvironment: 'node',
};
