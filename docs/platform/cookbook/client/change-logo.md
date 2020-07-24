---
id: change-logo
title: Changing the site logo
sidebar_label: Changing the site logo
---


Changing the site logo is probably one of the first things you will want to do, so we've created a step by step guide to doing it.
We will base these changes on the [demo-v2 example](/docs/platform/getting-started/create#our-examples) client, but the same principles will apply regardless of specific implementation.

## The header logo
The header logo uses your themes [icon component](/docs/platform/client/theming/icons) out of the box.  

**`client/src/styling/icons.js`**
```js
...
import Logo from '../assets/logo.svg';
...
export const icons = {
  logo: {
    icon: Logo,
    size: 'sm'
  },
  ...
}
```

**`client/src/components/Header/HeaderMenuBar.js`**
```js
...
import { ... Icon ...  } from '@deity/falcon-ui';
...
<Icon src="logo" ... />
```

To change the logo, all you need to do is change the file `client/src/assets/logo.svg`.

If you don't want to use an SVG or the icon component then you could just load your asset in `client/src/components/Header/HeaderMenuBar.js` and use an `<img>` element.

## Favicon / Touch Icons

Your favicon and other `meta` icons such as touch icons are added in your `client/src/App.js` file. All you need to do is change the src or replace these assets.

**`client/src/App.js`**
```js
...
import logo from 'src/assets/logo.png';
import icon16x16 from './assets/icons/appicons/16x16.png';
import icon32x32 from './assets/icons/appicons/32x32.png';
import icon180x180 from './assets/icons/appicons/180x180.png';
import favicon from './assets/icons/appicons/favicon.ico';
...
const HeadMetaTags = () => (
  <Locale>
    {({ locale }) => (
      <Helmet htmlAttributes={{ lang: locale }} defaultTitle="FALCON STORE" titleTemplate="%s | FALCON STORE">
        <meta property="og:image" content={logo} />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="107" />
        <link rel="icon" type="image/x-icon" href={favicon} />
        <link rel="icon" type="image/png" sizes="16x16" href={icon16x16} />
        <link rel="icon" type="image/png" sizes="32x32" href={icon32x32} />
        <link rel="apple-touch-icon" sizes="180x180" href={icon180x180} />
      </Helmet>
    )}
  <Locale>
)
```

## Manifest Icons

It wouldn't be a **PWA** with your `manifest.json` file. You can change this by editing `client/src/manifest.webmanifest`.

**`client/src/manifest.webmanifest`**
```js
{
  ...
  "icons": [
    {
      "src": "./assets/icons/192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "./assets/icons/512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```
---

That's it! Your site is ready to go.


:::note Don't forget your emails...
Falcon client doesn't handle your transactional emails. Don't forget to change the logo in your backend / email system (BigCommerce, Magento etc).
:::
