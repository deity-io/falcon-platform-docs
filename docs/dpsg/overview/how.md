---
id: how
title: How it works
sidebar_label: How it works
---

## Management your payments

To manage your payments methods, providers, payments and orders you should use our `dcloud` cli tool.

[DOCS COMING SOON]


## How DPSG works with your app

Interacting with DPSG is all done via our `@deity/falcon-payment-service-module` package.

This interacts with DPSG in 2 ways.

RestAPI endpoints and by watching for events in our RabbitMQ instance.


:::note Want to integrate DPSG yourself?
If you're creating a custom integration or want more details on how Falcon Platform interacts with DPSG, please checkout our [how to use guide](../getting-started/usage)
:::

### Methods

We have 4 main methods in `@deity/falcon-payment-service-module` that interact with different Rest endpoints in DPSG.

**`loadMethodList`**

This method is used to get a list of available payment methods.

**`loadMethod`**

This method returns a single payment method, often with additional configuration needed to render client side components.

**`validate`**

This method is triggered, normally by the 'Place Order' button. It often results in an order being created in the shop and the payment provider.

**`sendOrderUpdate`**

This method is used for order updates from the shop, e.g. refunds or shipments. The flow is as follows:

Shop update (webhook) -> Falcon shop endpoint package -> Falcon shop API package -> Falcon Payment Service Client -> DPSG (message quue) -> Payment provider (rest API)

### Events

`@deity/falcon-payment-service-module` also emits an event based on updates pushed to DPSG. This event is for payment updates.

**`PaymentEvents.PAYMENT_STATUS_UPDATED`**

The payload assocairted with this event is:

```
{
  orderId, // The shop order ID associated with the payment update
  status, // payment status
  payload: {} // This additional data is dependent on the payment provider, it often contains a payment ID
};
```
