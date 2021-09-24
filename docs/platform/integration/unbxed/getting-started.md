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
