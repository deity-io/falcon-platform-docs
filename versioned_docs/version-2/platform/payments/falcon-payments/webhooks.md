---
id: webhooks
title: Falcon Payments Webhooks
sidebar_label: Webhooks
enterprise_only: true
---

Falcon Payments can handle 2 webhooks out of the box.

- `handlePaymentUpdate` This is normally triggered by the payment provider when a payment is updated. `Payment Provider -> Falcon Payments -> Shop`.
- `handleOrderUpdate` This is normally triggered by your shop and is used when an order is updated. `Shop -> Falcon Payments -> Payment Provider`.

---

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
3. The webhook triggers `onPaymentUpdated` in your **payment provider** package.
4. This returns `PaymentWebhookResult` and causes the `PAYMENT_STATUS_UPDATED` event to be emitted.
5. Your shop endpoints package listens for the `PAYMENT_STATUS_UPDATED` event.
6. This then triggers a method in your shop API (`onPaymentStatusUpdated` in our core API packages).

### Use-case

An example use-case for this is if a payment status changes within the payment provider you may want this information to be passed to your shop.

### Configuration

The webhook URLs are configured in your `server/config` files.

```json
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

`webhookBaseUrl` should be pointed at your falcon server instance. If you're running your app on cloud your URLs will be proxied for you so your sites main domain is fine.

To configure this on a remote environement you can use the variable `PAYMENT_WEBHOOK_BASE_URL`.

:::note Local Testing
The webhook URL needs to be accessible so you can't use localhost. we recommend using a service like [ngrok](https://ngrok.com/) on your Falcon server instance and setting the `webhookBaseUrl` to point to that.  Once you've installed ngrok it should be as simple as running `ngrok http 4000`. Provided Falcon Server is running on port 4000 this will return you an `https` URL you can use.  
:::

### Params

- `provider` - The payment provide code, e.g. `mollie`. This is used so we know which provider should handle the `onPaymentUpdated`.
- `context` - This webhook comes from your payment provider so we pass the entire HTTP request `context` to the `onPaymentUpdated` method, such that query and body data can be extracted.

### Returns

This method should return `PaymentWebhookResult`.

```ts
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

```ts
this.eventEmitter.on(PaymentEvents.PAYMENT_STATUS_UPDATED, async (payload: PaymentWebhookResult) => {
  if (!this.ds.onPaymentStatusUpdated) {
    return;
  }

  await this.ds.onPaymentStatusUpdated(payload);
});
```

This example will trigger the `onPaymentStatusUpdated` in your shops API where the payload is `PaymentWebhookResult`.

---

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

1. The webhook URL is configured in Falcon Server
2. The webhook URL is sent to your shop when placing an order
3. The shop triggers the webhook when an order is updated (usually `shipped`, `refunded` or `tracking_added`).
4. This triggers a method in your shop API (`onOrderStatusUpdated`)
5. This triggers a method in your payment provider API (`handleOrderUpdate`)
6. Depending on the `status: OrderStatus` provided different methods are triggered e.g. refund.

### Use-case

An example of this is if an order is marked as shipped in your shop, you may want to update it in your payment provider. Other examples include refunded orders and shipment tracking being added.

### Parameters

`OrderWebhookResult`:

```ts
export type OrderWebhookResult = {
  /** The provider of the payment method of the order that updated */
  provider: string;
  /** The the payment method of the order that updated */
  method?: string;
  /** The id of the order */
  orderId: string;
  /** New order status to be sent to the PSP */
  status: OrderStatus;
  /** A security code */
  securityCode: string;
  /** Any additional payload data */
  payloadJson: string;
  /** Specific order data that was changed */
  additionalData?: OrderWebhookAdditional;
};
export type OrderWebhookAdditional = {
  /** Shipping data of the update */
  shippingData?: ShippingData;
  /** The tracking data of the update */
  trackingData?: ShipmentTracking;
  /** The refund data of the update */
  refundData?: RefundData;
};

export type ShippingData = {
  items: ShippingItem[];
};

export type ShippingItem = {
  id: string;
  quantity?: number;
};

export type RefundData = {
  transactionId?: string;
  amount?: string;
  currency: string;
  adjustment?: string;
  items?: RefundItem[];
};

export type RefundItem = {
  type: RefundItemType;
  amount?: string;
  quantity?: number;
  id?: string;
};

export enum RefundItemType {
  product = 'product',
  shipping = 'shipping',
  surcharge = 'surcharge',
  discount = 'discount'
}

export type ShipmentTracking = {
  name: string;
  number: string;
};

export enum OrderStatus {
  shipped = 'shipped',
  trackingAdded = 'tracking_added',
  refund = 'refunded'
}
```

### Returns

`Boolean` - depending on if the update was successful or not.
