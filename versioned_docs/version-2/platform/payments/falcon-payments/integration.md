---
id: integration
title: Falcon Payments Integration
sidebar_label: Integration Guide
---

We recommend using one of our example apps as a start place, these are already setup using Falcon Payments.

This guide will talk you though how those integrations work and how to create your own.

## 1. Getting and setting payment methods

Getting the available shipping methods in a component is simple.

We'll be using the `PaymentMethodListQuery` query from `@deity/falcon-shop-data` and `SetPaymentMethod` from `@deity/falcon-front-kit`.

First you'll need to ensure your shop API has a `paymentMethodList` method that returns methods. If you're using one of our existing integrations this will exist already.

In your client side component the code is as simple as:

```js
...
import { PaymentMethodListQuery } from '@deity/falcon-shop-data';
import { SetPaymentMethod } from '@deity/falcon-front-kit';
...
export const PaymentMethodSection = () => {

  const [state, setState] = useState(values.paymentMethod || undefined);

  <PaymentMethodListQuery fetchPolicy="network-only">
    {({ data: { paymentMethodList } }) => {
      if (paymentMethodList.length === 0) {
        return (
          <p>No Methods</p>
        );
      }

      return (
        <SetPaymentMethod>
          {(setPayment, { error, loading }) => (
            <>
              {paymentMethodList.map(method => (
                <PaymentMethodOption
                  key={getMethodID(method)}
                  onChange={() => setState(method)}
                  checked={state ? getMethodID(method) === getMethodID(state) : false}
                  option={method}
                  disabled={loading}
                  total={cart}
                />
              ))}

              <NextStepButton
                onClick={() => {
                  setPayment(state);
                }}
                disabled={!state || !state.provider}
                loading={loading}
              />
            </>
          )}
        </SetPaymentMethod>
      );
    }}
  </PaymentMethodListQuery>
}

```

In this example we get the available methods from `PaymentMethodListQuery` and set the payment method using the `setPayment` method from `SetPaymentMethod`.

## 2. Loading the payment UI

The next thing you'll want to do is to get the selected payment method and load the payment UI.

We use `loadable` so only the selected method is loaded. As you can see from the code below we use the provider code and method (if available) to define which UI components to load.

```js
const paymentCodeToPluginMap = {
  cash: `SimplePayment`,
  stripe: `Stripe`,
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

const getPaymentUI = (provider) =>
  loadable(() =>
    import(/* webpackChunkName: "shop/checkout/payments/[request]" */ `../components/payments/${provider}`)
  );
```

Now we render the component. We're able to get the selected method from `useCheckout`

```js
import { useCheckout } from '@deity/falcon-front-kit';

export const PlaceOrderSection = () => {
  const { values, setStep, result } = useCheckout();
  const { paymentMethod } = values;
  const [placeOrder, { loading, error }] = usePlaceOrder();

  const paymentPlugin = paymentCodeToPluginMap.getFor(paymentMethod.provider, paymentMethod.method);
  if (!paymentPlugin) {
    if (process.env.NODE_ENV !== 'production') {
      console.error(`No Payment Method Plugin found for ${paymentMethod.provider}`);
    }
  }

  const Payment = useRef(getPaymentUI(paymentPlugin)).current;

  return (
    <>
      <Payment {...paymentMethod}>
        {(pay, { loading: paying }) => (
          <>
            {Payment.UI && <Payment.UI />}
            <NextStepButton
              onClick={() =>
                pay().then((payResult) =>
                  placeOrder(
                    {
                      ...values,
                      paymentMethod: {
                        ...values.paymentMethod,
                        data: {
                          ...values.paymentMethod.data,
                          ...payResult
                        }
                      }
                    },
                    {
                      awaitRefetchQueries: false
                    }
                  )
                )
              }
              loading={paying || loading}
            >
              <T id="checkout.placeOrder" />
            </NextStepButton>
            <ErrorSummary errors={error} mt="sm" />
          </>
        )}
      </Payment>

      {result && result.url && <TestAdditionalPaymentStep {...result} />}
      {result && result.id && <Redirect to="/checkout/confirmation" />}
    </>
  );
};
```

You'll notice we have 2 additional components also loaded:

```js
{
  result && result.url && <TestAdditionalPaymentStep {...result} />;
}
{
  result && result.id && <Redirect to="/checkout/confirmation" />;
}
```

`TestAdditionalPaymentStep` is used to handle payment methods that require an additional step, e.g. 3D secure.
`Redirect` simple redirects a user to your desired success page if result exists in `useCheckout`.

## 3. Example UI Components

The UI components for each method can vary, some being very simple and some needing additional info (e.g. a credit card form).

### Simple UI Example

The `Payment.UI` can return `null` if you don't need to display anything other than the name of the method.

In this example below we display a simple line of text informing the customer they'll be redirected to complete the payment.

It's important that the `pay` method is passed to the children of `Payment`.

```js
import React, { useCallback } from 'react';
import { T } from '@deity/falcon-i18n';
import { Text, FlexLayout, withTheme } from '@deity/falcon-ui';

const Payment = withTheme(({ children }) => {
  const pay = useCallback(() => Promise.resolve({ id: undefined }), []);
  return children(pay, { loading: false });
});

Payment.UI = () => (
  <FlexLayout as="section" my="xs" css={{ width: '100%' }}>
    <Text mt="xs" color="secondaryText" fontWeight="regular">
      <T id="payment.redirect.default" />
    </Text>
  </FlexLayout>
);

export default Payment;
```

### Complex UI Example

This example is taken from our `Stripe` credit card form. We wrap the entire form in `StripePlugin`, this loads the various scripts that are needed to load the Stripe card fields. You'll notice we pass `prop` to `StripePlugin`. These props are passed from `Falcon Payment` and depending on your method are likely to contain API keys needed to load the UI.

```js
import React, { useState } from 'react';
import { StripePlugin, CardElement } from '@deity/falcon-stripe-plugin';
import { Box } from '@deity/falcon-ui';

const Payment = ({ children, ...props }) => {
  const [loading, setLoading] = useState(false);
  const fn = () => {
    setLoading(true);
    return Promise.resolve();
  };

  return (
    <StripePlugin {...props}>
      {(pay) =>
        children(
          () =>
            fn()
              .then(() => pay())
              .then((x) => {
                setLoading(false);
                return x;
              })
              .catch((x) => {
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
  <Box>
    {/* https://stripe.com/docs/stripe-js/reference#element-options */}
    <CardElement hidePostalCode />
  </Box>
);

export default Payment;
```
