const esLint = require('./.eslint-config-falcon-2-7-23.json');

module.exports = Object.assign({}, esLint.rules['prettier/prettier'][1], {
  overrides: [
    {
      files: ['.eslintrc'],
      options: { parser: 'json' }
    }
  ]
});
