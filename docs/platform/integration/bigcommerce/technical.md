---
id: technical
title: Technical Information
sidebar_label: Technical Information
description: Our integration is made up of 2 main pacakges, falcon-bigcommerce-api and falcon-bigcommerce-endpoints.
---

The key packages involved in the integration are:

- `@deity/falcon-bigcommerce-api`
- `@deity/falcon-bigcommerce-endpoints`

`falcon-bigcommerce-api` uses both **REST API** and **GraphQL** endpoints for communicating with BigCommerce.

## Important notes

The current BigCommerce REST API does not provide any endpoints to resolve frontend URLs, for this reason - the BigCommerce GraphQL API is used just to resolve frontend URLs. Once it gets the URL type, it's able to fetch the (category or product) data from the BigCommerce REST API.

The BigCommerce REST API does not support aggregations when navigating/filtering category products. In order to provide visitors with the best Search experience possible, it is recommended to use the falcon-algoliasearch module, which also allows fetching the products directly from the Algolia index (for this reason it's vital to configure Algolia and BigCommerce webhooks properly to ensure the correct data flow across backends because, Falcon-Server is the only middleware that connects them both).

In order to avoid the requirement for your server to be PCI compliant, it is recommended to use @deity-io/falcon-payments module which handles this requirement for you and provides payments on the client-side, so you only get a transaction ID to check/verify server side. Otherwise, you'll have to handle sensitive payment information and pass this data to BigCommerce.

## Known issues

### File Upload Product Modifier

We don't currently support file upload product modifiers. Support will be added in a future release.

### Product Modifier Cache

Unfortunately, the BigCommerce product update webhook is not triggered if you make changes to product modifier options. This means that our cache clearing isn't triggered. To see updates immediately you'll need to change another product attribute such as name, price or description. We suggest making a tiny change and then reverting it straight after.

By default the cache lifetime (TTL) of the product cache is 5 minutes, you can always wait for the cache to expire if your changes don't need to be reflected on the frontend urgently.

### Legacy product option support

When using legacy (`v2`) options, we currently support only the following option types: *Multiple Choice*, *Swatch*. This means you will be able to use legacy options for things like choosing size, color or model. If your product has other option types, the product will be visible in your storefront, but you won't be able to add it to cart.

Furthermore, each product that has legacy options must have one or more SKUs associated with it. You can check if your product has SKUs in the [BigCommerce Control Panel](https://login.bigcommerce.com/), by viewing a product and going to *Options & SKUs* and clicking the tab *SKUs*. If you haven't already created SKUs, the easiest way to do so is to click the *Generate SKUs* button (the chosen options in the dialog are not important for us). For more info on the SKU Generator, check out [BigCommerce Support](https://support.bigcommerce.com/s/article/The-Auto-SKU-Generator).

To find out more about legacy options, check out this [BigCommerce Support article](https://support.bigcommerce.com/s/article/Product-Options-v3#compare).
