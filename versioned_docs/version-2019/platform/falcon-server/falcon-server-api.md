---
title: DEITY Middleware API
---

> This section provides an API description for both packages - `@deity/falcon-server`
> and `@deity/falcon-server-env`

## Extension

`src/models/Extension` is a base class for any extension that is being used
by DEITY Middleware Application. It adds a few helpful methods to provide
a seamless integration with DEITY Middleware applications.

#### `async extension.getGraphQLConfig(typeDefs = '')`

This method will be called by the ExtensionContainer to get Extension's GraphQL configuration, which
will be merged with the rest of the extension configs (see example below).

When calling parent method in your derived class - you could optionally pass your `typeDefs` parameter
(`super.getGraphQLConfig(typeDefs)`) - default implementation of this method will automatically
bind your Query and Mutation types to your ApiDataSource methods (following the same names for field
and methods).

#### `extension.getFetchUrlPriority(url)`

By default, this method will trigger `api.getFetchUrlPriority(url: string)` method (if it was
defined in the assigned ApiDataSource instance) and pass the current URL to determine API's
priority (for sort order) when DEITY PWA Frontend fetches URL info from available extensions; if
such method was not defined - it will return `null`, meaning that this ApiDataSource does not
support "Dynamic Routing" and should be skipped.

#### `async extension.fetchUrl(obj, args, context, info)`

This method is optional and should be defined if ApiDataSource supports Dynamic Routing.
Its signature mimics GraphQL Resolver function signature `(root, params, context, info)`.

## ApiDataSource

The purpose of this class is to provide some essential tools and capabilities
to work with the remote REST API backend implementing required methods
for the target Extension.

Basic structure of a new ApiDataSource module could look like this:

```javascript
const { ApiDataSource } = require('@deity/falcon-server-env');

class MyApi extends ApiDataSource {

}
```

`ApiDataSource` is the base class for REST API data sources that Falcon-Server
needs for a proper data-flow and communication.

#### `new ApiDataSource(params)`

`params` is an object with the following structure:

- `name` - an optional string parameter to set the name of your ApiDataSource
- `config` - an optional config object for your class
  - `host`, `port` and `protocol` keys are checked automatically to build Base URL
    for your REST API backend
  - `perPage` (default `10`) - is used to limit your listings to a certain amount
  - `fetchUrlPriority` (default `3`, which equals to `ApiUrlPriority.NORMAL`) - statically
    set Fetch URL priority for [Dynamic Route](../falcon-server/basics#dynamic-route-resolver)
- `eventEmitter` - an instance of `EventEmitter2` (_passed automatically by [ApiContainer](#apicontainer)_)
- `apiContainer` - an instance of [ApiContainer](#apicontainer)
  class (_passed automatically by [ApiContainer](#apicontainer)_)
- `gqlServerConfig` an Apollo Server configuration object
  (_passed automatically by DataSource callback on every request_)

```javascript
new ApiDataSource({
  name: 'customApiName', // by default, ApiContainer will pass key string from the configuration
  config: {} // "config" object that is defined in your server configuration
});
```

#### `api.getFetchUrlPriority(url)`

This method must be defined if a specific ApiDataSource supports Dynamic Routing.
It should provide a simple logic to determine a custom priority or return a default one
(`this.fetchUrlPriority` equals `ApiUrlPriority.NORMAL` by default).

#### `async api.fetchUrl(obj, args, context, info)`

This method must be defined if a specific ApiDataSource supports Dynamic Routing.
It will be called whenever Dynamic Route chooses this ApiDataSource instance to resolve URL type
for the provided `path`. See Dynamic Route result response type
[here](../falcon-server/basics#dynamicrouteresolver-result-structure).

#### `api.getCacheContext()`

This is an optional method to define Cache Context object for your ApiDataSource instance.
If your API does not require any distinctive data to be checked while calculating a cache key -
you can omit this method. Otherwise, if your API does require such data (like selected store
or language which is being stored in the API DataSource session and not being exposed as an
input variable) - you could add this method to your ApiDataSource class and return an object
like below:

```javascript
class MyCustomApi extends ApiDataSource {
  getCacheContext() {
    return {
      storeCode: this.session.storeCode
    };
  }
}
```

#### `async api.fetchBackendConfig(obj, args, context, info)`

If defined, ExtensionContainer will call this method whenever somebody tries to
fetch `backendConfig` GQL Query field. Falcon-Server expects `fetchBackendConfig`
to return an object with an optional `locales` array (like: `['en_US', 'nl_NL']`).

Falcon-Server will merge and return only those locales that are present in every
extension that has `fetchBackendConfig` method defined. If extension provides
backend config, but doesn't care about locales (does not return it in response) -
Falcon-Server will skip it.

### Hooks and methods

#### Request context

It is possible to pass a context data to a single request via `init` object
(3rd argument) using `context` key for the following REST methods -
`get`, `post`, `patch`, `put` and `delete`:

```javascript
async getInfo() {
  return this.get('info', {}, {
    context: { // passing request-related context
      foo: 'bar'
    }
  });
}
```

This `context` object will be passed to `willSendRequest` and `resolveUrl` methods
so you could perform a context-specific changes to your request before it gets send:

```javascript
protected async willSendRequest(request) {
  const { context } = request;
  if (context && context.foo === 'bar') {
    // do something else...
  }
}
```

#### isAuthRequired context hook

Base `ApiDataSource` class provides a small `isAuthRequired` hook by default.
If your class defines `authorizeRequest(req)` method and you pass
`isAuthRequired` context flag to any of the REST methods -
ApiDataSource will call `authorizeRequest` method of your class
before sending the actual request further:

```javascript
async authorizeRequest(req) {
  // GET `/info` will call this method before making the request
  const { token}  = this.config;
  req.headers.set('Authorization', `Bearer ${token}`);
}

async getInfo() {
  return this.get('info', {}, {
    context: { // passing request-related context
      isAuthRequired: true
    }
  });
}
```

#### didReceiveResult context hook

If you pass async `context.didReceiveResult` callback - it will be triggered
right between parsing REST response and saving this response to the internal cache,
so this way - you have full control what to store in the cache:

```javascript
async getInfo() {
  return this.get('info', {}, {
    context: { // passing request-related context
      didReceiveResult: result => {
        // Do something useful with `result`
        result.myName = result.my_name;
        return result;
      }
    }
  });
}
```

> This hook comes in handy whenever you want to change response data
> before sending it back to GraphQL to match its result type.

#### processPagination helper method

`api.processPagination(totalItems, currentPage = null, perPage = null)`
is an internal method that helps you to process and generate a proper
"pagination" object, which is used by `Pagination` GraphQL type.
It helps to calculate missing properties for you, like `nextPage` and `prevPage`.

#### Session getter/setter

ApiDataSource provides 2 simple shortcut methods to work with session data:

- `api.session` as a **getter** - returns a "named" session value
- `api.session` as a **setter** - sets a "named" session value

"named" session value is an object extracted from the main "session" data object,
additionally each ApiDataSource session is separated by the key - its own name,
`this.context.session[this.name]`.

```javascript
async getInfo() {
  // same as: const { userId } = this.context.session[this.name]
  const { userId } = this.session;
  // same as: this.context.session[this.name] = {}
  this.session = {};
  return this.get(`info/${userId}`);
}
```

## Using ApiDataSource together with Extension

Sample config:

```json
{
  "apis": {
    "api-wordpress": {
      "package": "@deity/falcon-wordpress-api",
      "config": {
        "host": "wp.host.com",
        "protocol": "https",
        "apiPrefix": "/blog-api",
        "apiSuffix": "/wp/v2"
      }
    }
  },
  "extensions": {
    "blog": {
      "package": "@deity/falcon-blog-extension",
      "config": {
        "api": "api-wordpress"
      }
    }
  }
}
```

Sample ApiDataSource class:

```javascript
const { ApiDataSource } = require('@deity/falcon-server-env');

class WordpressApi extends ApiDataSource {
  async getPost(obj, args, context, info) {
    // Calling 'https://wp.host.com/blog-api/wp/v2/posts/<id>' endpoint
    return this.get(`/post/${args.id}`);
  }
}
```

Sample Extension class:

```javascript
const { Extension } = require('@deity/falcon-server-env');

const typeDefs = `
  type Post {
    name: String
  }
  extend Query {
    getPost(id: String!): Post
  }
`;

class BlogExtension extends Extension {
  async getGraphQLConfig() {
    // or simply call super.getGraphQLConfig method
    // to auto-bind GQL Query types to API methods
    // return super.getGraphQLConfig(typeDefs);

    return {
      schemas: [typeDefs],
      resolvers: {
        Query: {
          getPost: (obj, args, context, info) =>
            context.dataSources[this.api.name].getPost(obj, args, context, info)
        }
      }
    };
  }
}
```

[ApiContainer](#apicontainer) and [ExtensionContainer](#extensioncontainer) will do the rest of the job:

- Creating instances of both classes
- Assigning specified `extension.config.api` Instance to Extension
- Generating, stitching and merging GraphQL Schema for FalconServer

## ApiContainer

The main purpose of `ApiContainer` is to store, initialize and manage all
provided APIs from the configuration. It also collects REST endpoints,
required by the API to handle requests in old-fashioned way (for example -
processing payment callbacks).

#### `new ApiContainer(eventEmitter)`

The constructor expects to receive an instance of EventEmitter.

#### `apiContainer.registerApis(apis: Object<string, ApiInstanceConfig>)`

This method registers the provided APIs
([`ApiInstanceConfig`](#apiinstanceconfig-type)) into `apiContainer.dataSources` Map.
Constructor will create a new Map, so any further manual calls of `registerApis` method will add new API DataSources to it.

All endpoints that were collected from API DataSources will be stored in `apiContainer.endpoints` property.

#### `ApiInstanceConfig` type

- `package: string` - Node package path (example: `@deity/falcon-wordpress-api`)
- `config: object` - Config object to be passed to Api Instance constructor

## ExtensionContainer

The main purpose of `ExtensionContainer` is to store, initialize and manage all provided
extensions from the configuration. It also generates main configuration object for ApolloServer instance.

#### `new ExtensionContainer(eventEmitter)`

The constructor expects to receive an instance of EventEmitter.

#### `extensionContainer.registerExtensions(extensions: Object<string, ExtensionInstanceConfig>, dataSources: Map<string,ApiDataSource>)`

 list of  objects and an initialized list of `dataSources` provided
by [`ApiContainer`](#apicontainer).

This method registers the provided extensions
([`ExtensionInstanceConfig`](#extensioninstanceconfig-type)) into
`extensionContainer.extensions` Map.
Constructor will create a new Map, so any further manual calls of
`registerExtensions` method will add new Extensions to it.

`extension.api` will be assigned automatically by `registerExtensions` method based on the
provided configuration and `dataSources` value.

#### `async initialize()`

This method will be called by the `FalconServer.start()` method.
It will initialize each registered extension.

#### `async createGraphQLConfig(defaultConfig = {})`

This method must return a valid [ApolloServer](https://www.apollographql.com/docs/apollo-server/getting-started.html#Step-3-Create-the-server)
configuration. This method will be called right before starting the ApolloServer instance,
after initializing all the extensions and API DataSources.

#### `ExtensionInstanceConfig` type

- `package: string` - Node package path (example: `@deity/falcon-blog-extension`)
- `config: object` - Config object to be passed to Extension Instance constructor
- `config.api: string` - API instance name to be used by the Extension
