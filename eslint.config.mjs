import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-plugin-prettier";
import configPrettier from "eslint-config-prettier";
import { defineConfig } from "eslint/config";
import html from "eslint-plugin-html";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,html}"],
    plugins: { js, prettier, html },
    extends: ["js/recommended", configPrettier],
    rules: {
      "prettier/prettier": "error",
      semi: ["error", "always"],
      quotes: ["error", "double"],
    },
    languageOptions: { globals: globals.browser },
  },
]);
