---
id: stripe
title: Stripe Payments Integration
sidebar_label: Stripe Payments
---

---

<a href="https://stripe.com/" rel="noreferrer noopener" target="_blank" aria-label="visit the Stripe site">
  <img src="/img/docs/platform/stripe-logo.svg" alt="Stripe Logo" width="200"/>
</a>

---

## Overview

Our integration with Stripe payments uses [https://github.com/stripe/react-stripe-js](https://github.com/stripe/react-stripe-js) to provide a production ready credit card form in the checkout. This ships with our `demo-v2` example project.

## Supported Features

- Credit card payments


## Getting Started

All you need to do is add your Stripe configuration.

### 1. Create a Stripe account / API keys

You can register for an account [here](https://dashboard.stripe.com/register).

Once you've created an account you should be able to find your API keys in the developer section.

<img src="/img/docs/platform/stripe-account-1.png" alt="Stripe Account Sidebar" width="200" style={{marginBottom: 20}}/>

**n.b.** Take not of if you're in `test` or `live` mode.

<img src="/img/docs/platform/stripe-account-2.png" alt="Stripe Account API section" style={{marginBottom: 20}} />

You'll need you API keys later.

### 2. Add your Stripe details to your Falcon Platform config






## Useful Links

- [Stripe Docs](https://stripe.com/docs/)
- [Stripe React Components Repository](https://github.com/stripe/react-stripe-js)
- [Stripe Account Registration](https://dashboard.stripe.com/register)
