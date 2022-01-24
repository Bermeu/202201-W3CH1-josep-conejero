module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    rules: {
      "no-plusplus": "off",
      "no-restricted-syntax": "off",
      "no-debugger": "off",
      "no-console": "off",
      "import/extensions": "off",
    },
  },
  "lines-between-class-members": [
    "error",
    "always",
    { exceptAfterSingleLine: true },
  ],
};
