---
id: mollie
title: Mollie Payments Integration
sidebar_label: Mollie Payments
---


---

<a href="https://www.mollie.com" rel="noreferrer noopener" target="_blank" aria-label="visit the Mollie site">
  <img src="/img/docs/platform/mollie-logo.svg" alt="Mollie Logo" width="200"/>
</a>

---

## Overview

Our integration with Mollie payments uses [https://github.com/mollie/mollie-api-node](https://github.com/mollie/mollie-api-node) to provide a production ready checkout that supports multiple payment methods. This ships with both our example projects.

If you want to see a live example head over to [our demo site](https://demo.deity.io/). 

Our integration includes:

- `client/src/pages/shop/Checkout/components/payments/Mollie` (Client side components)
- `@deity-io/falcon-mollie-plugin`(Client side plugin)
- `@deity/falcon-payments/packages/falcon-payments-mollie` (Server side provider)

## Supported Features

- Refunds
- Shipments
- Payment methods:
    - iDeal
    - Credit card: 
        - Mastercard
        - Visa
        - American Express
        - Maestro
    - Paypal
    - Klarna
    - Sofort
    - Giropay
    - Bancontact/MisterCash
    - Fashioncheque

## Getting started

All yo need to do is add your Mollie configuration

### 1. Create a Mollie account / API keys

You can register for an account [here](https://www.mollie.com/dashboard/signup?lang=en).

Once you've created an account you should be able to find your API keys and profile ID in the developers section. 

<img src="/img/docs/platform/mollie-account-1.png" alt="Mollie Account Api keys" width="800" style={{marginBottom: 20}}/>

You'll need your API keys later.

### 2. Add your Mollie details to your Falcon Platform config

If you're using our example app `demo-v2` all you need to do now is add your Mollie details to your server side config.

The Mollie provider should already exist in your components->payments.
**`server/config/default.json`**
```json
{
  "components": {
    "payments": {
      "config": {
        "providers": {
          "mollie": {
            "enabled": true,
            "package": "@deity/falcon-payments-mollie",
            "config": {
              "title": "Mollie",
              "apiKey": null,
              "profileId": null,
              "testMode": false
            }
          }
        }
      }
    }
  }
}
```

You just need to add you `profileId` and `apiKey`. These should be added in your `server/config/local.json` locally and on your production environment you can use these constants:

```json
"profileId": "PAYMENT_MOLLIE_PROFILE",
"apiKey": "PAYMENT_MOLLIE_KEY"
```

## Deity Cloud Environment Variables

- `FALCON_PAYMENTS_ENABLED`: [bool] - You need to use Falcon Payments to use our Mollie integration.
- `PAYMENT_MOLLIE_ENABLED`: [bool] - Enable Mollie
- `PAYMENT_MOLLIE_PROFILE`: Your profile id
- `PAYMENT_MOLLIE_KEY`: Your mollie key
- `PAYMENT_MOLLIE_TEST_MODE`: [bool] - Whether mollie is running in test mode

- `PAYMENT_MOLLIE_METHOD_PAYPAL`: [bool] - Whether the paypal payment method is enabled
- `PAYMENT_MOLLIE_METHOD_IDEAL`: [bool] - Whether the idela payment method is enabled
- `PAYMENT_MOLLIE_METHOD_CREDITCARD`: [bool] - Whether the credit card payment method is enabled
- `PAYMENT_MOLLIE_METHOD_PAYLATER`: [bool] - Whether the klarna paylater payment method is enabled
- `PAYMENT_MOLLIE_METHOD_SOFORT`: [bool] - Whether the sofort payment method is enabled
- `PAYMENT_MOLLIE_METHOD_GIFTCARD`: [bool] - Whether the giftcard payment method is enabled
- `PAYMENT_MOLLIE_METHOD_GIROPAY`: [bool] - Whether the giropay payment method is enabled
- `PAYMENT_MOLLIE_METHOD_VOUCHER`: [bool] - Whether the voucher payment method is enabled
- `PAYMENT_MOLLIE_METHOD_BANCONTACT`: [bool] - Whether the bancontact payment method is enabled

## Useful Links

- [Mollie Docs](https://www.mollie.com/nl/developers)
- [Mollie Components](https://docs.mollie.com/guides/mollie-components/overview)
- [Mollie Account Registration](https://www.mollie.com/dashboard/signup?lang=en)
- [Our demo site](https://demo.deity.io/)
