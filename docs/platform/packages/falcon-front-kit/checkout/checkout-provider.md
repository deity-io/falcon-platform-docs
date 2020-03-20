---
id: checkout-provider
title: '<CheckoutProvider />'
sidebar_label: '<CheckoutProvider />'
---

A `<CheckoutProvider />` component keeps the state of checkout process and orchestrate its flow. In order to access `<CheckoutProvider />` state plase look at `<Checkout />` component or its hook alternative `userCheckout`.

# Import

```javascript
import { CheckoutProvider } from '@deity/falcon-front-kit';
```

# Props

| Name                    | Type                                                   | Default                                                                                           | Description                                                                                                  |
| ----------------------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| `initialValues`         | `undefined` &#124; [`CheckoutValues`](checkout-values) | `{}`                                                                                              | initial values                                                                                               |
| `stepsOrder`            | `string[]`                                             | `['email', 'shippingAddress', 'billingAddress', 'shippingMethod', 'paymentMethod', 'placeOrder']` | wizard steps and its order, it is possible to specify custom step, but removing any of them is not supported |
| `billingSameAsShipping` | `undefined` &#124; `boolean`                           | `false`                                                                                           | determines if `billingAddress` should be the same as `shippingAddress` and vice versa                        |
| `autoStepForward`       | `boolean`                                              | `true`                                                                                            | determines if a `stepForward` should be automatically invoked when the value for the current step is set     |
| `children`              | `ReactNode`                                            | `undefined`                                                                                       | React component                                                                                              |

# Example

```javascript
<CheckoutProvider
  stepsOrder={['shippingAddress', 'billingAddress', 'email', 'shippingMethod', 'paymentMethod', 'placeOrder']}
  billingSameAsShipping
>
  {/* your checkout wizard */}
</CheckoutProvider>
```
