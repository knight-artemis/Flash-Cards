module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
//   extends: 'airbnb-base',
//   overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'react/prop-types': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/no-array-index-key': 0,
    'jsx-a11y/control-has-associated-label': 0,
    'jsx-a11y/anchor-has-content': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'linebreak-style': 0,
    strict: 0,
    'no-console': 0,
    quotes: ['error', 'single'],
    'global-require': 0,
    'import/no-dynamic-require': 0,
    'max-len': 0,
    'no-alert': 0,
  },
};
