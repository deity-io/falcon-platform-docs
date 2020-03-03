---
id: css-mapping
title: CSS Mapping
sidebar_label: CSS Mapping
---

`@deity/falcon-ui` uses a mapping function to define 2 things:

- CSS property shortcuts
- Which key from the theme object is used for each CSS property.

## CSS Shortcuts

To keep your code slim `@deity/falcon-ui` maps certain component props to css properties. 

**`client/src/components/myComponent.js**
```js
<Box m="xl">...
```
In the above example `m` relates to **margin**.

### Shortcut map

```js
m: {
    cssProp: 'margin'
  },
  mt: {
    cssProp: 'marginTop'
  },
  ml: {
    cssProp: 'marginLeft'
  },
  mr: {
    cssProp: 'marginRight'
  },
  mb: {
    cssProp: 'marginBottom'
  },
  mx: {
    transformToCss: value => ({
      marginLeft: value,
      marginRight: value
    })
  },
  my: {
    transformToCss: value => ({
      marginTop: value,
      marginBottom: value
    })
  },
  p: {
    cssProp: 'padding'
  },
  pt: {
    cssProp: 'paddingTop'
  },
  pl: {
    cssProp: 'paddingLeft'
  },
  pr: {
    cssProp: 'paddingRight'
  },
  pb: {
    cssProp: 'paddingBottom'
  },
  px: {
    transformToCss: value => ({
      paddingLeft: value,
      paddingRight: value
    })
  },
  py: {
    transformToCss: value => ({
      paddingTop: value,
      paddingBottom: value
    })
  },
  size: {
    transformToCss: value => ({
      height: value,
      width: value
    })
  },
  bg: {
    cssProp: 'backgroundColor'
  },
  bgFullWidth: {
    transformToCss: value => ({
      position: 'relative',
      zIndex: 1,
      ':before': {
        content: '""',
        width: '200vw',
        height: '100%',
        background: value,
        position: 'absolute',
        left: '-50vw',
        right: '50vw',
        top: 0,
        zIndex: -1
      }
    })
  }
```

---

## Theme object mapping

When you create a theme it has various keys; `colors`, `fontSizes`. Each of these then contains values. These are mapped to css properties meaning that the correct value is passed.

**`client/src/styling/theme.js**
```js
export const falconThemeV2 = createTheme({
  colors: {
    primary: '#262828',
    secondary: '#EEEDEB'
  },
  spacing: {
    xxs: 4,
    xs: 8
  },
  fontSizes: {
    xxs: 11,
    xs: 12
  },
  ...
})
```

**`client/src/components/myComponent.js`**
```js
<Box color="primary" py="xxs">
...
</Box>
```

In the above example you can see the **prop**, `py="xxs"`. In the theme object you can there is both `spacing.xxs` and `fontSizes.xxs`. This is where the mapping comes in.

If you look in `@deity/falcon-ui/src/theme/responsiveprops.ts` you will see where these properties are mapped. You will see the `themeProp` which referes to which **key** in the **theme** object, and `cssProp` which is the css property it's mapped to.

**`@deity/falcon-ui/src/theme/responsiveprops.ts`**
```js
m: {
  themeProp: 'spacing'
}
```

### Property map

```js
m: {
    themeProp: 'spacing'
  },
  mt: {
    themeProp: 'spacing'
  },
  ml: {
    themeProp: 'spacing'
  },
  mr: {
    themeProp: 'spacing'
  },
  mb: {
    themeProp: 'spacing'
  },
  mx: {
    themeProp: 'spacing'
  },
  my: {
    themeProp: 'spacing'
  },
  p: {
    themeProp: 'spacing'
  },
  pt: {
    themeProp: 'spacing'
  },
  pl: {
    themeProp: 'spacing'
  },
  pr: {
    themeProp: 'spacing'
  },
  pb: {
    themeProp: 'spacing'
  },
  px: {
    themeProp: 'spacing'
  },
  py: {
    themeProp: 'spacing'
  },
  height: {
    themeProp: 'spacing'
  },
  width: {
    themeProp: 'spacing'
  },
  size: {
    themeProp: 'spacing'
  },
  gridGap: {
    themeProp: 'spacing'
  },
  gridRowGap: {
    themeProp: 'spacing'
  },
  gridColumnGap: {
    themeProp: 'spacing'
  },
  color: {
    themeProp: 'colors'
  },
  bg: {
    themeProp: 'colors'
  },
  fill: {
    themeProp: 'colors'
  },
  stroke: {
    themeProp: 'colors'
  },
  borderColor: {
    themeProp: 'colors'
  },
  bgFullWidth: {
    themeProp: 'colors',
  },
  fontSize: {
    themeProp: 'fontSizes'
  },
  fontFamily: {
    themeProp: 'fonts'
  },
  lineHeight: {
    themeProp: 'lineHeights'
  },
  fontWeight: {
    themeProp: 'fontWeights'
  },
  letterSpacing: {
    themeProp: 'letterSpacings'
  },
  border: {
    themeProp: 'borders'
  },
  borderTop: {
    themeProp: 'borders'
  },
  borderRight: {
    themeProp: 'borders'
  },
  borderBottom: {
    themeProp: 'borders'
  },
  borderLeft: {
    themeProp: 'borders'
  },
  borderRadius: {
    themeProp: 'borderRadius'
  },
  boxShadow: {
    themeProp: 'boxShadows'
  },
  transitionTimingFunction: {
    themeProp: 'easingFunctions'
  },
  transitionDuration: {
    themeProp: 'transitionDurations'
  }
```

:::note Unmapped properties
If you want to add CSS that isn't mapped you can pass a <a href="https://www.w3schools.com/react/react_css.asp" target="_blank" rel="noopener noreferrer">normal css object</a> to the css prop e.g. `css={{ top: 0 }}`
:::
