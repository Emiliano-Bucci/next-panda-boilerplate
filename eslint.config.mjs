import { fixupConfigRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import eslintPluginTypeScript from '@typescript-eslint/eslint-plugin';
import eslintPrettier from 'eslint-plugin-prettier';
import prettierConfigRecommended from 'eslint-plugin-prettier/recommended';
import unusedImports from 'eslint-plugin-unused-imports';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import ts from 'typescript-eslint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

const patchedConfig = fixupConfigRules([
  ...compat.extends('next/core-web-vitals'),
]);

const config = [
  ...patchedConfig,
  ...ts.configs.recommended,
  prettierConfigRecommended,
  {
    ignores: [
      '.next/*',
      'src/panda/**/*',
      'src/apollo/generated/**/*',
      'global.d.ts',
      'src/utils/icon-mapping.ts',
    ],
  },
  {
    plugins: {
      '@typescript-eslint': eslintPluginTypeScript,
      'unused-imports': unusedImports,
      prettier: eslintPrettier,
    },
    rules: {
      '@typescript-eslint/ban-ts-comment': 'off',
      'unused-imports/no-unused-imports': 'error',
      'react/display-name': 'off',
      'prettier/prettier': 'error', // Ensure Prettier rules are applied
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          vars: 'all',
          args: 'after-used',
          ignoreRestSiblings: true,
          varsIgnorePattern: '^_$',
        },
      ],
    },
  },
];

export default config;
