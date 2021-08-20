---
id: routing
title: Routing
sidebar_label: Routing
---

## Overview

In-app routing is based on <a href="https://reacttraining.com/react-router/" target="_blank" rel="noreferrer noopener">react-router</a>.

[Dynamic Routing](/docs/platform/server/dynamic-routes) relies on both Falcon Client and Falcon Server. To see an example of how to get dynamic routing working please look at our [Contentful integration guide](/docs/platform/cookbook/integrations/contentful2).

---

In our example projects the routing happens in `client/src/App.js`.

`SwitchDynamicURL`, imported from `@deity/falcon-front-kit` is used to handle routes.

**`client/src/App.js`**
```js
...
import { Route } from 'react-router-dom';
import {
  ...
  SwitchDynamicURL,
} from '@deity/falcon-front-kit';
...

const App = () => (
  ...
  <SwitchDynamicURL>
    <Route exact path="/" component={Home} />
    <Route exact path="/blog/:page?" component={Blog} />
    <Route exact type="shop-product" component={Product} />
    <Route component={NotFound} />
  </SwitchDynamicURL>
  ...
);

export default App;
```

## `SwitchDynamicURL` basics:

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

## Static Routing

As explained above, static URLs use the `path` prop to match a path to a component.

You will see we are also matching on `path` with a dynamic variable for `:page?`. In this instance it handles the blogs pagination and is later available as param passed automatically to the `Blog` component. 

```js
<Route exact path="/" component={Home} />
<Route exact path="/blog/:page?" component={Blog} />
```
**`Blog.js`**
```js
const Blog = ({ match = {} }) => {
  const { params } = match;
  ...
  <BlogPostListQuery variables={{ pagination: { perPage: 9, page: +params.page || 1 } }}>
  ...
}
```

## Dynamic Routing

In a lot of instances you won't know exactly which URLs you are looking for, for example `https://your-site/product-name.html`. This is what we refer to as **dynamic routing**. It requires you to query your APIs to look for a match.

In this case we would match on `type` and **not** `path`.

```js
<SwitchDynamicURL>
  <Route exact type="shop-product" component={Product} />
</SwitchDynamicURL>
```

The `type` is returned by a method in your API code (in Falcon Server).

For more details please checkout out our [dynamic routing docs](/docs/platform/server/dynamic-routes).

**n.b.** If `path` prop is passed the `type` will be ignored.

## Protected Routes

If you want a route to protected to logged in customer only you should use `<ProtectedRoute>` instead of `<Route>`.

This accepts the same props as `<Route>` but also `redirectsTo`. This is used for unauthenticated users.

An example of this is the account area. This will redirect to the `sign-in` page if the customer isn't logged in.

```js
<SwitchDynamicURL>
  <ProtectedRoute
    path="/account"
    redirectTo={`/sign-in`}
    component={Account}
  />
</SwitchDynamicURL>
```
