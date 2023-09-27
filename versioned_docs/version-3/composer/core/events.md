---
id: event-hooks
title: Event hooks
sidebar_label: Event hooks
enterprise_only: true
---

## Overview

Falcon Server emits several event hooks that can be used to add your own custom code.

We use [this package](https://www.npmjs.com/package/eventemitter2) as a base for our events.

## Available events

```ts
export enum Events {
  ERROR = 'falcon-server.error',

  BEFORE_INITIALIZED = 'falcon-server.before-initialized',
  AFTER_INITIALIZED = 'falcon-server.after-initialized',

  BEFORE_STARTED = 'falcon-server.before-started',
  AFTER_STARTED = 'falcon-server.after-started',

  CACHE_TAG_INVALIDATE = 'falcon-server.cache.invalidate-tag',

  BEFORE_WEB_SERVER_CREATED = 'falcon-server.before-web-server-created',
  AFTER_WEB_SERVER_CREATED = 'falcon-server.after-web-server-created',

  BEFORE_WEB_SERVER_REQUEST = 'falcon-server.before-web-server-request',
  AFTER_WEB_SERVER_REQUEST = 'falcon-server.after-web-server-request',

  BEFORE_API_CONTAINER_CREATED = 'falcon-server.before-api-container-created',
  AFTER_API_CONTAINER_CREATED = 'falcon-server.after-api-container-created',

  BEFORE_EXTENSION_CONTAINER_CREATED = 'falcon-server.before-extension-container-created',
  AFTER_EXTENSION_CONTAINER_CREATED = 'falcon-server.after-extension-container-created',

  BEFORE_COMPONENTS_REGISTERED = 'falcon-server.before-components-registered',
  AFTER_COMPONENTS_REGISTERED = 'falcon-server.after-components-registered',

  BEFORE_APOLLO_SERVER_CREATED = 'falcon-server.before-apollo-server-created',
  AFTER_APOLLO_SERVER_CREATED = 'falcon-server.after-apollo-server-created',

  BEFORE_ENDPOINTS_REGISTERED = 'falcon-server.before-endpoints-registered',
  AFTER_ENDPOINTS_REGISTERED = 'falcon-server.after-endpoints-registered',

  API_DATA_SOURCE_REGISTERED = 'falcon-server.api-data-source-registered',
  EXTENSION_REGISTERED = 'falcon-server.extension-registered'
}
```

## How it works

To use one of these events you'll need to first import `Events` enum from `'@deity/falcon-server-env'`.

You can then use `eventEmitter` to intercept these events.

`eventEmitter` is a public prop for the `FalconServer` class and is passed to our API data source and endpoint packages.


## Usage

### Watching an event

**server/index.js**

```js
const { Events } = require('@deity/falcon-server-env');

...

const server = new FalconServer(config);

server.eventEmitter.on(Events.ERROR, async data => {
  // ERROR code here
});

server.eventEmitter.on(Events.AFTER_INITIALIZED, async data => {
  // AFTER_INITIALIZED code here
});

server.start();
```

### Emitting an event

Due to the way API data sources are initiated we don't advise watching for events in them.

You can however `emit` a new or existing event.

**API data source package**
```js
const { Events } = require('@deity/falcon-server-env');
...
export default class YourClass extends ApiDataSource {
  
    yourMethod() {
      // New event
      this.eventEmitter.emit('event.name', value1, value2);

      // Existing event
      this.eventEmitter.emit(Events.ERROR, value1, value2);
    }
  }
}
```

### Emitting Errors

Errors in our API data source packages automatically `emit` the `Events.ERROR` event so you can latch onto this in `server/index.js` if you want to log your errors using a 3rd party service. 
