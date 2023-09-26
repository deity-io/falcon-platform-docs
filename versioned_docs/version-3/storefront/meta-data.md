---
id: meta-data
title: SEO / Meta Data
sidebar_label: SEO / Meta Data
---

<a href="https://www.npmjs.com/package/react-helmet-async" rel="noreferrer noopener" target="_blank" aria-label="visit the React Helmet package">
  <img src="/docs/img/docs/platform/react-helmet.jpg" alt="React Helmet Logo" width="100" style={{ marginBottom: 20 }} />
</a>

Falcon Platform uses [React Helmet Async](https://www.npmjs.com/package/react-helmet-async) to manage meta data such as `page titles` and `meta descriptions`. React Helmet supports server side rendering making it perfect for Falcon Platform.

- [React Helmet Docs](https://www.npmjs.com/package/react-helmet)
- [React Helmet Async Docs](https://www.npmjs.com/package/react-helmet-async)

## Example Code

**`client/src/App.js`**
```js
import { Helmet } from 'react-helmet-async';
...
<Helmet htmlAttributes={{ lang: locale }} defaultTitle="FALCON STORE" titleTemplate="%s | FALCON STORE">
  <meta name="description" content="Find your next big thing." />
  <meta name="theme-color" content="#262828" />
  <meta name="msapplication-TileColor" content="#262828" />
  <meta name="format-detection" content="telephone=yes" />
  <meta property="og:title" content="FALCON STORE" />
  <meta property="og:type" content="website" />
  <meta property="og:description" content="Find your next big thing." />
  <meta property="og:url" content="/" />
</Helmet>
```

Nested or latter components will override duplicates.
