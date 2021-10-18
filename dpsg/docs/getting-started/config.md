---
id: config
title: Configuring DPSG
sidebar_label: Configuring DPSG
description: How to configure DPSG
---

### Prerequisites

These steps assume you have `dcloud` installed and are running the correct project (`dcloud project:current:set`). To find out more about `dcloud`, please refer to the [documentation](/docs/platform/cloud/dcloud).

### 1. Create a DPSG configuration

To get started, you first need to create a DPSG configuration.
Run `dcloud payments:config:create` to launch the configuration wizard.

Once configured, you can request information about a configuration at any time, using the `dcloud payments:config:info` command.

### 2. Configure the DPSG region

By default, DPSG will be configured in the `eu` (Europe) region. If your Falcon project is using a different region, you need to use the command `dcloud payments:region:set`.
After that, you have to run 

:::info
Please set the DPSG region to the same region 
:::

The default region for DPSG is `eu` (Europe).

Run `dcloud payments:region` to view your configured region.

### 3. Connect your DPSG env to your platform app

Run `dcloud payments:env:apply`, this will set the auth details for DPSG as environment variables for your platform app.

### 4. Configure your payment providers

Next you need to run `dcloud payments:provider:configure`.

This will take you through steps to enabling your required payment providers. In this step you will add API keys and secrets needed for your provider.

### 5. Configure your payment methods

The final step is to enable payment methods.

Run `dcloud payments:method:configure`. 

This will take you through steps to configure your methods, including sorting and which countries your methods are enabled on.

<br /><br />

### Dcloud Commands Reference
To configure and manage DPSG using `dcloud`, we have several commands available that cover the basic configuration as well as payment provider and method management.

`payments:env:create`
Create an entry for the existing DEITY Cloud environment or a test one for local development

`payments:env:info`
Get Environment configuration for Payments

### `payments:env:update`
Updates a configured payments environment

### `payments:env:delete`
Deletes a configured payments environment

`payments:env:apply`
Send Payments Token to the environment. It will fetch the token by applying the required env vars

<br />

`payments:region`
Get the configured DPSG region.

`payments:region:set`
Set the configured DPSG region.

<br />

`payments:provider:list:all`
List all available payment providers

<br />

`payments:provider:list`
List configured payment providers for the required environment

`payments:provider:configure`
Configure Payment Provider for the required Environment

<br />

`payments:method:list:all`
List all available payment methods of the required Provider

`payments:method:list`
List configured payment providers for the required provider and environment

`payments:method:configure`
Configure Payment Methods for the required Environment and Payment Provider

