---
id: bigcommerce
title: BigCommerce Integration
sidebar_label: BigCommerce
---

---

<a href="https://www.bigcommerce.com/" rel="noreferrer noopener" target="_blank" aria-label="visit the BigCommerce site">
  <img src="/img/docs/platform/bigcommerce-logo.svg" alt="BigCommerce Logo" width="200"/>
</a>

---

:::note New features coming soon
We are actively developing our BigCommerce integration and will be adding support for more features.
:::

## Overview

Our BigCommerce integration provides everything you need to get your shop online. From product pages to the checkout.

The key packages involved in the integration are:

- `@deity/falcon-bigcommerce-api`
- `@deity/falcon-bigcommerce-endpoints`

These integrate with:

- `@deity/falcon-shop-extension`
- `@deity/falcon-shop-data`

`falcon-bigcommerce-api` uses both **REST API** and **GraphQL** endpoints for communicating with BigCommerce.

## Supported Features

**Navigation/Menu**

- Category tree from admin

**Product Types**
- Simple Products
- Configurable Products
- Gift Cards

**Product Page Features**
- Image Gallery
- Related Products (partial support)
- Recently Viewed Products (partial support)

**Pricing**
- Tax Calculation
- Tiered Pricing (partial support)
- Special / Sale prices

**Category/Product List**
- Sort Orders
- Add to cart
- Filtering (partial support)

**Search**
- Product search
- Search aggregations/facets
- Search sort order

**Customer Area**

- Login
- Register
- Customer information (view/edit)
- Address book (edit/add/remove)
- Change password
- Previous order grid

**Cart/Mini Cart**

- Add/remove/edit cart items
- Add/remove coupons

**Checkout**

- Guest Checkout
- Customer Checkout
- Shipping methods from admin
- Saved customer addresses

**SEO**

- Google Analytics
- Google Tag Manager
- Structured Data (Schema)
- Meta Data
- Canonicals (partial support)
- Site Maps (frontend specific)

***Multi-store/Language**

- Multi-currency (partial support)
- Multi-language (partial support)


## Getting Started

If you're using our example app, `demo-v2` most of the heavy lifting will be done for you and you'll only need to add a few configurations.

### 1. Create a BigCommerce Account

You can create an account and start your free trial [here](https://www.bigcommerce.com/essentials/free-trial/)

<img src="/img/docs/platform/bigcommerce-account-1.png" alt="BigCommerce Account" width="300" style={{marginBottom: 20}}/>

Once you've created an account, or if you already had one you'll need to create API keys. From within your dashboard visit **Advanced Settings -> API Accounts**.

<img src="/img/docs/platform/bigcommerce-account-2.png" alt="BigCommerce Account" width="180" style={{marginBottom: 20}}/>

You should then be able to create a **V2/V3 API Token**.

<img src="/img/docs/platform/bigcommerce-account-3.png" alt="BigCommerce Account" width="180" style={{marginBottom: 20}}/>

We recommend enabling **all permissions** for you API so you don't have to regenerate it at a later date.

<img src="/img/docs/platform/bigcommerce-account-4.png" alt="BigCommerce Account" width="140" style={{marginBottom: 20}}/>

You will then get a download with your API keys. Keep this safe as you won't be able to generate it again. We recommend storing this information in a secure password manager such as 1password.

You should get the following credentials:

- ACCESS TOKEN
- CLIENT ID
- CLIENT SECRET
- NAME
- API PATH

#### Your Store hash

From your `API Path` you will be able to get your `Store Hash`. 

If you `API Path` is https://api.bigcommerce.com/stores/abcdefg123/v3/ then your `Store Hash` is `abcdefg123`. You will need this later.

#### Your Store url

You'll also need your stores frontend URL. This is simply the URL you visit to see your store. It will look something like `https://test-store.mybigcommerce.com/`

#### GraphQl Token

Your GraphQl Token has to be generated. Luckily BigCommerce has a request runner in their docs that allow you to generate a token then and there.

- [BigCommerce Docs](https://developer.bigcommerce.com/api-docs/storefront/graphql/graphql-storefront-api-overview#authentication)
- [BigCommerce Request Runner](https://developer.bigcommerce.com/api-docs/getting-started/making-requests#making-requests)

#### GraphQl Url

This will be your store URL with `graphql` at the end. e.g. `https://test-store.mybigcommerce.com/graphql`.

### 2. Configure BigCommerce

The default configuration for BigCommerce looks like this:

**`server/config/default.json`**
```json
"endpoints": {
  "bigcommerce": {
    "package": "@deity/falcon-bigcommerce-endpoints",
    "config": {
      "protocol": "https",
      "host": null,
      "accessToken": null,
      "clientId": null,
      "clientSecret": null,
      "url": "/bc/webhook",
      "webhookBaseUrl": null
    }
  }
},
"apis": {
  "bigcommerce": {
    "package": "./src/falcon-custom-bc-api",
    "config": {
      "protocol": "https",
      "paymentHost": null,
      "host": null,
      "accessToken": null,
      "clientId": null,
      "clientSecret": null,
      "gqlUrl": null,
      "gqlToken": null,
      "frontendUrl": "http://localhost:3000",
      "mailerComponent": "mailer",
      "paymentsComponent": "payments"
    }
  }
}
```

Use your `server/config/local.xml` or your `environment variables` (Deity Cloud) to add the sensitive data where needed.

```json
"endpoints": {
  "bigcommerce": {
    "config": {
      "host": "api.bigcommerce.com/stores/[STORE_HASH]",
      "accessToken": "[ACCESS_TOKEN]",
      "clientId": "[CLIENT_ID]",
      "clientSecret": "[CLIENT_SECRET]"
    }
  }
},
"apis": {
  "bigcommerce": {
    "config": {
      "paymentHost": "payments.bigcommerce.com/stores/[STORE_HASH]/",
      "host": "api.bigcommerce.com/stores/[STORE_HASH]",
      "accessToken": "[ACCESS_TOKEN]",
      "clientId": "[CLIENT_ID]",
      "clientSecret": "[CLIENT_SECRET]",
      "gqlUrl": "[STORE_URL]/graphql",
      "gqlToken": "[GRAPHGL_TOKEN]"
    }
  }
}
```

## Important notes

The current BigCommerce REST API does not provide any endpoints to resolve frontend URLs, for this reason - the BigCommerce GraphQL API is used just to resolve frontend URLs. Once it gets the URL type, it's able to fetch the (category or product) data from the BigCommerce REST API.

The BigCommerce REST API does not support aggregations when navigating/filtering category products. In order to provide visitors with the best Search experience possible, it is recommended to use the falcon-algoliasearch module, which also allows fetching the products directly from the Algolia index (for this reason it's vital to configure Algolia and BigCommerce webhooks properly to ensure the correct data flow across backends because, Falcon-Server is the only middleware that connects them both).

In order to avoid the requirement for your server to be PCI compliant, it is recommended to use @deity-io/falcon-payments module which handles this requirement for you and provides payments on the client-side, so you only get a transaction ID to check/verify server side. Otherwise, you'll have to handle sensitive payment information and pass this data to BigCommerce.

## Useful Links

- [Our demo site](https://demo.deity.io/)
