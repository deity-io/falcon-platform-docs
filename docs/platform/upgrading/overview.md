---
id: overview
title: Upgrading
sidebar_label: Overview
---

## Overview

Our packages are all published to our private NPM account, along side these packages you'll also have an app. `client` for most customers, `client` & `server` for enterprise customers. Your app will need upgrading manually according to the changes you want to include. 


## Package updates

To update our packages you simply need to change them in your `package.json` and run either `yarn` or `npm update`.

Falcon platform pacakges are all pegged to the same version number so we recommend upgrading them all at the same time.

Falcon payment packages are also all pegged to the same version, but not to Falcon platform packages.

**example**

```json
// package.json
 "dependencies": {
    "@deity/falcon-algoliasearch-api": "^2.7.0",
    "@deity/falcon-algoliasearch-component": "^2.7.0",
    "@deity/falcon-algoliasearch-endpoints": "^2.7.0",
    "@deity/falcon-bigcommerce-api": "^2.7.0",
    "@deity/falcon-bigcommerce-endpoints": "^2.7.0",
    "@deity/falcon-blog-extension": "^2.7.0",
    "@deity/falcon-logger": "^2.7.0",
    "@deity/falcon-mailer": "^2.7.0",
    "@deity/falcon-payments": "^2.6.4",
    "@deity/falcon-payments-endpoints": "^2.6.4",
    "@deity/falcon-payments-env": "^2.6.4",
    "@deity/falcon-payments-mollie": "^2.6.4",
    "@deity/falcon-payments-plain": "^2.6.4",
    "@deity/falcon-payments-stripe": "^2.6.4"
  },
```

```json
// package.json
 "dependencies": {
    "@deity/falcon-algoliasearch-api": "^2.7.1",
    "@deity/falcon-algoliasearch-component": "^2.7.1",
    "@deity/falcon-algoliasearch-endpoints": "^2.7.1",
    "@deity/falcon-bigcommerce-api": "^2.7.1",
    "@deity/falcon-bigcommerce-endpoints": "^2.7.1",
    "@deity/falcon-blog-extension": "^2.7.1",
    "@deity/falcon-logger": "^2.7.1",
    "@deity/falcon-mailer": "^2.7.1",
    "@deity/falcon-payments": "^2.7.0",
    "@deity/falcon-payments-endpoints": "^2.7.0",
    "@deity/falcon-payments-env": "^2.7.0",
    "@deity/falcon-payments-mollie": "^2.7.0",
    "@deity/falcon-payments-plain": "^2.7.0",
    "@deity/falcon-payments-stripe": "^2.7.0"
  },
```

## App updates

As mentioned, you'll need to update your app manually.

We recommend a code `diff` to view the changes and pick and choose the changes you need to include in your app.

To do this, follow these steps:

1. Run `npx @deity/create-falcon-app@2.7.0 my-project` (replace `2.7.0` with your current version)
2. Commit `my-project`
3. Delete the `my-project` directory
4. Run `npx @deity/create-falcon-app my-project` (this will pull the latest version)
5. Compare the changes and copy across anything relevant into your app.
