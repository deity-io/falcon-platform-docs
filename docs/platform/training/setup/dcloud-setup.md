---
id: dcloud-setup
title: Setting Up Dcloud
sidebar_label: Setting Up Dcloud
---

Dcloud is our CLI tool for managing your Deity Cloud instance.

From here you can manage builds, deployments, config and much more.

[Full documentation here](/docs/platform/cloud/installation)

## Install Dcloud

To install dcloud on your machine simply run `npm i -g dcloud`.

To test it's worked you can test it by running `dcloud -h` in a terminal window. This should return a list of the commands available.

## Logging into your Cloud Account.

The next step is to log into your cloud account.

This is done using an [auth token](https://app.deity.cloud/sign-in/authorization-token).

`dcloud login:token [token]`

To test this you can run `dcloud whoami` and you should be returned with user info.

## Linking your code repository.

The next step will be to link your repo to your dcloud instance.

This is done using a webhook.

Run `dcloud repo -i`. This will provide you with full instructions on what webhook to add and what permissions need to be granted on your repository.
