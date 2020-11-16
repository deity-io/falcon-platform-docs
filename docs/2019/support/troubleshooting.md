---
title: Troubleshooting
---

This is a cumulative list of frequent hurdles. We try to provide a descriptive solution and keep everything up-to-date.

### When trying to connect to Magento, Falcon Server outputs: `FalconServer: request failed, reason: connect ECONNREFUSED`

Make sure you have your certificates set up properly. We recommend using [mkcert](https://github.com/FiloSottile/mkcert)

### When trying to connect to Magento I'm getting Cache errors

Please flush the Magento Cache

### Create-falcon-app throws an error: `Unexpected token (`

Please make sure you have Node version 8.10+

### `npx create-falcon-app` generates outdated code for my shop

Make sure you don’t have create-falcon-app package installed globally on your machine (npm and yarn) - this is the recommended way since it makes sure you are always using the latest version when using the npx command

### FalconServer: "apis" is not iterable

Make sure your Falcon-Server config is set properly [read the documentation](/docs/2019/falcon-server/basics#configuration)
