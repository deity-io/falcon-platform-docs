---
id: css-sass
title: CSS / Sass support
sidebar_label: CSS / Sass support
---

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

### Global SCSS files
Want to include global `scss` files for you variables, mixins and function? [Check out our cookbook](/docs/platform/cookbook/client/scss-global).

### POST CSS
Want to use Post CSS files for you variables, mixins and function? [Check out our cookbook](/docs/platform/cookbook/client/post-css-support).
