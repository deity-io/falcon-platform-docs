---
id: getting-started
title: Getting started with Contentful
sidebar_label: Getting started
---

# Getting started

import CodePackage from '@site/src/components/CodePackage';

<CodePackage name="@deity/falcon-contentful-module" />

## Introduction

1. Update the configuration of Falcon Server - see the [Installation](#installation) section for that
2. Add our set of Contentful Content Models - see the section [Content models](/docs/integrations/contentful/content-models) section for that


## Installation

Using our example project, `demo-v3` you will have Contentful support without having to do any custom dev.

But if you used another demo you can just install `@deity/falcon-contentful-module` (add it also to `server/package.json`) and enable it in configuration file (`server/config/default.json`) and assign to blog extension:

```json
  "modules": {
    ...
    "contentful": {
      "module": "@deity/falcon-contentful-module",
      "config": {
        "protocol": "https",
        "spaceId": "",
        "secret": "",
        "environment": "master",
        "url": "/contentful/webhook",
        "apiPrefix": "",
        "webhookBaseUrl": "",
        "defaultLocale": "en-US",
        "accessTokenContent": "",
        "accessTokenPreview": "",
        "accessTokenManagement": ""
      }
    }
  },
  "extensions": {
    ...
    "blog": {
      "package": "@deity/falcon-blog-extension",
      "module": "contentful"
    }
    ...
  }
```

`config` keys:

- `apiPrefix` [required] - Contentfull API GraphQL path (example - `content/v1/spaces/<spaceId>`)
- `accessToken` [required] - Contentful API Access Token
- `host` - Contentful GraphQL host (example - `graphql.contentful.com`)
- `protocol` - Contentful API (example - `https`)
- `defaultLocale` - Contentful default locale (example -`en-US`)

Use your `server/config/local.json` (for local development) or your `environment variables` (for production setup) to the sensitive data where needed.

Replace values below with values applicable for your Contentful account

```json
  "modules": {
    "contentful": {
      "config": {
        "spaceId": "abcdefghijkl",
        "secret": "1234",
        "environment": "master",
        "url": "/contentful/webhook",
        "apiPrefix": "content/v1/spaces/abcdefghijkl",
        "defaultLocale": "en-AU",
        "accessTokenContent": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        "accessTokenPreview": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        "accessTokenManagement": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
      }
    }
  }
```

### Environment Variables

The following environment variables are mapped directly to the configuration option so it's recommended to use these when setting up production deployment (and of course these can be used in development mode)

- `CONTENTFUL_API_PROTOCOL`
- `CONTENTFUL_SPACE_ID`
- `CONTENTFUL_ENVIRONMENT`
- `CONTENTFUL_ACCESS_TOKEN_MANAGEMENT`
- `CONTENTFUL_ACCESS_TOKEN_CONTENT`
- `CONTENTFUL_DEFAULT_LOCALE`
- `CONTETENTFUL_WEBHOOK_URL`
- `CONTENTFUL_SECRET`
- `CONTENTFUL_WEBHOOK_BASE_URL`