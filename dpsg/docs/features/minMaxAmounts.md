---
id: minMaxAmounts
title: Min/Max Amounts
sidebar_label: Min/Max Amounts
---

## Overview

Each payment method can be enabled for only certain order amounts. By default, a new payment method will be available for all order amounts, but by specifying minimum and/or maximum order amounts per currency, a payment method will only show when the order amount and currency match the specified boundaries.

## How to configure min/max amounts

All payment method config can be done via our `dcloud` cli tool.
When configuring a new payment method using `dcloud payments:method:configure`, a wizard is launched to guide you through the configuration process.
The intitial steps before selecting the currencies are:
1. Select an environment
2. Select the configured payment provider
3. Select the payment method
4. Set the name of the custom payment method
5. Select the countries for the payment method ([Location Specific Config](/docs/features/locations))
6. Select the currencies for the payment method ([Currency Specific Config](/docs/features/currencies))
7. Configure the surcharges ([Surcharges](/docs/features/surcharges))

Step 8 asks you whether you want to set min/max amount restrictions or not (configure by typing `y`). Next, select a currency from the list. You are then asked to specify the minimum amount, which can be skipped by hitting `Enter` or specified by filling in a number. The same should then be done for the maximum amount.
After configuring one set of min/max amounts, you are presented with the option to do the same for other currencies as well.

### Configuration Options

Min/Max amounts should be passed as an array to each payment method on your environment. This allows you to configure min/max amounts per currency.

`*` represents all currencies.

```json
"minMaxAmounts": [
  {
    "currency": "EUR",
    "min": 10
  },
  {
    "currency": "USD",
    "min": 5,
    "max": 500
  }
]
```

In the example above the payment method will only be available for orders with a total of more than €10. When US Dollar is the selected currency, the payment method will be available when the order total is between $5 and $500.