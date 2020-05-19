---
id: npm
title: Adding your NPM auth token
sidebar_label: Adding your NPM auth token
---

In order to be able to get access to the **Falcon Platform packages**, you will need to connect to our private npm registry.

You can do this using an **authorisation token**. You can get this from your admin panel or by contacting us.

To set up your token please follow these steps:

1. Log in into <a href="https://npm.deity.io" target="_blank" rel="noreferrer noopener">https://npm.deity.io</a> (you can use any email) using credentials provided by DEITY:

```javascript
npm login --registry=https://npm.deity.io --scope=@deity
```

2. Your `~/.npmrc` file should contain your auth token. 

**Example:**
```javascript
@deity:registry=https://npm.deity.io/
//npm.deity.io/:_authToken=<YOUR_TOKEN>
```

3. To let Falcon Cloud use your NPM token for the deployments and keep your token outside of GIT, run the following command in your terminal.

```javascript
dcloud build:var NPM_TOKEN "<YOUR_TOKEN>"
```

4. To use the dcloud build variable, add a `.npmrc` file to the root folder of your project application (e.g. `client/.npmrc` and `server/.npmrc`) with the following content:

```javascript
//npm.deity.io/:_authToken=${NPM_TOKEN}
@deity:registry=https://npm.deity.io/
```
