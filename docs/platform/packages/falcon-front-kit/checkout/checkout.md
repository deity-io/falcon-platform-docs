---
id: checkout
title: '<Checkout /> & useCheckout'
sidebar_label: '<Checkout />'
---

A `<Checkout />` (`useCheckout`) provides access to checkout state keept via `<CheckoutProvider />`

# Import

```javascript
import { Checkout } from '@deity/falcon-front-kit';
```

# Props

| Name       | Type                                              | Default     | Description  |
| ---------- | ------------------------------------------------- | ----------- | ------------ |
| `children` | `(renderProps: CheckoutContextType) => ReactNode` | `undefined` | render props |

## CheckoutContextType

| Name                       | Type                                | Description                                                                                                                                                     |
| -------------------------- | ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `values`                   | [`CheckoutValues`](checkout-values) | current checkout state                                                                                                                                          |
| `step`                     | `string`                            | current step, one of `['email', 'shippingAddress', 'billingAddress', 'shippingMethod', 'paymentMethod', 'placeOrder']` or your custom defined value             |
| `nextStep`                 | `undefined` &#124; `string`         | next possible step for the current one, the calculation is based on `stepsOrder`, `undefined` if no more steps available                                        |
| `stepForward`              | `() => voud`                        | sets `step` to value of `nextStep`                                                                                                                              |
| `setStep`                  | `(string) => void`                  | sets `step`, if possible for current `values`                                                                                                                   |
| `isLoading`                | `boolean`                           | determines if checkout state is synchonizing with backend                                                                                                       |
| `setLoading`               | `(boolean) => void`                 | sets `isLoading`                                                                                                                                                |
| `isBillingSameAsShipping`  | `boolean`                           | determines if `billingAddress` should be the same as `shippingAddress` and vice versa                                                                           |
| `setBillingSameAsShipping` | `(boolean) => void`                 | sets `isBillingSameAsShipping`                                                                                                                                  |
| `result`                   | `PlaceOrderResult`                  | result of checkout process (after placing order)                                                                                                                |
| `setResult`                | `(PlaceOrderResult) => void`        | sets `result`                                                                                                                                                   |
| `setEmail`                 | `(string) => void`                  | sets `values.email`                                                                                                                                             |
| `setShippingAddress`       | `(CheckoutAddress) => void`         | sets `values.setShippingAddress`                                                                                                                                |
| `setBillingAddress`        | `(CheckoutAddress) => void`         | sets `values.setBillingAddress`                                                                                                                                 |
| `setShippingMethod`        | `(ShippingMethod) => void`          | sets `values.setShippingMethod`                                                                                                                                 |
| `setPaymentMethod`         | `(PaymentMethodData) => void`       | sets `values.setPaymentMethod`                                                                                                                                  |
| `setOrderData`             | `(PaymentMethodData) => void`       | sets `values` (override them), useful when order was placed via `<PlaceOrder />` or `usePlaceOrder` hook with some overrides and state needs to be synchronized |

# Example

```javascript
<Checkout>
  {({ values, step, setEmail }) => {
    const { email } = values;

    return null;
  }}
</Checkout>
```

beare in mind that `<Checkout />` (`useCheckout`) require `<checkoutProvider />` to be rendered beforre in components tree

```javascript
<CheckoutProvider>
  {...}
  <Checkout />
  {...}
</CheckoutProvider>
```
