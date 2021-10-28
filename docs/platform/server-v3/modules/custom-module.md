---
id: custom-module
title: Custom Modules
sidebar_label: Custom Modules
enterprise_only: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

All the integrations available in Falcon Platform are implemented as extensions + modules. When you want to add new features or change the existing behavior you'll need to add [Extension](../extensions/about) and module that implements features for that Extension.

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
