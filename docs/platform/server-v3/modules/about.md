---
id: about
title: Modules in Falcon Server
sidebar_label: About
enterprise_only: true
---

## List of available modules

- [BigCommerce module (shop)](../../integration/bigcommerce/overview)
- [CommerceTools module (shop)](../../integration/commercetools/overview)
- [Magento2 module (shop)](../../integration/magento2/overview)
- [Contentful module (blog)](../../integration/contentful/overview)
- [WordPress module (blog)](../../integration/wordpress)
- [Algolia search module (search)](../../integration/algolia)

## What is a module in Falcon

Falcon Module is a package that contains implementations of all the pieces required to achieve a particular thing. Falcon Module needs to exports their content via named export, default export will be ignored. Falcon Server expects only known Module extension classes, anything else, which is outside of the predefined list will be ignored:

- [Data Source](./common-services/data-sources) - Used by GraphQL resolvers to fetch the data from various services. By default, Falcon Module can contain only one implementation of it due to auto-discovery. However, by using our Dependency Injection framework, you can define more of them, please read more about that in [Falcon Module and Dependency Injection](#falcon_module_and_dependency_injection) section.
- [Rest Endpoint Handler](./common-services/rest-endpoints) - REST webhook handler allows you to execute any action for incoming HTTP requests. A module can contain any number of it.
- [Event Handler](./common-services/event-handlers) - Handler for in-proc emitted events. a module can contain any number of it.

However, Falcon Module allows you to compose code according to [Inversion of Control](https://en.wikipedia.org/wiki/Inversion_of_control) principle, which is helpful with a large codebase and makes unit-testing easier. We highly recommend this approach. The Falcon Module needs to export the following:

- [Falcon Module](./module-api) - Structured representation of module definition. Falcon Module can contain only one implementation of it.

### Old vs new approach

In previous versions of Falcon Server (version 2), there was a distinct separation between extensions, API clients, rest endpoint handlers, and event handlers. Each of these needed to be implemented and loaded as a separate package. Falcon Server 3 changes that approach and introduces the concept of a module.

So in comparison to Falcon Server 2, Falcon Module it's a container that groups all the above things as one package.

In Falcon Server v2 it was necessary to add multiple packages to have full coverage of features. If we consider shop features that will be handled service X (Magento, BigCommerce, CommerceTools, etc) the following packages are required:

- `@deity/falcon-shop-extension` that provides GraphQL schema for shop features
- `@deity/falcon-X-api` that provides resolvers and all the calls to service X (implements the shop features)
- `@deity/falcon-X-endpoints` that provides REST handlers (e.g. webhooks, or callbacks for payments)
- `@deity/falcon-X-event-handlers` that provides handlers for events in Falcon Server (if such are required)

In Falcon Server v3 you need only:

- `@deity/falcon-X-extension` that provides GraphQL schema for a specified feature e.g. shop or blog
- `@deity/falcon-X-module` that provides an implementation of all the required things in one package

## Module and extension relation

Please keep in mind that extension packages are still needed, as extensions provide GraphQL schema that will be exposed to GraphQL clients.
So now, the two things need to be provided:

- extension which is an "interface" for a particular feature
- module which is an "implementation" of that feature

## Configuring a module

In order to enable a module in Falcon Server, you need to add its configuration into the `config.json` (normally `server/config/default.json`) file under the `"modules"` section.

```json
{
  "modules": {
    "my-module": {
      "package": "<path>"
    }
  }
}
```

As you can see, Falcon Server expects a key-value map of modules in most cases, the order does not matter. There are some exceptions to this e.g. search modules should be configured last.

We recommend adding it in `config/default.json` file so it will be available no matter what mode (`development`, `production` or any custom) Falcon Server is running. If a module requires some credentials or secrets (sensitive configuration) then that configuration can be added in `config/local.json`. See configuration guide for more details.

Module configuration can be described in following way:

```ts
type ModuleConfiguration = {
  package: string;
  enabled?: boolean;
  config?: Record<string, any>;
};
```

- `package: string` - path to Module entry point, tells Falcon Server wherefrom the module should be loaded. It can be an `npm` package name (e.g. `@deity/falcon-magento2-module`), which of course needs to be installed, so added to `package.json` file it can be `npm` package name or path relative to the root of your server application to a local module placed inside application folder (e.g. `./src/my-module`).
- `enabled?: boolean` - determines if the module should be loaded, it is optional, the default value is `true`
- `config?: Record<string, any>` - configuration associated with a module, this is a place for any module-specific configuration, it is optional

So let's assume that we want to add a Deity Falcon module that fetches the data from WordPress. Then you can use the following snippet in your `config/default.json` file:

```json
{
  "modules": {
    "wordpress": {
      "package": "@deity/falcon-wordpress-module",
      "config": {
        "configKey": "configValue"
      }
    }
  }
}
```

In the case of using local module it would be:

```json
{
  "modules": {
    "wordpress": {
      "package": "src/custom-wordpress-module",
      "config": {
        "configKey": "configValue"
      }
    }
  }
}
```

and then Falcon Server on startup will try to load `src/custom-wordpress-module/index.js` file.

### Configure Module in a programmatic way

**TODO: decide if we want to describe it in official docs**

---

## Custom modules

All the integrations available in Falcon Platform are implemented as extensions + modules. When you want to add new features or change the existing behavior you'll need to add [Extension](../extensions/about) and a module that implements features for that Extension.

Modules can be registered in 2 ways - with an auto-discovery mechanism or manually.

### Module auto-discovery

[As mentioned earlier](#what-is-a-module-in-falcon) Falcon Server 3 modules can expose multiple things at once.

The easiest way to extend Falcon Server with a custom module is to extend the classes provided by Falcon Server and export these from a module. During startup Falcon Server will read everything from within that module and base on the base types of exported things it will register these as proper things in IOC container. Falcon Server accept only [Data Sources](./common-services/data-sources), [Rest Endpoint Handlers](./common-services/rest-endpoints) and [Event Handlers](./common-services/event-handlers), anything else will be ignored. But if your module exports [Falcon Module](./module-api) then only it will be loaded according to [Manual binding for module](#manual-binding-for-module)

See examples of [Data Sources](./common-services/data-sources), [Rest Endpoint Handlers](./common-services/rest-endpoints) and [Event Handlers](./common-services/event-handlers) for the details.

### Manual binding for module

When you need to add a custom behavior to Falcon Server which is more complex or when you need to control lifetime of the instances of your modules you might want to implement the module in a manual way.

In that case, you need to implement all the classes as usual and then use [Falcon Module](./module-api) to register these classes to be loaded and instantiated in a particular way.

[Module auto-discovery](#module-auto-discovery) mechanism will not be executed, so you need to care about every registration by yourself.
