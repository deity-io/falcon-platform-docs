---
id: module
title: Talon.One module
sidebar_label: Module
---

# Module

import CodePackage from '@site/src/components/CodePackage';

<CodePackage name="@deity/falcon-talonone-module" />


When you need to extend or change logic in the `@deity/falcon-talonone-module` we need to start with two thinks; First of all we need to create a custom module where we can bind our new code. Secondly to make Falcon Platform actually use this new code we also have to load it in the project by adjusting our `/config/default.json`.

## Creating custom TalonOne integration

We can create a new module easily like so;

```ts
import type { FalconModuleRegistryProps, GqlResolversMap, GraphQLContext } from '@deity/falcon-server-env';
import type { ShopHttpSession } from '@deity/falcon-shop-module';
import { TalonOneModule as FalconTalonOneModule } from '@deity/falcon-talonone-module';
import { CartPromotionMapper } from './CartPromotionMapper';
import { BeforeSignOutEventHandler } from './BeforeSignOutEventHandler';
import { TalonOneDataSource } from './talononeDatasource';

// We make sure TalonOneGraphQLContext uses our custom TalonOneDataSource instead of the default.
export type TalonOneGraphQLContext = GraphQLContext<{
  talonone: TalonOneDataSource;
}>;

export class TalonOneModuleModule extends FalconTalonOneModule {
  servicesRegistry(registry: FalconModuleRegistryProps) {
    super.servicesRegistry(registry);
    const { rebind, bind } = registry;

    // We can rebind our custom TalonOneDataSource, a class that extends the TalonOneDataSource
    // from `@deity/falcon-talonone-module` and add custom functionalities
    rebind('TalonOneDataSource').toDataSource(TalonOneDataSource);

    // We can bind (or rebind for that matter) a new event handler
    bind('BeforeSignOut').toEventHandler(BeforeSignOutEventHandler);

    // We can bind (or once again, rebind for that matter) a new mapper, which is a basic `@injectable()` class
    bind('CartPromotionMapper').to(CartPromotionMapper);
  }

  gqlResolvers(): GqlResolversMap<TalonOneGraphQLContext> {
    const resolvers: GqlResolversMap<TalonOneGraphQLContext> = {
      Query: {
        // When new queries/mutations are registerred in the schema, resolvers can be added like so.
        loyalty: (root, args, context): Promise<Loyalty> => {
          const { customerId } = context.container.get<ShopHttpSession>('ShopHttpSession');

          return context.dataSources.talonone.getCustomerLoyalty(customerId);
        }
      }
    };
  }
}

export type Loyalty = {
  orderCount: number;
  voucherValue: number;
};
```

### Configuration

To point Falcon Platform to our newly created talonone module we have to point it to our module file `./src/promotion/module/talonone` instead of `@deity/falcon-talonone-module`;

```json
{
  "modules": {
    "talonone": {
      "package": "./src/promotion/module/talonone",
      "enabled": true,
      "config": {
        "apiKey": "TALONONE_API_KEY",
        "basePath": "TALONONE_BASE_PATH",
        "referralCodeCampaignId": "TALONONE_REFERRAL_CODE_CAMPAIGN_ID"
      }
    }
  }
}
```
