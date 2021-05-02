const withTM = require('next-transpile-modules')([
  // hast-util-from-parse5 and dependencies are using ESM
  'hast-util-from-parse5',
  'hastscript',
  'hast-util-parse-selector',
  'property-information',
  'space-separated-tokens',
  'comma-separated-tokens',
  'web-namespaces',
  'hast-util-select',
  'zwitch',
  'direction',
  'hast-util-is-element',
  'bcp-47-match',
  'hast-util-has-property',
  'hast-to-hyperscript',
]);

module.exports = (phase, { defaultConfig }) => {
  return withTM(defaultConfig);
};
