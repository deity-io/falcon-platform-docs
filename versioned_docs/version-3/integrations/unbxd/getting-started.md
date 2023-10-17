---
id: getting-started
title: Getting started with Unbxd
sidebar_label: Getting started
---

# Getting started

## Overview

You'll need to do the following things to get Unbxd working with your app.

1. Add the Magento Module to your Magento instance
2. Add the Unbxd package as a dependency of your server app
3. Configure Unbxd in your sever app config
4. Assign Unbxd as the datasource for the search extension

## 1. Add the Magento Module

You'll need to have the offical Unbxd Magento module installed.

[https://github.com/unbxd/Magento-2-Extension](https://github.com/unbxd/Magento-2-Extension)

## 2. Add our package

You'll need to add `@deity/falcon-unbxd-search-module` as a dependency in your project (inside the server app).

## 3. Configuration

- `url` - The service URL provided by Unbxd
- `overrideCategoryProductListResolver` - [COMING SOON] - This config will be used to determine if Unbxd will be used for category pages as well as search.
- `sites` - The list of sites you have that need to use the search Each site should be an object containing site config (below).

**Site Config**

- `siteKey` - The site key found in the Unbxd dashboard
- `apiKey` - The API key found in the Unbxd dashboard

#### Default Configuration

By default Unbxd isn't enabled and no stores are configured.

```
"modules": {
  "unbxd": {
    "package": "@deity/falcon-unbxd-search-module",
    "enabled": false,
    "config": {
      "url": "https://search.unbxd.io",
      "overrideCategoryProductListResolver": false,
      "sites": {}
    }
  }
}
```

#### Store Data

You should add configuration for each of your stores, with the **Magento** store code as the key. 

**Example for setup with 2 stores in Magento, `default` and `store1`**

```
"modules": {
  "unbxd": {
    "package": "@deity/falcon-unbxd-search-module",
    "enabled": false,
    "config": {
      "url": "https://search.unbxd.io",
      "overrideCategoryProductListResolver": false,
      "sites": {
        "default": {
          "siteKey": "siteKey-connected-to-default-store",
          "apiKey": "apiKey-connected-to-default-store"
        },
        "store1": {
          "siteKey": "siteKey-connected-to-store1",
          "apiKey": "apiKey-connected-to-store1"
        }
      }
    }
  }
}
```

### Environment Variables

To use Unbxd on a cloud environment you'll have to use environment variables.

#### Default Variables

```
"modules": {
   "unbxd": {
      "enabled": {
        "__name": "UNBXD_ENABLED",
        "__format": "json"
      },
      "overrideCategoryProductListResolver": {
        "__name": "UNBXD_OVERRIDE_CATEGORY_PRODUCT_LIST_RESOLVER",
        "__format": "json"
      },
      "config": {
        "url": "UNBXD_URL",
        "sites": {}
      }
    }
}
```

- `UNBXD_ENABLED` - boolean - defaults to `false`
- `UNBXD_CONFIG` - JSON String - defaults to `null`
- `UNBXD_OVERRIDE_CATEGORY_PRODUCT_LIST_RESOLVER` - boolean - defaults to `false`

#### Adding Stores

You will need to manually add each store to your `server/config/custom_environment_variables.json` file to be able to configure them remotely.

You can name these variables whatever you want be we advise the below convention.

```
"modules": {
   "unbxd": {
      ...
      "config": {
        ...
        "sites": {
          "default": {
            "siteKey": "UNBXD_SITEKEY_DEFAULT",
            "apiKey": "UNBXD_APIKEY_DEFAULT"
          },
          "store1": {
            "siteKey": "UNBXD_SITEKEY_STORE1",
            "apiKey": "UNBXD_APIKEY_STORE1"
          }
        }
      }
    }
}

```

:::note Keeping keys safe
We advise you keep your API and Site keys out of your repo and add them to a `config/local.json` file for local development and save them as secrets remotely e.g. `dcloud env:var:set -s production UNBXD_SITEKEY_STORE1 keyvaluehere`.
:::


## 4. Assign Unbxd to your search extension

In your `server/config/default.json` you'll want to assign `unbxd` as the data source for your search extension:

```
"extensions": {
  ...
  "search": {
    "package": "@deity/falcon-search-extension",
    "config": {
      "module": "unbxd"
    }
  }
}
```
