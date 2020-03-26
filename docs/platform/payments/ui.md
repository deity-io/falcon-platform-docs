---
id: ui
title: Payment UI Components
sidebar_label: Payment UI Components
---

## Mapping payment components to providers

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


## How payment components work

As a general rule, Payment UIs will need some form of authentication. We use the [initialize method](provider#initializepayload) in our provider to pass data to our component to do this. This is triggered when our payment method is selected and before the component is rendered.

Each component is passed the `pay()` function. This function in turn triggers the [validate method](provider#validatepayload) in your provider.


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
