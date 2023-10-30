---
id: integration-options
title: Integration options of Deity Payment Orchestrator
sidebar_label: Integration options
description: Key concepts of integrating Payments
---

# Integration options

## Management your payment configuration

The payment configuration, including providers, methods, payments and orders, can be done using our `dcloud` CLI tool. The configuration process is described in the [Configuration](/docs/payments/configuration/config) section. `dcloud` interacts with the [management endpoints](https://dpsg.deity.cloud/#/Management) of Deity Payment Orchestrator.


## Deity Payment Orchestrator interactions with your Deity app

Interacting with Deity Payment Orchestrator is done through our `@deity/falcon-payment-service-module` package. This package interacts with Deity Payment Orchestrator in two ways:
- Through the `REST API` client endpoints
- By listening for events on the `RabbitMQ` instance


:::note Want to integrate Deity Payment Orchestrator yourself?
If you're creating a custom integration or want more details on how Falcon Platform interacts with Deity Payment Orchestrator, please check out our [how to](/docs/payments/configuration/usage) guide.
:::

---
### REST Endpoints
Our `@deity/falcon-payment-service-module` package interacts with Deity Payment Orchestrator using our four client endpoints. The API Reference for the client endpoints can be found [here →](https://dpsg.dev.deity.cloud/).

**`loadMethodList`**

This method is used to get a list of available payment methods based on an order payload.

**`loadMethod`**

This method returns a single payment method, often with additional configuration needed to render client side components.

**`validate`**

The validate method is/should be triggered by the shop element that places an order (e.g. a 'Place Order' button). If validation is successful, it results in an order being created in the shop and the payment provider.

**`sendOrderUpdate`**

This method is used for order updates from the shop, e.g. refunds or shipments. The flow is as follows:
1. Shop update (webhook)
2. Falcon shop endpoint package
3. Falcon shop API package
4. Falcon Payment Service Client
5. Deity Payment Orchestrator (message queue)
6. Payment provider (REST API)

---
### Events

`@deity/falcon-payment-service-module` also emits an event based on updates pushed to Deity Payment Orchestrator. This event is for payment updates.

**`PaymentEvents.PAYMENT_STATUS_UPDATED`**

The payload associated with this event is:

```json
{
  "orderId": "string", // The shop order ID associated with the payment update
  "status": "string", // payment status
  "payload": {} // This additional data is dependent on the payment provider, it often contains a payment ID
};
```
