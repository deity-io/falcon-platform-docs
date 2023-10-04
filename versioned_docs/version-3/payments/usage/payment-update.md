---
id: payment-update
title: Payment updates
sidebar_label: Payment updates
---

Our payment service subscribes to payment updates where possible. Most payment providers have webhooks when payments are updated, this is often in the form of a status update (e.g. pending -> complete) or a refund.

When these events are picked up our payment service sends a message to the queue our server app is subscribed to. This way shop orders can get updates from each payment provider without additional config.

Integration for payment events exists out of the box.

If you wish to change this you can watch for `PaymentEvents.PAYMENT_STATUS_UPDATED` events.

## Example

**Module**
Bind your event handler

```ts
export class YourModule extends FalconModule {
  servicesRegistry(registry: FalconModuleRegistryProps) {
    ...
    bind('YourClassEventHandler').toEventHandler(YourClass);
  }

  ...
}
```

**Event Handler**
Once bound, you can trigger different events in your module based on the payload.

```ts
import type { PaymentStatusUpdatedEventPayload } from '@deity/falcon-payment-extension';
import { EventHandler } from '@deity/falcon-server-env';
...

@eventHandler(PaymentEvents.PAYMENT_STATUS_UPDATED)
export class YourClass extends EventHandler {
  constructor(
    ...
  ) {
    super();

    ...
  }

  async execute(payload: PaymentStatusUpdatedEventPayload) {
    const {
      status,
      orderId: paymentServiceOrderId,
      shopOrderId,
      gatewayOrderId,
      payload: paymentPayload = {}
    } = payload;

    if (status === 'refunded') {
      // do refund
    }
    ...
  }
}

```
