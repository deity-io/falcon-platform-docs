---
id: css-mapping
title: CSS Mapping
sidebar_label: CSS Mapping
---

`@deity/falcon-ui` uses a mapping function to define 2 things:

- CSS property shortcuts, 'responsive props'
- Which key from the theme object is used for each CSS property.

## CSS Shortcuts / Responsive Props

To keep your code slim `@deity/falcon-ui` maps certain component props to css properties.

**`client/src/components/myComponent.js`**

```js
<Box m="xl">...
```

In the above example `m` relates to **margin**.

### Assigning a blank object to a CSS Shortcut / Responsive Prop

```js
display: {},
```

In the above example we have assigned `display` and empty object. This allows for the property to be recognized and used for the theming of components.

Another benefit, provided by TypeScript - the property `display` will be hinted to you via IntelliSense as a valid property.

```js
<Box display="block">
```

The property can be assigned a string as a value.

### Shortcut map

```js
 m: {
    cssProp: 'margin',
    themeProp: 'spacing'
  },
  mt: {
    cssProp: 'marginTop',
    themeProp: 'spacing'
  },
  ml: {
    cssProp: 'marginLeft',
    themeProp: 'spacing'
  },
  mr: {
    cssProp: 'marginRight',
    themeProp: 'spacing'
  },
  mb: {
    cssProp: 'marginBottom',
    themeProp: 'spacing'
  },
  mx: {
    themeProp: 'spacing',
    transformToCss: value => ({
      marginLeft: value,
      marginRight: value
    })
  },
  my: {
    themeProp: 'spacing',
    transformToCss: value => ({
      marginTop: value,
      marginBottom: value
    })
  },

  p: {
    cssProp: 'padding',
    themeProp: 'spacing'
  },
  pt: {
    cssProp: 'paddingTop',
    themeProp: 'spacing'
  },
  pl: {
    cssProp: 'paddingLeft',
    themeProp: 'spacing'
  },
  pr: {
    cssProp: 'paddingRight',
    themeProp: 'spacing'
  },
  pb: {
    cssProp: 'paddingBottom',
    themeProp: 'spacing'
  },
  px: {
    themeProp: 'spacing',
    transformToCss: value => ({
      paddingLeft: value,
      paddingRight: value
    })
  },
  py: {
    themeProp: 'spacing',
    transformToCss: value => ({
      paddingTop: value,
      paddingBottom: value
    })
  },

  height: {
    themeProp: 'sizes'
  },
  minHeight: {
    themeProp: 'sizes'
  },
  maxHeight: {
    themeProp: 'sizes'
  },

  width: {
    themeProp: 'sizes'
  },
  minWidth: {
    themeProp: 'sizes'
  },
  maxWidth: {
    themeProp: 'sizes'
  },

  size: {
    themeProp: 'sizes',
    transformToCss: value => ({
      height: value,
      width: value
    })
  },
  minSize: {
    themeProp: 'sizes',
    transformToCss: value => ({
      minHeight: value,
      minWidth: value
    })
  },
  maxSize: {
    themeProp: 'sizes',
    transformToCss: value => ({
      maxHeight: value,
      maxWidth: value
    })
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
    cssProp: 'color',
    themeProp: 'colors'
  },
  bg: {
    cssProp: 'backgroundColor',
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

  position: {},

  transitionTimingFunction: {
    themeProp: 'easingFunctions'
  },

  transitionDuration: {
    themeProp: 'transitionDurations'
  },

  opacity: {
    themeProp: 'opacities'
  },

  textDecoration: {
    themeProp: 'textDecorations'
  },

  top: {},
  right: {},
  bottom: {},
  left: {},

  display: {},

  visibility: {},

  alignItems: {},
  justifyContent: {},
  flexWrap: {},
  flexDirection: {},
  flex: {},
  alignContent: {},
  justifySelf: {},
  justifyItems: {},
  textAlign: {},
  alignSelf: {},
  order: {},
  flexBasis: {},

  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoRows: {},
  gridAutoColumns: {},
  gridTemplateRows: {},
  gridTemplateColumns: {},
  gridTemplateAreas: {},
  gridArea: {},
  gridTemplate: {},

  overflow: {},
  overflowX: {},
  overflowY: {},

  cursor: {}
```

---

## Theme object mapping

When you create a theme it has various keys; `colors`, `fontSizes`. Each of these then contains values. These are mapped to css properties meaning that the correct value is passed.

**`client/src/styling/theme.js`**

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
<Box color='primary' py='xxs'>
  ...
</Box>
```

In the above example you can see the **prop**, `py="xxs"`. In the theme object you can there is both `spacing.xxs` and `fontSizes.xxs`. This is where the mapping comes in.

If you look in `@deity/falcon-ui/src/theme/responsiveprops.ts` you will see where these properties are mapped. You will see the `themeProp` which refers to which **key** in the **theme** object, and `cssProp` which is the css property it's mapped to.

**`@deity/falcon-ui/src/theme/responsiveprops.ts`**

```js
m: {
  themeProp: 'spacing';
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
    themeProp: 'spacing',
  },
  my: {
    themeProp: 'spacing',
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
    themeProp: 'spacing',
  },
  py: {
    themeProp: 'spacing',
  },
  height: {
    themeProp: 'sizes'
  },
  minHeight: {
    themeProp: 'sizes'
  },
  maxHeight: {
    themeProp: 'sizes'
  },
  width: {
    themeProp: 'sizes'
  },
  minWidth: {
    themeProp: 'sizes'
  },
  maxWidth: {
    themeProp: 'sizes'
  },
  size: {
    themeProp: 'sizes',
  },
  minSize: {
    themeProp: 'sizes',
  },
  maxSize: {
    themeProp: 'sizes',
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
  },
  opacity: {
    themeProp: 'opacities'
  },
  textDecoration: {
    themeProp: 'textDecorations'
  },
```

:::note Unmapped properties
If you want to add CSS that isn't mapped you can pass a <a href="https://www.w3schools.com/react/react_css.asp" target="_blank" rel="noopener noreferrer">normal css object</a> to the css prop e.g. `css={{ top: 0 }}`
:::

---

## Utility Functions

### Negative Spacings

This function aims to provide you with additional `spacing` properties by adding a negative version of the positive number properties which are defined in the theme's `spacing` object.

```js
// mapNegativeSpacings(theme: Theme): Theme
const themeWithNegativeSpacings = mapNegativeSpacings(theme);
```

It accomplishes the goal by taking the positive number's key and and prefixing it with a `-` and multiplying the number value by `-1`.

```js
export const defaultBaseTheme = {
  spacing: {
    auto: 'auto',
    none: 0,
    xs: 8,
    sm: 16,
    md: 24,
    lg: 32,
    xl: 40,
    xxl: 48,
    xxxl: 64,
    full: '100%',
  },
};
```

The above theme will be replaced by the one below via the use of the utility function.

```js
export const defaultBaseTheme = {
  spacing: {
    auto: 'auto',
    none: 0,
    xs: 8,
    sm: 16,
    md: 24,
    lg: 32,
    xl: 40,
    xxl: 48,
    xxxl: 64,
    full: '100%',

    -xs: -8,
    -sm: -16,
    -md: -24,
    -lg: -32,
    -xl: -40,
    -xxl: -48,
    -xxxl: -64
  }
}

```

### Grid Sizes

This function allows you to generate custom properties for the `sizes` object.

```js
// gridSizes(columnAmount: number, theme: Theme)
const themeWithGridSizes = gridSizes(8, theme);
```

By providing a `columnAmount`, the function will divide 100% by the `columnAmount`, that will be the increment amount. Each property will be calculated by performing a sum of the previous value and of the increment amount and mapped to a key representing the fraction.

The above-defined code will result in the following `sizes` properties:

```js
export const defaultBaseTheme = {
  sizes: {
    '1/8': '12.5%',
    '2/8': '25%',
    '3/8': '37.5%',
    '4/8': '50%',
    '5/8': '62.5%',
    '6/8': '75%',
    '7/8': '87.5%',
  },
};
```
