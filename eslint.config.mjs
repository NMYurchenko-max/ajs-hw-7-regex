import globals from "globals";
import pluginJs from "@eslint/js";
import jest from "eslint-plugin-jest";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        test: true,
        expect: true,
      },
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
  },
  pluginJs.configs.recommended,
  eslintPluginPrettierRecommended,
  {
    rules: {
      "linebreak-style": "off",
      quotes: "off",
      "object-curly-newline": ["error", { multiline: true, consistent: true }],
      "no-plusplus": "off",
      "no-console": "off",
      "no-debugger": "off",
      "no-mixed-operators": "off",
      "prettier/prettier": "off",
    },
  },
  {
    ignores: ["dist/*", "coverage/*"],
  },
  {
    files: ["**/*.test.js"],
    plugins: { jest },
    ...jest.configs["flat/recommended"],
    rules: {
      ...jest.configs["flat/recommended"].rules,
      "jest/prefer-expect-assertions": "off",
      "jest/expect-expect": "error",
      "jest/valid-title": "off",
    },
  },
];
