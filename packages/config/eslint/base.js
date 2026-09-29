import tseslint from "typescript-eslint";

export default tseslint.config({
  extends: [],
  ignores: ["dist/**", ".next/**", "node_modules/**"],
  rules: {},
});
