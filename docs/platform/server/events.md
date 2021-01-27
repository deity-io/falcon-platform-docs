---
id: event-hooks
title: Event Hooks
sidebar_label: Event Hooks
enterprise_only: true
---

## Overview

Falcon Server emits several event hooks that can be used to add your own custom code.

## Available Events

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

To use and of these events you'll need to first import `Events` enum from `'@deity/falcon-server-env'`.

You can then use `eventEmitter` to intercept these events.

`eventEmitter` is a public prop for the `FalconServer` class and is passed to our API data source and endpoint packages.


## Usage

```js
import { Events } from '@deity/falcon-server-env';

...

this.eventEmitter.on(Events.ERROR, async data => {
  // ERROR code here
});

this.eventEmitter.on(Events.AFTER_INITIALIZED, async data => {
  // AFTER_INITIALIZED code here
});
```
