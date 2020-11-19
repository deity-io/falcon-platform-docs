---
id: full-changelog
title: Falcon Changelog
sidebar_label: 'Falcon Changelog'
description: Falcon platform all versions and their release notes
---

Versions marked with a number and date (e.g. Falcon Platform v2.1.1 (2020-05-08)) are already released and available via npm.

## Falcon Platform v2.5.0 (2020-10-28)

### Falcon Demo

- added registered guest email validation to the guest checkout form ([#187](https://github.com/deity-io/falcon-platform/pull/187))
- fixed sidebar horizontal scrolling bug ([#191](https://github.com/deity-io/falcon-platform/pull/191))
- Added a fixed add to cart bottom bar in the product overview page ([#189](https://github.com/deity-io/falcon-platform/pull/189))
- Changed on mobile the header to a fixed bottom navigation menu ([193](https://github.com/deity-io/falcon-platform/pull/193))

### Falcon BigCommerce API

- added ability to check whether an email is registered ([#187](https://github.com/deity-io/falcon-platform/pull/187))

### Falcon Shop Data

- added a query for checking whether an email is registered to a customer ([187](https://github.com/deity-io/falcon-platform/pull/187))

### Falcon Client

- fixed coping empty `views` directory ([194](https://github.com/deity-io/falcon-platform/pull/194))
- fixed initial language configuration ([198](https://github.com/deity-io/falcon-platform/pull/198))
- add checking of Types (yarn check-types)([#154](https://github.com/deity-io/falcon-platform/pull/154))
- update version of `@types/react` and `react-router-dom`([#154](https://github.com/deity-io/falcon-platform/pull/154))
- fixed part of minor types issues([#154](https://github.com/deity-io/falcon-platform/pull/154))
- added HTTPS option (localhost) ([#176](https://github.com/deity-io/falcon-platform/pull/176))

### Falcon Server

- introduced IOC container ([#94](https://github.com/deity-io/falcon-platform/pull/94))

### Falcon Dev Tools

- changed config of TypeScript from js to `tsconfig.json`([#154](https://github.com/deity-io/falcon-platform/pull/154))

### Falcon UI

- added dynamically generated negative spacings for all positive spacings ([#197](https://github.com/deity-io/falcon-platform/pull/197))

## Falcon Platform v2.4.8 (2020-09-14)

### Falcon Example V2

- Update theme Presets ([#159](https://github.com/deity-io/falcon-platform/pull/159))

## Falcon Platform v2.4.6 (2020-09-11)

### Falcon Demo

- improved handling of many items by `ProductGallery` ([#136](https://github.com/deity-io/falcon-platform/pull/136))
- fixed form submission by dropdown ([#143](https://github.com/deity-io/falcon-platform/pull/143))
- fixed recently viewed items not showing up ([#160](https://github.com/deity-io/falcon-platform/pull/160))
- fixed issue with `PageLayout` styling (lack of full height) ([#156](https://github.com/deity-io/falcon-platform/pull/156))
- refactored the styling of CMSContent for the sake of uniformity ([#165](https://github.com/deity-io/falcon-platform/pull/165))
- added urlKey to mini cart gql query ([#168](https://github.com/deity-io/falcon-platform/pull/168))
- fixed Firefox header bug upon page resize ([#170](https://github.com/deity-io/falcon-platform/pull/170))
- added `aria-controls` attributes to sidebar controlling buttons ([#184](https://github.com/deity-io/falcon-platform/pull/184))

### Falcon Logger

- added `severity` log field mapped from log level ([#152](https://github.com/deity-io/falcon-platform/pull/152))

### Falcon BigCommerce API

- fixed fetching addresses on the `Order` type ([#153](https://github.com/deity-io/falcon-platform/pull/153))

### Falcon Magento Api

- fixed the Magento API package to work with the latest product options GraphQL schema

### Falcon UI

- fixed `NumberInput` buttons not disabling ([#122](https://github.com/deity-io/falcon-platform/pull/122))
- fixed `Sidebar` animation when changing sides ([#163](https://github.com/deity-io/falcon-platform/pull/163))

### Falcon wordpress api

- Added wordpress host configuration ([#155](https://github.com/deity-io/falcon-platform/pull/155))

### Falcon Stripe Plugin

- fixed an error when checking out with a credit card ([#171](https://github.com/deity-io/falcon-platform/pull/171))

### Falcon Server

- refactored containers for uniformity, added checks preventing error message spam ([#172](https://github.com/deity-io/falcon-platform/pull/172))

## Falcon Platform v2.4.2 (2020-07-15)

### Falcon Client

- removed sourcemaps from production builds ([#149](https://github.com/deity-io/falcon-platform/pull/149))
- added `HelmetProvider` to `FalconClientMock` ([#117](https://github.com/deity-io/falcon-platform/pull/117))
- fixed Jest configuration for custom app-level configurations ([#119](https://github.com/deity-io/falcon-platform/pull/119))

### Falcon UI

- added support for passing a function to the `globalCss` prop ([#113](https://github.com/deity-io/falcon-platform/pull/113))
- removed `react-powerplug` dependency ([#130](https://github.com/deity-io/falcon-platform/pull/130))
- added basic keyboard support to `Dropdown` ([#116](https://github.com/deity-io/falcon-platform/pull/116))

### Falcon UI Kit

- removed `react-powerplug` dependency ([#130](https://github.com/deity-io/falcon-platform/pull/130))
- added support for `placeholder` in `Select` component ([#180](https://github.com/deity-io/falcon-platform/pull/180))
- added a confirm password field to the signup form ([#186])(https://github.com/deity-io/falcon-platform/pull/186))

### Falcon Front Kit

- ignore newlines when validating character limits ([#123](https://github.com/deity-io/falcon-platform/pull/123))
- Add check for Intersection Observer support ([#129](https://github.com/deity-io/falcon-platform/pull/129))
- added a confirm password field validator ([#186](https://github.com/deity-io/falcon-platform/pull/186))

### Falcon Demo

- fixed stale content on orders page ([#81](https://github.com/deity-io/falcon-platform/pull/81))
- removed `react-adopt` dependency ([#127](https://github.com/deity-io/falcon-platform/pull/127))
- removed `react-lazyload` dependency ([#129](https://github.com/deity-io/falcon-platform/pull/129))
- removed `react-powerplug` dependency ([#130](https://github.com/deity-io/falcon-platform/pull/130))
- added integration test for checkout flow ([#96](https://github.com/deity-io/falcon-platform/pull/96))

### Falcon BigCommerce API

- fixed product loading ([#133](https://github.com/deity-io/falcon-platform/pull/133))

## Falcon Platform v2.4.0

### Falcon UI Kit

- changed HTML tag of `AddressDetailsLayout` to `address` ([#73](https://github.com/deity-io/falcon-platform/pull/73))

### Falcon Demo

- added support for product options ([#97](https://github.com/deity-io/falcon-platform/pull/97))

## Falcon Platform v2.3.1

### Falcon Demo

- added indication of total number of order items on orders page ([#80](https://github.com/deity-io/falcon-platform/pull/80))
- fixed order page overflow when product has many options ([#100](https://github.com/deity-io/falcon-platform/pull/100))

## Falcon Platform v2.3.0

### Falcon Shop Data

- refetch `MiniCart` after removing a cart item ([#85](https://github.com/deity-io/falcon-platform/pull/85))

### Falcon UI

- fixed `NumberInput` decrease button being disabled when `min` prop was not defined
- fixed `NumberInput` buttons not being disabled when `min` or `max` props were `0`

### Falcon UI Kit

- fixed `FormFieldLabel` to be themable ([#69](https://github.com/deity-io/falcon-platform/pull/69))
- added `lineClamp` CSS helper function ([#80](https://github.com/deity-io/falcon-platform/pull/80))

### Falcon Front Kit

- reset pagination to page 1 after applying filters ([#83](https://github.com/deity-io/falcon-platform/pull/83))

## Falcon Platform v2.2.0

### Falcon Client

- added GraphQL Upload support ([#58](https://github.com/deity-io/falcon-platform/pull/58))
- upgraded `typescript` to version 3.9.2 ([#55](https://github.com/deity-io/falcon-platform/pull/55))
- upgraded `babel` to version 7.9.6 ([#55](https://github.com/deity-io/falcon-platform/pull/55))

### Falcon Server

- upgraded ApolloServer-related packages to the latest version ([#78](https://github.com/deity-io/falcon-platform/pull/78))
  - `apollo-server-cache-memcached` to `^0.6.5`
  - `apollo-server-cache-redis` to `^1.2.1`
  - `apollo-server-caching` to `^0.5.1`
  - `apollo-server-env` to `^2.4.4`
  - `apollo-server-errors` to `^2.4.1`
  - `apollo-server-koa` to `^2.14.2`
  - `apollo-datasource` to `^0.7.1`
  - `apollo-datasource-rest` to `^0.9.2`

### Falcon Theme Editor

- fixed updating theme with HMR ([#60](https://github.com/deity-io/falcon-platform/pull/60))

### Falcon Front Kit

- added props to allow overriding `LocaleProvider` values ([#33](https://github.com/deity-io/falcon-platform/pull/33))
- BREAKING: removed export for `addCimodeLocale` ([#33](https://github.com/deity-io/falcon-platform/pull/33))

### Falcon Shop Extension

- added `itemOptions` field on `OrderItem` ([#72](https://github.com/deity-io/falcon-platform/pull/72))

### Falcon Scripts

- upgraded `jest` to version 26.0.1 ([#66](https://github.com/deity-io/falcon-platform/pull/66))

### Falcon Shop Extension

- BREAKING: removed type `CartItemOptionValue` ([#74](https://github.com/deity-io/falcon-platform/pull/74))
- BREAKING: removed field `data` from type `CartItemOption` ([#74](https://github.com/deity-io/falcon-platform/pull/74))

## Falcon Platform v2.1.1 (2020-05-08)

### Falcon Server

- fixed initializing `Api`, `Extension`, `Component` and `Endpoints` containers when a module is disabled ([#51](https://github.com/deity-io/falcon-platform/pull/51))

## Falcon Platform v2.1.0 (2020-05-07)

### Falcon Server

- added `enabled` (default: `true`) definition flag for all "Container" entries ([#48](https://github.com/deity-io/falcon-platform/pull/48))

### Falcon Client

- fixed overriding of babel configuration ([#22](https://github.com/deity-io/falcon-platform/pull/22))
- improved HMR by reloading the page less often and better error handling ([#23](https://github.com/deity-io/falcon-platform/pull/23))
- fixed passing headers during GraphQL requests error handling ([#24](https://github.com/deity-io/falcon-platform/pull/24))

### Falcon UI

- fixed accesibility issues of `NumberInput` ([#5](https://github.com/deity-io/falcon-platform/pull/5))
- improved performance of themed components ([#11](https://github.com/deity-io/falcon-platform/pull/11))
- fixed disabled state of buttons on `NumberInput` ([#23](https://github.com/deity-io/falcon-platform/pull/23))

### Falcon Theme Editor

- fixed white view when content overflowed ([#42](https://github.com/deity-io/falcon-platform/pull/42))

### Falcon Front Kit

- improved performance of `Field` and `FormField` components ([#11](https://github.com/deity-io/falcon-platform/pull/11))
- added `forceReady` prop to `<EnsureTTI />` to allow setting ready state declaratively ([#27](https://github.com/deity-io/falcon-platform/pull/27))

### ESLint Config Falcon

- added `react-hooks` ESLint rules and fixed errors and warnings ([#19](https://github.com/deity-io/falcon-platform/pull/19))

### Create Falcon App

- intoduced unified example names (demo-v1, demo-v2) ([#21](https://github.com/deity-io/falcon-platform/pull/21))
- added `-f` (`--full`) flag which is necessary to generate example app with `client` and `server`, otherwise only `client` will be generated ([#26](https://github.com/deity-io/falcon-platform/pull/26))
- improved search performance of the demo-v2 template ([#38](https://github.com/deity-io/falcon-platform/pull/38))
- added possibility to run search and display search results without aggregations ([#45](https://github.com/deity-io/falcon-platform/pull/45))

### Falcon Data

- fixed `useThrowError` hook so it works correctly with test utils ([#35](https://github.com/deity-io/falcon-platform/pull/35))

### Falcon Logger

- added 2nd parameter to `Logger.getFor()` so it's possible to pass data that will be added to each log message ([#49](https://github.com/deity-io/falcon-platform/pull/49))

## Falcon Platform v2.0.0 (2020-02-17)

### Falcon Client

- changed the way of defining "proxyEndpoints" ([#571](https://github.com/deity-io/falcon/pull/571))
- fixed typos in build log messages ([#602](https://github.com/deity-io/falcon/pull/602))
- added Apollo hooks support (upgrade `apollo-client` to version `2.6.x`) ([#596](https://github.com/deity-io/falcon/pull/596))
- improved code redistribution across chunks ([#619](https://github.com/deity-io/falcon/pull/619))
- fixed self cached service worker (`/sw.js`) ([#626](https://github.com/deity-io/falcon/pull/626))
- upgraded `react` to version `16.10.2` ([#640](https://github.com/deity-io/falcon/pull/640))
- improved eslint configuration ([#642](https://github.com/deity-io/falcon/pull/642)), ([#639](https://github.com/deity-io/falcon/pull/639)), ([#633](https://github.com/deity-io/falcon/pull/633))
- upgraded `css-loader` to version `3.2.0` ([#620](https://github.com/deity-io/falcon/pull/620))
- fixed `/graphQL` proxy error handling ([#632](https://github.com/deity-io/falcon/pull/632))
- fixed custom error `500.html` view resolution ([#662](https://github.com/deity-io/falcon/pull/662))
- fixed handling of redirects by serviceworker ([#594](https://github.com/deity-io/falcon/pull/594))
- fixed the `next` value for sign-in redirects ([#689](https://github.com/deity-io/falcon/pull/689))
- improved a way of processing the `svg` files ([#726](https://github.com/deity-io/falcon/pull/726))

### Falcon I18n

- added `useI18n` hook ([#717](https://github.com/deity-io/falcon/pull/717))

### Falcon UI

- fixed theme merging ([#551](https://github.com/deity-io/falcon/pull/551))
- fixed duplicated conditions when extracting themed css ([#611](https://github.com/deity-io/falcon/pull/611))
- fixed incompatible `css` prop typings ([#645](https://github.com/deity-io/falcon/pull/645))
- added `console.error` when an icon is not defined in the theme during development ([#682](https://github.com/deity-io/falcon/pull/682))
- improved typings ([#669](https://github.com/deity-io/falcon/pull/669))
  - renamed `ThemedComponentPropsWithVariants` to `ComponentTheme`
  - renamed `ThemedComponentProps` to `ThemingProps`
  - renamed `BaseThemedComponentProps` to `BaseThemingProps`
- added `noScrollbars` css generation function ([#742](https://github.com/deity-io/falcon/pull/742))

### Falcon E-commerce UI Kit discontinued

- Breaking change: Falcon E-commerce UI Kit has been discontinued, instead we introduce [Falcon Front Kit](#falcon-front-kit-v1.0.0), [Falcon UI Kit](#falcon-ui-kit-v1.0.0), [Falcon Data](#falcon-data-v1.0.0), [Falcon Shop Data](#falcon-shop-data-v1.0.0) and [Falcon Blog Data](#falcon-blog-data-v1.0.0), (see rework [log](https://github.com/deity-io/falcon/blob/a5274623c148b9b0c8cc1d17254d7c89395955da/packages/falcon-ecommerce-uikit/uikit.md)) ([#487](https://github.com/deity-io/falcon/pull/487))

### Falcon Front Kit

- initial release
- added convention for validation error messages translation ([#585](https://github.com/deity-io/falcon/pull/585))
- fixed synchronization of account and sign in icon with customer logging in and out state ([#521](https://github.com/deity-io/falcon/pull/521))
- added Apollo hooks support (upgrade `apollo-client` to version `2.6.x`) ([#596](https://github.com/deity-io/falcon/pull/596))
- improved dynamic url resolution ([#618](https://github.com/deity-io/falcon/pull/618))
- added `Add`/`EditAddressFormProvider` components to handle relevant form data ([#624](https://github.com/deity-io/falcon/pull/624))
- added `Submit` component which provides context to form submit components ([#548](https://github.com/deity-io/falcon/pull/548))
- fixed `LocaleSwitcher` which did not take into account `whitelist`ed languages, and `LocaleContext` which hardcoded language fallback instead of taking it from `clientConfig` ([#698](https://github.com/deity-io/falcon/pull/698))
- extracted `CurrencyProvider` and `Currency` components from `LocaleProvider` and `Locale`, also introduced `useLocale` and `useCurrency` hooks ([#698](https://github.com/deity-io/falcon/pull/698))
- updated Formik to version 2.0 ([#705](https://github.com/deity-io/falcon/pull/705))
- added `InBrowserOnly` component ([#728](https://github.com/deity-io/falcon/pull/728))
- added `SwitchDynamicURL` component in order to define dynamic URL routes in `react`/`react-router` `v4` way ([#738](https://github.com/deity-io/falcon/pull/738))
- added `SEO` component to render `title`, `description` and `keywords` as proper meta-tags ([#743](https://github.com/deity-io/falcon/pull/743))
- added support for url with query string provided to `<ProtectedRoute />` component via `redirectTo` prop ([#765](https://github.com/deity-io/falcon/pull/765))

### Falcon UI Kit

- initial release
- added Apollo hooks support (upgrade `apollo-client` to version `2.6.x`) ([#596](https://github.com/deity-io/falcon/pull/596))
- fixed warning when `AddressDetails` receives non-unique values ([#614](https://github.com/deity-io/falcon/pull/614))
- changed `Grid` component default `gridGap` to `md` ([#636](https://github.com/deity-io/falcon/pull/636))
- added `AddressFormFields` and `Add`/`EditAddressForm` components to make address forms more reusable ([#624](https://github.com/deity-io/falcon/pull/624))
- fixed `ProductCard` component which should not require `thumbnail` ([#685](https://github.com/deity-io/falcon/pull/685))
- integrated `FormSubmit` with Formik, which allows it to hook into form state ([#548](https://github.com/deity-io/falcon/pull/548))
- updated Formik to version 2.0 ([#705](https://github.com/deity-io/falcon/pull/705))
- moved sidebar close icon from `Sidebar` to `SidebarLayout` ([#753](https://github.com/deity-io/falcon/pull/753))
- improved scroll handling of `ProductGallery` ([#36](https://github.com/deity-io/falcon-platform/pull/36))

### Falcon Data

- initial release
- improved Falcon `Query` component to not hide Apollo `Query` component render props ([#580](https://github.com/deity-io/falcon/pull/580)), ([#613](https://github.com/deity-io/falcon/pull/613))
- added Apollo hooks support (upgrade `apollo-client` to version `2.6.x`) ([#596](https://github.com/deity-io/falcon/pull/596))
- improved way of handling errors ([#627](https://github.com/deity-io/falcon/pull/627)), ([#632](https://github.com/deity-io/falcon/pull/632))

### Falcon Shop Data

- initial release
- added Apollo hooks support (upgrade `apollo-client` to version `2.6.x`) ([#596](https://github.com/deity-io/falcon/pull/596))
- fixed response types of `AddressQuery` and `CountryListQuery` ([#624](https://github.com/deity-io/falcon/pull/624))
- set `ssr: false` for `CartQuery` by default ([#754](https://github.com/deity-io/falcon/pull/754))

### Falcon Blog Data

- initial release
- added Apollo hooks support (upgrade `apollo-client` to version `2.6.x`) ([#596](https://github.com/deity-io/falcon/pull/596))

### Falcon Shop Extension

- introduced Country and Region types to allow fetching more details with address queries ([#609](https://github.com/deity-io/falcon/pull/609))
- added `@cache` for `Query.productList` query ([#743](https://github.com/deity-io/falcon/pull/743))
- added `Product.categories` and `Category.{urlPath,image,attributes,seo}` fields ([#743](https://github.com/deity-io/falcon/pull/743))
- introduced `Coupon` type to be used throughout the Extension ([#764](https://github.com/deity-io/falcon/pull/764))

### Falcon Server

- Falcon-Server has been fully migrated to [TypeScript](https://github.com/microsoft/TypeScript/) 🎉 ([#479](https://github.com/deity-io/falcon/pull/479))
  - Changed the flow of Extension Containers, whereby `Extension` base class has been removed in favor of a cleaner code ([read more](https://falcon.deity.io/docs/falcon-server/extensions))
  - Now every `schema.graphql` file needs to be placed in the root of the package
  - Custom `Extenstion` can deliver its own `schemaDirectives` now which will be properly merged into the main Schema
  - Improved BackendConfig fetching technique (asynchronously in parallel)
- improved Cache calls by tracking simultaneous requests with the same cache-key ([#557](https://github.com/deity-io/falcon/pull/557))
- introduced `@cacheId` directive to assist to `@cache` for generating cache tags ([#608](https://github.com/deity-io/falcon/pull/608))
- fixed falsy value check when extracting a value by `fieldName` from the provided `sourceValue` ([#607](https://github.com/deity-io/falcon/pull/607))
- fixed priority for `ApiDataSource.getExtraResolvers` values ([#678](https://github.com/deity-io/falcon/pull/678))
- `graphqlUtils` methods moved to `falcon-server-env` package ([#686](https://github.com/deity-io/falcon/pull/686))
- simplified schema stitching call on Falcon-Server ([#701](https://github.com/deity-io/falcon/pull/701))
- fixed `cache` exposing `EndpointContainer` ([#720](https://github.com/deity-io/falcon/pull/720))
- exposed `dataSource` map for route context via `ctx.dataSources` ([#720](https://github.com/deity-io/falcon/pull/720))
- changed the convention for exporting the Extension module with `Extension` name ([#706](https://github.com/deity-io/falcon/pull/706))

### Falcon Server Env

- fixed HttpCache deserialization ([#584](https://github.com/deity-io/falcon/pull/584))
- added TTL option for cache tags ([#549](https://github.com/deity-io/falcon/pull/549))
- added optional `ApiDataSource.getExtraResolvers` static method to define extra resolvers ([#557](https://github.com/deity-io/falcon/pull/557))
- added re-export of all internally used components and helper utils ([#686](https://github.com/deity-io/falcon/pull/686))
- fixed the issue with the Cache queue and its error handling ([#767](https://github.com/deity-io/falcon/pull/767))

### Falcon Logger

- improved error handling for `logger-pretty` when working with incompatible log messages ([#716](https://github.com/deity-io/falcon/pull/716))

### Falcon Magento2 API

- added basic filtration into `productList` query resolver ([#575](https://github.com/deity-io/falcon/pull/575))
- fixed `lastOrder` resolver ([#616](https://github.com/deity-io/falcon/pull/616))
- improved dynamic url resolution ([#618](https://github.com/deity-io/falcon/pull/618))
- changed return type of `PlaceOrder` mutation to `Order | PlaceOrder3dSecureResult` type ([#709](https://github.com/deity-io/falcon/pull/709))
- configured TypeScript ([#468](https://github.com/deity-io/falcon/pull/468))

### Falcon Scripts

- added regeneration of Type Script definition `d.ts` files for `watch` script ([#558](https://github.com/deity-io/falcon/pull/558))
- fixed command error messages printing after its done ([#691](https://github.com/deity-io/falcon/pull/691))
- pinned Node version when compiling packages to support Node 8 ([#725](https://github.com/deity-io/falcon/pull/725))

### ESLint Config Falcon

- upgraded dependencies and fixed errors ([#739](https://github.com/deity-io/falcon/pull/739))

### Create Falcon App

- fixed yarn check which was creating an empty "yarn.lock" file ([#675](https://github.com/deity-io/falcon/pull/675))
- fixed dependencies in generated client ([#696](https://github.com/deity-io/falcon/pull/696))
- added placeholder for `build:prod` step in generated server code ([#696](https://github.com/deity-io/falcon/pull/696))

## Falcon v1.3 (2019-08-01)

- required changes were made to make Falcon compatible with Node v12 ([#537](https://github.com/deity-io/falcon/pull/537))
- updated all dependencies to fix lodash security issues ([#528](https://github.com/deity-io/falcon/pull/528))
- added translations to checkout process ([#535](https://github.com/deity-io/falcon/pull/535))

### Falcon Server v0.4.0 (2019-08-01)

- added support of ComponentContainer ([#515](https://github.com/deity-io/falcon/pull/515))
- added auto-installing of Subscription handlers ([#520](https://github.com/deity-io/falcon/pull/520))
- improved the way of extracting root fields for partial extension schemas ([#541](https://github.com/deity-io/falcon/pull/541))
- fixed the usage of CacheProvider when working with non-scalar values ([#543](https://github.com/deity-io/falcon/pull/543))

### Falcon Client v0.5.3 (2019-08-01)

- fixed issues with tests setup ([#534](https://github.com/deity-io/falcon/pull/534))

### Falcon E-commerce UI Kit v0.5.3 (2019-08-01)

- fixed issues with product count in MiniCart ([#518](https://github.com/deity-io/falcon/pull/518))

## Falcon v1.2 (2019-06-26)

### Falcon Client v0.5.0 (2019-06-26)

- changed Service Worker pre-cache strategy to cache all static content and skip requesting Falcon Client `SSR` until the next Service Worker release ([#470](https://github.com/deity-io/falcon/pull/470)), also:
  - upgraded Workbox to the latest 4.3.1 version
  - add build for Service Worker `sw.js` file
- added source-map support for all modes ([#491](https://github.com/deity-io/falcon/pull/491))
- improvement: made eslint optional ([#506](https://github.com/deity-io/falcon/pull/506))

### Falcon Service Worker v0.0.1 (2019-06-26)

- initial release

### Falcon Logger v1.0 (2019-06-26)

- changed Logger provider to [Pino](http://getpino.io/) ([#471](https://github.com/deity-io/falcon/pull/471))
- added `setApp`, `getFor` and `traceTime` API methods ([#471](https://github.com/deity-io/falcon/pull/471))

### Falcon Server v0.3.0 (2019-06-26)

- added source-map support for all modes ([#491](https://github.com/deity-io/falcon/pull/491))

---

## Falcon v1.1 (2019-05-29)

### Falcon Client v0.4.2 (2019-05-29)

- fixed issue with lack of third-party packages source-maps ([#455](https://github.com/deity-io/falcon/issues/455))
- added possibility to customize Service Worker ([#454](https://github.com/deity-io/falcon/pull/454))

### Falcon Server v0.2.2 (2019-05-29)

- added ability to cache GQL resolvers by tags ([#421](https://github.com/deity-io/falcon/pull/421))
- added ability to flush the cache via GQL directive ([#440](https://github.com/deity-io/falcon/pull/440))
- improved logging for falcon-server extensions initialization ([#447](https://github.com/deity-io/falcon/pull/447))

### Falcon Scripts v0.0.1 (2019-05-29)

- initial release

### Falcon E-commerce UI Kit v0.5.0 (2019-05-29)

- feat: (Breaking change) corrected names for collections `[noun]sList` --> `[noun]List` ([#427](https://github.com/deity-io/falcon/pull/427))

### Falcon Magento2 API v0.6.0 (2019-05-29)

- fixed issue with incomplete product price data which led to incorrect rendering of products ([#417](https://github.com/deity-io/falcon/issues/417))
- added oAuth authorization type for integration requests ([#424](https://github.com/deity-io/falcon/pull/424))

---

## Falcon v1.0

### Falcon Magento2 API v0.5.0 (2019-04-11)

- fixed issue with merging guest's with customer's carts ([#394](https://github.com/deity-io/falcon/pull/394))
- fixed issue with 0 price for the first product added to cart by authorized user ([#394](https://github.com/deity-io/falcon/pull/394))

### Falcon-Server v0.2.1 (2019-04-11)

- introduced `@cache` GraphQL directive to cache resolver results ([#374](https://github.com/deity-io/falcon/pull/374))
- `url` resolver is cached now ([#374](https://github.com/deity-io/falcon/pull/374))

### Falcon Shop Extension v0.4.1 (2019-04-11)

- `menu`, `Category`, `Category.products`, `Product` and `Product.breadcrumbs` resolvers are cached now ([#374](https://github.com/deity-io/falcon/pull/374))

### Falcon Client v0.4.1 (2019-04-11)

- fixed absolute path to output directory embedded in bundle ([385](https://github.com/deity-io/falcon/issues/385))

### Falcon E-commerce UI Kit v0.4.1 (2019-04-11)

- added basic component set (queries, mutations and ui) to build filters ([#365](https://github.com/deity-io/falcon/pull/365))
- fix for not reloaded Product Thumbnails on ProductList ([#407](https://github.com/deity-io/falcon/pull/407))
- added message placeholder for empty Product List ([#408](https://github.com/deity-io/falcon/issues/408))

---

## Falcon v1.0 RC3 (2019-04-02)

### Falcon Client v0.4.0 (2019-04-02)

- changed GraphQL Proxy config in favor of passing GraphQL URL explicitly ([#355](https://github.com/deity-io/falcon/pull/355))
- changed the way of configuring PORT for `falcon-client` and `webpackDevServer` ([#364](https://github.com/deity-io/falcon/pull/364))
- fixed vulnerability of `razzle-dev-utils` > `react-dev-utils` dependency ([305](https://github.com/deity-io/falcon/issues/305))
- fixed issue where appHtmlMiddleware does not pass GoogleTagManager information to falcon-client/src/components/Html.js (even though the config is correct). ([#362](https://github.com/deity-io/falcon/pull/362))
- added `bootstrap/configureServer` script to proxy requests from Falcon-Client to Falcon-Server ([#247](https://github.com/deity-io/falcon/pull/247))
- added root client `Query.getConfig` resolver (`getConfig (key: "...") @client`) to extract config value for the specified key ([#247](https://github.com/deity-io/falcon/pull/247))

### Falcon UI v0.2.0 (2019-04-02)

- exposed `withTheme()` so theme values can be accessed from not themed components ([#371](https://github.com/deity-io/falcon/pull/371))

### Falcon Server v0.2.0 (2019-04-02)

- introduced `onRouterCreated` and `onRouterInitialized` bootstrap events ([#247](https://github.com/deity-io/falcon/pull/247))
- introduced scalar `JSON` GraphQL type available for any extension ([#247](https://github.com/deity-io/falcon/pull/247))
- exposes `/endpoints` endpoint to get a list of entries to be proxies to the external backend (service) ([#247](https://github.com/deity-io/falcon/pull/247))

### Falcon E-commerce UI Kit v0.4.0 (2019-04-02)

- `CheckoutMutation` now handles "union" result types from Falcon-Server ([#247](https://github.com/deity-io/falcon/pull/247))

### Falcon Shop Extension v0.4.0 (2019-04-02)

- `Cart.quoteCurrency` is now deprecated ([#247](https://github.com/deity-io/falcon/pull/247))
- `PaymentMethodInput` GraphQL input now accepts `additionalData` object ([#247](https://github.com/deity-io/falcon/pull/247))
- `Mutation.placeOrder` can now return 2 result types - `PlaceOrderSuccessfulResult` and `PlaceOrder3dSecureResult` ([#247](https://github.com/deity-io/falcon/pull/247))

### Falcon Magento2 API v0.4.0 (2019-04-02)

- added Adyen (credit card) and PayPal Payment Gateways support ([#247](https://github.com/deity-io/falcon/pull/247))
- updated urls of Magento REST endpoints ([#376](https://github.com/deity-io/falcon/pull/376))

### Falcon Payment Plugin v0.0.1

- initial release

### Falcon Adyen Plugin v0.0.1

- initial release

### Falcon PayPal Plugin v0.0.1

- initial release

---

## Falcon v1.0 RC2 (2019-03-13)

### Falcon Client v0.3.1 (2019-03-13)

- added `.browserslistrc` support for javascript, fixed #293 ([#306](https://github.com/deity-io/falcon/pull/306))
- added support for normal module replacement ([#328](https://github.com/deity-io/falcon/pull/328))
- HTML5 autocomplete on checkout address form ([#330](https://github.com/deity-io/falcon/pull/330))
- introduced `graphqlProxy` config flag to control GraphQL proxy via Falcon-Client route ([#337](https://github.com/deity-io/falcon/pull/337))
- added possibility to override any component with custom implementation ([#328](https://github.com/deity-io/falcon/pull/328))
- updated `ApolloClient` to the latest version with built-in local state management ([#333](https://github.com/deity-io/falcon/pull/333))
- fixed issues with handling cookies when Falcon Server runs under a different domain than Falcon Client ([#337](https://github.com/deity-io/falcon/pull/337))
- fixed issues with address autocompletion on checkout page ([#330](https://github.com/deity-io/falcon/pull/330))
- fixed configuration of loadable components ([#327](https://github.com/deity-io/falcon/pull/327))

### Normal Module Override Webpack Plugin v0.0.1 (2019-03-13)

- feat: first version of Normal Module Override Webpack Plugin ([#328](https://github.com/deity-io/falcon/pull/328))

### Falcon Magento2 API v0.3.1 (2019-03-13)

- fixed problems with fetching store configurations for logged in users when Falcon Server is restarted ([#331](https://github.com/deity-io/falcon/pull/331))

---

## Falcon v1.0 RC (2019-02-14)

### Falcon Shop Extension v0.3.0 (2019-02-14)

- updated schema to handle filters correctly ([#309](https://github.com/deity-io/falcon/pull/309))

### Falcon Magento2 API v0.3.0 (2019-02-14)

- added filters implementation ([#309](https://github.com/deity-io/falcon/pull/309))
- updated endpoint for placing order so it's compatible with falcon-magento2-module v3.0.0
- added fetching of dynamic menu ([#280](https://github.com/deity-io/falcon/pull/280))

### Falcon E-commerce UI Kit v0.3.0 (2019-02-14)

- added `SearchProvider` with `SearchContext` that handles basic filtering ([#309](https://github.com/deity-io/falcon/pull/309))
- added handling of dynamic menu ([#280](https://github.com/deity-io/falcon/pull/280))
- updated `ApolloClient` to the newest version (v2.5.1) ([#333](https://github.com/deity-io/falcon/pull/333))

### Falcon Client v0.3.0 (2019-02-14)

- fixed offline mode ([#266](https://github.com/deity-io/falcon/pull/266))

### Falcon Server v0.3.0 (2019-02-14)

- fixed missing dependencies (`core-js`) issue ([#313](https://github.com/deity-io/falcon/pull/313))

---

## Falcon v0.3 (2019-01-18)

### Falcon Client v0.2.0 (2019-01-18)

- improvement: React 16.6 support ([#226](https://github.com/deity-io/falcon/pull/226))
- added support for scss with css modules ([#259](https://github.com/deity-io/falcon/pull/259))

### Falcon Server v0.1.1 (2019-01-18)

- refactor: `Events` enum has been moved from `falcon-server` to `falcon-server-env` package ([#146](https://github.com/deity-io/falcon/pull/146))

### Falcon Magento2 API v0.2.0 (2019-01-18)

- changed url resolver to use new format of data sent by `/url` endpoint ([#146](https://github.com/deity-io/falcon/pull/146))
- added support for fetching breadcrumbs from new endpoint ([#146](https://github.com/deity-io/falcon/pull/146))
- added support for product list sorting ([#146](https://github.com/deity-io/falcon/pull/146))
- modified fetching of category products - now it uses `/categories/{id}/products` endpoint ([#146](https://github.com/deity-io/falcon/pull/146))
- added aggregations parsing for ProductList ([#146](https://github.com/deity-io/falcon/pull/146))

### Falcon UI v0.2.0 (2019-01-18)

- feat: added `Menu` component ([#240](https://github.com/deity-io/falcon/pull/240))

### Falcon E-commerce UI Kit v0.2.0 (2019-01-18)

- feat: added queries and mutations for:
  - getting all orders and by id
  - addresses operations (add new address, remove address, change address)
  - editing customer information and changing password ([#240](https://github.com/deity-io/falcon/pull/240))
- feat: added `CheckboxFormField` ([#240](https://github.com/deity-io/falcon/pull/240))
- improvement: extracted `Field` component in order to improve support for custom `FormField`'s component ([#240](https://github.com/deity-io/falcon/pull/240))
- added `SortOrderProvider` which handles fetching and setting sort options for product lists ([#146](https://github.com/deity-io/falcon/pull/146))

### Falcon Shop Extension v0.2.0 (2019-01-18)

- feat: introduced resolver `addresses: AddressList` in order to retrieve all customer addresses, added types `EditAddressInput`, `AddAddressInput` ([#240](https://github.com/deity-io/falcon/pull/240))

---

## Falcon v0.2 (2018-12-12)

### Falcon Client v0.1.0 (2018-12-12)

- feat: support for Google Analytics added ([#78](https://github.com/deity-io/falcon/pull/78))
- improvement: removed razzle ([#87](https://github.com/deity-io/falcon/pull/87))
- feat: added translations for common app areas (except checkout) ([#205](https://github.com/deity-io/falcon/pull/205))

### Falcon Server v0.1.0 (2018-12-12)

- feat: Basic Cache implementation was introduced ([#176](https://github.com/deity-io/falcon/pull/176))
- feat: (Breaking change) changed Event flow for ApiContainer and its entries - every ApiDataSource instance is being
  created on GQL request ([#176](https://github.com/deity-io/falcon/pull/176))
- feat: added `backendConfig` Query type ([#176](https://github.com/deity-io/falcon/pull/176))
- feat: `type BackendConfig`, `enum SortOrderDirection`, `input SortOrderInput` were introduced in the base Schema ([#176](https://github.com/deity-io/falcon/pull/176))
- fix: added separate `endpoints` config section and dedicated base class ([#176](https://github.com/deity-io/falcon/pull/176))
- refactor: `Events` enum has been moved from `falcon-server` to `falcon-server-env` package ([#176](https://github.com/deity-io/falcon/pull/176))

### Falcon UI v0.1.0 (2018-12-12)

- docs: comprehensive documentation added ([#115](https://github.com/deity-io/falcon/pull/115))
- feat: support for keyframe animations defined in theme ([#153](https://github.com/deity-io/falcon/pull/153))

### Falcon Theme Editor v0.1.0 (2018-12-12)

- feat: inspect mode, more props, improved performance, layout tweaks ([#115](https://github.com/deity-io/falcon/pull/115))

### Falcon E-commerce UI Kit v0.1.0 (2018-12-12)

- feat: basic blog UI (listing posts, displaying single post) ([#137](https://github.com/deity-io/falcon/pull/137))
- feat: added queries and mutations for cart operations (add to cart, remove from cart, change cart item) ([#114](https://github.com/deity-io/falcon/pull/114))
- feat: added queries and mutations for sign in / sign out operations ([#152](https://github.com/deity-io/falcon/pull/152))
- feat: added `ProtectedRoute` and `OnlyUnauthenticatedRoute` route components ([#163](https://github.com/deity-io/falcon/pull/163))
- feat: added queries and mutations for checkout process and implemented checkout logic abstraction ([#182](https://github.com/deity-io/falcon/pull/182))
- feat: added `Form` component which provides translation context for `FormField`s ([#205](https://github.com/deity-io/falcon/pull/205))

### Create Falcon App v1.1.1 (2018-12-12)

- feat: allow ejecting `falcon-ecommerce-uikit` package via `eject` command ([#212](https://github.com/deity-io/falcon/pull/212))

### Create Falcon App v1.0.7 (2018-10-25)

- docs: updated documentation ([#47](https://github.com/deity-io/falcon/pull/47))
- fix: fixed problem with React 16.6.0 ([#109](https://github.com/deity-io/falcon/pull/109))

### Falcon Server Env v0.1.0 (2018-12-12)

- feat: Provided `Cache` wrapper class and built-in `InMemoryLRUCache` cache provider ([#176](https://github.com/deity-io/falcon/pull/176))
- feat: added getter and setter methods to work with "named" session object from the context in ApiDataSource
  ([#176](https://github.com/deity-io/falcon/pull/176))
- feat: `ApiDataSource` and `Extension` models are now accept `eventEmitter` instance
  ([#176](https://github.com/deity-io/falcon/pull/176))
- feat: Provided `EndpointManager` base class ([#176](https://github.com/deity-io/falcon/pull/176))
- feat: Base `Extension` class provides auto-binding for its own GraphQL Schema to the assigned ApiDataSource instance
  (via `getGraphQLConfig()` method) ([#176](https://github.com/deity-io/falcon/pull/176))

### Falcon Magento2 API v0.1.0 (2018-12-12)

- feat: Magento Admin token is now being stored in cache ([#176](https://github.com/deity-io/falcon/pull/176))

### eject-ts v0.1.0 (2018-12-12)

- feat: eject-ts CLI ([#212](https://github.com/deity-io/falcon/pull/212))

### Falcon-i18n v0.0.4

- feat: added `i18nProvider` with `I18n` and `T` components to ease internationalization support ([#205](https://github.com/deity-io/falcon/pull/205))

---

## Falcon v0.1 (2018-10-05)

### Falcon Client v0.0.1 (2018-10-05)

- feat: development and build process using razzle (https://github.com/jaredpalmer/razzle)
- feat: built in SSR
- feat: built in i18n
- feat: connection with Falcon Server via [Apollo Client](https://www.apollographql.com/docs/react/)
- feat: state management via [Apollo Link State](https://www.apollographql.com/docs/link/links/state.html)

### Falcon Server v0.0.1 (2018-10-05)

- feat: extensions system with built-in schema stitching
- feat: all the communication based on GraphQL (using [Apollo Server](https://www.apollographql.com/docs/apollo-server/))

### Falcon UI v0.0.1 (2018-10-05)

- feat: basic set of components with theming capabilities
- feat: first version of theme editor as React component

### Falcon E-commerce UI Kit v0.0.1 (2018-10-05)

- feat: product list view
- feat: product page view
- feat: mini cart view on sidebar

### Create Falcon App v1.0.0 (2018-10-05)

- feat: creating Falcon project from predefined template

### Falcon Shop Extension v0.0.1 (2018-10-05)

- feat: first version of schema for shop features

### Falcon Magento2 Api v0.0.1 (2018-10-05)

- feat: resolvers for Falcon Shop Extension used for communication with Magento2 shop

### Falcon Blog Extension v0.0.1 (2018-10-05)

- feat: first version of schema for blog features

### Falcon WordPress Api v0.0.1 (2018-10-05)

- feat: resolvers for Falcon Blog Extension used for communication with WordPress backend
