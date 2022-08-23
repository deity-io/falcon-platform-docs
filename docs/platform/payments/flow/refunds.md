---
id: refunds
title: Refunds
sidebar_label: Refunds
---

Our platform supports refunds initiated from the shop and not from the payment provider.

The general flow is:

`shop -> Deity Platform -> Payment Service -> Payment Provider`

Our platform watches for order updates (webhooks) sent from the shop platforms and triggers the refund process this way.

## Refund Flow
