---
id: provider
title: Falcon Payments Providers
sidebar_label: Providers
enterprise_only: true
---

Each payment provider should have it's own package. We created some simple `interfaces` to make integration easy!

## Payment Provider Interface

Every provider that runs through Falcon Paymemnts requires the following methods

```ts
export interface ProviderInterface {
  getAppliedSurcharge(method: string, inquiry: PaymentMethodSurchargeInquiry): null | Surcharge;
  getMethodList(payload: PaymentLoadPayload): Promise<PaymentMethodList>;
  loadMethod(method: string, payload: PaymentLoadPayload): Promise<PaymentMethodInstance>;
  validate(payload: PaymentValidationPayload, method?: string): Promise<PaymentValidationResult>;
}
```

### Get surchanges
`getAppliedSurcharge`

This method gets any surcharges applied for the payment method. To learn more about surcharges please see our [features documentation](features#surcharges).

#### Parameters
- method (`string`) - payment method code (e.g. paypal or creditcard)
- inquiry (`PaymentMethodSurchargeInquiry`) - { country: string; currency: string; total: number; }

#### Returns
This method with returns `null` or `Surcharge`

```ts
type Surcharge = {
  /** Total amount of the surcharge */
  amount: number;
  /** Fixed amount of the surcharge */
  fixed?: number;
  /** Percentage value of the surcharge */
  percentage?: number;
};
```

### Get methods
`getMethodList`

This method get the list of available payment methods from a provider.

#### Parameters
- payload (`PaymentLoadPayload`) 

```ts
type PaymentLoadPayload = {
  /** Order/cart ID */
  id: string;
  /** Cart grand total (excluding the payment surcharge) */
  total: number;
  /** Order currency */
  currency: string;
  /** Order Billing email */
  email: string;
  /** Billing country code used for billing, in [ISO_3166-1_alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format */
  country: string;
  /** Customer ID to be attached to the Payment Transaction */
  customerId?: string;
  /** Extra configuration data related to the payment method */
  data?: object;
};
```

#### Returns
This method returns an array of payment methods (`PaymentMethodList`)

```ts

type PaymentMethodList = Array<PaymentMethodInstance>;

type PaymentMethodInstance = {
  /**
   * The name of the payment service provider
   */
  provider: string;
  /**
   * A sub method identifier of the payment service
   */
  method: string;
  /**
   * Additional configuration
   */
  config?: {[key: string]: any};
  /**
   * A surcharge for this payment method for the specified country and currency
   */
  surcharge?: Surcharge;
};
```

### Load method
`loadMethod`

Load method is used to pass additional data from the payment provider to the client. Often this is authentication to allow the client to load some form of UI.

#### Parameters

- method (`string`)
- payload (`PaymentLoadPayload`)

#### Returns

- `PaymentMethodInstance`

```ts
type PaymentMethodInstance = {
  /**
   * The name of the payment service provider
   */
  provider: string;
  /**
   * A sub method identifier of the payment service
   */
  method: string;
  /**
   * Additional configuration
   */
  config?: {[key: string]: any};
  /**
   * A surcharge for this payment method for the specified country and currency
   */
  surcharge?: Surcharge;
};

```

### Validate Payment
`validate`

The validate method is called when the customer places an order (usually in the final step of a checkout). This method passes the order data to the payment provider and returns information about to proceed and make payment.

#### Parameters

- method (`string`)
- payload (`PaymentValidationPayload`)

```ts
type PaymentValidationPayload<T = object> = {
  /** The user's billing address */
  billingAddress: PaymentAddress;
  /** The user's shipment address */
  shippingAddress: PaymentAddress;
  /** The user's locale */
  locale: string;
  /** The total payment amount */
  total: TotalSummary;
  /** Cart (product) items */
  items: PaymentProduct[];
  /** An optional order reference number, will be equivalent to id if left out */
  orderReference?: string;
  /** Additional payment data - usually for data that is specific to that provider */
  data?: T;
} & Pick<PaymentLoadPayload, 'id' | 'customerId' | 'currency' | 'email'> ;

```

#### Returns

This method returns `PaymentValidationResult`. It has an optional parameter `intermediateStep`, this indicates if another step is needed (e.g. redirect to another page or make another request).

```ts
type PaymentValidationResult = {
  /**
   * [optional] External ID of the transaction to be stored on the shop backend
   */
  id?: string;
  /**
   * An additional step to be performed at the frontend
   */
  intermediateStep?: {
    /**
     * Issuer URL (target URL) for redirection
     */
    url: string;
    /**
     * HTTP method (GET or POST, get represents user redirect,
     * post represents sending data on the user's behalf)
     */
    method: 'GET' | 'POST';
    /**
     * The fields to send
     */
    fields?: { name: string; value?: string }[];
  };
};
```
