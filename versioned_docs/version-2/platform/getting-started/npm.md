---
id: npm
title: 3. Access our packages
sidebar_label: 3. Access our packages
---

## Overview

In order to be able to get access to the **DEITY Platform packages**, you will need to connect to our private npm registry.

You can do this using the **authorisation token** from [Step 2](/docs/platform/getting-started/dcloud#getting-your-npm-token). 

You'll need to add your token to a [.npmrc file](https://docs.npmjs.com/cli/v7/configuring-npm/npmrc).

We recommend adding your token to a user config, it can however be added in your projects root.

## Setup

### Add / Edit your .npmrc

You'll need to either create or edit a `.npmrc` file. The user config can be found in your users root directory `~/.npmrc`.  If you don't have one, you can create one:

```bash
nano ~/.npmrc
```

:::note Using Windows?
If you're using Windows you can just use file explorer and any text editor to create / edit this file.
:::

### Add your token

Add the following code to your `.npmrc` file, replacing `<YOUR_TOKEN>` with your token. 

**Example:**
```javascript
@deity:registry=https://npm.deity.io/
//npm.deity.io/:_authToken=<YOUR_TOKEN>
```

### Test your access

To test your access you can run 

```bash
npm view @deity/create-falcon-app
```

This will return the list of available versions of Create Falcon App. If you see version then you have access :-)
