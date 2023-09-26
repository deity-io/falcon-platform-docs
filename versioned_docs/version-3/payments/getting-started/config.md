---
id: config
title: Configuring DPSG
sidebar_label: Configuring DPSG
description: How to configure DPSG
---

### Prerequisites

These steps assume you have `dcloud` installed. To find out more about `dcloud`, please refer to the [dcloud documentation](/console/cloud/dcloud). At the start of most DPSG commands, you are asked to specify the region. This is to make sure that you perform the configurations on the correct DPSG region. If you are not sure about the region of the cloud environment that you work with, you can run `dcloud env [environment]` to fetch the environment region.

### 1. Select your project

Run `dcloud project:current:set [organization] [project]` to select the project that you are working with. In case you don't know the exact organization or project name, run `dcloud project:list` to get a list of all projects that you have access to.

### 2. Create a DPSG profile

To get started, you first need to create a payments profile. A profile is a set of credentials and a configuration for payment providers and methods.
A profile should be created for every cloud environment and every developer.

:::info
Every developer that works on the project locally should create their own profile. This is to ensure that all payment updates provided by RabbitMQ are delivered to the correct event consumer.
:::

To automatically create DPSG profiles for every cloud environment, you can use the `dcloud payments:profile:sync` command. For easy identification, the profiles' names will be identical to the cloud environment names.

To create a profile manually, use the `dcloud payments:profile:create` command to launch the configuration wizard.
Once configured, you can request information about a profile at any time, using the `dcloud payments:profile:info` command.

### 3. Connect the DPSG profile to your Falcon app

Run `dcloud payments:profile:apply`, this will set the authentication details for DPSG as environment variables for your Falcon app.

:::info
This step should only be performed for profiles that you want to connect to your cloud instance, not for local development profiles.
:::

### 4. Configure your payment providers

Next you need to run `dcloud payments:provider:configure`.

This will take you through steps to enabling your required payment providers. In this step you will add API keys and secrets needed for your provider.

### 5. Configure your payment methods

The final step is to enable payment methods.

Run `dcloud payments:method:configure`.

This will take you through steps to configure your methods, including the steps for our [configuration features →](/payments/methods/overview).

<hr/>

### Dcloud Commands Reference

To configure and manage DPSG using `dcloud`, we have several commands available that cover the basic configuration as well as payment provider and method management.

#### Profile

`payments:profile:sync`
Automatically creates matching payments profiles for the project's environments

`payments:profile:create`
Create an entry for the existing Deity Cloud environment or a test one for local development

`payments:profile:info`
Information about the configured payments profiles

`payments:profile:update`
Updates a configured payments profile

`payments:profile:delete`
Deletes a selected payment profile

`payments:profile:apply`
Send Payments credentials to the Deity Cloud Environment. It will set the token by applying the required env vars

#### Provider

`payments:provider:list:all`
List all available payment providers

`payments:provider:configure`
Configure payment provider for a selected payments profile

`payments:provider:list`
List configured payment providers for a selected payments profile

#### Method

`payments:method:list:all`
List all available payment methods of the required provider

`payments:method:configure`
Configure payment methods for a selected and payment provider

`payments:method:update`
Update or dis-/enable a payment method for a selected payment provider

`payments:method:list`
List configured payment providers for a selected payments profile
