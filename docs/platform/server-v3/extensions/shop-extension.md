---
id: shop-extension
title: Shop extension in Falcon Server
sidebar_label: Shop extension
enterprise_only: true
---

:::note Package name: `@deity/falcon-shop-extension`
:::

This extension provides basic features for a webshop implementation:

- Products
- Categories
- Customer area
- Checkout
- Cart etc.

## Available integrations

- [BigCommerce module](../modules/bigcommerce-module)
- [CommerceTools module](../modules/commercetools-module)
- [Magento2 module](../modules/magento2-module)

## Usage

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

and add extension and module (in this example it's [Magento2 module](../modules/magento2-module)) to the configuration of the server:

```js
{
  "extensions": {
    // enable shop extension by adding it to "extensions" object
    "shop": {
      "package": "@deity/falcon-shop-extension",
      "module": "magento2" // must match an module name set in "modules" object below
    }
  },
  "modules": {
    "magento2": { // must match "config.module" from shop-extension configuration
      "package": "@deity/falcon-magento2-module",
      "config": {
        // magneto2 specific configuration goes here
      }
    }
  }
}
```
