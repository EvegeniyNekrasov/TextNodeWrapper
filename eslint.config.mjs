import globals from "globals";
import sonarjs from "eslint-plugin-sonarjs";

export default [
  {
    plugins: {
      sonarjs,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "error",
      semi: ["warn", "always"],
      "prefer-const": "error",
      "sonarjs/cognitive-complexity": "error",
      "sonarjs/no-identical-expressions": "error",
      "sonarjs/cognitive-complexity": "error",
      "sonarjs/cognitive-complexity": ["error", 15],
      "sonarjs/max-switch-cases": "error",
      "sonarjs/max-switch-cases": ["error", 10],
      "sonarjs/no-all-duplicated-branches": "error",
      "sonarjs/no-nested-switch": "error",
      "sonarjs/no-unused-collection": "error",
      "sonarjs/prefer-immediate-return": "error",
      "sonarjs/prefer-object-literal": "error",
      "sonarjs/prefer-single-boolean-return": "warn",
    },
  },
];
