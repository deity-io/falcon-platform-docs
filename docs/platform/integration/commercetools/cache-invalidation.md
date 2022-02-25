---
id: cache-invalidation
title: Cache invalidation
sidebar_label: Cache invalidation
---

import CodePackage from '@site/src/components/CodePackage';

<CodePackage name="@deity/falcon-commercetools-module" />

## Overview

CommerceTools provides notifications about changes on their platform with use of [Subscriptions](https://docs.commercetools.com/api/projects/subscriptions#top).
Falcon Platform provides out of the box integration with CommerceTools messaging system on the base of Google PubSub.

### Setup Google PubSub

Before setting up any subscriptions on CommerceTools side PubSub configuration should be done.
First create a topic and a subscription. The topic has to give the `pubsub.topics.publish` permission to the service account `subscriptions@commercetools-platform.iam.gserviceaccount.com.`
We will need your Google project ID (`google-cloud-project-id`) and topic id (`topic-id`) to setup CommerceTools subscription.

### Create new CommerceTools subscription

To create a new susbcription on CommerceTools side we recommend using [Postman](https://www.postman.com/).
Please follow [Postman configution manual](postman) before proceeding further.

### 1. Create subscription for product and category updates

The final step is to run the request `Project -> Subscriptions -> Create Subscription` (`{{host}}/{{project-key}}/subscriptions`).

Set the request body to `JSON` and add the following object:

```json
{
  "destination" : {
    "type" : "GoogleCloudPubSub",
    "projectId" : "google-cloud-project-id",
    "topic": "topic-id"
  },
  "changes": [{
      "resourceTypeId": "category"
  }],
  "messages" : [ {
    "resourceTypeId" : "product",
    "types" : ["ProductPublished"]
  }],
  "key" : "product-publish"
}
```

This will create a new subscription that will trigger cache invalidation for given Category or Product.
#### Note.
Product update will be triggered only when product is published. Publishing the product would also invalidate category cache, so product should show up on the listing page.

### 2. Create service access key.
Please checkout the [official Google Cloud dic](https://cloud.google.com/iam/docs/creating-managing-service-account-keys)
On how to create service account keys.
Using `Editor role` for your access level is recommended. However you can fine tune permissions if you like. If application will not be able to access resource you will see 
```
Error: User not authorized to perform this action
``` 
in the console on server startup.

### 3. Connecting to pubsub from you local.
To connect you local environment to pubsub just put your service access file into `server/config` folder. And rename it to `pubsub_service_account.json`.
Server will read the credentials from `server/config/pubsub_service_account.json` on startup.

### 4. Connecting to pubsub from Deity Cloud.
We strongly discourage commiting your service access files to GIT and using it for connection from cloud environment.
Instead you can use the following command to base64 encode content of the file and set it using our cloud cli tool to environment variable
```
dcloud env:var:set -s test COMMERCETOOLS_SA_DATA "$(base64 -i ./pubsub_service_account.json)";
```

To make sure new variable name is applied to container - run 
```
dcloud env:var:apply test
```

In the above command we used `test` as environment code. Those could be also `stage`, `production.`