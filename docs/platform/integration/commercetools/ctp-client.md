---
id: ctp-client
title: commercetools ctpClient
sidebar_label: ctpClient
enterprise_only: true
---

- The `ctpClient` provides us the service to make [authenticated](https://docs.commercetools.com/api/authorization) requests to commercetools
We communicate with commercetools trough the [typescript SDK](https://commercetools.github.io/nodejs/sdk/) provided by commercetools.
- Our ctpClient offers 2 ways to communicate with commercetools; in name of the customer or in name of the integration (machine 2 machine).

### Authorization
- We use the createAuthMiddlewareWithExistingToken for both integration as customer requests - https://commercetools.github.io/nodejs/sdk/api/sdkMiddlewareAuth.html#createauthmiddlewarewithexistingtokenauthorization-options

If you need to access `ctpClient` in a new class, don't forget to [bind your service](../../server-v3/modules/module-api#binding-services).


## Integration apiRoot
For requests to commercetools 

### Integration scopes
Our integration client only works correctly if the correct scopes has been assigned to it. Make sure you check the following when generating your accessToken in commerctools dashboard;
- `view_project_settings`
- `view_categories`
- `view_published_products`
- `view_products`
- `manage_orders`
- `manage_payments`
- `manage_customers`
- `view_customers`

### Example commercetools SDK request as integration
```ts
@injectable()
class ExampleCatalogDatasource {
    constructor(@inject('CtpClient') protected ctpClient: CtpClient) {
        // By injecting CtpClient in our constructor we now have access to
        // it within the scope of our ExampleCartDatasource

        // Make sure ExampleCartDatasource is binded to dependency container trough module 
    }

    async findById(id: string): Promise<CtpCategory> {
        // To get the category in name of the integration (machine to machine)
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
When using `this.ctpClient.customerApiRoot()` you don't need to worry about refreshing sessions. Our `ctpSession` will refresh the `CtpAuthToken` and update it in our [session](./ctp-session).

### Customer scopes
When a customer authenticates trough our middleware client the follow set of scopes will be set;
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

### Example commercetools SDK request as customer
```ts
@injectable()
class ExampleCartDatasource {
    constructor(@inject('CtpClient') protected ctpClient: CtpClient) {
        // By injecting CtpClient in our constructor we now have access to
        // it within the scope of our ExampleCartDatasource

        // Make sure ExampleCartDatasource is binded to dependency container
    }

    async findById(id: string) {
        // To get the cart in name of the customer
        const customerApiRoot = await this.ctpClient.customerApiRoot();
        const { body: cart } = await customerApiRoot
            .me()
            .carts()
            .withId({ ID: cartId })
            .get()
            .execute();

        return cart;
    }
}
```