---
id: mollie
title: Mollie
sidebar_label: Mollie
hide_title: true
---

import Button from '@site/src/components/Button';

<a href="https://mollie.com/" rel="noreferrer noopener" target="_blank" aria-label="visit the Mollie site" className="brighten">
  <img src="/docs/img/docs/platform/mollie-logo.svg" alt="Mollie Logo" width="200"/>
</a>

## Payments designed for growth
An advanced solution to accept payments, optimise conversion, and access funding.


import Notice from "../../includes/integrated-with-dpsg.mdx"

<Notice />

## Supported payment methods

*( Description : `code`)*

- Credit card (with and without 3D secure) : `creditcard`
- iDEAL : `ideal`
- Klarna Pay Later : `klarnapaylater`
- PayPal : `paypal`
- Sofort : `sofort`
- Gift Card : `giftcard`
- Gift Voucher : `voucher`
- Bancontact : `bancontact`
- Giropay : `giropay`
- EPS : `eps`
- Przelewy24 : `p24`
- KBC : `kbc`
- Belfius : `belfius`
- ING Home Pay : `inghomepay`
- SEPA Bank Transfer : `banktransfer`

While these docs are updated frequently, make sure to also check for supported methods using `dcloud payments:method:list:all` to fetch all implemented methods.

:::note Missing a method?

Need a method that Mollie supports adding to the list? Please contact us as it might be in our development pipeline.

:::

## Mollie Configuration

The easiest way to configure Mollie is by using `dcloud` CLI and the `dcloud payments:provider:configure` command. If you want to configure it manually, this can be achieved using [this endpoint →](https://dpsg.deity.cloud/#/Management/EnvironmentPaymentProviderController_mollie_create)


```json
{
  "profileId": "string", // Private
  "apiKey": "string", // Private
  "testMode": "boolean"
}
```

To get your profile ID &amp; API key you must have a [Mollie account](https://www.mollie.com/dashboard/).  Please ensure `testMode` is set to true when using test credentials.
