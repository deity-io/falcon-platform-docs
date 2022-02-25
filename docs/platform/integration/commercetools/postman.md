---
id: postman
title: CommerceTools Integration
sidebar_label: Postman
---

import CodePackage from '@site/src/components/CodePackage';

<CodePackage name="@deity/falcon-commercetools-module" />

## Overview
Postman is a handy application that provides tooling for setting up projects on the initial stage.

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