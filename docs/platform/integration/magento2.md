---
id: magento2
title: Magento 2 Integration
sidebar_label: Magento 2
---

---

<a href="https://magento.com/" rel="noreferrer noopener" target="_blank" aria-label="visit the Magento site">
  <img src="/img/docs/platform/magento-logo.svg" alt="Magento Logo" width="200"/>
</a>

---

## Overview

Our Magento 2 integration allows you to manage your product catalogue, discounts, shipping rules and customers within Magento and use Falcon Platform to provide a PWA frontend to your users.

We support **magento >= 2.3**

Our integration requires you to add our [Magento 2 module](https://github.com/deity-io/falcon-magento2-module) to your site before you get started. This will add API endpoints that are missing from Magento's core offering.

## Supported Features

We have tried to support as many features as possible but as Magento is continuously evolving it's not possible to cover every feature.

**Product**

- Simple Products
- Configurable Products
- Downloadable Products (partial support)
- Product images & gallery

**Product List / Category**

- Sort Orders
- Add to cart from list page

**Prices**
- Tax Calculations
- Sale Prices
- Discount codes / Price Rules

**Navigation**

- Category tree menu

**Customer Account**

- Login
- Register
- Reset Password
- Address Book
- Dashboard
- Account Details

**Cart / Mini Cart**

- Add / Remove / Update Items
- Add / Remove Coupons

**Checkout**

- Shipping methods + rules
- Guest / Customer Checkout
- Saved Addresses

**Payment Methods**
- Adyen (with 3D secure)
- PayPal Express
- Purchase Order
- Check / Money Order

**SEO**

- Canonical URLs
- Meta Data


## Getting Started

Using our example project, `demo-v1` you will have Magento 2 support without having to do any custom dev.

### Step 1
Install our [Magento 2 module](https://github.com/deity-io/falcon-magento2-module). Please read the readme for installation instructions.

### Step 2
Create connection details for Deity to use.
`bin/magento  admin:user:create  --admin-user='your-admin-username' --admin-password='your-admin-password' --admin-email='admin@deity.test' --admin-firstname='node' --admin-lastname='Deity'`

### Step 3
Install Falcon Platform using the `demo-v1` example.

### Step 4
Add your Magento 2 details to your config.

### Step 5
Disable your Magento 2 frontend. We have a [Magento module](https://github.com/deity-io/disable-frontend) you can use.

### Step 6
Complete, you should now have a fully working Magento 2 / Falcon Platform site
