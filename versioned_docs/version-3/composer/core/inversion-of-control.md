---
id: inversion-of-control
title: Inversion of control
description: Inversion of control
sidebar_label: Inversion of control
enterprise_only: true
---

import NoticeV3 from "../../includes/upgrade-to-v3.mdx"

<NoticeV3 />

_(todo: This page needs more general, high level information about Falcon Server)_

## Falcon Server 3

The focus for Falcon Server 3 is to provide much better internal structure which leads to much more possibilities when it comes to extending entire platform.

In order to do so we have implemented inversion of control pattern based on [InversifyJS](https://github.com/inversify/InversifyJS). Thanks to this developers have much more control over the way how extensions are loaded, initialized and managed during request processing.

Additionally, all the subsystems ([Event Handlers](../modules/common-services/event-handlers.md), [Data Sources](../modules/common-services/data-sources.md), [Rest Endpoints](../modules/common-services/rest-endpoints.md)) of Falcon Server now use the same mechanism and can be registered in the same way.

See [Modules](../modules/about.md) section for more information.
