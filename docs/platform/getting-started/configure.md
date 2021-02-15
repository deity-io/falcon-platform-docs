---
id: configure
title: 5. Configure your environment
sidebar_label: 5. Configure your environment
---

## Overview

Each cloud environment can have a set of configuartion variables. These are used to store information like shop API keys.

Depending on your integrations (Magento, BigCommerce, Stripe etc) you'll need to add different varaibles to your cloud environment.

:::note Configuration documentation
We highly recommend you read our [config docs](/docs/platform/configuration/overview) before doing this step.
:::

## Steps

### 1. Log into your environment

Hopefully you're still logged in from [step 2](/docs/platform/getting-started/dcloud#login-to-your-cloud-env). If not, follow the steps there.

### 2. What variables need setting?

This depends on your integrations.

Each one of our integrations has it's own variables and documentaion that can be found in the 'Integrations' section. For example, our [Magento 2 docs](/docs/platform/integration/magento2/getting-started#5-configure-your-magento-connection).

:::note client vs server variables
Your environment variables are universal, meaning they are accessible by both your client and server apps and you don't need to set them in a different way.
:::

### 3. Set your variables

Once you've worked out which variables need setting you can set them using dcloud.

You can then set environment variables using the following command:

```bash
dcloud env:var:set <env> <name> [value] 
```

**example**

This example would set the `MAGENTO_HOST` variable on the `test` environment to `magento.deity.io`.

```bash
dcloud env:var:set test MAGENTO_HOST magento.deity.io
```

### 4. Apply your changes

To apply your variable changes you can run the command:

```bash
dcloud env:var:apply <env>
```

:::note Deployments
Running a deployment will restart your app and will also apply new changes to env variables.
:::

### 5. Test your changes

Unless your running Falcon Server locally (Enterprise plans only), now is a great time to test your changes.  By connecting your local client app to your remote server app (via the GraphQL URL [explained here](/docs/platform/getting-started/create#2-add-your-details)) you should be able to see any config changes you've made.

We recommend changing your shop integration variables so you can see your own products and categories locally.
