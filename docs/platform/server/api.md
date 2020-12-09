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

Below you an find full example of how to register new ApiDatasource programmatically:

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


You can read more about using inverify js on its [wiki pages](https://github.com/inversify/InversifyJS/tree/master/wiki#wiki)

