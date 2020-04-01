---
id: algolia
title: Algolia Integration
sidebar_label: Algolia
---

---

<a href="https://www.algolia.com/" rel="noreferrer noopener" target="_blank" aria-label="visit the Algolia site">
  <img src="/img/docs/platform/algolia-logo.svg" alt="Algolia Logo" width="200"/>
</a>

---

## Overview

Our Algolia extension is used for search and comes out of the box with our example app, `demo-v2`.

- `@deity/falcon-algoliasearch-api`
- `@deity/falcon-algoliasearch-component`
- `@deity/falcon-algoliasearch-endpoints`

These integrate with:

- `@deity/falcon-search-extension`
- `@deity/falcon-shop-extension`
- `@deity/falcon-server`

To see it in action please check out our [demo store](https://demo.deity.io/search).

## Supported Features

- Product search
- Product search filtering

:::note New features coming soon
We are actively developing our Algolia integration and will adding new features such as search term redirects, suggested search terms and more. 
:::

## Getting Started

If you're using our example app, `demo-v2` most of the heavy lifting will be done for you and you'll only need to add a few configurations.

**Prerequisites**
You'll need an API attached to your shop extension so Algolia has a source for product data. Currently this only works with our [BigCommerce integration](bigcommerce). 

### 1. Create an Algolia account

Before you start you'll need to create an <a href="https://www.algolia.com/" rel="noreferrer noopener" target="_blank" aria-label="visit the Algolia site">Algolia</a> account.

<img src="/img/docs/platform/algolia-admin-2.png" alt="Algolia admin" width="300" style={{ marginBottom: 20 }}/>

Once you've created an account you should be able to get your **API keys**.

<img src="/img/docs/platform/algolia-admin-1.png" alt="Algolia admin" width="400" style={{ marginBottom: 20 }}/>

### 2. Add config to Falcon Server

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
        "host": "fake",
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
      "config": {
        "appId": "[APP_ID]",
        "apiKey": "[API_KEY]",
        "indexName": "[INDEX_NAME]"
      }
    }
  }
}
```

### 3. Index your products

Once you've created an account and configured it the last thing to do is [index your data](#indexing--managing-indexes).

## Indexing / Managing indexes

This can be broken down into 3 sections. Configuring what data is searchable, running an initial index and updating indexes when products are updated.

### 1. Configuring your indexes

This first thing you'll need to do is configure what data is searchable. You can also configure **facets** (filters) here.

This is done in your server config:

**`server/config/default.json`**
```json
"endpoints": {
  "algolia": {
    "package": "@deity/falcon-algoliasearch-endpoints",
    "config": {
      "host": "fake",
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
}
  
```

### 2. Running an initial index

To run your initial index you just need to use the `autoReindex` flag in your config files.

```json
"endpoints": {
  "algolia": {
    "config": {
      "autoReindex": true
    }
  }
}
```

Now you just need to start your app (Falcon Server) and all the products will be indexed. 

**n.b.** If you want to run a fresh reindex of all your products we advise going into the Algolia admin and emptying your indexes there first.


### 3. Updating indexes when product data changes

To keep indexes up to date with product data we use webhooks. 

Falcon server has 2 events we listen for `falcon-server.entity-updated` and `falcon-server.entity-deleted`.

`falcon-server.entity-updated` also runs when new entries (products) are added.

With our **BigCommerce** integration we use the WebHooks provided by **BigCommerce** to trigger these **Falcon Server** events which our `@deity/falcon-algoliasearch-endpoints` listens for.


## Useful Links

- [Our demo site](https://demo.deity.io/)
- [Algolia site](https://www.algolia.com/)
