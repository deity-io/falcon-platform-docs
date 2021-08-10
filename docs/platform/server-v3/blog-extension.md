---
id: blog-extension
title: Blog extension in Falcon Server
sidebar_label: Blog extension
enterprise_only: true
---

## Blog Extension

This extension provides basic features for blog implementation:

- Posts
- _(coming soon)_

As an example of the module that provides a communication layer for Blog Extension -
see [Wordpress API](/docs/2019/platform/falcon-server/api-providers#falcon-wordpress-api).

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

and add extension and module to the configuration of the server:

```js
{
  "extensions": {
    // enable blog extension by adding it to "extensions" object
    "blog": {
      "package": "@deity/falcon-blog-extension",
      "config": {
        "module": "module-foo" // must match an module name set in "modules" section below
      }
    }
  },
  "modules": {
    "module-foo": { // must match "config.module" from blog-extension configuration
      "package": "my-custom-module-foo",
      "config": {
        "host": "example.com",
        "customParam": "value"
      }
    }
  }
}
```
