---
title: GraphQL Schema Stitching
---

The whole GraphQL stitching is being performed by
[`ExtensionContainer.createGraphQLConfig`](/docs/2019/platform/falcon-server/falcon-server-api#extensioncontainer) method.

ExtensionContainer collects all registered extensions and calls their
`getGraphQLConfig` method which must return the following `extConfig` object:

```javascript
class CustomExtension extends Extension {
  async getGraphQLConfig() {
    return {
      schemas: [
        `type CustomItem {
          name: String
        }`,
        `extend Query {
          findCustomItem(id: Int!): CustomItem
        }`
      ],
      resolvers: {
        Query: {
          findCustomItem: () => {
            // add your logic here
            return {
              name: 'Item'
            };
          }
        }
      }
    };
  }
}
```

- `extConfig.schemas` - is a string or array of strings which represent a valid GraphQL schema, for example:

```graphql
extend Query {
  getMyField: FieldType
}

type FieldType {
  name: String
}
```

This way the main `Query` Type will be extended with a custom `getMyField` method
which should return an instance of `FieldType`.

> Please note, for all root types (`Query`, `Mutation` and `Subscription`) you
must use `extend` statement in order to add your functionality into FalconServer
GraphQL application. It is also possible to extend a GraphQL type, which is
defined by other extensions - just use the same `extend` statement
(for example, in your `custom-extension` you can extend `Product` type in
`shop-extension` - `extend Product { myCustomField: FieldType }`).

- `extConfig.resolvers` - [resolvers](https://www.apollographql.com/docs/graphql-tools/schema-stitching.html#resolvers) object
- `extConfig.dataSources` - simple object that represents Extension's

API DataSource instance (for example `{ wordpress: new WordpressApi() }`)
