---
id: ui-components
title: UI Components
sidebar_label: UI Components
---

We offer UI components for all supported payment methods and highly recommend you use them.

## UI packages

- `@deity/falcon-adyen-payment-ui`
- `@deity/falcon-humm-payment-ui`
- `@deity/falcon-mollie-payment-ui`
- `@deity/falcon-stripe-payment-ui`
- `@deity/falcon-wpay-payment-ui`

## Concepts

Different methods require different UI and in some cases require different interactions with our payment service.

Because of this we provide a `plugin` for each method. This is an object that contains various components and variables.

Where possible we try to use official packages from each provider to help with our client side integrations.

**example**

```
const CreditCardPaymentUIPlugin: PaymentPlugin = {
  Component: CreditCard,
  UIComponent: CreditCardUI,
  standalone: false
};
```

### Component

This is a React component that is used to wrap the payment UI. In most cases this is where most of the logic happens. Things like initiating `stripe` so it can be used for the UI further down the DOM.

### UIComponent

This is a React component that normally contains no logic but renders the UI itself. An example is in the Stripe credit card plugin. the `Component` loads stripe and the `UIComponent` is simply a `<CardElement>` component.

### standalone

`standalone` is a boolean variable and is used to signify if the methods UI is complete. An example is PayPal that has it's own button. In this case `standalone` would be `true`. For credit card methods that require a separate button to submit them, `standalone` would be `false`.

## Plugins

As described above, each supported method has an associated plugin. If stored methods are available then a `stored[MethodName]` plugin will exist for payment and a `setup[MethodName]` plugin will exist for storing the method.

**example (Stripe)**

- `card` (normal card form)
- `setupcard` (card form for saving a method outside of payments)
- `storedcard`(UI for a stored method)

## Usage

The best way to see how these components are used is to look in our demo apps.

### Loading a UI

We encourage the use of code splitting so only the required code is needed for the methods you're using.

We have a `loadable` method that can be used for this:

```jsx
const getPaymentMethodName = paymentMethod =>
  `${paymentMethod.__typename === 'StoredPaymentMethod' ? 'stored' : ''}${paymentMethod.method}`;

function getPaymentMethodPluginLoader(paymentMethod) {
  const name = getPaymentMethodName(paymentMethod);
  if (paymentMethod.provider === 'stripe') {
    return loadable.lib(() =>
      import(/* webpackChunkName: "payments/stripe-[request]" */ `@deity/falcon-stripe-payment-ui/dist/plugins/${name}`)
    );
  }
}

const PaymentMethodPluginLoader = useRef(getPaymentMethodPluginLoader(paymentMethod)).current;
```

### Rendering the UI

```jsx
<PaymentMethodPluginLoader>
  {pluginModule => {
    /** @type {import('@deity/falcon-payment-ui').PaymentPlugin} */
    const PaymentPlugin = pluginModule.default; // This is the plugin object described above
  }}
</PaymentMethodPluginLoader>
```

`PaymentPlugin` should contain `Component`, `UIComponent` & `standalone`.

```jsx
if (PaymentPlugin.standalone) {
  // standalone payment method
} else {
  // regular payment method
}
```

**Regular Methods**

```jsx
<PaymentPlugin.Component {...paymentMethod} submitting={isLoading} shouldStore={shouldStore}>
  {(pay, { loading: paying, disabled }) => (
    <>
      <Box>
        <CheckoutSelectedOption loading={deleteStoredPaymentMethodLoading}>
          <PaymentMethodHeading paymentMethod={paymentMethod} action={deleteStoredPaymentMethod} />
          {PaymentPlugin.UIComponent && (
            <>
              <PaymentPlugin.UIComponent mt="md" details={paymentMethod.details || {}} />
              <StorePaymentCheckbox
                shouldStore={shouldStore}
                setShouldStore={setShouldStore}
                isStorable={paymentMethod?.isStorable}
              />
            </>
          )}
        </CheckoutSelectedOption>
        <Button type="button" variant="textLink" onClick={changeMethod} mt="sm">
          <T id="checkout.changePaymentMethod" />
        </Button>
      </Box>
      <PaymentSummary />
      <FlexLayout flexDirection="column" mt="md" alignItems={{ xs: 'center', md: 'flex-start' }}>
        {/**  For Normal methods we have to render a submit button */}
        <NextStepButton
          variant="accent"
          disabled={!pay || disabled}
          onClick={() =>
            pay()
              .then(payResult => {
                setPaymentError(undefined);

                return placeOrderCallback(payResult);
              })
              .catch(x => {
                setPaymentError(x);
              })
          }
          loading={paying || isLoading}
        >
          <T id="checkout.placeOrder" />
        </NextStepButton>
        <ErrorSummary errors={placeOrderError || paymentError} mt="sm" />
      </FlexLayout>
```

**Stand Alone Methods**

```jsx
<CartQuery>
  {({ data: { cart } }) => {
    const { value: total } = cart.totals.find(t => t.code === 'grand_total');

    return (
      <PaymentPlugin.Component
        {...paymentMethod}
        submitting={isLoading}
        placeOrder={placeOrderCallback} // Place order mutation
        updatePayment={updatePayment} // Update payment mutation
        cancelPayment={paymentCancelledCallback}
        shouldStore={shouldStore}
        orderDetails={{ total, currency, country }}
      >
        <>
          <Box>
            <CheckoutSelectedOption loading={deleteStoredPaymentMethodLoading}>
              <PaymentMethodHeading paymentMethod={paymentMethod} action={deleteStoredPaymentMethod} />
              {PaymentPlugin.UIComponent && (
                <>
                  <PaymentPlugin.UIComponent mt="md" details={paymentMethod.details || {}} />
                  <StorePaymentCheckbox
                    shouldStore={shouldStore}
                    setShouldStore={setShouldStore}
                    isStorable={paymentMethod?.isStorable}
                  />
                </>
              )}
              <ErrorSummary errors={placeOrderError || paymentError} mt="sm" />
            </CheckoutSelectedOption>

            <Button type="button" variant="textLink" onClick={changeMethod} mt="sm">
              <T id="checkout.changePaymentMethod" />
            </Button>
          </Box>
          <PaymentSummary />
        </>
      </PaymentPlugin.Component>
    );
  }}
</CartQuery>
```
