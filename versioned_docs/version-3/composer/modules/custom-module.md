---
id: custom-module
title: Custom modules
sidebar_label: Custom modules
enterprise_only: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Badge from '@site/src/components/Badge';

<Badge variant="green">NEW V3 DOC</Badge><br/><br/>

Most of the integrations available in Falcon Platform are implemented as extensions + modules. When you want to add new features or change the existing behavior you'll need to add [Extension](../extensions/about) and module that implements features for that Extension.

## Creating new Module

To create the most basic (an empty) module it is enough to export implementation of `FalconModule` abstract class. Following module will be correctly loaded and registered in Falcon Server, even it does nothing.

<Tabs>
<TabItem value="TypeScript" default>

```ts
import { FalconModule } from '@deity/falcon-server-env';

export class CustomModule extends FalconModule<any> {
  constructor(config: any) {
    super(config);
  }
}
```

</TabItem>
<TabItem value="JavaScript">

```js
const { FalconModule } = require('@deity/falcon-server-env');

module.exports.CustomModule = class CustomModule extends FalconModule {
  constructor(config) {
    super(config);
  }
};
```

</TabItem>
</Tabs>

However, as described in [about](./about#what-is-a-module-in-falcon), Falcon Module can provide implementation of various common services and define any custom services too. The following examples show how to register a particular one, but it is perfectly fine, to define any number of them, inside one Falcon Module. So feel free to mix them in order to provide consistent business feature implementation.

### Adding GraphQL resolver

Lets assume that you already have registered corresponding Falcon Extensions which defines following GraphQl schema:

```graphql
extend type Query {
  fooList: FooList!
}

type FooList {
  items: [Foo!]!
}

type Foo {
  id: ID!
  name: String!
}
```

To add resolver implementation of `fooList` query, you need to define resolver implementation via `gqlResolvers` method:

<Tabs>
<TabItem value="TypeScript" default>

```ts
import { FalconModule, GqlResolversMap } from '@deity/falcon-server-env';

export class CustomModule extends FalconModule<{}> {
  constructor(config: {}) {
    super(config);
  }

  gqlResolvers(): GqlResolversMap {
    const resolversMap: GqlResolversMap = {
      Query: {
        fooList: () => [
          { id: 1, name: 'foo 1' },
          { id: 2, name: 'foo 2' },
          { id: 3, name: 'foo 3' }
        ]
      }
    };

    return this.mergeGqlResolvers(super.gqlResolvers(), resolversMap);
  }
}
```

</TabItem>
<TabItem value="JavaScript">

```js
const { FalconModule } = require('@deity/falcon-server-env');

module.exports.CustomModule = class CustomModule extends FalconModule {
  constructor(config) {
    super(config);
  }

  gqlResolvers() {
    const resolversMap = {
      Query: {
        fooList: () => [
          { id: 1, name: 'foo 1' },
          { id: 2, name: 'foo 2' },
          { id: 3, name: 'foo 3' }
        ]
      }
    };

    return this.mergeGqlResolvers(super.gqlResolvers(), resolversMap);
  }
};
```

</TabItem>
</Tabs>

#### Adding GraphQL Type resolver

Very ofter there is an need to do a mapping of data returned from particular API to model defined via GraphQL schema. Resolvers map allows to define GraphQL Type resolver, which make possible to define mapping once for entire schema, no matter how many queries and/or mutations will return specific type, result of those will be mapped according to defined Type resolver.

Lest say there is a need to capitalize `Foo.name`. To achieve that `Foo.name` GraphQL Type resolver should be added into `resolversMap`:

<Tabs>
<TabItem value="TypeScript" default>

```ts
const resolversMap: GqlResolversMap = {
  Query: {
    fooList: () => [
      { id: 1, name: 'foo 1' },
      { id: 2, name: 'foo 2' },
      { id: 3, name: 'foo 3' }
    ]
  },
  Foo: {
    name: root => toTitleCase(root.name)
  }
};
```

</TabItem>
<TabItem value="JavaScript">

```js
const resolversMap = {
  Query: {
    fooList: () => [
      { id: 1, name: 'foo 1' },
      { id: 2, name: 'foo 2' },
      { id: 3, name: 'foo 3' }
    ]
  },
  Foo: {
    name: root => toTitleCase(root.name)
  }
};
```

</TabItem>
</Tabs>

#### Using DataSource

During development, amount of GraphQL resolvers, data manipulation mappers, business logic functions is growing relay fast. And there is a need to organize code base somehow in a better way. Here Data Sources appears, to read more about idea behind it go into [Data Sources](./common-services/data-sources) section. Following example shows them in action:

<Tabs>
<TabItem value="TypeScript" default>

```ts
import { FalconModule, GqlResolversMap, GraphQLContext } from '@deity/falcon-server-env';
import { FooDataSource } from './FooDataSource';

export type CustomGraphQLContext = GraphQLContext<{ foo: FooDataSource }>;
export class CustomModule extends FalconModule<{}> {
  constructor(config: {}) {
    super(config);
  }

  servicesRegistry(registry) {
    super.servicesRegistry(registry);

    registry.bind('FooDataSource').toDataSource(FooDataSource);
  }

  gqlResolvers(): GqlResolversMap<CustomGraphQLContext> {
    const resolversMap: GqlResolversMap<CustomGraphQLContext> = {
      Query: {
        fooList: (root, args, context) => context.dataSources.foo.getFooList()
      },
      Foo: {
        name: root => toTitleCase(root.name)
      }
    };

    return this.mergeGqlResolvers(super.gqlResolvers(), resolversMap);
  }
}
```

</TabItem>
<TabItem value="JavaScript">

```js
const { FalconModule } = require('@deity/falcon-server-env');
const { FooDataSource } = require './FooDataSource';

module.exports.CustomModule = class CustomModule extends FalconModule {
  constructor(config) {
    super(config);
  }

  servicesRegistry(registry) {
    super.servicesRegistry(registry);

    registry.bind('FooDataSource').toDataSource(FooDataSource);
  }

  gqlResolvers() {
    const resolversMap = {
      Query: {
        fooList: (root, args, context) => context.dataSources.foo.getFooList()
      },
      Foo: {
        name: root => toTitleCase(root.name)
      }
    };

    return this.mergeGqlResolvers(super.gqlResolvers(), resolversMap);
  }
};
```

</TabItem>
</Tabs>

### Adding Module Common Services

Besides Data Sources, Falcon Module can have Event Handlers and Rest Endpoint Handlers. To find out how to implements them please see:

- [Data Sources](./common-services/data-sources)
- [Event Handlers](./common-services/event-handlers)
- [Rest Endpoint Handlers](./common-services/rest-endpoints)

Once you implement any of these listed above, in order to register them, you need to create binding in `servicesRegistry` method:

<Tabs>
<TabItem value="TypeScript" default>

```ts
import { FalconModule, GqlResolversMap, GraphQLContext } from '@deity/falcon-server-env';
import { FooDataSource } from './FooDataSource';
import { FooRestEndpointHandler } from './FooRestEndpointHandler';
import { AfterInitializationEventHandler } from './AfterInitializationEventHandler';

export type CustomGraphQLContext = GraphQLContext<{ foo: FooDataSource }>;
export class CustomModule extends FalconModule<{}> {
  constructor(config: {}) {
    super(config);
  }

  servicesRegistry(registry) {
    super.servicesRegistry(registry);

    registry.bind('FooDataSource').toDataSource(FooDataSource);
    registry.bind('FooRestEndpointHandler').toEndpointManager(FooRestEndpointHandler);
    registry.bind('AfterInitializationEventHandler').toEventHandler(AfterInitializationEventHandler);
  }
}
```

</TabItem>
<TabItem value="JavaScript">

```js
const { FalconModule, DataSource } = require('@deity/falcon-server-env');
const { FooDataSource } = require('./FooDataSource);
const { FooRestEndpointHandler } = require('./FooRestEndpointHandler');
const { AfterInitializationEventHandler } = require('./AfterInitializationEventHandler');

module.exports.CustomModule = class CustomModule extends FalconModule {
  servicesRegistry(registry) {
    super.servicesRegistry(registry);

    registry.bind('FooDataSource').toDataSource(FooDataSource);
    registry.bind('FooRestEndpointHandler').toEndpointManager(FooRestEndpointHandler);
    registry.bind('AfterInitializationEventHandler').toEventHandler(AfterInitializationEventHandler);
  }
};
```

</TabItem>
</Tabs>

### Adding Module Custom Service

Falcon Module services registry allows to define any custom service, not only Data Sources, Rest Endpoint Handlers or Event Handlers. We use that feature inside `@deity/falcon-payment-service-module` in order to implement `PaymentServiceClient`. Following example shows how to do this

<Tabs>
<TabItem value="TypeScript" default>

```ts
import { injectable } from 'inversify';
import { FalconModule, FalconModuleRegistryProps } from '@deity/falcon-server-env';

@injectable()
export class FooClient {
  getFooById(id: number) {
    return { id };
  }
}

export class CustomModule extends FalconModule<{}> {
  servicesRegistry(registry: FalconModuleRegistryProps) {
    super.servicesRegistry(registry);

    registry.bind('FooClient').to(FooMapper);
  }
}
```

</TabItem>
<TabItem value="JavaScript">

```js
const { injectable, decorate } = require('inversify');
const { FalconModule } = require('@deity/falcon-server-env');

class FooClient {
  getFooById(id: number) {
    return { id };
  }
}
decorate(injectable(), FooClient);

class CustomModule extends FalconModule {
  servicesRegistry(registry) {
    super.servicesRegistry(registry);

    registry.bind('FooClient').to(FooMapper);
  }
}

module.exports = {
  CustomModule,
  FooClient
};
```

</TabItem>
</Tabs>

Bare in mind, since custom services are not recognizable by Falcon Server, these will not be used until at least one of the common services (Data Source, Rest Endpoint Handler or Event Handler) will use them.

## Creating new Module with services auto-discovery

Falcon Module common services auto-discovery feature, lets you just export classes which extends:

- [Data Sources](./common-services/data-sources)
- [Event Handlers](./common-services/event-handlers)
- [Rest Endpoint Handlers](./common-services/rest-endpoints)

Then Falcon Server during the startup will analyse exported by particular module class, and will do the required services registration by himself.

<Tabs>
<TabItem value="TypeScript" default>

```ts
import { FooDataSource } from './FooDataSource';
import { FooRestEndpointHandler } from './FooRestEndpointHandler';
import { AfterInitializationEventHandler } from './AfterInitializationEventHandler';

export { FooDataSource, FooRestEndpointHandler, AfterInitializationEventHandler };
```

</TabItem>
<TabItem value="JavaScript">

```js
const { FooDataSource } = require('./FooDataSource);
const { FooRestEndpointHandler } = require('./FooRestEndpointHandler');
const { AfterInitializationEventHandler } = require('./AfterInitializationEventHandler');

module.exports = {
  FooDataSource,
  FooRestEndpointHandler,
  AfterInitializationEventHandler,
};

```

</TabItem>
</Tabs>

## Extending Module

### Extending existing module with manual binding example

<Tabs defaultValue="ts" values={[ { label: 'TypeScript', value: 'ts' }, { label: 'JavaScript', value: 'js' } ]}>
<TabItem value="ts">

```ts
import { injectable } from 'inversify';
import {
  CommerceToolsModule: FalconCommerceToolsModule,
  CommercetoolsDataSource: FalconCommercetoolsDataSource
} from `@deity/falcon-commercetools-module`;

@injectable()
class CommercetoolsDataSource extends FalconCommercetoolsDataSource {
  project(...args){
    console.log('Fetching project');

    return super.project(...args);
  }
}

export class CommerceToolsModule extends CommerceToolsModule {
  servicesRegistry(registry) {
    super.servicesRegistry(registry);

    rebind('CommercetoolsDataSource').toDataSource(CommercetoolsDataSource);
  }

  gqlResolvers() {
    return this.mergeGqlResolvers(super.gqlResolvers(), {
      Project: {
        name: (root, params, context, info) => {
          return root.name.toUpperCase()
        }
      }
    });
  }
}
```

</TabItem>
<TabItem value="js">

```js
const { decorate, injectable } from 'inversify';
const {
  CommerceToolsModule: FalconCommerceToolsModule,
  CommercetoolsDataSource: FalconCommercetoolsDataSource
} = require(`@deity/falcon-commercetools-module`);

class CommercetoolsDataSource extends FalconCommercetoolsDataSource {
  project(...args){
    console.log('Fetching project');

    return super.project(...args);
  }
}
decorate(injectable(), CommercetoolsDataSource);


export class CommerceToolsModule extends CommerceToolsModule {
  servicesRegistry(registry) {
    super.servicesRegistry(registry);

    rebind('CommercetoolsDataSource').toDataSource(CommercetoolsDataSource);
  }

  gqlResolvers() {
    return this.mergeGqlResolvers(super.gqlResolvers(), {
      Project: {
        name: (root, params, context, info) => {
          return root.name.toUpperCase()
        }
      }
    });
  }
}
```

</TabItem>
</Tabs>

### Module common services auto-discovery

[As mentioned earlier](#what-is-a-module-in-falcon) Falcon Server 3 modules can expose multiple things at once.

The easiest way to extend Falcon Server with custom module is to extend the classes provided by Falcon Server and export these from a module. During startup Falcon Server will read everything from within that module and base on the types of exported things it will register these as proper things in IOC container.

## Using Service Registry bindings

Falcon Module services registry is powerful tool when it comes into code organization. As described in introduction to [Falcon Module API](module-api) it lets you extract any kind of dependency and also have access to dependencies defined via FalconServer itself.

In order to use any of registered dependency you need to resolve them via constructor argument injection using `@inject()` decorator.

<Tabs>
<TabItem value="TypeScript" default>

```ts
import { injectable, inject } from 'inversify';
import { FalconModule, FalconModuleRegistryProps, DataSource } from '@deity/falcon-server-env';

@injectable()
class FooMapper {
  mapFoo(foo) {
    return foo; // perform some mapping
  }
}

@injectable()
class FooDataSource extends DataSource {
  constructor(@inject('fetch') protected fetch, @inject('FooMapper') protected mapper: FooMapper) {}

  async getFooById(id: string) {
    const response = await this.fetch(`https://foo.com/api/foo/${id}`);

    return this.mapper.mapFoo(response);
  }
}

export class FooModule extends FalconModule {
  servicesRegistry(registry: FalconModuleRegistryProps) {
    super.servicesRegistry(registry);

    registry.bind('FooDataSource').toDataSource(FooDataSource);
    registry.bind('FooMapper').to(FooMapper);
  }
}
```

</TabItem>
<TabItem value="JavaScript">

```js
 TODO:
// const { injectable, decorate } = require('inversify');
// const { FalconModule, DataSource } = require('@deity/falcon-server-env');

// class FooDataSource extends DataSource {}
// decorate(injectable(), FooDataSource);

// module.exports.CustomModule = class CustomModule extends FalconModule {
//   servicesRegistry(registry) {
//     super.servicesRegistry(registry);

//     registry.bind('FooDataSource').toDataSource(FooDataSource);
//   }
// };
```

</TabItem>
</Tabs>

To see more advanced examples please see [Custom Modules](./custom-module) section.

To see full list of services provided by default via Falcon Server please see [Falcon Server services](./injectable-services) section.

### Cross Modules services access

## Falcon Server injectable services

### Fetch

### Logger

### Config

### Container

### Event Emitter
