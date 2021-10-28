---
id: module-api
title: Falcon Module API
sidebar_label: Falcon Module API
enterprise_only: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

As mentioned [here](./about#what-is-a-module-in-falcon) Falcon Module packs implementation of various things that are required to achieve a particular feature in Falcon Server.

With auto-discovery feature you can just export classes that extend interfaces and classes delivered by Falcon and Falcon Server will bind these correctly during startup.

However, auto-discovery doesn't cover all the possible things you can do in FalconServer, as you might want to:

- manage large code base
- makes your code base testable
- control the way your classes are instantiated
- control lifetime of your instances
- modify GraphQL context to include additional data you want to use in GraphQL resolvers
- create DataSource for GraphQL that does not extend data sources provided by Falcon
- and many more

For that purpose you can use Falcon Module that exposes helpers that allows you to bind classes for particular features.

To use Falcon Module features, your module main file needs to export class derived from `FalconModule` abstract class. Here is an empty Module definition:

<Tabs>
<TabItem value="TypeScript" default>

```ts
import { FalconModule } from '@deity/falcon-server-env';

type CustomModuleConfig = {
  //
};

export class CustomModule extends FalconModule<CustomModuleConfig> {
  constructor(config: CustomModuleConfig) {
    super(config);
  }

  servicesRegistry(registry: FalconModuleRegistryProps) {
    super.servicesRegistry(registry);
  }

  gqlResolvers() {
    const resolversMap = {};

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

  servicesRegistry(registry) {
    super.servicesRegistry(registry);
  }

  gqlResolvers() {
    const resolversMap = {};

    return this.mergeGqlResolvers(super.gqlResolvers(), resolversMap);
  }
};
```

</TabItem>
</Tabs>

Here is an list of all methods and poperies of FalconModule:

- `constructor(config: TConfig)` - As you can see constructor of FalconModule accepts configuration object. It will be provided via Falcon Server when Module will be loaded. So you are able to configure your Module initialization.

- `config: TConfig` - `protected` property which give yo an access to configuration extracted during module loading and injected via Module constructor.

- `servicesRegistry(registry: FalconModuleRegistryProps): void` - through this method you are able to register all dependencies which are used by module, to lear how to bind new or rebind existing one, learn more in [Services registry](#services-registry) section. To learn why you need this, see [Dependency Injection](#dependency-injection).

- `gqlResolvers(): GqlResolversMap` - through this method you are able to define all GraphQL resolvers, to lear how to define new or override existing one [GraphQl resolvers](#graphql-resolvers-map) section.

- `mergeGqlResolvers(resolversMapA, resolversMapB): GqlResolversMap` - `protected` method which allows you to merge two GraphQL resolvers object maps into one.

## Services registry

Through this function you are able to register all services (dependencies) into container registry. Exposed api allows you to control not only the way in which any particular service should be created, but also the lifetime of that instances. Service (dependency) stands for:

- FalconModule extension class: `DataSource`, `EventHandler` or `EndpointManager`
- custom written `class`, `function` or `const` which are used inside particular module and/or should be visible for FalconServer host application.

`servicesRegistry` method, through its argument, provide and set of method which should be used in order to manage all your module dependencies. We are using [inversify](https://inversify.io/) under the hood, however api which we are exposing is slights changed.

```ts
type FalconModuleRegistryProps = {
  bind: (serviceIdentifier: ServiceIdentifier) => FalconModuleBindingSyntax;
  rebind: (serviceIdentifier: ServiceIdentifier) => FalconModuleBindingSyntax;
  unbind: (serviceIdentifier: ServiceIdentifier) => void;
  isBound: (serviceIdentifier: ServiceIdentifier) => boolean;
};
```

- `bind` - an function which allows you to add new service implementation into container registry for particular service identifier
- `rebind` - an function which allows you to replace underlining service implementation in container registry for particular service identifier, if that one was already added into container registry.
- `unbind` - an function which allows you to remove service implementation from container registry assigned to particular service identifier.
- `isBound` - an function which allows you to determine if container registry contain already any service implementation for particular service identifier.

To lear more about Inversion of Control pattern and Dependency Injection works, please see [Dependency Injection](#dependency-injection)

### Binding services

In order to bin new service, you need to use `bind` method:

```ts
registry.bind('Foo').to(Foo);
```

<Tabs>
<TabItem value="TypeScript" default>

```ts
import { FalconModule, FalconModuleRegistryProps } from '@deity/falcon-server-env';
import { injectable } from 'inversify';

@injectable()
class Foo {}

export class FooModule extends FalconModule {
  servicesRegistry(registry: FalconModuleRegistryProps) {
    super.servicesRegistry(registry);

    registry.bind('Foo').to(Foo);
  }
}
```

</TabItem>
<TabItem value="JavaScript">

```js
const { injectable, decorate } = require('inversify');
const { FalconModule } = require('@deity/falcon-server-env');

class Foo {}
decorate(injectable(), Foo);

module.exports.FooModule = class FooModule extends FalconModule {
  servicesRegistry(registry) {
    super.servicesRegistry(registry);

    registry.bind('Foo').to(Foo);
  }
};
```

</TabItem>
</Tabs>

Above example will bind `'Foo'` to `Foo` class constructor, and the container will care about proper `Foo` class object creation. If you are interested in about more customization please look into [`inversify` documentation](https://github.com/inversify/InversifyJS/tree/master/wiki)

Since Data Sources, Rest Endpoint Handlers,and Event Handlers are Falcon Middleware basic extension points, those require special treatment. You can not for example control those instances lifetime. Because of that, we introduced dedicated method to manage their registrations

#### Binding Data Sources

In order to bind [Data Source](./data-sources): you need to use `toDataSource` binding syntax method:

```ts
registry.bind('FooDataSource').toDataSource(FooDataSource);
```

<Tabs>
<TabItem value="TypeScript" default>

```ts
import { injectable } from 'inversify';
import { FalconModule, FalconModuleRegistryProps, DataSource } from '@deity/falcon-server-env';

@injectable()
class FooDataSource extends DataSource {}

export class FooModule extends FalconModule {
  servicesRegistry(registry: FalconModuleRegistryProps) {
    super.servicesRegistry(registry);

    registry.bind('FooDataSource').toDataSource(FooDataSource);
  }
}
```

</TabItem>
<TabItem value="JavaScript">

```js
const { injectable, decorate } = require('inversify');
const { FalconModule, DataSource } = require('@deity/falcon-server-env');

class FooDataSource extends DataSource {}
decorate(injectable(), FooDataSource);

module.exports.CustomModule = class CustomModule extends FalconModule {
  servicesRegistry(registry) {
    super.servicesRegistry(registry);

    registry.bind('FooDataSource').toDataSource(FooDataSource);
  }
};
```

</TabItem>
</Tabs>

#### Binding Rest Endpoint Handlers

In order to bind [Rest Endpoint Handlers](./rest-endpoints) you need to use `toEndpointManager` binding syntax method:

```ts
registry.bind('FooEndpointManager').toEndpointManager(FooEndpointManager);
```

<Tabs>
<TabItem value="TypeScript" default>

```ts
import { injectable } from 'inversify';
import { FalconModule, FalconModuleRegistryProps, EndpointManager } from '@deity/falcon-server-env';

@injectable()
class FooEndpointManager extends EndpointManager {}

export class FooModule extends FalconModule {
  servicesRegistry(registry: FalconModuleRegistryProps) {
    super.servicesRegistry(registry);

    registry.bind('FooEndpointManager').toEndpointManager(FooEndpointManager);
  }
}
```

</TabItem>
<TabItem value="JavaScript">

```js
const { injectable, decorate } = require('inversify');
const { FalconModule, EndpointManager } = require('@deity/falcon-server-env');

class FooEndpointManager extends DataSource {}
decorate(injectable(), FooEndpointManager);

module.exports.CustomModule = class CustomModule extends FalconModule {
  servicesRegistry(registry) {
    super.servicesRegistry(registry);

    registry.bind('FooEndpointManager').toEndpointManager(FooEndpointManager);
  }
};
```

</TabItem>
</Tabs>

#### Binding Event Handlers

In order to bind [Event Handlers](./event-handlers) you need to use `toEndpointManager` binding syntax method:

```ts
registry.bind('FooEndpointManager').toEndpointManager(FooEndpointManager);
```

<Tabs>
<TabItem value="TypeScript" default>

```ts
import { injectable } from 'inversify';
import { FalconModule, FalconModuleRegistryProps, EndpointManager } from '@deity/falcon-server-env';

@injectable()
class FooEventHandler extends EndpointManager {}

export class FooModule extends FalconModule {
  servicesRegistry(registry: FalconModuleRegistryProps) {
    super.servicesRegistry(registry);

    registry.bind('FooEventHandler').toEventHandler(FooEventHandler);
  }
}
```

</TabItem>
<TabItem value="JavaScript">

```js
const { injectable, decorate } = require('inversify');
const { FalconModule, EndpointManager } = require('@deity/falcon-server-env');

class FooEventHandler extends EndpointManager {}
decorate(injectable(), FooEventHandler);

module.exports.CustomModule = class CustomModule extends FalconModule {
  servicesRegistry(registry) {
    super.servicesRegistry(registry);

    registry.bind('FooEventHandler').toEventHandler(FooEventHandler);
  }
};
```

</TabItem>
</Tabs>

### Rebinding services

TODO:

That callback will be passed with `bind` function which allows for binding and scope control as [InversifyJS](https://github.com/inversify/InversifyJS/blob/master/wiki/scope.md) does plus exposes additional methods for registration of the following Falcon Server specific types:

### Using Service Registry bindings

TODO:

### Dependency Injection

To allow all above, Falcon Module introducing support of [Inversion of Control](https://en.wikipedia.org/wiki/Inversion_of_control). It is possible due to usage of `inversify` under the hood as an Dependency Injection framework. If you are not not familiar with `inversify` nor Inversion of Control please look here

TODO: prepare some good introduction of this topic:

- https://indepth.dev/posts/1049/why-do-we-have-dependency-injection-in-web-development
- https://viktor-kukurba.medium.com/dependency-injection-and-inversion-of-control-in-javascript-303e07e7f43f
- https://bulldogjob.pl/articles/1099-od-kodu-spaghetti-do-kontenerow-ioc-w-javascript-i-typescript
- https://blog.angular-university.io/angular-dependency-injection/
- https://stackoverflow.com/questions/6550700/inversion-of-control-vs-dependency-injection
- https://medium.com/@mena.meseha/dependency-injection-complete-guide-14b5ee4e47eb

## GraphQl resolvers map

Basically, the resolvers map is a tree of objects, where object keys are mapped to Queries and Mutations defined in GQL schema file, while values of that keys are functions (resolvers) which define a way how the value of specific filed should be calculated.

Single resolver function can be described in following way:

```ts
(source: TSource, args: TArgs, context: TContext, info: GraphQLResolveInfo) => TReturn;
```

where:

- `source` - is an value returned from parent resolver, in case when one resolver is called by another
- `args` - is an object with all arguments provided to Query or Mutation
- `context` - provides resolver execution context, like http request context, http session, data sources map, [read more](#graphql-resolver-context)
- `info` - provides graphQL specific metadata about executed resolver, [read more](https://graphql.org/graphql-js/type/#graphqlobjecttype)

For more information about GraphQl resolver API please see [graphql.org](https://graphql.org/learn/execution/#root-fields-resolvers) or [apollo-server](https://www.apollographql.com/docs/apollo-server/data/resolvers/) documentation.

### GraphQL resolver Context

GraphQL Resolver third argument - is provided to every resolver and holds important contextual information, like http request context, http session, data sources map. To learn more about `context` see [apollo-server](https://www.apollographql.com/docs/apollo-server/data/resolvers/#the-context-argument) documentation.

However Falcon Server, provides couple of cool things through it. It can be described by following type:

```ts
type GraphQLContext<TDataSources extends DataSourcesMap = DataSourcesMap> = {
  scope: Record<string, string>;
  dataSources: TDataSources;
  cache: ICache;
  session?: Record<string, any>;
  headers: Record<string, string>;
  koa: KoaContext;
};
```

where:

- `scope` - an object key-value map of Extension name and Extension scope id [see the details](#TODO:)
- `dataSources` - an object key-value map of DataSource name and its instance, [see the details](#context-datasources-map)
- `cache` - give you direct access to cache.
- `session` - http session cookie, which is an object key-value map of Extension name, and actual session value.
- `headers`- request header object.
- `koa` - a [koa](https://koajs.com/) Context which encapsulates node's `request` and `response` objects into a single object.

#### Context DataSources map

To read more about DataSources see [DataSources](./data-sources) section;

## Example

### Defining new Falcon Module

Assuming that you have the following structure of the module:

```

|- custom-module
|- index.js
|- src
|- custom-data-source.js
|- custom-rest-route.js
|- custom-event-handler.js
|- custom-external-service-client.js

```

the code snippet below shows the content of `custom-module/index.js` that implements custom module:

```ts
const { FalconModule } = require('@deity/falcon-server-env');
const { CustomDataSource } = require('./custom-data-source');
const { CustomRestRoute } = require('./custom-rest-route');
const { CustomEventHandler } = require('./custom-event-handler');
const { CustomExternalServiceClient } = require('./custom-external-service-client');

module.exports = new FalconModule({
  servicesRegistry: ({ bind }) => {
    // by default these will be instantiated for each request:
    bind('CustomDataSource').toDataSource(CustomDataSource);
    bind('CustomRestRoute').toEndpointManager(CustomRestRoute);
    bind('CustomEventHandler').toEventHandler(CustomEventHandler);

    // this one will be instantiated once (as it's bound as singleton), as we want to have one instance
    // of external api client shared by the module
    bind('CustomExternalServiceClient').to(CustomExternalServiceClient).inSingletonScope();

    // also you can bind anything that can be bound with InversifyJS and then inject it later in the code
  }
});
```
