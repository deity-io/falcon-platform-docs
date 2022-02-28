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
The `customerToken` and `costumerId` will be set whenever a customer has authenticated. When an unauthenticated customer (guest) opens a cart we will create an anonymous `customerToken` and store it in session. In this case the customerId will remain empty.

When a anonymous token is present in session during customer signin the active anonymous cart will get merged with the customer cart. Any orders placed by this anonymous customer will also be transfered to the signed in customers account.


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
// We use 
this.ctpSession.signin(customerToken, customerId); // customerId is protected and can only be set trough the signin method
this.ctpSession.hasValidToken(); // return boolean based on check if expirationTime is before now
this.ctpSession.clear(); // Clear full session

// Assigning session value
this.ctpSession.token = token;
this.ctpSession.cartId = cartId;
this.ctpSession.lastOrderId = orderId;
```

## Extending session
// TODO