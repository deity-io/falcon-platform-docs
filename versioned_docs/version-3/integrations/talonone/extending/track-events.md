---
id: track-events
title: Track events
sidebar_label: Track custom events
---

import CodePackage from '@site/src/components/CodePackage';

<CodePackage name="@deity/falcon-talonone-module" />


When working with custom events, please make sure the event is also registered in the talon one application. By default tracking of events is only possible from the middleware. However, by exposing a GraphQl mutation we can easily port this behaviour to the client.

## Functionally event tracking

```ts
talononeDataSource.trackProfileEvent(customerId, type, attributes); // Track customer events on talonOne CustomerProfile;
talononeDataSource.trackSessionEvent(customerId, cartId, type, attributes); // Track cart events on talonOne CustomerSession;
```

## Proxy client side event tracking trough GraphQl

In the example below we leverage the `talononeDataSource.trackSessionEvent` in a mutation resolver. In his way we can easily fire custom events from the client.

```ts
...
gqlResolvers() {
  ...
  Mutation: {
    ...
    trackCategoryView: (root, { input }, context): Promise<boolean> => {
      const { customerId, cartId } = context.container.get<ShopHttpSession>('ShopHttpSession');

      return context.dataSources.talonone.trackSessionEvent(customerId, cartId, 'CategoryViewed', {
        category_viewed: input.name
      });
    },
    ...
  }
  ...
}
```

:::note
Don't forget to add the `trackCategoryView` mutation to the GraphQl schema.
:::

Now we got everything set up we can call and test our mutation;

```graphql
mutation TrackCategoryView($input: TrackCategoryViewInput!) {
  trackCategoryView(input: $input)
}
```

```json
{
  "input": {
    "name": "category-1"
  }
}
```