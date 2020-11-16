---
id: webhooks
title: Falcon Payments Webhooks
sidebar_label: Webhooks
enterprise_only: true
---

Falcon Payments can handle 2 webhooks out of the box. 

- `onPaymentUpdated` This is normally triggered by the payment provider when a payment is updated. `Payment Provider -> Falcon Payments -> Shop` e.g. if an payment status changes you may want this information to be passed to your shop.
- `onPaymentUpdated` This is normally triggered by your shop and is used when an order is updated. `Shop -> Falcon Payments -> Payment Provider` e.g. If an order is marked as shipped in your shop, you may want to update it in your payment provider.

### Payment Provider Webhook

```ts
export interface PaymentWebhookHandlerInterface {
  /** Handling the payment status update to be validated & verified, must return a result to be sent to the shop backend */
  onPaymentUpdated(ctx: Context): Promise<PaymentWebhookResult | void>;
}
```

This webhook is sent to your payment provider and is generally called with changes to a payment occur. This webhook can then send data to your shop accordingly.
(Payment Provider -> Falcon Payments -> Shop)

### Shop Webhook
```ts
export interface OrderUpdateHandlerInterface {
  /** Handling the order status update to be sent to the PSP (like shipments or refunds) */
  onOrderUpdated(payload: OrderWebhookResult): Promise<boolean>;
}
```
This webhook is triggered by updates in your shop. Generally when an order is updated and you want to updated the payment provider.
(Shop -> Falcon Payments -> Falcon Payments)
