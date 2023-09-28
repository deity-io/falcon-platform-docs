---
id: indexing
title: Indexing
sidebar_label: Indexing
---

This can be broken down into 3 sections. Configuring what data is searchable, running an initial index and updating indexes when products are updated.

### 1. Configuring your indexes

The first thing you'll need to do is configure what data is searchable. You can also configure **facets** (filters) here.

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

### Deity Cloud Environment Variables

- `ALGOLIA_ENABLED`: [bool] - is Algolia enabled 
- `ALGOLIA_APP_ID`: Your App ID
- `ALGOLIA_API_KEY`: Your API key
- `ALGOLIA_INDEX_NAME`: The base index, if this index doesn't exist in Algolia yet it will be created for you.
- `SEARCH_API_NAME`: You'll need to set Algolia as the search API. The value shoul be `algolia`


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

<img src="/docs/img/docs/platform/algolia-import.png" alt="Algolia import" width="300" style={{ marginBottom: 20 }}/>

**n.b.** If you want to run a fresh reindex of all your products we advise going into the Algolia admin and emptying your indexes there first.

This is a temporary config only needed for the initial index.


### 3. Updating indexes when product data changes

To keep indexes up to date with product data we use webhooks. 

Falcon server has 2 events we subscribe to `falcon-server.entity-updated` and `falcon-server.entity-deleted`.

`falcon-server.entity-updated` also runs when new entries (products) are added.

With our **BigCommerce** integration we use the WebHooks provided by **BigCommerce** to trigger these **Falcon Server** events which our `@deity/falcon-algoliasearch-endpoints` listens for.


## Useful Links

- [Our demo site](https://demo.deity.io/)
- [Algolia site](https://www.algolia.com/)