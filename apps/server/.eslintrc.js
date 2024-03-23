module.exports = {
  env: {
    browser: true,
    node: true,
    es2022: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: false,
    },
  },
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/ban-ts-ignore': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    'promise/no-promise-in-callback': 0,
    'no-useless-escape': 0,
    'no-async-promise-executor': 0,
    'no-prototype-builtins': 0,
  },
};
