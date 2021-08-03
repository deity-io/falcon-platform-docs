---
title: Caching
---

Falcon-Server provides several ways of working with cache.

It provides `cache` component through GQL context available for all GraphQL Query and Mutation resolver methods.

It also exposes `@cache` directive through the Base GraphQL Schema to the rest of the extensions to define their own caching options.
Such cache will be handled by `@cache` directive itself, so the Extension does not have to do anything by itself in terms of cache checks,
cache-key generations, etc.

## Cache adapters

By default, Falcon-Server uses
[`InMemoryLRUCache`](https://www.apollographql.com/docs/apollo-server/features/data-sources#using-memcachedredis-as-a-cache-storage-backend)
as a cache backend.

There's an option to configure Redis or Memcached as a cache backend via Falcon-Server config:

<!--DOCUSAURUS_CODE_TABS-->
<!--redis-->

```json
{
  "cache": {
    "type": "redis",
    "options": {
      "host": "redis-server"
    }
  }
}
```

<!--memcached-->

```json
{
  "cache": {
    "type": "memcached",
    "options": ["memcached-server-1", "memcached-server-2"]
  }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

## Cache Component

Falcon-Server provides Cache wrapper-component with additional features described below.

As it was mentioned above, this component is accessible via `context` argument in all GraphQL resolvers:

```javascript
async mySampleResolver(parent, args, context, info) {
  // example of getting value for `cache-key` key
  const value = await context.cache.get('cache-key');
}
```

### `get` cache

`async get(key: string, setOptions?: GetCacheOptions): Promise<CacheResult>` method accepts the following arguments:

- `key: string` - cache key
- `setOptions?: GetCacheOptions` - optional object with the following sub-keys:
  - `fetchData: () => Promise<GetCacheFetchResult>` - this is an optional async fetch-callback, which should return a value if the cached value is missing. The fetched data will be then cached for a later use.
  - `options: SetCacheOptions` - options object to be passed to [`set`](#set-cache) method

Example of using `keyOrOptions` as an object with `fetchData` callback. Here's a piece of code that shows how you would normally work with the cache:

```javascript
async mySampleResolver(parent, args, context, info) {
  let value = await context.cache.get('cache-key');
  if (typeof value === 'undefined') {
    value = await fetchRemoteData('my-data');
    await context.cache.set('cache-key', value, { ttl: 60 });
  }
  return value;
}
```

By passing `fetchData` callback as a part of `keyOrOptions` argument - you can combine this check within a single call:

```javascript
async mySampleResolver(parent, args, context, info) {
  return context.cache.get('cache-key', {
    fetchData: async () => fetchRemoteData('my-data'),
    options: {
      ttl: 60
    }
  });
}
```

In this case `fetchRemoteData('my-data')` will be called only when the cache data was not found, and its result will be stored
with `cache-key` key and `{ ttl: 60 }` cache options.

Optionally, if `fetchData` callback returns data with `value` and `options` keys - Cache Component will merge the received `options`
value with the `options` object passed to the method arguments. This way you can define cache options dynamically, for example:

```javascript
async getToken(parent, args, context, info) {
  return context.cache.get('token', {
    fetchData: async () => {
      const tokenData = await fetchToken();
      return {
        value: tokenData.token,
        options: {
          ttl: convertToSeconds(tokenData.lifetime)
        }
      };
    }
  });
}
```

### `set` cache

`async set(key, value, options): Promise<void>` method accepts the following arguments:

- `key: string` - cache key
- `value: any` - cache value that needs to be stored under `key` cache key
- `options: SetCacheOptions` - represents an optional config object with the following keys:
  - `ttl: number` (seconds) - for how long you want to store the data in cache
  - `tags: string[]` - a list of tags that should be associated with this cache key (if one of the tags is invalid - the value considered as expired)

> Tags validation is being handled by the Cache component itself

### `delete` cache

`async delete(key): Promise<boolean | void>` method accepts the following argument:

- `key: string|string[]` - a key or a list of keys to be removed from the cache

## Schema Caching

To use cache within your Extension - you need to put `@cache` directive next to the field you want to cache
in the Extension's GraphQL Schema:

```graphql
type Query {
  myData: Data @cache
  myOtherData: Data @cache(ttl: 20)
}
```

In this example - `myData` Query will be cached by Falcon-Server with a default cache TTL, and `myOtherData` Query
will be cached with a cache TTL of `20` (20 minutes).

> Default cache TTL equals `10` (10 minutes)

### Sub-caching

It is also possible to cache nested data of your Extension (which for example may require some heavy requests
or calculations):

```graphql
type Query {
  data(id: String): Data @cache
}

type Data {
  nestedData: [String] @cache
}
```

In order to ensure the uniqueness of the cache key - `@cache` directive takes into account the name
of the cached field, cache context of your dataSources, all input arguments for the current resolver
and also checks its "parent" value:

- in case of `data` - it will check `id` input value
- in case of `nestedData` - it will check parent `data` value

### Cache settings

As it was previously mentioned, caching mechanism may be configured to use different TTL values depending on your needs.

There's a default cache TTL value, defined by `@cache` directive itself, which is being used when `@cache` directive is
being used without any extra arguments. If you want to change this value - you could easily do it via your
[Falcon-Server config](/docs/2019/platform/falcon-server/basics#configuration):

```json
{
  "cache": {
    "resolvers": {
      "enabled": true,
      "default": {
        "ttl": 60
      }
    }
  }
}
```

> You could use special values for your `production` environment via `config/production.json` config file. You could even disable
> the cache while working with the app locally by setting `cache.resolvers.enabled` config flag to `false`.

Every author of the Extension can "mark" the provided Queries as "cacheable" by putting the `@cache` directive next to the corresponding
queries in his Extension's GQL Schema. In some cases - you may disagree with these decisions and you may want to use
higher values for TTL. It is possible to alter those values without touching the Extension's code by changing your Falcon-Server config:

```json
{
  "cache": {
    "resolvers": {
      "default": {
        "ttl": 10
      },
      "query.menu": {
        "ttl": 30
      }
    }
  }
}
```

In this case, `query.menu` represents a "path" of your GraphQL Query like this:

```graphql
query Menu {
  menu {
    id
    name
    urlPath
  }
}
```

`query` - is a name of the GQL operation and `menu` is a name of the Query field. So in this case, instead of using a predefined TTL,
Falcon-Server will cache the response of `query.menu` resolver for 30 minutes (from the config above).

> `@cache` directive works on a Schema level only, meaning that you cannot mark existing Queries as cacheable by yourself
> via config to avoid introducing unintended behavior of the Extension.

### Overriding cache options

Cache options are being checked with this order (from highest to lowest priority):

- "named" GQL path in app config
- `@cache` directive arguments in GQL Schema
- global cache options in app config
- default cache options defined by Base GraphQL Schema

### Caching by tags

Full `@cache` GraphQL directive definition looks like this:

```graphql
directive @cache(ttl: Int, idPath: [String]) on FIELD_DEFINITION
```

When you mark your GraphQL Type with a `@cache` directive, this directive will try to find `ID` field type inside of your
specified type, for example:

```graphql
type Query {
  item(id: ID!): Item @cache
  items: [Item] @cache
}

# Type name is going to be used as a tag prefix
type Item {
  # @cache will check this field to generate a proper tag `Item:id`
  id: ID!
  name: String
}
```

Thus if you run `query { item(id: 1) { id name } }` GQL query, `@cache` will generate `Item` and `Item:1`
tags automatically for you, and will put the resolved value into the cache with the generated tags for further validation.
The same works with a simple list, when you run `query { items { id name } }` - the directive will detect
`[Item]` list and will extract `ID` values from each entry and will generate the following tags -
`Item`, `Item:1`, `Item:2` and so on.

This works great with "plain" values. But when you're dealing with nested listings - you need to help `@cache`
directive by pointing out where to look for `ID` values. Let's assume you have the following GQL schema:

```graphql
type Query {
  items(page: Int): ItemList @cache(idPath: ["children"])
}

type ItemList {
  children: [Item]
  total: Int
}

type Item {
  id: ID!
  name: String
}
```

Such `@cache(idPath: ["children"])` statement will tell to the `@cache` directive to look in `children` property
for the required values to generate a tag list from. This way, the whole `Query.items` resolver value
will be cached with the generated tags from `ItemList.children` values.

> If you need to use a deep nesting key - you could simply pass
> `@cache(idPath: ["children.entries"])` statement in the schema

There are cases when you need to switch the direction of how tags are being generated, for example when you
would like to cache a nested value with its own resolver (as it would normally be with GraphQL)
within your main type like the following example schema:

```graphql
type Query {
  post(id: Int): Post @cache
}

type Post {
  id: ID!
  comments: [Comment] @cache(idPath: ["$parent"])
}

type Comment {
  id: ID!
  text: String
}
```

In the example above we have 2 caching points:

- Caching the main `Post` type (the directive will check its `ID` value to generate a tag)
- Caching a nested `Post.comments` value with a `(idPath: ["$parent"])` cache option.

`$parent` keyword is a special keyword which refers to a `parent` object (it's the first argument
passed to the GraphQL resolver method), so in order to generate a list of tags - `@cache` directive
will check a `parent` value for `comments` (which is a `Post` value and this directive
is able to extract the `ID` from `Post`). Thus, if you run `query { post(id: 1) { id comments { id text } } }` -
`comments` value will be cached with the following tags: `Post:1`, `Comment`, `Comment:1`, `Comment:2` etc.

## Cache invalidation

Falcon-Server provides two options to invalidate the cache:

- via `@cacheInvalidator` GraphQL directive
- via a custom REST endpoint (defined by a user)

### `@cacheInvalidator` directive

Falcon-Server allows you to mark your Queries and Mutations with a `@cacheInvalidator` GraphQL directive
to invalidate the cache when requested/submitted.

This directive accepts a list of entries for `idPath` argument with the following keys:

- `path` - a required value to get value(s) from (just like `idPath` argument for `@cache` directive)
- `type` - an optional value to force entity type (when it's needed)

Full GraphQL definition looks like this:

```graphql
directive @cacheInvalidator(idPath: [IdPathEntryInput]) on FIELD_DEFINITION

input IdPathEntryInput {
  type: String
  path: String!
}
```

> Be careful when using this directive, since it allows you to control your cache on a GraphQL-level per user.
> You have to use it responsibly and do not allow to invalidate the cache using simple queries.

To invalidate the cache, you have to specify the path to your data like:

```graphql
type Query {
  lastOrder: OrderDetails @cacheInvalidator(idPath: [{ path: "items" }])
}
```

In this case, `@cacheInvalidator` will check `items` key for the `lastOrder` Query result and it will try to extract value(s)
with `ID` field type (it acts in the similar way like it does for `@cache` GQL directive).

There might be a case, when you would need to force a specific entity type to be returned by this directive. For example,
for `OrderDetails` type, which will return a list of `OrderItem` for `items` key - you need to force `Product` type.
To do that - you simply specify `type` key:

```graphql
type Query {
  lastOrder: Order @cacheInvalidator(idPath: [{ path: "items", type: "Product" }])
}
```

`@cacheInvalidator` directive will generate a list of cache tags by using `items` value and use `Product` type
instead of `OrderItem`.

### REST endpoint

Falcon-Server uses `cache.url` config value (by default: `/cache`) to define a route path which will be responsible
for processing web-hooks to invalidate the cache by tags.

> For security reasons - please **make sure** you're using a unique and complex value for this route on production
> to avoid exposing a vulnerable route.

This endpoint expects you to send a list of entries with the following keys:

- `type` - entity type to be used for cache invalidation (required key)
- `id` - entity ID (optional key). If not passed, Falcon-Server will use `type` as a cache key

```bash
curl -X POST http://localhost:4000/cache -H 'Content-Type: application/json' -d \
     '[{"id": 1, "type": "Product"}, {"type": "Category"}]'
```

The example above will flush the cache for the following keys:

- `Product:1` - cache key for the specific product
- `Category` - general `Category` cache key
