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

## Available GQL operation hooks

### beforeGQLOperationEventHandler

### afterGQLOperationEventHandler

## Default Event Handlers

| EventHandler                                             | Triggered                                                                                                              |
| -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `AfterAddressRemoveEventHandler`                         | After Gql operation `removeAddress`                                                                                    |
| `AfterEditCustomerEventHandler`                          | After Gql operation `editCustomer`                                                                                     |
| `AfterOrderUpdateEventHandler`                           | `ShopEvents.ORDER_STATUS_UPDATED`                                                                                      |
| `AfterSignInEventHandler`                                | After Gql operation `signIn`                                                                                           |
| `AfterSignupEventHandler`                                | After Gql operation `signUp`                                                                                           |
| `RemovePromotionFromCartEventHandler`                    | Before Gql operation `addToCart`<br />Before Gql operation `updateCartItem`<br />Before Gql operation `removeCartItem` |
| `SynchronizeCartWithTalonOneCustomerSessionEventHandler` | After Gql operation `addToCart`<br />After Gql operation `updateCartItem`<br />After Gql operation `removeCartItem`    |
| `UpdateCustomerProfileDefaultAddressEventHandler`        | After Gql operation `addAddress`<br />After Gql operation `editAddress`                                                |
| `ValidateCartWithTalonOneCustomerSessionEventHandler`    | Before Gql operation `placeOrder`                                                                                      |
