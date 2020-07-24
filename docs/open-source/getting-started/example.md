---
title: Example Project
---

This is a template which is used by [`create-falcon-app`](https://github.com/deity-io/falcon/tree/master/packages/create-falcon-app) to create shop with blog app.

It uses [Falcon UI](https://github.com/deity-io/falcon/tree/master/packages/falcon-ui) components to create the presentational layer.

## Quick Start

The best place to start is to use [`create-falcon-app`](/docs/open-source/getting-started/installation).

Or download the example [or clone the whole project](https://github.com/deity-io/falcon.git):

Install it and run:

```bash
yarn install
yarn start
```

Then open http://localhost:3000/ to see your app.

**That's it**. Just start editing `./src/App.js` and go!

## Testing

To run tests:

```bash
yarn test
```

This will run the test watcher (Jest) in an interactive mode. By default, runs tests related to files changed since the last commit.

## Debugging

To run with debugger:

```bash
yarn start:dbg
```

This will start application with enabled inspector agent.

If the server should wait till debugger will attache then run:

```bash
yarn start:dbg-brk
```

For more information, see [`falcon-client start`](/docs/open-source/falcon-client/basics#exposed-commands) command.

## Production package

To build and run production package:

```bash
yarn build
yarn start:prod
```

You could view your application at http://localhost:3000

## Idea behind the example

This is a basic example of Shop with Blog scenario.

If you would like to find more information about how it works please read about [@deity/falcon-client](/docs/open-source/falcon-client/basics)
