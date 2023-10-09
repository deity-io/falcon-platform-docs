---
id: components
title: Storefront themed components
description: UI components such as 'Box', 'Text' etc are all built as themeable components.
sidebar_label: Themed components
---

# Themed components

`@deity/falcon-ui` UI components such as `Box`, `Text` etc are all built as themeable components.

This means they will accept props such as `m` for margin, and values from the `theme` such as `xxs` for spacing.

**`client/src/components/myComponent.js`**
```js
<Box py="xs">
  Content here
</Box>
```

To make your custom component 'themeable' you will need to use the `themed` function.

**`client/src/components/myComponent.js`**
```js
import { Box, themed } from '@deity/falcon-ui';

const MyComponentLayout = themed({
  tag: Box,
  defaultTheme: {
    myComponentLayout: {
      py: 'xs'
    }
  }
});

<MyComponentLayout>
  Content here
</MyComponentLayout>
```

You will notice that we have suffixed the names with **layout**. This is a helpful convention to easily recognize when a component is a `themed` layout.

## Changing the html element of a component

If you want to change the html element of a themed component it's as simple as passing a prop (`as`).

**`client/src/components/myComponent.js`**
```js
<Box as="section">
  Content here
</Box>
```

This will render a `<section>` tag rather than a `<div>`.
