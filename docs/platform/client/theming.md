---
id: theming
title: Theming
sidebar_label: Theming
---



:::note Falcon Client ships with `@deity/falcon-ui`.
This contains a powerful `ThemeProvider` and a library of composable, themable, design-system-driven UI components.

It's worth looking at <a href="https://falcon-ui.docs.deity.io/" target="_blank" rel="noopener noreferrer">these docs</a> for detailed theming information.
:::

## Don't want to read the docs?
Here's a quick introduction to theming Falcon Platform.

<iframe width="560" height="315" src="https://www.youtube.com/embed/W8WoLoF54kI?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

## Overview
`@deity/falcon-ui` comes with a `ThemeProvider` out of the box. This allows us to have shared and global styles (written in js) across your application.

Out of the box Falcon Platform also supports [**css** and **scss**](#css--sass-support).

:::note Writing CSS in ReactJs
If you're new to writing CSS in ReactJs, it's worth reading <a href="https://www.w3schools.com/react/react_css.asp" target="_blank" rel="noopener noreferrer">these docs</a>.
:::

## Global Styles

Global styles can be passed to the `ThemeProvider` as a prop.

It expects an object of styles in the following format:

```js
export const globalCss = {
  body: {
    margin: 0,
    overflowX: 'hidden'
  }
}
```

By default the `ThemeProvider` component is included in `client/src/App.js`. The `globalCss` object is normal exported in your `client/src/styling/theme.js` file.

```js
<ThemeProvider theme={props.theme} globalCss={globalCss}>
...
</ThemeProvider>
```

## Creating a Theme

The `ThemeProvider` expects a `prop`, `theme`. This is where we define out global / theme variables.

To create a `theme` we use the function `createTheme`. This is normally done in `client/src/styling/theme.js`.

`createTheme` extends the **default theme**. This can be found here - `@deity/falcon-ui/src/theme/theme.ts`.

**`client/src/styling/theme.js`**
```js
import { createTheme } from '@deity/falcon-ui';

export const yourThemeName = createTheme({
  colors: {
    primaryLight: '#555855'
  }
})
```

We then pass that as a **prop** to the `ThemeProvider` from `ThemeEditorState` (usually in `client/src/App.js`).


**`client/src/App.js`**
```js
...
import { ThemeEditor, ThemeEditorState } from '@deity/falcon-theme-editor';
import { yourThemeName, globalCss } from './styling/theme';
...

<ThemeEditorState initial={yourThemeName}>
  {props => (
    <React.Fragment>
      <ThemeProvider theme={props.theme} globalCss={globalCss}>
        ...
      </ThemeProvider>
    </React.Fragment>
  )}
</ThemeEditorState>           
```

We now have access to this `theme` when writing css or creating a [`themed` component](#themed-components).


## How the theme works

### Theme fallback
Any theme created using `createTheme`, falls back to the default theme defined in `@deity/falcon-ui/src/theme/theme.ts`.  Your new theme will replace variables from this if defined.

### How object keys are mapped to CSS properties

You will notice that the theme is nested with keys such as `colors`, `spacing`, `fontSizes` etc.

These are mapped to css properties meaning that the correct value is passed.

You will also notice some props are shortcuts for the css property, e.g. `m="xxl"` is used instead of `margin="xxs"`. 

[Find out more about css mapping and shortcuts](./css-mapping)

### Responsive Styling

### Adding complex css



## Themed Components

- themed{()}

### CSS Mapping
You will notice that some of the properties in the theme don't relate exactly to CSS properties. That's because we've created shortcuts making theming even more simple.


## Creating New Components

## css & Sass support
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



## Examples

### Changing the site logo

### Updating an existing layout
