---
id: config
title: Config
sidebar_label: Config
---

If you want to connect to our payment service locally or want to manually configure your environment please follow the guide below

## Local Configuration

**server/local.json**

```
"modules": {
  "dpsg": {
    "enabled": true,
    "config": {
      "redirectBaseUrl": "http://localhost:3000",
      "serviceUser": "[USER]", // format = project:environment:profile
      "serviceToken": [SERVICE_TOKEN]",
      "webhookBaseUrl": [SERVER_URL], // when working locally we recommend using ngrok so your server instance is accessible
      "region": "[REGION]" eu, us, au (defaults to eu)
    }
  }
}

```

## Environment Variables

```
"config": {
  "redirectBaseUrl": "PAYMENTS_REDIRECT_BASE_URL",
  "serviceUser": "PAYMENTS_SERVICE_USER",
  "serviceToken": "PAYMENTS_SERVICE_TOKEN",
  "webhookBaseUrl": "PAYMENT_WEBHOOK_BASE_URL",
  "region": "ENV_REGION"
}
```
