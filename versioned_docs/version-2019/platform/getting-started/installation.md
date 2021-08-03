---
title: Installation
---

There are 2 possible ways of installing DEITY Falcon (depends on what you want to do):

1. Install DEITY Falcon within an example template (using [`create-falcon-app`](#create-falcon-app-cli-tool))
2. Install DEITY Falcon [sources](#development) to work on Falcon itself

## Create Falcon App (CLI tool)

This CLI tool helps you to create your application based on DEITY Falcon with just one command.

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

Currently we provide just one template for the generator which delivers basic features of shop and blog (the template itself is called `shop-with-blog`.

In the future we'll provide more templates that can be selected with an `--example` option. Full command that uses `shop-with-blog`  in that case will be as following:

```bash
npx create-falcon-app --example shop-with-blog my-app
```

You can also use `npx create-falcon-app -h` (or `yarn create falcon-app -h`) to get the list of the available templates and options.

### Using your backend services

By default the `shop-with-blog` example uses demo Magento 2 and WordPress servers provided by DEITY so you can check how DEITY Falcon works. If you cannot start the server part (from within the server folder) or you see any problems with server behavior please contact us via our [community slack channel](http://slack.deity.io).

#### Magento 2

If you want to connect the generated app to your own Magento 2 backend you will need to install the
Falcon Magento2 module which delivers REST endpoints required
by DEITY Falcon and change the [configuration file of your Falcon-Server](../miscellaneous/config)
to point the application to the correct url.

See [Installing Magento 2 Module](../backend/installing-magento2) for more.

#### Wordpress

Also if you want to connect a DEITY Falcon application to your WordPress server, you'll have to install
Falcon WordPress module and also change the
[configuration file of your Falcon-Server](../miscellaneous/config) to point the application to the correct server.

See [Installing Wordpress 2 Module](../backend/installing-wordpress) for more.
