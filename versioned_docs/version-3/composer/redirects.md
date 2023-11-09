---
id: redirects
title: Redirects in Deity Platform
description: Learn how to use redirects in the Deity Platform.
sidebar_label: Redirects
---

# Redirects

## Overview

Redirects can be added in 2 ways. Either in a flat file (you'll need Falcon Server access for this), or, they can come from your shops API package.

- [Flat Redirects](#flat-redirects-enterprise-only)
- [Shop API Redirects](#shop-api-redirects)
- [Implementation](#implementation)


## Flat redirects (Enterprise Only)

To add flat redirects you must first create a `server/config/redirects.txt` file. You can then add your redirects there. All redirects added to this file are treated as `301`.

This file path can be configured in your `server/config` files. The config variable is `redirectFile`

```json
{
  ...
  "redirectFile": "config/redirects.txt" // default file path
}
```

### 1 to 1 redirect

The format of this file should have each redirect on a new line with the orgin and destination seperated by a space.

```
origin destination
```

**example**

```
/product-1 /product-2
```

In this example the url `/product-1` will 301 redirect to `/product-2`

### Regex support

We also support regex. Any entry prefixed with `@` is considered regex.

**example**

```
@\/product-1$  /product-2
```

In this example any url that ends in `/product-1` will be redirected to `/product-2`


### Query string support

If you want to pass query parameters accross that is also possible by assigning them to a variable using `(.*)$`.

Each time you use the string `(.*)$` it is passed as a variable in numberical order to `$1` and then `$2` and so on.

**example**

```
@\/product-1(\?.*)?$  /product-2$1
```

In this example everything after `product-1` is saved as `$1` and passed to the end of the destination.  e.g. `https://deity.com/product-1?id=1&project=2` => `https://deity.com/product-2?id=1&project=2`

**example 2**

```
@^(.*)\/product-1(.*)$  $1/product-2$2
```

In this example everything before `product-1` is set to `$1` and everything after is set to `$2`. e.g. `https://deity.com/products/product-1?id=1&project=2` => `https://deity.com/products/product-2?id=1&project=2`


## Shop API redirects

Redirect support is directly injected into your shops `fetchUrl()` method. 

We check for URL matches, if none are returned we then query the shops redirect API.  If a match is found we return an object:

```js
{
 path, // the location to be redirected
 status // the type of redirect e.g. 301, 302, 404
}
```

## Implementation

To get redirects to work you'll need to make sure you have a `DynamicRedirect` component in your route `App.js`.

This uses `react-router-dom` to handle the redirect.

**client/src/components/DynamicRedirect.js**
```js
import React from 'react';
import { Redirect } from 'react-router-dom';

export const DynamicRedirect = ({ match, location, staticContext }) => {
  const { path, status = 301 } = match.params;
  if (staticContext) {
    staticContext.status = status;
  }
  return <Redirect from={location.pathname} to={path} />;
};
```

**client/src/App.js**
```js
...
import { ..., DynamicRedirect } from './components';
...
const App = () => (
  ...
  <SwitchDynamicURL onLoading={({ component }) => <LoaderWrapper>{component}</LoaderWrapper>}>
    ...
    <Route exact type="redirect" component={DynamicRedirect} />
    <Route component={NotFound} />
  </SwitchDynamicURL>
  ...
)
```
n.b. the `DynamicRedirect` should be passed to the second to last `Route` component to allow the other routes to be rendered with a higher priority.

**server/config/redirects.txt (for flat redirects)**
```
/contact/ /contact-us/
/old-product/ /new-product/
/old-page/ /
```
