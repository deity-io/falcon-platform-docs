---
id: analytics
title: Setting up Google Analytics / Tag Manager
sidebar_label: Setting up Google Analytics
---

You're in luck, Falcon support both Google Analytics and Tag Manager out of the box.

## Adding & commiting your credentials in a file.

The config can be added to the config files in the `client/config` directory. Find out more aobut that [here](/docs/platform/client/configuration)

```js
{
  "googleTagManager": {
    "id": [YOUR_GTM_CONTAINER_ID]
  },
  "googleAnalytics": {
    "trackerID": [YOUR_UA_NUMBER]
  }
}
```

Chances are you won't want to commit these into your repo. If you do, you can add them to your `client/config/production.json` file.

## Adding your credentials on the server (advised).

It's advised you add this kind of config as a server variable.

### 1. Define the custom variables.

You may or may not have a `client/config/custom-environment-variables.json` file. If you don't, create it.

Once you've got that file you'll need to map your environment variables to the config.

**`client/config/custom-environment-variables.json`**
```js
{
  "googleTagManager": {
    "id": "GTM_CODE"
  },
  "googleAnalytics": {
    "trackerID": "GA_ID"
  }
}
```

### 2. Set the environment variable values

You can find a full explaination [here](/docs/platform/client/configuration#custom-environment-variablesjson).

- Log into your `dcloud` instance.
- Set your value `dcloud env:var production GTM_CODE XXXXXXXXX`

## 3. Finished
You should now see analytics data coming in as expexcted.
