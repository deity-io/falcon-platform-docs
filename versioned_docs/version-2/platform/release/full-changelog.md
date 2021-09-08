---
id: full-changelog
title: Falcon Changelog
sidebar_label: 'Falcon Changelog'
description: Falcon platform all versions and their release notes
---

Versions marked with a number and date (e.g. Falcon Platform v2.1.1 (2020-05-08)) are already released and available via npm.

## Falcon Platform 2.7.17 (2021-09-07)

### Demo V2

- Fix `mailto` address from config on the contact page
- Add Cart item price fallback

### Falcon BigCommerce API

- Use product gallery sort order for BigCommerce integration

### Falcon Client

- Update css modules loading in webpack config

## Falcon Platform 2.7.16 (2021-08-05)

### Falcon Shop Data
- Fix remove cart mutation after upgrading to apollo/client

### Demo V2
- Fix sidebar action after adding to cart

## Falcon Platform 2.7.15 (2021-08-04)

### Falcon BigCommerce API

- Add limit of 250 to regions so it's not capped at 50 entries

## Falcon Platform 2.7.14 (2021-07-14)

### GeoIP

- Added support for GeoIP in both Falcon Server and Falcon Platform.

### Falcon Blog Extension

- Cache author data for blog posts for improved performance.

### Falcon Wordpress API

- Return author data that matches the author type declared in the blog extension.

### Falcon Front Kit

- Migrate to `@apollo/client` (away from `@apollo/react`, `graphql-tag`).

### Falcon Client

- Migrate to `@apollo/client` (away from `@apollo/react`, `graphql-tag`).

### Demo Apps

- Migrate to `@apollo/client` (away from `@apollo/react`, `graphql-tag`).

## Falcon Platform 2.7.13 (2021-05-21)

### Falcon BigCommerce API

- Security patch 

### Demo v1 & Demo v2

- Changed the way the pending payment page redirects to be more efficient

## Falcon Platform 2.7.12 (2021-05-18)

### Falcon Magento API

- Security patch 

## Falcon Platform 2.7.11 (2021-05-11)

### Falcon Server

- Enabled introspection when debug mode is enabled 

## Falcon Platform 2.7.10 (2021-05-11)

### Falcon Server

- Added DEBUG env var on FS so it's possible to enable GraphQL Playground

## Falcon Platform 2.7.9 (2021-05-10)

- Updated lodash in all packages to 4.17.21 to fix security issues

### Falcon Client

- Replaced node-sass-chokidar with node-sass and updated webpack config to fix support for scss modules

## Falcon Platform 2.7.8 (2021-04-30)

### Falcon Magento API

- Fixed url resolver so it doesn't pass query string parameters to Magento

## Falcon Platform 2.7.7 (2021-04-28)

### Falcon Server

- Added falcon-file-redirect-api
### Demo v1

- Upgraded Falcon Payments packages to 2.7.1

### Demo v2

- Upgraded Falcon Payments packages to 2.7.1

## Falcon Platform v2.7.6 (2021-04-06)

### Demo v1

- `@deity/falcon-search-extension` added as a dependency.

## Falcon Platform 2.7.5 (2021-03-29)

### Falcon Magento API

- Fixed missing product description from product request.
- Allow for Magento URL suffix to be controlled via env vars.

## Falcon Platform 2.7.4 (2021-03-26)

### Falcon Stripe Plugin

- Return errors so they can be used in the client app.

### Falcon Blog Extension

- Add cache tags to blog posts and blog pages.

## Falcon Platform 2.7.3 (2021-03-17)

### Falcon Server

- Added possibility to pass scope mapping configuration for WordPress via env variables

- Added no-cache headers for sw.js and SSR rendered content

## Falcon Platform 2.7.2 (2021-03-12)

### Falcon BigCommerce API

- Fix `en` -> `en-GB` locale mapping.

### Falcon Server

- Update schema to allow language to be in 2 character format.

## Falcon Platform 2.7.1 (2021-03-10)

### Dependencies

- Update Falcon Payments dependencies from 2.6.4 -> 2.7.0

## Falcon Platform 2.7.0 (2021-03-09)

### Falcon BigCommerce API

- Fix order statuses
- Fix cart restoration for failed payments
- Fix issue with orders being archived
- Add a check to webhooks to prevent webhook collisions

### Falcon Magento API

- Add support for native search
- Fix order statuses blocking order processing

### Falcon Client

- Pass proper httpLink configuration to `getApolloClientUploadLink()`
- Fix missing ApolloClient Link

### Falcon Front Kit

- Clear shipping method in `CheckoutProvider` when billing address is changed to line up with the session data

### Demo V1

- Add missing Mollie ENV vars
- Add search components

### New Features

- Add support for redirects
- Add support for blog 'pages'

## Falcon Platform v2.6.5 (2021-02-25)

### Falcon BigCommerce API

- Fix issue cart being emptied on SSR.

## Falcon Platform v2.6.4 (2021-02-23)

### Falcon Magento API

- Fix issue with shipping being sent to payments without tax.

## Falcon Platform 2.6.2 (2021-01-26)

- Dropped Node 10 support

### Create Falcon App

- fixed crashes during dependency installation on windows

### Falcon Server Env

- added `EndpointManager.getDataSource` method to get an instance of the required DataSource

### Falcon UI

- added more responsive style props and values
- fixed sidebar overflow causing issues

### Falcon Demo

- added support for multiple cart coupons/vouchers in the frontend
- added a content loader for the product page
- added a feature which shows original prices of sale items in `Cart` and `MiniCart`
- fixed loader not showing when changing which product you are viewing
- fixed the invisibility of the mobile bottom bar when at the top of search/checkout pages
- fixed input font sizes causing iOS Safari to zoom in on fields

### Falcon BigCommerce API

- added fetches for the `regularPrice` of items which are in the cart

### Falcon Shop Data

- added `regularPrice` and `rowTotalWithDiscount` fields to `MiniCartQuery`
- added `regularPrice` to `CartItem`

### Falcon Shop Extension

- BREAKING: renamed `itemId` to `id`


## Falcon Platform v2.5.0 (2020-10-28)

### Falcon Demo

- added registered guest email validation to the guest checkout form
- fixed sidebar horizontal scrolling bug
- Added a fixed add to cart bottom bar in the product overview page
- Changed on mobile the header to a fixed bottom navigation menu

### Falcon BigCommerce API

- added ability to check whether an email is registered

### Falcon Shop Data

- added a query for checking whether an email is registered to a customer

### Falcon Client

- fixed coping empty `views` directory
- fixed initial language configuration
- add checking of Types (yarn check-types)
- update version of `@types/react` and `react-router-dom`
- fixed part of minor types issues
- added HTTPS option (localhost)

### Falcon Server

- introduced IOC container

### Falcon Dev Tools

- changed config of TypeScript from js to `tsconfig.json`

### Falcon UI

- added dynamically generated negative spacings for all positive spacings

### Falcon UI Kit

- added schema.json components

## Falcon Platform v2.4.8 (2020-09-14)

### Falcon Example V2

- Update theme Presets

## Falcon Platform v2.4.6 (2020-09-11)

### Falcon Demo

- improved handling of many items by `ProductGallery`
- fixed form submission by dropdown
- fixed recently viewed items not showing up
- fixed issue with `PageLayout` styling (lack of full height)
- refactored the styling of CMSContent for the sake of uniformity
- added urlKey to mini cart gql query
- fixed Firefox header bug upon page resize
- added `aria-controls` attributes to sidebar controlling buttons

### Falcon Logger

- added `severity` log field mapped from log level

### Falcon BigCommerce API

- fixed fetching addresses on the `Order` type

### Falcon Magento Api

- fixed the Magento API package to work with the latest product options GraphQL schema

### Falcon UI

- fixed `NumberInput` buttons not disabling
- fixed `Sidebar` animation when changing sides

### Falcon wordpress api

- Added wordpress host configuration

### Falcon Stripe Plugin

- fixed an error when checking out with a credit card

### Falcon Server

- refactored containers for uniformity, added checks preventing error message spam

## Falcon Platform v2.4.2 (2020-07-15)

### Falcon Client

- removed sourcemaps from production builds
- added `HelmetProvider` to `FalconClientMock`
- fixed Jest configuration for custom app-level configurations

### Falcon UI

- added support for passing a function to the `globalCss` prop
- removed `react-powerplug` dependency
- added basic keyboard support to `Dropdown`

### Falcon UI Kit

- removed `react-powerplug` dependency
- added support for `placeholder` in `Select` component
- added a confirm password field to the signup form

### Falcon Front Kit

- ignore newlines when validating character limits
- Add check for Intersection Observer support
- added a confirm password field validator

### Falcon Demo

- fixed stale content on orders page
- removed `react-adopt` dependency
- removed `react-lazyload` dependency
- removed `react-powerplug` dependency
- added integration test for checkout flow

### Falcon BigCommerce API

- fixed product loading

## Falcon Platform v2.4.0

### Falcon UI Kit

- changed HTML tag of `AddressDetailsLayout` to `address`

### Falcon Demo

- added support for product options

## Falcon Platform v2.3.1

### Falcon Demo

- added indication of total number of order items on orders page
- fixed order page overflow when product has many options

## Falcon Platform v2.3.0

### Falcon Shop Data

- refetch `MiniCart` after removing a cart item

### Falcon UI

- fixed `NumberInput` decrease button being disabled when `min` prop was not defined
- fixed `NumberInput` buttons not being disabled when `min` or `max` props were `0`

### Falcon UI Kit

- fixed `FormFieldLabel` to be themable
- added `lineClamp` CSS helper function

### Falcon Front Kit

- reset pagination to page 1 after applying filters

## Falcon Platform v2.2.0

### Falcon Client

- added GraphQL Upload support
- upgraded `typescript` to version 3.9.2
- upgraded `babel` to version 7.9.6

### Falcon Server

- upgraded ApolloServer-related packages to the latest version
  - `apollo-server-cache-memcached` to `^0.6.5`
  - `apollo-server-cache-redis` to `^1.2.1`
  - `apollo-server-caching` to `^0.5.1`
  - `apollo-server-env` to `^2.4.4`
  - `apollo-server-errors` to `^2.4.1`
  - `apollo-server-koa` to `^2.14.2`
  - `apollo-datasource` to `^0.7.1`
  - `apollo-datasource-rest` to `^0.9.2`

### Falcon Theme Editor

- fixed updating theme with HMR

### Falcon Front Kit

- added props to allow overriding `LocaleProvider` values
- BREAKING: removed export for `addCimodeLocale`

### Falcon Shop Extension

- added `itemOptions` field on `OrderItem`

### Falcon Scripts

- upgraded `jest` to version 26.0.1

### Falcon Shop Extension

- BREAKING: removed type `CartItemOptionValue`
- BREAKING: removed field `data` from type `CartItemOption`

## Falcon Platform v2.1.1 (2020-05-08)

### Falcon Server

- fixed initializing `Api`, `Extension`, `Component` and `Endpoints` containers when a module is disabled

## Falcon Platform v2.1.0 (2020-05-07)

### Falcon Server

- added `enabled` (default: `true`) definition flag for all "Container" entries

### Falcon Client

- fixed overriding of babel configuration
- improved HMR by reloading the page less often and better error handling
- fixed passing headers during GraphQL requests error handling

### Falcon UI

- fixed accesibility issues of `NumberInput`
- improved performance of themed components
- fixed disabled state of buttons on `NumberInput`

### Falcon Theme Editor

- fixed white view when content overflowed

### Falcon Front Kit

- improved performance of `Field` and `FormField` components
- added `forceReady` prop to `<EnsureTTI />` to allow setting ready state declaratively

### ESLint Config Falcon

- added `react-hooks` ESLint rules and fixed errors and warnings

### Create Falcon App

- intoduced unified example names (demo-v1, demo-v2)
- added `-f` (`--full`) flag which is necessary to generate example app with `client` and `server`, otherwise only `client` will be generated
- improved search performance of the demo-v2 template
- added possibility to run search and display search results without aggregations

### Falcon Data

- fixed `useThrowError` hook so it works correctly with test utils

### Falcon Logger

- added 2nd parameter to `Logger.getFor()` so it's possible to pass data that will be added to each log message

## Falcon Platform v2.0.0 (2020-02-17)

### Falcon Client

- changed the way of defining "proxyEndpoints"
- fixed typos in build log messages
- added Apollo hooks support (upgrade `apollo-client` to version `2.6.x`)
- improved code redistribution across chunks
- fixed self cached service worker (`/sw.js`)
- upgraded `react` to version `16.10.2`
- improved eslint configuration
- upgraded `css-loader` to version `3.2.0`
- fixed `/graphQL` proxy error handling
- fixed custom error `500.html` view resolution
- fixed handling of redirects by serviceworker
- fixed the `next` value for sign-in redirects
- improved a way of processing the `svg` files

### Falcon I18n

- added `useI18n` hook

### Falcon UI

- fixed theme merging
- fixed duplicated conditions when extracting themed css
- fixed incompatible `css` prop typings
- added `console.error` when an icon is not defined in the theme during development
- improved typings
  - renamed `ThemedComponentPropsWithVariants` to `ComponentTheme`
  - renamed `ThemedComponentProps` to `ThemingProps`
  - renamed `BaseThemedComponentProps` to `BaseThemingProps`
- added `noScrollbars` css generation function

### Falcon E-commerce UI Kit discontinued

- Breaking change: Falcon E-commerce UI Kit has been discontinued, instead we introduce [Falcon Front Kit](#falcon-front-kit-v1.0.0), [Falcon UI Kit](#falcon-ui-kit-v1.0.0), [Falcon Data](#falcon-data-v1.0.0), [Falcon Shop Data](#falcon-shop-data-v1.0.0) and [Falcon Blog Data](#falcon-blog-data-v1.0.0)

### Falcon Front Kit

- initial release
- added convention for validation error messages translation
- fixed synchronization of account and sign in icon with customer logging in and out state
- added Apollo hooks support (upgrade `apollo-client` to version `2.6.x`)
- improved dynamic url resolution
- added `Add`/`EditAddressFormProvider` components to handle relevant form data
- added `Submit` component which provides context to form submit components
- fixed `LocaleSwitcher` which did not take into account `whitelist`ed languages, and `LocaleContext` which hardcoded language fallback instead of taking it from `clientConfig`
- extracted `CurrencyProvider` and `Currency` components from `LocaleProvider` and `Locale`, also introduced `useLocale` and `useCurrency` hooks
- updated Formik to version 2.0
- added `InBrowserOnly` component
- added `SwitchDynamicURL` component in order to define dynamic URL routes in `react`/`react-router` `v4` way
- added `SEO` component to render `title`, `description` and `keywords` as proper meta-tags
- added support for url with query string provided to `<ProtectedRoute />` component via `redirectTo` prop

### Falcon UI Kit

- initial release
- added Apollo hooks support (upgrade `apollo-client` to version `2.6.x`)
- fixed warning when `AddressDetails` receives non-unique values
- changed `Grid` component default `gridGap` to `md`
- added `AddressFormFields` and `Add`/`EditAddressForm` components to make address forms more reusable
- fixed `ProductCard` component which should not require `thumbnail`
- integrated `FormSubmit` with Formik, which allows it to hook into form state
- updated Formik to version 2.0
- moved sidebar close icon from `Sidebar` to `SidebarLayout`
- improved scroll handling of `ProductGallery`

### Falcon Data

- initial release
- improved Falcon `Query` component to not hide Apollo `Query` component render props
- added Apollo hooks support (upgrade `apollo-client` to version `2.6.x`)
- improved way of handling errors

### Falcon Shop Data

- initial release
- added Apollo hooks support (upgrade `apollo-client` to version `2.6.x`)
- fixed response types of `AddressQuery` and `CountryListQuery`
- set `ssr: false` for `CartQuery` by default

### Falcon Blog Data

- initial release
- added Apollo hooks support (upgrade `apollo-client` to version `2.6.x`)

### Falcon Shop Extension

- introduced Country and Region types to allow fetching more details with address queries
- added `@cache` for `Query.productList` query
- added `Product.categories` and `Category.{urlPath,image,attributes,seo}` fields
- introduced `Coupon` type to be used throughout the Extension

### Falcon Server

- Falcon-Server has been fully migrated to [TypeScript](https://github.com/microsoft/TypeScript/) 🎉
  - Changed the flow of Extension Containers, whereby `Extension` base class has been removed in favor of a cleaner code
  - Now every `schema.graphql` file needs to be placed in the root of the package
  - Custom `Extenstion` can deliver its own `schemaDirectives` now which will be properly merged into the main Schema
  - Improved BackendConfig fetching technique (asynchronously in parallel)
- improved Cache calls by tracking simultaneous requests with the same cache-key
- introduced `@cacheId` directive to assist to `@cache` for generating cache tags
- fixed falsy value check when extracting a value by `fieldName` from the provided `sourceValue`
- fixed priority for `ApiDataSource.getExtraResolvers` values
- `graphqlUtils` methods moved to `falcon-server-env` package
- simplified schema stitching call on Falcon-Server
- fixed `cache` exposing `EndpointContainer`
- exposed `dataSource` map for route context via `ctx.dataSources`
- changed the convention for exporting the Extension module with `Extension` name

### Falcon Server Env

- fixed HttpCache deserialization
- added TTL option for cache tags
- added optional `ApiDataSource.getExtraResolvers` static method to define extra resolvers
- added re-export of all internally used components and helper utils
- fixed the issue with the Cache queue and its error handling

### Falcon Logger

- improved error handling for `logger-pretty` when working with incompatible log messages

### Falcon Magento2 API

- added basic filtration into `productList` query resolver
- fixed `lastOrder` resolver
- improved dynamic url resolution
- changed return type of `PlaceOrder` mutation to `Order | PlaceOrder3dSecureResult` type
- configured TypeScript

### Falcon Scripts

- added regeneration of Type Script definition `d.ts` files for `watch` script
- fixed command error messages printing after its done
- pinned Node version when compiling packages to support Node 8

### ESLint Config Falcon

- upgraded dependencies and fixed errors

### Create Falcon App

- fixed yarn check which was creating an empty "yarn.lock" file
- fixed dependencies in generated client
- added placeholder for `build:prod` step in generated server code

## Falcon v1.3 (2019-08-01)

- required changes were made to make Falcon compatible with Node v12
- updated all dependencies to fix lodash security issues
- added translations to checkout process

### Falcon Server v0.4.0 (2019-08-01)

- added support of ComponentContainer
- added auto-installing of Subscription handlers
- improved the way of extracting root fields for partial extension schemas
- fixed the usage of CacheProvider when working with non-scalar values

### Falcon Client v0.5.3 (2019-08-01)

- fixed issues with tests setup

### Falcon E-commerce UI Kit v0.5.3 (2019-08-01)

- fixed issues with product count in MiniCart

## Falcon v1.2 (2019-06-26)

### Falcon Client v0.5.0 (2019-06-26)

- changed Service Worker pre-cache strategy to cache all static content and skip requesting Falcon Client `SSR` until the next Service Worker release
  - upgraded Workbox to the latest 4.3.1 version
  - add build for Service Worker `sw.js` file
- added source-map support for all modes
- improvement: made eslint optional

### Falcon Service Worker v0.0.1 (2019-06-26)

- initial release

### Falcon Logger v1.0 (2019-06-26)

- changed Logger provider to [Pino](http://getpino.io/)
- added `setApp`, `getFor` and `traceTime` API methods

### Falcon Server v0.3.0 (2019-06-26)

- added source-map support for all modes

---

## Falcon v1.1 (2019-05-29)

### Falcon Client v0.4.2 (2019-05-29)

- fixed issue with lack of third-party packages source-maps
- added possibility to customize Service Worker

### Falcon Server v0.2.2 (2019-05-29)

- added ability to cache GQL resolvers by tags
- added ability to flush the cache via GQL directive
- improved logging for falcon-server extensions initialization

### Falcon Scripts v0.0.1 (2019-05-29)

- initial release

### Falcon E-commerce UI Kit v0.5.0 (2019-05-29)

- feat: (Breaking change) corrected names for collections `[noun]sList` --> `[noun]List`

### Falcon Magento2 API v0.6.0 (2019-05-29)

- fixed issue with incomplete product price data which led to incorrect rendering of products
- added oAuth authorization type for integration requests

---

## Falcon v1.0

### Falcon Magento2 API v0.5.0 (2019-04-11)

- fixed issue with merging guest's with customer's carts
- fixed issue with 0 price for the first product added to cart by authorized user

### Falcon-Server v0.2.1 (2019-04-11)

- introduced `@cache` GraphQL directive to cache resolver results
- `url` resolver is cached now

### Falcon Shop Extension v0.4.1 (2019-04-11)

- `menu`, `Category`, `Category.products`, `Product` and `Product.breadcrumbs` resolvers are cached now

### Falcon Client v0.4.1 (2019-04-11)

- fixed absolute path to output directory embedded in bundle

### Falcon E-commerce UI Kit v0.4.1 (2019-04-11)

- added basic component set (queries, mutations and ui) to build filters
- fix for not reloaded Product Thumbnails on ProductList
- added message placeholder for empty Product List

---

## Falcon v1.0 RC3 (2019-04-02)

### Falcon Client v0.4.0 (2019-04-02)

- changed GraphQL Proxy config in favor of passing GraphQL URL explicitly
- changed the way of configuring PORT for `falcon-client` and `webpackDevServer`
- fixed vulnerability of `razzle-dev-utils` > `react-dev-utils` dependency
- fixed issue where appHtmlMiddleware does not pass GoogleTagManager information to falcon-client/src/components/Html.js (even though the config is correct).
- added `bootstrap/configureServer` script to proxy requests from Falcon-Client to Falcon-Server
- added root client `Query.getConfig` resolver (`getConfig (key: "...") @client`) to extract config value for the specified key

### Falcon UI v0.2.0 (2019-04-02)

- exposed `withTheme()` so theme values can be accessed from not themed components

### Falcon Server v0.2.0 (2019-04-02)

- introduced `onRouterCreated` and `onRouterInitialized` bootstrap events
- introduced scalar `JSON` GraphQL type available for any extension
- exposes `/endpoints` endpoint to get a list of entries to be proxies to the external backend (service)

### Falcon E-commerce UI Kit v0.4.0 (2019-04-02)

- `CheckoutMutation` now handles "union" result types from Falcon-Server

### Falcon Shop Extension v0.4.0 (2019-04-02)

- `Cart.quoteCurrency` is now deprecated
- `PaymentMethodInput` GraphQL input now accepts `additionalData` object
- `Mutation.placeOrder` can now return 2 result types - `PlaceOrderSuccessfulResult` and `PlaceOrder3dSecureResult`

### Falcon Magento2 API v0.4.0 (2019-04-02)

- added Adyen (credit card) and PayPal Payment Gateways support
- updated urls of Magento REST endpoints

### Falcon Payment Plugin v0.0.1

- initial release

### Falcon Adyen Plugin v0.0.1

- initial release

### Falcon PayPal Plugin v0.0.1

- initial release

---

## Falcon v1.0 RC2 (2019-03-13)

### Falcon Client v0.3.1 (2019-03-13)

- added `.browserslistrc` support for javascript, fixed #293
- added support for normal module replacement
- HTML5 autocomplete on checkout address form
- introduced `graphqlProxy` config flag to control GraphQL proxy via Falcon-Client route
- added possibility to override any component with custom implementation
- updated `ApolloClient` to the latest version with built-in local state management
- fixed issues with handling cookies when Falcon Server runs under a different domain than Falcon Client
- fixed issues with address autocompletion on checkout page
- fixed configuration of loadable components

### Normal Module Override Webpack Plugin v0.0.1 (2019-03-13)

- feat: first version of Normal Module Override Webpack Plugin

### Falcon Magento2 API v0.3.1 (2019-03-13)

- fixed problems with fetching store configurations for logged in users when Falcon Server is restarted

---

## Falcon v1.0 RC (2019-02-14)

### Falcon Shop Extension v0.3.0 (2019-02-14)

- updated schema to handle filters correctly

### Falcon Magento2 API v0.3.0 (2019-02-14)

- added filters implementation
- updated endpoint for placing order so it's compatible with falcon-magento2-module v3.0.0
- added fetching of dynamic menu

### Falcon E-commerce UI Kit v0.3.0 (2019-02-14)

- added `SearchProvider` with `SearchContext` that handles basic filtering
- added handling of dynamic menu
- updated `ApolloClient` to the newest version (v2.5.1)

### Falcon Client v0.3.0 (2019-02-14)

- fixed offline mode

### Falcon Server v0.3.0 (2019-02-14)

- fixed missing dependencies (`core-js`) issue

---

## Falcon v0.3 (2019-01-18)

### Falcon Client v0.2.0 (2019-01-18)

- improvement: React 16.6 support
- added support for scss with css modules

### Falcon Server v0.1.1 (2019-01-18)

- refactor: `Events` enum has been moved from `falcon-server` to `falcon-server-env` package

### Falcon Magento2 API v0.2.0 (2019-01-18)

- changed url resolver to use new format of data sent by `/url` endpoint
- added support for fetching breadcrumbs from new endpoint
- added support for product list sorting
- modified fetching of category products - now it uses `/categories/{id}/products` endpoint
- added aggregations parsing for ProductList

### Falcon UI v0.2.0 (2019-01-18)

- feat: added `Menu` component

### Falcon E-commerce UI Kit v0.2.0 (2019-01-18)

- feat: added queries and mutations for:
  - getting all orders and by id
  - addresses operations (add new address, remove address, change address)
  - editing customer information and changing password
- feat: added `CheckboxFormField`
- improvement: extracted `Field` component in order to improve support for custom `FormField`'s component
- added `SortOrderProvider` which handles fetching and setting sort options for product lists

### Falcon Shop Extension v0.2.0 (2019-01-18)

- feat: introduced resolver `addresses: AddressList` in order to retrieve all customer addresses, added types `EditAddressInput`, `AddAddressInput`

---

## Falcon v0.2 (2018-12-12)

### Falcon Client v0.1.0 (2018-12-12)

- feat: support for Google Analytics added
- improvement: removed razzle
- feat: added translations for common app areas (except checkout)

### Falcon Server v0.1.0 (2018-12-12)

- feat: Basic Cache implementation was introduced
- feat: (Breaking change) changed Event flow for ApiContainer and its entries - every ApiDataSource instance is being
  created on GQL request
- feat: added `backendConfig` Query type
- feat: `type BackendConfig`, `enum SortOrderDirection`, `input SortOrderInput` were introduced in the base Schema
- fix: added separate `endpoints` config section and dedicated base class
- refactor: `Events` enum has been moved from `falcon-server` to `falcon-server-env` package

### Falcon UI v0.1.0 (2018-12-12)

- docs: comprehensive documentation added
- feat: support for keyframe animations defined in theme

### Falcon Theme Editor v0.1.0 (2018-12-12)

- feat: inspect mode, more props, improved performance, layout tweaks

### Falcon E-commerce UI Kit v0.1.0 (2018-12-12)

- feat: basic blog UI (listing posts, displaying single post)
- feat: added queries and mutations for cart operations (add to cart, remove from cart, change cart item)
- feat: added queries and mutations for sign in / sign out operations
- feat: added `ProtectedRoute` and `OnlyUnauthenticatedRoute` route components
- feat: added queries and mutations for checkout process and implemented checkout logic abstraction
- feat: added `Form` component which provides translation context for `FormField`s

### Create Falcon App v1.1.1 (2018-12-12)

- feat: allow ejecting `falcon-ecommerce-uikit` package via `eject` command

### Create Falcon App v1.0.7 (2018-10-25)

- docs: updated documentation
- fix: fixed problem with React 16.6.0

### Falcon Server Env v0.1.0 (2018-12-12)

- feat: Provided `Cache` wrapper class and built-in `InMemoryLRUCache` cache provider
- feat: added getter and setter methods to work with "named" session object from the context in ApiDataSource
- feat: `ApiDataSource` and `Extension` models are now accept `eventEmitter` instance
- feat: Provided `EndpointManager` base class
- feat: Base `Extension` class provides auto-binding for its own GraphQL Schema to the assigned ApiDataSource instance
  (via `getGraphQLConfig()` method)

### Falcon Magento2 API v0.1.0 (2018-12-12)

- feat: Magento Admin token is now being stored in cache

### eject-ts v0.1.0 (2018-12-12)

- feat: eject-ts CLI

### Falcon-i18n v0.0.4

- feat: added `i18nProvider` with `I18n` and `T` components to ease internationalization support

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
