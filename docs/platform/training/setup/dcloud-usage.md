---
id: dcloud-usage
title: Deployment & Dcloud
sidebar_label: Deployment 
---

View our [dcloud usage docs](/docs/platform/cloud/dcloud) for full details.

## Deploying your first commit.

Once you've linked your repository using a webhook you should be able to run `dcloud repo` to see your linked repo.

Now commit something to your repositry. Even an empty commit is fine `git commit --allow-empty -m "Trigger dcloud build"`.

If you run `dcloud build:list` you should see your commit being built. Once this is finished you should see a complete status by it in the build list.  Remember the `id` for this build, you'll need it in a minute.

Now you'll want to decide which `env` to deploy to. To see your environments run the command `dcloud env:list`. From here you can see the different environments e.g. `test` or `production`.

The last step is deploying your code.

`dcloud deployment:run [buildId] [environmentName]`

This deployment should take less than a minute. Once this is done your new build will be live.

## Configuring your environment

Each environment allows different configiurations (variables). These will be used in a later tutorial but it's important to know how to configure them.

`dcloud env:var:set <env> <name> [value]`

e.g. `dcloud env:var:set test BIGCOMMERCE_HOST api.bigcommerce.com/stores/1234`

Once this is set your application running on the `test` environment will have access to the env variable `BIGCOMMERCE_HOST` with the value `api.bigcommerce.com/stores/1234`.
