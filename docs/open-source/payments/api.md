---
title: Payments API
---

DEITY Falcon provides `@deity/falcon-payment-plugin` package with the following classes:

- `PaymentPluginModel` is a base plugin model for all supported payment methods
- `SimplePayment` is a generic payment method that does not require any frontend helpers for the order placement
- `Test3dSecure` is a helper component that performs a redirection to the external Payment Gateway

## PaymentPluginModel

Every derived component from Payment Plugin Model will get the following props:

- `config` - is an optional configuration object received from the Falcon-Server that may be required
for a proper usage of a specific Payment Method (for example, [Adyen Credit Card plugin](payments/plugins#adyen-credit-card)
requires a public client-side encryption key to be passed via this prop)
- `onPaymentDetailsReady` - is a callback function with an optional `additionalData` argument to be passed to the `placeOrder`
Mutation that may be required by the shop backend for a proper order placement (for example, Adyen Credit Card plugin requires
an encrypted credit card information to be passed to the Payment Gateway)

`PaymentPluginModel` defines an optional static `icon` property with an icon URL to be displayed on a list of available
payment methods on the checkout page, for example:

```js
import React from 'react';
import { PaymentPluginModel } from './PaymentPlugin';

export class CustomnPayment extends PaymentPluginModel {
  static icon = 'http://example.com/icon.png';

  componentDidMount() {
    // Since this payment method does not require any helpers - it can trigger
    // "onPaymentDetailsReady" right after being mounted
    this.props.onPaymentDetailsReady();
  }

  render() {
    // Render optional "children" (like "readme" defined by the caller component)
    return this.props.children ? this.props.children : null;
  }
}
```

## SimplePayment

The name of this component speaks for itself - it can be used whenever your payment does not require
any frontend helpers for the submission.

One of the examples of such a plugin could be [PayPal Express](payments/plugins#paypal-express)
payment method, when visitors do not have to enter any data on the Checkout page, they will be
redirected to the PayPal log-in page to complete their payment after clicking on the "Place an order" button.

> See [here](plugins#simple-payment) how to use this payment method

## Test3dSecure

This component is being used to redirect the visitor to the external Payment Gateway
for further checks and validations (like confirming your Bank details etc).

Here's how it can be used to perform GET redirection:

```js
import { Test3dSecure } from '@deity/falcon-payment-plugin';

// Based on your "placeOrder" Mutation response
<Test3dSecure url="http://payment.com" method="GET" />
```

Getting this component - visitor will be redirected to `http://payment.com` page with `GET` method.

And here's how you could "redirect" the visitor with `POST` method and passing extra POST data:

```js
import { Test3dSecure } from '@deity/falcon-payment-plugin';

// Based on your "placeOrder" Mutation response
<Test3dSecure url="http://payment.net" method="POST" fields={[{ name: 'foo', value: 'bar' }]} />
```

Getting this component - the visitor will be redirected to `http://payment.net` page with `POST` method
and passing `foo=bar` data.
