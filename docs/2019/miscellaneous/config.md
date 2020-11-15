---
title: Application Config
---

**Falcon-Client** and **Falcon-Server** example applications use
[`config`](https://www.npmjs.com/package/config) NPM package to manage and work with app's config.

By default - DEITY Falcon provides default values in `config/default.json` files:

- `client/config/default.json` for Falcon-Client
- `server/config/default.json` for Falcon-Server

> In case of new version of the app config - these files will be updated as well, so you need
> to pay extra attention while editing and maintaining them.

More information on how to manage your app's config can be found [here](http://lorenwest.github.io/node-config/).