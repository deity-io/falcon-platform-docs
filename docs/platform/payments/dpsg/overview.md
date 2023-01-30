---
id: overview
title: Overview
sidebar_label: Overview
---

Our payment service is available to all Deity platform users. It acts as a middleman between payment providers and Falcon server.

It exposes various REST Api endpoints for doing things like querying payment methods, making payments and storing payment methods.

Alongside this it always exposes a message queue that Deity Platform subscribes to. This publishes events such as payment updates after refunds.

## Payment Service Swagger

Our payment service exposes a public swagger so you can use for testing and documentation. Make sure you visit the instance you will be using and your payment profile is set up on.

- **EU (Default)**: [https://dpsg.deity.cloud/](https://dpsg.deity.cloud/)
- **US**: [https://dpsg.us.deity.cloud/](https://dpsg.us.deity.cloud/)
- **AU**: [https://dpsg.au.deity.cloud/](https://dpsg.au.deity.cloud/)

### Swagger Authorization

To use the public swagger you'll need your payment profile credentials.

You will need to use `token` based authorization.

Your token will be `[SERVICE_USER]:[SERVICE_TOKEN]`. It will look something like this:

`project:environment:profile:123456`
