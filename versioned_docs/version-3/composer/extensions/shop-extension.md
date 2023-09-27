---
id: shop-extension
title: Shop extension 
sidebar_label: Shop extension
enterprise_only: true
---

import CodePackage from '@site/src/components/CodePackage';
import Badge from '@site/src/components/Badge';

import { Card, CardContent } from '@site/src/components/Card';
import LogoImg from '/img/logo.svg';


<Badge variant="green">NEW V3 DOC</Badge><br/><br/>

<CodePackage name="@deity/falcon-shop-extension" /> 

This extension provides basic features for a webshop implementation:

- Products
- Categories
- Customer area
- Checkout
- Cart etc.

## Available integrations

<div className="flex">
  <Card to="/docs/integrations/magento2">
    <div className="round-icon">
      <img src="/docs/img/icons/adobe.svg" />
    </div>
    <h4>Adobe Commerce CE</h4>
    <p>The experience makes all the difference. Grow with Adobe Commerce CE.</p>
  </Card>
  <Card to="/docs/integrations/bigcommerce">
    <div className="round-icon">
      <img src="/docs/img/icons/bigcommerce.svg" />
    </div>
    <h4>Bigcommerce</h4>
    <p>
      Learn how BigCommerce powers your business with enterprise ecommerce capabilities—with lower cost and complexity.
    </p>
  </Card>
  <Card to="/docs/integrations/commercetools">
    <div className="round-icon">
      <img src="/docs/img/icons/commercetools.svg" />
    </div>
    <h4>Commercetools</h4>
    <p>Built for businesses that require unlimited flexibility and infinite scale at lower costs.</p>
  </Card>
</div>

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

and add extension and module (in this example it's [Magento2 module](/docs/integrations/magento2)) to the configuration of the server:

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
