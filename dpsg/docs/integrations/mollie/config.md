---
id: config
title: Configuration
sidebar_label: Configuration
---

## Provider Config

This can be configured using [this endpoint](https://dpsg.deity.cloud/#/Management/EnvironmentPaymentProviderController_mollie_create)


```
{
  "profileId": string, // Private
  "apiKey": string, // Private
  "testMode": boolean
}
```

To get your profile ID &amp; API key you must have a [Mollie](https://www.mollie.com/dashboard/) account.  Please ensure `testMode` is set to true when using test credentials.
