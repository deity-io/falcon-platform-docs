---
id: connect
title: Connecting to your app
sidebar_label: Connecting to your app
description: How to connect DPSG to your Falcon app
---



All the setup is done on our side. All you need to do is configure your Falcon App to use DPSG and you're good to go.

To connect your app to DPSG you'll just need to make a few simple configuration changes.

:::note Get your DPSG credentials?
DPSG is part of your subscription. You can get this information by running `dcloud payments:profile:info`.
:::

## Local configuration

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
      "serviceToken": "",
      "region": null
    }
  },
  ...
```

:::note Using localhost?
Some payment providers don't like passing `http://localhost` as a redirect URL (`redirectBaseUrl`). We recommend using a service like [ngrok](https://ngrok.com/) to tunnel your falcon server app.
:::

### Config explained

(config : type : default value : description)

- `redirectBaseUrl` : string : "" : The base url to be redirected to after payments (usually your client app)
- `redirectUrl` : string : "/checkout/pending" : The url to be redirected to after payments (usually your client app)
- `serviceUser` : string : "" : The DPSG username, in the following format "org:project:env" e.g. "deity:falcon:production"
- `serviceToken` : string : "" : The DPSG token associated with the user above
- `region` : string : null : The region of the DPSG instance you wish to use. This defaults to `null` which connects to our European instance. Accepted values are `eu` (Europe), `us` (America) and `au` (Australia).


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

## Remote configuration

Remote configuration should be done using env variables for any kind of sensitive data.

This includes the `serviceUser` and `serviceToken`.

**Default Environment variables names (config: env var name)**

- `redirectBaseUrl` : `PAYMENTS_REDIRECT_BASE_URL`
- `redirectUrl` : `PAYMENTS_REDIRECT_URL`
- `serviceUser` : `PAYMENTS_SERVICE_USER`
- `serviceToken` : `PAYMENTS_SERVICE_TOKEN`
- `region` : `PAYMENTS_REGION`

### Setting the variables on your environment

The `serviceUser`, `serviceToken` and `region` can be automatically set using the command `dcloud payments:profile:apply`. Alternatively, they can be set manually, using:

`dcloud env:var:set [environment_name] [variable_name] [variable_value]`

e.g.

`dcloud env:var:set -s production PAYMENTS_SERVICE_TOKEN 1234`

Notice the `-s` is used to indicate this is a secret (encrypted) value.
