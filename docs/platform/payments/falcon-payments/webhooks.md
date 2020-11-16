---
id: webhooks
title: Falcon Payments Webhooks
sidebar_label: Webhooks
enterprise_only: true
---

Falcon Payments can handle 2 webhooks out of the box. 

- `handlePaymentUpdate` This is normally triggered by the payment provider when a payment is updated. `Payment Provider -> Falcon Payments -> Shop`.
- `handleOrderUpdate` This is normally triggered by your shop and is used when an order is updated. `Shop -> Falcon Payments -> Payment Provider`.

----

## Payment Updated Webhook

```ts
/**
 * Handles the update of a payment status
 * @param provider The provider of the payment method
 * @param ctx The koa context of the api call
 * @returns An update payload that can be dispatched to the event emitter
 */
handlePaymentUpdate(provider: string, ctx: Context): Promise<PaymentWebhookResult | void>;
```

### Overview

This webhook sends data from your payment provider to your shop. 

The basic flow is:

1. Pass webhook URL to your payment provider when creating your order / payment intent.
2. The payment provider triggers the webhook when a payment is changed within their system.
3. The webhook triggers `onPaymentUpdated` in your  **payment provider** package.
4. This returns `PaymentWebhookResult` and causes the `PAYMENT_STATUS_UPDATED` event to be emmited.
5. Your shop endpoints package listens for the `PAYMENT_STATUS_UPDATED` event.
6. This then triggers a method in your shop API (`onPaymentStatusUpdated` in our core API packages).


### Usecase

An example usecase for this is if a payment status changes within the payment provider you may want this information to be passed to your shop.

### Configuration

The webhook URL is configured in your `server/config` files.

```
"components": {
    "payments": {
      "package": "@deity/falcon-payments",
      "config": {
        "webhookBaseUrl": null,
        "webhookUrl": "/falcon-payments/webhook"
        ...
      }
    }
}
```

In this case the webhook URL would be `YOUR_URL/falcon-payments/webhook/PROVIDER` e.g. `https://deity-shop.io/falcon-payments/webhook/mollie`

### Params

- `provider` - The payment provide code, e.g. `mollie`. This is used so we know which provider should handle the `onPaymentUpdated`.
- `context` - This webhook comes from your payment provider so we pass the entire `context` to the `onPaymentUpdated` method.

### Returns

This method should return `PaymentWebhookResult`.

```
type PaymentWebhookResult = {
  /** The id of the order that got updated */
  orderId: string;
  /** New payment status */
  status: PaymentStatus;
  /** Extra payload to be stored */
  payload?: { [key: string]: any };
};

enum PaymentStatus {
  open = 'open',
  canceled = 'canceled',
  pending = 'pending',
  authorized = 'authorized',
  expired = 'expired',
  failed = 'failed',
  paid = 'paid'
}

```

### Subscribing to PAYMENT_STATUS_UPDATED

To subscribe to the `PAYMENT_STATUS_UPDATED` event emitted by your payment provider package you'll need to add this code to your shops **endpoint package**.

```
this.eventEmitter.on(PaymentEvents.PAYMENT_STATUS_UPDATED, async (payload: PaymentWebhookResult) => {
  if (!this.ds.onPaymentStatusUpdated) {
    return;
  }

  await this.ds.onPaymentStatusUpdated(payload);
});
```

This example will trigger the `onPaymentStatusUpdated` in your shops API where the payload is `PaymentWebhookResult`.

----

## Order Update Webhook
```ts
/**
 * Handles the update when a shop indicates the order to be updated
 * @param payload The update payload
 * @returns Whether the update was handled properly
 */
handleOrderUpdate(payload: OrderWebhookResult): Promise<Boolean>;
```

### Overview

This webhook sends data from your shop to your payment provider. 

### Usecase

An example of this is if an order is marked as shipped in your shop, you may want to update it in your payment provider.

### Params

This webhook comes from your payment provider so we pass the entire `context` to the `onPaymentUpdated` method.

### Returns

This method should return `PaymentWebhookResult`.

```
type PaymentWebhookResult = {
  /** The id of the order that got updated */
  orderId: string;
  /** New payment status */
  status: PaymentStatus;
  /** Extra payload to be stored */
  payload?: { [key: string]: any };
};

enum PaymentStatus {
  open = 'open',
  canceled = 'canceled',
  pending = 'pending',
  authorized = 'authorized',
  expired = 'expired',
  failed = 'failed',
  paid = 'paid'
}

```
