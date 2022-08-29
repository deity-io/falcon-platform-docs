---
id: event-handlers
title: Talon.One EventHandlers
sidebar_label: EventHandlers
---

import CodePackage from '@site/src/components/CodePackage';

<CodePackage name="@deity/falcon-talonone-module" />

#

For our Falcon Platform module `@deity/falcon-talonone-module` to be able to syncronize customer and session data with Talon.One we needs to 'hook' into some data flows. Where we can we do this in a non-blocking way, preventing the user from waiting unnecicerly long for a request to finish. However, in some cases non-blocking syncronizations are simply not viable. For example, all cart syncronizations need to be done in a blocking way, since Talon.One will give us an updated set of promotional effects after each cart update. In Falcon Plaform we need to wait for this effects and apply them to the cart in the shop backend.

For example, when a customer fires the `addToCart` mutation the following flow will get's triggered under the hood by default;

1. Customer clicks `add to cart` in PWA, a `addToCart` GraphQl mutations gets called
2. Falcon Platform updates cart in shop backend
3. Our `@deity/falcon-talonone-module` waits for `addToCart` to finish and uploads latest cart snapshot to TalonOne CustomerSession
4. Talon.One return a set of effects. Falcon Platform transforms those effects to a set of Falcon DiscountRules
5. The active shop module takes those Falcon DiscountRules and maps them to the shops cart promotion format
6. Request `addToCart` is fully finished and will return success
7. PWA can now safely refetch `cart` query with latest promotional data

## GQLOperationEventHandlers

To `hook` into shop operations inside the `@deiy/falcon-talonone-module` we can register event handlers before and after operations. When an error is thrown inside a `beforeGQLOperationEventHandler` handler the request will throw an exception and close the request before the actual query/mutation resolver get's called.

If we want to perform an action before a customer mutates the cart we can create 1 EventHandler who get's triggered before each `addToCart`, `updateCartItem` and `removeCartItem` mutation. We do this as follow;

```ts
import type { BeforeGraphQLOperationEventHandlerPayload } from '@deity/falcon-server-env';
import { EventHandler, beforeGQLOperationEventHandler } from '@deity/falcon-server-env';
import type { ShopHttpSession } from '@deity/falcon-shop-module';
import { inject } from 'inversify';

@beforeGQLOperationEventHandler('Mutation', 'addToCart')
@beforeGQLOperationEventHandler('Mutation', 'updateCartItem')
@beforeGQLOperationEventHandler('Mutation', 'removeCartItem')
export class MyCustomBeforeCartMutationEventHandler extends EventHandler<BeforeGraphQLOperationEventHandlerPayload> {
  constructor(@inject('ReadOnlyShopHttpSession') protected shopHttpSessionFactory: (httpSession) => ShopHttpSession) {
    super();
  }

  async execute(payload: BeforeGraphQLOperationEventHandlerPayload): Promise<void> {
    const { customerId, cartId } = this.shopHttpSessionFactory(payload.session);

    // Do something
  }
}
```

Inside this handler's `execute` method we can perform some (asynchronous) action, after which the query/mutation resolver will continue.

:::note Bind EventHandlers
When adding event handlers we need to bind those for Falcon Platform to be able to find them. For more info on rebinding please check our [Binding services docs](/docs/platform/server-v3/modules/module-api.md)
:::

## Default Event Handlers

In the module `@deiy/falcon-talonone-module` a few handlers are running out of the box for some basic syncronization functionalities between Talon.One and the configured shop backend;

| EventHandler                                             | Triggered                                                                                                              |
| :------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------- |
| `AfterAddressRemoveEventHandler`                         | After Gql operation `removeAddress`                                                                                    |
| `AfterEditCustomerEventHandler`                          | After Gql operation `editCustomer`                                                                                     |
| `AfterOrderUpdateEventHandler`                           | `ShopEvents.ORDER_STATUS_UPDATED`                                                                                      |
| `AfterSignInEventHandler`                                | After Gql operation `signIn`                                                                                           |
| `AfterSignupEventHandler`                                | After Gql operation `signUp`                                                                                           |
| `RemovePromotionFromCartEventHandler`                    | Before Gql operation `addToCart`<br />Before Gql operation `updateCartItem`<br />Before Gql operation `removeCartItem` |
| `SynchronizeCartWithTalonOneCustomerSessionEventHandler` | After Gql operation `addToCart`<br />After Gql operation `updateCartItem`<br />After Gql operation `removeCartItem`    |
| `UpdateCustomerProfileDefaultAddressEventHandler`        | After Gql operation `addAddress`<br />After Gql operation `editAddress`                                                |
| `ValidateCartWithTalonOneCustomerSessionEventHandler`    | Before Gql operation `placeOrder`                                                                                      |
