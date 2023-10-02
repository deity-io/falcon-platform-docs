---
id: caching
title: Caching
description: Learn about the various cache levels in the Deity Platform.
sidebar_label: Caching
---

## Overview

Caching occurs in a few different forms with Falcon Platform. You have asset caches via the browser and a service worker, and data caches handled by Falcon Server (GraphQL).

## Falcon Client

Webpack generates unique chunk names during each build. These chunks are set to have a cache lifetime of 1 year. This means the a users will get a new version of your code each time you deploy new changes (run the build script). See our [code splitting](/storefront/code-splitting) guide for more information.

Our service worker will cache these static assets in local storage.

We have 2 components to help with this and to prevent that users are getting served stale content. These are imported from our `@deity/falcon-service-worker` package. They will show users a message to fetch new content if changes are detected.

**`client/src/App.js`**

```js
import { ServiceWorkerRegistrar, ServiceWorker } from '@deity/falcon-service-worker';

...
<ServiceWorkerRegistrar>
  ...
  <ServiceWorker>
    {({ isWaiting, skipWaiting }) =>
      isWaiting ? (
        <Box>
          Site has updated. To see changes close other tabs or
          <Button size="ms" p="xs" m="sm" onClick={() => skipWaiting()}>
            click here
          </Button>
        </Box>
      ) : null
    }
  </ServiceWorker>
  ...
</ServiceWorkerRegistrar>
```

## Falcon Server

Falcon Server also adds a layer of caching for all it's requests. Read our [Falcon Server caching](/docs/composer/caching) docs.
