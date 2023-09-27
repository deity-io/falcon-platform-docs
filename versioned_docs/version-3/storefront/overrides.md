---
id: overrides
title: Overriding components
sidebar_label: Overriding components
---

:::note Only override what you need
We will occasionally be pushing changes to our components. If they have been overridden you won't automatically get these changes when you upgrade.
:::

Falcon Platform makes overriding components very simple.

Within the client directory you'll find a `moduleOverride.js` file.

You can use this to override components pulled in from external packages.

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

## Watch our 'how to' guide
<iframe width="560" height="315" src="https://www.youtube.com/embed/caaWQ1S-lOQ?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
