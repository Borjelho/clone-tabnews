import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import pluginJest from "eslint-plugin-jest";
export default defineConfig([
  {
    ignores: [".next/**"],
    files: ["**/*.{js,mjs,cjs},**/*.spec.js', '**/*.test.js"],
    plugins: { js, jest: pluginJest },
    extends: ["js/recommended"],
    languageOptions: {
      globals: globals.node,
      globals: pluginJest.environments.globals.globals,
    },
    rules: {
      "jest/no-disabled-tests": "warn",
      "jest/no-focused-tests": "error",
      "jest/no-identical-title": "error",
      "jest/prefer-to-have-length": "warn",
      "jest/valid-expect": "error",
    },
  },
]);
