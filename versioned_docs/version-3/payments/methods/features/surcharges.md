---
id: surcharges
title: Surcharges in Deity Payment Orchestrator
sidebar_label: Surcharges
---

# Surcharges

## Overview

Surcharges can be configured on each payment method and allow you to charge a %, set fee or a mixture of both to customers who use that method.

:::note Using BigCommerce?
Unfortunately surcharges don't currently work with BigCommerce. We're looking out for changes on their end so we can implement it.
:::

## How to configure surcharges

All payment method config can be done via our `dcloud` cli tool.

### Configuration Options

Surcharges should be passed as an array to each payment method on your environment.  

Surcharges can be an array, allowing different config for different countries (based on the customers billing address).

`*` represents all countries.

```json
"surcharge": [
  {
    "countries": [
      "*"
    ],
    "percentage": 1,
    "fixed": [
      {
        "currency": "eur",
        "amount": 0
      }
    ]
  },
  {
    "countries": [
      "NL"
    ],
    "percentage": 1.5,
    "fixed": [
      {
        "currency": "eur",
        "amount": 2
      }
    ]
  }
]
```

In the example above all countries will get 1% of their subtotal added as a surcharge except customers in the Netherlands. They will get charged 1.5% of the subtotal + a flat fee or 2 euros.
