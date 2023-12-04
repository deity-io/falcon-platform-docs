---
id: configuration
title: Platform configuration
description: A step by step guide on how to configure the Deity Platform.
sidebar_label: Configuration
---

Falcon Client and Falcon Server configs work in the same way.

Falcon Client configuration can be found in the `client/config` directory and Falcon Server's config is found in `server/config`.

The config is set up use <a href="https://www.npmjs.com/package/config" target="_blank" rel="noopener noreferrer">`NPM Config`</a>.

Each of the config files is merged to create your applications configuration.

- `default.json`
- `local.json` (optional)
- `[NODE_CONFIG_ENV].json` (optional)
- `custom-environment-variables.json` (optional)

## Config priority / order

The order in which the config files are merged is:

`default.json` < `[NODE_CONFIG_ENV].json` < `local.json` < `custom-environment-variables.json`

## default.json

The `default.json` contains shared config that can be committed to your repository (not passwords and API keys).

## [NODE_CONFIG_ENV].json

The name of this file depends on the config `NODE_CONFIG_ENV`. For your `production` environment it would be `production.json` and would only be loaded on that env. For this reason this file should contain environment specific config.

## local.json

This file is **not** committed to your repository. It **can** contain sensitive data such as API keys and passwords you're using for your application locally.

## custom-environment-variables.json

This file has the highest priority and should be used to map config to environment variables (set on your Node environment). These mapping can be used for sensitive data such as passwords that you wouldn't want committed to your repository.

If you're using Falcon Cloud you can set env variables using the [dcloud CLI tool](/platform/cloud/dcloud).

**CLI Command**

```bash
dcloud env:var:set <env> <name> [value]
```

```bash
dcloud env:var:set production GTM_CODE XXXXXXXXX
```

**`client/config/custom-environment-variables.json`**

```json
{
  "googleTagManager": {
    "id": "GTM_CODE"
  }
}
```

### Adding encrypted environment variables in DCloud

If an environment variable such as an API secret key needs to be encrypted you simply need to use the `-s` or `--secret` flag when setting it.

```bash
dcloud env:var:set -s production GTM_CODE XXXXXXXXX
```
