---
id: translations
title: Internationalization in Storefront
description: Internationalization is based on i18next.
sidebar_label: Internationalization
---

# Internationalization

Internationalization is based on [i18next](https://www.i18next.com/).

## Basics

All i18n resources should be placed in `./i18n` directory, and folder structure should follow pattern `{{lng}}/{{ns}}.json`. Which means each language needs to have own directory with `json` file per namespace:

```text
i18n
  |-en
    |-translations.json
    |-shop.json
    |-blog.json
    |-...
  |-...
```

Default namespace is `translations` and there is also fallback configured to it, in case if translation key can not be found in other namespaces.

HMR for translation files is supported.

## Configuration

Configuration options base on [i18next](https://www.i18next.com/overview/configuration-options) and you can change them via configuration `config.i18n` exported from `bootstrap.js` file:

- `lng: string` - (default: `en`) default application language
- `fallbackLng: string` - (default: `en`) language to use if translations in selected language are not available
- `whitelist: string[]` - (default: `['en']`) available languages, it may be be narrowed, if installed extensions does not support all of specified
- `ns: string[]` - (default: `['translations']`) namespaces used by application
- `debug: boolean` - (default: `false`) i18next debug mode switch
- `resources: object` - (default: `undefined`) allows to inject translations inline, useful during testing

### node.js
Node.js has rich [internationalization support](https://nodejs.org/api/intl.html#intl_internationalization_support), however, more of them are disabled because it requires very large ICU data file which is not provided by Node.js by default. In order to enable it, you need to provide a path to ICU data file at runtime. `falcon-client` will try to resolve that path to ICU data file automatically, but only in development (`falcon-client start`). In production, you need to configure it according to your needs, [here](https://nodejs.org/api/intl.html#intl_providing_icu_data_at_runtime) you can find available techniques.

By default node.js does not 
## React components

Using i18next directly in react is clumsy, so we provide Components to make it very easy

### I18n Component

`<I18n>` is a component rendering render props:

- `t: i18next.TranslationFunction` - i18next translation function [see the details](https://www.i18next.com/overview/api#t)
- `i18n: i18next.i18n` - fully initialized i18next instance [see the details](https://www.i18next.com/overview/api#api)

It is useful in cases when you would like to have an access to `t` function to get a translated text inline:

```jsx
<I18n>
  {t => <Image src={items[0].full} alt={t("productGallery.imageAlt")} />}
</I18n>
```

or you need to have an access to `i18next` instance to change the language:

```jsx
<I18n>
  {(_t, i18n) => (
    <LanguageSwitcher
      languages={languages}
      onChange={x => i18n.changeLanguage(x.code)}
    />
  )}
</I18n>
```

### T Component

As in many places you will need to render a translated text as children of other Component, we introduce `<T />` Component which behaves exactly like `i18next.TranslationFunction`. To get translated string for the given key you need to use `id` prop instead of `key` as it is reserved keyword in `jsx`

```jsx
<h1>
  <T id="home.title" />
</h1>

// <h1>Home Page<h1>
```

Other [translationFunction options](https://www.i18next.com/translation-function/essentials#overview-options) are accepted in an unchanged form, for example, to pass

```jsx
// product.productsLeftInStock_plural = "{{product}} has {{count}} products left in stock" */

<span>
  <T id="product.productsLeftInStock" product="Zoe Tank" count={3} />
</span>

// -> <span>Zoe Tank has 3 products left in stock<span>
```

### Conventions

Some React Components implement handy conventions to makes translations easier. They also improve the shape of translation resource files as it imposes a certain way of organization. But please bear in mind that none of them are required and there is no need to follow them.

#### Forms

`FormFields` can use its `name` attribute to build translation key for its label or placeholder based on translation context set via `i18nId` property on `Form` component. The rules are:

- `FormField` label - `[Form.i18nId].[FormField.name]FieldLabel`
- `FormField` placeholder - `[Form.i18nId].[FormField.name]FieldPlaceholder`

In the following example, email `FormField` will have an automatically translated label if a translation for the `signIn.emailFieldLabel` key (and placeholder, when `signIn.emailFieldPlaceholder`) will be found.

```jsx
import { FormField, Form } from "@deity/falcon-ecommerce-uikit";

() => (
  <Form i18nId="signIn">
    <FormField name="email" type="email" required autoComplete="email" />
    // ...
  </Form>
);
```

Above rules would be overwritten by usage of regular `label` or `placeholder` attributes of `FormField` component.

## Using default resources

Default resources (if configured) will be merged with your custom translations from `./i18n` directory.

To use default resources you need to install `@deity/falcon-i18n` npm module (or any other compatible) which contains default translations

```bash
npm install --save @deity/falcon-i18n
```

Then in `falcon-client.build.config.js` file you need to update `i18n` configuration. Add `@deity/falcon-i18n` package name into `resourcePackages` array.

Imported package (like `@deity/falcon-i18n`) can contain more languages and/or namespaces than you are interested in. So if you don't want to use all of them (to save bundle size, or just not to use some namespace as it's not relevant to your project) you can filter them out by using `filter` option - that will instruct webpack to skip items not listed in the `filter` property.

```javascript
module.exports = {
  i18n: {
    resourcePackages: ["@deity/falcon-i18n"],
    filter: {
      lng: ["en"],
      ns: ["translations"]
    }
  }
};
```

Above example configuration will deliver to your project default `translations` namespace from English language.

### Options

- `mainSource: string` - relative path to your custom i18n resources which should extend defaults
- `defaultSources: string[]` - array of absolute paths to resources which should be merged to your custom i18n resources
- `output: string` - relative path to output directory
- `filter.lng: string[]` - array of language codes to filter `defaultSources` directories, if any, then only matching will be returned, otherwise all of them
- `filter.ns: string[]` - array of namespace codes to filter `defaultSources` directories, if any, then only matching will be returned, otherwise all of them

All paths should point to directories with file structure compatible with `{{lng}}/{{ns}}.json` pattern, e.g:

```text
-en
  |-translations.json
  |-common.json
  |-blog.json
  |-...
-...
```
