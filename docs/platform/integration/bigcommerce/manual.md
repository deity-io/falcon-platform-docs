---
id: manual
title: Manual Configuration
sidebar_label: Manual Configuration
description: Step by step guide to configure your BigCommerce and Falcon integration.
---

import CodePackage from '@site/src/components/CodePackage';

<CodePackage name="@deity/falcon-bigcommerce-module" /> 

## Getting Started

You might want to manually configure your BigCommerce Integration if you're an **Enterprise customer** and are running **DEITY Middleware Locally**.

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
  "modules": {
    ...
    "bigcommerce": {
      "package": "@deity/falcon-bigcommerce-module",
      "config": {
          "protocol": "https",
          "paymentHost": null,
          "host": null,
          "accessToken": null,
          "clientId": null,
          "gqlUrl": null,
          "gqlToken": null,
          "frontendUrl": "http://localhost:3000",
          "channelId": 1,
          "mailerComponent": "mailer",
          "paymentsComponent": "payments",
          "defaultLocale": "en_US",
          "url": "/bc/webhook",
          "webhookBaseUrl": null
      }
    }
  },
  "extensions": {
    ...
    "shop": {
      "package": "@deity/falcon-shop-extension",
      "module": "bigcommerce"
    }
    ...
  }
```

Use your `server/config/local.json` (for local development) or your `environment variables` (for production setup) to the sensitive data where needed.

```json
"modules": {
  "bigcommerce": {
    "config": {
      "clientId": "[CLIENT_ID]",
      "clientSecret": "[CLIENT_SECRET]",
      "host": "api.bigcommerce.com/stores/[STORE_HASH]",
      "accessToken": "[ACCESS_TOKEN]",
      "paymentHost": "payments.bigcommerce.com/stores/[STORE_HASH]/",
      "host": "api.bigcommerce.com/stores/[STORE_HASH]",
      "accessToken": "[ACCESS_TOKEN]",
      "gqlUrl": "[STORE_URL]/graphql",
      "gqlToken": "[GRAPHGL_TOKEN]"
    }
  }
}
```

### Environment Variables
 
The following environment variables are mapped directly to the configuration option so it's recommended to use these when setting up production deployment (and of course these can be used in development mode)

- `BIGCOMMERCE_HOST`
- `BIGCOMMERCE_ACCESS_TOKEN`
- `BIGCOMMERCE_CLIENT_ID`
- `BIGCOMMERCE_GQL_URL`
- `BIGCOMMERCE_GQL_TOKEN`
- `BIGCOMMERCE_FRONTEND_URL`
- `CHECKOUT_USE_EMBEDDED`: If you want to use the BigCommerce's embedded checkout.
