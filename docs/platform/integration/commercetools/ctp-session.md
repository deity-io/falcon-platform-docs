---
id: ctp-session
title: commercetools ctpSession
sidebar_label: ctpSession
---

- CtpSession is a class responsible for setting/getting/validating httpSession
- CtpSession is available when using GraphQL interface
- CtpSession is not available trough http interface (webhooks)
- CtpSession is not available trough event handlers

## Session class
The `customerToken` and `costumerId` will be set whenever a customer has authenticated. When guest customers open an cart we will create an anonymous `customerToken` and store this in session. To check if a customer is guest account, check for the existance of the customerId.

When guest accounts signin in the carts (and possible previous made orders) will be merged with the customer account.

```typescript
type CtpSession = {
  token: CtpAuthToken; // Set when customer has registered or opened cart as anonymous guest
  customerId: string; // Only set when customer has registered
  cartId: string;
  lastOrderId: string;
};
```

```typescript
export type CtpAuthToken = {
  accessToken: string;
  refreshToken?: string;
  expirationTime: number;
};
```

## Reading session
1. Inject ctpSession to class
2. access ctpSession from class methods

```typescript
const { token, customerId, cartId, lastOrderId } = this.ctpSession;
```

## Mutating session
Mutating the session can be done trough both a set of regular as `setter` methods on the session class.

```typescript
// Use methods to set guarded values
this.ctpSession.signin(customerToken, customerId);
this.ctpSession.hasValidToken(); // return boolean for valid customer/guest token
this.ctpSession.clear(); // Clear full session

// Directly assigning values
this.ctpSession.cartId = cartId;
this.ctpSession.lastOrderId = orderId;
```

## Extending session
// TODO