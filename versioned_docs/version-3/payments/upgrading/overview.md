---
id: overview
title: Upgrading to Deity Payment Orchestrator
---

# Upgrading to Deity Payment Orchestrator

:::note Requires Deity Platform v3.0.0 or higher
If you want to use Deity Payment Orchestrator in your Deity app, make sure to use Deity Platform version >= 3.0.0.

If you have existing project based on Falcon Platform v2.x please [contact us for the migration guide](/docs/platform/support/contact) to upgrade to the latest version.
:::

## Deity Payment Orchestrator upgrade guide

Once your Deity app is running v3 the upgrade to Deity Payment Orchestrator is simple.

### Client updates

The only real client updates are adding components for newly supported payment providers (additional Stripe methods and Adyen).

To upgrade please use `create-falcon-app` to do a diff between your version and v3.

[See guide here](/docs/platform/resources/upgrading)

### Server Updates

Unless you've overridden the Deity Payment Orchestrator related methods in your shop API package (get methods, load method, place order etc) all you will need to do is remove old payment config values and define the new ones [seen here](../configuration/config).
