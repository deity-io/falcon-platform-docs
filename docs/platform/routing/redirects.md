---
id: redirects
title: Redirects
sidebar_label: Redirects
---

Redirects can be added in 2 ways, **client side** & **server side**.

Both can be handled by [React Router](https://reacttraining.com/react-router/web/guides/server-rendering).

- Server side routing uses `<StaticRouter />` (`import { StaticRouter } from "react-router-dom";`)
- Client side routing uses `<BrowserRouter />` (`import { BrowserRouter } from "react-router-dom";`)

## Redirecting protected routes

If you want a route to be protected by authentication. For example a customer account area or private sale you can use our `<ProtectedRoute>` component rather than the standard `<Route>`.

**`client/src/App.js`**
```js
<SwitchDynamicURL>
  <Route exact path="/" component={Home} />
  <ProtectedRoute
    path="/account"
    redirectTo="/"
    component={Account}
  />
</SwitchDynamicURL>
```

You can see we use the `redirectTo` prop to pass a redirect URL. This redirect happens **client side** and no additional headers (401) are sent.

## Redirecting with a status (301, 404)

You might want to add a redirect with additonal headers, for instance a **301** when a produt URL has changed you'll need to do a little more work. 

Out of the box this information isn't available from **BigCommerce**
