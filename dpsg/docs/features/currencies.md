---
id: currencies
title: Currency Specific Config
sidebar_label: Currency Specific Config
---

## Overview

Each payment method can be enabled for only certain currencies. By default, a new payment method will be available for all currencies, but by selecting a subset of currencies, the payment method will only be shown when one of the specified currencies is selected.

## How to configure currencies

All payment method config can be done via our `dcloud` cli tool.
When configuring a new payment method using `dcloud payments:method:configure`, a wizard is launched to guide you through the configuration process.
The intitial steps before selecting the currencies are:
1. Select an environment
2. Select the configured payment provider
3. Select the payment method
4. Set the name of the custom payment method
5. Select the countries for the payment method ([Location Specific Config](/docs/features/locations))

Step 6 asks you to select the currencies for which this payment method should be enabled. Select `ANY` to enable it for all currencies, or select specific currencies by using the `arrow keys` and `space` to select/deselect.

### Configuration Options

Currencies should be passed as an array to each payment method on your environment.  

`*` represents all currencies. If no currency data is passed the method will be enabled for all currencies (`*`).

:::note Not all methods showing
We allow filtering of methods based on currencies. At the same time we also pass the currency code to each payment provider. Meaning that some methods, whilst enabled in DPSG, may not be available from the provider itself.
:::

```json
"currencies": [
    "EUR",
    "USD"
  ],
```
In the example above the method is enabled for Euro and US Dollar only.
