module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
      experimentalObjectRestSpread: true,
    },
    allowImportExportEverywhere: true,
  },
  plugins: ['@typescript-eslint', 'import', 'compat'],
  extends: [
    'eslint:recommended',
    'plugin:@next/next/recommended',
    'plugin:compat/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:react-hooks/recommended',
    'plugin:testing-library/react',
    'plugin:prettier/recommended',
    'prettier',
  ],
  rules: {
    // `@typescript-eslint`
    // https://github.com/typescript-eslint/typescript-eslint
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': [
      2,
      {
        argsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-var-requires': 'off',
    // `eslint-plugin-import`
    // https://github.com/benmosher/eslint-plugin-import
    'import/order': [
      'error',
      {
        groups: ['external', 'internal'],
        'newlines-between': 'always-and-inside-groups',
        alphabetize: {
          order: 'asc',
        },
      },
    ],
    'sort-imports': [
      'warn',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
      },
    ],
  },
  overrides: [
    {
      files: '**/*.mdx/**',
      extends: ['plugin:mdx/recommended'],
      rules: {
        'import/no-anonymous-default-export': 'off',
        'react/display-name': 'off',
        'react/jsx-no-undef': 'off',
        'no-undef': 'off',
      },
      settings: {
        'mdx/code-blocks': true,
      },
    },
  ],
  ignorePatterns: [
    'CHANGELOG.md',
    'build',
    'dist',
    'node_modules',
    'typechain',
    'coverage',
    'generated.ts',
    'output.json',
    'results.json',
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
    react: {
      version: 'detect',
    },
    // Polyfills are provided by Babel/core-js
    polyfills: ['Promise', 'URL'],
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
};
