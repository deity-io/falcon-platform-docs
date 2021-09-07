---
id: about
title: About DEITY Middleware
sidebar_label: About
enterprise_only: true
---

## Overview

:::note If you have existing project based on DEITY Platform v2.x please see our [migration guide](./migration-guide.md)
:::

_(todo: This page needs more general, high level information about DEITY Middleware)_

## DEITY Middleware 3

The focus for DEITY Middleware 3 is to provide much better internal structure which leads to much more possibilities when it comes to extending entire platform.

In order to do so we have implemented inversion of control pattern based on [InversifyJS](https://github.com/inversify/InversifyJS). Thanks to this developers have much more control over the way how extensions are loaded, initialized and managed during request processing.

Additionally, all the subsystems ([Event Handlers](./event-handlers.md), [Data Sources](./data-sources.md), [Rest Endpoints](./rest-endpoints.md)) of DEITY Middleware use now the same mechanism and can be registered in the same way.

See [Modules](./modules/about.md) section for more information.
