---
id: getting-started
title: Getting started
sidebar_label: Getting started
---

import CodePackage from '@site/src/components/CodePackage';

<CodePackage name="@deity/falcon-talonone-module" />

## Introduction

Before you get started, we recommend reading the [developer resources of Talon.One](/docs/integrations/talonone/getting-started) to understand the core concepts of Talon.One.

Once familiar with Talon.One and the integration concepts, start the integration by [configuring your Falcon Middleware](/docs/integrations/talonone/configuration).

The `@deity/falcon-talonone-module` communicates only with the [Talon.One Integration API](https://docs.talon.one/integration-api/) trough the [Talon.One JS SDK](https://github.com/talon-one/talon_one.js). The [Talon.One Management API](https://docs.talon.one/management-api/) can come in handy during development but is not used in the integration.

## Talon.One Documentation

We listed some documentation resources we found useful;

- [Talon.One Product Docs](https://docs.talon.one/docs/product/understanding-talonone/)
- [Talon.One Developer Docs](https://docs.talon.one/docs/dev/getting-started/overview/)
- [Talon.One Integration API Docs](https://docs.talon.one/integration-api/)
- [Talon.One Management API Docs](https://docs.talon.one/management-api/)
- [Talon.One JS SDK Docs](https://docs.talon.one/docs/dev/sdks/overview/)
- [Talon.One JS SDK Repo](https://github.com/talon-one/talon_one.js)

## Postman Collection

For debugging purposes it might be nice to verify requests manually. Luckaly Talon.One prepared a postman collection that we can use;

- [Talon.One Integration API Postman collection](https://docs.talon.one/docs/dev/integration-api/overview/#postman-collection)
- [Talon.One Management API Postman collection](https://docs.talon.one/docs/dev/management-api/overview/#postman-collection)