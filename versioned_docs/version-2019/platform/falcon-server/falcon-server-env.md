---
title: DEITY Middleware Env
---

This package delivers base classes and helpers for ApiDataSources and Extensions.

- [API reference](../falcon-server/falcon-server-api)

## Installation

<!--DOCUSAURUS_CODE_TABS-->
<!--npm-->

```bash
npm install @deity/falcon-server-env
```

<!--Yarn-->

```bash
yarn add @deity/falcon-server-env
```

<!--END_DOCUSAURUS_CODE_TABS-->

## Usage

To define your own extension (high-level data provider) - you would need to create a new package and export its main class:

```javascript
// package.json - "name": "my-custom-falcon-extension" (it will be used in the config below)
const { Extension } = require('@deity/falcon-server-env');

module.exports = class CustomExtension extends Extension {
  async getGraphQLConfig() {
    return {
      schema: [`
        extend type Query {
          customQuery(name: String): CustomResult
        }

        type CustomResult {
          foo: String
        }
      `],
      resolvers: {
        Query: {
          customQuery: (...params) => this.api.customQuery(...params)
        }
      }
    };
  }
}
```

> Check [Extension API reference](../falcon-server/falcon-server-api) for more methods.

To define your own API class (low-level data provider) - you would need to create a new package and export its main class:

```javascript
// package.json - "name": "my-custom-falcon-api" (it will be used in the config below)
const { ApiDataSource } = require('@deity/falcon-server-env');

module.exports = class CustomApi extends ApiDataSource {
  async customQuery(obj, params, context, info) {
    // perform any "params" transformation if need
    // let's assume it will be set to { "name": "foo" }
    const queryParams = params;
    // GET request will be sent to https://example.com/custom-api-endpoint?name=foo
    // this endpoint has to return { "foo": "some string" } type result
    return this.get('custom-api-endpoint', queryParams);
  }
}
```

Then in your project's config (`server` app) - you need to declare them and assign your API to your Extension:

```json
{
  "apis": {
    "my-custom-api": {
      "package": "my-custom-falcon-api",
      "config": {
        "host": "example.com",
        "protocol": "https"
      }
    }
  },
  "extensions": {
    "custom": {
      "package": "my-custom-falcon-extension",
      "config": {
        "api": "my-custom-api"
      }
    }
  }
}
```

## Events

`falcon-server-env` package provides a list of events, that are being handled by Falcon-Server app
during the whole runtime.

In order to use events - Falcon-Server exposes `eventEmitter` property
(instantiated from [`eventemitter2`](https://www.npmjs.com/package/eventemitter2)) and passes it
to the following classes (and derived from these classes):

- `ApiDataSource` and `ApiContainer`
- `Extension` and `ExtensionContainer`
- `EndpointManager` and `EndpointContainer`

To use the events within your class - you would need to import `Events` object and use it like:

```javascript
const { Events } = require('@deity/falcon-server-env');

class MyExt extends Extension {
  constructor(params) {
    super(params);
    this.eventEmitter.on(Events.BEFORE_ENDPOINTS_REGISTERED, () => {
      // do something
    });
  }
}
```

Async event handlers are supported!

> To check the order of the events - you should set `verboseEvents` config key to `true`
