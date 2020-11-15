---
title: Customizing Extension/API
---

> NOTE: this section describes how to customize `@deity/falcon-shop-extension` to return additional custom data but the explanation can be applied to any other extension that provides GraphQL schema.

By default `falcon-shop-extension` provides GraphQL types required by related Falcon packages. At some point you might want to change the data returned by some queries or mutations i.e. to add new fields not returned by default.

> NOTE: please read about [`extensions`](/docs/2019/falcon-server/extensions) and [`apis`](/docs/2019/falcon-server/api-providers) first to understand the purpose of extensions and APIs in Falcon's environment.

The way we recommend to do that is to create your own extension and your own API client:

- your extension should alter the GraphQL schema from the target extension (for example `falcon-shop-extension`)
- API client should modify data fetching logic to match changes introduced by your extension

Let's take a look at step by step example of how to achieve that.

## Code organization

Your own extension and API can be delivered into the final project in 2 ways:

1. as `npm` modules that will be installed with `npm` or `yarn` from npm registry

In this case, you keep the extension and API in separate repositories and publish those into npm registry. This is recommended when you want to reuse those between multiple projects.

2. as local modules that will be placed along the source code of your final project

In this case, you keep the code in the project's repository. This is recommended when you need to do some changes only for a particular project.

For either option you have to provide proper paths to the extension and API modules in config files for Falcon Server (by default placed in `server/config/default.json`)

Let's assume you'll call your extension `falcon-custom-shop` and your API `falcon-custom-magento-api`. For those two you'll have to modify the config file to contain the following code (notice the difference between "package" values for both versions):

<!--DOCUSAURUS_CODE_TABS-->
<!--Using npm registry for your modules-->

```json
{
  "extensions": {
    "falcon-custom-shop": {
      "package": "falcon-custom-shop",
      "config": {
        "api": "falcon-custom-magento-api",
        "..."
      }
    }
  },
  "apis": {
    "falcon-custom-magento-api": {
      "package": "falcon-custom-magento-api",
      "config": {
        "..."
      }
    }
  }
}
```

<!--Using local modules in project's folder-->

```json
{
  "extensions": {
    "falcon-custom-shop": {
      "package": "./src/falcon-custom-shop/index.js",
      "config": {
        "api": "falcon-custom-magento-api",
        "..."
      }
    }
  },
  "apis": {
    "falcon-custom-magento-api": {
      "package": "./src/falcon-custom-magento-api/index.js",
      "config": {
        "..."
      }
    }
  }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

> NOTE: of course "..." should be replaced with proper configuration for your extension and API classes

## Creating custom extension and API

> NOTE: To keep things simple we'll assume that both the extension and API are placed in the project's repository.

In most cases you'll want to modify the data returned by queries or mutations. In order to do so it's best to create a new class for extensions based on `Extension` class provided by [`@deity/falcon-server-env`](/docs/2019/falcon-server/falcon-server-env) package.

Let's assume you want to add `extensionAttributes` property to `Product` type. To do so you need to create a very simple class that extends type `Product` and adds this attribute (plus any extra types if required - like `type ExtensionAttribute` in this case).

```javascript
// file server/src/falcon-custom-shop/index.js

const { Extension } = require("@deity/falcon-server-env");

module.exports = class FalconCustomShop extends Extension {
  async getGraphQLConfig() {
    return super.getGraphQLConfig(`
      extend type Product {
        extensionAttributes: [ExtensionAttribute]
      }

      type ExtensionAttribute {
        name: String!
        value: String!
      }
    `);
  }
};
```

Once you have your extension ready you need to either:

1. Override existing resolver for Product if the data is available under the same endpoint and you just need to return it
2. Implement resolver for field if the data needs to be fetched from another endpoint.

### Simple way - using data from the same endpoint

First, let's consider the simpler solution from point 1. Currently resolver for whole product type has the following code:

```javascript
  async product(obj, { id }) {
    const productData = await this.get(`/products/${id}`, {}, { context: { useAdminToken: true } });
    const product = this.reduceProduct(productData);
    return product;
  }
```

So in order to provide new data you need to create an API class by extending existing class and overriding `product()` resolver (and adding helper methods, like `convertExtensionAttributes` in this case)

```javascript
// file server/src/falcon-magento-custom-api/index.js

const Magento2Api = require("@deity/falcon-magento2-api");

module.exports = class FalconCustomMagentoApi extends Magento2Api {
  async product(obj, params) {
    const product = await super.product(obj, params);

    // add extension attributes to the response
    product.extensionAttributes = this.convertExtensionAttributes(
      product.extensionAttributes
    );

    return product;
  }

  convertExtensionAttributes(magento2ExtensionAttributes) {
    const result = [];
    // process extension_attributes from magento and put these into result array

    return result;
  }
};
```

### Complex way - using data from different endpoint

In this case you have to add a resolver for your new property by using `addResolveFunctionsToSchema()` from [graphql-tools](https://github.com/apollographql/graphql-tools) package:

```javascript
// file server/src/falcon-magento-custom-api/index.js

const Magento2Api = require("@deity/falcon-magento2-api");
const { addResolveFunctionsToSchema } = require('graphql-tools');

module.exports = class FalconCustomMagentoApi extends Magento2Api {
  addTypeResolvers() {
    // make sure that all type resolvers from parent class are added
    super.addTypeResolvers();
    // add your own resolvers
    addResolveFunctionsToSchema({
      schema: this.gqlServerConfig.schema,
      resolvers: {
        Product: {
          extensionAttributes(...args) => this.fetchExtensionAttributes(...args)
        }
      }
    });
  }

  async fetchExtensionAttributes(obj) {
    // Thanks to GraphQL workflow and its nested type resolution - `obj` represents a "product" object
    // received by the prev resolver (`Magento2Api.product`)
    const { id } = obj;
    // fetch extension attributes for product with id
    const extensionAttributes = await this.get(`/path/to/extension/attributes/${id}`);
    return this.convertExtensionAttributes(extensionAttributes);
  }

  convertExtensionAttributes(magento2ExtensionAttributes) {
    const result = [];
    // process extension_attributes from magento and put these into result array

    return result;
  }
};
```

## Final configuration for falcon-custom-shop and falcon-custom-magento-api

Because we used different methods of creating the extension and API (extension has been created from the base `Extension` class, while API was created from Magento2Api class) we need to alter the configuration placed in `server/config/default.json` to make sure that everything loads correctly.

What's important is that because the extension class doesn't extend `falcon-shop-extension` you need to load both `falcon-shop-extension` and `falcon-custom-shop-extension` and both have to use `falcon-custom-magento-api` class to load the data. To do so we need to put the following content into config file:

```json
{
  "extensions": {
    "falcon-shop-extension": {
      "package": "@deity/falcon-shop-extension",
      "config": {
        "api": "falcon-custom-magento-api",
        "..."
      }
    },
    "falcon-custom-shop": {
      "package": "./src/falcon-custom-shop/index.js",
      "config": {
        "api": "falcon-custom-magento-api",
        "..."
      }
    }
  },
  "apis": {
    "falcon-custom-magento-api": {
      "package": "./src/falcon-custom-magento-api/index.js",
      "config": {
        "..."
      }
    }
  }
}
```
