---
id: routing
title: Routing
sidebar_label: Routing
---

## Overview

In-app routing is based on <a href="https://reacttraining.com/react-router/" target="_blank" rel="noreferrer noopener">react-router</a> in version 4.

In our example projects the routing happens in `client/src/App.js`.


## Overview

## Client side

### Static

#### URL Queries

### Dynamic

### SwitchDynamicURL
### OnlyUnauthenticatedRoute
### ProtectedRoute


## Server side

### DynamicRouteResolver
### URL Priorities

You can see the key components involved in routing below. `@deity/falcon-front-kit` has 3 core components, `SwitchDynamicURL`, `ProtectedRoute` & `OnlyUnauthenticatedRoute`. 

**`client/src/App.js`**
```js
...
import { Route } from 'react-router-dom';
import {
  ...
  OnlyUnauthenticatedRoute,
  ProtectedRoute,
  SwitchDynamicURL,
} from '@deity/falcon-front-kit';
...

const App = () => (
  ...
  <SwitchDynamicURL>
    <Route exact path="/" component={Home} />
    <Route exact path="/blog/:page?" component={Blog} />
    <Route exact path="/cart" component={Cart} />
    <Route exact path="/checkout" component={Checkout} />
    <Route exact path="/checkout/sign-in" component={CheckoutSignIn} />
    <Route exact path="/checkout/confirmation" component={CheckoutConfirmation} />
    <Route exact path="/checkout/failure" component={CheckoutFailure} />
    <Route exact path="/search" component={Search} />
    <ProtectedRoute
      path="/account"
      redirectTo={`/?sidebar=${SIDEBAR_TYPE.account}`}
      component={Account}
    />
    <OnlyUnauthenticatedRoute exact path="/reset-password" component={ResetPassword} />
    <Route exact type="blog-post" component={BlogPost} />
    <Route exact type="shop-category" component={Category} />
    <Route exact type="shop-product" component={Product} />
    <Route component={NotFound} />
  </SwitchDynamicURL>
  ...
);

export default App;
```

### `SwitchDynamicURL` basics:

This component `@deity/falcon-front-kit/src/DynamicRoute/SwitchDynamicUrl`, wraps your `<Route>` much like `import { Switch } from "react-router-dom";`.

Using the current `location` and it's child components it will determine what to render. 

If there is a `path` match in one of the child components that will take priority.

e.g. if the URL was `https://yourstore/checkout`, the `Checkout` component would be rendered.

```js
<SwitchDynamicURL>
  <Route exact path="/checkout" component={Checkout} />
</SwitchDynamicURL>
```

:::note Exact URLs
If you want your URL to match exactly you can pass `exact` as a prop. Read more [here](https://reacttraining.com/react-router/web/api/Route/exact-bool)
:::

## Dynamic Routing

In most cases your site won't be made up of flat routes and you'll need to render components based on `dynamic` routes such as product `slugs`.

We Still use `<SwitchDynamicURL>` for this, but we pass `type` to our child `<Route>` component.

```js
<SwitchDynamicURL>
  <Route exact type="shop-product" component={Product} />
</SwitchDynamicURL>
```

If `path` prop is passed the `type` will be ignored.

### `DynamicRouteResolver`

`@deity/falcon-server/src/resolvers/DynamicRouteResolver.ts`

[DynamicRouteResolver](/docs/platform/server/dynamic-routes) is where the magic happens.

`SwitchDynamicURL` uses `@deity/falcon-data/src/Url/UrlQuery.tsx` to check each API to determine if they can handle a URL.

As long as your Api resolver extends [`import { ApiDataSource } from '@deity/falcon-server-env';`](/docs/platform/packages/falcon-server-env#apidatasource) then you have a few methods available to you.

- `getFetchUrlPriority`
- `fetchUrl`

### URL Priority

Each API can also provide a priorty to its URLs. By **default** the API priorty order is the order they are added in your `server/config/default.json` file. With the first API being checked first.

You might want to do this if you're worried about URLs clashing, e.g. a product and blog post having the same URL.

To change the priority of your API you will first need to import `ApiUrlPriority`. This contains an object which maps priorites to values. You can then use the `getFetchUrlPriority` function to set your priority.

**`@deity/falcon-server-env/src/types.ts`**
```tsx
export enum ApiUrlPriority {
  HIGHEST = 1,
  HIGH = 2,
  NORMAL = 3,
  LOW = 4,
  LOWEST = 5,
  OFF = 0
}
```

**YOUR_API_RESOLVER.js**
```js
import { ApiUrlPriority } from '@deity/falcon-server-env';

getFetchUrlPriority(path) {
  return path.endsWith(this.itemUrlSuffix) ? ApiUrlPriority.HIGH : ApiUrlPriority.NORMAL;
}
```

The above example is used for our **Magento 2 API**, we add a high priorty to URLs that end with `.html`.
