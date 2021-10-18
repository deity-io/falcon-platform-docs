---
id: config
title: Configuring DPSG
sidebar_label: Configuring DPSG
description: How to configure DPSG
---

### Prerequisites

These steps assume you have `dcloud` installed. To find out more about `dcloud`, please refer to the [documentation](/docs/platform/cloud/dcloud).

### 1. Select your project

Run `dcloud project:current:set [organization] [project]` to select the project that you are working with. If the wizard detects that there are no DPSG profiles for the project environments, it will prompt you to automatically create them for you. If you choose to do that, step 2 is only necessary when you want to create a local/development profile.

### 2. Create a DPSG profile

To get started, you first need to create a payments profile.
Run `dcloud payments:profile:create` to launch the configuration wizard.

For profiles that you want to link to your Falcon app, we advise to use the same name as the project environment, e.g. naming the DPSG profile `test` for the `test` project environment.

Once configured, you can request information about a profile at any time, using the `dcloud payments:profile:info` command.

### 3. Connect the DPSG profile to your Falcon app

Run `dcloud payments:profile:apply`, this will set the authentication details for DPSG as environment variables for your Falcon app.

This step does not have to be performed for local profiles, only for profiles that you want to connect to your cloud instance.

### 4. Configure your payment providers

Next you need to run `dcloud payments:provider:configure`.

This will take you through steps to enabling your required payment providers. In this step you will add API keys and secrets needed for your provider.

### 5. Configure your payment methods

The final step is to enable payment methods.

Run `dcloud payments:method:configure`. 

This will take you through steps to configure your methods, including the steps for our [configuration features](/dpsg/docs/methods/features/currencies).

<br /><br />

### Dcloud Commands Reference
To configure and manage DPSG using `dcloud`, we have several commands available that cover the basic configuration as well as payment provider and method management.

`payments:provider:list:all`
List all available payment providers

`payments:provider:configure`
Configure payment provider for a selected profile

`payments:provider:list`
List configured payment providers for a selected profile

<br />

`payments:method:list:all`
List all available payment methods of the required Provider

`payments:method:configure`
Configure payment methods for a selected and payment provider

`payments:method:list`
List configured payment providers for a selected profile

<br />

`payments:profile:create`
Create an entry for the existing DEITY Cloud environment or a test one for local development

`payments:profile:info`
Information about the configured payments profiles

`payments:profile:update`
Updates a configured payments profile

`payments:profile:delete`
Deletes a selected payment profile

`payments:profile:apply`
Send Payments credentials to the DEITY Cloud Environment. It will set the token by applying the required env vars
