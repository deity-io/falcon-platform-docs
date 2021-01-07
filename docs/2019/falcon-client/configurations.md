---
title: Configurations
---

## API contract

Application needs to have `index.js` file, and the following optional configuration `bootstrap.js` and `falcon-client.build.config.js` files. Each of them should be placed into the application root directory.

### `index.js` (required)

This is an application entry point which needs to export valid React element `React.ReactElement<any>` as default:

```js
import App from './src/App';

export default App;
```

In order to use your custom Apollo Schema you need to export it via `clientApolloSchema`:

```js
import clientApolloSchema from './src/clientState';

export { clientApolloSchema };
```

For more information see [this](/docs/2019/falcon-client/local-state-management)

### `bootstrap.js`

This is an optional runtime configuration file.

```js
const config = require('config');

export default async() => ({
  config: { ...config },
  onServerCreated: server => {},
  onServerInitialized: server => {},
  onServerStarted: server => {}
});
```

#### config

This is configuration object used to setup `@deity/falcon-client`

`config: object`

- `port: number` - (default: `3000`) port number that client should be running on
- `logLevel: string` - (default: `'error'`) `@deity/falcon-logger` logger level
- `serverSideRendering: boolean` - (default `true`) switch to control whether the [SSR](/docs/2019/falcon-client/basics#server-side-rendering) is enabled
- `googleTagManager: object` - Google Tag Manager configuration, [see the details](/docs/2019/falcon-client/basics#google-tag-manager)
- `googleAnalytics: object`
  - `trackerID` - Google Analytics tracking code
- `i18n: object` - internationalization configuration, [see the details](/docs/2019/falcon-client/internationalization)
- `menus: object` - menus configuration [TODO]
- `graphqlUrl: string` - (default: `http://localhost:4000/graphql`) the real GraphQL URL to be proxied by Falcon-Client under `apolloClient.httpLink.uri` path. If you set this key with a falsy value - no proxying will be performed
- `apolloClient: object`
  - `connectToDevTools: boolean` - (default: `process.env.NODE_ENV !== 'production'`) enable "Apollo" tab in your chrome inspector [see the details](https://www.apollographql.com/docs/react/features/developer-tooling.html#configuration)
  - `defaultOptions: object` - (default: `{}`) application wide defaults for the options supplied to `watchQuery`, `query` or `mutate` [see the details](https://www.apollographql.com/docs/react/api/apollo-client.html#apollo-client)
  - `queryDeduplication: boolean` - (default: `true`) if false, will force a query to still be sent to the server even if a query with identical parameters (`query`, `variables`, `operationName`) is already in flight. [See the details](https://www.apollographql.com/docs/react/advanced/network-layer.html#query-deduplication)
  - `httpLink: object`
    - `uri: string` - (default: `/graphql`) GraphQL Server endpoint to be used by ApolloClient instance [see the details](https://www.apollographql.com/docs/link/links/http.html#options)
    - `useGETForQueries: boolean` - (default: `false`) switch to control whether to use the HTTP GET method for queries (but not for mutations) [see the details](https://www.apollographql.com/docs/link/links/http.html#options)

All configuration passed by `config` is accessible via `ApolloClient`, which mean you can access any of its property via graphQL query.

In order to retrieve `logLevel` you can run following query:

```graphql
gql`
  query LogLevel {
    config @client {
        logLevel
      }
    }
  }
`
```

It is also possible to extend `config` object about your custom properties.

#### Runtime hooks

Falcon Client exposes set of hooks to which you can attache custom logic:

- `onServerCreated(server: Koa)` - handler invoked immediately after koa server creation
- `onServerInitialized(server: Koa)` - handler invoked immediately after koa server setup (when middlewares like handling errors, serving static files and routes were set up)
- `onServerStarted(server: Koa)` - handler invoked when koa server started with no errors

### `falcon-client.build.config.js`

This is an optional build-time configuration file which is used to set up the entire build process. Bellow, there is an example of `falcon-client.build.config.js` file content with defaults:

```js
module.exports = {
  devServerPort: 3001,
  clearConsole: true,
  useWebmanifest: false,
  i18n: {},
  envToBuildIn: [],
  plugins: [],
  moduleOverride: {}
};
```

- `devServerPort: number` - (default: `3001`) webpack dev server (HMR) port
- `clearConsole: boolean` - (default: `true`) determines whether console should be cleared when starting script
- `useWebmanifest: boolean` - (default: `false`) determines whether [Web App Manifest](/docs/2019/falcon-client/basics#webmanifest) should be processed via webpack and included in output bundle
- `i18n: object` - (default: `{}`) internationalization configuration, [see the details](/docs/2019/falcon-client/internationalization#configuration)
- `envToBuildIn` - (default: `[]`) an array of environment variable names which should be build in into bundle, [see the details](#environment-variables)
- `plugins` - (default: `[]`) an array of plugins which can modify underlying [webpack configuration](#webpack).
- `moduleOverride` - (default: `{}`) dictionary of module names to override, [see the details](#normal-module-override)

Falcon Client provides you much more build configuration options. You can find all of them described in [Build process configuration](#build-process-configuration) section.

## Build process configuration

Falcon Client comes with all necessary features and development tools turned on by default:

- Universal [HMR](https://webpack.js.org/concepts/hot-module-replacement/) - page auto-reload if you make edits (on both backend and frontend)
- Latest JavaScript achieved via babel 7 compiler, [see the details](#babel).
- ESLint with [Prettier](https://github.com/prettier/prettier) - to keep your code base clean and consistent, [see the details](#eslint)
- Jest test runner setup with sensible defaults [see the details](#jest).

However, you can still modify Falcon Client defaults

### Environment Variables

<!-- ### Build-time Variables -->

Falcon client uses set of environment variables. All of them can be accessed via `process.env` anywhere in your application.

- `process.env.NODE_ENV` - `development` or `production`
- `process.env.BABEL_ENV`- `development` or `production`
- `process.env.BUILD_TARGET` - `client` or `server`
- `process.env.ASSETS_MANIFEST` - path to webpack assets manifest,
- `process.env.PUBLIC_DIR`: directory with your static assets

You can create your own custom build-time environment variables. They must be listed on `envToBuildIn` in `falcon-client.build.config.js` file. Any other variables except the ones listed above will be ignored to avoid accidentally exposing a private key on the machine that could have the same name. Changing any environment variables will require you to restart the development server if it is running.

For example, bellow configuration expose environment variable named `SECRET_CODE` as `process.env.SECRET_CODE`:

```js
module.exports = {
  envToBuildIn: ['SECRET_CODE']
};
```

### Webpack

Falcon Client gives you the possibility to extend the underlying webpack configuration. You can do it via exposed plugins API (not webpack plugins). It is worth to mention that Falcon Client plugins API is [razzle](https://github.com/jaredpalmer/razzle#plugins) compatible.

To use Falcon Client (or Razzle) plugin, you need to install it in your project, and add it to `plugins` array in `falcon-client.build.config.js` file:

```js
module.exports = {
  plugins: ['plugin-name']
};
```

Plugins are simply functions that modify and return Falcon Client's webpack config. Each plugin function will receive the following arguments:

- `config: object` - webpack configuration object,
- `env.target: 'web' | 'node'` - webpack build target,
- `env.dev: boolean` - `true` when `process.env.NODE_ENV` is `development`, otherwise `false`,
- `webpack: Webpack` - webpack reference,

```js
module.exports = function myFalconClientPlugin(config, env, webpack) {
  const { target, dev } = env;

  if (target === 'web') {
    // client only
  }
  if (target === 'server') {
    // server only
  }
  if (dev) {
    // development only
  } else {
    // production only
  }

  // your webpack config modifications

  return webpackConfig;
};
```

`falcon-client.build.config.js` file accepts also `modify` setting which is an escape hatch function, which can be used for quick webpack configuration modifications. Basically, it works same as plugins, but can be specified inline. Below you can find an example of extending webpack configuration about `MyWebpackPlugin` only in `development`:

```js
module.exports = {
  modify: (config, { target, dev }, webpack) => {
    if (dev) {
      config.plugins = [...config.plugins, new MyWebpackPlugin()];
    }

    // your webpack config modifications
    return config;
  }
};
```

#### Normal Module override

`falcon-client` uses `@deity/normal-module-override-webpack-plugin` to override any kind of module during compilation time. It works in a similar way like native webpack [normal-module-replacement-plugin](https://webpack.js.org/plugins/normal-module-replacement-plugin/) but accepts only proper paths used in `import` expressions. It does not accept `RegEx` and allows to pass multiple override configuration records into a single plugin instance.

It gives you a powerful tool to override package internals without a need of forking or copying the entire package sources into your project root directory, and via providing a new version of the specific module you can adjust package behavior to your needs.

For example, following configuration:

```
  {
    '@deity/falcon-ui/dist/components/Button': './src/components/CustomButton'
  }
```

tells to webpack that `CustomButton` module should be used instead of `falcon-ui`'s `Button` module. Including `shop-with-blog/client` project and any other third-party package which is using `@deity/falcon-ui/dist/components/Button` module.

The path to a new module can be not only resolved relatively to project root directory but it can point to any other npm package e.g.:

```
  {
    '@deity/falcon-ui/dist/components/Button': '@material-ui/core/Button'
  }
```

Please note that webpack `alias`'es are not supported.

### Babel

Falcon Client gives you Ecma Script 6 compiled via Babel 7. However, if you want to add your own babel transformations, you can override defaults by adding the `babel.config.json` (or `babel.config.js`) file into the root of your project. Please note that it is necessary to at the very minimum the default `@deity/babel-preset-falcon-client` preset:

```json
{
  "presets": [
    "@deity/babel-preset-falcon-client", // needed
  ],
  "plugins": [
    // additional plugins
  ]
}
```

### ESLint

Falcon Client is ESLint ready. To turn it on you need to provide your favorite preset, or you can use ours.

In order to incorporate ESLint you need to create `.eslintrc` file in the Application root. Bellow, you can find a configuration which uses `@deity/eslint-config-falcon` preset:

```json
{
  "extends": ["@deity/eslint-config-falcon"],
  "env": {
    "serviceworker": true
  }
}
```

It is also worth mentioning that the file `.eslintignore` needs to be added in order to omit linting of `node_modules` and built assets. Bellow, you can find our recommendations:

```
node_modules/*
build/*
coverage/*
```


### Jest

Falcon Client comes with configured [Jest](https://jestjs.io/) test runner. However it is possible to override it by adding `jest` node into `package.json`. Below example configures `setupTestFrameworkScriptFile` file:

```json
// package.json
{
 "jest": {
   "setupTestFrameworkScriptFile": "./setupTests.js"
 }
}
```
