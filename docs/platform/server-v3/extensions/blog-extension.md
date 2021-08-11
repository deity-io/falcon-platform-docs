---
id: blog-extension
title: Blog extension in Falcon Server
sidebar_label: Blog extension
enterprise_only: true
---

:::note Package name: `@deity/falcon-blog-extension`
:::


This extension provides basic features for blog implementation:

- Posts
- Pages
- Categories
- Authors

## Available integrations

List of modules (integrations) that can be used with this extension:
- [Contentful module](../modules/contentful-module)
- [WordPress module](../modules/wordpress-module)

## Usage

To add this extension to your Falcon-based app install it in the server directory:

<!--DOCUSAURUS_CODE_TABS-->

<!--npm-->

```bash
# installs blog extension
npm install --save @deity/falcon-blog-extension
```

<!--Yarn-->

```bash
# installs blog extension
yarn add @deity/falcon-blog-extension
```

<!--END_DOCUSAURUS_CODE_TABS-->

and add extension and module (in this example it's [WordPress module](../modules/wordpress-module)) to the configuration of the server:

```js
{
  "extensions": {
    // enable blog extension by adding it under "extensions"
    "blog": {
      "package": "@deity/falcon-blog-extension",
      "module": "foo-module", // must match an API Provider name set in "apis" object below
      "config": {
      }
    }
  },
  "modules": {
    "wordpress": { // must match "extension.module" from blog extension configuration
      "package": "@deity/falcon-wordpress-module",
      "config": {
        "host": "your-wordpress-host.com"
      }
    }
  }
}
```