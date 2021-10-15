module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:jest/recommended",
    "plugin:jest-dom/recommended",
    "plugin:testing-library/dom",
    "prettier",
  ],
  plugins: ["jest", "jest-dom", "svelte3", "testing-library"],
  overrides: [{ files: ["*.svelte"], processor: "svelte3/svelte3" }],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2019,
  },
  env: {
    browser: true,
    es2017: true,
    node: true,
    "jest/globals": true,
  },
  rules: {
    "testing-library/prefer-user-event": "error",
  },
};
