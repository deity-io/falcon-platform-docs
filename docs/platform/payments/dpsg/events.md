---
id: events
title: Events / Webhooks
sidebar_label: Events / Webhooks
---

Our payment service emits events to a message queue that Deity platform subscribes to.

This is all handled by our `@deity/falcon-dpsg-module` package.

When messages are consumes this package emits events that are picked up by other parts of the app. You can also watch for these events and create your own action.

## Events

- `PaymentEvents.PAYMENT_STATUS_UPDATED` when a payment is updated, currently used for refunds
- `Events.ERROR` when a payment error occurs it's sent to our normal error event.
