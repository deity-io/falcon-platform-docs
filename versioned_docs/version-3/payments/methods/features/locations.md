---
id: locations
title: Localization
sidebar_label: Localization
---

## Overview

Each payment method can be enabled for only certain country codes (based on the customers billing address).

## How to configure country data

All payment method config can be done via our `dcloud` cli tool.

### Configuration Options

Countries should be passed as an array to each payment method on your environment.  

`*` represents all countries. If no country data is passed the method will be enabled for all locations.

:::note Not all methods showing
We allow filtering of methods based on country codes. At the same time we also pass country data to each payment provider. Meaning that some methods, whilst enabled in DPSG may not be available from the provider itself.
:::

```json
"countries": [
    "NL",
    "FR"
  ],
```
In the example above the method is enabled for the Netherlands and France only.
