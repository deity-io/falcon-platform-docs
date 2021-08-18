---
id: configuration
title: Configuration in Falcon Platform
sidebar_label: Configuration
enterprise_only: true
---

Falcon Client and Falcon Server configuration systems work in the same way.

This section describes how the configuration works in general, as well as how to deal with configuration in production environment.

To get more specific information how to use configuration in particular cases see [Configuration in Falcon Server](../server-v3/configuration) and [Configuration in Falcon Client](../client/configuration)

Both Falcon Client and Falcon Server keep the configuration in `config` folder in their root folders (`client` and `server`)

The config is set up use <a href="https://www.npmjs.com/package/config" target="_blank" rel="noopener noreferrer">`NPM Config`</a>.

Each of the config files in `config` folder is merged to create your final application configuration. 

1. `default.json`
2. `local.json` (optional)
3.`[NODE_CONFIG_ENV].json` (optional), see the explanation [below](#[node_config_env].json)
4. `custom-environment-variables.json` (optional)

## Config priority / order

The order in which the config files are merged is:

`default.json` < `[NODE_CONFIG_ENV].json` < `local.json` < `custom-environment-variables.json`
 
meaning, the `default.json` is loaded first, then `[NODE_CONFIG_ENV].json` is loaded and gets merged with `default.json` (and overwrites existing values) and so on.

### default.json
The `default.json` contains shared config that can be committed to your repository (not passwords and API keys).

:::warning
It's not recommended to keep sensitive data in this file. The values of config options should be either empty in this file (and provided via subsequent places listed below) or should have values that can be shared with everybody.
:::

### [NODE_CONFIG_ENV].json
The name of this file depends on the config `NODE_CONFIG_ENV`. For your `production` environment it would be `production.json` and would only be loaded on that env. For this reason this file should contain environment specific config.

In the generated application there's also `config/development.json` file which should be used for sharing configuration across the developers that will be used in dev environment (during development). 
Keep in mind though that this file is versioned by git so it's going to be stored in the repository, so if there's some sensitive data that shouldn't be stored in git you should put it rather to `local.json`.

### local.json
This file is **not** committed to your repository. It **can** contain sensitive data such as API keys and passwords you're using for your application locally.

### custom-environment-variables.json
This file has the highest priority and should be used to map config to environment variables (set on your Node environment). These mapping can be used for sensitive data such as passwords that you wouldn't want committed to your repository.

That's the best option for providing production configuration as the values will be stored outside of git repository.

## Configuration on DEITY Cloud

If you're using DEITY Cloud you can set env variables using the [dcloud CLI tool](../cloud/dcloud).

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

When using this flag the value gets encrypted before it's stored and decrypted only for runtime purposes - when application is deployed. It's not possible to read the secret so if you need to change it you have to overwrite it.

```bash
dcloud env:var:set -s production GTM_CODE XXXXXXXXX
```
