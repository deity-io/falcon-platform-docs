---
id: data-sources
title: Data Sources in Falcon Server
sidebar_label: Data Sources
enterprise_only: true
---

[Apollo Server documentation](https://www.apollographql.com/docs/apollo-server/data/data-sources/) says:

> Data sources are classes that Apollo Server can use to encapsulate fetching data from a particular source, such as a database or a REST API. These classes help handle caching, deduplication, and errors while resolving operations.

Falcon Server Data Sources extends [Apollo Server Data Sources](https://www.apollographql.com/docs/apollo-server/data/data-sources/) this is why if you are not familiar with Data Sources concept we strongly recommend to learn that topic first.

In Falcon ecosystem Data Sources are used to fetch data from all the back-ends, e.g. if you have integration with BigCommerce then [BigCommerce Module](./modules/bigcommerce-module) exposes `FalconBigCommerceDataSource` which implements the communication layer between Falcon and BigCommerce. It contains authentication and authorization logic and does everything that's needed to fetch the required data.

The same applies to all the integrations - there's always an integration-specific Data Source that realizes the communication.

Falcon Server will threat particular service as Data Source until it extends [Apollo's abstract Data Source class](https://github.com/apollographql/apollo-server/blob/main/packages/apollo-datasource/src/index.ts). However, the Falcon Server expects that Data Source has an additional `name` property, so its API can be defined as follows

```ts
import { DataSourceConfig } from 'apollo-datasource';

export interface IDataSource<TGqlResolverContext extends GraphQLContext = GraphQLContext> {
  name: string;

  initialize?(config: DataSourceConfig<TGqlResolverContext>): void | Promise<void>;
}
```

Full list of base `DataSource` classes:

- [`DataSource`](#datasource)
- [`FalconRESTDataSource`](#falconrestdatasource)
- `ApiDataSource` - deprecated, use `FalconRESTDataSource` instead
- [`GqlDataSource`](#gqldatasource)

## `DataSource`

The very base class of Falcon Server

```ts
import { DataSource as ApolloDataSource } from 'apollo-datasource';
import { injectable } from 'inversify';

@injectable()
export abstract class DataSource extends ApolloDataSource implements IDataSource {
  public name: string;

  constructor(name: string) {
    super();

    this.name = name;
  }
}
```

- `name: string` - defines the name of a particular DataSource. Its value is used as a key on the GraphQL resolver context DataSources map.

## `FalconRESTDataSource`

Base Data Source class which realizes communication with any REST based API.

DEITY Falcon provides also its own Data Source abstract class `FalconRESTDataSource`. That class extends [RESTDataSource class](https://github.com/apollographql/apollo-server/tree/main/packages/apollo-datasource-rest) provided by Apollo.
This Data Source is recommended to be used as base class for data sources that work as resolvers (see [resolvers auto-binding](#resolvers-auto-binding) section above).

This class provides also set of features that make implementation of custom data sources for Falcon Server easier:

- pre-configured logger
- access to cache
- REST authorization hooks

_(todo)_ add more things here and links to the docs

## `GqlDataSource`

Base Data Source class which realizes communication with any GraphQL based API.

## DataSource methods to GraphQL resolvers auto-binding

In Falcon Server Data Sources have also one more important feature - auto-binding of resolvers. When Falcon Server starts it loads all the extensions, and all modules (which deliver Data Sources).

When extension configuration has `module` key then Falcon Server looks for a Data Source exposed by module with that name and tries to bind all the queries and mutations to methods of that Data Source.
That way you don't have to wire up resolvers to your schema extension manually - it's done by Falcon Server.

Let's consider we have an extension with the following schema:

```graphql
extend type Query {
  footerLinks: [FooterLink!]!
}

type FooterLink {
  url: String!
  text: String!
}
```

and a module that contains the following DataSource:

```ts
const { DataSource } = require('apollo-datasource');

export class FooterLinksDataSource extends DataSource {
  async footerLinks(obj, params, context, info) {
    // in real scenario these links would be fetched from some backend
    const links = [
      {
        url: 'https://example.com',
        text: 'Example'
      }
    ];
    return links;
  }
}
```

and configuration including these:

```json
{
  ...
  "extensions": {
    "footer": {
      "package": "./src/footer-links-extensions",
      "module": "footer-links-module"
    }
  },
  "module": {
    "footer-links": {
      "package": "./src/footer-links-module"
    }
  }
  ...
}
```

In that situation extension named `"footer"` uses module called `"footer-links"`, so Falcon Server will bind method `footerLinks(obj, params, context, info)` to query `footerLinks`.
That way every time when someone will send GraphQL query `footerLinks` method `FooterLinksDataSource.footerLinks` will be executed.
