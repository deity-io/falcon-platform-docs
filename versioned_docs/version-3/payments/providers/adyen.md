---
id: adyen
title: Adyen
sidebar_label: Adyen
---

## Supported payment methods

*( Description : `code`)*

- Credit card (with and without 3D secure) : `scheme`
- PayPal : `paypal`
- AfterPay : `afterpaytouch` (AUS and NZ only)
- Klarna : `klarna_account`
- Zip : `zip`

While these docs are updated frequently, make sure to also check for supported methods using `dcloud payments:method:list:all` to fetch all implemented methods.

:::note Missing a method?

Need a method that Adyen supports adding to the list? Please contact us as it might be in our development pipeline.

:::

## Adyen Configuration

The easiest way to configure Adyen is by using `dcloud` CLI and the `dcloud payments:provider:configure` command. If you want to configure it manually, this can be achieved using [this endpoint →](https://dpsg.deity.cloud/#/Management/EnvironmentPaymentProviderController_adyen_create)


```json
{
  "merchantAccount": "string",
  "apiKey": "string", // Private
  "clientKey": "string", // Private
  "hmacKey": "string", // Private
  "testMode": "boolean"
}
```

To get your client, HMAC &amp; API keys you must have a [Adyen](https://www.adyen.com/) account.  Please ensure `testMode` is set to true when using test credentials.

### `merchantAccount`

You can get this from your Adyen account under **Account → Merchant Accounts**


### `apiKey`

You can get this from your Adyen account under **Developer → API Credentials** then select `ws`.


### `clientKey`

You can get this from your Adyen account under **Developer → API Credentials** then select `ws`.


### `hmacKey`

This is used for receiving webhooks from Adyen. DPSG uses this when payments are updated.

:::note Allowed Origins
Adyen requires you to set allowed origins so the frontend components can be rendered. You can see these when managing the API keys.  
:::

You can get your HMAC key when configuring your webhook. To do this, log into your Adyen account and visit `Developers -> Webhooks` in the left hand navigation.

From their you can set up a `Standard Notification` webhook with the following configuration:

**Transport**
- URL: `https://dpsg.{region}.deity.cloud/api/payment/webhook/{organization}/{project}/{environment}/adyen` (replacing `{region}`, `{organization}`, `{project}` and `{environment}` with your details). If your region is Europe it will be omitted and the base url will be (https://dpsg.deity.cloud).
- Active: `Yes`
- SSL version: `TLSv1.2`
- On Adyen page navigate to Developers > Webhooks > Edit webhook, make sure to select all "Additional Settings".
- On Adyen page navigate to Developers > Additional data, make sure to enable "Toggle all fields".

**Additional Settings**

- Add Acquirer Result: `Yes`
- HMAC Key: Generate one and add it to your config (above).


:::note Test your webhook
You should be able to test this and get a 200 ok response from within the Adyen dashboard.
:::