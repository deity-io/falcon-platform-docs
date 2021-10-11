---
id: config
title: Configuration
sidebar_label: Configuration
---

## Provider Config

This can be configured using [this endpoint](https://dpsg.deity.cloud/#/Management/EnvironmentPaymentProviderController_adyen_create)


```
{
  "merchantAccount": string
  "apiKey": string, // Private
  "clientKey: string, // Private
  "hmacKey": string, // Private
  "testMode": boolean
}
```

To get your client, HMAC &amp; API keys you must have a [Adyen](https://www.adyen.com/) account.  Please ensure `testMode` is set to true when using test credentials.

### merchantAccount

You can get this from your Adyen account under `Account -> Merchant Accounts`

### API Key

You can get this from your Adyen account under `Developer -> API Credentials` then select `ws`.

### Client key

You can get this from your Adyen account under `Developer -> API Credentials` then select `ws`.

### HMAC key

This is used for receiving webhooks from Adyen. DPSG uses this when payments are updated.

You can get your HMAC key when configuring your webhook.


## Setting up your payment methods


## Setting up your webhook

For our integration to work with Adyen you'll need to set up a webhook in Adyen.

To do this please log into your Adyen account and visit `Developers -> Webhooks` in the left hand navigation.

From their you can set up `Standard Notification` webhook.

### Webhook Config

**Transport**
- URL: https://dpsg.{region}.deity.cloud/api/payment/webhook/{organization}/{project}/{environment}/adyen (replacing `{organization}`, `{project}` and `{environment}` with your details). If your region is Europe is will be omitted (https://dpsg.deity.cloud).
- Active: `Yes`
- SSL version: `TLSv1.2`

**Additional Settings**

- Add Acquirer Result: `Yes`
- HMAC Key: Generate one and add it to your config (above).


:::note Test your webhook
You should be able to test this and get a 200 ok response from within the Adyen dashboard.
:::
