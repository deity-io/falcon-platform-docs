---
title: Extensions
---

Falcon-Server provides its own base GraphQL Schema, that defines data types, queries
and mutations, so every Extension could use its types and extend them.

Currently, DEITY provides the following list of officially supported extensions:

- [`@deity/falcon-shop-extension`](#shop-extension)
- [`@deity/falcon-blog-extension`](#blog-extension)

## Blog Extension

This extension provides basic features for blog implementation:

- Posts
- _(coming soon)_

As an example of the API Provider that provides a communication layer for Blog Extension -
see [Wordpress API](../falcon-server/api-providers#falcon-wordpress-api).

To add this extension to your Falcon-based app install it in the server directory:

with **yarn**:

```bash
# installs blog extension
yarn add @deity/falcon-blog-extension
```

or with **npm**:

```bash
# installs blog extension
npm install --save @deity/falcon-blog-extension
```

and add extension and api to the configuration of the server:

```js
{
  "extensions": {
    // enable blog extension by adding it to "extensions" object
    "blog": {
      "package": "@deity/falcon-blog-extension",
      "config": {
        "api": "api-foo" // must match an API Provider name set in "apis" object below
      }
    }
  },
  "apis": {
    "api-foo": { // must match "config.api" from blog-extension configuration
      "package": "my-custom-api-foo-package",
      "config": {
        "host": "example.com",
        "customParam": "value"
      }
    }
  }
}
```
