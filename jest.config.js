module.exports = {
  moduleDirectories: [
    "node_modules",
    "app/javascript"
  ],

  rootDir: 'test/javascript',
  clearMocks: true,
  coverageDirectory: "test/results/coverage",
  testMatch: [
    "**/*.test.jsx",
  ],
}
