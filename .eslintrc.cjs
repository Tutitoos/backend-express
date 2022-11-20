module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ["xo", "prettier"],
  overrides: [
    {
      extends: ["xo-typescript", "prettier"],
      files: ["*.ts", "*.tsx"],
      rules: {
        "no-unused-vars": ["error"],
        "@typescript-eslint/consistent-type-definitions": [
          "error",
          "interface",
        ],
        "@typescript-eslint/indent": "off",
        "@typescript-eslint/no-empty-function": "off",
        "no-implicit-coercion": "off",
      },
    },
    {
      files: ["./src/**/models/**/*.ts"],
      rules: {
        "@typescript-eslint/naming-convention": "off",
      },
    },
    {
      files: ["./src/**/routers/**/*.ts"],
      rules: {
        "new-cap": "off",
      },
    },
    {
      files: ["./src/mongodb/*.ts"],
      rules: {
        "@typescript-eslint/no-unsafe-return": "off",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {},
};
