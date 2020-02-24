---
id: installation
title: Installation
sidebar_label: Installation
---

## Installing DCloud

Before doing anything you'll need to install our CLI tool on your local machine.

This can be done using **npm**.

```javascript
npm i -g dcloud
```

Adding `-g` will install it globally so you can use it where ever you want.

![Installing DCloud](/static/img/docs/cloud/npm-install-dcloud.gif)

To test it's working run `dcloud`. You should list a list of available commands.

## Loggin in

The next step is to log into [your cloud account](account).

From your terminal window run the login command.

```javascript
dcloud login
```

You will be prompted to add your cloud credentials.

![DCloud Login](/static/img/docs/cloud/dcloud-login.png)

To check you're logged in correctly run `whoami`

```javascript
dcloud whoami
```

## Check you repository details

Once you're logged in you can use the CLI tool to check your linked repository is correct.

```javascript
dcloud repo:list -i
```

This will also give you a Webhook and SSH key, both need for the next part of setup.
