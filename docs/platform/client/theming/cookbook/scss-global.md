---
id: scss-global
title: 'Loading a global scss file'
sidebar_label: 'Loading a global scss file'
---

If you are using `scss` and want to load a global file to all your other `scss` files it's possible by extending the webpack config.

This can be done in `client/falcon-client.build.config.js`.

Within the `modify` arguement you can pass your new webpack rule.

```js
modify: (cfg, { target }) => {
    ....

    // Add SCSS file
    const newRule = {
      test: /\.(sa|sc|c)ss$/,
      use: [
        {
          loader: "sass-loader",
          options: {
            data: '@import "src/global.scss";'
          }
        }
      ]
    }
    cfg.module.rules.push(newRule);
    return cfg;
  }
  ....

  ```

  **Path Aliases**
  The `src` path is aliased to the correct location meaning it's possible to import the file like so `src/global.scss` (it's not a relative path).
