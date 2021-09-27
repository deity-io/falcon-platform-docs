---
id: getting-started
title: Getting started
sidebar_label: Getting started
---

## Before your start

You'll need to have the offical Unbxd Magento module installed.

[https://github.com/unbxd/Magento-2-Extension](https://github.com/unbxd/Magento-2-Extension)

## Our packages

You'll need to add `@deity/falcon-unbxd-search-module` as a dependency in your project (inside the server app).

## Configuration


```
"modules": {
  "unbxd": {
    "package": "@deity/falcon-unbxd-search-module",
    "enabled": true,
    "config": [{
      "storeCode": "default",
      "url": "https://search.unbxd.io",
      "siteKey": "[siteKey]",
      "apiKey": "[apiKey]"
    },
    {
      "storeCode": "secondStoreCode",
      "url": "https://search.unbxd.io",
      "siteKey": "[siteKey-connected-to-Second-Store]",
      "apiKey": "[apiKey-connected-to-Second-Store]"
    }
    ]
  }
}
```

## Environment Variables

```
"modules": {
  "unbxd": {
    "enabled": "UNBXD_ENABLED",
    "config": {
      "__name": "UNBXD_CONFIG",
      "__format": "json"
    }
  }
}
```

- `UNBXD_ENABLED` - boolean - defaults to `false`
- `UNBXD_CONFIG` - JSON String - defaults to `null`

:::Config JSON
The config expects an array of objects each wtih a `storeCode`, `url`, `siteKey` & `apiKey`. Because the config contains secrets (API Key) it should be saved using the `-s` flag. `dcloud env:var:set -s test UNBXD_CONFIG "[{\"storeCode\":\"default\",\"url\":\"https://search.unbxd.io\",\"siteKey\":\"[siteKey]\",\"apiKey\":\"[apiKey]\"},{\"storeCode\":\"secondStoreCode\",\"url\":\"https://search.unbxd.io\",\"siteKey\":\"[siteKey-connected-to-Second-Store]\",\"apiKey\":\"[apiKey-connected-to-Second-Store]\"}]"`
:::
