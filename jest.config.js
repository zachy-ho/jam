const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './'
});

const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^~/pages/(.*)$': '<rootDir>/src/pages/$1',
    '^~/server/(.*)$': '<rootDir>/src/server/$1',
    '^~/prisma/(.*)$': '<rootDir>/prisma/$1',
  },
  testMatch: ['**/tests/**/*.tests.{ts,tsx}'],
};

module.exports = createJestConfig(customJestConfig);
