---
id: custom-module
title: Custom Modules
sidebar_label: Custom Modules
enterprise_only: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Most of the integrations available in Falcon Platform are implemented as extensions + modules. When you want to add new features or change the existing behavior you'll need to add [Extension](../extensions/about) and module that implements features for that Extension.

Modules can be registered in 2 ways - with [auto-discovery mechanism](#module-auto-discovery) or [manually](#manual-binding-for-module).

## Manual binding for module

When you need to add a custom behavior to Falcon Server which is more complex or when you need to control lifetime of the instances of your modules you might want to implement the module in a manual way.

In that case you need to implement all the classes as usual and then use [Falcon Module](./module-api) to register these classes to be loaded and instantiated in a particular way.

#### Creating new module with manual binding example

<Tabs values={[ { label: 'TypeScript', value: 'ts' }, { label: 'JavaScript', value: 'js' } ]}>
<TabItem value="ts">

```ts
import { injectable } from 'inversify';
import { FalconModule, DataSource } from '@deity/falcon-server-env';

@injectable()
class ShopDataSource extends DataSource {
  constructor() {
    super('shop');
  }

  getProductById(id: Id){
    console.log('Fetching project');

    return {
      id
      name: `product ${id}`,
    }
  }
}

export class ShopModule extends FalconModule {
  servicesRegistry(registry) {
    super.servicesRegistry(registry);

    bind('ShopDataSource').toDataSource(ShopDataSource);
  }

  gqlResolvers() {
    return this.mergeGqlResolvers(super.gqlResolvers(), {
      Query:{
        product: (root, args, context, info) => {
          return context.dataSources.shop.getProductById(args.id);
        }
      }
    });
  }
}
```

</TabItem>
<TabItem value="js">

```js

```

</TabItem>
</Tabs>

#### Extending existing module with manual binding example

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

## Module auto-discovery

[As mentioned earlier](#what-is-a-module-in-falcon) Falcon Server 3 modules can expose multiple things at once.

The easiest way to extend Falcon Server with custom module is to extend the classes provided by Falcon Server and export these from a module. During startup Falcon Server will read everything from within that module and base on the types of exported things it will register these as proper things in IOC container.

#### New module example

here is an example of an the most basic way of defining new module

<Tabs defaultValue="ts" values={[ { label: 'TypeScript', value: 'ts' }, { label: 'JavaScript', value: 'js' } ]}>
<TabItem value="ts">

```ts

```

</TabItem>
<TabItem value="js">

```js

```

</TabItem>
</Tabs>

See examples of [Data Sources](./data-sources), [Event Handlers](./event-handlers), and [Rest Endpoint Handlers](./rest-endpoints) for the details.

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

To see full list of services provides by default via Falcon Scope please see [Falcon Server services](./falcon-server-services) section.

### Cross module services access

## Falcon Server injectable services

### Fetch

### Logger

### Config

### Container

### Event Emitter
