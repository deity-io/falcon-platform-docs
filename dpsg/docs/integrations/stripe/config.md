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
  "endpointSecret": string, // Private
  "testMode": boolean
}
```

To get your public &amp; secret keys you must have a [Stripe](https://dashboard.stripe.com/dashboard) account.  Please ensure `testMode` is set to true when using test credentials.

To retrieve your credentials, log into your Stripe account and navigate to the `Developers` section ([direct link](https://dashboard.stripe.com/apikeys)). Make sure to enable 'Test mode' if you want to use test credentials ([direct link](https://dashboard.stripe.com/test/apikeys)).

`publicKey`
The public key is labeled `Publishable key` in the `Standard keys` section and starts with `pk_`.

`secretKey`
The public key is labeled `Secret key` in the `Standard keys` section and starts with `sk_`.

`endpointSecret`
To generate an endpoint secret, you first need to create the we
The public key is labeled `Secret key` in the `Standard keys` section and starts with `sk_`.
