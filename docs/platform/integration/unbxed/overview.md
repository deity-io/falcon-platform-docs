---
id: overview
title: Unbxed Integration
sidebar_label: Overview
---

:::caution
Unbxed is currently only supported with our Magento 2 shop backend.
:::

## Overview

Falcon Platform provides support for search using [https://unbxd.com/](Unbxd).

This module provides GraphQL resolvers for `@deity/search-extension package`.

:::note
This package overrides Category.productList Query resolver.
If you want to override it - Unbxd API must be declared after the Shop API
if not - declare it before the Shop API
:::

This module is only compatible with Magento store data, exported by Unbxd extension. In case if any modifications are done to Magento -> Unbxd export format data formatting should be revised.

## Features

- Search
- Category product listing
- Product Filtering
- Product Sorting
- Product index
- Index updates from shop actions (add / edit / remove products)
