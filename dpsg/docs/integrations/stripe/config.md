---
id: config
title: Configuration
sidebar_label: Configuration
---

## Provider Config

This can be configured using [this endpoint](https://dpsg.dev.deity.cloud/#/Management/EnvironmentPaymentProviderController_stripe_create)


```
{
  "publicKey": string, // Private
  "secretKey": string, // Private
  "testMode": boolean
}
```

To get your public &amp; secret keys you must have a [Stripe](https://dashboard.stripe.com/dashboard) account.  Please ensure `testMode` is set to true when using test credentials.
