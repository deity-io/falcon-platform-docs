---
title: Basics
---

DEITY Middleware is the entrypoint for backend features of the Falcon stack. It acts as API server for DEITY PWA Frontend -
provides data and features required by DEITY PWA Frontend. It can also act as standalone API server for other services.

DEITY Middleware is implemented with [Koa](https://koajs.com/) and [Apollo Server](https://www.apollographql.com/docs/apollo-server/).

DEITY Middleware is just a "glue" that provides all the functionalities via [extensions](#extensions-system).

## Installation

<!--DOCUSAURUS_CODE_TABS-->
<!--npm-->

```bash
npm install @deity/falcon-server
```

<!--Yarn-->

```bash
yarn add @deity/falcon-server
```

<!--END_DOCUSAURUS_CODE_TABS-->

## Usage

```js
const FalconServer = require('@deity/falcon-server');
const config = {
  port: 4000
};
const server = new FalconServer(config);
server.start();
```

## Configuration

Config `object`:

* `port: number` - port number that server should be running on (default is set to `4000`)
* `apis: object` - a map of APIs configuration (see [APIs configuration](#apis-configuration))
* `extensions: object` - a map of extensions configuration (see [extensions configuration](#extensions-configuration))
* `endpoints: object` - a map of endpoints configurations (see [endpoints configuration](#endpoints-configuration))
* `session: object` - session configuration (see [session configuration](#session-configuration))
* `cache: object` - cache configuration (see [caching section](../falcon-server/caching#cache-adapters))
* `maxListeners: number` (`20` by default) - number of max listeners per event
* `verboseEvents: boolean` (`false` by default) - toggling "Logger.debug" call for tracing all event handlers (`Logger.debug('Triggering "${event}" event...')`)
* `logLevel: string` (`info` by default) - Logger level (one of: `info`, `error`, `debug`)
* `debug: boolean` (`false` by default) - whether DEITY Middleware should start in "debug" mode (enabling "development" mode flags)
  * toggles `/graphql` interactive [playground](https://github.com/prisma/graphql-playground)
  * toggles `tracing` flag for Apollo Server ([apollo-tracing](https://github.com/apollographql/apollo-server/tree/master/packages/apollo-tracing))

### APIs configuration

`apis` object provides a map of APIs that should be used along with options that should be passed to those APIs.
You should be careful with the key value, which is being used as your API Provider ID.

```js
const FalconServer = require('@deity/falcon-server');
const config = {
  "apis": {
    "api-wordpress": {
      "package": "@deity/falcon-wordpress-api",
      "config": {
        "host": "mywordpress.com",
        "protocol": "https",
      }
    }
  }
};
const server = new FalconServer(config);
server.start();
```

> Read more on how to write your own API Provider [here](../falcon-server/falcon-server-api#apidatasource)

### Extensions configuration

Config object can contain an `extensions` object that provides a map of extensions that should be used along with options
that should be passed to those extensions. Extensions should be added by specifying the package name of the extension
and the `config` object that is passed to the extension constructor:

```js
const FalconServer = require('@deity/falcon-server');
const config = {
  "extensions": {
    "blog": {
      "package": "@deity/falcon-blog-extension",
      "config": {}
    }
  }
};
const server = new FalconServer(config);
server.start();
```

If the extension requires an API to work correctly, then the API can be either implemented inside the extension,
but it can also be implemented as a separate package. After which the API can be added via [`apis`](#apis-configuration) and be used by the extension.

This is especially handy when the extension adds functionalities that use data from 3rd party services -
e.g. a blog extension can use Wordpress for content fetching, but also any other service that can deliver data in the format accepted by that same extension.

```js
const FalconServer = require('@deity/falcon-server');
const config = {
  "apis": {
    "api-wordpress": { // set name for that extension
      "package": "@deity/falcon-wordpress-api",
      "config": {
        // options for this api instance
      }
    }
  },
  "extensions": {
    "blog": {
      "package": "@deity/falcon-blog-extension",
      "config": {
        "api": "api-wordpress" // use API named "api-wordpress"
      }
    }
  }
};
const server = new FalconServer(config);
server.start();
```

> Read more on how to write your own Extension [here](../falcon-server/falcon-server-api#extension)

### Endpoints configurations

`endpoints` object provides a map of Endpoint modules that should be used for any external communication
(for example, callbacks from Payment gateways).

```js
const FalconServer = require('@deity/falcon-server');
const config = {
  "endpoints": {
    "magento": {
      "package": "@deity/falcon-magento2-api/src/endpoints",
      "config": {}
    }
  }
};
const server = new FalconServer(config);
server.start();
```

> Read more on how to write your own Endpoint [here](../falcon-server/falcon-server-api#extension)

### Session configuration

DEITY Middleware uses [koa-session](https://www.npmjs.com/package/koa-session) for session implementation, so all the options passed in `session.options` will be passed directly to `koa-session`. Additionally you can provide `session.keys` array with keys used by `koa` instance:

```js
const FalconServer = require('@deity/falcon-server');
const config = {
  "session": {
    "keys": ["some secret key"], // this value will be set as "keys" property of koa instance
    "options": { // all options allowed by koa-session
      "maxAge": 86400000
    }
  }
};
const server = new FalconServer(config);
server.start()
```

## Extensions system

The essence of DEITY Middleware is realization of the access to the external services via GraphQL. That objective is achieved via simple extensions system. Extensions are JavaScript classes that implement particuar methods to deliver the data or modify existing data.

Each extension can extend GraphQL configuration by providing its own config. When all extensions are instantiated FalconServer asks each and every extension for the configuration, combines all the received configurations and passes the combined configuration to Apollo Server configuration.

During startup DEITY Middleware calls method `getGraphQLConfig()` method that should return configuration object that provides configuration for the Apollo Server. The following options are implemented:
 * `typeDefs: object` - gql expression with type definitions - helpful especially when extension needs to extend a type defined by other extension
 * `schema: object` - GrahQL schema generated by [makeExecutableSchema()](https://www.apollographql.com/docs/graphql-tools/schema-stitching.html) or [makeRemoteExecutableSchema()](https://www.apollographql.com/docs/graphql-tools/remote-schemas.html). Passing that option will override `typeDefs` property
 * `resolvers: object` - map with resolvers required by defined data types
 * `context: function` - function that modifies GraphQL context passed to resolvers during execution
 * `dataSources: object` - map with data sources that can be used by resolvers

All the values passed via `typeDefs` and `schema` properties will be merged using [Apollo's schema stitching mechamism](https://www.apollographql.com/docs/graphql-tools/schema-stitching.html)

## Dynamic Route Resolver

`DynamicRouteResolver` handles dynamic route resolution for the client application.
When user goes to a page that is not defined in React routing - then client asks back-end for the type of content for that particular url:

- It asks every extension to get "fetch URL priority" from the assigned API DataSource instance
- It sorts API DataSource instances that are able to determine dynamic content type by their "priority"
- It calls `fetchUrl` method on every available API DataSource until it gets a proper response

### Example

The simplest example is handling content from shop and blog. Let's say we want to resolve content for `/sport.html`

```js
class Magento2Api {
    getFetchUrlPriority(url) {
        // if url ends with .html then it's highly possible that it should be handed by shop
        // because it might be a product page under url generated by Magento
        return url.endsWith('.html') ? ApiUrlPriority.HIGH : ApiUrlPriority.NORMAL;
    }

    fetchUrl(obj, args, context, info) {
        // implementation of the resolver
    }
}
```

```js
class WordpressApi {
    getFetchUrlPriority(url) {
        // return just static value so others can be higher or lower
        return ApiUrlPriority.NORMAL;
    }

    fetchUrl(obj, args, context, info) {
        // implementation of the resolver
    }
}
```

`DynamicRouteResolver` will try to call `getFetchUrlPriority(url)` method for both extensions:

- ShopExtension/Magento2Api will return `ApiUrlPriority.HIGH`
- BlogExtension/WordpressApi will return `ApiUrlPriority.NORMAL`

So in that case `DynamicRouteResolver` will call `ShopExtension.fetchUrl()` first, if that call returns `null`,
it will call `BlogExtension.fetchUrl()` second.

### DynamicRouteResolver result structure

The correct response must match the following structure:

```json
{
    "id": 1,
    "path": "/foo.html",
    "type": "foo-type",
    "redirect": false
}
```

- `id` - must represent a unique ID for your back-end
- `path` - must represent a canonical path for your entity (this will be used for a possible redirection situation)
- `type` - must represent a unique entity type that will be later used by `DynamicRoute` component on `falcon-client`
- `redirect` - must set a flag whether the given URL must be redirected to the `path` address (to ensure canonical URL)

### Requirements

If any extension should handle dynamic routing it should implement both methods:

- `getFetchUrlPriority(url)` - accepts url (`string`) that should be resolved and returns the priority (`number`) for the extension
- `fetchUrl(obj, args, context, info)` - fetches the data from the remote source or performs any other async logic to determine

the type of the given url and returns a correct result or `null` (if the given URL is not determined by your back-end)
