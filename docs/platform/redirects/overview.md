---
id: overview
title: Redirects
sidebar_label: Overview
enterprise_only: true
---

## Overview

Redirects can be added in 2 ways. Either in a flat file (you'll need Falcon Server access for this), or, they can come from your shops API package.

:::note Shop API support
We have support for shop redirects in our BigCommerce package and will be introducing Magento 2 support soon.
:::


## Flat redirects



### Query string support

### Regex support

## Shop API redirects

Redirect support is directly injected into your shops `fetchUrl()` method. 

We check for URL matches, if none are returned we then query the shops redirect API.  If a match is found we return and object:

```js
{
 path, // the location to be redirected
 status // the type of redirect e.g. 301, 302, 404
}
```
