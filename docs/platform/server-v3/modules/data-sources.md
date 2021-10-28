---
id: data-sources
title: Data Sources in Falcon Server
sidebar_label: Data Sources
enterprise_only: true
---

DataSources in Falcon Server are the same as [Data Sources in Apollo Server](https://www.apollographql.com/docs/apollo-server/data/data-sources/) so we recommend to get familiar with Apollo Server documentation on that topic first.

In short (from [Apollo Server documentation](https://www.apollographql.com/docs/apollo-server/data/data-sources/)):

> Data sources are classes that Apollo Server can use to encapsulate fetching data from a particular source, such as a database or a REST API. These classes help handle caching, deduplication, and errors while resolving operations.

In Falcon ecosystem Data Sources are used to fetch data from all the back-ends, e.g. if you have integration with BigCommerce then [BigCommerce Module](./modules/bigcommerce-module) exposes `FalconBigCommerceDataSource` which implements the communication layer between Falcon and BigCommerce. 
It contains authentication and authorization logic and does everything that's needed to fetch the required data.

The same applies to all the integrations - there's always integration-specific Data Source that realizes the communication.

## Resolvers auto-binding

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

# Falcon REST Data Source

DEITY Falcon provides also its own Data Source abstract class `FalconRESTDataSource`. That class extends [RESTDataSource class](https://github.com/apollographql/apollo-server/tree/main/packages/apollo-datasource-rest) provided by Apollo.
This Data Source is recommended to be used as base class for data sources that work as resolvers (see [resolvers auto-binding](#resolvers-auto-binding) section above).

This class provides also set of features that make implementation of custom data sources for Falcon Server easier:
- pre-configured logger
- access to cache
- REST authorization hooks

_(todo)_ add more things here and links to the docs