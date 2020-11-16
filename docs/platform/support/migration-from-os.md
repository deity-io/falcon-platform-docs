---
id: migration-from-os
title: Migration from Open Source
sidebar_label: Migration from Open Source
---

## Steps for migrating local development environment

To migrate local development environment please use the following steps:

### 1. Change the dependencies 

Run `npx fix-falcon-refs` in your project's root

### 2. Configure your npm to correctly access the packages repository

Add `.npmrc` file to both `client` and `server` folders of your Falcon's project. Both should have the following content:

```
@deity-io:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB-TOKEN}
```

> Note: if you already have such file in your repository then you can add above lines to the existing file 

### 3. Generate your github token

Log in into github with the account that has access to Falcon project. Once you are logged in go to [https://github.com/settings/tokens](https://github.com/settings/tokens) and press "Generate new token" button, then add a suitable name and select `read:packages` scope and click "Generate token" at the bottom. Next, copy the token and put it in your environment variables (name it `GITHUB_TOKEN`) on the computer that will need to install Falcon (the same applies to CI/CD)  

## Steps for migrating CI/CD

Once migration of the local environment is ready all you need to do is to put `GITHUB_TOKEN` into environment variables of your CI/CD platform. Then it will be automatically used by Yarn or NPM during package installation.