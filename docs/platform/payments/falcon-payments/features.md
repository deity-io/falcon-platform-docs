---
id: features
title: Falcon Payments Features
sidebar_label: Features
enterprise_only: true
---

Along side handling transactions Falcon Payments also provides a few bits of additional functionality.

Each provider can be configured to handle payment surcharges per method, per country. Each method can also be enabled or disabled on a country level.

:::note File level config only
At the moment surcharges and country restrictions can only be configured in your `server/config` files. We are working hard to make this functionality available to manage in your cloud dashboard.
:::

## Surcharges

A surcharge is an additonal fee that the merchant might want to charge the customer for using a particular payment method.

<img src="/img/docs/platform/payments/surcharges.png" alt="Falcon Payment surcharges" width="400" style={{ marginBottom: 20 }} />

This fee can be calculated in a few ways:

- Percentage of order subtotal
- Flat Fee
- Percentage of order subtotal + Flat Fee

:::note Not available in BigCommerce
Unfortunately, BigCommerce APIs don't currently allow us a way to add surcharges to orders so this feature isn't available.
:::

## Country Restrictions
