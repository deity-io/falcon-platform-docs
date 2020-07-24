---
title: Code Splitting
---

This feature splits your code into various bundles which are loaded on demand. It is used to achieve smaller bundles and control resource load prioritization. This has a major impact on load time. To specify the splitting point you need to import modules in an asynchronous manner. To make it work with React, Falcon Client uses [loadable](#loadable).

### Loadable

Asynchronous components are based on the [loadable](https://github.com/smooth-code/loadable-components) package.

It is highly recommended to make each page component asynchronous. Then page chunks do not increase in size when you add more pages, as they contain only the necessary amount of code to load that specific page.

To convert React Component into a component which can be fetched on demand later, you need to wrap it with a `loadable` function:

```jsx
// AppRoutes.js
import loadable from '@loadable/component';

const AsyncHome = loadable(() =>
  import(/* webpackChunkName: "home" */ "./pages/Home")
);

export default () => (
  <Switch>
    <Route exact path="/" component={AsyncHome} />
    // Your other routes...
  </Switch>
)
```

When you create your project using [`create-falcon-app`](/docs/open-source/getting-started/installation#create-falcon-app-cli-tool) Falcon provides a wrapper function for `loadable`. This wrapper function shows a spinner while the component is loading to indicate to the user that the contents of the page are currently being fetched. Using this wrapper function is optional, but it is recommended to provide a fallback state to `loadable` if you choose to write your own.

```jsx
// components/loadable.js
import React from 'react';
import loadable from '@loadable/component';
import { Loader } from '@deity/falcon-ecommerce-uikit';

export default component =>
  loadable(component, {
    fallback: <Loader />
  });
```

For more information see [`loadable` on GitHub](https://github.com/smooth-code/loadable-components).

### Vendors bundle

`vendors.js` is a chunk which combines only the common project dependencies into single file. As they should not change often, even between subsequent releases, it allows to turn on long term caching for rather big files.
