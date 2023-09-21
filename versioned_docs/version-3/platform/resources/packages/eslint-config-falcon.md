---
id: eslint-config-falcon
title: '@deity/eslint-config-falcon'
sidebar_label: '@deity/eslint-config-falcon'
---

<a href="https://eslint.org/" rel="noopener noreferrer" target="_blank">ESLint</a> is used for code formatting, this is our default config that will help keep your code clean and unified.

This package provides a handy set of default rules.

It's used in 2 files in both `server` and `client`.

- `client/.eslintrc` & `server/.eslintrc`
- `client/prettier.config.js` & `server/prettier.config.js`

**`.eslintrc`**
```js
{
  "extends": ["@deity/eslint-config-falcon"],
  "env": {
    "worker": true
  }
}
```

**`prettier.config.js`**
```js
const esLint = require('@deity/eslint-config-falcon');

module.exports = Object.assign({}, esLint.rules['prettier/prettier'][1], {
  overrides: [
    {
      files: ['.eslintrc'],
      options: { parser: 'json' }
    }
  ]
});
```
