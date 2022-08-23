---
id: setup
title: Setup
sidebar_label: Setup
---

Our payment service should be set up using [dcloud](/docs/next/platform/cloud/dcloud).

Please make sure your `dcloud` is up to date before configuration.

## 1. Create a profile

`dcloud payments:profile:create`

When configuring your profile please choose a region closest to your main customer base.

Once configuration of your profile is complete you will see a user and a auth token, if you wish to connect to this profile using a local Deity Platform instance please make note of this. You can get them later if you forget.

## 2. Configure a payment provider

`dcloud payments:provider:configure`

## 3. Set up a payment method

`dcloud payments:method:configure`

## 4. Connect your Deity Platform environment

`dcloud payments:profile:apply`

## 5. Apply your changes

`dcloud env:var:apply <env>`
