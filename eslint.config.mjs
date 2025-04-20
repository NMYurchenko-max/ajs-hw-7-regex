import { defineConfig } from "eslint/config";
import globals from "globals";
import jest from "eslint-plugin-jest";
import js from "@eslint/js";


export default defineConfig([
    {
        files: ["**/*.{js,mjs,cjs}"]
    },
    {
        files: ["**/**/*.{js,mjs,cjs}"],
        languageOptions: {
            globals: { ...globals.browser, ...globals.node }
        }
    },
    {
        files: ["**/**/*.{js,mjs,cjs}"],
        plugins: { js },
        extends: ["js/recommended"],
        rules: {
            quotes: "off",
            "linebreak-style": "off",
            "object-curly-newline": ["error", { multiline: true, consistent: true }],
            "no-plusplus": "off",
            "no-console": "off",
            "no-debugger": "off",
            "no-mixed-operators": "off",
            "prettier/prettier": "off",
        }
    },
    {
        ignores: ["dist/*", "coverage/*"],
    },
    {
        files: ["**/*.test.js"],
        ...jest.configs["flat/recommended"],
        rules: {
            ...jest.configs["flat/recommended"].rules,
            "jest/prefer-expect-assertions": "off",
            "jest/expect-expect": "error",
        },
    },
]);
