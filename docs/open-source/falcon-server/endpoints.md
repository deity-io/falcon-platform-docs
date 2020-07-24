---
title: Endpoints
---

DEITY Falcon provides developers with a set of base classes and modules to work with endpoints on both Falcon-Client
and Falcon-Server applications.

First, you need to configure such endpoint entries. If you were configuring ApiDataSources and
Extensions in Falcon-Server previously - it won't be any different from that. Add the following configuration to
your [Falcon-Server config](/docs/open-source/miscellaneous/config):

```json
{
  //...
  "endpoints": {
    "magento": {
      "package": "@deity/falcon-magento2-api/src/endpoints",
      "config": {
        "protocol": "https",
        "host": "magento.deity.io"
      }
    }
  }
}
```

As you can tell, endpoint handlers will be loaded from the existing `@deity/falcon-magento2-api` package
using `src/endpoints.js` file to initialize the handlers.

The implementation part of such endpoint handlers may vary depending on your needs, but in case of `@deity/falcon-magento2-api` -
these endpoints are being proxied to the remote Magento instance, so by passing a `config` object to the endpoint module -
you're telling where you want to proxy these endpoint requests to.

### Endpoints on Falcon-Client

In order to proxy your endpoints to Falcon-Server from Falcon-Client app - you need to configure your `client/bootstrap.js` file:

```js
const config = require('config');
const { fetchRemoteConfig, configureProxy } = require('@deity/falcon-client/src/bootstrap/configureServer');

export default async () => {
  const redirects = {
    payment: {
      success: '/checkout/confirmation',
      failure: '/checkout/failure',
      cancel: '/cart'
    }
  };
  const serverUrl = config.graphqlUrl || config.apolloClient.httpLink.uri;
  const serverConfig = await fetchRemoteConfig(serverUrl);

  return {
    config: { ...config },
    // onServerCreated: server => { console.log('created'); },
    // onServerInitialized: server => { console.log('initialized'); },
    // onServerStarted: server => { console.log('started'); }
    onRouterCreated: async router => configureProxy(router, serverUrl, serverConfig.endpoints, redirects)
  };
};
```

Using `onRouterCreated` hook - Falcon-Client will get a bootstrap config from Falcon-Server (including a plain list
of route patterns to be proxied from Falcon-Client to Falcon-Server applications).

## EndpointContainer

`EndpointContainer` is a container module, which is being used by Falcon-Server to transform the provided configuration
into web-server routes and attach proper handlers. Every entry in `endpoints` section must represent a configuration
with a `package` value that points to a class extended from [`EndpointManager`](#endpointmanager).

### Proxy Endpoints

DEITY Falcon provides a generic proxy-endpoints helper to proxy all specified routes to the remote API server.
In order to use it - you need to configure your Falcon-Server application with the following configuration:

```json
{
  //...
  "endpoints": {
    "example": {
      "package": "@deity/falcon-server-env/dist/helpers/proxyEndpoints",
      "config": {
        "protocol": "https",
        "host": "example.com"
      },
      "entries": [
        "/my/route",
        "/my/another/route/id/*/"
      ]
    }
  }
}
```

`entries` should represent a list of routes (string patters) you want to proxy from Falcon-Client through Falcon-Server
to the remote API (`https://example.com` in our case). The requested route won't be changed, and all the incoming
headers and payload will be passed as well.

## EndpointManager

All endpoint modules should be extended from `EndpointManager` class:

```js
const { EndpointManager } = require('@deity/falcon-server-env');

module.exports = class MyEndpoints extends EndpointManager {}
```

### `fetch()`

If you're implementing your own Endpoints package - `EndpointManager` exposes `fetch` method which allows you
to perform any HTTP requests you need.

> `fetch` method is in fact an instance of [`node-fetch`](https://www.npmjs.com/package/node-fetch) package,
> please check its documentation for more details on how to use it.

### `getEntries()`

This method is being called by `EndpointContainer` when Falcon-Server initializes endpoints and passes them to
the web-server router.

`getEntries()` must return an array of `EndpointEntry` type objects with the following structure:

```js
{
  methods: "ALL", // or it can be a list of specific methods to handle: ['get', 'post']
  handler: ctx => {
    // request handler, `ctx` represents koa context object
  },
  path: '/my/route' // router pattern to handle
}
```
