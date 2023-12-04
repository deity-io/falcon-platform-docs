---
id: getting-started
title: Getting started with Algolia
sidebar_label: Getting started
---

# Getting started

If you're using our example app, `demo-v2` most of the heavy lifting will be done for you and you'll only need to add a few configurations.

**Prerequisites**
You'll need an API attached to your shop extension so Algolia has a source for product data. Currently this only works with our [BigCommerce integration](../bigcommerce). 

### 1. Create an Algolia account

Before you start you'll need to create an <a href="https://www.algolia.com/" rel="noreferrer noopener" target="_blank" aria-label="visit the Algolia site">Algolia</a> account.

<img src="/docs/img/docs/platform/algolia-admin-2.png" alt="Algolia admin" width="300" style={{ marginBottom: 20 }}/>

Once you've created an account you should be able to get your **API keys**.

<img src="/docs/img/docs/platform/algolia-admin-1.png" alt="Algolia admin" width="400" style={{ marginBottom: 20 }}/>

### 2. Add your config to Falcon Server

The next thing you'll need to do is add your API keys to your config files.

This is a full list of the config you'll need.

```json
{
  "components": {
    "algolia": {
      "package": "@deity/falcon-algoliasearch-component",
      "config": {
        "appId": null,
        "apiKey": null,
        "indexName": null
      }
    }
  },
  "endpoints": {
    "algolia": {
      "package": "@deity/falcon-algoliasearch-endpoints",
      "config": {
        "component": "algolia",
        "autoReindex": false,
        "url": "/algolia-info",
        "filterFieldName": "filterOptions",
        "indexSettings": {
          "searchableAttributes": [
            "sku",
            "name",
            "description",
            "seo.title",
            "seo.description",
            "seo.keywords"
          ],
          "attributesForFaceting": ["categories.name", "filterOptions"],
          "sortOrderCustomFieldMap": {
            "price": "price.regular"
          }
        }
      }
    }
  },
  "apis": {
    "algolia": {
      "package": "@deity/falcon-algoliasearch-api",
      "config": {
        "component": "algolia"
      }
    },
  },
  "extensions": {
    "search": {
      "package": "@deity/falcon-search-extension",
      "config": {
        "api": "algolia"
      }
    }
  }
}

```

**API Config**
This should be added to your env variables or your local.json. They can all be found within your Algolia admin.

```json
{
  "components": {
    "algolia": {
      "enabled": {
        "__name": "ALGOLIA_ENABLED",
        "__format": "json"
      },
      "config": {
        "appId": "ALGOLIA_APP_ID",
        "apiKey": "ALGOLIA_API_KEY",
        "indexName": "ALGOLIA_INDEX_NAME"
      }
    }
  }
}
```

You'll need the **admin API key**

<img src="/docs/img/docs/platform/algolia-admin-key.png" alt="Algolia admin" width="400" style={{ marginBottom: 20 }}/>

You should also configure your search extension to use Algolia. This can be done in any of your config files or by setting an environment variable:

```json
"extensions": {
    "search": {
      "config": {
        "api": "SEARCH_API_NAME"
      }
    }
  }
```

### 3. Index your products

Once you've created an account and configured it, the last thing to do is [index your data](./indexing).

