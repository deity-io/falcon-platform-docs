---
id: embedded-checkout
title: Embedded checkout
sidebar_label: Embedded checkout
description: How to use the BigCommerce Embedded Checkout
---

## About

The [BigCommerce Embedded Checkout](https://developer.bigcommerce.com/api-docs/storefronts/embedded-checkout/embedded-checkout-tutorial) allows customer to load an iframe version of the checkout. The benefits to this is it supports all the features and payment methods BigCommerce supports out of the box.

## How to use

To use the BigCommerce Embedded checkout you simply need to add it into your checkout components.

With our core app this will be:

`client/src/pages/shop/Checkout/Checkout.js`

### 1. Import the component

```js
import { EmbeddedCheckout } from './components';
```

:::note Check the component exists
Out of the box you should have a `client/src/pages/shop/Checkout/components/EmbeddedCheckout.js` file. If not, please create a new app using `@deity/create-falcon-app` and grab it from there. This is specific to demo-v2
:::

### 2. Get the embedded checkout URL

Our cart query can have extra params passed to it to grab the embedded checkout iframe URL needed to render the checkout.

Find `CartQuery` in the `Checkout.js` file.

It should look something like this:

```js
export const CartQuery = props => {
  return <FalconCartQuery fetchPolicy="cache-and-network" {...props} />;
};
```

Change this to add `variables={{ includeEmbeddedUrl: true }}`

```js
export const CartQuery = props => {
  return <FalconCartQuery fetchPolicy="cache-and-network" variables={{ includeEmbeddedUrl: true }} {...props} />;
};
```

This will return `cart.embeddedUrl` with the query.

### 3. Render the component

Find `EnsureCanProceedCheckout` in the `Checkout.js` file.

This should be wrapped in `CartQuery` from step 2.

After the checks against the cart having items you can add:

```js
if (cart.embeddedUrl) {
  return <EmbeddedCheckout url={cart.embeddedUrl} />;
}
```

So it will end up something like this:

```js
return (
  <CartQuery>
    {({ data: { cart } }) => {
      if (!cart || cart.itemsQty === 0 || cart.items.length === 0) {
        // try to restore the cart if you can
        if (!called) {
          setCartLoading(true);
          return <Loader />;
        }

        // If we have a cart but the items haven't loaded
        if (cart && cart.itemsQty !== 0 && cart.items.length === 0) {
          return <Loader />;
        }

        // We can't restore the cart or there are no items
        return <Redirect to="/cart" />;
      }

      if (cart.embeddedUrl) {
        return <EmbeddedCheckout url={cart.embeddedUrl} />;
      }
      ...
```

## Notes

The embedded checkout requires you to pass the correct channel ID in your BigCommerce API config.

The host for this channel must match your app.

If you're developing locally please follow the notes in the [BigCommerce docs](https://developer.bigcommerce.com/api-docs/storefronts/embedded-checkout/embedded-checkout-tutorial#how-can-i-work-with-embedded-checkout-locally).
