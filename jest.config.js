module.exports = {
  globals: {
    // Variables de entorno
    "JWT_JWTSECRET":"test"
  },
  moduleNameMapper: {
    "smx-orm": "<rootDir>/app/test/mocks/orm.mock.js"
  },
  setupFiles: [
    "<rootDir>/app/test/mocks/env.mock.js"
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ["text", "text-summary", "json", ["lcov", {"projectRoot": "/"}]]
}
