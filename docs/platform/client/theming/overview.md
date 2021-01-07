---
id: overview
title: Theming Overview
sidebar_label: Overview
---

:::note Falcon Client ships with `@deity/falcon-ui`.
This contains a powerful `ThemeProvider` and a library of composable, themeable, design-system-driven UI components.

It's worth looking at <a href="https://falcon-ui.docs.deity.io/" target="_blank" rel="noopener noreferrer">these docs</a> for detailed theming information.
:::

## Don't want to read the docs?
Here's a quick introduction to theming Falcon Platform.

<iframe width="560" height="315" src="https://www.youtube.com/embed/W8WoLoF54kI?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

## Overview
`@deity/falcon-ui` comes with a `ThemeProvider` out of the box. This allows us to have shared and global styles (written in js) across your application.

Out of the box Falcon Platform also supports [**css** and **scss**](./css-sass).

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

If desired, you can also export a function that takes the current theme as a parameter:

```js
export const globalCss = theme => ({
  body: {
    background: theme.colors.primary
  }
})
```

By default the `ThemeProvider` component is included in `client/src/App.js`. The `globalCss` object is normal exported in your `client/src/styling/theme.js` file.

**If you're not using the new theme the `theme.js` file can be found here: `client/src/theme.js`**

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

If you want a property to change based on window width based media queries you can pass it an object. Each object key refers to a breakpoint (these can be defined in your `theme.js` if you don't want to keep the core ones `@deity/falcon-ui/src/theme/theme.ts`). These breakpoints create mobile first css (`@media and (max-width: <breakpoint>`).

**`client/src/components/myComponent.js`**
```js
<Box
  py={
    xs: 'xs',
    sm: 'sm'
  }
>
...
</Box>
```

**`@deity/falcon-ui/src/theme/theme.ts`**
```js
breakpoints: {
  xs: 0,
  sm: 640,
  md: 860,
  lg: 1280,
  xl: 1920
}
```

### Adding complex css

If you want to add more complex css, for instance styling child selectors, pseudo elements or state changes you can do this in the `css` prop.

It's also possible to access the `theme` object here so you can still use global variables.

**n.b. You can't use CSS shortcuts like `mb` for `marginBottom` in the CSS prop**

**`client/src/components/myComponent.js`**
```js

<Box css={({ theme }) => {
  '&:focus': {
    outline: `1px dotted ${theme.colors.secondary}`
  },
  span: {
    color: theme.colors.primary
  }
}}>
...
</Box>
```
