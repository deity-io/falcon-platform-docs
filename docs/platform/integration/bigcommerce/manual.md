---
id: manual
title: Manual Configuration
sidebar_label: Manual Configuration
description: Step by step guide to configure your BigCommerce and Falcon integration.
---

## Getting Started

You might want to manually configure your BigCommerce Integration if you're an **Enterprise customer** and are running **Falcon Server Locally**.

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

Use your `server/config/local.json` or your `environment variables` (Deity Cloud) to add the sensitive data where needed.

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

### Deity Cloud Environment Variables

- `BIGCOMMERCE_HOST`
- `BIGCOMMERCE_ACCESS_TOKEN`
- `BIGCOMMERCE_CLIENT_ID`
- `BIGCOMMERCE_GQL_URL`
- `BIGCOMMERCE_GQL_TOKEN`
- `BIGCOMMERCE_FRONTENT_URL`
- `SEARCH_API_NAME`: If you want to use BigCommerce for search the value shoul be `bigcommerce`
