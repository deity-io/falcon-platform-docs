---
id: about
title: About Falcon Server
sidebar_label: About
enterprise_only: true
---

## Overview

The focus for Falcon Server 3 is to provide much better internal structure which leads to much more possibilities when it comes to extending entire platform.

In order to do so we have implemented inversion of control pattern based on [InversifyJS](https://github.com/inversify/InversifyJS). Thanks to this developers have much more control over the way how extensions are loaded, initialized and managed during request processing.

Additionally, all the subsystems ([Event Handlers](./event-handlers), [Data Sources](./data-sources), [Rest Endpoints](./rest-endpoints)) of Falcon Server use now the same mechanism and can be registered in the same way.

See [Modules](./modules) section for more information.
