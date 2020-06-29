module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: ["airbnb-base", "plugin:@typescript-eslint/eslint-recommended"],
  rules: {
    "linebreak-style": 0,
    quotes: [2, "double", { avoidEscape: false }],
    "comma-dangle": 0,
    "import/no-unresolved": 0,
    "import/extensions": 0,
    "implicit-arrow-linebreak": 0,
    "prefer-destructuring": 0,
  },
};
