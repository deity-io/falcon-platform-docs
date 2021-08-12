---
id: module-api
title: Falcon Module API
sidebar_label: Falcon Module API
enterprise_only: true
---
 
As mentioned [here](./about#what-is-a-module-in-falcon) Falcon Module packs implementation of various things that are required to achieve a particular feature in Falcon Server.

With auto-discovery feature you can just export classes that extend interfaces and classes delivered by Falcon and Falcon Server will bind these correctly during startup.

However, auto-discovery doesn't cover all the possible things you can do in FalconServer, as you might want to:
- control the way your classes are instantiated 
- control lifetime of your instances
- modify GraphQL context to include additional data you want to use in GraphQL resolvers
- create DataSource for GraphQL that does not extend data sources provided by Falcon
- and many more

For that purpose you can use Falcon Module that exposes helpers that allows you to bind classes for particular features.

## Exposed API

To use falcon module you need to return instance of it from your main module file. Constructor of FalconModule accepts configuration object as first parameter which should contain property `serviceRegistry` which is a callback.

That callback will be passed with `bind` function which allows for binding and scope control as [InversifyJS](https://github.com/inversify/InversifyJS/blob/master/wiki/scope.md) does plus exposes additional methods for registration of the following Falcon Server specific types:

- [DataSources](../data-sources):
  - `bind('name').toDataSource(Constructor)`
  - `bind('name').toDataSourceDynamicValue(function)`

- [Rest Endpoint Handlers](../rest-endpoints):
  - `bind('name').toEndpointManager(Constructor)`
  - `bind('name').toEndpointManagerDynamicValue(function)`

- [Event Handlers](../event-handlers):
  - `bind('name').toEventHandler(Constructor)`
  - `bind('name').toEventHandlerDynamicValue(function)`

## Example

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