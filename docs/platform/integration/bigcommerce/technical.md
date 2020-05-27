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