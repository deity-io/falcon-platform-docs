---
id: talonone-datamappers-overview
title: T1 DataMappers
sidebar_label: DataMappers
---

import CodePackage from '@site/src/components/CodePackage';

<CodePackage name="@deity/falcon-talonone-module" />

## Installation

Using our example project, `demo-v3` you will have talonone support without having to do any custom dev.

But if you used another demo you can just install `@deity/falcon-talonone-module` (add it also to `server/package.json`) and enable it in configuration file (`server/config/default.json`) and assign to shop extension:

```json
  "modules": {
    ...
    "talonone": {
      "module": "@deity/falcon-talonone-module",
      "config": {
        "region": "",
        "projectKey": "",
        "url": "",
        "authUrl": "",
        "clientId": "",
        "secret": ""
      }
    }
  },
  "extensions": {
    ...
    "shop": {
      "package": "@deity/falcon-promotion-extension",
      "module": "talonone"
    }
    ...
  }
```

Use your `server/config/local.json` (for local development) or your `environment variables` (for production setup) to the sensitive data where needed.

Replace values below with values applicable for your store.

```json
  "modules": {
    "talonone": {
      "config": {
        "region": "",
      }
    }
  }
```

### Environment Variables

The following environment variables are mapped directly to the configuration option so it's recommended to use these when setting up production deployment (and of course these can be used in development mode)

- `TALONONE_REGION`
- `TALONONE_PROJECT_KEY`
- `TALONONE_URL`
- `TALONONE_AUTH_URL`
- `TALONONE_CLIENT_ID`
- `TALONONE_SECRET`

### Talon.One overview

## Features

- Applying and removing Coupons
- Shop Cart data > T1 CustomerSession
- T1 CustomerSession Effects >

## Resources

- TalonOneDataSource
  - What
  - Why?
  - How
  - Extending
- TalonOneClient
  - What
  - Why?
  - How
  - Extending
- TalonOneInternalGraphQLClient
  - What
  - Why?
  - How
  - Extending

## Data Mappers

- Introduction
  - What
  - Why?
  - How
  - Extending
- AddressMapper
- CouponMapper
- DiscountRuleMapper
- ReferralMapper

## Event Handlers

- Introduction
  - What
  - Why?
  - How
  - Extending
- AfterSignupEventHandler
- AfterSignInEventHandler
- AfterEditCustomerEventHandler
- UpdateCustomerProfileDefaultAddressEventHandler
- AfterAddressRemoveEventHandler
- SynchronizeCartWithTalonOneCustomerSessionEventHandler
- ValidateCartWithTalonOneCustomerSessionEventHandler
- RemovePromotionFromCartEventHandler
- AfterOrderUpdateEventHandler

## Errors

### Promotion overview

## Schemas

- LineItemDiscountPromotion
- CartDiscountPromotion
- BonusItemEffect
- FreeDeliveryEffect
