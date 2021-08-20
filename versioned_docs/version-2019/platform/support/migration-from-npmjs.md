---
id: migration-from-npmjs
title: Migration from npmjs.com
sidebar_label: Migration from npmjs.com
---

## Steps for migrating local development environment

The migration involves several steps for your project to migrate to GitHub packages from npmjs.com. Falcon packages (previously hosted on npmjs.com) will now be served from GitHub.

### 1. Generate your github token

Log in into github with the account that has access to Falcon. If you don't already have access please get in touch for more information.
Once you are logged in, go to [https://github.com/settings/tokens](https://github.com/settings/tokens) and press the "Generate new token" button. Add a suitable name and select the `read:packages` scope, then click "Generate token" at the bottom.

Next, copy the token and put it in your environment variables (name it `GITHUB_TOKEN`) on the computer that will need to install Falcon (the same applies to CI/CD)

### 2. Configure your npm to correctly access the packages repository

In order to tell NPM or Yarn to use a different registry to get Falcon packages add `.npmrc` file to both `client` and `server` folders of your Falcon's project. Both should have the following content:

```bash
@deity-io:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

> Note: if you already have such file in your repository then you can add above lines to the existing file

### 3. Change the dependencies

Run `npx fix-falcon-refs` inside your the root folder of your project to fix the Falcon references from `@deity` to `@deity-io`. Next run `yarn install` in both `client` and `server` folders.

## Steps for migrating CI/CD

Once migration of the local environment is ready all you need to do is to put `GITHUB_TOKEN` into environment variables of your CI/CD platform. Then it will be automatically used by Yarn or NPM during package installation.
