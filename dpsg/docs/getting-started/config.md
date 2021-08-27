---
id: config
title: Configuration
sidebar_label: Configuration
description: How to configure DPSG
---

## Connecting your Falcon App

All the setup is done our side. All you need to do is configure your Falcon App to use DPSG and your good to go.

To connect your app to DPSG you'll just need to make a few simple configuration changes.

:::note Get your DPSG credentials?
DPSG is part of your subscription and your `user` and `token` should be provided to you by our team when you sign up. You can get this information by running `dcloud env [env]`.
:::


## Configuring DPSG

In your server config you'll need to add a new payments module.

**`server/config/default.json` minimum configuration**
```json
"modules": {
  "payments": {
    "package": "@deity/falcon-payment-service-module",
    "enabled": true,
    "config": {
      "redirectBaseUrl": "",
      "redirectUrl": "/checkout/pending",
      "serviceUser": "",
      "serviceToken": ""
    }
  },
  ...
```

:::note Using localhost?
Some payment providers don't like passing `http://localhost` as a redirect URL (`redirectBaseUrl`). We reccommend using a service like [ngrok](https://ngrok.com/) for to tunnel your falcon server app.
:::

### Config Explained

(config : type : default : description)

- `redirectBaseUrl` : string : "" : The base url to be redirected to after payments (usually your client app)
- `redirectUrl` : string : "/checkout/pending" : The url to be redirected to after payments (usually your client app)
- `serviceUser` : string : "" : The DPSG user name, in the following format "org:project:env" e.g. "deity:falcon:production"
- `serviceToken` : string : "" : The DPSG token associated with the user above

### Need payments in a custom module?

If you're adding a new module and need access to DPSG you'll need to make sure you pass the payments module name to it.

```json
"yourModule": {
  ...
  "config": {
    ...
    "paymentsComponent": "payments",
    ...
  }
},
```
