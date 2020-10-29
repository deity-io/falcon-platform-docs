---
id: integration
title: Falcon Payments Integration
sidebar_label: Integration Guide
enterprise_only: true
---

We recommend using one of our example apps as a start place, these are already setup using Falcon Payments.

This guide will talk you though how those integrations work and how to create your own.

## 1. Getting and setting payment methods

Getting the avaiable shipping methods in a component is simple.

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

In this example we get the avaiable methods from `PaymentMethodListQuery` and set the payment method using the `setPayment` method from `SetPaymentMethod`.


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

const getPaymentUI = provider =>
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
                pay().then(payResult =>
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

You'll notice we have 2 additonal components also loaded:

```js
{result && result.url && <TestAdditionalPaymentStep {...result} />}
{result && result.id && <Redirect to="/checkout/confirmation" />}
```

`TestAdditionalPaymentStep` is used to handle payment methods that require an additional step, e.g. 3D secure.
`Redirect` simple redirects a user to your desired success page if result exists in `useCheckout`.


## 3. Example UI Components

The UI components for each method can vary, some being very simple and some needing additional info (e.g. a credit card form).

### Simple UI Example
