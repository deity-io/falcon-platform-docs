---
id: datasource
title: Datasource
sidebar_label: Datasource
---

import CodePackage from '@site/src/components/CodePackage';

<CodePackage name="@deity/falcon-talonone-module" />


The `TalonOneDataSource` forms a bridge between TalonOne and the middleware. It has methods build in to manage CustomerProfile, CustomerSessions, couopons, referrals and events. You can use it as a place to create methods that abstract over the `TalonOneClient` requests. Keeping your code neat and DRY.

## Extending the TalonOneDataSource

For example, you might need to list customers reserved coupons on multiple locations in your middleware. You can extend the DataSource and implement your own methods.

```ts
import { inject, injectable } from 'inversify';
import { FalconTalonOneDataSource as TalonOneDataSource } from '@deity/falcon-talonone-module';
import type { TalonOneClient } from '@deity/falcon-talonone-module';
import type { CustomerProfile } from 'talon_one';

@Injectible()
export class TalonOneDataSource extends FalconTalonOneDataSource {
  constructor(@inject('TalonOneClient') protected client: TalonOneClient) {}

  async getCustomerCoupons(customerId: ID): Promise<InventoryCoupon[]> {
    const { coupons } = await this.client.integrationApi.getCustomerInventory(`${customerId}`, {
      coupons: true
    });

    return coupons;
  }
}
```

When the DataSource is extended it needs to be rebinded to the container before it can be used. Read more on rebinding modules here.
