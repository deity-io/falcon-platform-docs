---
title: API Providers
---

Every Falcon Extension provides its own part of the GraphQL Schema and in addition, an Extension requires
to have an assigned [API Provider](../falcon-server/falcon-server-api#apidatasource) that is able
to communicate with the actual backend service. Every API Provider must implement all required
methods of a specific Extension and be compatible with Queries, Mutations and types that are required by this Extension.

Currently, DEITY provides the following list of officially supported API providers:

- [`@deity/falcon-magento2-api`](#falcon-magento-2-api)
- [`@deity/falcon-wordpress-api`](#falcon-wordpress-api)

## Falcon Magento 2 API

If you used `create-falcon-app` to generate your project, `falcon-magento2-api` and `falcon-shop-extension`
may already be installed in which case you can **skip the installation step.**

> This API requires [DEITY Falcon PHP Module](../backend/installing-magento2) for Magento2 to be installed on your Magento instance.

### Overview and installation

This API class realizes communication with your Magento 2 backend.
It provides resolvers for queries and mutations required by [Falcon Shop Extension](extensions#shop-extension).
To add this API to your Falcon-based app install it in the server directory:

<!--DOCUSAURUS_CODE_TABS-->
<!--npm-->

```bash
# Install Shop Extension and Magento2 API Provider
npm install --save @deity/falcon-shop-extension @deity/falcon-magento2-api
```

<!--Yarn-->

```bash
# Install Shop Extension and Magento2 API Provider
yarn add @deity/falcon-shop-extension @deity/falcon-magento2-api
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
        "api": "api-magento2" // must match an API Provider name set in "apis" object below
      }
    }
  },
  "apis": {
    // provide api that will be used by magneto
    "api-magento2": { // must match "config.api" from shop-extension configuration
      "package": "@deity/falcon-magento2-api",
      "config": {
        // your magento2 api configuration
        "protocol": "https",
        "host": "my-magento-domain.com",
        "username": "api-user",
        "password": "api-user-password"
      }
    }
  }
}
```

### Lifecycle of the GraphQL request

This is a short overview of the way how authentication between Falcon Magento 2 API and Magento 2 backend works.

Falcon Magento 2 API provides implementation for endpoints that require authorization (customer related data)
as well as endpoints that don't require a customer to be authenticated (product catalog etc).

Every incoming GraphQL request sets the context to the [DEITY Middleware](../falcon-server/basics) GraphQL resolver,
so all connected API providers would have access to it, including `headers` and `session` objects.

Once a user signs in with his Magento 2 credentials his access token is stored in the `session` so it can be used for interaction with Magento 2.
That way the API instance can fill in context with its own data that can be reused during query execution.

Falcon Magento 2 API gets the data from the `session` (which is available as `context.session`).
To separate this session data from other API Providers' session data - API Provider base class has a short-cut method
to get session data from a specific session key (named as "api.name" value), so within API Provider class you can
access your session data via `this.session`.

That way all the required data (like auth token, currency, storeToken) is available in `this.session` during query processing.

You can still access the whole session data via `context.session`.

## Falcon Wordpress API

TODO
