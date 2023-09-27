---
id: configuration
title: Configuration
sidebar_label: Configuration
---

Falcon Client configuration can be found in the `client/config` directory.

Configs are stored as an object in [Apollo State](/docs/storefront/state).

`config` has **no schema** meaning you can add anything you like.

## Google Analytics example

This example shows how to retrieve and use these configs in your components.

**`graphql/analytics.gql`**

```gql
query ANALYTICS {
  config @client {
    googleAnalytics {
      trackerID
    }
  }
}
```

We pass our query to `withApollo` to access configs. This passes `client` as a prop:

```js
const { client } = props;
```

This can then be used to query the Apollo stateL

```js
const { config } = client.readQuery({ query: ANALYTICS }) || {};
```

**See the full example component**

```js
import React from 'react';
import { withApollo } from '@apollo/react-hoc';
import GAnalytics from 'ganalytics';
import { ANALYTICS } from '../graphql/analytics.gql';

let ga = null;

export default WrappedComponent => {
  const WithAnalytics = props => {
    if (process.browser && !ga) {
      const { client } = props;
      const { config } = client.readQuery({ query: ANALYTICS }) || {};
      const { googleAnalytics } = config || {};
      const { trackerID } = googleAnalytics || {};

      if (trackerID) {
        ga = new GAnalytics(trackerID, {}, true);
      }
    }

    return <WrappedComponent {...props} ga={ga} />;
  };

  return withApollo(WithAnalytics);
};
```

This same principle can used for all client configs.
