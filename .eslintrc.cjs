module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended", // Должен быть последним!
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react", "@typescript-eslint", "unused-imports"],
  rules: {
    "react/react-in-jsx-scope": "off", // Не требуется в React 17+
    "react/jsx-uses-react": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "prettier/prettier": ["error", { endOfLine: "auto" }],
    "unused-imports/no-unused-imports": "error",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
