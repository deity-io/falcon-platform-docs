---
id: css-sass
title: CSS / Sass support
sidebar_label: CSS / Sass support
---

To add your styles using a `css` or `scss` file simply import it.

**`styles.scss`**
```css
.myBlock {
  backgrouund: red;
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
