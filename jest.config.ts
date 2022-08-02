import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  maxWorkers: `80%`,
  rootDir: `.`,
  runner: `jest-runner`,
  verbose: true,
  preset: `ts-jest`,
  globals: {
    'ts-jest': {
      tsconfig: `tsconfig.jest.json`,
    },
  },
  collectCoverage: false,
  collectCoverageFrom: [`./src/**/*.ts`],
  coveragePathIgnorePatterns: [`node_modules`, `<rootDir>/src/entities/*`],
  coverageThreshold: {
    global: {
      branches: 30,
      functions: 30,
      lines: 45,
      statements: 45,
    },
  },
  // setupFiles    - we can for code to run before each test with this
  // setupFilesEnv - I think this will run after every test
  globalSetup: `<rootDir>/tests/global-setup.ts`,
  globalTeardown: `<rootDir>/tests/global-teardown.ts`,
  moduleDirectories: [`node_modules`],
};

export default config;
