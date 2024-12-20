import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import globals from "globals";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  {
    rules: {
      "no-unused-vars": "off",
      "no-undef": "error",
      "prefer-const": "error",
      "no-console": "warn",
      "@typescript-eslint/no-unused-expressions": "off",
    },
  },
  {
    ignores: [
      "node_modules/*", // ignore its content
      "dist/*",
    ],
  }
);
