---
id: stripe
title: Stripe
sidebar_label: Stripe
---

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

The easiest way to configure Stripe is by using `dcloud` CLI and the `dcloud payments:provider:configure` command. If you want to configure it manually, this can be achieved using [this endpoint](https://dpsg.deity.cloud/#/Management/EnvironmentPaymentProviderController_stripe_create)


```json
{
  "publicKey": "string", // Private
  "secretKey": "string", // Private
  "endpointSecret": "string", // Private
  "testMode": "boolean"
}
```

To get your public &amp; secret keys you must have a [Stripe](https://dashboard.stripe.com/dashboard) account.  Please ensure `testMode` is set to true when using test credentials.

To retrieve your credentials, log into your Stripe account and navigate to the `Developers` section ([direct link](https://dashboard.stripe.com/apikeys)). Make sure to enable 'Test mode' if you want to use test credentials ([direct link](https://dashboard.stripe.com/test/apikeys)).


### `publicKey`

The public key can be found in the `Developers` section under in the subsection `API keys`. It is labeled `Publishable key` in the `Standard keys` section and starts with `pk_`.

### `secretKey`

The secret key can be found in the `Developers` section under in the subsection `API keys`. It is labeled `Secret key` in the `Standard keys` section and 
starts with `sk_`.

### `endpointSecret`

This is used for receiving webhooks from Stripe. DPSG uses this when payments are updated.

You can get your client secret when configuring your webhook. To do this, navigate to the `Webhooks` subsection and use the `Add endpoint` button.

Use the following settings to complete the configuration:

- Endpoint URL: https://dpsg.{region}.deity.cloud/api/payment/webhook/{organization}/{project}/{environment}/stripe (replacing `{region}`, `{organization}`, `{project}` and `{environment}` with your details). If your region is Europe it will be omitted and the base url will be (https://dpsg.deity.cloud).
- Events: Select all `Payment Intent` events

Once completed, the webhook secret will be displayed on the top right of the webhook detail page and starts with `we_`.