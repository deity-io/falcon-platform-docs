---
title: Introduction
---

DEITY Falcon provides support for different Shop Payment methods,
the overall schema is shown on the image below:

[![Payment Flow](/img/opensource/payment-workflow.png)](/img/opensource/payment-workflow.png)
<span>Click to enlarge</span>

> If you would like to contribute and make your own changes to this flowchart - please check
> [Working with flowcharts](/docs/2019/support/flowcharts) page first.

The required GraphQL schema is being provided by
[`shop-extension`](/docs/2019/falcon-server/extensions#shop-extension) itself, meaning that your ApiDataSource that is assigned to ShopExtension has to take care of all payment-related operations.

## Placing an order

Whenever a visitor clicks on "__Place order__" button - the GraphQL Mutation request goes to your
ApiDataSource instance (usually it's a `placeOrder` method) to submit your order (including your "payment"
data as a part of the Mutation input) to the real shop backend (like Magento).

## Initial order placement on the backend

Please be aware that in some cases there might be several API requests needed to perform a complete order placement,
but from the GraphQL (Falcon-Server) perspective - it's still a single mutation, thus your `placeOrder` Mutation
has to return one of the following result types:

- `PlaceOrderSuccessfulResult` when the order was successfully placed for further processing and your
ApiDataSource returns `orderId` and `orderRealId` as a Mutation result
- `PlaceOrder3dSecureResult` when the payment requires additional validation/check from the Payment Gateway,
in this case - ApiDataSource returns a URL (where to redirect to), HTTP Method (`GET`/`POST`) and an optional
list of POST fields (in case of `POST` redirection) to be submitted to the specified URL

## Initial order placement on the frontend

Frontend behaves differently depending on the received result.

In case of `PlaceOrderSuccessfulResult` - it redirects you to `/checkout/confirmation` page to show the confirmation to
your visitor (`orderId` is going to be passed to `lastOrder` Query to get the contents of that order).

In case of `PlaceOrder3dSecureResult` - it redirects you to the returned `url` (external Payment Gateway) to proceed with the
required checks and validations to verify your payment (like 3d-secure bank card payments or PayPal log-in page).

## Payment Gateway callback

After getting a `PlaceOrder3dSecureResult` result, visitor is going to be redirected to the Payment Gateway URL to proceed
with the checks. It's important to keep the visitor within the same app - Falcon-Client, so any further "return callbacks" must
be done to this app domain. This means that our Falcon-Client application must be able to process such callback requests and for this
reason - we use [endpoints](/docs/2019/falcon-server/endpoints) feature (`Proxy Manager` in the diagram above) to proxy the whole callback
request from Falcon-Client to Falcon-Server and further to the actual shop backend.

> DEITY Falcon provides such endpoints
> for `@deity/falcon-magento2-api` package out-of-the-box to support PayPal and Adyen callback).

Whenever _Falcon-Server_ starts - it initializes all configured [`endpoints`](/docs/2019/falcon-server/endpoints) and exposes
them via web-server router to be publicly accessible. Later, whenever _Falcon-Client_ starts with a properly configured `onRouterCreated`
hook - it fetches all the exposed
endpoints that are needed to be proxied from the "frontend" to the "backend" and exposes them in the same way.

So, whenever our visitor "comes back" from the Payment Gateway back to our Falcon-Client with a payload response - our Falcon-Client
application is able to process the request and return a result status back to the visitor.

## Callback result check

The result of such "request proxy" is being returned from our Falcon-Server endpoint to the Falcon-Client with a specific status.
Based on that result - the visitor can be redirected to 3 options:

- `/checkout/confirmation` in case of a successful payment
- `/checkout/failure` if for some reason the payment transaction cannot be completed
- `/cart`  in case of "canceled" transaction
