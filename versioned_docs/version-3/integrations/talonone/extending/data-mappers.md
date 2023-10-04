---
id: data-mappers
title: Data mappers
sidebar_label: Data mappers
---

import CodePackage from '@site/src/components/CodePackage';

<CodePackage name="@deity/falcon-talonone-module" />


Since the Falcon Middleware serves as an agnostic layer, incomming data from Talon.One API needs to be transformed in a format that is understood by `deity/falcon-promotion-extension` (and vice versa). A set of mapper classes are available to unify this process. Those mappers can be extended and partly overwritten.

:::note Overwriting existing mappers
Please be carefull with overwritting current mappers, both `deity/falcon-talonone-module` as `deity/falcon-promotion-extension` by default expects the data to be present in the current format.
:::

## Extending & overwriting mappers

At the moment in our `ReferralMapper` we expose 1 method, the `mapFromTalonOneReferral` method. This method will accept a TalonOne referral object and returns a Falcon Promotion referral object. In this example however, we don't have access to the raw referral data, but we do have access to te customerSession object. From there we can get the same data but we need to gather it a bit different.

```ts
import type { Referral, T1CouponEffect } from '@deity/falcon-promotion-extension';
import { ReferralMapper as FalconReferralMapper } from '@deity/falcon-talonone-module';
import { injectable } from 'inversify';
import type { Referral } from 'talon_one';

@injectable()
export class ReferralMapper extends FalconReferralMapper {
  mapFromTalonOneReferralEffect({ valueEffect, acceptEffect }: T1CouponEffect): Referral {
    return {
      code: acceptEffect.props.value,
      startAt: valueEffect.props.startDate,
      expiresAt: valueEffect.props.expiryDate
    };
  }
}
```

:::note Rebind ReferralMapper
When extending or overwriting existing modules we need to rebind the new instance, otherwise Falcon Platform will continue to use the shipped `ReferralMapper` instead of our custom implementation. For more info on rebinding please check our [Binding services docs](../../../server-v3/modules/module-api)
:::

### Available Mappers

Out of the box a set of mapper classes is available to use and extend. Each mapper has a set of methods, the `AddressMapper` for example has both a `mapToTalonOneShippingAddress` as a `mapToTalonOneBillingAddress` mapper. Please check TS files in our `deity/falcon-talonone-module` for the current available methods.

- AddressMapper
- CouponMapper
- ReferralMapper
- DiscountRuleMapper

:::note Missing Mappers
Are you missing a mapper? Simply create a new mapper class yourself and start using it inside your module.
:::
