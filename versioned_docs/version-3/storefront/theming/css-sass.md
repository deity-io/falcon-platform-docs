---
id: css-sass
title: Storefront CSS & SASS support
sidebar_label: CSS & SASS support
---

# CSS & SASS support

To add your styles using a `css` or `scss` file simply import it.

**`styles.scss`**

```css
.myBlock {
  background: red;
}
```

**`your-component.js`**

```js
...
import './styles.scss';
...

<div className="myBlock">
  Block with a red background
</div>
```


