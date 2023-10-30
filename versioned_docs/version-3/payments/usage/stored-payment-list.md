---
id: stored-payment-list
title: Stored payment methods in Deity Payment Orchestrator
sidebar_label: Stored payment methods
---

# Stored payment methods

Getting a list of payment methods is a case of using a simple GraphQL query.

We allow for filters to be passed from the client app to allow for listing of methods outside of the checkout flow. For security, these filters cannot be passed from the client app later down the line. The customer ID attached to the stored methods is grabbed from the session so this can't be faked.

## Usage

```jsx
import { StoredPaymentMethodListQuery } from '@deity/falcon-payment-data';
...
<StoredPaymentMethodListQuery
  fetchPolicy="cache-and-network"
  variables={{
    input: {
      currency,
      total,
      country
    }
  }}
>
  {({ data: { storedPaymentMethodList } }) => ()}
</StoredPaymentMethodListQuery>
```

`storedPaymentMethodList` contains `items` which is a list of available payment methods based on the filters passed and your payment profile.
