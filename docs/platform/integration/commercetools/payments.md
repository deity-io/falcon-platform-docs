---
id: payments
title: CommerceTools Payments
sidebar_label: Payments
---

import CodePackage from '@site/src/components/CodePackage';

<CodePackage name="@deity/falcon-commercetools-module" />

## Overview

With our existing setup all payments should go through our [payment service](/dpsg/docs/getting-started/overview).

In order to correctly store payment data against your payments in CommerceTools you must first install a custom type.

Please follow the steps below.

## Installation

To create a new susbcription on CommerceTools side we recommend using [Postman](https://www.postman.com/).
Please follow [Postman configution manual](postman) before proceeding further.
### Install the payment types

The final step is to run the request `Project -> Types -> Create Type` (`{{host}}/{{project-key}}/types`).

Set the request body to `JSON` and add the following object:

```json
{
  "key": "additionalPaymentData",
  "name": { "en": "Additional Payment Data" },
  "resourceTypeIds": ["payment"],
  "fieldDefinitions": [
    {
      "type": { "name": "String" },
      "name": "brand",
      "label": { "en": "Brand" },
      "required": false,
      "inputHint": "SingleLine"
    },
    {
      "type": { "name": "String" },
      "name": "holderName",
      "label": { "en": "Card Holder Name" },
      "required": false,
      "inputHint": "SingleLine"
    },
    {
      "type": { "name": "String" },
      "name": "expiryYear",
      "label": { "en": "Expiry Year" },
      "required": false
    },
    {
      "type": { "name": "String" },
      "name": "expiryMonth",
      "label": { "en": "Expiry Month" },
      "required": false
    },
    {
      "type": { "name": "String" },
      "name": "last4",
      "label": { "en": "Last 4 Digits" },
      "required": false,
      "inputHint": "SingleLine"
    },
    {
      "type": { "name": "String" },
      "name": "bank",
      "label": { "en": "Bank Name" },
      "required": false,
      "inputHint": "SingleLine"
    },
    {
      "type": { "name": "String" },
      "name": "iban",
      "label": { "en": "IBAN" },
      "required": false,
      "inputHint": "SingleLine"
    },
    {
      "type": { "name": "String" },
      "name": "bic",
      "label": { "en": "Bank Identifier Code" },
      "required": false,
      "inputHint": "SingleLine"
    },
    {
      "type": { "name": "String" },
      "name": "accountHolderName",
      "label": { "en": "Account Holder Name" },
      "required": false,
      "inputHint": "SingleLine"
    },
    {
      "type": { "name": "String" },
      "name": "accountHolderType",
      "label": { "en": "Account Holder Type" },
      "required": false,
      "inputHint": "SingleLine"
    },
    {
      "type": { "name": "String" },
      "name": "payerId",
      "label": { "en": "PayPal Payer Id" },
      "required": false,
      "inputHint": "SingleLine"
    },
    {
      "type": { "name": "String" },
      "name": "email",
      "label": { "en": "PayPal Email Address" },
      "required": false,
      "inputHint": "SingleLine"
    },
    {
      "type": { "name": "String" },
      "name": "voucherNumber",
      "label": { "en": "Voucher Number" },
      "required": false,
      "inputHint": "SingleLine"
    },
    {
      "type": { "name": "String" },
      "name": "remainderMethod",
      "label": { "en": "Remainder Method" },
      "required": false,
      "inputHint": "SingleLine"
    }
  ]
}
```

This should install the additional payment data fields so they can be saved later when making payments.
