---
title: Basics
---

This is a `@deity/falcon-client` host for your application.

DEITY PWA Frontend is the entrypoint for frontend features of Falcon stack. It acts as host for your project - provides app building capabilities and features set which can be used to create your desired shop application.

## Installation

<!--DOCUSAURUS_CODE_TABS-->
<!--npm-->

```bash
npm install @deity/falcon-client
```

<!--Yarn-->

```bash
yarn add @deity/falcon-client
```

<!--END_DOCUSAURUS_CODE_TABS-->


## Quick Start

Use the project generator:

Out of the box, it connects to a public back-end service (Magento & WordPress), so you can start developing right away.

## Exposed Commands

DEITY PWA Frontend exposes set of handy commands:

```bash
falcon-client start
```

Runs the project in development mode. You can view your application at `http://localhost:3000`.

The page will reload if you make edits (both backend and frontend HMR is enabled).

```bash
falcon-client start -- --inspect=[host:port]
```

To debug the node server, you can use `falcon-client start --inspect`. This will start the node server and enable the inspector agent. The `=[host:port]` is optional and defaults to `=127.0.0.1:9229`. For more information, see [this](https://nodejs.org/en/docs/guides/debugging-getting-started/).

```bash
falcon-client start -- --inspect-brk=[host:port]
```

This is the same as --inspect, but will also break before user code starts. (to give a debugger time to attach before early code runs) For more information, see [this](https://nodejs.org/en/docs/guides/debugging-getting-started/).

```bash
rs
```

If your application is running, and you need to manually restart your server, you do not need to completely kill and rebundle your application. Instead you can just type `rs` and press enter in terminal.

```bash
falcon-client test
```

Runs the test watcher (Jest) in an interactive mode.
By default, runs tests related to files changed since the last commit.

If you want to know more about how to test, see [this](#testing)

```bash
falcon-client build
```

Builds the app for production, and outputs to the `./build` folder.

The build is minified and the filenames include the hashes. Your app is ready to be deployed!

```bash
falcon-client size
```

Runs an interactive zoomable treemap of output files to visualize their size. Report will be automatically open in default browser at `http://localhost:8888`.

## Routing

In-app routing is based on [react-router](https://github.com/ReactTraining/react-router) in version 4. If you are not familiar with it, see [this](https://reacttraining.com/react-router/web/example/basic)

### Falcon Dynamic Routing

[TODO]

## PWA

Falcon client offers wide range of Progressive Web App features out of the box

### Webmanifest

The web app manifest provides information about an application (such as its name, author, icon, and description) in a JSON text file. The manifest informs details for websites installed on the homescreen of a device, providing users with quicker access and a richer experience.

For more information, see [this](https://developer.mozilla.org/en-US/docs/Web/Manifest).

Web App Manifest file should be located in `./src/manifest.webmanifest` and could be edited according to your needs. Pleas bear in mind that paths to icons files should be relative:

```json
{
  "icons": [
    { "src": ".//img/opensource/logo.svg", "sizes": "48x48", "type": "image/svg" }
  ]
}
```

During build process webpack will take care about resolving file paths and generating hashes in order to improve file caching.

### Web Cache

All files emitted by webpack build into `./build/public/static/` directory contain hash part in file name, which is generated from its content. It allow us to set browser cache via setting `Cache-Control: max-age=31536000` header, which is 1 year.

### Service Worker

Production build generate Service Worker (file `./build/static/sw.js`) which is automatically installed in web browser. It cache all files from `./build/public/` and turns on offline capabilities.

For more information see [this](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorker)

## SEO

To make your shop SEO-friendly, following mechanisms are involved out of the box

### Server Side Rendering

SSR take place when a website is first opened. All operations are carried out on the server and the browser gets an HTML with all information, same as with typical websites with static pages which search engines can index. After JavaScript is loaded the web turns into a "single page app" and works respectively.

### Dynamic meta description

Page title and other meta tags can be dynamically changed directly in `jsx` in any place of your page. It is achieved via [react-helmet](https://github.com/nfl/react-helmet).

To change page title or add any kind of meta tag (e.g. [Open Graph Protocol](http://ogp.me/)) you need to wrap them by `<Helmet />` component:

```jsx
<Helmet defaultTitle="My Shop" titleTemplate="%s | My Shop">
  <meta name="description" content="This is My Shop powered by Deity Falcon" />
  <meta name="theme-color" content="#fff" />
</Helmet>
```

For more examples see [this](https://github.com/nfl/react-helmet#reference-guide)

## Analytics

### Google Analytics

[TODO]

### Google Tag Manager

[See more](https://marketingplatform.google.com/about/tag-manager/)

#### Configuration

you can configure Google Tag Manager via `config` property in `config/default.json`.

`googleTagManager: object`

- `id: string`: (default `null`) Google Tag Manager ID

```json
{
  "googleTagManager": {
    "id": "id"
  }
}
```

## Development

### Styles

`falcon-client` provides out of the box support for `css` and `scss`, and you should write them in `*.css` and `*.scss` files accordingly.

However, css modules convention is also supported [see the details](https://github.com/css-modules/css-modules). To make it work you need to add `module` prefix to the file extension. For example, vanilla css with modules should be located in `*.module.css`, and scss with modules in `*.module.scss`.

### Internal Server Error page

`falcon-client` provide default error page for http 500 error. You can override it and provide your own by placing `500.http` file in `./views/errors/` directory.

## Testing

### Mocking `falcon-client`

`falcon-client` exposes `FalconClientMock` component which allows you to setup application context inside unit test environment.
`FalconClientMock` can receive props for mock version of React context provider components used by `falcon-client` internally:

- `apollo: object` - props for `MockProvider` component from `react-apollo`
- `router: object` props for `MemoryRouter` component from `react-router-dom`
- `asyncComponent: object` - props for `AsyncComponentProvider` component from `react-async-component`
- `i18next: object` - props for `I18nextProvider` component from `react-i18next`

example unit test with `FalconClientMock` :

```jsx
import { FalconClientMock } from '@deity/falcon-client/test-utils';

describe('<Component />', () => {
  test('renders without exploding', () => {
    ReactDOM.render(
      <FalconClientMock>
        {
          // your <Component />
        }
      </FalconClientMock>,
      document.createElement('div')
    );
  });
});
```
