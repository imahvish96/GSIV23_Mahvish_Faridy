module.exports = {
    moduleNameMapper: {
      '\\.(css|less|scss)$': 'identity-obj-proxy',
      axios: 'axios/dist/node/axios.cjs',
    },
    testEnvironment: 'jsdom',
    testMatch: ['<rootDir>/src/**/*.test.js'],
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    collectCoverage: true,
    collectCoverageFrom: [
      'src/**/*.{js,jsx}', // Include JavaScript and JSX files
      '!src/**/*.test.{js,jsx}', // Exclude test files from coverage
      '!src/index.js', // Exclude entry point or other non-test files
      '!src/routespage/*'
    ],
    coverageReporters: ['lcov', 'text-summary'],
    transform: {
      '^.+\\.js$': 'babel-jest', // Transform .js files using Babel
    },
    transformIgnorePatterns: ['/node_modules/', '\\.module\\.css$'], // Exclude CSS module files from transformation
    modulePathIgnorePatterns: [
      "src/routespage",
      "src/router",
      "src/App.js",
      "src/index.js",
      "src/reportWebVitals.js",
      "src/layout.js",
      "src/setupTests.js"
    ]
  };
  