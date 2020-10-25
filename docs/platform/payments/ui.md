---
id: ui
title: Payment UI Components
sidebar_label: Payment UI Components
enterprise_only: true
---

## Mapping payment components to providers

All payment providers defined in your config are passed to the frontend, these are then in turn mapped to components.

**`client/src/pages/shop/Checkout/sections/PlaceOrderSection.js`**
```js
const paymentCodeToPluginMap = {
  mollie: {
    creditcard: `Mollie/CreditCard`,
    paypal: 'Mollie/PayPal',
    ideal: 'Mollie/Ideal',
    klarnapaylater: 'Mollie/KlarnaPayLater',
    giftcard: 'Mollie/Giftcard',
    default: 'Mollie/Default'
  }
};
paymentCodeToPluginMap.getFor = (providerCode, method) => {
  const provider = providerCode in paymentCodeToPluginMap ? paymentCodeToPluginMap[providerCode] : undefined;

  if (typeof provider === 'object') {
    return provider[method] ? provider[method] : provider.default;
  }
  return provider;
};

const getPaymentUI = provider =>
  loadable(() =>
    import(/* webpackChunkName: "shop/checkout/payments/[request]" */ `../components/payments/${provider}`)
  );
```

The `key` for each value in `paymentCodeToPluginMap` should be linked to the name of the `providerCode` and `method`.


## How payment components work

As a general rule, Payment UIs will need some form of authentication. We use [load method](falcon-payments/provider#load-method) in our provider to pass data to our component to do this. This is triggered when our payment method is selected and before the component is rendered.

Each component is passed the `pay()` function. This function in turn triggers the [validate method](falcon-payments/provider#validate-payment) in your provider.


**`client/src/pages/shop/Checkout/components/payments/SimplePayment.js`**
```js
import { useCallback } from 'react';

const SimplePaymentProvider = ({ children }) => {
   // This is returned to our provider
  const pay = useCallback(() => Promise.resolve({ id: undefined }), []);

  return children(pay, { loading: false });
};
 // This is what is rendered on the frontend, you'll likely want to add a form here
SimplePaymentProvider.UI = () => null;

export default SimplePaymentProvider;
```
