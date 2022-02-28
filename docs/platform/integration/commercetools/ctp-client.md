---
id: ctp-client
title: commercetools ctpClient
sidebar_label: ctpClient
enterprise_only: true
---

// TODO
- [ ] ctpIntroduction
- [ ] Authentication methods
- [x] Customer apiRoot
- [x] Integration apiRoot

If you need to access `ctpClient` in a new class, don't forget to [bind your service](../../server-v3/modules/module-api#binding-services).

## ApiRoot
You can make use of the by commercetools provided [TypeScript SDK](https://commercetools.github.io/nodejs/sdk) trough the `apiRoot`. Our `ctpClient` provides two async methods to grab a pre configured `apiRoot` where all required project configuration, authorization and session refreshing is handled.

With the `integrationApiRoot` requests in name of the [commercetools project](https://docs.commercetools.com/merchant-center/projects) to commercetools could be made. Use this `apiRoot` for all requests where a signed in user is not required. To make requests in name of the customer the `customerApiRoot` can be used.

#### Authorization
Requests made to commercetools API are authenticated trough so called auth middlewares. In our `ctpClient` the [createAuthMiddlewareWithExistingToken](https://commercetools.github.io/nodejs/sdk/api/sdkMiddlewareAuth.html#createauthmiddlewarewithexistingtokenauthorization-options) middleware is used, where a `Bearer` token is set to the request header.

When using our preconfigured apiRoot you don't need to worry about authorization or customer session management.  Where `integrationApiRoot` creates a authentication token based on your [configured](./getting-started) `cliendId` and `clientSecret`, the `customerApiRoot` access the [ctpSession](./ctp-session) to get the customer token from session.

#### Authorization Token
When you don't need a full apiRoot but you do want access to integration or customer tokens you can also directly request them trough the `ctpClient`.

```typescript
const integrationToken = await this.ctpClient.getIntegrationToken();
const customerToken = await this.ctpClient.getCustomerToken();
```
:::caution
Altough you can also access the customerToken directly from the `ctpSession`, we stronly advice to use the asynchronous method as shown above. Only then you are sure the returned token is validated and refreshed when necessarily.
:::


### Integration apiRoot

#### Scopes
Our integration client only works correctly if the correct scopes has been assigned to it. Make sure you check the following when generating your accessToken in commerctools dashboard;
- `view_project_settings`
- `view_categories`
- `view_published_products`
- `view_products`
- `manage_orders`
- `manage_payments`
- `manage_customers`
- `view_customers`

#### Example
```ts
@injectable()
class ExampleIntegrationDatasource {
    constructor(@inject('CtpClient') protected ctpClient: CtpClient) {}

    async findById(id: string): Promise<CtpCategory> {
        const integrationApiRoot = await this.ctpClient.integrationApiRoot();
        const { body: category } = await integrationApiRoot
            .categories()
            .withId({ ID: id })
            .get()
            .execute();

        return category;
    }
}
```
## Customer apiRoot
When using `this.ctpClient.customerApiRoot()` you don't need to worry about refreshing sessions. Our `ctpClient` will refresh the `CtpAuthToken` when needed and store fresh token in our [session](./ctp-session).

#### Scopes
When a customer authenticates trough our middleware the follow set of scopes will be requested;
- `view_stores`
- `view_orders`
- `view_payments`
- `view_shopping_lists`
- `manage_my_profile`
- `manage_orders`
- `manage_customers`
- `manage_my_orders`
- `manage_my_payments`
- `manage_my_shopping_lists`

#### Example
A cart belongs to a customer, wheater this is a signedin customer or a guest filling his cart, we will interact with the API in the same way trough the `customerApiRoot`.

```ts
@injectable()
class ExampleCustomerDatasource {
    constructor(@inject('CtpClient') protected ctpClient: CtpClient) {}

    async myCart() {
        const customerApiRoot = await this.ctpClient.customerApiRoot();
        const { body: cart } = await customerApiRoot
            .me()
            .activeCart()
            .get()
            .execute();

        return cart;
    }
}
```