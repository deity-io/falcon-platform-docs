---
id: configuration
title: Configuration in DEITY Middleware
sidebar_label: Configuration
enterprise_only: true
---

DEITY PWA Frontend and DEITY Middleware configs work in the same way. You can find the general description of the configuration options [here](../general-concepts/configuration).

Once configuration is added to DEITY Middleware you can either:

### 1. load configuration via config package (not recommended)

This is the easiest step but it's not recommended. It should be used if you need to access configuration option **from different section of the configuration that your module's configuration is stored**.

To do that you just need to require 'config' package:

```js
const config = require('config');

// log entire configuration of DEITY Middleware
console.log(config);
```

:::warning
While this can be used it's not recommended as it causes dependencies between configuration structure and behavior/code of your module or extension.
:::

### 2. inject configuration with injectConfig decorator

With `injectConfig` decorator you can inject configuration of entire DEITY Middleware without explicit call to `config` module. 
That method is better than direct usage of `config` module, but in most cases it's also not recommended as you get entire configuration, while you should be relying only on configuration specific for your module.

The exception from that rule is that you'd like to know if e.g. debug mode is enabled, like in the example below:

```js
const { injectable } = require('inversify');
const { injectConfig } = require('@deity/falcon-server-env');

@injectable()
export class MyCustomModule {
  constructor(@injectConfig() config) {
    // config is the entire configuration of DEITY Middleware
    console.log('Debug is enabled:', config.debug);
  }
}
```

### 3. inject configuration with injectModuleConfig decorator (recommended)

If your module has a configuration, let's say it's described in configuration files in the following way:

```json
{
  ...
  "modules": {
    ...,
    "my-custom-module": {
      "package": "./src/my-custom-module",
      "config": {
        "foo": "foo-value",
        "bar": "bar-value"
      }
    }
  }
}
```

then you can inject the configuration of that particular module in the following way:

```js
const { injectable } = require('inversify');
const { injectModuleConfig } = require('@deity/falcon-server-env');

@injectable()
export class MyCustomModule {
  protected config;

  constructor(@injectModuleConfig('my-custom-module') config) {
    // here config contains only values from "modules.my-custom-module.config"
    this.config = config;
    console.log(this.config.foo)
    console.log(this.config.bar)
  }
}
```

that way you get only configuration of your module and nothing else.
