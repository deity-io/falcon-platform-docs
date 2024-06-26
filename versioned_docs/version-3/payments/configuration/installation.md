---
id: installation
title: Installation of Payment Orchestrator
sidebar_label: Installation
description: A step by step guide to install Payment Orchestrator
---

# Installation

:::note Requires Deity Platform v3.0.0 or higher
If you want to use Payment Orchestrator in your Deity app, make sure to use Deity Platform version >= 3.0.0.

If you have existing project based on Falcon Platform v2.x please [contact us for the migration guide](/platform/support/contact) to upgrade to the latest version.
:::

To make use of Payment Orchestrator, it first needs to be configured and then connected to your Falcon app.

## 1. Configuring Payment Orchestrator

This involves creating an Payment Orchestrator profile and enabling payment providers and payment methods.
This configuration can be done entirely using our `dcloud` CLI tool.

[Find out how →](config)

## 2. Connecting your Deity app to Payment Orchestrator

To use Payment Orchestrator in your Falcon app you need to connect to it. For this you just need to add a few configuration changes to your remote or local application configuration.

[Find out how →](connect)

## 3. Using Payment Orchestrator within your Deity app

Our demo applications are already setup to use Payment Orchestrator. This section is only relevant for custom integrations or projects with bespoke functionality.

[Find out how →](../usage/overview)
