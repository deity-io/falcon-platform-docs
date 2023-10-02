---
id: stripe
title: Stripe
sidebar_label: Stripe
hide_title: true
---

<a href="https://stripe.com/" rel="noreferrer noopener" target="_blank" aria-label="visit the Stripe site" className="brighten">
  <img src="/docs/img/docs/platform/stripe-logo.svg" alt="Stripe Logo" width="200"/>
</a>

## Payments infrastructure for the internet
Millions of companies of all sizes use Stripe online and in person to accept payments, send payouts, automate financial processes, and ultimately grow revenue.


import Notice from "../../includes/integrated-with-dpsg.mdx"

<Notice />

## Supported payment methods

*( Description : `code`)*

- Credit card (with and without 3D secure) : `card`
- FPX : `fpx`
- iDEAL : `ideal`
- Alipay : `alipay`
- Bancontact : `bancontact`
- Giropay : `giropay`
- Przelewy24 : `p24`
- Sofort : `sofort`
- EPS : `eps`
- Click to Pay : `secureRemoteCommerce`

While these docs are updated frequently, make sure to also check for supported methods using `dcloud payments:method:list:all` to fetch all implemented methods.

:::note Missing a method?

Need a method that Stripe supports adding to the list? Please contact us as it might be in our development pipeline.

:::

## Stripe Configuration

The easiest way to configure Stripe is by using `dcloud` CLI and the `dcloud payments:provider:configure` command. If you want to configure it manually, this can be achieved using [this endpoint →](https://dpsg.deity.cloud/#/Management/EnvironmentPaymentProviderController_stripe_create)


```json
{
  "publicKey": "string", // Secret
  "secretKey": "string", // Secret
  "testMode": "boolean"
}
```

To get your public &amp; secret keys you must have a [Stripe account](https://dashboard.stripe.com/dashboard).  Please ensure `testMode` is set to true when using test credentials.

To retrieve your credentials, log into your Stripe account and navigate to the **Developers** section ([direct link](https://dashboard.stripe.com/apikeys)). Make sure to enable 'Test mode' if you want to use test credentials ([direct link](https://dashboard.stripe.com/test/apikeys)).


### `publicKey`

The public key can be found in the **Developers** section under in the subsection **API keys**. It is labeled `Publishable key` in the `Standard keys` section and starts with `pk_`.

### `secretKey`

The secret key can be found in the **Developers** section under in the subsection **API keys**. It is labeled `Secret key` in the `Standard keys` section and 
starts with `sk_`.