---
id: client
title: Extending the Talon.One client
sidebar_label: Client
---

# Client

import CodePackage from '@site/src/components/CodePackage';

<CodePackage name="@deity/falcon-talonone-module" />


The `TalonOneClient` is a wrapper around the Talon.One SDK where the correct project configuration is injected. It is mainly used by the `TalonOneDataSource` to make request. The `TalonOneClient` will return untouched data, straight from the Talon One API.

You can inject in any class you need;

```ts
import { inject, injectable } from 'inversify';
import type { TalonOneClient } from '@deity/falcon-talonone-module';
import type { CustomerProfile } from 'talon_one';

@Injectible()
export class MyCustomClass {
  constructor(@inject('TalonOneClient') protected client: TalonOneClient) {}

  getProfileById(id: string): Promise<CustomerProfile> {
    return this.client.integrationApi.getCustomerInventory(id, { profile: true });
  }
}
```
