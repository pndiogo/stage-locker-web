// import js from '@eslint/js';
// import globals from 'globals';
// import reactHooks from 'eslint-plugin-react-hooks';
// import reactRefresh from 'eslint-plugin-react-refresh';
// import tseslint from 'typescript-eslint';
// import { defineConfig, globalIgnores } from 'eslint/config';

// export default defineConfig([
//   globalIgnores(['dist']),
//   {
//     files: ['**/*.{ts,tsx}'],
//     extends: [
//       js.configs.recommended,
//       tseslint.configs.recommended,
//       reactHooks.configs.flat.recommended,
//       reactRefresh.configs.vite
//     ],
//     languageOptions: {
//       ecmaVersion: 2020,
//       globals: globals.browser
//     },
//     rules: {
//       'react-refresh/only-export-components': 'off'
//     }
//   }
// ]);

import antfu from "@antfu/eslint-config";

export default antfu({
  type: "app",
  react: true,
  typescript: true,
  formatters: true,
  stylistic: {
    indent: 2,
    semi: true,
    quotes: "double",
  },
  ignores: ["src/components/ui/**", "src/routeTree.gen.ts"],
}, {
  rules: {
    "ts/consistent-type-definitions": ["error", "type"],
    "no-console": ["warn"],
    "antfu/no-top-level-await": ["off"],
    // "node/prefer-global/process": ["off"],
    // "node/no-process-env": ["error"],
    "perfectionist/sort-imports": ["error"],
    "react-refresh/only-export-components": "off",
  },
});
