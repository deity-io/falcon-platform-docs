---
id: icons
title: Site Icons
sidebar_label: Site Icons
---

DEITY PWA Frontend comes with an Icon component `@deity/falcon-ui`. This component expects you to have icons set in your theme.

**`client/src/styling/theme.js`**
```js
...
export const yourThemeName = createTheme({
  ...
  icons: {}
})
```

If you're using the `demo-v2` example, you'll see a `client/src/styling/icons.js` file. This is imported into your theme.

**`client/src/styling/theme.js`**
```js
...
import { icons } from './icons';
export const yourThemeName = createTheme({
  ...
  icons
})
```

**`client/src/styling/icons.js`**
```js
...
import Icon from '..//img/opensource/icon.svg';

export const icons = {
  ...
  newIcon: { icon: NewIcon },
  ...
};
```

The `client/src/styling/icons.js` component exports and object with each icon included. We have the <a href="https://boxicons.com/" target="_blank" rel="noopener noreferrer">boxicons package</a> included so you have access to all these icons right from the start.

**`client/src/styling/icons.js`**
```js
import User from 'boxicons/svg/regular/bx-user.svg';
import Logo from '..//img/opensource/logo.svg';

export const icons = {
  logo: {
    icon: Logo,
    size: 'sm'
  },
  account: { icon: User },
  ...
};
```

You can also add your SVG directly into the icon component rather than importing it.

**`client/src/styling/icons.js`**
```js
...
export const icons = {
  ...
  loader: {
    icon: props => (
      <svg viewBox="0 0 50 50" {...props}>
        <path
          d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z"
          transform="rotate(241.969 25 25)"
        >
          <animateTransform
            attributeType="xml"
            attributeName="transform"
            type="rotate"
            from="0 25 25"
            to="360 25 25"
            dur="0.8s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    )
  }
};
```
