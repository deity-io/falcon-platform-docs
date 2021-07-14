---
id: overview
title: GeoIP
sidebar_label: Overview
---

## Overview

All requests the go through our cloud hosting a proxied by `nginx`. 

We append headers based on the GeoIP to these requests.

```
X-GeoIP-Country
X-GeoIP-Country-Name
X-GeoIP-Region-Name
X-GeoIP-City
X-GeoIP-Postal-Code
```

## 1. Passing GeoIP information from Falcon Server to Falcon Client (Enterprise Only)

We have api packages available to pass GeoIP information from your middleware app to your client app.

These should exist out of the box with our demo apps.

If you're an enterprise customer and you've modified your Falcon Server instsance you'll need to check the following:

**i. Adding our packages as server dependencies**

Inside your `server` directory run

```bash
yarn add @deity/falcon-geo-ip-api,
yarn add @deity/falcon-geo-location-extension,
```

**ii. Adding the data source**

In your `server/config/default.json` add the following as a data source:

```json
...
"apis": {
  ... 
  "geo-ip-api": {
    "package": "@deity/falcon-geo-ip-api",
    "config": {}
  }
}
...

```

**iii. Adding the extension**

In your `server/config/default.json` add the following as an extension:

```json
...
"extensions": {
  ...
  "geo-location": {
    "package": "@deity/falcon-geo-location-extension",
    "config": {
      "api": "geo-ip-api"
    }
  }
}
```

## 2. Accessing GeoIP information in Falcon Client.

Geographic data is available to the entire client app via a context provider. This data comes from **step 1** and the middleware.

The data provided contains:

**name | object key**

- Country code | `country`
- Region | `region`
- City | `city`
- Post Code | `postCode`

Our `@deity/falcon-front-kit` contains a handy component to access this information.

```js
import { GeoLocation } from '@deity/falcon-front-kit'}
...
<GeoLocation>
  {data => {
    const { country, region, city, postCode } = data;
    return <p>Address data: {city}, {region}, {postCode}, {country}</p>;
  }}
</GeoLocation>
```

## 3. Testing GeoIP locally

GeoIP data is added via our cloud platform so is NOT available for local development.

If you want to access it locally you have 2 options:

1. Connect to a cloud instance of Falcon Server (this is already the case for all non-enterprise customers)

2. Fake the headers. This can easily be done using a borwser extension such as [bewisse](https://bewisse.com/modheader/help/). The headers are below and aren't case sensitive:

```
X-GeoIP-Country
X-GeoIP-Country-Name
X-GeoIP-Region-Name
X-GeoIP-City
X-GeoIP-Postal-Code
```

## 4. Getting GeoIP information in your own API packages (Enterprise Only)

If you want to access the GeoIP headers in your custom data source you can get it from `context.koa.request`.


```js
import { ApiDataSource } from '@deity/falcon-server-env';
import type { Request } from 'koa';

export default class MyCustomAPI extends ApiDataSource {
  async geoLocation(obj, params, context) {
    return this.getLocationFromRequest(context.koa.request);
  }

  async getLocationFromRequest(request: Request) {
    return {
      country: request.get('X-GeoIP-Country'),
      region: request.get('X-GeoIP-Region-Name'),
      city: request.get('X-GeoIP-City'),
      postCode: request.get('X-GeoIP-Postal-Code')
    };
  }
}
```
