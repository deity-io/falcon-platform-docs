---
id: data-sources
title: Data Sources in Falcon Server
sidebar_label: Data Sources
enterprise_only: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

[Apollo Server documentation](https://www.apollographql.com/docs/apollo-server/data/data-sources/) says:

> Data sources are classes that Apollo Server can use to encapsulate fetching data from a particular source, such as a database or a REST API. These classes help handle caching, deduplication, and errors while resolving operations.

Falcon Server Data Sources extends [Apollo Server Data Sources](https://www.apollographql.com/docs/apollo-server/data/data-sources/) this is why if you are not familiar with DataSources concept we strongly recommend learning that topic first.

In Falcon ecosystem Data Sources are used to fetch data from all the back-ends, e.g. if you have integration with BigCommerce then [BigCommerce Module](./modules/bigcommerce-module) exposes `FalconBigCommerceDataSource` which implements the communication layer between Falcon and BigCommerce. It contains authentication and authorization logic and does everything that's needed to fetch the required data.

The same applies to all the integrations - there's always an integration-specific Data Source that realizes the communication.

Falcon Server will treat particular service as Data Source until it extends [Apollo's abstract Data Source class](https://github.com/apollographql/apollo-server/blob/main/packages/apollo-datasource/src/index.ts). However, the Falcon Server expects that concrete DataSource has an additional `name` property. This is why each DataSource registered in Falcon Server needs to:

- extends [Apollo's abstract Data Source class](https://github.com/apollographql/apollo-server/blob/main/packages/apollo-datasource/src/index.ts)
- implements Falcon Server `IDataSource` interface which is defined as follows

```ts
import { DataSourceConfig } from 'apollo-datasource';

export interface IDataSource<TGqlResolverContext extends GraphQLContext = GraphQLContext> {
  name: string;

  initialize?(config: DataSourceConfig<TGqlResolverContext>): void | Promise<void>;
}
```

`@deity/falcon-server-env` package exports couple of base classes, which meets above conditions by default. You should extends them in order to implement your custom DataSource. But it is fair enough to use any other, found on npm registry, please bear in mind that those need to implement the `IDataSource` interface too. Full list of base `DataSource` classes:

- [`DataSource`](#datasource)
- [`FalconRESTDataSource`](#falconrestdatasource)
- `ApiDataSource` - deprecated, use `FalconRESTDataSource` instead
- [`GqlDataSource`](#gqldatasource)

## `DataSource`

The very base class of Falcon Server DataSource.

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

_(todo)_

## Custom DataSource example

As mentioned earlier, to create the custom DataSource you need to extends one from above abstract classes. An example implementation can look following:

<Tabs>
<TabItem value="TypeScript" default>

```ts
import { injectable } from 'inversify';
import { DataSource } from '@deity/falcon-server-env';

@injectable()
export class CustomDataSource extends DataSource {
  constructor() {
    super('custom');
  }

  getCustomData() {
    return {};
  }
}
```

</TabItem>
<TabItem value="JavaScript">

```js
const { injectable, decorate } = require('inversify');
const { DataSource } = require('@deity/falcon-server-env');

class CustomDataSource extends DataSource {
  constructor() {
    super('custom');
  }

  getCustomData() {
    return {};
  }
}
decorate(injectable(), CustomDataSource);

module.exports = {
  CustomDataSource
};
```

</TabItem>
</Tabs>

In above example `CustomDataSource` has parameter-lees constructor - it does not uses any external dependency.

To show how to inject any, please see following example, where we injected `fetch` (we highly recommended to use Falcon fetch [see why](need-url-here)) and next to it module configuration.

<Tabs>
<TabItem value="TypeScript" default>

```ts
import { injectable, inject } from 'inversify';
import { RESTDataSource, injectModuleConfig } from '@deity/falcon-server-env';

@injectable()
export class CustomDataSource extends RESTDataSource {
  constructor(@inject('fetch') fetch, @injectModuleConfig('custom') config) {
    super({ restDataSourceFetch: fetch, name: 'custom', config });
  }

  getCustomData() {
    return this.get('http://custom.com');
  }
}
```

</TabItem>
<TabItem value="JavaScript">

```js
const { injectable, inject, decorate } = require('inversify');
const { RESTDataSource } = require('@deity/falcon-server-env');

class CustomDataSource extends RESTDataSource {
  constructor(fetch, config) {
    super({ restDataSourceFetch: fetch, name: 'custom', config });
  }

  getCustomData() {
    return this.get('/data');
  }
}
decorate(injectable(), CustomDataSource);
decorate(inject('fetch'), CustomDataSource, 0);
decorate(injectModuleConfig('custom'), CustomDataSource, 1);

module.exports = {
  CustomDataSource
};
```

</TabItem>
</Tabs>

The dependency injection was demonstrated on `RESTDataSource`, but the same mechanism can be applied to each DataSource.

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
