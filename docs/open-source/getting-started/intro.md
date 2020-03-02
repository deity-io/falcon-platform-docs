---
id: intro
title: Introduction
---

DEITY Falcon is a platform agnostic, stand-alone but modular library to be used to easily build decoupled PWA websites. [Check out the repository here](https://github.com/deity-io/falcon)

## Technologies inside

- NodeJS
- GraphQL
- React
- Apollo
- Koa
- Webpack
- Jest

## Community

Any contributions, small or big, are very welcome! Please take a look at our [Contributor guidelines](https://github.com/deity-io/falcon/blob/master/.github/CONTRIBUTING.md) and [Code of Conduct](https://github.com/deity-io/falcon/blob/master/.github/CODE_OF_CONDUCT.md)

Join the official chat channel

[Deity Community Slack](http://slack.deity.io)

## Core concepts

DEITY Falcon was built with the F.I.R.E. principal in mind:

- **Flexible** - Allow you to build any kind of website; e-commerce, blogs, portfolio's, you name it
- **Integrable** - Allow you to integrate any kind of data source with it
- **Reliable** - You do not have to worry about high traffic and scalability
- **Extensible** - Allow you to extend your project with as many custom features as necessary

### Client-Server concept

The main idea that stands behind having separate applications for Client and Server parts
is to provide developers/project owners/DevOps with scaling abilities:

- You can define special server requirements for a Falcon Server instance, but keeping the Falcon Client
server instance more "lightweight"
- You can have multiple Falcon Client instances (geo-distributed) connected to a single Falcon Server application
- Falcon Server is stateless, so you could scale it up as you need (for example, you don't want to be stuck
with a single Falcon Server instance while supporting your mobile visitors with a dedicated application
that uses Falcon Server as data provider)

### Extension-API concept

Falcon Server itself does not provide any data, but rather acts as a glue for your data extensions.
As a result of its work - Falcon Server generates a unified [GraphQL](https://graphql.org/) Schema
that can be used by GraphQL Clients to work with the data.

#### Falcon Extension

Falcon Server uses **Extension** as an abstract layer to work with a specific *entity* (for example,
`shop-extension`, `blog-extension`, etc) in order to provide "agnostic" data access and be a
platform-independent data provider.

Falcon Extension must define abstract Queries, Mutations and types as a part of Falcon Server API, which
will be "stitched" into the unified GraphQL Schema by Falcon Server. All defined methods must be proxied
to the assigned Falcon API (defined in Falcon Server [configuration](/docs/open-source/falcon-server/basics#extensions-configuration)).

#### Falcon API

Falcon Extension uses **API** as a transport layer to work with a specific back-end service (for example,
`magento-api`, `wordpress-api` etc), which has to implement all Queries and Mutations methods along with
resolved GraphQL Types (data structures) defined by Falcon Extension.

For example, `wordpress-api` is created as a transport layer for `blog-extension`, that means that `wordpress-api`
class must deliver all required Queries and Mutations defined in `blog-extension` GraphQL Schema and match
its GraphQL types (Falcon Extension does not care how this data is being fetched and pre/post-processed by
Falcon API, it's important to "meet" the schema definition). All optional methods depend on the Extension configuration.

## Overall DEITY Falcon data flow schema

![DEITY Falcon schema](assets/falcon-schema.png)
