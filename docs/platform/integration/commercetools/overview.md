---
id: overview
title: CommerceTools Integration
sidebar_label: Overview
---

import CodePackage from '@site/src/components/CodePackage';

<CodePackage name="@deity/falcon-commercetools-module" />

## Installation

Using our example project, `demo-v3` you will have CommerceTools support without having to do any custom dev.

But if you used another demo you can just install `@deity/falcon-commercetools-module` (add it also to `server/package.json`) and enable it in configuration file (`server/config/default.json`) and assign to shop extension:

```json
  "modules": {
    ...
    "commercetools": {
      "module": "@deity/falcon-commercetools-module",
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
      "package": "@deity/falcon-shop-extension",
      "module": "commercetools"
    }
    ...
  }
```

Use your `server/config/local.json` (for local development) or your `environment variables` (for production setup) to the sensitive data where needed.

Replace values below with values applicable for your store.

```json
  "modules": {
    "commercetools": {
      "config": {
        "region": "australia-southeast1.gcp",
        "projectKey": "sandbox-au",
        "url": "https://api.australia-southeast1.gcp.commercetools.com",
        "authUrl": "https://auth.australia-southeast1.gcp.commercetools.com",
        "clientId": "XXXXXXXXXXXXXXXXXXXXXXXX",
        "secret": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        "pubsub": {
          "projectId": "google-cloud-project-id",
          "subscriptionName": "topic-id",
          "pullIntervalInSeconds": 10
        }
      }
    }
  }
```

### Environment Variables

The following environment variables are mapped directly to the configuration option so it's recommended to use these when setting up production deployment (and of course these can be used in development mode)

- `COMMERCETOOLS_REGION`
- `COMMERCETOOLS_PROJECT_KEY`
- `COMMERCETOOLS_URL`
- `COMMERCETOOLS_AUTH_URL`
- `COMMERCETOOLS_CLIENT_ID`
- `COMMERCETOOLS_SECRET`
- `COMMERCETOOLS_SA_DATA` - Google cloud Service Access file content