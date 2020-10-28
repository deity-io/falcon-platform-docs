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

### Overview

A surcharge is an additonal fee that the merchant might want to charge the customer for using a particular payment method.

<img src="/img/docs/platform/payments/surcharges.png" alt="Falcon Payment surcharges" width="400" style={{ marginBottom: 20 }} />

This fee can be calculated in a few ways:

- Percentage of order subtotal
- Flat Fee
- Percentage of order subtotal + Flat Fee

The fee can be different **per country**, **per method** and a different flat fee can be passed per **currency**.  The country is based on the **billing address** and the currency is based on the store currency.

### Configuring surcharges

Surcharges are currently added in your `server/config` files. 

**server/config/default.json**

```json
{
  ...
  "components": {
    "payments": {
      "package": "@deity/falcon-payments",
      "config": {
        ...
        "providers": {
          "mollie": {
            "package": "@deity/falcon-payments-mollie",
            "config": {
              ...
              "methods": {
                "paypal": {
                  ...
                  "surcharge": [
                    {
                      "countries": ["*"],
                      "percentage": 1
                    },
                    {
                      "countries": ["nl"],
                      "percentage": 1,
                      "fixed": [
                        {
                          "currency": "usd",
                          "amount": 0.5
                        },
                        {
                          "currency": "eur",
                          "amount": 1.5
                        }
                      ]
                    }
                  ]
                }
              }
            }
          }
        }
      }
    }
  }
}
```

The surcharge parameter on the payment component config accepts an array of surcharges with the following parameters:

```json
{
  "countries": ["nl"], // array of strings
  "percentage": 1, // number
  "fixed": [ // array
    {
      "currency": "usd", // string
      "amount": 1 // number
    }
  ]
}
```

If `*` is passed to the countries array it acts as a fallback.  Both `fixed` and `percentage` are optional. If both are passed the total surcharge will be both values added together.

:::note Not available in BigCommerce
Unfortunately, BigCommerce APIs don't currently allow us a way to add surcharges to orders so this feature isn't available.
:::

## Country Restrictions

### Overview

Each provider and method can be globally enabled or disabled via the config. On top of this, each method can be enabled or disabled per country (based on the customers **billing address**).

### Configuring country restrictions

Country restrictions are added to the payment provided component config in the same way as surcharges.

**server/config/default.json**

```json
{
  "components": {
    "payments": {
      "package": "@deity/falcon-payments",
      "config": {
        "providers": {
          "mollie": {
            "enabled": true,
            "package": "@deity/falcon-payments-mollie",
            "config": {
              ...
              "methods": {
                "paypal": {
                  "enabled": true,
                  "countries": ["nl", "gb", "de"],
                  "surcharge": [
                    ...
                  ]
                }
              }
            }
          }
        }
      }
    }
  }
}
```

Each provider can be passed an `enabled` argument. If set to false the entire provider and all it's methods will be disabled.

Within the providers config different methods can be configured. The `key` is based on the `method code`. 

```json
"methods": {
  "paypal": {
    "enabled": true,
    "countries": ["nl", "gb", "de"]
  },
  "creditcard": {
    ...
  }
}
```

Each method accepts 3 arguments:

- `enabled` to enable or disable the method globally. This will override any configuration in the `countries` argument.
- `surcharge` to configure surcharges (explained above).
- `countries` this is an array of country codes the method is available in. If empty the method will be enabled for all countries.
