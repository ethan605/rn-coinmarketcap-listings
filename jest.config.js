module.exports = {
  coverageDirectory: '<rootDir>/__tests__/coverage',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  modulePathIgnorePatterns: ['<rootDir>/__tests__/coverage'],
  preset: 'react-native',
  setupFiles: ['<rootDir>/__mocks__/globals.tsx'],
  testEnvironment: 'node',
};
