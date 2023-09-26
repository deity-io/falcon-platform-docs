---
id: installation
title: Installation
sidebar_label: Installation
description: Installing & Configuring DPSG
---

:::info Requires Deity Platform v3.0.0 or higher
If you want to use DPSG in your Falcon app, make sure to use Falcon version >= 3.0.0. Version 2 is not supported.
:::

To make use of DPSG, it first needs to be configured and then connected to your Falcon app.

### 1. Configuring DPSG 

This involves creating an DPSG profile and enabling payment providers and payment methods.
This configuration can be done entirely using our `dcloud` CLI tool.

[Find out how →](config)

### 2. Connecting your Falcon app to DPSG

To use DPSG in your Falcon app you need to connect to it. For this you just need to add a few configuration changes to your remote or local application configuration.

[Find out how →](connect)

### 3. Using DPSG within your Falcon app

Our demo applications are already setup to use DPSG. This section is only relevant for custom integrations or projects with bespoke functionality.

[Find out how →](usage)
