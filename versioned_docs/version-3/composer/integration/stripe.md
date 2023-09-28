---
id: stripe
title: Stripe Payments Integration
sidebar_label: Stripe Payments
---

---

<a href="https://stripe.com/" rel="noreferrer noopener" target="_blank" aria-label="visit the Stripe site">
  <img src="/docs/img/docs/platform/stripe-logo.svg" alt="Stripe Logo" width="200"/>
</a>

---

## Overview

Our integration with Stripe payments uses [https://github.com/stripe/react-stripe-js](https://github.com/stripe/react-stripe-js) to provide a production ready credit card form in the checkout. This ships with our `demo-v2` example project.

If you want to see a live example head over to [our demo site](https://v3demo2.deity.io/).

You can test transactions using these details:

- Card Number: `4111 1111 1111 1111`
- Expiry Date: Any future date
- CVV: `123`

Our integration includes:

- `client/src/pages/shop/Checkout/components/payments/Stripe.js` (Client side component)
- `@deity-io/falcon-stripe-plugin`(Client side plugin)
- `@deity/falcon-payments-stripe` (Server side provider)

## Supported Features

- Credit card payments

## Getting Started

All you need to do is add your Stripe configuration.

### 1. Create a Stripe account / API keys

You can register for an account [here](https://dashboard.stripe.com/register).

Once you've created an account you should be able to find your API keys in the developer section.

<img src="/docs/img/docs/platform/stripe-account-1.png" alt="Stripe Account Sidebar" width="200" style={{marginBottom: 20}}/>

**n.b.** Take note of if you're in `test` or `live` mode.

<img src="/docs/img/docs/platform/stripe-account-2.png" alt="Stripe Account API section" style={{marginBottom: 20}} />

You'll need your API keys later.

### 2. Add your Stripe details to your Falcon Platform config

If you're using our example app `demo-v2` all you need to do now is add your Stripe details to your server side config.

The Stripe provider should already exist in your components->payments.
**`server/config/default.json`**

```json
{
  "components": {
    "payments": {
      "package": "@deity/falcon-payments",
      "config": {
        "providers": {
          "stripe": {
            "package": "@deity/falcon-payments/src/provider/stripe",
            "config": {
              "secretKey": null,
              "publicKey": null
            }
          }
        }
      }
    }
  }
}
```

You just need to add your `secretKey` and `publicKey`. These should be added in your `server/config/local.json` locally and on your production environment you can use these constants:

```json
"secretKey": "PAYMENT_STRIPE_SECRET_KEY",
"publicKey": "PAYMENT_STRIPE_PUBLIC_KEY"
```

## Deity Cloud Environment Variables

- `FALCON_PAYMENTS_ENABLED`: [bool] - You need to use Falcon Payments to use our Stripe integration.
- `PAYMENT_STRIPE_ENABLED`: [bool] - Enable Stripe
- `PAYMENT_STRIPE_SECRET_KEY`: Your secret key
- `PAYMENT_STRIPE_PUBLIC_KEY`: Your public key

## Useful Links

- [Stripe Docs](https://stripe.com/docs/)
- [Stripe React Components Repository](https://github.com/stripe/react-stripe-js)
- [Stripe Account Registration](https://dashboard.stripe.com/register)
- [Our demo site](https://v3demo2.deity.io/)
