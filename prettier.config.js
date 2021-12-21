const esLint = require('@deity/eslint-config-falcon');

module.exports = Object.assign({}, esLint.rules['prettier/prettier'][1], {
  overrides: [
    {
      files: ['.eslintrc'],
      options: { parser: 'json' }
    }
  ]
});
