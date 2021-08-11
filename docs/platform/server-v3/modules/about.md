---
id: about
title: Modules in Falcon Server
sidebar_label: About
enterprise_only: true
---

## List of available modules

- [BigCommerce module (shop)](./bigcommerce-module)
- [CommerceTools module (shop)](./commercetools-module)
- [Magento2 module (shop)](./magento2-module)
- [Contentful module (blog)](./contentful-module)
- [WordPress module (blog)](./wordpress-module)
- [Algolia search module (search)](./algolia-search-module)

## Old vs new approach

In previous version of Falcon Server (version 2) there was a distinct separation between extensions, api clients, rest endpoint handlers and event handlers. Each of these needed to be implemented and loaded as a separate package. Falcon Server 3 changes that approach and introduces concept of a module. 

## What is a module in Falcon

Falcon Module is a package that contains implementations of all the pieces required to achieve particular thing. It can contain none, one or many of these:
- [Data Source](./data-sources) (used by GraphQL resolvers to fetch the data from various services)
- [Event Handler](./event-handlers)
- [Rest Endpoint Handler](./rest-endpoints) (webhook handler)
- anything else that's needed during request handling

So in comparison to Falcon Server 2 it's a container that groups all the above things as one package.

In Falcon Server 2 it was necessary to add multiple packages to have full coverage of features. If we consider shop features that will be handled service X (Magento, BigCommerce, CommerceTools etc) the following packages ere required:
- `@deity/falcon-shop-extension` that provides GraphQL schema for shop features
- `@deity/falcon-X-api` that provides resolvers and all the calls to service X (implements the shop features)
- `@deity/falcon-X-endpoints` that provides REST handlers (e.g. webhooks, or callbacks for payments)
- `@deity/falcon-X-event-handlers` that provides handlers for events in Falcon Server (if such are required)

In Falcon Server you need only:
- `@deity/falcon-shop-extension` that provides GraphQL schema for shop features
- `@deity/falcon-X-module` that provides implementation of all the required things in one package

## Module and extension relation

Please keep in mind that extension packages are still needed, as extension provide GraphQL schema that will be exposed to GraphQL clients. 
So now, the 2 things need to be provided:
- extension which is an "interface" for a particular feature
- module which is an "implementation" of that feature

## Custom modules

All the integrations available in Falcon Platform are implemented as extensions + modules. When you want to add new features or change the existing behavior you'll need to add [Extension](./extensions) and module that implements features for that Extension.

Modules can be registered in 2 ways - with auto-discovery mechanism or manually.

### Adding module

In order to enable a module in Falcon Server you need to first add it in the configuration file under `"modules"` section. We recommend adding it in `config/default.json` file so it will be available no matter what mode (development, production or custom) Falcon Server is running. 
If a module requires some credentials or secrets (sensitive configuration) then that configuration can be added in `config/local.json`. See configuration guide for more details.

So let's assume that we want to add a Deity Falcon module that fetches the data from WordPress. Then you can use the following snippet in your `config/default.json` file:

```json
{
  ...
  "modules": {
    ...
    "wordpress": {
      "package": "@deity/falcon-wordpress-module",
      "config": {
        "configKey": "configValue"
      }
    }
  },
  ...
}
```

The `package` field is required, as it tells Falcon Server where from the module should be loaded. It can be a npm package name (which of course needs to be installed, so added to `package.json` file) or path to a local module placed inside application folder.

In case of local module it would be:

```json
{
  ...
  "modules": {
    ...
    "wordpress": {
      "package": "src/custom-wordpress-module",
      "config": {
        "configKey": "configValue"
      }
    }
  },
  ...
}
```

and then Falcon Server on startup will try to load `src/custom-wordpress-module/index.js` file.


### Module auto-discovery

[As mentioned earlier](#what-is-a-module-in-falcon) Falcon Server 3 modules can expose multiple things at once. 

The easiest way to extend Falcon Server with custom module is to extend the classes provided by Falcon Server and export these from a module. During startup Falcon Server will read everything from within that module and base on the types of exported things it will register these as proper things in IOC container.

See examples of [Data Sources](./data-sources), [Event Handlers](./event-handlers), and [Rest Endpoint Handlers](./rest-endpoints) for the details.

### Manual binding for module

When you need to add a custom behavior to Falcon Server which is more complex or when you need to control lifetime of the instances of your modules you might want to implement the module in a manual way.

In that case you need to implement all the classes as usual and then use [Falcon Module](./falcon-module) to register these classes to be loaded and instantiated in a particular way.

