---
id: about
title: Extensions in Falcon Server
sidebar_label: About
enterprise_only: true
---

Falcon-Server provides its own base GraphQL Schema, that defines data types, queries
and mutations, so every Extension could use its types and extend them.

Currently, DEITY provides the following list of officially supported extensions:

- [Shop Extension](./blog-extension)
- [Blog Extension](./shop-extension)
- [Search Extension](./search-extension)
- [GeoLocation Extension](./geolocation-extension)

Each of these can of course be extended with custom features that are specific for particular implementation.

## Extending GraphQL context with extension

Besides providing schema for GraphQL server, extensions can also provide function that modifies GraphQL execution context which is available in resolvers.

To do so, the extension must return `context` property which is an object or function that creates object. That object will be merged with default context values and context values returned from other extensions.

This is ApolloServer's feature exposed by Falcon Server and you can read more about it [here](https://www.apollographql.com/docs/apollo-server/data/resolvers/#the-context-argument)

Code snipped below shows the basic usage.

```ts
// example extension that adds "key": "value" pair to the GraphQL context
module.exports = () => ({
  context: ({ ctx }) => {
    return {
      key: 'value'
    };
  }
});

// then in resolver's code it will be available under context.key
...
  someQueryResolver: (obj, input, context, info) {
    console.log('Key value:', context.key);
  }
...

```

Internally for example [Falcon GeoLocation Extension](./geo-location-extension) uses that mechanism to inject geo location data to each request's context.

_(todo)_