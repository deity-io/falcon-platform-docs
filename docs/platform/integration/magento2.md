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

Our Magento 2 integration allows you to manage your product catalog, discounts, shipping rules and customers within Magento and use Falcon Platform to provide a PWA frontend to your users.

We support **magento >= 2.3**

Our integration requires you to add our Magento 2 module to your site before you get started. This will add API endpoints that are missing from Magento's core offering.

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

### 1. Add our Magento Module
Install our Magento 2 module. Please read the readme for installation instructions.

### 2. Create a deity user within Magento
Create connection details for Deity to use.
`bin/magento  admin:user:create  --admin-user='your-admin-username' --admin-password='your-admin-password' --admin-email='admin@deity.test' --admin-firstname='node' --admin-lastname='Deity'`

### 3. Create an integration within Magento.

From the admin (system->integrations) you can create a new integration.

<img src="/img/docs/platform/magento2-admin.png" alt="Magento admin" width="300" style={{ marginBottom: 20 }}/>

From here you will get the following credentials to use later:

- `CONSUMER_KEY`
- `CONSUMER_SECRET`
- `ACCESS_TOKEN`
- `ACCESS_TOKEN_SECRET`

### 4. Create your Falcon App.
Install Falcon Platform using the `demo-v1` example and `create-falcon-app`

### 5. Configure your Magento connection
Add your Magento 2 details to your `server/config/` files. Below is an example of the config variables you'll need to add.
If you're using `demo-v1` this will be set up to use our demo Magento 2 instance and should work out of the box.

```json
{
  "endpoints": {
    "magento": {
      "config": {
        "host": "[MAGENTO_SITE_URL_WITHOUT_PROTOCOL]"
      }
    }
  },
  "apis": {
    "magento2": {
      "config": {
        "host": "[MAGENTO_SITE_URL_WITHOUT_PROTOCOL]",
        "defaultLocale": "[MAGENTO_DEFAULT_LOCALE]",
        "auth": {
          "consumerKey": "[CONSUMER_KEY]",
          "consumerSecret": "[CONSUMER_SECRET]",
          "accessToken": "[ACCESS_TOKEN]",
          "accessTokenSecret": "[ACCESS_TOKEN_SECRET]"
        }
      }
    }
  }
}

```

### Deity Cloud Environment Variables

- `MAGENTO_SITE_URL_WITHOUT_PROTOCOL`: Your Magento site URL (without protocol) e.g. magento.deity.io
- `CONSUMER_KEY`: your consumer key
- `CONSUMER_SECRET`: your consumer secret
- `ACCESS_TOKEN`: your access token
- `ACCESS_TOKEN_SECRET`: your access token secret
- `MAGENTO_DEFAULT_LOCALE`: default locale for your Magento store. e.g. `en_GB`

### 6. Disable your Magento frontend
Disable your Magento 2 frontend. We have a Magento module you can use.

### 7. Complete
Complete, you should now have a fully working Magento 2 / Falcon Platform site
