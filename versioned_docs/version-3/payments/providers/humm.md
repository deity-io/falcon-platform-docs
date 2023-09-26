---
id: humm
title: Humm
sidebar_label: Humm
---

:::note Please note

Even though Humm only offers one payment method, DPSG still requires a configuration of both, Humm as a payment provider and as a payment method.

:::

## Restrictions

Humm is an Australian payment provider and is only available for customers with a billing address in Australia. Therefore, Humm can only be configured on the Australian cluster of DPSG.

## Humm Configuration

The easiest way to configure Humm is by using `dcloud` CLI and the `dcloud payments:provider:configure` command. If you want to configure it manually, this can be achieved using [this endpoint →](https://dpsg.deity.cloud/#/Management/EnvironmentPaymentProviderController_humm_create)

```json
{
  "merchantId": "string",
  "gatewayKey": "string",
  "shopCountry": "AU", // ISO-3166 country code
  "shopName": "string" // The name of your store
}
```


The merchant ID and gateway key can to be requested using [this form →](https://docs.shophumm.com.au/request_api.html). Once the request is approved, the `merchantId` and `gatewayKey` will be provided to you by Humm.