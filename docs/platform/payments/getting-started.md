---
id: getting-started
title: Getting Started
sidebar_label: Getting Started
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

Each provider has a package associated with it and a `config` object. You can use this config to pass data such as API keys to your provider.  As per any config it's worth looking at which [config](docs/platform/client/configuration) file should contain which configurations (to abvoid sensitive data by commited to your repository).

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

It expects a `PaymentMethodInstance` to be returned, this will look like this:

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

The param `payload` is passed from the `payFn()` in your payment plugin (explained later).

You might use this to pass Auth tokens needed to process the payment.

## Payment Components / Plugins

All payment providers defined in your config are passed to the frontend, these are then in turn mapped to components.

**`client/src/pages/shop/Checkout/sections/PlaceOrderSection.js`.**
```js
const paymentCodeToPluginMap = {
  cash: `SimplePayment`,
  stripe: `Stripe`
};
paymentCodeToPluginMap.getFor = code => (code in paymentCodeToPluginMap ? paymentCodeToPluginMap[code] : undefined);

const payment = code =>
  loadable(() => import(/* webpackChunkName: "shop/checkout/payments/[request]" */ `../components/payments/${code}`));
```

**`client/src/pages/shop/Checkout/components/PaymentMethodPicker.js`.**
```js
import { SimplePayment } from '@deity/falcon-payment-plugin';
import Stripe from './payments/Stripe';

const paymentCodeToPluginMap = {
  cash: SimplePayment,
  stripe: Stripe
};
```

The `key` for each value in `paymentCodeToPluginMap` should be linked to the name of the `provider` in the your config.

As a general rule we advise having 2 payment components, one for the UI and the other (normally a `plugin`) to handle the functionality. This may vary for different implementations.

### Your component

**Examples are from our Stripe Component**

**`client/src/pages/shop/Checkout/components/payments/Stripe.js`**
```js
import React, { useState } from 'react';
import { StripePlugin, CardElement } from '@deity/falcon-stripe-plugin';
import { Box, themed } from '@deity/falcon-ui';

const StripeCardLayout = themed({
  tag: Box,
  defaultTheme: {
    stripeCardLayout: {
      my: 'md',
      css: ({ theme }) => ({
        width: '100%',
        '.StripeElement': {
          border: theme.borders.regular,
          borderColor: theme.colors.secondaryDark,
          borderRadius: theme.borderRadius.md,
          padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`
        }
      })
    }
  }
});

const Payment = ({ children, ...props }) => {
  const [loading, setLoading] = useState(false);
  const fn = () => {
    setLoading(true);
    return Promise.resolve();
  };

  return (
    <StripePlugin {...props}>
      {pay =>
        children(
          () =>
            fn()
              .then(() => pay())
              .then(x => {
                setLoading(false);
                return x;
              })
              .catch(x => {
                setLoading(false);
                return Promise.reject(x);
              }),
          { loading }
        )
      }
    </StripePlugin>
  );
};
Payment.UI = () => (
  <StripeCardLayout>
    <CardElement hidePostalCode />
  </StripeCardLayout>
);

export default Payment;

```

### Your plugin


## Examples

These examples contain a step by step guide to adding a new payment method.

- [Braintree Payments](/docs/platform/cookbook/integrations/braintree)
