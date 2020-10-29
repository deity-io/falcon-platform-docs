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
