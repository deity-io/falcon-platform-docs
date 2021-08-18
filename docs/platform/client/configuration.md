---
id: configuration
title: Configuration in Falcon Client
sidebar_label: Configuration
---

Falcon Client and Falcon Server use the same way of configuration. You can find the general concepts [here](../server-v3/configuration).

In the client application configuration is stored as an object in Apollo State, so to get the values provided in config files you need to send the GraphQL query.

Let's assume that you have the following entry in the `client/config/default.json` file:

```json
{
  ...
  "menu": {
    "maxMenuDepth":  
  }
}

```

Then to get the `menu.maxMenuDepth` value (in order to use in on frontend) you need to send the following query:

```js

const MENU_DEPTH_QUERY = gql`
  query FULL_CLIENT_CONFIG {
    config @client {
      menu {
        maxMenuDepth
      }
    }
  }
`;

const { config } = client.readQuery({ query: MENU_DEPTH_QUERY }) || {};
console.log(config.menu.maxMenuDepth);
```

:::note 
Query `config` has **no schema**, meaning you can add anything you like.
:::


## Google Analytics Example

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
