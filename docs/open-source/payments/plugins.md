---
title: Payments Plugins
---

DEITY Falcon supports the following Payment methods out-of-the-box (in Falcon-Client app):

- [Adyen (credit card)](#adyen-credit-card)
- [PayPal Express](#paypal-express)
- [Simple Payment](#simple-payment)

## Adyen (credit card)

To add this plugin to your Falcon-Client app install it in the `client` directory:

<!--DOCUSAURUS_CODE_TABS-->
<!--npm-->

```bash
# installs adyen plugin (on falcon-client)
npm install --save @deity/falcon-adyen-plugin
```

<!--Yarn-->

```bash
# installs adyen plugin (on falcon-client)
yarn add @deity/falcon-adyen-plugin
```

<!--END_DOCUSAURUS_CODE_TABS-->

Adyen CreditCard plugin delivers "adyen-cse-web" package for the client-side encryption of the provided
credit card information (this way - the shop does not store any of your credit card information in its database)
and just passes this encrypted information to the Adyen Payment Gateway.

### Adyen PHP module

To use this plugin with the DEITY Magento module (PHP) - you need to install the
[Deity Adyen Extension](https://github.com/deity-io/magento-adyen-api) in your
Magento project (it will provide required endpoints to process Adyen payments):

```bash
php composer.phar require deity/falcon-magento-adyen
```

### Usage of Adyen plugin

```js
import AdyenCCPlugin from '@deity/falcon-adyen-plugin';
import { CreditCard } from '@deity/falcon-ecommerce-uikit';

const adyen = (
  <AdyenCCPlugin config={config} onPaymentDetailsReady={onPaymentDetailsReady}>
    {({ setCreditCardData }) => (
      <CreditCard onCompletion={setCreditCardData} />
    )}
  </AdyenCCPlugin>
);
```

> This plugin requires a `{ key: "public-key" }` public key for the client-side encryption to be passed via `config` prop

`AdyenCCPlugin` passes down `setCreditCardData` callback to the child component (`CreditCard` in our case), so whenever a user
correctly fills out the form - this callback has to be called like `setCreditCardData({ number, expiry, cvc, name })` to pass
the credit card information for further encryption and passing it as a part of the `placeOrder` Mutation.

> Check the code of [`PaymentMethodItem` component](https://github.com/deity-io/falcon/blob/dev/examples/shop-with-blog/client/src/pages/shop/Checkout/components/PaymentMethodItem.js)
> for more details.

## PayPal Express

To add this plugin to your Falcon-Client app install it in the `client` directory:

<!--DOCUSAURUS_CODE_TABS-->
<!--npm-->

```bash
# installs paypal plugin (on falcon-client)
npm install --save @deity/falcon-paypal-plugin
```

<!--Yarn-->

```bash
# installs paypal plugin (on falcon-client)
yarn add @deity/falcon-paypal-plugin
```

<!--END_DOCUSAURUS_CODE_TABS-->

This plugin is "based" on `SimplePayment` because it does not require any frontend helpers and simply sets the Payment icon.

### PayPal PHP module

This payment does not require any extra packages to be installed except the main [Magento 2 Module](backend/installing-magento2#installing).

## Simple Payment

This plugin comes as a part of the base Payment Plugin package:

<!--DOCUSAURUS_CODE_TABS-->
<!--npm-->

```bash
# installs payment plugin (on falcon-client)
npm install --save @deity/falcon-payment-plugin
```

<!--Yarn-->

```bash
# installs payment plugin (on falcon-client)
yarn add @deity/falcon-payment-plugin
```

<!--END_DOCUSAURUS_CODE_TABS-->

And then simply import it like this:

```js
import { SimplePayment } from '@deity/falcon-payment-plugin';
```

> This plugin is going to be applied to any "unmapped" payment methods on your Falcon-Client.

The purpose of this plugin is to provide some "simple" payment support which does not require any external
confirmations and cannot simply "fail" (payment methods like "bank transfer" or "cash on delivery").

If you're adding your custom Payment Method - make sure you add it to your Payment mapping and follow
[Payment API](payments/api).
