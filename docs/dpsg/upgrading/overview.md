---
id: overview
title: Upgrading to DPSG
sidebar_label: Overview
---

**DPSG is only available to Falcon >= 3.0.0**

If you're running Falcon 2.x you'll need to upgrade your project to v3.x to use DPSG.

[FULL V3 UPGRADE GUIDE COMING SOON]

## DPSG upgrade guide

Once your app is running v3 the upgrade to DPSG is simple.

### Client updates

The only real client updates are adding components for newly supported payment providers (additional Stripe methods and Adyen).

To upgrade please use `create-falcon-app` to do a diff between your version and v3.

[See guide here](https://docs.deity.io/docs/platform/upgrading/overview)

### Server Updates

Unless you've overridden the DPSG related methods in your shop API package (get mthods, load method, place order etc) all you will need to do is remove old payment config values and define the new ones [seen here](../getting-started/config).
