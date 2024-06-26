---
id: module-api
title: Module API
sidebar_label: Module API
enterprise_only: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import NoticeV3 from "../../includes/upgrade-to-v3.mdx"



As mentioned [here](./about#what-is-a-module-in-falcon) Falcon Module packs implementation of various things that are required to achieve a particular feature in Falcon Server.
Its powerful api allows to:

- manage large code base
- makes your code base testable
- control the way your classes are instantiated
- control lifetime of your instances
- modify GraphQL context to include additional data you want to use in GraphQL resolvers
- create DataSource for GraphQL that does not extend data sources provided by Falcon
- and many more

To use all above Falcon Module features, your module main file needs to export class derived from `FalconModule` abstract class. To se how to create new Falcon Module see [custom module](./custom-module) section. Here is an Module abstract class definition:

```ts
abstract class FalconModule<TModuleConfig> {
  protected config: TModuleConfig;

  constructor(config: TModuleConfig = {}) {
    this.config = config;
  }

  public servicesRegistry(registry: FalconModuleRegistryProps): void {}

  public gqlResolvers<TGqlResolverContext>(): GqlResolversMap<TGqlResolverContext> {
    return {};
  }

  protected mergeGqlResolvers<TGraphQLContext>(
    resolversMapA: GqlResolversMap<TGraphQLContext>,
    resolversMapB: GqlResolversMap<TGraphQLContext>
  ): GqlResolversMap<TGraphQLContext> {
    return deepMerge(resolversMapA, resolversMapB);
  }
}
```

Here is an list of all methods and poperies of `FalconModule` abstract class:

- `constructor(config: TConfig)` - As you can see constructor of FalconModule accepts configuration object. It will be provided via Falcon Server when Module will be loaded. So you are able to configure your Module initialization.

- `config: TConfig` - `protected` property which give yo an access to configuration extracted during module loading and injected via Module constructor.

- `servicesRegistry(registry: FalconModuleRegistryProps): void` - through this method you are able to register all dependencies which are used by module, to learn how to bind new or rebind existing one, learn more in [Services registry](#services-registry) section. To learn why you need this, see [Dependency Injection](#dependency-injection).

- `gqlResolvers(): GqlResolversMap` - through this method you are able to define all GraphQL resolvers, to learn how to define new or override existing one [GraphQL resolvers](#graphql-resolvers-map) section.

- `mergeGqlResolvers(resolversMapA, resolversMapB): GqlResolversMap` - `protected` method which allows you to merge two GraphQL resolvers object maps into one.

## `servicesRegistry`

Through this function you are able to register all services (dependencies) into container registry. Exposed api allows you to control not only the way in which any particular service should be created, but also the lifetime of that instances. Service (dependency) stands for:

- FalconModule extension class: `DataSource`, `EventHandler` or `EndpointManager`
- custom written `class`, `function` or `const` which are used inside particular module and/or should be visible for FalconServer host application.
- FalconServer host instances, like `fetch`, `Logger`, `HttpSession`, [see](./injectable-services) full list of them

`servicesRegistry` method, through its argument, provide and set of method which should be used in order to manage all your module dependencies. We are using [inversify](https://inversify.io/) under the hood, however api which we are exposing is slights changed.

```ts
type FalconModuleRegistryProps = {
  bind: (serviceIdentifier: ServiceIdentifier) => FalconModuleBindingSyntax;
  rebind: (serviceIdentifier: ServiceIdentifier) => FalconModuleBindingSyntax;
  unbind: (serviceIdentifier: ServiceIdentifier) => void;
  isBound: (serviceIdentifier: ServiceIdentifier) => boolean;
};
```

- `bind` - a function which allows you to add new service implementation into the container registry for a particular service identifier
- `rebind` - a function which allows you to replace underlining service implementation in container registry for a particular service identifier if that one was already added into container registry.
- `unbind` - a function which allows you to remove service implementation from the container registry assigned to a particular service identifier.
- `isBound` - a function which allows you to determine if the container registry contains already any service implementation for a particular service identifier.

To learn more about Inversion of Control pattern and Dependency Injection works, please see [Dependency Injection](#dependency-injection)

### Binding services

In order to bind a new service, you need to use `bind` method:

```ts
registry.bind('Foo').to(Foo);
```

<Tabs>
<TabItem value="TypeScript" default>

```ts
import { injectable } from 'inversify';
import { FalconModule, FalconModuleRegistryProps } from '@deity/falcon-server-env';

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

Above example will bind `'Foo'` to the `Foo` class constructor, and the container will care about proper `Foo` class object creation. If you are interested in more customization please look into [`inversify` documentation](https://github.com/inversify/InversifyJS/tree/master/wiki)

Since Data Sources, Rest Endpoint Handlers,and Event Handlers are Falcon Middleware common services, those require special treatment. You cannot for example control those instances lifetime. Because of that, we introduced dedicated method to manage their registrations

#### Binding Data Sources

In order to bind Data Source you need to use `toDataSource` or `toDataSourceDynamicValue` binding syntax methods.

```ts
registry.bind('FooDataSource').toDataSource(FooDataSource);
registry.bind('FooDataSource').toDataSourceDynamicValue(() => new FooDataSource('foo'));
```

- `toDataSource` - expect class constructor, is useful if DataSource has parameter-less constructor or all its arguments are marked via `@inject()` decorator - which means all of its arguments can be resolved dynamically via dependency container.
- `toDataSourceDynamicValue` - expect an instance of the class so you need to pass a function which will create one, is useful if DataSource has arguments which cannot or you don't want to be resolved dynamically via dependency container.

To learn more about DataSources in Falcon Server please [see](./common-services/data-sources)

#### Binding Rest Endpoint Manager

In order to bind Rest Endpoint Manager you need to use `toEndpointManager` or `toEndpointManagerDynamicValue` binding syntax methods.

```ts
registry.bind('FooEndpointManager').toEndpointManager(FooEndpointManager);
registry.bind('FooEndpointManager').toEndpointManagerDynamicValue(() => new FooEndpointManager());
```

To learn more about Rest Endpoint Managers in Falcon Server please [see](./common-services/rest-endpoints)

#### Binding Event Handlers

In order to bind Event Handler you need to use `toEventHandler` or `toEventHandlerDynamicValue` binding syntax methods.

```ts
registry.bind('FooEventHandler').toEventHandler(FooEventHandler);
registry.bind('FooEventHandler').toEventHandlerDynamicValue(() => new FooEventHandler());
```

To learn more about Event Handlers in Falcon Server please [see](./common-services/event-handlers)

### Rebinding services

In order to rebind new service, you need to use `rebind` method:

```ts
registry.rebind('Foo').to(Foo);
```

<Tabs>
<TabItem value="TypeScript" default>

```ts
import { injectable } from 'inversify';
import { FalconModuleRegistryProps } from '@deity/falcon-server-env';
import { FooModule: FooModuleBase, Foo: FooBase } from 'foo-module'

@injectable()
class Foo extends FooBase {}

export class FooModule extends FooModuleBase {
  servicesRegistry(registry: FalconModuleRegistryProps) {
    super.servicesRegistry(registry);

    registry.rebind('Foo').to(Foo);
  }
}
```

</TabItem>
<TabItem value="JavaScript">

```js
const { injectable, decorate } = require('inversify');
const { FalconModule } = require('@deity/falcon-server-env');
const { FooModule: FooModuleBase, Foo: FooBase } = require('foo-module');

class Foo extends FooBase {}
decorate(injectable(), Foo);

module.exports.FooModule = class FooModule extends FalconModuleBase {
  servicesRegistry(registry) {
    super.servicesRegistry(registry);

    registry.rebind('Foo').to(Foo);
  }
};
```

</TabItem>
</Tabs>

Binding syntax returned from `rebind` method is exactly the same as for `bind`, which means if you want to rebind e.g. Data Source implementation you should use corresponding to `bind` method syntax:

```ts
registry.rebind('FooDataSource').toDataSource(ExtendedDataSource);
```

## `gqlResolvers`

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

For more information about GraphQL resolver API please see [graphql.org](https://graphql.org/learn/execution/#root-fields-resolvers) or [apollo-server](https://www.apollographql.com/docs/apollo-server/data/resolvers/) documentation.

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
  koa: KoaContext;;
  container: IContainer;
};
```

where:

- `scope` - an object key-value map of Extension name and Extension Scope Id 
- `dataSources` - an object key-value map of DataSource name and its instance, [see the details](#context-datasources-map)
- `cache` - give you direct access to cache.
- `session` - http session cookie, which is an object key-value map of Extension name, and actual session value.
- `headers`- request header object.
- `koa` - a [koa](https://koajs.com/) Context which encapsulates node's `request` and `response` objects into a single object.
- `container` - gives you access to IoC container.

#### Context DataSources map

To read more about DataSources see [DataSources](./common-services/data-sources) section;

---

## Dependency Injection

To allow all above, Falcon Module introducing support of [Inversion of Control](https://en.wikipedia.org/wiki/Inversion_of_control). It is possible due to usage of `inversify` under the hood as an Dependency Injection framework. If you are not familiar with `inversify` nor Inversion of Control pattern, please look here: (new section needed <!-- [TODO - good reference required](./TODO) --> )

_**TODO: prepare some good introduction of this topic:**_

- https://indepth.dev/posts/1049/why-do-we-have-dependency-injection-in-web-development
- https://viktor-kukurba.medium.com/dependency-injection-and-inversion-of-control-in-javascript-303e07e7f43f
- https://bulldogjob.pl/articles/1099-od-kodu-spaghetti-do-kontenerow-ioc-w-javascript-i-typescript
- https://blog.angular-university.io/angular-dependency-injection/
- https://stackoverflow.com/questions/6550700/inversion-of-control-vs-dependency-injection
- https://medium.com/@mena.meseha/dependency-injection-complete-guide-14b5ee4e47eb

<!--

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
``` -->

## Module with common services auto-discovery

With auto-discovery feature, you can just export classes which extends Falcon Common Services:

- [Data Sources](./common-services/data-sources)
- [Event Handlers](./common-services/event-handlers)
- [Rest Endpoint Handlers](./common-services/rest-endpoints)

Then Falcon Server will do the required services registration by himself during startup.

However, as you may suspect, common services auto-discovery doesn't cover all the possible things you can do in FalconServer. This mechanism was especially created to implement basic scenarios, and also to make migration from Falcon Platform v2 into v3 easier. It will work until you do not want to create any custom service. To learn more how to create that kind of Falcon Module please see [custom module](./custom-module#creating-new-module-with-services-auto-discovery)
