---
title: Installation
---

There are 2 possible ways of installing DEITY Falcon (depends on what you want to do):

1. Install DEITY Falcon within an example template (using [`create-falcon-app`](#create-falcon-app-cli-tool))
2. Install DEITY Falcon [sources](#development) to work on Falcon itself

## Create Falcon App (CLI tool)

This CLI tool helps you to create your application based on [DEITY Falcon](https://github.com/deity-io/falcon) with just one command.

## TL;DR

Generate your app with:

<!--DOCUSAURUS_CODE_TABS-->
<!--npx-->

```bash
npx create-falcon-app my-app
```

<!--Yarn-->

```bash
yarn create falcon-app my-app
```

<!--END_DOCUSAURUS_CODE_TABS-->

then run the server app in one terminal:

```bash
cd my-app/server
npm start
```

and the client app in the second terminal:

```bash
cd my-app/client
npm start
```

then open http://localhost:3000 in your browser

![DEITY create-falcon-app](/img/opensource/create-falcon-app.gif)

## Longer version

### How to generate application

You can use either npx (installed with npm) or yarn to generate the application.

If you prefer yarn use `yarn create` with the syntax below (notice space between `create` and `falcon-app`):

<!--DOCUSAURUS_CODE_TABS-->
<!--npx-->

```bash
npx create-falcon-app my-app
```

<!--Yarn-->

```bash
yarn create falcon-app my-app
```

<!--END_DOCUSAURUS_CODE_TABS-->

> Note: Please do not install the package globally

That command will create a `my-app` folder with 2 folders inside:

```
my-app/
 |- server
 |- client
```

Folder `server` contains the server application which is responsible for communication with external APIs and services.
Folder `client` contains the client application responsible for front-end rendering.

Once `npx create-falcon-app my-app` or `yarn create falcon-app my-app` is done you can start both services. In one terminal window run the following commands to start the server part:

```bash
cd my-app/server
npm start # or yarn start
```

in the second terminal run the following commands to start the client part:

```bash
cd my-app/client
npm start # or yarn start
```

### Selecting the template for your project during generation

Currently we provide just one template for the generator which delivers basic features of shop and blog (the template itself is called [shop-with-blog](https://github.com/deity-io/falcon/tree/master/examples/shop-with-blog).

In the future we'll provide more templates that can be selected with an `--example` option. Full command that uses `shop-with-blog`  in that case will be as following:

```bash
npx create-falcon-app --example shop-with-blog my-app
```

You can also use `npx create-falcon-app -h` (or `yarn create falcon-app -h`) to get the list of the available templates and options.

### Using your backend services

By default the `shop-with-blog` example uses demo Magento 2 and WordPress servers provided by DEITY so you can check how DEITY Falcon works. If you cannot start the server part (from within the server folder) or you see any problems with server behavior please contact us via our [community slack channel](http://slack.deity.io).

#### Magento 2

If you want to connect the generated app to your own Magento 2 backend you will need to install the
[Falcon Magento2 module](https://github.com/deity-io/falcon-magento2-module) which delivers REST endpoints required
by DEITY Falcon and change the [configuration file of your Falcon-Server](/docs/open-source/miscellaneous/config)
to point the application to the correct url.

See [Installing Magento 2 Module](/docs/open-source/backend/installing-magento2) for more.

#### Wordpress

Also if you want to connect a DEITY Falcon application to your WordPress server, you'll have to install
[Falcon WordPress module](https://github.com/deity-io/falcon-wordpress-module) and also change the
[configuration file of your Falcon-Server](/docs/open-source/miscellaneous/config) to point the application to the correct server.

See [Installing Wordpress 2 Module](/docs/open-source/backend/installing-wordpress) for more.

## Development

If you want to help us building new features or fixing any [reported issues](https://github.com/deity-io/falcon/issues) for Falcon,
there are several simple steps required:

- You need to [fork](https://help.github.com/articles/fork-a-repo/) DEITY [Falcon](https://github.com/deity-io/falcon) repository
- Create a [local clone of your fork](https://help.github.com/articles/fork-a-repo/#step-2-create-a-local-clone-of-your-fork)
- Navigate to your local clone folder and run `yarn` command (which is required for local development)
- You are ready to go!

> `yarn` is required to be installed to work with [Lerna](https://lerna.js.org/) to ensure a proper Falcon's
[mono-repository](https://developer.atlassian.com/blog/2015/10/monorepos-in-git/) installation.

Yarn will:

- Install all required packages
- Create symlinks between Falcon packages for you, so you don't have to bother about that
- Pre-build (compile) all required packages for you

Having this setup locally - you could use any of `examples` for local development, all examples
will get Falcon packages "installed" (symlinked) directly from your local folder.

### Package naming conventions

Back-end packages (`FalconServer`):

- `falcon-X-extension` - represents a module that should be used within a FalconServer app in order
to provide an abstract (higher-level) access to the data (shop, blog, CRM etc)
- `falcon-X-api` - represents a module that should act as a "transport" layer between an extension
and a certain back-end (REST API, remote GraphQL, service, database etc)

Front-end packages (`FalconClient`):

- `falcon-X-plugin` - represents a module that should be used within a FalconClient app in order to provide
UI/UX (front-end) enhancements to the "client" application (analytics, maps, widgets etc)
