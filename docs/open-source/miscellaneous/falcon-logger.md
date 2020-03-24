---
title: Falcon Logger
---

Utility tool used for logging in Falcon packages, but can also be used for logging in your custom Node.js apps.

## Installation

<!--DOCUSAURUS_CODE_TABS-->
<!--npm-->

```bash
npm install @deity/falcon-logger
```

<!--yarn-->

```bash
yarn add @deity/falcon-logger
```
<!--END_DOCUSAURUS_CODE_TABS-->

Falcon-Logger uses [`pino`](http://getpino.io/) library under the hood to work with log messages.

## Basic Usage

The package exports a singleton `Logger` object that exposes logging and configuration methods. By default log level is set to `info`.
But if you do want to change it - you need to set a [required log level](http://getpino.io/#/docs/api?id=level-string)
for the logger instance and the sooner you do this after the initial import statement the better:

```javascript
const Logger = require('@deity/falcon-logger');
Logger.setLogLevel('debug');
Logger.info('My log message');
```

Since you might be working with multiple apps - obviously you would like to be able to distinguish them apart in your
logging system. In order to do that - there's a dedicated method for that:

```javascript
const Logger = require('@deity/falcon-logger');
Logger.setApp('my-app');
Logger.info('My log message');
```

This will simply add `"app": "my-app"` data to every log message you send (not visible when using `logger-pretty`),
so you'll be able to filter your log messages by this key:

[![DEITY Falcon Logger setApp](/img/opensource/logger-setapp.png)](/img/opensource/logger-setapp.png)

> Setting **LogLevel** and **App** for Falcon-based apps is done automatically using the provided config values

### `getFor` method

Falcon-Logger provides a handy `getFor` method to initialize an extra `module` key for log message. This way, you could easily
define sub-loggers for your nested modules, for example:

```javascript
const Logger = require('@deity/falcon-logger');
const subLogger = Logger.getFor('my-module');
subLogger.info('My log message');
```

This call will add `"module": "my-module"` data to every log entry you send via `subLogger`. In conjunction with
[logger-pretty](#logger-pretty) - it will render an additional `[my-module]` section in the log message output:

[![DEITY Falcon Logger getFor](/img/opensource/logger-getfor.png)](/img/opensource/logger-getfor.png)

### `traceTime` method

Another handy method is called `traceTime`. This method can be used to calculate the time that your callback needs to complete the execution.
This method accepts 2 argument - `label` and `fn`:

```javascript
const Logger = require('@deity/falcon-logger');
const result = await Logger.traceTime('My time', async() => { ... });
```

`traceTime` method will return the result of the execution of your callback. If your log level is set to `trace` -
Logger will produce the following log message:

```text
TRACE: My time (10ms)
```

Of course, `(10ms)` may vary depending on your code. If log level is set higher than `trace` - the calculations won't be performed, and the result will be returned right away.

> The rest of the methods are available from the original [Pino module](http://getpino.io/#/docs/api).

## Logger Pretty

`@deity/falcon-logger` package exposes a binary script called `logger-pretty` that provides a basic formatter for log entries.
Best to use with Falcon-based apps in `development` mode.

> `logger-pretty` script reuses code of [`pino-pretty`](https://github.com/pinojs/pino-pretty/) module

Due to a nature of Pino logger - you can use this package as a part of pipelining (`| logger-pretty`) in your `package.json` file:

```json
{
  "scripts": {
    "start": "cross-env NODE_ENV=development nodemon index.js | logger-pretty",
  }
}
```

As a result, your console output should look similar to this:

[![DEITY Falcon Logger Pretty](/img/opensource/logger-pretty.png)](/img/opensource/logger-pretty.png)

This way, the formatting code offloads your application (which gives an extra performance boost) and handles it in a dedicated sub-process.
It also gives you the ability to apply your own formatting without changing any internal code, you simply change the last part of the pipeline.

> For `production` mode - you simply remove the last part of the pipeline and you will start seeing a raw JSON output:
>
> [![DEITY Falcon Logger Raw](/img/opensource/logger-production.png)](/img/opensource/logger-production.png)

### Logger-Pretty on production

Even though your application is running in `production` mode - it is still possible to use `logger-pretty` to format those log messages
without a need to restart your application. All you need to do is to ensure `@deity/falcon-logger` is installed
and then simply pass log entries to this script:

```bash
cat logs/app.log | ./node_modules/.bin/logger-pretty
```

When using [PM2](http://pm2.keymetrics.io/):

```bash
pm2 logs 0 --raw | ./node_modules/.bin/logger-pretty
```

### Minimal mode

There's an extra mode included into `logger-pretty` - it's called `minimal`. To enable it - you need to pass an extra flag
like `logger-pretty -m`. Best to use with Falcon-based apps when running `falcon-scripts` or `falcon-client` commands
as it does not show a log level nor date time information in the output:

[![DEITY Falcon Logger Minimal](/img/opensource/logger-minimal.png)](/img/opensource/logger-minimal.png)

## Transports

To get more information about Logger transports - please refer to [this page](http://getpino.io/#/docs/transports?id=known-transports).
