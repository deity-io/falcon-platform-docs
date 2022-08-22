---
id: payment-list
title: Payment Method List
sidebar_label: Payment Method List
---

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
      webPayments: supportedWebPayments
    }
  }}
>
  {({ data: { paymentMethodList } }) => ()}
</PaymentMethodListQuery>
```

`paymentMethodList` contains `items` which is a list of available payment methods based on the filters passed and your payment profile.

:::note webPayments
This will be explained in a later section
:::
