/* eslint-disable */
module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:unicorn/recommended',
    'plugin:prettier/recommended',
    'plugin:ramda/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
    react: {
      version: 'detect',
    },
  },
  plugins: ['react', '@typescript-eslint', 'ramda'],
  rules: {
    'react/prop-types': ['error', { skipUndeclared: true }],
    // https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#eslint
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    // unicorn
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/no-null': 'off',
    // import
    'import/no-named-as-default-member': 'off',
  },
  overrides: [
    {
      files: [
        'commitlint.config.js',
        'stylelint.config.js',
        'lint-staged.config.js',
        'importsort.config.js',
        'importSortPrefix.config.js',
        'babel.config.js',
        'next.config.js',
      ],
      rules: {
        'unicorn/prefer-module': 'off',
        'unicorn/filename-case': 'off',
      },
    },
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
};
