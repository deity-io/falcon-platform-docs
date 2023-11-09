---
id: installation
title: Installation
sidebar_label: Installation
---

## Overview

1. [Install Dcloud](#1-installing-dcloud)
2. [Log into Dcloud](#2-logging-in)
3. [Configure your code repository](#3-configure-your-code-repository)
4. [Configure your app](#4-configure-your-app)
5. [Deploy your code](#5-deploy-your-code)

## 1. Installing DCloud

Before doing anything you'll need to install our CLI tool on your local machine.

This can be done using **npm**.

```bash
npm i -g dcloud
```

Adding `-g` will install it globally so you can use it where ever you want.

![Installing DCloud](/img/docs/cloud/npm-install-dcloud.gif)

To test it's working run `dcloud`. You should list a list of available commands.

## 2. Logging in

The next step is to log into [your cloud account](account).

From your terminal window run the login command.

```bash
dcloud login:token [token]
```

You'll be asked to go to [https://app.deity.cloud/sign-in/authorization-token](https://app.deity.cloud/sign-in/authorization-token) in order to generate the token for your account (you'll have to sign in with your account to access it).

Once the token is generated you can copy it from the browser and paste into CLI.

:::note
If you've not yet created an account please contact our support.
:::

To check you're logged in correctly run `whoami`

```bash
dcloud whoami
```

## 3. Configure your code repository

You'll need to have a Falcon app in a code repository ready to deploy.

To do this please follow [these steps](/platform/getting-started/overview).

### Link your code repository

If you've followed the [instructions above](/platform/getting-started/repository) you'll have added a webhook to your repo. This will automatically link it to your `dcloud` account. **n.b. You'll need to push at least one commit before the repo is linked.**

To check this run the following command:

```bash
dcloud repo:list -i
```

## 4. Configure your app

Depending on the setup you are running you'll need to set various **environement variables**. These include **BigCommerce**, **Algolia** and **Stripe** credentials. To learn more about configuration please read [these docs](/platform/configuration/overview).

To set variables using dcloud use the following command:

```bash
dcloud env:var:set <env> <name> [value]
```

Each integration will have a different set of required environment variables. These can be found listed with their individual integration guides:

- [Algolia](/platform/integration/algolia#deity-cloud-environment-variables)
- [BigCommerce](/platform/integration/bigcommerce/manual#deity-cloud-environment-variables)
- [Magento 2](/platform/integration/magento2/getting-started#deity-cloud-environment-variables)
- [Stripe](/platform/integration/stripe#deity-cloud-environment-variables)
- [Wordpress](/platform/integration/wordpress#deity-cloud-environment-variables)

Alongside 3rd party integrations there are a few other core configurations you might want to set:

**Email**

We use [NodeMailer](https://nodemailer.com/smtp/well-known/) and a list of available email services can be found there.

- `MAILER_SERVICE`: email service provider e.g. `gmail`
- `MAILER_USER`: email user e.g. `hello@deity.io`
- `MAILER_PASSWORD`: email password

**Search**

You'll need to define which search API you want to use. Currently only `algolia` and `bigcommerce` are supported.

- `SEARCH_API_NAME`: search api e.g. `bigcommerce`

**Google Tag Manager**

If you want to use Tag Manager you'll have to set your container ID.

- `GTM_CODE`: gtm container ID e.g. `GTM-12345`

### Example - BigCommerce

[This document](/platform/integration/bigcommerce/manual) explains BigCommerce configuration in more details.

There are quite a few confirations you'll need to add. Adding them might look something like the command below:

```bash
dcloud env:var:set production BIGCOMMERCE_ACCESS_TOKEN [YOUR_ACCESS_TOKEN]
```

## 5. Deploy your code

### Find your build ID

Each commit pushed to your repo is created as a build. To check these you can run the command `dcloud build:list`. Take note of the build ID for the build you want to deploy.

### Choose your environment

Depending on your price plan you may have multiple environments (testing, production etc). To check your environments run `dcloud env:list`. Take note of the name of the environment you want to deploy to.

### Deploy your build

To deploy your build run the command `dcloud deployment:run [buildId] [environmentName]` replacing `buildId` and `environmentName` with the values above. You deployment should be very quick as the build is already created.

---

## Watch our 'how to' video.

<iframe width="560" height="315" src="https://www.youtube.com/embed/CSrkxZgtY6w?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
