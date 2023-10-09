---
id: data-sources
title: Data sources in Composer
sidebar_label: Data sources
enterprise_only: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Data sources

import NoticeV3 from "../../../includes/upgrade-to-v3.mdx"




[Apollo Server documentation](https://www.apollographql.com/docs/apollo-server/data/data-sources/) says:

> Data sources are classes that Apollo Server can use to encapsulate fetching data from a particular source, such as a database or a REST API. These classes help handle caching, deduplication, and errors while resolving operations.

Falcon Server Data Sources extends [Apollo Server Data Sources](https://www.apollographql.com/docs/apollo-server/data/data-sources/) this is why if you are not familiar with DataSources concept we strongly recommend learning that topic first.

In Falcon ecosystem Data Sources are used to fetch data from all the back-ends, e.g. if you have integration with BigCommerce then [BigCommerce Module](../bigcommerce-module) exposes `FalconBigCommerceDataSource` which implements the communication layer between Falcon and BigCommerce. It contains authentication and authorization logic and does everything that's needed to fetch the required data.

The same applies to all the integrations - there's always an integration-specific Data Source that realizes the communication.

Falcon Server will treat particular service as Data Source until it extends [Apollo's abstract Data Source class](https://github.com/apollographql/apollo-server/blob/main/packages/apollo-datasource/src/index.ts). However, the Falcon Server expects that concrete DataSource has an additional `name` property. This is why each DataSource registered in Falcon Server needs to:

Falcon Server will treat particular service as Data Source [Apollo's abstract Data Source class](https://github.com/apollographql/apollo-server/blob/main/packages/apollo-datasource/src/index.ts), but expects that new DataSource has an additional `name` property. This is why each DataSource registered in Falcon Server needs to:

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
- [`RESTDataSource`](#restdatasource)
- `ApiDataSource` - deprecated, use `RESTDataSource` instead
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

- `name: string` - defines the name of a particular DataSource. This value is used as a key in GraphQL resolver context DataSources map and **have to be unique**.

## `RESTDataSource`

Base Data Source class which realizes communication with any REST based API.

Deity Falcon provides also its own Data Source abstract class `RESTDataSource`. That class extends [RESTDataSource class](https://github.com/apollographql/apollo-server/tree/main/packages/apollo-datasource-rest) provided by Apollo.
This Data Source is a recommended base class for data sources that work as resolvers (see [resolvers auto-binding](#resolvers-auto-binding) section above).

Constructor definition looks as follow

```ts
constructor({ name, restDataSourceFetch, config }: RESTDataSourceConstructorParams)
```

where `RESTDataSourceConstructorParams` is:

- `name: string` - default name is taken from class constructor
- `restDataSourceFetch: typeof fetch` - node fetch implementation
- `config?: DataSourceConfiguration` - module configuration

This class provides also a set of features that make implementation of custom data sources for Falcon Server easier.

Typical properties:

- `name: string` - data source name
- `config: DataSourceConfiguration`
- `perPage: number`
- `logger: typeof Logger` - pre-configured logger
- `restDataSourceFetch: typeof fetch`
- `cache?: ICache` - gave access to cache

Dedicated methods which cover typical HTTP verbs:

- `get<TResult = any>(path: string, params?: URLSearchParamsInit, init?: ContextRequestInit): Promise<TResult>`
- `post<TResult = any>(path: string, body?: any, init?: ContextRequestInit): Promise<TResult>`
- `patch<TResult = any>(path: string, body?: any, init?: ContextRequestInit): Promise<TResult>`
- `put<TResult = any>(path: string, body?: any, init?: ContextRequestInit): Promise<TResult>`
- `delete<TResult = any>(path: string,params?: URLSearchParamsInit,init?: ContextRequestInit): Promise<TResult>`

Others methods which allows you to implement advanced features e.g. authorize requests, dynamic routing, extension scopes:

- `get fetchUrlPriority()`
- `getFetchUrlPriority?(url: string): number` - should be implemented if DataSource wants to deliver content via dynamic URLs. It should return priority value for passed url.
- `fetchUrl?( obj: null, params: FetchUrlParams, context: TContext, info: GraphQLResolveInfo ): Promise<FetchUrlResult | null>`
- `getCacheContext?(context: TContext): Record<string, any>` - method to get a cache context object which should contain a distinguish data that must be taken into account while calculating the cache key for this specific DataSource. It could be a storeCode, selected locale etc.
- `fetchBackendConfig?(obj: any, params: any, context: TContext, info: GraphQLResolveInfo): RemoteBackendConfig;`
- `authorizeRequest?(req: ContextRequestOptions): Promise<void>` - Hook that is going to be executed for every REST request if authorization is required

## `GqlDataSource`

Base Data Source class which realizes communication with any GraphQL based API.

_(todo)_

## Custom DataSource example

As mentioned earlier, to create the custom DataSource you need to extend one from the above abstract classes. An example implementation can look following:

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

To show how to inject any, please see following example, where we injected `fetch` (we highly recommended to use Falcon fetch <!-- TODO: [see why](need-url-here) -->) and next to it module configuration.

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

The dependency injection demonstrated on `RESTDataSource` example can be also applied to any DataSource.

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
