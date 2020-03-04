---
id: icons
title: Site Icons
sidebar_label: Site Icons
---

Icons such as your hamburger menu, account link and social network logos are all managed in 1 component. `client/src/styling/icons.js`

![Image of icons](../../../../img/docs/platform/icons.png)

The icon component exports and object with each icon included. We have the <a href="https://boxicons.com/" target="_blank" rel="noopener noreferrer">boxicons package</a> included so you have access to all these icons right from the start.

**`client/src/styling/icons.js`**
```js
import User from 'boxicons/svg/regular/bx-user.svg';
import Logo from '../assets/logo.svg';

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
