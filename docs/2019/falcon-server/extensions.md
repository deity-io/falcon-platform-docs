---
title: Extensions
---

Falcon-Server provides its own base GraphQL Schema, that defines data types, queries
and mutations, so every Extension could use its types and extend them.

Currently, DEITY provides the following list of officially supported extensions:

- [`@deity/falcon-shop-extension`](#shop-extension)
- [`@deity/falcon-blog-extension`](#blog-extension)

## Shop Extension

This extension provides basic features for a webshop implementation:

- Products
- Categories
- Customer area
- Checkout
- Cart etc.

To enable it in your Falcon-based application you have to provide an API that delivers resolvers for queries and mutations as this extension delegates execution of those to the API class that is responsible for communication with a 3rd party backend. For example see [Magento 2 API](/docs/2019/falcon-server/api-providers#falcon-magento-2-api) that provides a communication layer with the Magento 2 backend.

To add this extension to your Falcon-based app install it in the server directory:

<!--DOCUSAURUS_CODE_TABS-->
<!--npm-->

```bash
# installs shop extension
npm install --save @deity/falcon-shop-extension
```

<!--Yarn-->

```bash
# installs shop extension
yarn add @deity/falcon-shop-extension
```

<!--END_DOCUSAURUS_CODE_TABS-->

and add extension and api to the configuration of the server:

```js
{
  "extensions": {
    // enable shop extension by adding it to "extensions" object
    "shop": {
      "package": "@deity/falcon-shop-extension",
      "config": {
        "api": "api-foo" // must match an API Provider name set in "apis" object below
      }
    }
  },
  "apis": {
    "api-foo": { // must match "config.api" from shop-extension configuration
      "package": "my-custom-api-foo-package",
      "config": {
        "host": "example.com",
        "customParam": "value"
      }
    }
  }
}
```

## Blog Extension

This extension provides basic features for blog implementation:

- Posts
- _(coming soon)_

As an example of the API Provider that provides a communication layer for Blog Extension -
see [Wordpress API](/docs/2019/falcon-server/api-providers#falcon-wordpress-api).

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
