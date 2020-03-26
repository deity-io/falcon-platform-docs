---
id: provider
title: Payment Provider
sidebar_label: Payment Provider
---

## Registering a new Payment Provider

Your payment provider acts as the middleware between your frontend components and the payment service provider (Stripe, Braintree, PayPal etc).

Payment Providers are registered in your server side config (`server/config/default.json`).

```json
{
  "components": {
    "payments": {
      "package": "@deity/falcon-payments",
      "config": {
        "providers": {
          "stripe": {
            "package": "@deity/falcon-payments/src/provider/stripe",
            "config": {
              "title": "Stripe",
              "secretKey": null,
              "publicKey": null
            }
          },
          "cash": {
            "package": "@deity/falcon-payments/src/provider/plain",
            "config": {
              "title": "Cash on delivery"
            }
          }
        }
      }
    }
  }
}
```

Each provider has a package associated with it and a `config` object. You can use this config to pass data such as API keys to your provider.  As per any config it's worth looking at which [config](docs/platform/client/configuration) file should contain which configurations (to avoid sensitive data by commited to your repository).

**Stripe** and **Cash on delivery** providers are both shipped with our `@deity/falcon-payments` package.

## How the provider works

There are a few keys things to understand about payment providers:

- Configurations added to the `config` object in your config json files are available as `config` in your `constructor`.
- The `initialize` function is run when the method is selected
- The `validate` function is run when the payment is triggered on the frontend.
- Both `validate` and `initialize` have access to the param `payload` (more info below).

This is a good example of what your payment provider might look like:

**`/@deity/falcon-payments/src/provider/plain.js`**
```js
module.exports = class PlainPayment {
  /**
   * @param {string} code
   * @param {ProviderConfig} config
   */
  constructor(code, config) {
    this.code = code;
    this.config = config;
  }

  /**
   * @param {PaymentRequestPayload} payload
   * @returns {Promise<PaymentMethodInstance>}
   */
  async initialize() {
    return {
      title: this.config.title,
      code: this.code
    };
  }

  /**
   * @param {PaymentValidationPayload} payload
   * @returns {Promise<PaymentValidationResult>}
   */
  async validate(payload) {
    return payload;
  }
};
```

### `initialize(payload)`

This function is triggered when the method is selected, before the linked component (more on this later) is rendered. 

The param `payload` is an object that will look like this: 

```js
{
  id: 'TRANSACTION_ID',
  total: 'TRANSACTION_TOTAL',
  currency: 'CURRENCY_CODE',
  email: 'EMAIL_ADDED_AT_CHECKOUT',
  customerId: CUSTOMER_ID
}
```

It expects an object of type `PaymentMethodInstance` to be returned, this will look like this:

```js
{
  title: this.config.title,
  code: this.code,
  config: {
    'ANY_CONFIG_YOU_NEED'
  }
}
```

The `config` object returned can return any information you might need in your components. This is a great place to put keys and config you need to render the payment form.

### `validate(payload)`

This method is triggered by the `placeOrder` function imported from `@deity/falcon-front-kit`:

```js
import { usePlaceOrder } from '@deity/falcon-front-kit';
const [ placeOrder ] = usePlaceOrder();
```

In the `demo-v2` example project this is found in `client/src/pages/shop/Checkout/sections/PlaceOrderSection.js`.

The param `payload` is passed from the `pay()` in your [payment component](ui).
