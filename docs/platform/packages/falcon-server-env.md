---
id: falcon-server-env
title: '@deity/falcon-server-env'
sidebar_label: '@deity/falcon-server-env'
---

## ApiDataSource

`src/models/ApiDataSource` is a base class for REST API data sources that is
being used by DEITY Middleware application.

### `api.preInitialize`

This method will be triggered by ApiContainer (`initialize` method will be called by GraphQL
itself with the proper `context` argument). It can optionally return a config object received from
the back-end system.

### `api.getFetchUrlPriority(url)`

This method must be defined if ApiDataSource supports Dynamic Routing.
It should provide a simple logic to determine custom priority or return a default priority
(`this.fetchUrlPriority` equals `ApiUrlPriority.NORMAL` by default).

#### ApiDataSource internal methods

ApiDataSource class provides a set of extra methods and hooks.

`context` - is an object, that could be passed to `init` argument (3rd argument) of the following REST methods - `get`, `post`, `patch`, `put` and `delete`:

```javascript
async getInfo() {
  return this.get('info', {}, {
    context: {
      isAuthRequired: true,
      foo: 'bar'
    }
  });
}
```

This `context` object will be passed to `willSendRequest` method so you could perform
a context-specific changes to your request before it gets send:

```javascript
protected async willSendRequest(request) {
  const { context } = request;
  if (context && context.isAuthRequired && this.authorizeRequest) {
    await this.authorizeRequest(request);
    if (context.foo) {
      // do something else...
    }
  }
}
```

> Base `ApiDataSource` class provides a small `isAuthRequired` hook by default. If your class
> defines `authorizeRequest` method and you pass `isAuthRequired` context flag to any of the REST
> methods - ApiDataSource will call `authorizeRequest` method before sending the actual request
> further.

If you pass async `context.didReceiveResult` callback - it will be triggered right between
parsing REST response and saving this response to the internal cache,
so this way - you have full control what to store in the cache.
All further calls for this endpoint - ApiDataSource will get from the cache,
so this `context.didReceiveResult` won't be triggered again.

`api.processPagination()` is an internal method that helps you to process and generate a proper
"pagination" object, which is used by GraphQL type.

## Extension

`src/models/Extension` is a base class for any extension that is being used
by DEITY Middleware Application. It adds a few helpful methods to provide
a seamless integration with DEITY Middleware applications.

### `extension.initialize`

`await extension.initialize()` will be called by ExtensionContainer automatically. Optionally,
it can optionally return a back-end configuration object, received from the assigned
ApiDataSource instance (by calling `await api.preInitialize()` method).

### `extension.getGraphQLConfig`

This method will be called by ExtensionContainer to get Extension's GraphQL configuration, which
will be merged with the rest of the extensions' configs (see example below).

### `extension.getFetchUrlPriority(url)`

By default, this method will trigger `api.getFetchUrlPriority(url: string)` method (if it was
defined in the assigned ApiDataSource instance) and pass the current URL to determine API's
priority (for sort order) when DEITY PWA Frontend fetches URL info from available extensions; if
such method was not defined - it will return `null`, meaning that this ApiDataSource does not
support "Dynamic Routing" and should be skipped.

### `extension.fetchUrl`

This method is optional and should be defined if ApiDataSource supports Dynamic Routing.
Its signature mimics GraphQL Resolver function signature `(root, params, context, info)`.

## Using ApiDataSource together with Extension

Sample config:

```json
{
  "apis": [
    {
      "name": "api-wordpress",
      "package": "@deity/falcon-wordpress-api",
      "config": {
        "host": "wp.host.com",
        "protocol": "https",
        "apiPrefix": "/blog-api",
        "apiSuffix": "/wp/v2"
      }
    }
  ],
  "extensions": [
    {
      "package": "@deity/falcon-blog-extension",
      "config": {
        "api": "api-wordpress"
      }
    }
  ]
}
```

Sample ApiDataSource class:

```javascript
const { ApiDataSource } = require('@deity/falcon-server-env');

class WordpressApi extends ApiDataSource {
  async getPost(id) {
    // Calling 'https://wp.host.com/blog-api/wp/v2/posts/<id>' endpoint
    return this.get(`/post/${id}`);
  }
}
```

Sample Extension class:

```javascript
const { Extension } = require('@deity/falcon-server-env');

class BlogExtension extends Extension {
  async getGraphQLConfig() {
    return {
      schemas: [
        `type Post {
          name: String
        }`,
        `extend Query {
          getPost(id: String!): Post
        }`
      ],
      dataSources: {
        [this.api.name]: this.api
      }
      resolvers: {
        Query: {
          getPost: (root, { id }, { dataSources }) => {
            /* @type {WordpressApi} */
            const dataSource = dataSources[this.api.name];

            return dataSource.getPost(id);
          }
        }
      }
    };
  }
}
```

ApiContainer and ExtensionContainer will do the rest of the job:

- Creating instances of both classes
- Assigning specified `extension.config.api` Instance to Extension
- Generating, stitching and merging GraphQL Schema for FalconServer
