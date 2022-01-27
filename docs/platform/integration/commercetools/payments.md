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

Installation custom types in CommerceTools requires us to run an API request.

We recommend using [Postman](https://www.postman.com/) to do this.

### 1. Create an API key

In your CommerceTools dashboard you'll need to create a new API key that has permissions to `manage_types`. Save these credentials for a later step.

:::note Create a new key
We recommend creating a new key for this action so you can't reduce the permissions needed for your main API key used by the Deity application.
:::

### 2. Download sample Postman collections

CommerceTools have a handy repository containing `JSON` collection files you can import directly into Postman.

[https://github.com/commercetools/commercetools-postman-collection/tree/master/api](https://github.com/commercetools/commercetools-postman-collection/tree/master/api)

Please download and import these.

### 3. Add your credentials

The collections from step 1 required you to add some credentials as Postman variables. These variables are from **step 1**:

- `auth_url`
- `client_id`
- `client_secret`
- `project_key`
- `host`

### 4. Authorize your requests

If you completed **step 2** you should be able to run the request `Authorization -> Obtain access token`. This will create an access token and save it as a Postman variable for later requests.

### 5. Install the payment types

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
