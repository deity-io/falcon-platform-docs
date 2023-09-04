---
id: fonts
title: Custom Fonts
sidebar_label: Custom Fonts
---

## Loading Fonts

### Local fonts

If you are hosting a font yourself you'll need to add the font files to your `client/src/assets` directory.

You'll also need a css file in the same directory that loads the fonts using `@font-face`.

**File Structure**
```
|- client
  |- src
    |- assets
      |- fontName
        fontFile.woff2
        fontFile.woff
        fontName.css
```

**client/src/assets/fontName/fontName.css**
```css
@font-face {
  font-family: 'fontName';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('fontName'), url('fontFile.woff2') format('woff2'),
    url('fontFile.woff') format('woff');
}
```

After that you'll need to load this css file globally in your `client/src/App.js` file.

```js
import './assets/fontName/fontName.css';
```

### Google Fonts

If you're using a hosted font, such as a Google font we recommend importing it in a css file.

Within the `client/src/assets/` directory add a css file `fontName.css`.

In this file add the Google import code:

```css
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap');
```

As with local fonts, you'll now need to import the css file in `client/src/App.js`

```js
import './assets/fontName/fontName.css';
```


## Using Fonts

You may want your font to be used globally or as a theme variable to be used on a component specific basis.

### Global

Adding your font globally is simple. All you need to do is edit your `client/src/styling/theme.js` file.

This should have a `globalCss` object that is later used when building your app.

```js
export const globalCss = {
  html: {
    fontFamily:
      'fontName, sans-serif',
  }
};
```

### Theme Variables

If you want to use the font as a variable you can simply add it to `client/src/styling/theme.js`.

You'll notice a `font` key in `falconThemeV2`. You can simply replace the font there.

```js
fonts: {
  sans:
    'fontName, sans-serif',
  mono: 'Courier New, monospace'
},
```

:::note Performance Boost
We really recommend using `font-display: swap` or `&display=swap` to help with render blocking and performance. <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display" target="_blank" rel="noopener noreferrer">Learn about font display here</a>.
:::
