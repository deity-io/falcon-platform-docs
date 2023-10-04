---
id: overview
title: Unbxed Integration
sidebar_label: Overview
---

import Button from '@site/src/components/Button';


<a href="https://www.unbxd.com/" rel="noreferrer noopener" target="_blank" aria-label="visit the Unbxd site" className="invert">
  <img src="/docs/img/docs/platform/unbxd-logo.svg" alt="Unbxd Logo" className="height80 pb20"/>
</a>

## Digital Commerce Transformed

Falcon Platform provides support for search using [https://unbxd.com/](https://unbxd.com/).

<Button variant="contained" size="medium" href="/docs/integrations/unbxd/getting-started">
  Start reading →
</Button>
<div className="mb60"></div>

:::caution
Unbxd is currently only supported with our Adobe Commerce CE (Magento) shop backend.
:::

This module provides GraphQL resolvers for `@deity/search-extension package`.

This module is only compatible with Magento store data, exported by Unbxd extension. In case if any modifications are done to Magento -> Unbxd export format data formatting should be revised.

## Helpful links

- [Getting started](/docs/integrations/unbxd/getting-started)
- [Unbxd Magento 2 Module](https://github.com/unbxd/Magento-2-Extension)

## Supported features

- Search
- Category product listing
- Product Filtering
- Product Sorting
- Product index
- Index updates from shop actions (add / edit / remove products)
