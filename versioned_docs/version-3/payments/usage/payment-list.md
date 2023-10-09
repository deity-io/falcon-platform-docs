---
id: payment-list
title: Payment method list in Deity Payments
sidebar_label: Payment method list
---

# Payment method list

Getting a list of payment methods is a case of using a simple GraphQL query.

We allow for filters to be passed from the client app to allow for listing of methods outside of the checkout flow. For security, these filters cannot be passed from the client app later down the line.

## Usage

```jsx
import { PaymentMethodListQuery } from '@deity/falcon-payment-data';
...
<PaymentMethodListQuery
  fetchPolicy="cache-and-network"
  variables={{
    input: {
      currency,
      total,
      country,
      webPayments: supportedWebPayments // See below
    }
  }}
>
  {({ data: { paymentMethodList } }) => ()}
</PaymentMethodListQuery>
```

`paymentMethodList` contains `items` which is a list of available payment methods based on the filters passed and your payment profile.

### Web Payments (Apple & Google Pay)

If you plan on using web payments we recommend you wrap your payment list query in our provider.

As checks for web payment support are based on the OS and browser this has to happen client side.

This provider will pass an array of supported methods.

```jsx
import { WebPayment, WebPaymentProvider } from '@deity/falcon-payment-ui';
...
<WebPaymentProvider currency={currency}>
  <WebPayment>
    {webPayment => {
      if (webPayment.loading) {
        return <Loader />;
      }

      const { supportedWebPayments } = webPayment;
      ...
      // List query here
    }}
  </WebPayment>
</WebPaymentProvider>
```
