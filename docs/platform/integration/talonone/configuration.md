---
id: configuration
title: Configuration
sidebar_label: Configuration
---

import CodePackage from '@site/src/components/CodePackage';

<CodePackage name="@deity/falcon-talonone-module" />

## Installation

You can install `@deity/falcon-talonone-module` (add it also to `server/package.json`) and enable it in configuration file (`server/config/default.json`) and assign to promotion extension:

```json
  "modules": {
    ...
    "talonone": {
      "module": "@deity/falcon-talonone-module",
      "config": {
        "apiKeyPrefix": "ApiKey-v1",
        "apiKeyVersion": "api_key_v1",
        "apiKey": "TALONONE_API_KEY",
        "basePath": "TALONONE_BASE_PATH",
        "referralCodeCampaignId": "TALONONE_REFERRAL_CODE_CAMPAIGN_ID"
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
        "referralCodeCampaignId": 1,
      }
    }
  }
```

### Environment Variables

The following environment variables are mapped directly to the configuration option so it's recommended to use these when setting up production deployment (and of course these can be used in development mode)

- `TALONONE_API_KEY`
- `TALONONE_BASE_PATH`
- `TALONONE_REFERRAL_CODE_CAMPAIGN_ID`
