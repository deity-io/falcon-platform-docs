---
id: migration-from-npmjs
title: Migration from npmjs.com
sidebar_label: Migration from npmjs.com
---

## Steps

The migration involves several steps for your project to migrate to GitHub packages from npmjs.com. Falcon packages (previously hosted on npmjs.com) will now be served from GitHub.

### GitHub token

To access GitHub packages you would need to create a token. Follow
[this page](https://docs.github.com/en/free-pro-team@latest/packages/publishing-and-managing-packages/about-github-packages#authenticating-to-github-packages) to create a token with `read:packages` scope.

### `.npmrc` file

Add `.npmrc` file (or update it if you already have one) to the root folder of your project with the following content:

```bash
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
@deity-io:registry=https://npm.pkg.github.com
```

> Make sure `GITHUB_TOKEN` value is being passed to your project.

### Project files

Run `npx fix-falcon-refs` inside your project folder to fix the Falcon references from `@deity` to `@deity-io`.
