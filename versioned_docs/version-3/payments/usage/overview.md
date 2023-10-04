---
id: overview
title: Using DPSG
sidebar_label: Using DPSG
description: How to use DPSG
---


Our core modules (Magento 2, BigCommerce, Commercetools) all have pre built DPSG integrations. 

This section explains how to add your own. If you're new to DPSG, please read our [Key concepts guide](/docs/payments/key-concepts).



### 1. Load Payment Service Client into your API package

You can inject `PaymentServiceClient` into your API package constructor using the code below

```ts
...
import {
  PaymentServiceClient
} from '@deity/falcon-payment-extension';

@injectable()
export class YourDataSource extends RESTDataSource {

  paymentServiceClient: PaymentServiceClient;

  constructor(
    ...
    @inject('PaymentServiceClient') @optional() paymentServiceClient: PaymentServiceClient
  ) {
    ...
    this.paymentServiceClient = paymentServiceClient;
  }

```

### 2. Use Payment Service Client in your API package

You can then call `PaymentServiceClient` methods in your class like so:

```ts
this.paymentServiceClient.loadMethodList({...})

this.paymentServiceClient.loadMethod({...})

this.paymentServiceClient.validate({...})

this.paymentServiceClient.sendOrderUpdate({...})
```

### 3. Watch for payment updates

In your endpoints package you can listen for the event emitted by `PaymentServiceClient` when a payment is updated. You'll need this for events such as when payments are authorized after a successful 3D secure check.


**Example in the BigCommerce endpoints package**
```ts
import { PaymentEvents, PaymentWebhookResult } from '@deity/falcon-payment-extension';
...
@eventHandler(PaymentEvents.PAYMENT_STATUS_UPDATED)
export class BigCommerceUpdatePaymentStatus extends EventHandlerBase {
  protected logger;

  protected config;

  protected container: Container;

  constructor(@injectLogger() logger, @injectModuleConfig('bigcommerce') config, container: Container) {
    super();
    this.logger = logger;
    this.config = config;
    this.container = container;
  }

  async execute(payload: PaymentWebhookResult) {
    const dataSource: any = this.container.get('BigCommerceDataSource');
    dataSource.initialize({
      context: { components: this.container.get('components') } as any,
      cache: this.container.get<ICache>('Cache')
    });
    if (!dataSource.onPaymentStatusUpdated) {
      this.logger.warn(`"onPaymentStatusUpdated" method is not defined in DataSource`);
      return;
    }

    await dataSource.onPaymentStatusUpdated(payload);
  }
}
```
