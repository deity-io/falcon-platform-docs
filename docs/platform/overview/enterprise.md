---
id: enterprise
title: Falcon Platform vs Falcon Open source
sidebar_label: Falcon Platform vs Falcon Open source
---

Falcon is available as both an enterprise product and an <a href="https://github.com/deity-io/falcon" target="_blank" rel="noopener noreferrer">open source product</a>.

## Falcon Platform

<img src="/img/docs/platform/falcon-pl-icons.png" alt="Falcon Platform Infographic" width="200" style={{margin: '10px 0'}} />

- PWA frontend
- Latest code and features
- Hosting / Deployments with DEITY Cloud
- 24/7 Monitoring & a 99.9% uptime agreement.


## Falcon Open Source

<img src="/img/docs/platform/falcon-os-icons.png" alt="Falcon Open Source Infographic" width="200" style={{margin: '10px 0'}} />

- PWA frontend


To have access to the **latest codebase**, **features** and **Falcon Cloud** you'll need to create a Falcon Platform account. You can do that by <a href="https://deity.io/contact" target="_blank" rel="noreferrer noopener">contacting our team</a>. Falcon Platform is more performant and developer friendly.

The docuementation for the open source version can be [found here](/docs/open-source/getting-started/intro).


## Falcon Platform Key Features

- To improve the customization and flexibility of the components - Falcon E-commerce UI Kit package has been discontinued (falcon-ecommerce-uikit). Instead falcon-front-kit, falcon-ui-kit, falcon-data, falcon-shop-data and falcon-blog-data were introduced (alongside with breaking changes to adopt these packages).

- React has been update to v16.10 (**including hooks support**!)

- Added Apollo Hooks support!

- Improved code redistribution across chunks (webpack config) 

### Falcon Front Kit:
During the ecommerce-uikit split - Falcon has migrated to Formik 2.0.
Added SwitchDynamicURL component in order to define dynamic URL routes in react/react-router v4 way
Multiple improvements related to Query/Mutation loading and error states

The purpose of this package is to provide functional components that work tightly with Shop Extension types to ensure the correct data flow but at the same time it does not expose any UI elements, leaving this part to be implemented on the project level.

Falcon Shop Data and Falcon Blog Data - are set of Queries and Mutations to be used with Shop and Blog Extensions.

Falcon UI Kit - is a set of UI components that use Falcon UI to represent shop elements.

### Falcon Shop Extension:
As a part of the major release - some GraphQL types have been updated, mostly related Customer and Checkout types

### FalconServer:
- The package has been fully migrated to TypeScript
- Changed the flow of Extension Containers, whereby Extension base class has been removed in favor of a cleaner code
- Now every schema.graphql file of extension needs to be placed in the root of the package
- Custom Extensions can deliver their own schemaDirectives now, which will be properly merged into the main Schema
- Improved BackendConfig fetching technique (asynchronously in parallel)
- Improved Cache calls

## Falcon Server Env:
Fixed the way of providing extra resolvers for ApiDataSource via ApiDataSource.getExtraResolvers static method

### Falcon Magento 2 API
partially migrated to TypeScript (the migration will be completed during the following minor releases)

### Falcon-scripts
Introduced falcon-scripts package to provide developers with an easy way of compiling/building their packages with zero-configuration (TypeScript supported).
