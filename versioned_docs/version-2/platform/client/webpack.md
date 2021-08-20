---
id: webpack
title: Webpack / build config
sidebar_label: Webpack / build config
---

You can extend your sites Webpack configuration in `client/falcon-client.build.config.js`.

This is an optional build-time configuration file which is used to set up the entire build process. Bellow, there is an example of `falcon-client.build.config.js` file content with defaults:

**`client/falcon-client.build.config.js`**
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
- `useWebmanifest: boolean` - (default: `false`) determines whether [Web App Manifest](/docs/platform/client/files#srcmanifestwebmanifest) should be processed via webpack and included in output bundle
- `i18n: object` - (default: `{}`) internationalization configuration, [see the details](/docs/2019/platform/falcon-client/internationalization#configuration)
- `envToBuildIn` - (default: `[]`) an array of environment variable names which should be build in into bundle, [see the details](#environment-variables)
- `plugins` - (default: `[]`) an array of plugins which can modify underlying [webpack configuration](#webpack).
- `moduleOverride` - (default: `{}`) array of module names to override, [see the details](./overrides)

Falcon Client provides you much more build configuration options. You can find all of them described in [Build process configuration](#build-process-configuration) section.


## Build process configuration

Falcon Client comes with all necessary features and development tools turned on by default:

- Universal [HMR](https://webpack.js.org/concepts/hot-module-replacement/) - page auto-reload if you make edits (on both backend and frontend)
- Latest JavaScript achieved via babel 7 compiler.
- ESLint with [Prettier](https://github.com/prettier/prettier) - to keep your code base clean and consistent
- Jest test runner setup with sensible defaults.

However, you can still modify Falcon Client defaults

## Examples

Checkout out our **cookbook** for examples of changing the build process.

- [Adding a global SCSS file](../cookbook/client/scss-global)
- [Adding Post CSS support](../cookbook/client/post-css-support)
