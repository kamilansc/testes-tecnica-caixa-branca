import tsParser from "@typescript-eslint/parser";

export default [
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tsParser
    },
    rules: {
      complexity: ["error", { max: 2 }]
    }
  }
];