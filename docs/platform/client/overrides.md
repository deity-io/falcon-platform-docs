---
id: overrides
title: Overriding Components
sidebar_label: Overriding Components
---

:::note Only override what you need
We will occasionally be pushing changes to our components. If they have been overridden you won't automatically get these changes when you upgrade.
:::

Falcon Platform makes overidding components very simple.

Within the client directory you'll find a `moduleOverride.js` file.

You can use this to overide components pulled in from external packages.

```js
module.exports = {
  '<original_file>': '<new_file>',
};
```

So to override a UI component from `@deity/falcon-ui` it would look like this:

```js
module.exports = {
  '@deity/falcon-ui/dist/components/Input': 'src/components/Input',
};
```

### Fixing imports

It's worth noting that you may need to **change some of the imports** from relative to absolute:

From this:
```js
import { Icon } from './../Icon';
```

To this:
```js
import { Icon } from '@deity/falcon-ui';
```
