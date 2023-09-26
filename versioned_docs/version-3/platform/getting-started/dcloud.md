---
id: dcloud
title: 2. Installing Dcloud
sidebar_label: 2. Install Dcloud
---

## What's Dcloud?

Dcloud is our CLI tool for managing your Deity cloud account. From here you can manage deployments, environment variables and much more. [Read our full Deity Cloud docs for more information.](/platform/cloud/about)

## Install Dcloud

Before doing anything you'll need to install our CLI tool on your local machine.

This can be done using **npm**.

```bash
npm i -g dcloud
```

### Check Dcloud is installed

To test this has installed correctly run the command `dcloud` and you should be returned a list of available options.

:::note Keep Dcloud up to date
We strongly advise you keep your Dcloud version up to date. If you don't have the latest version you'll see a warning when trying to run `dcloud` commands. To update dcloud simply re-run `npm i -g dcloud`.
:::

## Login to your cloud env

Once you've got dcloud installed you'll need to login.

```bash
dcloud login
```

Running the login command will take you through logging in step by step.

It will open a browser window which will ask you to confirm the code in the CLI window.

<img src="/docs/img/docs/cloud/dcloud-confirm.png" alt="Dcloud Confirm" width="600" style={{ display: 'block', marginBottom: 20 }}/>

<img src="/docs/img/docs/cloud/dcloud-confirm-2.png" alt="Dcloud Confirm" width="300" style={{ marginBottom: 20 }}/>

After this you'll be redirected to login. You can use the credentials provided to you by our team when creating an account.

### Getting your NPM token

Once you've successfully logged in, your **NPM access** token will appear in your current terminal window. You'll need this in a later step so we advise adding it to a password manager.

:::note Lost your NPM token?
If you've lost your NPM token you can run `dcloud project:npm-token` to get it.
:::

### Check you're logged in

To check you're logged in, simply run `dcloud whoami` and you should see the email assocatied with your account.
