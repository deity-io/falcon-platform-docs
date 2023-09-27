---
id: event-handlers
title: Event handlers in Falcon Server
sidebar_label: Event handlers
enterprise_only: true
---
import Badge from '@site/src/components/Badge';

<Badge variant="green">NEW V3 DOC</Badge><br/><br/>

Falcon Server uses asynchronous events to notify about internal processes. With event handlers you are able to "hook" into particular place in order to modify Falcon Server's behavior or modify particular thing.

You can find available list of events [here](#available-events)

## Usage

In order to handle event fired by Falcon Server you need to use `@eventHandler()` decorator and extend `EventHandlerBase` class which requires you to implement `execute` method.
Then it needs to exported by [Falcon Module](../about).

The snipped below shows how to do that:

```ts
const { eventHandler, EventHandlerBase, Events } = require('@deity/falcon-server-env');

// custom event handler that processes errors
@eventHandler(Events.ERROR)
export class CustomErrorHandler extends EventHandlerBase {
  async execute(error) {
    // log error onto console
    console.error(error);
  }
}
```

:::caution 
Due to nature of Data Sources which are instantiated per each request we don't advise to watch for events from Data Source because each request will create instance of event handler.
:::

## Firing custom events

Besides events that Falcon Server emits you can also emit your own events. To do so, you need to inject `EventEmitter2` to your class and simply fire event as you wish.

```ts
const { injectable } = require('inversify');
const { DataSource } = require('apollo-datasource');
const { EventEmitter2 } = require('eventemitter2');

@injectable()
export class CustomDataSource extends DataSource {
  constructor(@inject('EventEmitter2') eventEmitter: EventEmitter2) {
    super();
    this.eventEmitter = eventEmitter;
  }

  async someResolver(obj, params, context, info) {
    // something happened - trigger event
    this.eventEmitter.emit('custom-event-name', 'arg1', 'arg2');

    // or trigger it in async way
    await this.eventEmitter.emitAsync('custom-event-name', 'arg1', 'arg2');

    return {};
  }
}
```

## Available events

You can import `Events` enum available in `@deity/falcon-server-env` package to have list of predefined events:

```ts
const { Events } = require('@deity/falcon-server-env');
```

#### ERROR

Fired when Falcon Server catches global error

Parameters:

- `Error` instance

#### BEFORE_INITIALIZED

Fired before initialization of the instance of Falcon Server (at the beginning of `FalconServer.initialize()` method). This event is fired before Falcon Server is configured with basic things so it can be used to execute some logic at the very beginning of Falcon Server lifetime.

Parameters:

- `FalconServer` class instance

#### AFTER_INITIALIZED

Fired after initialization of the instance of Falcon Server (at the end of `FalconServer.initialize()` method). This event is fired after everything that Falcon Server uses is initialized so it can be used to access all Falcon Server's internals.

Parameters:

- `FalconServer` class instance

#### BEFORE_STARTED

#### AFTER_STARTED

#### CACHE_TAG_INVALIDATE

#### BEFORE_WEB_SERVER_CREATED

#### AFTER_WEB_SERVER_CREATED

#### BEFORE_WEB_SERVER_REQUEST

#### AFTER_WEB_SERVER_REQUEST

#### BEFORE_API_CONTAINER_CREATED

#### AFTER_API_CONTAINER_CREATED

#### BEFORE_EXTENSION_CONTAINER_CREATED

#### AFTER_EXTENSION_CONTAINER_CREATED

#### BEFORE_COMPONENTS_REGISTERED

#### AFTER_COMPONENTS_REGISTERED

#### BEFORE_APOLLO_SERVER_CREATED

#### AFTER_APOLLO_SERVER_CREATED

#### BEFORE_ENDPOINTS_REGISTERED

#### AFTER_ENDPOINTS_REGISTERED

#### API_DATA_SOURCE_REGISTERED

#### EXTENSION_REGISTERED
