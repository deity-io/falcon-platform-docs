---
title: Falcon Server API
---

> This section provides an API description for both packages - `@deity/falcon-server`
> and `@deity/falcon-server-env`

## Dependency Inversion

In order to bring more flexibility in dependencies instance lifetime management, Falcon Server internally implements Dependency Inversion pattern via [Iversify JS](http://inversify.io/) framework.
It means that Falcon Server internals, including extension components (Api DataSources, Extensions end Endpoints) are registered in Inversify container. Even they are setted up via configuration files.

In order to override existing or register new dependency in Falcon Server you need to override `configure` method of Falcon Server:

```javascript
class FalconServerExtended extends FalconServer {
  async initialize() {
    await super.initialize();

    const container = this.container; // inversifyJS container instance
  }
}
```

Below you can find full example of how to register new ApiDatasource programmatically:

```javascript
class TestDataSource extends ApiDataSource {
  constructor(...params) {
    super(...params);
  }
}

class FalconServerExtended extends FalconServer {
  async initialize() {
    await super.initialize();

    const apiContainer = this.container.get("ApiContainer");
    apiContainer.register("Test", TestDataSource);
  }
}
```


You can read more about using inverifyJS on its [wiki pages](https://github.com/inversify/InversifyJS/tree/master/wiki#wiki)


## ApiContainer

The main purpose of `ApiContainer` is to register all provided APIs from the configuration.

#### `new ApiContainer(container: Container, eventEmitter: EventEmitter2)`

The constructor expects to receive an instance inversify Container and EventEmitter. It is done automatically as it is registered in inversify container.

#### `register(name: string, implementation: ApiDataSourceType): string`

This method allows to register DataSource class. It expects service name (postfix `DataSource` will be added automatically) and its implementation. As a result full service name will be returned.

#### `register(name: string, binding: ApiDataSourceBinding, extraResolvers?: ApiDataSourceExtraResolvers): string`

This method allows to register custom DataSource factory. It expects service name (postfix `DataSource` will be added automatically), DataSource factory implementation, and extra resolvers map associated with DataSource. As a result full service name will be returned

#### `apiContainer.registerFromConfig(apiMap: ApiDataSourceConfigurationMap)`

This method registers the provided APIs
([`ApiInstanceConfig`](#apiinstanceconfig-type)) into inverifyJS container.

#### `ApiInstanceConfig` type

- `package: string` - Node package path (example: `@deity/falcon-wordpress-api`)
- `config: object` - Config object to be passed to Api Instance constructor

