---
id: menu-navbar
title: Menu navbar with depth
description: Learn how to configure the MenuNavbar component.
sidebar_label: Menu navbar
---

By default the MenuNavbar renders up to 3 layers of navigation levels items who could be styled trough overriding styles.

:::note Required dependencies
#### Client
 - `@deity/falcon-ui-kit@v2.7.22` 
#### Server
 - demo-v1 - `@deity/falcon-magento2-api@v2.7.22`
 - demo-v2 - `@deity/falcon-bigcommerce-api@v2.7.22`
:::

## Example simple MenuNavbar
The most basic implementation renders the multi level menu on all devices.

**`client/src/components/Header/MenuNavbar.js`**
```js
...
import React from 'react';
import { MenuQuery } from '@deity/falcon-shop-data';
import { MenuNavbar } from '@deity/falcon-ui-kit';
...
export const MenuNavBar = () => {
  return (
    <MenuQuery>
      {({ data: { menu } }) =>
        <MenuNavbar items={menu} />
      }
    </MenuQuery>
  );
};
```

## Exemple of navbar with sidebar support for mobile (demo-v2)
You have full control how to deal with the navigation menu on different devices. To only show the `MenuNavbar` on larger screens dispay atributes could be used as follow.

**`client/src/components/Header/MenuNavbar.js`**
```js
import React from 'react';
import { MenuQuery } from '@deity/falcon-shop-data';
import { Button, Box, Text, Icon } from '@deity/falcon-ui';
import { MenuNavbar } from '@deity/falcon-ui-kit';
import { useSidebarContainer } from '@deity/falcon-front-kit';
import { T, useI18n } from '@deity/falcon-i18n';
import { SIDEBAR_TYPE } from 'src/components';
import { WideWrapper } from '../WideWrapper';

export const MenuNavBar = () => {
  const { t } = useI18n();
  const sidebar = useSidebarContainer();

  return (
    <WideWrapper>
      // Don't render navbar on small screen, but show toggle button that
      // triggers sidebar navigation
      <Button
        aria-label={t('navbar.openMobile')}
        aria-controls={`sidebar-${SIDEBAR_TYPE.menu}`}
        onClick={() => sidebar.open(SIDEBAR_TYPE.menu, undefined, 'left')}
      >
        <Icon src="menu"/>
        <Text><T id="navbar.openMobile" /></Text>
      </Button>
      
      // Only display MenuNavbar on medium screens
      <Box display={{ xs: 'none', md: 'block' }}>
        <MenuQuery>{({ data: { menu } }) => <MenuNavbar items={menu} />}</MenuQuery>
      </Box>
    </WideWrapper>
  );
};
```

## Customize MenuNavbar styling
Trough the theme object styling can be overridden a follow;
**`client/src/styling/theme.js`**
```js
export const falconTheme = createTheme({
  navbarItem: {
    css: {
      '> .themed-link': {
        // Add underline link in navbar
        textDecoration: 'underline',
      },
      '.themed-list-item > .themed-link': {
        // Remove underline of second child layer and change color
        textDecoration: 'none',
      }
    }
  },
  ...
})
```
