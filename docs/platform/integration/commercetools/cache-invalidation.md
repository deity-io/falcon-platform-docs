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
