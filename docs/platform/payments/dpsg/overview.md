---
id: overview
title: Overview
sidebar_label: Overview / Glossary
---

Our payment service is available to all Deity platform users. It acts as a middleman between payment providers and Falcon server.

It exposes various REST Api endpoints for doing things like querying payment methods, making payments and storing payment methods.

Alongside this it always exposes a message queue that Deity Platform subscribes to. This publishes events such as payment updates after refunds.

## Glossary

### Provider

We use the term provider to refer to a payment service provider (PSP). e.g. Stripe, Mollie, Braintree.

### Method

When referring to a method we are talking about a specific payment method e.g credit card, paypal, Apple Pay.

### Stored Method

A stored method is a payment method that is stored / vaulted and connected to a customer. We map shop customers (by ID) against payment provider customers (by ID).

### Payment Profile

Our payment service allows for multiple environments specific to each customer, these are called profiles. Each profile should be unique to each Deity Platform instance (including local instances). Each profile can have it's own configuration including payment providers, methods &amp; filters.

### Filter

Payment providers and methods can be filtered by country, currency &amp; cart total. What this means is you can show Stripe methods for US customers and Mollie for European customers. You can also only show methods like Klarna for orders over $100.

### Event / Messages

Our payment service uses both API (Rest) endpoints and messages for various parts of the payment flow. Deity platform subscribes to these messages and handles them appropriately. These messages occur for things such as payment updates from refunds. [LINK TO MORE INFO]

### Region

Our payment service has instances in the US, EU or AU for optimum performance. This can be chosen when you create a profile.
