---
id: shop-extension
title: Shop extension in Falcon Server
sidebar_label: Shop extension
enterprise_only: true
---

## Shop Extension

This extension provides basic features for a webshop implementation:

- Products
- Categories
- Customer area
- Checkout
- Cart etc.

To enable it in your Falcon-based application you have to provide an module that delivers resolvers for queries and mutations as this extension delegates execution of those to the module that is responsible for communication with a 3rd party backend. For example see [Magento 2 Module](/docs/2019/platform/falcon-server/api-providers#falcon-magento-2-api) that provides a communication layer with the Magento 2 backend.

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

and add extension and module to the configuration of the server:

```js
{
  "extensions": {
    // enable shop extension by adding it to "extensions" object
    "shop": {
      "package": "@deity/falcon-shop-extension",
      "config": {
        "module": "module-foo" // must match an module name set in "modules" object below
      }
    }
  },
  "modules": {
    "module-foo": { // must match "config.module" from shop-extension configuration
      "package": "my-custom-module-foo",
      "config": {
        "host": "example.com",
        "customParam": "value"
      }
    }
  }
}
```
