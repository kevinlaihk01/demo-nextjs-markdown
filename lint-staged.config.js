module.exports = {
  '*.{json,md,yaml,yml}': ['prettier --write'],
  '**/*.{scss,css}': ['stylelint'],
  '**/*.{js,jsx,ts,tsx}': [
    'import-sort --write',
    'stylelint',
    'prettier --write',
    'eslint --fix',
  ],
  'yarn.lock': ['yarn-deduplicate'],
};
