---
id: setup
title: Getting Falcon Platform Setup
sidebar_label: Falcon Platform Setup
---

## Create Falcon App

The first step is to create your app.

### Access our packages

To use Falcon you need access to our packages. This is granted with an `npm token`. 

If you're using BigCommerce this token is found in your admin, if not you'll need to contact our team to get it.

[This guide](/docs/platform/getting-started/npm) contains a detailed explanation about setting up your NPM token.

### Using Create Falcon App

Once you've got access to our packages you'll be able to use `create-falcon-app` to create your project.

You can then commit this to a repository. We'll link this repository to your cloud account in a later step so you can publish your code.

[This guide](/docs/platform/getting-started/create) contains more options for setting up your project.

### Starting your app locally

To get your app started locally simply navigate inside the `client` and `server` directories in seperate terminal windows and run `yarn start` (or `npm start`).
