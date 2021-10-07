---
id: config
title: Configuration
sidebar_label: Configuration
description: How to configure DPSG
---
## Setup

### Prerequisites

These steps assume you have `dcloud` installed and are running the correct project (`dcloud project:current:set`)

### 1. Create your environment

The first step is to create your payment environment in DPSG. This is not the same as your platform environment although naming them the same can be helpful.

Run `dcloud payments:env:create`.

This will lead you through a few steps to creating your env.

### 2. Configure the DPSG region (Optional)

Run `dcloud payments:region:set`, this will let you select one of our region for DPSG.

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


## Commands

Configuring DPSG can be done using our [`dcloud` CLI tool](/docs/platform/cloud/dcloud).

We have several methods available for configuring DPSG.

### `payments:provider:list:all`
List all available payment providers

### `payments:method:list:all`
List all available payment methods of the required Provider

### `payments:provider:list`
List configured payment providers for the required environment

### `payments:provider:configure`
Configure Payment Provider for the required Environment

### `payments:method:list`
List configured payment providers for the required provider and environment

### `payments:method:configure`
Configure Payment Methods for the required Environment and Payment Provider

### `payments:env:create`
Create an entry for the existing DEITY Cloud environment or a test one for local development

### `payments:env:info`
Get Environment configuration for Payments

### `payments:env:apply`
Send Payments Token to the environment. It will fetch the token by applying the required env vars

### `payments:region`
Get the configured DPSG region.

### `payments:region:set`
Set the configured DPSG region.
