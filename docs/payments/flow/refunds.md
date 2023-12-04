---
id: refunds
title: Refunds
sidebar_label: Refunds
---

Our platform supports refunds initiated from the shop and not from the payment provider.

The general flow is:

`Shop -> Deity Platform -> Payment Service -> Payment Provider`

Our platform watches for order updates (webhooks) sent from the shop platforms and triggers the refund process this way.

Our payment service also watches for payment updates from each payment provider (if available). We can use these to send a message to a queue with feedback from the successful or failed refunds.

## Refund Flow

<img src="/img/docs/platform/payments/flow/refund-flow.jpg" alt="Refund flow diagram" style={{ marginBottom: 20 }} />
