---
id: extensions
title: Extensions in Falcon Server
sidebar_label: Extensions
enterprise_only: true
---

The top level code organization unit in Falcon Server is an extension. It defines the GraphQL schema (so possible queries and mutations)
that Falcon Server will expose to the clients.

All the features available via GraphQL API exposed by Falcon Server are delivered as extensions and can be enabled/disabled separately.

Falcon Server provides its own base GraphQL Schema, that defines data types, queries
and mutations, so every Extension could use its types and extend them.

Currently, DEITY provides the following list of officially supported extensions:

- [`@deity/falcon-shop-extension`](./shop-extension)
- [`@deity/falcon-blog-extension`](./blog-extension)

## Features of extensions

The most important feature of extensions is capability of extending GraphQL schema, so providing new features to Falcon Server clients. 

Besides that extensions can also do multiple things related to GraphQL execution.

_(coming soon)_

## Custom extensions

In order to expose new features to the clients of Falcon Server you'll need to add your own extension.

### The simplest case

The simplest extension consists of 2 files:

- `schema.graphql` that provides GraphQL schema and types

- `JavaScript file` that provides empty function that will be executed during application startup

_(coming soon)_

### Extension that modifies GraphQL context

_(coming soon)_






