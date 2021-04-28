// TODO prettier
module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:unicorn/recommended",
    "plugin:prettier/recommended",
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  "plugins": [
    "react",
    "@typescript-eslint"
  ],
  "rules": {
    "react/prop-types": ["error", { skipUndeclared: true }],
    // https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#eslint
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    // unicorn
    "unicorn/prevent-abbreviations": "off",
  }
};
